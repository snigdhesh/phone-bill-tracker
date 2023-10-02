"use strict";
(self["webpackChunkphone_bill_tracker"] = self["webpackChunkphone_bill_tracker"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary/summary.component */ 6155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
}, {
  path: 'summary',
  component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_1__.SummaryComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);



class AppComponent {
  constructor() {
    this.title = 'phone-bill-tracker';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device/device.component */ 6711);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_CalculatorService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/CalculatorService */ 673);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary/summary.component */ 6155);
/* harmony import */ var _pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/currency.pipe */ 8077);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/summary.pipe */ 5509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_services_CalculatorService__WEBPACK_IMPORTED_MODULE_4__.CalculatorService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent, _device_device_component__WEBPACK_IMPORTED_MODULE_3__.DeviceComponent, _summary_summary_component__WEBPACK_IMPORTED_MODULE_5__.SummaryComponent, _pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe, _header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_8__.SummaryPipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 6711:
/*!********************************************!*\
  !*** ./src/app/device/device.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceComponent": () => (/* binding */ DeviceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_CalculatorService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/CalculatorService */ 673);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/currency.pipe */ 8077);








function DeviceComponent_button_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add to final bill");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.deviceForm.valid);
  }
}
function DeviceComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter total mobile data charges! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class DeviceComponent {
  calculatePlanBillCharges(e) {
    this.planBill = Number(e.target.value);
    this.calculateFinalBill(this.dataCharge, this.additionalCharges, this.planBill);
  }
  calculateAdditionalCharges(e) {
    this.additionalCharges = Number(e.target.value);
    this.calculateFinalBill(this.dataCharge, this.additionalCharges, this.planBill);
  }
  calculateFinalBill(dataCharge, additionalCharges, planBill) {
    this.totalBill = 0;
    this.totalBill = dataCharge + additionalCharges + planBill;
    this.totalBill = Number(this.totalBill.toFixed(2));
    this.deviceForm.controls['totalBill'].setValue(this.totalBill);
  }
  constructor(calculatorService) {
    this.calculatorService = calculatorService;
    this.numberOfDevices = 0;
    this.totalDataCharges = 0;
    this.deviceName = "";
    this.dataCharge = 0;
    this.planBill = 0;
    this.additionalCharges = 0;
    this.totalBill = 0;
    this.finalBill = 0;
    this.bills = [];
    this.totalBillEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.formDataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.formData = {};
    this.deviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      deviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      dataCharge: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0),
      planBill: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0),
      additionalCharges: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0),
      totalBill: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0)
    });
    this.buttonDisplay = true;
  }
  ngOnInit() {
    this.deviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      deviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.deviceName),
      dataCharge: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.dataCharge),
      planBill: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      additionalCharges: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0),
      totalBill: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0)
    });
  }
  onSubmit() {
    this.totalBillEvent.emit(this.totalBill);
    this.formDataEvent.emit(this.deviceForm);
    this.buttonDisplay = false;
  }
}
DeviceComponent.ɵfac = function DeviceComponent_Factory(t) {
  return new (t || DeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_CalculatorService__WEBPACK_IMPORTED_MODULE_0__.CalculatorService));
};
DeviceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DeviceComponent,
  selectors: [["app-device"]],
  inputs: {
    numberOfDevices: "numberOfDevices",
    totalDataCharges: "totalDataCharges",
    deviceName: "deviceName",
    dataCharge: "dataCharge",
    planBill: "planBill",
    additionalCharges: "additionalCharges"
  },
  outputs: {
    totalBillEvent: "totalBillEvent",
    formDataEvent: "formDataEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_CalculatorService__WEBPACK_IMPORTED_MODULE_0__.CalculatorService])],
  decls: 45,
  vars: 8,
  consts: [[1, "container"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "deviceName"], [1, "input-group-addon", 2, "margin-right", "1%", "visibility", "hidden"], ["type", "text", "id", "deviceName", "formControlName", "deviceName", "readonly", "", 1, "form-control"], ["for", "dataCharge"], [1, "input-group-addon", 2, "margin-right", "1%"], ["type", "text", "id", "dataCharge", "formControlName", "dataCharge", "readonly", "", 1, "form-control"], ["for", "planBill"], ["type", "number", "id", "planBill", "formControlName", "planBill", 1, "form-control", 3, "keyup"], ["for", "additionalCharges"], ["type", "number", "id", "additionalCharges", "formControlName", "additionalCharges", 1, "form-control", 3, "keyup"], ["for", "totalBill"], ["type", "number", "id", "totalBill", "formControlName", "totalBill", "readonly", "", 1, "form-control"], ["class", "btn btn-primary", "type", "submit", "title", "Please enter phone bill", 3, "disabled", 4, "ngIf"], ["style", "margin-top: 5%;", "class", "alert alert-danger", 4, "ngIf"], ["type", "submit", "title", "Please enter phone bill", 1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger", 2, "margin-top", "5%"]],
  template: function DeviceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DeviceComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div")(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p")(7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Note:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 2)(12, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Device name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 2)(18, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Data charge");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 2)(24, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Plan bill");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function DeviceComponent_Template_input_keyup_28_listener($event) {
        return ctx.calculatePlanBillCharges($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 2)(30, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Additional charges ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "(if any)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function DeviceComponent_Template_input_keyup_36_listener($event) {
        return ctx.calculateAdditionalCharges($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 2)(38, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Total bill");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, DeviceComponent_button_43_Template, 2, 1, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, DeviceComponent_div_44_Template, 2, 0, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.deviceForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Total mobile data charges for ", ctx.numberOfDevices, " devices is ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, ctx.totalDataCharges), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Please add to final bill to generate final bill for all ", ctx.numberOfDevices, " devices");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.buttonDisplay);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.deviceForm.touched && !ctx.deviceForm.controls["planBill"].valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe],
  styles: [".form-group[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      align-items: center;\r\n  }\r\n\r\n  .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n      flex-basis: 80%;\r\n      margin-right: 1rem;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%] {\r\n    padding: 5%;\r\n  }\r\n\r\n  .btn-primary[_ngcontent-%COMP%]{\r\n    background-color: #26619c;\r\n  }\r\n\r\n  .btn-primary[_ngcontent-%COMP%]:hover{\r\n    background-color: white;\r\n    border: 1px solid #26619c;\r\n    color: #26619c;\r\n  }\r\n\r\n  .btn-primary[_ngcontent-%COMP%]:focus {\r\n    outline: none; \r\n    box-shadow: none; \r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGV2aWNlL2RldmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO01BQ0ksYUFBYTtNQUNiLG1CQUFtQjtFQUN2Qjs7RUFFQTtNQUNJLGVBQWU7TUFDZixrQkFBa0I7RUFDdEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhLEVBQUUsbUJBQW1CO0lBQ2xDLGdCQUFnQixFQUFFLHNCQUFzQjtFQUMxQyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgICBmbGV4LWJhc2lzOiA4MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2MTljO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1wcmltYXJ5OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjY2MTljO1xyXG4gICAgY29sb3I6ICMyNjYxOWM7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnk6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTsgLyogcmVtb3ZlIG91dGxpbmUgKi9cclxuICAgIGJveC1zaGFkb3c6IG5vbmU7IC8qIHJlbW92ZSBib3ggc2hhZG93ICovXHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HeaderComponent {}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 3,
  vars: 0,
  consts: [[1, "banner", "sticky"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phone bill tracker");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".banner[_ngcontent-%COMP%] {\r\n    background-color: #26619c;\r\n    padding: 10px;\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n  .sticky[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    top: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBQ0E7SUFFRSxnQkFBZ0I7SUFDaEIsTUFBTTtFQUNSIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2MTljO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2284:
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_summary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/summary.service */ 9697);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../device/device.component */ 6711);
/* harmony import */ var _pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/currency.pipe */ 8077);









function MainComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r0.basicInfoForm.valid);
  }
}
function MainComponent_input_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainComponent_input_31_Template_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.onResetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MainComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please enter total mobile data charges! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MainComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainComponent_div_33_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.checkSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Check summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Final bill: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, ctx_r3.finalBill), "");
  }
}
function MainComponent_div_34_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "div", 26)(2, "app-device", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("totalBillEvent", function MainComponent_div_34_li_2_Template_app_device_totalBillEvent_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.calculateFinalBill($event));
    })("formDataEvent", function MainComponent_div_34_li_2_Template_app_device_formDataEvent_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.displayFormData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("deviceName", i_r10.deviceName)("dataCharge", i_r10.dataCharge)("numberOfDevices", ctx_r9.devices.length)("totalDataCharges", ctx_r9.totalMobileDataCharges);
  }
}
function MainComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MainComponent_div_34_li_2_Template, 3, 4, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.devices);
  }
}
class MainComponent {
  constructor(router, summaryService) {
    this.router = router;
    this.summaryService = summaryService;
    this.devices = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.devices;
    this.summary = [];
    this.finalBill = 0;
    this.totalMobileDataCharges = 0;
    this.showDevices = false;
    this.displaySaveButton = true;
    this.displayResetButton = false;
    this.totalDataCharge = 0;
    this.lateFee = 0;
    this.basicInfoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      totalDataCharges: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      lateFee: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
      totalNumberOfDevices: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.devices.length),
      dataChargePerDevice: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(0)
    });
    this.dataChargePerDevice = 0;
  }
  onBasicFormSubmit() {
    this.displaySaveButton = false;
    this.displayResetButton = true;
    this.showDevices = true;
    this.finalBill = 0;
  }
  setTotalDataCharge(e) {
    this.totalDataCharge = e.target.value;
    this.calculateSharedBill(this.totalDataCharge);
  }
  setLateFee(e) {
    this.lateFee = e.target.value;
    this.calculateSharedBill(Number(this.totalDataCharge) + Number(this.lateFee));
  }
  calculateSharedBill(totalDataCharges) {
    this.dataChargePerDevice = totalDataCharges / this.devices.length;
    this.dataChargePerDevice = Number(this.dataChargePerDevice.toFixed(2));
    this.basicInfoForm.controls['dataChargePerDevice'].setValue(this.dataChargePerDevice);
    this.devices.forEach(device => {
      device.dataCharge = this.dataChargePerDevice;
    });
    this.totalMobileDataCharges = totalDataCharges;
  }
  calculateFinalBill(e) {
    this.finalBill = this.finalBill + e;
    this.finalBill = Number(this.finalBill.toFixed(2));
  }
  displayFormData(form) {
    this.summary.push(form.value);
  }
  checkSummary() {
    this.summaryService.setSummary(this.summary);
    this.router.navigate(['/summary']);
  }
  onResetForm() {
    this.basicInfoForm.reset();
    this.showDevices = this.displayResetButton = false;
    this.displaySaveButton = true;
    this.finalBill = 0;
    this.basicInfoForm.controls['totalNumberOfDevices'].setValue(this.devices.length);
  }
}
MainComponent.ɵfac = function MainComponent_Factory(t) {
  return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_summary_service__WEBPACK_IMPORTED_MODULE_1__.SummaryService));
};
MainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MainComponent,
  selectors: [["app-main"]],
  decls: 35,
  vars: 6,
  consts: [[1, "container", "mt-3"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "totalDataCharges"], [1, "input-group-addon", 2, "margin-right", "1%"], ["type", "number", "formControlName", "totalDataCharges", "placeholder", "Please enter total shared data charges..", 1, "form-control", 3, "keyup"], ["for", "lateFee"], ["type", "number", "formControlName", "lateFee", "placeholder", "Late fee charges (if any)..", 1, "form-control", 3, "keyup"], ["for", "totalNumberOfDevices"], [1, "input-group-addon", 2, "margin-right", "1%", "visibility", "hidden"], ["type", "number", "formControlName", "totalNumberOfDevices", "readonly", "", 1, "form-control"], ["for", "dataChargePerDevice"], ["type", "number", "formControlName", "dataChargePerDevice", "readonly", "", 1, "form-control"], ["class", "btn btn-primary", "type", "submit", 3, "disabled", 4, "ngIf"], ["class", "btn btn-primary", "type", "button", "value", "Reset", 3, "click", 4, "ngIf"], ["style", "margin-top: 5%", "class", "alert alert-danger", 4, "ngIf"], ["class", "card final-bill", 4, "ngIf"], ["class", "devices", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", "value", "Reset", 1, "btn", "btn-primary", 3, "click"], [1, "alert", "alert-danger", 2, "margin-top", "5%"], [1, "card", "final-bill"], [1, "card-body", 2, "text-align", "center"], [1, "btn", "btn-default", "mt-3", 3, "click"], [1, "devices"], [4, "ngFor", "ngForOf"], [1, "device"], [3, "deviceName", "dataCharge", "numberOfDevices", "totalDataCharges", "totalBillEvent", "formDataEvent"]],
  template: function MainComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function MainComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onBasicFormSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Total mobile data charges");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "(shared among all devices)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function MainComponent_Template_input_keyup_9_listener($event) {
        return ctx.setTotalDataCharge($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2)(11, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Late fee");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "(shared among all devices)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function MainComponent_Template_input_keyup_17_listener($event) {
        return ctx.setLateFee($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 2)(19, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Total number of devices");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 2)(25, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Data charges per device");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, MainComponent_button_30_Template, 2, 1, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, MainComponent_input_31_Template, 1, 0, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, MainComponent_div_32_Template, 2, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, MainComponent_div_33_Template, 7, 3, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, MainComponent_div_34_Template, 3, 1, "div", 17);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.basicInfoForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displaySaveButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displayResetButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.basicInfoForm.touched && !ctx.basicInfoForm.value.totalDataCharges);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.finalBill > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showDevices);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _device_device_component__WEBPACK_IMPORTED_MODULE_2__.DeviceComponent, _pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
  styles: [".form-group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    flex-basis: 60%;\r\n    margin-right: 1rem;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%]{\r\n      border: 0px solid black;\r\n      padding: 3%;\r\n  }\r\n\r\n   ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    display: flex;\r\n    \r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]{\r\n    border: 1px solid silver;\r\n    margin: 1%;\r\n    padding: 1%;\r\n  }\r\n\r\n  .btn-primary[_ngcontent-%COMP%]{\r\n    background-color: #26619c;\r\n  }\r\n\r\n  .btn-primary[_ngcontent-%COMP%]:hover{\r\n    background-color: white;\r\n    border: 1px solid #26619c;\r\n    color: #26619c;\r\n  }\r\n\r\n  .btn-primary[_ngcontent-%COMP%]:focus {\r\n    outline: none; \r\n    box-shadow: none; \r\n  }\r\n\r\n  .final-bill[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n    background-color: #26619c;\r\n    color: white\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7RUFFRTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO01BQ0ksdUJBQXVCO01BQ3ZCLFdBQVc7RUFDZjs7R0FFQztJQUNDLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWEsRUFBRSxtQkFBbUI7SUFDbEMsZ0JBQWdCLEVBQUUsc0JBQXNCO0VBQzFDOztFQUVBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtJQUN6QjtFQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgZmxleC1iYXNpczogNjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XHJcbiAgICAgIHBhZGRpbmc6IDMlO1xyXG4gIH1cclxuXHJcbiAgIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgKi9cclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gIHVsID4gbGl7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2MTljO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1wcmltYXJ5OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjY2MTljO1xyXG4gICAgY29sb3I6ICMyNjYxOWM7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnk6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTsgLyogcmVtb3ZlIG91dGxpbmUgKi9cclxuICAgIGJveC1zaGFkb3c6IG5vbmU7IC8qIHJlbW92ZSBib3ggc2hhZG93ICovXHJcbiAgfVxyXG5cclxuICAuZmluYWwtYmlsbHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjE5YztcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8077:
/*!****************************************!*\
  !*** ./src/app/pipes/currency.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyPipe": () => (/* binding */ CurrencyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CurrencyPipe {
  transform(value, ...args) {
    return "$" + value;
  }
}
CurrencyPipe.ɵfac = function CurrencyPipe_Factory(t) {
  return new (t || CurrencyPipe)();
};
CurrencyPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "currency",
  type: CurrencyPipe,
  pure: true
});

/***/ }),

