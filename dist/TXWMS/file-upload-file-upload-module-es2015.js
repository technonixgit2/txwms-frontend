(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["file-upload-file-upload-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/files/file-upload/file-upload.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/files/file-upload/file-upload.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-lg-12 text-right\">\n      <button type=\"button\" class=\"addbutton btn btn-outline-primary\" (click)=\"addforms()\"> \n        <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n      </button> \n    </div> \n    <div class=\"col-lg-12\">\n      <app-card cardTitle=\"Notes\" [options]=\"false\" blockClass=\"table-border-style\">\n        <div class=\"table-responsive table-container\" >  \n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">  \n            <thead>  \n              <tr> \n                <th>Date</th>  \n                <th>File Name</th>\n                <th>File</th>               \n                <th>Action</th> \n              </tr>  \n            </thead>  \n            <tbody>\n                <tr *ngFor=\"let data of getFile\">\n                    <td>{{data.date}}</td>\n                    <td>{{data.fileName}}</td>\n                    <td>  <a href = \"{{data.avatar}}\" target = 'blank'> download</a></td>\n                    <td> \n                      <button (click)='deleteFile(data._id)' style=\"background: none; border: none;\"> <i style=\"color: red;\" class=\"fa fa-trash\"> </i> </button>\n                    </td>\n                </tr>\n            </tbody>\n          </table> \n        </div>\n      </app-card>\n  \n    </div>\n  </div>\n\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/files/file-upload/fileform/fileform.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/files/file-upload/fileform/fileform.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" >\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Load Your File\" [options]=\"false\" blockClass=\"table-border-style\">\n            <form class=\"receiptaddform\" [formGroup]=\"form\" (ngSubmit)=\"submitForm(form.value)\">\n              <div class=\"row\">\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n                <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n    \n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Date:</label> <br>  \n                <input type=\"date\" class=\"form-control\" formControlName=\"date\"> \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\">File Name:</label> <br>  \n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter File Name\"  formControlName=\"fileName\"> \n              </div>\n              <div class=\"col-lg-6\"> <label for=\"itemcode\">Add-File:</label> <br>  \n                <input type=\"file\" class=\"form-control\"  (change)=\"uploadFile($event)\"> \n              </div>\n            </div>\n            <div class=\"row\"> \n              <div class=\"submit\">  <button type=\"submit\" > Submit </button>  </div>\n            </div>\n            </form>\n      </app-card>\n    </div>\n  </div>\n  \n ");

/***/ }),

/***/ "./src/app/demo/pages/files/file-upload/file-upload-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/files/file-upload/file-upload-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: FileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileRoutingModule", function() { return FileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-upload.component */ "./src/app/demo/pages/files/file-upload/file-upload.component.ts");
/* harmony import */ var _file_upload_fileform_fileform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file-upload/fileform/fileform.component */ "./src/app/demo/pages/files/file-upload/fileform/fileform.component.ts");





const routes = [
    {
        path: '',
        component: _file_upload_component__WEBPACK_IMPORTED_MODULE_3__["FileUploadComponent"]
    },
    {
        path: 'load-file',
        component: _file_upload_fileform_fileform_component__WEBPACK_IMPORTED_MODULE_4__["FileformComponent"]
    }
];
let FileRoutingModule = class FileRoutingModule {
};
FileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FileRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/files/file-upload/file-upload.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/demo/pages/files/file-upload/file-upload.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvZmlsZXMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/demo/pages/files/file-upload/file-upload.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/pages/files/file-upload/file-upload.component.ts ***!
  \***********************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file.service */ "./src/app/demo/pages/files/file-upload/file.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let FileUploadComponent = class FileUploadComponent {
    constructor(router, fileService, toster) {
        this.router = router;
        this.fileService = fileService;
        this.toster = toster;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.version = _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"];
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.fileService.getUsers().subscribe(data => {
            console.log(data);
            this.getdata = data;
            this.getFile = this.getdata.users;
            this.dtTrigger.next();
            // console.log(this.getdata.users,'userlist')
        });
    }
    addforms() {
        this.router.navigate(['/files/file-upload/load-file']);
    }
    addform(value) {
        // localStorage.removeItem('setcash')
        this.router.navigate(['/files/file-upload/load-file']);
        // this.router.navigate(['adddetails']);
    }
    // editcashinhand(value)
    // {
    //   // localStorage.setItem('setcash',JSON.stringify(value));
    //   this.router.navigate(['/files/file-upload/load-file'])    
    // }
    deleteFile(id) {
        this.fileService.deletefile(id).subscribe(data => {
            console.log(data);
            this.toster.success('added successfully');
        });
    }
};
FileUploadComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _file_service__WEBPACK_IMPORTED_MODULE_3__["FileUploadService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/files/file-upload/file-upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-upload.component.scss */ "./src/app/demo/pages/files/file-upload/file-upload.component.scss")).default]
    })
], FileUploadComponent);



