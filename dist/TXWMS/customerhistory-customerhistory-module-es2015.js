(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerhistory-customerhistory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/finance/customerhistory/customerhistory.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/finance/customerhistory/customerhistory.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n  <!-- <div class=\"col-lg-12 text-right\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)='addhistory()'>\n      <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n    </button>\n  </div> -->\n\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Customer Finance Track History \" [options]=\"false\" blockClass=\"table-border-style\">\n        <div class=\"month\" style=\"text-align: right; \"> <b style=\"color: black;\">Select Month</b>&nbsp;\n          <div class=\"dated\" >\n            <label>From Date: &nbsp;</label>  <input type=\"date\" [formControl]=\"fromdate\" (change)='from($event.target.value)'>\n            <label>To Date: &nbsp;</label>  <input type=\"date\" [formControl]=\"enddate\" (change)='to($event.target.value)'>\n            </div>\n          </div>\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n            <thead>\n            <tr>\n              <th>Date</th>\n              <th>Name </th>\n              <th> Bill Amount </th>\n              <th> Credit Amount</th>\n              <!-- <th> Credit-Amount </th> -->\n              <th>Balance</th>\n              <th> Action </th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor='let data of datefilter'>\n              <td>{{data.date}} </td>\n              <td>{{data.name}}</td>\n              <td>{{data.overAllInvoiceAmount | number:'1.2-2'}}</td>\n              <td>{{data.credit| number:'1.2-2'}}</td>\n              <!-- <td>{{data.overAllInvoiceTotal | number:'1.2-2' }}</td> -->\n              <!-- <td>{{data. | number:'1.2-2' }}</td> -->\n              <td> {{data.balance | number:'1.2-2'}}</td>\n              <td> <button (click)='update(data)' style=\"background: none; border: none;\" ><i style=\"color: #007bff;\"class=\"fa fa-edit\"></i></button> </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n        <div  *ngIf='tap'>\n          <label for=\"for\">Total Credit  {{credit}}</label>\n          <label for=\"for\"> Total Amount Paid  {{Apaid}} </label>\n          <label for=\"for\">Total Balance  {{balance}} </label>\n  \n        </div>\n      </app-card>\n    </div>\n\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/finance/customerhistory/customerhistorydetails/customerhistorydetails.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/finance/customerhistory/customerhistorydetails/customerhistorydetails.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n<form [formGroup]=\"SaleForm\" (ngSubmit)=\"onSubmit(SaleForm.value)\"  >\n    <div class=\"row\">\n      <div class=\"col-lg-6 cddiv\">\n        <h3 class=\"billtitle\"> Customer credit</h3>\n        <input type=\"hidden\" formControlName=\"_id\">\n        <input type=\"hidden\" formControlName=\"date\">\n        <input type=\"hidden\" formControlName=\"billAddress\">\n        <input type=\"hidden\" formControlName=\"shipAddress\">\n        <input type=\"hidden\" formControlName=\"contactNumber\">\n        <input type=\"hidden\" formControlName=\"alternateNumber\">\n        <input type=\"hidden\" formControlName=\"cost\">\n        <div class=\"col\"> <label for=\"name\">Supplier Name</label> <br> <input type=\"text\"  formControlName='name'>\n         <label for=\"name\">Credit Amount</label> <br> <input type=\"text\" placeholder=\"credit amount\" formControlName='credit' >\n         <label for=\"name\">Total Invoice Amount</label> <br> <input type=\"text\" formControlName='overAllInvoiceAmount'>\n         \n        </div>\n        <div style=\"text-align: center; padding-top: 10px;\">  <button type=\"submit\" class=\"btn btn-primary\" >Submit</button> \n        </div>\n        </div>\n\n      <div class=\"col-lg-6 pddiv\" style=\"border-left: 3px solid grey;\">\n        <h3 class=\"billtitle\"> Enter Paid Details </h3>\n        <div formArrayName=\"paid\" *ngFor=\"let a of SaleForm.get('paid')['controls']; let i = index\">\n          <div [formGroupName]=\"i\" style=\"margin-bottom: 10px;\">\n            <!-- <input type=\"hidden\" formControlName=\"_id\"> -->\n\n            <div class=\"col\"> <label for=\"pay\">Paid Date:</label> <input type=\"date\" formControlName='dat'> \n           <label for=\"pay\">Amount of Paid:</label> <input type=\"text\" formControlName='amountPaid' [(ngModel)]=\"amountpaid\" > \n\n           \n          </div>\n          <div style=\"text-align: center; \"> <button class=\"btn btn-primary\" type=\"submit\">Submit</button> </div>\n  \n          </div>\n        </div>\n      </div>\n        <div formArrayName=\"products\" *ngFor=\"let a of SaleForm.get('products')['controls']; let i = index\">\n          <div [formGroupName]=\"i\" style=\"margin-bottom: 10px;\">\n            <!-- <input type=\"hidden\" formControlName=\"_id\"> -->\n             <input type=\"hidden\" formControlName='itemCode'> \n              <input type=\"hidden\" formControlName='idate'> \n               <input type=\"hidden\" formControlName='description'>\n                  <input type=\"hidden\" formControlName='hsnCode'> \n                    <input type=\"hidden\" formControlName='vom'> \n                      <input type=\"hidden\" formControlName='custQuantity'>\n                       <input type=\"hidden\" formControlName='unitRate'> \n                           <input type=\"hidden\" formControlName='CGST'> \n                             <input type=\"hidden\" formControlName='SGST'>\n                               <input type=\"hidden\" formControlName='col33'> \n                               <input type=\"hidden\" formControlName='col34'> \n\n           <input type=\"hidden\" formControlName='col35'>   \n          </div>\n        </div>\n     \n    </div>\n   \n   <br><br>\n  </form>\n\n\n    <app-card cardTitle=\"Customer Finance Track History \" [options]=\"false\" blockClass=\"table-border-style\">\n      <div class=\"table-responsive\">\n        <div class=\"col-lg-6\">\n          <label for=\"\"> <b>Name:</b> </label>\n          <label for=\"\">{{name}} </label>\n        </div>\n      \n       <div  class=\"col-lg-6\">\n        <label for=\"\"> <b >Credit Amount:</b> </label>\n        <label for=\"\">{{credit}} </label>\n       </div>\n       <div class=\"col-lg-6\">\n        <label for=\"\"> <b>Location:</b> </label>\n        <label for=\"\">{{location}} </label>\n       </div>\n       <div  class=\"col-lg-6\">\n        <label for=\"\"> <b >Invoice Amount:</b> </label>\n        <label for=\"\">{{amount}} </label>\n       </div>\n    \n        <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n          <thead>\n          <tr>\n           \n            <th>Date</th>\n            <!-- <th>Credit Amount</th> -->\n           \n            \n            <th>Amount of Paid </th>\n            <!-- <th>Balance</th> -->\n          </tr>\n          </thead>\n          <tbody *ngFor='let dat of arr'>\n          <tr *ngFor='let pai of paidarr'>\n            <td>{{pai.dat}} </td>\n            <!-- <td>{{dat.credit}}</td> -->\n            <td>{{pai.amountPaid}}</td>\n            <!-- <td>{{dat.balance}}</td> -->\n          </tr>\n          </tbody>\n        </table>\n        <div class=\"col-lg-6\"> <label style=\"color: black;\" for=\"lab\">Invoice-Total :</label> {{total}} \n        </div>\n      \n      <div class=\"col-lg-6\"> \n        <label for=\"lab\" style=\"color: black;\">Balance to be Paid :</label>{{balance}} </div>\n      </div>\n    </app-card>\n\n\n");

