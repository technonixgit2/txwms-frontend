(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["storageview-storageview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/storageview/storageview.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/storageview/storageview.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n\n\n\n  <app-card cardTitle=\"Division And Rack Usage Details\" [options]=\"false\" blockClass=\"table-border-style\">\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <label for=\"suppliername\" style=\"font-size: 20px; color: black;\">Select Division</label>\n  <select [(ngModel)]=\"selected\" name=\"finalDiv\"  placeholder=\"select\" (ngModelChange)=\"onOptionsSelected()\">\n    <option *ngFor=\"let sta of div\" [ngValue]=\"sta\">{{sta.division}}</option>\n\n</select>\n\n</div>\n  </div>\n  <div class=\"title\">\n    <h3>  DIVISION &nbsp;&nbsp;  {{division}}</h3>\n\n  </div>\n\n\n\n  <div class=\"row\" style=\"padding-left: 15px;\">\n   \n    <div class=\"row\" *ngFor=\"let det of final\">\n<div class=\"col-lg-2\">\n<div class=\"container\">\n<div class=\"items\">\n<div class=\"items-head row\">\n  <div class=\"col-lg-12\">\n    <p style=\"padding-left: 10px;\">RACK<span style=\"margin-left: 60px;text-transform: uppercase;\" >{{det.rack}}</span></p>\n  </div>\n\n <hr style=\"border: 1px solid lightblue; \">\n</div>\n\n<div class=\"items-body\">\n  <div class=\"items-body-content\">\n    <span>Total </span>\n<span class=\"time\">{{det.quantity}}</span>\n  </div>\n  <div class=\"items-body-content\">\n    <span>Available </span>\n    <span class=\"time\"> {{det.avalible}}</span>\n  </div>\n  <div class=\"items-body-content\" [ngClass]=\"{\n    'positive':det.percentage > '50.00',\n    'negative': det.percentage <'50.00',\n    'full': det.percentage =='100.00',\n    'empty': det.percentage =='0.00'\n\n  }\">\n    <span for=\"item-3\" class=\"text\"> {{det.percentage}}% </span> <span class=\"time\"> Used</span>\n  \n  </div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n</app-card>\n     -->\n     <div class=\"row\">\n      <div class=\"col-xl-12 text-right\">\n       \n      </div>\n      <div class=\"col-md-12\">\n          <app-card cardTitle=\"Division And Rack Details\" [options]=\"false\" blockClass=\"table-border-style\">\n            <div style=\"padding-left: 65%;\">\n              <ul>\n                <li> <input type=\"text\" style=\" background-color:#2adf30 ; border: none; width: 25px;\"  >&nbsp; Rack is Fully Free  </li>\n                <li> <input type=\"text\" style=\" background-color:#fbff00; border: none; width: 25px; margin-top: 3px;\">&nbsp; Rack is Above 50% Occupied</li>\n                <li> <input type=\"text\" style=\" background-color:#11079c; border: none; width: 25px;margin-top: 3px;\">&nbsp; Rack is Above 50% Available</li>\n                <li> <input type=\"text\" style=\" background-color:#ff0000; border: none; width: 25px;margin-top: 3px;\" >&nbsp; No More Space In Rack</li>\n      \n              </ul>\n            </div>\n            <div class=\"list\">\n              <ul>  \n                <!-- <li> </li> -->\n               \n              </ul>\n              <ul *ngFor=\"let item of on\">\n                <li  data-label=\"division\">{{item.division}}</li>\n                <li *ngFor=\"let it of item.array\" data-label=\"rack\" > {{it.rack |uppercase}} <label [ngClass]=\"{\n                  'positive':it.percentage > '50.00',\n                  'negative': it.percentage <'51.00',\n                  'full': it.percentage =='100.00',\n                  'empty': it.percentage =='0.00'\n\n                }\" style=\"height: 27px; width: 30px; padding: 2px;text-align: center;\"><span  >{{it.avalible}}</span></label>  </li>\n                <!-- <li *ngFor=\"let it of item.array\" data-label=\"\"> </li> -->\n                <!-- <li data-label=\"number\">0123456789</li>\n                <li data-label=\"reference\">ABCDE</li>\n                <li data-label=\"description\">\n                 -->\n                <!-- </li> -->\n              </ul>\n             \n            </div>\n          </app-card>\n      </div>\n  </div>\n  <!-- {{row[in] |json}} -->\n");

/***/ }),

