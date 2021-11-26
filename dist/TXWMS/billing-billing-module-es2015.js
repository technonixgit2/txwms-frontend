(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["billing-billing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/sales/billing/billing.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/sales/billing/billing.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n\r\n      <div class=\"row\" [hidden]='test==false'>\r\n        <div class=\"col-lg-12\" >\r\n          <form [formGroup]=\"SaleForm\" (ngSubmit)=\"onSubmit(SaleForm.value)\" >\r\n            <input type=\"hidden\" formControlName='_id'>\r\n          <input type=\"text\" size=\"50\" placeholder=\"Search Customer Name\" class=\"form-control searchbar\" [formControl]=\"search_supply\">\r\n          <div style=\"width: 100%;\">\r\n            <div class=\"searchlist\">\r\n              <ul *ngIf='itemLength>2'>\r\n                <li *ngFor=\"let hero of result_supply\" (click)='getSuppliersData(hero)' style=\"cursor:pointer;\">\r\n                  <i class=\"fas fa-angle-down\"></i> &nbsp;{{hero.name}}\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"row possupplier \" >\r\n            <!-- <div class=\"col-lg-12 text-right\"> <input type=\"text\" size=\"50\" placeholder=\"Search\" class=\"search1\"> </div> <br> -->\r\n            <div class=\"col-lg-6\">\r\n              <table class=\"table1 \">\r\n                <input type=\"hidden\" formControlName='branchId'>\r\n                <input type=\"hidden\" formControlName='branchName'>\r\n                <input type=\"hidden\" formControlName='branchLocation'>\r\n                <tr>\r\n                  <td> Customer Name </td>\r\n                  <td> <input type=\"text\" placeholder=\"Enter Customer Name\" class=\"form-control\" formControlName='name'>   </td>\r\n                </tr>\r\n                <tr> \r\n                  <td> Contact Number </td>\r\n                  <td> <input type=\"text\" placeholder=\"Enter Contact Number\" class=\"form-control\" formControlName='contactNumber'> </td>\r\n                </tr>\r\n                <tr>  \r\n                  <td> Shipping Address </td>\r\n                  <td> <textarea name=\"\" id=\"\" placeholder=\"Enter Shipping Address\" class=\"form-control\" formControlName='shipAddress'></textarea> </td>\r\n                </tr>\r\n                <tr>\r\n                  <td> Date </td>\r\n                  <td> <input type=\"text\" formControlName='date'  class=\"form-control\" [(ngModel)]=\"dater\"> </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            <input type=\"hidden\" formControlName='overAllInvoiceTotal'>\r\n            <input type=\"hidden\" formControlName='balance'>\r\n\r\n            <div class=\"col-lg-6\">\r\n              <table class=\"table1\">\r\n                <tr>\r\n                  <td> GST Number </td>\r\n                  <td> <input type=\"text\" placeholder=\"Enter GST Number\" class=\"form-control\" formControlName='cost'> </td>\r\n                </tr>\r\n                <tr> \r\n                  <td> Alternate Number </td>\r\n                  <td> <input type=\"text\" placeholder=\"Enter Alternate Number\" class=\"form-control\" formControlName='alternateNumber'> </td>\r\n                </tr>\r\n                <tr>  \r\n                  <td> Billing Address </td>\r\n                  <td> <textarea name=\"\" id=\"\" placeholder=\"Enter Billing Address\"  class=\"form-control\" formControlName='billAddress'></textarea> </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <br>\r\n         <input type=\"text\" size=\"50\" placeholder=\"Search Item Code\" class=\"form-control searchbar\" [formControl]=\"search_item\" >\r\n         \r\n          <br>\r\n          \r\n          <div class=\"searchlist1\" >\r\n            <ul  *ngIf='itemLength2>0' >\r\n              <li *ngFor=\"let he of result_list\" (click)='getProduct(he)'  style=\"cursor:pointer;\">\r\n                <i class=\"fas fa-angle-down\"></i> &nbsp;{{he.itemCode}}  &nbsp;{{he.description}}\r\n              </li>\r\n            </ul>\r\n            </div>\r\n        \r\n         \r\n          <div class=\"row possuppliertable\">\r\n            <div class=\"col-12\">\r\n              <table class=\"tableadd table-responsive\">\r\n                <thead>\r\n                <tr>\r\n                  <th> Item Code </th>\r\n                  <th> Description </th>\r\n                  <th> Unit Rate </th>\r\n                  <th> Quantity </th>\r\n                  <th>Cost/<sub>pcs</sub></th>\r\n                  <th> GST </th>\r\n                  <th> Invoice-Amount </th>  \r\n                  <th> Reset </th>\r\n                  <th> Remove </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody formArrayName=\"products\" *ngFor=\"let a of SaleForm.get('products')['controls']; let i = index\">\r\n                <tr [formGroupName]=\"i\" style=\"margin-bottom: 10px;\">\r\n                  <td> <input type=\"text\" size=\"8\" formControlName='itemCode'class=\"form-control\" type=\"text\" readonly> </td>  \r\n                  <td> <input type=\"text\" size=\"30\" formControlName='description' class=\"form-control\" type=\"text\" readonly> </td>\r\n                  <td> <input type=\"text\" size=\"6\" formControlName='unitRate' class=\"form-control\" type=\"number\" > </td>\r\n                  <td> <input type=\"text\" size=\"6\" formControlName='custQuantity' class=\"form-control\" type=\"number\" >\r\n\r\n                    <input type=\"hidden\" formControlName='idate' [(ngModel)]=\"dater\" class=\"form-control\">\r\n                    <input type=\"hidden\" formControlName='category'  style=\"text-transform: capitalize;\" class=\"form-control\">\r\n                   </td>\r\n                   <td>  <input type=\"text\" size=\"6\" value=\"{{a.controls.gstunit.value}}\" class=\"form-control\" readonly> </td>\r\n                  <td> <input type=\"text\" size=\"6\" formControlName='cgstsgst' type=\"text\" class=\"form-control\" readonly> </td>\r\n                  <td> <input type=\"text\" size=\"12\" value=\"{{a.controls.col33.value}}\" class=\"form-control\" readonly> </td>\r\n                  <td> \r\n                    <button (click)=\"removeGroup(i)\" type=\"button\"> <i class=\"fas fa-refresh\" style=\"color: black;\"></i> </button> \r\n                   \r\n                 </td>\r\n                 <td> <button (click)=\"deleteAddressGroup(i)\"> <i class=\"fas fa-remove\" style=\"color:red\"></i> </button>  </td>\r\n                 <td> <input type=\"number\" formControlName='CGST' hidden class=\"form-control\"></td>\r\n                 <td><input type=\"number\" formControlName='SGST' hidden class=\"form-control\"> </td>\r\n                \r\n                 \r\n                 <!-- <input type=\"number\" formControlName=\"discount\" class=\"form-control\" > -->\r\n                 <input type=\"number\" formControlName=\"col34\" hidden [ngModel]=\"(a.controls.CGST.value + a.controls.SGST.value)\" class=\"form-control\">\r\n                 <input type=\"number\" formControlName=\"col33\" hidden [ngModel]=\"(a.controls.unitRate.value * a.controls.custQuantity.value)/100*(a.controls.SGST.value+a.controls.CGST.value)+(a.controls.unitRate.value * a.controls.custQuantity.value)\" class=\"form-control\">\r\n                 <input type=\"number\" formControlName=\"gstcals\"  hidden  [ngModel]=\"(a.controls.unitRate.value )/100*(a.controls.SGST.value+a.controls.CGST.value)\" class=\"form-control\"> \r\n                 <input type=\"number\" formControlName=\"gstunit\"  hidden  [ngModel]=\"(a.controls.gstcals.value + a.controls.unitRate.value )\" class=\"form-control\"> \r\n\r\n                </tr>\r\n              </tbody>\r\n              </table><br>\r\n              <!-- <input type=\"text\" [ngModel]=\"converter.toWords(13)\"> -->\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"addItem()\" ><i class=\"fas fa-plus\"></i> </button>\r\n              <button type=\"submit\" class=\"btn btn-primary\"  > <i class=\"fa fa-check-circle\"></i></button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        </div>\r\n      </div>\r\n      \r\n      \r\n         <section class=\"invoicediv\"  *ngIf='table'>\r\n           <!-- <div  id=\"print-section\">  -->\r\n           <div>\r\n\r\n         \r\n           <div *ngFor='let data of invoice | slice:-1' id=\"print-section\">\r\n            \r\n          <div class=\"row rowmargin\" >\r\n            <div class=\"col-2 brandtitle\">\r\n              \r\n              <h3>Technonix</h3>\r\n              <button id=\"printPageButton\" class=\"btn btn-primary\" (click)='editData(data)'><i class=\"fas fa-edit\"></i></button>\r\n           \r\n            </div>\r\n            <div class=\"col-7\">\r\n              <h4>Technonix Infosystem Pvt Ltd.</h4>\r\n              <small>Present The Future</small>\r\n              <p>No.3, First Cross Street,   Thirumurugan Nagar, Porur,  Chennai 600116, Tamil Nadu. <br>\r\n                +91 9080095906 info@technonix.co.in\r\n              </p>\r\n            </div>\r\n            <div class=\"col-3 text-center brandtype\">\r\n              <h3> GST Invoice </h3>\r\n              <h5> Customer </h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"row rowmarge\">\r\n            <div class=\"col-9\">\r\n              <div class=\"row borderdiv\">\r\n                <div class=\"col-3\">\r\n                  <b> Branch Address </b>\r\n                  <p>No.3, First Cross Street,   Thirumurugan Nagar, Porur,  Chennai 600116, Tamil Nadu. <br>\r\n                    +91 9080095906 info@technonix.co.in\r\n                  </p>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                  <b> Warehouse Address </b>\r\n                  <p>No.3, First Cross Street,   Thirumurugan Nagar, Porur,  Chennai 600116, Tamil Nadu. <br>\r\n                    +91 9080095906 info@technonix.co.in\r\n                  </p>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                  <b> Billing Address </b>\r\n                  <p>{{data.billAddress}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                  <b> Shipping/Delivery Address </b>\r\n                  <p>{{data.shipAddress}}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-3 invoicedate\">\r\n  \r\n              <div class=\"row rowmarge\">\r\n                <div class=\"col-6\">\r\n                  <p> GST Inv No </p>\r\n                  <p> GST Inv Date </p>\r\n                  <p> Order No </p>\r\n                  <p> Cust PO No  </p>\r\n                  <p> Order Date </p>\r\n                  <p> Payment Term </p>\r\n                  <p> Due Date </p>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <p> : {{data.invoiceNumber}} </p>\r\n                  <p> : {{data.date}}</p>\r\n                  <p> : </p>\r\n                  <p> : </p>\r\n                  <p> : 08 12 2019 </p>\r\n                  <p> : Immediate </p>\r\n                  <p> : 12 01 2020 </p>\r\n                </div>\r\n              </div>\r\n  \r\n            </div>\r\n          </div>\r\n          <div class=\"row rowmargin\">\r\n            <div class=\"col-3\">\r\n              <p>Pkg Slip No : </p>\r\n              <p> Product Category : </p>\r\n              <p>No of cases :</p>\r\n            </div>\r\n            <div class=\"col-3\">\r\n              <p>Pkg Slip No : </p>\r\n              <p> Product Category : </p>\r\n              <p>No of cases :</p>\r\n            </div>\r\n            <div class=\"col-3\">\r\n              <p>Pkg Slip No : </p>\r\n              <p> Product Category : </p>\r\n              <p>No of cases :</p>\r\n            </div>\r\n            <div class=\"col-3\">\r\n              <p>Pkg Slip No : </p>\r\n              <p> Product Category : </p>\r\n              <p>No of cases :</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row rowmargin\">\r\n            <div class=\"col-12 invoicetable\">\r\n              <table >\r\n                <tr>\r\n                  <th rowspan=\"2\"> Item Code </th>\r\n                  <th rowspan=\"2\">Description of Goods </th>\r\n                  <th rowspan=\"2\"> HSN Code </th>\r\n                   <th rowspan=\"2\"> Quantity </th>\r\n                  <th rowspan=\"2\"> Unit Rate </th>\r\n                   <th rowspan=\"2\">UOM</th>\r\n                  <th rowspan=\"2\"> Sales Value </th>\r\n                  <th colspan=\"2\"> CGST </th>\r\n                  <th colspan=\"2\"> SGST</th>\r\n                  <!-- <th rowspan=\"2\">Cost/<sub>pcs</sub> </th> -->\r\n                  <th rowspan=\"2\">Total Amount</th>\r\n                </tr>\r\n                <tr >\r\n                  <th>Rate(%)</th>\r\n                  <th>Amount</th>\r\n                  <th>Rate(%)</th>\r\n                  <th>Amount</th>\r\n                </tr>\r\n                <tr *ngFor='let value of (data.products)'>\r\n                  <td> {{value.itemCode}} </td>\r\n                  <td class=\"description\">{{value.description}} </td>\r\n                  <td> {{value.hsnCode}} </td>\r\n                  <td>{{value.custQuantity}}</td>\r\n                  <td>{{value.unitRate | number:'1.2-2'}}</td>\r\n                    <td>pcs</td>\r\n                  <td>  {{value.total | number:'1.2-2'}} </td>\r\n                  <td>  {{value.CGST}}</td>\r\n                  <td>  {{value.CGSTAmount | number:'1.2-2'}} </td>\r\n                  <td>  {{value.SGST}}</td>\r\n                  <td>  {{value.SGSTAmount | number:'1.2-2'}} </td>\r\n                  <!-- <td>  {{value.gstUnit | number:'1.2-2'}} </td> -->\r\n                  <td>  {{value.invoiceTotal | number:'1.2-2'}} </td>\r\n          \r\n                </tr>\r\n                <tr>\r\n                  <td rowspan=\"2\">Total</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td ></td>\r\n                  <td > </td>\r\n                  <td>{{data.overAllCGSTUnit | number:'1.2-2'}}</td>\r\n                  <td> </td>\r\n                  <td>{{data.overAllSGSTUnit | number:'1.2-2'}}</td>\r\n                  <!-- <td></td> -->\r\n                  <td rowspan=\"2\">{{data.overAllInvoiceAmount | number:'1.2-2'}} </td>\r\n                  <!-- <td>  <input type=\"text\" [ngModel]=\"word\" value=\"data.overAllInvoiceAmount\">\r\n                  </td> -->\r\n                </tr>\r\n              </table>\r\n            \r\n            </div>\r\n          </div>\r\n         \r\n            <div class=\"col-12\" style=\"margin-top: 70px;\"><span>{{data.inWords | uppercase}}</span></div> \r\n\r\n        \r\n        \r\n          <div class=\"row rowmarginbottom\">\r\n           \r\n            <div class=\"col-3 text-center signbox\">\r\n              Receiver's Remarks & <br> Signature\r\n            </div>\r\n            <div class=\"col-9\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\"><p class=\"invoicefootertext\">One of the major problems with invoicing is that many of the tools available make it difficult for a company to customise the invoice. There may be a set range of templates available, but these don’t always work for everyone</p></div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-8\"> <b> Bank Details : </b> <small> A/c: State Bank of India </small> <b>Account No: </b> <small> 00000001235461 </small> <b>IFSC Code: </b> <small> SBIN0014560</small> <br> <b>MICR Code:</b> <small>SB0014560</small> </div>\r\n                <div class=\"col-4\"> <b> <br> FOR : Technonix Infosystem Pvt Ltd.</b> </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\"> <b>Customer Care Number : 044 0123 5102 Whatsapp No : 9876543210 </b>  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\"> <b>SUBJECT TO CHENNAI JURIDICTION</b> </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"row\">\r\n            <div class=\"col-3 terms\">\r\n              FOR TERMS AND CONDITIONS SEE OVERLEAF\r\n              <img src=\"1.png\" alt=\"\">\r\n              <img src=\"1.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-6 text-center\">\r\n              <b>fjslfj | dms | fms | wms | product | service | portal </b>\r\n            </div>\r\n            <div class=\"col-3 text-center\">\r\n              Authorized Signatury\r\n            </div>\r\n          </div>\r\n          <div>&nbsp; <button (click)=\"back()\" class=\"btn btn-primary\" ><i class=\"far fa-arrow-alt-circle-left\"></i></button> </div>\r\n          <div>\r\n          \r\n            <div class=\"d-flex justify-content-center\">\r\n              <button type=\"button\" class=\"btn btn-primary\" id=\"printPageButton\"  [useExistingCss]=\"true\" printSectionId=\"print-section\" ngxPrint>Print Invoice\r\n              </button>\r\n            </div>\r\n           \r\n    </div>\r\n  </div>\r\n    <br>\r\n    <div class=\"row\" style=\"padding:40px\"  *ngFor='let data of invoice | slice:-1' id=\"print-section1\" >\r\n\r\n      <div >\r\n        <table style=\"border: none; width: 100%;\" class=\"col-12 invoicetable\">\r\n          <thead>\r\n            <tr>\r\n              <th colspan=\"3\">Delivery Chellon</th>\r\n              <!-- <th>{{data.date}}</th> -->\r\n            </tr>\r\n            <tr>\r\n              <td colspan=\"2\">\r\n                <h4>To</h4>\r\n                <p>{{data.shipAddress}} <br>\r\n               </p>\r\n              </td>\r\n              <td colspan=\"2\">\r\n                <h4>Purchase Order Date - {{data.date}}</h4>\r\n               \r\n                <p>Technonix Infosystem<br>\r\n                  No.3, First Cross Street,   Thirumurugan Nagar, Porur,  Chennai 600116, Tamil Nadu. <br>\r\n                  +91 9080095906 info@technonix.co.in</p>\r\n              </td>\r\n            </tr>\r\n          </thead>\r\n        </table>\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">ItemCode</th>\r\n              <th scope=\"col\">Description</th>\r\n              <th scope=\"col\">Quantity</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor='let value of (data.products)'>\r\n            <tr>\r\n              <th scope=\"row\">{{value.itemCode}}</th>\r\n              <td>{{value.description}}</td>\r\n              <td>{{value.custQuantity}}</td>\r\n            </tr>\r\n           \r\n          </tbody>\r\n        </table>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"printPageButton\"  [useExistingCss]=\"true\" printSectionId=\"print-section1\" ngxPrint>Print chellon\r\n        </button>\r\n      </div>\r\n     \r\n    </div>\r\n   \r\n        </div>\r\n\r\n        </section>   \r\n\r\n    </div>\r\n  </div>   \r\n \r\n\r\n\r\n\r\n\r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/sales/billing/editbill/editbill.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/sales/billing/editbill/editbill.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- <div style=\"background: white; padding: 30px 20px;\">\n  <form [formGroup]=\"SaleForm\" (ngSubmit)=\"onSubmit(SaleForm.value)\" >\n    <input type=\"hidden\"  formControlName='_id'  >\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <b>Customer Name</b>\n      </div>\n      <div class=\"col-3\">\n        <input type=\"text\" class=\"text-input\" formControlName='name'  >\n      </div>\n      <div class=\"col-3\">\n        <b>GST Number</b>\n      </div>\n      <div class=\"col-3\">\n        <input type=\"text\" class=\"text-input\" formControlName='cost' >\n      </div>\n    </div>\n      <ul *ngIf='searchSupplier.length>2'>\n        <li *ngFor=\"let hero of getSuppliers |filter:searchSupplier\" (click)='getSuppliersData(hero)' style=\"cursor:pointer;\">\n          <i class=\"fas fa-angle-down\"></i> &nbsp;{{hero.name}}\n        </li>\n      </ul>\n    </div> \n    <div class=\"row\">\n      <div class=\"col-3\">\n        <b>Contact Number</b>\n      </div>\n      <div class=\"col-3\">\n        <input type=\"text\" class=\"text-input\" formControlName='cost' >\n      </div>\n      <div class=\"col-3\">\n        <b>Alternative Contact Number</b>\n      </div>\n      <div class=\"col-3\">\n        <input type=\"text\" class=\"text-input\" formControlName='alternateNumber' >\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <b>Shipping Address</b>\n      </div>\n      <div class=\"col-3\">\n        <textarea type=\"text\" class=\"text-input\" formControlName='shipAddress'></textarea>\n      </div>\n      <div class=\"col-3\">\n        <b>Billing Address</b>\n      </div>\n      <div class=\"col-3\">\n        <textarea type=\"text\" class=\"text-input\" formControlName='billAddress'></textarea>\n      </div>\n    </div>\n    <input type=\"hidden\" formControlName='credit'>\n    <input type=\"hidden\" formControlName='balance'>\n    <input type=\"hidden\" formControlName='toiv'>\n    <input type=\"hidden\" formControlName='amount'>\n   <input type=\"hidden\" formControlName='overAllInvoiceTotal'>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <b>Date</b>\n      </div>\n      <div class=\"col-3\">\n        <input type=\"text\" class=\"text-input\" formControlName='date' [(ngModel)]=\"dater\">  \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-2\">Item Code</div>\n      <div class=\"col-lg-2\">Description</div>\n      <div class=\"col-lg-2\">Unit Rate <small>pcs</small></div>\n      <div class=\"col-lg-2\">Quantity</div>\n      <div class=\"col-lg-2\">GST</div>\n      <div class=\"col-lg-2\">Invoice Amount </div>\n    </div>\n   \n    <div class=\"searchlist1\" >\n      <ul *ngIf='searchText.length>1' >\n        <li *ngFor=\"let hero of searchData |filter:searchText\" (click)='getProduct(hero)'  >\n          <i class=\"fas fa-angle-down\"></i> &nbsp;{{hero.itemCode}}\n        </li>\n      </ul>\n      </div>\n   \n\n    <div formArrayName=\"products\" *ngFor=\"let a of SaleForm.get('products').controls; let i = index\">\n    <div [formGroupName]=\"i\" style=\"margin-bottom: 10px;\">\n      <div class=\"row\">\n        <div class=\"col-lg-2\"><input type=\"text\" formControlName='itemCode' readonly ></div>\n        <div class=\"col-lg-2\">  <input type=\"text\" formControlName='description' readonly></div>\n        <div class=\"col-lg-2\"><input type=\"number\" formControlName='unitRate' readonly></div>\n        <div class=\"col-lg-2\"><input type=\"number\" formControlName='custQuantity'></div>\n        <input type=\"hidden\" formControlName='idate' [(ngModel)]=\"dater\">\n       <input type=\"hidden\" value=\"{{a.controls.col34.value}}\" readonly>\n       <div class=\"col-lg-2\"> <input type=\"text\" formControlName='cgstsgst' readonly>\n\n        </div>\n        <div class=\"col-lg-2 indel\">\n          \n          <input type=\"number\" value=\"{{a.controls.col33.value}}\" size=\"8\" readonly>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"removeGroup(i)\">ee</button> &nbsp;&nbsp;\n\n          <button (click)=\"deleteAddressGroup(i)\"> <i class=\"fas fa-remove\" style=\"color:red\"></i> </button>\n        </div>\n        <input type=\"number\" formControlName='CGST'hidden>\n        <input type=\"number\" formControlName='SGST'hidden>\n        <input type=\"number\" formControlName=\"col34\" hidden [ngModel]=\"(a.controls.CGST.value + a.controls.SGST.value)\">\n        <input type=\"number\" formControlName=\"col33\" hidden [ngModel]=\"(a.controls.unitRate.value * a.controls.custQuantity.value)/100*(a.controls.SGST.value+a.controls.CGST.value)+(a.controls.unitRate.value * a.controls.custQuantity.value)\">\n      </div>\n     \n    </div>\n    </div>\n\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\" ><i class=\"fas fa-plus\" style=\"margin-left: 3px;\"></i></button> &nbsp;&nbsp;\n    <button type=\"submit\" class=\"btn btn-light\" ><img src=\"../../../../assets/images/submit.png\" class=\"tick\"></button>\n\n    <div class=\"right-allign\">\n      <span>Total(Pre Tax):</span> {{a.controls.col35.value}}\n    </div>\n  </form>\n  </div> -->");

/***/ }),

