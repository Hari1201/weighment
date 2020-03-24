(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-primary navbar-dark\">\n  <!-- Links -->\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a routerLink=\"dashboard\" class=\"nav-link\" routerLinkActive=\"active\"\n        ><b>DashBoard</b></a\n      >\n    </li>\n    <li class=\"nav-item\">\n      <a routerLink=\"customerlist\" class=\"nav-link\" routerLinkActive=\"active\"\n        ><b>Customer</b></a\n      >\n    </li>\n    <li class=\"nav-item\">\n      <a routerLink=\"productlist\" class=\"nav-link\" routerLinkActive=\"active\"\n        ><b>Product</b></a\n      >\n    </li>\n    <li class=\"nav-item\">\n      <a routerLink=\"vehiclelist\" class=\"nav-link\" routerLinkActive=\"active\"\n        ><b>Vehicle</b></a\n      >\n    </li>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  <br />\n  <h2 style=\"text-align: center;\">{{ title }}</h2>\n  <hr />\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer-component/customer-component.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer-component/customer-component.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"alert alert-success alert-dismissible fade show\"\n  *ngIf=\"this.alert && this.issuccess\"\n  role=\"alert\"\n  [hidden]=\"this.hide\"\n>\n  <strong>{{ this.showMsg }}</strong>\n  <button\n    type=\"button\"\n    class=\"close\"\n    data-dismiss=\"alert\"\n    (click)=\"closeAlert()\"\n  >\n    &times;\n  </button>\n</div>\n\n<div\n  class=\"alert alert-danger alert-dismissible fade show\"\n  *ngIf=\"this.alert && !this.issuccess\"\n  role=\"alert\"\n  [hidden]=\"this.hide\"\n>\n  <strong>{{ this.showMsg }}</strong>\n  <button\n    type=\"button\"\n    class=\"close\"\n    data-dismiss=\"alert\"\n    (click)=\"closeAlert()\"\n  >\n    &times;\n  </button>\n</div>\n<h3>Create Customer</h3>\n<div [hidden]=\"submitted\" style=\"width: 400px;\">\n  <form (ngSubmit)=\"createcustomer()\" name=\"form\" autocomplete=\"off\">\n    <div class=\"form-group\">\n      <label for=\"name\">Customer Name </label>\n      <span class=\"required\">*</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"customerName\"\n        required\n        [(ngModel)]=\"customer.customerName\"\n        name=\"customerName\"\n        #customerName=\"ngModel\"\n        placeholder=\"CustomerName\"\n      />\n\n      <div\n        *ngIf=\"\n          customerName.invalid && (customerName.dirty || customerName.touched)\n        \"\n        class=\"alert alert-danger\"\n      >\n        <div *ngIf=\"customerName.errors.required\">\n          Name is required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Phone Number</label>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        name=\"customerPhone\"\n        [(ngModel)]=\"customer.customerPhone\"\n        pattern=\"^((\\\\+91-?)|0)?[0-9]{10}$\"\n        #customerPhone\n        #phone=\"ngModel\"\n        placeholder=\"MobileNumber\"\n      />\n      <div *ngIf=\"phone.errors\" class=\"alert alert-danger\">\n        <div *ngIf=\"phone.errors.pattern\">\n          Mobile number not valid.\n        </div>\n      </div>\n    </div>\n\n    <button\n      type=\"submit\"\n      *ngIf=\"this.submitFlag\"\n      [disabled]=\"\n        !customerPhone.validity.valid || customer.customerName == null\n      \"\n      class=\"btn btn-success\"\n    >\n      Create\n    </button>\n    <button\n      *ngIf=\"!this.submitFlag\"\n      type=\"submit\"\n      [disabled]=\"\n        !customerPhone.validity.valid || customer.customerName == null\n      \"\n      class=\"btn btn-success\"\n    >\n      Update\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer-list/customer-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer-list/customer-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\"><h2>Customer Data</h2></div>\n      <div class=\"col-sm-7\"></div>\n      <div class=\"col-sm-1\">\n        <button (click)=\"getCustomer()\" type=\"button\" class=\"btn btn-primary \">\n          Add\n        </button>\n      </div>\n    </div>\n\n    <div class=\"panel-body\">\n      <div class=\"tableFixHead\">\n        <table class=\"table table-bordered css-serial\">\n          <thead>\n            <tr>\n              <th>S.No</th>\n              <th>Customer Name</th>\n              <th>Phone Number</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let customer of customers\">\n              <td></td>\n              <td>{{ customer.customerName }}</td>\n              <td>{{ customer.customerPhone }}</td>\n              <td>\n                <button\n                  (click)=\"deleteCustomer(customer.customerId)\"\n                  class=\"btn btn-danger\"\n                >\n                  Delete\n                </button>\n                <button\n                  (click)=\"updateCustomer(customer)\"\n                  class=\"btn btn-info\"\n                  style=\"margin-left: 10px\"\n                >\n                  Update\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"weighmentEntry()\" name=\"form\" autocomplete=\"off\">\n  <div class=\"form-group\">\n    <div class=\"row\">\n      <div class=\"col-sm-2\">\n        <label for=\"name\">Vehichle No</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-2\">\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          list=\"vehichleList\"\n          id=\"vehicleNumber\"\n          (keyup)=\"onVehicleChanged($event)\"\n        />\n        <datalist id=\"vehichleList\">\n          <select>\n            <option\n              *ngFor=\"let vehicle of vehicles\"\n              [value]=\"vehicle.vehicleNumber\"\n            ></option>\n          </select>\n        </datalist>\n      </div>\n      <div class=\"col-sm-0.5\">\n        <label for=\"name\">Customer</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-3\">\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          list=\"customerList\"\n          id=\"customerName\"\n          (keyup)=\"onCustomerChanged($event)\"\n        />\n        <datalist id=\"customerList\">\n          <select>\n            <option\n              *ngFor=\"let customer of customers\"\n              [value]=\"customer.customerName\"\n            ></option>\n          </select>\n        </datalist>\n      </div>\n      <div class=\"col-sm-0.5\">\n        <label for=\"name\">Product</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-3\">\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          list=\"productList\"\n          id=\"productName\"\n          (keyup)=\"onProductChanged($event)\"\n        />\n        <datalist id=\"productList\">\n          <select>\n            <option\n              *ngFor=\"let product of products\"\n              [value]=\"product.productName\"\n            ></option>\n          </select>\n        </datalist>\n      </div>\n    </div>\n    <div class=\"row mt-5\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-2\">\n        <label for=\"name\"\n          ><u><b>Tare Weight</b></u></label\n        >\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-2\">\n        <label for=\"name\">Weight</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-2\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"tareWeight\"\n          required\n          name=\"tareWeight\"\n          disabled\n          [(ngModel)]=\"weighmententry.tareWeight\"\n        />\n      </div>\n      <div class=\"col-sm-1\">\n        <label for=\"name\">Date</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-3\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"tareDate\"\n          required\n          disabled\n          name=\"tareDate\"\n          [ngModel]=\"weighmententry.tareDate | date: 'yyyy-MM-dd'\"\n          (ngModelChange)=\"weighmententry.tareDate = $event\"\n        />\n      </div>\n      <div class=\"col-sm-0.5\">\n        <label for=\"name\">Time</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-3\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"tareTime\"\n          required\n          name=\"tareTime\"\n          disabled\n          [ngModel]=\"weighmententry.tareTime | date: 'HH:mm:ss'\"\n          (ngModelChange)=\"weighmententry.tareTime = $event\"\n        />\n      </div>\n    </div>\n    <div class=\"row mt-5\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-2\">\n        <label for=\"name\"\n          ><u><b>Gross Weight</b></u></label\n        >\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-2\">\n        <label for=\"name\">Weight</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-2\">\n        <input\n          type=\"number\"\n          class=\"form-control\"\n          id=\"grossWeight\"\n          required\n          name=\"\"\n          placeholder=\"\"\n          (change)=\"onChangeGrossWt($event)\"\n        />\n      </div>\n      <div class=\"col-sm-1\">\n        <label for=\"name\">Date</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-3\">\n        <input\n          type=\"date\"\n          class=\"form-control\"\n          id=\"grossDate\"\n          required\n          name=\"grossDate\"\n          [(ngModel)]=\"weighmententry.grossDate\"\n        />\n      </div>\n      <div class=\"col-sm-0.5\">\n        <label for=\"name\">Time</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-3\">\n        <input\n          type=\"time\"\n          class=\"form-control\"\n          id=\"grossTime\"\n          required\n          name=\"grossTime\"\n          [(ngModel)]=\"weighmententry.grossTime\"\n        />\n      </div>\n    </div>\n    <div class=\"row mt-5\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-2\">\n        <label for=\"name\"\n          ><u><b>Net Weight</b></u></label\n        >\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-2\">\n        <label for=\"name\">Weight</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-2\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"netWeight\"\n          required\n          name=\"netWeight\"\n          disabled\n          [(ngModel)]=\"weighmententry.netWeight\"\n        />\n      </div>\n      <label for=\"name\"><i class=\"fa fa-close\" aria-hidden=\"true\"></i></label>\n      <div class=\"col-sm-1\">\n        <label for=\"name\">Rate</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-2\">\n        <input\n          type=\"number\"\n          class=\"form-control\"\n          id=\"rate\"\n          required\n          name=\"\"\n          placeholder=\"\"\n          (change)=\"onChangeRate($event)\"\n        />\n      </div>\n      <label for=\"name\"><b>=</b></label>\n      <div class=\"col-sm-2\">\n        <label for=\"name\">Total Amount</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-2.5\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"amount\"\n          required\n          name=\"amount\"\n          disabled\n          [(ngModel)]=\"weighmententry.amount\"\n        />\n      </div>\n    </div>\n    <div class=\"row mt-5\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-2\">\n        <label for=\"name\">PayMent Mode</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-2\">\n        <select\n          class=\"form-control\"\n          (change)=\"paymentMode($event)\"\n          [value]=\"creditBill\"\n          id=\"payMode\"\n        >\n          <option value=\"CREDIT BILL\">CREDIT BILL</option>\n          <option value=\"AMOUNT\">AMOUNT</option>\n        </select>\n      </div>\n      <div class=\"col-sm-2\">\n        <label for=\"name\">Token Number</label><span class=\"required\">*</span>\n      </div>\n      <div class=\"col-sm-2.5\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"tokenId\"\n          required\n          name=\"tokenId\"\n          [(ngModel)]=\"weighmententry.tokenId\"\n        />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-2\">\n        <button type=\"submit\" class=\"btn btn-success\">\n          Save\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-list/product-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\"><h2>Product Data</h2></div>\n      <div class=\"col-sm-7\"></div>\n      <div class=\"col-sm-1\">\n        <button (click)=\"getProduct()\" type=\"button\" class=\"btn btn-primary \">\n          Add\n        </button>\n      </div>\n    </div>\n\n    <div class=\"panel-body\">\n      <div class=\"tableFixHead\">\n        <table class=\"table table-bordered css-serial\">\n          <thead>\n            <tr>\n              <th>S.No</th>\n              <th>Product Name</th>\n              <th>Product Rate</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let product of products\">\n              <td></td>\n              <td>{{ product.productName }}</td>\n              <td>{{ product.productRate }}</td>\n              <td>\n                <button\n                  (click)=\"deleteProduct(product.productId)\"\n                  class=\"btn btn-danger\"\n                >\n                  Delete\n                </button>\n                <button\n                  (click)=\"updateProduct(product)\"\n                  class=\"btn btn-info\"\n                  style=\"margin-left: 10px\"\n                >\n                  Update\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"alert alert-success alert-dismissible fade show\"\n  *ngIf=\"this.alert && this.issuccess\"\n  role=\"alert\"\n  [hidden]=\"this.hide\"\n>\n  <strong>{{ this.showMsg }}</strong>\n  <button\n    type=\"button\"\n    class=\"close\"\n    data-dismiss=\"alert\"\n    (click)=\"closeAlert()\"\n  >\n    &times;\n  </button>\n</div>\n\n<div\n  class=\"alert alert-danger alert-dismissible fade show\"\n  *ngIf=\"this.alert && !this.issuccess\"\n  role=\"alert\"\n  [hidden]=\"this.hide\"\n>\n  <strong>{{ this.showMsg }}</strong>\n  <button\n    type=\"button\"\n    class=\"close\"\n    data-dismiss=\"alert\"\n    (click)=\"closeAlert()\"\n  >\n    &times;\n  </button>\n</div>\n<h3>Create Product</h3>\n<div [hidden]=\"submitted\" style=\"width: 400px;\">\n  <form (ngSubmit)=\"createProduct()\" name=\"form\" autocomplete=\"off\">\n    <div class=\"form-group\">\n      <label for=\"name\">Product Name</label>\n      <span class=\"required\">*</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"productName\"\n        required\n        [(ngModel)]=\"product.productName\"\n        name=\"productName\"\n        #productName=\"ngModel\"\n        placeholder=\"Product Name\"\n      />\n      <div\n        *ngIf=\"\n          productName.invalid && (productName.dirty || productName.touched)\n        \"\n        class=\"alert alert-danger\"\n      >\n        <div *ngIf=\"productName.errors.required\">\n          Name is required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Product Rate</label>\n      <span class=\"required\">*</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        id=\"productRate\"\n        name=\"productRate\"\n        required\n        [(ngModel)]=\"product.productRate\"\n        #productRate=\"ngModel\"\n        placeholder=\"Product Rate\"\n      />\n      <div\n        *ngIf=\"\n          productRate.invalid && (productRate.dirty || productRate.touched)\n        \"\n        class=\"alert alert-danger\"\n      >\n        <div *ngIf=\"productRate.errors.required\">\n          Rate is required.\n        </div>\n      </div>\n    </div>\n\n    <button\n      type=\"submit\"\n      *ngIf=\"this.submitFlag\"\n      [disabled]=\"product.productName == null && product.productRate == null\"\n      class=\"btn btn-success\"\n    >\n      Create\n    </button>\n    <button\n      *ngIf=\"!this.submitFlag\"\n      type=\"submit\"\n      [disabled]=\"product.productName == null && product.productRate == null\"\n      class=\"btn btn-success\"\n    >\n      Update\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle-list/vehicle-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle-list/vehicle-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\"><h2>Vehicle Data</h2></div>\n      <div class=\"col-sm-7\"></div>\n      <div class=\"col-sm-1\">\n        <button (click)=\"getVehicle()\" type=\"button\" class=\"btn btn-primary \">\n          Add\n        </button>\n      </div>\n    </div>\n\n    <div class=\"panel-body\">\n      <div class=\"tableFixHead\">\n        <table class=\"table table-bordered css-serial\">\n          <thead>\n            <tr>\n              <th>S.No</th>\n              <th>Vehicle Number</th>\n              <th>Vehicle Name</th>\n              <th>Tare Weight</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let vehicle of vehicles\">\n              <td></td>\n              <td>{{ vehicle.vehicleNumber }}</td>\n              <td>{{ vehicle.vehicleName }}</td>\n              <td>{{ vehicle.tareWeight }}</td>\n              <td>\n                <button\n                  (click)=\"deleteVehicle(vehicle.vehicleId)\"\n                  class=\"btn btn-danger\"\n                >\n                  Delete\n                </button>\n                <button\n                  (click)=\"updateVehicle(vehicle)\"\n                  class=\"btn btn-info\"\n                  style=\"margin-left: 10px\"\n                >\n                  Update\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle/vehicle.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"alert alert-success alert-dismissible fade show\"\n  *ngIf=\"this.alert && this.issuccess\"\n  role=\"alert\"\n  [hidden]=\"this.hide\"\n>\n  <strong>{{ this.showMsg }}</strong>\n  <button\n    type=\"button\"\n    class=\"close\"\n    data-dismiss=\"alert\"\n    (click)=\"closeAlert()\"\n  >\n    &times;\n  </button>\n</div>\n\n<div\n  class=\"alert alert-danger alert-dismissible fade show\"\n  *ngIf=\"this.alert && !this.issuccess\"\n  role=\"alert\"\n  [hidden]=\"this.hide\"\n>\n  <strong>{{ this.showMsg }}</strong>\n  <button\n    type=\"button\"\n    class=\"close\"\n    data-dismiss=\"alert\"\n    (click)=\"closeAlert()\"\n  >\n    &times;\n  </button>\n</div>\n<h3>Create Vehicle</h3>\n<div [hidden]=\"submitted\" style=\"width: 400px;\">\n  <form (ngSubmit)=\"createVehicle()\" name=\"form\" autocomplete=\"off\">\n    <div class=\"form-group\">\n      <label for=\"name\">Vehicle Number</label>\n      <span class=\"required\">*</span>\n\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"vehicleNumber\"\n        required\n        [(ngModel)]=\"vehicle.vehicleNumber\"\n        name=\"vehicleNumber\"\n        #vehicleNumber=\"ngModel\"\n        placeholder=\"Vehicle Number\"\n      />\n      <div\n        *ngIf=\"\n          vehicleNumber.invalid &&\n          (vehicleNumber.dirty || vehicleNumber.touched)\n        \"\n        class=\"alert alert-danger\"\n      >\n        <div *ngIf=\"vehicleNumber.errors.required\">\n          Name is required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Vehicle Name</label>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        id=\"vehicleName\"\n        name=\"vehicleName\"\n        [(ngModel)]=\"vehicle.vehicleName\"\n        #vehicleName=\"ngModel\"\n        placeholder=\"Vehicle Name\"\n      />\n      <div\n        *ngIf=\"\n          vehicleName.invalid && (vehicleName.dirty || vehicleName.touched)\n        \"\n        class=\"alert alert-danger\"\n      >\n        <div *ngIf=\"vehicleName.errors.required\">\n          Rate is required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Tare Weight</label>\n      <span class=\"required\">*</span>\n\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"tareWeight\"\n        required\n        [(ngModel)]=\"vehicle.tareWeight\"\n        name=\"tareWeight\"\n        #tareWeight=\"ngModel\"\n        placeholder=\"Tare Weight\"\n      />\n      <div\n        *ngIf=\"tareWeight.invalid && (tareWeight.dirty || tareWeight.touched)\"\n        class=\"alert alert-danger\"\n      >\n        <div *ngIf=\"tareWeight.errors.required\">\n          Weight is required.\n        </div>\n      </div>\n    </div>\n    <button\n      type=\"submit\"\n      *ngIf=\"this.submitFlag\"\n      [disabled]=\"vehicle.vehicleNumber == null || vehicle.tareWeight == null\"\n      class=\"btn btn-success\"\n    >\n      Create\n    </button>\n    <button\n      *ngIf=\"!this.submitFlag\"\n      type=\"submit\"\n      [disabled]=\"vehicle.vehicleNumber == null || vehicle.tareWeight == null\"\n      class=\"btn btn-success\"\n    >\n      Update\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customer_component_customer_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-component/customer-component.component */ "./src/app/customer-component/customer-component.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customer-list/customer-list.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehicle/vehicle.component */ "./src/app/vehicle/vehicle.component.ts");
/* harmony import */ var _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vehicle-list/vehicle-list.component */ "./src/app/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");










