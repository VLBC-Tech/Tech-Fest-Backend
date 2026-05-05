// const nodemailer = require("nodemailer");

// // Create a transporter using SMTP
// const transporter = nodemailer.createTransport({
//   host: "smtp.example.com",
//   port: 587,
//   secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (options) => {
  try {
    const msg = {
      to: options.email,
      from: process.env.EMAIL_FROM, // must be verified
      subject: options.subject,
      //   text: options.message,
      html: options.html, // optional
    };

    await sgMail.send(msg);
  } catch (err) {
    throw err;
  }
};

module.exports = sendEmail;