/***/ "./src/app/demo/pages/sales/billing/billing-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/sales/billing/billing-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: BillingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingRoutingModule", function() { return BillingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _billing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing.component */ "./src/app/demo/pages/sales/billing/billing.component.ts");
/* harmony import */ var _editbill_editbill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editbill/editbill.component */ "./src/app/demo/pages/sales/billing/editbill/editbill.component.ts");





const routes = [
    {
        path: '',
        component: _billing_component__WEBPACK_IMPORTED_MODULE_3__["BillingComponent"]
    },
    {
        path: 'editbill',
        component: _editbill_editbill_component__WEBPACK_IMPORTED_MODULE_4__["EditbillComponent"]
    }
];
let BillingRoutingModule = class BillingRoutingModule {
};
BillingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BillingRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/sales/billing/billing.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/demo/pages/sales/billing/billing.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  background-color: #fcfcfc; }\n\n.tmargin {\n  padding: 0 20%; }\n\n.billing table {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  color: #212529; }\n\ndiv, p, a, li, td {\n  -webkit-text-size-adjust: none; }\n\n.ExternalClass {\n  width: 100%;\n  background-color: #FFFFFF; }\n\np {\n  padding: 0 !important;\n  margin-top: 0 !important;\n  margin-right: 0 !important;\n  margin-bottom: 0 !important;\n  margin-left: 0 !important; }\n\n.visibleMobile {\n  display: none; }\n\n.hiddenMobile {\n  display: block; }\n\n@media only screen and (max-width: 600px) {\n  body {\n    width: auto !important; }\n  table[class=fullTable] {\n    width: 96% !important;\n    clear: both; }\n  table[class=fullPadding] {\n    width: 85% !important;\n    clear: both; }\n  table[class=col] {\n    width: 45% !important; }\n  .erase {\n    display: none; } }\n\n@media only screen and (max-width: 420px) {\n  table[class=fullTable] {\n    width: 100% !important;\n    clear: both; }\n  table[class=fullPadding] {\n    width: 85% !important;\n    clear: both; }\n  table[class=col] {\n    width: 100% !important;\n    clear: both; }\n  table[class=col] td {\n    text-align: left !important; }\n  .erase {\n    display: none;\n    font-size: 0;\n    max-height: 0;\n    line-height: 0;\n    padding: 0; }\n  .visibleMobile {\n    display: block !important; }\n  .hiddenMobile {\n    display: none !important; } }\n\n.cddiv, .pddiv {\n  background-color: white;\n  padding: 1%; }\n\n.cddiv input, .cddiv textarea {\n  width: 100%;\n  padding: 1% 3%; }\n\n.cdmargin {\n  margin: 4% 0 0; }\n\n.pddiv input, .pddiv textarea {\n  width: 100%;\n  padding: 1% 3%; }\n\n.pddiv button {\n  margin: 13% 0 0; }\n\n.pdmargin {\n  margin: 2% 0 0; }\n\n.billtitle {\n  margin: 3% 0;\n  text-align: center; }\n\n.indel input {\n  width: 85%; }\n\n.indel button {\n  background: none;\n  border: none;\n  float: right;\n  width: 10%; }\n\n.invoicediv {\n  background-color: white; }\n\n.rowmargin {\n  margin: 1% 0; }\n\n.rowmarge {\n  padding: 1%;\n  margin: 2% 0; }\n\n.invoicediv .brandtitle h3 {\n  vertical-align: middle;\n  line-height: 90px; }\n\n.invoicediv .brandtype .row {\n  height: 50%; }\n\n.invoicediv .borderdiv {\n  border: 1px solid #646464; }\n\n.invoicediv .borderdiv p {\n  font-size: 12px;\n  line-height: 15px;\n  padding: 2% 2% 0 0; }\n\n.invoicedate table {\n  padding-left: 0%; }\n\n.invoicetable table tr,\n.invoicetable table th,\n.invoicetable table td {\n  border: 1px solid #6b6a6a;\n  background-color: white !important; }\n\n.invoicetable table th {\n  padding: 0;\n  text-align: center;\n  vertical-align: middle; }\n\n.invoicetable table td {\n  text-align: right;\n  padding: 0 1%;\n  background-color: none; }\n\n.invoicetable table .description {\n  text-align: left;\n  padding: 0 5px; }\n\n.rowmarginbottom {\n  padding: 1%;\n  margin: 10% 0 2%;\n  font-size: 12px; }\n\n.signbox {\n  border: 1px solid #686767; }\n\n.invoicefootertext {\n  line-height: 15px;\n  font-size: 12px; }\n\n.terms {\n  font-size: 10px; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  color: #030303;\n  border: 1px solid #ddd;\n  background-color: #e9e9e9; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #F2F2F2; }\n\n.invoiceinput {\n  border: 0.3px solid #c9c9c9;\n  background-color: none;\n  height: 15px;\n  width: 85px;\n  font-size: 10px; }\n\n.invoiceinputs {\n  border: 0.3px solid #c9c9c9;\n  background-color: none;\n  height: 15px;\n  width: 50px;\n  font-size: 10px !important; }\n\n.container {\n  width: 550px;\n  margin: 45px auto; }\n\n.clearfix {\n  clear: both; }\n\n.form-part {\n  margin: 20px 0; }\n\n.form-part h2 {\n  font-size: 25px;\n  font-weight: 400;\n  font-family: 'Josefin Sans', sans-serif;\n  margin-bottom: 15px; }\n\n.text-input,\n.radio-button,\n.check-boxes {\n  margin-bottom: 13px; }\n\n.text-input label,\n.radio-button label,\n.check-boxes label {\n  display: block;\n  margin-bottom: 3px;\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 14px;\n  font-weight: 600; }\n\n.radio-button label,\n.check-boxes label {\n  margin-bottom: 7px;\n  font-weight: 900; }\n\n.text-input input,\n.text-input textarea,\n.text-input select {\n  padding: 7px 7px;\n  display: block;\n  width: 100%;\n  border: solid 1px #ccc;\n  border-radius: 2px; }\n\n.text-input select {\n  width: 100%; }\n\n.text-input textarea {\n  height: 100px; }\n\n.sqr-input .text-input,\n.sqr-radio-input .radio-button,\n.sqr-check-input .check-boxes {\n  float: left;\n  width: 45%; }\n\n.sqr-input .text-input:nth-child(1),\n.sqr-radio-input .radio-button:nth-child(1),\n.sqr-check-input .check-boxes:nth-child(1) {\n  margin-right: 10%; }\n\n.cub-input .text-input {\n  float: left;\n  width: 26.66%; }\n\n.cub-input .text-input:nth-child(1),\n.cub-input .text-input:nth-child(2) {\n  margin-right: 10%; }\n\n.ns-radio-btn input[type=\"radio\"],\n.ns-check-box input[type=\"checkbox\"] {\n  visibility: hidden; }\n\n.productspace {\n  margin-top: 70px; }\n\n.addsubmit {\n  position: absolute;\n  bottom: 28px;\n  left: 720px; }\n\n.possupplier {\n  background-color: white;\n  color: black;\n  margin: 1%;\n  padding: 2%; }\n\n.possupplier .search1 {\n  border-right: none;\n  border-left: none;\n  border-top: none; }\n\n.search1 {\n  margin: 2%;\n  background-color: white;\n  background: none;\n  border-right: none;\n  border-left: none;\n  border-top: none; }\n\n.table1 {\n  position: relative;\n  width: 100%;\n  border: none;\n  background-color: white; }\n\n.table1 td {\n  padding: 1% 2%;\n  background-color: white;\n  font-family: 'Josefin Sans', sans-serif; }\n\n.possuppliertable {\n  position: relative;\n  background-color: white;\n  color: black;\n  margin: 1%;\n  padding: 2% 1%; }\n\n.possupplier .table1 input {\n  width: 100%; }\n\n.possupplier .table1 textarea {\n  width: 100%; }\n\n.possuppliertable button {\n  margin: 0 0 0 2%; }\n\n.tableadd {\n  position: relative;\n  width: 100%;\n  background-color: white; }\n\n.tableadd button {\n  border: none;\n  background-color: none;\n  background: none; }\n\n.searchlist ul {\n  width: 100% !important;\n  position: relative;\n  padding: 2%;\n  list-style-type: none;\n  background-color: white;\n  margin-top: 0%;\n  margin-left: 0%;\n  box-shadow: 0 5px 10px #888888;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.searchlist ul li {\n  position: absolute; }\n\n.searchlist1 {\n  position: relative;\n  width: 100%;\n  background: red; }\n\n.searchlist1 ul {\n  width: 100% !important;\n  position: relative;\n  padding: 2%;\n  list-style-type: none;\n  background-color: white;\n  margin-top: 0%;\n  margin-left: 0%;\n  box-shadow: 0 5px 10px #888888;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.searchlist1 ul li {\n  margin: 3px 0;\n  position: relative; }\n\n.tick {\n  height: 20px;\n  width: 20px; }\n\n.searchbar {\n  width: 40%; }\n\n.fa-search {\n  position: absolute;\n  margin-left: 47%; }\n\ntable thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 0px solid #ddd; }\n\n@media print {\n  #printPageButton {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9zYWxlcy9iaWxsaW5nL0M6XFxVc2Vyc1xcQmhhcmFuZWVkaGFyYW5cXERvd25sb2Fkc1xcV01TLTFcXHdtcyAxNC0xMi9zcmNcXGFwcFxcZGVtb1xccGFnZXNcXHNhbGVzXFxiaWxsaW5nXFxiaWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEseUJBQW9DLEVBQUE7O0FBQzVDO0VBQVUsY0FBYyxFQUFBOztBQUN4QjtFQUNJLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUFvQiw4QkFBOEIsRUFBQTs7QUFDbEQ7RUFBaUIsV0FBVztFQUFFLHlCQUF5QixFQUFBOztBQUN2RDtFQUFJLHFCQUFvQjtFQUFFLHdCQUF1QjtFQUFFLDBCQUF5QjtFQUFFLDJCQUEyQjtFQUFFLHlCQUF5QixFQUFBOztBQUNwSTtFQUFpQixhQUFhLEVBQUE7O0FBQzlCO0VBQWdCLGNBQWMsRUFBQTs7QUFDOUI7RUFDQTtJQUFPLHNCQUFzQixFQUFBO0VBQzdCO0lBQXlCLHFCQUFxQjtJQUFFLFdBQVcsRUFBQTtFQUMzRDtJQUEyQixxQkFBcUI7SUFBRSxXQUFXLEVBQUE7RUFDN0Q7SUFBbUIscUJBQXFCLEVBQUE7RUFDeEM7SUFBUyxhQUFhLEVBQUEsRUFBSTs7QUFFMUI7RUFDQTtJQUF5QixzQkFBc0I7SUFBRSxXQUFXLEVBQUE7RUFDNUQ7SUFBMkIscUJBQXFCO0lBQUUsV0FBVyxFQUFBO0VBQzdEO0lBQW1CLHNCQUFzQjtJQUFFLFdBQVcsRUFBQTtFQUN0RDtJQUFzQiwyQkFBMkIsRUFBQTtFQUNqRDtJQUFTLGFBQWE7SUFBRSxZQUFZO0lBQUUsYUFBYTtJQUFFLGNBQWM7SUFBRSxVQUFVLEVBQUE7RUFDL0U7SUFBaUIseUJBQXlCLEVBQUE7RUFDMUM7SUFBZ0Isd0JBQXdCLEVBQUEsRUFBSTs7QUFFNUM7RUFDSSx1QkFBdUI7RUFDdkIsV0FBVyxFQUFBOztBQUdm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RUFBQTs7QUFHL0I7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvZGVtby9wYWdlcy9zYWxlcy9iaWxsaW5nL2JpbGxpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7IGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTt9XHJcbi50bWFyZ2lueyBwYWRkaW5nOiAwIDIwJTt9XHJcbi5iaWxsaW5nIHRhYmxlIHsgXHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5kaXYsIHAsIGEsIGxpLCB0ZCB7IC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTsgfVxyXG4uRXh0ZXJuYWxDbGFzcyB7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyB9XHJcbnAgeyBwYWRkaW5nOiAwIWltcG9ydGFudDsgbWFyZ2luLXRvcDogMCFpbXBvcnRhbnQ7IG1hcmdpbi1yaWdodDogMCFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDsgfVxyXG4udmlzaWJsZU1vYmlsZSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuLmhpZGRlbk1vYmlsZSB7IGRpc3BsYXk6IGJsb2NrOyB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuYm9keSB7IHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7IH1cclxudGFibGVbY2xhc3M9ZnVsbFRhYmxlXSB7IHdpZHRoOiA5NiUgIWltcG9ydGFudDsgY2xlYXI6IGJvdGg7IH1cclxudGFibGVbY2xhc3M9ZnVsbFBhZGRpbmddIHsgd2lkdGg6IDg1JSAhaW1wb3J0YW50OyBjbGVhcjogYm90aDsgfVxyXG50YWJsZVtjbGFzcz1jb2xdIHsgd2lkdGg6IDQ1JSAhaW1wb3J0YW50OyB9XHJcbi5lcmFzZSB7IGRpc3BsYXk6IG5vbmU7IH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbnRhYmxlW2NsYXNzPWZ1bGxUYWJsZV0geyB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBjbGVhcjogYm90aDsgfVxyXG50YWJsZVtjbGFzcz1mdWxsUGFkZGluZ10geyB3aWR0aDogODUlICFpbXBvcnRhbnQ7IGNsZWFyOiBib3RoOyB9XHJcbnRhYmxlW2NsYXNzPWNvbF0geyB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBjbGVhcjogYm90aDsgfVxyXG50YWJsZVtjbGFzcz1jb2xdIHRkIHsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50OyB9XHJcbi5lcmFzZSB7IGRpc3BsYXk6IG5vbmU7IGZvbnQtc2l6ZTogMDsgbWF4LWhlaWdodDogMDsgbGluZS1oZWlnaHQ6IDA7IHBhZGRpbmc6IDA7IH1cclxuLnZpc2libGVNb2JpbGUgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XHJcbi5oaWRkZW5Nb2JpbGUgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cclxufVxyXG4uY2RkaXYsIC5wZGRpdnsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgXHJcbn1cclxuLmNkZGl2IGlucHV0LC5jZGRpdiB0ZXh0YXJlYXsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDElIDMlO1xyXG59XHJcbi5jZG1hcmdpbntcclxuICAgIG1hcmdpbjogNCUgMCAwO1xyXG59XHJcbi5wZGRpdiBpbnB1dCAsIC5wZGRpdiB0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMSUgMyU7XHJcbn1cclxuLnBkZGl2IGJ1dHRvbntcclxuICAgIG1hcmdpbjogMTMlIDAgMDtcclxufVxyXG4ucGRtYXJnaW57XHJcbiAgICBtYXJnaW46IDIlIDAgMDtcclxufVxyXG4uYmlsbHRpdGxle1xyXG4gICAgbWFyZ2luOiAzJSAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5kZWwgaW5wdXR7IHdpZHRoOiA4NSU7fVxyXG4uaW5kZWwgYnV0dG9ueyBcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZsb2F0OiByaWdodDsgXHJcbiAgd2lkdGg6IDEwJTt9XHJcbi5pbnZvaWNlZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyAgcGFkZGluZzogMSU7XHJcbn1cclxuLnJvd21hcmdpbntcclxuICAgIG1hcmdpbjogMSUgMDtcclxufVxyXG4ucm93bWFyZ2V7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgIG1hcmdpbjogMiUgMDtcclxufVxyXG4uaW52b2ljZWRpdiAuYnJhbmR0aXRsZSBoM3tcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBsaW5lLWhlaWdodDogOTBweDtcclxufVxyXG4uaW52b2ljZWRpdiAuYnJhbmR0eXBlIC5yb3d7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG4uaW52b2ljZWRpdiAuYm9yZGVyZGl2e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgLy8gcGFkZGluZzogMSU7XHJcbn1cclxuLmludm9pY2VkaXYgLmJvcmRlcmRpdiBwe1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAyJSAyJSAwIDA7XHJcbn1cclxuLmludm9pY2VkYXRlIHRhYmxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxufVxyXG4uaW52b2ljZXRhYmxlIHRhYmxlIHRyLFxyXG4uaW52b2ljZXRhYmxlIHRhYmxlIHRoLFxyXG4uaW52b2ljZXRhYmxlIHRhYmxlIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDcsIDEwNiwgMTA2KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmludm9pY2V0YWJsZSB0YWJsZSB0aHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5pbnZvaWNldGFibGUgdGFibGUgdGQgeyBcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMCAxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbn1cclxuLmludm9pY2V0YWJsZSB0YWJsZSAuZGVzY3JpcHRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuLnJvd21hcmdpbmJvdHRvbXtcclxuICBwYWRkaW5nOiAxJTtcclxuICAgIG1hcmdpbjogMTAlIDAgMiU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnNpZ25ib3h7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTA0LCAxMDMsIDEwMyk7XHJcbn1cclxuLmludm9pY2Vmb290ZXJ0ZXh0e1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnRlcm1ze1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHJnYigzLCAzLCAzKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMn1cclxuICAuaW52b2ljZWlucHV0e1xyXG4gICAgYm9yZGVyOiAwLjNweCBzb2xpZCByZ2IoMjAxLCAyMDEsIDIwMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC5pbnZvaWNlaW5wdXRze1xyXG4gICAgYm9yZGVyOiAwLjNweCBzb2xpZCByZ2IoMjAxLCAyMDEsIDIwMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBtYXJnaW46IDQ1cHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmNsZWFyZml4IHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1wYXJ0IHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1wYXJ0IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbnB1dCxcclxuICAucmFkaW8tYnV0dG9uLFxyXG4gIC5jaGVjay1ib3hlcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbnB1dCBsYWJlbCxcclxuICAucmFkaW8tYnV0dG9uIGxhYmVsLFxyXG4gIC5jaGVjay1ib3hlcyBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYWRpby1idXR0b24gbGFiZWwsXHJcbiAgLmNoZWNrLWJveGVzIGxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LWlucHV0IGlucHV0LFxyXG4gIC50ZXh0LWlucHV0IHRleHRhcmVhLFxyXG4gIC50ZXh0LWlucHV0IHNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiA3cHggN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbnB1dCBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LWlucHV0IHRleHRhcmVhIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcXItaW5wdXQgLnRleHQtaW5wdXQsXHJcbiAgLnNxci1yYWRpby1pbnB1dCAucmFkaW8tYnV0dG9uLFxyXG4gIC5zcXItY2hlY2staW5wdXQgLmNoZWNrLWJveGVzIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICB9XHJcbiAgXHJcbiAgLnNxci1pbnB1dCAudGV4dC1pbnB1dDpudGgtY2hpbGQoMSksXHJcbiAgLnNxci1yYWRpby1pbnB1dCAucmFkaW8tYnV0dG9uOm50aC1jaGlsZCgxKSxcclxuICAuc3FyLWNoZWNrLWlucHV0IC5jaGVjay1ib3hlczpudGgtY2hpbGQoMSkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdWItaW5wdXQgLnRleHQtaW5wdXQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjYuNjYlO1xyXG4gIH1cclxuICBcclxuICAuY3ViLWlucHV0IC50ZXh0LWlucHV0Om50aC1jaGlsZCgxKSxcclxuICAuY3ViLWlucHV0IC50ZXh0LWlucHV0Om50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICB9XHJcbiAgXHJcbiAgLm5zLXJhZGlvLWJ0biBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXHJcbiAgLm5zLWNoZWNrLWJveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAucHJvZHVjdHNwYWNle1xyXG4gICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gIH1cclxuIFxyXG4gIFxyXG4gIC5hZGRzdWJtaXR7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAyOHB4O1xyXG4gICAgICBsZWZ0OjcyMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tbmV3IGZlRGlmZnVzZUxpZ2h0aW5nXHJcblxyXG4gIC5wb3NzdXBwbGllcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcbi5wb3NzdXBwbGllciAuc2VhcmNoMXtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG4uc2VhcmNoMXtcclxuICAgICBtYXJnaW46IDIlIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuLnRhYmxlMXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gbWFyZ2luOiAyJSA1JTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4udGFibGUxIHRkeyBwYWRkaW5nOiAxJSAyJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBvc3N1cHBsaWVydGFibGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBwYWRkaW5nOiAyJSAxJTtcclxufVxyXG4ucG9zc3VwcGxpZXIgLnRhYmxlMSBpbnB1dHsgd2lkdGg6IDEwMCU7IH1cclxuLnBvc3N1cHBsaWVyIC50YWJsZTEgdGV4dGFyZWF7IHdpZHRoOiAxMDAlOyB9XHJcbi5wb3NzdXBwbGllcnRhYmxlIGJ1dHRvbntcclxuICAgIG1hcmdpbjogMCAwIDAgMiU7XHJcbn1cclxuLnRhYmxlYWRke1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1hcmdpbjogMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLnRhYmxlYWRkIGJ1dHRvbntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5zZWFyY2hsaXN0IHVsXHJcbntcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAyJTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggIzg4ODg4ODtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG4uc2VhcmNobGlzdCB1bCBsaXtcclxuICAgIC8vIG1hcmdpbjogMSUgMCA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnNlYXJjaGxpc3QxIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICAgIC8vIG1hcmdpbi10b3A6IC01JTtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuIFxyXG59XHJcbi5zZWFyY2hsaXN0MSB1bFxyXG57XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAjODg4ODg4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuLnNlYXJjaGxpc3QxIHVsIGxpXHJcbntcclxuICAgICBtYXJnaW46IDNweCAwIDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbi50aWNre1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLnNlYXJjaGJhcntcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uZmEtc2VhcmNoe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogNDclO1xyXG4gIFxyXG59XHJcblxyXG5cclxudGFibGUgdGhlYWQ+dHI+dGgge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgI3ByaW50UGFnZUJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/demo/pages/sales/billing/billing.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/demo/pages/sales/billing/billing.component.ts ***!
  \***************************************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_core_chart_crt_morris_addproduct_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pages/core-chart/crt-morris/addproduct.service */ "./src/app/demo/pages/core-chart/crt-morris/addproduct.service.ts");