const routes = [
    { path: "", redirectTo: "employee", pathMatch: "full" },
    { path: "customerlist", component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerListComponent"] },
    { path: "customer", component: _customer_component_customer_component_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"] },
    { path: "update/:id/:custName/:custPhone", component: _customer_component_customer_component_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"] },
    { path: "products", component: _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"] },
    { path: "productlist", component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"] },
    { path: "products/:id/:prodName/:prodRate", component: _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"] },
    { path: "vehicles", component: _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__["VehicleComponent"] },
    { path: "vehiclelist", component: _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_8__["VehicleListComponent"] },
    {
        path: "vehicles/:id/:vehiNum/:vehiName/:weight",
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"]
    },
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "WEIGHMENT ENTRY";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _customer_component_customer_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-component/customer-component.component */ "./src/app/customer-component/customer-component.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customer-list/customer-list.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vehicle/vehicle.component */ "./src/app/vehicle/vehicle.component.ts");
/* harmony import */ var _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vehicle-list/vehicle-list.component */ "./src/app/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _customer_component_customer_component_component__WEBPACK_IMPORTED_MODULE_7__["CustomerComponent"],
            _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_8__["CustomerListComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
            _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductListComponent"],
            _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_12__["VehicleComponent"],
            _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_13__["VehicleListComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_9__["AngularFontAwesomeModule"]
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/customer-component/Customer.ts":
/*!************************************************!*\
  !*** ./src/app/customer-component/Customer.ts ***!
  \************************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
}


/***/ }),

/***/ "./src/app/customer-component/customer-component.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/customer-component/customer-component.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItY29tcG9uZW50L2N1c3RvbWVyLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItY29tcG9uZW50L2N1c3RvbWVyLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/customer-component/customer-component.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customer-component/customer-component.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customer */ "./src/app/customer-component/Customer.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer-component/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CustomerComponent = class CustomerComponent {
    constructor(customerService, router, route) {
        this.customerService = customerService;
        this.router = router;
        this.route = route;
        this.mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.showMsg = "";
        this.issuccess = false;
        this.alert = false;
        this.hide = false;
        this.customer = new _Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.submitFlag = true;
    }
    ngOnInit() {
        this.customer.customerId = this.route.snapshot.params["id"];
        this.customer.customerName = this.route.snapshot.params["custName"];
        this.customer.customerPhone = this.route.snapshot.params["custPhone"];
        if (this.customer.customerId != null) {
            this.submitFlag = false;
        }
        else {
            this.submitFlag = true;
        }
    }
    createcustomer() {
        this.create();
    }
    create() {
        this.customerService.createCustomer(this.customer).subscribe(result => {
            console.log(result);
            this.showMsg = result["message"];
            this.issuccess = result["success"];
            console.log(this.showMsg);
            console.log(this.issuccess);
            this.alert = true;
            this.hide = false;
            this.customer = new _Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        }, error => {
            console.error(error);
        });
    }
    closeAlert() {
        this.hide = true;
        if (this.issuccess === true) {
            this.router.navigateByUrl("/customerlist");
        }
        else {
            this.customer = new _Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        }
    }
};
CustomerComponent.ctorParameters = () => [
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-customer-component",
        template: __webpack_require__(/*! raw-loader!./customer-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer-component/customer-component.component.html"),
        styles: [__webpack_require__(/*! ./customer-component.component.css */ "./src/app/customer-component/customer-component.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], CustomerComponent);



/***/ }),

/***/ "./src/app/customer-component/customer.service.ts":
/*!********************************************************!*\
  !*** ./src/app/customer-component/customer.service.ts ***!
  \********************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CustomerService = class CustomerService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:9090/weighment/api/customer";
    }
    getCustomer(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    createCustomer(customer) {
        console.log("customer" + JSON.stringify(customer));
        return this.http.post(`${this.baseUrl}`, customer);
    }
    updateCustomer(value) {
        return this.http.put(`${this.baseUrl}`, value);
    }
    deleteCustomer(id) {
        return this.http.delete(`${this.baseUrl}/${id}`, {
            responseType: "text"
        });
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CustomerService);



/***/ }),

/***/ "./src/app/customer-component/customer.ts":
/*!************************************************!*\
  !*** ./src/app/customer-component/customer.ts ***!
  \************************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
}


/***/ }),

/***/ "./src/app/customer-list/customer-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/customer-list/customer-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableFixHead {\r\n  overflow-y: auto;\r\n  height: 500px;\r\n}\r\n\r\n.tableFixHead table {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n.tableFixHead th,\r\n.tableFixHead td {\r\n  padding: 15px 16px;\r\n}\r\n\r\n.tableFixHead th {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  background: #eee;\r\n}\r\n\r\n.css-serial {\r\n  counter-reset: serial-number; /* Set the serial number counter to 0 */\r\n}\r\n\r\n.css-serial td:first-child:before {\r\n  counter-increment: serial-number; /* Increment the serial number counter */\r\n  content: counter(serial-number); /* Display the counter */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItbGlzdC9jdXN0b21lci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSw0QkFBNEIsRUFBRSx1Q0FBdUM7QUFDdkU7O0FBRUE7RUFDRSxnQ0FBZ0MsRUFBRSx3Q0FBd0M7RUFDMUUsK0JBQStCLEVBQUUsd0JBQXdCO0FBQzNEIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItbGlzdC9jdXN0b21lci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGVGaXhIZWFkIHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi50YWJsZUZpeEhlYWQgdGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZUZpeEhlYWQgdGgsXHJcbi50YWJsZUZpeEhlYWQgdGQge1xyXG4gIHBhZGRpbmc6IDE1cHggMTZweDtcclxufVxyXG5cclxuLnRhYmxlRml4SGVhZCB0aCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxufVxyXG4uY3NzLXNlcmlhbCB7XHJcbiAgY291bnRlci1yZXNldDogc2VyaWFsLW51bWJlcjsgLyogU2V0IHRoZSBzZXJpYWwgbnVtYmVyIGNvdW50ZXIgdG8gMCAqL1xyXG59XHJcblxyXG4uY3NzLXNlcmlhbCB0ZDpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gIGNvdW50ZXItaW5jcmVtZW50OiBzZXJpYWwtbnVtYmVyOyAvKiBJbmNyZW1lbnQgdGhlIHNlcmlhbCBudW1iZXIgY291bnRlciAqL1xyXG4gIGNvbnRlbnQ6IGNvdW50ZXIoc2VyaWFsLW51bWJlcik7IC8qIERpc3BsYXkgdGhlIGNvdW50ZXIgKi9cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/customer-list/customer-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-list/customer-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _customer_component_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer-component/customer */ "./src/app/customer-component/customer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customer_component_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer-component/customer.service */ "./src/app/customer-component/customer.service.ts");





let CustomerListComponent = class CustomerListComponent {
    constructor(customerService, router) {
        this.customerService = customerService;
        this.router = router;
        this.customer = new _customer_component_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.customerService.getCustomer("All").subscribe(result => {
            this.customers = result["obj"];
            console.log(this.customers);
        }, error => {
            console.error(error);
        });
    }
    deleteCustomer(id) {
        console.log("id" + id);
        this.customerService.deleteCustomer(id).subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    updateCustomer(customer) {
        this.customer = customer;
        console.log("id" + this.customer);
        this.router.navigate([
            "customer",
            {
                id: this.customer.customerId,
                custName: this.customer.customerName,
                custPhone: this.customer.customerPhone
            }
        ]);
    }
    customerDetails(id) {
        this.router.navigate(["details", id]);
    }
    getCustomer() {
        this.router.navigateByUrl("/customer");
    }
};
CustomerListComponent.ctorParameters = () => [
    { type: _customer_component_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-customer-list",
        template: __webpack_require__(/*! raw-loader!./customer-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer-list/customer-list.component.html"),
        styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/customer-list/customer-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_customer_component_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CustomerListComponent);



/***/ }),

/***/ "./src/app/dashboard/Weighmententry.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/Weighmententry.service.ts ***!
  \*****************************************************/
/*! exports provided: WeighmententryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeighmententryService", function() { return WeighmententryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WeighmententryService = class WeighmententryService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:9090/weighment/api/weighmententry";
    }
    createWeighmententry(entry) {
        console.log("entry" + JSON.stringify(entry));
        return this.http.post(`${this.baseUrl}`, entry);
    }
};
WeighmententryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WeighmententryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], WeighmententryService);



/***/ }),

/***/ "./src/app/dashboard/Weighmententry.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/Weighmententry.ts ***!
  \*********************************************/
/*! exports provided: Weighmententry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weighmententry", function() { return Weighmententry; });
class Weighmententry {
}


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicle/vehicle.service */ "./src/app/vehicle/vehicle.service.ts");
/* harmony import */ var _vehicle_vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vehicle/vehicle */ "./src/app/vehicle/vehicle.ts");
/* harmony import */ var _Weighmententry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Weighmententry */ "./src/app/dashboard/Weighmententry.ts");
/* harmony import */ var _customer_component_customer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer-component/customer */ "./src/app/customer-component/customer.ts");
/* harmony import */ var _product_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product/product */ "./src/app/product/product.ts");
/* harmony import */ var _customer_component_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customer-component/customer.service */ "./src/app/customer-component/customer.service.ts");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product/product.service */ "./src/app/product/product.service.ts");
/* harmony import */ var _Weighmententry_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Weighmententry.service */ "./src/app/dashboard/Weighmententry.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");











