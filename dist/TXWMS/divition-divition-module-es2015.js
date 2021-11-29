(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["divition-divition-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/divition/divition.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/divition/divition.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <!-- <div class=\"col-xl-12 text-right\">\n    <button type=\"button\" class=\"addbutton btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#myModal\" >\n      <img src=\"../../../../../assets/images/images/icons8-plus-24.png\" alt=\"\">\n    </button>\n  </div> -->\n</div>\n  <app-card cardTitle=\"Division And Rack Usage\" [options]=\"false\" blockClass=\"table-border-style\">\n    <div class=\"container\">\n      <!-- The Modal -->\n      <div class=\"modal\" id=\"myModal\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Modal Heading</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <div class=\"modal-body\">\n              <form class=\"receiptaddform\" [formGroup]=\"receiptform\" (ngSubmit)=\"addDivision(receiptform.value)\" >\n\n                <div class=\"row\">\n                  <!-- <div class=\"col-lg-12\">  <input type=\"text\" formControlName=\"_id\"> </div> -->\n                  <div class=\"col-lg-6\"> <label for=\"description\">Division:</label> <br>\n                    <input type=\"text\" placeholder=\"Enter the Description\" formControlName=\"division\" />\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label for=\"suppliername\">Rack</label>\n                    <input type=\"text\" placeholder=\"Enter the Supplier Name\" formControlName=\"rack\">\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label for=\"suppliername\">Qunatity</label>\n                    <input type=\"text\" placeholder=\"Enter the Supplier Name\" formControlName=\"quantity\">\n                  </div>\n                  <!-- <div class=\"col-lg-6\"> <label for=\"quantity\">Used:</label> <br>\n                    <input type=\"text\" placeholder=\"Enter the Quantity\" formControlName=\"used\"  />\n                  </div>\n                  <div class=\"col-lg-6\"> <label for=\"quantity\">Free Space:</label> <br>\n                    <input type=\"text\" placeholder=\"Enter the Quantity\" formControlName=\"avalible\"  />\n                  </div> -->\n                  <div class=\"col-lg-3\">  <button type=\"submit\"> Submit </button>  </div>\n                  <div class=\"col-lg-3\">  <button type=\"reset\" class=\"clear\"> Clear </button>  </div>\n                </div>\n\n              </form>\n            </div>\n\n            <!-- Modal footer -->\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row\">\n  <div class=\"container\">\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">Avalibility</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\">Rack</a>\n      </li>\n    </ul>\n\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n      <div id=\"home\" class=\"container tab-pane active\"><br>\n        <table class=\"table-responsive table-striped\">\n          <thead>\n          <tr>\n            <th>Division</th>\n            <th> Rack </th>\n            <th> Total Space </th>\n            <th> Used </th>\n            <th>Free Space </th>\n\n          </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor='let data of rack'>\n              <td>{{data.division}}</td>\n              <td>{{data.rack}}</td>\n              <td>{{data.quantity}}</td>\n              <td>{{data.used}}</td>\n              <td>{{data.avalible}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div id=\"menu1\" class=\"container tab-pane fade\"><br>\n\n        <div class=\"col-xl-12\">\n            <select [(ngModel)]=\"selected\" name=\"finalDiv\" placeholder=\"select\" (ngModelChange)=\"onOptionsSelected()\">\n              <option *ngFor=\"let sta of finalRack\" [ngValue]=\"sta\">{{sta.division}}</option>\n          </select>\n          <select [(ngModel)]=\"filterValue\" name=\"rackfilter\" placeholder=\"select\" (ngModelChange)=\"onSelected()\" style=\"margin-left: 10px;\">\n            <option *ngFor=\"let sta of finalRackArray\" [ngValue]=\"sta\">{{sta.rack}}</option>\n        </select>\n        </div>\n      </div>\n      <table class=\"table-responsive table-striped\" *ngIf='divisionShow'>\n        <thead>\n        <tr>\n         <th>Division</th>\n         <th> Rack</th>\n          <th> Total Space </th>\n          <th> Used </th>\n          <th> Free </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor='let data of filtered' >\n          <td>{{data.division}}</td>\n          <td>{{data.rack}} </td>\n          <td> {{data.quantity}} </td>\n          <td> {{data.used}} </td>\n          <td> {{data.avalible}} </td>\n        </tr>\n        </tbody>\n      </table>\n      <table class=\"table-responsive table-striped\" *ngIf='racksShow'>\n        <thead>\n        <tr>\n         <th>Division</th>\n         <th> Rack</th>\n          <th> ItemCode </th>\n          <th> Description </th>\n          <th> Recipt No </th>\n          <th> Quantity </th>\n          <th> UOM </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor='let data of filterValuee'>\n          <td>{{data.division}}</td>\n          <td>{{data.rack}} </td>\n          <td> {{data.itemCode}} </td>\n          <td> {{data.description}} </td>\n          <td> {{data.reciptno}} </td>\n          <td> {{data.quantity}} </td>\n          <td> {{data.vom}} </td>\n\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n</app-card>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/divition/divitionform/divitionform.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/divition/divitionform/divitionform.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n\n  <div class=\"col-xl-12\">\n    <app-card cardTitle=\"Rack\" [options]=\"false\" blockClass=\"table-border-style\">\n      <form class=\"receiptaddform\" [formGroup]=\"receiptform\" (ngSubmit)=\"addDivision(receiptform.value)\" >\n\n        <div class=\"row\">\n          <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"_id\"> </div>\n          <div class=\"col-lg-6\">\n            <label for=\"suppliername\">Select Division</label>\n          <select [(ngModel)]=\"selected\" name=\"finalDiv\" formControlName=\"division\" placeholder=\"select\" (ngModelChange)=\"onOptionsSelected()\">\n            <option *ngFor=\"let sta of finalDiv\" [ngValue]=\"sta\">{{sta.division}}</option>\n        </select>\n      </div>\n      <div class=\"col-lg-6\">\n        <label for=\"suppliername\">Select Rack</label>\n        <select [(ngModel)]=\"filterValue\" name=\"rackfilter\" formControlName=\"rack\" placeholder=\"select\" (ngModelChange)=\"onSelected()\">\n          <option *ngFor=\"let sta of finalRackArray\" [ngValue]=\"sta\">{{sta.rack}}</option>\n      </select>\n  </div>\n          <!-- <div class=\"col-lg-6\"> <label for=\"description\">Division:</label> <br>\n            <input type=\"text\" placeholder=\"Enter the Description\" formControlName=\"division\" />\n          </div> -->\n          <!-- <div class=\"col-lg-6\">\n            <label for=\"suppliername\">Rack</label>\n            <input type=\"text\" placeholder=\"Enter the Supplier Name\" formControlName=\"rack\">\n          </div> -->\n          <div class=\"col-lg-6\"> <label for=\"description\">Rack Size:</label> <br>\n            <input type=\"text\" placeholder=\"Enter the racksize\" formControlName=\"racksize\" />\n          </div>\n          <div class=\"col-lg-6\">\n            <label for=\"suppliername\">Avalible Space</label>\n            <input type=\"text\" placeholder=\"Enter Avalible Space\" formControlName=\"avalible\">\n          </div>\n          <div class=\"col-lg-6\"> <label for=\"quantity\">Recipt No:</label> <br>\n            <input type=\"text\" placeholder=\"Enter Recipt No\" formControlName=\"reciptno\"  />\n          </div>\n          <div class=\"col-lg-6\"> <label for=\"quantity\">Item Code:</label> <br>\n            <input type=\"text\" placeholder=\"Enter the Quantity\" formControlName=\"itemCode\"  />\n          </div>\n          <div class=\"col-lg-6\"> <label for=\"quantity\">Product Name:</label> <br>\n            <input type=\"text\" placeholder=\"Enter the description\" formControlName=\"description\"  />\n          </div>\n          <div class=\"col-lg-6\"> <label for=\"quantity\">Quantity:</label> <br>\n            <input type=\"number\" placeholder=\"Enter the Quantity\" formControlName=\"quantity\" [(ngModel)]='itemQuantity'  />\n          </div>\n         <div class=\"col-lg-6\"> <label for=\"invoiceno\">UOM:</label> <br>\n            <input type=\"text\" placeholder=\"Enter the vom\" formControlName=\"vom\"  />\n          </div>\n          <div class=\"col-lg-3\">  <button type=\"submit\"> Submit </button>  </div>\n          <div class=\"col-lg-3\">  <button type=\"reset\" class=\"clear\"> Clear </button>  </div>\n        </div>\n\n      </form>\n\n    </app-card>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/demo/pages/storage/divition/divition.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/demo/pages/storage/divition/divition.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".project-tab #tabs {\n  background: #007b5e;\n  color: #eee; }\n\n.project-tab #tabs h6.section-title {\n  color: #eee; }\n\n.project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\n  color: #0062cc;\n  background-color: transparent;\n  border-color: transparent transparent #f3f3f3;\n  border-bottom: 3px solid !important;\n  font-size: 16px;\n  font-weight: bold; }\n\n.project-tab .nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: .25rem;\n  border-top-right-radius: .25rem;\n  color: #0062cc;\n  font-size: 16px;\n  font-weight: 600; }\n\n.project-tab .nav-link:hover {\n  border: none; }\n\n.project-tab thead {\n  background: #f3f3f3;\n  color: #333; }\n\n.project-tab a {\n  text-decoration: none;\n  color: #333;\n  font-weight: 600; }\n\n.receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n:-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input, .receiptaddform select, .receiptaddform button {\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #e8e8e8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.receiptaddform button {\n  color: white !important;\n  margin: 20% 0 0;\n  background-color: #65abe4; }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.arrayrow {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9zdG9yYWdlL2Rpdml0aW9uL0M6XFxVc2Vyc1xcQmhhcmFuZWVkaGFyYW5cXERvd25sb2Fkc1xcV01TLTFcXHdtcyAxNC0xMi9zcmNcXGFwcFxcZGVtb1xccGFnZXNcXHN0b3JhZ2VcXGRpdml0aW9uXFxkaXZpdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLDZDQUE2QztFQUM3QyxtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFFYjtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUN0QztFQUF1QixlQUFlLEVBQUE7O0FBQ3RDO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFzQjtFQUV0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUMzQiwwQ0FBdUMsRUFBQTs7QUFFdkM7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHlCQUFvQyxFQUFBOztBQUd0QztFQUF3Qix1Q0FBdUMsRUFBQTs7QUFDL0Q7RUFBVyxhQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL3N0b3JhZ2UvZGl2aXRpb24vZGl2aXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC10YWIge1xyXG5cclxuXHJcbn1cclxuLnByb2plY3QtdGFiICN0YWJze1xyXG4gIGJhY2tncm91bmQ6ICMwMDdiNWU7XHJcbiAgY29sb3I6ICNlZWU7XHJcbn1cclxuLnByb2plY3QtdGFiICN0YWJzIGg2LnNlY3Rpb24tdGl0bGV7XHJcbiAgY29sb3I6ICNlZWU7XHJcbn1cclxuLnByb2plY3QtdGFiICN0YWJzIC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICBjb2xvcjogIzAwNjJjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmM2YzZjM7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5wcm9qZWN0LXRhYiAubmF2LWxpbmsge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xyXG4gIGNvbG9yOiAjMDA2MmNjO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wcm9qZWN0LXRhYiAubmF2LWxpbms6aG92ZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucHJvamVjdC10YWIgdGhlYWR7XHJcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICBjb2xvcjogIzMzMztcclxufVxyXG4ucHJvamVjdC10YWIgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucmVjZWlwdGFkZGZvcm17XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyeyBvcGFjaXR5OiAwLjc7Y29sb3I6Z3JheTsgfVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXR7IGZvbnQtc2l6ZTogMTNweDsgfVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXQsLnJlY2VpcHRhZGRmb3JtIHNlbGVjdCwgLnJlY2VpcHRhZGRmb3JtIGJ1dHRvbntcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMCAwIDMlO1xyXG4gIGNvbG9yOiByZ2IoMTQsIDEzLCAxMyk7XHJcbiAgLy8gY29sb3I6IHJnYigyNDUsIDE0NiwgMTcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZThlOGU4O1xyXG5ib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuLnJlY2VpcHRhZGRmb3JtIGJ1dHRvbntcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDIwJSAwIDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMTcxLCAyMjgpO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIxMiwgMTI0KTtcclxufVxyXG4ucmVjZWlwdGFkZGZvcm0gLmNsZWFyeyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsICFpbXBvcnRhbnQ7IH1cclxuLmFycmF5cm93eyBkaXNwbGF5Om5vbmU7IH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/demo/pages/storage/divition/divition.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/demo/pages/storage/divition/divition.component.ts ***!
  \*******************************************************************/
/*! exports provided: DivitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivitionComponent", function() { return DivitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/demo/pages/storage/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let DivitionComponent = class DivitionComponent {
    constructor(storageService, toster, fb) {
        this.storageService = storageService;
        this.toster = toster;
        this.fb = fb;
        this.divisionShow = false;
        this.racksShow = false;
        this.arr = [];
        this.rackarry = [];
        this.rackfilter = [];
        this.finalRackArray = [];
    }
    ngOnInit() {
        this.receiptform = this.fb.group({
            _id: [''],
            division: [''],
            rack: [''],
            quantity: [''],
            used: [''],
            avalible: [''],
        });
        this.storageService.getRack().subscribe(data => {
            this.division = data;
            this.division.forEach(element => {
                this.arr.push(element);
            });
            let div = this.arr.reduce((acc, val) => {
                if (!acc.find(el => el.division === val.division)) {
                    acc.push(val);
                }
                return acc;
            }, []);
            this.finalDiv = div;
        });
        this.getRackData();
    }
    addDivision(value) {
        this.storageService.postDivision({
            division: value.division,
            rack: value.rack,
            quantity: value.quantity,
            used: 0,
            avalible: value.quantity,
        }).subscribe(data => {
            console.log(data);
            this.toster.success('added successfully');
        });
    }
    getRackData() {
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
        });
    }
    onOptionsSelected() {
        console.log(this.selected);
        this.rackfilter = [];
        this.finalRackArray = [];
        this.filtered = this.rackarry.filter(t => t.division === this.selected.division);
        this.divisionShow = true;
        this.racksShow = false;
        console.log(this.filtered);
        this.filtered.forEach(data => {
            this.rackfilter.push(data);
        });
        let div = this.rackfilter.reduce((acc, val) => {
            if (!acc.find(el => el.rack === val.rack)) {
                acc.push(val);
            }
            return acc;
        }, []);
        div.forEach(element => {
            this.finalRackArray.push(element);
        });
        console.log(this.finalRackArray);
    }
    onSelected() {
        console.log(this.arr, 'arr');
        this.filterValuee = this.arr.filter(t => t.rack === this.filterValue.rack);
        console.log(this.filterValue.rack);
        this.divisionShow = false;
        this.racksShow = true;
    }
};
DivitionComponent.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
DivitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-divition',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./divition.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/divition/divition.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./divition.component.scss */ "./src/app/demo/pages/storage/divition/divition.component.scss")).default]
    })
], DivitionComponent);



