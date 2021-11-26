(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-reportby-party-item-reportby-party-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\"  [hidden]='val==true'>\r\n\r\n  \r\n      <div class=\"col-xl-12\">\r\n        <app-card cardTitle=\"Item Report-By Party\" [options]=\"false\" blockClass=\"table-border-style\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n              <thead>\r\n              <tr>\r\n                <th> Date </th>\r\n                <th>Suppliers</th>\r\n                <th> Invoice Number </th>\r\n                <th> Invoice Amount </th>\r\n                <th>Export</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor='let data of getData'>\r\n                <td>{{data.date}}</td>\r\n                <td>{{data.supplier}}</td>\r\n                <td>{{data.invoiceNo}}</td>\r\n                <td>{{data.invoiceAmount | number:'1.2-2'}}</td>\r\n                <td>\r\n                    <button style=\"background: none;border: none;\" (click)='exportToExcel(data)' > <i style=\"color: #007bcf;\" class=\"fas fa-file-download\"></i>  </button>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </app-card>\r\n      </div>\r\n    </div>\r\n  \r\n   ");

/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ItemReportByItemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemReportByItemRoutingModule", function() { return ItemReportByItemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _item_reportby_party_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-reportby-party.component */ "./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party.component.ts");




//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes = [
    {
        path: '',
        component: _item_reportby_party_component__WEBPACK_IMPORTED_MODULE_3__["ItemReportbyPartyComponent"]
    },
];
let ItemReportByItemRoutingModule = class ItemReportByItemRoutingModule {
};
ItemReportByItemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ItemReportByItemRoutingModule);



/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC9pdGVtLXN0b2NrL2l0ZW0tcmVwb3J0YnktcGFydHkvaXRlbS1yZXBvcnRieS1wYXJ0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ItemReportbyPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemReportbyPartyComponent", function() { return ItemReportbyPartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../pages/sales/sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
/* harmony import */ var _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../extra/sample-page/purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
/* harmony import */ var _pages_sales_returnproducts_return_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../pages/sales/returnproducts/return.service */ "./src/app/demo/pages/sales/returnproducts/return.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");









