(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["day-book-day-book-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/day-book/day-book.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/day-book/day-book.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n    <div class=\"col-lg-12 text-right\">\n      <button type=\"button\" class=\"btn btn-primary\"  (click)='exportToExcel(array)'>Export &nbsp; <i class=\"fas fa-file-export\"></i></button>\n    </div>\n  \n      <div class=\"col-xl-12\">\n        <app-card cardTitle=\"Customer Transaction \" [options]=\"false\" blockClass=\"table-border-style\">\n          <div class=\"month\" style=\"text-align: right; \"> <b style=\"color: black;\">Select Month</b>&nbsp;\n            <div class=\"dated\" >\n              <label>From Date: &nbsp;</label>  <input type=\"date\" [formControl]=\"fromdate\" (change)='from($event.target.value)'>\n              <label>To Date: &nbsp;</label>  <input type=\"date\" [formControl]=\"enddate\" (change)='to($event.target.value)'>\n              </div>\n            </div>\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n              <thead>\n              <tr>\n                  <th>Select</th>\n                <th>Date</th>\n                <th>Name </th>\n                <th> Bill Amount </th>\n                <th> Credit Amount</th>\n                <!-- <th> Credit-Amount </th> -->\n                <th>Paid Amount</th>\n                <th> Balance </th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor='let data of array'>\n                <td><input type=\"checkbox\" (change)='getValue(data,$event.target.checked)'></td>\n                <td>{{data.Date}} </td>\n                <td>{{data.Name}}</td>\n                <td>{{data.Invoice | number:'1.2-2'}}</td>\n                <td>{{data.Credit| number:'1.2-2'}}</td>\n                <!-- <td>{{data.overAllInvoiceTotal | number:'1.2-2' }}</td> -->\n                <!-- <td>{{data. | number:'1.2-2' }}</td> -->\n                <td> {{data.Paid | number:'1.2-2'}}</td>\n                <td> {{data.Balance | number:'1.2-2'}}</td>\n                <!-- <td> <button (click)='update(data)' style=\"background: none; border: none;\" ><i style=\"color: #007bff;\"class=\"fa fa-edit\"></i></button> </td> -->\n              </tr>\n              </tbody>\n            </table>\n           \n          </div>\n          <div  *ngIf='tap'>\n            <label for=\"for\">Total Credit  {{credit}}</label>\n            <label for=\"for\"> Total Amount Paid  {{Apaid}} </label>\n            <label for=\"for\">Total Balance  {{balance}} </label>\n    \n          </div>\n        </app-card>\n      </div>\n  \n    </div>\n  ");

/***/ }),

/***/ "./src/app/demo/report/report/transaction/day-book/day-book-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/demo/report/report/transaction/day-book/day-book-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: DayBookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayBookRoutingModule", function() { return DayBookRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _day_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day-book.component */ "./src/app/demo/report/report/transaction/day-book/day-book.component.ts");




//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes = [
    {
        path: '',
        component: _day_book_component__WEBPACK_IMPORTED_MODULE_3__["DayBookComponent"]
    },
];
let DayBookRoutingModule = class DayBookRoutingModule {
};
DayBookRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DayBookRoutingModule);



/***/ }),

