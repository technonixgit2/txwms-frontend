(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-extra-sample-page-sample-page-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/productsform/productsform.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/productsform/productsform.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <app-card cardTitle=\"Purchase Details\" [options]=\"false\" blockClass=\"table-border-style\">\n      <form class=\"receiptaddform\"[formGroup]='purchaseForm' (ngSubmit)='onSubmit(purchaseForm.value)'>\n        <div class=\"row\">\n          <div class=\"col-lg-10\">  <input type=\"hidden\" formControlName=\"_id\"> </div>\n         \n          <input type=\"text\" size=\"50\" placeholder=\"Search Supplier Name\" class=\"form-control searchbar\" [formControl]=\"search_supply\">\n          <div style=\"width: 100%;\">\n            <div class=\"searchlist\">\n              <ul *ngIf='itemLength>2'>\n                <li *ngFor=\"let hero of result_supply\" (click)='getSuppliersData(hero)' style=\"cursor:pointer;\">\n                  <i class=\"fas fa-angle-down\"></i> &nbsp;{{hero.supplierName}}\n                </li>\n              </ul>\n            </div>\n          </div>\n          <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n          <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n          <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n\n         \n          <div class=\"col-lg-6\"> \n            <label for=\"date\">Date:</label> <br>  \n            <input type=\"date\" class=\"form-control\" placeholder=\"Enter date\" formControlName=\"supplierDate\" [(ngModel)]=\"dater\">\n            \n          </div>\n          <div class=\"col-lg-6\"> <label for=\"itemcode\">Supplier Name:</label> <br>  \n            <input type=\"text\" class=\"form-control\"  placeholder=\"Enter the Supplier Name\" formControlName=\"supplierName\"> \n            \n          </div>\n          <div class=\"col-lg-6\"> <label for=\"description\">Invoice Number:</label> <br> \n            <input type=\"text\" class=\"form-control\"  placeholder=\"Enter the Invoice Number\" formControlName=\"invoiceNo\"> \n           \n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12\"> <label for=\"text\"> <b>Product Details:</b> </label> </div>\n        </div>\n\n        <div formArrayName=\"invoice\" *ngFor=\"let a of purchaseForm.get('invoice')['controls']; let i = index\">\n          <div [formGroupName]=\"i\" style=\"margin-bottom: 10px;\">\n            <input type=\"hidden\" class=\"form-control\" formControlName=\"invDate\" [(ngModel)]=\"dater\">\n            <input type=\"hidden\" class=\"form-control\" formControlName=\"returnproduct\" >\n            <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" >\n\n        <div class=\"row\">\n          <div class=\"col-lg-2\"> \n            <input type=\"text\" class=\"form-control\" style=\"text-transform: capitalize;\"  placeholder=\"Enter Category\" formControlName=\"category\">       \n            </div>\n          <div class=\"col-lg-2\"> \n            <input type=\"text\" class=\"form-control\"  placeholder=\"Enter Item Code\" formControlName=\"itemCode\">       \n            </div>\n          <div class=\"col-lg-4\"> \n            <input type=\"text\" class=\"form-control\"  placeholder=\"Enter Item Description\" formControlName=\"description\">          \n          </div>\n          <div class=\"col-lg-2\"> \n            <input type=\"text\" class=\"form-control\"  placeholder=\"Enter Quantity\" formControlName=\"custQuantity\">           \n          </div>\n          <div class=\"col-lg-2\"> \n         <input type=\"text\" class=\"form-control\" placeholder=\"Enter the Invoice Total\" formControlName=\"total\">           \n          </div>\n          <div class=\"col-lg-1\"> \n            <button type=\"button\"  class=\"btn btn-secondary\" (click)=\"addItem()\"><i class=\"fas fa-plus\"></i> </button>         \n          </div>\n          <div class=\"col-lg-1\"  [hidden]='change==0'> \n            <button type=\"button\"  class=\"danger\" (click)=\"removeItem(i)\"><i class=\"fas fa-remove\"></i></button>         \n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-center\" > \n      <div class=\"col-lg-2\">\n     <button type=\"submit\" > Submit </button>  \n    </div>\n  </div>\n      </form>\n    </app-card>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/receiptorder/receiptorder.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/receiptorder/receiptorder.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\"  [hidden]='val==true'>\n\n    <div class=\"col-lg-12 text-right\">\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)='addform()'>\n        <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\"  (click)='exportToExcel(getData)'>Export &nbsp; <i class=\"fas fa-file-export\"></i></button>\n    </div>\n  \n      <div class=\"col-xl-12\">\n        <app-card cardTitle=\"Receipt Order\" [options]=\"false\" blockClass=\"table-border-style\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n              <thead>\n              <tr>\n                <th>Select</th>\n                <th> Date </th>\n                <th>Suppliers</th>\n                <th> Invoice Number </th>\n                <th> Invoice Amount </th>\n                <th>Action</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor='let data of getData'>\n                <td><input type=\"checkbox\" (change)='getValue(data,$event.target.checked)'></td>\n  \n                <td>{{data.supplierDate}}</td>\n                <td>{{data.supplierName}}</td>\n                <td>{{data.invoiceNo}}</td>\n                <td>Rs{{data.invoiceAmount | number:'1.2-2'}}</td>\n                <td>\n                  <button style=\"background: none; border: none;\" (click)='show(data)'><i style=\"color: gray;\" class=\"fa fa-eye\"></i> </button> &nbsp;&nbsp; \n  \n                 <button style=\"background: none; border: none;\" (click)='editPurchase(data)'> <i style=\"color: #007fbc;\" class=\"fa fa-edit\">  </i> </button> &nbsp;&nbsp; \n                    <button style=\"background: none; border: none;\" (click)='DeletePurchase(data._id)'> <i style=\"color: red;\" class=\"fa fa-trash\">  </i> </button>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n  \n  \n        </app-card>\n      </div>\n    </div>\n  \n    <section class=\"supplierview\"  [hidden]='val==false'>\n      <div class=\"row sviewform\">\n        <div class=\"col-lg-2\">\n          <label for=\"name\"> <b></b> Supplier Name: </label> <br>\n    \n        </div>\n        <div class=\"col-lg-3\">\n          <label for=\"nameans\"> {{name}} </label> <br>\n    \n        </div>\n        <div class=\"col-lg-1\">\n          <label for=\"contact\"> <b> Date: </b> </label> <br>\n    \n        </div>\n        <div class=\"col-lg-2\">\n          <label for=\"contactans\"> {{date}}</label> <br>\n    \n        </div>\n        <div class=\"col-lg-2\">\n          <label for=\"contact\"> <b> Invoice-No: </b> </label> <br>\n    \n        </div>\n        <div class=\"col-lg-2\">\n          <label for=\"contactans\"> {{invoice}}</label> <br>\n    \n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <table class=\"sviewtable\">\n            <thead>\n              <tr>\n               \n                <th scope=\"col\">itemCode</th>\n                <th scope=\"col\">description</th>\n                <th scope=\"col\">Quantity</th>\n                <th scope=\"col\">Total</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor='let dat of arr'>\n                \n                <td>{{dat.itemCode}} </td>\n                <td>{{dat.description}}</td>\n                <td>{{dat.custQuantity}}</td>\n                <td>{{dat.total}}</td>\n      \n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div> <button (click)='back()'>back</button> </div>\n      \n    </section>\n  \n  \n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/receving-pc/receiv-form/receiv-form.component.html": 
        /*!*********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/receving-pc/receiv-form/receiv-form.component.html ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Receiving on RF Details\" [options]=\"false\" blockClass=\"table-border-style\">\n        <form [formGroup]=\"addForm\" class=\"addreceiveform\" (ngSubmit)=\"postpc(addForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"_id\"> </div>\n            <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n            <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n\n            <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n\n            <div class=\"col-lg-6\">  <label for=\"pwd\">Date:</label>  <br>\n              <input type=\"date\" class=\"form-control\" placeholder=\"Date\" formControlName=\"date\">\n\n            </div>\n            <div class=\"col-lg-6\">  <label for=\"pwd\">Reciept Number:</label>  <br>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter HSN Code\" formControlName=\"reciptno\">\n\n            </div>\n            <div class=\"col-lg-6\">\n              <label for=\"email\">Item Code:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Item Code\" formControlName=\"itemCode\">\n\n            </div>\n            <div class=\"col-lg-6\"> <label for=\"pwd\">Description:</label> <br>\n              <input type=\"text\" class=\"form-control\" formControlName='description'placeholder=\"Enter the description\">\n\n            </div>\n\n            <div class=\"col-lg-6\"> <label for=\"pwd\">Quantity:</label>  <br>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Quantity\" formControlName=\"quantity\">\n            </div>\n            <div class=\"col-lg-6\"> <label for=\"pwd\">Unit Rate:</label>  <br>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Quantity\" formControlName=\"price\">\n            </div><div class=\"col-lg-6\"> <label for=\"pwd\">CGST:</label>  <br>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Quantity\" formControlName=\"cgst\">\n            </div><div class=\"col-lg-6\"> <label for=\"pwd\">SGST:</label>  <br>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Quantity\" formControlName=\"sgst\">\n            </div>\n            <div class=\"col-lg-6\"> <label for=\"uom\">UOM:</label> <br>\n              <input type=\"text\" class=\"form-control\" id=\"invoiceno\" placeholder=\"Enter UOM\" formControlName=\"vom\">\n\n            </div>\n            <div class=\"col-lg-6\">\n              <input type=\"text\" hidden formControlName=\"selected\">\n            </div>\n    \n            <div class=\"col-lg-12 text-center padtop\">  <button class=\"btn btn-primary\" type=\"submit\"> Submit </button>\n              <button class=\"btn btn-danger\" type=\"reset\" > Clear </button>  </div>\n            \n        \n        \n          </div>\n\n\n        </form>\n      </app-card>\n    </div>\n\n  </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/receving-pc/receving-pc.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/receving-pc/receving-pc.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xl-12 text-right\">\n        <button type=\"button\" class=\"addbutton btn btn-outline-primary\" (click)=\"addform()\">\n        <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n        </button>\n    </div>\n    <div class=\"col-md-12\">\n        <app-card cardTitle=\"Receive on RF\" [options]=\"false\" blockClass=\"table-border-style\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped recrftable\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n                    <thead>\n                        <tr>\n\n                          <th>Date</th>\n                          <th>Item Code</th>\n                          <th>Receipt No</th>\n                          <th>Product Description</th>\n                          <th>Quantity</th>\n                          \n                          <th>UOM</th>\n                          <th>Action</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let ex1 of getdata\">\n                          <td>{{ex1.date}}</td>\n                          <td>{{ex1.itemCode}}</td>\n                          <td>{{ex1.reciptno}}</td>\n                          <td>{{ex1.description}}</td>\n                          <td>{{ex1.quantity}}</td>\n                         \n                          <td>{{ex1.vom}}</td>\n                          <td>  <button (click)=\"editEx(ex1)\" style=\"border:none;background: none; color: #007bcf;\"> <i class=\"fa fa-edit\"></i> </button>\n                          <button (click)=\"delpc(ex1._id)\" style=\"border:none;background: none;color: red;\"> <i class=\"fa fa-trash\"></i> </button> </td>\n                        </tr>\n                      </tbody>\n                </table>\n            </div>\n        </app-card>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/receving-rf/receving-rf.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/receving-rf/receving-rf.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <!-- <div class=\"col-xl-12 text-right\">\n        <button type=\"button\" class=\"addbutton btn btn-outline-primary\" (click)=\"addpcform()\">\n        <img src=\"../../../../../assets/images/images/icons8-plus-24.png\" alt=\"\">\n        </button>\n    </div> -->\n    <div class=\"col-lg-12\">\n        <app-card cardTitle=\"Receiving on PC\" [options]=\"false\" blockClass=\"table-border-style\">\n            <div class=\"table-responsive\">\n            <table class=\"table table-striped recpctable\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n                <thead>\n                  <tr>\n                    <th > Date </th>\n                    <th > Item Code </th>\n                    <th > Recipt Number </th>\n                    <th> Description </th>\n                    <th > Quantity </th>\n                    <th > UOM </th>\n                    <th >Export</th>\n                  </tr>\n\n                  </thead>\n                  <tbody>\n                  <tr *ngFor='let data of value'>\n                    <td> {{data.date}} </td>\n                    <td> {{data.itemCode}} </td>\n                    <td> {{data.reciptno}} </td>\n                    <td> {{data.description}} </td>\n                    <td> {{data.quantity}} </td>\n                    <td> {{data.vom}} </td>\n                    <td><button (click)='editProduct(data)' style=\"border: none;background: none; color: #007bcf;\"> <i class=\"fa fa-edit\"></i> </button>\n                        <!-- <button (click)='deleteProduct(data._id)'> <i class=\"fa fa-trash\"></i> </button> -->\n                    </td>\n                  </tr>\n                </tbody>\n            </table>\n            </div>\n        </app-card>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/sample-page.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/sample-page.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"row\"  [hidden]='val==true'>\n\n  <div class=\"col-lg-12 text-right\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)='addform()'>\n      <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n  </button>\n  <button type=\"button\" class=\"btn btn-primary\"  (click)='exportToExcel(getData)'>Export &nbsp; <i class=\"fas fa-file-export\"></i></button>\n  </div>\n\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Purchase\" [options]=\"false\" blockClass=\"table-border-style\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n            <thead>\n            <tr>\n              <th>Select</th>\n              <th> Date </th>\n              <th>Suppliers</th>\n              <th> Invoice Number </th>\n              <th> Invoice Amount </th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor='let data of getData'>\n              <td><input type=\"checkbox\" (change)='getValue(data,$event.target.checked)'></td>\n\n              <td>{{data.supplierDate}}</td>\n              <td>{{data.supplierName}}</td>\n              <td>{{data.invoiceNo}}</td>\n              <td>Rs{{data.invoiceAmount | number:'1.2-2'}}</td>\n              <td>\n                <button style=\"background: none; border: none;\" (click)='show(data)'><i style=\"color: gray;\" class=\"fa fa-eye\"></i> </button> &nbsp;&nbsp; \n\n               <button style=\"background: none; border: none;\" (click)='editPurchase(data)'> <i style=\"color: #007fbc;\" class=\"fa fa-edit\">  </i> </button> &nbsp;&nbsp; \n                  <button style=\"background: none; border: none;\" (click)='DeletePurchase(data._id)'> <i style=\"color: red;\" class=\"fa fa-trash\">  </i> </button>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n\n\n      </app-card>\n    </div>\n  </div>\n\n  <section class=\"supplierview\"  [hidden]='val==false'>\n    <div class=\"row sviewform\">\n      <div class=\"col-lg-2\">\n        <label for=\"name\"> <b></b> Supplier Name: </label> <br>\n  \n      </div>\n      <div class=\"col-lg-3\">\n        <label for=\"nameans\"> {{name}} </label> <br>\n  \n      </div>\n      <div class=\"col-lg-1\">\n        <label for=\"contact\"> <b> Date: </b> </label> <br>\n  \n      </div>\n      <div class=\"col-lg-2\">\n        <label for=\"contactans\"> {{date}}</label> <br>\n  \n      </div>\n      <div class=\"col-lg-2\">\n        <label for=\"contact\"> <b> Invoice-No: </b> </label> <br>\n  \n      </div>\n      <div class=\"col-lg-2\">\n        <label for=\"contactans\"> {{invoice}}</label> <br>\n  \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <table class=\"sviewtable\">\n          <thead>\n            <tr>\n             \n              <th scope=\"col\">itemCode</th>\n              <th scope=\"col\">description</th>\n              <th scope=\"col\">Quantity</th>\n              <th scope=\"col\">Total</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor='let dat of arr'>\n              \n              <td>{{dat.itemCode}} </td>\n              <td>{{dat.description}}</td>\n              <td>{{dat.custQuantity}}</td>\n              <td>{{dat.total}}</td>\n    \n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div> <button (click)='back()'>back</button> </div>\n    \n  </section>\n\n -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/supplier/supplier.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/supplier/supplier.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Supplier Details\" [options]=\"false\" blockClass=\"table-border-style\">\n        <form class=\"receiptaddform\" [formGroup]='supplierForm' (ngSubmit)='onSubmit(supplierForm.value)'>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">  <input type=\"hidden\" formControlName=\"_id\"> </div>\n         \n                  \n              <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchId\" readonly>\n              <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchName\" readonly>\n\n              <input  type=\"hidden\"  class=\"form-control\"  formControlName=\"branchLocation\" readonly>            \n\n           \n\n            <div class=\"col-lg-6\"> \n                <label for=\"email\">Supplier Date:</label>         \n                <input  type=\"date\"  class=\"form-control\"  formControlName=\"supplierDate\">\n                 \n              </div>\n            <div class=\"col-lg-6\"> \n              <label for=\"email\">Supplier Name:</label>         \n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" formControlName=\"supplierName\">\n               \n            </div>\n            <div class=\"col-lg-6\"> <label for=\"pwd\">Contact Number:</label>  <br> \n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Contact Number\" formControlName=\"contactNumber\"> \n               \n            </div>\n            <div class=\"col-lg-6\">  <label for=\"pwd\"> Supplier Location:</label> <br>  \n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter  Location\" formControlName=\"supplierLocation\">\n                \n            </div>\n            <!-- <div class=\"col-lg-6\"> <label for=\"pwd\">Shipment Address:</label>  <br> \n              <textarea class=\"form-control\" placeholder=\"Enter Ship Address\" formControlName=\"shipAddress\"></textarea> \n              \n            </div> -->\n           \n           \n            <div class=\"col-lg-6\"> <label for=\"pwd\">Alternative Number:</label><br> \n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Alternative Number\" formControlName=\"alternateNumber\"> \n              \n            </div>\n            <div class=\"col-lg-6\">  <label for=\"pwd\">GST Number:</label> <br> \n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter GST Number\" formControlName=\"GSTNumber\"> \n              \n            </div>\n            \n          </div>\n         \n          <div class=\"d-flex justify-content-center padtop\">\n            <div class=\"col-lg-1\">  <button class=\"btn btn-primary\" type=\"submit\"> Submit </button>  </div>\n            <div class=\"col-lg-1\">  <button class=\"btn btn-danger\" type=\"reset\" > Clear </button>  </div>\n  \n          </div>\n        </form>\n      </app-card>\n    </div>\n  </div>\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/suppliertable/suppliertable.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/suppliertable/suppliertable.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n    <div class=\"col-lg-12 text-right\">\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)='supplierform()'>\n        <img src=\"../../../../../assets/images/plus.png\" alt=\"\">\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\"  (click)='exportToExcel(getSupplier)'>Export &nbsp; <i class=\"fas fa-file-export\"></i></button>\n    </div>\n    \n    <div class=\"col-xl-12\">\n      <app-card cardTitle=\"Suppliers\" [options]=\"false\" blockClass=\"table-border-style\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n            <thead>\n            <tr>\n              <th>Select</th>\n                <th>Date</th>\n              <th> Supplier Name </th>          \n              <th> Supplier Location </th>\n              <th> Contact Number </th>\n              <th>Alternate Number</th>\n              <th> GST Number </th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor='let data of datefilter'>\n            <td><input type=\"checkbox\" (change)='getValue(data,$event.target.checked)'></td>\n              <td>{{data.supplierDate}}</td>\n              <td>{{data.supplierName}}</td>\n              <td>{{data.supplierLocation}}</td>\n              <td>{{data.contactNumber}}</td>\n              <td>{{data.alternateNumber}}</td>\n              <td>{{data.GSTNumber}}</td>\n              <td><button (click)='editSupplier(data)' style=\"border: none; background: none; color: none;\"> <i style=\"color: #007bcf;\"class=\"fa fa-edit\"></i> </button> &nbsp;&nbsp;\n              <button (click)='deleteSupplier(data._id)'  style=\"border: none; background: none;\"> <i style=\"color: red\" class=\"fa fa-trash\"></i> </button>\n            </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n  \n\n      </app-card>\n    </div>\n  \n  </div>\n");
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/productsform/productsform.component.scss": 
        /*!*********************************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/productsform/productsform.component.scss ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n:-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input {\n  background-color: white;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform input[type=date] {\n  padding: 2px;\n  color: #b3aeae;\n  padding-left: 8px; }\n\n.receiptaddform button {\n  color: white !important;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  background-color: #65abe4;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.submit button {\n  margin-bottom: 0% !important; }\n\n.submit {\n  color: white !important;\n  width: 50%;\n  margin-left: 40%;\n  margin-bottom: 0% !important;\n  background-color: #65abe4; }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.danger {\n  background-color: #8b4646 !important; }\n\n.sub {\n  margin-left: 0px; }\n\n@media (max-width: 430px) {\n  .sub {\n    margin-left: -140px; } }\n\ntable {\n  background-color: #fcfcfc; }\n\n.tmargin {\n  padding: 0 20%; }\n\n.billing table {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  color: #212529; }\n\ndiv, p, a, li, td {\n  -webkit-text-size-adjust: none; }\n\n.ExternalClass {\n  width: 100%;\n  background-color: #FFFFFF; }\n\np {\n  padding: 0 !important;\n  margin-top: 0 !important;\n  margin-right: 0 !important;\n  margin-bottom: 0 !important;\n  margin-left: 0 !important; }\n\n.visibleMobile {\n  display: none; }\n\n.hiddenMobile {\n  display: block; }\n\n@media only screen and (max-width: 600px) {\n  body {\n    width: auto !important; }\n  table[class=fullTable] {\n    width: 96% !important;\n    clear: both; }\n  table[class=fullPadding] {\n    width: 85% !important;\n    clear: both; }\n  table[class=col] {\n    width: 45% !important; }\n  .erase {\n    display: none; } }\n\n@media only screen and (max-width: 420px) {\n  table[class=fullTable] {\n    width: 100% !important;\n    clear: both; }\n  table[class=fullPadding] {\n    width: 85% !important;\n    clear: both; }\n  table[class=col] {\n    width: 100% !important;\n    clear: both; }\n  table[class=col] td {\n    text-align: left !important; }\n  .erase {\n    display: none;\n    font-size: 0;\n    max-height: 0;\n    line-height: 0;\n    padding: 0; }\n  .visibleMobile {\n    display: block !important; }\n  .hiddenMobile {\n    display: none !important; } }\n\n.cddiv, .pddiv {\n  background-color: white;\n  padding: 1%; }\n\n.cddiv input, .cddiv textarea {\n  width: 100%;\n  padding: 1% 3%; }\n\n.cdmargin {\n  margin: 4% 0 0; }\n\n.pddiv input, .pddiv textarea {\n  width: 100%;\n  padding: 1% 3%; }\n\n.pddiv button {\n  margin: 13% 0 0; }\n\n.pdmargin {\n  margin: 2% 0 0; }\n\n.billtitle {\n  margin: 3% 0;\n  text-align: center; }\n\n.indel input {\n  width: 85%; }\n\n.indel button {\n  background: none;\n  border: none;\n  float: right;\n  width: 10%; }\n\n.invoicediv {\n  background-color: white; }\n\n.rowmargin {\n  margin: 1% 0; }\n\n.rowmarge {\n  padding: 1%;\n  margin: 2% 0; }\n\n.invoicediv .brandtitle h3 {\n  vertical-align: middle;\n  line-height: 90px; }\n\n.invoicediv .brandtype .row {\n  height: 50%; }\n\n.invoicediv .borderdiv {\n  border: 1px solid #646464; }\n\n.invoicediv .borderdiv p {\n  font-size: 12px;\n  line-height: 15px;\n  padding: 2% 2% 0 0; }\n\n.invoicedate table {\n  padding-left: 0%; }\n\n.invoicetable table tr,\n.invoicetable table th,\n.invoicetable table td {\n  border: 1px solid #6b6a6a;\n  background-color: white !important; }\n\n.invoicetable table th {\n  padding: 0;\n  text-align: center;\n  vertical-align: middle; }\n\n.invoicetable table td {\n  text-align: right;\n  padding: 0 1%;\n  background-color: none; }\n\n.invoicetable table .description {\n  text-align: left;\n  padding: 0 5px; }\n\n.rowmarginbottom {\n  padding: 1%;\n  margin: 10% 0 2%;\n  font-size: 12px; }\n\n.signbox {\n  border: 1px solid #686767; }\n\n.invoicefootertext {\n  line-height: 15px;\n  font-size: 12px; }\n\n.terms {\n  font-size: 10px; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  color: #030303;\n  border: 1px solid #ddd;\n  background-color: #e9e9e9; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #F2F2F2; }\n\n.invoiceinput {\n  border: 0.3px solid #c9c9c9;\n  background-color: none;\n  height: 15px;\n  width: 85px;\n  font-size: 10px; }\n\n.invoiceinputs {\n  border: 0.3px solid #c9c9c9;\n  background-color: none;\n  height: 15px;\n  width: 50px;\n  font-size: 10px !important; }\n\n.container {\n  width: 550px;\n  margin: 45px auto; }\n\n.clearfix {\n  clear: both; }\n\n.form-part {\n  margin: 20px 0; }\n\n.form-part h2 {\n  font-size: 25px;\n  font-weight: 400;\n  font-family: 'Josefin Sans', sans-serif;\n  margin-bottom: 15px; }\n\n.text-input,\n.radio-button,\n.check-boxes {\n  margin-bottom: 13px; }\n\n.text-input label,\n.radio-button label,\n.check-boxes label {\n  display: block;\n  margin-bottom: 3px;\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 14px;\n  font-weight: 600; }\n\n.radio-button label,\n.check-boxes label {\n  margin-bottom: 7px;\n  font-weight: 900; }\n\n.text-input input,\n.text-input textarea,\n.text-input select {\n  padding: 7px 7px;\n  display: block;\n  width: 100%;\n  border: solid 1px #ccc;\n  border-radius: 2px; }\n\n.text-input select {\n  width: 100%; }\n\n.text-input textarea {\n  height: 100px; }\n\n.sqr-input .text-input,\n.sqr-radio-input .radio-button,\n.sqr-check-input .check-boxes {\n  float: left;\n  width: 45%; }\n\n.sqr-input .text-input:nth-child(1),\n.sqr-radio-input .radio-button:nth-child(1),\n.sqr-check-input .check-boxes:nth-child(1) {\n  margin-right: 10%; }\n\n.cub-input .text-input {\n  float: left;\n  width: 26.66%; }\n\n.cub-input .text-input:nth-child(1),\n.cub-input .text-input:nth-child(2) {\n  margin-right: 10%; }\n\n.ns-radio-btn input[type=\"radio\"],\n.ns-check-box input[type=\"checkbox\"] {\n  visibility: hidden; }\n\n.productspace {\n  margin-top: 70px; }\n\n.addsubmit {\n  position: absolute;\n  bottom: 28px;\n  left: 720px; }\n\n.possupplier {\n  background-color: white;\n  color: black;\n  margin: 1%;\n  padding: 2%; }\n\n.possupplier .search1 {\n  border-right: none;\n  border-left: none;\n  border-top: none; }\n\n.search1 {\n  margin: 2%;\n  background-color: white;\n  background: none;\n  border-right: none;\n  border-left: none;\n  border-top: none; }\n\n.table1 {\n  position: relative;\n  width: 100%;\n  border: none;\n  background-color: white; }\n\n.table1 td {\n  padding: 1% 2%;\n  background-color: white;\n  font-family: 'Josefin Sans', sans-serif; }\n\n.possuppliertable {\n  position: relative;\n  background-color: white;\n  color: black;\n  margin: 1%;\n  padding: 2% 1%; }\n\n.possupplier .table1 input {\n  width: 100%; }\n\n.possupplier .table1 textarea {\n  width: 100%; }\n\n.possuppliertable button {\n  margin: 0 0 0 2%; }\n\n.tableadd {\n  position: relative;\n  width: 100%;\n  background-color: white; }\n\n.tableadd button {\n  border: none;\n  background-color: none;\n  background: none; }\n\n.searchlist ul {\n  width: 100% !important;\n  position: relative;\n  padding: 2%;\n  list-style-type: none;\n  background-color: white;\n  margin-top: 0%;\n  margin-left: 0%;\n  box-shadow: 0 5px 10px #888888;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.searchlist ul li {\n  position: absolute; }\n\n.searchlist1 {\n  position: relative;\n  width: 100%;\n  background: red; }\n\n.searchlist1 ul {\n  width: 100% !important;\n  position: relative;\n  padding: 2%;\n  list-style-type: none;\n  background-color: white;\n  margin-top: 0%;\n  margin-left: 0%;\n  box-shadow: 0 5px 10px #888888;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.searchlist1 ul li {\n  margin: 3px 0;\n  position: relative; }\n\n.tick {\n  height: 20px;\n  width: 20px; }\n\n.searchbar {\n  width: 40%; }\n\n.fa-search {\n  position: absolute;\n  margin-left: 47%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9leHRyYS9zYW1wbGUtcGFnZS9wcm9kdWN0c2Zvcm0vQzpcXFVzZXJzXFxCaGFyYW5lZWRoYXJhblxcRG93bmxvYWRzXFxXTVMtMVxcd21zIDE0LTEyL3NyY1xcYXBwXFxkZW1vXFxleHRyYVxcc2FtcGxlLXBhZ2VcXHByb2R1Y3RzZm9ybVxccHJvZHVjdHNmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBUyxFQUFBOztBQUViO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUN0QztFQUF1QixlQUFlLEVBQUE7O0FBQ3RDO0VBQ0ksdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBc0I7RUFFdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFBa0MsWUFBWTtFQUFDLGNBQXlCO0VBQUUsaUJBQWlCLEVBQUE7O0FBRTNGO0VBQ0ksdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBc0I7RUFFdEIseUJBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLDBDQUF1QyxFQUFBOztBQUczQztFQUNJLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1Qix5QkFBb0MsRUFBQTs7QUFFeEM7RUFBd0IsdUNBQXVDLEVBQUE7O0FBQy9EO0VBQVMsb0NBQTZDLEVBQUE7O0FBRXREO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0s7SUFDSSxtQkFBbUIsRUFBQSxFQUN0Qjs7QUFHTjtFQUFRLHlCQUFvQyxFQUFBOztBQUM1QztFQUFVLGNBQWMsRUFBQTs7QUFDeEI7RUFDSSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFbEI7RUFBb0IsOEJBQThCLEVBQUE7O0FBQ2xEO0VBQWlCLFdBQVc7RUFBRSx5QkFBeUIsRUFBQTs7QUFDdkQ7RUFBSSxxQkFBb0I7RUFBRSx3QkFBdUI7RUFBRSwwQkFBeUI7RUFBRSwyQkFBMkI7RUFBRSx5QkFBeUIsRUFBQTs7QUFDcEk7RUFBaUIsYUFBYSxFQUFBOztBQUM5QjtFQUFnQixjQUFjLEVBQUE7O0FBQzlCO0VBQ0E7SUFBTyxzQkFBc0IsRUFBQTtFQUM3QjtJQUF5QixxQkFBcUI7SUFBRSxXQUFXLEVBQUE7RUFDM0Q7SUFBMkIscUJBQXFCO0lBQUUsV0FBVyxFQUFBO0VBQzdEO0lBQW1CLHFCQUFxQixFQUFBO0VBQ3hDO0lBQVMsYUFBYSxFQUFBLEVBQUk7O0FBRTFCO0VBQ0E7SUFBeUIsc0JBQXNCO0lBQUUsV0FBVyxFQUFBO0VBQzVEO0lBQTJCLHFCQUFxQjtJQUFFLFdBQVcsRUFBQTtFQUM3RDtJQUFtQixzQkFBc0I7SUFBRSxXQUFXLEVBQUE7RUFDdEQ7SUFBc0IsMkJBQTJCLEVBQUE7RUFDakQ7SUFBUyxhQUFhO0lBQUUsWUFBWTtJQUFFLGFBQWE7SUFBRSxjQUFjO0lBQUUsVUFBVSxFQUFBO0VBQy9FO0lBQWlCLHlCQUF5QixFQUFBO0VBQzFDO0lBQWdCLHdCQUF3QixFQUFBLEVBQUk7O0FBRTVDO0VBQ0ksdUJBQXVCO0VBQ3ZCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQWMsVUFBVSxFQUFBOztBQUN4QjtFQUNFLGdCQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBQ1o7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0UsV0FBVztFQUNWLFlBQVksRUFBQTs7QUFFZjtFQUNJLHNCQUFzQjtFQUN0QixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSx5QkFBb0MsRUFBQTs7QUFHeEM7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjs7O0VBR0kseUJBQW9DO0VBQ3BDLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUVsQjtFQUNFLFdBQVc7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLHlCQUFvQyxFQUFBOztBQUV4QztFQUNJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBb0MsRUFBQTs7QUFHdEM7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQW1CLHlCQUF5QixFQUFBOztBQUM1QztFQUNFLDJCQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsMkJBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUF5QixFQUFBOztBQUU3QjtFQUNJLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsbUJBQW1CLEVBQUE7O0FBR3JCOzs7RUFHRSxtQkFBbUIsRUFBQTs7QUFHckI7OztFQUdFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7O0VBRUUsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjs7O0VBR0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsc0JBQXNCO0VBR3RCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWEsRUFBQTs7QUFHZjs7O0VBR0UsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFHWjs7O0VBR0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFHZjs7RUFFRSxpQkFBaUIsRUFBQTs7QUFHbkI7O0VBRUUsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFVLEVBQUE7O0FBTWQ7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBRWY7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNLLFVBQVc7RUFDWix1QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFFWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBRzNCO0VBQVksY0FBYztFQUN4Qix1QkFBdUI7RUFDdkIsdUNBQXVDLEVBQUE7O0FBRXpDO0VBQ0ksa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osVUFBVTtFQUNWLGNBQWMsRUFBQTs7QUFFbEI7RUFBNEIsV0FBVyxFQUFBOztBQUN2QztFQUErQixXQUFXLEVBQUE7O0FBQzFDO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBRUUsa0JBQWtCO0VBQ2hCLFdBQVc7RUFFWCx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUVwQjtFQUVFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUE7O0FBRWpDO0VBRUksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVU7RUFFUixlQUFlLEVBQUE7O0FBR25CO0VBRUksc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwrQkFBK0IsRUFBQTs7QUFFbkM7RUFFSyxhQUFjO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZXh0cmEvc2FtcGxlLXBhZ2UvcHJvZHVjdHNmb3JtL3Byb2R1Y3RzZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jb250YWluZXJcclxuLy8ge1xyXG4vLyAgICAgcGFkZGluZzogMiU7XHJcbi8vICAgICBib3gtc2hhZG93OiAxcHggM3B4IDNweCAzcHggbGlnaHRibHVlO1xyXG4vLyB9XHJcbi8vIC50aGhlYWRcclxuLy8ge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgcGFkZGluZzogMiUgMDtcclxuLy8gfVxyXG5cclxuXHJcbi8vID09PT09XHJcbi5yZWNlaXB0YWRkZm9ybXtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG46OnBsYWNlaG9sZGVyeyBvcGFjaXR5OiAwLjc7Y29sb3I6Z3JheTsgfVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXR7IGZvbnQtc2l6ZTogMTNweDsgfVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAzJTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEzLCAxMyk7XHJcbiAgICAvLyBjb2xvcjogcmdiKDI0NSwgMTQ2LCAxNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNFOEU4RTg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMSk7IFxyXG59XHJcbi5yZWNlaXB0YWRkZm9ybSBpbnB1dFt0eXBlPWRhdGVdeyBwYWRkaW5nOiAycHg7Y29sb3I6IHJnYigxNzksIDE3NCwgMTc0KTsgcGFkZGluZy1sZWZ0OiA4cHg7fVxyXG5cclxuLnJlY2VpcHRhZGRmb3JtIGJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMCAwIDMlO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMTMsIDEzKTtcclxuICAgIC8vIG1hcmdpbjogMTUlIDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDE3MSwgMjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0U4RThFODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIxMiwgMTI0KTtcclxufVxyXG4uc3VibWl0IGJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDAlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5zdWJtaXR7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDE3MSwgMjI4KTtcclxufVxyXG4ucmVjZWlwdGFkZGZvcm0gLmNsZWFyeyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsICFpbXBvcnRhbnQ7IH1cclxuLmRhbmdlcnsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgNzAsIDcwKSAhaW1wb3J0YW50OyB9XHJcblxyXG4uc3Vie1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuQG1lZGlhICAobWF4LXdpZHRoOiA0MzBweCl7XHJcbiAgICAgLnN1YntcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNDBweDtcclxuICAgICB9XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG50YWJsZSB7IGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTt9XHJcbi50bWFyZ2lueyBwYWRkaW5nOiAwIDIwJTt9XHJcbi5iaWxsaW5nIHRhYmxlIHsgXHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5kaXYsIHAsIGEsIGxpLCB0ZCB7IC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTsgfVxyXG4uRXh0ZXJuYWxDbGFzcyB7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyB9XHJcbnAgeyBwYWRkaW5nOiAwIWltcG9ydGFudDsgbWFyZ2luLXRvcDogMCFpbXBvcnRhbnQ7IG1hcmdpbi1yaWdodDogMCFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDsgfVxyXG4udmlzaWJsZU1vYmlsZSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuLmhpZGRlbk1vYmlsZSB7IGRpc3BsYXk6IGJsb2NrOyB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuYm9keSB7IHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7IH1cclxudGFibGVbY2xhc3M9ZnVsbFRhYmxlXSB7IHdpZHRoOiA5NiUgIWltcG9ydGFudDsgY2xlYXI6IGJvdGg7IH1cclxudGFibGVbY2xhc3M9ZnVsbFBhZGRpbmddIHsgd2lkdGg6IDg1JSAhaW1wb3J0YW50OyBjbGVhcjogYm90aDsgfVxyXG50YWJsZVtjbGFzcz1jb2xdIHsgd2lkdGg6IDQ1JSAhaW1wb3J0YW50OyB9XHJcbi5lcmFzZSB7IGRpc3BsYXk6IG5vbmU7IH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbnRhYmxlW2NsYXNzPWZ1bGxUYWJsZV0geyB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBjbGVhcjogYm90aDsgfVxyXG50YWJsZVtjbGFzcz1mdWxsUGFkZGluZ10geyB3aWR0aDogODUlICFpbXBvcnRhbnQ7IGNsZWFyOiBib3RoOyB9XHJcbnRhYmxlW2NsYXNzPWNvbF0geyB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBjbGVhcjogYm90aDsgfVxyXG50YWJsZVtjbGFzcz1jb2xdIHRkIHsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50OyB9XHJcbi5lcmFzZSB7IGRpc3BsYXk6IG5vbmU7IGZvbnQtc2l6ZTogMDsgbWF4LWhlaWdodDogMDsgbGluZS1oZWlnaHQ6IDA7IHBhZGRpbmc6IDA7IH1cclxuLnZpc2libGVNb2JpbGUgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XHJcbi5oaWRkZW5Nb2JpbGUgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cclxufVxyXG4uY2RkaXYsIC5wZGRpdnsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgXHJcbn1cclxuLmNkZGl2IGlucHV0LC5jZGRpdiB0ZXh0YXJlYXsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDElIDMlO1xyXG59XHJcbi5jZG1hcmdpbntcclxuICAgIG1hcmdpbjogNCUgMCAwO1xyXG59XHJcbi5wZGRpdiBpbnB1dCAsIC5wZGRpdiB0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMSUgMyU7XHJcbn1cclxuLnBkZGl2IGJ1dHRvbntcclxuICAgIG1hcmdpbjogMTMlIDAgMDtcclxufVxyXG4ucGRtYXJnaW57XHJcbiAgICBtYXJnaW46IDIlIDAgMDtcclxufVxyXG4uYmlsbHRpdGxle1xyXG4gICAgbWFyZ2luOiAzJSAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5kZWwgaW5wdXR7IHdpZHRoOiA4NSU7fVxyXG4uaW5kZWwgYnV0dG9ueyBcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZsb2F0OiByaWdodDsgXHJcbiAgd2lkdGg6IDEwJTt9XHJcbi5pbnZvaWNlZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyAgcGFkZGluZzogMSU7XHJcbn1cclxuLnJvd21hcmdpbntcclxuICAgIG1hcmdpbjogMSUgMDtcclxufVxyXG4ucm93bWFyZ2V7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgIG1hcmdpbjogMiUgMDtcclxufVxyXG4uaW52b2ljZWRpdiAuYnJhbmR0aXRsZSBoM3tcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBsaW5lLWhlaWdodDogOTBweDtcclxufVxyXG4uaW52b2ljZWRpdiAuYnJhbmR0eXBlIC5yb3d7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG4uaW52b2ljZWRpdiAuYm9yZGVyZGl2e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgLy8gcGFkZGluZzogMSU7XHJcbn1cclxuLmludm9pY2VkaXYgLmJvcmRlcmRpdiBwe1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAyJSAyJSAwIDA7XHJcbn1cclxuLmludm9pY2VkYXRlIHRhYmxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxufVxyXG4uaW52b2ljZXRhYmxlIHRhYmxlIHRyLFxyXG4uaW52b2ljZXRhYmxlIHRhYmxlIHRoLFxyXG4uaW52b2ljZXRhYmxlIHRhYmxlIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDcsIDEwNiwgMTA2KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmludm9pY2V0YWJsZSB0YWJsZSB0aHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5pbnZvaWNldGFibGUgdGFibGUgdGQgeyBcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMCAxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbn1cclxuLmludm9pY2V0YWJsZSB0YWJsZSAuZGVzY3JpcHRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuLnJvd21hcmdpbmJvdHRvbXtcclxuICBwYWRkaW5nOiAxJTtcclxuICAgIG1hcmdpbjogMTAlIDAgMiU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnNpZ25ib3h7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTA0LCAxMDMsIDEwMyk7XHJcbn1cclxuLmludm9pY2Vmb290ZXJ0ZXh0e1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnRlcm1ze1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHJnYigzLCAzLCAzKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMn1cclxuICAuaW52b2ljZWlucHV0e1xyXG4gICAgYm9yZGVyOiAwLjNweCBzb2xpZCByZ2IoMjAxLCAyMDEsIDIwMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC5pbnZvaWNlaW5wdXRze1xyXG4gICAgYm9yZGVyOiAwLjNweCBzb2xpZCByZ2IoMjAxLCAyMDEsIDIwMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBtYXJnaW46IDQ1cHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmNsZWFyZml4IHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1wYXJ0IHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1wYXJ0IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbnB1dCxcclxuICAucmFkaW8tYnV0dG9uLFxyXG4gIC5jaGVjay1ib3hlcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbnB1dCBsYWJlbCxcclxuICAucmFkaW8tYnV0dG9uIGxhYmVsLFxyXG4gIC5jaGVjay1ib3hlcyBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYWRpby1idXR0b24gbGFiZWwsXHJcbiAgLmNoZWNrLWJveGVzIGxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LWlucHV0IGlucHV0LFxyXG4gIC50ZXh0LWlucHV0IHRleHRhcmVhLFxyXG4gIC50ZXh0LWlucHV0IHNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiA3cHggN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbnB1dCBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LWlucHV0IHRleHRhcmVhIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcXItaW5wdXQgLnRleHQtaW5wdXQsXHJcbiAgLnNxci1yYWRpby1pbnB1dCAucmFkaW8tYnV0dG9uLFxyXG4gIC5zcXItY2hlY2staW5wdXQgLmNoZWNrLWJveGVzIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICB9XHJcbiAgXHJcbiAgLnNxci1pbnB1dCAudGV4dC1pbnB1dDpudGgtY2hpbGQoMSksXHJcbiAgLnNxci1yYWRpby1pbnB1dCAucmFkaW8tYnV0dG9uOm50aC1jaGlsZCgxKSxcclxuICAuc3FyLWNoZWNrLWlucHV0IC5jaGVjay1ib3hlczpudGgtY2hpbGQoMSkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdWItaW5wdXQgLnRleHQtaW5wdXQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjYuNjYlO1xyXG4gIH1cclxuICBcclxuICAuY3ViLWlucHV0IC50ZXh0LWlucHV0Om50aC1jaGlsZCgxKSxcclxuICAuY3ViLWlucHV0IC50ZXh0LWlucHV0Om50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICB9XHJcbiAgXHJcbiAgLm5zLXJhZGlvLWJ0biBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXHJcbiAgLm5zLWNoZWNrLWJveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAucHJvZHVjdHNwYWNle1xyXG4gICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gIH1cclxuIFxyXG4gIFxyXG4gIC5hZGRzdWJtaXR7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAyOHB4O1xyXG4gICAgICBsZWZ0OjcyMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tbmV3IGZlRGlmZnVzZUxpZ2h0aW5nXHJcblxyXG4gIC5wb3NzdXBwbGllcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcbi5wb3NzdXBwbGllciAuc2VhcmNoMXtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG4uc2VhcmNoMXtcclxuICAgICBtYXJnaW46IDIlIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuLnRhYmxlMXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gbWFyZ2luOiAyJSA1JTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4udGFibGUxIHRkeyBwYWRkaW5nOiAxJSAyJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBvc3N1cHBsaWVydGFibGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBwYWRkaW5nOiAyJSAxJTtcclxufVxyXG4ucG9zc3VwcGxpZXIgLnRhYmxlMSBpbnB1dHsgd2lkdGg6IDEwMCU7IH1cclxuLnBvc3N1cHBsaWVyIC50YWJsZTEgdGV4dGFyZWF7IHdpZHRoOiAxMDAlOyB9XHJcbi5wb3NzdXBwbGllcnRhYmxlIGJ1dHRvbntcclxuICAgIG1hcmdpbjogMCAwIDAgMiU7XHJcbn1cclxuLnRhYmxlYWRke1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1hcmdpbjogMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLnRhYmxlYWRkIGJ1dHRvbntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5zZWFyY2hsaXN0IHVsXHJcbntcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAyJTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggIzg4ODg4ODtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG4uc2VhcmNobGlzdCB1bCBsaXtcclxuICAgIC8vIG1hcmdpbjogMSUgMCA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnNlYXJjaGxpc3QxIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICAgIC8vIG1hcmdpbi10b3A6IC01JTtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuIFxyXG59XHJcbi5zZWFyY2hsaXN0MSB1bFxyXG57XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAjODg4ODg4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuLnNlYXJjaGxpc3QxIHVsIGxpXHJcbntcclxuICAgICBtYXJnaW46IDNweCAwIDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbi50aWNre1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLnNlYXJjaGJhcntcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uZmEtc2VhcmNoe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogNDclO1xyXG4gIFxyXG59XHJcblxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/productsform/productsform.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/productsform/productsform.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: ProductsformComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsformComponent", function () { return ProductsformComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _purchase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var ProductsformComponent = /** @class */ (function () {
                function ProductsformComponent(fb, purchaseService, toster) {
                    var _this = this;
                    this.fb = fb;
                    this.purchaseService = purchaseService;
                    this.toster = toster;
                    this.isLoading = false;
                    this.arr = [];
                    this.change = 0;
                    this.search_supply = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                        _this.Name = element.branchName;
                        _this.location = element.branchLocation;
                    });
                }
                ProductsformComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sale = JSON.parse(localStorage.getItem('key'));
                    this.arr = this.sale;
                    this.getSuplier();
                    this.purchaseForm = this.fb.group({
                        _id: [''],
                        branchId: this.id,
                        branchName: this.Name,
                        branchLocation: this.location,
                        supplierDate: [''],
                        supplierName: [''],
                        invoiceNo: [''],
                        invoice: this.fb.array([this.invoi])
                    });
                    this.search_supply.valueChanges.pipe(
                    // tap(() => this.isLoading = true),
                    // debounce(() => interval(1000)),
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (value) { return _this.searchsupply(value); })).subscribe(function (res) {
                        _this.result_supply = res;
                        _this.isLoading = false;
                    }, function (err) {
                        console.error(err.error);
                    });
                    console.log(this.result_list);
                    this.loadForm(this.sale);
                    this.update(this.sale);
                };
                ProductsformComponent.prototype.loadForm = function (data) {
                    //create lines array first
                    for (var line = 1; line < data.invoice.length; line++) {
                        var invoiceFormArray = this.purchaseForm.get("invoice");
                        invoiceFormArray.push(this.invoi);
                    }
                    //once we setup the form with all the arrays and such, we cna just
                    //patch the form:
                };
                Object.defineProperty(ProductsformComponent.prototype, "invoi", {
                    get: function () {
                        return this.fb.group({
                            branchId: this.id,
                            itemCode: [''],
                            description: [''],
                            returnproduct: [0],
                            custQuantity: [''],
                            category: [''],
                            invDate: [''],
                            total: []
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                // get invoice():FormGroup{
                //   return this.fb.group({
                //     _id:'',
                //     itemCode:'',
                //     idate:'',
                //     description:'',
                //     hsnCode:'',
                //     vom:'',
                //     custQuantity:'',
                //     unitRate:'',
                //     CGST:'',
                //     SGST:'',
                //     col33: 0,
                //     col34:0,
                //     col35:0,
                //             });
                // }
                ProductsformComponent.prototype.addItem = function () {
                    this.change++;
                    this.invoice = this.purchaseForm.get('invoice');
                    this.invoice.push(this.invoi);
                };
                ProductsformComponent.prototype.removeItem = function (index) {
                    this.change--;
                    this.invoice = this.purchaseForm.get('invoice');
                    this.invoice.removeAt(index);
                };
                ProductsformComponent.prototype.onSubmit = function (val) {
                    var _this = this;
                    //  this.toster.warning('Updated successfully');
                    // this.toster.success('Updated successfully');
                    // if (val._id=='') {
                    this.purchaseService.postPurchaseData(val).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('Added successfully');
                        _this.purchaseForm.reset();
                        // this.purchaseForm.
                    });
                    // } else {
                    //   this.purchaseService.putPurchaseData(val).subscribe(data=>{
                    //     console.log(data)
                    //    })
                    // }
                    console.log(this.purchaseForm.value);
                };
                ProductsformComponent.prototype.update = function (val) {
                    this.change = (val.invoice.length) - 1;
                    console.log(val.invoice.length, 'salesupdate');
                    this.purchaseForm.patchValue(val);
                };
                ProductsformComponent.prototype.searchsupply = function (keyword) {
                    this.itemLength = keyword.length;
                    var key = keyword.toLowerCase();
                    console.log(keyword.toLocaleLowerCase(), 'viki');
                    var emp = [key];
                    var result = this.getSuppliers.filter(function (e) {
                        // e.name.indexOf(emp) !== -1)
                        return e.supplierName.toLowerCase().indexOf(emp) !== -1;
                    });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
                };
                ProductsformComponent.prototype.getSuppliersData = function (value) {
                    this.itemLength = 0;
                    // var val=value
                    value.date = this.dater;
                    // this.arrdate=value.date
                    value._id = " ";
                    console.log(value, 'getsupply value');
                    // console.log(value.date,'getsupply value')
                    this.purchaseForm.patchValue(value);
                };
                ProductsformComponent.prototype.getSuplier = function () {
                    var _this = this;
                    this.purchaseService.getData().subscribe(function (data) {
                        _this.getSuppliers = data;
                        console.log(_this.getSuppliers, 'buttonsuplier');
                    });
                };
                return ProductsformComponent;
            }());
            ProductsformComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _purchase_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
            ]; };
            ProductsformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-productsform',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./productsform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/productsform/productsform.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./productsform.component.scss */ "./src/app/demo/extra/sample-page/productsform/productsform.component.scss")).default]
                })
            ], ProductsformComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/receiptorder/receiptorder.component.scss": 
        /*!*********************************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/receiptorder/receiptorder.component.scss ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".modal.right .modal-dialog {\n  position: fixed;\n  margin: auto;\n  width: 320px;\n  height: 100%;\n  transform: translate3d(0%, 0, 0); }\n\n.modal.right .modal-content {\n  height: 100%;\n  overflow-y: auto; }\n\n.modal.right .modal-body {\n  padding: 15px 15px 80px; }\n\n/*Right*/\n\n.modal.right.fade .modal-dialog {\n  right: -320px;\n  transition: opacity 0.3s linear, right 0.3s ease-out; }\n\n.modal.right.fade.in .modal-dialog {\n  right: 0; }\n\n/* ----- MODAL STYLE ----- */\n\n.modal-content {\n  border-radius: 0;\n  border: none; }\n\n.modal-header {\n  border-bottom-color: #EEEEEE;\n  background-color: #FAFAFA; }\n\nbutton img {\n  height: 15px;\n  width: 15px; }\n\n.table-b tr, .table-b td, .table-b th {\n  border: 1px solid #868484;\n  text-align: center; }\n\nbody {\n  background: #ecf1f5;\n  font: 14px \"Open Sans\", sans-serif;\n  text-align: center; }\n\n.supplierview {\n  margin: 0 5%;\n  padding: 2%;\n  background-color: white; }\n\n.sviewtable {\n  width: 100%;\n  background-color: white; }\n\n.sviewform {\n  color: #504c4c; }\n\n.sviewtable {\n  margin: 2% 0; }\n\n.sviewtable th {\n  text-align: center; }\n\n.sviewtable tr, .sviewtable th, .sviewtable td {\n  border: 1px solid gray;\n  padding: 0.5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9leHRyYS9zYW1wbGUtcGFnZS9yZWNlaXB0b3JkZXIvQzpcXFVzZXJzXFxCaGFyYW5lZWRoYXJhblxcRG93bmxvYWRzXFxXTVMtMVxcd21zIDE0LTEyL3NyY1xcYXBwXFxkZW1vXFxleHRyYVxcc2FtcGxlLXBhZ2VcXHJlY2VpcHRvcmRlclxccmVjZWlwdG9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUlKLGdDQUFnQyxFQUFBOztBQUd6QztFQUNDLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyx1QkFBdUIsRUFBQTs7QUFHekIsUUFBQTs7QUFDQztFQUNDLGFBQWE7RUFJTCxvREFBb0QsRUFBQTs7QUFHN0Q7RUFDQyxRQUFRLEVBQUE7O0FBR1YsNEJBQUE7O0FBQ0M7RUFDQyxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdiO0VBQ0MsNEJBQTRCO0VBQzVCLHlCQUF5QixFQUFBOztBQUkxQjtFQUNDLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBVWI7RUFFQyx5QkFBb0M7RUFDcEMsa0JBQWtCLEVBQUE7O0FBRW5CO0VBQ0MsbUJBQW1CO0VBQ25CLGtDQUFpQztFQUNqQyxrQkFBaUIsRUFBQTs7QUFFbEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLFdBQVc7RUFDWCx1QkFBdUIsRUFBQTs7QUFFekI7RUFBYSxjQUFxQixFQUFBOztBQUNsQztFQUFjLFlBQVksRUFBQTs7QUFDMUI7RUFBZSxrQkFBa0IsRUFBQTs7QUFDakM7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9leHRyYS9zYW1wbGUtcGFnZS9yZWNlaXB0b3JkZXIvcmVjZWlwdG9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblx0Lm1vZGFsLnJpZ2h0IC5tb2RhbC1kaWFsb2cge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0d2lkdGg6IDMyMHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwKTtcclxuXHRcdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCwgMCk7XHJcblx0XHQgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDApO1xyXG5cdFx0ICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwKTtcclxuXHR9XHJcblxyXG5cdC5tb2RhbC5yaWdodCAubW9kYWwtY29udGVudCB7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRvdmVyZmxvdy15OiBhdXRvO1xyXG5cdH1cclxuXHRcclxuXHQubW9kYWwucmlnaHQgLm1vZGFsLWJvZHkge1xyXG5cdFx0cGFkZGluZzogMTVweCAxNXB4IDgwcHg7XHJcblx0fVxyXG4gICAgICAgIFxyXG4vKlJpZ2h0Ki9cclxuXHQubW9kYWwucmlnaHQuZmFkZSAubW9kYWwtZGlhbG9nIHtcclxuXHRcdHJpZ2h0OiAtMzIwcHg7XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHJpZ2h0IDAuM3MgZWFzZS1vdXQ7XHJcblx0XHQgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHJpZ2h0IDAuM3MgZWFzZS1vdXQ7XHJcblx0XHQgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHJpZ2h0IDAuM3MgZWFzZS1vdXQ7XHJcblx0XHQgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHJpZ2h0IDAuM3MgZWFzZS1vdXQ7XHJcblx0fVxyXG5cdFxyXG5cdC5tb2RhbC5yaWdodC5mYWRlLmluIC5tb2RhbC1kaWFsb2cge1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0fVxyXG5cclxuLyogLS0tLS0gTU9EQUwgU1RZTEUgLS0tLS0gKi9cclxuXHQubW9kYWwtY29udGVudCB7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuXHJcblx0Lm1vZGFsLWhlYWRlciB7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjRUVFRUVFO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuXHR9XHJcblxyXG5cclxuXHRidXR0b24gaW1ne1xyXG5cdFx0aGVpZ2h0OiAxNXB4O1xyXG5cdFx0d2lkdGg6IDE1cHg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxuXHJcblx0XHJcblxyXG5cclxuLnRhYmxlLWIgdHIgLCAudGFibGUtYiB0ZCwgLnRhYmxlLWIgdGhcclxue1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzQsIDEzMiwgMTMyKTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYm9keSB7XHJcblx0YmFja2dyb3VuZDogI2VjZjFmNTtcclxuXHRmb250OjE0cHggXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjsgXHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLnN1cHBsaWVydmlld3tcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnN2aWV3dGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnN2aWV3Zm9ybSB7IGNvbG9yOnJnYig4MCwgNzYsIDc2KTsgfVxyXG4uc3ZpZXd0YWJsZSB7IG1hcmdpbjogMiUgMDsgfVxyXG4uc3ZpZXd0YWJsZSB0aHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uc3ZpZXd0YWJsZSB0ciwgLnN2aWV3dGFibGUgdGgsIC5zdmlld3RhYmxlIHRke1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgcGFkZGluZzogMC41JSA7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/receiptorder/receiptorder.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/receiptorder/receiptorder.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: ReceiptorderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptorderComponent", function () { return ReceiptorderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _purchase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");
            var ReceiptorderComponent = /** @class */ (function () {
                function ReceiptorderComponent(router, purchaseService, toster, excelService) {
                    this.router = router;
                    this.purchaseService = purchaseService;
                    this.toster = toster;
                    this.excelService = excelService;
                    this.checklist = [];
                    this.Excel = [];
                    this.arr = [];
                    this.val = false;
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                }
                ReceiptorderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.purchaseService.getPurchaseData().subscribe(function (data) {
                        _this.getData = data;
                        console.log(_this.getData);
                        _this.dtTrigger.next();
                    });
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                };
                ReceiptorderComponent.prototype.ngOnDestroy = function () {
                    // Do not forget to unsubscribe the event
                    this.dtTrigger.unsubscribe();
                };
                ReceiptorderComponent.prototype.addform = function () {
                    localStorage.removeItem('key');
                    this.router.navigate(['/receiving/form']);
                };
                ReceiptorderComponent.prototype.show = function (val) {
                    this.val = true;
                    this.name = val.supplierName;
                    this.date = val.supplierDate;
                    this.invoice = val.invoiceNo;
                    this.arr = val.invoice;
                    console.log(val, 'show');
                };
                ReceiptorderComponent.prototype.back = function () {
                    this.val = false;
                };
                ReceiptorderComponent.prototype.editPurchase = function (value) {
                    localStorage.setItem('key', JSON.stringify(value));
                    this.router.navigate(['/receiving/form']);
                };
                ReceiptorderComponent.prototype.DeletePurchase = function (id) {
                    var _this = this;
                    this.purchaseService.deletePurchaseData(id).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('deleted successfully');
                    });
                };
                ReceiptorderComponent.prototype.getValue = function (value, isChecked) {
                    if (isChecked) {
                        this.checklist.push(value);
                    }
                    else {
                        var index = this.checklist.indexOf(value);
                        this.checklist.splice(index, 1);
                    }
                    console.log(this.checklist);
                };
                ReceiptorderComponent.prototype.exportToExcel = function (event) {
                    var _this = this;
                    console.log(this.checklist, 'check');
                    if (this.checklist.length == 0) {
                        this.Excel = [];
                        event.forEach(function (dat) {
                            dat.invoice.forEach(function (da) {
                                var SupplierName = dat.supplierName;
                                var InvoiceNo = dat.invoiceNo;
                                var ItemCode = da.itemCode;
                                var InvoiceDate = da.invDate;
                                var Quantity = da.custQuantity;
                                var Description = da.description;
                                var InvoiceAmount = dat.invoiceAmount;
                                var obj = Object.assign({ SupplierName: SupplierName, InvoiceNo: InvoiceNo, InvoiceDate: InvoiceDate, ItemCode: ItemCode, Description: Description, Quantity: Quantity, InvoiceAmount: InvoiceAmount });
                                _this.Excel.push(obj);
                            });
                        });
                        console.log(this.Excel, 'if');
                        this.excelService.exportAsExcelFile(this.Excel, 'persons');
                    }
                    else {
                        this.Excel = [];
                        this.checklist.forEach(function (dat) {
                            dat.invoice.forEach(function (da) {
                                var SupplierName = dat.supplierName;
                                var InvoiceNo = dat.invoiceNo;
                                var ItemCode = da.itemCode;
                                var InvoiceDate = da.invDate;
                                var Quantity = da.custQuantity;
                                var Description = da.description;
                                var InvoiceAmount = dat.invoiceAmount;
                                var obj = Object.assign({ SupplierName: SupplierName, InvoiceNo: InvoiceNo, InvoiceDate: InvoiceDate, ItemCode: ItemCode, Description: Description, Quantity: Quantity, InvoiceAmount: InvoiceAmount });
                                _this.Excel.push(obj);
                            });
                        });
                        console.log(this.Excel, 'else');
                        this.excelService.exportAsExcelFile(this.Excel, 'persons');
                    }
                };
                ReceiptorderComponent.prototype.from = function (event) {
                    this.fdate = event;
                    console.log(event, 'fromdate');
                };
                ReceiptorderComponent.prototype.to = function (event) {
                    this.tdate = event;
                    console.log(event, 'fromdate');
                    this.Date();
                };
                ReceiptorderComponent.prototype.Date = function () {
                    var start = "2020-11-01";
                    var end = "2020-11-30";
                    var startDate = new Date(this.fdate);
                    var endDate = new Date(this.tdate);
                    // var resultProductData = this.getSupplier.filter(function(a) {
                    //   return new Date(a.supplierDate) >= startDate && new Date(a.supplierDate) <= endDate
                    // });
                    // this.datefilter=resultProductData
                    // console.log(resultProductData,'selected data');
                };
                return ReceiptorderComponent;
            }());
            ReceiptorderComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _purchase_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
                { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_7__["ExcelService"] }
            ]; };
            ReceiptorderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-receiptorder',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./receiptorder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/receiptorder/receiptorder.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./receiptorder.component.scss */ "./src/app/demo/extra/sample-page/receiptorder/receiptorder.component.scss")).default]
                })
            ], ReceiptorderComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/receving-pc/receiv-form/receiv-form.component.scss": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/receving-pc/receiv-form/receiv-form.component.scss ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZXh0cmEvc2FtcGxlLXBhZ2UvcmVjZXZpbmctcGMvcmVjZWl2LWZvcm0vcmVjZWl2LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/receving-pc/receiv-form/receiv-form.component.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/receving-pc/receiv-form/receiv-form.component.ts ***!
          \*****************************************************************************************/
        /*! exports provided: ReceivFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivFormComponent", function () { return ReceivFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _receive_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../receive.service */ "./src/app/demo/extra/sample-page/receving-pc/receive.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var ReceivFormComponent = /** @class */ (function () {
                function ReceivFormComponent(fb, router, addreceiveService, toster) {
                    var _this = this;
                    this.fb = fb;
                    this.router = router;
                    this.addreceiveService = addreceiveService;
                    this.toster = toster;
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                        _this.Name = element.branchName;
                        _this.location = element.branchLocation;
                    });
                }
                ReceivFormComponent.prototype.ngOnInit = function () {
                    this.addForm = this.fb.group({
                        _id: [''],
                        branchId: this.id,
                        branchName: this.Name,
                        branchLocation: this.location,
                        itemCode: [''],
                        reciptno: [''],
                        date: [''],
                        description: [''],
                        cgst: [''],
                        sgst: [''],
                        quantity: [''],
                        vom: [''],
                        price: [''],
                        selected: false
                    });
                    var local = localStorage.getItem('arf');
                    this.addForm.patchValue(JSON.parse(local));
                };
                ReceivFormComponent.prototype.postpc = function (value) {
                    var _this = this;
                    console.log(value);
                    this.addreceiveService.postProduct(value).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('added successfully');
                    });
                    //  this.router.navigate(['/receiving/rf'])
                };
                return ReceivFormComponent;
            }());
            ReceivFormComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _receive_service__WEBPACK_IMPORTED_MODULE_4__["ReceiveService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
            ]; };
            ReceivFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-receiv-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./receiv-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/receving-pc/receiv-form/receiv-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./receiv-form.component.scss */ "./src/app/demo/extra/sample-page/receving-pc/receiv-form/receiv-form.component.scss")).default]
                })
            ], ReceivFormComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/receving-pc/receive.service.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/receving-pc/receive.service.ts ***!
          \***********************************************************************/
        /*! exports provided: ReceiveService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveService", function () { return ReceiveService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/enviromentURL */ "./src/environments/enviromentURL.ts");
            var ReceiveService = /** @class */ (function () {
                function ReceiveService(http) {
                    var _this = this;
                    this.http = http;
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                    });
                }
                ReceiveService.prototype.getProduct = function () {
                    return this.http.get(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/receiverf" + '/' + this.id);
                };
                ReceiveService.prototype.postProduct = function (value) {
                    return this.http.post(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/receiverf", value);
                };
                ReceiveService.prototype.putProduct = function (value) {
                    return this.http.put(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/receiverf" + '/' + value._id, value);
                };
                ReceiveService.prototype.deleteProduct = function (id) {
                    return this.http.delete(_environments_enviromentURL__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + "/receiverf" + '/' + id);
                };
                return ReceiveService;
            }());
            ReceiveService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ReceiveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ReceiveService);
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/receving-pc/receving-pc.component.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/receving-pc/receving-pc.component.scss ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZXh0cmEvc2FtcGxlLXBhZ2UvcmVjZXZpbmctcGMvcmVjZXZpbmctcGMuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/receving-pc/receving-pc.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/receving-pc/receving-pc.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: RecevingPCComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecevingPCComponent", function () { return RecevingPCComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _receive_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./receive.service */ "./src/app/demo/extra/sample-page/receving-pc/receive.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            // import { ReceivingService } from '../receiving.service';
            var RecevingPCComponent = /** @class */ (function () {
                function RecevingPCComponent(http, router, receivingservice, toster) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    this.receivingservice = receivingservice;
                    this.toster = toster;
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                    });
                }
                RecevingPCComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                    this.receivingservice.getProduct().subscribe(function (data) {
                        console.log(data);
                        _this.getdata = data;
                        _this.dtTrigger.next();
                    });
                };
                RecevingPCComponent.prototype.ngOnDestroy = function () {
                    // Do not forget to unsubscribe the event
                    this.dtTrigger.unsubscribe();
                };
                RecevingPCComponent.prototype.addform = function () {
                    localStorage.removeItem('arf');
                    this.router.navigate(['receiving/receiveform']);
                };
                RecevingPCComponent.prototype.editEx = function (value) {
                    localStorage.setItem('arf', JSON.stringify(value));
                    this.router.navigate(['receiving/receiveform']);
                };
                RecevingPCComponent.prototype.delpc = function (id) {
                    var _this = this;
                    this.receivingservice.deleteProduct(id).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('delete successfully');
                    });
                };
                return RecevingPCComponent;
            }());
            RecevingPCComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _receive_service__WEBPACK_IMPORTED_MODULE_4__["ReceiveService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
            ]; };
            RecevingPCComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-receving-pc',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./receving-pc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/receving-pc/receving-pc.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./receving-pc.component.scss */ "./src/app/demo/extra/sample-page/receving-pc/receving-pc.component.scss")).default]
                })
            ], RecevingPCComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/receving-rf/receving-rf.component.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/receving-rf/receving-rf.component.scss ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZXh0cmEvc2FtcGxlLXBhZ2UvcmVjZXZpbmctcmYvcmVjZXZpbmctcmYuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/receving-rf/receving-rf.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/receving-rf/receving-rf.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: RecevingRFComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecevingRFComponent", function () { return RecevingRFComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _receving_pc_receive_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../receving-pc/receive.service */ "./src/app/demo/extra/sample-page/receving-pc/receive.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            // import { AddreceivepcService } from './receivepc.service';
            var RecevingRFComponent = /** @class */ (function () {
                function RecevingRFComponent(router, http, receivepcservice) {
                    this.router = router;
                    this.http = http;
                    this.receivepcservice = receivepcservice;
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
                }
                RecevingRFComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                    this.receivepcservice.getProduct().subscribe(function (data) {
                        _this.value = data;
                        _this.dtTrigger.next();
                    });
                };
                RecevingRFComponent.prototype.ngOnDestroy = function () {
                    this.dtTrigger.unsubscribe();
                };
                RecevingRFComponent.prototype.editProduct = function (val) {
                    localStorage.setItem('pc', JSON.stringify(val));
                    this.router.navigate(['/storage/division/addstock']);
                };
                return RecevingRFComponent;
            }());
            RecevingRFComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _receving_pc_receive_service__WEBPACK_IMPORTED_MODULE_4__["ReceiveService"] }
            ]; };
            RecevingRFComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-receving-rf',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./receving-rf.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/receving-rf/receving-rf.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./receving-rf.component.scss */ "./src/app/demo/extra/sample-page/receving-rf/receving-rf.component.scss")).default]
                })
            ], RecevingRFComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/sample-page-routing.module.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/sample-page-routing.module.ts ***!
          \**********************************************************************/
        /*! exports provided: SamplePageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePageRoutingModule", function () { return SamplePageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _sample_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-page.component */ "./src/app/demo/extra/sample-page/sample-page.component.ts");
            /* harmony import */ var _productsform_productsform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productsform/productsform.component */ "./src/app/demo/extra/sample-page/productsform/productsform.component.ts");
            /* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/demo/extra/sample-page/supplier/supplier.component.ts");
            /* harmony import */ var _suppliertable_suppliertable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suppliertable/suppliertable.component */ "./src/app/demo/extra/sample-page/suppliertable/suppliertable.component.ts");
            /* harmony import */ var _receving_pc_receving_pc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./receving-pc/receving-pc.component */ "./src/app/demo/extra/sample-page/receving-pc/receving-pc.component.ts");
            /* harmony import */ var _receving_rf_receving_rf_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./receving-rf/receving-rf.component */ "./src/app/demo/extra/sample-page/receving-rf/receving-rf.component.ts");
            /* harmony import */ var _receiptorder_receiptorder_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./receiptorder/receiptorder.component */ "./src/app/demo/extra/sample-page/receiptorder/receiptorder.component.ts");
            /* harmony import */ var _receving_pc_receiv_form_receiv_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./receving-pc/receiv-form/receiv-form.component */ "./src/app/demo/extra/sample-page/receving-pc/receiv-form/receiv-form.component.ts");
            var routes = [
                {
                    path: '',
                    component: _sample_page_component__WEBPACK_IMPORTED_MODULE_3__["SamplePageComponent"]
                },
                {
                    path: 'receiveform',
                    component: _receving_pc_receiv_form_receiv_form_component__WEBPACK_IMPORTED_MODULE_10__["ReceivFormComponent"]
                },
                {
                    path: 'form',
                    component: _productsform_productsform_component__WEBPACK_IMPORTED_MODULE_4__["ProductsformComponent"]
                },
                {
                    path: 'receiptorder',
                    component: _receiptorder_receiptorder_component__WEBPACK_IMPORTED_MODULE_9__["ReceiptorderComponent"]
                },
                {
                    path: 'addsuppliers',
                    component: _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_5__["SupplierComponent"]
                },
                {
                    path: 'suppliersdetail',
                    component: _suppliertable_suppliertable_component__WEBPACK_IMPORTED_MODULE_6__["SuppliertableComponent"]
                },
                {
                    path: 'receivingrf',
                    component: _receving_pc_receving_pc_component__WEBPACK_IMPORTED_MODULE_7__["RecevingPCComponent"]
                },
                {
                    path: 'receivingpc',
                    component: _receving_rf_receving_rf_component__WEBPACK_IMPORTED_MODULE_8__["RecevingRFComponent"]
                }
            ];
            var SamplePageRoutingModule = /** @class */ (function () {
                function SamplePageRoutingModule() {
                }
                return SamplePageRoutingModule;
            }());
            SamplePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], SamplePageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/sample-page.component.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/sample-page.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".modal.right .modal-dialog {\n  position: fixed;\n  margin: auto;\n  width: 320px;\n  height: 100%;\n  transform: translate3d(0%, 0, 0); }\n\n.modal.right .modal-content {\n  height: 100%;\n  overflow-y: auto; }\n\n.modal.right .modal-body {\n  padding: 15px 15px 80px; }\n\n/*Right*/\n\n.modal.right.fade .modal-dialog {\n  right: -320px;\n  transition: opacity 0.3s linear, right 0.3s ease-out; }\n\n.modal.right.fade.in .modal-dialog {\n  right: 0; }\n\n/* ----- MODAL STYLE ----- */\n\n.modal-content {\n  border-radius: 0;\n  border: none; }\n\n.modal-header {\n  border-bottom-color: #EEEEEE;\n  background-color: #FAFAFA; }\n\nbutton img {\n  height: 15px;\n  width: 15px; }\n\n.table-b tr, .table-b td, .table-b th {\n  border: 1px solid #868484;\n  text-align: center; }\n\nbody {\n  background: #ecf1f5;\n  font: 14px \"Open Sans\", sans-serif;\n  text-align: center; }\n\n.supplierview {\n  margin: 0 5%;\n  padding: 2%;\n  background-color: white; }\n\n.sviewtable {\n  width: 100%;\n  background-color: white; }\n\n.sviewform {\n  color: #504c4c; }\n\n.sviewtable {\n  margin: 2% 0; }\n\n.sviewtable th {\n  text-align: center; }\n\n.sviewtable tr, .sviewtable th, .sviewtable td {\n  border: 1px solid gray;\n  padding: 0.5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9leHRyYS9zYW1wbGUtcGFnZS9DOlxcVXNlcnNcXEJoYXJhbmVlZGhhcmFuXFxEb3dubG9hZHNcXFdNUy0xXFx3bXMgMTQtMTIvc3JjXFxhcHBcXGRlbW9cXGV4dHJhXFxzYW1wbGUtcGFnZVxcc2FtcGxlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBSUosZ0NBQWdDLEVBQUE7O0FBR3pDO0VBQ0MsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLHVCQUF1QixFQUFBOztBQUd6QixRQUFBOztBQUNDO0VBQ0MsYUFBYTtFQUlMLG9EQUFvRCxFQUFBOztBQUc3RDtFQUNDLFFBQVEsRUFBQTs7QUFHViw0QkFBQTs7QUFDQztFQUNDLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2I7RUFDQyw0QkFBNEI7RUFDNUIseUJBQXlCLEVBQUE7O0FBSTFCO0VBQ0MsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFVYjtFQUVDLHlCQUFvQztFQUNwQyxrQkFBa0IsRUFBQTs7QUFFbkI7RUFDQyxtQkFBbUI7RUFDbkIsa0NBQWlDO0VBQ2pDLGtCQUFpQixFQUFBOztBQUVsQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsV0FBVztFQUNYLHVCQUF1QixFQUFBOztBQUV6QjtFQUFhLGNBQXFCLEVBQUE7O0FBQ2xDO0VBQWMsWUFBWSxFQUFBOztBQUMxQjtFQUFlLGtCQUFrQixFQUFBOztBQUNqQztFQUNFLHNCQUFzQjtFQUN0QixhQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2V4dHJhL3NhbXBsZS1wYWdlL3NhbXBsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblx0Lm1vZGFsLnJpZ2h0IC5tb2RhbC1kaWFsb2cge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0d2lkdGg6IDMyMHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwKTtcclxuXHRcdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCwgMCk7XHJcblx0XHQgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDApO1xyXG5cdFx0ICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwKTtcclxuXHR9XHJcblxyXG5cdC5tb2RhbC5yaWdodCAubW9kYWwtY29udGVudCB7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRvdmVyZmxvdy15OiBhdXRvO1xyXG5cdH1cclxuXHRcclxuXHQubW9kYWwucmlnaHQgLm1vZGFsLWJvZHkge1xyXG5cdFx0cGFkZGluZzogMTVweCAxNXB4IDgwcHg7XHJcblx0fVxyXG4gICAgICAgIFxyXG4vKlJpZ2h0Ki9cclxuXHQubW9kYWwucmlnaHQuZmFkZSAubW9kYWwtZGlhbG9nIHtcclxuXHRcdHJpZ2h0OiAtMzIwcHg7XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHJpZ2h0IDAuM3MgZWFzZS1vdXQ7XHJcblx0XHQgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHJpZ2h0IDAuM3MgZWFzZS1vdXQ7XHJcblx0XHQgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHJpZ2h0IDAuM3MgZWFzZS1vdXQ7XHJcblx0XHQgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHJpZ2h0IDAuM3MgZWFzZS1vdXQ7XHJcblx0fVxyXG5cdFxyXG5cdC5tb2RhbC5yaWdodC5mYWRlLmluIC5tb2RhbC1kaWFsb2cge1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0fVxyXG5cclxuLyogLS0tLS0gTU9EQUwgU1RZTEUgLS0tLS0gKi9cclxuXHQubW9kYWwtY29udGVudCB7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuXHJcblx0Lm1vZGFsLWhlYWRlciB7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjRUVFRUVFO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuXHR9XHJcblxyXG5cclxuXHRidXR0b24gaW1ne1xyXG5cdFx0aGVpZ2h0OiAxNXB4O1xyXG5cdFx0d2lkdGg6IDE1cHg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxuXHJcblx0XHJcblxyXG5cclxuLnRhYmxlLWIgdHIgLCAudGFibGUtYiB0ZCwgLnRhYmxlLWIgdGhcclxue1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzQsIDEzMiwgMTMyKTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYm9keSB7XHJcblx0YmFja2dyb3VuZDogI2VjZjFmNTtcclxuXHRmb250OjE0cHggXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjsgXHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLnN1cHBsaWVydmlld3tcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnN2aWV3dGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnN2aWV3Zm9ybSB7IGNvbG9yOnJnYig4MCwgNzYsIDc2KTsgfVxyXG4uc3ZpZXd0YWJsZSB7IG1hcmdpbjogMiUgMDsgfVxyXG4uc3ZpZXd0YWJsZSB0aHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uc3ZpZXd0YWJsZSB0ciwgLnN2aWV3dGFibGUgdGgsIC5zdmlld3RhYmxlIHRke1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgcGFkZGluZzogMC41JSA7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/sample-page.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/sample-page.component.ts ***!
          \*****************************************************************/
        /*! exports provided: SamplePageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePageComponent", function () { return SamplePageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _purchase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");
            var SamplePageComponent = /** @class */ (function () {
                function SamplePageComponent(router, purchaseService, toster, excelService) {
                    this.router = router;
                    this.purchaseService = purchaseService;
                    this.toster = toster;
                    this.excelService = excelService;
                    this.checklist = [];
                    this.Excel = [];
                    this.arr = [];
                    this.val = false;
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                }
                SamplePageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.purchaseService.getPurchaseData().subscribe(function (data) {
                        _this.getData = data;
                        console.log(_this.getData);
                        _this.dtTrigger.next();
                    });
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                };
                SamplePageComponent.prototype.ngOnDestroy = function () {
                    // Do not forget to unsubscribe the event
                    this.dtTrigger.unsubscribe();
                };
                SamplePageComponent.prototype.addform = function () {
                    localStorage.removeItem('key');
                    this.router.navigate(['/purchase/form']);
                };
                SamplePageComponent.prototype.show = function (val) {
                    this.val = true;
                    this.name = val.supplier;
                    this.date = val.date;
                    this.invoice = val.invoiceNo;
                    this.arr = val.invoice;
                    console.log(val, 'show');
                };
                SamplePageComponent.prototype.back = function () {
                    this.val = false;
                };
                SamplePageComponent.prototype.editPurchase = function (value) {
                    localStorage.setItem('key', JSON.stringify(value));
                    this.router.navigate(['/purchase/form']);
                };
                SamplePageComponent.prototype.DeletePurchase = function (id) {
                    var _this = this;
                    this.purchaseService.deletePurchaseData(id).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('deleted successfully');
                    });
                };
                SamplePageComponent.prototype.getValue = function (value, isChecked) {
                    if (isChecked) {
                        this.checklist.push(value);
                    }
                    else {
                        var index = this.checklist.indexOf(value);
                        this.checklist.splice(index, 1);
                    }
                    console.log(this.checklist);
                };
                SamplePageComponent.prototype.exportToExcel = function (event) {
                    var _this = this;
                    console.log(this.checklist, 'check');
                    if (this.checklist.length == 0) {
                        this.Excel = [];
                        event.forEach(function (dat) {
                            dat.invoice.forEach(function (da) {
                                var SupplierName = dat.supplierName;
                                var InvoiceNo = dat.invoiceNo;
                                var ItemCode = da.itemCode;
                                var InvoiceDate = da.invDate;
                                var Quantity = da.custQuantity;
                                var Description = da.description;
                                var InvoiceAmount = dat.invoiceAmount;
                                var obj = Object.assign({ SupplierName: SupplierName, InvoiceNo: InvoiceNo, InvoiceDate: InvoiceDate, ItemCode: ItemCode, Description: Description, Quantity: Quantity, InvoiceAmount: InvoiceAmount });
                                _this.Excel.push(obj);
                            });
                        });
                        console.log(this.Excel, 'if');
                        this.excelService.exportAsExcelFile(this.Excel, 'persons');
                    }
                    else {
                        this.Excel = [];
                        this.checklist.forEach(function (dat) {
                            dat.invoice.forEach(function (da) {
                                var SupplierName = dat.supplierName;
                                var InvoiceNo = dat.invoiceNo;
                                var ItemCode = da.itemCode;
                                var InvoiceDate = da.invDate;
                                var Quantity = da.custQuantity;
                                var Description = da.description;
                                var InvoiceAmount = dat.invoiceAmount;
                                var obj = Object.assign({ SupplierName: SupplierName, InvoiceNo: InvoiceNo, InvoiceDate: InvoiceDate, ItemCode: ItemCode, Description: Description, Quantity: Quantity, InvoiceAmount: InvoiceAmount });
                                _this.Excel.push(obj);
                            });
                        });
                        console.log(this.Excel, 'else');
                        this.excelService.exportAsExcelFile(this.Excel, 'persons');
                    }
                };
                SamplePageComponent.prototype.from = function (event) {
                    this.fdate = event;
                    console.log(event, 'fromdate');
                };
                SamplePageComponent.prototype.to = function (event) {
                    this.tdate = event;
                    console.log(event, 'fromdate');
                    this.Date();
                };
                SamplePageComponent.prototype.Date = function () {
                    var start = "2020-11-01";
                    var end = "2020-11-30";
                    var startDate = new Date(this.fdate);
                    var endDate = new Date(this.tdate);
                    // var resultProductData = this.getSupplier.filter(function(a) {
                    //   return new Date(a.supplierDate) >= startDate && new Date(a.supplierDate) <= endDate
                    // });
                    // this.datefilter=resultProductData
                    // console.log(resultProductData,'selected data');
                };
                return SamplePageComponent;
            }());
            SamplePageComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _purchase_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
                { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_7__["ExcelService"] }
            ]; };
            SamplePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sample-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sample-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/sample-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sample-page.component.scss */ "./src/app/demo/extra/sample-page/sample-page.component.scss")).default]
                })
            ], SamplePageComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/sample-page.module.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/sample-page.module.ts ***!
          \**************************************************************/
        /*! exports provided: SamplePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePageModule", function () { return SamplePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
            /* harmony import */ var _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sample-page-routing.module */ "./src/app/demo/extra/sample-page/sample-page-routing.module.ts");
            /* harmony import */ var _sample_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sample-page.component */ "./src/app/demo/extra/sample-page/sample-page.component.ts");
            /* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
            /* harmony import */ var _productsform_productsform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./productsform/productsform.component */ "./src/app/demo/extra/sample-page/productsform/productsform.component.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/demo/extra/sample-page/supplier/supplier.component.ts");
            /* harmony import */ var _suppliertable_suppliertable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./suppliertable/suppliertable.component */ "./src/app/demo/extra/sample-page/suppliertable/suppliertable.component.ts");
            /* harmony import */ var _receving_rf_receving_rf_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./receving-rf/receving-rf.component */ "./src/app/demo/extra/sample-page/receving-rf/receving-rf.component.ts");
            /* harmony import */ var _receving_pc_receving_pc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./receving-pc/receving-pc.component */ "./src/app/demo/extra/sample-page/receving-pc/receving-pc.component.ts");
            /* harmony import */ var _receiptorder_receiptorder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./receiptorder/receiptorder.component */ "./src/app/demo/extra/sample-page/receiptorder/receiptorder.component.ts");
            /* harmony import */ var _receving_pc_receiv_form_receiv_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./receving-pc/receiv-form/receiv-form.component */ "./src/app/demo/extra/sample-page/receving-pc/receiv-form/receiv-form.component.ts");
            var SamplePageModule = /** @class */ (function () {
                function SamplePageModule() {
                }
                return SamplePageModule;
            }());
            SamplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["SamplePageRoutingModule"],
                        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                    ],
                    declarations: [_sample_page_component__WEBPACK_IMPORTED_MODULE_5__["SamplePageComponent"], _receving_pc_receiv_form_receiv_form_component__WEBPACK_IMPORTED_MODULE_14__["ReceivFormComponent"], _productsform_productsform_component__WEBPACK_IMPORTED_MODULE_7__["ProductsformComponent"], _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_9__["SupplierComponent"], _suppliertable_suppliertable_component__WEBPACK_IMPORTED_MODULE_10__["SuppliertableComponent"], _receiptorder_receiptorder_component__WEBPACK_IMPORTED_MODULE_13__["ReceiptorderComponent"], _receving_rf_receving_rf_component__WEBPACK_IMPORTED_MODULE_11__["RecevingRFComponent"], _receving_pc_receving_pc_component__WEBPACK_IMPORTED_MODULE_12__["RecevingPCComponent"]]
                })
            ], SamplePageModule);
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/supplier/supplier.component.scss": 
        /*!*************************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/supplier/supplier.component.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZXh0cmEvc2FtcGxlLXBhZ2Uvc3VwcGxpZXIvc3VwcGxpZXIuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/supplier/supplier.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/supplier/supplier.component.ts ***!
          \***********************************************************************/
        /*! exports provided: SupplierComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function () { return SupplierComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _purchase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var SupplierComponent = /** @class */ (function () {
                function SupplierComponent(fb, supplierService, toster) {
                    var _this = this;
                    this.fb = fb;
                    this.supplierService = supplierService;
                    this.toster = toster;
                    this.fromdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                    this.enddate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                    var us = JSON.parse(localStorage.getItem('user'));
                    us.forEach(function (element) {
                        _this.id = element.branchId;
                        _this.Name = element.branchName;
                        _this.location = element.branchLocation;
                    });
                }
                SupplierComponent.prototype.ngOnInit = function () {
                    this.supplierForm = this.fb.group({
                        _id: [''],
                        branchId: this.id,
                        branchName: this.Name,
                        branchLocation: this.location,
                        supplierName: [''],
                        supplierDate: [''],
                        supplierLocation: [''],
                        contactNumber: [''],
                        alternateNumber: [''],
                        GSTNumber: ['']
                    });
                    var local = localStorage.getItem('supdata');
                    this.supplierForm.patchValue(JSON.parse(local));
                };
                SupplierComponent.prototype.onSubmit = function (value) {
                    var _this = this;
                    if (value._id === '') {
                        this.supplierService.postData(value).subscribe(function (data) {
                            console.log(data);
                            _this.toster.success('added successfully');
                        });
                    }
                    else {
                        this.supplierService.putData(value).subscribe(function (data) {
                            console.log(data);
                            _this.toster.success('updated successfully');
                            localStorage.removeItem('sup');
                        });
                    }
                };
                return SupplierComponent;
            }());
            SupplierComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _purchase_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
            ]; };
            SupplierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-supplier',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./supplier.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/supplier/supplier.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./supplier.component.scss */ "./src/app/demo/extra/sample-page/supplier/supplier.component.scss")).default]
                })
            ], SupplierComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/suppliertable/suppliertable.component.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/suppliertable/suppliertable.component.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZXh0cmEvc2FtcGxlLXBhZ2Uvc3VwcGxpZXJ0YWJsZS9zdXBwbGllcnRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/demo/extra/sample-page/suppliertable/suppliertable.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/demo/extra/sample-page/suppliertable/suppliertable.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: SuppliertableComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliertableComponent", function () { return SuppliertableComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _purchase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../purchase.service */ "./src/app/demo/extra/sample-page/purchase.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../assets/xlservice/xlservice */ "./src/assets/xlservice/xlservice.ts");
            var SuppliertableComponent = /** @class */ (function () {
                function SuppliertableComponent(router, supplierService, toster, excelService) {
                    this.router = router;
                    this.supplierService = supplierService;
                    this.toster = toster;
                    this.excelService = excelService;
                    this.checklist = [];
                    this.Excel = [];
                    this.fromdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
                    this.enddate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
                    this.datefilter = [];
                    this.dtOptions = {};
                    this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
                }
                SuppliertableComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.supplierService.getData().subscribe(function (data) {
                        _this.getSupplier = data;
                        _this.datefilter = _this.getSupplier;
                        console.log(_this.getSupplier, 'fvsd');
                        _this.dtTrigger.next();
                    });
                    this.dtOptions = {
                        pagingType: 'full_numbers',
                        pageLength: 10
                    };
                };
                SuppliertableComponent.prototype.ngOnDestroy = function () {
                    // Do not forget to unsubscribe the event
                    this.dtTrigger.unsubscribe();
                };
                SuppliertableComponent.prototype.supplierform = function () {
                    localStorage.removeItem('supdata');
                    this.router.navigate(['/oursupplier/addsuppliers']);
                };
                SuppliertableComponent.prototype.editSupplier = function (value) {
                    localStorage.setItem('supdata', JSON.stringify(value));
                    this.router.navigate(['/oursupplier/addsuppliers']);
                };
                SuppliertableComponent.prototype.deleteSupplier = function (id) {
                    var _this = this;
                    this.supplierService.deletePData(id).subscribe(function (data) {
                        console.log(data);
                        _this.toster.success('deleted successfully');
                    });
                };
                SuppliertableComponent.prototype.getValue = function (value, isChecked) {
                    if (isChecked) {
                        this.checklist.push(value);
                    }
                    else {
                        var index = this.checklist.indexOf(value);
                        this.checklist.splice(index, 1);
                    }
                    console.log(this.checklist);
                };
                SuppliertableComponent.prototype.exportToExcel = function (event) {
                    var _this = this;
                    console.log(this.checklist, 'check');
                    if (this.checklist.length == 0) {
                        this.Excel = [];
                        event.forEach(function (dat) {
                            var SupplierName = dat.supplierName;
                            var SupplierLocation = dat.supplierLocation;
                            var ContactNumber = dat.contactNumber;
                            var AlternateNumber = dat.alternateNumber;
                            var GSTNumber = dat.GSTNumber;
                            var obj = Object.assign({ SupplierName: SupplierName, SupplierLocation: SupplierLocation, ContactNumber: ContactNumber, AlternateNumber: AlternateNumber, GSTNumber: GSTNumber });
                            _this.Excel.push(obj);
                        });
                        console.log(this.Excel, 'if');
                        this.excelService.exportAsExcelFile(this.Excel, 'persons');
                    }
                    else {
                        this.Excel = [];
                        this.checklist.forEach(function (dat) {
                            var SupplierName = dat.supplierName;
                            var SupplierLocation = dat.supplierLocation;
                            var ContactNumber = dat.contactNumber;
                            var AlternateNumber = dat.alternateNumber;
                            var GSTNumber = dat.GSTNumber;
                            var obj = Object.assign({ SupplierName: SupplierName, SupplierLocation: SupplierLocation, ContactNumber: ContactNumber, AlternateNumber: AlternateNumber, GSTNumber: GSTNumber });
                            _this.Excel.push(obj);
                        });
                        console.log(this.Excel, 'else');
                        this.excelService.exportAsExcelFile(this.Excel, 'persons');
                    }
                };
                SuppliertableComponent.prototype.from = function (event) {
                    this.fdate = event;
                    console.log(event, 'fromdate');
                };
                SuppliertableComponent.prototype.to = function (event) {
                    this.tdate = event;
                    console.log(event, 'fromdate');
                    this.Date();
                };
                SuppliertableComponent.prototype.Date = function () {
                    var start = "2020-11-01";
                    var end = "2020-11-30";
                    var startDate = new Date(this.fdate);
                    var endDate = new Date(this.tdate);
                    var resultProductData = this.getSupplier.filter(function (a) {
                        return new Date(a.supplierDate) >= startDate && new Date(a.supplierDate) <= endDate;
                    });
                    this.datefilter = resultProductData;
                    console.log(resultProductData, 'selected data');
                };
                return SuppliertableComponent;
            }());
            SuppliertableComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _purchase_service__WEBPACK_IMPORTED_MODULE_4__["PurchaseService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
                { type: _assets_xlservice_xlservice__WEBPACK_IMPORTED_MODULE_8__["ExcelService"] }
            ]; };
            SuppliertableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-suppliertable',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./suppliertable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/extra/sample-page/suppliertable/suppliertable.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./suppliertable.component.scss */ "./src/app/demo/extra/sample-page/suppliertable/suppliertable.component.scss")).default]
                })
            ], SuppliertableComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=demo-extra-sample-page-sample-page-module-es2015.js.map
//# sourceMappingURL=demo-extra-sample-page-sample-page-module-es5.js.map
//# sourceMappingURL=demo-extra-sample-page-sample-page-module-es5.js.map