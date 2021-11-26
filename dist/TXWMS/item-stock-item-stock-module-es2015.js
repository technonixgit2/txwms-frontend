(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-stock-item-stock-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-stock.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-stock.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>item-stock works!</p>\n");

/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-stock-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-stock-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ItemStockRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStockRoutingModule", function() { return ItemStockRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'item-reportby-party',
                loadChildren: './item-reportby-party/item-reportby-party.module#ItemReportByItemModule'
            },
            {
                path: 'item-summary',
                loadChildren: './item-summary/item-summary.module#ItemSummaryModule'
            },
            {
                path: 'item-wise-profit',
                loadChildren: './item-wise-profit/item-wise-profit.module#ItemWiseProfitModule'
            },
            {
                path: 'itemdetail',
                loadChildren: './itemdetail-report/itemdetail-report.module#ItemDetailModule'
            },
            {
                path: 'lowstock',
                loadChildren: './lowstock-report/lowstock.module#LowStockModule'
            }
        ]
    }
];
let ItemStockRoutingModule = class ItemStockRoutingModule {
};
ItemStockRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ItemStockRoutingModule);



/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-stock.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-stock.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC9pdGVtLXN0b2NrL2l0ZW0tc3RvY2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-stock.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-stock.component.ts ***!
  \***********************************************************************/
/*! exports provided: ItemStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStockComponent", function() { return ItemStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ItemStockComponent = class ItemStockComponent {
    constructor() { }
    ngOnInit() {
    }
};
ItemStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-stock',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-stock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-stock.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-stock.component.scss */ "./src/app/demo/report/report/item-stock/item-stock.component.scss")).default]
    })
], ItemStockComponent);



/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-stock.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-stock.module.ts ***!
  \********************************************************************/
/*! exports provided: ItemStockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStockModule", function() { return ItemStockModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _item_stock_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-stock-routing.module */ "./src/app/demo/report/report/item-stock/item-stock-routing.module.ts");
/* harmony import */ var _item_stock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-stock.component */ "./src/app/demo/report/report/item-stock/item-stock.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






let ItemStockModule = class ItemStockModule {
};
ItemStockModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _item_stock_component__WEBPACK_IMPORTED_MODULE_4__["ItemStockComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _item_stock_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItemStockRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ]
    })
], ItemStockModule);



/***/ })

}]);
//# sourceMappingURL=item-stock-item-stock-module-es2015.js.map