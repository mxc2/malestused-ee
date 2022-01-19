const express = require('express')
const mongoose = require('mongoose')
let bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000 
var cors = require('cors');
const jwtAuth = require("./middleware/jwtAuth")
require("dotenv").config()


const imageRoutes = require('./routes/image.route')
const authRoutes = require('./routes/auth')
const orderRoutes = require('./routes/collageOrder.route')

const dpdRoute = require('./routes/dpd')
const itellaRoute = require('./routes/itella')
const omnivaRoute = require('./routes/omniva')

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())

app.use(express.json());



app.use('/public', express.static('public'));

app.use('/endpoint', imageRoutes)

app.use('/api/order', orderRoutes);


app.use('/api/auth', authRoutes);


app.use('/service', dpdRoute);
app.use('/service', itellaRoute);
app.use('/service', omnivaRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/secret', jwtAuth, (req, res) => {
  res.send('Secret Hello World!')
})

app.get('*', (req, res) => {
  res.send('This route does not exist')
})

app.use((req, res, next) => {
  setImmediate(() => {
      next(new Error('Error occured'));
  });
});


mongoose.Promise = global.Promise
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })