(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-sales-saless-module"],{

/***/ "./src/app/demo/pages/sales/saless-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/demo/pages/sales/saless-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SalessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalessRoutingModule", function() { return SalessRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'viewinvoice',
                loadChildren: './viewinvoice/viewinvoice.module#ViewinvoiceModule'
            },
            {
                path: 'returnproducts',
                loadChildren: './returnproducts/returnproducts.module#ReturnproductsModule'
            },
            {
                path: 'billing',
                loadChildren: './billing/billing.module#BillingModule'
            },
            {
                path: 'return',
                loadChildren: './productreturn/productreturn.module#ProductreturnModule'
            }
        ]
    }
];
let SalessRoutingModule = class SalessRoutingModule {
};
SalessRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SalessRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/sales/saless.module.ts":
/*!***************************************************!*\
  !*** ./src/app/demo/pages/sales/saless.module.ts ***!
  \***************************************************/
/*! exports provided: SalessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalessModule", function() { return SalessModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _saless_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saless-routing.module */ "./src/app/demo/pages/sales/saless-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





let SalessModule = class SalessModule {
};
SalessModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _saless_routing_module__WEBPACK_IMPORTED_MODULE_3__["SalessRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], SalessModule);



/***/ })

}]);
//# sourceMappingURL=demo-pages-sales-saless-module-es2015.js.map