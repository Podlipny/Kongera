const express      = require('express');
const bodyParser   = require('body-parser');

const app    = express();
const port   = process.env.PORT || 3000;

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
    console.log(req.body);
    // userRepo.insertUser(req.body, (err, user) => {
    //   if (err) {
    //     log.error('*** userRepo.insertUser error: ' + util.inspect(err));
    //     res.json({status: false, error: 'Insert failed', user: null});
    //   } else {
    //     log.trace('*** insertUser ok');
    //     res.json({ status: true, error: null, user: user });
    //   }
    // });
  }
}

let server = new Server();