/***/ "./src/app/demo/pages/storage/storageview/storageview.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/demo/pages/storage/storageview/storageview.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* generic */\nbody {\n  background-color: #eee;\n  color: #444;\n  font-family: sans-serif; }\n.list ul:nth-child(odd) {\n  background-color: #ddd; }\n.list ul:nth-child(even) {\n  background-color: #fff; }\n/* big */\n@media screen and (min-width: 600px) {\n  .list {\n    display: table;\n    margin: 1em; }\n  .list ul {\n    display: table-row; }\n  .list ul:first-child li {\n    background-color: #444;\n    color: #fff; }\n  .list ul > li {\n    display: table-cell;\n    padding: .5em 1em; } }\n/* small */\n@media screen and (max-width: 599px) {\n  .list ul {\n    border: solid 1px #ccc;\n    display: block;\n    list-style: none;\n    margin: 1em;\n    padding: .5em 1em; }\n  .list ul:first-child {\n    display: none; }\n  .list ul > li {\n    display: block;\n    padding: .25em 0; }\n  .list ul:nth-child(odd) > li + li {\n    border-top: solid 1px #ccc; }\n  .list ul:nth-child(even) > li + li {\n    border-top: solid 1px #eee; }\n  .list ul > li:before {\n    color: white;\n    content: attr(data-label);\n    display: inline-block;\n    font-size: 75%;\n    font-weight: bold;\n    text-transform: capitalize;\n    vertical-align: top;\n    width: 50%; }\n  .list p {\n    margin: -1em 0 0 50%; } }\n/* tiny */\n@media screen and (max-width: 349px) {\n  .list ul > li:before {\n    display: block; }\n  .list p {\n    margin: 0; } }\n.positive {\n  color: #ccae03 !important;\n  font-weight: bolder;\n  border: 2px solid #ccae03; }\n.negative {\n  color: #091aac !important;\n  font-weight: bolder;\n  border: 2px solid #091aac; }\n.full {\n  color: #f30909 !important;\n  font-weight: bolder;\n  border: 2px solid #f30909; }\n.empty {\n  color: #21c221 !important;\n  font-weight: bolder;\n  border: 2px solid #07f707; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9zdG9yYWdlL3N0b3JhZ2V2aWV3L0M6XFxVc2Vyc1xcQmhhcmFuZWVkaGFyYW5cXERvd25sb2Fkc1xcV01TLTFcXHdtcyAxNC0xMi9zcmNcXGFwcFxcZGVtb1xccGFnZXNcXHN0b3JhZ2VcXHN0b3JhZ2V2aWV3XFxzdG9yYWdldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSUEsWUFBQTtBQUVBO0VBQ0Usc0JBQXFCO0VBQ3JCLFdBQVU7RUFDVix1QkFBc0IsRUFBQTtBQUd4QjtFQUNFLHNCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usc0JBQXFCLEVBQUE7QUFHdkIsUUFBQTtBQUNBO0VBRUU7SUFDRSxjQUFhO0lBQ2IsV0FBVSxFQUFBO0VBR1o7SUFDRSxrQkFBaUIsRUFBQTtFQUduQjtJQUNFLHNCQUFxQjtJQUNyQixXQUFVLEVBQUE7RUFHWjtJQUNFLG1CQUFrQjtJQUNsQixpQkFBZ0IsRUFBQSxFQUNqQjtBQUlILFVBQUE7QUFDQTtFQUVFO0lBQ0Usc0JBQXFCO0lBQ3JCLGNBQWE7SUFDYixnQkFBZTtJQUNmLFdBQVU7SUFDVixpQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLGFBQVksRUFBQTtFQUdkO0lBQ0UsY0FBYTtJQUNiLGdCQUFlLEVBQUE7RUFHakI7SUFDRSwwQkFBeUIsRUFBQTtFQUczQjtJQUNFLDBCQUF5QixFQUFBO0VBRzNCO0lBQ0UsWUFBVztJQUNYLHlCQUF3QjtJQUN4QixxQkFBb0I7SUFDcEIsY0FBYTtJQUNiLGlCQUFnQjtJQUNoQiwwQkFBeUI7SUFDekIsbUJBQWtCO0lBQ2xCLFVBQVMsRUFBQTtFQUdYO0lBQ0Usb0JBQW1CLEVBQUEsRUFDcEI7QUFJSCxTQUFBO0FBQ0E7RUFFRTtJQUNFLGNBQWEsRUFBQTtFQUdmO0lBQ0UsU0FBUSxFQUFBLEVBQ1Q7QUFLSDtFQUNFLHlCQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIseUJBQW1DLEVBQUE7QUFFckM7RUFDRSx5QkFBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLHlCQUFrQyxFQUFBO0FBRXBDO0VBQ0UseUJBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQix5QkFBaUMsRUFBQTtBQUVuQztFQUNFLHlCQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIseUJBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL3N0b3JhZ2Uvc3RvcmFnZXZpZXcvc3RvcmFnZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gaHRtbHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuLy8gfVxyXG5cclxuLy8gOnJvb3R7XHJcbi8vICAgICAtLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzVmZjI4MSwgIzVmODZmMiwgI2E2NWZmMiwgI2YyNWZkMCwgI2YyNWY2MSwgI2YyY2I1ZikgMCA1MCU7XHJcbi8vICAgICAtLWJhY2tncm91bmQtc2l6ZTogMzAwJSAzMDAlO1xyXG4vLyB9XHJcblxyXG4vLyBhe1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyB1bHtcclxuLy8gICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vIGJvZHl7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xyXG4vLyB9XHJcblxyXG4vLyBzZWxlY3R7XHJcbi8vICAgICBwYWRkaW5nOjEwcHg7XHJcbi8vICAgICB3aWR0aDogMTEwcHg7XHJcbi8vIH1cclxuLy8gLnRpdGxle1xyXG4vLyAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4vLyB9XHJcbi8vIC52aWV3LXRhYmxle1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4vLyAgICAgd2lkdGg6IDIwMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAyMDBweDtcclxuLy8gICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYig3MywgMjM1LCAyMjcpO1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgICAgbWFyZ2luOiA1cHg7XHJcbi8vIH1cclxuLy8gLml0ZW17XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjUsIDIyNSk7XHJcbi8vICAgICBoZWlnaHQ6MTAwcHg7XHJcbi8vICAgICB3aWR0aDogMTUwcHg7XHJcbi8vICAgICBtYXJnaW46IDVweDtcclxuLy8gICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2IoMTc5LCAxNzksIDE3OSk7XHJcbi8vICAgfVxyXG4vLyAgICRwcmk6ICMxMjhDRkM7XHJcbi8vICAgJHNlYzogI0ZGRkZGRTtcclxuLy8gICAkZGFyay1wcmk6ICMwQjVBQTI7XHJcbi8vICAgKiB7XHJcbi8vICAgICBib3gtc2l6aW5nOiBib3JkZXItcmFkaXVzO1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbi8vICAgfVxyXG4vLyAgIC50aW1le1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6LTMwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5pdGVtcyB7XHJcbi8vICAgICB3aWR0aDogMTU1cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAkc2VjO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoYmxhY2ssMC4xNiksIDAgM3B4IDZweCByZ2JhKGJsYWNrLDAuMjMpO1xyXG4vLyAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAkZGFyay1wcmk7XHJcbi8vICAgfVxyXG4vLyAgIC5kZWx7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuLy8gICB9XHJcbi8vICAgLm1vbnRobHl7XHJcbi8vICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4vLyAgIH1cclxuLy8gICAuaXRlbXMtaGVhZCBwe1xyXG4vLyAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbi8vICAgICBtYXJnaW46IDEwcHggMDtcclxuLy8gICAgIGNvbG9yOiAjMGIwZWEyO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDE1cHg7XHJcbi8vICAgfVxyXG4vLyAgIC5pdGVtcy1oZWFkIGhyIHtcclxuLy8gICAgIHdpZHRoOiA4MCU7XHJcbi8vICAgICBtYXJnaW46IDBweCAzMHB4O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgJGRhcmstcHJpO1xyXG4vLyAgIH1cclxuLy8gICAuaXRlbXMtYm9keSB7XHJcbi8vICAgICBwYWRkaW5nOiAwcHg7XHJcbi8vICAgICBtYXJnaW46IDEwcHg7XHJcbi8vICAgICBkaXNwbGF5OiBncmlkO1xyXG4vLyAgICAgZ3JpZC1nYXA6IDEwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5pdGVtcy1ib2R5LWNvbnRlbnQge1xyXG4vLyAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuLy8gICAgIGRpc3BsYXk6IGdyaWQ7XHJcbi8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwZnIgMWZyO1xyXG4vLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4vLyAgICAgZ3JpZC1nYXA6IDEwcHg7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG4vLyAgIH1cclxuLy8gICAuaXRlbXMtYm9keS1jb250ZW50OmhvdmVyIHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGFyay1wcmk7XHJcbi8vICAgfVxyXG4vLyAgIC5pdGVtcy1ib2R5LWNvbnRlbnQgaSB7XHJcbi8vICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbi8vICAgICBmb250LXNpemU6IDE1cHg7XHJcbi8vICAgICBjb2xvcjogJGRhcmstcHJpO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBhbmltYXRpb246IGljb24gMS41cyBpbmZpbml0ZSBmb3J3YXJkcztcclxuLy8gICB9XHJcbi8vICAgLmNvbC1sZy0ye1xyXG4vLyAgd2lkdGg6IDcwJTtcclxuLy8gICB9XHJcblxyXG4vLyAgIC5wb3NpdGl2ZXtcclxuLy8gICAgIGNvbG9yOiByZ2IoMTQ4LCA0NCwgMTMpICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4vLyAgIH1cclxuLy8gICAubmVnYXRpdmV7XHJcbi8vICAgICBjb2xvcjogcmdiKDc2LCAyMzEsIDI5KSAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBcclxuLy8gICB9XHJcbi8vICAgLmZ1bGx7XHJcbi8vICAgICBjb2xvcjogcmdiKDIzNSwgMTIsIDEyKSAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBcclxuLy8gICB9XHJcbi8vICAgLmVtcHR5e1xyXG4vLyAgICAgY29sb3I6IHJnYigxOTMsIDIxMiwgMTcpICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIFxyXG4vLyAgIH1cclxuXHJcbi8qIGdlbmVyaWMgKi9cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2VlZTtcclxuICBjb2xvcjojNDQ0O1xyXG4gIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5saXN0IHVsOm50aC1jaGlsZChvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGQ7XHJcbn1cclxuXHJcbi5saXN0IHVsOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG59XHJcblxyXG4vKiBiaWcgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MDBweCkge1xyXG4gIFxyXG4gIC5saXN0IHtcclxuICAgIGRpc3BsYXk6dGFibGU7XHJcbiAgICBtYXJnaW46MWVtO1xyXG4gIH1cclxuIFxyXG4gIC5saXN0IHVsIHtcclxuICAgIGRpc3BsYXk6dGFibGUtcm93O1xyXG4gIH1cclxuICBcclxuICAubGlzdCB1bDpmaXJzdC1jaGlsZCBsaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0NDQ7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICBcclxuICAubGlzdCB1bCA+IGxpIHtcclxuICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgIHBhZGRpbmc6LjVlbSAxZW07XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG4vKiBzbWFsbCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU5OXB4KSB7XHJcbiAgXHJcbiAgLmxpc3QgdWwge1xyXG4gICAgYm9yZGVyOnNvbGlkIDFweCAjY2NjO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgIG1hcmdpbjoxZW07XHJcbiAgICBwYWRkaW5nOi41ZW0gMWVtO1xyXG4gIH1cclxuICBcclxuICAubGlzdCB1bDpmaXJzdC1jaGlsZCB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0IHVsID4gbGkge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBhZGRpbmc6LjI1ZW0gMDtcclxuICB9XHJcbiAgXHJcbiAgLmxpc3QgdWw6bnRoLWNoaWxkKG9kZCkgPiBsaSArIGxpIHtcclxuICAgIGJvcmRlci10b3A6c29saWQgMXB4ICNjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0IHVsOm50aC1jaGlsZChldmVuKSA+IGxpICsgbGkge1xyXG4gICAgYm9yZGVyLXRvcDpzb2xpZCAxcHggI2VlZTtcclxuICB9XHJcbiAgXHJcbiAgLmxpc3QgdWwgPiBsaTpiZWZvcmUge1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBjb250ZW50OmF0dHIoZGF0YS1sYWJlbCk7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTo3NSU7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIHdpZHRoOjUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmxpc3QgcCB7XHJcbiAgICBtYXJnaW46LTFlbSAwIDAgNTAlO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuLyogdGlueSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM0OXB4KSB7XHJcbiAgICBcclxuICAubGlzdCB1bCA+IGxpOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIH1cclxuICBcclxuICAubGlzdCBwIHtcclxuICAgIG1hcmdpbjowO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuXHJcbi5wb3NpdGl2ZXtcclxuICBjb2xvcjogIHJnYigyMDQsIDE3NCwgMykgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICByZ2IoMjA0LCAxNzQsIDMpO1xyXG59XHJcbi5uZWdhdGl2ZXtcclxuICBjb2xvcjpyZ2IoOSwgMjYsIDE3MikgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICByZ2IoOSwgMjYsIDE3Mik7XHJcbn1cclxuLmZ1bGx7XHJcbiAgY29sb3I6IHJnYigyNDMsIDksIDkpICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAgcmdiKDI0MywgOSwgOSk7XHJcbn1cclxuLmVtcHR5e1xyXG4gIGNvbG9yOiByZ2IoMzMsIDE5NCwgMzMpICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAgcmdiKDcsIDI0NywgNyk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/demo/pages/storage/storageview/storageview.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/pages/storage/storageview/storageview.component.ts ***!
  \*************************************************************************/
