(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-ui-elements-ui-basic-ui-basic-module"],{

/***/ "./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: UiBasicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBasicRoutingModule", function() { return UiBasicRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'inwards',
                loadChildren: './basic-button/basic-button.module#BasicButtonModule'
            },
            {
                path: 'stock',
                loadChildren: './basic-badge/basic-badge.module#BasicBadgeModule'
            },
            {
                path: 'outwards',
                loadChildren: './basic-collapse/basic-collapse.module#BasicCollapseModule'
            },
            {
                path: 'availability',
                loadChildren: './basic-typography/basic-typography.module#BasicTypographyModule'
            }
        ]
    }
];
let UiBasicRoutingModule = class UiBasicRoutingModule {
};
UiBasicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UiBasicRoutingModule);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/ui-basic.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/ui-basic.module.ts ***!
  \**************************************************************/
/*! exports provided: UiBasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBasicModule", function() { return UiBasicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-basic-routing.module */ "./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");





let UiBasicModule = class UiBasicModule {
};
UiBasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiBasicRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"]
        ]
    })
], UiBasicModule);



/***/ })

}]);
//# sourceMappingURL=demo-ui-elements-ui-basic-ui-basic-module-es2015.js.map