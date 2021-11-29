(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["file-upload-file-upload-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/files/file-upload/file-upload.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/files/file-upload/file-upload.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-lg-12 text-right\">\n      <button type=\"button\" class=\"addbutton btn btn-outline-primary\" (click)=\"addforms()\"> \n        <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n      </button> \n    </div> \n    <div class=\"col-lg-12\">\n      <app-card cardTitle=\"Notes\" [options]=\"false\" blockClass=\"table-border-style\">\n        <div class=\"table-responsive table-container\" >  \n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">  \n            <thead>  \n              <tr> \n                <th>Date</th>  \n                <th>File Name</th>\n                <th>File</th>               \n                <th>Action</th> \n              </tr>  \n            </thead>  \n            <tbody>\n                <tr *ngFor=\"let data of getFile\">\n                    <td>{{data.date}}</td>\n                    <td>{{data.fileName}}</td>\n                    <td>  <a href = \"{{data.avatar}}\" target = 'blank'> download</a></td>\n                    <td> \n                      <button (click)='deleteFile(data._id)' style=\"background: none; border: none;\"> <i style=\"color: red;\" class=\"fa fa-trash\"> </i> </button>\n                    </td>\n                </tr>\n            </tbody>\n          </table> \n        </div>\n      </app-card>\n  \n    </div>\n  </div>\n\n ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/files/file-upload/fileform/fileform.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/files/file-upload/fileform/fileform.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" >\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Load Your File\" [options]=\"false\" blockClass=\"table-border-style\">\n            <form class=\"receiptaddform\" [formGroup]=\"form\" (ngSubmit)=\"submitForm(form.value)\">\n              <div class=\"row\">\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n    \n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Date:</label> <br>  \n                <input type=\"date\" class=\"form-control\" formControlName=\"date\"> \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\">File Name:</label> <br>  \n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter File Name\"  formControlName=\"fileName\"> \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Add-File:</label> <br>  \n                <input type=\"file\" class=\"form-control\"  (change)=\"uploadFile($event)\"> \n              </div>\n            </div>\n            <div class=\"row\"> \n              <div class=\"submit\">  <button type=\"submit\" > Submit </button>  </div>\n            </div>\n            </form>\n      </app-card>\n    </div>\n  </div>\n  \n ");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/files/file-upload/file-upload-routing.module.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/demo/pages/files/file-upload/file-upload-routing.module.ts ***!
          \****************************************************************************/
        /*! exports provided: FileRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileRoutingModule", function () { return FileRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-upload.component */ "./src/app/demo/pages/files/file-upload/file-upload.component.ts");
            /* harmony import */ var _file_upload_fileform_fileform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file-upload/fileform/fileform.component */ "./src/app/demo/pages/files/file-upload/fileform/fileform.component.ts");
            var routes = [
                {
                    path: '',
                    component: _file_upload_component__WEBPACK_IMPORTED_MODULE_3__["FileUploadComponent"]
                },
                {
                    path: 'load-file',
                    component: _file_upload_fileform_fileform_component__WEBPACK_IMPORTED_MODULE_4__["FileformComponent"]
                }
            ];
            var FileRoutingModule = /** @class */ (function () {
                function FileRoutingModule() {
                }
                return FileRoutingModule;
            }());
            FileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], FileRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/files/file-upload/file-upload.component.scss": 
        /*!*************************************************************************!*\
          !*** ./src/app/demo/pages/files/file-upload/file-upload.component.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvZmlsZXMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/files/file-upload/file-upload.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/demo/pages/files/file-upload/file-upload.component.ts ***!
          \***********************************************************************/
        /*! exports provided: FileUploadComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function () { return FileUploadComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file.service */ "./src/app/demo/pages/files/file-upload/file.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var FileUploadComponent = /** @class */ (function () {
                function FileUploadComponent(router, fileService, toster) {
                    this.router = router;
                    this.fileService = fileService;
                    this.toster = toster;
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    this.version = _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"];
                }
                FileUploadComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                    this.fileService.getUsers().subscribe(function (data) {
                        console.log(data);
                        _this.getdata = data;
                        _this.getFile = _this.getdata.users;
                        _this.dtTrigger.next();
                        // console.log(this.getdata.users,'userlist')
                    });
                };
                FileUploadComponent.prototype.addforms = function () {
                    this.router.navigate(['/files/file-upload/load-file']);
                };
                FileUploadComponent.prototype.addform = function (value) {
                    // localStorage.removeItem('setcash')
                    this.router.navigate(['/files/file-upload/load-file']);
                    // this.router.navigate(['adddetails']);
                };
                // editcashinhand(value)
                // {
                //   // localStorage.setItem('setcash',JSON.stringify(value));
                //   this.router.navigate(['/files/file-upload/load-file'])    
                // }
                FileUploadComponent.prototype.deleteFile = function (id) {
                    var _this = this;
                    this.fileService.deletefile(id).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('added successfully');
                    });
                };
                return FileUploadComponent;
            }());
            FileUploadComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _file_service__WEBPACK_IMPORTED_MODULE_3__["FileUploadService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
            ]; };
            FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-file-upload',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/files/file-upload/file-upload.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-upload.component.scss */ "./src/app/demo/pages/files/file-upload/file-upload.component.scss")).default]
                })
            ], FileUploadComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/files/file-upload/file-upload.module.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/demo/pages/files/file-upload/file-upload.module.ts ***!
          \********************************************************************/
        /*! exports provided: FileModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileModule", function () { return FileModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-upload-routing.module */ "./src/app/demo/pages/files/file-upload/file-upload-routing.module.ts");
            /* harmony import */ var _file_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-upload.component */ "./src/app/demo/pages/files/file-upload/file-upload.component.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _fileform_fileform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fileform/fileform.component */ "./src/app/demo/pages/files/file-upload/fileform/fileform.component.ts");
            // import { NoteformComponent } from "./noteform/noteform.component";
            var FileModule = /** @class */ (function () {
                function FileModule() {
                }
                return FileModule;
            }());
            FileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_file_upload_component__WEBPACK_IMPORTED_MODULE_5__["FileUploadComponent"], _fileform_fileform_component__WEBPACK_IMPORTED_MODULE_7__["FileformComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_4__["FileRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
                    ]
                })
            ], FileModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/files/file-upload/file.service.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/demo/pages/files/file-upload/file.service.ts ***!
          \**************************************************************/
        /*! exports provided: FileUploadService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function () { return FileUploadService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/enviromentURL */ "./src/environments/enviromentURL.ts");
            var FileUploadService = /** @class */ (function () {
                function FileUploadService(http) {
                    var _this = this;
                    this.http = http;
                    this.baseURL = _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl;
                    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                    });
                }
                // Get Users
                FileUploadService.prototype.getUsers = function () {
                    return this.http.get(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl + "/file");
                };
                // Create User
                FileUploadService.prototype.addUser = function (date, fileName, profileImage) {
                    var formData = new FormData();
                    formData.append("date", date);
                    formData.append("fileName", fileName);
                    // formData.append("branchId", branchId);
                    // formData.append("branchLocation", branchLocation);
                    // formData.append(" branchName",  branchName);
                    formData.append("avatar", profileImage);
                    console.log(formData, 'in service file');
                    return this.http.post(this.baseURL + "/file", formData, {
                        reportProgress: true,
                        observe: 'events'
                    });
                };
                // Error handling 
                FileUploadService.prototype.errorMgmt = function (error) {
                    var errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // Get client-side error
                        errorMessage = error.error.message;
                    }
                    else {
                        // Get server-side error
                        errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
                    }
                    console.log(errorMessage);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
                };
                FileUploadService.prototype.deletefile = function (id) {
                    return this.http.delete(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl + "/file" + '/' + id);
                };
                return FileUploadService;
            }());
            FileUploadService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            FileUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], FileUploadService);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/files/file-upload/fileform/fileform.component.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/demo/pages/files/file-upload/fileform/fileform.component.scss ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n:-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input {\n  background-color: white;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform input[type=date] {\n  padding: 2px;\n  color: #b3aeae;\n  padding-left: 8px; }\n\n.receiptaddform button {\n  color: white !important;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  background-color: #65abe4;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.submit button {\n  margin-bottom: 0% !important; }\n\n.submit {\n  color: white !important;\n  width: 20%;\n  margin-left: 40%;\n  margin-bottom: 0% !important;\n  background-color: #65abe4; }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.danger {\n  background-color: #8b4646 !important; }\n\n.receiptaddform select {\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform select option:first {\n  color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9maWxlcy9maWxlLXVwbG9hZC9maWxlZm9ybS9DOlxcVXNlcnNcXEJoYXJhbmVlZGhhcmFuXFxEb3dubG9hZHNcXFdNUy0xXFx3bXMgMTQtMTIvc3JjXFxhcHBcXGRlbW9cXHBhZ2VzXFxmaWxlc1xcZmlsZS11cGxvYWRcXGZpbGVmb3JtXFxmaWxlZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVMsRUFBQTs7QUFFYjtFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFDdEM7RUFBdUIsZUFBZSxFQUFBOztBQUN0QztFQUNJLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQXNCO0VBRXRCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRzdCO0VBQWtDLFlBQVk7RUFBQyxjQUF5QjtFQUFFLGlCQUFpQixFQUFBOztBQUUzRjtFQUNJLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQXNCO0VBRXRCLHlCQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwwQ0FBdUMsRUFBQTs7QUFHM0M7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIseUJBQW9DLEVBQUE7O0FBRXhDO0VBQXdCLHVDQUF1QyxFQUFBOztBQUMvRDtFQUFTLG9DQUE2QyxFQUFBOztBQUN0RDtFQUNJLGFBQWE7RUFFYixjQUFjO0VBQ2QsY0FBc0I7RUFFdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHekI7RUFDUSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL2ZpbGVzL2ZpbGUtdXBsb2FkL2ZpbGVmb3JtL2ZpbGVmb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2VpcHRhZGRmb3Jte1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbjo6cGxhY2Vob2xkZXJ7IG9wYWNpdHk6IDAuNztjb2xvcjpncmF5OyB9XHJcbi5yZWNlaXB0YWRkZm9ybSBpbnB1dHsgZm9udC1zaXplOiAxM3B4OyB9XHJcbi5yZWNlaXB0YWRkZm9ybSBpbnB1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMCAwIDMlO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMTMsIDEzKTtcclxuICAgIC8vIGNvbG9yOiByZ2IoMjQ1LCAxNDYsIDE3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U4RThFODtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTsgXHJcbn1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0W3R5cGU9ZGF0ZV17IHBhZGRpbmc6IDJweDtjb2xvcjogcmdiKDE3OSwgMTc0LCAxNzQpOyBwYWRkaW5nLWxlZnQ6IDhweDt9XHJcblxyXG4ucmVjZWlwdGFkZGZvcm0gYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMyU7XHJcbiAgICBjb2xvcjogcmdiKDE0LCAxMywgMTMpO1xyXG4gICAgLy8gbWFyZ2luOiAxNSUgMCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMTcxLCAyMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRThFOEU4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjEyLCAxMjQpO1xyXG59XHJcbi5zdWJtaXQgYnV0dG9ue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCUgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLnN1Ym1pdHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMTcxLCAyMjgpO1xyXG59XHJcbi5yZWNlaXB0YWRkZm9ybSAuY2xlYXJ7IGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWwgIWltcG9ydGFudDsgfVxyXG4uZGFuZ2VyeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCA3MCwgNzApICFpbXBvcnRhbnQ7IH1cclxuLnJlY2VpcHRhZGRmb3JtIHNlbGVjdHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCAwIDMlO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMTMsIDEzKTtcclxuICAgIC8vIGNvbG9yOiByZ2IoMjQ1LCAxNDYsIDE3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U4RThFODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlY2VpcHRhZGRmb3JtIHNlbGVjdCBvcHRpb246Zmlyc3Qge1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICB9XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/files/file-upload/fileform/fileform.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/demo/pages/files/file-upload/fileform/fileform.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: FileformComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileformComponent", function () { return FileformComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file.service */ "./src/app/demo/pages/files/file-upload/file.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var FileformComponent = /** @class */ (function () {
                function FileformComponent(http, fb, fileservice, router, toster) {
                    var _this = this;
                    this.http = http;
                    this.fb = fb;
                    this.fileservice = fileservice;
                    this.router = router;
                    this.toster = toster;
                    this.percentDone = 0;
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                        _this.Name = element.branchName;
                        _this.location = element.branchLocation;
                    });
                }
                FileformComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        branchId: this.id,
                        branchLocation: this.location,
                        branchName: this.Name,
                        date: [''],
                        fileName: [''],
                        avatar: [null]
                    });
                };
                FileformComponent.prototype.uploadFile = function (event) {
                    var _this = this;
                    var file = event.target.files[0];
                    this.form.patchValue({
                        avatar: file
                    });
                    this.form.get('avatar').updateValueAndValidity();
                    // File Preview
                    var reader = new FileReader();
                    reader.onload = function () {
                        _this.preview = reader.result;
                    };
                    reader.readAsDataURL(file);
                };
                FileformComponent.prototype.submitForm = function (value) {
                    var _this = this;
                    this.fileservice.addUser(
                    // this.form.value.branchId,
                    // this.form.value.branchLocation,
                    // this.form.value. branchName,
                    this.form.value.date, this.form.value.fileName, this.form.value.avatar).subscribe(function (event) {
                        switch (event.type) {
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Sent:
                                console.log('Request has been made!');
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].ResponseHeader:
                                console.log('Response header has been received!');
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                                _this.percentDone = Math.round(event.loaded / event.total * 100);
                                console.log("Uploaded! " + _this.percentDone + "%");
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                                console.log('User successfully created!', event.body);
                                _this.toster.success('added successfully');
                                _this.percentDone = false;
                                _this.router.navigate(['/files/file-upload']);
                        }
                    });
                };
                return FileformComponent;
            }());
            FileformComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _file_service__WEBPACK_IMPORTED_MODULE_4__["FileUploadService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
            ]; };
            FileformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-fileform',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fileform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/files/file-upload/fileform/fileform.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fileform.component.scss */ "./src/app/demo/pages/files/file-upload/fileform/fileform.component.scss")).default]
                })
            ], FileformComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=file-upload-file-upload-module-es2015.js.map
//# sourceMappingURL=file-upload-file-upload-module-es5.js.map
//# sourceMappingURL=file-upload-file-upload-module-es5.js.map