let ItemReportbyPartyComponent = class ItemReportbyPartyComponent {
    constructor(router, stockService, purchaseService, returnservice, excelService) {
        this.router = router;
        this.stockService = stockService;
        this.purchaseService = purchaseService;
        this.returnservice = returnservice;
        this.excelService = excelService;
        this.Excel = [];
        this.stock = [];
        this.stockAva = [];
        this.stockAvaa = [];
        this.ret = [];
        this.repro = [];
        this.itemin = [];
        this.itemout = [];
        this.checkout = [];
        this.stockAvalibility = [];
        this.arr = [];
        this.itemcode = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isDtInitialized = false;
    }
    ngOnInit() {
        this.purchaseService.getPurchaseData().subscribe(data => {
            this.getData = data;
            console.log(this.getData);
            this.dtTrigger.next();
        });
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
    exportToExcel(event) {
        this.ret = [];
        this.stockAva = [];
        this.stockAvalibility = [];
        this.stock = [];
        this.itemin = [];
        this.itemout = [];
        this.arr = [];
        this.itemcode = [];
        this.Excel = [];
        this.stockService.getInvProduct().subscribe(data => {
            this.stockOut = data;
            this.stockOut.forEach(dataa => {
                this.final = dataa.products;
                this.final.forEach(dat => {
                    this.stock.push(dat);
                });
            });
            const res = this.stock.reduce((acc, obj) => {
                const existItem = acc.find(item => item.itemCode === obj.itemCode);
                if (existItem) {
                    existItem.custQuantity += obj.custQuantity;
                    return acc;
                }
                acc.push(obj);
                return acc;
            }, []);
            this.finalStock = res;
            //  console.log(res,'prod')
            this.finalStock.forEach(data => {
                this.stockAva.push(data);
            });
            this.checkout = this.stockAva;
            this.checkout.forEach(dataa => {
                var ItemCode = dataa.itemCode;
                var ItemName = dataa.description;
                var ItemOut = dataa.custQuantity;
                var ItemIn = 0;
                var Balance = 0;
                var Total = 0;
                var obj = Object.assign({ ItemCode, ItemName, ItemOut, Balance, ItemIn, Total });
                this.itemout.push(obj);
            });
            this.invoice = event.invoice;
            this.invoice.forEach(dataa => {
                var ItemCode = dataa.itemCode;
                this.itemcode.push(ItemCode);
            });
            this.arr = [];
            const emp = this.itemcode;
            const filteredArray = this.itemout.filter(function (itm) {
                return emp.indexOf(itm.ItemCode) > -1;
            });
            this.arr = filteredArray;
            this.invoice.forEach(dataa => {
                var ItemCode = dataa.itemCode;
                var ItemName = dataa.description;
                var ItemIn = dataa.custQuantity;
                var Total = dataa.total;
                var ItemOut = 0;
                var Balance = 0;
                var obj = Object.assign({ ItemCode, ItemName, ItemIn, ItemOut, Balance, Total });
                this.arr.push(obj);
            });
            this.itemin = [];
            const finalstock = this.arr.reduce((ac, jj) => {
                const existItem = ac.find(item => item.ItemCode === jj.ItemCode);
                if (existItem) {
                    existItem.ItemOut += jj.ItemOut;
                    existItem.ItemIn += jj.ItemIn;
                    existItem.Total += jj.Total;
                    // existItem.Balance+=jj.Balance;
                    return ac;
                }
                ac.push(jj);
                return ac;
            }, []);
            this.stockfinal = finalstock;
            //  console.log(this.stockfinal,'finalstock')
            this.stockfinal.forEach(data => {
                data.ItemIn = Math.abs(data.ItemIn);
                data.ItemOut = Math.abs(data.ItemOut);
                data.Total = Math.abs(data.Total);
                // data.Balance=Math.abs(data.Balance)
                this.itemin.push(data);
            });
            this.itemin.forEach(data => {
                return data.Balance = data.ItemIn - data.ItemOut;
            });
            // console.log(this.itemin,'stock')
            var InvoiceNumber = event.invoiceNo;
            var Date = event.date;
            var Supplier = event.supplier;
            this.itemin.forEach(data => {
                var ItemCode = data.ItemCode;
                var ItemName = data.ItemName;
                var ItemIn = data.ItemIn;
                var Balance = data.Balance;
                var Total = data.Total;
                var obj = Object.assign({ InvoiceNumber, Date, Supplier, ItemCode, ItemName, ItemIn, Balance, Total });
                this.Excel.push(obj);
            });
            console.log(this.Excel, 'prod');
            this.excelService.exportAsExcelFile(this.Excel, 'persons');
        });
    }
};
ItemReportbyPartyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] },
    { type: _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_4__["PurchaseService"] },
    { type: _pages_sales_returnproducts_return_service__WEBPACK_IMPORTED_MODULE_5__["ReturnService"] },
    { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_8__["ExcelService"] }
];
ItemReportbyPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-reportby-party',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-reportby-party.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-reportby-party.component.scss */ "./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party.component.scss")).default]
    })
], ItemReportbyPartyComponent);



/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ItemReportByItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemReportByItemModule", function() { return ItemReportByItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _item_reportby_party_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-reportby-party.component */ "./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _item_reportby_party_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-reportby-party-routing.module */ "./src/app/demo/report/report/item-stock/item-reportby-party/item-reportby-party-routing.module.ts");





// import { FileUploadComponent } from './fi';


// import { NoteformComponent } from "./noteform/noteform.component";
let ItemReportByItemModule = class ItemReportByItemModule {
};
ItemReportByItemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_item_reportby_party_component__WEBPACK_IMPORTED_MODULE_4__["ItemReportbyPartyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _item_reportby_party_routing_module__WEBPACK_IMPORTED_MODULE_6__["ItemReportByItemRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
        ]
    })
], ItemReportByItemModule);



/***/ })

}]);
//# sourceMappingURL=item-reportby-party-item-reportby-party-module-es2015.js.map