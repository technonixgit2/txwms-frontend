(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outstanding-outstanding-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/finance/outstanding/outstanding.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/finance/outstanding/outstanding.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n  <div class=\"row\" [hidden]='value==true'>\n    <div class=\"col-xl-12\">\n        <app-card cardTitle=\"Montly-Wise Sales\" [options]=\"false\" blockClass=\"table-border-style\" >\n        <div class=\"month\" style=\"text-align: right; \"> <b style=\"color: black;\">Select Month</b>&nbsp;\n            <select (change)=\"setchange($event.target.value)\" style=\"width: 183px; height: 30px;\">\n                <option  value='1'>January</option>\n                <option value='2'>February</option>\n                <option value='3'>March</option>\n                <option value='4'>April</option>\n                <option value='5'>May</option>\n                <option value='6'>June</option>\n                <option value='7'>July</option>\n                <option value='8'>August</option>\n                <option value='9'>September</option>\n                <option value='10'>October</option>\n                <option value='11'>November</option>\n                <option  value='12'>December</option>\n                </select> \n          </div>\n          <div>\n\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" >\n              <thead>\n              <tr>\n               \n                <th>Date</th>  \n                <th> Name </th>\n                <th>Contact Number </th>\n                <th>GST Number</th>\n                <th>Invoice Amount</th> \n                <th>View Product</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor='let data of pro'>\n               \n                <td>{{data.date}}</td>\n                <td>{{data.name}} </td>\n                <td>{{data.contactNumber}} </td>\n                <td>{{data.cost}} </td>\n                <td>{{data.overAllInvoiceAmount}}</td>\n                <td (click)='show(data)'><i class=\"fa fa-eye\"></i></td>\n             </tr>\n              </tbody>\n            </table>\n          </div>\n          <label for=\"val\"><b>Monthly Sale:</b> <b>{{monthlysale}}</b> </label>\n        </app-card>\n      </div>\n</div>\n\n<section class=\"supplierview\" [hidden]='value==false'>\n  <div class=\"row sviewform\">\n    <div class=\"col-lg-2\">\n      <label for=\"name\"> <b></b>Name: </label> <br>\n      <label for=\"gnum\"> <b> GST Number: </b> </label> <br>\n      <label for=\"billaddress\"> <b> Billing Address: </b> </label>\n\n    </div>\n    <div class=\"col-lg-4\">\n      <label for=\"nameans\"> {{Supplier}} </label> <br>\n      <label for=\"gnumans\"> {{Gnum}} </label> <br>\n      <label for=\"billaddressans\"> {{Saddress}} </label>\n\n    </div>\n    <div class=\"col-lg-2\">\n      <label for=\"contact\"> <b> Contact Number: </b> </label> <br>\n      <label for=\"iv\"> <b> Invoice Number: </b> </label> <br>\n      <label for=\"shipaddress\"> <b> Shipping Address: </b> </label>\n\n    </div>\n    <div class=\"col-lg-4\">\n      <label for=\"contactans\"> {{contact}}</label> <br>\n      <label for=\"ivans\"> {{Inum}} </label> <br>\n\n      <label for=\"shipaddressans\"> {{Baddress}} </label>\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <table class=\"sviewtable\">\n        <thead>\n          <tr>\n           \n            <th scope=\"col\">itemCode</th>\n            <th scope=\"col\">description</th>\n            <th scope=\"col\">Quantity</th>\n            <th scope=\"col\">Invoice Total</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor='let leave of invoice '>\n            \n            <td>{{ leave.itemCode }}</td>\n            <td >{{leave.description}}</td>\n            <td>{{leave.custQuantity}}</td>\n            <td>{{leave.invoiceTotal}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div> <button (click)='back()'><i class=\"far fa-arrow-alt-circle-left\"></i></button> </div>\n  \n</section>");

/***/ }),

/***/ "./src/app/demo/pages/finance/outstanding/outstanding-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo/pages/finance/outstanding/outstanding-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: OutstandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutstandingRoutingModule", function() { return OutstandingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _outstanding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outstanding.component */ "./src/app/demo/pages/finance/outstanding/outstanding.component.ts");




