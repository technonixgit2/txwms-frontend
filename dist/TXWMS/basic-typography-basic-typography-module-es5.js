(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-typography-basic-typography-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.html": 
        /*!**********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.html ***!
          \**********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("");
            /***/ 
        }),
        /***/ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography-routing.module.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography-routing.module.ts ***!
          \***********************************************************************************************/
        /*! exports provided: BasicTypographyRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTypographyRoutingModule", function () { return BasicTypographyRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _basic_typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-typography.component */ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts");
            var routes = [
                {
                    path: '',
                    component: _basic_typography_component__WEBPACK_IMPORTED_MODULE_3__["BasicTypographyComponent"]
                }
            ];
            var BasicTypographyRoutingModule = /** @class */ (function () {
                function BasicTypographyRoutingModule() {
                }
                return BasicTypographyRoutingModule;
            }());
            BasicTypographyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BasicTypographyRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.scss": 
        /*!********************************************************************************************!*\
          !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.scss ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtdHlwb2dyYXBoeS9iYXNpYy10eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts ***!
          \******************************************************************************************/
        /*! exports provided: BasicTypographyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTypographyComponent", function () { return BasicTypographyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BasicTypographyComponent = /** @class */ (function () {
                function BasicTypographyComponent() {
                }
                BasicTypographyComponent.prototype.ngOnInit = function () {
                };
                return BasicTypographyComponent;
            }());
            BasicTypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-basic-typography',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-typography.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.scss")).default]
                })
            ], BasicTypographyComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.module.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.module.ts ***!
          \***************************************************************************************/
        /*! exports provided: BasicTypographyModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTypographyModule", function () { return BasicTypographyModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _basic_typography_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-typography-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography-routing.module.ts");
            /* harmony import */ var _basic_typography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-typography.component */ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            var BasicTypographyModule = /** @class */ (function () {
                function BasicTypographyModule() {
                }
                return BasicTypographyModule;
            }());
            BasicTypographyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _basic_typography_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicTypographyRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                    ],
                    declarations: [_basic_typography_component__WEBPACK_IMPORTED_MODULE_4__["BasicTypographyComponent"]]
                })
            ], BasicTypographyModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=basic-typography-basic-typography-module-es2015.js.map
//# sourceMappingURL=basic-typography-basic-typography-module-es5.js.map
//# sourceMappingURL=basic-typography-basic-typography-module-es5.js.map