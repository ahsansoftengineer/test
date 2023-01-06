"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["src_app_blank_blank_module_ts"],{

/***/ 54851:
/*!***********************************************!*\
  !*** ./src/app/blank/blank-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankRoutingModule": () => (/* binding */ BlankRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _print_color_print_color_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-color/print-color.component */ 97023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 39609);




const routes = [
    { path: 'cash_cheque_color', component: _print_color_print_color_component__WEBPACK_IMPORTED_MODULE_0__.PrintColorComponent },
];
class BlankRoutingModule {
}
BlankRoutingModule.ɵfac = function BlankRoutingModule_Factory(t) { return new (t || BlankRoutingModule)(); };
BlankRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlankRoutingModule });
BlankRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlankRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 42704:
/*!***************************************!*\
  !*** ./src/app/blank/blank.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankModule": () => (/* binding */ BlankModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 75349);
/* harmony import */ var _print_color_print_color_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-color/print-color.component */ 97023);
/* harmony import */ var _blank_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-routing.module */ 54851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);





class BlankModule {
}
BlankModule.ɵfac = function BlankModule_Factory(t) { return new (t || BlankModule)(); };
BlankModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BlankModule });
BlankModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _blank_routing_module__WEBPACK_IMPORTED_MODULE_2__.BlankRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BlankModule, { declarations: [_print_color_print_color_component__WEBPACK_IMPORTED_MODULE_1__.PrintColorComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _blank_routing_module__WEBPACK_IMPORTED_MODULE_2__.BlankRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 97023:
/*!************************************************************!*\
  !*** ./src/app/blank/print-color/print-color.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintColorComponent": () => (/* binding */ PrintColorComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _constant_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/constant */ 90376);
/* harmony import */ var to_words__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! to-words */ 18087);
/* harmony import */ var to_words__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(to_words__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/http.service */ 4584);
/* harmony import */ var _service_form_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/form-helper.service */ 64907);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 52954);









