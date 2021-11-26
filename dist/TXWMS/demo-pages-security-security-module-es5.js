(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-security-security-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/security/secuform/secuform.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/security/secuform/secuform.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"d-flex justify-content-center\">\n    <!-- <h5 style=\"padding: 20px; color: black;font-size: 25px; font-weight: 600; \">Vehicle Details</h5> -->\n  </div>\n  <div class=\"container\">\n  <div class=\"row\">\n  \n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Vehicle Details\" [options]=\"false\" blockClass=\"table-border-style\">\n\n        <form class=\"gform\" [formGroup]='vechicleForm' (ngSubmit)='onSubmit(vechicleForm.value)'>\n  \n          <div class=\"row\">\n            <input hidden type=\"text\" formControlName='_id'>\n            <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n            <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n\n            <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n\n            <div class=\"col-lg-6\"> \n                <label for=\"inventorylabelno\">Date</label>  <br>\n                <input type=\"date\" class=\"form-control\" placeholder=\"Enter Date\" formControlName=\"date\"> \n              </div>\n            <div class=\"col-lg-6\"> \n              <label for=\"inventorylabelno\">Vehicle No</label>  <br>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Vechile No\" formControlName=\"vehicleNo\"> \n            </div>\n            <div class=\"col-lg-6\"> \n              <label for=\"inventorylabelno\">In Time </label>  <br>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Intime\" formControlName=\"time\"> \n            </div>\n            <div class=\"col-lg-6\"> \n              <label for=\"inventorylabelno\">Driver Name</label>  <br>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Driver Name\" formControlName=\"driverName\"> \n            </div>\n            <div class=\"col-lg-6\"> \n              <label for=\"workorderno\">Cleaner Name</label> <br>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Cleaner Name\" formControlName=\"cleanerName\"> \n            </div>\n            <div class=\"col-lg-6\"> \n              <label for=\"orderquantity\">Transporter</label> <br>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Transporter Nmae\" formControlName=\"transportationName\"> \n            </div>\n            <div class=\"col-lg-6\"> \n                <label for=\"orderquantity\">Mobile No</label> <br>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Mobile No\" formControlName=\"mobileNo\"> \n              </div>\n              <div class=\"col-lg-6\"> \n                <label for=\"orderquantity\">Transport Type</label> <br>\n                <select name=\"\" class=\"form-control\" placeholder=\"Enter Transport Type\" formControlName=\"type\">\n                  <option value=\"dispatch\">Dispatch</option>\n                  <option value=\"grn\">Un-Loading</option>\n                </select>\n                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Enter Transport Type\" formControlName=\"type\">  -->\n              </div>\n              <!-- <div class=\"col-lg-6\"> \n                <label for=\"orderquantity\">Mobile No</label> <br>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Mobile No\" formControlName=\"mobileNo\"> \n              </div> -->\n            <div class=\"col-lg-12\">\n            <div class=\"text-center padtop\" >\n              <button type=\"submit\" class=\"btn btn-primary\"  >Submit</button>\n            </div>\n          </div>\n          </div>\n        \n        </form>\n      </app-card>\n    </div>\n  </div>\n  \n  </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/security/security.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/security/security.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"row\">\n\n      <div class=\"col-lg-12 text-right\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)='addforms()'>\n          <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n        </button>\n      </div>\n        <div class=\"col-xl-12\">\n            <app-card cardTitle=\"Security Details\" [options]=\"false\" blockClass=\"table-border-style\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n                  <thead>\n                  <tr>\n                    <th> Date</th>\n                    <th>In Time</th>\n                    <th>Vehicle No</th>\n                    <th>Driver Name</th>\n                    <th>Mobile No</th>\n                    <th>Transport Name</th>\n                    <th>Transport type</th>\n                   \n                    <th>Action</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let datas of getvalue\">\n                      <td>{{datas.date}}</td>\n                      <td>{{datas.time}}</td>\n                      <td>{{datas.vehicleNo}}</td>\n                      <td>{{datas.driverName}}</td>\n                      <td>{{datas.mobileNo}}</td>\n                      <td>{{datas.transportationName}}</td>\n                      <td>{{datas.type}}</td>\n                      <td  ><button (click)='edit(datas)' style=\"border: none;background: none; color: #007bcf;\"><i class=\"fas fa-edit\"></i></button> &nbsp;&nbsp;\n                      <button  style=\"border: none; background: none; color: red;\" (click)='deleteOrder(datas._id)'> <i class=\"fas fa-trash\"></i>  </button> </td>\n                  </tr>\n                  </tbody>\n                </table>\n              </div>\n            </app-card>\n    \n        </div>\n    \n    </div>\n    ");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/security/secuform/secuform.component.scss": 
        /*!**********************************************************************!*\
          !*** ./src/app/demo/pages/security/secuform/secuform.component.scss ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc2VjdXJpdHkvc2VjdWZvcm0vc2VjdWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/security/secuform/secuform.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/demo/pages/security/secuform/secuform.component.ts ***!
          \********************************************************************/
        /*! exports provided: SecuformComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuformComponent", function () { return SecuformComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _tables_expense_expense_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tables/expense/expense.service */ "./src/app/demo/pages/tables/expense/expense.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            // import { NotifyService } from "../../services/notify.service";
            var SecuformComponent = /** @class */ (function () {
                function SecuformComponent(router, fb, security, route, toastr) {
                    var _this = this;
                    this.router = router;
                    this.fb = fb;
                    this.security = security;
                    this.route = route;
                    this.toastr = toastr;
                    //   this.route.paramMap.subscribe(params => {
                    //     this.params = params.get('userauth');
                    //   var ukg=  JSON.parse(localStorage.getItem('authdata')) 
                    //   this.branch=ukg.branchId
                    // });
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                        _this.Name = element.branchName;
                        _this.location = element.branchLocation;
                    });
                }
                SecuformComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.vechicleForm = this.fb.group({
                        _id: [''],
                        branchId: this.id,
                        branchName: this.Name,
                        branchLocation: this.location,
                        date: [''],
                        vehicleNo: [''],
                        time: [''],
                        driverName: [''],
                        cleanerName: [''],
                        transportationName: [''],
                        mobileNo: [''],
                        dlNo: [''],
                        type: [''],
                    });
                    this.route.paramMap.subscribe(function (params) {
                        _this.params = params.get('userauth');
                        _this.userid = params;
                        _this.key = _this.userid.params._id;
                        console.log(_this.userid.params._id, 'userdata');
                    });
                    // this.security.getsec(this.key).subscribe(params => {
                    //  this.getid=params
                    //  this.getid.forEach(element => {
                    //   this.update( element);
                    //  });
                    // });
                    this.sale = JSON.parse(localStorage.getItem('key'));
                    this.update(this.sale);
                };
                SecuformComponent.prototype.onSubmit = function (val) {
                    var _this = this;
                    if (val._id == '') {
                        this.security.postsecurity(val).subscribe(function (data) {
                            console.log(data, 'supmit');
                            _this.toastr.success('Added Successfully');
                            location.reload();
                            // this.notify.addCount()
                        });
                        // 
                    }
                    else {
                        this.security.editsecurity(val).subscribe(function (data) {
                            console.log(data, 'supmit');
                            _this.toastr.success('updated Successfully');
                            location.reload();
                        });
                    }
                };
                SecuformComponent.prototype.update = function (val) {
                    console.log(val, 'UPDATE');
                    this.vechicleForm.patchValue(val);
                };
                return SecuformComponent;
            }());
            SecuformComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _tables_expense_expense_service__WEBPACK_IMPORTED_MODULE_4__["ExpenseService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
            ]; };
            SecuformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-secuform',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./secuform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/security/secuform/secuform.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./secuform.component.scss */ "./src/app/demo/pages/security/secuform/secuform.component.scss")).default]
                })
            ], SecuformComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/security/security.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/demo/pages/security/security.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc2VjdXJpdHkvc2VjdXJpdHkuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/security/security.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/demo/pages/security/security.component.ts ***!
          \***********************************************************/
        /*! exports provided: SecurityComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityComponent", function () { return SecurityComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _tables_expense_expense_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tables/expense/expense.service */ "./src/app/demo/pages/tables/expense/expense.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            // import { secureService } from "./security.service";
            var SecurityComponent = /** @class */ (function () {
                function SecurityComponent(router, fb, toastr, security, route) {
                    var _this = this;
                    this.router = router;
                    this.fb = fb;
                    this.toastr = toastr;
                    this.security = security;
                    this.route = route;
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                        _this.Name = element.branchName;
                        _this.location = element.branchLocation;
                    });
                }
                SecurityComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // this.route.paramMap.subscribe(params => {
                    //   this.params = params.get('userauth');
                    // var ukg=  JSON.parse(localStorage.getItem('authdata')) 
                    // this.branch=ukg.branchId
                    // this.roll=ukg.role
                    // var  bid= this.branch
                    this.security.getsecurity().subscribe(function (data) {
                        _this.getvalue = data;
                        _this.dtTrigger.next();
                        console.log(data, 'unloading  ');
                    });
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                    // })
                };
                SecurityComponent.prototype.addforms = function () {
                    localStorage.removeItem('secu');
                    this.router.navigate(['security/securityform']);
                };
                SecurityComponent.prototype.edit = function (datas) {
                    console.log(datas, 'edit  ');
                    localStorage.setItem('secu', JSON.stringify(datas));
                    this.router.navigate(['security/securityform' + '/' + datas._id]);
                };
                SecurityComponent.prototype.deleteOrder = function (index) {
                    var _this = this;
                    this.security.deletesecurity(index).subscribe(function (data) {
                        _this.toastr.success('deleted Successfully');
                        location.reload();
                        console.log(data, 'unloading  ');
                    });
                };
                return SecurityComponent;
            }());
            SecurityComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
                { type: _tables_expense_expense_service__WEBPACK_IMPORTED_MODULE_5__["ExpenseService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            SecurityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-security',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./security.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/security/security.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./security.component.scss */ "./src/app/demo/pages/security/security.component.scss")).default]
                })
            ], SecurityComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/security/security.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/demo/pages/security/security.module.ts ***!
          \********************************************************/
        /*! exports provided: SecurityModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function () { return SecurityModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _security_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security.routing.module */ "./src/app/demo/pages/security/security.routing.module.ts");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security.service */ "./src/app/demo/pages/security/security.service.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _secuform_secuform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./secuform/secuform.component */ "./src/app/demo/pages/security/secuform/secuform.component.ts");
            /* harmony import */ var _security_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./security.component */ "./src/app/demo/pages/security/security.component.ts");
            var SecurityModule = /** @class */ (function () {
                function SecurityModule() {
                }
                return SecurityModule;
            }());
            SecurityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_secuform_secuform_component__WEBPACK_IMPORTED_MODULE_8__["SecuformComponent"], _security_component__WEBPACK_IMPORTED_MODULE_9__["SecurityComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _security_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecurityRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCollapseModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAccordionModule"],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    ],
                    providers: [_security_service__WEBPACK_IMPORTED_MODULE_6__["secureService"]],
                })
            ], SecurityModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/security/security.routing.module.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/demo/pages/security/security.routing.module.ts ***!
          \****************************************************************/
        /*! exports provided: SecurityRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRoutingModule", function () { return SecurityRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _secuform_secuform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secuform/secuform.component */ "./src/app/demo/pages/security/secuform/secuform.component.ts");
            /* harmony import */ var _security_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security.component */ "./src/app/demo/pages/security/security.component.ts");
            var routes = [
                {
                    path: '',
                    component: _security_component__WEBPACK_IMPORTED_MODULE_4__["SecurityComponent"]
                },
                {
                    path: 'securityform',
                    component: _secuform_secuform_component__WEBPACK_IMPORTED_MODULE_3__["SecuformComponent"]
                },
            ];
            var SecurityRoutingModule = /** @class */ (function () {
                function SecurityRoutingModule() {
                }
                return SecurityRoutingModule;
            }());
            SecurityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], SecurityRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/security/security.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/demo/pages/security/security.service.ts ***!
          \*********************************************************/
        /*! exports provided: secureService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secureService", function () { return secureService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/enviromentURL */ "./src/environments/enviromentURL.ts");
            var secureService = /** @class */ (function () {
                function secureService(http) {
                    var _this = this;
                    this.http = http;
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                    });
                }
                secureService.prototype.postsecurity = function (val) {
                    return this.http.post(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/security", val);
                };
                secureService.prototype.getsecurity = function (bid) {
                    return this.http.get(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/security" + '/' + bid);
                };
                secureService.prototype.getsec = function (val) {
                    return this.http.get(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/secu" + '/' + val);
                };
                secureService.prototype.getloading = function (bid, type) {
                    return this.http.get(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/security/" + bid + '/' + type);
                };
                secureService.prototype.deletesecurity = function (id) {
                    return this.http.delete(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/security" + '/' + id);
                };
                secureService.prototype.editsecurity = function (val) {
                    return this.http.put(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/security" + '/' + val._id, val);
                };
                return secureService;
            }());
            secureService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            secureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], secureService);
            /***/ 
        })
    }]);
//# sourceMappingURL=demo-pages-security-security-module-es2015.js.map
//# sourceMappingURL=demo-pages-security-security-module-es5.js.map
//# sourceMappingURL=demo-pages-security-security-module-es5.js.map