/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/Router.js":
/*!**************************!*\
  !*** ./client/Router.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Router; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home */ "./client/pages/home.js");
/* harmony import */ var _pages_testingField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/testingField */ "./client/pages/testingField.js");
/* harmony import */ var _pages_404__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/404 */ "./client/pages/404.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Router = /*#__PURE__*/function (_PureComponent) {
  _inherits(Router, _PureComponent);

  function Router() {
    _classCallCheck(this, Router);

    return _possibleConstructorReturn(this, _getPrototypeOf(Router).apply(this, arguments));
  }

  _createClass(Router, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/test"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_testingField__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: ['/', '/home']
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_home__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_404__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
    }
  }]);

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);



/***/ }),

/***/ "./client/app.js":
/*!***********************!*\
  !*** ./client/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Router */ "./client/Router.js");
/* harmony import */ var _assets_styles_fontNunitoSans_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/fontNunitoSans.css */ "./client/assets/styles/fontNunitoSans.css");
/* harmony import */ var _assets_styles_fontNunitoSans_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_fontNunitoSans_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import { ThemeProvider } from 'styled-components';
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import { lightMuiTheme, darkMuiTheme } from './assets/styles/muiTheme';
// import { getFromStorage, setInStorage } from './utils/storage';
// import { UserContext } from './utils/contexts';
// import { Navbar } from './components';

 // import GlobalStyle from './assets/styles/GlobalStyle';



var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         muiTheme: lightMuiTheme,
    //         sessionToken: '',
    //         user: {},
    //     };
    //     this.switchColorsMode = this.switchColorsMode.bind(this);
    // }
    // componentDidMount() {
    //     const sessionToken = getFromStorage('session_token');
    //     if (sessionToken) {
    //         // Verify session token and fetch user data
    //         fetch('/api/verifyToken', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 sessionToken,
    //             }),
    //         })
    //             .then(res => res.json())
    //             .then(res => {
    //                 if (res.success) {
    //                     this.setState({ sessionToken, user: res.user });
    //                 } else {
    //                     this.setState({ sessionToken: '', user: {} });
    //                     setInStorage('session_token', '');
    //                 }
    //             })
    //             .catch(null);
    //     }
    // }
    // switchColorsMode() {
    //     const { muiTheme } = this.state;
    //     if (muiTheme === lightMuiTheme) {
    //         this.setState({
    //             muiTheme: darkMuiTheme,
    //         });
    //     } else {
    //         this.setState({
    //             muiTheme: lightMuiTheme,
    //         });
    //     }
    // }
    value: function render() {
      // const { sessionToken, user, muiTheme } = this.state;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "HEy mate!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./client/assets/fonts/NunitoSans-Bold.ttf":
/*!*************************************************!*\
  !*** ./client/assets/fonts/NunitoSans-Bold.ttf ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "public/fonts/NunitoSans-Bold.ttf");

/***/ }),

/***/ "./client/assets/fonts/NunitoSans-Regular.ttf":
/*!****************************************************!*\
  !*** ./client/assets/fonts/NunitoSans-Regular.ttf ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "public/fonts/NunitoSans-Regular.ttf");

/***/ }),

/***/ "./client/assets/fonts/NunitoSans-SemiBold.ttf":
/*!*****************************************************!*\
  !*** ./client/assets/fonts/NunitoSans-SemiBold.ttf ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "public/fonts/NunitoSans-SemiBold.ttf");

/***/ }),

/***/ "./client/assets/styles/fontNunitoSans.css":
/*!*************************************************!*\
  !*** ./client/assets/styles/fontNunitoSans.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/NunitoSans-SemiBold.ttf */ "./client/assets/fonts/NunitoSans-SemiBold.ttf");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../fonts/NunitoSans-Regular.ttf */ "./client/assets/fonts/NunitoSans-Regular.ttf");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../fonts/NunitoSans-Bold.ttf */ "./client/assets/fonts/NunitoSans-Bold.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "/* sansation-regular */\r\n@font-face {\r\n    font-family: 'Nunito Sans';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\r\n}\r\n\r\n/* sansation-light  */\r\n@font-face {\r\n    font-family: 'Nunito Sans';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\r\n}\r\n\r\n/* sansation-bold  */\r\n@font-face {\r\n    font-family: 'Nunito Sans';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./client/pages/404.js":
/*!*****************************!*\
  !*** ./client/pages/404.js ***!
  \*****************************/
/*! exports provided: NotFound, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFound", function() { return NotFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var NotFound = /*#__PURE__*/function (_PureComponent) {
  _inherits(NotFound, _PureComponent);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotFound).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "404 Not found");
    }
  }]);

  return NotFound;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./client/pages/home.js":