/***/ }),

/***/ "./src/app/demo/pages/finance/customerhistory/customerhistory-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/finance/customerhistory/customerhistory-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CustomerhistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerhistoryRoutingModule", function() { return CustomerhistoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customerhistory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerhistory.component */ "./src/app/demo/pages/finance/customerhistory/customerhistory.component.ts");
/* harmony import */ var _customerhistorydetails_customerhistorydetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customerhistorydetails/customerhistorydetails.component */ "./src/app/demo/pages/finance/customerhistory/customerhistorydetails/customerhistorydetails.component.ts");





const routes = [
    {
        path: '',
        component: _customerhistory_component__WEBPACK_IMPORTED_MODULE_3__["CustomerhistoryComponent"]
    },
    {
        path: 'history',
        component: _customerhistorydetails_customerhistorydetails_component__WEBPACK_IMPORTED_MODULE_4__["CustomerhistorydetailsComponent"]
    }
];
let CustomerhistoryRoutingModule = class CustomerhistoryRoutingModule {
};
CustomerhistoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CustomerhistoryRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/finance/customerhistory/customerhistory.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/pages/finance/customerhistory/customerhistory.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button img {\n  height: 15px;\n  width: 15px; }\n\ntable.dataTable tbody th, table.dataTable tbody td {\n  text-align: center !important; }\n\ntable.dataTable thead th, table.dataTable thead td {\n  text-align: center !important; }\n\ninput[type=\"date\"]::-webkit-clear-button {\n  display: none; }\n\n/* Removes the spin button */\n\ninput[type=\"date\"]::-webkit-inner-spin-button {\n  display: none; }\n\n/* Always display the drop down caret */\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: #2C3E50; }\n\n/* A few custom styles for date inputs */\n\ninput[type=\"date\"] {\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n  color: #95A5A6;\n  font-family: \"Helvetica\", arial, sans-serif;\n  font-size: 13px;\n  border: 3px solid #ECF0F1;\n  background: #ecf0f1;\n  padding: 5px;\n  display: inline-block !important;\n  visibility: visible !important; }\n\ninput[type=\"date\"], focus {\n  color: #95A5A6;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none; }\n\n.dated {\n  text-align: right;\n  padding-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9maW5hbmNlL2N1c3RvbWVyaGlzdG9yeS9DOlxcVXNlcnNcXEJoYXJhbmVlZGhhcmFuXFxEb3dubG9hZHNcXFdNUy0xXFx3bXMgMTQtMTIvc3JjXFxhcHBcXGRlbW9cXHBhZ2VzXFxmaW5hbmNlXFxjdXN0b21lcmhpc3RvcnlcXGN1c3RvbWVyaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRVo7RUFDQyw2QkFBNkIsRUFBQTs7QUFFNUI7RUFDRCw2QkFBNkIsRUFBQTs7QUFLOUI7RUFDQyxhQUFhLEVBQUE7O0FBRWQsNEJBQUE7O0FBQ0E7RUFDQyxhQUFhLEVBQUE7O0FBRWQsdUNBQUE7O0FBQ0E7RUFDQyxjQUFjLEVBQUE7O0FBRWYsd0NBQUE7O0FBQ0E7RUFDQyxxQkFBZ0I7T0FBaEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsMkNBQTJDO0VBQzNDLGVBQWU7RUFDZix5QkFBd0I7RUFDeEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsOEJBQThCLEVBQUE7O0FBRS9CO0VBQ0MsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUJBQXFCLEVBQUE7O0FBRXRCO0VBQ0MsaUJBQWlCO0VBQUUsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL2ZpbmFuY2UvY3VzdG9tZXJoaXN0b3J5L2N1c3RvbWVyaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cdGJ1dHRvbiBpbWd7XHJcblx0XHRoZWlnaHQ6IDE1cHg7XHJcblx0XHR3aWR0aDogMTVweDtcclxuXHR9XHJcblx0dGFibGUuZGF0YVRhYmxlIHRib2R5IHRoLCB0YWJsZS5kYXRhVGFibGUgdGJvZHkgdGQge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0ICB9XHJcblx0ICB0YWJsZS5kYXRhVGFibGUgdGhlYWQgdGgsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCB0ZCB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHRcclxuXHR9XHJcblxyXG5cclxuXHRpbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0LyogUmVtb3ZlcyB0aGUgc3BpbiBidXR0b24gKi9cclxuXHRpbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7IFxyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0LyogQWx3YXlzIGRpc3BsYXkgdGhlIGRyb3AgZG93biBjYXJldCAqL1xyXG5cdGlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG5cdFx0Y29sb3I6ICMyQzNFNTA7XHJcblx0fVxyXG5cdC8qIEEgZmV3IGN1c3RvbSBzdHlsZXMgZm9yIGRhdGUgaW5wdXRzICovXHJcblx0aW5wdXRbdHlwZT1cImRhdGVcIl0ge1xyXG5cdFx0YXBwZWFyYW5jZTogbm9uZTtcclxuXHRcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHRcdGNvbG9yOiAjOTVBNUE2O1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0Ym9yZGVyOjNweCBzb2xpZCAjRUNGMEYxO1xyXG5cdFx0YmFja2dyb3VuZDojZWNmMGYxO1xyXG5cdFx0cGFkZGluZzo1cHg7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuXHRcdHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuXHR9XHJcblx0aW5wdXRbdHlwZT1cImRhdGVcIl0sIGZvY3VzIHtcclxuXHRcdGNvbG9yOiAjOTVBNUE2O1xyXG5cdFx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRcdC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuXHR9XHJcblx0LmRhdGVke1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7IHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG5cdH0iXX0= */");

/***/ }),