let DashboardComponent = class DashboardComponent {
    constructor(vehicleService, customerService, productService, weighmententryService, datePipe) {
        this.vehicleService = vehicleService;
        this.customerService = customerService;
        this.productService = productService;
        this.weighmententryService = weighmententryService;
        this.datePipe = datePipe;
        this.vehicle = new _vehicle_vehicle__WEBPACK_IMPORTED_MODULE_3__["Vehicle"]();
        this.customer = new _customer_component_customer__WEBPACK_IMPORTED_MODULE_5__["Customer"]();
        this.product = new _product_product__WEBPACK_IMPORTED_MODULE_6__["Product"]();
        this.weighmententry = new _Weighmententry__WEBPACK_IMPORTED_MODULE_4__["Weighmententry"]();
    }
    ngOnInit() { }
    onVehicleChanged($event) {
        this.vehicle.vehicleNumber = (document.getElementById("vehicleNumber")).value;
        this.vehicleService.getVehicle(this.vehicle.vehicleNumber).subscribe(result => {
            this.vehicles = result["obj"];
            var stringify = JSON.parse(JSON.stringify(this.vehicles));
            //  console.log("dhivya" + JSON.stringify(stringify));
            for (var i = 0; i < stringify.length; i++) {
                if (stringify[i].vehicleNumber === this.vehicle.vehicleNumber) {
                    this.weighmententry.vehicleId = stringify[i].vehicleId;
                    this.weighmententry.tareWeight = stringify[i].tareWeight;
                    let datedata = new Date(this.datePipe.transform(stringify[i].createdDate, "yyyy-MM-dd HH:mm:ss"));
                    this.weighmententry.tareDate = datedata;
                    let timeData = new Date(this.datePipe.transform(stringify[i].createdDate, "yyyy-MM-dd HH:mm:ss"));
                    this.weighmententry.tareTime = timeData;
                }
            }
            console.log("Dhivya at date" + JSON.stringify(this.weighmententry));
        }, error => {
            console.error(error);
        });
    }
    onCustomerChanged($event) {
        this.customer.customerName = (document.getElementById("customerName")).value;
        this.customerService.getCustomer("All").subscribe(result => {
            this.customers = result["obj"];
            var stringify = JSON.parse(JSON.stringify(this.customers));
            //console.log("dhivya" + JSON.stringify(stringify));
            for (var i = 0; i < stringify.length; i++) {
                if (stringify[i].customerName === this.customer.customerName) {
                    this.weighmententry.customerId = stringify[i].customerId;
                }
            }
        }, error => {
            console.error(error);
        });
    }
    onProductChanged($event) {
        this.product.productName = (document.getElementById("productName")).value;
        this.productService.getProduct("All").subscribe(result => {
            this.products = result["obj"];
            var stringify = JSON.parse(JSON.stringify(this.products));
            console.log("dhivya" + JSON.stringify(stringify));
            for (var i = 0; i < stringify.length; i++) {
                if (stringify[i].productName === this.product.productName) {
                    this.weighmententry.productId = stringify[i].productId;
                }
            }
        }, error => {
            console.error(error);
        });
    }
    onChangeGrossWt($event) {
        this.weighmententry.grossWeight = +(document.getElementById("grossWeight")).value;
        if (this.weighmententry.grossWeight > this.weighmententry.tareWeight) {
            this.weighmententry.netWeight =
                this.weighmententry.grossWeight - this.weighmententry.tareWeight;
        }
    }
    paymentMode($event) {
        this.weighmententry.payMode = (document.getElementById("payMode")).value;
    }
    onChangeRate($event) {
        this.weighmententry.rate = +(document.getElementById("rate")).value;
        this.weighmententry.amount =
            this.weighmententry.rate * this.weighmententry.netWeight;
    }
    weighmentEntry() {
        this.weighmententry.grossDate = new Date(this.weighmententry.grossDate + " " + this.weighmententry.grossTime);
        console.log("Dhivya last" + JSON.stringify(this.weighmententry));
        this.weighmententryService
            .createWeighmententry(this.weighmententry)
            .subscribe(result => {
            console.log(result);
        }, error => {
            console.error(error);
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
    { type: _customer_component_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"] },
    { type: _product_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] },
    { type: _Weighmententry_service__WEBPACK_IMPORTED_MODULE_9__["WeighmententryService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"],
        _customer_component_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"],
        _product_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"],
        _Weighmententry_service__WEBPACK_IMPORTED_MODULE_9__["WeighmententryService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableFixHead {\r\n  overflow-y: auto;\r\n  height: 500px;\r\n}\r\n\r\n.tableFixHead table {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n.tableFixHead th,\r\n.tableFixHead td {\r\n  padding: 15px 16px;\r\n}\r\n\r\n.tableFixHead th {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  background: #eee;\r\n}\r\n\r\n.css-serial {\r\n  counter-reset: serial-number; /* Set the serial number counter to 0 */\r\n}\r\n\r\n.css-serial td:first-child:before {\r\n  counter-increment: serial-number; /* Increment the serial number counter */\r\n  content: counter(serial-number); /* Display the counter */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsNEJBQTRCLEVBQUUsdUNBQXVDO0FBQ3ZFOztBQUVBO0VBQ0UsZ0NBQWdDLEVBQUUsd0NBQXdDO0VBQzFFLCtCQUErQixFQUFFLHdCQUF3QjtBQUMzRCIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZUZpeEhlYWQge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLnRhYmxlRml4SGVhZCB0YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYmxlRml4SGVhZCB0aCxcclxuLnRhYmxlRml4SGVhZCB0ZCB7XHJcbiAgcGFkZGluZzogMTVweCAxNnB4O1xyXG59XHJcblxyXG4udGFibGVGaXhIZWFkIHRoIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG59XHJcbi5jc3Mtc2VyaWFsIHtcclxuICBjb3VudGVyLXJlc2V0OiBzZXJpYWwtbnVtYmVyOyAvKiBTZXQgdGhlIHNlcmlhbCBudW1iZXIgY291bnRlciB0byAwICovXHJcbn1cclxuXHJcbi5jc3Mtc2VyaWFsIHRkOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgY291bnRlci1pbmNyZW1lbnQ6IHNlcmlhbC1udW1iZXI7IC8qIEluY3JlbWVudCB0aGUgc2VyaWFsIG51bWJlciBjb3VudGVyICovXHJcbiAgY29udGVudDogY291bnRlcihzZXJpYWwtbnVtYmVyKTsgLyogRGlzcGxheSB0aGUgY291bnRlciAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/product.service */ "./src/app/product/product.service.ts");
/* harmony import */ var _product_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/product */ "./src/app/product/product.ts");





let ProductListComponent = class ProductListComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.product = new _product_product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.productService.getProduct("All").subscribe(result => {
            this.products = result["obj"];
            console.log(this.products);
        }, error => {
            console.error(error);
        });
    }
    deleteProduct(id) {
        console.log("id" + id);
        this.productService.deleteProduct(id).subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    updateProduct(product) {
        this.product = product;
        console.log("id" + this.product);
        this.router.navigate([
            "products",
            {
                id: this.product.productId,
                prodName: this.product.productName,
                prodRate: this.product.productRate
            }
        ]);
    }
    productDetails(id) {
        this.router.navigate(["details", id]);
    }
    getProduct() {
        this.router.navigateByUrl("/products");
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-product-list",
        template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html"),
        styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductListComponent);



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1aXJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ "./src/app/product/product.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "./src/app/product/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ProductComponent = class ProductComponent {
    constructor(productService, router, route) {
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.showMsg = "";
        this.issuccess = false;
        this.alert = false;
        this.hide = false;
        this.product = new _product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        this.submitFlag = true;
    }
    ngOnInit() {
        this.product.productId = this.route.snapshot.params["id"];
        this.product.productName = this.route.snapshot.params["prodName"];
        this.product.productRate = this.route.snapshot.params["prodRate"];
        if (this.product.productId != null) {
            this.submitFlag = false;
        }
        else {
            this.submitFlag = true;
        }
    }
    createProduct() {
        this.create();
    }
    create() {
        this.productService.createProduct(this.product).subscribe(result => {
            console.log(result);
            this.showMsg = result["message"];
            this.issuccess = result["success"];
            console.log(this.showMsg);
            console.log(this.issuccess);
            this.alert = true;
            this.hide = false;
        }, error => {
            console.error(error);
        });
    }
    closeAlert() {
        this.hide = true;
        if (this.issuccess === true) {
            this.router.navigateByUrl("/productlist");
        }
        else {
            this.product = new _product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        }
    }
};
ProductComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-product",
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], ProductComponent);



/***/ }),

/***/ "./src/app/product/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/product/product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:9090/weighment/api/product";
    }
    getProduct(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    createProduct(customer) {
        console.log("customer" + JSON.stringify(customer));
        return this.http.post(`${this.baseUrl}`, customer);
    }
    updateProduct(value) {
        return this.http.put(`${this.baseUrl}`, value);
    }
    deleteProduct(id) {
        return this.http.delete(`${this.baseUrl}/${id}`, {
            responseType: "text"
        });
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProductService);



/***/ }),

