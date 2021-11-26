(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-summary-item-summary-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-summary/item-summary.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-summary/item-summary.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n  <div class=\"col-xl-12 text-right\">\n    <button type=\"button\" class=\"btn btn-primary\"  (click)='exportToExcel(itemin)'>Export &nbsp; <i class=\"fas fa-file-export\"></i></button>\n\n  </div>\n    <!-- <button (click)='dummy()'>add</button> -->\n    <!-- <form [formGroup]='productForm'>\n      <input type=\"text\" formControlName='descriptionn' [(ngModel)]='searchProduct'>\n    </form>\n    <ul *ngFor='let data of avaData | filter:searchProduct'>\n      <li (click)='getDetails(data)'>{{data.itemDescription}}</li>\n    </ul>\n    {{searchProduct}} -->\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Item-Summary\" [options]=\"false\" blockClass=\"table-border-style\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n            <thead>\n            <tr>\n              <th>Item-Code</th>\n              <th>ItemName</th>\n              <th>ItemIn</th>\n              <th>ItemOut</th>\n              <th>Balance</th>\n            </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor='let data of itemin'>\n                <td>{{data.ItemCode}}</td>\n                <td>{{data.ItemName}}</td>\n                <td>{{data.ItemIn}}</td>\n                <td>{{data.ItemOut}}</td>\n                <td>{{data.Balance}}</td>\n  \n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </app-card>\n     \n    </div>\n  \n  </div>\n  \n  ");

/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-summary/item-summary-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-summary/item-summary-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ItemSummaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSummaryRoutingModule", function() { return ItemSummaryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _item_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-summary.component */ "./src/app/demo/report/report/item-stock/item-summary/item-summary.component.ts");




//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes = [
    {
        path: '',
        component: _item_summary_component__WEBPACK_IMPORTED_MODULE_3__["ItemSummaryComponent"]
    },
];
let ItemSummaryRoutingModule = class ItemSummaryRoutingModule {
};
ItemSummaryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ItemSummaryRoutingModule);



/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-summary/item-summary.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-summary/item-summary.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC9pdGVtLXN0b2NrL2l0ZW0tc3VtbWFyeS9pdGVtLXN1bW1hcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-summary/item-summary.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-summary/item-summary.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ItemSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSummaryComponent", function() { return ItemSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../pages/sales/sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
/* harmony import */ var _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../extra/sample-page/purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
/* harmony import */ var _pages_sales_returnproducts_return_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../pages/sales/returnproducts/return.service */ "./src/app/demo/pages/sales/returnproducts/return.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");









