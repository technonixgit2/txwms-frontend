(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loanaccount-loanaccount-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/loanaccount/bankform/bankform.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/loanaccount/bankform/bankform.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\" >\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Loan-Account Details\" [options]=\"false\" blockClass=\"table-border-style\">\n        <form class=\"receiptaddform\"[formGroup] = \"loanForm\" (ngSubmit) = \"onSubmit(loanForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"_id\"> </div>\n            <div [hidden]='emi==true'>\n              <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n              <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n              <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n  \n            <div class=\"col-lg-6\"> \n              <label for=\"date\">Date:</label> <br>  \n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter date\" formControlName=\"date\" >\n              \n            </div>\n            <div class=\"col-lg-6\"> <label for=\"itemcode\">Bank Name:</label> <br>  \n              <input type=\"text\" class=\"form-control\"  placeholder=\"Enter bankName\" formControlName=\"bankName\"> \n              \n            </div>\n            <div class=\"col-lg-6\"> <label for=\"itemcode\">Account-Holder Name :</label> <br>  \n              <input type=\"text\" class=\"form-control\"  placeholder=\"Enter source\" formControlName=\"accountHolderName\"> \n              \n            </div>\n            <div class=\"col-lg-6\"> <label for=\"itemcode\">AccountNumber:</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter accountNumber\" formControlName=\"accountNumber\"> \n                \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\"> IFSC-Code :</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter ifscCode\" formControlName=\"ifscCode\"> \n                \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\"> Branch Name:</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter Branch Name\" formControlName=\"bankBranch\"> \n                \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Loan Type :</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter LoanType\" formControlName=\"loanType\"> \n                \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\"> Loan Period:</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter Loan Period\" formControlName=\"loanPeriod\"> \n                \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\"> Loan Amount :</label> <br>  \n                <input type=\"text\" class=\"form-control\"  placeholder=\"Enter  loan Amount\" formControlName=\"loanAmount\"> \n                \n              </div>\n             \n                <div class=\"col-lg-12\">\n                <div class=\"submit\"><button type=\"submit\" > Submit </button>  </div>\n              </div>\n           \n            </div>\n             \n              <div class=\"col-lg-12\" [hidden]='emi==false'>\n                <h3 class=\"billtitle\"> EMI-Details </h3>\n                <div formArrayName=\"paid\" *ngFor=\"let a of loanForm.get('paid')['controls']; let i = index\">\n                  <div [formGroupName]=\"i\">\n                    <!-- <input type=\"hidden\" formControlName=\"_id\"> -->\n                    <div class=\"col-lg-6\"> <label for=\"itemcode\"> Paid Date :</label> <br>  \n                      <input type=\"text\" class=\"form-control\"  placeholder=\"Enter date\" formControlName=\"date\">   \n                    </div>\n                    <div class=\"col-lg-6\"> <label for=\"itemcode\"> Amount of Paid :</label> <br>  \n                      <input type=\"text\" class=\"form-control\"  placeholder=\"Enter Amount\" formControlName=\"emi\">                       \n                    </div>                  \n                  </div>         \n                  </div>\n                  <div class=\"row sub\"> \n                    <div class=\"col-lg-12\">\n                    <div class=\"submit\"><button type=\"submit\" > Submit </button>  </div>\n                  </div>\n                </div>\n                </div>          \n            </div>\n        </form>\n      </app-card>\n    </div>\n  </div>\n\n\n\n\n\n\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-lg-12 text-right\">\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)='addforms()'>\n        <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n    </button>\n    </div>\n    \n    <div class=\"col-md-12\">  \n      <app-card cardTitle=\"Loan-Account\" [options]=\"false\" blockClass=\"table-border-style\">  \n        <div class=\"table-responsive\" >  \n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">  \n            <thead>  \n              <tr> \n                <th>Date</th>  \n                <th>Bank Name</th>\n                <th>Account-Holder Name</th> \n                <th>Account Number</th>  \n                <th>IFSC-Code</th>\n                <th>Branch Name</th> \n                <th>Loan-Type</th>  \n                <th>Loan-Period</th>\n                <th>Loan-Amount</th> \n                <th>Add-EMI</th>\n                <th>Action</th> \n              </tr>  \n            </thead>  \n            <tbody>\n                <tr *ngFor=\"let data of getCashinhand\">\n                    <td>{{data.date}}</td>\n                    <td>{{data.bankName}}</td>\n                    <td>{{data.accountHolderName}}</td>\n                    <td>{{data.accountNumber}}</td>\n                    <td>{{data.ifscCode}}</td>\n                    <td>{{data.bankBranch}}</td>\n                    <td>{{data.loanType}}</td>\n                    <td>{{data.loanPeriod}}</td>\n                    <td>{{data.loanAmount}}</td>\n                    <td> <button style=\"background: none; border: none;\" (click)='addEmi(data)'><i style=\"color: gray ;\" class=\"fas fa-plus\"> </i></button></td>\n                    <td><button style=\"background: none; border: none;\" (click)='editcashinhand(data)'> <i style=\"color: #007bff;\"class=\"fa fa-edit\">  </i> </button>  &nbsp; \n                      <button style=\"background: none; border: none;\" (click)='deletecashinhand(data._id)'> <i style=\"color: red;\" class=\"fa fa-trash\"> </i> </button>\n                    </td> \n                </tr>\n            </tbody>\n          </table> \n        </div>\n      </app-card>\n    </div>\n    </div>");

