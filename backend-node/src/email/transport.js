const nodemailer = require("nodemailer");

const smtp = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  secure: false,
  auth: {
    user: "petmargen007929123@gmail.com", // sendinblue creds
    pass: "CI2gxcbq9z3yZp5V", // sendinblue creds
  },
});

const message = {
  from: 'elonmusk@tesla.com',
  to: 'tewere7330@oglerau.com',
  subject: 'Design Your Model S | Tesla',
  html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>'
};
smtp.sendMail(message, function(err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info);
  }
});