(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cashin-hand-cashin-hand-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand.component.html": 
        /*!************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand.component.html ***!
          \************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n<div class=\"col-lg-12 text-right\">\n  <button type=\"button\" class=\"btn btn-outline-primary\" (click)='addforms()'>\n    <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n</button>\n</div>\n\n<div class=\"col-md-12\">  \n  <app-card cardTitle=\"Cash-In Hand\" [options]=\"false\" blockClass=\"table-border-style\">  \n    <div class=\"table-responsive table-container\" >  \n      <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">  \n        <thead>  \n          <tr> \n            <th>Date</th>  \n            <th>Cash</th>\n            <th>Source</th> \n           \n            <th>Action</th> \n          </tr>  \n        </thead>  \n        <tbody>\n            <tr *ngFor=\"let data of getCashinhand\">\n                <td>{{data.date}}</td>\n                <td>{{data.cash}}</td>\n                <td>{{data.source}}</td>\n                <td><button style=\"background: none; border: none;\" (click)='editcashinhand(data)'> <i style=\"color: #007bff;\" class=\"fa fa-edit\">  </i> </button>  &nbsp;&nbsp; \n                  <button  style=\"background: none; border: none;\" (click)='deletecashinhand(data._id)'> <i style=\"color: red;\" class=\"fa fa-trash\"> </i> </button>\n                </td>\n            </tr>\n        </tbody>\n      </table> \n    </div>\n  </app-card>\n</div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-hand/handform/handform.component.html": 
        /*!******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-hand/handform/handform.component.html ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("      <div class=\"row\" >\n        <div class=\"col-xl-12\">\n          <app-card cardTitle=\"Cash-Amount Details\" [options]=\"false\" blockClass=\"table-border-style\">\n            <form class=\"receiptaddform\"[formGroup] = \"cashForm\" (ngSubmit) = \"onSubmit(cashForm.value)\">\n              <div class=\"row\">\n                <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"_id\"> </div>\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n    \n                <div class=\"col-lg-6\"> \n                  <label for=\"date\">Date:</label> <br>  \n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter date\" formControlName=\"date\" >\n                  \n                </div>\n                <div class=\"col-lg-6\"> <label for=\"itemcode\">CashAmount:</label> <br>  \n                  <input type=\"text\" class=\"form-control\"  placeholder=\"Enter CashAmount\" formControlName=\"cash\"> \n                  \n                </div>\n                <div class=\"col-lg-6\"> <label for=\"itemcode\">Source :</label> <br>  \n                  <input type=\"text\" class=\"form-control\"  placeholder=\"Enter source\" formControlName=\"source\"> \n                  \n                </div>\n            </div>\n          <div class=\"row sub\"> \n          <div class=\"submit\"  >  <button type=\"submit\" > Submit </button>  </div>\n        </div>\n      \n            </form>\n          </app-card>\n        </div>\n      </div>\n      \n    ");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand-routing.module.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand-routing.module.ts ***!
          \*************************************************************************************/
        /*! exports provided: HandRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandRoutingModule", function () { return HandRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _cashin_hand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashin-hand.component */ "./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand.component.ts");
            /* harmony import */ var _handform_handform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handform/handform.component */ "./src/app/demo/pages/cash-in/cashin/cashin-hand/handform/handform.component.ts");
            var routes = [
                {
                    path: '',
                    component: _cashin_hand_component__WEBPACK_IMPORTED_MODULE_3__["CashinHandComponent"]
                },
                {
                    path: 'cashform',
                    component: _handform_handform_component__WEBPACK_IMPORTED_MODULE_4__["HandformComponent"]
                }
            ];
            var HandRoutingModule = /** @class */ (function () {
                function HandRoutingModule() {
                }
                return HandRoutingModule;
            }());
            HandRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], HandRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand.component.scss": 
        /*!**********************************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand.component.scss ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvY2FzaC1pbi9jYXNoaW4vY2FzaGluLWhhbmQvY2FzaGluLWhhbmQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand.component.ts": 
        /*!********************************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand.component.ts ***!
          \********************************************************************************/
        /*! exports provided: CashinHandComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashinHandComponent", function () { return CashinHandComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _hand_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hand.service */ "./src/app/demo/pages/cash-in/cashin/cashin-hand/hand.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var CashinHandComponent = /** @class */ (function () {
                function CashinHandComponent(router, handService, toster) {
                    this.router = router;
                    this.handService = handService;
                    this.toster = toster;
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                }
                CashinHandComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                    this.handService.getCashinhand().subscribe(function (data) {
                        console.log(data);
                        _this.getCashinhand = data;
                        _this.dtTrigger.next();
                    });
                };
                CashinHandComponent.prototype.addforms = function () {
                    this.router.navigate(['/cashin/cashin-hand/cashform']);
                };
                CashinHandComponent.prototype.addform = function (value) {
                    localStorage.removeItem('setcash');
                    this.router.navigate(['/cashin/cashin-hand/cashform']);
                    // this.router.navigate(['adddetails']);
                };
                CashinHandComponent.prototype.editcashinhand = function (value) {
                    localStorage.setItem('setcash', JSON.stringify(value));
                    this.router.navigate(['/cashin/cashin-hand/cashform']);
                };
                CashinHandComponent.prototype.deletecashinhand = function (id) {
                    var _this = this;
                    this.handService.deleteCashinhand(id).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('deleted successfully');
                    });
                };
                return CashinHandComponent;
            }());
            CashinHandComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _hand_service__WEBPACK_IMPORTED_MODULE_3__["HandService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
            ]; };
            CashinHandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cashin-hand',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cashin-hand.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cashin-hand.component.scss */ "./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand.component.scss")).default]
                })
            ], CashinHandComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand.module.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand.module.ts ***!
          \*****************************************************************************/
        /*! exports provided: HandModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandModule", function () { return HandModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _cashin_hand_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cashin-hand-routing.module */ "./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand-routing.module.ts");
            /* harmony import */ var _cashin_hand_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cashin-hand.component */ "./src/app/demo/pages/cash-in/cashin/cashin-hand/cashin-hand.component.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _handform_handform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handform/handform.component */ "./src/app/demo/pages/cash-in/cashin/cashin-hand/handform/handform.component.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var HandModule = /** @class */ (function () {
                function HandModule() {
                }
                return HandModule;
            }());
            HandModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_cashin_hand_component__WEBPACK_IMPORTED_MODULE_5__["CashinHandComponent"], _handform_handform_component__WEBPACK_IMPORTED_MODULE_7__["HandformComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _cashin_hand_routing_module__WEBPACK_IMPORTED_MODULE_4__["HandRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
                    ]
                })
            ], HandModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-hand/hand.service.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-hand/hand.service.ts ***!
          \***********************************************************************/
        /*! exports provided: HandService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandService", function () { return HandService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../environments/enviromentURL */ "./src/environments/enviromentURL.ts");
            var HandService = /** @class */ (function () {
                function HandService(http) {
                    var _this = this;
                    this.http = http;
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                    });
                }
                HandService.prototype.getCashinhand = function () {
                    return this.http.get(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/cashhand" + '/' + this.id);
                };
                HandService.prototype.postCashinhand = function (value) {
                    return this.http.post(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/cashhand", value);
                };
                HandService.prototype.putCashinhand = function (value) {
                    return this.http.put(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/cashhand" + '/' + value._id, value);
                };
                HandService.prototype.deleteCashinhand = function (id) {
                    return this.http.delete(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/cashhand" + '/' + id);
                };
                return HandService;
            }());
            HandService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            HandService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], HandService);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-hand/handform/handform.component.scss": 
        /*!****************************************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-hand/handform/handform.component.scss ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input {\n  background-color: white;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform input[type=month] {\n  padding: 2px;\n  color: #b3aeae;\n  padding-left: 8px; }\n\n.receiptaddform button {\n  color: white !important;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  background-color: #65abe4;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.submit button {\n  margin-bottom: 0% !important; }\n\n.submit {\n  color: white !important;\n  width: 20%;\n  margin-left: 40%;\n  margin-bottom: 0% !important;\n  background-color: #65abe4; }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.danger {\n  background-color: #8b4646 !important; }\n\n.receiptaddform select {\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform select option:first {\n  color: #999; }\n\n.sub {\n  margin-left: 0px; }\n\n@media (max-width: 430px) {\n  .sub {\n    margin-left: -138px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9jYXNoLWluL2Nhc2hpbi9jYXNoaW4taGFuZC9oYW5kZm9ybS9DOlxcVXNlcnNcXEJoYXJhbmVlZGhhcmFuXFxEb3dubG9hZHNcXFdNUy0xXFx3bXMgMTQtMTIvc3JjXFxhcHBcXGRlbW9cXHBhZ2VzXFxjYXNoLWluXFxjYXNoaW5cXGNhc2hpbi1oYW5kXFxoYW5kZm9ybVxcaGFuZGZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFTLEVBQUE7O0FBRWI7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUN0QztFQUF1QixlQUFlLEVBQUE7O0FBQ3RDO0VBQ0ksdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBc0I7RUFFdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFBbUMsWUFBWTtFQUFDLGNBQXlCO0VBQUUsaUJBQWlCLEVBQUE7O0FBRTVGO0VBQ0ksdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBc0I7RUFFdEIseUJBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLDBDQUF1QyxFQUFBOztBQUczQztFQUNJLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1Qix5QkFBb0MsRUFBQTs7QUFFeEM7RUFBd0IsdUNBQXVDLEVBQUE7O0FBQy9EO0VBQVMsb0NBQTZDLEVBQUE7O0FBQ3REO0VBQ0ksYUFBYTtFQUViLGNBQWM7RUFDZCxjQUFzQjtFQUV0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUd6QjtFQUNRLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNLO0lBQ0ksbUJBQW1CLEVBQUEsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL2Nhc2gtaW4vY2FzaGluL2Nhc2hpbi1oYW5kL2hhbmRmb3JtL2hhbmRmb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2VpcHRhZGRmb3Jte1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbjo6cGxhY2Vob2xkZXJ7IG9wYWNpdHk6IDAuNztjb2xvcjpncmF5OyB9XHJcbi5yZWNlaXB0YWRkZm9ybSBpbnB1dHsgZm9udC1zaXplOiAxM3B4OyB9XHJcbi5yZWNlaXB0YWRkZm9ybSBpbnB1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMCAwIDMlO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMTMsIDEzKTtcclxuICAgIC8vIGNvbG9yOiByZ2IoMjQ1LCAxNDYsIDE3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U4RThFODtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTsgXHJcbn1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0W3R5cGU9bW9udGhdeyBwYWRkaW5nOiAycHg7Y29sb3I6IHJnYigxNzksIDE3NCwgMTc0KTsgcGFkZGluZy1sZWZ0OiA4cHg7fVxyXG5cclxuLnJlY2VpcHRhZGRmb3JtIGJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMCAwIDMlO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMTMsIDEzKTtcclxuICAgIC8vIG1hcmdpbjogMTUlIDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDE3MSwgMjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U4RThFODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIxMiwgMTI0KTtcclxufVxyXG4uc3VibWl0IGJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDAlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5zdWJtaXR7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDE3MSwgMjI4KTtcclxufVxyXG4ucmVjZWlwdGFkZGZvcm0gLmNsZWFyeyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsICFpbXBvcnRhbnQ7IH1cclxuLmRhbmdlcnsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgNzAsIDcwKSAhaW1wb3J0YW50OyB9XHJcbi5yZWNlaXB0YWRkZm9ybSBzZWxlY3R7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAgMCAzJTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEzLCAxMyk7XHJcbiAgICAvLyBjb2xvcjogcmdiKDI0NSwgMTQ2LCAxNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNFOEU4RTg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZWNlaXB0YWRkZm9ybSBzZWxlY3Qgb3B0aW9uOmZpcnN0IHtcclxuICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBtZWRpYSAgKG1heC13aWR0aDogNDMwcHgpe1xyXG4gICAgICAgICAgICAgLnN1YntcclxuICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEzOHB4O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-hand/handform/handform.component.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-hand/handform/handform.component.ts ***!
          \**************************************************************************************/
        /*! exports provided: HandformComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandformComponent", function () { return HandformComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _hand_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hand.service */ "./src/app/demo/pages/cash-in/cashin/cashin-hand/hand.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var HandformComponent = /** @class */ (function () {
                function HandformComponent(router, fb, handService, toster) {
                    var _this = this;
                    this.router = router;
                    this.fb = fb;
                    this.handService = handService;
                    this.toster = toster;
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                        _this.Name = element.branchName;
                        _this.location = element.branchLocation;
                    });
                }
                HandformComponent.prototype.ngOnInit = function () {
                    this.cashForm = this.fb.group({
                        _id: [''],
                        branchId: this.id,
                        branchName: this.Name,
                        branchLocation: this.location,
                        date: [''],
                        cash: [''],
                        source: ['']
                    });
                    var cih = localStorage.getItem('setcash');
                    var ca = JSON.parse(cih);
                    this.cashForm.patchValue(ca);
                };
                HandformComponent.prototype.onSubmit = function (value) {
                    var _this = this;
                    if (value._id == '') {
                        this.handService.postCashinhand(value).subscribe(function (data) {
                            console.log(data);
                            _this.toster.success('added successfully');
                        });
                        localStorage.removeItem('setcash');
                    }
                    else {
                        this.handService.putCashinhand(value).subscribe(function (data) {
                            console.log(data);
                            _this.toster.success('updated successfully');
                        });
                        localStorage.removeItem('setcash');
                    }
                };
                return HandformComponent;
            }());
            HandformComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _hand_service__WEBPACK_IMPORTED_MODULE_4__["HandService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
            ]; };
            HandformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-handform',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./handform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-hand/handform/handform.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./handform.component.scss */ "./src/app/demo/pages/cash-in/cashin/cashin-hand/handform/handform.component.scss")).default]
                })
            ], HandformComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=cashin-hand-cashin-hand-module-es2015.js.map
//# sourceMappingURL=cashin-hand-cashin-hand-module-es5.js.map
//# sourceMappingURL=cashin-hand-cashin-hand-module-es5.js.map