/* harmony import */ var _pages_form_elements_basic_elements_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/form-elements/basic-elements/supplier.service */ "./src/app/demo/pages/form-elements/basic-elements/supplier.service.ts");
/* harmony import */ var _sales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
/* harmony import */ var _pages_finance_customerhistory_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pages/finance/customerhistory/customer.service */ "./src/app/demo/pages/finance/customerhistory/customer.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









// import { numToWords} from '../../../../../../node_modules/number-to-words';


let BillingComponent = class BillingComponent {
    constructor(addProductService, salesErvice, fb, supplierService, customerService, router, toster
    //  private numToWord: numToWords,
    ) {
        this.addProductService = addProductService;
        this.salesErvice = salesErvice;
        this.fb = fb;
        this.supplierService = supplierService;
        this.customerService = customerService;
        this.router = router;
        this.toster = toster;
        this.test = true;
        this.table = true;
        this.srch = true;
        this.patchValues = [];
        this.hhh = [];
        this.ivdate = new Date();
        this.change = 0;
        this.search_item = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.search_supply = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.isLoading = false;
        var us = JSON.parse(localStorage.getItem('user'));
        us.forEach(element => {
            this.id = element.branchId;
            this.Name = element.branchName;
            this.location = element.branchLocation;
        });
    }
    ngOnInit() {
        // var converter = require('numToWord');
        // converter.toWords(this.word);
        this.search_item.valueChanges.pipe(
        // tap(() => this.isLoading = true),
        // debounce(() => interval(1000)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(value => this.search(value))).subscribe(res => {
            this.result_list = res;
            this.isLoading = false;
        }, err => {
            console.error(err.error);
        });
        console.log(this.result_list);
        // this.search_word.valueChanges.pipe(sw)
        this.search_supply.valueChanges.pipe(
        // tap(() => this.isLoading = true),
        // debounce(() => interval(1000)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(value => this.searchsupply(value))).subscribe(res => {
            this.result_supply = res;
            this.isLoading = false;
        }, err => {
            console.error(err.error);
        });
        console.log(this.result_list);
        //  console.log( this.SaleForm.touched,'kkkk')
        this.checkdate = 'poda lusu';
        this.addProductService.getProduct().subscribe(data => {
            this.searchData = data;
            console.log(this.searchData, 'kkkk');
        });
        this.salesErvice.refreshNeeded$.subscribe(() => {
            this.getFuction();
        });
        this.getSales();
        this.getSuplier();
        this.SaleForm = this.fb.group({
            _id: [''],
            itemC: [''],
            branchId: this.id,
            branchName: this.Name,
            branchLocation: this.location,
            name: [''],
            date: [''],
            credit: [0],
            //  balance:[' '],
            toiv: [''],
            amount: [''],
            //  overAllInvoiceTotal:[' '],
            billAddress: [''],
            shipAddress: [''],
            alternateNumber: [''],
            contactNumber: [''],
            cost: [''],
            products: this.fb.array([this.createItem()])
        });
        this.dater = (this.ivdate.getMonth() + 1) + '/' + (this.ivdate.getDate()) + '/' + (this.ivdate.getFullYear());
        console.log(this.dater, 'dater');
    }
    createItem() {
        return this.fb.group({
            _id: [''],
            branchId: this.id,
            itemCode: [''],
            idate: [''],
            description: [''],
            hsnCode: [''],
            vom: [''],
            custQuantity: [''],
            unitRate: [''],
            category: [''],
            // SGSTAmount:[''],
            CGST: [''],
            SGST: [''],
            gstcals: [''],
            gstunit: [''],
            discount: [''],
            cgstsgst: [''],
            col33: [0],
            col34: [0],
            col35: [0],
        });
    }
    dataget() {
        this.SaleForm = this.fb.group({
            _id: [''],
            branchId: this.id,
            branchName: this.Name,
            branchLocation: this.location,
            name: [''],
            overAllInvoiceAmount: [''],
            credit: [''],
            date: [''],
            billAddress: [''],
            shipAddress: [''],
            contactNumber: [''],
            alternateNumber: [''],
            cost: [''],
            // balance:[''],
            // overAllInvoiceTotal:[''],
            toiv: [''],
            amount: [''],
            products: this.fb.array([this.product]),
            paid: this.fb.array([this.paid])
        });
    }
    loadForm(data) {
        //create lines array first
        for (let line = 1; line < data.products.length; line++) {
            const productsFormArray = this.SaleForm.get("products");
            productsFormArray.push(this.product);
        }
        //patch the form:
        for (let lin = 1; lin < data.paid.length; lin++) {
            const paidFormArray = this.SaleForm.get("paid");
            paidFormArray.push(this.paid);
        }
    }
    get product() {
        return this.fb.group({
            _id: '',
            branchId: this.id,
            itemCode: '',
            idate: '',
            description: '',
            hsnCode: '',
            vom: '',
            custQuantity: '',
            unitRate: '',
            category: '',
            // SGSTAmount:0,
            gstcals: '',
            gstunit: '',
            CGST: 0,
            SGST: 0,
            cgstsgst: '',
            col33: 0,
            col34: 0,
            col35: 0,
        });
    }
    get paid() {
        return this.fb.group({
            _id: '',
            dat: '',
            amountPaid: '',
        });
    }
    getFuction() {
        this.salesErvice.getInvProduct().subscribe(data => {
            this.invoice = data;
            console.log(this.invoice, 'totalinv');
        });
    }
    addItem() {
        this.change++;
        console.log(this.change, 'change');
        this.products = this.SaleForm.get('products');
        this.products.push(this.createItem());
    }
    deleteAddressGroup(index) {
        this.change--;
        console.log(this.change, 'change');
        const add = this.SaleForm.get('products');
        add.removeAt(index);
        this.hhh.splice(index, 1);
    }
    keyup1(event) {
        console.log(event, 'event');
    }
    removeGroup(index) {
        const add = this.SaleForm.get('products');
        add.at(index).reset();
        this.hhh.splice(index, 1);
        console.log(this.hhh, 'event');
    }
    search(keyword) {
        this.itemLength2 = keyword.length;
        console.log(keyword.length);
        var emp = [keyword];
        var key = keyword.toLowerCase();
        var dis = [key];
        const result = this.searchData.filter(e => (e.itemCode.indexOf(emp) !== -1 || e.description.toLowerCase().indexOf(dis) !== -1));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(result);
    }
    // var filteredArray = this.dat.filter(function(itm){
    //   return emp.indexOf(itm.status) > -1;
    //       });     const result = this.list.filter(e => e.indexOf(keyword) !== -1)
    searchsupply(keyword) {
        this.itemLength = keyword.length;
        var key = keyword.toLowerCase();
        console.log(keyword.toLocaleLowerCase(), 'viki');
        var emp = [key];
        const result = this.getSuppliers.filter(e => 
        // e.name.indexOf(emp) !== -1)
        e.name.toLowerCase().indexOf(emp) !== -1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(result);
    }
    editData(value) {
        console.log(value.products.length, 'length');
        this.change = (value.products.length) - 1;
        this.test = true;
        this.table = false;
        this.hhh = value.products;
        console.log(value, 'button');
        this.dataget();
        this.loadForm(value);
        this.SaleForm.patchValue(value);
        console.log(value, 'button');
    }
    getSuppliersData(value) {
        this.itemLength = 0;
        // var val=value
        value.date = this.dater;
        // this.arrdate=value.date
        value._id = " ";
        console.log(value, 'getsupply value');
        console.log(value.date, 'getsupply value');
        this.SaleForm.patchValue(value);
    }
    getSuplier() {
        this.supplierService.getSupplier().subscribe(data => {
            this.getSuppliers = data;
            console.log(this.getSuppliers, 'buttonsuplier');
        });
    }
    onSubmit(val) {
        console.log('in');
        if (val._id == " ") {
            // val.overAllInvoiceTotal=val.overAllInvoiceAmount
            // val.balance=val.overAllInvoiceAmount
            this.salesErvice.postInvProduct(val).subscribe(data => {
                console.log(data);
                this.toster.success('added successfully');
                this.test = false;
            });
        }
        else {
            this.SGST = 0;
            this.CGST = 0;
            this.Totalamount = 0;
            val.products.forEach(dat => {
                this.Totalamount = this.Totalamount + dat.col33;
                this.CGST = this.CGST + Number.parseFloat(dat.CGSTAmount);
                this.SGST = this.SGST + Number.parseFloat(dat.SGSTAmount);
                console.log(dat.CGST);
            });
            console.log(this.Totalamount);
            console.log(this.CGST);
            console.log(this.SGST);
            val.overAllInvoiceAmount = this.Totalamount;
            val.overAllCGSTUnit = this.CGST;
            val.overAllSGSTUnit = this.SGST;
            val.overAllInvoiceTotal = this.Totalamount;
            val.balance = this.Totalamount;
            this.salesErvice.putInvProduct(val).subscribe(data => {
                console.log(data);
                this.test = false;
                this.table = true;
            });
            console.log(val, 'data');
        }
    }
    getProduct(value) {
        if (this.change == 0) {
            this.hhh = [];
        }
        this.itemLength2 = 0;
        value.idate = this.dater;
        this.hhh.push(value);
        console.log(this.hhh, 'starthhhh');
        let valuee = {
            "products": this.hhh
        };
        console.log(this.hhh, 'hhval');
        this.SaleForm.patchValue(valuee);
    }
    getSales() {
        this.salesErvice.getInvProduct().subscribe(data => {
            this.salesData = data;
            console.log(this.salesData, 'buttonsales');
        });
    }
    viewBilling(data) {
        this.patchValues.push(data);
    }
    back() {
        this.test = true;
    }
    printPage() {
        window.print();
    }
};
BillingComponent.ctorParameters = () => [
    { type: _pages_core_chart_crt_morris_addproduct_service__WEBPACK_IMPORTED_MODULE_3__["AddproductService"] },
    { type: _sales_service__WEBPACK_IMPORTED_MODULE_5__["SalesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _pages_form_elements_basic_elements_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"] },
    { type: _pages_finance_customerhistory_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }
];
BillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-billing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./billing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/sales/billing/billing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./billing.component.scss */ "./src/app/demo/pages/sales/billing/billing.component.scss")).default]
    })
], BillingComponent);