let ItemSummaryComponent = class ItemSummaryComponent {
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
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isDtInitialized = false;
    }
    ngOnInit() {
        this.stockService.getInvProduct().subscribe(data => {
            this.stockOut = data;
            // console.log(this.stockOut,'stock')
            this.stockOut.forEach(dataa => {
                this.final = dataa.products;
                this.final.forEach(dat => {
                    this.stock.push(dat);
                });
            });
            // console.log(this.stock,'finalstock')
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
                var obj = Object.assign({ ItemCode, ItemName, ItemOut, Balance, ItemIn });
                this.itemout.push(obj);
            });
            //  console.log(this.itemout,'itemout')
            // console.log(this.stockAva,'itemoutava')
        });
        this.purchaseService.getPurchaseData().subscribe(data => {
            this.purchase = data;
            this.purchase.forEach(datta => {
                this.invoice = datta.invoice;
                this.invoice.forEach(dataa => {
                    this.stockAva.push(dataa);
                    var ItemCode = dataa.itemCode;
                    var ItemName = dataa.description;
                    var ItemIn = dataa.custQuantity;
                    var ItemOut = 0;
                    var Balance = 0;
                    var obj = Object.assign({ ItemCode, ItemName, ItemIn, ItemOut, Balance });
                    this.itemout.push(obj);
                });
                console.log(this.itemout, 'invoice ');
            });
            const ava = this.stockAva.reduce((accc, objj) => {
                const existItem = accc.find(item => item.itemCode === objj.itemCode);
                if (existItem) {
                    existItem.custQuantity -= objj.custQuantity;
                    return accc;
                }
                accc.push(objj);
                return accc;
            }, []);
            this.finalValue = ava;
            this.finalValue.forEach(data => {
                data.custQuantity = Math.abs(data.custQuantity);
                this.stockAvalibility.push(data);
            });
            this.returnservice.getReturn().subscribe(data => {
                this.returnProducts = data;
                // console.log(this.returnProducts,'returnprod')
                this.returnProducts.forEach(dataa => {
                    this.stockAvalibility.push(dataa);
                });
                //  console.log(this.returnProducts,'returnprod')
                const repro = this.stockAvalibility.reduce((ac, jj) => {
                    const existItem = ac.find(item => item.itemCode === jj.itemCode);
                    if (existItem) {
                        existItem.returnproduct = jj.returnproduct;
                        return ac;
                    }
                    ac.push(jj);
                    return ac;
                }, []);
                this.retproduct = repro;
                this.retproduct.forEach(data => {
                    data.returnproduct = Math.abs(data.returnproduct);
                    this.ret.push(data);
                });
                this.ret.forEach(dataa => {
                    var ItemCode = dataa.itemCode;
                    var ItemName = dataa.description;
                    var Balance = dataa.custQuantity;
                    var ItemIn = 0;
                    var ItemOut = 0;
                    var obj = Object.assign({ ItemCode, ItemName, Balance, ItemIn, ItemOut });
                    this.itemout.push(obj);
                });
                console.log(this.itemout, 'itemout');
                const finalstock = this.itemout.reduce((ac, jj) => {
                    const existItem = ac.find(item => item.ItemCode === jj.ItemCode);
                    if (existItem) {
                        existItem.ItemOut += jj.ItemOut;
                        existItem.ItemIn += jj.ItemIn;
                        existItem.Balance += jj.Balance;
                        return ac;
                    }
                    ac.push(jj);
                    return ac;
                }, []);
                this.stockfinal = finalstock;
                console.log(this.stockfinal, 'finalstock');
                this.stockfinal.forEach(data => {
                    data.ItemIn = Math.abs(data.ItemIn);
                    data.Balance = Math.abs(data.Balance);
                    this.itemin.push(data);
                });
                console.log(this.itemin, 'last data');
                if (this.isDtInitialized) {
                    this.dtElement.dtInstance.then((dtInstance) => {
                        dtInstance.destroy();
                        this.dtTrigger.next();
                    });
                }
                else {
                    this.isDtInitialized = true;
                    this.dtTrigger.next();
                }
            });
            //  console.log(this.ret,'availability')
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
        this.Excel = [];
        event.forEach(dat => {
            var ItemCode = dat.ItemCode;
            var ItemName = dat.ItemName;
            var ItemIn = dat.ItemIn;
            var ItemOut = dat.ItemOut;
            var Balance = dat.Balance;
            var obj = Object.assign({ ItemCode, ItemName, ItemIn, ItemOut, Balance });
            this.Excel.push(obj);
        });
        this.excelService.exportAsExcelFile(this.Excel, 'persons');
    }
};
ItemSummaryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] },
    { type: _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_4__["PurchaseService"] },
    { type: _pages_sales_returnproducts_return_service__WEBPACK_IMPORTED_MODULE_5__["ReturnService"] },
    { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_8__["ExcelService"] }
];
ItemSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-summary/item-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-summary.component.scss */ "./src/app/demo/report/report/item-stock/item-summary/item-summary.component.scss")).default]
    })
], ItemSummaryComponent);



/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-summary/item-summary.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-summary/item-summary.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ItemSummaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSummaryModule", function() { return ItemSummaryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _item_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-summary.component */ "./src/app/demo/report/report/item-stock/item-summary/item-summary.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _item_summary_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-summary-routing.module */ "./src/app/demo/report/report/item-stock/item-summary/item-summary-routing.module.ts");







let ItemSummaryModule = class ItemSummaryModule {
};
ItemSummaryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_item_summary_component__WEBPACK_IMPORTED_MODULE_4__["ItemSummaryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _item_summary_routing_module__WEBPACK_IMPORTED_MODULE_6__["ItemSummaryRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
        ]
    })
], ItemSummaryModule);



/***/ })

}]);
//# sourceMappingURL=item-summary-item-summary-module-es2015.js.map