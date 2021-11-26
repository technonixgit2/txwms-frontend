(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-cash-in-cashin-cashin-module"],{

/***/ "./src/app/demo/pages/cash-in/cashin/cashin-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/cashin-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CashInRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashInRoutingModule", function() { return CashInRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'cashin-bank',
                loadChildren: './cashin-account/cashin-account.module#AccountModule'
            },
            {
                path: 'cashin-cheque',
                loadChildren: './cashin-check/cashin-check.module#ChequeModule'
            },
            {
                path: 'cashin-hand',
                loadChildren: './cashin-hand/cashin-hand.module#HandModule'
            },
            {
                path: 'loan',
                loadChildren: './loanaccount/loanaccount.module#LoanModule'
            }
            //   {
            //     path: 'outstanding',
            //     loadChildren: './outstanding/outstanding.module#OutstandingModule'
            //   }
        ]
    }
];
let CashInRoutingModule = class CashInRoutingModule {
};
CashInRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CashInRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/cashin.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/cashin.module.ts ***!
  \************************************************************/
/*! exports provided: CashinModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashinModule", function() { return CashinModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cashin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashin-routing.module */ "./src/app/demo/pages/cash-in/cashin/cashin-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let CashinModule = class CashinModule {
};
CashinModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _cashin_routing_module__WEBPACK_IMPORTED_MODULE_3__["CashInRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
        ]
    })
], CashinModule);



/***/ })

}]);
//# sourceMappingURL=demo-pages-cash-in-cashin-cashin-module-es2015.js.map