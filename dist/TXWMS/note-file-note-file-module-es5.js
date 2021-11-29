(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["note-file-note-file-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/notes/note-file/note-file.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/notes/note-file/note-file.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xl-12 text-right\">\n      <button type=\"button\" class=\" btn btn-outline-primary\" (click)=\"addforms()\"> \n        <i class=\"fa fa-plus\" ></i>\n      </button> \n    </div> \n    <div class=\"col-lg-12\">\n      <app-card cardTitle=\"Notes\" [options]=\"false\" blockClass=\"table-border-style\">\n        <ul>\n          <li *ngFor = \"let data of temp\">\n            <a>\n              <h2> {{data.createdBy}} \n                <button (click)=\"editnote(data)\"> <i class=\"fa fa-edit\"></i> </button> &nbsp;&nbsp;&nbsp;&nbsp; \n                <button (click)=\"delnote(data._id)\"> <i class=\"fa fa-trash\"></i> </button> \n              </h2>\n              <p>{{data.description}}</p>\n              <div class=\"date text-right\">\n                <span>{{data.date}}</span>\n              </div>\n            </a>\n          </li>\n        </ul>\n      </app-card>\n  \n    </div>\n  </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/notes/note-file/noteform/noteform.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/notes/note-file/noteform/noteform.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("  \n\n  <div class=\"row\" >\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Add-Note\" [options]=\"false\" blockClass=\"table-border-style\">\n        <form class=\"receiptaddform\"[formGroup] = \"notesform\" (ngSubmit) = \"onsubmit(notesform.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"_id\"> </div>\n            <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n            <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n            <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n\n            <div class=\"col-lg-6\"> \n              <label for=\"\"> Date </label> <br> <br>  \n              <input type=\"date\" class=\"form-control\" placeholder=\"Enter date\" formControlName=\"date\" >\n              \n            </div>\n            <div class=\"col-lg-6\"> <label for=\"\">Created by</label> <br> <br>  \n              <input type=\"text\" class=\"form-control\"  placeholder=\"Enter created by\" formControlName=\"createdBy\"> \n              \n            </div>\n            <div class=\"col-lg-6\"> <label for=\"\">Description</label> <br> <br>  \n              <input type=\"text\" class=\"form-control\"  placeholder=\"Enter Description\" formControlName=\"description\"> \n            </div>\n        </div>\n      <div class=\"row sub\"> \n      <div class=\"submit\"  >  <button type=\"submit\" > Submit </button>  </div>\n    </div>\n  \n        </form>\n      </app-card>\n    </div>\n  </div>\n  \n");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/notes/note-file/note-file-routing.module.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/demo/pages/notes/note-file/note-file-routing.module.ts ***!
          \************************************************************************/
        /*! exports provided: NotefileRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotefileRoutingModule", function () { return NotefileRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _note_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note-file.component */ "./src/app/demo/pages/notes/note-file/note-file.component.ts");
            /* harmony import */ var _noteform_noteform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noteform/noteform.component */ "./src/app/demo/pages/notes/note-file/noteform/noteform.component.ts");
            var routes = [
                {
                    path: '',
                    component: _note_file_component__WEBPACK_IMPORTED_MODULE_3__["NoteFileComponent"]
                },
                {
                    path: 'noteform',
                    component: _noteform_noteform_component__WEBPACK_IMPORTED_MODULE_4__["NoteformComponent"]
                }
            ];
            var NotefileRoutingModule = /** @class */ (function () {
                function NotefileRoutingModule() {
                }
                return NotefileRoutingModule;
            }());
            NotefileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], NotefileRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/notes/note-file/note-file.component.scss": 
        /*!*********************************************************************!*\
          !*** ./src/app/demo/pages/notes/note-file/note-file.component.scss ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: arial,sans-serif;\n  font-size: 140%;\n  margin: 1em;\n  background: #666;\n  color: #fff; }\n\nh2, p {\n  font-size: 80%;\n  font-weight: normal; }\n\nul, li {\n  list-style: none; }\n\nul {\n  overflow: hidden;\n  padding: 15px 2em; }\n\nul li {\n  width: 270px; }\n\nul li a {\n  text-decoration: none;\n  color: #000;\n  background: white;\n  display: block;\n  height: 10em;\n  width: 250px;\n  padding: 1em;\n  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);\n  -moz-transition: -moz-transform .15s linear;\n  -o-transition: -o-transform .15s linear;\n  -webkit-transition: -webkit-transform .15s linear; }\n\nul li {\n  margin: 1em;\n  float: left; }\n\nul li h2 {\n  font-size: 100%;\n  font-weight: bold;\n  padding-bottom: 10px; }\n\nul li h2 button {\n  float: right;\n  background: none;\n  border: none;\n  margin: 0 5px; }\n\nul li h2 button i {\n  font-size: 12px; }\n\nul li p {\n  font-family: \"Reenie Beanie\",arial,sans-serif;\n  font-size: 100%; }\n\nul li a {\n  -webkit-transform: rotate(-6deg);\n  -o-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg); }\n\nul li a:hover, ul li a:focus {\n  box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);\n  -moz-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);\n  -webkit-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);\n  -webkit-transform: scale(1.25);\n  -moz-transform: scale(1.25);\n  -o-transform: scale(1.25);\n  position: relative;\n  z-index: 5; }\n\nol {\n  text-align: center; }\n\nol li {\n  display: inline;\n  padding-right: 1em; }\n\nol li a {\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9ub3Rlcy9ub3RlLWZpbGUvQzpcXFVzZXJzXFxCaGFyYW5lZWRoYXJhblxcRG93bmxvYWRzXFxXTVMtMVxcd21zIDE0LTEyL3NyY1xcYXBwXFxkZW1vXFxwYWdlc1xcbm90ZXNcXG5vdGUtZmlsZVxcbm90ZS1maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdFO0VBQ0UsNkJBQTRCO0VBQzVCLGVBQWM7RUFDZCxXQUFVO0VBQ1YsZ0JBQWU7RUFDZixXQUFVLEVBQUE7O0FBRVo7RUFDRSxjQUFhO0VBQ2IsbUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0JBQWUsRUFBQTs7QUFFakI7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQixFQUFBOztBQUVsQjtFQUFPLFlBQVksRUFBQTs7QUFDbkI7RUFDRSxxQkFBb0I7RUFDcEIsV0FBVTtFQUNWLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2IsWUFBVztFQUNYLFlBQVc7RUFDWCxZQUFXO0VBR1gsNkNBQXlDO0VBQ3pDLDJDQUEwQztFQUMxQyx1Q0FBc0M7RUFDdEMsaURBQWdELEVBQUE7O0FBRWxEO0VBQ0UsV0FBVTtFQUNWLFdBQVUsRUFBQTs7QUFFWjtFQUNFLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUVmO0VBQW1CLGVBQWUsRUFBQTs7QUFDbEM7RUFDRSw2Q0FBNEM7RUFDNUMsZUFBYyxFQUFBOztBQUVoQjtFQUNFLGdDQUFnQztFQUNoQywyQkFBMkI7RUFDM0IsNkJBQTRCLEVBQUE7O0FBVTlCO0VBQ0UsNENBQXVDO0VBQ3ZDLGlEQUE0QztFQUM1QyxvREFBZ0Q7RUFDaEQsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsa0JBQWlCO0VBQ2pCLFVBQVMsRUFBQTs7QUFFWDtFQUFHLGtCQUFpQixFQUFBOztBQUNwQjtFQUFNLGVBQWM7RUFBQyxrQkFBaUIsRUFBQTs7QUFDdEM7RUFBUSxXQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL25vdGVzL25vdGUtZmlsZS9ub3RlLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1bCBsaSBoMiBidXR0b257IFxyXG4vLyAgIGZsb2F0OiByaWdodDtcclxuLy8gICBiYWNrZ3JvdW5kOiBub25lO1xyXG4vLyAgIGJvcmRlcjogbm9uZTtcclxuLy8gICBtYXJnaW46IDAgNXB4O1xyXG4vLyB9XHJcbi8vIHVsIGxpIGgyIGJ1dHRvbiBpeyBmb250LXNpemU6IDEycHg7IH1cclxuXHJcblxyXG5cclxuXHJcbiAgYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OmFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MTQwJTtcclxuICAgIG1hcmdpbjoxZW07XHJcbiAgICBiYWNrZ3JvdW5kOiM2NjY7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICBoMixwe1xyXG4gICAgZm9udC1zaXplOjgwJTtcclxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICB9XHJcbiAgdWwsbGl7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgfVxyXG4gIHVse1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgcGFkZGluZzoxNXB4IDJlbTtcclxuICB9XHJcbiAgdWwgbGl7IHdpZHRoOiAyNzBweDt9XHJcbiAgdWwgbGkgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgY29sb3I6IzAwMDtcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgaGVpZ2h0OjEwZW07XHJcbiAgICB3aWR0aDoyNTBweDtcclxuICAgIHBhZGRpbmc6MWVtO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OjVweCA1cHggN3B4IHJnYmEoMzMsMzMsMzMsMSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggN3B4IHJnYmEoMzMsMzMsMzMsLjcpO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA3cHggcmdiYSgzMywzMywzMywuNyk7XHJcbiAgICAtbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gLjE1cyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAuMTVzIGxpbmVhcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMTVzIGxpbmVhcjtcclxuICB9XHJcbiAgdWwgbGl7XHJcbiAgICBtYXJnaW46MWVtO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICB9XHJcbiAgdWwgbGkgaDJ7XHJcbiAgICBmb250LXNpemU6MTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gIH1cclxuICB1bCBsaSBoMiBidXR0b257IFxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgfVxyXG4gIHVsIGxpIGgyIGJ1dHRvbiBpeyBmb250LXNpemU6IDEycHg7IH1cclxuICB1bCBsaSBwe1xyXG4gICAgZm9udC1mYW1pbHk6XCJSZWVuaWUgQmVhbmllXCIsYXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxMDAlO1xyXG4gIH1cclxuICB1bCBsaSBhe1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpyb3RhdGUoLTZkZWcpO1xyXG4gIH1cclxuICAvLyB1bCBsaSBhe1xyXG4gIC8vICAgLW8tdHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKTtcclxuICAvLyAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKTtcclxuICAvLyAgIC1tb3otdHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKTtcclxuICAvLyAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIC8vICAgdG9wOi0xMHB4O1xyXG4gIC8vIH1cclxuICBcclxuICB1bCBsaSBhOmhvdmVyLHVsIGxpIGE6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OjEwcHggMTBweCA3cHggcmdiYSgwLDAsMCwuNyk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6MTBweCAxMHB4IDdweCByZ2JhKDAsMCwwLC43KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDdweCByZ2JhKDAsMCwwLC43KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6NTtcclxuICB9XHJcbiAgb2x7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4gIG9sIGxpe2Rpc3BsYXk6aW5saW5lO3BhZGRpbmctcmlnaHQ6MWVtO31cclxuICBvbCBsaSBhe2NvbG9yOiNmZmY7fVxyXG4gICJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/notes/note-file/note-file.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/demo/pages/notes/note-file/note-file.component.ts ***!
          \*******************************************************************/
        /*! exports provided: NoteFileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteFileComponent", function () { return NoteFileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notes.service */ "./src/app/demo/pages/notes/notes.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var NoteFileComponent = /** @class */ (function () {
                function NoteFileComponent(router, http, noteService, toster) {
                    this.router = router;
                    this.http = http;
                    this.noteService = noteService;
                    this.toster = toster;
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
                }
                NoteFileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                    this.noteService.getNotedetails().subscribe(function (data) {
                        console.log(data);
                        _this.temp = data;
                        _this.dtTrigger.next();
                    });
                };
                NoteFileComponent.prototype.addforms = function () {
                    localStorage.removeItem('note');
                    this.router.navigate(['/notes/note/noteform']);
                };
                NoteFileComponent.prototype.addform = function (value) {
                    localStorage.removeItem('note');
                    this.router.navigate(['/notes/note/noteform']);
                    // this.router.navigate(['adddetails']);
                };
                NoteFileComponent.prototype.editnote = function (value) {
                    localStorage.removeItem('note');
                    localStorage.setItem('note', JSON.stringify(value));
                    this.router.navigate(['/notes/note/noteform']);
                };
                NoteFileComponent.prototype.delnote = function (id) {
                    var _this = this;
                    this.noteService.deleteNotedetails(id).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('deleted successfully');
                    });
                };
                return NoteFileComponent;
            }());
            NoteFileComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _notes_service__WEBPACK_IMPORTED_MODULE_4__["NoteService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
            ]; };
            NoteFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-note-file',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./note-file.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/notes/note-file/note-file.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./note-file.component.scss */ "./src/app/demo/pages/notes/note-file/note-file.component.scss")).default]
                })
            ], NoteFileComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/notes/note-file/note-file.module.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/demo/pages/notes/note-file/note-file.module.ts ***!
          \****************************************************************/
        /*! exports provided: NotefileModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotefileModule", function () { return NotefileModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _note_file_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-file-routing.module */ "./src/app/demo/pages/notes/note-file/note-file-routing.module.ts");
            /* harmony import */ var _note_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-file.component */ "./src/app/demo/pages/notes/note-file/note-file.component.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _noteform_noteform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./noteform/noteform.component */ "./src/app/demo/pages/notes/note-file/noteform/noteform.component.ts");
            var NotefileModule = /** @class */ (function () {
                function NotefileModule() {
                }
                return NotefileModule;
            }());
            NotefileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_note_file_component__WEBPACK_IMPORTED_MODULE_5__["NoteFileComponent"], _noteform_noteform_component__WEBPACK_IMPORTED_MODULE_7__["NoteformComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _note_file_routing_module__WEBPACK_IMPORTED_MODULE_4__["NotefileRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
                    ]
                })
            ], NotefileModule);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/notes/note-file/noteform/noteform.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/demo/pages/notes/note-file/noteform/noteform.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n:-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input {\n  background-color: white;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform input[type=month] {\n  padding: 2px;\n  color: #b3aeae;\n  padding-left: 8px; }\n\n.receiptaddform button {\n  color: white !important;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  background-color: #65abe4;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.submit button {\n  margin-bottom: 0% !important; }\n\n.submit {\n  color: white !important;\n  width: 20%;\n  margin-left: 40%;\n  margin-bottom: 0% !important;\n  background-color: #65abe4; }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.danger {\n  background-color: #8b4646 !important; }\n\n.receiptaddform select {\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform select option:first {\n  color: #999; }\n\n.sub {\n  margin-left: 0px; }\n\n@media (max-width: 430px) {\n  .sub {\n    margin-left: -140px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9ub3Rlcy9ub3RlLWZpbGUvbm90ZWZvcm0vQzpcXFVzZXJzXFxCaGFyYW5lZWRoYXJhblxcRG93bmxvYWRzXFxXTVMtMVxcd21zIDE0LTEyL3NyY1xcYXBwXFxkZW1vXFxwYWdlc1xcbm90ZXNcXG5vdGUtZmlsZVxcbm90ZWZvcm1cXG5vdGVmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUyxFQUFBOztBQUViO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUN0QztFQUF1QixlQUFlLEVBQUE7O0FBQ3RDO0VBQ0ksdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBc0I7RUFFdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFBbUMsWUFBWTtFQUFDLGNBQXlCO0VBQUUsaUJBQWlCLEVBQUE7O0FBRTVGO0VBQ0ksdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBc0I7RUFFdEIseUJBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLDBDQUF1QyxFQUFBOztBQUczQztFQUNJLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1Qix5QkFBb0MsRUFBQTs7QUFFeEM7RUFBd0IsdUNBQXVDLEVBQUE7O0FBQy9EO0VBQVMsb0NBQTZDLEVBQUE7O0FBQ3REO0VBQ0ksYUFBYTtFQUViLGNBQWM7RUFDZCxjQUFzQjtFQUV0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUd6QjtFQUNRLFdBQVcsRUFBQTs7QUFJZjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNLO0lBQ0ksbUJBQW1CLEVBQUEsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL25vdGVzL25vdGUtZmlsZS9ub3RlZm9ybS9ub3RlZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNlaXB0YWRkZm9ybXtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG46OnBsYWNlaG9sZGVyeyBvcGFjaXR5OiAwLjc7Y29sb3I6Z3JheTsgfVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXR7IGZvbnQtc2l6ZTogMTNweDsgfVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAzJTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEzLCAxMyk7XHJcbiAgICAvLyBjb2xvcjogcmdiKDI0NSwgMTQ2LCAxNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNFOEU4RTg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMSk7IFxyXG59XHJcbi5yZWNlaXB0YWRkZm9ybSBpbnB1dFt0eXBlPW1vbnRoXXsgcGFkZGluZzogMnB4O2NvbG9yOiByZ2IoMTc5LCAxNzQsIDE3NCk7IHBhZGRpbmctbGVmdDogOHB4O31cclxuXHJcbi5yZWNlaXB0YWRkZm9ybSBidXR0b257XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAzJTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEzLCAxMyk7XHJcbiAgICAvLyBtYXJnaW46IDE1JSAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxNzEsIDIyOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNFOEU4RTg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMTIsIDEyNCk7XHJcbn1cclxuLnN1Ym1pdCBidXR0b257XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uc3VibWl0e1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxNzEsIDIyOCk7XHJcbn1cclxuLnJlY2VpcHRhZGRmb3JtIC5jbGVhcnsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbCAhaW1wb3J0YW50OyB9XHJcbi5kYW5nZXJ7IGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDcwLCA3MCkgIWltcG9ydGFudDsgfVxyXG4ucmVjZWlwdGFkZGZvcm0gc2VsZWN0e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwIDAgMyU7XHJcbiAgICBjb2xvcjogcmdiKDE0LCAxMywgMTMpO1xyXG4gICAgLy8gY29sb3I6IHJnYigyNDUsIDE0NiwgMTcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRThFOEU4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVjZWlwdGFkZGZvcm0gc2VsZWN0IG9wdGlvbjpmaXJzdCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5zdWJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBtZWRpYSAgKG1heC13aWR0aDogNDMwcHgpe1xyXG4gICAgICAgICAgICAgLnN1YntcclxuICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE0MHB4O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/demo/pages/notes/note-file/noteform/noteform.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/demo/pages/notes/note-file/noteform/noteform.component.ts ***!
          \***************************************************************************/
        /*! exports provided: NoteformComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteformComponent", function () { return NoteformComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notes.service */ "./src/app/demo/pages/notes/notes.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var NoteformComponent = /** @class */ (function () {
                function NoteformComponent(fb, http, noteService, toster) {
                    var _this = this;
                    this.fb = fb;
                    this.http = http;
                    this.noteService = noteService;
                    this.toster = toster;
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                        _this.Name = element.branchName;
                        _this.location = element.branchLocation;
                    });
                }
                NoteformComponent.prototype.ngOnInit = function () {
                    this.notesform = this.fb.group({
                        _id: [''],
                        branchId: this.id,
                        branchLocation: this.location,
                        branchName: this.Name,
                        date: [''],
                        createdBy: [''],
                        description: ['']
                    });
                    this.temp = JSON.parse(localStorage.getItem('note'));
                    console.log(this.temp);
                    this.notesform.patchValue(this.temp);
                };
                NoteformComponent.prototype.onsubmit = function (value) {
                    var _this = this;
                    if (value._id == '') {
                        this.noteService.postNotedetails(value).subscribe(function (data) {
                            console.log(data);
                            _this.toster.success('added successfully');
                        });
                        localStorage.removeItem('setdetails');
                    }
                    else {
                        this.noteService.putNotedetails(value).subscribe(function (data) {
                            console.log(data);
                            _this.toster.success('updated successfully');
                        });
                        localStorage.removeItem('setdetails');
                    }
                };
                return NoteformComponent;
            }());
            NoteformComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _notes_service__WEBPACK_IMPORTED_MODULE_4__["NoteService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
            ]; };
            NoteformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-noteform',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./noteform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/notes/note-file/noteform/noteform.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./noteform.component.scss */ "./src/app/demo/pages/notes/note-file/noteform/noteform.component.scss")).default]
                })
            ], NoteformComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/pages/notes/notes.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/demo/pages/notes/notes.service.ts ***!
          \***************************************************/
        /*! exports provided: NoteService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteService", function () { return NoteService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/enviromentURL */ "./src/environments/enviromentURL.ts");
            var NoteService = /** @class */ (function () {
                function NoteService(http) {
                    var _this = this;
                    this.http = http;
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                    });
                }
                NoteService.prototype.getNotedetails = function () {
                    return this.http.get(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/notes" + '/' + this.id);
                };
                NoteService.prototype.postNotedetails = function (value) {
                    return this.http.post(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/notes", value);
                };
                NoteService.prototype.putNotedetails = function (value) {
                    return this.http.put(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/notes" + '/' + value._id, value);
                };
                NoteService.prototype.deleteNotedetails = function (id) {
                    return this.http.delete(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/notes" + '/' + id);
                };
                return NoteService;
            }());
            NoteService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            NoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], NoteService);
            /***/ 
        })
    }]);
//# sourceMappingURL=note-file-note-file-module-es2015.js.map
//# sourceMappingURL=note-file-note-file-module-es5.js.map
//# sourceMappingURL=note-file-note-file-module-es5.js.map