/***/ "./src/app/product/product.ts":
/*!************************************!*\
  !*** ./src/app/product/product.ts ***!
  \************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "./src/app/vehicle-list/vehicle-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vehicle-list/vehicle-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableFixHead {\r\n  overflow-y: auto;\r\n  height: 500px;\r\n}\r\n\r\n.tableFixHead table {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n.tableFixHead th,\r\n.tableFixHead td {\r\n  padding: 15px 16px;\r\n}\r\n\r\n.tableFixHead th {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  background: #eee;\r\n}\r\n\r\n.css-serial {\r\n  counter-reset: serial-number; /* Set the serial number counter to 0 */\r\n}\r\n\r\n.css-serial td:first-child:before {\r\n  counter-increment: serial-number; /* Increment the serial number counter */\r\n  content: counter(serial-number); /* Display the counter */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZS1saXN0L3ZlaGljbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsNEJBQTRCLEVBQUUsdUNBQXVDO0FBQ3ZFOztBQUVBO0VBQ0UsZ0NBQWdDLEVBQUUsd0NBQXdDO0VBQzFFLCtCQUErQixFQUFFLHdCQUF3QjtBQUMzRCIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUtbGlzdC92ZWhpY2xlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZUZpeEhlYWQge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLnRhYmxlRml4SGVhZCB0YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYmxlRml4SGVhZCB0aCxcclxuLnRhYmxlRml4SGVhZCB0ZCB7XHJcbiAgcGFkZGluZzogMTVweCAxNnB4O1xyXG59XHJcblxyXG4udGFibGVGaXhIZWFkIHRoIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG59XHJcbi5jc3Mtc2VyaWFsIHtcclxuICBjb3VudGVyLXJlc2V0OiBzZXJpYWwtbnVtYmVyOyAvKiBTZXQgdGhlIHNlcmlhbCBudW1iZXIgY291bnRlciB0byAwICovXHJcbn1cclxuXHJcbi5jc3Mtc2VyaWFsIHRkOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgY291bnRlci1pbmNyZW1lbnQ6IHNlcmlhbC1udW1iZXI7IC8qIEluY3JlbWVudCB0aGUgc2VyaWFsIG51bWJlciBjb3VudGVyICovXHJcbiAgY29udGVudDogY291bnRlcihzZXJpYWwtbnVtYmVyKTsgLyogRGlzcGxheSB0aGUgY291bnRlciAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/vehicle-list/vehicle-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vehicle-list/vehicle-list.component.ts ***!
  \********************************************************/
/*! exports provided: VehicleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleListComponent", function() { return VehicleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vehicle/vehicle.service */ "./src/app/vehicle/vehicle.service.ts");
/* harmony import */ var _vehicle_vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vehicle/vehicle */ "./src/app/vehicle/vehicle.ts");