function PrintColorComponent_div_0_tr_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const receipt_data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r3 == null ? null : receipt_data_r3.donation_type == null ? null : receipt_data_r3.donation_type.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r3 == null ? null : receipt_data_r3.donation_sub_type == null ? null : receipt_data_r3.donation_sub_type.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r3 == null ? null : receipt_data_r3.purpose == null ? null : receipt_data_r3.purpose.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r3 == null ? null : receipt_data_r3.pay_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r3 == null ? null : receipt_data_r3.instrument_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r3 == null ? null : receipt_data_r3.bank == null ? null : receipt_data_r3.bank.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r3 == null ? null : receipt_data_r3.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r3 == null ? null : receipt_data_r3.currency == null ? null : receipt_data_r3.currency.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](21, 13, receipt_data_r3 == null ? null : receipt_data_r3.amount, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r3 == null ? null : receipt_data_r3.branch == null ? null : receipt_data_r3.branch.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r3 == null ? null : receipt_data_r3.additionalInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r3 == null ? null : receipt_data_r3.majlis == null ? null : receipt_data_r3.majlis.title);
} }
function PrintColorComponent_div_0_table_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Donation Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "In-Kind");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Wajibah Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Nafila Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](42, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](50, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Grand Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](58, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](62, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](66, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](26, 10, ctx_r2.other_detail.wajiba.cash, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](30, 14, ctx_r2.other_detail.wajiba.inkind, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](34, 18, ctx_r2.other_detail.wajiba.total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](42, 22, ctx_r2.other_detail.nafila.cash, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](46, 26, ctx_r2.other_detail.nafila.inkind, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](50, 30, ctx_r2.other_detail.nafila.total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](58, 34, ctx_r2.other_detail.grandTotal.cash, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](62, 38, ctx_r2.other_detail.grandTotal.inkind, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](66, 42, ctx_r2.other_detail.grandTotal.total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.final_Total, " only");
} }
function PrintColorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Printed Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Printed By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " www.dawateislami.net");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "DONATION RECEIPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "canvas", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Donor's Information:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "strong", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "Receipt No: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "strong", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "caption", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, " Location: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, " Cabina: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128, "Donation Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130, "Sub Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, "Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, "Pay Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136, "Instrument No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](138, "Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142, "Cur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](148, "Add. Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](150, "Majlis");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](152, PrintColorComponent_div_0_tr_152_Template, 28, 17, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](153, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](154, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](155, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "tbody", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](160, PrintColorComponent_div_0_table_160_Template, 71, 46, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](162, "table", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "tbody", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](166, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](170, "Received By: _________________________");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](174, "Donor Signature: ______________________");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "table", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](178, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](179, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](181, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](183, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](184, "\"Donations made to Dawat-e-Islami is entitled to the tax credit u/s 61 of the Income Tax Ordinance 2001\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](185, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](186, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](187, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](189, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](190, "table", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](191, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](192, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](193, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](194, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](195, "Alami Madani Markaz, Faizan-e-Madinah Mahallah Saudagran, Purani Sabzi Mandi, Bab-ul-Madinah, Karachi, Pakistan");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](196, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](197, "Phone: +92 21 -34921389-91, UAN: 111 -25-26-92, E-Mail: donations@dawateislami.net, http://www.dawateislami.net/donation/donate.do ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](199, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.currDateandTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.printBy, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.logo, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.top_image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" User: ", ctx_r0.printData == null ? null : ctx_r0.printData.created_by == null ? null : ctx_r0.printData.created_by.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Time: ", (ctx_r0.printData == null ? null : ctx_r0.printData.date) + " " + (ctx_r0.printData == null ? null : ctx_r0.printData.time), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" C.P.: ", ctx_r0.printData == null ? null : ctx_r0.printData.operating_unit == null ? null : ctx_r0.printData.operating_unit.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Batch: ", ctx_r0.printData == null ? null : ctx_r0.printData.batch_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.printData == null ? null : ctx_r0.printData.displayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.donor == null ? null : ctx_r0.printData.donor.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.donor == null ? null : ctx_r0.printData.donor.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("C/o: ", ctx_r0.printData == null ? null : ctx_r0.printData.additional_info == null ? null : ctx_r0.printData.additional_info.careOfName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.receipt_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Date: ", ctx_r0.printData == null ? null : ctx_r0.printData.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("MR No: ", ctx_r0.printData == null ? null : ctx_r0.printData.additional_info == null ? null : ctx_r0.printData.additional_info.mr, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.divison == null ? null : ctx_r0.printData.divison.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.cabina == null ? null : ctx_r0.printData.cabina.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.printData.receipt_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.printData != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.warning_image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.footer_image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
class PrintColorComponent {
    constructor(http, helper, activeRoute) {
        this.http = http;
        this.helper = helper;
        this.activeRoute = activeRoute;
        this.printData = {};
        this.batchName = '';
        this.printBy = '';
        this.wajibaCash = 0;
        this.wajibaIn_kind = 0;
        this.nafilaCash = 0;
        this.nafilaIn_kind = 0;
        this.final_Total = 0;
        this.other_detail = _constant_constant__WEBPACK_IMPORTED_MODULE_2__.Constant.other_detail;
    }
    ngOnInit() {
        this.currDateandTime = this.helper._getCurrentdatenadTime();
        this.batchName = this.printBy = this.helper._getuserPermission()?.profile?.name;
        this.slipId = this.activeRoute.snapshot.paramMap.get('slipId');
        this.getSystems(this.slipId);
    }
    getSystems(slipId) {
        const toWords = new to_words__WEBPACK_IMPORTED_MODULE_3__.ToWords();
        this.http.get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TRANSACTION,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.PRINT_TRANSACTION,
            resource: slipId,
            query: {
                preview: 1,
                receipt_type: 1,
            }
        }).subscribe((res) => {
            this.printData = res.data.row;
            if (this.printData) {
                for (let i = 0; i < this.printData.other_details.length; i++) {
                    this.other_detail[this.printData.other_details[i].donation_type].cash = this.printData.other_details[i].cash;
                    this.other_detail[this.printData.other_details[i].donation_type].cash = this.printData.other_details[i].cash;
                    this.other_detail[this.printData.other_details[i].donation_type].inkind = this.printData.other_details[i].in_kind;
                    this.other_detail[this.printData.other_details[i].donation_type].total = this.printData.other_details[i].in_kind + this.printData.other_details[i].cash;
                }
                this.other_detail.grandTotal.cash = this.other_detail.wajiba.cash + this.other_detail.nafila.cash;
                this.other_detail.grandTotal.inkind = this.other_detail.wajiba.inkind + this.other_detail.nafila.inkind;
                this.other_detail.grandTotal.total = this.other_detail.wajiba.total + this.other_detail.nafila.total;
                this.final_Total = toWords.convert(this.other_detail.grandTotal.total);
            }
        });
    }
}
PrintColorComponent.ɵfac = function PrintColorComponent_Factory(t) { return new (t || PrintColorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_4__.HTTPService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_form_helper_service__WEBPACK_IMPORTED_MODULE_5__.FormHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
PrintColorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PrintColorComponent, selectors: [["app-print-color"]], decls: 1, vars: 1, consts: [["class", "recipt-main", "style", "margin: 0px auto; padding: 10px; background: white; width: 100%;", 4, "ngIf"], [1, "recipt-main", 2, "margin", "0px auto", "padding", "10px", "background", "white", "width", "100%"], ["id", "wrapper", "width", "630", "cellpadding", "0", "cellspacing", "0", "border", "0", "background", "./receipt_color_files/testing.png", 1, "Dont_Rept", "class_res", 2, "width", "82%", "background", "white", "padding", "10px", "height", "100vh"], ["height", "5"], ["cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Header_Doner_left"], ["colspan", "2", 2, "font-size", "12px", "padding-left", "25px", "padding-top", "40px"], ["width", "110", "align", "center", 1, "same_td_logos"], ["width", "100", 2, "margin-bottom", "15px", 3, "src"], ["align", "center", "width", "400", 1, "same_td_logos", "td_img_align"], ["cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Header_Doner_center"], ["align", "center"], ["width", "200", 3, "src"], ["href", "http://localhost/development/donation-prod/Personnel/print_email_receipt/receipt:U1VQRVJBRE1JTjIxLTI=/receiptType:ReceiptDetail/print:1#"], ["align", "center", "valign", "top", "width", "130", 1, "same_td_logos"], ["cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Header_Doner_right"], [1, "text-aling-center"], ["width", "625", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Donor_Information_left"], [2, "float", "right", "margin-bottom", "-88px"], ["id", "container"], ["width", "100", "height", "100"], ["width", "360", "cellpadding", "0", "cellspacing", "0", "border", "0"], ["align", "left", 1, "text-aling-left"], ["align", "left"], [2, "font-size", "14px"], [2, "display", "block"], [2, "font-size", "11px"], [2, "text-align", "center"], ["src", "https://www.ginifab.com/feeds/qr_code/img/qr_code_scanner.jpg", 2, "width", "30%"], ["width", "295", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Donor_Information_center", 2, "margin-right", "100px"], ["align", "right", "valign", "top", "width", "200"], ["cellpadding", "0", "cellspacing", "0", "border", "0"], ["align", "center", 2, "margin-left", "-100px"], [2, "margin-left", "44px", "margin-top", "4px"], [2, "font-size", "12px"], [2, "margin-left", "46px"], [2, "margin-left", "45px"], [1, "Location", "margin_top_res", "ctable", 2, "margin-bottom", "0", "padding-bottom", "0"], [2, "margin-bottom", "0  !important"], [2, "margin-right", "0px !important", "margin-left", "-13px"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "table_main", 2, "width", "95%"], [1, "donation_type"], [2, "color", "#000"], ["class", "all_purpose", 4, "ngFor", "ngForOf"], ["type", "hidden", "id", "text", "value", "https://donations.dawateislami.info/result/detail/f1cb5e42072745db5b1bc392eac9b5e9f7c271ac"], ["width", "625", "cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Header_Doner_left", "outer_table"], [1, "inner_main_table"], ["width", "310", "align", "left"], ["cellspacing", "0", "cellpadding", "0", "border", "0", "class", "Dona_Wajibah width_sevenHundred", 4, "ngIf"], ["width", "300", "valign", "top", 1, "width_fourHundred", 2, "margin-left", "100px"], ["cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Donor_Signature", 2, "/* margin", "0px 0px 10px 80px", "*/width", "100%"], [2, "width", "auto", "text-align", "right"], ["align", "left", 2, "text-align", "revert"], ["width", "350", 2, "margin-right", "20px", 3, "src"], ["align", "left", 2, "text-align", "right"], [2, "text-align", "right", "margin-right", "26px"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "border", "0"], [1, "Footer_main"], [1, "img_center_res", 2, "text-align", "center"], [2, "height", "40px", "width", "625px", 3, "src"], ["height", "50"], [1, "all_purpose"], ["cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Dona_Wajibah", "width_sevenHundred"], ["align", "left", "width", "100"], ["align", "left", "width", "100", 1, "col_res_width"], ["colspan", "4", "width", "400", "align", "left"], [2, "height", "auto !important", "text-transform", "capitalize"]], template: function PrintColorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, PrintColorComponent_div_0_Template, 200, 21, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.printData !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 0.5em;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n\tfont-size: 100%;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n\tfont-family: 'Gill Sans', 'lucida grande', helvetica, arial, sans-serif;\r\n\tfont-size: 190%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] { \r\n\tfont-family: 'Gill Sans', 'lucida grande', helvetica, arial, sans-serif;\r\n\tfont-size: 165%;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n\tcolor: #993;\r\n\tfont-weight: normal;\r\n}\r\n\r\n@media print {}\r\n\r\n@page {\r\n  size: auto;\r\n  margin: 0;\r\n}\r\n\r\n.Header_Doner_left[_ngcontent-%COMP%], .Header_Doner_center[_ngcontent-%COMP%], .Header_Doner_right[_ngcontent-%COMP%], .Donor_Information_left[_ngcontent-%COMP%]{\r\n\tvertical-align: top;\r\n}\r\n\r\n.Header_Doner_left[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #58b2ca;\r\n  margin: 0 0 5px;\r\n  padding: 0 0 5px;\r\n  width: 100%;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%] {\r\n  display: unset;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .Header_Doner_center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\tcolor: #00b050;\r\n\tdisplay: block;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\ttext-align: center;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  margin: 0 0 10px 0;\r\n  padding: 0;\r\n  text-decoration: underline;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  margin: 0;\r\n  padding: 0;\r\n  letter-spacing: 6px;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%] {\r\n\ttext-align: left;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .Donor_Information_center[_ngcontent-%COMP%], .Donor_Information_left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .Donor_Information_center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\tcolor: #000;\r\n    display: block;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n\tpadding: 0;\r\n\ttext-align: left;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  margin: 2px 0;\r\n}\r\n\r\n.Donor_Information_center[_ngcontent-%COMP%], .Donor_Information_center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\tfont-weight: normal;\r\n\tfont-size: 10px;\r\n    margin: 0 11px 0 0;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 9px;\r\n  margin: 0 0 0 18px;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\tcolor: #4381ea;\r\n\tdisplay: block;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tfont-size: 14px;\r\n\tmargin: 0 0 4px 18px;\r\n}\r\n\r\n.table_main[_ngcontent-%COMP%] {\r\n  border: 1px solid #58b2ca;\r\n  border-radius: 4px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  margin: 0 auto 10px;\r\n}\r\n\r\n.Location[_ngcontent-%COMP%] {\r\n  margin: 8px 0 0;\r\n}\r\n\r\n.Location[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 16px;\r\n  padding: 5px;\r\n  text-align: left;\r\n  width: 46%;\r\n  margin-right: 40px;\r\n  margin-left: -20px;\r\n  \r\n}\r\n\r\n.Location[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 12px;\r\n}\r\n\r\ntr.donation_type[_ngcontent-%COMP%] {\r\n  background: none repeat scroll 0 0 #FFF;\r\n  border-radius: 4px;\r\n  color: #000;\r\n  height: 35px;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n}\r\n\r\ntr.all_purpose[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n}\r\n\r\n.all_purpose[_ngcontent-%COMP%] > th[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #000;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    padding: 1px;\r\n}\r\n\r\n.Footer_main[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.Footer_main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 9px;\r\n  margin: 5px 0 5px 0;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.Dont_Rept[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.Dona_Wajibah[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  height: 19px;\r\n  margin: 0 0 3px 2px;\r\n  padding: 2px;\r\n  vertical-align: middle;\r\n  font-weight: bold;\r\n}\r\n\r\n.Donor_Signature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  margin: 12px 0;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.donation_type[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-right: 1px solid #000;\r\n  font-size: 15px;\r\n  text-align: center;\r\n  padding: 1px;\r\n}\r\n\r\n.Dona_Wajibah[_ngcontent-%COMP%] {\r\n  margin: 0 0 0 20px;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 900;\r\n}\r\n\r\n@media screen and (max-device-width:767px), screen and (max-width:767px) {\r\n  .class_res[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    width: 100%;\r\n  }\r\n\r\n  .same_td_logos[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n  }\r\n\r\n  .text-aling-center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .text-aling-left[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n\r\n  .margin_top_res[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n\r\n  }\r\n\r\n  .width_sevenHundred[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n\r\n  .width_fourHundred[_ngcontent-%COMP%] {\r\n    width: 550px;\r\n  }\r\n\r\n  .img_center_res[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  td[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  th[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  .col_res_width[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n  }\r\n\r\n  .Header_Doner_left[_ngcontent-%COMP%] {\r\n\r\n    padding: 40px 0px;\r\n  }\r\n\r\n  .Donor_Information_left[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n  }\r\n}\r\n\r\n.td_img_align[_ngcontent-%COMP%]{\r\n\tpadding-left: 50px;\r\n}\r\n\r\n.ctable[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin: 10px 0px 10px 40px;\r\n}\r\n\r\n\r\n\r\n.recipt-main[_ngcontent-%COMP%]   .all_purpose[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #000 !important;\r\n\tcolor: #000 !important; \r\n}\r\n\r\n.no-border[_ngcontent-%COMP%] {\r\n  border-bottom: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWNvbG9yLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsdUVBQXVFO0NBQ3ZFLGVBQWU7QUFDaEI7O0FBRUEsS0FBSyxrQkFBa0I7Q0FDdEIsdUVBQXVFO0NBQ3ZFLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCOztBQUdBLGNBQWM7O0FBRWQ7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBOzs7O0NBSUMsbUJBQW1CO0FBQ3BCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7O0NBRUMsY0FBYztDQUNkLGNBQWM7Q0FDZCx5Q0FBeUM7Q0FDekMsa0JBQWtCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBOzs7O0NBSUMsV0FBVztJQUNSLGNBQWM7SUFDZCx5Q0FBeUM7Q0FDNUMsVUFBVTtDQUNWLGdCQUFnQjtBQUNqQjs7QUFHQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBOztDQUVDLG1CQUFtQjtDQUNuQixlQUFlO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUdBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFHQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2QseUNBQXlDO0NBQ3pDLGVBQWU7Q0FDZixvQkFBb0I7QUFDckI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVix5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtDQUNDLHNCQUFzQjtJQUNuQix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFJQTtFQUVFO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBR0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiwwQkFBMEI7QUFDM0I7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJLGlDQUFpQztDQUNwQyxzQkFBc0I7QUFDdkI7O0FBR0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBQ0EsbUJBQW1CIiwiZmlsZSI6InByaW50LWNvbG9yLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBoMiwgaDMsIGg0IHtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG5oMiB7XHJcblx0Zm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnbHVjaWRhIGdyYW5kZScsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxOTAlO1xyXG59XHJcblxyXG5oMyB7IC8qY29sb3I6ICMyYzY4Nzc7Ki9cclxuXHRmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdsdWNpZGEgZ3JhbmRlJywgaGVsdmV0aWNhLCBhcmlhbCwgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE2NSU7XHJcbn1cclxuXHJcbmg0IHtcclxuXHRjb2xvcjogIzk5MztcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHByaW50IHt9XHJcblxyXG5AcGFnZSB7XHJcbiAgc2l6ZTogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfbGVmdCxcclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIsXHJcbi5IZWFkZXJfRG9uZXJfcmlnaHQsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9sZWZ0e1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfbGVmdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1OGIyY2E7XHJcbiAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gIHBhZGRpbmc6IDAgMCA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfY2VudGVyIHtcclxuICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9yaWdodCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIgYSxcclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIgaDEge1xyXG5cdGNvbG9yOiAjMDBiMDUwO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIgYSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uSGVhZGVyX0RvbmVyX2NlbnRlciBoMSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiA2cHg7XHJcbn1cclxuXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uSGVhZGVyX0RvbmVyX3JpZ2h0IHAsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9jZW50ZXIsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9sZWZ0IHAsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9jZW50ZXIgcHtcclxuXHRjb2xvcjogIzAwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0cGFkZGluZzogMDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLkhlYWRlcl9Eb25lcl9yaWdodCBwIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAycHggMDtcclxufVxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2NlbnRlcixcclxuLkRvbm9yX0luZm9ybWF0aW9uX2NlbnRlciBwe1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDExcHggMCAwO1xyXG59XHJcblxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQgcCB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgbWFyZ2luOiAwIDAgMCAxOHB4O1xyXG59XHJcblxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQgaDMge1xyXG5cdGNvbG9yOiAjNDM4MWVhO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW46IDAgMCA0cHggMThweDtcclxufVxyXG5cclxuXHJcbi50YWJsZV9tYWluIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNThiMmNhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxufVxyXG5cclxuLkxvY2F0aW9uIHtcclxuICBtYXJnaW46IDhweCAwIDA7XHJcbn1cclxuXHJcbi5Mb2NhdGlvbiBoNCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogNDYlO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi5Mb2NhdGlvbiBwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG50ci5kb25hdGlvbl90eXBlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwICNGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxudHIuYWxsX3B1cnBvc2Uge1xyXG4gIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmFsbF9wdXJwb3NlPnRoIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG5cclxuLkZvb3Rlcl9tYWluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLkZvb3Rlcl9tYWluIHAge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgNXB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5Eb250X1JlcHQgdGQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uRG9uYV9XYWppYmFoIHAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgbWFyZ2luOiAwIDAgM3B4IDJweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLkRvbm9yX1NpZ25hdHVyZSBwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZG9uYXRpb25fdHlwZSB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG4uRG9uYV9XYWppYmFoIHtcclxuICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfcmlnaHQgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDo3NjdweCksXHJcbnNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gIC5jbGFzc19yZXMge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zYW1lX3RkX2xvZ29zIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWFsaW5nLWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGV4dC1hbGluZy1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luX3RvcF9yZXMge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAud2lkdGhfc2V2ZW5IdW5kcmVkIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG4gIC53aWR0aF9mb3VySHVuZHJlZCB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1nX2NlbnRlcl9yZXMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29sX3Jlc193aWR0aCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuSGVhZGVyX0RvbmVyX2xlZnQge1xyXG5cclxuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnRkX2ltZ19hbGlnbntcclxuXHRwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuLmN0YWJsZXtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAxMHB4IDBweCAxMHB4IDQwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBhZGRlZCBieSBmYXlleiAqL1xyXG5cclxuLnJlY2lwdC1tYWluIC5hbGxfcHVycG9zZSB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICMwMDAgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG4ubm8tYm9yZGVyIHtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogZW5kZWQgYnkgZmF5ZXogKi8iXX0= */"] });


/***/ }),

/***/ 18087:
/*!***********************************************!*\
  !*** ./node_modules/to-words/dist/ToWords.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToWords = exports.DefaultToWordsOptions = exports.DefaultConverterOptions = void 0;
const en_BD_1 = __importDefault(__webpack_require__(/*! ./locales/en-BD */ 87814));
const en_GH_1 = __importDefault(__webpack_require__(/*! ./locales/en-GH */ 97324));
const en_IN_1 = __importDefault(__webpack_require__(/*! ./locales/en-IN */ 7759));
const en_MM_1 = __importDefault(__webpack_require__(/*! ./locales/en-MM */ 41649));
const en_MU_1 = __importDefault(__webpack_require__(/*! ./locales/en-MU */ 6879));
const en_NG_1 = __importDefault(__webpack_require__(/*! ./locales/en-NG */ 52532));
const en_US_1 = __importDefault(__webpack_require__(/*! ./locales/en-US */ 83060));
const fa_IR_1 = __importDefault(__webpack_require__(/*! ./locales/fa-IR */ 90184));
const fr_FR_1 = __importDefault(__webpack_require__(/*! ./locales/fr-FR */ 61770));
const gu_IN_1 = __importDefault(__webpack_require__(/*! ./locales/gu-IN */ 46857));
const hi_IN_1 = __importDefault(__webpack_require__(/*! ./locales/hi-IN */ 62306));
const mr_IN_1 = __importDefault(__webpack_require__(/*! ./locales/mr-IN */ 80475));
const tr_TR_1 = __importDefault(__webpack_require__(/*! ./locales/tr-TR */ 48799));
exports.DefaultConverterOptions = {
    currency: false,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: false,
};
exports.DefaultToWordsOptions = {
    localeCode: 'en-IN',
    converterOptions: exports.DefaultConverterOptions,
};
class ToWords {
    constructor(options = {}) {
        this.options = {};
        this.locale = undefined;
        this.options = Object.assign({}, exports.DefaultToWordsOptions, options);
    }
    getLocaleClass() {
        /* eslint-disable @typescript-eslint/no-var-requires */
        switch (this.options.localeCode) {
            case 'en-BD':
                return en_BD_1.default;
            case 'en-GH':
                return en_GH_1.default;
            case 'en-IN':
                return en_IN_1.default;
            case 'en-MM':
                return en_MM_1.default;
            case 'en-MU':
                return en_MU_1.default;
            case 'en-NG':
                return en_NG_1.default;
            case 'en-US':
                return en_US_1.default;
            case 'fa-IR':
                return fa_IR_1.default;
            case 'fr-FR':
                return fr_FR_1.default;
            case 'gu-IN':
                return gu_IN_1.default;
            case 'hi-IN':
                return hi_IN_1.default;
            case 'mr-IN':
                return mr_IN_1.default;
            case 'tr-TR':
                return tr_TR_1.default;
        }
        /* eslint-enable @typescript-eslint/no-var-requires */
        throw new Error(`Unknown Locale "${this.options.localeCode}"`);
    }
    getLocale() {
        if (this.locale === undefined) {
            const LocaleClass = this.getLocaleClass();
            this.locale = new LocaleClass();
        }
        return this.locale;
    }
    convert(number, options = {}) {
        options = Object.assign({}, this.options.converterOptions, options);
        if (!this.isValidNumber(number)) {
            throw new Error(`Invalid Number "${number}"`);
        }
        if (options.ignoreDecimal) {
            number = Number.parseInt(number.toString());
        }
        let words = [];
        if (options.currency) {
            words = this.convertCurrency(number, options);
        }
        else {
            words = this.convertNumber(number);
        }
        return words.join(' ');
    }
    convertNumber(number) {
        var _a, _b, _c;
        const locale = this.getLocale();
        const isNegativeNumber = number < 0;
        if (isNegativeNumber) {
            number = Math.abs(number);
        }
        const split = number.toString().split('.');
        const ignoreZero = this.isNumberZero(number) && locale.config.ignoreZeroInDecimals;
        let words = this.convertInternal(Number(split[0]));
        const isFloat = this.isFloat(number);
        if (isFloat && ignoreZero) {
            words = [];
        }
        const wordsWithDecimal = [];
        if (isFloat) {
            if (!ignoreZero) {
                wordsWithDecimal.push(locale.config.texts.point);
            }
            if (split[1].startsWith('0') && !((_a = locale.config) === null || _a === void 0 ? void 0 : _a.decimalLengthWordMapping)) {
                const zeroWords = [];
                for (const num of split[1]) {
                    zeroWords.push(...this.convertInternal(Number(num)));
                }
                wordsWithDecimal.push(...zeroWords);
            }
            else {
                wordsWithDecimal.push(...this.convertInternal(Number(split[1])));
                const decimalLengthWord = (_c = (_b = locale.config) === null || _b === void 0 ? void 0 : _b.decimalLengthWordMapping) === null || _c === void 0 ? void 0 : _c[split[1].length];
                if (decimalLengthWord) {
                    wordsWithDecimal.push(decimalLengthWord);
                }
            }
        }
        const isEmpty = words.length <= 0;
        if (!isEmpty && isNegativeNumber) {
            words.unshift(locale.config.texts.minus);
        }
        words.push(...wordsWithDecimal);
        return words;
    }
    convertCurrency(number, options = {}) {
        var _a, _b, _c;
        const locale = this.getLocale();
        const isNegativeNumber = number < 0;
        if (isNegativeNumber) {
            number = Math.abs(number);
        }
        number = this.toFixed(number);
        // Extra check for isFloat to overcome 1.999 rounding off to 2
        const split = number.toString().split('.');
        let words = [...this.convertInternal(Number(split[0]))];
        if (locale.config.currency.plural) {
            words.push(locale.config.currency.plural);
        }
        const ignoreZero = this.isNumberZero(number) &&
            (options.ignoreZeroCurrency || (((_a = locale.config) === null || _a === void 0 ? void 0 : _a.ignoreZeroInDecimals) && number !== 0));
        if (ignoreZero) {
            words = [];
        }
        const wordsWithDecimal = [];
        const isFloat = this.isFloat(number);
        if (isFloat) {
            if (!ignoreZero) {
                wordsWithDecimal.push(locale.config.texts.and);
            }
            wordsWithDecimal.push(...this.convertInternal(Number(split[1]) * (!locale.config.decimalLengthWordMapping ? Math.pow(10, 2 - split[1].length) : 1)));
            const decimalLengthWord = (_c = (_b = locale.config) === null || _b === void 0 ? void 0 : _b.decimalLengthWordMapping) === null || _c === void 0 ? void 0 : _c[split[1].length];
            if (decimalLengthWord === null || decimalLengthWord === void 0 ? void 0 : decimalLengthWord.length) {
                wordsWithDecimal.push(decimalLengthWord);
            }
            wordsWithDecimal.push(locale.config.currency.fractionalUnit.plural);
        }
        else if (locale.config.decimalLengthWordMapping && words.length) {
            wordsWithDecimal.push(locale.config.currency.fractionalUnit.plural);
        }
        const isEmpty = words.length <= 0 && wordsWithDecimal.length <= 0;
        if (!isEmpty && isNegativeNumber) {
            words.unshift(locale.config.texts.minus);
        }
        if (!isEmpty && locale.config.texts.only && !options.doNotAddOnly) {
            wordsWithDecimal.push(locale.config.texts.only);
        }
        if (wordsWithDecimal.length) {
            words.push(...wordsWithDecimal);
        }
        return words;
    }
    convertInternal(number) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const locale = this.getLocale();
        if (locale.config.exactWordsMapping) {
            const exactMatch = (_b = (_a = locale.config) === null || _a === void 0 ? void 0 : _a.exactWordsMapping) === null || _b === void 0 ? void 0 : _b.find((elem) => {
                return number === elem.number;
            });
            if (exactMatch) {
                return [exactMatch.value];
            }
        }
        const match = locale.config.numberWordsMapping.find((elem) => {
            return number >= elem.number;
        });
        const words = [];
        if (number <= 100 || (number < 1000 && locale.config.namedLessThan1000)) {
            words.push(match.value);
            number -= match.number;
            if (number > 0) {
                if ((_d = (_c = locale.config) === null || _c === void 0 ? void 0 : _c.splitWord) === null || _d === void 0 ? void 0 : _d.length) {
                    words.push(locale.config.splitWord);
                }
                words.push(...this.convertInternal(number));
            }
            return words;
        }
        const quotient = Math.floor(number / match.number);
        const remainder = number % match.number;
        let matchValue = match.value;
        if (quotient > 1 && ((_f = (_e = locale.config) === null || _e === void 0 ? void 0 : _e.pluralWords) === null || _f === void 0 ? void 0 : _f.find((word) => word === match.value)) && ((_g = locale.config) === null || _g === void 0 ? void 0 : _g.pluralMark)) {
            matchValue += locale.config.pluralMark;
        }
        if (quotient === 1 && ((_h = locale.config) === null || _h === void 0 ? void 0 : _h.ignoreOneForWords)) {
            words.push(matchValue);
        }
        else {
            words.push(...this.convertInternal(quotient), matchValue);
        }
        if (remainder > 0) {
            if ((_k = (_j = locale.config) === null || _j === void 0 ? void 0 : _j.splitWord) === null || _k === void 0 ? void 0 : _k.length) {
                words.push(locale.config.splitWord);
            }
            words.push(...this.convertInternal(remainder));
        }
        return words;
    }
    toFixed(number, precision = 2) {
        return Number(Number(number).toFixed(precision));
    }
    isFloat(number) {
        return Number(number) === number && number % 1 !== 0;
    }
    isValidNumber(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }
    isNumberZero(number) {
        return number >= 0 && number < 1;
    }
}
exports.ToWords = ToWords;


