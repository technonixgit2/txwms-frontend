(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gst-gst-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/gst/gst.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/gst/gst.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>gst works!</p>\n");

/***/ }),

/***/ "./src/app/demo/report/report/gst/gst-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/report/report/gst/gst-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: GstRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstRoutingModule", function() { return GstRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'gstr-3b',
                loadChildren: './gstr3b/gstr3b.module#Gst3bReportModule'
            },
        ]
    }
];
let GstRoutingModule = class GstRoutingModule {
};
GstRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GstRoutingModule);



/***/ }),

/***/ "./src/app/demo/report/report/gst/gst.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/demo/report/report/gst/gst.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC9nc3QvZ3N0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/demo/report/report/gst/gst.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/demo/report/report/gst/gst.component.ts ***!
  \*********************************************************/
/*! exports provided: GstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstComponent", function() { return GstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GstComponent = class GstComponent {
    constructor() { }
    ngOnInit() {
    }
};
GstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gst',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gst.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/gst/gst.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gst.component.scss */ "./src/app/demo/report/report/gst/gst.component.scss")).default]
    })
], GstComponent);



/***/ }),

/***/ "./src/app/demo/report/report/gst/gst.module.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/report/report/gst/gst.module.ts ***!
  \******************************************************/
/*! exports provided: GstModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstModule", function() { return GstModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _gst_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gst-routing.module */ "./src/app/demo/report/report/gst/gst-routing.module.ts");
/* harmony import */ var _gst_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gst.component */ "./src/app/demo/report/report/gst/gst.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");




// import { TransactionComponent } from './demo/report/transaction/transaction.component';


let GstModule = class GstModule {
};
GstModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _gst_component__WEBPACK_IMPORTED_MODULE_4__["GstComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gst_routing_module__WEBPACK_IMPORTED_MODULE_3__["GstRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ]
    })
], GstModule);



/***/ })

}]);
//# sourceMappingURL=gst-gst-module-es2015.js.map