/***/ }),

/***/ "./src/app/demo/pages/sales/billing/billing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/pages/sales/billing/billing.module.ts ***!
  \************************************************************/
/*! exports provided: BillingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingModule", function() { return BillingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm2015/ngx-print.js");
/* harmony import */ var _billing_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./billing-routing.module */ "./src/app/demo/pages/sales/billing/billing-routing.module.ts");
/* harmony import */ var _billing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./billing.component */ "./src/app/demo/pages/sales/billing/billing.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _editbill_editbill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editbill/editbill.component */ "./src/app/demo/pages/sales/billing/editbill/editbill.component.ts");







// import { Ng2SearchPipeModule } from 'ng2-search-filter';

let BillingModule = class BillingModule {
};
BillingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_billing_component__WEBPACK_IMPORTED_MODULE_5__["BillingComponent"], _editbill_editbill_component__WEBPACK_IMPORTED_MODULE_7__["EditbillComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _billing_routing_module__WEBPACK_IMPORTED_MODULE_4__["BillingRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ngx_print__WEBPACK_IMPORTED_MODULE_3__["NgxPrintModule"]
            // Ng2SearchPipeModule
        ]
    })
], BillingModule);



/***/ }),

/***/ "./src/app/demo/pages/sales/billing/editbill/editbill.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/demo/pages/sales/billing/editbill/editbill.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tick {\n  width: 5px;\n  height: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9zYWxlcy9iaWxsaW5nL2VkaXRiaWxsL0M6XFxVc2Vyc1xcQmhhcmFuZWVkaGFyYW5cXERvd25sb2Fkc1xcV01TLTFcXHdtcyAxNC0xMi9zcmNcXGFwcFxcZGVtb1xccGFnZXNcXHNhbGVzXFxiaWxsaW5nXFxlZGl0YmlsbFxcZWRpdGJpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxVQUFVO0VBQ1YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9wYWdlcy9zYWxlcy9iaWxsaW5nL2VkaXRiaWxsL2VkaXRiaWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpY2t7XHJcbiAgIHdpZHRoOiA1cHg7XHJcbiAgIGhlaWdodDogNXB4O1xyXG4gIH1cclxuXHJcbi8vICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sLXhsLTEwXCI+XHJcbi8vICAgPHRhYmxlPlxyXG4vLyAgICAgPHRoZWFkPlxyXG4vLyAgICAgPHRyPlxyXG4vLyAgICAgICA8dGg+IEl0ZW0gQ29kZSA8L3RoPlxyXG4vLyAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4vLyAgICAgICA8dGg+VW5pdCBSYXRlIDwvdGg+XHJcbi8vICAgICAgIDx0aD4gUXVhbnRpdHkgPC90aD4gICAgXHJcbi8vICAgICAgIDx0aD4gR1NUIDwvdGg+XHJcbi8vICAgICAgIDx0aD4gSW52b2ljZSBBbW91bnQgPC90aD5cclxuLy8gICAgICAgPHRoPmFjdGlvbjwvdGg+XHJcbi8vICAgICA8L3RyPlxyXG4vLyAgICAgPC90aGVhZD5cclxuLy8gICAgIDx0Ym9keSBmb3JtQXJyYXlOYW1lPVwicHJvZHVjdHNcIiAqbmdGb3I9XCJsZXQgYSBvZiBTYWxlRm9ybS5nZXQoJ3Byb2R1Y3RzJykuY29udHJvbHM7IGxldCBpID0gaW5kZXhcIj5cclxuLy8gICAgIDx0ciBbZm9ybUdyb3VwTmFtZV09XCJpXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4O1wiPlxyXG4vLyAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGZvcm1Db250cm9sTmFtZT0naWRhdGUnIFsobmdNb2RlbCldPVwiZGF0ZXJcIj5cclxuLy8gICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGZvcm1Db250cm9sTmFtZT0naXRlbUNvZGUnIFsobmdNb2RlbCldPVwic2VhcmNoVGV4dFwiPjwvdGQ+XHJcbi8vICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBmb3JtQ29udHJvbE5hbWU9J2Rlc2NyaXB0aW9uJyByZWFkb25seT4gPC90ZD5cclxuLy8gICAgICAgPHRkPjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgZm9ybUNvbnRyb2xOYW1lPSd1bml0UmF0ZSc+IDwvdGQ+XHJcbi8vICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cIm51bWJlclwiIGZvcm1Db250cm9sTmFtZT0nY3VzdFF1YW50aXR5Jz4gPC90ZD5cclxuLy8gICAgICAgPHRkPjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgZm9ybUNvbnRyb2xOYW1lPSdjZ3N0c2dzdCcgcmVhZG9ubHk+IDwvdGQ+XHJcbi8vICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwie3thLmNvbnRyb2xzLmNvbDMzLnZhbHVlfX1cIiBzaXplPVwiOFwiIHJlYWRvbmx5PjwvdGQ+XHJcbi8vICAgICAgIDx0ZD5cclxuLy8gICAgICAgICA8YnV0dG9uIChjbGljayk9XCJyZW1vdmVHcm91cChpKVwiIHN0eWxlPVwiYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lO1wiPlJzdDwvYnV0dG9uPiBcclxuLy8gICAgICAgICA8YnV0dG9uIChjbGljayk9XCJkZWxldGVBZGRyZXNzR3JvdXAoaSlcIj4gPGkgY2xhc3M9XCJmYXMgZmEtcmVtb3ZlXCIgc3R5bGU9XCJjb2xvcjpyZWRcIj48L2k+IDwvYnV0dG9uPlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgZm9ybUNvbnRyb2xOYW1lPSdDR1NUJ2hpZGRlbj5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGZvcm1Db250cm9sTmFtZT0nU0dTVCdoaWRkZW4+XHJcbi8vICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBmb3JtQ29udHJvbE5hbWU9XCJjb2wzNFwiIGhpZGRlbiBbbmdNb2RlbF09XCIoYS5jb250cm9scy5DR1NULnZhbHVlICsgYS5jb250cm9scy5TR1NULnZhbHVlKVwiPlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgZm9ybUNvbnRyb2xOYW1lPVwiY29sMzNcIiBoaWRkZW4gW25nTW9kZWxdPVwiKGEuY29udHJvbHMudW5pdFJhdGUudmFsdWUgKiBhLmNvbnRyb2xzLmN1c3RRdWFudGl0eS52YWx1ZSkvMTAwKihhLmNvbnRyb2xzLlNHU1QudmFsdWUrYS5jb250cm9scy5DR1NULnZhbHVlKSsoYS5jb250cm9scy51bml0UmF0ZS52YWx1ZSAqIGEuY29udHJvbHMuY3VzdFF1YW50aXR5LnZhbHVlKVwiPlxyXG4gICAgICAgXHJcbi8vICAgICA8L3RyPlxyXG4vLyAgICAgPC90Ym9keT5cclxuLy8gICA8L3RhYmxlPlxyXG4vLyAgIDxkaXYgY2xhc3M9XCJzZWFyY2hsaXN0MVwiPlxyXG4vLyAgICAgPHVsICpuZ0lmPSdzZWFyY2hUZXh0Lmxlbmd0aD4xJz5cclxuLy8gICAgICAgPGxpICpuZ0Zvcj1cImxldCBoZSBvZiBzZWFyY2hEYXRhIHxmaWx0ZXI6c2VhcmNoVGV4dFwiIChjbGljayk9J2dldFByb2R1Y3QoaGUpJyBzdHlsZT1cImN1cnNvcjpwb2ludGVyO1wiPlxyXG4vLyAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+ICZuYnNwO3t7aGUuaXRlbUNvZGV9fVxyXG4vLyAgICAgICA8L2xpPlxyXG4vLyAgICAgPC91bD5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyA8L2Rpdj4gLS0+Il19 */");