const routes = [
    {
        path: '',
        component: _outstanding_component__WEBPACK_IMPORTED_MODULE_3__["OutstandingComponent"]
    }
];
let OutstandingRoutingModule = class OutstandingRoutingModule {
};
OutstandingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OutstandingRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/finance/outstanding/outstanding.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/demo/pages/finance/outstanding/outstanding.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image {\n  height: 30px;\n  width: 40px; }\n\n/*\tReset & General\r\n---------------------------------------------------------------------- */\n\nbody {\n  background: #ecf1f5;\n  font: 14px \"Open Sans\", sans-serif;\n  text-align: center; }\n\n.supplierview {\n  margin: 0 5%;\n  padding: 2%;\n  background-color: white; }\n\n.sviewtable {\n  width: 100%;\n  background-color: white; }\n\n.sviewform {\n  color: #504c4c; }\n\n.sviewtable {\n  margin: 2% 0; }\n\n.sviewtable th {\n  text-align: center; }\n\n.sviewtable tr, .sviewtable th, .sviewtable td {\n  border: 1px solid gray;\n  padding: 0.5%; }\n\n.fa-eye:before {\n  content: \"\\f06e\";\n  color: #b4afaf; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9maW5hbmNlL291dHN0YW5kaW5nL0M6XFxVc2Vyc1xcQmhhcmFuZWVkaGFyYW5cXERvd25sb2Fkc1xcV01TLTFcXHdtcyAxNC0xMi9zcmNcXGFwcFxcZGVtb1xccGFnZXNcXGZpbmFuY2VcXG91dHN0YW5kaW5nXFxvdXRzdGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVtby9wYWdlcy9maW5hbmNlL291dHN0YW5kaW5nL291dHN0YW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFTZjt3RUNOd0U7O0FEU3hFO0VBQ0MsbUJBQW1CO0VBQ25CLGtDQUFpQztFQUNqQyxrQkFBaUIsRUFBQTs7QUFFbEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLFdBQVc7RUFDWCx1QkFBdUIsRUFBQTs7QUFFekI7RUFBYSxjQUFxQixFQUFBOztBQUNsQztFQUFjLFlBQVksRUFBQTs7QUFDMUI7RUFBZSxrQkFBa0IsRUFBQTs7QUFDakM7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYyxFQUFBOztBQUVoQjtFQUNFLGdCQUFnQjtFQUNoQixjQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL2ZpbmFuY2Uvb3V0c3RhbmRpbmcvb3V0c3RhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuIH1cclxuIFxyXG4vLyAgLmNvbnRhaW5lcntcclxuLy8gXHQgbWFyZ2luOiA1MCU7XHJcbi8vICB9XHJcblxyXG4vLyAgbmV3d3d3d1xyXG5cclxuLypcdFJlc2V0ICYgR2VuZXJhbFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8vICogeyBtYXJnaW46IDBweDsgcGFkZGluZzogMHB4OyB9XHJcbmJvZHkge1xyXG5cdGJhY2tncm91bmQ6ICNlY2YxZjU7XHJcblx0Zm9udDoxNHB4IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7IFxyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5zdXBwbGllcnZpZXd7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zdmlld3RhYmxle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zdmlld2Zvcm0geyBjb2xvcjpyZ2IoODAsIDc2LCA3Nik7IH1cclxuLnN2aWV3dGFibGUgeyBtYXJnaW46IDIlIDA7IH1cclxuLnN2aWV3dGFibGUgdGh7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLnN2aWV3dGFibGUgdHIsIC5zdmlld3RhYmxlIHRoLCAuc3ZpZXd0YWJsZSB0ZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIHBhZGRpbmc6IDAuNSUgO1xyXG59XHJcbi5mYS1leWU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZjA2ZVwiO1xyXG4gIGNvbG9yOiAjYjRhZmFmIDtcclxufVxyXG4iLCIuaW1hZ2Uge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA0MHB4OyB9XG5cbi8qXHRSZXNldCAmIEdlbmVyYWxcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNlY2YxZjU7XG4gIGZvbnQ6IDE0cHggXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5zdXBwbGllcnZpZXcge1xuICBtYXJnaW46IDAgNSU7XG4gIHBhZGRpbmc6IDIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4uc3ZpZXd0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4uc3ZpZXdmb3JtIHtcbiAgY29sb3I6ICM1MDRjNGM7IH1cblxuLnN2aWV3dGFibGUge1xuICBtYXJnaW46IDIlIDA7IH1cblxuLnN2aWV3dGFibGUgdGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnN2aWV3dGFibGUgdHIsIC5zdmlld3RhYmxlIHRoLCAuc3ZpZXd0YWJsZSB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDAuNSU7IH1cblxuLmZhLWV5ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA2ZVwiO1xuICBjb2xvcjogI2I0YWZhZjsgfVxuIl19 */");

/***/ }),

