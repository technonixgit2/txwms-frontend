(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-storage-storage-module"],{

/***/ "./src/app/demo/pages/storage/storage.module.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/pages/storage/storage.module.ts ***!
  \******************************************************/
/*! exports provided: StorageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageModule", function() { return StorageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _storage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.routing.module */ "./src/app/demo/pages/storage/storage.routing.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let StorageModule = class StorageModule {
};
StorageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _storage_routing_module__WEBPACK_IMPORTED_MODULE_3__["StorageRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
        ]
    })
], StorageModule);



/***/ }),

/***/ "./src/app/demo/pages/storage/storage.routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/pages/storage/storage.routing.module.ts ***!
  \**************************************************************/
/*! exports provided: StorageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageRoutingModule", function() { return StorageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'division',
                loadChildren: './divition/divition.module#DivitonModule'
            },
            {
                path: 'createdivison',
                loadChildren: './divisonadd/divison.module#AddDivisonModule'
            },
            {
                path: 'storageview',
                loadChildren: './storageview/storageview.module#StorageViewModule'
            },
        ]
    }
];
let StorageRoutingModule = class StorageRoutingModule {
};
StorageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StorageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=demo-pages-storage-storage-module-es2015.js.map