/***/ 5509:
/*!***************************************!*\
  !*** ./src/app/pipes/summary.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryPipe": () => (/* binding */ SummaryPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SummaryPipe {
  constructor() {
    this.summary = [];
  }
  transform(summary, ...args) {
    summary.map(item => {
      item.dataCharge = "$" + item.dataCharge;
      item.planBill = "$" + item.planBill;
      item.totalBill = "$" + item.totalBill;
      item.additionalCharges = "$" + item.additionalCharges;
    });
    return summary;
  }
}
SummaryPipe.ɵfac = function SummaryPipe_Factory(t) {
  return new (t || SummaryPipe)();
};
SummaryPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "summary",
  type: SummaryPipe,
  pure: true
});

/***/ }),

/***/ 673:
/*!***********************************************!*\
  !*** ./src/app/services/CalculatorService.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatorService": () => (/* binding */ CalculatorService)
/* harmony export */ });
class CalculatorService {
  constructor() {
    this.finalBill = 0;
  }
  setFinalBill(totalBill) {
    this.finalBill = this.finalBill + totalBill;
  }
  getFinalBill() {
    return this.finalBill;
  }
}

/***/ }),

/***/ 9697:
/*!*********************************************!*\
  !*** ./src/app/services/summary.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryService": () => (/* binding */ SummaryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SummaryService {
  constructor() {
    this.summary = [];
  }
  setSummary(summary) {
    this.summary = summary;
  }
  getSummary() {
    return this.summary;
  }
}
SummaryService.ɵfac = function SummaryService_Factory(t) {
  return new (t || SummaryService)();
};
SummaryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: SummaryService,
  factory: SummaryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6155:
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryComponent": () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_summary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/summary.service */ 9697);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/summary.pipe */ 5509);





function SummaryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, ctx_r0.summary)));
  }
}
const _c0 = function () {
  return ["/"];
};
class SummaryComponent {
  constructor(summaryService) {
    this.summaryService = summaryService;
    this.summary = [];
  }
  ngOnInit() {
    this.summary = this.summaryService.getSummary();
  }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) {
  return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_summary_service__WEBPACK_IMPORTED_MODULE_0__.SummaryService));
};
SummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SummaryComponent,
  selectors: [["app-summary"]],
  decls: 4,
  vars: 3,
  consts: [[1, "container"], ["class", "container code mt-3", 4, "ngIf"], [1, "btn", "btn-default", 3, "routerLink"], [1, "container", "code", "mt-3"]],
  template: function SummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SummaryComponent_div_1_Template, 5, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.summary.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe, _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_1__.SummaryPipe],
  styles: [".container[_ngcontent-%COMP%]{\r\n    border: 0px solid #26619c;\r\n    padding: 2%;\r\n    display: flex;\r\n    column-gap: 50px;\r\n}\r\n\r\n.code[_ngcontent-%COMP%]{\r\n    background-color: gainsboro;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    justify-self: flex-end;\r\n    align-self: flex-start;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICMyNjYxOWM7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2x1bW4tZ2FwOiA1MHB4O1xyXG59XHJcblxyXG4uY29kZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  devices: [{
    deviceName: "Neha Prasad",
    dataCharge: 0
  }, {
    deviceName: "Naga",
    dataCharge: 0
  }, {
    deviceName: "Nirman",
    dataCharge: 0
  }, {
    deviceName: "Hosanna",
    dataCharge: 0
  }, {
    deviceName: "Kalpana",
    dataCharge: 0
  }]
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map