/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/loanaccount/bankform/bankform.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/loanaccount/bankform/bankform.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n:-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input {\n  background-color: white;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform input[type=month] {\n  padding: 2px;\n  color: #b3aeae;\n  padding-left: 8px; }\n\n.receiptaddform button {\n  color: white !important;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  background-color: #65abe4;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.submit button {\n  margin-bottom: 0% !important; }\n\n.submit {\n  color: white !important;\n  width: 20%;\n  margin-left: 40%;\n  margin-bottom: 0% !important;\n  background-color: #65abe4; }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.danger {\n  background-color: #8b4646 !important; }\n\n.receiptaddform select {\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform select option:first {\n  color: #999; }\n\n.sub {\n  margin-left: 0px; }\n\n@media (max-width: 430px) {\n  .sub {\n    margin-left: 38px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9jYXNoLWluL2Nhc2hpbi9sb2FuYWNjb3VudC9iYW5rZm9ybS9DOlxcVXNlcnNcXEJoYXJhbmVlZGhhcmFuXFxEb3dubG9hZHNcXFdNUy0xXFx3bXMgMTQtMTIvc3JjXFxhcHBcXGRlbW9cXHBhZ2VzXFxjYXNoLWluXFxjYXNoaW5cXGxvYW5hY2NvdW50XFxiYW5rZm9ybVxcYmFua2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFTLEVBQUE7O0FBRWI7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQ3RDO0VBQXVCLGVBQWUsRUFBQTs7QUFDdEM7RUFDSSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFzQjtFQUV0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUc3QjtFQUFtQyxZQUFZO0VBQUMsY0FBeUI7RUFBRSxpQkFBaUIsRUFBQTs7QUFFNUY7RUFDSSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFzQjtFQUV0Qix5QkFBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsMENBQXVDLEVBQUE7O0FBRzNDO0VBQ0ksNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLHlCQUFvQyxFQUFBOztBQUV4QztFQUF3Qix1Q0FBdUMsRUFBQTs7QUFDL0Q7RUFBUyxvQ0FBNkMsRUFBQTs7QUFDdEQ7RUFDSSxhQUFhO0VBRWIsY0FBYztFQUNkLGNBQXNCO0VBRXRCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBR3pCO0VBQ1EsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0s7SUFDSSxpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvY2FzaC1pbi9jYXNoaW4vbG9hbmFjY291bnQvYmFua2Zvcm0vYmFua2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjZWlwdGFkZGZvcm17XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuOjpwbGFjZWhvbGRlcnsgb3BhY2l0eTogMC43O2NvbG9yOmdyYXk7IH1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0eyBmb250LXNpemU6IDEzcHg7IH1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMyU7XHJcbiAgICBjb2xvcjogcmdiKDE0LCAxMywgMTMpO1xyXG4gICAgLy8gY29sb3I6IHJnYigyNDUsIDE0NiwgMTcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRThFOEU4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjEpOyBcclxufVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXRbdHlwZT1tb250aF17IHBhZGRpbmc6IDJweDtjb2xvcjogcmdiKDE3OSwgMTc0LCAxNzQpOyBwYWRkaW5nLWxlZnQ6IDhweDt9XHJcblxyXG4ucmVjZWlwdGFkZGZvcm0gYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMyU7XHJcbiAgICBjb2xvcjogcmdiKDE0LCAxMywgMTMpO1xyXG4gICAgLy8gbWFyZ2luOiAxNSUgMCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMTcxLCAyMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRThFOEU4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjEyLCAxMjQpO1xyXG59XHJcbi5zdWJtaXQgYnV0dG9ue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCUgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLnN1Ym1pdHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMTcxLCAyMjgpO1xyXG59XHJcbi5yZWNlaXB0YWRkZm9ybSAuY2xlYXJ7IGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWwgIWltcG9ydGFudDsgfVxyXG4uZGFuZ2VyeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCA3MCwgNzApICFpbXBvcnRhbnQ7IH1cclxuLnJlY2VpcHRhZGRmb3JtIHNlbGVjdHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCAwIDMlO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMTMsIDEzKTtcclxuICAgIC8vIGNvbG9yOiByZ2IoMjQ1LCAxNDYsIDE3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U4RThFODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlY2VpcHRhZGRmb3JtIHNlbGVjdCBvcHRpb246Zmlyc3Qge1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICAuc3Vie1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAbWVkaWEgIChtYXgtd2lkdGg6IDQzMHB4KXtcclxuICAgICAgICAgICAgIC5zdWJ7XHJcbiAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM4cHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/loanaccount/bankform/bankform.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/loanaccount/bankform/bankform.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BankformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankformComponent", function() { return BankformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _loan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loan.service */ "./src/app/demo/pages/cash-in/cashin/loanaccount/loan.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let BankformComponent = class BankformComponent {
    constructor(router, loanService, fb, toster) {
        this.router = router;
        this.loanService = loanService;
        this.fb = fb;
        this.toster = toster;
        this.emi = false;
        var us = JSON.parse(localStorage.getItem('user'));
        us.forEach(element => {
            this.id = element.branchId;
            this.Name = element.branchName;
            this.location = element.branchLocation;
        });
    }
    ngOnInit() {
        let em = JSON.parse(localStorage.getItem('emi'));
        console.log(em, 'emi');
        this.emi = em;
        // let em=localStorage.getItem('emi');
        // let ca=JSON.parse(cih);
        this.loanForm = this.fb.group({
            _id: [''],
            branchId: this.id,
            branchLocation: this.location,
            branchName: this.Name,
            date: [''],
            bankName: [''],
            accountHolderName: [''],
            accountNumber: [''],
            ifscCode: [''],
            bankBranch: [''],
            loanType: [''],
            loanPeriod: [''],
            loanAmount: [''],
            paid: this.fb.array([this.create()])
        });
        let cih = localStorage.getItem('loan');
        let ca = JSON.parse(cih);
        this.loanForm.patchValue(ca);
    }
    create() {
        return this.fb.group({
            //  _id:[''],
            date: [''],
            emi: [''],
        });
    }
    get paid() {
        return this.loanForm.get('paid');
    }
    onSubmit(value) {
        if (value._id == '') {
            this.loanService.postBankdetails(value).subscribe(data => {
                console.log(data);
                this.toster.success('added successfully');
            });
            localStorage.removeItem('loan');
        }
        else {
            this.loanService.putBankdetails(value).subscribe(data => {
                console.log(data);
                this.toster.success('updated successfully');
            });
            localStorage.removeItem('loan');
        }
    }
    Submit(value) {
        this.loanService.putBankdetails(value).subscribe(data => {
            console.log(data);
            this.toster.success('added successfully');
        });
    }
};
BankformComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _loan_service__WEBPACK_IMPORTED_MODULE_4__["BankService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
BankformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bankform',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bankform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/loanaccount/bankform/bankform.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bankform.component.scss */ "./src/app/demo/pages/cash-in/cashin/loanaccount/bankform/bankform.component.scss")).default]
    })
], BankformComponent);



