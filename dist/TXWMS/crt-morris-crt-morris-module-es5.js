(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crt-morris-crt-morris-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-lg-12 text-right\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)='addproduct()'> \n      <img src=\"../../../../../assets/images/plus.png\" alt=\"\"> \n    </button>\n    <button type=\"button\" class=\"btn btn-primary\"  (click)='exportToExcel(getProduct)'>Export &nbsp; <i class=\"fas fa-file-export\"></i></button>\n</div>\n  <div class=\"col-xl-12\">\n    <app-card cardTitle=\"Product\" [options]=\"false\" blockClass=\"table-border-style\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"  >\n          <thead>\n          <tr>\n            <th  rowspan=\"2\">Select</th>\n            <th rowspan=\"2\"> Item Code </th>\n            <th rowspan=\"2\"> Description </th>\n            <th rowspan=\"2\"> HSN Code </th>\n            <th rowspan=\"2\"> Quantity </th>\n            <th rowspan=\"2\"> UOM </th>\n            <th rowspan=\"2\"> Unit Rate </th>\n            <th rowspan=\"2\">Total(Pre Tax Amount)</th>\n            <th colspan=\"2\"> CGST </th>\n            <th colspan=\"2\"> SGST </th>\n            <th rowspan=\"2\">Total Invoice Amount </th>\n            <th rowspan=\"2\">Action</th>\n          </tr>\n          <tr>       \n            <th>Rate</th>\n            <th>Amount</th>\n            <th>Rate</th>\n            <th>Amount</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor='let data of getProduct'>\n            <td><input type=\"checkbox\" (change)='getValue(data,$event.target.checked)'></td>\n            <td> {{data.itemCode}} </td>\n            <td> {{data.description}} </td>\n            <td> {{data.hsnCode}} </td>\n            <td> {{data.quantity}} </td>\n            <td> {{data.vom}} </td>\n            <td> {{data.unitRate }} </td>\n            <td> {{data.total}}</td>\n            <td> {{data.CGST}} </td>\n            <th> {{data.CGSTAmount | number:'1.2-2'}} </th>\n            <td> {{data.SGST}} </td>\n            <td> {{data.SGSTAmount | number:'1.2-2'}} </td>\n            <td> {{data.invoiceTotal | number:'1.2-2'}} </td>\n            <td><button style=\"border: none; background: none;\" (click)='editProduct(data)'> <i style=\"color: #007bcf;\" class=\"fa fa-edit\"></i> </button>\n                <button style=\"border: none; background: none;\"  (click)='deleteProduct(data._id)'> <i style=\"color: red;\" class=\"fa fa-trash\"></i> </button>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n   \n\n    </app-card>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/core-chart/crt-morris/productdetails/productdetails.component.html": 
        /*!*************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/core-chart/crt-morris/productdetails/productdetails.component.html ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <app-card cardTitle=\"Product Details\" [options]=\"false\" blockClass=\"table-border-style\">\n      <form class=\"receiptaddform\" [formGroup]='addProductForm' (ngSubmit)='onSubmit(addProductForm.value)'>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"_id\"> </div>\n          <input type=\"hidden\" class=\"form-control\" formControlName=\"idate\">\n          <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\">\n          <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\">\n          <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\">            \n\n         \n          <div class=\"col-lg-12\"> \n            <label for=\"email\">Category:</label>           \n            <input type=\"text\" style=\"text-transform: capitalize;\" class=\"form-control\" placeholder=\"Enter Category\" formControlName=\"category\">\n             \n          </div>\n          <div class=\"col-lg-6\"> \n            <label for=\"email\">Item Code:</label>           \n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Item Code\" formControlName=\"itemCode\">\n             \n          </div>\n          <div class=\"col-lg-6\"> <label for=\"pwd\">Description:</label> <br>  \n            <input type=\"text\" class=\"form-control\" formControlName='description'placeholder=\"Enter the description\">\n              \n          </div>\n          <div class=\"col-lg-6\">  <label for=\"pwd\">HSN Code:</label>  <br> \n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter HSN Code\" formControlName=\"hsnCode\">\n            \n          </div>\n          <div class=\"col-lg-6\"> <label for=\"pwd\">Quantity:</label>  <br> \n            <input type=\"text\" class=\"form-control\"  formControlName=\"quantity\" readonly>\n             \n          </div>\n         \n          <div class=\"col-lg-6\"> <label for=\"uom\">UOM:</label> <br> \n            <input type=\"text\" class=\"form-control\" id=\"invoiceno\" placeholder=\"Enter UOM\" formControlName=\"vom\">\n            \n          </div>\n          <div class=\"col-lg-6\"> <label for=\"pwd\">Unit Rate:</label> <br> \n            <input type=\"number\" class=\"form-control\"  placeholder=\"Enter Unit Rate\" formControlName=\"unitRate\">\n            \n          </div>\n          <div class=\"col-lg-6\"> <label for=\"pwd\">CGST:</label>  <br> \n            <input type=\"text\" class=\"form-control\"  placeholder=\"Enter CGST\" formControlName=\"CGST\"> \n            \n          </div>\n          <div class=\"col-lg-6\"> <label for=\"pwd\">SGST:</label> <br> \n            <input type=\"text\" class=\"form-control\"  placeholder=\"Enter SGST\" formControlName=\"SGST\">\n            \n          </div>\n        </div>\n       <div class=\"d-flex justify-content-center\">\n            <button type=\"submit\"> Submit </button>  \n            <button type=\"reset\" class=\"clear\"> Clear </button>  \n        </div>\n        \n      </form>\n    </app-card>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/core-chart/crt-morris/crt-morris-routing.module.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/demo/pages/core-chart/crt-morris/crt-morris-routing.module.ts ***!
          \*******************************************************************************/
        /*! exports provided: CrtMorrisRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtMorrisRoutingModule", function () { return CrtMorrisRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _crt_morris_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crt-morris.component */ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.ts");
            /* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/demo/pages/core-chart/crt-morris/productdetails/productdetails.component.ts");
            var routes = [
                {
                    path: '',
                    component: _crt_morris_component__WEBPACK_IMPORTED_MODULE_3__["CrtMorrisComponent"]
                },
                {
                    path: 'addproducts',
                    component: _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_4__["ProductdetailsComponent"]
                }
            ];
            var CrtMorrisRoutingModule = /** @class */ (function () {
                function CrtMorrisRoutingModule() {
                }
                return CrtMorrisRoutingModule;
            }());
            CrtMorrisRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], CrtMorrisRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.scss": 
        /*!****************************************************************************!*\
          !*** ./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.scss ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("button img {\n  height: 15px;\n  width: 15px; }\n\ntr, th {\n  text-align: center;\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9jb3JlLWNoYXJ0L2NydC1tb3JyaXMvQzpcXFVzZXJzXFxCaGFyYW5lZWRoYXJhblxcRG93bmxvYWRzXFxXTVMtMVxcd21zIDE0LTEyL3NyY1xcYXBwXFxkZW1vXFxwYWdlc1xcY29yZS1jaGFydFxcY3J0LW1vcnJpc1xcY3J0LW1vcnJpcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFDSSxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL2NvcmUtY2hhcnQvY3J0LW1vcnJpcy9jcnQtbW9ycmlzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJ1dHRvbiBpbWd7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxufVxyXG50cix0aHsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.ts ***!
          \**************************************************************************/
        /*! exports provided: CrtMorrisComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtMorrisComponent", function () { return CrtMorrisComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _addproduct_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addproduct.service */ "./src/app/demo/pages/core-chart/crt-morris/addproduct.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");
            var CrtMorrisComponent = /** @class */ (function () {
                function CrtMorrisComponent(router, addproductService, toster, excelService) {
                    this.router = router;
                    this.addproductService = addproductService;
                    this.toster = toster;
                    this.excelService = excelService;
                    this.Excel = [];
                    this.checklist = [];
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                }
                CrtMorrisComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.addproductService.getProduct().subscribe(function (data) {
                        console.log(data);
                        _this.getProduct = data;
                        _this.dtTrigger.next();
                    });
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                };
                CrtMorrisComponent.prototype.ngOnDestroy = function () {
                    // Do not forget to unsubscribe the event
                    this.dtTrigger.unsubscribe();
                };
                CrtMorrisComponent.prototype.addproduct = function () {
                    localStorage.removeItem('pro');
                    this.router.navigate(['/products/product/addproducts']);
                };
                CrtMorrisComponent.prototype.editProduct = function (value) {
                    localStorage.setItem('pro', JSON.stringify(value));
                    this.router.navigate(['/products/product/addproducts']);
                };
                CrtMorrisComponent.prototype.deleteProduct = function (id) {
                    var _this = this;
                    this.addproductService.deleteProduct(id).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('delete successfully');
                    });
                };
                CrtMorrisComponent.prototype.getValue = function (value, isChecked) {
                    if (isChecked) {
                        this.checklist.push(value);
                    }
                    else {
                        var index = this.checklist.indexOf(value);
                        this.checklist.splice(index, 1);
                    }
                    console.log(this.checklist);
                };
                CrtMorrisComponent.prototype.exportToExcel = function (event) {
                    var _this = this;
                    console.log(this.checklist, 'check');
                    if (this.checklist.length == 0) {
                        this.Excel = [];
                        event.forEach(function (dat) {
                            var ItemCode = dat.itemCode;
                            var Description = dat.description;
                            var HSNCode = dat.hsnCode;
                            var Quantity = dat.quantity;
                            var vom = dat.vom;
                            var UnitRate = dat.unitRate;
                            var CGST = dat.CGST;
                            var SGST = dat.SGST;
                            var Total = dat.total;
                            var obj = Object.assign({ ItemCode: ItemCode, Description: Description, HSNCode: HSNCode, Quantity: Quantity, vom: vom, UnitRate: UnitRate, CGST: CGST, SGST: SGST, Total: Total });
                            _this.Excel.push(obj);
                        });
                        console.log(this.Excel, 'if');
                        this.excelService.exportAsExcelFile(this.Excel, 'persons');
                    }
                    else {
                        this.Excel = [];
                        this.checklist.forEach(function (dat) {
                            var ItemCode = dat.itemCode;
                            var Description = dat.description;
                            var HSNCode = dat.hsnCode;
                            var Quantity = dat.quantity;
                            var vom = dat.vom;
                            var UnitRate = dat.unitRate;
                            var CGST = dat.CGST;
                            var SGST = dat.SGST;
                            var Total = dat.total;
                            var obj = Object.assign({ ItemCode: ItemCode, Description: Description, HSNCode: HSNCode, Quantity: Quantity, vom: vom, UnitRate: UnitRate, CGST: CGST, SGST: SGST, Total: Total });
                            _this.Excel.push(obj);
                        });
                        console.log(this.Excel, 'else');
                        this.excelService.exportAsExcelFile(this.Excel, 'persons');
                    }
                };
                return CrtMorrisComponent;
            }());
            CrtMorrisComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _addproduct_service__WEBPACK_IMPORTED_MODULE_3__["AddproductService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
                { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_7__["ExcelService"] }
            ]; };
            CrtMorrisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-crt-morris',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crt-morris.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crt-morris.component.scss */ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.scss")).default]
                })
            ], CrtMorrisComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.module.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/demo/pages/core-chart/crt-morris/crt-morris.module.ts ***!
          \***********************************************************************/
        /*! exports provided: CrtMorrisModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrtMorrisModule", function () { return CrtMorrisModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _crt_morris_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crt-morris-routing.module */ "./src/app/demo/pages/core-chart/crt-morris/crt-morris-routing.module.ts");
            /* harmony import */ var _crt_morris_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crt-morris.component */ "./src/app/demo/pages/core-chart/crt-morris/crt-morris.component.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/demo/pages/core-chart/crt-morris/productdetails/productdetails.component.ts");
            var CrtMorrisModule = /** @class */ (function () {
                function CrtMorrisModule() {
                }
                return CrtMorrisModule;
            }());
            CrtMorrisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _crt_morris_routing_module__WEBPACK_IMPORTED_MODULE_4__["CrtMorrisRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
                    ],
                    declarations: [_crt_morris_component__WEBPACK_IMPORTED_MODULE_5__["CrtMorrisComponent"], _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_7__["ProductdetailsComponent"]]
                })
            ], CrtMorrisModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/core-chart/crt-morris/productdetails/productdetails.component.scss": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/demo/pages/core-chart/crt-morris/productdetails/productdetails.component.scss ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input {\n  padding: 10px;\n  background-color: white;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform input[type=date] {\n  color: gray; }\n\n.receiptaddform button {\n  color: white !important;\n  margin: 15% 0 0;\n  background-color: #65abe4;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.sub {\n  margin-left: 0px; }\n\n@media (max-width: 430px) {\n  .sub {\n    margin-left: -140px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9jb3JlLWNoYXJ0L2NydC1tb3JyaXMvcHJvZHVjdGRldGFpbHMvQzpcXFVzZXJzXFxCaGFyYW5lZWRoYXJhblxcRG93bmxvYWRzXFxXTVMtMVxcd21zIDE0LTEyL3NyY1xcYXBwXFxkZW1vXFxwYWdlc1xcY29yZS1jaGFydFxcY3J0LW1vcnJpc1xccHJvZHVjdGRldGFpbHNcXHByb2R1Y3RkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksU0FBUyxFQUFBOztBQUViO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFDdEM7RUFBdUIsZUFBZSxFQUFBOztBQUN0QztFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGNBQXNCO0VBRXRCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0EsV0FBVyxFQUFBOztBQUdYO0VBQ0ksdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZix5QkFBb0M7RUFDcEMsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwwQ0FBdUMsRUFBQTs7QUFHM0M7RUFBd0IsdUNBQXVDLEVBQUE7O0FBQy9EO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0s7SUFDSSxtQkFBbUIsRUFBQSxFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvY29yZS1jaGFydC9jcnQtbW9ycmlzL3Byb2R1Y3RkZXRhaWxzL3Byb2R1Y3RkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ucmVjZWlwdGFkZGZvcm17XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuOjpwbGFjZWhvbGRlcnsgb3BhY2l0eTogMC43O2NvbG9yOmdyYXk7IH1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0eyBmb250LXNpemU6IDEzcHg7IH1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwIDAgMyU7XHJcbiAgICBjb2xvcjogcmdiKDE0LCAxMywgMTMpO1xyXG4gICAgLy8gY29sb3I6IHJnYigyNDUsIDE0NiwgMTcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRThFOEU4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjEpOyBcclxufVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXRbdHlwZT1kYXRlXXtcclxuY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5yZWNlaXB0YWRkZm9ybSBidXR0b257XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTUlIDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDE3MSwgMjI4KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAzJTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEzLCAxMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNFOEU4RTg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMSk7IFxyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjEyLCAxMjQpO1xyXG59XHJcbi5yZWNlaXB0YWRkZm9ybSAuY2xlYXJ7IGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWwgIWltcG9ydGFudDsgfVxyXG4uc3Vie1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuQG1lZGlhICAobWF4LXdpZHRoOiA0MzBweCl7XHJcbiAgICAgLnN1YntcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNDBweDtcclxuICAgICB9XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/core-chart/crt-morris/productdetails/productdetails.component.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/demo/pages/core-chart/crt-morris/productdetails/productdetails.component.ts ***!
          \*********************************************************************************************/
        /*! exports provided: ProductdetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function () { return ProductdetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _addproduct_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addproduct.service */ "./src/app/demo/pages/core-chart/crt-morris/addproduct.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var ProductdetailsComponent = /** @class */ (function () {
                function ProductdetailsComponent(fb, addProductService, toster) {
                    var _this = this;
                    this.fb = fb;
                    this.addProductService = addProductService;
                    this.toster = toster;
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                        _this.Name = element.branchName;
                        _this.location = element.branchLocation;
                    });
                }
                ProductdetailsComponent.prototype.ngOnInit = function () {
                    this.addProductForm = this.fb.group({
                        _id: [''],
                        branchId: this.id,
                        branchName: this.Name,
                        branchLocation: this.location,
                        category: [''],
                        itemCode: [''],
                        idate: [''],
                        description: [''],
                        hsnCode: [''],
                        quantity: 1,
                        vom: [''],
                        unitRate: [0],
                        CGST: [''],
                        SGST: ['']
                    });
                    var local = localStorage.getItem('pro');
                    this.addProductForm.patchValue(JSON.parse(local));
                };
                ProductdetailsComponent.prototype.onSubmit = function (value) {
                    var _this = this;
                    if (value._id === '') {
                        this.addProductService.postProduct(value).subscribe(function (data) {
                            console.log(data);
                            _this.toster.success('added successfully');
                        });
                    }
                    else {
                        this.addProductService.putProduct(value).subscribe(function (data) {
                            console.log(data);
                            _this.toster.success('updated successfully');
                        });
                    }
                };
                return ProductdetailsComponent;
            }());
            ProductdetailsComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _addproduct_service__WEBPACK_IMPORTED_MODULE_3__["AddproductService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
            ]; };
            ProductdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-productdetails',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./productdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/core-chart/crt-morris/productdetails/productdetails.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./productdetails.component.scss */ "./src/app/demo/pages/core-chart/crt-morris/productdetails/productdetails.component.scss")).default]
                })
            ], ProductdetailsComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=crt-morris-crt-morris-module-es2015.js.map
//# sourceMappingURL=crt-morris-crt-morris-module-es5.js.map
//# sourceMappingURL=crt-morris-crt-morris-module-es5.js.map