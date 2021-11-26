(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-notes-notes-module"],{

/***/ "./src/app/demo/pages/notes/notes-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo/pages/notes/notes-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: NotesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesRoutingModule", function() { return NotesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'note',
                loadChildren: './note-file/note-file.module#NotefileModule'
            },
        ]
    }
];
let NotesRoutingModule = class NotesRoutingModule {
};
NotesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NotesRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/notes/notes.module.ts":
/*!**************************************************!*\
  !*** ./src/app/demo/pages/notes/notes.module.ts ***!
  \**************************************************/
/*! exports provided: NoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteModule", function() { return NoteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _notes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes-routing.module */ "./src/app/demo/pages/notes/notes-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





let NoteModule = class NoteModule {
};
NoteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _notes_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotesRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]
    })
], NoteModule);



/***/ })

}]);
//# sourceMappingURL=demo-pages-notes-notes-module-es2015.js.map