/***/ }),

/***/ 87814:
/*!*****************************************************!*\
  !*** ./node_modules/to-words/dist/locales/en-BD.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Taka',
                plural: 'Taka',
                symbol: '৳',
                fractionalUnit: {
                    name: 'Poysha',
                    plural: 'Poysha',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 97324:
/*!*****************************************************!*\
  !*** ./node_modules/to-words/dist/locales/en-GH.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Cedi',
                plural: 'Cedis',
                symbol: 'GH¢',
                fractionalUnit: {
                    name: 'Pesewa',
                    plural: 'Pesewas',
                    symbol: 'Gp',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 7759:
/*!*****************************************************!*\
  !*** ./node_modules/to-words/dist/locales/en-IN.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Rupee',
                plural: 'Rupees',
                symbol: '₹',
                fractionalUnit: {
                    name: 'Paisa',
                    plural: 'Paise',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 41649:
/*!*****************************************************!*\
  !*** ./node_modules/to-words/dist/locales/en-MM.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Kyat',
                plural: 'Kyats',
                symbol: 'K',
                fractionalUnit: {
                    name: 'Pya',
                    plural: 'Pyas',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 6879:
/*!*****************************************************!*\
  !*** ./node_modules/to-words/dist/locales/en-MU.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Rupee',
                plural: 'Rupees',
                symbol: 'Rs',
                fractionalUnit: {
                    name: 'Cent',
                    plural: 'Cents',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 52532:
/*!*****************************************************!*\
  !*** ./node_modules/to-words/dist/locales/en-NG.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Naira',
                plural: 'Naira',
                symbol: '₦',
                fractionalUnit: {
                    name: 'Kobo',
                    plural: 'Kobo',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 83060:
/*!*****************************************************!*\
  !*** ./node_modules/to-words/dist/locales/en-US.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Dollar',
                plural: 'Dollars',
                symbol: '$',
                fractionalUnit: {
                    name: 'Cent',
                    plural: 'Cents',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 90184:
/*!*****************************************************!*\
  !*** ./node_modules/to-words/dist/locales/fa-IR.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'تومان',
                plural: '',
                symbol: 'تومان',
                fractionalUnit: {
                    name: '',
                    plural: 'تومان',
                    symbol: '',
                },
            },
            texts: {
                and: 'و',
                minus: 'منفی',
                only: '',
                point: 'و',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'کوادریلیون' },
                { number: 1000000000000, value: 'تیلیارد' },
                { number: 1000000000, value: 'میلیارد' },
                { number: 1000000, value: 'میلیون' },
                { number: 1000, value: 'هزار' },
                { number: 900, value: 'نهصد' },
                { number: 800, value: 'هشتصد' },
                { number: 700, value: 'هفتصد' },
                { number: 600, value: 'ششصد' },
                { number: 500, value: 'پانصد' },
                { number: 400, value: 'چهارصد' },
                { number: 300, value: 'سیصد' },
                { number: 200, value: 'دویست' },
                { number: 100, value: 'صد' },
                { number: 90, value: 'نود' },
                { number: 80, value: 'هشتاد' },
                { number: 70, value: 'هفتاد' },
                { number: 60, value: 'شصت' },
                { number: 50, value: 'پنجاه' },
                { number: 40, value: 'چهل' },
                { number: 30, value: 'سی' },
                { number: 20, value: 'بیست' },
                { number: 19, value: 'نوزده' },
                { number: 18, value: 'هجده' },
                { number: 17, value: 'هفده' },
                { number: 16, value: 'شانزده' },
                { number: 15, value: 'پانزده' },
                { number: 14, value: 'چهارده' },
                { number: 13, value: 'سیزده' },
                { number: 12, value: 'دوازده' },
                { number: 11, value: 'یازده' },
                { number: 10, value: 'ده' },
                { number: 9, value: 'نه' },
                { number: 8, value: 'هشت' },
                { number: 7, value: 'هفت' },
                { number: 6, value: 'شش' },
                { number: 5, value: 'پنج' },
                { number: 4, value: 'چهار' },
                { number: 3, value: 'سه' },
                { number: 2, value: 'دو' },
                { number: 1, value: 'یک' },
                { number: 0, value: 'صفر' },
            ],
            namedLessThan1000: true,
            splitWord: 'و',
            ignoreZeroInDecimals: true,
            decimalLengthWordMapping: {
                1: 'دهم',
                2: 'صدم',
                3: 'هزارم',
                4: 'ده‌هزارم',
                5: 'صد‌هزارم',
                6: 'میلیونیوم',
                7: 'ده‌میلیونیوم',
                8: 'صد‌میلیونیوم',
                9: 'میلیاردیوم',
            },
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 61770:
/*!*****************************************************!*\
  !*** ./node_modules/to-words/dist/locales/fr-FR.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Euros',
                symbol: '€',
                fractionalUnit: {
                    name: 'Centime',
                    plural: 'Centimes',
                    symbol: 'Cts',
                },
            },
            texts: {
                and: 'Et',
                minus: 'Moins',
                only: '',
                point: 'Virgule',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Billiard' },
                { number: 1000000000000, value: 'Billion' },
                { number: 1000000000, value: 'Milliard' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Mille' },
                { number: 100, value: 'Cent' },
                { number: 99, value: 'Quatre-Vingt-Dix-Neuf' },
                { number: 98, value: 'Quatre-Vingt-Dix-Huit' },
                { number: 97, value: 'Quatre-Vingt-Dix-Sept' },
                { number: 96, value: 'Quatre-Vingt-Seize' },
                { number: 95, value: 'Quatre-Vingt-Quinze' },
                { number: 94, value: 'Quatre-Vingt-Quatorze' },
                { number: 93, value: 'Quatre-Vingt-Treize' },
                { number: 92, value: 'Quatre-Vingt-Douze' },
                { number: 91, value: 'Quatre-Vingt-Onze' },
                { number: 90, value: 'Quatre-Vingt-Dix' },
                { number: 89, value: 'Quatre-Vingt-Neuf' },
                { number: 88, value: 'Quatre-Vingt-Huit' },
                { number: 87, value: 'Quatre-Vingt-Sept' },
                { number: 86, value: 'Quatre-Vingt-Six' },
                { number: 85, value: 'Quatre-Vingt-Cinq' },
                { number: 84, value: 'Quatre-Vingt-Quatre' },
                { number: 83, value: 'Quatre-Vingt-Trois' },
                { number: 82, value: 'Quatre-Vingt-Deux' },
                { number: 81, value: 'Quatre-Vingt-Un' },
                { number: 80, value: 'Quatre-Vingt' },
                { number: 79, value: 'Soixante-Dix-Neuf' },
                { number: 78, value: 'Soixante-Dix-Huit' },
                { number: 77, value: 'Soixante-Dix-Sept' },
                { number: 76, value: 'Soixante-Seize' },
                { number: 75, value: 'Soixante-Quinze' },
                { number: 74, value: 'Soixante-Quatorze' },
                { number: 73, value: 'Soixante-Treize' },
                { number: 72, value: 'Soixante-Douze' },
                { number: 71, value: 'Soixante Et Onze' },
                { number: 70, value: 'Soixante-dix' },
                { number: 69, value: 'Soixante-Neuf' },
                { number: 68, value: 'Soixante-Huit' },
                { number: 67, value: 'Soixante-Sept' },
                { number: 66, value: 'Soixante-Six' },
                { number: 65, value: 'Soixante-Cinq' },
                { number: 64, value: 'Soixante-Quatre' },
                { number: 63, value: 'Soixante-Trois' },
                { number: 62, value: 'Soixante-Deux' },
                { number: 61, value: 'Soixante Et Un' },
                { number: 60, value: 'Soixante' },
                { number: 59, value: 'Cinquante-Neuf' },
                { number: 58, value: 'Cinquante-Huit' },
                { number: 57, value: 'Cinquante-Sept' },
                { number: 56, value: 'Cinquante-Six' },
                { number: 55, value: 'Cinquante-Cinq' },
                { number: 54, value: 'Cinquante-Quatre' },
                { number: 53, value: 'Cinquante-Trois' },
                { number: 52, value: 'Cinquante-Deux' },
                { number: 51, value: 'Cinquante Et Un' },
                { number: 50, value: 'Cinquante' },
                { number: 49, value: 'Quarante-Neuf' },
                { number: 48, value: 'Quarante-Huit' },
                { number: 47, value: 'Quarante-Sept' },
                { number: 46, value: 'Quarante-Six' },
                { number: 45, value: 'Quarante-Cinq' },
                { number: 44, value: 'Quarante-Quatre' },
                { number: 43, value: 'Quarante-Trois' },
                { number: 42, value: 'Quarante-Deux' },
                { number: 41, value: 'Quarante Et Un' },
                { number: 40, value: 'Quarante' },
                { number: 39, value: 'Trente-Neuf' },
                { number: 38, value: 'Trente-Huit' },
                { number: 37, value: 'Trente-Sept' },
                { number: 36, value: 'Trente-Six' },
                { number: 35, value: 'Trente-Cinq' },
                { number: 34, value: 'Trente-Quatre' },
                { number: 33, value: 'Trente-Trois' },
                { number: 32, value: 'Trente-Deux' },
                { number: 31, value: 'Trente Et Un' },
                { number: 30, value: 'Trente' },
                { number: 29, value: 'Vingt-Neuf' },
                { number: 28, value: 'Vingt-Huit' },
                { number: 27, value: 'Vingt-Sept' },
                { number: 26, value: 'Vingt-Six' },
                { number: 25, value: 'Vingt-Cinq' },
                { number: 24, value: 'Vingt-Quatre' },
                { number: 23, value: 'Vingt-Trois' },
                { number: 22, value: 'Vingt-Deux' },
                { number: 21, value: 'Vingt Et Un' },
                { number: 20, value: 'Vingt' },
                { number: 19, value: 'Dix-Neuf' },
                { number: 18, value: 'Dix-Huit' },
                { number: 17, value: 'Dix-Sept' },
                { number: 16, value: 'Seize' },
                { number: 15, value: 'Quinze' },
                { number: 14, value: 'Quatorze' },
                { number: 13, value: 'Treize' },
                { number: 12, value: 'Douze' },
                { number: 11, value: 'Onze' },
                { number: 10, value: 'Dix' },
                { number: 9, value: 'Neuf' },
                { number: 8, value: 'Huit' },
                { number: 7, value: 'Sept' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Cinq' },
                { number: 4, value: 'Quatre' },
                { number: 3, value: 'Trois' },
                { number: 2, value: 'Deux' },
                { number: 1, value: 'Un' },
                { number: 0, value: 'Zéro' },
            ],
            ignoreOneForWords: ['Cent', 'Mille'],
            pluralMark: 's',
            pluralWords: ['Billiard', 'Billion', 'Milliard', 'Million'],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 46857:
/*!*****************************************************!*\
  !*** ./node_modules/to-words/dist/locales/gu-IN.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'રૂપિયો',
                plural: 'રૂપિયા',
                symbol: '₹',
                fractionalUnit: {
                    name: 'પૈસા',
                    plural: 'પૈસા',
                    symbol: '',
                },
            },
            texts: {
                and: 'અને',
                minus: 'ઋણ',
                // only: 'માત્ર',
                only: '',
                point: 'દશાંશ',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'કરોડ' },
                { number: 100000, value: 'લાખ' },
                { number: 1000, value: 'હજાર' },
                { number: 100, value: 'સો' },
                { number: 99, value: 'નવ્વાણું' },
                { number: 98, value: 'અઠ્ઠાણું' },
                { number: 97, value: 'સત્તાણું' },
                { number: 96, value: 'છન્નું' },
                { number: 95, value: 'પંચાણું' },
                { number: 94, value: 'ચોરાણું' },
                { number: 93, value: 'ત્રાણું' },
                { number: 92, value: 'બાણું' },
                { number: 91, value: 'એકાણું' },
                { number: 90, value: 'નેવું' },
                { number: 89, value: 'નેવ્યાસી' },
                { number: 88, value: 'ઈઠ્યાસી' },
                { number: 87, value: 'સિત્યાસી' },
                { number: 86, value: 'છ્યાસી' },
                { number: 85, value: 'પંચ્યાસી' },
                { number: 84, value: 'ચોર્યાસી' },
                { number: 83, value: 'ત્યાસી' },
                { number: 82, value: 'બ્યાસી' },
                { number: 81, value: 'એક્યાસી' },
                { number: 80, value: 'એંસી' },
                { number: 79, value: 'ઓગણાએંસી' },
                { number: 78, value: 'ઇઠ્યોતેર' },
                { number: 77, value: 'સિત્યોતેર' },
                { number: 76, value: 'છોતેર' },
                { number: 75, value: 'પંચોતેર' },
                { number: 74, value: 'ચુમોતેર' },
                { number: 73, value: 'તોતેર' },
                { number: 72, value: 'બોતેર' },
                { number: 71, value: 'એકોતેર' },
                { number: 70, value: 'સિત્તેર' },
                { number: 69, value: 'ઓગણોસિત્તેર' },
                { number: 68, value: 'અડસઠ' },
                { number: 67, value: 'સડસઠ' },
                { number: 66, value: 'છાસઠ' },
                { number: 65, value: 'પાંસઠ' },
                { number: 64, value: 'ચોસઠ' },
                { number: 63, value: 'ત્રેસઠ' },
                { number: 62, value: 'બાસઠ' },
                { number: 61, value: 'એકસઠ' },
                { number: 60, value: 'સાઈઠ' },
                { number: 59, value: 'ઓગણસાઠ' },
                { number: 58, value: 'અઠ્ઠાવન' },
                { number: 57, value: 'સત્તાવન' },
                { number: 56, value: 'છપ્પન' },
                { number: 55, value: 'પંચાવન' },
                { number: 54, value: 'ચોપન' },
                { number: 53, value: 'ત્રેપન' },
                { number: 52, value: 'બાવન' },
                { number: 51, value: 'એકાવન' },
                { number: 50, value: 'પચાસ' },
                { number: 49, value: 'ઓગણપચાસ' },
                { number: 48, value: 'સુડતાલીસ' },
                { number: 47, value: 'સુડતાલીસ' },
                { number: 46, value: 'છેતાલીસ' },
                { number: 45, value: 'પિસ્તાલીસ' },
                { number: 44, value: 'ચુંમાલીસ' },
                { number: 43, value: 'ત્રેતાલીસ' },
                { number: 42, value: 'એકતાલીસ' },
                { number: 41, value: 'એકતાલીસ' },
                { number: 40, value: 'ચાલીસ' },
                { number: 39, value: 'ઓગણચાલીસ' },
                { number: 38, value: 'આડત્રીસ' },
                { number: 37, value: 'સાડત્રીસ' },
                { number: 36, value: 'છત્રીસ' },
                { number: 35, value: 'પાંત્રીસ' },
                { number: 34, value: 'ચોત્રીસ' },
                { number: 33, value: 'તેત્રીસ' },
                { number: 32, value: 'બત્રીસ' },
                { number: 31, value: 'એકત્રીસ' },
                { number: 30, value: 'ત્રીસ' },
                { number: 29, value: 'ઓગણત્રીસ' },
                { number: 28, value: 'અઠ્ઠાવીસ' },
                { number: 27, value: 'સત્તાવીસ' },
                { number: 26, value: 'છવીસ' },
                { number: 25, value: 'પચ્ચીસ' },
                { number: 24, value: 'ચોવીસ' },
                { number: 23, value: 'તેવીસ' },
                { number: 22, value: 'બાવીસ' },
                { number: 21, value: 'એકવીસ' },
                { number: 20, value: 'વીસ' },
                { number: 19, value: 'ઓગણિસ' },
                { number: 18, value: 'અઢાર' },
                { number: 17, value: 'સત્તર' },
                { number: 16, value: 'સોળ' },
                { number: 15, value: 'પંદર' },
                { number: 14, value: 'ચૌદ' },
                { number: 13, value: 'તેર' },
                { number: 12, value: 'બાર' },
                { number: 11, value: 'અગિયાર' },
                { number: 10, value: 'દસ' },
                { number: 9, value: 'નવ' },
                { number: 8, value: 'આઠ' },
                { number: 7, value: 'સાત' },
                { number: 6, value: 'છ' },
                { number: 5, value: 'પાંચ' },
                { number: 4, value: 'ચાર' },
                { number: 3, value: 'ત્રણ' },
                { number: 2, value: 'બે' },
                { number: 1, value: 'એક' },
                { number: 0, value: 'શૂન્ય' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 62306:
/*!*****************************************************!*\
  !*** ./node_modules/to-words/dist/locales/hi-IN.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'रुपया',
                plural: 'रुपये',
                symbol: '₹',
                fractionalUnit: {
                    name: 'पैसा',
                    plural: 'पैसे',
                    symbol: '',
                },
            },
            texts: {
                and: 'और',
                minus: 'ऋण',
                only: '',
                point: 'दशांश',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'करोड़' },
                { number: 100000, value: 'लाख' },
                { number: 1000, value: 'हज़ार' },
                { number: 100, value: 'सौ' },
                { number: 99, value: 'निन्यानवे' },
                { number: 98, value: 'अट्ठानवे' },
                { number: 97, value: 'सत्तानवे' },
                { number: 96, value: 'छियानवे' },
                { number: 95, value: 'पचानवे' },
                { number: 94, value: 'चौरानवे' },
                { number: 93, value: 'तिरानवे' },
                { number: 92, value: 'बानवे' },
                { number: 91, value: 'इक्यानबे' },
                { number: 90, value: 'नब्बे' },
                { number: 89, value: 'नवासी' },
                { number: 88, value: 'अठासी' },
                { number: 87, value: 'सतासी' },
                { number: 86, value: 'छियासी' },
                { number: 85, value: 'पचासी' },
                { number: 84, value: 'चौरासी' },
                { number: 83, value: 'तिरासी' },
                { number: 82, value: 'बयासी' },
                { number: 81, value: 'इक्यासी' },
                { number: 80, value: 'अस्सी' },
                { number: 79, value: 'उनासी' },
                { number: 78, value: 'अठहत्तर' },
                { number: 77, value: 'सतहत्तर' },
                { number: 76, value: 'छिहत्तर' },
                { number: 75, value: 'पचहत्तर' },
                { number: 74, value: 'चौहत्तर' },
                { number: 73, value: 'तिहत्तर' },
                { number: 72, value: 'बहत्तर' },
                { number: 71, value: 'इकहत्तर' },
                { number: 70, value: 'सत्तर' },
                { number: 69, value: 'उनहत्तर' },
                { number: 68, value: 'अड़सठ' },
                { number: 67, value: 'सड़सठ' },
                { number: 66, value: 'छियासठ' },
                { number: 65, value: 'पैंसठ' },
                { number: 64, value: 'चौंसठ' },
                { number: 63, value: 'तिरसठ' },
                { number: 62, value: 'बासठ' },
                { number: 61, value: 'इकसठ' },
                { number: 60, value: 'साठ' },
                { number: 59, value: 'उनसठ' },
                { number: 58, value: 'अट्ठावन' },
                { number: 57, value: 'सत्तावन' },
                { number: 56, value: 'छप्पन' },
                { number: 55, value: 'पचपन' },
                { number: 54, value: 'चौबन' },
                { number: 53, value: 'तिरेपन' },
                { number: 52, value: 'बावन' },
                { number: 51, value: 'इक्याबन' },
                { number: 50, value: 'पचास' },
                { number: 49, value: 'उनचास' },
                { number: 48, value: 'अड़तालीस' },
                { number: 47, value: 'सैंतालीस' },
                { number: 46, value: 'छियालीस' },
                { number: 45, value: 'पैंतालीस' },
                { number: 44, value: 'चौंतालीस' },
                { number: 43, value: 'तैंतालीस' },
                { number: 42, value: 'बयालीस' },
                { number: 41, value: 'इकतालीस' },
                { number: 40, value: 'चालीस' },
                { number: 39, value: 'उनतालीस' },
                { number: 38, value: 'अड़तीस' },
                { number: 37, value: 'सैंतीस' },
                { number: 36, value: 'छत्तीस' },
                { number: 35, value: 'पैंतीस' },
                { number: 34, value: 'चौंतीस' },
                { number: 33, value: 'तैंतीस' },
                { number: 32, value: 'बत्तीस' },
                { number: 31, value: 'इकतीस' },
                { number: 30, value: 'तीस' },
                { number: 29, value: 'उनतीस' },
                { number: 28, value: 'अट्ठाईस' },
                { number: 27, value: 'सत्ताईस' },
                { number: 26, value: 'छब्बीस' },
                { number: 25, value: 'पच्चीस' },
                { number: 24, value: 'चौबीस' },
                { number: 23, value: 'तेईस' },
                { number: 22, value: 'बाईस' },
                { number: 21, value: 'इक्कीस' },
                { number: 20, value: 'बीस' },
                { number: 19, value: 'उन्नीस' },
                { number: 18, value: 'अठारह' },
                { number: 17, value: 'सत्रह' },
                { number: 16, value: 'सोलह' },
                { number: 15, value: 'पंद्रह' },
                { number: 14, value: 'चौदह' },
                { number: 13, value: 'तेरह' },
                { number: 12, value: 'बारह' },
                { number: 11, value: 'ग्यारह' },
                { number: 10, value: 'दस' },
                { number: 9, value: 'नौ' },
                { number: 8, value: 'आठ' },
                { number: 7, value: 'सात' },
                { number: 6, value: 'छह' },
                { number: 5, value: 'पांच' },
                { number: 4, value: 'चार' },
                { number: 3, value: 'तीन' },
                { number: 2, value: 'दो' },
                { number: 1, value: 'एक' },
                { number: 0, value: 'शून्य' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 80475:
/*!*****************************************************!*\
  !*** ./node_modules/to-words/dist/locales/mr-IN.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'रुपया',
                plural: 'रुपये',
                symbol: '₹',
                fractionalUnit: {
                    name: 'पैसा',
                    plural: 'पैसे',
                    symbol: '',
                },
            },
            texts: {
                and: 'आणि',
                minus: 'वजा',
                only: '',
                point: 'पूर्णांक',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'कोटी' },
                { number: 100000, value: 'लाख' },
                { number: 1000, value: 'हजार' },
                { number: 900, value: 'नऊशे' },
                { number: 800, value: 'आठशे' },
                { number: 700, value: 'सातशे' },
                { number: 600, value: 'सहाशे' },
                { number: 500, value: 'पाचशे' },
                { number: 400, value: 'चारशे' },
                { number: 300, value: 'तीनशे' },
                { number: 200, value: 'दोनशे' },
                { number: 100, value: 'एकशे' },
                { number: 99, value: 'नव्व्याण्णव' },
                { number: 98, value: 'अठ्ठ्याण्णव' },
                { number: 97, value: 'सत्त्याण्णव' },
                { number: 96, value: 'शहाण्णव' },
                { number: 95, value: 'पंच्याण्णव' },
                { number: 94, value: 'चौऱ्याण्णव' },
                { number: 93, value: 'त्र्याण्णव' },
                { number: 92, value: 'ब्याण्णव' },
                { number: 91, value: 'एक्क्याण्णव' },
                { number: 90, value: 'नव्वद' },
                { number: 89, value: 'एकोणनव्वद' },
                { number: 88, value: 'अठ्ठ्याऐंशी' },
                { number: 87, value: 'सत्त्याऐंशी' },
                { number: 86, value: 'शहाऐंशी' },
                { number: 85, value: 'पंच्याऐंशी' },
                { number: 84, value: 'चौऱ्याऐंशी' },
                { number: 83, value: 'त्र्याऐंशी' },
                { number: 82, value: 'ब्याऐंशी' },
                { number: 81, value: 'एक्क्याऐंशी' },
                { number: 80, value: 'ऐंशी' },
                { number: 79, value: 'एकोणऐंशी' },
                { number: 78, value: 'अठ्ठ्याहत्तर' },
                { number: 77, value: 'सत्याहत्तर' },
                { number: 76, value: 'शहात्तर' },
                { number: 75, value: 'पंच्याहत्तर' },
                { number: 74, value: 'चौर्‍याहत्तर' },
                { number: 73, value: 'त्र्याहत्तर' },
                { number: 72, value: 'बाहत्तर' },
                { number: 71, value: 'एक्काहत्तर' },
                { number: 70, value: 'सत्तर' },
                { number: 69, value: 'एकोणसत्तर' },
                { number: 68, value: 'अडुसष्ठ' },
                { number: 67, value: 'सदुसष्ठ' },
                { number: 66, value: 'सहासष्ठ' },
                { number: 65, value: 'पासष्ठ' },
                { number: 64, value: 'चौसष्ठ' },
                { number: 63, value: 'त्रेसष्ठ' },
                { number: 62, value: 'बासष्ठ' },
                { number: 61, value: 'एकसष्ठ' },
                { number: 60, value: 'साठ' },
                { number: 59, value: 'एकोणसाठ' },
                { number: 58, value: 'अठ्ठावन्न' },
                { number: 57, value: 'सत्तावन्न' },
                { number: 56, value: 'छप्पन्न' },
                { number: 55, value: 'पंचावन्न' },
                { number: 54, value: 'चोपन्न' },
                { number: 53, value: 'त्रेपन्न' },
                { number: 52, value: 'बावन्न' },
                { number: 51, value: 'एक्कावन्न' },
                { number: 50, value: 'पन्नास' },
                { number: 49, value: 'एकोणपन्नास' },
                { number: 48, value: 'अठ्ठेचाळीस' },
                { number: 47, value: 'सत्तेचाळीस' },
                { number: 46, value: 'सेहेचाळीस' },
                { number: 45, value: 'पंचेचाळीस' },
                { number: 44, value: 'चव्वेचाळीस' },
                { number: 43, value: 'त्रेचाळीस' },
                { number: 42, value: 'बेचाळीस' },
                { number: 41, value: 'एक्केचाळीस' },
                { number: 40, value: 'चाळीस' },
                { number: 39, value: 'एकोणचाळीस' },
                { number: 38, value: 'अडतीस' },
                { number: 37, value: 'सदतीस' },
                { number: 36, value: 'छत्तीस' },
                { number: 35, value: 'पस्तीस' },
                { number: 34, value: 'चौतीस' },
                { number: 33, value: 'तेहेतीस' },
                { number: 32, value: 'बत्तीस' },
                { number: 31, value: 'एकतीस' },
                { number: 30, value: 'तीस' },
                { number: 29, value: 'एकोणतीस' },
                { number: 28, value: 'अठ्ठावीस' },
                { number: 27, value: 'सत्तावीस' },
                { number: 26, value: 'सव्वीस' },
                { number: 25, value: 'पंचवीस' },
                { number: 24, value: 'चोवीस' },
                { number: 23, value: 'तेवीस' },
                { number: 22, value: 'बावीस' },
                { number: 21, value: 'एकवीस' },
                { number: 20, value: 'वीस' },
                { number: 19, value: 'एकोणीस' },
                { number: 18, value: 'अठरा' },
                { number: 17, value: 'सतरा' },
                { number: 16, value: 'सोळा' },
                { number: 15, value: 'पंधरा' },
                { number: 14, value: 'चौदा' },
                { number: 13, value: 'तेरा' },
                { number: 12, value: 'बारा' },
                { number: 11, value: 'अकरा' },
                { number: 10, value: 'दहा' },
                { number: 9, value: 'नऊ' },
                { number: 8, value: 'आठ' },
                { number: 7, value: 'सात' },
                { number: 6, value: 'सहा' },
                { number: 5, value: 'पाच' },
                { number: 4, value: 'चार' },
                { number: 3, value: 'तीन' },
                { number: 2, value: 'दोन' },
                { number: 1, value: 'एक' },
                { number: 0, value: 'शून्य' },
            ],
            namedLessThan1000: true,
        };
    }
}
exports["default"] = Locale;


/***/ }),

