(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cashin-check-cashin-check-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n<div class=\"col-lg-12 text-right\">\n  <button type=\"button\" class=\"btn btn-outline-primary\" (click)='addforms()'>\n    <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n</button>\n</div>\n<div class=\"col-md-12\">  \n  <app-card cardTitle=\"Cash-In Cheque\" [options]=\"false\" blockClass=\"table-border-style\"> \n    <div class=\"table-responsive table-container\" >  \n      <table  class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">  \n        <thead>  \n          <tr> \n            <th>Branch </th>  \n            <th>Cheque Number</th>\n            <th>Account Number</th>\n            <th>Date On Cheque</th>   \n            <th>Amount</th>\n            <th>Beneficiary</th>\n            <th>Presented On</th>\n            <th>Remarks</th>\n            <th>Action</th>\n          </tr>  \n        </thead>  \n        <tbody>\n            <tr *ngFor=\"let data of getCheque\">\n                <td>{{data.bankBranch}}</td>\n                <td>{{data.chequeNumber}}</td>\n                <td>{{data.accountNumber}}</td>\n                <td>{{data.dateonCheque}}</td>\n                <td>{{data.amount}}</td>\n                <td>{{data.beneficiary}}</td>\n                <td>{{data.presentedOn}}</td>\n                <td>{{data.remarks}}</td>\n                <td><button style=\"background:none; border: none;\" (click)='editCheque(data)'><i style=\"color: #007bff;\"class=\"fa fa-edit\">  </i></button> &nbsp;&nbsp; \n                    <button  style=\"background:none; border: none;\" (click)='deleteCheque(data._id)'> <i style = \"color:red;\"class=\"fa fa-trash\"> </i> </button>\n                </td>\n            </tr>\n        </tbody>\n      </table> \n    </div>\n  </app-card>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n      <div class=\"row\" >\n        <div class=\"col-xl-12\">\n          <app-card cardTitle=\"Cheque Details\" [options]=\"false\" blockClass=\"table-border-style\">\n            <form class=\"receiptaddform\"[formGroup] = \"chequeForm\" (ngSubmit) = \"onsubmit(chequeForm.value)\">\n              <div class=\"row\">\n                <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"_id\"> </div>\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n    \n                <div class=\"col-lg-6\"> \n                  <label for=\"date\">Branch:</label> <br>  \n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter branch\" formControlName=\"bankBranch\" >\n                  \n                </div>\n                <div class=\"col-lg-6\"> <label for=\"itemcode\">Cheque-Number:</label> <br>  \n                  <input type=\"text\" class=\"form-control\"  placeholder=\"Enter chequeNumber\" formControlName=\"chequeNumber\"> \n                  \n                </div>\n                <div class=\"col-lg-6\"> <label for=\"itemcode\">Account-Number :</label> <br>  \n                  <input type=\"text\" class=\"form-control\"  placeholder=\"Enter accountNumber\" formControlName=\"accountNumber\"> \n                  \n                </div>\n             \n            \n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Date-on-Cheque :</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter dateonCheque\" formControlName=\"dateonCheque\"> \n                \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Amount:</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter amount\" formControlName=\"amount\"> \n                \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Beneficiary:</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter beneficiary\" formControlName=\"beneficiary\">    \n              </div> \n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Presented On:</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter presentedOn\" formControlName=\"presentedOn\"> \n                \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Remarks:</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter remarks\" formControlName=\"remarks\"> \n                \n              </div>\n            \n            </div>\n          <div class=\"row sub\"> \n          <div class=\"submit\"  >  <button type=\"submit\" > Submit </button>  </div>\n        </div>\n      \n            </form>\n          </app-card>\n        </div>\n      </div>\n      \n    ");

/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ChequeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeRoutingModule", function() { return ChequeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cashin_check_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashin-check.component */ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.ts");
/* harmony import */ var _chequeform_chequeform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chequeform/chequeform.component */ "./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.ts");





