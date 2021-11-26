(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-badge-basic-badge-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xl-12 text-right\">\r\n  <button type=\"button\" class=\"btn btn-primary\"  (click)='exportToExcel(ret)'>Export &nbsp; <i class=\"fas fa-file-export\"></i></button> \r\n</div>\r\n  <div class=\"col-xl-12\">\r\n    <app-card cardTitle=\"Stock Avalibility\" [options]=\"false\" blockClass=\"table-border-style\">\r\n     \r\n      <section >\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-12\">\r\n                    <nav>\r\n                        <div class=\"nav nav-tabs nav-fill\" id=\"nav-tab\" role=\"tablist\">\r\n                            <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Total Product Availability List</a>\r\n                            <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Category Wise Availability List</a>\r\n                            <!-- <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#nav-contact\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Project Tab 3</a> -->\r\n                        </div>\r\n                    </nav>\r\n                    <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                        <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n                           <div class=\"table-responsive\">\r\n        <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n          <thead>\r\n          <tr>\r\n            <th>Select</th>\r\n            <th>Item-Code</th>\r\n            <th> Description </th>\r\n            <th> Quantity </th>\r\n            <th> UOM </th>\r\n            <th>Return-Product </th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor='let data of ret'>\r\n              <td><input type=\"checkbox\" (change)='getValue(data,$event.target.checked)'></td>\r\n              <td>{{data.itemCode}}</td>\r\n              <td>{{data.description}}</td>\r\n              <td>{{data.custQuantity}}</td>\r\n              <td>pcs</td>\r\n              <td>{{data.returnproduct}}</td>\r\n\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      \r\n\r\n      </div>\r\n          </div>\r\n                        <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\r\n                        <label for=\"\">Category</label>\r\n                        <select [(ngModel)]=\"selected\" name=\"finalDiv\" placeholder=\"select\" (ngModelChange)=\"onOptionsSelected()\">\r\n                          <option *ngFor=\"let data of gory\" [ngValue]=\"data\">{{data.categor}}</option>\r\n                      </select>\r\n                         \r\n                      <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n                          <thead>\r\n                          <tr>\r\n                            <th>Select</th>\r\n                            <th>Item-Code</th>\r\n                            <th> Description </th>\r\n                            <th> Quantity </th>\r\n                            <th> UOM </th>\r\n                            <th>Return-Product </th>\r\n                          </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor='let data of catigorydivision'>\r\n                              <td><input type=\"checkbox\" (change)='getValue(data,$event.target.checked)'></td>\r\n                              <td>{{data.itemCode}}</td>\r\n                              <td>{{data.description}}</td>\r\n                              <td>{{data.custQuantity}}</td>\r\n                              <td>pcs</td>\r\n                              <td>{{data.returnproduct}}</td>\r\n                \r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <button type=\"button\" class=\"btn btn-primary\"  (click)='exportToExcel(catigorydivision)'>Export</button> \r\n\r\n                      </div>\r\n                        \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    </app-card>\r\n  </div>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-badge/stockavailform/stockavailform.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-badge/stockavailform/stockavailform.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-lg-2\"></div>\n  <div class=\"col-lg-8\">\n      <div class=\"container\">\n          <h4 class=\"thhead\">Stock Availability Details</h4>\n          <form [formGroup]='stockAva' (ngSubmit)='onSubmit(stockAva.value)'>\n          \n            <input type=\"hidden\" formControlName='_id'>\n            <div class=\"form-group\">\n              <label for=\"email\">Item Code:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Item Code\" formControlName=\"itemCode\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"pwd\">Description:</label>\n              <textarea type=\"text\" class=\"form-control\" placeholder=\"Enter Description\" formControlName=\"description\"></textarea>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"pwd\">Unit Rate:</label>\n              <input class=\"form-control\" placeholder=\"Enter Unit Rate\" formControlName=\"unitPrice\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"pwd\">UOM:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter UOM\" formControlName=\"vom\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"pwd\">Quantity:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Quantity\" formControlName=\"quantity\">\n            </div>\n            <br>\n            <div class=\"text-center\">\n              <button type=\"reset\" class=\"btn btn-secondary\"> Clear </button>\n              <button type=\"submit\" class=\"btn btn-primary\"> Submit </button>\n            </div>\n          </form>\n        </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: BasicBadgeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicBadgeRoutingModule", function() { return BasicBadgeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _basic_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-badge.component */ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.ts");
/* harmony import */ var _stockavailform_stockavailform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stockavailform/stockavailform.component */ "./src/app/demo/ui-elements/ui-basic/basic-badge/stockavailform/stockavailform.component.ts");





const routes = [
    {
        path: '',
        component: _basic_badge_component__WEBPACK_IMPORTED_MODULE_3__["BasicBadgeComponent"]
    },
    {
        path: 'stockavailform',
        component: _stockavailform_stockavailform_component__WEBPACK_IMPORTED_MODULE_4__["StockavailformComponent"]
    }
];
let BasicBadgeRoutingModule = class BasicBadgeRoutingModule {
};
BasicBadgeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BasicBadgeRoutingModule);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table.dataTable tbody th, table.dataTable tbody td {\n  padding: 8px 10px;\n  text-align: center !important; }\n\ntable.dataTable thead th, table.dataTable thead td {\n  padding: 10px 18px;\n  text-align: center;\n  border-bottom: 1px solid #111111; }\n\n.project-tab {\n  padding: 10%;\n  margin-top: -8%; }\n\n.project-tab #tabs {\n  background: #007b5e;\n  color: #eee; }\n\n.project-tab #tabs h6.section-title {\n  color: #eee; }\n\n.project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\n  color: #0062cc;\n  background-color: transparent;\n  border-color: transparent transparent #f3f3f3;\n  border-bottom: 3px solid !important;\n  font-size: 16px;\n  font-weight: bold; }\n\n.project-tab .nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: .25rem;\n  border-top-right-radius: .25rem;\n  color: #0062cc;\n  font-size: 16px;\n  font-weight: 600; }\n\n.project-tab .nav-link:hover {\n  border: none; }\n\n.project-tab thead {\n  background: #f3f3f3;\n  color: #333; }\n\n.project-tab a {\n  text-decoration: none;\n  color: #333;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby91aS1lbGVtZW50cy91aS1iYXNpYy9iYXNpYy1iYWRnZS9DOlxcVXNlcnNcXEJoYXJhbmVlZGhhcmFuXFxEb3dubG9hZHNcXFdNUy0xXFx3bXMgMTQtMTIvc3JjXFxhcHBcXGRlbW9cXHVpLWVsZW1lbnRzXFx1aS1iYXNpY1xcYmFzaWMtYmFkZ2VcXGJhc2ljLWJhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLDZCQUE0QixFQUFBOztBQUVoQztFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUVmO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksY0FBYztFQUNkLDZCQUE2QjtFQUM3Qiw2Q0FBNkM7RUFDN0MsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUVmO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtYmFkZ2UvYmFzaWMtYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZS5kYXRhVGFibGUgdGJvZHkgdGgsIHRhYmxlLmRhdGFUYWJsZSB0Ym9keSB0ZCB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbn1cclxudGFibGUuZGF0YVRhYmxlIHRoZWFkIHRoLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgdGQge1xyXG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMTExMTE7XHJcbn1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4ucHJvamVjdC10YWIge1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTglO1xyXG59XHJcbi5wcm9qZWN0LXRhYiAjdGFic3tcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiNWU7XHJcbiAgICBjb2xvcjogI2VlZTtcclxufVxyXG4ucHJvamVjdC10YWIgI3RhYnMgaDYuc2VjdGlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG59XHJcbi5wcm9qZWN0LXRhYiAjdGFicyAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzAwNjJjYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZjNmM2YzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucHJvamVjdC10YWIgLm5hdi1saW5rIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGNvbG9yOiAjMDA2MmNjO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucHJvamVjdC10YWIgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucHJvamVjdC10YWIgdGhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuLnByb2plY3QtdGFiIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.ts ***!
  \********************************************************************************/
/*! exports provided: BasicBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicBadgeComponent", function() { return BasicBadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pages/sales/sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
/* harmony import */ var _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../extra/sample-page/purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
/* harmony import */ var _pages_sales_returnproducts_return_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pages/sales/returnproducts/return.service */ "./src/app/demo/pages/sales/returnproducts/return.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");










