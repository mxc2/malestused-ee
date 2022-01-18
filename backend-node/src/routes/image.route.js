//

let express = require('express');
let mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
let multer = require('multer');
let router = express.Router();

const DIR = './public/';
let File = require('../models/Image');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});


var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('File type not accepted (.png, .jpg, .jpeg)'));
        }
    }
});

router.post('/multi-images-upload', upload.array('imgCollection', 8), (req, res, next) => {
    const reqFiles = [];

    const url = req.protocol + '://' + req.get('host')

    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/public/' + req.files[i].filename)
    }

    const img_user = new File({
        _id: new mongoose.Types.ObjectId(),
        imgCollection: reqFiles
    });

    img_user.save().then(result => {
        res.status(201).json({
            message: "Uploaded!",
            img_userCreated: {
                _id: result._id,
                imgCollection: result.imgCollection
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})

router.get("/", (req, res, next) => {
    File.find().then(response => {
        res.status(200).json({
            message: "Images fetched!",
            posts: response
        });
    });
});

module.exports = router;