/*!******************************!*\
  !*** ./client/pages/home.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // import styled from 'styled-components';
// import { Grid, Container, Paper } from '@material-ui/core';
// import { Button, RegisterForm, LoginForm, Tooltip } from '../components';
// import { UserContext } from '../utils/contexts';
// import logout from '../utils/logout';

var Home = /*#__PURE__*/function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         openRegisterModal: false,
    //         openLoginModal: false,
    //     };
    // }
    // componentDidMount() {}
    // render() {
    //     const { openLoginModal, openRegisterModal } = this.state;
    //     const { switchColorsMode } = this.props;
    //     return (
    //         <Container maxWidth="lg">
    //             <Grid container spacing={2}>
    //                 <Grid item xs={12}>
    //                     <Space />
    //                 </Grid>
    //                 <Grid item xs={12}>
    //                     <Space>
    //                         <UserContext.Consumer>
    //                             {context =>
    //                                 context.sessionToken ? (
    //                                     <>
    //                                         <h2>
    //                                             Hello{' '}
    //                                             {context.user.account.username}!
    //                                         </h2>
    //                                         <Button
    //                                             color="secondary"
    //                                             onClick={() => logout()}
    //                                         >
    //                                             Wyloguj się
    //                                         </Button>
    //                                     </>
    //                                 ) : (
    //                                     <>
    //                                         <Tooltip title="Załóż nowe konto">
    //                                             <Button
    //                                                 color="primary"
    //                                                 onClick={() =>
    //                                                     this.setState({
    //                                                         openRegisterModal: true,
    //                                                     })
    //                                                 }
    //                                             >
    //                                                 Darmowa rejestracja
    //                                             </Button>
    //                                         </Tooltip>
    //                                         <RegisterForm
    //                                             isOpen={openRegisterModal}
    //                                             close={() =>
    //                                                 this.setState({
    //                                                     openRegisterModal: false,
    //                                                 })
    //                                             }
    //                                         />
    //                                         <Button
    //                                             color="secondary"
    //                                             onClick={() =>
    //                                                 this.setState({
    //                                                     openLoginModal: true,
    //                                                 })
    //                                             }
    //                                         >
    //                                             Logowanie
    //                                         </Button>
    //                                         <LoginForm
    //                                             isOpen={openLoginModal}
    //                                             close={() =>
    //                                                 this.setState({
    //                                                     openLoginModal: false,
    //                                                 })
    //                                             }
    //                                         />
    //                                     </>
    //                                 )
    //                             }
    //                         </UserContext.Consumer>
    //                     </Space>
    //                 </Grid>
    //                 <Grid item xs={12}>
    //                     <StyledPaper>
    //                         <Tooltip title="Zmień motyw kolorystyczny">
    //                             <Button
    //                                 color="primary"
    //                                 onClick={() => switchColorsMode()}
    //                             >
    //                                 Zmień Motyw
    //                             </Button>
    //                         </Tooltip>
    //                     </StyledPaper>
    //                 </Grid>
    //             </Grid>
    //         </Container>
    //     );
    // }
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        style: {
          fontFamily: 'Nunito Sans'
        }
      }, "home"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]); // const StyledPaper = styled(Paper)`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