/***/ }),

/***/ "./src/app/demo/pages/storage/divition/divition.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo/pages/storage/divition/divition.module.ts ***!
  \****************************************************************/
/*! exports provided: DivitonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivitonModule", function() { return DivitonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _divitionform_divitionform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./divitionform/divitionform.component */ "./src/app/demo/pages/storage/divition/divitionform/divitionform.component.ts");
/* harmony import */ var _divition_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./divition.component */ "./src/app/demo/pages/storage/divition/divition.component.ts");
/* harmony import */ var _divition_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./divition.routing.module */ "./src/app/demo/pages/storage/divition/divition.routing.module.ts");









let DivitonModule = class DivitonModule {
};
DivitonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _divition_routing_module__WEBPACK_IMPORTED_MODULE_8__["DivisionRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(),
        ],
        declarations: [_divitionform_divitionform_component__WEBPACK_IMPORTED_MODULE_6__["DivitionformComponent"], _divition_component__WEBPACK_IMPORTED_MODULE_7__["DivitionComponent"],]
    })
], DivitonModule);



/***/ }),

/***/ "./src/app/demo/pages/storage/divition/divition.routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/pages/storage/divition/divition.routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DivisionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionRoutingModule", function() { return DivisionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _divition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divition.component */ "./src/app/demo/pages/storage/divition/divition.component.ts");
/* harmony import */ var _divitionform_divitionform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./divitionform/divitionform.component */ "./src/app/demo/pages/storage/divition/divitionform/divitionform.component.ts");





