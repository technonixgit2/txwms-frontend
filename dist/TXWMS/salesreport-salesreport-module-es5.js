(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["salesreport-salesreport-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/salesreport/salesreport.component.html": 
        /*!*****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/salesreport/salesreport.component.html ***!
          \*****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" >\n\n  <div class=\"col-xl-12 text-right\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)='exportToExcel(profitData)'>Export &nbsp; <i class=\"fas fa-file-export\"></i></button>\n  </div>\n\n    <div class=\"col-xl-12\">\n        <app-card cardTitle=\"Sales-Report\" [options]=\"false\" blockClass=\"table-border-style\" >\n        <div class=\"month\" style=\"text-align: right; \"> <b style=\"color: black;\">Select Month &nbsp;</b>\n            <select (change)=\"setchange($event.target.value)\" style=\"width: 183px; height: 30px;\">\n                <option  value='1'>January</option>\n                <option value='2'>February</option>\n                <option value='3'>March</option>\n                <option value='4'>April</option>\n                <option value='5'>May</option>\n                <option value='6'>June</option>\n                <option value='7'>July</option>\n                <option value='8'>August</option>\n                <option value='9'>September</option>\n                <option value='10'>October</option>\n                <option value='11'>November</option>\n                <option  value='12'>December</option>\n                </select> \n          </div>\n          <br>\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\"  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"  >\n              <thead>\n              <tr>\n                <th>Date</th>\n                <th> Item Code</th>  \n                <th> Description </th>\n                <th>Quantity </th>\n                <th> Total </th>\n                <!-- <th> Profit</th>  -->\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor='let data of profitData'>\n                <td>{{data.idate}}</td>\n                <td>{{data.itemCode}}</td>\n                <td>{{data.description}} </td>\n                <td>{{data.custQuantity}} </td>\n                <td>{{data.invoiceTotal | number:'1.2-2'}} </td>\n                <!-- <td>{{data.profit}}</td> -->\n             </tr>\n              </tbody>\n            </table>\n          </div>\n        </app-card>\n    \n      </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/salesreport/salesreport-routing.module.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/salesreport/salesreport-routing.module.ts ***!
          \******************************************************************************************/
        /*! exports provided: SaleReportRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleReportRoutingModule", function () { return SaleReportRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _salesreport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salesreport.component */ "./src/app/demo/report/report/transaction/salesreport/salesreport.component.ts");
            //  import { FileformComponent } from "../file-upload/fileform/fileform.component";
            var routes = [
                {
                    path: '',
                    component: _salesreport_component__WEBPACK_IMPORTED_MODULE_3__["SalesreportComponent"]
                },
            ];
            var SaleReportRoutingModule = /** @class */ (function () {
                function SaleReportRoutingModule() {
                }
                return SaleReportRoutingModule;
            }());
            SaleReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], SaleReportRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/salesreport/salesreport.component.scss": 
        /*!***************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/salesreport/salesreport.component.scss ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC90cmFuc2FjdGlvbi9zYWxlc3JlcG9ydC9zYWxlc3JlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/salesreport/salesreport.component.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/salesreport/salesreport.component.ts ***!
          \*************************************************************************************/
        /*! exports provided: SalesreportComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesreportComponent", function () { return SalesreportComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pages/sales/sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
            /* harmony import */ var _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../extra/sample-page/purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");
            var SalesreportComponent = /** @class */ (function () {
                function SalesreportComponent(billingService, purchaseService, excelService) {
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
                SalesreportComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                    this.billingService.getInvProduct().subscribe(function (data) {
                        _this.getData = data;
                        _this.product = [];
                        console.log(_this.getData);
                        _this.getData.forEach(function (data) {
                            data.products.forEach(function (dat) {
                                _this.product.push(dat);
                            });
                        });
                    });
                    this.getPurchase();
                };
                SalesreportComponent.prototype.getPurchase = function () {
                    var _this = this;
                    this.purchaseService.getPurchaseData().subscribe(function (data) {
                        _this.purchaseData = data,
                            _this.total = [];
                        _this.purchaseData.forEach(function (val) {
                            _this.getInvoice = val.invoice;
                            _this.getInvoice.forEach(function (dat) {
                                _this.total.push(dat);
                            });
                        });
                    });
                };
                SalesreportComponent.prototype.setchange = function (selectedvalue) {
                    var _this = this;
                    this.sss = selectedvalue;
                    this.invoice = [];
                    var emp = [this.sss];
                    var filteredArray = this.product.filter(function (itm) {
                        return emp.indexOf(itm.crntmonth) > -1;
                    });
                    this.pro = filteredArray;
                    this.pro.forEach(function (data) {
                        data.custQuantity = Number.parseInt(data.custQuantity);
                        data.invoiceTotal = Number.parseInt(data.invoiceTotal);
                        _this.invoice.push(data);
                    });
                    var ava = this.invoice.reduce(function (accc, objj) {
                        var existItem = accc.find(function (item) { return item.itemCode === objj.itemCode; });
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
                    this.total.filter(function (val) {
                        _this.final.forEach(function (data) {
                            if (data.itemCode === val.itemCode) {
                                data.profit = data.invoiceTotal - (val.price * data.custQuantity);
                                _this.profitData.push(data);
                            }
                        });
                        // this.dtTrigger.next();
                    });
                    this.dtTrigger.next();
                    console.log(this.profitData, 'goods');
                };
                SalesreportComponent.prototype.exportToExcel = function (event) {
                    var _this = this;
                    this.Excel = [];
                    event.forEach(function (dat) {
                        var Date = dat.idate;
                        var ItemCode = dat.itemCode;
                        var Description = dat.description;
                        var Quantity = dat.custQuantity;
                        var Total = dat.invoiceTotal;
                        // var Profit=dat.profit
                        var obj = Object.assign({ Date: Date, ItemCode: ItemCode, Description: Description, Quantity: Quantity, Total: Total });
                        _this.Excel.push(obj);
                    });
                    this.excelService.exportAsExcelFile(this.Excel, 'persons');
                };
                return SalesreportComponent;
            }());
            SalesreportComponent.ctorParameters = function () { return [
                { type: _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"] },
                { type: _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseService"] },
                { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_5__["ExcelService"] }
            ]; };
            SalesreportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-salesreport',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./salesreport.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/salesreport/salesreport.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./salesreport.component.scss */ "./src/app/demo/report/report/transaction/salesreport/salesreport.component.scss")).default]
                })
            ], SalesreportComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/salesreport/salesreport.module.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/salesreport/salesreport.module.ts ***!
          \**********************************************************************************/
        /*! exports provided: SaleReportModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleReportModule", function () { return SaleReportModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _salesreport_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salesreport-routing.module */ "./src/app/demo/report/report/transaction/salesreport/salesreport-routing.module.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _salesreport_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salesreport.component */ "./src/app/demo/report/report/transaction/salesreport/salesreport.component.ts");
            // import { FileUploadComponent } from './fi';
            // import { NoteformComponent } from "./noteform/noteform.component";
            var SaleReportModule = /** @class */ (function () {
                function SaleReportModule() {
                }
                return SaleReportModule;
            }());
            SaleReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_salesreport_component__WEBPACK_IMPORTED_MODULE_6__["SalesreportComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _salesreport_routing_module__WEBPACK_IMPORTED_MODULE_4__["SaleReportRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
                    ]
                })
            ], SaleReportModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=salesreport-salesreport-module-es2015.js.map
//# sourceMappingURL=salesreport-salesreport-module-es5.js.map
//# sourceMappingURL=salesreport-salesreport-module-es5.js.map