/***/ "./src/app/demo/pages/finance/customerhistory/customerhistory.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/pages/finance/customerhistory/customerhistory.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerhistoryComponent", function() { return CustomerhistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sales_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sales/sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
/* harmony import */ var _customerhistory_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customerhistory/customer.service */ "./src/app/demo/pages/finance/customerhistory/customer.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let CustomerhistoryComponent = class CustomerhistoryComponent {
    constructor(router, salesService, toster, customerservice) {
        this.router = router;
        this.salesService = salesService;
        this.toster = toster;
        this.customerservice = customerservice;
        this.datefilter = [];
        this.fromdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.enddate = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.paid = [];
        this.tap = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.salesService.getInvProduct().subscribe(data => {
            // data.overAllInvoiceTotal= data.overAllInvoiceTotal.tofixed(2) 
            this.getData = data;
            this.datefilter = this.getData;
            this.getData.forEach(dataa => {
                //  dataa.overAllInvoiceTotal= dataa.overAllInvoiceTotal.tofixed(2) 
            });
            //  this.getaid=filter
            this.dtTrigger.next();
            console.log(this.getData, 'sale credit');
            this.getData.forEach(dataa => {
                this.getPaid = dataa.paid;
                this.getPaid.forEach(val => {
                    let zero = 0;
                    console.log(val.amountPaid + zero);
                });
            });
        });
        this.customerservice.getCustomer().subscribe(data => {
            this.getDat = data;
            console.log(this.getDat, 'cust');
        });
    }
    update(data) {
        var value = data;
        localStorage.removeItem('sale');
        localStorage.setItem('sale', JSON.stringify(value));
        this.router.navigate(['/finance/customerhistory/history']);
    }
    from(event) {
        this.fdate = event;
        console.log(event, 'fromdate');
    }
    to(event) {
        this.tdate = event;
        console.log(event, 'fromdate');
        this.Date();
    }
    Date() {
        let start = "2020-11-01";
        let end = "2020-11-30";
        var startDate = new Date(this.fdate);
        var endDate = new Date(this.tdate);
        var resultProductData = this.getData.filter(function (a) {
            return new Date(a.date) >= startDate && new Date(a.date) <= endDate;
        });
        this.datefilter = resultProductData;
        var filter = resultProductData;
        this.credit = 0;
        this.Apaid = 0;
        this.balance = 0;
        this.paid = [];
        filter.forEach(element => {
            element.paid.forEach(ele => {
                this.paid.push({ amount: ele.amountPaid });
            });
            var bal = element.balance;
            this.balance = this.balance + Number.parseFloat(bal);
            var mp = element.credit;
            this.credit = this.credit + Number.parseFloat(mp);
        });
        this.paid.forEach(mint => {
            var mp = mint.amount;
            this.Apaid = this.Apaid + Number.parseFloat(mp);
        });
        this.tap = true;
        console.log(resultProductData, 'selected data');
    }
};
CustomerhistoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _sales_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _customerhistory_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] }
];
CustomerhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerhistory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customerhistory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/finance/customerhistory/customerhistory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customerhistory.component.scss */ "./src/app/demo/pages/finance/customerhistory/customerhistory.component.scss")).default]
    })
], CustomerhistoryComponent);



/***/ }),

/***/ "./src/app/demo/pages/finance/customerhistory/customerhistory.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo/pages/finance/customerhistory/customerhistory.module.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerhistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerhistoryModule", function() { return CustomerhistoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _customerhistory_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customerhistory-routing.module */ "./src/app/demo/pages/finance/customerhistory/customerhistory-routing.module.ts");
/* harmony import */ var _customerhistory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerhistory.component */ "./src/app/demo/pages/finance/customerhistory/customerhistory.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _customerhistorydetails_customerhistorydetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customerhistorydetails/customerhistorydetails.component */ "./src/app/demo/pages/finance/customerhistory/customerhistorydetails/customerhistorydetails.component.ts");








let CustomerhistoryModule = class CustomerhistoryModule {
};
CustomerhistoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _customerhistory_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomerhistoryRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
        ],
        declarations: [_customerhistory_component__WEBPACK_IMPORTED_MODULE_5__["CustomerhistoryComponent"], _customerhistorydetails_customerhistorydetails_component__WEBPACK_IMPORTED_MODULE_7__["CustomerhistorydetailsComponent"]]
    })
], CustomerhistoryModule);



/***/ }),

