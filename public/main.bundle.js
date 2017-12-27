webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* --------------------------------------------- */\r\n/* Header section */\r\n/* --------------------------------------------- */\r\n\r\n#header-section {\r\n  height: 100vh;\r\n  background: #beaec0; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to right, #beaec0 0%,#7b7c8d 50%,#2d4050 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#beaec0', endColorstr='#2d4050',GradientType=1 ); /* IE6-9 */\r\n}\r\n\r\n#header-section .right-grad {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;  \r\n  -webkit-box-pack: center;  \r\n      -ms-flex-pack: center;  \r\n          justify-content: center;\r\n  overflow: hidden;\r\n  float: right;\r\n  height: 100vh;\r\n  width: calc(50% - 0px);\r\n  background: #ef98a1; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to right, #ef98a1 0%,#eeb3a2 50%,#eecca3 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ef98a1', endColorstr='#eecca3',GradientType=1 ); /* IE6-9 */\r\n}\r\n\r\n.wrap{\r\n  overflow: hidden;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.content-wrap{\r\n  overflow: hidden;\r\n  position: absolute;\r\n  height: 100vh;\r\n  width: 100%;\r\n}\r\n.center-content{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;  \r\n  -webkit-box-pack: center;  \r\n      -ms-flex-pack: center;  \r\n          justify-content: center;\r\n}\r\n\r\n.middleBorder {\r\n  height: 100vh;\r\n  width: calc(50% + 1px);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;  \r\n  -webkit-box-pack: center;  \r\n      -ms-flex-pack: center;  \r\n          justify-content: center;\r\n  overflow: hidden;\r\n  float: right;\r\n  border-left: 2px solid #ffffff;\r\n}\r\n\r\n.content-wrap-80vh{\r\n  width: 100%;\r\n  height: 70vh;\r\n  max-height: 1000px;\r\n}\r\n\r\n#scene-left {\r\n  display: block;\r\n  height: 80%;  \r\n  /* zoom: 0.7;\r\n  -moz-transform: scale(0.7); */\r\n}\r\n#scene-middle {\r\n  display: block;\r\n  height: 80%;\r\n  /* zoom: 0.7;\r\n  -moz-transform: scale(0.7); */\r\n}\r\n#scene-right {\r\n  display: block;\r\n  height: 80%;\r\n  /* zoom: 0.7;\r\n  -moz-transform: scale(0.7); */\r\n}\r\n\r\n#scene-left .plantImgWrap{\r\n  left: calc(15% - 183px) !important;\r\n  top: -28% !important;\r\n}\r\n#scene-left .plantImg{\r\n  width: 366px;\r\n  height: 258px;\r\n  background-image: url('/assets/plant.png');  \r\n}\r\n#scene-left .imacImgWrap{\r\n  left: calc(50% - 346px) !important;\r\n  margin: 0px 0px 0px 0px;\r\n}\r\n#scene-right .imacImgWrap{\r\n  left: calc(0% - 346px) !important;\r\n  margin: 0px 0px 0px 0px;\r\n}\r\n#scene-left .imacImg{\r\n  width: 699px;\r\n  height: 209px;\r\n  background-image: url('/assets/iMac_left.png');\r\n}\r\n#scene-right .imacImg{\r\n  width: 699px;\r\n  height: 209px;\r\n  background-image: url('/assets/iMac_right.png');\r\n}\r\n\r\n#scene-left .glassesImgWrap{\r\n  left: calc(30% - 45px) !important;\r\n  top: 60% !important;\r\n}\r\n#scene-left .glassesImg{\r\n  width: 99px;\r\n  height: 99px;\r\n  background-image: url('/assets/eyeglasses.png');\r\n}\r\n\r\n#scene-middle .mouseImgWrap{\r\n  left: calc(65% - 42px) !important;\r\n  top: 50% !important;  \r\n}\r\n#scene-middle .mouseImg{\r\n  width: 85px;\r\n  height: 102px;\r\n  background-image: url('/assets/mouse.png');\r\n}\r\n\r\n#scene-middle .keyboardImgWrap{\r\n  left: calc(50% - 122px) !important;\r\n  top: 45% !important;\r\n}\r\n#scene-middle .keyboardImg{\r\n  width: 243px;\r\n  height: 119px;\r\n  background-image: url('/assets/keyboard.png');\r\n}\r\n#scene-middle .logoWrap {\r\n  left: calc(50% - 244px) !important;\r\n  top: 70% !important;\r\n}\r\n\r\n@media (max-width: 765px) { \r\n  #header-section {\r\n    width: 200%;\r\n    margin-left: -50%;\r\n    margin-bottom: -200px;\r\n    /* height: calc(100vh + 220px);     */\r\n    /* padding: 220px 0px 0px 0px; */\r\n    -webkit-transform: scale(0.55);\r\n            transform: scale(0.55);\r\n\r\n    /* zoom: 0.55;\r\n    -moz-transform: scale(0.55); */\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) { \r\n  #header-section {\r\n    /* height: calc(100vh + 340px);\r\n    padding: 340px 0px 0px 0px; */\r\n    width: 290%;\r\n    height: calc(100vh + 100px);\r\n    margin-left: -95%;\r\n    margin-bottom: -250px;\r\n\r\n    /* height: calc(100vh + 220px);     */\r\n    /* padding: 220px 0px 0px 0px; */\r\n    -webkit-transform: scale(0.35);\r\n            transform: scale(0.35);\r\n  }\r\n\r\n  .content-wrap {\r\n    height: calc(100vh + 100px);\r\n  }\r\n\r\n  .content-wrap-80vh {\r\n    height: calc(70vh + 100px);\r\n  }\r\n\r\n  .right-grad {\r\n    height: calc(100vh + 100px) !important;\r\n  }\r\n\r\n  .middleBorder {\r\n    height: calc(100vh + 100px);\r\n  }\r\n\r\n  #scene-middle .mouseImgWrap{\r\n    left: calc(75% - 42px) !important;\r\n  }\r\n\r\n  #scene-left .glassesImgWrap{\r\n    left: calc(20% - 45px) !important;\r\n    top: 60% !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1600px) { \r\n  #scene-left .glassesImgWrap{\r\n    left: calc(35% - 45px) !important;\r\n  }\r\n}\r\n\r\n\r\n/* --------------------------------------------- */\r\n/* About section */\r\n/* --------------------------------------------- */\r\n\r\n#about {\r\n  text-align: center;\r\n}\r\n\r\n.about-content {\r\n  padding: 180px 0px 180px 0px;\r\n  font-family: 'roboto';\r\n  font-weight: normal;\r\n  font-size: 18px;\r\n  line-height: 29px;\r\n  color: #6f7c82;\r\n}\r\n\r\n@media (max-width: 765px) { \r\n  .about-content {\r\n    padding: 80px 0px 80px 0px;\r\n  }\r\n}\r\n\r\n.about-content h2{\r\n  margin: 28px 0px 72px 0px;\r\n  width: 100%;\r\n  font-family: 'roboto';\r\n  font-weight: 500;\r\n  font-size: 32px;\r\n  line-height: 44px;\r\n  color: #292e31;\r\n}\r\n\r\n.about-content .red-light-bulb {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;  \r\n  -webkit-box-pack: center;  \r\n      -ms-flex-pack: center;  \r\n          justify-content: center;\r\n  border-radius: 4px;\r\n  width: 65px;\r\n  height: 65px;\r\n  background-color: #c80303;\r\n}\r\n\r\n.about-content .red-light-bulb img {\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center\r\n}\r\n\r\n.about-content mark{\r\n  background-color: transparent;\r\n  font-family: 'roboto';\r\n  font-weight: 500;\r\n  color: #6f7c82;\r\n}\r\n\r\n/* --------------------------------------------- */\r\n/* Contact section */\r\n/* --------------------------------------------- */\r\n#contact {\r\n  position: absolute;\r\n  background-color: #f5f7f9;\r\n  width: 100%;\r\n}\r\n\r\n.contact-icon {\r\n  position: relative;\r\n  left: calc(50% - 32px);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;  \r\n  -webkit-box-pack: center;  \r\n      -ms-flex-pack: center;  \r\n          justify-content: center;\r\n  border-radius: 4px;\r\n  margin: -32px 0px 0px 0px;  \r\n  padding: 0px 0px 0px 7px;\r\n  width: 65px;\r\n  height: 65px;\r\n  background-color: #414159;\r\n}\r\n\r\n.contact-icon img {\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center\r\n}\r\n\r\n.contact-contect {\r\n  color: #6f7c82;\r\n  font-family: 'roboto';\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 18px;\r\n  line-height: 28px;\r\n  padding: 30px 0px 50px 0px;\r\n}\r\n\r\n.contact-contect h2{\r\n  font-family: 'roboto';\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  font-size: 74px;\r\n  line-height: 100px;\r\n  color: #00263b;\r\n  margin: 0px 0px 73px 0px;\r\n}\r\n\r\n.contact-contect h3 {\r\n  color: #00263b;\r\n  text-align: center;\r\n  font-family: 'roboto';\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  font-size: 18px;\r\n  line-height: 24px;\r\n}\r\n\r\n.contact-contect h4 {\r\n  text-align: center;\r\n  font-family: 'roboto';\r\n  font-weight: 300;\r\n  font-style: italic;\r\n  font-size: 18px;\r\n  line-height: 28px;\r\n  margin: 6px 0px 0px 0px;\r\n}\r\n\r\n.contact-contect label {\r\n  font-family: 'roboto';\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #eceff1;\r\n}\r\n\r\n.contact-contect .form{\r\n  padding: 60px 0px 0px 0px;\r\n}\r\n\r\n.contact-contect .splitter {\r\n  display: block;\r\n  background-color: #00263b;\r\n  margin: 0 auto;\r\n  width: 150px;\r\n  height: 1px;\r\n}\r\n\r\n.contact-right-bg {\r\n  position: absolute;  \r\n  display: block;\r\n  left: 50%;\r\n  width: 50%;\r\n  height: 100%;\r\n  background-color: #484863;\r\n}\r\n\r\n/* Contact - Input part */\r\ninput,\r\ntextarea,\r\n[contenteditable] {\r\n  caret-color: #eceff1;\r\n}\r\n\r\ninput, textarea {\r\n  font-family: 'roboto';\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  border-radius: 0px;\r\n  border-color: #9b9ba8;\r\n  background-color: #414159;\r\n  color: #eceff1;\r\n}\r\n\r\ninput:focus, textarea:focus {\r\n  color: #eceff1;\r\n  border-radius: 0px;\r\n  background-color: #414159;\r\n  border-color: #9b9ba8;\r\n  opacity: 0.8;\r\n}\r\n\r\n.textarea-container {\r\n  background-color: #414159;\r\n}\r\n\r\ntextarea {\r\n  display: block;\r\n  z-index: auto; \r\n  position: relative; \r\n  transition: none;\r\n  line-height: 22.5px; \r\n  font-size: 15px; \r\n  background: transparent !important;\r\n}\r\n\r\n/* Contact - text part */\r\n.contact-contect table {\r\n  display: block;\r\n  width: 280px;\r\n  padding: 40px 0px 90px 0px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.contact-contect tr{\r\n  height: 40px;\r\n}\r\n\r\n.contact-contect tr td img {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin: 0 auto;\r\n  padding: 0px 20px 0px 0px;\r\n}\r\n\r\n/* Contact - Button part */\r\n.contact-contect .button {\r\n  font-family: 'roboto';\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  float: left;\r\n  border: 1px #9b9ba8 solid;\r\n  width: 160px;\r\n  height: 40px;\r\n  margin: 30px 0px 0px 0px;\r\n\tdisplay: block;\r\n\tbackground: none;\r\n  color: #eceff1;\r\n  cursor: pointer;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\t-webkit-backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale; /* Safari */\r\n  transition: width 2s;\r\n}\r\n.contact-contect .button:focus {\r\n\toutline: none;\r\n}\r\n\r\n.contact-contect .button:active {\r\n  border: 2px #9b9ba8 solid;\r\n}\r\n\r\n.contact-contect .button-animation {\r\n\ttransition: border-color 0.4s, color 0.4s;\r\n}\r\n.contact-contect .button-animation::before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: #414159;\r\n\tz-index: -1;\r\n\topacity: 0;\r\n\t-webkit-transform: scale3d(0.7, 1, 1);\r\n\ttransform: scale3d(0.7, 1, 1);\r\n\ttransition: opacity 0.4s, -webkit-transform 0.4s;\r\n\ttransition: transform 0.4s, opacity 0.4s;\r\n\ttransition: transform 0.4s, opacity 0.4s, -webkit-transform 0.4s;\r\n\ttransition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\r\n}\r\n.contact-contect .button-animation,\r\n.contact-contect .button-animation::before {\r\n\ttransition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\r\n}\r\n.contact-contect .button-animation:hover {\r\n\tcolor: #fff;\r\n\tborder-color: #9b9ba8;\r\n}\r\n.contact-contect .button-animation:hover::before {\r\n\topacity: 1;\r\n\t-webkit-transform: translate3d(0, 0, 0);\r\n\ttransform: translate3d(0, 0, 0);\r\n}\r\n\r\n.contact-contect button:disabled,\r\n.contact-contect button:disabled::before,\r\n.contact-contect button[disabled]{\r\n  opacity: 0.5;\r\n  background: transparent;  \r\n}\r\n\r\n.contact-contect .invalid-feedback {\r\n  background-color: #484863;\r\n  margin-top: 0px;\r\n  color: #c80303  \r\n}\r\n\r\n/* Contact - Media part */\r\n@media (max-width: 765px) { \r\n  .contact-icon {\r\n    display: none;\r\n  }\r\n\r\n  .contact-contect h2{\r\n    font-size: 44px;\r\n    line-height: 70px;\r\n    margin: 0px 0px 43px 0px;\r\n  }\r\n\r\n  .contact-right-bg {\r\n    display: none;\r\n  }\r\n\r\n  .contact-contect .form {\r\n    width: 100% !important;\r\n    padding: 20px 20px 0px 20px;    \r\n    margin: -20px 0px 20px 0px;\r\n    background-color: #484863;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"container display-flex\">\r\n    <div class=\"row\">\r\n      <h2>\r\n        <a href=\"\">\r\n          <img src=\"../assets/kongera_small_logo.png\" alt=\"Kongera\" />\r\n        </a>\r\n      </h2>\r\n      <nav>\r\n        <ul>\r\n          <li (click)=\"ScroolOnClick('about')\">\r\n            <img src=\"../assets/light_bulb_red.png\" alt=\"About us\" />\r\n            <a>About</a>\r\n          </li>\r\n          <li (click)=\"ScroolOnClick('contact')\">\r\n            <img src=\"../assets/contact_red.png\" alt=\"Contact us\" />\r\n            <a>Contact</a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<section id=\"header-section\">\r\n  <!-- 1nd scene -->\r\n  <div class=\"content-wrap center-content\">\r\n    <div class=\"content-wrap-80vh\">\r\n      <span id=\"scene-left\">\r\n        <div data-depth-x=\"0.10\" class=\"plantImgWrap\">\r\n          <div class=\"plantImg\"></div>\r\n        </div>\r\n\r\n        <div data-depth-x=\"0.60\" class=\"glassesImgWrap\">\r\n          <div class=\"glassesImg animated rollIn\"></div>\r\n        </div>\r\n\r\n        <div data-depth-x=\"0.40\" class=\"imacImgWrap\">\r\n          <div class=\"imacImg animated slideInDown\"></div>\r\n        </div>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- 2nd scene -->\r\n  <div class=\"content-wrap\">\r\n    <div class=\"animated slideInRight right-grad\">\r\n      <div class=\"content-wrap-80vh\">\r\n        <span id=\"scene-right\">\r\n          <div data-depth-x=\"0.80\" class=\"imacImgWrap\">\r\n            <div class=\"imacImg animated iMacDesignSlideInDown\"></div>\r\n          </div>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- 3rd scene -->\r\n  <div class=\"content-wrap center-content\">\r\n    <span id=\"scene-middle\">\r\n\r\n      <div data-depth-x=\"0.40\" class=\"keyboardImgWrap\">\r\n        <div class=\"keyboardImg animated rollInBottom\"></div>\r\n      </div>\r\n\r\n      <div data-depth-x=\"0.80\" class=\"mouseImgWrap\">\r\n        <div class=\"mouseImg animated rollInRight\"></div>\r\n      </div>\r\n\r\n      <div data-depth-x=\"0.40\" class=\"logoWrap\">\r\n        <h1>\r\n          <a href=\"\" class=\"animated zoomIn\">\r\n            <img src=\"../assets/kongrea_big_logo.png\" alt=\"Kongera\" />\r\n          </a>\r\n        </h1>\r\n      </div>\r\n    </span>\r\n  </div>\r\n\r\n  <!-- Middle white border -->\r\n  <div class=\"content-wrap\">\r\n    <span class=\"animated slideInRight middleBorder\"></span>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"about\">\r\n  <div class=\"container about-content\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"red-light-bulb\">\r\n        <img src=\"../assets/light_bulb.png\" alt=\"About us\" />\r\n      </div>\r\n      <h2>O společnosti Kongera</h2>\r\n      <p class=\"col-9\">Spoločnosť\r\n        <mark>Kongera</mark> ponúka rozmanité riešenia v oblasti\r\n        <mark>IT technológií</mark>. Špecializujeme sa na vývoj\r\n        <mark>softwaru na mieru, vývoj mobilných aplikácii, spravovanie sietí, dodanie a správu hardwaru</mark> podľa požiadaviek\r\n        klienta. Sme tím, ktorý prichádza s inovatívnymi a flexibilnými riešeniami pre rozvoj vášho podnikania.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"contact\">\r\n  <div class=\"contact-right-bg\"></div>\r\n  <div class=\"contact-icon\">\r\n    <img src=\"../assets/contact.png\" alt=\"Contact us\" />\r\n  </div>\r\n\r\n  <div class=\"container contact-contect\">\r\n    <div class=\"row\">\r\n      <!-- Contact -->\r\n      <div class=\"col-md-5\">\r\n        <h2>Kontakt</h2>\r\n        <h3>Michal Mikuš</h3>\r\n        <span class=\"splitter\"></span>\r\n        <h4>Owner</h4>\r\n        <table>\r\n          <tr>\r\n            <td><img src=\"../assets/contact_grey.png\" alt=\"Telephone\" /></td>\r\n            <td>+421 908 755 170</td>\r\n          </tr>\r\n          <tr>\r\n            <td><img src=\"../assets/email_gray.png\" alt=\"Email\" /></td>\r\n            <td>michal.mikus@kongera.com</td>\r\n          </tr>\r\n        </table>\r\n\r\n        <h3>Matej Mikuš</h3>\r\n        <span class=\"splitter\"></span>\r\n        <h4>Owner</h4>\r\n        <table>\r\n            <tr>\r\n              <td><img src=\"../assets/contact_grey.png\" alt=\"Telephone\" /></td>\r\n              <td>+420 734 150 740</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"../assets/email_gray.png\" alt=\"Email\" /></td>\r\n              <td>matej.mikus@kongera.com</td>\r\n            </tr>\r\n          </table>\r\n      </div>\r\n\r\n      <!-- Contact form -->\r\n      <div class=\"form col-md-5 offset-md-2\">\r\n        <form [formGroup]=\"contactForm\" (ngSubmit)=\"submitContact(contactForm.value)\">          \r\n          <div class=\"form-group\">\r\n            <label for=\"Name\" class=\"col-form-label\">Jméno</label>\r\n            <input type=\"text\" \r\n                   id=\"Name\"\r\n                   formControlName=\"name\" \r\n                   class=\"form-control\"\r\n                   [ngClass]=\"{'is-invalid': !contactForm.controls['name'].valid && contactForm.controls['name'].touched}\">\r\n            <div class=\"invalid-feedback\" >\r\n              Error name\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"Phone\" class=\"col-form-label\">Telefon</label>\r\n            <input type=\"text\" \r\n                   class=\"form-control\"\r\n                   id=\"Phone\"\r\n                   formControlName=\"phone\"\r\n                   [ngClass]=\"{'is-invalid': !contactForm.controls['phone'].valid && contactForm.controls['phone'].touched}\">                   \r\n            <div class=\"invalid-feedback\" >\r\n              Error phone\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"Email\" class=\"col-form-label\">Email</label>\r\n            <input type=\"text\" \r\n                   class=\"form-control\" \r\n                   id=\"Email\"\r\n                   formControlName=\"email\"\r\n                   [ngClass]=\"{'is-invalid': !contactForm.controls['email'].valid && contactForm.controls['email'].touched}\"> \r\n            <div class=\"invalid-feedback\" >\r\n              Error mail\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"Message\">Zpráva pro nás</label>\r\n            <div class=\"textarea-container\">\r\n              <textarea class=\"form-control\" \r\n              id=\"Message\" \r\n              formControlName=\"message\"\r\n              [ngClass]=\"{'is-invalid': !contactForm.controls['message'].valid && contactForm.controls['message'].touched}\"\r\n              rows=\"8\"></textarea>\r\n              <div class=\"invalid-feedback\" >\r\n                Error message\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n\r\n          <div class=\"form-group float-right\">\r\n            <button type=\"submit\" class=\"button button-animation\" [disabled]=\"!contactForm.valid\">Odeslat</button>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"col-md-5\">\r\n        <p>&copy; 2017 Kongera.com<p>          \r\n      </div>\r\n        \r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_parallax_js__ = __webpack_require__("../../../../parallax-js/dist/parallax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_parallax_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_parallax_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mail_service__ = __webpack_require__("../../../../../src/app/mail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(mailService, fb) {
        this.mailService = mailService;
        this.fb = fb;
        this.title = 'app';
        this.contactForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'phone': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    // tslint:disable-next-line:max-line-length
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(/^(\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1))?\d{9,14}$/)
                ])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email
                ])],
            'message': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var sceneLeft = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('#scene-left').get(0);
        var sceneMiddle = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('#scene-middle').get(0);
        var sceneRight = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('#scene-right').get(0);
        var parallaxSceneLeftInstance = new __WEBPACK_IMPORTED_MODULE_3_parallax_js___default.a(sceneLeft);
        var parallaxSceneMiddleInstance = new __WEBPACK_IMPORTED_MODULE_3_parallax_js___default.a(sceneMiddle);
        var parallaxSceneRightInstance = new __WEBPACK_IMPORTED_MODULE_3_parallax_js___default.a(sceneRight);
    };
    AppComponent.prototype.ScroolOnClick = function (elementClass) {
        document.querySelector('#' + elementClass).scrollIntoView({
            behavior: 'smooth'
        });
    };
    AppComponent.prototype.submitContact = function (message) {
        this.mailService.sendMail(message);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__mail_service__["a" /* MailService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mail_service__ = __webpack_require__("../../../../../src/app/mail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__mail_service__["a" /* MailService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailService = (function () {
    function MailService(http) {
        this.http = http;
    }
    MailService.prototype.sendMail = function (message) {
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverPath + '/contact', message).subscribe(function (res) {
        });
    };
    return MailService;
}());
MailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], MailService);

var _a;
//# sourceMappingURL=mail.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    serverPath: 'http://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map