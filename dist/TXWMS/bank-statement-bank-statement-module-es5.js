(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bank-statement-bank-statement-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/business/bank-statement/bank-statement.component.html": 
        /*!********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/business/bank-statement/bank-statement.component.html ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"row\" [hidden]='hide==true'>\n        <div class=\"col-lg-12 text-right\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)='addform()'>\n            <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n        </button>\n        </div>\n        \n        <div class=\"col-md-12\">  \n          <app-card cardTitle=\"Bank-Statement\" [options]=\"false\" blockClass=\"table-border-style\">  \n            <div class=\"table-responsive\" >  \n              <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">  \n                <thead>  \n                  <tr> \n                    <!-- <th>Date</th>   -->\n                    <th>Bank Name</th>\n                    <th>Account-Holder Name</th> \n                    <th>Account Number</th>  \n                    <th>IFSC-Code</th>\n                    <th>Branch Name</th> \n                    <th>check</th>\n                    <th>Add-Transaction</th>\n                  \n                    <th>Action</th> \n                  </tr>  \n                </thead>  \n                <tbody>\n                    <tr *ngFor=\"let data of getData\">\n                        <!-- <td>{{data.date}}</td> -->\n                        <td>{{data.bankName}}</td>\n                        <td>{{data.accountHolderName}}</td>\n                        <td>{{data.accountNumber}}</td>\n                        <td>{{data.ifscCode}}</td>\n                        <td>{{data.bankBranch}}</td>\n                        \n                        <td> <button style=\"border: none; background: none; color: gray;\" (click)='check(data)'><i class=\"fas fa-file-invoice-dollar\"></i></button></td>\n                        <td><button style=\"border: none; background: none; color: gray;\" (click)='addTrans(data)'><i class=\"fas fa-dollar-sign\"></i></button></td>\n                        <td><button style=\"border: none; background: none; color: #007bcf;\" (click)='editDetail(data)'> <i class=\"fa fa-edit\">  </i> </button>  &nbsp; \n                          <button style=\"border: none; background: none; color: red;\" (click)='delete(data._id)'> <i class=\"fa fa-trash\"> </i> </button>\n                        </td> \n                    </tr>\n                </tbody>\n              </table> \n            </div>\n          </app-card>\n        </div>\n        </div>\n\n\n\n        <div [hidden]='hide==false'>\n          <section class=\"bankacstmt\">\n            <div class=\"month\" style=\"text-align: right; \"> <b style=\"color: black;\">Select Month</b>\n              <select (change)=\"setchange($event.target.value)\" style=\"width: 183px; height: 30px;\">\n                  <option  value='1'>January</option>\n                  <option value='2'>February</option>\n                  <option value='3'>March</option>\n                  <option value='4'>April</option>\n                  <option value='5'>May</option>\n                  <option value='6'>June</option>\n                  <option value='7'>July</option>\n                  <option value='8'>August</option>\n                  <option value='9'>September</option>\n                  <option value='10'>October</option>\n                  <option value='11'>November</option>\n                  <option  value='12'>December</option>\n                  </select> \n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-6 bankname\">\n                <h3> {{bankname}}</h3>\n                <h6>{{branch}} </h6>\n                <h6>{{bankaddress}} </h6>\n              </div>\n              <div class=\"col-lg-6 text-right bastmt\">\n                <h6> BANK ACCOUNT STATEMENT </h6>\n              </div>\n            </div>  \n            <div class=\"row\">\n              <div class=\"col-lg-7 custname\">\n                <h5>{{holdername}} </h5>\n                <H6> {{holderaddress}} </H6>\n                <h6></h6>\n              </div>\n              <div class=\"col-lg-5 text-right\">\n                <div class=\"row custhead\">\n                  <!-- <div class=\"col-lg-1\"></div> -->\n                  <div class=\"col-lg-7\"> <span> <b>STATEMENT PERIOD</b> </span> </div>\n                  <div class=\"col-lg-5\"> <span> <b> ACCOUNT NO</b></span> </div>\n                </div>\n                <div class=\"row custheadn\">\n                  <!-- <div class=\"col-lg-1\"></div> -->\n                  <div class=\"col-lg-7\"> <span>2020-02-14 to 2025-02-14</span> </div>\n                  <div class=\"col-lg-5\"> <span>{{Acnum}} </span></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <table class=\"banktable\">\n                  <tr class=\"banktablehead\">\n                    <th> Date </th>\n                    <th> Description </th>\n                    <th> Charges </th>\n                    <th> Withdrawals </th>\n                    <th> Deposits </th>\n                    <th> Balance </th>\n                  </tr>\n                  <tr *ngFor=\"let data of transaction\"> \n                    <td>{{data.date}}</td>\n                        <td>{{data.description}}</td>\n                        <td>{{data.charges}}</td>\n                        <td>{{data.withdrawel}}</td>\n                        <td>{{data.deposit}}</td>\n                        <td>{{data.balance}}</td>\n                  </tr>\n                  <!-- <tr>\n                    <td colspan=\"3\" class=\"total\"> <b> *** Totals *** </b> </td>\n                    <td>1,205.58</td>\n                    <td>5,254.61</td>\n                  </tr> -->\n                </table>\n              </div>\n            </div>\n          </section>\n\n        </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/business/bank-statement/statementform/statementform.component.html": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/business/bank-statement/statementform/statementform.component.html ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n  \n\n\n  <!-- ============================== -->\n  \n<div class=\"row\" >\n  <div class=\"col-xl-12\">\n    <app-card cardTitle=\"Loan-Account Details\" [options]=\"false\" blockClass=\"table-border-style\">\n      <form class=\"receiptaddform\" [formGroup]='statementForm' (ngSubmit)='ubmit(statementForm.value)'>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"_id\"> </div>\n          <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n          <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n          <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n\n          <div [hidden]='transact==true'>\n\n            <div class=\"col-lg-6\"> \n              <label for=\"date\">Bank Name:</label> <br>  \n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter bankName\" formControlName=\"bankName\">\n           </div>\n            <div class=\"col-lg-6\"> <label for=\"itemcode\">Bank Address:</label> <br>  \n              <input type=\"text\" class=\"form-control\"  placeholder=\"Enter bankAddress\" formControlName=\"bankAddress\"> \n            </div>\n            <div class=\"col-lg-6\"> <label for=\"description\">Branch:</label> <br> \n              <input type=\"text\" class=\"form-control\"  placeholder=\"Enter the branch\" formControlName=\"bankBranch\"> \n            </div>\n            <div class=\"col-lg-6\"> <label for=\"description\"> A/C Number:</label> <br> \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter A/C Number\" formControlName=\"accountNumber\"> \n            </div>\n              <div class=\"col-lg-6\"> <label for=\"description\">Account Holder Name:</label> <br> \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter the name\" formControlName=\"accountHolderName\"> \n            </div>\n              <div class=\"col-lg-6\"> <label for=\"description\">Account Type:</label> <br> \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter the accountType\" formControlName=\"accountType\"> \n            </div>\n              <div class=\"col-lg-6\"> <label for=\"description\">IFSC Code:</label> <br> \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter the ifscCode\" formControlName=\"ifscCode\"> \n            </div>\n              <div class=\"col-lg-6\"> <label for=\"description\">Address:</label> <br> \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter the address\" formControlName=\"address\"> \n            </div>\n           \n              <div class=\"col-lg-12\">\n              <div class=\"submit\"><button type=\"submit\" > Submit </button>  </div>\n            </div>\n         \n          </div>\n           \n            <div class=\"col-lg-12\" [hidden]='transact==false'>\n              <h3 class=\"billtitle\"> Transaction-Details </h3>\n              <div formArrayName=\"details\" *ngFor=\"let a of statementForm.get('details')['controls']; let i = index\">\n                <div [formGroupName]=\"i\" >\n                  <!-- <input type=\"hidden\" formControlName=\"_id\"> -->\n                  <div class=\"col-lg-6\"> \n                    <input type=\"date\" class=\"data\"  placeholder=\"Enter date\" formControlName=\"date\">       \n                    </div>\n                  <div class=\"col-lg-6\"> \n                    <input type=\"text\" class=\"form-control\"  placeholder=\"Enter Item Description\" formControlName=\"description\">          \n                  </div>\n                  <div class=\"col-lg-6\"> \n                    <input type=\"text\" class=\"form-control\"  placeholder=\"Enter withdrawel\" formControlName=\"withdrawel\">           \n                  </div>\n                  <div class=\"col-lg-6\"> \n                 <input type=\"text\" class=\"form-control\" placeholder=\"Enter the deposit\" formControlName=\"deposit\">           \n                  </div>\n                  <div class=\"col-lg-6\"> \n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter charges\" formControlName=\"charges\">         \n                       </div>\n                       <div class=\"col-lg-6\"> \n                          <input type=\"text\" class=\"form-control\" placeholder=\"Enter balance\" formControlName=\"balance\">           \n                           </div>\n                  <!-- <div class=\"col-lg-1\"> \n                    <button type=\"button\"  class=\"btn btn-secondary\" (click)=\"addItem()\"><i class=\"fas fa-plus\"></i> </button>         \n                  </div> -->\n                  <div class=\"col-lg-1\"  > \n                    <button type=\"button\"  class=\"danger\" (click)=\"removeItem(i)\"><i class=\"fas fa-remove\"></i></button>         \n                  </div>                \n                </div>         \n                </div>\n                <div class=\"row\"> \n                  <div class=\"col-lg-12\">\n                  <div class=\"submit\"><button type=\"submit\" class=\"btn btn-primary\" > Submit </button>  </div>\n                </div>\n              </div>\n              </div>          \n          </div>\n      </form>\n    </app-card>\n  </div>\n</div>\n\n\n\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/business/bank-statement/bank-statement-routing.module.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/demo/report/report/business/bank-statement/bank-statement-routing.module.ts ***!
          \*********************************************************************************************/
        /*! exports provided: BankStatementRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankStatementRoutingModule", function () { return BankStatementRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _bank_statement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank-statement.component */ "./src/app/demo/report/report/business/bank-statement/bank-statement.component.ts");
            /* harmony import */ var _statementform_statementform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statementform/statementform.component */ "./src/app/demo/report/report/business/bank-statement/statementform/statementform.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bank_statement_component__WEBPACK_IMPORTED_MODULE_3__["BankStatementComponent"]
                },
                {
                    path: 'form',
                    component: _statementform_statementform_component__WEBPACK_IMPORTED_MODULE_4__["StatementformComponent"]
                }
            ];
            var BankStatementRoutingModule = /** @class */ (function () {
                function BankStatementRoutingModule() {
                }
                return BankStatementRoutingModule;
            }());
            BankStatementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BankStatementRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/business/bank-statement/bank-statement.component.scss": 
        /*!******************************************************************************************!*\
          !*** ./src/app/demo/report/report/business/bank-statement/bank-statement.component.scss ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".bankacstmt {\n  background-color: #f5ebeb;\n  padding: 2%; }\n\n.bankacstmt .row {\n  margin: 2% 0; }\n\n.bankacstmt .bankname h6 {\n  line-height: 10px; }\n\n.bankacstmt .bastmt h6 {\n  margin-top: 12%; }\n\n.bankacstmt .custname h6 {\n  line-height: 10px; }\n\n.custhead {\n  background-color: #f5ebeb;\n  color: black; }\n\n.custheadn {\n  color: black; }\n\n.banktable {\n  background-color: white;\n  color: black;\n  width: 100%;\n  padding: 2%; }\n\n.banktable tr {\n  margin: 2% 0;\n  padding: 2% 0; }\n\n.banktable th, .banktable td {\n  padding: 1%; }\n\n.banktable .banktablehead {\n  background-color: #7b7f80; }\n\n.total {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9yZXBvcnQvcmVwb3J0L2J1c2luZXNzL2Jhbmstc3RhdGVtZW50L0M6XFxVc2Vyc1xcQmhhcmFuZWVkaGFyYW5cXERvd25sb2Fkc1xcV01TLTFcXHdtcyAxNC0xMi9zcmNcXGFwcFxcZGVtb1xccmVwb3J0XFxyZXBvcnRcXGJ1c2luZXNzXFxiYW5rLXN0YXRlbWVudFxcYmFuay1zdGF0ZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBb0M7RUFDcEMsV0FBVyxFQUFBOztBQUVmO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSx5QkFBb0M7RUFDcEMsWUFBWSxFQUFBOztBQUVoQjtFQUFZLFlBQVksRUFBQTs7QUFDeEI7RUFDSSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBRWY7RUFBZSxZQUFZO0VBQUUsYUFBYSxFQUFBOztBQUMxQztFQUE4QixXQUFXLEVBQUE7O0FBQ3pDO0VBQ0kseUJBQW9DLEVBQUE7O0FBRXhDO0VBQVMsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3JlcG9ydC9yZXBvcnQvYnVzaW5lc3MvYmFuay1zdGF0ZW1lbnQvYmFuay1zdGF0ZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFua2Fjc3RtdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIzNSwgMjM1KTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcbi5iYW5rYWNzdG10IC5yb3d7XHJcbiAgICBtYXJnaW46IDIlIDA7XHJcbn1cclxuLmJhbmthY3N0bXQgLmJhbmtuYW1lIGg2e1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuLmJhbmthY3N0bXQgLmJhc3RtdCBoNntcclxuICAgIG1hcmdpbi10b3A6IDEyJTtcclxufVxyXG4uYmFua2Fjc3RtdCAuY3VzdG5hbWUgaDZ7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxufVxyXG4uY3VzdGhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMzUsIDIzNSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmN1c3RoZWFkbnsgY29sb3I6IGJsYWNrO31cclxuLmJhbmt0YWJsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG4uYmFua3RhYmxlIHRyeyBtYXJnaW46IDIlIDA7IHBhZGRpbmc6IDIlIDA7fVxyXG4uYmFua3RhYmxlIHRoLCAuYmFua3RhYmxlIHRkeyBwYWRkaW5nOiAxJTsgfVxyXG4uYmFua3RhYmxlIC5iYW5rdGFibGVoZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMywgMTI3LCAxMjgpO1xyXG59XHJcbi50b3RhbHsgIHRleHQtYWxpZ246IGNlbnRlcjsgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/business/bank-statement/bank-statement.component.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/demo/report/report/business/bank-statement/bank-statement.component.ts ***!
          \****************************************************************************************/
        /*! exports provided: BankStatementComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankStatementComponent", function () { return BankStatementComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _bankservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bankservice */ "./src/app/demo/report/report/business/bank-statement/bankservice.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var BankStatementComponent = /** @class */ (function () {
                function BankStatementComponent(router, bankService, toster) {
                    this.router = router;
                    this.bankService = bankService;
                    this.toster = toster;
                    this.arr = [];
                    this.transaction = [];
                    this.year = new Date();
                    this.val = false;
                    this.hide = false;
                    this.transact = false;
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                }
                BankStatementComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.year.getFullYear();
                    console.log(this.year, 'year');
                    this.bankService.getProduct().subscribe(function (data) {
                        _this.getData = data;
                        console.log(_this.getData);
                        _this.dtTrigger.next();
                    });
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                };
                BankStatementComponent.prototype.ngOnDestroy = function () {
                    // Do not forget to unsubscribe the event
                    this.dtTrigger.unsubscribe();
                };
                BankStatementComponent.prototype.setchange = function ($event) {
                };
                BankStatementComponent.prototype.addform = function () {
                    localStorage.removeItem('bank');
                    localStorage.removeItem('transact');
                    this.transact = false;
                    localStorage.setItem('transact', JSON.stringify(this.transact));
                    this.router.navigate(['/report/business-status/bank-statement/form']);
                };
                BankStatementComponent.prototype.show = function (val) {
                    this.val = true;
                    this.name = val.supplier;
                    this.date = val.date;
                    this.invoice = val.invoiceNo;
                    this.arr = val.invoice;
                    console.log(val, 'show');
                };
                BankStatementComponent.prototype.back = function () {
                    this.val = false;
                };
                BankStatementComponent.prototype.check = function (data) {
                    this.trans = data;
                    this.bankname = data.bankName;
                    this.bankaddress = data.bankAddress;
                    this.holdername = data.accountHolderName;
                    this.holderaddress = data.address;
                    this.branch = data.branch;
                    this.Acnum = data.accountNumber;
                    this.transaction = data.details;
                    console.log(this.transaction, 'show');
                    this.hide = true;
                };
                BankStatementComponent.prototype.addTrans = function (value) {
                    localStorage.removeItem('loan');
                    this.transact = true;
                    localStorage.setItem('transact', JSON.stringify(this.transact));
                    localStorage.setItem('bank', JSON.stringify(value));
                    this.router.navigate(['/report/business-status/bank-statement/form']);
                    // this.router.navigate(['adddetails']);
                };
                BankStatementComponent.prototype.editDetail = function (value) {
                    localStorage.removeItem('transact');
                    localStorage.removeItem('bank');
                    this.transact = false;
                    localStorage.setItem('transact', JSON.stringify(this.transact));
                    localStorage.setItem('bank', JSON.stringify(value));
                    this.router.navigate(['/report/business-status/bank-statement/form']);
                };
                BankStatementComponent.prototype.delete = function (id) {
                    var _this = this;
                    this.bankService.deleteProduct(id).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('deleted successfully');
                    });
                };
                return BankStatementComponent;
            }());
            BankStatementComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _bankservice__WEBPACK_IMPORTED_MODULE_3__["BankService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
            ]; };
            BankStatementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bank-statement',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bank-statement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/business/bank-statement/bank-statement.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bank-statement.component.scss */ "./src/app/demo/report/report/business/bank-statement/bank-statement.component.scss")).default]
                })
            ], BankStatementComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/business/bank-statement/bank-statement.module.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/demo/report/report/business/bank-statement/bank-statement.module.ts ***!
          \*************************************************************************************/
        /*! exports provided: BankModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankModule", function () { return BankModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _bank_statement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bank-statement.component */ "./src/app/demo/report/report/business/bank-statement/bank-statement.component.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _bank_statement_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bank-statement-routing.module */ "./src/app/demo/report/report/business/bank-statement/bank-statement-routing.module.ts");
            /* harmony import */ var _statementform_statementform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./statementform/statementform.component */ "./src/app/demo/report/report/business/bank-statement/statementform/statementform.component.ts");
            // import { FileUploadComponent } from './fi';
            // import { NoteformComponent } from "./noteform/noteform.component";
            var BankModule = /** @class */ (function () {
                function BankModule() {
                }
                return BankModule;
            }());
            BankModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bank_statement_component__WEBPACK_IMPORTED_MODULE_4__["BankStatementComponent"], _statementform_statementform_component__WEBPACK_IMPORTED_MODULE_7__["StatementformComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bank_statement_routing_module__WEBPACK_IMPORTED_MODULE_6__["BankStatementRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
                    ]
                })
            ], BankModule);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/business/bank-statement/bankservice.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/demo/report/report/business/bank-statement/bankservice.ts ***!
          \***************************************************************************/
        /*! exports provided: BankService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankService", function () { return BankService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../environments/enviromentURL */ "./src/environments/enviromentURL.ts");
            var BankService = /** @class */ (function () {
                function BankService(http) {
                    var _this = this;
                    this.http = http;
                    this._refreshNeeded$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                    });
                }
                Object.defineProperty(BankService.prototype, "refreshNeeded$", {
                    get: function () {
                        return this._refreshNeeded$;
                    },
                    enumerable: true,
                    configurable: true
                });
                BankService.prototype.getProduct = function () {
                    return this.http.get(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl + "/bankstatement" + '/' + this.id);
                };
                BankService.prototype.postProduct = function (value) {
                    return this.http.post(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl + "/bankstatement", value);
                };
                BankService.prototype.deleteProduct = function (id) {
                    return this.http.delete(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl + "/bankstatement" + '/' + id);
                };
                BankService.prototype.putProduct = function (value) {
                    return this.http.put(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl + "/bankstatement" + '/' + value._id, value);
                };
                return BankService;
            }());
            BankService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            BankService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BankService);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/business/bank-statement/statementform/statementform.component.scss": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/demo/report/report/business/bank-statement/statementform/statementform.component.scss ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n:-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input {\n  background-color: white;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform input[type=date] {\n  color: #b3aeae;\n  padding-left: 8px; }\n\n.data {\n  height: 40px; }\n\n.receiptaddform button {\n  color: white !important;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  background-color: #65abe4;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.submit button {\n  margin-bottom: 0% !important; }\n\n.submit {\n  color: white !important;\n  width: 20%;\n  margin-left: 40%;\n  margin-bottom: 0% !important;\n  background-color: #65abe4; }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.danger {\n  background-color: #8b4646 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9yZXBvcnQvcmVwb3J0L2J1c2luZXNzL2Jhbmstc3RhdGVtZW50L3N0YXRlbWVudGZvcm0vQzpcXFVzZXJzXFxCaGFyYW5lZWRoYXJhblxcRG93bmxvYWRzXFxXTVMtMVxcd21zIDE0LTEyL3NyY1xcYXBwXFxkZW1vXFxyZXBvcnRcXHJlcG9ydFxcYnVzaW5lc3NcXGJhbmstc3RhdGVtZW50XFxzdGF0ZW1lbnRmb3JtXFxzdGF0ZW1lbnRmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBUyxFQUFBOztBQUViO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUN0QztFQUF1QixlQUFlLEVBQUE7O0FBQ3RDO0VBQ0ksdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBc0I7RUFFdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFBa0MsY0FBeUI7RUFBRSxpQkFBaUIsRUFBQTs7QUFFOUU7RUFDRSxZQUFZLEVBQUE7O0FBQ2Q7RUFDSSx1QkFBdUI7RUFDdEIsYUFBYTtFQUNkLGNBQWM7RUFDZCxjQUFzQjtFQUV0Qix5QkFBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsMENBQXVDLEVBQUE7O0FBRzNDO0VBQ0ksNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLHlCQUFvQyxFQUFBOztBQUV4QztFQUF3Qix1Q0FBdUMsRUFBQTs7QUFDL0Q7RUFBUyxvQ0FBNkMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC9idXNpbmVzcy9iYW5rLXN0YXRlbWVudC9zdGF0ZW1lbnRmb3JtL3N0YXRlbWVudGZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY29udGFpbmVyXHJcbi8vIHtcclxuLy8gICAgIHBhZGRpbmc6IDIlO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMXB4IDNweCAzcHggM3B4IGxpZ2h0Ymx1ZTtcclxuLy8gfVxyXG4vLyAudGhoZWFkXHJcbi8vIHtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDIlIDA7XHJcbi8vIH1cclxuXHJcblxyXG4vLyA9PT09PVxyXG4ucmVjZWlwdGFkZGZvcm17XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuOjpwbGFjZWhvbGRlcnsgb3BhY2l0eTogMC43O2NvbG9yOmdyYXk7IH1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0eyBmb250LXNpemU6IDEzcHg7IH1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMyU7XHJcbiAgICBjb2xvcjogcmdiKDE0LCAxMywgMTMpO1xyXG4gICAgLy8gY29sb3I6IHJnYigyNDUsIDE0NiwgMTcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRThFOEU4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjEpOyBcclxufVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXRbdHlwZT1kYXRlXXsgY29sb3I6IHJnYigxNzksIDE3NCwgMTc0KTsgcGFkZGluZy1sZWZ0OiA4cHg7fVxyXG5cclxuLmRhdGFcclxueyBoZWlnaHQ6IDQwcHg7fVxyXG4ucmVjZWlwdGFkZGZvcm0gYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMCAwIDMlO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMTMsIDEzKTtcclxuICAgIC8vIG1hcmdpbjogMTUlIDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDE3MSwgMjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U4RThFODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIxMiwgMTI0KTtcclxufVxyXG4uc3VibWl0IGJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDAlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5zdWJtaXR7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDE3MSwgMjI4KTtcclxufVxyXG4ucmVjZWlwdGFkZGZvcm0gLmNsZWFyeyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsICFpbXBvcnRhbnQ7IH1cclxuLmRhbmdlcnsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgNzAsIDcwKSAhaW1wb3J0YW50OyB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/business/bank-statement/statementform/statementform.component.ts": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/demo/report/report/business/bank-statement/statementform/statementform.component.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: StatementformComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementformComponent", function () { return StatementformComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _bankservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bankservice */ "./src/app/demo/report/report/business/bank-statement/bankservice.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var StatementformComponent = /** @class */ (function () {
                function StatementformComponent(fb, bankService, router, toster) {
                    var _this = this;
                    this.fb = fb;
                    this.bankService = bankService;
                    this.router = router;
                    this.toster = toster;
                    this.arr = [];
                    this.transact = false;
                    this.change = 0;
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                        _this.Name = element.branchName;
                        _this.location = element.branchLocation;
                    });
                }
                StatementformComponent.prototype.ngOnInit = function () {
                    var em = JSON.parse(localStorage.getItem('transact'));
                    console.log(em, 'emi');
                    this.transact = em;
                    this.statementForm = this.fb.group({
                        _id: [''],
                        branchId: this.id,
                        branchLocation: this.location,
                        branchName: this.Name,
                        bankName: [''],
                        bankAddress: [''],
                        bankBranch: [''],
                        accountHolderName: [''],
                        accountNumber: [''],
                        accountType: [''],
                        ifscCode: [''],
                        address: [''],
                        details: this.fb.array([this.createItem()])
                    });
                    var cih = localStorage.getItem('bank');
                    var ca = JSON.parse(cih);
                    this.statementForm.patchValue(ca);
                };
                StatementformComponent.prototype.createItem = function () {
                    return this.fb.group({
                        //  _id:[''],
                        date: [''],
                        description: [''],
                        withdrawel: [''],
                        deposit: [''],
                        charges: [''],
                        balance: [''],
                    });
                };
                Object.defineProperty(StatementformComponent.prototype, "details", {
                    get: function () {
                        return this.statementForm.get('details');
                    },
                    enumerable: true,
                    configurable: true
                });
                // addItem() {
                //   this.change++;
                //   this.details = this.statementForm.get('invoice') as FormArray;
                //   this.details.push(this.createItem());
                // }
                // removeItem(index) {
                //   this.change--;
                //   this.details = this.statementForm.get('invoice') as FormArray;
                //   this.details.removeAt(index)
                // }
                StatementformComponent.prototype.onSubmit = function (value) {
                    var _this = this;
                    console.log(value);
                    if (value._id == '') {
                        this.bankService.postProduct(value).subscribe(function (data) {
                            console.log(data, 'post');
                            _this.toster.success('added successfully');
                        });
                        localStorage.removeItem('loan');
                    }
                    else {
                        console.log(value, 'edit');
                        this.bankService.putProduct(value).subscribe(function (data) {
                            console.log(data);
                            _this.toster.success('updated successfully');
                        });
                        localStorage.removeItem('loan');
                    }
                };
                StatementformComponent.prototype.Submit = function (value) {
                    var _this = this;
                    this.bankService.putProduct(value).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('added successfully');
                    });
                };
                StatementformComponent.prototype.ubmit = function (value) {
                    var _this = this;
                    this.bankService.postProduct(value).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('added successfully');
                    });
                };
                return StatementformComponent;
            }());
            StatementformComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _bankservice__WEBPACK_IMPORTED_MODULE_3__["BankService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
            ]; };
            StatementformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-statementform',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statementform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/business/bank-statement/statementform/statementform.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./statementform.component.scss */ "./src/app/demo/report/report/business/bank-statement/statementform/statementform.component.scss")).default]
                })
            ], StatementformComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=bank-statement-bank-statement-module-es2015.js.map
//# sourceMappingURL=bank-statement-bank-statement-module-es5.js.map
//# sourceMappingURL=bank-statement-bank-statement-module-es5.js.map