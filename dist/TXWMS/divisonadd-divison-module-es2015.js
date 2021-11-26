(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["divisonadd-divison-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/divisonadd/divisonadd.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/divisonadd/divisonadd.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xl-12 text-right\">\n        <button type=\"button\" class=\"addbutton btn btn-outline-primary\" (click)=\"editEx()\">\n        <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n        </button>\n    </div>\n    <div class=\"col-md-12\">\n        <app-card cardTitle=\"Division And Rack Details\" [options]=\"false\" blockClass=\"table-border-style\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped recrftable\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n                    <thead>\n                        <tr>\n\n                          <th>Division</th>\n                          <th>Rack</th>\n                         \n                          <th>Quantity</th>\n                          <th>Used</th>\n                          <th>Avalible</th>\n                          <th>percentage</th>\n                        </tr>\n                      </thead>\n                   \n                     \n                      <tbody>\n                        <tr *ngFor=\"let ex1 of final\">\n                          <td>{{ex1.division}}</td>\n                          <td>{{ex1.rack}}</td>\n                          <td>{{ex1.quantity}}</td>\n                          <td >{{ex1.used}}</td>\n                          <td  > {{ex1.avalible}}\n                           </td>\n                           <td  [ngClass]=\"{\n                            'positive':ex1.percentage > '50.00',\n                            'negative': ex1.percentage <'50.00',\n                            'full': ex1.percentage =='100.00',\n                            'empty': ex1.percentage =='0.00'\n\n                          }\">{{ex1.percentage}}%</td>\n                         \n                          <!-- <td>  <button (click)=\"editEx(ex1)\" style=\"border:none;background: none;\"> <i class=\"fa fa-edit\"></i> </button>\n                          <button (click)=\"delpc(ex1._id)\" style=\"border:none;background: none;\"> <i class=\"fa fa-trash\"></i> </button> </td> -->\n                        </tr>\n                      </tbody>\n                </table>\n            </div>\n        </app-card>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/divisonadd/divisonform/divisonform.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/divisonadd/divisonform/divisonform.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Creating Divison/Rack\" [options]=\"false\" blockClass=\"table-border-style\">\n        <form [formGroup]=\"addForm\" class=\"addreceiveform\" (ngSubmit)=\"postpc(addForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"_id\"> </div>\n\n            <div class=\"col-lg-6\">  <label for=\"pwd\">Division:</label>  <br>\n              <input type=\"text\" class=\"form-control\" placeholder=\"division\" formControlName=\"division\">\n\n            </div>\n            <div class=\"col-lg-6\">  <label for=\"pwd\">Rack:</label>  <br>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter rack\" formControlName=\"rack\">\n\n            </div>\n            <div class=\"col-lg-6\">  <label for=\"pwd\">Quantity:</label>  <br>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Quantity\" formControlName=\"quantity\">\n\n            </div>\n            <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"used\"> </div>\n            <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"avalible\"> </div>\n            <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"selected\"> </div>\n\n           \n           \n            <div class=\"col-lg-12 text-center padtop\">  <button class=\"btn btn-primary\" type=\"submit\"> Submit </button>  \n              <button type=\"reset\" class=\"btn btn-danger\"> Clear </button>  </div>\n          </div>\n\n\n        </form>\n      </app-card>\n    </div>\n\n  </div>\n");

/***/ }),

/***/ "./src/app/demo/pages/storage/divisonadd/divison.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/pages/storage/divisonadd/divison.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddDivisonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDivisonModule", function() { return AddDivisonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _divisonform_divisonform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./divisonform/divisonform.component */ "./src/app/demo/pages/storage/divisonadd/divisonform/divisonform.component.ts");
/* harmony import */ var _divisonadd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./divisonadd.component */ "./src/app/demo/pages/storage/divisonadd/divisonadd.component.ts");
/* harmony import */ var _divisonadd_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./divisonadd.routing.module */ "./src/app/demo/pages/storage/divisonadd/divisonadd.routing.module.ts");









let AddDivisonModule = class AddDivisonModule {
};
AddDivisonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _divisonadd_routing_module__WEBPACK_IMPORTED_MODULE_8__["AddDivisionRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(),
        ],
        declarations: [_divisonform_divisonform_component__WEBPACK_IMPORTED_MODULE_6__["DivisonformComponent"], _divisonadd_component__WEBPACK_IMPORTED_MODULE_7__["DivisonaddComponent"],]
    })
], AddDivisonModule);



/***/ }),

