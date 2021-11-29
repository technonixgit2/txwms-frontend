(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cashin-check-cashin-check-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n<div class=\"col-lg-12 text-right\">\n  <button type=\"button\" class=\"btn btn-outline-primary\" (click)='addforms()'>\n    <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n</button>\n</div>\n<div class=\"col-md-12\">  \n  <app-card cardTitle=\"Cash-In Cheque\" [options]=\"false\" blockClass=\"table-border-style\"> \n    <div class=\"table-responsive table-container\" >  \n      <table  class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">  \n        <thead>  \n          <tr> \n            <th>Branch </th>  \n            <th>Cheque Number</th>\n            <th>Account Number</th>\n            <th>Date On Cheque</th>   \n            <th>Amount</th>\n            <th>Beneficiary</th>\n            <th>Presented On</th>\n            <th>Remarks</th>\n            <th>Action</th>\n          </tr>  \n        </thead>  \n        <tbody>\n            <tr *ngFor=\"let data of getCheque\">\n                <td>{{data.bankBranch}}</td>\n                <td>{{data.chequeNumber}}</td>\n                <td>{{data.accountNumber}}</td>\n                <td>{{data.dateonCheque}}</td>\n                <td>{{data.amount}}</td>\n                <td>{{data.beneficiary}}</td>\n                <td>{{data.presentedOn}}</td>\n                <td>{{data.remarks}}</td>\n                <td><button style=\"background:none; border: none;\" (click)='editCheque(data)'><i style=\"color: #007bff;\"class=\"fa fa-edit\">  </i></button> &nbsp;&nbsp; \n                    <button  style=\"background:none; border: none;\" (click)='deleteCheque(data._id)'> <i style = \"color:red;\"class=\"fa fa-trash\"> </i> </button>\n                </td>\n            </tr>\n        </tbody>\n      </table> \n    </div>\n  </app-card>\n</div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.html": 
        /*!***********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.html ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n      <div class=\"row\" >\n        <div class=\"col-xl-12\">\n          <app-card cardTitle=\"Cheque Details\" [options]=\"false\" blockClass=\"table-border-style\">\n            <form class=\"receiptaddform\"[formGroup] = \"chequeForm\" (ngSubmit) = \"onsubmit(chequeForm.value)\">\n              <div class=\"row\">\n                <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"_id\"> </div>\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n    \n                <div class=\"col-lg-6\"> \n                  <label for=\"date\">Branch:</label> <br>  \n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter branch\" formControlName=\"bankBranch\" >\n                  \n                </div>\n                <div class=\"col-lg-6\"> <label for=\"itemcode\">Cheque-Number:</label> <br>  \n                  <input type=\"text\" class=\"form-control\"  placeholder=\"Enter chequeNumber\" formControlName=\"chequeNumber\"> \n                  \n                </div>\n                <div class=\"col-lg-6\"> <label for=\"itemcode\">Account-Number :</label> <br>  \n                  <input type=\"text\" class=\"form-control\"  placeholder=\"Enter accountNumber\" formControlName=\"accountNumber\"> \n                  \n                </div>\n             \n            \n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Date-on-Cheque :</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter dateonCheque\" formControlName=\"dateonCheque\"> \n                \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Amount:</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter amount\" formControlName=\"amount\"> \n                \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Beneficiary:</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter beneficiary\" formControlName=\"beneficiary\">    \n              </div> \n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Presented On:</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter presentedOn\" formControlName=\"presentedOn\"> \n                \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Remarks:</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter remarks\" formControlName=\"remarks\"> \n                \n              </div>\n            \n            </div>\n          <div class=\"row sub\"> \n          <div class=\"submit\"  >  <button type=\"submit\" > Submit </button>  </div>\n        </div>\n      \n            </form>\n          </app-card>\n        </div>\n      </div>\n      \n    ");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check-routing.module.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check-routing.module.ts ***!
          \***************************************************************************************/
        /*! exports provided: ChequeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeRoutingModule", function () { return ChequeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _cashin_check_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashin-check.component */ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.ts");
            /* harmony import */ var _chequeform_chequeform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chequeform/chequeform.component */ "./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.ts");
            var routes = [
                {
                    path: '',
                    component: _cashin_check_component__WEBPACK_IMPORTED_MODULE_3__["CashinCheckComponent"]
                },
                {
                    path: 'chequeform',
                    component: _chequeform_chequeform_component__WEBPACK_IMPORTED_MODULE_4__["ChequeformComponent"]
                }
            ];
            var ChequeRoutingModule = /** @class */ (function () {
                function ChequeRoutingModule() {
                }
                return ChequeRoutingModule;
            }());
            ChequeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ChequeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.scss": 
        /*!************************************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.scss ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvY2FzaC1pbi9jYXNoaW4vY2FzaGluLWNoZWNrL2Nhc2hpbi1jaGVjay5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.ts ***!
          \**********************************************************************************/
        /*! exports provided: CashinCheckComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashinCheckComponent", function () { return CashinCheckComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _cheque_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cheque.service */ "./src/app/demo/pages/cash-in/cashin/cashin-check/cheque.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var CashinCheckComponent = /** @class */ (function () {
                function CashinCheckComponent(router, chequeService, toster) {
                    this.router = router;
                    this.chequeService = chequeService;
                    this.toster = toster;
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                }
                CashinCheckComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                    this.chequeService.getCheque().subscribe(function (data) {
                        console.log(data);
                        _this.getCheque = data;
                        _this.dtTrigger.next();
                    });
                };
                CashinCheckComponent.prototype.addforms = function () {
                    this.router.navigate(['/cashin/cashin-cheque/chequeform']);
                };
                CashinCheckComponent.prototype.addform = function (value) {
                    localStorage.removeItem('setvalue');
                    this.router.navigate(['/cashin/cashin-cheque/chequeform']);
                    // this.router.navigate(['adddetails']);
                };
                CashinCheckComponent.prototype.editCheque = function (value) {
                    localStorage.setItem('setvalue', JSON.stringify(value));
                    this.router.navigate(['/cashin/cashin-cheque/chequeform']);
                };
                CashinCheckComponent.prototype.deleteCheque = function (id) {
                    var _this = this;
                    this.chequeService.deleteCheque(id).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('deleted successfully');
                    });
                };
                return CashinCheckComponent;
            }());
            CashinCheckComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _cheque_service__WEBPACK_IMPORTED_MODULE_3__["ChequeService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
            ]; };
            CashinCheckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cashin-check',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cashin-check.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cashin-check.component.scss */ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.scss")).default]
                })
            ], CashinCheckComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.module.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.module.ts ***!
          \*******************************************************************************/
        /*! exports provided: ChequeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeModule", function () { return ChequeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _chequeform_chequeform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chequeform/chequeform.component */ "./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.ts");
            /* harmony import */ var _cashin_check_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cashin-check-routing.module */ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check-routing.module.ts");
            /* harmony import */ var _cashin_check_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cashin-check.component */ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var ChequeModule = /** @class */ (function () {
                function ChequeModule() {
                }
                return ChequeModule;
            }());
            ChequeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_cashin_check_component__WEBPACK_IMPORTED_MODULE_6__["CashinCheckComponent"], _chequeform_chequeform_component__WEBPACK_IMPORTED_MODULE_4__["ChequeformComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _cashin_check_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChequeRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
                    ]
                })
            ], ChequeModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/cheque.service.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/cheque.service.ts ***!
          \**************************************************************************/
        /*! exports provided: ChequeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeService", function () { return ChequeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../environments/enviromentURL */ "./src/environments/enviromentURL.ts");
            var ChequeService = /** @class */ (function () {
                function ChequeService(http) {
                    var _this = this;
                    this.http = http;
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                    });
                }
                ChequeService.prototype.getCheque = function () {
                    return this.http.get(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/cheque" + '/' + this.id);
                };
                ChequeService.prototype.postCheque = function (value) {
                    return this.http.post(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/cheque", value);
                };
                ChequeService.prototype.putCheque = function (value) {
                    return this.http.put(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/cheque" + '/' + value._id, value);
                };
                ChequeService.prototype.deleteCheque = function (id) {
                    return this.http.delete(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/cheque" + '/' + id);
                };
                return ChequeService;
            }());
            ChequeService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ChequeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ChequeService);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.scss": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.scss ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n:-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input {\n  background-color: white;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform input[type=month] {\n  padding: 2px;\n  color: #b3aeae;\n  padding-left: 8px; }\n\n.receiptaddform button {\n  color: white !important;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  background-color: #65abe4;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.submit button {\n  margin-bottom: 0% !important; }\n\n.submit {\n  color: white !important;\n  width: 20%;\n  margin-left: 40%;\n  margin-bottom: 0% !important;\n  background-color: #65abe4; }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.danger {\n  background-color: #8b4646 !important; }\n\n.receiptaddform select {\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform select option:first {\n  color: #999; }\n\n.sub {\n  margin-left: 0px; }\n\n@media (max-width: 430px) {\n  .sub {\n    margin-left: -149px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9jYXNoLWluL2Nhc2hpbi9jYXNoaW4tY2hlY2svY2hlcXVlZm9ybS9DOlxcVXNlcnNcXEJoYXJhbmVlZGhhcmFuXFxEb3dubG9hZHNcXFdNUy0xXFx3bXMgMTQtMTIvc3JjXFxhcHBcXGRlbW9cXHBhZ2VzXFxjYXNoLWluXFxjYXNoaW5cXGNhc2hpbi1jaGVja1xcY2hlcXVlZm9ybVxcY2hlcXVlZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVMsRUFBQTs7QUFFYjtFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFDdEM7RUFBdUIsZUFBZSxFQUFBOztBQUN0QztFQUNJLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQXNCO0VBRXRCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRzdCO0VBQW1DLFlBQVk7RUFBQyxjQUF5QjtFQUFFLGlCQUFpQixFQUFBOztBQUU1RjtFQUNJLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQXNCO0VBRXRCLHlCQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwwQ0FBdUMsRUFBQTs7QUFHM0M7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIseUJBQW9DLEVBQUE7O0FBRXhDO0VBQXdCLHVDQUF1QyxFQUFBOztBQUMvRDtFQUFTLG9DQUE2QyxFQUFBOztBQUN0RDtFQUNJLGFBQWE7RUFFYixjQUFjO0VBQ2QsY0FBc0I7RUFFdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHekI7RUFDUSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSztJQUNJLG1CQUFtQixFQUFBLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZGVtby9wYWdlcy9jYXNoLWluL2Nhc2hpbi9jYXNoaW4tY2hlY2svY2hlcXVlZm9ybS9jaGVxdWVmb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2VpcHRhZGRmb3Jte1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbjo6cGxhY2Vob2xkZXJ7IG9wYWNpdHk6IDAuNztjb2xvcjpncmF5OyB9XHJcbi5yZWNlaXB0YWRkZm9ybSBpbnB1dHsgZm9udC1zaXplOiAxM3B4OyB9XHJcbi5yZWNlaXB0YWRkZm9ybSBpbnB1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMCAwIDMlO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMTMsIDEzKTtcclxuICAgIC8vIGNvbG9yOiByZ2IoMjQ1LCAxNDYsIDE3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U4RThFODtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTsgXHJcbn1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0W3R5cGU9bW9udGhdeyBwYWRkaW5nOiAycHg7Y29sb3I6IHJnYigxNzksIDE3NCwgMTc0KTsgcGFkZGluZy1sZWZ0OiA4cHg7fVxyXG5cclxuLnJlY2VpcHRhZGRmb3JtIGJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMCAwIDMlO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMTMsIDEzKTtcclxuICAgIC8vIG1hcmdpbjogMTUlIDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDE3MSwgMjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U4RThFODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIxMiwgMTI0KTtcclxufVxyXG4uc3VibWl0IGJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDAlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5zdWJtaXR7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDE3MSwgMjI4KTtcclxufVxyXG4ucmVjZWlwdGFkZGZvcm0gLmNsZWFyeyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsICFpbXBvcnRhbnQ7IH1cclxuLmRhbmdlcnsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgNzAsIDcwKSAhaW1wb3J0YW50OyB9XHJcbi5yZWNlaXB0YWRkZm9ybSBzZWxlY3R7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAgMCAzJTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEzLCAxMyk7XHJcbiAgICAvLyBjb2xvcjogcmdiKDI0NSwgMTQ2LCAxNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNFOEU4RTg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZWNlaXB0YWRkZm9ybSBzZWxlY3Qgb3B0aW9uOmZpcnN0IHtcclxuICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3Vie1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAbWVkaWEgIChtYXgtd2lkdGg6IDQzMHB4KXtcclxuICAgICAgICAgICAgIC5zdWJ7XHJcbiAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNDlweDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.ts ***!
          \*******************************************************************************************/
        /*! exports provided: ChequeformComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeformComponent", function () { return ChequeformComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _cheque_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cheque.service */ "./src/app/demo/pages/cash-in/cashin/cashin-check/cheque.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var ChequeformComponent = /** @class */ (function () {
                function ChequeformComponent(router, fb, chequeService, toster) {
                    var _this = this;
                    this.router = router;
                    this.fb = fb;
                    this.chequeService = chequeService;
                    this.toster = toster;
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                        _this.Name = element.branchName;
                        _this.location = element.branchLocation;
                    });
                }
                ChequeformComponent.prototype.ngOnInit = function () {
                    this.chequeForm = this.fb.group({
                        _id: [''],
                        branchId: this.id,
                        branchName: this.Name,
                        branchLocation: this.location,
                        bankBranch: [''],
                        chequeNumber: [''],
                        accountNumber: [''],
                        dateonCheque: [''],
                        amount: [''],
                        beneficiary: [''],
                        presentedOn: [''],
                        remarks: ['']
                    });
                    var che = localStorage.getItem('setvalue');
                    var ch = JSON.parse(che);
                    this.chequeForm.patchValue(ch);
                };
                ChequeformComponent.prototype.onsubmit = function (value) {
                    var _this = this;
                    if (value._id === '') {
                        this.chequeService.postCheque(value).subscribe(function (data) {
                            console.log(data);
                            _this.toster.success('added successfully');
                        });
                        localStorage.removeItem('setvalue');
                    }
                    else {
                        this.chequeService.putCheque(value).subscribe(function (data) {
                            console.log(data);
                            _this.toster.success('updated successfully');
                        });
                        localStorage.removeItem('setvalue');
                    }
                };
                return ChequeformComponent;
            }());
            ChequeformComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _cheque_service__WEBPACK_IMPORTED_MODULE_4__["ChequeService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
            ]; };
            ChequeformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-chequeform',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chequeform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chequeform.component.scss */ "./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.scss")).default]
                })
            ], ChequeformComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=cashin-check-cashin-check-module-es2015.js.map
//# sourceMappingURL=cashin-check-cashin-check-module-es5.js.map
//# sourceMappingURL=cashin-check-cashin-check-module-es5.js.map