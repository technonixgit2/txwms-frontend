(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-business-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/business/business.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/business/business.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>business works!</p>\n");

/***/ }),

/***/ "./src/app/demo/report/report/business/business-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/report/report/business/business-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: BusinessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessRoutingModule", function() { return BusinessRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'bank-statement',
                loadChildren: './bank-statement/bank-statement.module#BankModule'
            },
            {
                path: 'discount',
                loadChildren: './discount/discount.module#DiscountModule'
            },
            {
                path: 'tax',
                loadChildren: './tax/tax.module#TaxModule'
            }
        ]
    }
];
let BusinessRoutingModule = class BusinessRoutingModule {
};
BusinessRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BusinessRoutingModule);



/***/ }),

/***/ "./src/app/demo/report/report/business/business.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/demo/report/report/business/business.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC9idXNpbmVzcy9idXNpbmVzcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/report/report/business/business.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/demo/report/report/business/business.component.ts ***!
  \*******************************************************************/
/*! exports provided: BusinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessComponent", function() { return BusinessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BusinessComponent = class BusinessComponent {
    constructor() { }
    ngOnInit() {
    }
};
BusinessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-business',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./business.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/business/business.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./business.component.scss */ "./src/app/demo/report/report/business/business.component.scss")).default]
    })
], BusinessComponent);



/***/ }),

/***/ "./src/app/demo/report/report/business/business.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo/report/report/business/business.module.ts ***!
  \****************************************************************/
/*! exports provided: BusinessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessModule", function() { return BusinessModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _business_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./business-routing.module */ "./src/app/demo/report/report/business/business-routing.module.ts");
/* harmony import */ var _business_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./business.component */ "./src/app/demo/report/report/business/business.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");




// import { TransactionComponent } from './demo/report/transaction/transaction.component';


let BusinessModule = class BusinessModule {
};
BusinessModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _business_component__WEBPACK_IMPORTED_MODULE_4__["BusinessComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _business_routing_module__WEBPACK_IMPORTED_MODULE_3__["BusinessRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ]
    })
], BusinessModule);



/***/ })

}]);
//# sourceMappingURL=business-business-module-es2015.js.map