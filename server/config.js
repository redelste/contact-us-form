const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
const xoauth2 = require('xoauth2')
dotenv.config();


var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'Gmail',
    auth: {
            type: process.env.GMAIL_AUTH_TYPE,
            user: process.env.email,
            pass: process.env.password,
            clientId: process.env.GMAIL_AUTH_CLIENT_ID,
            clientSecret: process.env.GMAIL_AUTH_CLIENT_SECRET,
    }
});
module.exports = transporter;