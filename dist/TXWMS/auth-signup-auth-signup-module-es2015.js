(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signup-auth-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signup/auth-signup.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signup/auth-signup.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"auth-wrapper\">\n  <div class=\"auth-content\">\n    <div class=\"auth-bg\">\n      <span class=\"r\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r s\"></span>\n      <span class=\"r\"></span>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body text-center\">\n        <div class=\"mb-4\">\n          <i class=\"feather icon-user-plus auth-icon\"></i>\n        </div>\n        <h3 class=\"mb-4\">Sign up</h3>\n        <div class=\"input-group mb-3\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n        </div>\n        <div class=\"input-group mb-3\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n        </div>\n        <div class=\"input-group mb-4\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group text-left\">\n          <div class=\"checkbox checkbox-fill d-inline\">\n            <input type=\"checkbox\" name=\"checkbox-fill-1\" id=\"checkbox-fill-1\" checked=\"\">\n            <label for=\"checkbox-fill-1\" class=\"cr\"> Save Details</label>\n          </div>\n        </div>\n        <div class=\"form-group text-left\">\n          <div class=\"checkbox checkbox-fill d-inline\">\n            <input type=\"checkbox\" name=\"checkbox-fill-2\" id=\"checkbox-fill-2\">\n            <label for=\"checkbox-fill-2\" class=\"cr\">Send me the <a href=\"javascript:\"> Newsletter</a> weekly.</label>\n          </div>\n        </div>\n        <button class=\"btn btn-primary shadow-2 mb-4\">Sign up</button>\n        <p class=\"mb-0 text-muted\">Already have an account? <a [routerLink]=\"['/auth/signin']\"> Log in</a></p>\n      </div>\n    </div>\n  </div>\n</div> -->\n<div class=\"row\">\n  <!-- <div class=\"col-xl-6\">\n    <app-card cardTitle=\"Bar [ Simple ] Chart\" [options]=\"false\">\n      <div id=\"morris-bar-basic-chart\" mk-morris-js [options]=\"barBasicMorrisOption\" [data]=\"barBasicMorrisData\" type=\"Bar\" [style.height]=\"'324px'\" [style.width]=\"'100%'\" [style.-webkit-tap-highlight-color]=\"'rgba(0, 0, 0, 0)'\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-6\">\n    <app-card cardTitle=\"Bar [ Stacked ] Chart\" [options]=\"false\">\n      <div id=\"morris-bar-stacked-chart\" mk-morris-js [options]=\"barStackedOption\" [data]=\"barBasicMorrisData\" type=\"Bar\" [style.height]=\"'324px'\" [style.width]=\"'100%'\" [style.-webkit-tap-highlight-color]=\"'rgba(0, 0, 0, 0)'\"></div>\n    </app-card>\n  </div> -->\n  <!-- <div class=\"col-xl-6\">\n    <app-card cardTitle=\"Stock Balance\" [options]=\"false\">\n      <div id=\"morris-area-angle-chart\" mk-morris-js [options]=\"areaAngleMorrisOption\" [data]=\"areaAngleMorrisData\" type=\"Area\" [style.height]=\"'324px'\" [style.width]=\"'100%'\" [style.-webkit-tap-highlight-color]=\"'rgba(0, 0, 0, 0)'\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-xl-6\">\n    <app-card cardTitle=\"Quality Purchase\" [options]=\"false\">\n      <div id=\"morris-area-smooth-chart\" mk-morris-js [options]=\"areaSmoothMorrisOption\" [data]=\"areaSmoothMorrisData\" type=\"Area\" [style.height]=\"'324px'\" [style.width]=\"'100%'\" [style.-webkit-tap-highlight-color]=\"'rgba(0, 0, 0, 0)'\"></div>\n    </app-card>\n  </div> -->\n   \n  <!-- <div class=\"col-xl-4 col-md-6\">\n    <app-card cardTitle=\"Donut Chart\" [options]=\"false\">\n      <div id=\"morris-donut-chart\" mk-morris-js [options]=\"donutMorrisOption\" [data]=\"donutMorrisData\" type=\"Donut\" [style.height]=\"'324px'\" [style.width]=\"'100%'\" [style.-webkit-tap-highlight-color]=\"'rgba(0, 0, 0, 0)'\"></div>\n    </app-card>\n  </div>\n</div> -->\n");

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signup/auth-signup-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AuthSignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupRoutingModule", function() { return AuthSignupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signup.component */ "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts");




const routes = [
    {
        path: '',
        component: _auth_signup_component__WEBPACK_IMPORTED_MODULE_3__["AuthSignupComponent"]
    }
];
let AuthSignupRoutingModule = class AuthSignupRoutingModule {
};
AuthSignupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthSignupRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1zaWdudXAvYXV0aC1zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupComponent", function() { return AuthSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthSignupComponent = class AuthSignupComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signup/auth-signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-signup.component.scss */ "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.scss")).default]
    })
], AuthSignupComponent);



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signup/auth-signup.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AuthSignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupModule", function() { return AuthSignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signup-routing.module */ "./src/app/demo/pages/authentication/auth-signup/auth-signup-routing.module.ts");
/* harmony import */ var _auth_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-signup.component */ "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts");





let AuthSignupModule = class AuthSignupModule {
};
AuthSignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthSignupRoutingModule"]
        ],
        declarations: [_auth_signup_component__WEBPACK_IMPORTED_MODULE_4__["AuthSignupComponent"]]
    })
], AuthSignupModule);



/***/ })

}]);
//# sourceMappingURL=auth-signup-auth-signup-module-es2015.js.map