let BasicBadgeComponent = class BasicBadgeComponent {
    constructor(router, stockService, purchaseService, returnservice, toster, excelService) {
        this.router = router;
        this.stockService = stockService;
        this.purchaseService = purchaseService;
        this.returnservice = returnservice;
        this.toster = toster;
        this.excelService = excelService;
        this.stock = [];
        this.stockAva = [];
        this.stockAvaa = [];
        this.ret = [];
        this.repro = [];
        this.stockAvalibility = [];
        this.checklist = [];
        this.Excel = [];
        this.cati = [];
        this.category = [];
        this.gory = [];
        this.catigorydivision = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isDtInitialized = false;
    }
    ngOnInit() {
        this.stockService.getInvProduct().subscribe(data => {
            this.stockOut = data;
            console.log(this.stockOut, 'stock');
            this.stockOut.forEach(dataa => {
                this.final = dataa.products;
                this.final.forEach(dat => {
                    this.stock.push(dat);
                });
            });
            //  console.log(this.stock,'stock')
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
        });
        this.purchaseService.getPurchaseData().subscribe(data => {
            this.purchase = data;
            this.purchase.forEach(datta => {
                this.invoice = datta.invoice;
                this.invoice.forEach(dataa => {
                    this.stockAva.push(dataa);
                    this.cati.push({ categor: dataa.category });
                });
                this.category = this.cati;
                var filter = this.category.filter((obj, pos, arr) => {
                    return arr.map(mapObj => mapObj["categor"]).indexOf(obj["categor"]) === pos;
                });
                this.gory = filter;
                console.log(this.category, 'cati');
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
                console.log(this.returnProducts, 'returnprod');
                this.returnProducts.forEach(dataa => {
                    this.stockAvalibility.push(dataa);
                });
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
                console.log(this.ret, 'availability');
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
    getValue(value, isChecked) {
        if (isChecked) {
            this.checklist.push(value);
        }
        else {
            let index = this.checklist.indexOf(value);
            this.checklist.splice(index, 1);
        }
        console.log(this.checklist);
    }
    exportToExcel(event) {
        console.log(this.checklist, 'check');
        if (this.checklist.length == 0) {
            this.Excel = [];
            event.forEach(dat => {
                var SupplierName = dat.supplierName;
                var InvoiceNo = dat.invoiceNo;
                var ItemCode = dat.itemCode;
                var InvoiceDate = dat.invDate;
                var Quantity = dat.custQuantity;
                var Description = dat.description;
                var InvoiceAmount = dat.invoiceAmount;
                var Returnproduct = dat.returnproduct;
                var obj = Object.assign({ SupplierName, InvoiceNo, InvoiceDate, ItemCode, Description, Quantity, InvoiceAmount, Returnproduct });
                this.Excel.push(obj);
            });
            console.log(this.Excel, 'if');
            this.excelService.exportAsExcelFile(this.Excel, 'persons');
        }
        else {
            this.Excel = [];
            this.checklist.forEach(dat => {
                var SupplierName = dat.supplierName;
                var InvoiceNo = dat.invoiceNo;
                var ItemCode = dat.itemCode;
                var InvoiceDate = dat.invDate;
                var Quantity = dat.custQuantity;
                var Description = dat.description;
                var InvoiceAmount = dat.invoiceAmount;
                var Returnproduct = dat.returnproduct;
                var obj = Object.assign({ SupplierName, InvoiceNo, InvoiceDate, ItemCode, Description, Quantity, InvoiceAmount, Returnproduct });
                this.Excel.push(obj);
            });
            console.log(this.Excel, 'else');
            this.excelService.exportAsExcelFile(this.Excel, 'persons');
        }
    }
    onOptionsSelected() {
        var fil = this.ret.filter(t => t.category === this.selected.categor);
        this.catigorydivision = fil;
        console.log(this.selected, 'category', fil);
    }
};
BasicBadgeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _pages_sales_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] },
    { type: _extra_sample_page_purchase_service__WEBPACK_IMPORTED_MODULE_4__["PurchaseService"] },
    { type: _pages_sales_returnproducts_return_service__WEBPACK_IMPORTED_MODULE_5__["ReturnService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_9__["ExcelService"] }
];
BasicBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-badge',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-badge.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-badge.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.scss")).default]
    })
], BasicBadgeComponent);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BasicBadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicBadgeModule", function() { return BasicBadgeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _basic_badge_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-badge-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge-routing.module.ts");
/* harmony import */ var _basic_badge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-badge.component */ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _stockavailform_stockavailform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stockavailform/stockavailform.component */ "./src/app/demo/ui-elements/ui-basic/basic-badge/stockavailform/stockavailform.component.ts");