/***/ }),

/***/ "./src/app/demo/pages/files/file-upload/file-upload.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/files/file-upload/file-upload.module.ts ***!
  \********************************************************************/
/*! exports provided: FileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileModule", function() { return FileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-upload-routing.module */ "./src/app/demo/pages/files/file-upload/file-upload-routing.module.ts");
/* harmony import */ var _file_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-upload.component */ "./src/app/demo/pages/files/file-upload/file-upload.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _fileform_fileform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fileform/fileform.component */ "./src/app/demo/pages/files/file-upload/fileform/fileform.component.ts");








// import { NoteformComponent } from "./noteform/noteform.component";
let FileModule = class FileModule {
};
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



/***/ }),

/***/ "./src/app/demo/pages/files/file-upload/file.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/pages/files/file-upload/file.service.ts ***!
  \**************************************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/enviromentURL */ "./src/environments/enviromentURL.ts");





let FileUploadService = class FileUploadService {
    constructor(http) {
        this.http = http;
        this.baseURL = _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        var us = JSON.parse(localStorage.getItem('user'));
        us.forEach(element => {
            this.id = element.branchId;
        });
    }
    // Get Users
    getUsers() {
        return this.http.get(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl}/file`);
    }
    // Create User
    addUser(date, fileName, profileImage) {
        var formData = new FormData();
        formData.append("date", date);
        formData.append("fileName", fileName);
        // formData.append("branchId", branchId);
        // formData.append("branchLocation", branchLocation);
        // formData.append(" branchName",  branchName);
        formData.append("avatar", profileImage);
        console.log(formData, 'in service file');
        return this.http.post(`${this.baseURL}/file`, formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    // Error handling 
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    deletefile(id) {
        return this.http.delete(`${_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl}/file` + '/' + id);
    }
};
FileUploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
FileUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FileUploadService);



/***/ }),

/***/ "./src/app/demo/pages/files/file-upload/fileform/fileform.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/pages/files/file-upload/fileform/fileform.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input {\n  background-color: white;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform input[type=date] {\n  padding: 2px;\n  color: #b3aeae;\n  padding-left: 8px; }\n\n.receiptaddform button {\n  color: white !important;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  background-color: #65abe4;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.submit button {\n  margin-bottom: 0% !important; }\n\n.submit {\n  color: white !important;\n  width: 20%;\n  margin-left: 40%;\n  margin-bottom: 0% !important;\n  background-color: #65abe4; }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.danger {\n  background-color: #8b4646 !important; }\n\n.receiptaddform select {\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform select option:first {\n  color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9maWxlcy9maWxlLXVwbG9hZC9maWxlZm9ybS9DOlxcVXNlcnNcXEJoYXJhbmVlZGhhcmFuXFxEb3dubG9hZHNcXFdNUy0xXFx3bXMgMTQtMTIvc3JjXFxhcHBcXGRlbW9cXHBhZ2VzXFxmaWxlc1xcZmlsZS11cGxvYWRcXGZpbGVmb3JtXFxmaWxlZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVMsRUFBQTs7QUFFYjtFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQ3RDO0VBQXVCLGVBQWUsRUFBQTs7QUFDdEM7RUFDSSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFzQjtFQUV0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUc3QjtFQUFrQyxZQUFZO0VBQUMsY0FBeUI7RUFBRSxpQkFBaUIsRUFBQTs7QUFFM0Y7RUFDSSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFzQjtFQUV0Qix5QkFBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsMENBQXVDLEVBQUE7O0FBRzNDO0VBQ0ksNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLHlCQUFvQyxFQUFBOztBQUV4QztFQUF3Qix1Q0FBdUMsRUFBQTs7QUFDL0Q7RUFBUyxvQ0FBNkMsRUFBQTs7QUFDdEQ7RUFDSSxhQUFhO0VBRWIsY0FBYztFQUNkLGNBQXNCO0VBRXRCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBR3pCO0VBQ1EsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9wYWdlcy9maWxlcy9maWxlLXVwbG9hZC9maWxlZm9ybS9maWxlZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNlaXB0YWRkZm9ybXtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG46OnBsYWNlaG9sZGVyeyBvcGFjaXR5OiAwLjc7Y29sb3I6Z3JheTsgfVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXR7IGZvbnQtc2l6ZTogMTNweDsgfVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAzJTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEzLCAxMyk7XHJcbiAgICAvLyBjb2xvcjogcmdiKDI0NSwgMTQ2LCAxNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNFOEU4RTg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMSk7IFxyXG59XHJcbi5yZWNlaXB0YWRkZm9ybSBpbnB1dFt0eXBlPWRhdGVdeyBwYWRkaW5nOiAycHg7Y29sb3I6IHJnYigxNzksIDE3NCwgMTc0KTsgcGFkZGluZy1sZWZ0OiA4cHg7fVxyXG5cclxuLnJlY2VpcHRhZGRmb3JtIGJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMCAwIDMlO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMTMsIDEzKTtcclxuICAgIC8vIG1hcmdpbjogMTUlIDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDE3MSwgMjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U4RThFODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIxMiwgMTI0KTtcclxufVxyXG4uc3VibWl0IGJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDAlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5zdWJtaXR7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDE3MSwgMjI4KTtcclxufVxyXG4ucmVjZWlwdGFkZGZvcm0gLmNsZWFyeyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsICFpbXBvcnRhbnQ7IH1cclxuLmRhbmdlcnsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgNzAsIDcwKSAhaW1wb3J0YW50OyB9XHJcbi5yZWNlaXB0YWRkZm9ybSBzZWxlY3R7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAgMCAzJTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEzLCAxMyk7XHJcbiAgICAvLyBjb2xvcjogcmdiKDI0NSwgMTQ2LCAxNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNFOEU4RTg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZWNlaXB0YWRkZm9ybSBzZWxlY3Qgb3B0aW9uOmZpcnN0IHtcclxuICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/demo/pages/files/file-upload/fileform/fileform.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/files/file-upload/fileform/fileform.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FileformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileformComponent", function() { return FileformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file.service */ "./src/app/demo/pages/files/file-upload/file.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");







let FileformComponent = class FileformComponent {
    constructor(http, fb, fileservice, router, toster) {
        this.http = http;
        this.fb = fb;
        this.fileservice = fileservice;
        this.router = router;
        this.toster = toster;
        this.percentDone = 0;
        var us = JSON.parse(localStorage.getItem('user'));
        us.forEach(element => {
            this.id = element.branchId;
            this.Name = element.branchName;
            this.location = element.branchLocation;
        });
    }
    ngOnInit() {
        this.form = this.fb.group({
            branchId: this.id,
            branchLocation: this.location,
            branchName: this.Name,
            date: [''],
            fileName: [''],
            avatar: [null]
        });
    }
    uploadFile(event) {
        const file = event.target.files[0];
        this.form.patchValue({
            avatar: file
        });
        this.form.get('avatar').updateValueAndValidity();
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.preview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    submitForm(value) {
        this.fileservice.addUser(
        // this.form.value.branchId,
        // this.form.value.branchLocation,
        // this.form.value. branchName,
        this.form.value.date, this.form.value.fileName, this.form.value.avatar).subscribe((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                    this.percentDone = Math.round(event.loaded / event.total * 100);
                    console.log(`Uploaded! ${this.percentDone}%`);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                    console.log('User successfully created!', event.body);
                    this.toster.success('added successfully');
                    this.percentDone = false;
                    this.router.navigate(['/files/file-upload']);
            }
        });
    }
};
FileformComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _file_service__WEBPACK_IMPORTED_MODULE_4__["FileUploadService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
FileformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fileform',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fileform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/files/file-upload/fileform/fileform.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fileform.component.scss */ "./src/app/demo/pages/files/file-upload/fileform/fileform.component.scss")).default]
    })
], FileformComponent);



/***/ })

}]);
//# sourceMappingURL=file-upload-file-upload-module-es2015.js.map