/*! exports provided: StorageviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageviewComponent", function() { return StorageviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/demo/pages/storage/storage.service.ts");



let StorageviewComponent = 
// type Params = {
//   [key: string]: any;
// };
// @params keyGetter
// @param list
// @returns Map of the array grouped by the grouping function.
class StorageviewComponent {
    constructor(storageService) {
        this.storageService = storageService;
        this.rackarry = [];
        this.divison = [];
        this.div = [];
        this.rackar = [];
        this.finalrack = [];
        this.rackfilter = [];
        this.finalRackArray = [];
        this.percent = [];
        this.final = [];
        this.on = [];
        this.dic = [];
    }
    ngOnInit() {
        this.storageService.getDivision().subscribe(data => {
            this.rack = data;
            this.rack.forEach(element => {
                this.rackarry.push(element);
            });
            let div = this.rackarry.reduce((acc, val) => {
                if (!acc.find(el => el.division === val.division)) {
                    acc.push(val);
                }
                return acc;
            }, []);
            this.finalRack = div;
            this.finalRack.forEach(dat => {
                this.divison.push({ division: dat.division });
            });
            this.div = this.divison;
            console.log(this.div, 'divi');
            // const result = Array.from(this.finalRack.reduce((m, t) => m.set(t.name, t), new Map()).values());
        });
        this.storageService.getDivision().subscribe(data => {
            this.rac = data;
            this.rac.forEach(element => {
                this.rackar.push(element);
            });
            this.rackar.forEach(dat => {
                var abc = ((dat.used / dat.quantity) * 100).toFixed(2);
                // console.log(this.abc,this.getdata,'daaa')
                this.percent.push({ division: dat.division, avalible: dat.avalible, quantity: dat.quantity,
                    rack: dat.rack, selected: dat.selected, used: dat.used, percentage: abc
                });
            });
            var list = this.percent;
            const grouped = this.groupBy(list, pet => pet.division);
            this.kgf = grouped;
            this.dic = this.kgf;
            this.div.forEach(dat => {
                var one = grouped.get(dat.division);
                this.on.push({ division: dat.division, array: one });
            });
            console.log(this.on, 'on');
            console.log(this.dic, 'kk');
        });
    }
    // get grouped() { return Array.from(this.dic.entries()); }
    groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            }
            else {
                collection.push(item);
            }
        });
        return map;
    }
};
StorageviewComponent.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
];
StorageviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-storageview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./storageview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/storageview/storageview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./storageview.component.scss */ "./src/app/demo/pages/storage/storageview/storageview.component.scss")).default]
    })
    // type Params = {
    //   [key: string]: any;
    // };
    // @params keyGetter
    // @param list
    // @returns Map of the array grouped by the grouping function.
], StorageviewComponent);



