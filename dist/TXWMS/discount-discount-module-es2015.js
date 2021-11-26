(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discount-discount-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/business/discount/discount.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/business/discount/discount.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" [hidden]='forBill==false'>\n    <!-- <div class=\"col-lg-12 text-right\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)='invoiceform()'> \n        <img src=\"../../../../../assets/images/plus.png\" alt=\"\"> \n        </button>\n    </div> -->\n\n    <div class=\"col-xl-12\">\n        <app-card cardTitle=\"Discount Details\" [options]=\"false\" blockClass=\"table-border-style\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n              <thead>\n              <tr>\n                <th> Invoice Number </th>\n                <th> Date </th>\n                <th> Customer Name </th>\n                <th> GST Number </th>\n               \n                <th> Contact Number </th>\n                <th> Action </th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor='let data of getData'>\n                <td>{{data.invoiceNumber}}</td>\n                <td>{{data.date}} </td>\n                <td>{{data.name}} </td>\n                <td>{{data.cost}} </td>\n               \n                <td>{{data.contactNumber}} </td>\n                <td>\n                   <button style=\"background: none; border: none;\" (click)='show(data)'> <i class=\"fa fa-eye\"></i>  </button> &nbsp;&nbsp;\n                   </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </app-card>\n      </div>\n</div>\n\n\n\n\n<section class=\"invoicediv\" *ngIf='table'>\n    <app-card cardTitle=\"Product-Wise discount details\" [options]=\"false\" blockClass=\"table-border-style\">\n        <div class=\"table-responsive\">\n            <table class=\"table table-striped\"  >\n                <thead>\n                <tr>\n                  <th> Item Code </th>\n                  <th> Discount/% </th>\n                  <th> Discount Amount </th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor='let data of getDa'>\n                  <td>{{data.itemCode}}</td>\n                  <td>{{data.discount}} </td>\n                  <td>{{data.discountAmount}}</td>\n                </tr>\n                </tbody>\n              </table>\n        </div>\n      </app-card>\n</section>\n\n\n\n");

/***/ }),

/***/ "./src/app/demo/report/report/business/discount/discount-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/report/report/business/discount/discount-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DiscountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountRoutingModule", function() { return DiscountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _discount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discount.component */ "./src/app/demo/report/report/business/discount/discount.component.ts");




//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes = [
    {
        path: '',
        component: _discount_component__WEBPACK_IMPORTED_MODULE_3__["DiscountComponent"]
    },
];
let DiscountRoutingModule = class DiscountRoutingModule {
};
DiscountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DiscountRoutingModule);



/***/ }),

/***/ "./src/app/demo/report/report/business/discount/discount.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/demo/report/report/business/discount/discount.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 550px;\n  margin: 45px auto; }\n\n.clearfix {\n  clear: both; }\n\n.form-part {\n  margin: 20px 0; }\n\n.form-part h2 {\n  font-size: 25px;\n  font-weight: 400;\n  font-family: 'Josefin Sans', sans-serif;\n  margin-bottom: 15px; }\n\n.text-input,\n.radio-button,\n.check-boxes {\n  margin-bottom: 13px; }\n\n.text-input label,\n.radio-button label,\n.check-boxes label {\n  display: block;\n  margin-bottom: 3px;\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 14px;\n  font-weight: 600; }\n\n.radio-button label,\n.check-boxes label {\n  margin-bottom: 7px;\n  font-weight: 900; }\n\n.text-input input,\n.text-input textarea,\n.text-input select {\n  padding: 7px 7px;\n  display: block;\n  width: 100%;\n  border: solid 1px #ccc;\n  border-radius: 2px; }\n\n.text-input select {\n  width: 100%; }\n\n.text-input textarea {\n  height: 100px; }\n\n.sqr-input .text-input,\n.sqr-radio-input .radio-button,\n.sqr-check-input .check-boxes {\n  float: left;\n  width: 45%; }\n\n.sqr-input .text-input:nth-child(1),\n.sqr-radio-input .radio-button:nth-child(1),\n.sqr-check-input .check-boxes:nth-child(1) {\n  margin-right: 10%; }\n\n.cub-input .text-input {\n  float: left;\n  width: 26.66%; }\n\n.cub-input .text-input:nth-child(1),\n.cub-input .text-input:nth-child(2) {\n  margin-right: 10%; }\n\n.ns-radio-btn input[type=\"radio\"],\n.ns-check-box input[type=\"checkbox\"] {\n  visibility: hidden; }\n\n.productspace {\n  margin-top: 70px; }\n\n.tick {\n  height: 20px;\n  width: 20px; }\n\n.addsubmit {\n  position: absolute;\n  bottom: 28px;\n  left: 720px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9yZXBvcnQvcmVwb3J0L2J1c2luZXNzL2Rpc2NvdW50L0M6XFxVc2Vyc1xcQmhhcmFuZWVkaGFyYW5cXERvd25sb2Fkc1xcV01TLTFcXHdtcyAxNC0xMi9zcmNcXGFwcFxcZGVtb1xccmVwb3J0XFxyZXBvcnRcXGJ1c2luZXNzXFxkaXNjb3VudFxcZGlzY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLG1CQUFtQixFQUFBOztBQUdyQjs7O0VBR0UsbUJBQW1CLEVBQUE7O0FBR3JCOzs7RUFHRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCOztFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7OztFQUdFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLHNCQUFzQjtFQUd0QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7OztFQUdFLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1o7OztFQUdFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2Y7O0VBRUUsaUJBQWlCLEVBQUE7O0FBR25COztFQUVFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC9idXNpbmVzcy9kaXNjb3VudC9kaXNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgbWFyZ2luOiA0NXB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jbGVhcmZpeCB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tcGFydCB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tcGFydCBoMiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtaW5wdXQsXHJcbiAgLnJhZGlvLWJ1dHRvbixcclxuICAuY2hlY2stYm94ZXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtaW5wdXQgbGFiZWwsXHJcbiAgLnJhZGlvLWJ1dHRvbiBsYWJlbCxcclxuICAuY2hlY2stYm94ZXMgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAucmFkaW8tYnV0dG9uIGxhYmVsLFxyXG4gIC5jaGVjay1ib3hlcyBsYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbnB1dCBpbnB1dCxcclxuICAudGV4dC1pbnB1dCB0ZXh0YXJlYSxcclxuICAudGV4dC1pbnB1dCBzZWxlY3Qge1xyXG4gICAgcGFkZGluZzogN3B4IDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtaW5wdXQgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbnB1dCB0ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAuc3FyLWlucHV0IC50ZXh0LWlucHV0LFxyXG4gIC5zcXItcmFkaW8taW5wdXQgLnJhZGlvLWJ1dHRvbixcclxuICAuc3FyLWNoZWNrLWlucHV0IC5jaGVjay1ib3hlcyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcXItaW5wdXQgLnRleHQtaW5wdXQ6bnRoLWNoaWxkKDEpLFxyXG4gIC5zcXItcmFkaW8taW5wdXQgLnJhZGlvLWJ1dHRvbjpudGgtY2hpbGQoMSksXHJcbiAgLnNxci1jaGVjay1pbnB1dCAuY2hlY2stYm94ZXM6bnRoLWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIH1cclxuICBcclxuICAuY3ViLWlucHV0IC50ZXh0LWlucHV0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI2LjY2JTtcclxuICB9XHJcbiAgXHJcbiAgLmN1Yi1pbnB1dCAudGV4dC1pbnB1dDpudGgtY2hpbGQoMSksXHJcbiAgLmN1Yi1pbnB1dCAudGV4dC1pbnB1dDpudGgtY2hpbGQoMikge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ucy1yYWRpby1idG4gaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxyXG4gIC5ucy1jaGVjay1ib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLnByb2R1Y3RzcGFjZXtcclxuICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICB9XHJcbiAgLnRpY2t7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGRzdWJtaXR7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAyOHB4O1xyXG4gICAgICBsZWZ0OjcyMHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/demo/report/report/business/discount/discount.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/report/report/business/discount/discount.component.ts ***!
  \****************************************************************************/