const routes = [
    {
        path: '',
        component: _cashin_check_component__WEBPACK_IMPORTED_MODULE_3__["CashinCheckComponent"]
    },
    {
        path: 'chequeform',
        component: _chequeform_chequeform_component__WEBPACK_IMPORTED_MODULE_4__["ChequeformComponent"]
    }
];
let ChequeRoutingModule = class ChequeRoutingModule {
};
ChequeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChequeRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvY2FzaC1pbi9jYXNoaW4vY2FzaGluLWNoZWNrL2Nhc2hpbi1jaGVjay5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CashinCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashinCheckComponent", function() { return CashinCheckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cheque_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cheque.service */ "./src/app/demo/pages/cash-in/cashin/cashin-check/cheque.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let CashinCheckComponent = class CashinCheckComponent {
    constructor(router, chequeService, toster) {
        this.router = router;
        this.chequeService = chequeService;
        this.toster = toster;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.chequeService.getCheque().subscribe(data => {
            console.log(data);
            this.getCheque = data;
            this.dtTrigger.next();
        });
    }
    addforms() {
        this.router.navigate(['/cashin/cashin-cheque/chequeform']);
    }
    addform(value) {
        localStorage.removeItem('setvalue');
        this.router.navigate(['/cashin/cashin-cheque/chequeform']);
        // this.router.navigate(['adddetails']);
    }
    editCheque(value) {
        localStorage.setItem('setvalue', JSON.stringify(value));
        this.router.navigate(['/cashin/cashin-cheque/chequeform']);
    }
    deleteCheque(id) {
        this.chequeService.deleteCheque(id).subscribe(data => {
            console.log(data);
            this.toster.success('deleted successfully');
        });
    }
};
CashinCheckComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _cheque_service__WEBPACK_IMPORTED_MODULE_3__["ChequeService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
CashinCheckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cashin-check',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cashin-check.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cashin-check.component.scss */ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.scss")).default]
    })
], CashinCheckComponent);



/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ChequeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeModule", function() { return ChequeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _chequeform_chequeform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chequeform/chequeform.component */ "./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.ts");
/* harmony import */ var _cashin_check_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cashin-check-routing.module */ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check-routing.module.ts");
/* harmony import */ var _cashin_check_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cashin-check.component */ "./src/app/demo/pages/cash-in/cashin/cashin-check/cashin-check.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");









let ChequeModule = class ChequeModule {
};
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



/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/cheque.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/cheque.service.ts ***!
  \**************************************************************************/
/*! exports provided: ChequeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeService", function() { return ChequeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../environments/enviromentURL */ "./src/environments/enviromentURL.ts");




let ChequeService = class ChequeService {
    constructor(http) {
        this.http = http;
        var us = JSON.parse(localStorage.getItem('user'));
        us.forEach(element => {
            this.id = element.branchId;
        });
    }
    getCheque() {
        return this.http.get(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/cheque` + '/' + this.id);
    }
    postCheque(value) {
        return this.http.post(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/cheque`, value);
    }
    putCheque(value) {
        return this.http.put(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/cheque` + '/' + value._id, value);
    }
    deleteCheque(id) {
        return this.http.delete(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/cheque` + '/' + id);
    }
};
ChequeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ChequeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChequeService);



