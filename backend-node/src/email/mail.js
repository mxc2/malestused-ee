import nodemailer from 'nodemailer';

const smtp = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  secure: false,
  auth: {
    user: "petmargen007929123@gmail.com", // sendinblue creds
    pass: "CI2gxcbq9z3yZp5V", // sendinblue creds
  },
});

export default (options = {}) => {
  return smtp.sendMail(options);
}