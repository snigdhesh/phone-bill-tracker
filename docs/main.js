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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'phone-bill-tracker';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device/device.component */ 6711);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_CalculatorService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/CalculatorService */ 673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [_services_CalculatorService__WEBPACK_IMPORTED_MODULE_4__.CalculatorService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent, _device_device_component__WEBPACK_IMPORTED_MODULE_3__.DeviceComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_CalculatorService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/CalculatorService */ 673);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);







function DeviceComponent_button_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add to final bill");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.deviceForm.valid);
  }
}
function DeviceComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter total mobile data charges! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
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
    this.totalBillEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.formData = {};
    this.deviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      deviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      dataCharge: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0),
      planBill: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0),
      additionalCharges: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0),
      totalBill: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0)
    });
    this.buttonDisplay = true;
  }
  ngOnInit() {
    this.deviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      deviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.deviceName),
      dataCharge: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.dataCharge),
      planBill: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
      additionalCharges: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0),
      totalBill: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0)
    });
  }
  onSubmit() {
    this.totalBillEvent.emit(this.totalBill);
    this.buttonDisplay = false;
  }
}
DeviceComponent.ɵfac = function DeviceComponent_Factory(t) {
  return new (t || DeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_CalculatorService__WEBPACK_IMPORTED_MODULE_0__.CalculatorService));
};
DeviceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
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
    totalBillEvent: "totalBillEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_CalculatorService__WEBPACK_IMPORTED_MODULE_0__.CalculatorService])],
  decls: 45,
  vars: 8,
  consts: [[1, "container"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "deviceName"], [1, "input-group-addon", 2, "margin-right", "1%", "visibility", "hidden"], ["type", "text", "id", "deviceName", "formControlName", "deviceName", "readonly", "", 1, "form-control"], ["for", "dataCharge"], [1, "input-group-addon", 2, "margin-right", "1%"], ["type", "text", "id", "dataCharge", "formControlName", "dataCharge", "readonly", "", 1, "form-control"], ["for", "planBill"], ["type", "number", "id", "planBill", "formControlName", "planBill", 1, "form-control", 3, "keyup"], ["for", "additionalCharges"], ["type", "number", "id", "additionalCharges", "formControlName", "additionalCharges", 1, "form-control", 3, "keyup"], ["for", "totalBill"], ["type", "number", "id", "totalBill", "formControlName", "totalBill", "readonly", "", 1, "form-control"], ["class", "btn btn-primary", "type", "submit", "title", "Please enter phone bill", 3, "disabled", 4, "ngIf"], ["style", "margin-top: 5%;", "class", "alert alert-danger", 4, "ngIf"], ["type", "submit", "title", "Please enter phone bill", 1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger", 2, "margin-top", "5%"]],
  template: function DeviceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DeviceComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div")(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p")(7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Note:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2)(12, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Device name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2)(18, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Data charge");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 2)(24, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Plan bill");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DeviceComponent_Template_input_keyup_28_listener($event) {
        return ctx.calculatePlanBillCharges($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2)(30, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Additional charges ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "(if any)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DeviceComponent_Template_input_keyup_36_listener($event) {
        return ctx.calculateAdditionalCharges($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 2)(38, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Total bill");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, DeviceComponent_button_43_Template, 2, 1, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, DeviceComponent_div_44_Template, 2, 0, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.deviceForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Total mobile data charges for ", ctx.numberOfDevices, " devices is ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, ctx.totalDataCharges), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Please add to final bill to generate final bill for all ", ctx.numberOfDevices, " devices");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.buttonDisplay);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deviceForm.touched && !ctx.deviceForm.controls["planBill"].valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
  styles: [".form-group[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      align-items: center;\r\n  }\r\n\r\n  .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n      flex-basis: 80%;\r\n      margin-right: 1rem;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%] {\r\n    padding: 5%;\r\n  }\r\n\r\n  .btn-primary[_ngcontent-%COMP%]{\r\n    background-color: #26619c;\r\n  }\r\n\r\n  .btn-primary[_ngcontent-%COMP%]:hover{\r\n    background-color: white;\r\n    border: 1px solid #26619c;\r\n    color: #26619c;\r\n  }\r\n\r\n  .btn-primary[_ngcontent-%COMP%]:focus {\r\n    outline: none; \r\n    box-shadow: none; \r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGV2aWNlL2RldmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO01BQ0ksYUFBYTtNQUNiLG1CQUFtQjtFQUN2Qjs7RUFFQTtNQUNJLGVBQWU7TUFDZixrQkFBa0I7RUFDdEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhLEVBQUUsbUJBQW1CO0lBQ2xDLGdCQUFnQixFQUFFLHNCQUFzQjtFQUMxQyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgICBmbGV4LWJhc2lzOiA4MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2MTljO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1wcmltYXJ5OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjY2MTljO1xyXG4gICAgY29sb3I6ICMyNjYxOWM7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnk6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTsgLyogcmVtb3ZlIG91dGxpbmUgKi9cclxuICAgIGJveC1zaGFkb3c6IG5vbmU7IC8qIHJlbW92ZSBib3ggc2hhZG93ICovXHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../device/device.component */ 6711);






function MainComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.basicInfoForm.valid);
  }
}
function MainComponent_input_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_input_26_Template_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onResetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MainComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter total mobile data charges! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MainComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Final bill: $", ctx_r3.finalBill, "");
  }
}
function MainComponent_div_29_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "div", 24)(2, "app-device", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("totalBillEvent", function MainComponent_div_29_li_2_Template_app_device_totalBillEvent_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.calculateFinalBill($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("deviceName", i_r8.deviceName)("dataCharge", i_r8.dataCharge)("numberOfDevices", ctx_r7.devices.length)("totalDataCharges", ctx_r7.totalMobileDataCharges);
  }
}
function MainComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MainComponent_div_29_li_2_Template, 3, 4, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.devices);
  }
}
class MainComponent {
  constructor() {
    this.devices = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.devices;
    this.finalBill = 0;
    this.totalMobileDataCharges = 0;
    this.showDevices = false;
    this.displaySaveButton = true;
    this.displayResetButton = false;
    this.basicInfoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      totalDataCharges: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      totalNumberOfDevices: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.devices.length),
      dataChargePerDevice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0)
    });
    this.dataChargePerDevice = 0;
  }
  ngOnChanges(changes) {
    console.log(changes['totalDataCharges'].currentValue);
  }
  onBasicFormSubmit() {
    this.displaySaveButton = false;
    this.displayResetButton = true;
    this.showDevices = true;
    this.finalBill = 0;
  }
  calculateCharges(e) {
    let totalDataCharges = e.target.value;
    this.dataChargePerDevice = totalDataCharges / this.devices.length;
    this.dataChargePerDevice = Number(this.dataChargePerDevice.toFixed(2));
    this.basicInfoForm.controls['dataChargePerDevice'].setValue(this.dataChargePerDevice);
    this.devices.forEach(device => {
      device.dataCharge = this.dataChargePerDevice;
    });
    this.totalMobileDataCharges = totalDataCharges;
  }
  calculateFinalBill(e) {
    console.log("Before addition:", this.finalBill);
    this.finalBill = this.finalBill + e;
    this.finalBill = Number(this.finalBill.toFixed(2));
    console.log("After addition:", this.finalBill);
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
  return new (t || MainComponent)();
};
MainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MainComponent,
  selectors: [["app-main"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 30,
  vars: 6,
  consts: [[1, "banner", "sticky"], [1, "container", "mt-3"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "totalDataCharges"], [1, "input-group-addon", 2, "margin-right", "1%"], ["type", "number", "formControlName", "totalDataCharges", "placeholder", "Please enter total shared data charges..", 1, "form-control", 3, "keyup"], ["for", "totalNumberOfDevices"], [1, "input-group-addon", 2, "margin-right", "1%", "visibility", "hidden"], ["type", "number", "formControlName", "totalNumberOfDevices", "readonly", "", 1, "form-control"], ["for", "dataChargePerDevice"], ["type", "number", "formControlName", "dataChargePerDevice", "readonly", "", 1, "form-control"], ["class", "btn btn-primary", "type", "submit", 3, "disabled", 4, "ngIf"], ["class", "btn btn-primary", "type", "button", "value", "Reset", 3, "click", 4, "ngIf"], ["style", "margin-top: 5%;", "class", "alert alert-danger", 4, "ngIf"], ["class", "card final-bill", 4, "ngIf"], ["class", "devices", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", "value", "Reset", 1, "btn", "btn-primary", 3, "click"], [1, "alert", "alert-danger", 2, "margin-top", "5%"], [1, "card", "final-bill"], [1, "card-body", 2, "text-align", "center"], [1, "devices"], [4, "ngFor", "ngForOf"], [1, "device"], [3, "deviceName", "dataCharge", "numberOfDevices", "totalDataCharges", "totalBillEvent"]],
  template: function MainComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Phone bill tracker");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function MainComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onBasicFormSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Total mobile data charges");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "(shared among all devices) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function MainComponent_Template_input_keyup_12_listener($event) {
        return ctx.calculateCharges($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3)(14, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Total number of devices");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 3)(20, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Data charges per device");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, MainComponent_button_25_Template, 2, 1, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, MainComponent_input_26_Template, 1, 0, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, MainComponent_div_27_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, MainComponent_div_28_Template, 4, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, MainComponent_div_29_Template, 3, 1, "div", 16);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.basicInfoForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displaySaveButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displayResetButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.basicInfoForm.touched && !ctx.basicInfoForm.value.totalDataCharges);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.finalBill > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showDevices);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _device_device_component__WEBPACK_IMPORTED_MODULE_1__.DeviceComponent],
  styles: [".banner[_ngcontent-%COMP%] {\r\n    background-color: #26619c;\r\n    padding: 10px;\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n  .sticky[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    top: 0;\r\n  }\r\n\r\n  .form-group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    flex-basis: 60%;\r\n    margin-right: 1rem;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%]{\r\n      border: 0px solid black;\r\n      padding: 3%;\r\n  }\r\n\r\n   ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    display: flex;\r\n    \r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]{\r\n    border: 1px solid silver;\r\n    margin: 1%;\r\n    padding: 1%;\r\n  }\r\n\r\n  .btn-primary[_ngcontent-%COMP%]{\r\n    background-color: #26619c;\r\n  }\r\n\r\n  .btn-primary[_ngcontent-%COMP%]:hover{\r\n    background-color: white;\r\n    border: 1px solid #26619c;\r\n    color: #26619c;\r\n  }\r\n\r\n  .btn-primary[_ngcontent-%COMP%]:focus {\r\n    outline: none; \r\n    box-shadow: none; \r\n  }\r\n\r\n  .final-bill[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n    background-color: #26619c;\r\n    color: white\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7RUFDQTtJQUVFLGdCQUFnQjtJQUNoQixNQUFNO0VBQ1I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtNQUNJLHVCQUF1QjtNQUN2QixXQUFXO0VBQ2Y7O0dBRUM7SUFDQyxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhLEVBQUUsbUJBQW1CO0lBQ2xDLGdCQUFnQixFQUFFLHNCQUFzQjtFQUMxQzs7RUFFQTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7SUFDekI7RUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjE5YztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5zdGlja3kge1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgZmxleC1iYXNpczogNjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XHJcbiAgICAgIHBhZGRpbmc6IDMlO1xyXG4gIH1cclxuXHJcbiAgIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgKi9cclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gIHVsID4gbGl7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2MTljO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1wcmltYXJ5OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjY2MTljO1xyXG4gICAgY29sb3I6ICMyNjYxOWM7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnk6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTsgLyogcmVtb3ZlIG91dGxpbmUgKi9cclxuICAgIGJveC1zaGFkb3c6IG5vbmU7IC8qIHJlbW92ZSBib3ggc2hhZG93ICovXHJcbiAgfVxyXG5cclxuICAuZmluYWwtYmlsbHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjE5YztcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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