(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["all-transaction-all-transaction-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/all-transaction/all-transaction.component.html": 
        /*!*************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/all-transaction/all-transaction.component.html ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n    <!-- <div class=\"col-lg-12 text-right\">\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)='addhistory()'>\n        <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n      </button>\n    </div> -->\n  \n      <div class=\"col-xl-12\">\n        <app-card cardTitle=\"All-Transaction\" [options]=\"false\" blockClass=\"table-border-style\">\n            <div class=\"month\" style=\"text-align: right; \"> <b style=\"color: black;\">Select Month</b>\n                <select (change)=\"setchange($event.target.value)\" style=\"width: 183px; height: 30px;\">\n                    <option  value='1'>January</option>\n                    <option value='2'>February</option>\n                    <option value='3'>March</option>\n                    <option value='4'>April</option>\n                    <option value='5'>May</option>\n                    <option value='6'>June</option>\n                    <option value='7'>July</option>\n                    <option value='8'>August</option>\n                    <option value='9'>September</option>\n                    <option value='10'>October</option>\n                    <option value='11'>November</option>\n                    <option  value='12'>December</option>\n                    </select> \n              </div>\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n              <thead>\n              <tr>\n                <th>Date</th>\n                <th>Name </th>\n                <th> Bill Amount </th>\n                <th> Credit Amount</th>\n                <!-- <th> Credit-Amount </th> -->\n                <th>Balance</th>\n                <!-- <th> Action </th> -->\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor='let data of pro'>\n                <td>{{data.date}} </td>\n                <td>{{data.name}}</td>\n                <td>{{data.overAllInvoiceAmount | number:'1.2-2'}}</td>\n                <td>{{data.credit| number:'1.2-2'}}</td>\n                <!-- <td>{{data.overAllInvoiceTotal | number:'1.2-2' }}</td> -->\n                <!-- <td>{{data. | number:'1.2-2' }}</td> -->\n                <td> {{data.balance | number:'1.2-2'}}</td>\n                <!-- <td> <button (click)='update(data)'><i class=\"fa fa-edit\"></i></button> </td> -->\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </app-card>\n      </div>\n  \n    </div>\n  ");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/all-transaction/all-transaction-routing.module.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/all-transaction/all-transaction-routing.module.ts ***!
          \**************************************************************************************************/
        /*! exports provided: AllTransactionRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTransactionRoutingModule", function () { return AllTransactionRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _all_transaction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-transaction.component */ "./src/app/demo/report/report/transaction/all-transaction/all-transaction.component.ts");
            //  import { FileformComponent } from "../file-upload/fileform/fileform.component";
            var routes = [
                {
                    path: '',
                    component: _all_transaction_component__WEBPACK_IMPORTED_MODULE_3__["AllTransactionComponent"]
                },
            ];
            var AllTransactionRoutingModule = /** @class */ (function () {
                function AllTransactionRoutingModule() {
                }
                return AllTransactionRoutingModule;
            }());
            AllTransactionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AllTransactionRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/all-transaction/all-transaction.component.scss": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/all-transaction/all-transaction.component.scss ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3JlcG9ydC90cmFuc2FjdGlvbi9hbGwtdHJhbnNhY3Rpb24vYWxsLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/all-transaction/all-transaction.component.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/all-transaction/all-transaction.component.ts ***!
          \*********************************************************************************************/
        /*! exports provided: AllTransactionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTransactionComponent", function () { return AllTransactionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../pages/sales/sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
            /* harmony import */ var _pages_finance_customerhistory_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../pages/finance/customerhistory/customer.service */ "./src/app/demo/pages/finance/customerhistory/customer.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var AllTransactionComponent = /** @class */ (function () {
                function AllTransactionComponent(router, salesService, customerservice) {
                    this.router = router;
                    this.salesService = salesService;
                    this.customerservice = customerservice;
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
                    this.isDtInitialized = false;
                }
                AllTransactionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                    this.salesService.getInvProduct().subscribe(function (data) {
                        // data.overAllInvoiceTotal= data.overAllInvoiceTotal.tofixed(2) 
                        _this.getData = data;
                        // this.dtTrigger.next();
                        _this.getData.forEach(function (dataa) {
                            //  dataa.overAllInvoiceTotal= dataa.overAllInvoiceTotal.tofixed(2) 
                        });
                        //  this.getaid=filter
                        // this.dtTrigger.next();
                        console.log(_this.getData, 'sale credit');
                        _this.getData.forEach(function (dataa) {
                            _this.getPaid = dataa.paid;
                            _this.getPaid.forEach(function (val) {
                                var zero = 0;
                                console.log(val.amountPaid + zero);
                            });
                        });
                    });
                    this.customerservice.getCustomer().subscribe(function (data) {
                        _this.getDat = data;
                        console.log(_this.getDat, 'cust');
                    });
                };
                AllTransactionComponent.prototype.setchange = function (selectedvalue) {
                    var _this = this;
                    this.sss = selectedvalue;
                    var emp = [this.sss];
                    var filteredArray = this.getData.filter(function (itm) {
                        return emp.indexOf(itm.crmonth) > -1;
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
                    //  var currentMonth = 5
                    //  var currentYear = 2020
                    //Get the year and month from the iterated date
                    // var [year, month] = e.date.split('-');
                    //Then filter the dates
                    //  var events =  this.getData.filter(e => {
                    //       var [month,year] = e.monthyear.split('-'); // Or, var month = e.date.split('-')[1];
                    //       return emp.indexOf(currentMonth == month) && (currentYear == year);
                    //   });
                    console.log(this.pro, 'month and year');
                };
                return AllTransactionComponent;
            }());
            AllTransactionComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] },
                { type: _pages_finance_customerhistory_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] }
            ]; };
            AllTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-all-transaction',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-transaction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/report/report/transaction/all-transaction/all-transaction.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-transaction.component.scss */ "./src/app/demo/report/report/transaction/all-transaction/all-transaction.component.scss")).default]
                })
            ], AllTransactionComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/report/report/transaction/all-transaction/all-transaction.module.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/demo/report/report/transaction/all-transaction/all-transaction.module.ts ***!
          \******************************************************************************************/
        /*! exports provided: AllTransactionReportModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTransactionReportModule", function () { return AllTransactionReportModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _all_transaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-transaction.component */ "./src/app/demo/report/report/transaction/all-transaction/all-transaction.component.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _all_transaction_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-transaction-routing.module */ "./src/app/demo/report/report/transaction/all-transaction/all-transaction-routing.module.ts");
            // import { FileUploadComponent } from './fi';
            // import { NoteformComponent } from "./noteform/noteform.component";
            var AllTransactionReportModule = /** @class */ (function () {
                function AllTransactionReportModule() {
                }
                return AllTransactionReportModule;
            }());
            AllTransactionReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_all_transaction_component__WEBPACK_IMPORTED_MODULE_4__["AllTransactionComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _all_transaction_routing_module__WEBPACK_IMPORTED_MODULE_6__["AllTransactionRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
                    ]
                })
            ], AllTransactionReportModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=all-transaction-all-transaction-module-es2015.js.map
//# sourceMappingURL=all-transaction-all-transaction-module-es5.js.map
//# sourceMappingURL=all-transaction-all-transaction-module-es5.js.map