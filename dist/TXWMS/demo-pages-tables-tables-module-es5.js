(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-tables-tables-module"], {
        /***/ "./src/app/demo/pages/tables/tables-routing.module.ts": 
        /*!************************************************************!*\
          !*** ./src/app/demo/pages/tables/tables-routing.module.ts ***!
          \************************************************************/
        /*! exports provided: TablesRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function () { return TablesRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [
                {
                    path: '',
                    children: [
                        {
                            path: 'expensive',
                            loadChildren: './expense/expence.module#expensiveModule'
                        }
                    ]
                }
            ];
            var TablesRoutingModule = /** @class */ (function () {
                function TablesRoutingModule() {
                }
                return TablesRoutingModule;
            }());
            TablesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], TablesRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/tables/tables.module.ts": 
        /*!****************************************************!*\
          !*** ./src/app/demo/pages/tables/tables.module.ts ***!
          \****************************************************/
        /*! exports provided: TablesModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function () { return TablesModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables-routing.module */ "./src/app/demo/pages/tables/tables-routing.module.ts");
            var TablesModule = /** @class */ (function () {
                function TablesModule() {
                }
                return TablesModule;
            }());
            TablesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"],
                    ],
                    declarations: []
                })
            ], TablesModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=demo-pages-tables-tables-module-es2015.js.map
//# sourceMappingURL=demo-pages-tables-tables-module-es5.js.map
//# sourceMappingURL=demo-pages-tables-tables-module-es5.js.map