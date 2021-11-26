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
            /* harmony default export */ __webpack_exports__["default"] = (".receiptaddform {\n  margin: 0; }\n\n::-webkit-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-moz-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::-ms-input-placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n::placeholder {\n  opacity: 0.7;\n  color: gray; }\n\n.receiptaddform input {\n  font-size: 13px; }\n\n.receiptaddform input {\n  background-color: white;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8; }\n\n.receiptaddform input[type=date] {\n  padding: 2px;\n  color: #b3aeae;\n  padding-left: 8px; }\n\n.receiptaddform button {\n  color: white !important;\n  padding: 10px;\n  margin: 0 0 3%;\n  color: #0e0d0d;\n  background-color: #65abe4;\n  border-radius: 3px;\n  width: 100%;\n  border: solid 1px #E8E8E8;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.submit button {\n  margin-bottom: 0% !important; }\n\n.submit {\n  color: white !important;\n  width: 50%;\n  margin-left: 40%;\n  margin-bottom: 0% !important;\n  background-color: #65abe4; }\n\n.receiptaddform .clear {\n  background-color: lightcoral !important; }\n\n.danger {\n  background-color: #8b4646 !important; }\n\n.sub {\n  margin-left: 0px; }\n\n@media (max-width: 430px) {\n  .sub {\n    margin-left: -140px; } }\n\ntable {\n  background-color: #fcfcfc; }\n\n.tmargin {\n  padding: 0 20%; }\n\n.billing table {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  color: #212529; }\n\ndiv, p, a, li, td {\n  -webkit-text-size-adjust: none; }\n\n.ExternalClass {\n  width: 100%;\n  background-color: #FFFFFF; }\n\np {\n  padding: 0 !important;\n  margin-top: 0 !important;\n  margin-right: 0 !important;\n  margin-bottom: 0 !important;\n  margin-left: 0 !important; }\n\n.visibleMobile {\n  display: none; }\n\n.hiddenMobile {\n  display: block; }\n\n@media only screen and (max-width: 600px) {\n  body {\n    width: auto !important; }\n  table[class=fullTable] {\n    width: 96% !important;\n    clear: both; }\n  table[class=fullPadding] {\n    width: 85% !important;\n    clear: both; }\n  table[class=col] {\n    width: 45% !important; }\n  .erase {\n    display: none; } }\n\n@media only screen and (max-width: 420px) {\n  table[class=fullTable] {\n    width: 100% !important;\n    clear: both; }\n  table[class=fullPadding] {\n    width: 85% !important;\n    clear: both; }\n  table[class=col] {\n    width: 100% !important;\n    clear: both; }\n  table[class=col] td {\n    text-align: left !important; }\n  .erase {\n    display: none;\n    font-size: 0;\n    max-height: 0;\n    line-height: 0;\n    padding: 0; }\n  .visibleMobile {\n    display: block !important; }\n  .hiddenMobile {\n    display: none !important; } }\n\n.cddiv, .pddiv {\n  background-color: white;\n  padding: 1%; }\n\n.cddiv input, .cddiv textarea {\n  width: 100%;\n  padding: 1% 3%; }\n\n.cdmargin {\n  margin: 4% 0 0; }\n\n.pddiv input, .pddiv textarea {\n  width: 100%;\n  padding: 1% 3%; }\n\n.pddiv button {\n  margin: 13% 0 0; }\n\n.pdmargin {\n  margin: 2% 0 0; }\n\n.billtitle {\n  margin: 3% 0;\n  text-align: center; }\n\n.indel input {\n  width: 85%; }\n\n.indel button {\n  background: none;\n  border: none;\n  float: right;\n  width: 10%; }\n\n.invoicediv {\n  background-color: white; }\n\n.rowmargin {\n  margin: 1% 0; }\n\n.rowmarge {\n  padding: 1%;\n  margin: 2% 0; }\n\n.invoicediv .brandtitle h3 {\n  vertical-align: middle;\n  line-height: 90px; }\n\n.invoicediv .brandtype .row {\n  height: 50%; }\n\n.invoicediv .borderdiv {\n  border: 1px solid #646464; }\n\n.invoicediv .borderdiv p {\n  font-size: 12px;\n  line-height: 15px;\n  padding: 2% 2% 0 0; }\n\n.invoicedate table {\n  padding-left: 0%; }\n\n.invoicetable table tr,\n.invoicetable table th,\n.invoicetable table td {\n  border: 1px solid #6b6a6a;\n  background-color: white !important; }\n\n.invoicetable table th {\n  padding: 0;\n  text-align: center;\n  vertical-align: middle; }\n\n.invoicetable table td {\n  text-align: right;\n  padding: 0 1%;\n  background-color: none; }\n\n.invoicetable table .description {\n  text-align: left;\n  padding: 0 5px; }\n\n.rowmarginbottom {\n  padding: 1%;\n  margin: 10% 0 2%;\n  font-size: 12px; }\n\n.signbox {\n  border: 1px solid #686767; }\n\n.invoicefootertext {\n  line-height: 15px;\n  font-size: 12px; }\n\n.terms {\n  font-size: 10px; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  color: #030303;\n  border: 1px solid #ddd;\n  background-color: #e9e9e9; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #F2F2F2; }\n\n.invoiceinput {\n  border: 0.3px solid #c9c9c9;\n  background-color: none;\n  height: 15px;\n  width: 85px;\n  font-size: 10px; }\n\n.invoiceinputs {\n  border: 0.3px solid #c9c9c9;\n  background-color: none;\n  height: 15px;\n  width: 50px;\n  font-size: 10px !important; }\n\n.container {\n  width: 550px;\n  margin: 45px auto; }\n\n.clearfix {\n  clear: both; }\n\n.form-part {\n  margin: 20px 0; }\n\n.form-part h2 {\n  font-size: 25px;\n  font-weight: 400;\n  font-family: 'Josefin Sans', sans-serif;\n  margin-bottom: 15px; }\n\n.text-input,\n.radio-button,\n.check-boxes {\n  margin-bottom: 13px; }\n\n.text-input label,\n.radio-button label,\n.check-boxes label {\n  display: block;\n  margin-bottom: 3px;\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 14px;\n  font-weight: 600; }\n\n.radio-button label,\n.check-boxes label {\n  margin-bottom: 7px;\n  font-weight: 900; }\n\n.text-input input,\n.text-input textarea,\n.text-input select {\n  padding: 7px 7px;\n  display: block;\n  width: 100%;\n  border: solid 1px #ccc;\n  border-radius: 2px; }\n\n.text-input select {\n  width: 100%; }\n\n.text-input textarea {\n  height: 100px; }\n\n.sqr-input .text-input,\n.sqr-radio-input .radio-button,\n.sqr-check-input .check-boxes {\n  float: left;\n  width: 45%; }\n\n.sqr-input .text-input:nth-child(1),\n.sqr-radio-input .radio-button:nth-child(1),\n.sqr-check-input .check-boxes:nth-child(1) {\n  margin-right: 10%; }\n\n.cub-input .text-input {\n  float: left;\n  width: 26.66%; }\n\n.cub-input .text-input:nth-child(1),\n.cub-input .text-input:nth-child(2) {\n  margin-right: 10%; }\n\n.ns-radio-btn input[type=\"radio\"],\n.ns-check-box input[type=\"checkbox\"] {\n  visibility: hidden; }\n\n.productspace {\n  margin-top: 70px; }\n\n.addsubmit {\n  position: absolute;\n  bottom: 28px;\n  left: 720px; }\n\n.possupplier {\n  background-color: white;\n  color: black;\n  margin: 1%;\n  padding: 2%; }\n\n.possupplier .search1 {\n  border-right: none;\n  border-left: none;\n  border-top: none; }\n\n.search1 {\n  margin: 2%;\n  background-color: white;\n  background: none;\n  border-right: none;\n  border-left: none;\n  border-top: none; }\n\n.table1 {\n  position: relative;\n  width: 100%;\n  border: none;\n  background-color: white; }\n\n.table1 td {\n  padding: 1% 2%;\n  background-color: white;\n  font-family: 'Josefin Sans', sans-serif; }\n\n.possuppliertable {\n  position: relative;\n  background-color: white;\n  color: black;\n  margin: 1%;\n  padding: 2% 1%; }\n\n.possupplier .table1 input {\n  width: 100%; }\n\n.possupplier .table1 textarea {\n  width: 100%; }\n\n.possuppliertable button {\n  margin: 0 0 0 2%; }\n\n.tableadd {\n  position: relative;\n  width: 100%;\n  background-color: white; }\n\n.tableadd button {\n  border: none;\n  background-color: none;\n  background: none; }\n\n.searchlist ul {\n  width: 100% !important;\n  position: relative;\n  padding: 2%;\n  list-style-type: none;\n  background-color: white;\n  margin-top: 0%;\n  margin-left: 0%;\n  box-shadow: 0 5px 10px #888888;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.searchlist ul li {\n  position: absolute; }\n\n.searchlist1 {\n  position: relative;\n  width: 100%;\n  background: red; }\n\n.searchlist1 ul {\n  width: 100% !important;\n  position: relative;\n  padding: 2%;\n  list-style-type: none;\n  background-color: white;\n  margin-top: 0%;\n  margin-left: 0%;\n  box-shadow: 0 5px 10px #888888;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.searchlist1 ul li {\n  margin: 3px 0;\n  position: relative; }\n\n.tick {\n  height: 20px;\n  width: 20px; }\n\n.searchbar {\n  width: 40%; }\n\n.fa-search {\n  position: absolute;\n  margin-left: 47%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9leHRyYS9zYW1wbGUtcGFnZS9wcm9kdWN0c2Zvcm0vQzpcXFVzZXJzXFxCaGFyYW5lZWRoYXJhblxcRG93bmxvYWRzXFxXTVMtMVxcd21zIDE0LTEyL3NyY1xcYXBwXFxkZW1vXFxleHRyYVxcc2FtcGxlLXBhZ2VcXHByb2R1Y3RzZm9ybVxccHJvZHVjdHNmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBUyxFQUFBOztBQUViO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFBdEM7RUFBZSxZQUFZO0VBQUMsV0FBVSxFQUFBOztBQUF0QztFQUFlLFlBQVk7RUFBQyxXQUFVLEVBQUE7O0FBQXRDO0VBQWUsWUFBWTtFQUFDLFdBQVUsRUFBQTs7QUFDdEM7RUFBdUIsZUFBZSxFQUFBOztBQUN0QztFQUNJLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQXNCO0VBRXRCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRzdCO0VBQWtDLFlBQVk7RUFBQyxjQUF5QjtFQUFFLGlCQUFpQixFQUFBOztBQUUzRjtFQUNJLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQXNCO0VBRXRCLHlCQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwwQ0FBdUMsRUFBQTs7QUFHM0M7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIseUJBQW9DLEVBQUE7O0FBRXhDO0VBQXdCLHVDQUF1QyxFQUFBOztBQUMvRDtFQUFTLG9DQUE2QyxFQUFBOztBQUV0RDtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNLO0lBQ0ksbUJBQW1CLEVBQUEsRUFDdEI7O0FBR047RUFBUSx5QkFBb0MsRUFBQTs7QUFDNUM7RUFBVSxjQUFjLEVBQUE7O0FBQ3hCO0VBQ0ksb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWxCO0VBQW9CLDhCQUE4QixFQUFBOztBQUNsRDtFQUFpQixXQUFXO0VBQUUseUJBQXlCLEVBQUE7O0FBQ3ZEO0VBQUkscUJBQW9CO0VBQUUsd0JBQXVCO0VBQUUsMEJBQXlCO0VBQUUsMkJBQTJCO0VBQUUseUJBQXlCLEVBQUE7O0FBQ3BJO0VBQWlCLGFBQWEsRUFBQTs7QUFDOUI7RUFBZ0IsY0FBYyxFQUFBOztBQUM5QjtFQUNBO0lBQU8sc0JBQXNCLEVBQUE7RUFDN0I7SUFBeUIscUJBQXFCO0lBQUUsV0FBVyxFQUFBO0VBQzNEO0lBQTJCLHFCQUFxQjtJQUFFLFdBQVcsRUFBQTtFQUM3RDtJQUFtQixxQkFBcUIsRUFBQTtFQUN4QztJQUFTLGFBQWEsRUFBQSxFQUFJOztBQUUxQjtFQUNBO0lBQXlCLHNCQUFzQjtJQUFFLFdBQVcsRUFBQTtFQUM1RDtJQUEyQixxQkFBcUI7SUFBRSxXQUFXLEVBQUE7RUFDN0Q7SUFBbUIsc0JBQXNCO0lBQUUsV0FBVyxFQUFBO0VBQ3REO0lBQXNCLDJCQUEyQixFQUFBO0VBQ2pEO0lBQVMsYUFBYTtJQUFFLFlBQVk7SUFBRSxhQUFhO0lBQUUsY0FBYztJQUFFLFVBQVUsRUFBQTtFQUMvRTtJQUFpQix5QkFBeUIsRUFBQTtFQUMxQztJQUFnQix3QkFBd0IsRUFBQSxFQUFJOztBQUU1QztFQUNJLHVCQUF1QjtFQUN2QixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUFjLFVBQVUsRUFBQTs7QUFDeEI7RUFDRSxnQkFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUNaO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNFLFdBQVc7RUFDVixZQUFZLEVBQUE7O0FBRWY7RUFDSSxzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0kseUJBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7OztFQUdJLHlCQUFvQztFQUNwQyxrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFFbEI7RUFDRSxXQUFXO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSx5QkFBb0MsRUFBQTs7QUFFeEM7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIseUJBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUFtQix5QkFBeUIsRUFBQTs7QUFDNUM7RUFDRSwyQkFBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVqQjtFQUNFLDJCQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLG1CQUFtQixFQUFBOztBQUdyQjs7O0VBR0UsbUJBQW1CLEVBQUE7O0FBR3JCOzs7RUFHRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCOztFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7OztFQUdFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLHNCQUFzQjtFQUd0QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7OztFQUdFLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1o7OztFQUdFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2Y7O0VBRUUsaUJBQWlCLEVBQUE7O0FBR25COztFQUVFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVSxFQUFBOztBQU1kO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUVmO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSyxVQUFXO0VBQ1osdUJBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBRVgsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUczQjtFQUFZLGNBQWM7RUFDeEIsdUJBQXVCO0VBQ3ZCLHVDQUF1QyxFQUFBOztBQUV6QztFQUNJLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjLEVBQUE7O0FBRWxCO0VBQTRCLFdBQVcsRUFBQTs7QUFDdkM7RUFBK0IsV0FBVyxFQUFBOztBQUMxQztFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUVFLGtCQUFrQjtFQUNoQixXQUFXO0VBRVgsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFFRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQixFQUFBOztBQUVqQztFQUVJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNFLGtCQUFrQjtFQUNsQixXQUFVO0VBRVIsZUFBZSxFQUFBOztBQUduQjtFQUVJLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUE7O0FBRW5DO0VBRUssYUFBYztFQUNmLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2V4dHJhL3NhbXBsZS1wYWdlL3Byb2R1Y3RzZm9ybS9wcm9kdWN0c2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY29udGFpbmVyXHJcbi8vIHtcclxuLy8gICAgIHBhZGRpbmc6IDIlO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMXB4IDNweCAzcHggM3B4IGxpZ2h0Ymx1ZTtcclxuLy8gfVxyXG4vLyAudGhoZWFkXHJcbi8vIHtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDIlIDA7XHJcbi8vIH1cclxuXHJcblxyXG4vLyA9PT09PVxyXG4ucmVjZWlwdGFkZGZvcm17XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuOjpwbGFjZWhvbGRlcnsgb3BhY2l0eTogMC43O2NvbG9yOmdyYXk7IH1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0eyBmb250LXNpemU6IDEzcHg7IH1cclxuLnJlY2VpcHRhZGRmb3JtIGlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMyU7XHJcbiAgICBjb2xvcjogcmdiKDE0LCAxMywgMTMpO1xyXG4gICAgLy8gY29sb3I6IHJnYigyNDUsIDE0NiwgMTcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRThFOEU4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjEpOyBcclxufVxyXG4ucmVjZWlwdGFkZGZvcm0gaW5wdXRbdHlwZT1kYXRlXXsgcGFkZGluZzogMnB4O2NvbG9yOiByZ2IoMTc5LCAxNzQsIDE3NCk7IHBhZGRpbmctbGVmdDogOHB4O31cclxuXHJcbi5yZWNlaXB0YWRkZm9ybSBidXR0b257XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAzJTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEzLCAxMyk7XHJcbiAgICAvLyBtYXJnaW46IDE1JSAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxNzEsIDIyOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNFOEU4RTg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMTIsIDEyNCk7XHJcbn1cclxuLnN1Ym1pdCBidXR0b257XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uc3VibWl0e1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxNzEsIDIyOCk7XHJcbn1cclxuLnJlY2VpcHRhZGRmb3JtIC5jbGVhcnsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbCAhaW1wb3J0YW50OyB9XHJcbi5kYW5nZXJ7IGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDcwLCA3MCkgIWltcG9ydGFudDsgfVxyXG5cclxuLnN1YntcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogNDMwcHgpe1xyXG4gICAgIC5zdWJ7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTQwcHg7XHJcbiAgICAgfVxyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxudGFibGUgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNTIsIDI1Mik7fVxyXG4udG1hcmdpbnsgcGFkZGluZzogMCAyMCU7fVxyXG4uYmlsbGluZyB0YWJsZSB7IFxyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbn1cclxuZGl2LCBwLCBhLCBsaSwgdGQgeyAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7IH1cclxuLkV4dGVybmFsQ2xhc3MgeyB3aWR0aDogMTAwJTsgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgfVxyXG5wIHsgcGFkZGluZzogMCFpbXBvcnRhbnQ7IG1hcmdpbi10b3A6IDAhaW1wb3J0YW50OyBtYXJnaW4tcmlnaHQ6IDAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7IH1cclxuLnZpc2libGVNb2JpbGUgeyBkaXNwbGF5OiBub25lOyB9XHJcbi5oaWRkZW5Nb2JpbGUgeyBkaXNwbGF5OiBibG9jazsgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbmJvZHkgeyB3aWR0aDogYXV0byAhaW1wb3J0YW50OyB9XHJcbnRhYmxlW2NsYXNzPWZ1bGxUYWJsZV0geyB3aWR0aDogOTYlICFpbXBvcnRhbnQ7IGNsZWFyOiBib3RoOyB9XHJcbnRhYmxlW2NsYXNzPWZ1bGxQYWRkaW5nXSB7IHdpZHRoOiA4NSUgIWltcG9ydGFudDsgY2xlYXI6IGJvdGg7IH1cclxudGFibGVbY2xhc3M9Y29sXSB7IHdpZHRoOiA0NSUgIWltcG9ydGFudDsgfVxyXG4uZXJhc2UgeyBkaXNwbGF5OiBub25lOyB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG50YWJsZVtjbGFzcz1mdWxsVGFibGVdIHsgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgY2xlYXI6IGJvdGg7IH1cclxudGFibGVbY2xhc3M9ZnVsbFBhZGRpbmddIHsgd2lkdGg6IDg1JSAhaW1wb3J0YW50OyBjbGVhcjogYm90aDsgfVxyXG50YWJsZVtjbGFzcz1jb2xdIHsgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgY2xlYXI6IGJvdGg7IH1cclxudGFibGVbY2xhc3M9Y29sXSB0ZCB7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDsgfVxyXG4uZXJhc2UgeyBkaXNwbGF5OiBub25lOyBmb250LXNpemU6IDA7IG1heC1oZWlnaHQ6IDA7IGxpbmUtaGVpZ2h0OiAwOyBwYWRkaW5nOiAwOyB9XHJcbi52aXNpYmxlTW9iaWxlIHsgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxyXG4uaGlkZGVuTW9iaWxlIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XHJcbn1cclxuLmNkZGl2LCAucGRkaXZ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIFxyXG59XHJcbi5jZGRpdiBpbnB1dCwuY2RkaXYgdGV4dGFyZWF7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxJSAzJTtcclxufVxyXG4uY2RtYXJnaW57XHJcbiAgICBtYXJnaW46IDQlIDAgMDtcclxufVxyXG4ucGRkaXYgaW5wdXQgLCAucGRkaXYgdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDElIDMlO1xyXG59XHJcbi5wZGRpdiBidXR0b257XHJcbiAgICBtYXJnaW46IDEzJSAwIDA7XHJcbn1cclxuLnBkbWFyZ2lue1xyXG4gICAgbWFyZ2luOiAyJSAwIDA7XHJcbn1cclxuLmJpbGx0aXRsZXtcclxuICAgIG1hcmdpbjogMyUgMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmluZGVsIGlucHV0eyB3aWR0aDogODUlO31cclxuLmluZGVsIGJ1dHRvbnsgXHJcbiAgYmFja2dyb3VuZDpub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmbG9hdDogcmlnaHQ7IFxyXG4gIHdpZHRoOiAxMCU7fVxyXG4uaW52b2ljZWRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gIHBhZGRpbmc6IDElO1xyXG59XHJcbi5yb3dtYXJnaW57XHJcbiAgICBtYXJnaW46IDElIDA7XHJcbn1cclxuLnJvd21hcmdle1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gICBtYXJnaW46IDIlIDA7XHJcbn1cclxuLmludm9pY2VkaXYgLmJyYW5kdGl0bGUgaDN7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcbn1cclxuLmludm9pY2VkaXYgLmJyYW5kdHlwZSAucm93e1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuLmludm9pY2VkaXYgLmJvcmRlcmRpdntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDAsIDEwMCwgMTAwKTtcclxuICAgIC8vIHBhZGRpbmc6IDElO1xyXG59XHJcbi5pbnZvaWNlZGl2IC5ib3JkZXJkaXYgcHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZzogMiUgMiUgMCAwO1xyXG59XHJcbi5pbnZvaWNlZGF0ZSB0YWJsZXtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbn1cclxuLmludm9pY2V0YWJsZSB0YWJsZSB0cixcclxuLmludm9pY2V0YWJsZSB0YWJsZSB0aCxcclxuLmludm9pY2V0YWJsZSB0YWJsZSB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTA3LCAxMDYsIDEwNik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnZvaWNldGFibGUgdGFibGUgdGh7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uaW52b2ljZXRhYmxlIHRhYmxlIHRkIHsgXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmc6IDAgMSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG59XHJcbi5pbnZvaWNldGFibGUgdGFibGUgLmRlc2NyaXB0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcbi5yb3dtYXJnaW5ib3R0b217XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgICBtYXJnaW46IDEwJSAwIDIlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5zaWduYm94e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwNCwgMTAzLCAxMDMpO1xyXG59XHJcbi5pbnZvaWNlZm9vdGVydGV4dHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi50ZXJtc3tcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiByZ2IoMywgMywgMyk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xyXG4gIH1cclxuICBcclxuICB0aCwgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNGMkYyRjJ9XHJcbiAgLmludm9pY2VpbnB1dHtcclxuICAgIGJvcmRlcjogMC4zcHggc29saWQgcmdiKDIwMSwgMjAxLCAyMDEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAuaW52b2ljZWlucHV0c3tcclxuICAgIGJvcmRlcjogMC4zcHggc29saWQgcmdiKDIwMSwgMjAxLCAyMDEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcclxuICB9XHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgbWFyZ2luOiA0NXB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jbGVhcmZpeCB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tcGFydCB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tcGFydCBoMiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtaW5wdXQsXHJcbiAgLnJhZGlvLWJ1dHRvbixcclxuICAuY2hlY2stYm94ZXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtaW5wdXQgbGFiZWwsXHJcbiAgLnJhZGlvLWJ1dHRvbiBsYWJlbCxcclxuICAuY2hlY2stYm94ZXMgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAucmFkaW8tYnV0dG9uIGxhYmVsLFxyXG4gIC5jaGVjay1ib3hlcyBsYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbnB1dCBpbnB1dCxcclxuICAudGV4dC1pbnB1dCB0ZXh0YXJlYSxcclxuICAudGV4dC1pbnB1dCBzZWxlY3Qge1xyXG4gICAgcGFkZGluZzogN3B4IDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtaW5wdXQgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbnB1dCB0ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAuc3FyLWlucHV0IC50ZXh0LWlucHV0LFxyXG4gIC5zcXItcmFkaW8taW5wdXQgLnJhZGlvLWJ1dHRvbixcclxuICAuc3FyLWNoZWNrLWlucHV0IC5jaGVjay1ib3hlcyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcXItaW5wdXQgLnRleHQtaW5wdXQ6bnRoLWNoaWxkKDEpLFxyXG4gIC5zcXItcmFkaW8taW5wdXQgLnJhZGlvLWJ1dHRvbjpudGgtY2hpbGQoMSksXHJcbiAgLnNxci1jaGVjay1pbnB1dCAuY2hlY2stYm94ZXM6bnRoLWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIH1cclxuICBcclxuICAuY3ViLWlucHV0IC50ZXh0LWlucHV0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI2LjY2JTtcclxuICB9XHJcbiAgXHJcbiAgLmN1Yi1pbnB1dCAudGV4dC1pbnB1dDpudGgtY2hpbGQoMSksXHJcbiAgLmN1Yi1pbnB1dCAudGV4dC1pbnB1dDpudGgtY2hpbGQoMikge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ucy1yYWRpby1idG4gaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxyXG4gIC5ucy1jaGVjay1ib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLnByb2R1Y3RzcGFjZXtcclxuICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICB9XHJcbiBcclxuICBcclxuICAuYWRkc3VibWl0e1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMjhweDtcclxuICAgICAgbGVmdDo3MjBweDtcclxuICB9XHJcblxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLW5ldyBmZURpZmZ1c2VMaWdodGluZ1xyXG5cclxuICAucG9zc3VwcGxpZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG4ucG9zc3VwcGxpZXIgLnNlYXJjaDF7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuLnNlYXJjaDF7XHJcbiAgICAgbWFyZ2luOiAyJSA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcbi50YWJsZTF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1hcmdpbjogMiUgNSU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLnRhYmxlMSB0ZHsgcGFkZGluZzogMSUgMiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wb3NzdXBwbGllcnRhYmxle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgcGFkZGluZzogMiUgMSU7XHJcbn1cclxuLnBvc3N1cHBsaWVyIC50YWJsZTEgaW5wdXR7IHdpZHRoOiAxMDAlOyB9XHJcbi5wb3NzdXBwbGllciAudGFibGUxIHRleHRhcmVheyB3aWR0aDogMTAwJTsgfVxyXG4ucG9zc3VwcGxpZXJ0YWJsZSBidXR0b257XHJcbiAgICBtYXJnaW46IDAgMCAwIDIlO1xyXG59XHJcbi50YWJsZWFkZHtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBtYXJnaW46IDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG59XHJcbi50YWJsZWFkZCBidXR0b257XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uc2VhcmNobGlzdCB1bFxyXG57XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4ICM4ODg4ODg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuLnNlYXJjaGxpc3QgdWwgbGl7XHJcbiAgICAvLyBtYXJnaW46IDElIDAgO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zZWFyY2hsaXN0MSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAtNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiBcclxufVxyXG4uc2VhcmNobGlzdDEgdWxcclxue1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggIzg4ODg4ODtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG59XHJcbi5zZWFyY2hsaXN0MSB1bCBsaVxyXG57XHJcbiAgICAgbWFyZ2luOiAzcHggMCA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG59XHJcblxyXG4udGlja3tcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXJ7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmZhLXNlYXJjaHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ3JTtcclxuICBcclxufVxyXG5cclxuXHJcbiJdfQ== */");
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