/*! exports provided: DiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountComponent", function() { return DiscountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pages/sales/sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_form_elements_basic_elements_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../pages/form-elements/basic-elements/supplier.service */ "./src/app/demo/pages/form-elements/basic-elements/supplier.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");







let DiscountComponent = class DiscountComponent {
    constructor(salesErvice, fb, supplierService, excelService) {
        this.salesErvice = salesErvice;
        this.fb = fb;
        this.supplierService = supplierService;
        this.excelService = excelService;
        this.forBill = true;
        this.table = false;
        this.values = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.isDtInitialized = false;
    }
    ngOnInit() {
        this.salesErvice.getInvProduct().subscribe(data => {
            this.getData = data;
            this.dtTrigger.next();
            console.log(this.getData);
            this.getData.forEach(data => {
                data.products.forEach(dat => {
                    this.product.push(dat);
                });
                this.dtTrigger.next();
            });
            // console.log(this.product,'arrayproduct')
        });
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
    }
    show(data) {
        this.values = [];
        this.forBill = false;
        this.table = true;
        // this.totalAM=data.overAllInvoiceAmount
        // this.allcgst=data.overAllCGSTUnit
        // this.allsgst=data.overAllSGSTUnit
        this.values.push(data);
        this.getDa = data.products;
        this.dtTrigger.next();
        console.log(data, 'bill');
    }
};
DiscountComponent.ctorParameters = () => [
    { type: _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _pages_form_elements_basic_elements_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"] },
    { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] }
];
DiscountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-discount',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./discount.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/business/discount/discount.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./discount.component.scss */ "./src/app/demo/report/report/business/discount/discount.component.scss")).default]
    })
], DiscountComponent);



/***/ }),

/***/ "./src/app/demo/report/report/business/discount/discount.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/report/report/business/discount/discount.module.ts ***!
  \*************************************************************************/
/*! exports provided: DiscountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountModule", function() { return DiscountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _discount_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discount.component */ "./src/app/demo/report/report/business/discount/discount.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _discount_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discount-routing.module */ "./src/app/demo/report/report/business/discount/discount-routing.module.ts");





// import { FileUploadComponent } from './fi';


// import { NoteformComponent } from "./noteform/noteform.component";
let DiscountModule = class DiscountModule {
};
DiscountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_discount_component__WEBPACK_IMPORTED_MODULE_4__["DiscountComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _discount_routing_module__WEBPACK_IMPORTED_MODULE_6__["DiscountRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
        ]
    })
], DiscountModule);



/***/ })

}]);
//# sourceMappingURL=discount-discount-module-es2015.js.map