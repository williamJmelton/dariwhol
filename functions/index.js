const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
var exphbs  = require('express-handlebars');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

exports.newCustomer = functions.firestore
  .document('newCustomers/{customer}')
  .onCreate((snap, context) => {
    // send email here
    console.log('New Customer: ', snap.data().storeName, ' - Located in: ', snap.data().address.city);
    let transporter = nodemailer.createTransport({
      host: 'server110.webhostingbuzz.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'josh@dariwholesales.com', // generated ethereal user
        pass: 'ChiChi617$' // generated ethereal password
      }
    });

    let options = {
      viewEngine: exphbs,
      viewPath: ''
    };

    transporter.use('compile', hbs(options));
// setup email data with unicode symbols
    let mailOptions = {
      from: '"Dari Wholesales" <josh@dariwholesales.com>', // sender address
      to: 'josh@dariwholesales.com, williamjmelton617@gmail.com', // list of receivers
      subject: 'Account Confirmation ✔', // Subject line
      text: 'Welcome to Dari Wholesales!', // plain text body
      template: 'email',
      context: snap.data()
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
    return 'All Good!';
  });