/***/ "./src/app/demo/pages/finance/outstanding/outstanding.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/pages/finance/outstanding/outstanding.component.ts ***!
  \*************************************************************************/
/*! exports provided: OutstandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutstandingComponent", function() { return OutstandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sales_sales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sales/sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
/* harmony import */ var _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../extra/sample-page/purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let OutstandingComponent = class OutstandingComponent {
    constructor(billingService, purchaseService) {
        this.billingService = billingService;
        this.purchaseService = purchaseService;
        this.product = [];
        this.invoice = [];
        this.profitData = [];
        this.total = [];
        this.value = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.billingService.getInvProduct().subscribe(data => {
            this.getData = data;
            this.product = [];
            console.log(this.getData);
            this.getData.forEach(data => {
                data.products.forEach(dat => {
                    this.product.push(dat);
                });
            });
        });
        this.getPurchase();
    }
    getPurchase() {
        this.purchaseService.getPurchaseData().subscribe(data => {
            this.purchaseData = data,
                this.total = [];
            this.purchaseData.forEach(val => {
                this.getInvoice = val.invoice;
                this.getInvoice.forEach(dat => {
                    this.total.push(dat);
                });
            });
        });
    }
    setchange(selectedvalue) {
        this.sss = selectedvalue;
        this.getData.forEach(dat => {
            var date = dat.crmonth;
            // console.log(date,'good');
        });
        const emp = [this.sss];
        const filteredArray = this.getData.filter(function (itm) {
            return emp.indexOf(itm.crmonth) > -1;
        });
        var count = 0;
        var sale = filteredArray.forEach(element => {
            count = count + element.overAllInvoiceTotal;
        });
        this.monthlysale = count;
        this.pro = filteredArray;
        this.dtTrigger.next();
        console.log(this.pro, 'good', count);
    }
    back() {
        this.value = false;
    }
    ;
    show(date) {
        this.invoice = [];
        this.value = true;
        this.Supplier = date.name;
        this.contact = date.contactNumber;
        this.Saddress = date.shipAddress;
        this.Baddress = date.billAddress;
        this.Gnum = date.cost;
        this.Inum = date.invoiceNumber;
        this.invoice = date.products;
        console.log(date, 'good');
    }
};
OutstandingComponent.ctorParameters = () => [
    { type: _sales_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"] },
    { type: _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseService"] }
];
OutstandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-outstanding',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./outstanding.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/finance/outstanding/outstanding.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./outstanding.component.scss */ "./src/app/demo/pages/finance/outstanding/outstanding.component.scss")).default]
    })
], OutstandingComponent);



/***/ }),

/***/ "./src/app/demo/pages/finance/outstanding/outstanding.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/pages/finance/outstanding/outstanding.module.ts ***!
  \**********************************************************************/
/*! exports provided: OutstandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutstandingModule", function() { return OutstandingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _outstanding_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./outstanding-routing.module */ "./src/app/demo/pages/finance/outstanding/outstanding-routing.module.ts");
/* harmony import */ var _outstanding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outstanding.component */ "./src/app/demo/pages/finance/outstanding/outstanding.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");







let OutstandingModule = class OutstandingModule {
};
OutstandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _outstanding_routing_module__WEBPACK_IMPORTED_MODULE_4__["OutstandingRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
        ],
        declarations: [_outstanding_component__WEBPACK_IMPORTED_MODULE_5__["OutstandingComponent"]]
    })
], OutstandingModule);



/***/ })

}]);
//# sourceMappingURL=outstanding-outstanding-module-es2015.js.map