(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-wise-profit-item-wise-profit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n  <div class=\"row\" >\n\n    <div class=\"col-xl-12 text-right\">\n      <button class=\"btn btn-primary\" (click)='exportToExcel(profitData)'>Export &nbsp;<i class=\"fas fa-file-export\"></i> </button>\n    </div>\n    <div class=\"col-xl-12\">\n        <app-card cardTitle=\"item-Wise Profit\" [options]=\"false\" blockClass=\"table-border-style\" >\n        <div class=\"month\" style=\"text-align: right; \"> <b style=\"color: black;\">Select Month</b> &nbsp;\n            <select (change)=\"setchange($event.target.value)\" style=\"width: 183px; height: 30px;\">\n                <option  value='1'>January</option>\n                <option value='2'>February</option>\n                <option value='3'>March</option>\n                <option value='4'>April</option>\n                <option value='5'>May</option>\n                <option value='6'>June</option>\n                <option value='7'>July</option>\n                <option value='8'>August</option>\n                <option value='9'>September</option>\n                <option value='10'>October</option>\n                <option value='11'>November</option>\n                <option  value='12'>December</option>\n                </select> \n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\"  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"  >\n              <thead>\n              <tr>\n               \n                <th> Item Code</th>  \n                <th> Description </th>\n                <th>Quantity </th>\n                <th> Total </th>\n                <th> Profit</th> \n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor='let data of profitData'>\n               \n                <td>{{data.itemCode}}</td>\n                <td>{{data.description}} </td>\n                <td>{{data.custQuantity}} </td>\n                <td>{{data.invoiceTotal | number:'1.2-2'}} </td>\n                <td>{{data.profit | number:'1.2-2'}}</td>\n             </tr>\n              </tbody>\n            </table>\n          </div>\n        </app-card>\n\n      </div>\n</div>\n");

/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ItemWiseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWiseRoutingModule", function() { return ItemWiseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _item_wise_profit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-wise-profit.component */ "./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit.component.ts");




//  import { FileformComponent } from "../file-upload/fileform/fileform.component";
const routes = [
    {
        path: '',
        component: _item_wise_profit_component__WEBPACK_IMPORTED_MODULE_3__["ItemWiseProfitComponent"]
    },
];
let ItemWiseRoutingModule = class ItemWiseRoutingModule {
};
ItemWiseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ItemWiseRoutingModule);



/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC9pdGVtLXN0b2NrL2l0ZW0td2lzZS1wcm9maXQvaXRlbS13aXNlLXByb2ZpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ItemWiseProfitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWiseProfitComponent", function() { return ItemWiseProfitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pages/sales/sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
/* harmony import */ var _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../extra/sample-page/purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");






let ItemWiseProfitComponent = class ItemWiseProfitComponent {
    constructor(billingService, purchaseService, excelService) {
        this.billingService = billingService;
        this.purchaseService = purchaseService;
        this.excelService = excelService;
        this.product = [];
        this.invoice = [];
        this.profitData = [];
        this.Excel = [];
        this.total = [];
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
        this.invoice = [];
        const emp = [this.sss];
        const filteredArray = this.product.filter(function (itm) {
            return emp.indexOf(itm.crntmonth) > -1;
        });
        this.pro = filteredArray;
        this.pro.forEach(data => {
            data.custQuantity = Number.parseInt(data.custQuantity);
            data.invoiceTotal = Number.parseInt(data.invoiceTotal);
            this.invoice.push(data);
        });
        const ava = this.invoice.reduce((accc, objj) => {
            const existItem = accc.find(item => item.itemCode === objj.itemCode);
            if (existItem) {
                existItem.custQuantity += objj.custQuantity;
                existItem.invoiceTotal += objj.invoiceTotal;
                return accc;
            }
            accc.push(objj);
            return accc;
        }, []);
        this.final = ava;
        this.profitData = [];
        this.total.filter(val => {
            this.final.forEach(data => {
                if (data.itemCode === val.itemCode) {
                    data.profit = data.invoiceTotal - (val.price * data.custQuantity);
                    this.profitData.push(data);
                }
            });
            // this.dtTrigger.next();
        });
        this.dtTrigger.next();
        console.log(this.profitData, 'goods');
    }
    exportToExcel(event) {
        this.Excel = [];
        event.forEach(dat => {
            var ItemCode = dat.itemCode;
            var ItemName = dat.description;
            var Quantity = dat.custQuantity;
            var Total = dat.total;
            var Profit = dat.profit;
            var obj = Object.assign({ ItemCode, ItemName, Quantity, Total, Profit });
            this.Excel.push(obj);
        });
        this.excelService.exportAsExcelFile(this.Excel, 'persons');
    }
};
ItemWiseProfitComponent.ctorParameters = () => [
    { type: _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"] },
    { type: _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseService"] },
    { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_5__["ExcelService"] }
];
ItemWiseProfitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-wise-profit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-wise-profit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-wise-profit.component.scss */ "./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit.component.scss")).default]
    })
], ItemWiseProfitComponent);



/***/ }),

/***/ "./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ItemWiseProfitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWiseProfitModule", function() { return ItemWiseProfitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _item_wise_profit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-wise-profit.component */ "./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _item_wise_profit_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-wise-profit-routing.module */ "./src/app/demo/report/report/item-stock/item-wise-profit/item-wise-profit-routing.module.ts");







let ItemWiseProfitModule = class ItemWiseProfitModule {
};
ItemWiseProfitModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_item_wise_profit_component__WEBPACK_IMPORTED_MODULE_4__["ItemWiseProfitComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _item_wise_profit_routing_module__WEBPACK_IMPORTED_MODULE_6__["ItemWiseRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
        ]
    })
], ItemWiseProfitModule);



/***/ })

}]);
//# sourceMappingURL=item-wise-profit-item-wise-profit-module-es2015.js.map