let BasicBadgeModule = class BasicBadgeModule {
};
BasicBadgeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _basic_badge_routing_module__WEBPACK_IMPORTED_MODULE_4__["BasicBadgeRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
        ],
        declarations: [_basic_badge_component__WEBPACK_IMPORTED_MODULE_5__["BasicBadgeComponent"], _stockavailform_stockavailform_component__WEBPACK_IMPORTED_MODULE_8__["StockavailformComponent"]]
    })
], BasicBadgeModule);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-badge/stockava.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/stockava.service.ts ***!
  \***************************************************************************/
/*! exports provided: StockavaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockavaService", function() { return StockavaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/enviromentURL */ "./src/environments/enviromentURL.ts");




let StockavaService = class StockavaService {
    constructor(http) {
        this.http = http;
    }
    getStock() {
        return this.http.get(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/stockavailability`);
    }
    postStock(value) {
        return this.http.post(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/stockavailability`, value);
    }
    putStock(value) {
        return this.http.put(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/stockavailability` + '/' + value._id, value);
    }
    deleteStock(id) {
        return this.http.delete(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl}/stockavailability` + '/' + id);
    }
};
StockavaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StockavaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StockavaService);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-badge/stockavailform/stockavailform.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/stockavailform/stockavailform.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  box-shadow: 1px 3px 3px 3px lightblue;\n  padding: 2%; }\n\n.thhead {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby91aS1lbGVtZW50cy91aS1iYXNpYy9iYXNpYy1iYWRnZS9zdG9ja2F2YWlsZm9ybS9DOlxcVXNlcnNcXEJoYXJhbmVlZGhhcmFuXFxEb3dubG9hZHNcXFdNUy0xXFx3bXMgMTQtMTIvc3JjXFxhcHBcXGRlbW9cXHVpLWVsZW1lbnRzXFx1aS1iYXNpY1xcYmFzaWMtYmFkZ2VcXHN0b2NrYXZhaWxmb3JtXFxzdG9ja2F2YWlsZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFDQUFxQztFQUNyQyxXQUFXLEVBQUE7O0FBRWY7RUFFSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtYmFkZ2Uvc3RvY2thdmFpbGZvcm0vc3RvY2thdmFpbGZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXHJcbntcclxuICAgIGJveC1zaGFkb3c6IDFweCAzcHggM3B4IDNweCBsaWdodGJsdWU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG4udGhoZWFkXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-badge/stockavailform/stockavailform.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/stockavailform/stockavailform.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: StockavailformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockavailformComponent", function() { return StockavailformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _stockava_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stockava.service */ "./src/app/demo/ui-elements/ui-basic/basic-badge/stockava.service.ts");





let StockavailformComponent = class StockavailformComponent {
    constructor(fb, stockService, toster) {
        this.fb = fb;
        this.stockService = stockService;
        this.toster = toster;
        this.fromdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.enddate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ngOnInit() {
        this.stockAva = this.fb.group({
            _id: [''],
            itemCode: [''],
            description: [''],
            unitPrice: [''],
            vom: [''],
            quantity: ['']
        });
        var retrievedObject = localStorage.getItem('stock');
        this.stockAva.patchValue(JSON.parse(retrievedObject));
    }
    onSubmit(value) {
        if (value._id === '') {
            this.stockService.postStock(value).subscribe(data => {
                console.log(data);
                this.toster.success('added successfully');
            });
        }
        else {
            this.stockService.putStock(value).subscribe(data => {
                console.log(data);
                this.toster.success('updated successfully');
            });
        }
    }
};
StockavailformComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _stockava_service__WEBPACK_IMPORTED_MODULE_4__["StockavaService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
StockavailformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stockavailform',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stockavailform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/ui-elements/ui-basic/basic-badge/stockavailform/stockavailform.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stockavailform.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-badge/stockavailform/stockavailform.component.scss")).default]
    })
], StockavailformComponent);



/***/ })

}]);
//# sourceMappingURL=basic-badge-basic-badge-module-es2015.js.map