const routes = [
    {
        path: '',
        component: _divition_component__WEBPACK_IMPORTED_MODULE_3__["DivitionComponent"]
    },
    {
        path: 'addstock',
        component: _divitionform_divitionform_component__WEBPACK_IMPORTED_MODULE_4__["DivitionformComponent"]
    }
];
let DivisionRoutingModule = class DivisionRoutingModule {
};
DivisionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DivisionRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/storage/divition/divitionform/divitionform.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/storage/divition/divitionform/divitionform.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n:-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input, .receiptaddform select, .receiptaddform button {\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #e8e8e8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.receiptaddform button {\n  color: white !important;\n  margin: 20% 0 0;\n  background-color: #65abe4; }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.arrayrow {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9zdG9yYWdlL2Rpdml0aW9uL2Rpdml0aW9uZm9ybS9DOlxcVXNlcnNcXEJoYXJhbmVlZGhhcmFuXFxEb3dubG9hZHNcXFdNUy0xXFx3bXMgMTQtMTIvc3JjXFxhcHBcXGRlbW9cXHBhZ2VzXFxzdG9yYWdlXFxkaXZpdGlvblxcZGl2aXRpb25mb3JtXFxkaXZpdGlvbmZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTLEVBQUE7O0FBR1g7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQ3RDO0VBQXVCLGVBQWUsRUFBQTs7QUFDdEM7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQXNCO0VBRXRCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQzNCLDBDQUF1QyxFQUFBOztBQUV2QztFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YseUJBQW9DLEVBQUE7O0FBR3RDO0VBQXdCLHVDQUF1QyxFQUFBOztBQUMvRDtFQUFXLGFBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc3RvcmFnZS9kaXZpdGlvbi9kaXZpdGlvbmZvcm0vZGl2aXRpb25mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2VpcHRhZGRmb3Jte1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlcnsgb3BhY2l0eTogMC43O2NvbG9yOmdyYXk7IH1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0eyBmb250LXNpemU6IDEzcHg7IH1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0LC5yZWNlaXB0YWRkZm9ybSBzZWxlY3QsIC5yZWNlaXB0YWRkZm9ybSBidXR0b257XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDAgMCAzJTtcclxuICBjb2xvcjogcmdiKDE0LCAxMywgMTMpO1xyXG4gIC8vIGNvbG9yOiByZ2IoMjQ1LCAxNDYsIDE3KTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2U4ZThlODtcclxuYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcbi5yZWNlaXB0YWRkZm9ybSBidXR0b257XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAyMCUgMCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDE3MSwgMjI4KTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMTIsIDEyNCk7XHJcbn1cclxuLnJlY2VpcHRhZGRmb3JtIC5jbGVhcnsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbCAhaW1wb3J0YW50OyB9XHJcbi5hcnJheXJvd3sgZGlzcGxheTpub25lOyB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/demo/pages/storage/divition/divitionform/divitionform.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/demo/pages/storage/divition/divitionform/divitionform.component.ts ***!
  \************************************************************************************/
/*! exports provided: DivitionformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivitionformComponent", function() { return DivitionformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage.service */ "./src/app/demo/pages/storage/storage.service.ts");





