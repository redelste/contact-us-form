const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2')
dotenv.config();

const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));



app.post('/send', (req, res) => {
    try {

        const mailOptions = {
            from: req.body.email,
            to: process.env.email,
            subject: req.body.subject,
            html: req.body.message,
            auth: {
                user: process.env.email,
                refreshToken: process.env.GMAIL_AUTH_REFRESH_TOKEN,
                accessToken: process.env.GMAIL_AUTH_ACCESS_TOKEN,
                expires: 3599
            }
        };

        transporter.sendMail(mailOptions, (err, info) => {
            console.log(res)
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Something went wrong. Try again later'
                });
            } else {
                res.send({
                    success: true,
                    message: 'Thanks for contacting us. We will get back to you shortly'
                });
            }
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later'
        })
    }

});

app.listen(3030, () => {
    console.log('server start on http://localhost:3030')
})