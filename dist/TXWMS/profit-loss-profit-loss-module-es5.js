(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profit-loss-profit-loss-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/profit-loss/profit-loss.component.html": 
        /*!*****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/profit-loss/profit-loss.component.html ***!
          \*****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>profit-loss works!</p>\n");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/profit-loss/profit-loss-routing.module.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/profit-loss/profit-loss-routing.module.ts ***!
          \******************************************************************************************/
        /*! exports provided: ProfitLossRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitLossRoutingModule", function () { return ProfitLossRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _profit_loss_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profit-loss.component */ "./src/app/demo/report/report/transaction/profit-loss/profit-loss.component.ts");
            //  import { FileformComponent } from "../file-upload/fileform/fileform.component";
            var routes = [
                {
                    path: '',
                    component: _profit_loss_component__WEBPACK_IMPORTED_MODULE_3__["ProfitLossComponent"]
                },
            ];
            var ProfitLossRoutingModule = /** @class */ (function () {
                function ProfitLossRoutingModule() {
                }
                return ProfitLossRoutingModule;
            }());
            ProfitLossRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ProfitLossRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/profit-loss/profit-loss.component.scss": 
        /*!***************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/profit-loss/profit-loss.component.scss ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC90cmFuc2FjdGlvbi9wcm9maXQtbG9zcy9wcm9maXQtbG9zcy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/profit-loss/profit-loss.component.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/profit-loss/profit-loss.component.ts ***!
          \*************************************************************************************/
        /*! exports provided: ProfitLossComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitLossComponent", function () { return ProfitLossComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProfitLossComponent = /** @class */ (function () {
                function ProfitLossComponent() {
                }
                ProfitLossComponent.prototype.ngOnInit = function () {
                };
                return ProfitLossComponent;
            }());
            ProfitLossComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profit-loss',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profit-loss.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/profit-loss/profit-loss.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profit-loss.component.scss */ "./src/app/demo/report/report/transaction/profit-loss/profit-loss.component.scss")).default]
                })
            ], ProfitLossComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/profit-loss/profit-loss.module.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/profit-loss/profit-loss.module.ts ***!
          \**********************************************************************************/
        /*! exports provided: ProfitLossReportModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitLossReportModule", function () { return ProfitLossReportModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _profit_loss_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profit-loss-routing.module */ "./src/app/demo/report/report/transaction/profit-loss/profit-loss-routing.module.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _profit_loss_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profit-loss.component */ "./src/app/demo/report/report/transaction/profit-loss/profit-loss.component.ts");
            // import { FileUploadComponent } from './fi';
            // import { NoteformComponent } from "./noteform/noteform.component";
            var ProfitLossReportModule = /** @class */ (function () {
                function ProfitLossReportModule() {
                }
                return ProfitLossReportModule;
            }());
            ProfitLossReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_profit_loss_component__WEBPACK_IMPORTED_MODULE_6__["ProfitLossComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _profit_loss_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfitLossRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
                    ]
                })
            ], ProfitLossReportModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=profit-loss-profit-loss-module-es2015.js.map
//# sourceMappingURL=profit-loss-profit-loss-module-es5.js.map
//# sourceMappingURL=profit-loss-profit-loss-module-es5.js.map