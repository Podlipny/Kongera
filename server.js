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

    router.get('/', this.getIndex.bind(this));
    router.post('/contact', this.sendMail.bind(this));
    
    app.use(router);
  }

  start() {
    app.listen(port, err => {
      console.log('[' + process.env.NODE_ENV + ']' + 'Listening on http://localhost:' + port);
    });
  }

  // router methods

  // returns index.html - kongera website
  getIndex(req, res) {
    res.sendfile('../public/index.html');
  }

  // send mail from client
  sendMail(req, res) {
    const sendmail = require('sendmail')({
      logger: {
        debug: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error
      },
      silent: false
    });
    
    sendmail({
      from: 'no-reply@yourdomain.com',
      to: 'ji.podlipny@gmail.com',
      subject: 'test sendmail',
      html: 'Mail of test sendmail ',
    }, function(err, reply) {
      console.log(err && err.stack);
  });
  //     var smtpTransport = nodemailer.createTransport({
  //     service: "gmail",
  //     host: "smtp.gmail.com",
  //     auth: {
  //       user: "ji.podlipny@gmail.com",
  //       pass: ""
  //     }
  //   });

  //   var mailOptions = {
  //     to: 'ji.podlipny@gmail.com',
  //     subject: 'Kongera message',
  //     text: req.body.message
  //   };

  //   smtpTransport.sendMail(mailOptions, function (error, response) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("Message sent: " + response.message);
  //     }
  //   });
  }
}

let server = new Server();