//     padding: 20px;
//     text-align: center;
// `;
// const Space = styled.div`
//     min-height: 50px;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
// `;
// Home.propTypes = {
//     switchColorsMode: PropTypes.func.isRequired,
// };


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./client/pages/testingField.js":
/*!**************************************!*\
  !*** ./client/pages/testingField.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

 // import styled from 'styled-components';
// import { Grid, Container, Paper } from '@material-ui/core';
// import {
//     Button,
//     Select,
//     Radio,
//     CheckboxGroup,
//     Input,
//     Toggle,
//     SegmentedButtons,
//     Icon,
//     Tooltip,
//     Dropdown,
//     RegisterForm,
//     LoginForm,
//     TagsBoard,
// } from '../components';
// import {
//     Ban,
//     CheckCopy,
//     AngleDown,
//     Woman,
//     Clock,
//     Check,
//     Fire,
//     Lgbt,
//     DarkMode,
//     Search,
//     Crosshair,
// } from '../assets/icons';
// const selectItems = [
//     { value: '1', label: 'First' },
//     { value: '2', label: 'Second' },
//     { value: '3', label: 'Very long thrid label' },
//     { value: '4', label: 'Next one' },
// ];

var Test = function Test(_ref) {
  var switchColorsMode = _ref.switchColorsMode;
  // const [value1, setValue1] = useState('1');
  // const [value2, setValue2] = useState('1');
  // const [value3, setValue3] = useState('1');
  // const [value4, setValue4] = useState('1');
  // const [values5, setValues5] = useState({
  //     '1': true,
  //     '2': false,
  //     '3': true,
  //     '4': true,
  // });
  // const [value6, setValue6] = useState('');
  // const [value7, setValue7] = useState('');
  // const [value8, setValue8] = useState(false);
  // const [value9, setValue9] = useState(true);
  // const [value10, setValue10] = useState('2');
  // const [value11, setValue11] = useState('');
  // const [value13, setValue13] = useState(false);
  // const [value14, setValue14] = useState(false);
  // const [value15, setValue15] = useState([]);
  // return (
  //     <Container maxWidth="lg">
  //         <Grid container spacing={2}>
  //             <Grid item xs={12}>
  //                 <Space />
  //             </Grid>
  //             <Grid item xs={12}>
  //                 <StyledPaper>
  //                     <TagsBoard
  //                         tagsArray={value15}
  //                         setTagsArray={setValue15}
  //                         maxTags={3}
  //                         width="512px"
  //                         icon={Crosshair}
  //                     />
  //                 </StyledPaper>
  //             </Grid>
  //             <Grid item xs={12}>
  //                 <Space>
  //                     <Tooltip title="Załóż nowe konto">
  //                         <Button
  //                             color="primary"
  //                             onClick={() => {
  //                                 setValue13(true);
  //                             }}
  //                         >
  //                             Darmowa rejestracja
  //                         </Button>
  //                     </Tooltip>
  //                     <RegisterForm
  //                         isOpen={value13}
  //                         close={() => setValue13(false)}
  //                     />
  //                     <Button
  //                         color="secondary"
  //                         onClick={() => {
  //                             setValue14(true);
  //                         }}
  //                     >
  //                         Logowanie
  //                     </Button>
  //                     <LoginForm
  //                         isOpen={value14}
  //                         close={() => setValue14(false)}
  //                     />
  //                 </Space>
  //             </Grid>
  //             <Grid item xs={12}>
  //                 <StyledPaper>
  //                     <Dropdown />
  //                 </StyledPaper>
  //             </Grid>
  //             <Grid item xs={12}>
  //                 <Space>
  //                     <Icon component={Ban} />
  //                     <Icon component={CheckCopy} size="8px" />
  //                     <Icon component={AngleDown} size="100px" />
  //                     <Icon component={Woman} size="50px" />
  //                     <Icon component={Clock} />
  //                     <Icon component={Check} />
  //                     <Icon component={Fire} />
  //                     <Icon component={Lgbt} />
  //                     <Icon component={DarkMode} />
  //                 </Space>
  //             </Grid>
  //             <Grid item xs={12}>
  //                 <StyledPaper>
  //                     <Space>
  //                         <Tooltip title="You can write something here">
  //                             <Input
  //                                 value={value6}
  //                                 setValue={setValue6}
  //                                 label="Label"
  //                                 placeholder="Placeholder"
  //                                 state="approve"
  //                                 icon={Fire}
  //                             />
  //                         </Tooltip>
  //                     </Space>
  //                     <Space>
  //                         <Input
  //                             value={value7}
  //                             setValue={setValue7}
  //                             label="Search Label"
  //                             placeholder="Search"
  //                             state="error"
  //                             type="password"
  //                         />
  //                     </Space>
  //                     <Space>
  //                         <Input
  //                             value={value7}
  //                             setValue={setValue7}
  //                             label="Search Label"
  //                             placeholder="Search"
  //                             icon={Search}
  //                             type="search"
  //                         />
  //                     </Space>
  //                 </StyledPaper>
  //             </Grid>
  //             <Grid item xs={12}>
  //                 <StyledPaper>
  //                     <SegmentedButtons
  //                         value={value10}
  //                         setValue={setValue10}
  //                         label="Segmented Buttons"
  //                         items={selectItems}
  //                     />
  //                 </StyledPaper>
  //             </Grid>
  //             <Grid item xs={12}>
  //                 <Space>
  //                     <CheckboxGroup
  //                         items={selectItems}
  //                         values={values5}
  //                         setValues={setValues5}
  //                         color="primary"
  //                     />
  //                 </Space>
  //             </Grid>
  //             <Grid item xs={12}>
  //                 <StyledPaper>
  //                     <Radio
  //                         items={selectItems}
  //                         value={value3}
  //                         setValue={setValue3}
  //                         label="Radio label"
  //                     />
  //                     <Radio
  //                         items={selectItems}
  //                         value={value4}
  //                         setValue={setValue4}
  //                     />
  //                 </StyledPaper>
  //             </Grid>
  //             <Grid item xs={12}>
  //                 <Space>
  //                     <Toggle value={value8} setValue={setValue8} />
  //                     <Toggle value={value9} setValue={setValue9} />
  //                 </Space>
  //             </Grid>
  //             <Grid item xs={12}>
  //                 <StyledPaper>
  //                     <Button
  //                         color="primary"
  //                         kind="text"
  //                         onClick={() => {
  //                             switchColorsMode();
  //                         }}
  //                     >
  //                         Primary Button
  //                     </Button>
  //                     <Button
  //                         color="secondary"
  //                         kind="text"
  //                         onClick={() => {
  //                             switchColorsMode();
  //                         }}
  //                     >
  //                         Secondary Button
  //                     </Button>
  //                 </StyledPaper>
  //             </Grid>
  //             <Grid item xs={12}>
  //                 <Space>
  //                     <Select
  //                         items={selectItems}
  //                         value={value1}
  //                         setValue={setValue1}
  //                         label="Primary"
  //                     />
  //                     <Select
  //                         label="Secondary"
  //                         items={selectItems}
  //                         value={value2}
  //                         setValue={setValue2}
  //                     />
  //                 </Space>
  //             </Grid>
  //             <Grid item xs={12}>
  //                 <StyledPaper>
  //                     <Input
  //                         multiline
  //                         placeholder="Placeholder"
  //                         label="Text Area"
  //                         value={value11}
  //                         setValue={setValue11}
  //                     />
  //                     <Input
  //                         multiline
  //                         rows={1}
  //                         rowsMax={2}
  //                         placeholder="Placeholder"
  //                         label="Wide Text Area"
  //                         width="40vw"
  //                         value={value11}
  //                         setValue={setValue11}
  //                     />
  //                 </StyledPaper>
  //             </Grid>
  //             <Grid item xs={12}>
  //                 <Space />
  //             </Grid>
  //         </Grid>
  //     </Container>
  // );
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      fontFamily: 'Nunito Sans'
    }
  }, "Testing field"));
}; // const StyledPaper = styled(Paper)`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
//     padding: 20px;
//     text-align: center;
// `;
// const Space = styled.div`
//     min-height: 50px;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
// `;
// Test.propTypes = {
//     switchColorsMode: PropTypes.func.isRequired,
// };


/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client_app_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/app.js */ "./client/app.js");








function handleRender(req, res) {
  var context = {};
  var reactHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
    location: req.url,
    context: context
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_client_app_js__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
  var indexFile = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, 'public', 'index.html');
  fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFile(indexFile, 'utf8', function (err, htmlData) {
    if (err) {
      return res.status(404).send('File not found');
    } // inject the rendered app into our html


    var page = '';

    if (false) {} else {
      page = htmlData.replace('<div id="app"></div>', "<div id=\"app\">".concat(reactHtml, "</div>\n                <script src=\"").concat(process.env.BROWSER_REFRESH_URL, "\"></script>"));
    } //send page


    return res.send(page);
  });
}

var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use('/styles', express__WEBPACK_IMPORTED_MODULE_0___default.a["static"](path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, 'public', 'styles')));
app.use('/fonts', express__WEBPACK_IMPORTED_MODULE_0___default.a["static"](path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, 'public', 'fonts')));
app.use('/js', express__WEBPACK_IMPORTED_MODULE_0___default.a["static"](path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, 'public', 'js')));
app.get('*', handleRender);
app.listen(3000);
console.log('App is running on http://localhost:3000');

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map