let VehicleListComponent = class VehicleListComponent {
    constructor(vehicleService, router) {
        this.vehicleService = vehicleService;
        this.router = router;
        this.vehicle = new _vehicle_vehicle__WEBPACK_IMPORTED_MODULE_4__["Vehicle"]();
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.vehicleService.getVehicle("All").subscribe(result => {
            this.vehicles = result["obj"];
            console.log(this.vehicles);
        }, error => {
            console.error(error);
        });
    }
    deleteVehicle(id) {
        console.log("id" + id);
        this.vehicleService.deleteVehicle(id).subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    updateVehicle(vehicle) {
        this.vehicle = vehicle;
        console.log("id" + this.vehicle);
        this.router.navigate([
            "vehicles",
            {
                id: this.vehicle.vehicleId,
                vehiNum: this.vehicle.vehicleNumber,
                vehiName: this.vehicle.vehicleName,
                weight: this.vehicle.tareWeight
            }
        ]);
    }
    vehicleDetails(id) {
        this.router.navigate(["details", id]);
    }
    getVehicle() {
        this.router.navigateByUrl("/vehicles");
    }
};
VehicleListComponent.ctorParameters = () => [
    { type: _vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
VehicleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vehicle-list",
        template: __webpack_require__(/*! raw-loader!./vehicle-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle-list/vehicle-list.component.html"),
        styles: [__webpack_require__(/*! ./vehicle-list.component.css */ "./src/app/vehicle-list/vehicle-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], VehicleListComponent);



/***/ }),

/***/ "./src/app/vehicle/vehicle.component.css":
/*!***********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZS92ZWhpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC92ZWhpY2xlL3ZlaGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1aXJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/vehicle/vehicle.component.ts":
/*!**********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.ts ***!
  \**********************************************/
/*! exports provided: VehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleComponent", function() { return VehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicle */ "./src/app/vehicle/vehicle.ts");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle.service */ "./src/app/vehicle/vehicle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let VehicleComponent = class VehicleComponent {
    constructor(vehicleService, router, route) {
        this.vehicleService = vehicleService;
        this.router = router;
        this.route = route;
        this.mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.showMsg = "";
        this.issuccess = false;
        this.alert = false;
        this.hide = false;
        this.vehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_2__["Vehicle"]();
        this.submitFlag = true;
    }
    ngOnInit() {
        this.vehicle.vehicleId = this.route.snapshot.params["id"];
        this.vehicle.vehicleNumber = this.route.snapshot.params["vehiNum"];
        this.vehicle.vehicleName = this.route.snapshot.params["vehiName"];
        this.vehicle.tareWeight = this.route.snapshot.params["weight"];
        if (this.vehicle.vehicleId != null) {
            this.submitFlag = false;
        }
        else {
            this.submitFlag = true;
        }
    }
    createVehicle() {
        this.create();
    }
    create() {
        this.vehicleService.createVehicle(this.vehicle).subscribe(result => {
            console.log(result);
            this.showMsg = result["message"];
            this.issuccess = result["success"];
            console.log(this.showMsg);
            console.log(this.issuccess);
            this.alert = true;
            this.hide = false;
        }, error => {
            console.error(error);
        });
    }
    closeAlert() {
        this.hide = true;
        if (this.issuccess === true) {
            this.router.navigateByUrl("/vehiclelist");
        }
        else {
            this.vehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_2__["Vehicle"]();
        }
    }
};
VehicleComponent.ctorParameters = () => [
    { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
VehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vehicle",
        template: __webpack_require__(/*! raw-loader!./vehicle.component.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle.component.html"),
        styles: [__webpack_require__(/*! ./vehicle.component.css */ "./src/app/vehicle/vehicle.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], VehicleComponent);



/***/ }),

/***/ "./src/app/vehicle/vehicle.service.ts":
/*!********************************************!*\
  !*** ./src/app/vehicle/vehicle.service.ts ***!
  \********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let VehicleService = class VehicleService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:9090/weighment/api/vehicle";
    }
    getVehicle(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    createVehicle(customer) {
        console.log("customer" + JSON.stringify(customer));
        return this.http.post(`${this.baseUrl}`, customer);
    }
    updateVehicle(value) {
        return this.http.put(`${this.baseUrl}`, value);
    }
    deleteVehicle(id) {
        return this.http.delete(`${this.baseUrl}/${id}`, {
            responseType: "text"
        });
    }
};
VehicleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], VehicleService);



/***/ }),

/***/ "./src/app/vehicle/vehicle.ts":
/*!************************************!*\
  !*** ./src/app/vehicle/vehicle.ts ***!
  \************************************/
/*! exports provided: Vehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicle", function() { return Vehicle; });
class Vehicle {
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\angular\angular8-springboot-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map