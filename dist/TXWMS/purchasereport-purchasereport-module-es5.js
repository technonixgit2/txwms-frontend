var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchasereport-purchasereport-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/purchasereport/purchasereport.component.html": 
        /*!***********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/purchasereport/purchasereport.component.html ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" [hidden]='val==true'>\n  <div class=\"col-xl-12 text-right\">\n    <button type=\"button\"  class=\"btn btn-primary\" (click)='exportToExcel(pro)'>Export &nbsp; <i class=\"fas fa-file-export\"></i></button>\n  </div>\n      <div class=\"col-xl-12\">\n        <app-card cardTitle=\"Purchase-Report\" [options]=\"false\" blockClass=\"table-border-style\">\n            <div class=\"month\" style=\"text-align: right; \"> <b style=\"color: black;\">Select Month</b>\n                <select (change)=\"setchange($event.target.value)\" style=\"width: 183px; height: 30px;\">\n                    <option  value='January'>January</option>\n                    <option value='February'>February</option>\n                    <option value='March'>March</option>\n                    <option value='April'>April</option>\n                    <option value='May'>May</option>\n                    <option value='June'>June</option>\n                    <option value='July'>July</option>\n                    <option value='August'>August</option>\n                    <option value='September'>September</option>\n                    <option value='October'>October</option>\n                    <option value='November'>November</option>\n                    <option  value='December'>December</option>\n                    </select> \n              </div>\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n              <thead>\n              <tr>\n                <th> Date </th>\n                <th>Suppliers</th>\n                <th> Invoice Number </th>\n                <th> Invoice Amount </th>\n                <th>View</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor='let data of pro'>\n                <td>{{data.date}}</td>\n                <td>{{data.supplier}}</td>\n                <td>{{data.invoiceNo}}</td>\n                <td>{{data.invoiceAmount | number:'1.2-2'}}</td>  \n                <td>\n                  <button (click)='show(data)'><i class=\"fa fa-eye\"></i> </button> \n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </app-card>\n       \n      </div>\n    </div>\n\n    <section class=\"supplierview\"  [hidden]='val==false'>\n      <div class=\"row sviewform\">\n        <div class=\"col-lg-2\">\n          <label for=\"name\"> <b></b> Supplier Name: </label> <br>\n    \n        </div>\n        <div class=\"col-lg-3\">\n          <label for=\"nameans\"> {{name}} </label> <br>\n    \n        </div>\n        <div class=\"col-lg-1\">\n          <label for=\"contact\"> <b> Date: </b> </label> <br>\n    \n        </div>\n        <div class=\"col-lg-2\">\n          <label for=\"contactans\"> {{date}}</label> <br>\n    \n        </div>\n        <div class=\"col-lg-2\">\n          <label for=\"contact\"> <b> Invoice-No: </b> </label> <br>\n    \n        </div>\n        <div class=\"col-lg-2\">\n          <label for=\"contactans\"> {{invoice}}</label> <br>\n    \n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <table class=\"sviewtable\">\n            <thead>\n              <tr>\n               \n                <th scope=\"col\">itemCode</th>\n                <th scope=\"col\">description</th>\n                <th scope=\"col\">Quantity</th>\n                <th scope=\"col\">Total</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor='let dat of arr'>\n                \n                <td>{{dat.itemCode}} </td>\n                <td>{{dat.description}}</td>\n                <td>{{dat.custQuantity}}</td>\n                <td>{{dat.total}}</td>\n      \n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div> <button (click)='back()'>back</button> </div>\n      \n    </section>\n  ");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/purchasereport/purchasereport-routing.module.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/purchasereport/purchasereport-routing.module.ts ***!
          \************************************************************************************************/
        /*! exports provided: PurchaseReportRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseReportRoutingModule", function () { return PurchaseReportRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _purchasereport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchasereport.component */ "./src/app/demo/report/report/transaction/purchasereport/purchasereport.component.ts");
            //  import { FileformComponent } from "../file-upload/fileform/fileform.component";
            var routes = [
                {
                    path: '',
                    component: _purchasereport_component__WEBPACK_IMPORTED_MODULE_3__["PurchasereportComponent"]
                },
            ];
            var PurchaseReportRoutingModule = /** @class */ (function () {
                function PurchaseReportRoutingModule() {
                }
                return PurchaseReportRoutingModule;
            }());
            PurchaseReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], PurchaseReportRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/purchasereport/purchasereport.component.scss": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/purchasereport/purchasereport.component.scss ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".supplierview {\n  margin: 0 5%;\n  padding: 2%;\n  background-color: white; }\n\n.sviewtable {\n  width: 100%;\n  background-color: white; }\n\n.sviewform {\n  color: #504c4c; }\n\n.sviewtable {\n  margin: 2% 0; }\n\n.sviewtable th {\n  text-align: center; }\n\n.sviewtable tr, .sviewtable th, .sviewtable td {\n  border: 1px solid gray;\n  padding: 0.5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9yZXBvcnQvcmVwb3J0L3RyYW5zYWN0aW9uL3B1cmNoYXNlcmVwb3J0L0M6XFxVc2Vyc1xcQmhhcmFuZWVkaGFyYW5cXERvd25sb2Fkc1xcV01TLTFcXHdtcyAxNC0xMi9zcmNcXGFwcFxcZGVtb1xccmVwb3J0XFxyZXBvcnRcXHRyYW5zYWN0aW9uXFxwdXJjaGFzZXJlcG9ydFxccHVyY2hhc2VyZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLFdBQVc7RUFDWCx1QkFBdUIsRUFBQTs7QUFFekI7RUFBYSxjQUFxQixFQUFBOztBQUNsQztFQUFjLFlBQVksRUFBQTs7QUFDMUI7RUFBZSxrQkFBa0IsRUFBQTs7QUFDakM7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9yZXBvcnQvcmVwb3J0L3RyYW5zYWN0aW9uL3B1cmNoYXNlcmVwb3J0L3B1cmNoYXNlcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1cHBsaWVydmlld3tcclxuICAgIG1hcmdpbjogMCA1JTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5zdmlld3RhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnN2aWV3Zm9ybSB7IGNvbG9yOnJnYig4MCwgNzYsIDc2KTsgfVxyXG4gIC5zdmlld3RhYmxlIHsgbWFyZ2luOiAyJSAwOyB9XHJcbiAgLnN2aWV3dGFibGUgdGh7dGV4dC1hbGlnbjogY2VudGVyO31cclxuICAuc3ZpZXd0YWJsZSB0ciwgLnN2aWV3dGFibGUgdGgsIC5zdmlld3RhYmxlIHRke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIHBhZGRpbmc6IDAuNSUgO1xyXG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/purchasereport/purchasereport.component.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/purchasereport/purchasereport.component.ts ***!
          \*******************************************************************************************/
        /*! exports provided: PurchasereportComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasereportComponent", function () { return PurchasereportComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../extra/sample-page/purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            /* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");
            var PurchasereportComponent = /** @class */ (function () {
                function PurchasereportComponent(router, purchaseService, excelService) {
                    this.router = router;
                    this.purchaseService = purchaseService;
                    this.excelService = excelService;
                    this.arr = [];
                    this.val = false;
                    this.Excel = [];
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    this.isDtInitialized = false;
                }
                PurchasereportComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                    this.purchaseService.getPurchaseData().subscribe(function (data) {
                        _this.getData = data;
                        console.log(_this.getData);
                    });
                };
                PurchasereportComponent.prototype.show = function (val) {
                    this.val = true;
                    this.name = val.supplier;
                    this.date = val.date;
                    this.invoice = val.invoiceNo;
                    this.arr = val.invoice;
                    console.log(val, 'show');
                };
                PurchasereportComponent.prototype.back = function () {
                    this.val = false;
                };
                PurchasereportComponent.prototype.setchange = function (selectedvalue) {
                    var _this = this;
                    this.sss = selectedvalue;
                    this.invoice = [];
                    var emp = [this.sss];
                    var filteredArray = this.getData.filter(function (itm) {
                        return emp.indexOf(itm.month) > -1;
                    });
                    this.pro = filteredArray;
                    if (this.isDtInitialized) {
                        this.dtElement.dtInstance.then(function (dtInstance) {
                            dtInstance.destroy();
                            _this.dtTrigger.next();
                        });
                    }
                    else {
                        this.isDtInitialized = true;
                        this.dtTrigger.next();
                    }
                    var currentMonth = 5;
                    var currentYear = 2020;
                    //Get the year and month from the iterated date
                    // var [year, month] = e.date.split('-');
                    //Then filter the dates
                    var events = this.getData.filter(function (e) {
                        var _a = __read(e.monthyear.split('-'), 2), month = _a[0], year = _a[1]; // Or, var month = e.date.split('-')[1];
                        return emp.indexOf(currentMonth == month) && (currentYear == year);
                    });
                    //   var eff=sli.slice(0,9)
                    //   var efs=sli.slice(11,21)
                    //   let start = eff
                    //   let end = efs
                    // var getdat=this.getData
                    // console.log(start,end,getdat,'getdata');
                    // let selectedMembers = getdat.filter((m) => {
                    // return new Date(m.date) >= new Date(start) && new Date(m.date) <= new Date(end)
                    // });
                    console.log(this.pro, 'month and year');
                };
                PurchasereportComponent.prototype.exportToExcel = function (event) {
                    var _this = this;
                    this.Excel = [];
                    event.forEach(function (data) {
                        var product = data.invoice;
                        var Supplier = data.supplier;
                        var InvoiceNum = data.invoiceNo;
                        var InvoiceAmount = data.invoiceAmount;
                        product.forEach(function (dat) {
                            var Date = dat.invDate;
                            var ItemCode = dat.itemCode;
                            var Description = dat.description;
                            var Quantity = dat.custQuantity;
                            var Total = dat.total;
                            // var Profit=dat.profit
                            var obj = Object.assign({ Supplier: Supplier, InvoiceNum: InvoiceNum, InvoiceAmount: InvoiceAmount, Date: Date, ItemCode: ItemCode, Description: Description, Quantity: Quantity, Total: Total });
                            _this.Excel.push(obj);
                        });
                    });
                    this.excelService.exportAsExcelFile(this.Excel, 'persons');
                };
                return PurchasereportComponent;
            }());
            PurchasereportComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseService"] },
                { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] }
            ]; };
            PurchasereportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-purchasereport',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./purchasereport.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/purchasereport/purchasereport.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./purchasereport.component.scss */ "./src/app/demo/report/report/transaction/purchasereport/purchasereport.component.scss")).default]
                })
            ], PurchasereportComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/purchasereport/purchasereport.module.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/purchasereport/purchasereport.module.ts ***!
          \****************************************************************************************/
        /*! exports provided: PurchaseReportModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseReportModule", function () { return PurchaseReportModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _purchasereport_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchasereport-routing.module */ "./src/app/demo/report/report/transaction/purchasereport/purchasereport-routing.module.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _purchasereport_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchasereport.component */ "./src/app/demo/report/report/transaction/purchasereport/purchasereport.component.ts");
            // import { FileUploadComponent } from './fi';
            // import { NoteformComponent } from "./noteform/noteform.component";
            var PurchaseReportModule = /** @class */ (function () {
                function PurchaseReportModule() {
                }
                return PurchaseReportModule;
            }());
            PurchaseReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_purchasereport_component__WEBPACK_IMPORTED_MODULE_6__["PurchasereportComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _purchasereport_routing_module__WEBPACK_IMPORTED_MODULE_4__["PurchaseReportRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
                    ]
                })
            ], PurchaseReportModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=purchasereport-purchasereport-module-es2015.js.map
//# sourceMappingURL=purchasereport-purchasereport-module-es5.js.map
//# sourceMappingURL=purchasereport-purchasereport-module-es5.js.map