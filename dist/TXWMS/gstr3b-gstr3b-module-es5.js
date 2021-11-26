(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gstr3b-gstr3b-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/gst/gstr3b/gstr3b.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/gst/gstr3b/gstr3b.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"col-xl-12 text-right\">\n  <button type=\"button\" class=\"btn btn-primary\"  (click)='exportToExcel(pro)'>Export &nbsp; <i class=\"fas fa-file-export\"></i></button>\n</div>\n\n\n  <div class=\"row\" >\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"GSTR\" [options]=\"false\" blockClass=\"table-border-style\" *ngIf=\"table\">\n        <div class=\"month\" style=\"text-align: right; \"> <b style=\"color: black;\">Select Month</b>\n          <select (change)=\"setchange($event.target.value)\" style=\"width: 183px; height: 30px;\">\n              <option  value='1'>January</option>\n              <option value='2'>February</option>\n              <option value='3'>March</option>\n              <option value='4'>April</option>\n              <option value='5'>May</option>\n              <option value='6'>June</option>\n              <option value='7'>July</option>\n              <option value='8'>August</option>\n              <option value='9'>September</option>\n              <option value='10'>October</option>\n              <option value='11'>November</option>\n              <option  value='12'>December</option>\n              </select> \n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped\"  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" >\n            <thead>\n            <tr>\n              <th > Date </th>\n              <th>Supplier Name</th>\n              <th>Invoice-No </th>\n              <th>GST-NO</th>\n              <th>Gross-Total <sub></sub> </th>\n              <th>Sales-GST <sub>12%</sub> </th>\n              <th>Over-All CGST (6%) </th>\n              <th>Over-All SGST (6%) </th>\n              <th > Over-All GST (12%)</th>\n            \n            </tr>\n           \n            </thead>\n            <tbody>\n            <tr *ngFor='let data of pro'>\n              <td>{{data.date}} </td>\n              <td>{{data.name}} </td>\n              <td> {{data.invoiceNumber}} </td>\n              <td> {{data.cost}} </td>\n              <td> {{data.overAllInvoiceTotal | number:'1.2-2'}} </td>\n              <td> {{data.billAmount | number:'1.2-2'}} </td>\n              <td> {{data.overAllCGSTUnit| number:'1.2-2'}} </td>\n              <td> {{data.overAllSGSTUnit| number:'1.2-2'}} </td>\n             <td> {{data.overAllGSTUnit | number:'1.2-2'}}</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </app-card>\n         \n    </div>\n    \n  </div>\n\n  ");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/gst/gstr3b/gst3b-routing.module.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/demo/report/report/gst/gstr3b/gst3b-routing.module.ts ***!
          \***********************************************************************/
        /*! exports provided: Gst3bReportRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gst3bReportRoutingModule", function () { return Gst3bReportRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _gstr3b_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gstr3b.component */ "./src/app/demo/report/report/gst/gstr3b/gstr3b.component.ts");
            //  import { FileformComponent } from "../file-upload/fileform/fileform.component";
            var routes = [
                {
                    path: '',
                    component: _gstr3b_component__WEBPACK_IMPORTED_MODULE_3__["Gstr3bComponent"]
                },
            ];
            var Gst3bReportRoutingModule = /** @class */ (function () {
                function Gst3bReportRoutingModule() {
                }
                return Gst3bReportRoutingModule;
            }());
            Gst3bReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], Gst3bReportRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/gst/gstr3b/gstr3b.component.scss": 
        /*!*********************************************************************!*\
          !*** ./src/app/demo/report/report/gst/gstr3b/gstr3b.component.scss ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC9nc3QvZ3N0cjNiL2dzdHIzYi5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/gst/gstr3b/gstr3b.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/demo/report/report/gst/gstr3b/gstr3b.component.ts ***!
          \*******************************************************************/
        /*! exports provided: Gstr3bComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gstr3bComponent", function () { return Gstr3bComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pages/sales/sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _pages_form_elements_basic_elements_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../pages/form-elements/basic-elements/supplier.service */ "./src/app/demo/pages/form-elements/basic-elements/supplier.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");
            var Gstr3bComponent = /** @class */ (function () {
                function Gstr3bComponent(salesErvice, fb, supplierService, excelService) {
                    this.salesErvice = salesErvice;
                    this.fb = fb;
                    this.supplierService = supplierService;
                    this.excelService = excelService;
                    this.test = false;
                    this.table = true;
                    this.sname = true;
                    this.Excel = [];
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
                    this.isDtInitialized = false;
                }
                Gstr3bComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                    this.salesErvice.getInvProduct().subscribe(function (data) {
                        _this.searchData = data;
                    });
                    this.dtTrigger.next();
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
                };
                Gstr3bComponent.prototype.setchange = function (selectedvalue) {
                    var _this = this;
                    this.sss = selectedvalue;
                    var emp = [this.sss];
                    var filteredArray = this.searchData.filter(function (itm) {
                        return emp.indexOf(itm.crmonth) > -1;
                    });
                    this.pro = filteredArray;
                    console.log(this.pro, 'month and year');
                    this.dtTrigger.next();
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
                    //  var currentMonth = 5
                    //  var currentYear = 2020
                    //Get the year and month from the iterated date
                    // var [year, month] = e.date.split('-');
                    //Then filter the dates
                    //  var events =  this.getData.filter(e => {
                    //       var [month,year] = e.monthyear.split('-'); // Or, var month = e.date.split('-')[1];
                    //       return emp.indexOf(currentMonth == month) && (currentYear == year);
                    //   });
                };
                Gstr3bComponent.prototype.exportToExcel = function (event) {
                    var _this = this;
                    this.Excel = [];
                    event.forEach(function (dat) {
                        var Date = dat.date;
                        var Supplier = dat.name;
                        var invoiceNumber = dat.invoiceNumber;
                        var GSTNumber = dat.cost;
                        var GrossTotal = dat.overAllInvoiceTotal;
                        var SalesCost = dat.billAmount;
                        var OverAllCGST = dat.overAllCGSTUnit;
                        var OverAllSGST = dat.overAllSGSTUnit;
                        var OverAllGST = dat.overAllGSTUnit;
                        // var Profit=dat.profit
                        var obj = Object.assign({ Date: Date, Supplier: Supplier, invoiceNumber: invoiceNumber, GSTNumber: GSTNumber, GrossTotal: GrossTotal, SalesCost: SalesCost, OverAllCGST: OverAllCGST, OverAllSGST: OverAllSGST, OverAllGST: OverAllGST });
                        _this.Excel.push(obj);
                    });
                    this.excelService.exportAsExcelFile(this.Excel, 'persons');
                };
                return Gstr3bComponent;
            }());
            Gstr3bComponent.ctorParameters = function () { return [
                { type: _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _pages_form_elements_basic_elements_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"] },
                { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] }
            ]; };
            Gstr3bComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-gstr3b',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gstr3b.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/gst/gstr3b/gstr3b.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gstr3b.component.scss */ "./src/app/demo/report/report/gst/gstr3b/gstr3b.component.scss")).default]
                })
            ], Gstr3bComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/gst/gstr3b/gstr3b.module.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/demo/report/report/gst/gstr3b/gstr3b.module.ts ***!
          \****************************************************************/
        /*! exports provided: Gst3bReportModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gst3bReportModule", function () { return Gst3bReportModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _gstr3b_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gstr3b.component */ "./src/app/demo/report/report/gst/gstr3b/gstr3b.component.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _gst3b_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gst3b-routing.module */ "./src/app/demo/report/report/gst/gstr3b/gst3b-routing.module.ts");
            // import { FileUploadComponent } from './fi';
            // import { NoteformComponent } from "./noteform/noteform.component";
            var Gst3bReportModule = /** @class */ (function () {
                function Gst3bReportModule() {
                }
                return Gst3bReportModule;
            }());
            Gst3bReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_gstr3b_component__WEBPACK_IMPORTED_MODULE_4__["Gstr3bComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _gst3b_routing_module__WEBPACK_IMPORTED_MODULE_6__["Gst3bReportRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
                    ]
                })
            ], Gst3bReportModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=gstr3b-gstr3b-module-es2015.js.map
//# sourceMappingURL=gstr3b-gstr3b-module-es5.js.map
//# sourceMappingURL=gstr3b-gstr3b-module-es5.js.map