/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input {\n  background-color: white;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform input[type=month] {\n  padding: 2px;\n  color: #b3aeae;\n  padding-left: 8px; }\n\n.receiptaddform button {\n  color: white !important;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  background-color: #65abe4;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.submit button {\n  margin-bottom: 0% !important; }\n\n.submit {\n  color: white !important;\n  width: 20%;\n  margin-left: 40%;\n  margin-bottom: 0% !important;\n  background-color: #65abe4; }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.danger {\n  background-color: #8b4646 !important; }\n\n.receiptaddform select {\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform select option:first {\n  color: #999; }\n\n.sub {\n  margin-left: 0px; }\n\n@media (max-width: 430px) {\n  .sub {\n    margin-left: -149px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9jYXNoLWluL2Nhc2hpbi9jYXNoaW4tY2hlY2svY2hlcXVlZm9ybS9DOlxcVXNlcnNcXEJoYXJhbmVlZGhhcmFuXFxEb3dubG9hZHNcXFdNUy0xXFx3bXMgMTQtMTIvc3JjXFxhcHBcXGRlbW9cXHBhZ2VzXFxjYXNoLWluXFxjYXNoaW5cXGNhc2hpbi1jaGVja1xcY2hlcXVlZm9ybVxcY2hlcXVlZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVMsRUFBQTs7QUFFYjtFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQ3RDO0VBQXVCLGVBQWUsRUFBQTs7QUFDdEM7RUFDSSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFzQjtFQUV0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUc3QjtFQUFtQyxZQUFZO0VBQUMsY0FBeUI7RUFBRSxpQkFBaUIsRUFBQTs7QUFFNUY7RUFDSSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFzQjtFQUV0Qix5QkFBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsMENBQXVDLEVBQUE7O0FBRzNDO0VBQ0ksNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLHlCQUFvQyxFQUFBOztBQUV4QztFQUF3Qix1Q0FBdUMsRUFBQTs7QUFDL0Q7RUFBUyxvQ0FBNkMsRUFBQTs7QUFDdEQ7RUFDSSxhQUFhO0VBRWIsY0FBYztFQUNkLGNBQXNCO0VBRXRCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBR3pCO0VBQ1EsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0s7SUFDSSxtQkFBbUIsRUFBQSxFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvY2FzaC1pbi9jYXNoaW4vY2FzaGluLWNoZWNrL2NoZXF1ZWZvcm0vY2hlcXVlZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNlaXB0YWRkZm9ybXtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG46OnBsYWNlaG9sZGVyeyBvcGFjaXR5OiAwLjc7Y29sb3I6Z3JheTsgfVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXR7IGZvbnQtc2l6ZTogMTNweDsgfVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAzJTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEzLCAxMyk7XHJcbiAgICAvLyBjb2xvcjogcmdiKDI0NSwgMTQ2LCAxNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNFOEU4RTg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMSk7IFxyXG59XHJcbi5yZWNlaXB0YWRkZm9ybSBpbnB1dFt0eXBlPW1vbnRoXXsgcGFkZGluZzogMnB4O2NvbG9yOiByZ2IoMTc5LCAxNzQsIDE3NCk7IHBhZGRpbmctbGVmdDogOHB4O31cclxuXHJcbi5yZWNlaXB0YWRkZm9ybSBidXR0b257XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAzJTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEzLCAxMyk7XHJcbiAgICAvLyBtYXJnaW46IDE1JSAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxNzEsIDIyOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNFOEU4RTg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMTIsIDEyNCk7XHJcbn1cclxuLnN1Ym1pdCBidXR0b257XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uc3VibWl0e1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxNzEsIDIyOCk7XHJcbn1cclxuLnJlY2VpcHRhZGRmb3JtIC5jbGVhcnsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbCAhaW1wb3J0YW50OyB9XHJcbi5kYW5nZXJ7IGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDcwLCA3MCkgIWltcG9ydGFudDsgfVxyXG4ucmVjZWlwdGFkZGZvcm0gc2VsZWN0e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwIDAgMyU7XHJcbiAgICBjb2xvcjogcmdiKDE0LCAxMywgMTMpO1xyXG4gICAgLy8gY29sb3I6IHJnYigyNDUsIDE0NiwgMTcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRThFOEU4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVjZWlwdGFkZGZvcm0gc2VsZWN0IG9wdGlvbjpmaXJzdCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1YntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhICAobWF4LXdpZHRoOiA0MzBweCl7XHJcbiAgICAgICAgICAgICAuc3Vie1xyXG4gICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTQ5cHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ChequeformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeformComponent", function() { return ChequeformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _cheque_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cheque.service */ "./src/app/demo/pages/cash-in/cashin/cashin-check/cheque.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let ChequeformComponent = class ChequeformComponent {
    constructor(router, fb, chequeService, toster) {
        this.router = router;
        this.fb = fb;
        this.chequeService = chequeService;
        this.toster = toster;
        var us = JSON.parse(localStorage.getItem('user'));
        us.forEach(element => {
            this.id = element.branchId;
            this.Name = element.branchName;
            this.location = element.branchLocation;
        });
    }
    ngOnInit() {
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
        let che = localStorage.getItem('setvalue');
        let ch = JSON.parse(che);
        this.chequeForm.patchValue(ch);
    }
    onsubmit(value) {
        if (value._id === '') {
            this.chequeService.postCheque(value).subscribe(data => {
                console.log(data);
                this.toster.success('added successfully');
            });
            localStorage.removeItem('setvalue');
        }
        else {
            this.chequeService.putCheque(value).subscribe(data => {
                console.log(data);
                this.toster.success('updated successfully');
            });
            localStorage.removeItem('setvalue');
        }
    }
};
ChequeformComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _cheque_service__WEBPACK_IMPORTED_MODULE_4__["ChequeService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
ChequeformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chequeform',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chequeform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chequeform.component.scss */ "./src/app/demo/pages/cash-in/cashin/cashin-check/chequeform/chequeform.component.scss")).default]
    })
], ChequeformComponent);



/***/ })

}]);
//# sourceMappingURL=cashin-check-cashin-check-module-es2015.js.map