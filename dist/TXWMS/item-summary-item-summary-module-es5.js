(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-summary-item-summary-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-summary/item-summary.component.html": 
        /*!******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-summary/item-summary.component.html ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n  <div class=\"col-xl-12 text-right\">\n    <button type=\"button\" class=\"btn btn-primary\"  (click)='exportToExcel(itemin)'>Export &nbsp; <i class=\"fas fa-file-export\"></i></button>\n\n  </div>\n    <!-- <button (click)='dummy()'>add</button> -->\n    <!-- <form [formGroup]='productForm'>\n      <input type=\"text\" formControlName='descriptionn' [(ngModel)]='searchProduct'>\n    </form>\n    <ul *ngFor='let data of avaData | filter:searchProduct'>\n      <li (click)='getDetails(data)'>{{data.itemDescription}}</li>\n    </ul>\n    {{searchProduct}} -->\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Item-Summary\" [options]=\"false\" blockClass=\"table-border-style\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n            <thead>\n            <tr>\n              <th>Item-Code</th>\n              <th>ItemName</th>\n              <th>ItemIn</th>\n              <th>ItemOut</th>\n              <th>Balance</th>\n            </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor='let data of itemin'>\n                <td>{{data.ItemCode}}</td>\n                <td>{{data.ItemName}}</td>\n                <td>{{data.ItemIn}}</td>\n                <td>{{data.ItemOut}}</td>\n                <td>{{data.Balance}}</td>\n  \n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </app-card>\n     \n    </div>\n  \n  </div>\n  \n  ");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/item-stock/item-summary/item-summary-routing.module.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/demo/report/report/item-stock/item-summary/item-summary-routing.module.ts ***!
          \*******************************************************************************************/
        /*! exports provided: ItemSummaryRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSummaryRoutingModule", function () { return ItemSummaryRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _item_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-summary.component */ "./src/app/demo/report/report/item-stock/item-summary/item-summary.component.ts");
            //  import { FileformComponent } from "../file-upload/fileform/fileform.component";
            var routes = [
                {
                    path: '',
                    component: _item_summary_component__WEBPACK_IMPORTED_MODULE_3__["ItemSummaryComponent"]
                },
            ];
            var ItemSummaryRoutingModule = /** @class */ (function () {
                function ItemSummaryRoutingModule() {
                }
                return ItemSummaryRoutingModule;
            }());
            ItemSummaryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ItemSummaryRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/item-stock/item-summary/item-summary.component.scss": 
        /*!****************************************************************************************!*\
          !*** ./src/app/demo/report/report/item-stock/item-summary/item-summary.component.scss ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC9pdGVtLXN0b2NrL2l0ZW0tc3VtbWFyeS9pdGVtLXN1bW1hcnkuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/item-stock/item-summary/item-summary.component.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/demo/report/report/item-stock/item-summary/item-summary.component.ts ***!
          \**************************************************************************************/
        /*! exports provided: ItemSummaryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSummaryComponent", function () { return ItemSummaryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../pages/sales/sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
            /* harmony import */ var _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../extra/sample-page/purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
            /* harmony import */ var _pages_sales_returnproducts_return_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../pages/sales/returnproducts/return.service */ "./src/app/demo/pages/sales/returnproducts/return.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            /* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");
            var ItemSummaryComponent = /** @class */ (function () {
                function ItemSummaryComponent(router, stockService, purchaseService, returnservice, excelService) {
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
                ItemSummaryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.stockService.getInvProduct().subscribe(function (data) {
                        _this.stockOut = data;
                        // console.log(this.stockOut,'stock')
                        _this.stockOut.forEach(function (dataa) {
                            _this.final = dataa.products;
                            _this.final.forEach(function (dat) {
                                _this.stock.push(dat);
                            });
                        });
                        // console.log(this.stock,'finalstock')
                        var res = _this.stock.reduce(function (acc, obj) {
                            var existItem = acc.find(function (item) { return item.itemCode === obj.itemCode; });
                            if (existItem) {
                                existItem.custQuantity += obj.custQuantity;
                                return acc;
                            }
                            acc.push(obj);
                            return acc;
                        }, []);
                        _this.finalStock = res;
                        //  console.log(res,'prod')
                        _this.finalStock.forEach(function (data) {
                            _this.stockAva.push(data);
                        });
                        _this.checkout = _this.stockAva;
                        _this.checkout.forEach(function (dataa) {
                            var ItemCode = dataa.itemCode;
                            var ItemName = dataa.description;
                            var ItemOut = dataa.custQuantity;
                            var ItemIn = 0;
                            var Balance = 0;
                            var obj = Object.assign({ ItemCode: ItemCode, ItemName: ItemName, ItemOut: ItemOut, Balance: Balance, ItemIn: ItemIn });
                            _this.itemout.push(obj);
                        });
                        //  console.log(this.itemout,'itemout')
                        // console.log(this.stockAva,'itemoutava')
                    });
                    this.purchaseService.getPurchaseData().subscribe(function (data) {
                        _this.purchase = data;
                        _this.purchase.forEach(function (datta) {
                            _this.invoice = datta.invoice;
                            _this.invoice.forEach(function (dataa) {
                                _this.stockAva.push(dataa);
                                var ItemCode = dataa.itemCode;
                                var ItemName = dataa.description;
                                var ItemIn = dataa.custQuantity;
                                var ItemOut = 0;
                                var Balance = 0;
                                var obj = Object.assign({ ItemCode: ItemCode, ItemName: ItemName, ItemIn: ItemIn, ItemOut: ItemOut, Balance: Balance });
                                _this.itemout.push(obj);
                            });
                            console.log(_this.itemout, 'invoice ');
                        });
                        var ava = _this.stockAva.reduce(function (accc, objj) {
                            var existItem = accc.find(function (item) { return item.itemCode === objj.itemCode; });
                            if (existItem) {
                                existItem.custQuantity -= objj.custQuantity;
                                return accc;
                            }
                            accc.push(objj);
                            return accc;
                        }, []);
                        _this.finalValue = ava;
                        _this.finalValue.forEach(function (data) {
                            data.custQuantity = Math.abs(data.custQuantity);
                            _this.stockAvalibility.push(data);
                        });
                        _this.returnservice.getReturn().subscribe(function (data) {
                            _this.returnProducts = data;
                            // console.log(this.returnProducts,'returnprod')
                            _this.returnProducts.forEach(function (dataa) {
                                _this.stockAvalibility.push(dataa);
                            });
                            //  console.log(this.returnProducts,'returnprod')
                            var repro = _this.stockAvalibility.reduce(function (ac, jj) {
                                var existItem = ac.find(function (item) { return item.itemCode === jj.itemCode; });
                                if (existItem) {
                                    existItem.returnproduct = jj.returnproduct;
                                    return ac;
                                }
                                ac.push(jj);
                                return ac;
                            }, []);
                            _this.retproduct = repro;
                            _this.retproduct.forEach(function (data) {
                                data.returnproduct = Math.abs(data.returnproduct);
                                _this.ret.push(data);
                            });
                            _this.ret.forEach(function (dataa) {
                                var ItemCode = dataa.itemCode;
                                var ItemName = dataa.description;
                                var Balance = dataa.custQuantity;
                                var ItemIn = 0;
                                var ItemOut = 0;
                                var obj = Object.assign({ ItemCode: ItemCode, ItemName: ItemName, Balance: Balance, ItemIn: ItemIn, ItemOut: ItemOut });
                                _this.itemout.push(obj);
                            });
                            console.log(_this.itemout, 'itemout');
                            var finalstock = _this.itemout.reduce(function (ac, jj) {
                                var existItem = ac.find(function (item) { return item.ItemCode === jj.ItemCode; });
                                if (existItem) {
                                    existItem.ItemOut += jj.ItemOut;
                                    existItem.ItemIn += jj.ItemIn;
                                    existItem.Balance += jj.Balance;
                                    return ac;
                                }
                                ac.push(jj);
                                return ac;
                            }, []);
                            _this.stockfinal = finalstock;
                            console.log(_this.stockfinal, 'finalstock');
                            _this.stockfinal.forEach(function (data) {
                                data.ItemIn = Math.abs(data.ItemIn);
                                data.Balance = Math.abs(data.Balance);
                                _this.itemin.push(data);
                            });
                            console.log(_this.itemin, 'last data');
                            if (_this.isDtInitialized) {
                                _this.dtElement.dtInstance.then(function (dtInstance) {
                                    dtInstance.destroy();
                                    _this.dtTrigger.next();
                                });
                            }
                            else {
                                _this.isDtInitialized = true;
                                _this.dtTrigger.next();
                            }
                        });
                        //  console.log(this.ret,'availability')
                    });
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                };
                ItemSummaryComponent.prototype.ngOnDestroy = function () {
                    // Do not forget to unsubscribe the event
                    this.dtTrigger.unsubscribe();
                };
                ItemSummaryComponent.prototype.exportToExcel = function (event) {
                    var _this = this;
                    this.Excel = [];
                    event.forEach(function (dat) {
                        var ItemCode = dat.ItemCode;
                        var ItemName = dat.ItemName;
                        var ItemIn = dat.ItemIn;
                        var ItemOut = dat.ItemOut;
                        var Balance = dat.Balance;
                        var obj = Object.assign({ ItemCode: ItemCode, ItemName: ItemName, ItemIn: ItemIn, ItemOut: ItemOut, Balance: Balance });
                        _this.Excel.push(obj);
                    });
                    this.excelService.exportAsExcelFile(this.Excel, 'persons');
                };
                return ItemSummaryComponent;
            }());
            ItemSummaryComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] },
                { type: _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_4__["PurchaseService"] },
                { type: _pages_sales_returnproducts_return_service__WEBPACK_IMPORTED_MODULE_5__["ReturnService"] },
                { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_8__["ExcelService"] }
            ]; };
            ItemSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-item-summary',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/item-stock/item-summary/item-summary.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-summary.component.scss */ "./src/app/demo/report/report/item-stock/item-summary/item-summary.component.scss")).default]
                })
            ], ItemSummaryComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/item-stock/item-summary/item-summary.module.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/demo/report/report/item-stock/item-summary/item-summary.module.ts ***!
          \***********************************************************************************/
        /*! exports provided: ItemSummaryModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSummaryModule", function () { return ItemSummaryModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _item_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-summary.component */ "./src/app/demo/report/report/item-stock/item-summary/item-summary.component.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _item_summary_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-summary-routing.module */ "./src/app/demo/report/report/item-stock/item-summary/item-summary-routing.module.ts");
            var ItemSummaryModule = /** @class */ (function () {
                function ItemSummaryModule() {
                }
                return ItemSummaryModule;
            }());
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
            /***/ 
        })
    }]);
//# sourceMappingURL=item-summary-item-summary-module-es2015.js.map
//# sourceMappingURL=item-summary-item-summary-module-es5.js.map
//# sourceMappingURL=item-summary-item-summary-module-es5.js.map