const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: '"AcademyX"<academyx17@gmail.com>',
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;

// const nodemailer = require("nodemailer");

// // Create a transporter object
// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "your-email@gmail.com",
//     pass: "your-email-password",
//   },
// });

// // Setup email data with unicode symbols
// let mailOptions = {
//   from: '"Google" <your-email@gmail.com>', // This is where you set the display name
//   to: "recipient@example.com",
//   subject: "Your OTP Code",
//   text: "Your OTP code is 123456",
//   html: "<b>Your OTP code is 123456</b>",
// };

// // Send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log("Message sent: %s", info.messageId);
// });
