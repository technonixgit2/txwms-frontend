(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productreturn-productreturn-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/sales/productreturn/productreturn.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/sales/productreturn/productreturn.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n  <div class=\"col-lg-12 text-right\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)='returnform()'>\n      <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n    </button>\n  </div>\n    <div class=\"col-xl-12\">\n        <app-card cardTitle=\"Return Product Details\" [options]=\"false\" blockClass=\"table-border-style\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n              <thead>\n              <tr>\n                <th> Item Code </th>\n                <th> Description </th>\n                <th> Supplier Name </th>\n                <th> HSN Code </th>\n                <th> Quantity </th>\n                <th> UOM </th>\n                <th> Status </th>\n                <th> Action </th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor='let data of getProducts'>\n                  <td>{{data.itemCode}}</td>\n                  <td>{{data.description}} </td>\n                  <td> {{data.supplierName}} </td>\n                  <td> {{data.hsnCode}} </td>\n                  <td> {{data.returnproduct}} </td>\n                  <td> {{data.vom}} </td>\n                  <td> {{data.returnstatus}} </td>\n                  <td> <button style=\"border: none; background:none;\" (click)='editReturn(data)'> <i style=\"color: #007bff;\" class=\"fa fa-edit\"></i> </button> &nbsp;\n                    <button  style=\"border: none; background: none;\" (click)='deleteReturn(data._id)'><i style=\"color: red;\" class=\"fa fa-remove\"></i> </button> </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </app-card>\n\n    </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/sales/productreturn/returnproductform/returnproductform.component.html": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/sales/productreturn/returnproductform/returnproductform.component.html ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"row\">\n    <div class=\"col-lg-2\"></div>\n    <div class=\"col-lg-8\">\n\n      <div class=\"container\">\n        <h4 class=\"thhead\">Return Product Details</h4>\n        <form [formGroup]='returnForm' (ngSubmit)='onSubmit(returnForm.value)'>\n          <input type=\"hidden\" formControlName='_id'>\n          <div class=\"row form-group\">\n            <div class=\"col-lg-4\"> <label for=\"email\">Item Code:</label> </div>\n            <div class=\"col-lg-8\"> <input type=\"text\" class=\"form-control\" placeholder=\"Enter Product ID\" formControlName=\"itemCode\"> </div>\n          </div>\n          <div class=\"row form-group\">\n            <div class=\"col-lg-4\"> <label for=\"pwd\"> Description:</label> </div>\n            <div class=\"col-lg-8\"> <textarea type=\"text\" class=\"form-control\" placeholder=\"Enter Description\" formControlName=\"itemDescription\"></textarea> </div>\n          </div>\n          <div class=\"row form-group\">\n            <div class=\"col-lg-4\"> <label for=\"pwd\">Supplier Name:</label> </div>\n            <div class=\"col-lg-8\"> <input class=\"form-control\" placeholder=\"Enter Supplier Name\" formControlName=\"supplierName\"> </div>\n          </div>\n          <div class=\"row form-group\">\n            <div class=\"col-lg-4\"> <label for=\"pwd\"> HSN Code:</label> </div>\n            <div class=\"col-lg-8\"> <input type=\"text\" class=\"form-control\" placeholder=\"Enter HSN Code\" formControlName=\"hsnCode\"> </div>\n          </div>\n          <div class=\"row form-group\">\n            <div class=\"col-lg-4\"> <label for=\"pwd\">Quantity:</label> </div>\n            <div class=\"col-lg-8\">  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Quantity\" formControlName=\"quantity\"> </div>\n          </div>\n          <div class=\"row form-group\">\n            <div class=\"col-lg-4\"> <label for=\"pwd\">UOM:</label> </div>\n            <div class=\"col-lg-8\">  <input type=\"text\" class=\"form-control\" placeholder=\"Enter UOM\" formControlName=\"vom\"> </div>\n          </div>\n          <div class=\"row form-group\">\n            <div class=\"col-lg-4\"> <label for=\"pwd\">Status:</label> </div>\n            <div class=\"col-lg-8\">  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Status\" formControlName=\"returnstatus\"> </div>\n          </div>\n          <br>\n          <div class=\"text-center\">\n            <button type=\"reset\" class=\"btn btn-secondary\"> Clear </button>\n            <button type=\"submit\" class=\"btn btn-primary\"> Submit </button>\n          </div>\n        </form>\n      </div>\n\n    </div>\n  </div> -->\n\n<!-- ====== -->\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <app-card cardTitle=\"Return Product Details\" [options]=\"false\" blockClass=\"table-border-style\">\n      <form class=\"receiptaddform\" [formGroup]='returnForm' (ngSubmit)='onSubmit(returnForm.value)'>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"_id\"> </div>\n          <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n          <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n\n          <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n\n          <!-- <div class=\"col-lg-6\"> \n            <label for=\"text\">Branch-Id:</label>         \n            <input  type=\"text\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n             \n          </div>\n          <div class=\"col-lg-6\"> \n            <label for=\"text\">Branch-Name:</label>         \n            <input  type=\"text\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n             \n          </div>\n          <div class=\"col-lg-6\"> \n            <label for=\"text\">Branch-Location:</label>         \n            <input  type=\"text\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n          </div> -->\n          <div class=\"col-lg-6\"> <label for=\"pwd\">Supplier Name:</label><br> \n            <input class=\"form-control\" placeholder=\"Enter Supplier Name\" formControlName=\"supplierName\">\n            \n          </div>\n          <div class=\"col-lg-6\"> \n            <label for=\"email\">Item Code:</label>           \n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Item Code\" formControlName=\"itemCode\">\n             \n          </div>\n         \n          <div class=\"col-lg-6\"> <label for=\"pwd\">Description:</label> <br>  \n            <input type=\"text\" class=\"form-control\" formControlName='description'placeholder=\"Enter the description\">\n              \n          </div>\n          <div class=\"col-lg-6\">  <label for=\"pwd\">HSN Code:</label>  <br> \n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter HSN Code\" formControlName=\"hsnCode\">\n            \n          </div>\n          <div class=\"col-lg-6\"> <label for=\"pwd\">Quantity:</label>  <br> \n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Quantity\" formControlName=\"returnproduct\">\n             \n          </div>\n         \n          <div class=\"col-lg-6\"> <label for=\"uom\">UOM:</label> <br> \n            <input type=\"text\" class=\"form-control\" id=\"invoiceno\" placeholder=\"Enter UOM\" formControlName=\"vom\">\n            \n          </div>\n         \n          <div class=\"col-lg-6\"> <label for=\"pwd\">Status:</label> <br> \n            <!-- <select name=\"status\" id=\"status\" class=\"form-control\" formControlName=\"returnstatus\">\n              <option value=\"yes\">Returned</option>\n              <option value=\"no\">Not-Returned</option>\n            </select> -->\n            <select  id=\"inputGroupSelect01\" formControlName='returnstatus'>\n              <option  value=\"\" disabled selected>Select Option</option>\n              <option value=\"Returned\">Returned</option>\n              <option value=\"Not-Returned\">Not-Returned</option>\n             </select>\n            \n          </div>\n         \n        </div>\n        <div class=\"row subres\">\n          <div class=\"col-lg-3\">  <button type=\"submit\"> Submit </button>  </div>\n          <div class=\"col-lg-3\">  <button type=\"reset\" class=\"clear\"> Clear </button>  </div>\n\n        </div>\n      </form>\n    </app-card>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/sales/productreturn/productreturn-routing.module.ts": 
        /*!********************************************************************************!*\
          !*** ./src/app/demo/pages/sales/productreturn/productreturn-routing.module.ts ***!
          \********************************************************************************/
        /*! exports provided: ProductreturnRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductreturnRoutingModule", function () { return ProductreturnRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _productreturn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productreturn.component */ "./src/app/demo/pages/sales/productreturn/productreturn.component.ts");
            /* harmony import */ var _returnproductform_returnproductform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./returnproductform/returnproductform.component */ "./src/app/demo/pages/sales/productreturn/returnproductform/returnproductform.component.ts");
            var routes = [
                {
                    path: '',
                    component: _productreturn_component__WEBPACK_IMPORTED_MODULE_3__["ProductreturnComponent"]
                },
                {
                    path: 'returnform',
                    component: _returnproductform_returnproductform_component__WEBPACK_IMPORTED_MODULE_4__["ReturnproductformComponent"]
                }
            ];
            var ProductreturnRoutingModule = /** @class */ (function () {
                function ProductreturnRoutingModule() {
                }
                return ProductreturnRoutingModule;
            }());
            ProductreturnRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ProductreturnRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/sales/productreturn/productreturn.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/demo/pages/sales/productreturn/productreturn.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc2FsZXMvcHJvZHVjdHJldHVybi9wcm9kdWN0cmV0dXJuLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/sales/productreturn/productreturn.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/demo/pages/sales/productreturn/productreturn.component.ts ***!
          \***************************************************************************/
        /*! exports provided: ProductreturnComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductreturnComponent", function () { return ProductreturnComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _returnproducts_return_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../returnproducts/return.service */ "./src/app/demo/pages/sales/returnproducts/return.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var ProductreturnComponent = /** @class */ (function () {
                function ProductreturnComponent(router, returnService, toster) {
                    this.router = router;
                    this.returnService = returnService;
                    this.toster = toster;
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                }
                ProductreturnComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.returnService.getReturn().subscribe(function (data) {
                        _this.getProducts = data;
                        _this.dtTrigger.next();
                    });
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                };
                ProductreturnComponent.prototype.ngOnDestroy = function () {
                    // Do not forget to unsubscribe the event
                    this.dtTrigger.unsubscribe();
                };
                ProductreturnComponent.prototype.returnform = function () {
                    localStorage.removeItem('return');
                    this.router.navigate(['/saless/return/returnform']);
                };
                ProductreturnComponent.prototype.editReturn = function (value) {
                    localStorage.setItem('return', JSON.stringify(value));
                    this.router.navigate(['/saless/return/returnform']);
                };
                ProductreturnComponent.prototype.deleteReturn = function (id) {
                    var _this = this;
                    this.returnService.deleteReturn(id).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('deleted successfully');
                    });
                };
                return ProductreturnComponent;
            }());
            ProductreturnComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _returnproducts_return_service__WEBPACK_IMPORTED_MODULE_3__["ReturnService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
            ]; };
            ProductreturnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-productreturn',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./productreturn.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/sales/productreturn/productreturn.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./productreturn.component.scss */ "./src/app/demo/pages/sales/productreturn/productreturn.component.scss")).default]
                })
            ], ProductreturnComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/sales/productreturn/productreturn.module.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/demo/pages/sales/productreturn/productreturn.module.ts ***!
          \************************************************************************/
        /*! exports provided: ProductreturnModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductreturnModule", function () { return ProductreturnModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _productreturn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productreturn.component */ "./src/app/demo/pages/sales/productreturn/productreturn.component.ts");
            /* harmony import */ var _productreturn_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productreturn-routing.module */ "./src/app/demo/pages/sales/productreturn/productreturn-routing.module.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _returnproductform_returnproductform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./returnproductform/returnproductform.component */ "./src/app/demo/pages/sales/productreturn/returnproductform/returnproductform.component.ts");
            var ProductreturnModule = /** @class */ (function () {
                function ProductreturnModule() {
                }
                return ProductreturnModule;
            }());
            ProductreturnModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_productreturn_component__WEBPACK_IMPORTED_MODULE_4__["ProductreturnComponent"], _returnproductform_returnproductform_component__WEBPACK_IMPORTED_MODULE_7__["ReturnproductformComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        _productreturn_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductreturnRoutingModule"],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
                    ]
                })
            ], ProductreturnModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/sales/productreturn/returnproductform/returnproductform.component.scss": 
        /*!***************************************************************************************************!*\
          !*** ./src/app/demo/pages/sales/productreturn/returnproductform/returnproductform.component.scss ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n:-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input {\n  padding: 10px;\n  background-color: white;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform input[type=date] {\n  color: gray; }\n\n.receiptaddform select {\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform select option:first {\n  color: #999; }\n\n.receiptaddform button {\n  color: white !important;\n  margin: 15% 0 0;\n  background-color: #65abe4;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.subres {\n  margin-left: 30%;\n  margin-top: 2%; }\n\nselect:required:invalid {\n  color: gray; }\n\noption {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9zYWxlcy9wcm9kdWN0cmV0dXJuL3JldHVybnByb2R1Y3Rmb3JtL0M6XFxVc2Vyc1xcQmhhcmFuZWVkaGFyYW5cXERvd25sb2Fkc1xcV01TLTFcXHdtcyAxNC0xMi9zcmNcXGFwcFxcZGVtb1xccGFnZXNcXHNhbGVzXFxwcm9kdWN0cmV0dXJuXFxyZXR1cm5wcm9kdWN0Zm9ybVxccmV0dXJucHJvZHVjdGZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFTLEVBQUE7O0FBRWI7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQ3RDO0VBQXVCLGVBQWUsRUFBQTs7QUFDdEM7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxjQUFzQjtFQUV0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUc3QjtFQUNBLFdBQVcsRUFBQTs7QUFFWDtFQUNJLGFBQWE7RUFFYixjQUFjO0VBQ2QsY0FBc0I7RUFFdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHekI7RUFDUSxXQUFXLEVBQUE7O0FBR3ZCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZix5QkFBb0M7RUFDcEMsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwwQ0FBdUMsRUFBQTs7QUFHM0M7RUFBd0IsdUNBQXVDLEVBQUE7O0FBQy9EO0VBQVMsZ0JBQWdCO0VBQ3pCLGNBQWMsRUFBQTs7QUFDZDtFQUEyQixXQUFXLEVBQUE7O0FBQ3RDO0VBQVUsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9wYWdlcy9zYWxlcy9wcm9kdWN0cmV0dXJuL3JldHVybnByb2R1Y3Rmb3JtL3JldHVybnByb2R1Y3Rmb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2VpcHRhZGRmb3Jte1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbjo6cGxhY2Vob2xkZXJ7IG9wYWNpdHk6IDAuNztjb2xvcjpncmF5OyB9XHJcbi5yZWNlaXB0YWRkZm9ybSBpbnB1dHsgZm9udC1zaXplOiAxM3B4OyB9XHJcbi5yZWNlaXB0YWRkZm9ybSBpbnB1dHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCAwIDMlO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMTMsIDEzKTtcclxuICAgIC8vIGNvbG9yOiByZ2IoMjQ1LCAxNDYsIDE3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U4RThFODtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTsgXHJcbn1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0W3R5cGU9ZGF0ZV17XHJcbmNvbG9yOiBncmF5O1xyXG59XHJcbi5yZWNlaXB0YWRkZm9ybSBzZWxlY3R7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAgMCAzJTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEzLCAxMyk7XHJcbiAgICAvLyBjb2xvcjogcmdiKDI0NSwgMTQ2LCAxNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNFOEU4RTg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZWNlaXB0YWRkZm9ybSBzZWxlY3Qgb3B0aW9uOmZpcnN0IHtcclxuICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgfVxyXG5cclxuLnJlY2VpcHRhZGRmb3JtIGJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxNSUgMCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMTcxLCAyMjgpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMCAwIDMlO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMTMsIDEzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U4RThFODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTsgXHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMTIsIDEyNCk7XHJcbn1cclxuLnJlY2VpcHRhZGRmb3JtIC5jbGVhcnsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbCAhaW1wb3J0YW50OyB9XHJcbi5zdWJyZXN7IG1hcmdpbi1sZWZ0OiAzMCU7XHJcbm1hcmdpbi10b3A6IDIlOyB9XHJcbnNlbGVjdDpyZXF1aXJlZDppbnZhbGlkIHsgIGNvbG9yOiBncmF5OyAgfVxyXG5vcHRpb24geyAgY29sb3I6IGJsYWNrOyAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/sales/productreturn/returnproductform/returnproductform.component.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/demo/pages/sales/productreturn/returnproductform/returnproductform.component.ts ***!
          \*************************************************************************************************/
        /*! exports provided: ReturnproductformComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnproductformComponent", function () { return ReturnproductformComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _returnproducts_return_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../returnproducts/return.service */ "./src/app/demo/pages/sales/returnproducts/return.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var ReturnproductformComponent = /** @class */ (function () {
                function ReturnproductformComponent(fb, returnService, toster) {
                    var _this = this;
                    this.fb = fb;
                    this.returnService = returnService;
                    this.toster = toster;
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                        _this.Name = element.branchName;
                        _this.location = element.branchLocation;
                    });
                }
                ReturnproductformComponent.prototype.ngOnInit = function () {
                    this.returnForm = this.fb.group({
                        _id: [''],
                        branchId: this.id,
                        branchName: this.Name,
                        branchLocation: this.location,
                        itemCode: [''],
                        description: [''],
                        supplierName: [''],
                        hsnCode: [''],
                        returnproduct: [''],
                        vom: [''],
                        returnstatus: ['']
                    });
                    var local = localStorage.getItem('return');
                    this.returnForm.patchValue(JSON.parse(local));
                };
                ReturnproductformComponent.prototype.onSubmit = function (value) {
                    var _this = this;
                    if (value._id === '') {
                        this.returnService.postReturn(value).subscribe(function (data) {
                            console.log(data);
                            _this.toster.success('added successfully');
                        });
                    }
                    else
                        this.returnService.putReturn(value).subscribe(function (data) {
                            console.log(data);
                            _this.toster.success('updated successfully');
                        });
                };
                return ReturnproductformComponent;
            }());
            ReturnproductformComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _returnproducts_return_service__WEBPACK_IMPORTED_MODULE_3__["ReturnService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
            ]; };
            ReturnproductformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-returnproductform',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./returnproductform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/sales/productreturn/returnproductform/returnproductform.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./returnproductform.component.scss */ "./src/app/demo/pages/sales/productreturn/returnproductform/returnproductform.component.scss")).default]
                })
            ], ReturnproductformComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=productreturn-productreturn-module-es2015.js.map
//# sourceMappingURL=productreturn-productreturn-module-es5.js.map
//# sourceMappingURL=productreturn-productreturn-module-es5.js.map