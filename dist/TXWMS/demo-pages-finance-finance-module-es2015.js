(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-finance-finance-module"],{

/***/ "./src/app/demo/pages/finance/finance-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/pages/finance/finance-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: FinanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceRoutingModule", function() { return FinanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'purchase',
                loadChildren: './purchase/purchase.module#PurchaseModule'
            },
            {
                path: 'sales',
                loadChildren: './sales/sales.module#SalesModule'
            },
            {
                path: 'customerhistory',
                loadChildren: './customerhistory/customerhistory.module#CustomerhistoryModule'
            },
            {
                path: 'monthlysales',
                loadChildren: './monthlysales/monthlysales.module#MonthlysalesModule'
            },
            {
                path: 'outstanding',
                loadChildren: './outstanding/outstanding.module#OutstandingModule'
            }
        ]
    }
];
let FinanceRoutingModule = class FinanceRoutingModule {
};
FinanceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FinanceRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/finance/finance.module.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/pages/finance/finance.module.ts ***!
  \******************************************************/
/*! exports provided: FinanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceModule", function() { return FinanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _finance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finance-routing.module */ "./src/app/demo/pages/finance/finance-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





let FinanceModule = class FinanceModule {
};
FinanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _finance_routing_module__WEBPACK_IMPORTED_MODULE_3__["FinanceRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]
    })
], FinanceModule);



/***/ })

}]);
//# sourceMappingURL=demo-pages-finance-finance-module-es2015.js.map