/***/ "./src/app/demo/report/report/transaction/day-book/day-book.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/report/report/transaction/day-book/day-book.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=\"date\"]::-webkit-clear-button {\n  display: none; }\n\n/* Removes the spin button */\n\ninput[type=\"date\"]::-webkit-inner-spin-button {\n  display: none; }\n\n/* Always display the drop down caret */\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: #2C3E50; }\n\n/* A few custom styles for date inputs */\n\ninput[type=\"date\"] {\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n  color: #95A5A6;\n  font-family: \"Helvetica\", arial, sans-serif;\n  font-size: 13px;\n  border: 3px solid #ECF0F1;\n  background: #ecf0f1;\n  padding: 5px;\n  display: inline-block !important;\n  visibility: visible !important; }\n\ninput[type=\"date\"], focus {\n  color: #95A5A6;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none; }\n\n.dated {\n  text-align: right;\n  padding-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9yZXBvcnQvcmVwb3J0L3RyYW5zYWN0aW9uL2RheS1ib29rL0M6XFxVc2Vyc1xcQmhhcmFuZWVkaGFyYW5cXERvd25sb2Fkc1xcV01TLTFcXHdtcyAxNC0xMi9zcmNcXGFwcFxcZGVtb1xccmVwb3J0XFxyZXBvcnRcXHRyYW5zYWN0aW9uXFxkYXktYm9va1xcZGF5LWJvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7O0FBRWpCLDRCQUFBOztBQUNBO0VBQ0ksYUFBYSxFQUFBOztBQUVqQix1Q0FBQTs7QUFDQTtFQUNJLGNBQWMsRUFBQTs7QUFFbEIsd0NBQUE7O0FBQ0E7RUFDSSxxQkFBZ0I7T0FBaEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsMkNBQTJDO0VBQzNDLGVBQWU7RUFDZix5QkFBd0I7RUFDeEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksaUJBQWlCO0VBQUUsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3JlcG9ydC9yZXBvcnQvdHJhbnNhY3Rpb24vZGF5LWJvb2svZGF5LWJvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiBSZW1vdmVzIHRoZSBzcGluIGJ1dHRvbiAqL1xyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7IFxyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiBBbHdheXMgZGlzcGxheSB0aGUgZHJvcCBkb3duIGNhcmV0ICovXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gICAgY29sb3I6ICMyQzNFNTA7XHJcbn1cclxuLyogQSBmZXcgY3VzdG9tIHN0eWxlcyBmb3IgZGF0ZSBpbnB1dHMgKi9cclxuaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGNvbG9yOiAjOTVBNUE2O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYm9yZGVyOjNweCBzb2xpZCAjRUNGMEYxO1xyXG4gICAgYmFja2dyb3VuZDojZWNmMGYxO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSwgZm9jdXMge1xyXG4gICAgY29sb3I6ICM5NUE1QTY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5kYXRlZHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/demo/report/report/transaction/day-book/day-book.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/report/report/transaction/day-book/day-book.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DayBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayBookComponent", function() { return DayBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../pages/sales/sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
/* harmony import */ var _pages_finance_customerhistory_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../pages/finance/customerhistory/customer.service */ "./src/app/demo/pages/finance/customerhistory/customer.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let DayBookComponent = class DayBookComponent {
    constructor(router, salesService, toster, customerservice, excelService) {
        this.router = router;
        this.salesService = salesService;
        this.toster = toster;
        this.customerservice = customerservice;
        this.excelService = excelService;
        this.arr = [];
        this.array = [];
        this.Excel = [];
        this.checklist = [];
        this.cati = [];
        this.category = [];
        this.gory = [];
        this.catigorydivision = [];
        this.datefilter = [];
        this.fromdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.enddate = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
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
            this.getData.forEach(dataa => {
                //  dataa.overAllInvoiceTotal= dataa.overAllInvoiceTotal.tofixed(2) 
            });
            //  this.getaid=filter
            this.dtTrigger.next();
            console.log(this.getData, 'sale credit');
            this.getData.forEach(dataa => {
                var count = 0;
                dataa.paid.forEach(ele => {
                    count = count + parseInt(ele.amountPaid);
                });
                this.array.push({ Date: dataa.date, Name: dataa.name, Invoice: dataa.overAllInvoiceAmount,
                    Credit: dataa.credit, Paid: count, Balance: dataa.balance });
                this.getPaid = dataa.paid;
                this.getPaid.forEach(val => {
                    let zero = 0;
                    console.log(val.amountPaid + zero);
                });
            });
        });
        this.customerservice.getCustomer().subscribe(data => {
            this.getDat = data;
            console.log(this.getDat, 'getfa');
            this.getDat.forEach(element => {
                var count = 0;
                //    element.paid.forEach(ele => {
                //      count=count + ele.amountPaid
                //    });
                // this.array.push( { Date:element.date, Name:element.name, Invoice:element.overAllInvoiceAmount, 
                //   Credit:element.credit, Paid:count, Balance:element.balance })
            });
            //  var resultProductData = this.paidval.filter(function(a) {
            //   return a.dat!="dd-mm-yyyy"
            // });
            // this.arr=resultProductData
            console.log(this.array, 'arr');
        });
    }
    update(data) {
        var value = data;
        console.log(value, 'cust');
    }
    getValue(value, isChecked) {
        if (isChecked) {
            this.checklist.push(value);
        }
        else {
            let index = this.checklist.indexOf(value);
            this.checklist.splice(index, 1);
        }
        console.log(this.checklist);
    }
    exportToExcel(event) {
        console.log(this.checklist, 'check');
        if (this.checklist.length == 0) {
            this.Excel = [];
            event.forEach(dat => {
                var Date = dat.Date;
                var Name = dat.Name;
                var Invoice = dat.Invoice;
                var Credit = dat.Credit;
                var Paid = dat.Paid;
                var Balance = dat.Balance;
                var obj = Object.assign({ Date, Name, Invoice, Credit, Paid, Balance });
                this.Excel.push(obj);
            });
            console.log(this.Excel, 'if');
            this.excelService.exportAsExcelFile(this.Excel, 'persons');
        }
        else {
            this.Excel = [];
            this.checklist.forEach(dat => {
                var Date = dat.Date;
                var Name = dat.Name;
                var Invoice = dat.Invoice;
                var Credit = dat.Credit;
                var Paid = dat.Paid;
                var Balance = dat.Balance;
                var obj = Object.assign({ Date, Name, Invoice, Credit, Paid, Balance });
                this.Excel.push(obj);
            });
            console.log(this.Excel, 'else');
            this.excelService.exportAsExcelFile(this.Excel, 'persons');
        }
    }
    // exportToExcel(event) {
    //     this.Excel=[]
    //     event.forEach(dat => {
    // var Date =dat.Date
    // var Name=dat.Name
    // var Invoice=dat.Invoice
    // var Credit=dat.Credit
    // var Paid=dat.Paid
    // var Balance=dat.Balance
    // var obj=Object.assign({Date,Name,Invoice,Credit,Paid,Balance})
    // this.Excel.push(obj)
    // });
    // console.log(this.Excel,'if')
    //   this.excelService.exportAsExcelFile( this.Excel, 'persons');
    // }
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
DayBookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _pages_finance_customerhistory_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] },
    { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_7__["ExcelService"] }
];
DayBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-day-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./day-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/day-book/day-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./day-book.component.scss */ "./src/app/demo/report/report/transaction/day-book/day-book.component.scss")).default]
    })
], DayBookComponent);



/***/ }),

/***/ "./src/app/demo/report/report/transaction/day-book/day-book.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/report/report/transaction/day-book/day-book.module.ts ***!
  \****************************************************************************/
/*! exports provided: DayBookReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayBookReportModule", function() { return DayBookReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _day_book_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./day-book-routing.module */ "./src/app/demo/report/report/transaction/day-book/day-book-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _day_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./day-book.component */ "./src/app/demo/report/report/transaction/day-book/day-book.component.ts");





// import { FileUploadComponent } from './fi';


// import { NoteformComponent } from "./noteform/noteform.component";
let DayBookReportModule = class DayBookReportModule {
};
DayBookReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_day_book_component__WEBPACK_IMPORTED_MODULE_6__["DayBookComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _day_book_routing_module__WEBPACK_IMPORTED_MODULE_4__["DayBookRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
        ]
    })
], DayBookReportModule);



/***/ })

}]);
//# sourceMappingURL=day-book-day-book-module-es2015.js.map