/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/loanaccount/loan.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/loanaccount/loan.service.ts ***!
  \***********************************************************************/
/*! exports provided: BankService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankService", function() { return BankService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../environments/enviromentURL */ "./src/environments/enviromentURL.ts");




let BankService = class BankService {
    constructor(http) {
        this.http = http;
        var us = JSON.parse(localStorage.getItem('user'));
        us.forEach(element => {
            this.id = element.branchId;
        });
    }
    getBankdetails() {
        return this.http.get(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/bankloan` + '/' + this.id);
    }
    postBankdetails(value) {
        return this.http.post(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/bankloan`, value);
    }
    putBankdetails(value) {
        return this.http.put(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/bankloan` + '/' + value._id, value);
    }
    deleteBankdetails(id) {
        return this.http.delete(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/bankloan` + '/' + id);
    }
};
BankService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BankService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BankService);



/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: LoanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanRoutingModule", function() { return LoanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loanaccount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loanaccount.component */ "./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount.component.ts");
/* harmony import */ var _bankform_bankform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bankform/bankform.component */ "./src/app/demo/pages/cash-in/cashin/loanaccount/bankform/bankform.component.ts");





const routes = [
    {
        path: '',
        component: _loanaccount_component__WEBPACK_IMPORTED_MODULE_3__["LoanBankComponent"]
    },
    {
        path: 'bankform',
        component: _bankform_bankform_component__WEBPACK_IMPORTED_MODULE_4__["BankformComponent"]
    }
];
let LoanRoutingModule = class LoanRoutingModule {
};
LoanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoanRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table.dataTable tbody th, table.dataTable tbody td {\n  padding: 8px 0px !important;\n  text-align: center !important; }\n\ntable.dataTable thead th, table.dataTable thead td {\n  padding: 15px 3px 10px !important;\n  text-align: center !important; }\n\ntable.dataTable thead .sorting {\n  background-image: none; }\n\ntable.dataTable thead .sorting_asc {\n  background-image: none; }\n\ntable.dataTable thead .sorting_desc {\n  background-image: none; }\n\ntable.dataTable thead .sorting_asc_disabled {\n  background-image: none; }\n\ntable.dataTable thead .sorting_desc_disabled {\n  background-image: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9jYXNoLWluL2Nhc2hpbi9sb2FuYWNjb3VudC9DOlxcVXNlcnNcXEJoYXJhbmVlZGhhcmFuXFxEb3dubG9hZHNcXFdNUy0xXFx3bXMgMTQtMTIvc3JjXFxhcHBcXGRlbW9cXHBhZ2VzXFxjYXNoLWluXFxjYXNoaW5cXGxvYW5hY2NvdW50XFxsb2FuYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDJCQUEyQjtFQUMzQiw2QkFBNkIsRUFBQTs7QUFFNUI7RUFDRCxpQ0FBaUM7RUFDakMsNkJBQTZCLEVBQUE7O0FBSTlCO0VBQ0Msc0JBQXNCLEVBQUE7O0FBRXJCO0VBQ0Qsc0JBQXNCLEVBQUE7O0FBRXJCO0VBQ0Qsc0JBQXNCLEVBQUE7O0FBRXJCO0VBQ0Qsc0JBQXNCLEVBQUE7O0FBRXJCO0VBQ0Qsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL2Nhc2gtaW4vY2FzaGluL2xvYW5hY2NvdW50L2xvYW5hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRib2R5IHRoLCB0YWJsZS5kYXRhVGFibGUgdGJvZHkgdGQge1xyXG5cdHBhZGRpbmc6IDhweCAwcHggIWltcG9ydGFudDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgdGFibGUuZGF0YVRhYmxlIHRoZWFkIHRoLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgdGQge1xyXG5cdHBhZGRpbmc6IDE1cHggM3B4IDEwcHggIWltcG9ydGFudDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbn0gXHJcblxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmcge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgfVxyXG4gIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2Mge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgfVxyXG4gIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIH1cclxuICB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjX2Rpc2FibGVkIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIH1cclxuICB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZCB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount.component.ts ***!
  \********************************************************************************/
/*! exports provided: LoanBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanBankComponent", function() { return LoanBankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan.service */ "./src/app/demo/pages/cash-in/cashin/loanaccount/loan.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let LoanBankComponent = class LoanBankComponent {
    constructor(router, loanService, toster) {
        this.router = router;
        this.loanService = loanService;
        this.toster = toster;
        this.emi = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.loanService.getBankdetails().subscribe(data => {
            console.log(data);
            this.getCashinhand = data;
            this.dtTrigger.next();
        });
    }
    addEmi(value) {
        localStorage.removeItem('loan');
        this.emi = true;
        localStorage.setItem('emi', JSON.stringify(this.emi));
        localStorage.setItem('loan', JSON.stringify(value));
        this.router.navigate(['/cashin/loan/bankform']);
        // this.router.navigate(['adddetails']);
    }
    addforms() {
        this.router.navigate(['/cashin/loan/bankform']);
    }
    addform(value) {
        localStorage.removeItem('emi');
        localStorage.removeItem('loan');
        this.emi = false;
        localStorage.setItem('emi', JSON.stringify(this.emi));
        this.router.navigate(['/cashin/loan/bankform']);
        // this.router.navigate(['adddetails']);
    }
    editcashinhand(value) {
        localStorage.removeItem('emi');
        localStorage.removeItem('loan');
        this.emi = false;
        localStorage.setItem('emi', JSON.stringify(this.emi));
        localStorage.setItem('loan', JSON.stringify(value));
        this.router.navigate(['/cashin/loan/bankform']);
    }
    deletecashinhand(id) {
        this.loanService.deleteBankdetails(id).subscribe(data => {
            console.log(data);
            this.toster.success('deleted successfully');
        });
    }
};
LoanBankComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _loan_service__WEBPACK_IMPORTED_MODULE_3__["BankService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
LoanBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cashin-bank',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loanaccount.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loanaccount.component.scss */ "./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount.component.scss")).default]
    })
], LoanBankComponent);



/***/ }),

/***/ "./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount.module.ts ***!
  \*****************************************************************************/
/*! exports provided: LoanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanModule", function() { return LoanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _loanaccount_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loanaccount-routing.module */ "./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount-routing.module.ts");
/* harmony import */ var _loanaccount_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loanaccount.component */ "./src/app/demo/pages/cash-in/cashin/loanaccount/loanaccount.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _bankform_bankform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bankform/bankform.component */ "./src/app/demo/pages/cash-in/cashin/loanaccount/bankform/bankform.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");









let LoanModule = class LoanModule {
};
LoanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_loanaccount_component__WEBPACK_IMPORTED_MODULE_5__["LoanBankComponent"], _bankform_bankform_component__WEBPACK_IMPORTED_MODULE_7__["BankformComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _loanaccount_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoanRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
        ]
    })
], LoanModule);



/***/ })

}]);
//# sourceMappingURL=loanaccount-loanaccount-module-es2015.js.map