/***/ "./src/app/demo/pages/storage/divisonadd/divisonadd.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/demo/pages/storage/divisonadd/divisonadd.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".positive {\n  color: #942c0d !important;\n  font-weight: bolder; }\n\n.negative {\n  color: #4ce71d !important;\n  font-weight: bolder; }\n\n.full {\n  color: #eb0c0c !important;\n  font-weight: bolder; }\n\n.empty {\n  color: #c1d411 !important;\n  font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9zdG9yYWdlL2Rpdmlzb25hZGQvQzpcXFVzZXJzXFxCaGFyYW5lZWRoYXJhblxcRG93bmxvYWRzXFxXTVMtMVxcd21zIDE0LTEyL3NyY1xcYXBwXFxkZW1vXFxwYWdlc1xcc3RvcmFnZVxcZGl2aXNvbmFkZFxcZGl2aXNvbmFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFrQztFQUNsQyxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSx5QkFBa0M7RUFDbEMsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBQWtDO0VBQ2xDLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHlCQUFtQztFQUNuQyxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc3RvcmFnZS9kaXZpc29uYWRkL2Rpdmlzb25hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zaXRpdmV7XHJcbiAgICBjb2xvcjogcmdiKDE0OCwgNDQsIDEzKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbiAgLm5lZ2F0aXZle1xyXG4gICAgY29sb3I6IHJnYig3NiwgMjMxLCAyOSkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgXHJcbiAgfVxyXG4gIC5mdWxse1xyXG4gICAgY29sb3I6IHJnYigyMzUsIDEyLCAxMikgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgXHJcbiAgfVxyXG4gIC5lbXB0eXtcclxuICAgIGNvbG9yOiByZ2IoMTkzLCAyMTIsIDE3KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/demo/pages/storage/divisonadd/divisonadd.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/pages/storage/divisonadd/divisonadd.component.ts ***!
  \***********************************************************************/
/*! exports provided: DivisonaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisonaddComponent", function() { return DivisonaddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/demo/pages/storage/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");









let DivisonaddComponent = class DivisonaddComponent {
    constructor(http, router, storageService, toster, fb) {
        this.http = http;
        this.router = router;
        this.storageService = storageService;
        this.toster = toster;
        this.fb = fb;
        this.percent = [];
        this.final = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.storageService.getDivision().subscribe(data => {
            this.getdata = data;
            this.getdata.forEach(dat => {
                var abc = ((dat.used / dat.quantity) * 100).toFixed(2);
                console.log(this.abc, this.getdata, 'daaa');
                this.percent.push({ division: dat.division, avalible: dat.avalible, quantity: dat.quantity,
                    rack: dat.rack, selected: dat.selected, used: dat.used, percentage: abc
                });
            });
            this.final = this.percent;
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
    editEx() {
        // localStorage.setItem('divi',JSON.stringify(value))
        this.router.navigate(['/storage/createdivison/creatingdivision']);
    }
    // delpc(id){
    //   this.receivingservice.deleteProduct(id).subscribe(data=>{
    //     console.log(data)
    //   })
    // }
    addform() {
        this.router.navigate(['/storage/createdivison/creatingdivision']);
    }
};
DivisonaddComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
DivisonaddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-divisonadd',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./divisonadd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/divisonadd/divisonadd.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./divisonadd.component.scss */ "./src/app/demo/pages/storage/divisonadd/divisonadd.component.scss")).default]
    })
], DivisonaddComponent);



/***/ }),

/***/ "./src/app/demo/pages/storage/divisonadd/divisonadd.routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/storage/divisonadd/divisonadd.routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddDivisionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDivisionRoutingModule", function() { return AddDivisionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _divisonadd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divisonadd.component */ "./src/app/demo/pages/storage/divisonadd/divisonadd.component.ts");
/* harmony import */ var _divisonform_divisonform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./divisonform/divisonform.component */ "./src/app/demo/pages/storage/divisonadd/divisonform/divisonform.component.ts");





const routes = [
    {
        path: '',
        component: _divisonadd_component__WEBPACK_IMPORTED_MODULE_3__["DivisonaddComponent"]
    },
    {
        path: 'creatingdivision',
        component: _divisonform_divisonform_component__WEBPACK_IMPORTED_MODULE_4__["DivisonformComponent"]
    }
];
let AddDivisionRoutingModule = class AddDivisionRoutingModule {
};
AddDivisionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddDivisionRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/storage/divisonadd/divisonform/divisonform.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/storage/divisonadd/divisonform/divisonform.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc3RvcmFnZS9kaXZpc29uYWRkL2Rpdmlzb25mb3JtL2Rpdmlzb25mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/demo/pages/storage/divisonadd/divisonform/divisonform.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/demo/pages/storage/divisonadd/divisonform/divisonform.component.ts ***!
  \************************************************************************************/
/*! exports provided: DivisonformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisonformComponent", function() { return DivisonformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage.service */ "./src/app/demo/pages/storage/storage.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let DivisonformComponent = class DivisonformComponent {
    constructor(fb, router, storageservice, toster) {
        this.fb = fb;
        this.router = router;
        this.storageservice = storageservice;
        this.toster = toster;
    }
    ngOnInit() {
        this.addForm = this.fb.group({
            _id: [''],
            division: [''],
            rack: [''],
            quantity: [''],
            used: 0,
            avalible: [''],
            selected: false
        });
        var local = localStorage.getItem('divi');
        this.addForm.patchValue(JSON.parse(local));
    }
    postpc(value) {
        var quan = value.quantity;
        value.avalible = quan;
        if (value._id == '') {
            this.storageservice.postDivision(value).subscribe(data => {
                console.log(data, 'add');
                this.toster.success('added successfully');
            });
        }
        else {
            this.storageservice.putDivision(value).subscribe(data => {
                console.log(data);
                this.toster.success('edit successfully');
            });
        }
    }
};
DivisonformComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
DivisonformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-divisonform',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./divisonform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/divisonadd/divisonform/divisonform.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./divisonform.component.scss */ "./src/app/demo/pages/storage/divisonadd/divisonform/divisonform.component.scss")).default]
    })
], DivisonformComponent);



/***/ })

}]);
//# sourceMappingURL=divisonadd-divison-module-es2015.js.map