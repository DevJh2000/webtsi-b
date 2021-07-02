const nodemailer = require("nodemailer");
const { otGooglePws, otGoogleUser, otEmail } = require("../config/settings");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: otGoogleUser, // generated ethereal user
    pass: otGooglePws, // generated ethereal password
  },
});
const email = otEmail;

transporter
  .verify()
  .then(() => {
    return console.log("listo para enviar emails");
  })
  .catch((e) => {
    console.log("algo saliomal :(   ERROR:", e);
  });
module.exports = {
  transporter,
  email,
};
