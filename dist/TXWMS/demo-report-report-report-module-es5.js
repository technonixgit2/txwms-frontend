(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-report-report-report-module"], {
        /***/ "./src/app/demo/report/report/report-routing.module.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/demo/report/report/report-routing.module.ts ***!
          \*************************************************************/
        /*! exports provided: ReportRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function () { return ReportRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [
                {
                    path: '',
                    children: [
                        {
                            path: 'transaction',
                            loadChildren: './transaction/transaction.module#TransactionModule'
                        },
                        {
                            path: 'party',
                            loadChildren: './party/party.module#PartyModule'
                        },
                        {
                            path: 'gstr',
                            loadChildren: './gst/gst.module#GstModule'
                        },
                        {
                            path: 'item-stock',
                            loadChildren: './item-stock/item-stock.module#ItemStockModule'
                        },
                        {
                            path: 'business-status',
                            loadChildren: './business/business.module#BusinessModule'
                        }
                    ]
                }
            ];
            var ReportRoutingModule = /** @class */ (function () {
                function ReportRoutingModule() {
                }
                return ReportRoutingModule;
            }());
            ReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ReportRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/report.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/demo/report/report/report.module.ts ***!
          \*****************************************************/
        /*! exports provided: ReportModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function () { return ReportModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-routing.module */ "./src/app/demo/report/report/report-routing.module.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            var ReportModule = /** @class */ (function () {
                function ReportModule() {
                }
                return ReportModule;
            }());
            ReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _report_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    ]
                })
            ], ReportModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=demo-report-report-report-module-es2015.js.map
//# sourceMappingURL=demo-report-report-report-module-es5.js.map
//# sourceMappingURL=demo-report-report-report-module-es5.js.map