/***/ }),

/***/ "./src/app/demo/pages/storage/storageview/storageview.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/pages/storage/storageview/storageview.module.ts ***!
  \**********************************************************************/
/*! exports provided: StorageViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageViewModule", function() { return StorageViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _storageview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storageview.component */ "./src/app/demo/pages/storage/storageview/storageview.component.ts");
/* harmony import */ var _storageview_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storageview.routing.module */ "./src/app/demo/pages/storage/storageview/storageview.routing.module.ts");







let StorageViewModule = class StorageViewModule {
};
StorageViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _storageview_routing_module__WEBPACK_IMPORTED_MODULE_6__["StorageviewRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"]
        ],
        declarations: [_storageview_component__WEBPACK_IMPORTED_MODULE_5__["StorageviewComponent"],]
    })
], StorageViewModule);



/***/ }),

/***/ "./src/app/demo/pages/storage/storageview/storageview.routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo/pages/storage/storageview/storageview.routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: StorageviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageviewRoutingModule", function() { return StorageviewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _storageview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storageview.component */ "./src/app/demo/pages/storage/storageview/storageview.component.ts");




// import { DivitionformComponent } from './divitionform/divitionform.component';
const routes = [
    {
        path: '',
        component: _storageview_component__WEBPACK_IMPORTED_MODULE_3__["StorageviewComponent"]
    },
];
let StorageviewRoutingModule = class StorageviewRoutingModule {
};
StorageviewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StorageviewRoutingModule);



/***/ })

}]);
//# sourceMappingURL=storageview-storageview-module-es2015.js.map