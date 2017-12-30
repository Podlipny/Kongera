const express      = require('express');
const bodyParser   = require('body-parser');

const app    = express();
const port   = process.env.PORT || 3000;

const nodemailer = require("nodemailer");

class Server {
  constructor() {
    this.initExpressMiddleWare();
    this.initRoutes();
    this.start();
  }

  initExpressMiddleWare() {
    app.use(express.static(__dirname + "/public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));

    process.on("uncaughtException", err => {
      if (err) 
        console.log(err, err.stack);
    });
  }

  initRoutes() {
    var router = express.Router();

    router.get('*', this.getIndex.bind(this));
    router.post('/contact', this.sendMail.bind(this));
    
    app.use(router);
  }

  start() {
    app.listen(port, err => {
      console.log('[' + process.env.NODE_ENV + ']' + 'Listening on http://localhost:' + port);
    });
  }

  // returns index.html - kongera website
  getIndex(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  }

  // send mail from client
  // pozor musi se nastavit enable less secure apps v Gmail
  sendMail(req, res) {
    const confirmation = '<b>Potvrzujeme přijetí vaší zprávy. V nejbližší době Vám odpovíme.</b><br\><br\>';

    const name = '<b>Jmeno</b>: ' + req.body.name + '<br\>';
    const email = '<b>email</b>: ' + req.body.email + '<br\>';
    const phone = '<b>phone</b>: ' + req.body.phone + '<br\>';
    const message = '<b>message</b>: ' + req.body.message + '<br\>';

    var smtpTransport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "info@kongera.com",
        pass: process.env.EMAILPASS || "**********"
      }
    });

    var mailOptions = {
      from: req.body.email,
      to: 'info@kongera.com,',
      subject: 'Kongera message from: ' + req.body.email,
      html: name + email + phone + message
    };

    var confirmationMailOptions = {
      from: 'info@kongera.com',
      to: req.body.email,
      subject: 'Kongera.com potvrzení zprávy.',
      html: confirmation + name + email + phone + message
    };

    smtpTransport.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent!");
      }
    });
    smtpTransport.sendMail(confirmationMailOptions, function (error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log("Confirmation sent!");
      }
    });

    smtpTransport.close();
  }

}

let server = new Server();
