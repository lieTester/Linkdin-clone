const nodemailer = require("nodemailer");
const { generateOTP } = require("./utilFunctions");

exports.mailit = (email) => {
   try {
      const OTP = generateOTP();
      const transporter = nodemailer.createTransport({
         service: "gmail",
         host: process.env.EMAIL_HOST,
         port: process.env.EMAIL_PORT,
         secure: true, // true for 465, false for other ports
         auth: {
            user: process.env.EMAIL_ID, // generated ethereal user
            pass: process.env.EMAIL_PW, // generated ethereal password
         },
      });
      const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>OTP Verification</title>
         <style>
            body {
               font-family: Arial, sans-serif;
               background-color: #f4f4f4;
               color: #333333;
               margin: 0;
               padding: 0;
            }
            .container {
               width: 100%;
               max-width: 600px;
               margin: 0 auto;
               padding: 20px;
               background-color: #ffffff;
               border-radius: 8px;
               box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            h1 {
               color: #4CAF50;
               font-size: 24px;
            }
            .otp {
               font-size: 36px;
               font-weight: bold;
               color: #4CAF50;
               letter-spacing: 4px;
               margin: 20px 0;
            }
            .message {
               font-size: 16px;
               line-height: 1.6;
               margin: 20px 0;
            }
            .footer {
               font-size: 12px;
               color: #777;
               margin-top: 20px;
            }
         </style>
      </head>
      <body>
         <div class="container">
            <h1>Verify Your Email</h1>
            <p class="message">
               Hello, <br>
               Please use the following One-Time Password (OTP) to verify your email address. This code will expire in 10 minutes.
            </p>
            <div class="otp">${OTP}</div>
            <p class="message">
               If you did not request this, please ignore this email.
            </p>
            <p class="footer">
               Thank you,<br>
               The [Your Company Name] Team
            </p>
         </div>
      </body>
      </html>
    `;
      const option = {
         from: process.env.EMAIL_ID, // sender address
         to: email,
         subject: "Verification OTP", // Subject line
         html: htmlContent,
      };
      return { transporter, OTP, option };
   } catch (error) {
      return null;
   }
   // send mail with defined transport object
};