let DivitionformComponent = class DivitionformComponent {
    constructor(fb, toster, storageService) {
        this.fb = fb;
        this.toster = toster;
        this.storageService = storageService;
        this.arr = [];
        this.rackarry = [];
        this.rackfilter = [];
        this.finalRackArray = [];
    }
    ngOnInit() {
        this.receiptform = this.fb.group({
            _id: [''],
            rack: [''],
            division: [''],
            quantity: [''],
            racksize: [''],
            itemCode: [''],
            reciptno: [''],
            description: [''],
            vom: [''],
            used: [''],
            avalible: ['']
        });
        var pcData = JSON.parse(localStorage.getItem('pc'));
        this.receiptform.patchValue(pcData);
        this.storageService.getDivision().subscribe(data => {
            this.division = data;
            this.division.forEach(element => {
                this.arr.push(element);
            });
            const div = this.arr.reduce((acc, val) => {
                if (!acc.find(el => el.division === val.division)) {
                    acc.push(val);
                }
                return acc;
            }, []);
            this.finalDiv = div;
        });
        this.getRackData();
    }
    getRackData() {
        this.storageService.getDivision().subscribe(data => {
            this.rack = data;
            this.rack.forEach(element => {
                this.rackarry.push(element);
            });
        });
    }
    onOptionsSelected() {
        this.rackfilter = [];
        this.finalRackArray = [];
        this.filtered = this.rackarry.filter(t => t.division === this.selected.division);
        console.log(this.filtered);
        this.filtered.forEach(data => {
            this.rackfilter.push(data);
        });
        const div = this.rackfilter.reduce((acc, val) => {
            if (!acc.find(el => el.rack === val.rack)) {
                acc.push(val);
            }
            return acc;
        }, []);
        div.forEach(element => {
            this.finalRackArray.push(element);
        });
    }
    onSelected() {
        // alert(this.filterValue.quantity)
        console.log(this.filterValue);
        this.receiptform.patchValue({
            racksize: this.filterValue.quantity,
            avalible: this.filterValue.avalible
        });
    }
    addDivision(value) {
        if (this.filterValue.avalible >= this.itemQuantity) {
            this.storageService.postRack({
                _id: value._id,
                rack: this.filterValue.rack,
                division: this.selected.division,
                quantity: value.quantity,
                description: value.description,
                itemCode: value.itemCode,
                racksize: value.racksize,
                reciptno: value.reciptno,
                vom: value.vom
            }).subscribe(data => {
                this.toster.success('added successfully');
                console.log(data);
            });
            this.storageService.putDivision({
                _id: this.filterValue._id,
                division: this.filterValue.division,
                rack: this.filterValue.rack,
                quantity: this.filterValue.quantity,
                used: this.filterValue.used + this.itemQuantity,
                avalible: this.filterValue.avalible - this.itemQuantity
            }).subscribe(data => {
                this.toster.success('edit successfully');
                console.log(data);
            });
            localStorage.removeItem('pc');
        }
        else {
            alert('Avalible space less then quantity');
        }
    }
};
DivitionformComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
DivitionformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-divitionform',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./divitionform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/storage/divition/divitionform/divitionform.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./divitionform.component.scss */ "./src/app/demo/pages/storage/divition/divitionform/divitionform.component.scss")).default]
    })
], DivitionformComponent);



/***/ })

}]);
//# sourceMappingURL=divition-divition-module-es2015.js.map