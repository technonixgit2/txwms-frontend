(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["monthlysales-monthlysales-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/finance/monthlysales/monthlysales.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/finance/monthlysales/monthlysales.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n  <div class=\"row\" >\n    <div class=\"col-xl-12\">\n        <app-card cardTitle=\"Product-Wise Sales\" [options]=\"false\" blockClass=\"table-border-style\" >\n         <div class=\"month\" style=\"text-align: right; \"> <b style=\"color: black;\">Select Month</b>&nbsp;\n          <div class=\"dated\" >\n            <label>From Date: &nbsp;</label>  <input type=\"date\" [formControl]=\"fromdate\" (change)='from($event.target.value)'>\n            <label>To Date: &nbsp;</label>  <input type=\"date\" [formControl]=\"enddate\" (change)='to($event.target.value)'>\n            </div>\n          </div>\n        <!--  <div class=\"table-responsive\">\n            <table class=\"table table-striped\"  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"  >\n              <thead>\n              <tr>\n               \n                <th> Item Code</th>  \n                <th> Description </th>\n                <th>Quantity </th>\n                <th> Total </th>\n              \n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor='let data of profitData'>\n               \n                <td>{{data.itemCode}}</td>\n                <td>{{data.description}} </td>\n                <td>{{data.custQuantity}} </td>\n                <td>{{data.invoiceTotal}} </td>\n              \n             </tr>\n              </tbody>\n            </table>\n          </div> -->\n\n\n          <section >\n            <div class=\"container\">\n                <div class=\"row\">\n                \n                    <div class=\"col-xl-12\">\n                        <nav>\n                            <div class=\"nav nav-tabs nav-fill\" id=\"nav-tab\" role=\"tablist\">\n                                <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\"\n                                 aria-controls=\"nav-home\" aria-selected=\"true\">Total Product Sales List\n                                </a>\n\n                                <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\" \n                                aria-controls=\"nav-profile\" aria-selected=\"false\">Category Wise Sales List\n                              </a>\n                                <!-- <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#nav-contact\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Project Tab 3</a> -->\n                            </div>\n                        </nav>\n                        <div class=\"tab-content\" id=\"nav-tabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\n                               <div class=\"table-responsive\">\n            <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n              <thead>\n              <tr>\n                <th>Select</th>\n                <th> Item Code</th>  \n                <th> Description </th>\n                <th>Quantity </th>\n                <th> Total </th>\n              </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor='let data of filttr'>\n                  <td><input type=\"checkbox\" (change)='getValue(data,$event.target.checked)'></td>\n                  <td>{{data.itemCode}}</td>\n                <td>{{data.description}} </td>\n                <td>{{data.custQuantity}} </td>\n                <td>{{data.invoiceTotal}} </td>\n    \n                </tr>\n              </tbody>\n            </table>\n            <button type=\"button\" class=\"btn btn-primary\"  (click)='exportToExcel(profitData)'>Export</button> \n    \n          </div>\n              </div>\n                            <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\n                            <label for=\"\">Category</label>\n                            <select [(ngModel)]=\"selected\" name=\"finalDiv\" placeholder=\"select\" (ngModelChange)=\"onOptionsSelected()\">\n                              <option *ngFor=\"let data of gory\" [ngValue]=\"data\">{{data.categor}}</option>\n                          </select>\n                             \n                          <div class=\"table-responsive\">\n                            <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n                              <thead>\n                              <tr>\n                                <th>Select</th>\n                                <th> Item Code</th>  \n                                <th> Description </th>\n                                <th>Quantity </th>\n                                  <th> Total </th>\n                              </tr>\n                              </thead>\n                              <tbody>\n                                <tr *ngFor='let data of catigorydivision'>\n                                  <td><input type=\"checkbox\" (change)='getValue(data,$event.target.checked)'></td>\n                                       <td>{{data.itemCode}}</td>\n                                       <td>{{data.description}} </td>\n                                      <td>{{data.custQuantity}} </td>\n                                        <td>{{data.invoiceTotal}} </td>\n                    \n                                </tr>\n                              </tbody>\n                            </table>\n                            <button type=\"button\" class=\"btn btn-primary\"  (click)='exportToExcel(catigorydivision)'>Export</button> \n    \n                          </div>\n                            \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        </app-card>\n      </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/finance/monthlysales/monthlysales-routing.module.ts": 
        /*!********************************************************************************!*\
          !*** ./src/app/demo/pages/finance/monthlysales/monthlysales-routing.module.ts ***!
          \********************************************************************************/
        /*! exports provided: MonthlysalesRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlysalesRoutingModule", function () { return MonthlysalesRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _monthlysales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monthlysales.component */ "./src/app/demo/pages/finance/monthlysales/monthlysales.component.ts");
            var routes = [
                {
                    path: '',
                    component: _monthlysales_component__WEBPACK_IMPORTED_MODULE_3__["MonthlysalesComponent"]
                }
            ];
            var MonthlysalesRoutingModule = /** @class */ (function () {
                function MonthlysalesRoutingModule() {
                }
                return MonthlysalesRoutingModule;
            }());
            MonthlysalesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], MonthlysalesRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/finance/monthlysales/monthlysales.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/demo/pages/finance/monthlysales/monthlysales.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".project-tab {\n  padding: 10%;\n  margin-top: -8%; }\n\n.project-tab #tabs {\n  background: #007b5e;\n  color: #eee; }\n\n.project-tab #tabs h6.section-title {\n  color: #eee; }\n\n.project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\n  color: #0062cc;\n  background-color: transparent;\n  border-color: transparent transparent #f3f3f3;\n  border-bottom: 3px solid !important;\n  font-size: 16px;\n  font-weight: bold; }\n\n.project-tab .nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: .25rem;\n  border-top-right-radius: .25rem;\n  color: #0062cc;\n  font-size: 16px;\n  font-weight: 600; }\n\n.project-tab .nav-link:hover {\n  border: none; }\n\n.project-tab thead {\n  background: #f3f3f3;\n  color: #333; }\n\n.project-tab a {\n  text-decoration: none;\n  color: #333;\n  font-weight: 600; }\n\ninput[type=\"date\"]::-webkit-clear-button {\n  display: none; }\n\n/* Removes the spin button */\n\ninput[type=\"date\"]::-webkit-inner-spin-button {\n  display: none; }\n\n/* Always display the drop down caret */\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: #2C3E50; }\n\n/* A few custom styles for date inputs */\n\ninput[type=\"date\"] {\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n  color: #95A5A6;\n  font-family: \"Helvetica\", arial, sans-serif;\n  font-size: 13px;\n  border: 3px solid #ECF0F1;\n  background: #ecf0f1;\n  padding: 5px;\n  display: inline-block !important;\n  visibility: visible !important; }\n\ninput[type=\"date\"], focus {\n  color: #95A5A6;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none; }\n\n.dated {\n  text-align: right;\n  padding-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9maW5hbmNlL21vbnRobHlzYWxlcy9DOlxcVXNlcnNcXEJoYXJhbmVlZGhhcmFuXFxEb3dubG9hZHNcXFdNUy0xXFx3bXMgMTQtMTIvc3JjXFxhcHBcXGRlbW9cXHBhZ2VzXFxmaW5hbmNlXFxtb250aGx5c2FsZXNcXG1vbnRobHlzYWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsNkNBQTZDO0VBQzdDLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFFZjtFQUNJLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQiw0QkFBQTs7QUFDQTtFQUNJLGFBQWEsRUFBQTs7QUFFakIsdUNBQUE7O0FBQ0E7RUFDSSxjQUFjLEVBQUE7O0FBRWxCLHdDQUFBOztBQUNBO0VBQ0kscUJBQWdCO09BQWhCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLDJDQUEyQztFQUMzQyxlQUFlO0VBQ2YseUJBQXdCO0VBQ3hCLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLDhCQUE4QixFQUFBOztBQUVsQztFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGlCQUFpQjtFQUFFLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9wYWdlcy9maW5hbmNlL21vbnRobHlzYWxlcy9tb250aGx5c2FsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC10YWIge1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTglO1xyXG59XHJcbi5wcm9qZWN0LXRhYiAjdGFic3tcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiNWU7XHJcbiAgICBjb2xvcjogI2VlZTtcclxufVxyXG4ucHJvamVjdC10YWIgI3RhYnMgaDYuc2VjdGlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG59XHJcbi5wcm9qZWN0LXRhYiAjdGFicyAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzAwNjJjYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZjNmM2YzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucHJvamVjdC10YWIgLm5hdi1saW5rIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGNvbG9yOiAjMDA2MmNjO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucHJvamVjdC10YWIgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucHJvamVjdC10YWIgdGhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuLnByb2plY3QtdGFiIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNsZWFyLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qIFJlbW92ZXMgdGhlIHNwaW4gYnV0dG9uICovXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHsgXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qIEFsd2F5cyBkaXNwbGF5IHRoZSBkcm9wIGRvd24gY2FyZXQgKi9cclxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgICBjb2xvcjogIzJDM0U1MDtcclxufVxyXG4vKiBBIGZldyBjdXN0b20gc3R5bGVzIGZvciBkYXRlIGlucHV0cyAqL1xyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgY29sb3I6ICM5NUE1QTY7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkICNFQ0YwRjE7XHJcbiAgICBiYWNrZ3JvdW5kOiNlY2YwZjE7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdLCBmb2N1cyB7XHJcbiAgICBjb2xvcjogIzk1QTVBNjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmRhdGVke1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/finance/monthlysales/monthlysales.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/demo/pages/finance/monthlysales/monthlysales.component.ts ***!
          \***************************************************************************/
        /*! exports provided: MonthlysalesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlysalesComponent", function () { return MonthlysalesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _sales_sales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sales/sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
            /* harmony import */ var _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../extra/sample-page/purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var MonthlysalesComponent = /** @class */ (function () {
                function MonthlysalesComponent(billingService, purchaseService, excelService) {
                    this.billingService = billingService;
                    this.purchaseService = purchaseService;
                    this.excelService = excelService;
                    this.product = [];
                    this.invoice = [];
                    this.profitData = [];
                    this.total = [];
                    this.checklist = [];
                    this.Excel = [];
                    this.cati = [];
                    this.category = [];
                    this.gory = [];
                    this.catigorydivision = [];
                    this.ret = [];
                    this.filttr = [];
                    this.fromdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
                    this.enddate = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                }
                MonthlysalesComponent.prototype.ngOnInit = function () {
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
                MonthlysalesComponent.prototype.getPurchase = function () {
                    var _this = this;
                    this.purchaseService.getPurchaseData().subscribe(function (data) {
                        _this.purchaseData = data,
                            _this.total = [];
                        _this.purchaseData.forEach(function (val) {
                            _this.getInvoice = val.invoice;
                            _this.getInvoice.forEach(function (dat) {
                                _this.total.push(dat);
                                _this.cati.push({ categor: dat.category });
                            });
                            _this.category = _this.cati;
                            var filter = _this.category.filter(function (obj, pos, arr) {
                                return arr.map(function (mapObj) { return mapObj["categor"]; }).indexOf(obj["categor"]) === pos;
                            });
                            _this.gory = filter;
                        });
                    });
                };
                MonthlysalesComponent.prototype.setchange = function (selectedvalue) {
                    var _this = this;
                    this.filttr = [];
                    this.sss = selectedvalue;
                    this.invoice = [];
                    var emp = [this.sss];
                    console.log(this.product, 'prodddd');
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
                        _this.filttr = _this.profitData;
                        // this.dtTrigger.next();
                    });
                    this.dtTrigger.next();
                    console.log(this.profitData, 'goods');
                };
                MonthlysalesComponent.prototype.getValue = function (value, isChecked) {
                    if (isChecked) {
                        this.checklist.push(value);
                    }
                    else {
                        var index = this.checklist.indexOf(value);
                        this.checklist.splice(index, 1);
                    }
                    console.log(this.checklist);
                };
                MonthlysalesComponent.prototype.exportToExcel = function (event) {
                    var _this = this;
                    console.log(this.checklist, 'check');
                    if (this.checklist.length == 0) {
                        this.Excel = [];
                        event.forEach(function (dat) {
                            var SupplierName = dat.supplierName;
                            var InvoiceNo = dat.invoiceNo;
                            var ItemCode = dat.itemCode;
                            var InvoiceDate = dat.invDate;
                            var Quantity = dat.custQuantity;
                            var Description = dat.description;
                            var InvoiceAmount = dat.invoiceAmount;
                            var Returnproduct = dat.returnproduct;
                            var obj = Object.assign({ SupplierName: SupplierName, InvoiceNo: InvoiceNo, InvoiceDate: InvoiceDate, ItemCode: ItemCode, Description: Description, Quantity: Quantity, InvoiceAmount: InvoiceAmount, Returnproduct: Returnproduct });
                            _this.Excel.push(obj);
                        });
                        console.log(this.Excel, 'if');
                        this.excelService.exportAsExcelFile(this.Excel, 'persons');
                    }
                    else {
                        this.Excel = [];
                        this.checklist.forEach(function (dat) {
                            var SupplierName = dat.supplierName;
                            var InvoiceNo = dat.invoiceNo;
                            var ItemCode = dat.itemCode;
                            var InvoiceDate = dat.invDate;
                            var Quantity = dat.custQuantity;
                            var Description = dat.description;
                            var InvoiceAmount = dat.invoiceAmount;
                            var Returnproduct = dat.returnproduct;
                            var obj = Object.assign({ SupplierName: SupplierName, InvoiceNo: InvoiceNo, InvoiceDate: InvoiceDate, ItemCode: ItemCode, Description: Description, Quantity: Quantity, InvoiceAmount: InvoiceAmount, Returnproduct: Returnproduct });
                            _this.Excel.push(obj);
                        });
                        console.log(this.Excel, 'else');
                        this.excelService.exportAsExcelFile(this.Excel, 'persons');
                    }
                };
                MonthlysalesComponent.prototype.onOptionsSelected = function () {
                    var _this = this;
                    var fil = this.filttr.filter(function (t) { return t.category === _this.selected.categor; });
                    this.catigorydivision = fil;
                    console.log(this.filttr, 'category', fil);
                };
                MonthlysalesComponent.prototype.from = function (event) {
                    this.fdate = event;
                    console.log(event, 'fromdate');
                };
                MonthlysalesComponent.prototype.to = function (event) {
                    this.tdate = event;
                    console.log(event, 'fromdate');
                    this.Date();
                };
                MonthlysalesComponent.prototype.Date = function () {
                    var _this = this;
                    var start = "2020-11-01";
                    var end = "2020-11-30";
                    var startDate = new Date(this.fdate);
                    var endDate = new Date(this.tdate);
                    console.log(this.product, 'prodddd');
                    var resultProductData = this.product.filter(function (a) {
                        return new Date(a.idate) >= startDate && new Date(a.idate) <= endDate;
                    });
                    this.profitData = resultProductData;
                    this.filttr = [];
                    // this.sss = selectedvalue;
                    this.invoice = [];
                    var emp = [12];
                    console.log(resultProductData, 'prodddd');
                    var filteredArray = this.product.filter(function (itm) {
                        return emp.indexOf(itm.crntmonth) > -1;
                    });
                    console.log(filteredArray, 'ddd');
                    this.pro = resultProductData;
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
                        _this.filttr = _this.profitData;
                        console.log(_this.filttr, 'prodddd');
                        // this.dtTrigger.next();
                    });
                    this.dtTrigger.next();
                    console.log(this.profitData, 'goods');
                };
                return MonthlysalesComponent;
            }());
            MonthlysalesComponent.ctorParameters = function () { return [
                { type: _sales_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"] },
                { type: _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseService"] },
                { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_5__["ExcelService"] }
            ]; };
            MonthlysalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-monthlysales',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./monthlysales.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/finance/monthlysales/monthlysales.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./monthlysales.component.scss */ "./src/app/demo/pages/finance/monthlysales/monthlysales.component.scss")).default]
                })
            ], MonthlysalesComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/finance/monthlysales/monthlysales.module.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/demo/pages/finance/monthlysales/monthlysales.module.ts ***!
          \************************************************************************/
        /*! exports provided: MonthlysalesModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlysalesModule", function () { return MonthlysalesModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _monthlysales_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monthlysales-routing.module */ "./src/app/demo/pages/finance/monthlysales/monthlysales-routing.module.ts");
            /* harmony import */ var _monthlysales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monthlysales.component */ "./src/app/demo/pages/finance/monthlysales/monthlysales.component.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            var MonthlysalesModule = /** @class */ (function () {
                function MonthlysalesModule() {
                }
                return MonthlysalesModule;
            }());
            MonthlysalesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_monthlysales_component__WEBPACK_IMPORTED_MODULE_5__["MonthlysalesComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _monthlysales_routing_module__WEBPACK_IMPORTED_MODULE_4__["MonthlysalesRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
                    ]
                })
            ], MonthlysalesModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=monthlysales-monthlysales-module-es2015.js.map
//# sourceMappingURL=monthlysales-monthlysales-module-es5.js.map
//# sourceMappingURL=monthlysales-monthlysales-module-es5.js.map