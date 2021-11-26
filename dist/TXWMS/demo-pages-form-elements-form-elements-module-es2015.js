(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-form-elements-form-elements-module"],{

/***/ "./src/app/demo/pages/form-elements/form-elements-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/form-elements-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FormElementsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementsRoutingModule", function() { return FormElementsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'suppliers',
                loadChildren: './basic-elements/basic-elements.module#BasicElementsModule'
            }
        ]
    }
];
let FormElementsRoutingModule = class FormElementsRoutingModule {
};
FormElementsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FormElementsRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/form-elements/form-elements.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/form-elements.module.ts ***!
  \******************************************************************/
/*! exports provided: FormElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementsModule", function() { return FormElementsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-elements-routing.module */ "./src/app/demo/pages/form-elements/form-elements-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





let FormElementsModule = class FormElementsModule {
};
FormElementsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormElementsRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        declarations: []
    })
], FormElementsModule);



/***/ })

}]);
//# sourceMappingURL=demo-pages-form-elements-form-elements-module-es2015.js.map