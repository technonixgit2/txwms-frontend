(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-transaction-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/transaction.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/transaction.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>transaction works!</p>\n");

/***/ }),

/***/ "./src/app/demo/report/report/transaction/transaction-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo/report/report/transaction/transaction-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: TransactionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRoutingModule", function() { return TransactionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'all-transactions',
                loadChildren: './all-transaction/all-transaction.module#AllTransactionReportModule'
            },
            {
                path: 'balance-sheet',
                loadChildren: './balance-sheet/balance-sheet.module#BalanceSheetReportModule'
            },
            {
                path: 'cash-flow',
                loadChildren: './cashflow/cashflow.module#CashFlowReportModule'
            },
            {
                path: 'customertransaction',
                loadChildren: './day-book/day-book.module#DayBookReportModule'
            },
            {
                path: 'profit-loss',
                loadChildren: './profit-loss/profit-loss.module#ProfitLossReportModule'
            },
            {
                path: 'purchase-report',
                loadChildren: './purchasereport/purchasereport.module#PurchaseReportModule'
            },
            {
                path: 'sales-report',
                loadChildren: './salesreport/salesreport.module#SaleReportModule'
            }
        ]
    }
];
let TransactionRoutingModule = class TransactionRoutingModule {
};
TransactionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TransactionRoutingModule);



/***/ }),

/***/ "./src/app/demo/report/report/transaction/transaction.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/demo/report/report/transaction/transaction.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC90cmFuc2FjdGlvbi90cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/report/report/transaction/transaction.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/report/report/transaction/transaction.component.ts ***!
  \*************************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TransactionComponent = class TransactionComponent {
    constructor() { }
    ngOnInit() {
    }
};
TransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transaction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/transaction.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transaction.component.scss */ "./src/app/demo/report/report/transaction/transaction.component.scss")).default]
    })
], TransactionComponent);



/***/ }),

/***/ "./src/app/demo/report/report/transaction/transaction.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/report/report/transaction/transaction.module.ts ***!
  \**********************************************************************/
/*! exports provided: TransactionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionModule", function() { return TransactionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-routing.module */ "./src/app/demo/report/report/transaction/transaction-routing.module.ts");
/* harmony import */ var _transaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transaction.component */ "./src/app/demo/report/report/transaction/transaction.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");




// import { TransactionComponent } from './demo/report/transaction/transaction.component';


let TransactionModule = class TransactionModule {
};
TransactionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _transaction_component__WEBPACK_IMPORTED_MODULE_4__["TransactionComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["TransactionRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ]
    })
], TransactionModule);



/***/ })

}]);
//# sourceMappingURL=transaction-transaction-module-es2015.js.map