/***/ }),

/***/ "./src/app/demo/pages/sales/billing/editbill/editbill.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/pages/sales/billing/editbill/editbill.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditbillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditbillComponent", function() { return EditbillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_core_chart_crt_morris_addproduct_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../pages/core-chart/crt-morris/addproduct.service */ "./src/app/demo/pages/core-chart/crt-morris/addproduct.service.ts");
/* harmony import */ var _pages_form_elements_basic_elements_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../pages/form-elements/basic-elements/supplier.service */ "./src/app/demo/pages/form-elements/basic-elements/supplier.service.ts");
/* harmony import */ var _sales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sales.service */ "./src/app/demo/pages/sales/sales.service.ts");
/* harmony import */ var _pages_finance_customerhistory_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pages/finance/customerhistory/customer.service */ "./src/app/demo/pages/finance/customerhistory/customer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");








let EditbillComponent = class EditbillComponent {
    constructor(addProductService, saleService, fb, supplierService, toster, customerService) {
        this.addProductService = addProductService;
        this.saleService = saleService;
        this.fb = fb;
        this.supplierService = supplierService;
        this.toster = toster;
        this.customerService = customerService;
        this.test = false;
        this.table = true;
        this.sname = true;
        this.patchValues = [];
        this.hhh = [];
        this.ivdate = new Date();
        this.gone = true;
    }
    ngOnInit() {
        this.addProductService.getProduct().subscribe(data => {
            this.searchData = data;
            console.log(this.searchData, 'kkkk');
        });
        this.sale = JSON.parse(localStorage.getItem('bill'));
        this.hhh = this.sale.products;
        console.log(this.sale.products, 'kkkk');
        // this.data.push(this.sale)
        this.dataget();
        // this.salesServicew.getInvProduct().subscribe(data=>{
        //   this.dummy=data;
        //   console.log(this.dummy,'sales value')
        // })
        // this.dater=(this.ivdate.getMonth()+1)+'/'+(this.ivdate.getDate())+'/'+(this.ivdate.getFullYear());
        this.dater = this.sale.date;
        this.loadForm(this.sale);
        this.update(this.sale);
    }
    deleteAddressGroup(index) {
        this.hhh.forEach(data => {
            console.log(data, 'remove data');
            console.log(data, 'puted');
        });
        const add = this.SaleForm.get('products');
        add.removeAt(index);
    }
    removeGroup(index) {
        this.hhh.forEach(data => {
            console.log(data, 'remove data');
            console.log(data, 'puted');
        });
        this.hhh.splice(index, 1);
        const add = this.SaleForm.get('products');
        add.at(index).reset();
        console.log(this.hhh, 'hhhvalue');
    }
    dataget() {
        this.SaleForm = this.fb.group({
            _id: [''],
            name: [''],
            itemC: [''],
            overAllInvoiceAmount: [''],
            credit: [''],
            date: [''],
            billAddress: [''],
            shipAddress: [''],
            contactNumber: [''],
            alternateNumber: [''],
            cost: [''],
            balance: [''],
            toiv: [''],
            amount: [''],
            products: this.fb.array([this.product]),
        });
    }
    loadForm(data) {
        //create lines array first
        for (let line = 1; line < data.products.length; line++) {
            const productsFormArray = this.SaleForm.get("products");
            productsFormArray.push(this.product);
        }
        //patch the form:
        // for (let lin = 1; lin < data.paid.length; lin++){
        //   const paidFormArray = this.SaleForm.get("paid") as FormArray;
        //   paidFormArray.push(this.paid);
        //  }
    }
    get product() {
        return this.fb.group({
            _id: '',
            itemCode: '',
            idate: '',
            description: '',
            hsnCode: '',
            vom: '',
            custQuantity: '',
            unitRate: '',
            CGST: 0,
            SGST: 0,
            col33: 0,
            col34: 0,
            col35: 0,
        });
    }
    // get paid():FormGroup {
    //   return this.fb.group({  
    //    _id:'',
    //   dat:'',
    //   amountPaid:'',
    //   }) 
    // }
    onSubmit(val) {
        console.log(val, 'dataval');
        this.saleService.putInvProduct(val).subscribe(data => {
            console.log(data, 'puted');
            this.toster.success('updated successfully');
        });
        // localStorage.removeItem('invoice')
    }
    add() {
        this.products = this.SaleForm.get('products');
        this.products.push(this.product);
    }
    enableSection(index, disabled) {
        const capabilityFormGroup = this.SaleForm.get('products').at(index);
        disabled ? capabilityFormGroup.enable() : capabilityFormGroup.disable();
        console.log(disabled, 'disable');
        console.log(index, 'index');
    }
    getProduct(value) {
        this.searchText = "";
        this.gone = false;
        value.idate = this.dater;
        this.hhh.push(value);
        console.log(this.hhh, 'starthhhh');
        let valuee = {
            "products": this.hhh
        };
        // this.hhh=[]
        console.log(this.hhh, 'hhval');
        console.log(value.idate, 'idate val');
        this.SaleForm.patchValue(valuee);
        this.gone = true;
    }
    update(val) {
        console.log(val, 'salesupdate');
        this.SaleForm.patchValue(val);
    }
};
EditbillComponent.ctorParameters = () => [
    { type: _pages_core_chart_crt_morris_addproduct_service__WEBPACK_IMPORTED_MODULE_3__["AddproductService"] },
    { type: _sales_service__WEBPACK_IMPORTED_MODULE_5__["SalesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _pages_form_elements_basic_elements_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
    { type: _pages_finance_customerhistory_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"] }
];
EditbillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editbill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editbill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/sales/billing/editbill/editbill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editbill.component.scss */ "./src/app/demo/pages/sales/billing/editbill/editbill.component.scss")).default]
    })
], EditbillComponent);



/***/ })

}]);
//# sourceMappingURL=billing-billing-module-es2015.js.map