/***/ 48799:
/*!*****************************************************!*\
  !*** ./node_modules/to-words/dist/locales/tr-TR.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'lira',
                plural: '',
                symbol: '₺',
                fractionalUnit: {
                    name: '',
                    plural: 'lira',
                    symbol: '',
                },
            },
            texts: {
                and: 'virgül',
                minus: 'eksi',
                only: '',
                point: 'virgül',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'katrilyon' },
                { number: 1000000000000, value: 'trilyon' },
                { number: 1000000000, value: 'milyar' },
                { number: 1000000, value: 'milyon' },
                { number: 1000, value: 'bin' },
                { number: 900, value: 'dokuz yüz' },
                { number: 800, value: 'sekiz yüz' },
                { number: 700, value: 'yedi yüz' },
                { number: 600, value: 'altı yüz' },
                { number: 500, value: 'beş yüz' },
                { number: 400, value: 'dört yüz' },
                { number: 300, value: 'üç yüz' },
                { number: 200, value: 'iki yüz' },
                { number: 100, value: 'yüz' },
                { number: 90, value: 'doksan' },
                { number: 80, value: 'seksen' },
                { number: 70, value: 'yetmiş' },
                { number: 60, value: 'altmış' },
                { number: 50, value: 'elli' },
                { number: 40, value: 'kırk' },
                { number: 30, value: 'otuz' },
                { number: 20, value: 'yirmi' },
                { number: 19, value: 'on dokuz' },
                { number: 18, value: 'on sekiz' },
                { number: 17, value: 'on yedi' },
                { number: 16, value: 'on altı' },
                { number: 15, value: 'on beş' },
                { number: 14, value: 'on dört' },
                { number: 13, value: 'on üç' },
                { number: 12, value: 'on iki' },
                { number: 11, value: 'on bir' },
                { number: 10, value: 'on' },
                { number: 9, value: 'dokuz' },
                { number: 8, value: 'sekiz' },
                { number: 7, value: 'yedi' },
                { number: 6, value: 'altı' },
                { number: 5, value: 'beş' },
                { number: 4, value: 'dört' },
                { number: 3, value: 'üç' },
                { number: 2, value: 'iki' },
                { number: 1, value: 'bir' },
                { number: 0, value: 'sıfır' },
            ],
            namedLessThan1000: true,
            ignoreZeroInDecimals: true,
            decimalLengthWordMapping: {
                1: 'onuncu',
                2: 'yüzüncü',
                3: 'bininci',
                4: 'on bininci',
                5: 'yüz bininci',
                6: 'on milyonuncu',
                7: 'milyonuncu',
                8: 'yüz milyonuncu',
            },
        };
    }
}
exports["default"] = Locale;


/***/ })

}]);
//# sourceMappingURL=src_app_blank_blank_module_ts.js.map