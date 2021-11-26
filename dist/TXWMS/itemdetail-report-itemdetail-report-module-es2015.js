(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["itemdetail-report-itemdetail-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>itemdetail-report works!</p>\n");

/***/ }),

/***/ "./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ItemDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailRoutingModule", function() { return ItemDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _itemdetail_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemdetail-report.component */ "./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report.component.ts");




//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes = [
    {
        path: '',
        component: _itemdetail_report_component__WEBPACK_IMPORTED_MODULE_3__["ItemdetailReportComponent"]
    },
];
let ItemDetailRoutingModule = class ItemDetailRoutingModule {
};
ItemDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ItemDetailRoutingModule);



/***/ }),

/***/ "./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC9pdGVtLXN0b2NrL2l0ZW1kZXRhaWwtcmVwb3J0L2l0ZW1kZXRhaWwtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ItemdetailReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemdetailReportComponent", function() { return ItemdetailReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ItemdetailReportComponent = class ItemdetailReportComponent {
    constructor() { }
    ngOnInit() {
    }
};
ItemdetailReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-itemdetail-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./itemdetail-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./itemdetail-report.component.scss */ "./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report.component.scss")).default]
    })
], ItemdetailReportComponent);



/***/ }),

/***/ "./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ItemDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailModule", function() { return ItemDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _itemdetail_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemdetail-report.component */ "./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _itemdetail_report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./itemdetail-report-routing.module */ "./src/app/demo/report/report/item-stock/itemdetail-report/itemdetail-report-routing.module.ts");







let ItemDetailModule = class ItemDetailModule {
};
ItemDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_itemdetail_report_component__WEBPACK_IMPORTED_MODULE_4__["ItemdetailReportComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _itemdetail_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["ItemDetailRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
        ]
    })
], ItemDetailModule);



/***/ })

}]);
//# sourceMappingURL=itemdetail-report-itemdetail-report-module-es2015.js.map