/***/ "./src/app/demo/pages/finance/customerhistory/customerhistorydetails/customerhistorydetails.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/demo/pages/finance/customerhistory/customerhistorydetails/customerhistorydetails.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  background-color: #fcfcfc; }\n\n.tmargin {\n  padding: 0 20%; }\n\n.billing table {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  color: #212529; }\n\ndiv, p, a, li, td {\n  -webkit-text-size-adjust: none; }\n\n.ExternalClass {\n  width: 100%;\n  background-color: #FFFFFF; }\n\np {\n  padding: 0 !important;\n  margin-top: 0 !important;\n  margin-right: 0 !important;\n  margin-bottom: 0 !important;\n  margin-left: 0 !important; }\n\n.visibleMobile {\n  display: none; }\n\n.hiddenMobile {\n  display: block; }\n\n@media only screen and (max-width: 600px) {\n  body {\n    width: auto !important; }\n  table[class=fullTable] {\n    width: 96% !important;\n    clear: both; }\n  table[class=fullPadding] {\n    width: 85% !important;\n    clear: both; }\n  table[class=col] {\n    width: 45% !important; }\n  .erase {\n    display: none; } }\n\n@media only screen and (max-width: 420px) {\n  table[class=fullTable] {\n    width: 100% !important;\n    clear: both; }\n  table[class=fullPadding] {\n    width: 85% !important;\n    clear: both; }\n  table[class=col] {\n    width: 100% !important;\n    clear: both; }\n  table[class=col] td {\n    text-align: left !important; }\n  .erase {\n    display: none;\n    font-size: 0;\n    max-height: 0;\n    line-height: 0;\n    padding: 0; }\n  .visibleMobile {\n    display: block !important; }\n  .hiddenMobile {\n    display: none !important; } }\n\n.cddiv, .pddiv {\n  background-color: white;\n  padding: 1%; }\n\n.cddiv input, .cddiv textarea {\n  width: 100%;\n  padding: 1% 3%; }\n\n.cdmargin {\n  margin: 4% 0 0; }\n\n.pddiv input, .pddiv textarea {\n  width: 100%;\n  padding: 1% 3%; }\n\n.pddiv button {\n  margin: 13% 0 0; }\n\n.pdmargin {\n  margin: 2% 0 0; }\n\n.billtitle {\n  margin: 3% 0;\n  text-align: center; }\n\n.searchlist ul {\n  width: 100%;\n  position: relative;\n  padding: 2%;\n  list-style-type: none;\n  background-color: white;\n  margin-top: 0%;\n  margin-left: 0%;\n  box-shadow: 0 5px 10px #888888;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.searchlist ul li {\n  margin: 1% 0; }\n\n.searchlist1 ul {\n  width: 98%;\n  position: relative;\n  padding: 2%;\n  list-style-type: none;\n  background-color: white;\n  margin-top: 0%;\n  margin-left: 0%;\n  box-shadow: 0 5px 10px #888888;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.searchlist1 ul li {\n  margin: 1% 0; }\n\n.indel input {\n  width: 85%; }\n\n.indel button {\n  background: none;\n  border: none;\n  float: right;\n  width: 10%; }\n\n.invoicediv {\n  background-color: white;\n  padding: 1%; }\n\n.rowmargin {\n  margin: 1% 0; }\n\n.invoicediv .brandtitle h3 {\n  vertical-align: middle;\n  line-height: 90px; }\n\n.invoicediv .brandtype .row {\n  height: 50%; }\n\n.invoicediv .borderdiv {\n  border: 1px solid #646464;\n  padding: 1%; }\n\n.invoicediv .borderdiv p {\n  font-size: 12px;\n  line-height: 15px;\n  padding: 2% 2% 0 0; }\n\n.invoicedate table {\n  padding-left: 2%; }\n\n.invoicetable table tr,\n.invoicetable table th,\n.invoicetable table td {\n  border: 1px solid #6b6a6a; }\n\n.invoicetable table th {\n  padding: 0;\n  text-align: center;\n  vertical-align: middle; }\n\n.invoicetable table td {\n  text-align: right;\n  padding: 0 1%; }\n\n.invoicetable table .description {\n  text-align: left;\n  padding: 0 5px; }\n\n.rowmarginbottom {\n  margin: 10% 0 2%;\n  font-size: 12px; }\n\n.signbox {\n  border: 1px solid #686767; }\n\n.invoicefootertext {\n  line-height: 15px;\n  font-size: 12px; }\n\n.terms {\n  font-size: 10px; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  color: #030303;\n  border: 1px solid #ddd;\n  background-color: #e9e9e9; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #F2F2F2; }\n\n.invoiceinput {\n  border: 0.3px solid #c9c9c9;\n  background-color: none;\n  height: 15px;\n  width: 85px;\n  font-size: 10px; }\n\n.invoiceinputs {\n  border: 0.3px solid #c9c9c9;\n  background-color: none;\n  height: 15px;\n  width: 50px;\n  font-size: 10px !important; }\n\n/*****************************floating****************************/\n\n.container {\n  width: 550px;\n  margin: 45px auto; }\n\n.clearfix {\n  clear: both; }\n\n.form-part {\n  margin: 20px 0; }\n\n.form-part h2 {\n  font-size: 25px;\n  font-weight: 400;\n  font-family: 'Josefin Sans', sans-serif;\n  margin-bottom: 15px; }\n\n.text-input,\n.radio-button,\n.check-boxes {\n  margin-bottom: 13px; }\n\n.text-input label,\n.radio-button label,\n.check-boxes label {\n  display: block;\n  margin-bottom: 3px;\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 14px;\n  font-weight: 600; }\n\n.radio-button label,\n.check-boxes label {\n  margin-bottom: 7px;\n  font-weight: 900; }\n\n.text-input input,\n.text-input textarea,\n.text-input select {\n  padding: 7px 7px;\n  display: block;\n  width: 100%;\n  border: solid 1px #ccc;\n  border-radius: 2px; }\n\n.text-input select {\n  width: 100%; }\n\n.text-input textarea {\n  height: 100px; }\n\n.sqr-input .text-input,\n.sqr-radio-input .radio-button,\n.sqr-check-input .check-boxes {\n  float: left;\n  width: 45%; }\n\n.sqr-input .text-input:nth-child(1),\n.sqr-radio-input .radio-button:nth-child(1),\n.sqr-check-input .check-boxes:nth-child(1) {\n  margin-right: 10%; }\n\n.cub-input .text-input {\n  float: left;\n  width: 26.66%; }\n\n.cub-input .text-input:nth-child(1),\n.cub-input .text-input:nth-child(2) {\n  margin-right: 10%; }\n\n.ns-radio-btn input[type=\"radio\"],\n.ns-check-box input[type=\"checkbox\"] {\n  visibility: hidden; }\n\n.productspace {\n  margin-top: 70px; }\n\n.tick {\n  height: 20px;\n  width: 20px; }\n\n.addsubmit {\n  position: absolute;\n  bottom: 28px;\n  left: 720px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9maW5hbmNlL2N1c3RvbWVyaGlzdG9yeS9jdXN0b21lcmhpc3RvcnlkZXRhaWxzL0M6XFxVc2Vyc1xcQmhhcmFuZWVkaGFyYW5cXERvd25sb2Fkc1xcV01TLTFcXHdtcyAxNC0xMi9zcmNcXGFwcFxcZGVtb1xccGFnZXNcXGZpbmFuY2VcXGN1c3RvbWVyaGlzdG9yeVxcY3VzdG9tZXJoaXN0b3J5ZGV0YWlsc1xcY3VzdG9tZXJoaXN0b3J5ZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLHlCQUFvQyxFQUFBOztBQUM1QztFQUFVLGNBQWMsRUFBQTs7QUFDeEI7RUFDSSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFbEI7RUFBb0IsOEJBQThCLEVBQUE7O0FBQ2xEO0VBQWlCLFdBQVc7RUFBRSx5QkFBeUIsRUFBQTs7QUFDdkQ7RUFBSSxxQkFBcUI7RUFBRSx3QkFBd0I7RUFBRSwwQkFBMEI7RUFBRSwyQkFBMkI7RUFBRSx5QkFBeUIsRUFBQTs7QUFDdkk7RUFBaUIsYUFBYSxFQUFBOztBQUM5QjtFQUFnQixjQUFjLEVBQUE7O0FBQzlCO0VBQ0E7SUFBTyxzQkFBc0IsRUFBQTtFQUM3QjtJQUF5QixxQkFBcUI7SUFBRSxXQUFXLEVBQUE7RUFDM0Q7SUFBMkIscUJBQXFCO0lBQUUsV0FBVyxFQUFBO0VBQzdEO0lBQW1CLHFCQUFxQixFQUFBO0VBQ3hDO0lBQVMsYUFBYSxFQUFBLEVBQUk7O0FBRTFCO0VBQ0E7SUFBeUIsc0JBQXNCO0lBQUUsV0FBVyxFQUFBO0VBQzVEO0lBQTJCLHFCQUFxQjtJQUFFLFdBQVcsRUFBQTtFQUM3RDtJQUFtQixzQkFBc0I7SUFBRSxXQUFXLEVBQUE7RUFDdEQ7SUFBc0IsMkJBQTJCLEVBQUE7RUFDakQ7SUFBUyxhQUFhO0lBQUUsWUFBWTtJQUFFLGFBQWE7SUFBRSxjQUFjO0lBQUUsVUFBVSxFQUFBO0VBQy9FO0lBQWlCLHlCQUF5QixFQUFBO0VBQzFDO0lBQWdCLHdCQUF3QixFQUFBLEVBQUk7O0FBRTVDO0VBQ0ksdUJBQXVCO0VBQ3ZCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBRXRCO0VBRUksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwrQkFBK0IsRUFBQTs7QUFFbkM7RUFDSSxZQUFhLEVBQUE7O0FBRWpCO0VBRUksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwrQkFBK0IsRUFBQTs7QUFFbkM7RUFFSSxZQUFhLEVBQUE7O0FBRWpCO0VBQWMsVUFBVSxFQUFBOztBQUN4QjtFQUNFLGdCQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBQ1o7RUFDSSx1QkFBdUI7RUFDdkIsV0FBVyxFQUFBOztBQUVmO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLHNCQUFzQjtFQUN0QixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSx5QkFBb0M7RUFDcEMsV0FBVyxFQUFBOztBQUVmO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7OztFQUdJLHlCQUFvQyxFQUFBOztBQUV4QztFQUNJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0kseUJBQW9DLEVBQUE7O0FBRXhDO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0kseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsY0FBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHlCQUFvQyxFQUFBOztBQUd0QztFQUNFLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2Q7RUFBbUIseUJBQXlCLEVBQUE7O0FBQzVDO0VBQ0UsMkJBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFFakI7RUFDRSwyQkFBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQXlCLEVBQUE7O0FBRTdCLGtFQUFBOztBQXVJQTtFQUNJLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsbUJBQW1CLEVBQUE7O0FBR3JCOzs7RUFHRSxtQkFBbUIsRUFBQTs7QUFHckI7OztFQUdFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7O0VBRUUsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjs7O0VBR0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsc0JBQXNCO0VBR3RCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWEsRUFBQTs7QUFHZjs7O0VBR0UsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFHWjs7O0VBR0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFHZjs7RUFFRSxpQkFBaUIsRUFBQTs7QUFHbkI7O0VBRUUsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9wYWdlcy9maW5hbmNlL2N1c3RvbWVyaGlzdG9yeS9jdXN0b21lcmhpc3RvcnlkZXRhaWxzL2N1c3RvbWVyaGlzdG9yeWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7IGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTt9XHJcbi50bWFyZ2lueyBwYWRkaW5nOiAwIDIwJTt9XHJcbi5iaWxsaW5nIHRhYmxlIHsgXHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5kaXYsIHAsIGEsIGxpLCB0ZCB7IC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTsgfVxyXG4uRXh0ZXJuYWxDbGFzcyB7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyB9XHJcbnAgeyBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDsgfVxyXG4udmlzaWJsZU1vYmlsZSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuLmhpZGRlbk1vYmlsZSB7IGRpc3BsYXk6IGJsb2NrOyB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuYm9keSB7IHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7IH1cclxudGFibGVbY2xhc3M9ZnVsbFRhYmxlXSB7IHdpZHRoOiA5NiUgIWltcG9ydGFudDsgY2xlYXI6IGJvdGg7IH1cclxudGFibGVbY2xhc3M9ZnVsbFBhZGRpbmddIHsgd2lkdGg6IDg1JSAhaW1wb3J0YW50OyBjbGVhcjogYm90aDsgfVxyXG50YWJsZVtjbGFzcz1jb2xdIHsgd2lkdGg6IDQ1JSAhaW1wb3J0YW50OyB9XHJcbi5lcmFzZSB7IGRpc3BsYXk6IG5vbmU7IH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbnRhYmxlW2NsYXNzPWZ1bGxUYWJsZV0geyB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBjbGVhcjogYm90aDsgfVxyXG50YWJsZVtjbGFzcz1mdWxsUGFkZGluZ10geyB3aWR0aDogODUlICFpbXBvcnRhbnQ7IGNsZWFyOiBib3RoOyB9XHJcbnRhYmxlW2NsYXNzPWNvbF0geyB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBjbGVhcjogYm90aDsgfVxyXG50YWJsZVtjbGFzcz1jb2xdIHRkIHsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50OyB9XHJcbi5lcmFzZSB7IGRpc3BsYXk6IG5vbmU7IGZvbnQtc2l6ZTogMDsgbWF4LWhlaWdodDogMDsgbGluZS1oZWlnaHQ6IDA7IHBhZGRpbmc6IDA7IH1cclxuLnZpc2libGVNb2JpbGUgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XHJcbi5oaWRkZW5Nb2JpbGUgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cclxufVxyXG4uY2RkaXYsIC5wZGRpdnsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgXHJcbn1cclxuLmNkZGl2IGlucHV0LC5jZGRpdiB0ZXh0YXJlYXsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDElIDMlO1xyXG59XHJcbi5jZG1hcmdpbntcclxuICAgIG1hcmdpbjogNCUgMCAwO1xyXG59XHJcbi5wZGRpdiBpbnB1dCAsIC5wZGRpdiB0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMSUgMyU7XHJcbn1cclxuLnBkZGl2IGJ1dHRvbntcclxuICAgIG1hcmdpbjogMTMlIDAgMDtcclxufVxyXG4ucGRtYXJnaW57XHJcbiAgICBtYXJnaW46IDIlIDAgMDtcclxufVxyXG4uYmlsbHRpdGxle1xyXG4gICAgbWFyZ2luOiAzJSAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zZWFyY2hsaXN0IHVsXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAjODg4ODg4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuLnNlYXJjaGxpc3QgdWwgbGl7XHJcbiAgICBtYXJnaW46IDElIDAgO1xyXG59XHJcbi5zZWFyY2hsaXN0MSB1bFxyXG57XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAjODg4ODg4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuLnNlYXJjaGxpc3QxIHVsIGxpXHJcbntcclxuICAgIG1hcmdpbjogMSUgMCA7XHJcbn1cclxuLmluZGVsIGlucHV0eyB3aWR0aDogODUlO31cclxuLmluZGVsIGJ1dHRvbnsgXHJcbiAgYmFja2dyb3VuZDpub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmbG9hdDogcmlnaHQ7IFxyXG4gIHdpZHRoOiAxMCU7fVxyXG4uaW52b2ljZWRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuLnJvd21hcmdpbntcclxuICAgIG1hcmdpbjogMSUgMDtcclxufVxyXG4uaW52b2ljZWRpdiAuYnJhbmR0aXRsZSBoM3tcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBsaW5lLWhlaWdodDogOTBweDtcclxufVxyXG4uaW52b2ljZWRpdiAuYnJhbmR0eXBlIC5yb3d7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG4uaW52b2ljZWRpdiAuYm9yZGVyZGl2e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuLmludm9pY2VkaXYgLmJvcmRlcmRpdiBwe1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAyJSAyJSAwIDA7XHJcbn1cclxuLmludm9pY2VkYXRlIHRhYmxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTs7XHJcbn1cclxuLmludm9pY2V0YWJsZSB0YWJsZSB0cixcclxuLmludm9pY2V0YWJsZSB0YWJsZSB0aCxcclxuLmludm9pY2V0YWJsZSB0YWJsZSB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTA3LCAxMDYsIDEwNik7XHJcbn1cclxuLmludm9pY2V0YWJsZSB0YWJsZSB0aHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5pbnZvaWNldGFibGUgdGFibGUgdGQgeyBcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMCAxJTtcclxufVxyXG4uaW52b2ljZXRhYmxlIHRhYmxlIC5kZXNjcmlwdGlvbntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG4ucm93bWFyZ2luYm90dG9te1xyXG4gICAgbWFyZ2luOiAxMCUgMCAyJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uc2lnbmJveHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDQsIDEwMywgMTAzKTtcclxufVxyXG4uaW52b2ljZWZvb3RlcnRleHR7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4udGVybXN7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogcmdiKDMsIDMsIDMpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcclxuICB9XHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyfVxyXG4gIC5pbnZvaWNlaW5wdXR7XHJcbiAgICBib3JkZXI6IDAuM3B4IHNvbGlkIHJnYigyMDEsIDIwMSwgMjAxKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLmludm9pY2VpbnB1dHN7XHJcbiAgICBib3JkZXI6IDAuM3B4IHNvbGlkIHJnYigyMDEsIDIwMSwgMjAxKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKipmbG9hdGluZyoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vIC5mbG9hdGluZy1mb3JtIHtcclxuLy8gICAgIHdpZHRoOjMyMHB4O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAvKioqKiAgZmxvYXRpbmctTGFibGUgc3R5bGUgc3RhcnQgKioqKi9cclxuLy8gICAuZmxvYXRpbmctbGFiZWwgeyBcclxuLy8gICAgIHBvc2l0aW9uOnJlbGF0aXZlOyBcclxuLy8gICAgIG1hcmdpbi1ib3R0b206MjBweDsgXHJcbi8vICAgfVxyXG4vLyAgIC5mbG9hdGluZy1pbnB1dCAsIC5mbG9hdGluZy1zZWxlY3Qge1xyXG4vLyAgICAgZm9udC1zaXplOjE0cHg7XHJcbi8vICAgICBwYWRkaW5nOjRweCA0cHg7XHJcbi8vICAgICBkaXNwbGF5OmJsb2NrO1xyXG4vLyAgICAgd2lkdGg6MTAwJTtcclxuLy8gICAgIGhlaWdodDozMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4vLyAgICAgYm9yZGVyOm5vbmU7XHJcbi8vICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNzU3NTc1O1xyXG4vLyAgIH1cclxuLy8gICAgLmZsb2F0aW5nLWlucHV0cywgLmZsb2F0aW5nLXNlbGVjdCB7XHJcbi8vICAgICBmb250LXNpemU6MTRweDtcclxuLy8gICAgIHBhZGRpbmc6NHB4IDRweDtcclxuLy8gICAgIGRpc3BsYXk6YmxvY2s7XHJcbi8vICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7O1xyXG4vLyAgICAgaGVpZ2h0OjMwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIGJvcmRlcjpub25lO1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzc1NzU3NTtcclxuLy8gICB9XHJcbiAgXHJcbiAgXHJcbi8vICAgLmZsb2F0aW5nLWlucHV0OmZvY3VzICwuZmxvYXRpbmctaW5wdXRzLCAuZmxvYXRpbmctc2VsZWN0OmZvY3VzIHtcclxuLy8gICAgICAgIG91dGxpbmU6bm9uZTtcclxuLy8gICAgICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICM1MjY0QUU7IFxyXG4vLyAgIH1cclxuIFxyXG4vLyAgIGxhYmVsIHtcclxuLy8gICAgIGNvbG9yOiM5OTk7IFxyXG4vLyAgICAgZm9udC1zaXplOjE0cHg7XHJcbi8vICAgICBmb250LXdlaWdodDpub3JtYWw7XHJcbi8vICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuLy8gICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XHJcbi8vICAgICBsZWZ0OjVweDtcclxuLy8gICAgIHRvcDo1cHg7XHJcbi8vICAgICB0cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxyXG4vLyAgICAgLW1vei10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxyXG4vLyAgICAgLXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5mbG9hdGluZy1pbnB1dDpmb2N1cyB+IGxhYmVsLC5mbG9hdGluZy1pbnB1dHM6Zm9jdXMgfiBsYWJlbCwgLmZsb2F0aW5nLWlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xyXG4vLyAgICAgdG9wOi0xOHB4O1xyXG4vLyAgICAgZm9udC1zaXplOjE0cHg7XHJcbi8vICAgICBjb2xvcjojNTI2NEFFO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuZmxvYXRpbmctc2VsZWN0OmZvY3VzIH4gbGFiZWwgLCAuZmxvYXRpbmctc2VsZWN0Om5vdChbdmFsdWU9XCJcIl0pOnZhbGlkIH4gbGFiZWwge1xyXG4vLyAgICAgdG9wOi0xOHB4O1xyXG4vLyAgICAgZm9udC1zaXplOjE0cHg7XHJcbi8vICAgICBjb2xvcjojNTI2NEFFO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAvKiBhY3RpdmUgc3RhdGUgKi9cclxuLy8gICAuZmxvYXRpbmctaW5wdXQ6Zm9jdXMgfiAuYmFyOmJlZm9yZSwuZmxvYXRpbmctaW5wdXRzOmZvY3VzIH4gLmJhcjpiZWZvcmUsIC5mbG9hdGluZy1pbnB1dDpmb2N1cyB+IC5iYXI6YWZ0ZXIsXHJcbi8vICAgIC5mbG9hdGluZy1pbnB1dHM6Zm9jdXMgfiAuYmFyOmFmdGVyLC5mbG9hdGluZy1zZWxlY3Q6Zm9jdXMgfiAuYmFyOmJlZm9yZSwgLmZsb2F0aW5nLXNlbGVjdDpmb2N1cyB+IC5iYXI6YWZ0ZXIge1xyXG4vLyAgICAgd2lkdGg6NTAlO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbi8vICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuZmxvYXRpbmctdGV4dGFyZWEge1xyXG4vLyAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbi8vICAgICAgbWF4LWhlaWdodDogMjYwcHg7IFxyXG4vLyAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuLy8gICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgXHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC8qIGhpZ2hsaWdodGVyICovXHJcbi8vICAgLmhpZ2hsaWdodCB7XHJcbi8vICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuLy8gICAgIGhlaWdodDo1MCU7IFxyXG4vLyAgICAgd2lkdGg6MTAwJTsgXHJcbi8vICAgICB0b3A6MTUlOyBcclxuLy8gICAgIGxlZnQ6MDtcclxuLy8gICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XHJcbi8vICAgICBvcGFjaXR5OjAuNTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLyogYWN0aXZlIHN0YXRlICovXHJcbi8vICAgLmZsb2F0aW5nLWlucHV0OmZvY3VzIH4gLmhpZ2hsaWdodCAsICAuZmxvYXRpbmctaW5wdXRzOmZvY3VzIH4gLmhpZ2hsaWdodCAsIC5mbG9hdGluZy1zZWxlY3Q6Zm9jdXMgfiAuaGlnaGxpZ2h0IHtcclxuLy8gICAgIC13ZWJraXQtYW5pbWF0aW9uOmlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xyXG4vLyAgICAgLW1vei1hbmltYXRpb246aW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XHJcbi8vICAgICBhbmltYXRpb246aW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC8qIGFuaW1hdGlvbiAqL1xyXG4vLyAgIEAtd2Via2l0LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcclxuLy8gICAgICAgZnJvbSB7IGJhY2tncm91bmQ6IzUyNjRBRTsgfVxyXG4vLyAgICAgdG8gICB7IHdpZHRoOjA7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IH1cclxuLy8gICB9XHJcbi8vICAgQC1tb3ota2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xyXG4vLyAgICAgICBmcm9tIHsgYmFja2dyb3VuZDojNTI2NEFFOyB9XHJcbi8vICAgICB0byAgIHsgd2lkdGg6MDsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgfVxyXG4vLyAgIH1cclxuLy8gICBAa2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xyXG4vLyAgICAgICBmcm9tIHsgYmFja2dyb3VuZDojNTI2NEFFOyB9XHJcbi8vICAgICB0byAgIHsgd2lkdGg6MDsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgfVxyXG4vLyAgIH1cclxuICBcclxuLy8gICAvKioqKiAgZmxvYXRpbmctTGFibGUgc3R5bGUgZW5kICoqKiovXHJcbiAgXHJcbi8vICAgLyoqKiAgIEJvZHkgc3R5bGUgc3RhcnQgICoqKi9cclxuICBcclxuLy8gICBodG1sIHtcclxuLy8gICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuLy8gICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuLy8gICAgICAgY29sb3I6ICM5NDk0OTQ7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLy8gICAvKioqICAgQm9keSBzdHlsZSBlbmQgICoqKi9cclxuLy8gICAuYm9keXtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAvKioqICAgZGFuaWVsIC0gRm9yayBtZSBmcmllbmQgLSBzdHlsZSAgICoqKi9cclxuLy8gICAuZmxvYXRpbmctY3JlZGl0IHsgcG9zaXRpb246Zml4ZWQ7IGJvdHRvbToxMHB4O3JpZ2h0OjEwcHg7IGNvbG9yOiNhYWE7IGZvbnQtc2l6ZToxM3B4O2ZvbnQtZmFtaWx5OmFyaWFsLHNhbnMtc2VyaWY7IH1cclxuLy8gICAuZmxvYXRpbmctY3JlZGl0IGEgeyB0ZXh0LWRlY29yYXRpb246bm9uZTsgY29sb3I6IzAwMDAwMDsgZm9udC13ZWlnaHQ6Ym9sZDsgfVxyXG4vLyAgIC5mbG9hdGluZy1jcmVkaXQgYTpob3ZlciB7IGJvcmRlci1ib3R0b206MXB4IGRvdHRlZCAjRjhGOEY4OyB9XHJcbi8vICAgLmZsb2F0aW5nLWhlYWRpbmcgeyBwb3NpdGlvbjpmaXhlZDsgY29sb3I6I2FhYTsgZm9udC1zaXplOjIwcHg7IGZvbnQtZmFtaWx5OmFyaWFsLHNhbnMtc2VyaWY7IH1cclxuLy8gICAvKioqICBkYW5pZWwgLSBGb3JrIG1lIGZyaWVuZCAtIHN0eWxlICAqKiovXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgbWFyZ2luOiA0NXB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jbGVhcmZpeCB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tcGFydCB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tcGFydCBoMiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtaW5wdXQsXHJcbiAgLnJhZGlvLWJ1dHRvbixcclxuICAuY2hlY2stYm94ZXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtaW5wdXQgbGFiZWwsXHJcbiAgLnJhZGlvLWJ1dHRvbiBsYWJlbCxcclxuICAuY2hlY2stYm94ZXMgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAucmFkaW8tYnV0dG9uIGxhYmVsLFxyXG4gIC5jaGVjay1ib3hlcyBsYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbnB1dCBpbnB1dCxcclxuICAudGV4dC1pbnB1dCB0ZXh0YXJlYSxcclxuICAudGV4dC1pbnB1dCBzZWxlY3Qge1xyXG4gICAgcGFkZGluZzogN3B4IDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtaW5wdXQgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbnB1dCB0ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAuc3FyLWlucHV0IC50ZXh0LWlucHV0LFxyXG4gIC5zcXItcmFkaW8taW5wdXQgLnJhZGlvLWJ1dHRvbixcclxuICAuc3FyLWNoZWNrLWlucHV0IC5jaGVjay1ib3hlcyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcXItaW5wdXQgLnRleHQtaW5wdXQ6bnRoLWNoaWxkKDEpLFxyXG4gIC5zcXItcmFkaW8taW5wdXQgLnJhZGlvLWJ1dHRvbjpudGgtY2hpbGQoMSksXHJcbiAgLnNxci1jaGVjay1pbnB1dCAuY2hlY2stYm94ZXM6bnRoLWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIH1cclxuICBcclxuICAuY3ViLWlucHV0IC50ZXh0LWlucHV0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI2LjY2JTtcclxuICB9XHJcbiAgXHJcbiAgLmN1Yi1pbnB1dCAudGV4dC1pbnB1dDpudGgtY2hpbGQoMSksXHJcbiAgLmN1Yi1pbnB1dCAudGV4dC1pbnB1dDpudGgtY2hpbGQoMikge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ucy1yYWRpby1idG4gaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxyXG4gIC5ucy1jaGVjay1ib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLnByb2R1Y3RzcGFjZXtcclxuICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICB9XHJcbiAgLnRpY2t7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGRzdWJtaXR7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAyOHB4O1xyXG4gICAgICBsZWZ0OjcyMHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/demo/pages/finance/customerhistory/customerhistorydetails/customerhistorydetails.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/demo/pages/finance/customerhistory/customerhistorydetails/customerhistorydetails.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CustomerhistorydetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerhistorydetailsComponent", function() { return CustomerhistorydetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _sales_billing_billing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../sales/billing/billing.service */ "./src/app/demo/pages/sales/billing/billing.service.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer.service */ "./src/app/demo/pages/finance/customerhistory/customer.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");







let CustomerhistorydetailsComponent = class CustomerhistorydetailsComponent {
    constructor(fb, salesServicew, customerSerice, toster) {
        this.fb = fb;
        this.salesServicew = salesServicew;
        this.customerSerice = customerSerice;
        this.toster = toster;
        this.arr = [];
        this.paidarr = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        var amount = 0;
        this.amountpaid = amount;
        this.sale = JSON.parse(localStorage.getItem('sale'));
        this.name = this.sale.name;
        this.location = this.sale.billAddress;
        this.credit = this.sale.credit;
        this.amount = this.sale.overAllInvoiceAmount;
        this.arr.push(this.sale);
        this.dtTrigger.next();
        this.arr.forEach(element => {
            this.paidval = element.paid;
        });
        var resultProductData = this.paidval.filter(function (a) {
            return a.dat != "dd-mm-yyyy";
        });
        this.paidarr = resultProductData;
        console.log(this.paidarr, 'paid value');
        this.dataget();
        // this.salesServicew.getInvProduct().subscribe(data=>{
        //   this.dummy=data;
        //   console.log(this.dummy,'sales value')
        // })
        this.loadForm(this.sale);
        this.update(this.sale);
        // this.salesServicew.getProduct().subscribe(dat=>{
        //   this.data=dat
        this.arr.forEach(dat => {
            this.balance = dat.balance;
            this.total = 0;
            dat.paid.forEach(da => {
                var mp = da.amountPaid;
                this.total = this.total + Number.parseFloat(mp);
                console.log(this.total + Number.parseFloat(mp));
            });
        });
        console.log(this.total);
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        // console.log(dat,'get from cusfinm')
    }
    dataget() {
        this.SaleForm = this.fb.group({
            _id: [''],
            name: [''],
            overAllInvoiceAmount: [''],
            credit: [''],
            date: [''],
            billAddress: [''],
            shipAddress: [''],
            contactNumber: [''],
            alternateNumber: [''],
            cost: [''],
            products: this.fb.array([this.product]),
            paid: this.fb.array([this.createItem()])
        });
    }
    //  create() {
    //   return this.fb.group({
    //   _id:[''],
    //   itemCode:[''],
    //   idate:[''],
    //   description:[''],
    //   hsnCode:[''],
    //   vom:[''],
    //   custQuantity:[''],
    //   unitRate:[''],
    //   CGST:[''],
    //   SGST:[''],
    //   col33: [0],
    //   col34:[0],
    //   col35:[0],
    //   })
    // }
    createItem() {
        return this.fb.group({
            // _id:[''],
            dat: [''],
            amountPaid: [''],
        });
    }
    // get products() {
    //   return this.SaleForm.get('products') as FormArray;
    // }
    get paid() {
        return this.SaleForm.get('paid');
    }
    loadForm(data) {
        //create lines array first
        for (let line = 1; line < data.products.length; line++) {
            const productsFormArray = this.SaleForm.get("products");
            productsFormArray.push(this.product);
        }
        //once we setup the form with all the arrays and such, we cna just
        //patch the form:
    }
    get product() {
        return this.fb.group({
            _id: '',
            itemCode: '',
            idate: '',
            description: '',
            hsnCode: '',
            vom: '',
            custQuantity: '',
            unitRate: '',
            CGST: '',
            SGST: '',
            col33: 0,
            col34: 0,
            col35: 0,
        });
    }
    onSubmit(val) {
        console.log(val, 'dataval');
        val.amount = val.overAllInvoiceAmount;
        val.overAllInvoiceTotal = val.overAllInvoiceAmount - (Number.parseFloat(val.credit));
        val.balance = val.overAllInvoiceAmount - (Number.parseFloat(val.credit) + Number.parseFloat(this.total) + Number.parseFloat(this.amountpaid));
        this.salesServicew.putProduct(val).subscribe(data => {
            console.log(data, 'puted');
            console.log(val.balance, 'balance bal');
            this.toster.success('added successfully');
        });
        console.log(val.balance, 'balance bal');
    }
    update(val) {
        console.log(val, 'salesupdate');
        this.SaleForm.patchValue(val);
    }
};
CustomerhistorydetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _sales_billing_billing_service__WEBPACK_IMPORTED_MODULE_3__["BillingService"] },
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
CustomerhistorydetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerhistorydetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customerhistorydetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/finance/customerhistory/customerhistorydetails/customerhistorydetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customerhistorydetails.component.scss */ "./src/app/demo/pages/finance/customerhistory/customerhistorydetails/customerhistorydetails.component.scss")).default]
    })
], CustomerhistorydetailsComponent);



/***/ }),

/***/ "./src/app/demo/pages/sales/billing/billing.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/demo/pages/sales/billing/billing.service.ts ***!
  \*************************************************************/
/*! exports provided: BillingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingService", function() { return BillingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/enviromentURL */ "./src/environments/enviromentURL.ts");




let BillingService = class BillingService {
    constructor(http) {
        this.http = http;
    }
    getProduct() {
        var us = JSON.parse(localStorage.getItem('user'));
        us.forEach(element => {
            this.id = element.branchId;
        });
        return this.http.get(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/billing` + '/' + this.id);
    }
    postProduct(value) {
        return this.http.post(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/billing`, value);
    }
    deleteProduct(id) {
        return this.http.delete(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/billing` + '/' + id);
    }
    putProduct(value) {
        return this.http.put(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/billing` + '/' + value._id, value);
    }
};
BillingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BillingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BillingService);



/***/ })

}]);
//# sourceMappingURL=customerhistory-customerhistory-module-es2015.js.map