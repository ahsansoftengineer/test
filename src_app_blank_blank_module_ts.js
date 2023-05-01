"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["src_app_blank_blank_module_ts"],{

/***/ 89811:
/*!**************************************************************************!*\
  !*** ./src/app/blank/ack-material-color/ack-material-color.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AckMaterialColorComponent": () => (/* binding */ AckMaterialColorComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/http.service */ 4584);
/* harmony import */ var _service_form_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/form-helper.service */ 64907);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 52954);







function AckMaterialColorComponent_div_0_tr_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const receipt_data_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.donation_type == null ? null : receipt_data_r2.donation_type.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.donation_sub_type == null ? null : receipt_data_r2.donation_sub_type.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.purpose == null ? null : receipt_data_r2.purpose.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.material_item == null ? null : receipt_data_r2.material_item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((receipt_data_r2 == null ? null : receipt_data_r2.weight) + (receipt_data_r2 == null ? null : receipt_data_r2.unit == null ? null : receipt_data_r2.unit.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.branch == null ? null : receipt_data_r2.branch.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.additionalInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.majlis == null ? null : receipt_data_r2.majlis.title);
} }
function AckMaterialColorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Printed Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Printed By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "www.dawateislami.net");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Acknowledgment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "canvas", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "canvas", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "User's Information:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "strong", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "Receipt No: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "strong", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](115, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "caption", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, " Location: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, " Cabina: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "Donation Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "Sub Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "Material Desc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, "Add. Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](150, "Majlis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](152, AckMaterialColorComponent_div_0_tr_152_Template, 21, 10, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](153, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "tbody", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "tbody", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](164, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, "Received By: _________________________");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "Donor Signature: ______________________");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "table", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, "\"Donations made to Dawat-e-Islami is entitled to the tax credit u/s 61 of the Income Tax Ordinance 2001\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](185, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "table", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, "Alami Madani Markaz, Faizan-e-Madinah Mahallah Saudagran, Purani Sabzi Mandi, Bab-ul-Madinah, Karachi, Pakistan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](195, "Phone: +92 21 -34921389-91, UAN: 111 -25-26-92, E-Mail: donations@dawateislami.net, http://www.dawateislami.net/donation/donate.do ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](197, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.currDateandTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.printBy, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.logo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.top_image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("User: ", ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.acknowledgement_by, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Time: ", ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.datetime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("C.P.: ", ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.ou, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" User ID: ", ctx_r0.printData == null ? null : ctx_r0.printData.user_info == null ? null : ctx_r0.printData.user_info.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("User Address: ", ctx_r0.printData == null ? null : ctx_r0.printData.user_info == null ? null : ctx_r0.printData.user_info.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("User Number: ", ctx_r0.printData == null ? null : ctx_r0.printData.user_info == null ? null : ctx_r0.printData.user_info.mobile_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("User Email: ", ctx_r0.printData == null ? null : ctx_r0.printData.user_info == null ? null : ctx_r0.printData.user_info.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("User Batch No: ", ctx_r0.printData == null ? null : ctx_r0.printData.user_info == null ? null : ctx_r0.printData.user_info.batch_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.ack_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](115, 19, ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.datetime, "yyyy-MM-dd"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.division == null ? null : ctx_r0.printData.basic_info.division.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.kabina == null ? null : ctx_r0.printData.basic_info.kabina.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.printData.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.warning_image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.footer_image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
class AckMaterialColorComponent {
    constructor(http, helper, activeRoute) {
        this.http = http;
        this.helper = helper;
        this.activeRoute = activeRoute;
        this.printData = {};
        this.batchName = '';
        this.printBy = '';
    }
    ngOnInit() {
        this.currDateandTime = this.helper._getCurrentdatenadTime();
        this.batchName = this.printBy = this.helper._getuserPermission()?.profile?.name;
        this.slipId = this.activeRoute.snapshot.paramMap.get('slipId');
        this.slip_type = this.activeRoute.snapshot.paramMap.get('rec_t');
        this.getSystems(this.slipId, this.slip_type);
    }
    getSystems(slipId, type) {
        this.http.get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TRANSACTION,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.PRINT_ACK,
            query: {
                receipt_type: type,
                ack_no: slipId,
            }
        })
            .subscribe((res) => {
            this.printData = res.data.records;
        });
    }
}
AckMaterialColorComponent.ɵfac = function AckMaterialColorComponent_Factory(t) { return new (t || AckMaterialColorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_2__.HTTPService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_form_helper_service__WEBPACK_IMPORTED_MODULE_3__.FormHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
AckMaterialColorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AckMaterialColorComponent, selectors: [["di-component-name-here"]], decls: 1, vars: 1, consts: [["class", "recipt-main", "style", "margin: 0px auto; padding: 10px; background: white; width: 100%;", 4, "ngIf"], [1, "recipt-main", 2, "margin", "0px auto", "padding", "10px", "background", "white", "width", "100%"], ["id", "wrapper", "width", "630", "cellpadding", "0", "cellspacing", "0", "border", "0", "background", "./receipt_color_files/testing.png", 1, "Dont_Rept", "class_res", 2, "width", "82%", "background", "white", "padding", "10px", "height", "100vh"], ["height", "5"], ["cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Header_Doner_left"], ["colspan", "2", 2, "font-size", "12px", "padding-left", "25px", "padding-top", "40px", "color", "black"], ["width", "110", "align", "center", 1, "same_td_logos"], ["width", "100", 2, "margin-bottom", "15px", 3, "src"], ["align", "center", "width", "400", 1, "same_td_logos", "td_img_align"], ["cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Header_Doner_center"], ["align", "center"], ["width", "200", 3, "src"], ["href", "http://localhost/development/donation-prod/Personnel/print_email_receipt/receipt:U1VQRVJBRE1JTjIxLTI=/receiptType:ReceiptDetail/print:1#"], ["align", "center", "valign", "top", "width", "130", 1, "same_td_logos"], ["cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Header_Doner_right"], [1, "text-aling-center"], ["width", "625", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Donor_Information_left"], [2, "float", "right", "margin-bottom", "-88px"], ["id", "container"], ["width", "100", "height", "100"], ["width", "360", "cellpadding", "0", "cellspacing", "0", "border", "0"], ["align", "left", 1, "text-aling-left"], ["align", "left"], [2, "font-size", "11px"], [2, "display", "block"], [2, "text-align", "center"], ["_ngcontent-edi-c142", "", "src", "https://www.ginifab.com/feeds/qr_code/img/qr_code_scanner.jpg", 2, "width", "30%"], ["width", "295", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Donor_Information_center", 2, "margin-right", "100px"], ["align", "right", "valign", "top", "width", "200"], ["cellpadding", "0", "cellspacing", "0", "border", "0"], ["align", "center", 2, "margin-left", "-100px"], [2, "margin-left", "44px", "margin-top", "4px"], [2, "font-size", "12px"], [2, "margin-left", "46px"], [1, "Location", "margin_top_res", "ctable", 2, "margin-bottom", "0", "padding-bottom", "0"], [2, "margin-bottom", "0"], [2, "margin-right", "0px !important", "margin-left", "-13px"], [2, "color", "black"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "table_main", 2, "width", "95%"], [1, "donation_type"], ["width", "", 2, "color", "#000"], ["width", ""], ["class", "all_purpose", 4, "ngFor", "ngForOf"], ["type", "hidden", "id", "text", "value", "https://donations.dawateislami.info/result/detail/f1cb5e42072745db5b1bc392eac9b5e9f7c271ac"], ["width", "625", "cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Header_Doner_left", "outer_table"], [1, "inner_main_table"], ["width", "300", "valign", "top", 1, "width_fourHundred", 2, "margin-left", "100px"], ["cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Donor_Signature", 2, "/* margin", "0px 0px 10px 80px", "*/width", "100%"], [2, "width", "auto", "text-align", "right"], ["align", "left", 2, "text-align", "revert"], ["width", "350", 2, "margin-right", "20px", 3, "src"], ["align", "left", 2, "text-align", "right"], [2, "text-align", "right", "margin-right", "26px"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "border", "0"], [1, "Footer_main"], [1, "img_center_res", 2, "text-align", "center"], [2, "height", "40px", "width", "625px", 3, "src"], ["height", "50"], [1, "all_purpose"]], template: function AckMaterialColorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AckMaterialColorComponent_div_0_Template, 198, 22, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.printData !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 0.5em;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n\tfont-size: 100%;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n\tfont-family: 'Gill Sans', 'lucida grande', helvetica, arial, sans-serif;\r\n\tfont-size: 190%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] { \r\n\tfont-family: 'Gill Sans', 'lucida grande', helvetica, arial, sans-serif;\r\n\tfont-size: 165%;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n\tcolor: #993;\r\n\tfont-weight: normal;\r\n}\r\n\r\n@media print {}\r\n\r\n@page {\r\n  size: auto;\r\n  margin: 0;\r\n}\r\n\r\n.Header_Doner_left[_ngcontent-%COMP%], .Header_Doner_center[_ngcontent-%COMP%], .Header_Doner_right[_ngcontent-%COMP%], .Donor_Information_left[_ngcontent-%COMP%]{\r\n\tvertical-align: top;\r\n}\r\n\r\n.Header_Doner_left[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #58b2ca;\r\n  margin: 0 0 5px;\r\n  padding: 0 0 5px;\r\n  width: 100%;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%] {\r\n  display: unset;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .Header_Doner_center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\tcolor: #00b050;\r\n\tdisplay: block;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\ttext-align: center;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  margin: 0 0 10px 0;\r\n  padding: 0;\r\n  text-decoration: underline;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  margin: 0;\r\n  padding: 0;\r\n  letter-spacing: 6px;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%] {\r\n\ttext-align: left;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .Donor_Information_center[_ngcontent-%COMP%], .Donor_Information_left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .Donor_Information_center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\tcolor: #000;\r\n    display: block;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n\tpadding: 0;\r\n\ttext-align: left;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  margin: 2px 0;\r\n}\r\n\r\n.Donor_Information_center[_ngcontent-%COMP%], .Donor_Information_center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\tfont-weight: normal;\r\n\tfont-size: 10px;\r\n    margin: 0 11px 0 0;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 9px;\r\n  margin: 0 0 0 18px;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\tcolor: #4381ea;\r\n\tdisplay: block;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tfont-size: 14px;\r\n\tmargin: 0 0 4px 18px;\r\n}\r\n\r\n.table_main[_ngcontent-%COMP%] {\r\n  border: 1px solid #58b2ca;\r\n  border-radius: 4px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  margin: 0 auto 10px;\r\n}\r\n\r\n.Location[_ngcontent-%COMP%] {\r\n  margin: 8px 0 0;\r\n}\r\n\r\n.Location[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 16px;\r\n  padding: 5px;\r\n  text-align: left;\r\n  width: 46%;\r\n  margin-right: 40px;\r\n  margin-left: -20px;\r\n  \r\n}\r\n\r\n.Location[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 12px;\r\n}\r\n\r\ntr.donation_type[_ngcontent-%COMP%] {\r\n  background: none repeat scroll 0 0 #FFF;\r\n  border-radius: 4px;\r\n  color: #000;\r\n  height: 35px;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n}\r\n\r\ntr.all_purpose[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n}\r\n\r\n.all_purpose[_ngcontent-%COMP%] > th[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #000;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    padding: 1px;\r\n}\r\n\r\n.Footer_main[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.Footer_main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 9px;\r\n  margin: 5px 0 5px 0;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.Dont_Rept[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.Dona_Wajibah[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  height: 19px;\r\n  margin: 0 0 3px 2px;\r\n  padding: 2px;\r\n  vertical-align: middle;\r\n  font-weight: bold;\r\n}\r\n\r\n.Donor_Signature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  margin: 12px 0;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.donation_type[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-right: 1px solid #000;\r\n  font-size: 15px;\r\n  text-align: center;\r\n  padding: 1px;\r\n}\r\n\r\n.Dona_Wajibah[_ngcontent-%COMP%] {\r\n  margin: 0 0 0 20px;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 900;\r\n}\r\n\r\n@media screen and (max-device-width:767px), screen and (max-width:767px) {\r\n  .class_res[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    width: 100%;\r\n  }\r\n\r\n  .same_td_logos[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n  }\r\n\r\n  .text-aling-center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .text-aling-left[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n\r\n  .margin_top_res[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n\r\n  }\r\n\r\n  .width_sevenHundred[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n\r\n  .width_fourHundred[_ngcontent-%COMP%] {\r\n    width: 550px;\r\n  }\r\n\r\n  .img_center_res[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  td[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  th[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  .col_res_width[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n  }\r\n\r\n  .Header_Doner_left[_ngcontent-%COMP%] {\r\n\r\n    padding: 40px 0px;\r\n  }\r\n\r\n  .Donor_Information_left[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n  }\r\n}\r\n\r\n.td_img_align[_ngcontent-%COMP%]{\r\n\tpadding-left: 50px;\r\n}\r\n\r\n.ctable[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin: 10px 0px 10px 40px;\r\n}\r\n\r\n\r\n\r\n.recipt-main[_ngcontent-%COMP%]   .all_purpose[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #000 !important;\r\n\tcolor: #000 !important; \r\n}\r\n\r\n.no-border[_ngcontent-%COMP%] {\r\n  border-bottom: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWNvbG9yLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsdUVBQXVFO0NBQ3ZFLGVBQWU7QUFDaEI7O0FBRUEsS0FBSyxrQkFBa0I7Q0FDdEIsdUVBQXVFO0NBQ3ZFLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCOztBQUdBLGNBQWM7O0FBRWQ7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBOzs7O0NBSUMsbUJBQW1CO0FBQ3BCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7O0NBRUMsY0FBYztDQUNkLGNBQWM7Q0FDZCx5Q0FBeUM7Q0FDekMsa0JBQWtCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBOzs7O0NBSUMsV0FBVztJQUNSLGNBQWM7SUFDZCx5Q0FBeUM7Q0FDNUMsVUFBVTtDQUNWLGdCQUFnQjtBQUNqQjs7QUFHQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBOztDQUVDLG1CQUFtQjtDQUNuQixlQUFlO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUdBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFHQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2QseUNBQXlDO0NBQ3pDLGVBQWU7Q0FDZixvQkFBb0I7QUFDckI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVix5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtDQUNDLHNCQUFzQjtJQUNuQix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFJQTtFQUVFO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBR0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiwwQkFBMEI7QUFDM0I7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJLGlDQUFpQztDQUNwQyxzQkFBc0I7QUFDdkI7O0FBR0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBQ0EsbUJBQW1CIiwiZmlsZSI6InByaW50LWNvbG9yLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBoMiwgaDMsIGg0IHtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG5oMiB7XHJcblx0Zm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnbHVjaWRhIGdyYW5kZScsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxOTAlO1xyXG59XHJcblxyXG5oMyB7IC8qY29sb3I6ICMyYzY4Nzc7Ki9cclxuXHRmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdsdWNpZGEgZ3JhbmRlJywgaGVsdmV0aWNhLCBhcmlhbCwgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE2NSU7XHJcbn1cclxuXHJcbmg0IHtcclxuXHRjb2xvcjogIzk5MztcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHByaW50IHt9XHJcblxyXG5AcGFnZSB7XHJcbiAgc2l6ZTogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfbGVmdCxcclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIsXHJcbi5IZWFkZXJfRG9uZXJfcmlnaHQsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9sZWZ0e1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfbGVmdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1OGIyY2E7XHJcbiAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gIHBhZGRpbmc6IDAgMCA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfY2VudGVyIHtcclxuICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9yaWdodCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIgYSxcclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIgaDEge1xyXG5cdGNvbG9yOiAjMDBiMDUwO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIgYSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uSGVhZGVyX0RvbmVyX2NlbnRlciBoMSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiA2cHg7XHJcbn1cclxuXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uSGVhZGVyX0RvbmVyX3JpZ2h0IHAsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9jZW50ZXIsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9sZWZ0IHAsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9jZW50ZXIgcHtcclxuXHRjb2xvcjogIzAwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0cGFkZGluZzogMDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLkhlYWRlcl9Eb25lcl9yaWdodCBwIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAycHggMDtcclxufVxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2NlbnRlcixcclxuLkRvbm9yX0luZm9ybWF0aW9uX2NlbnRlciBwe1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDExcHggMCAwO1xyXG59XHJcblxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQgcCB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgbWFyZ2luOiAwIDAgMCAxOHB4O1xyXG59XHJcblxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQgaDMge1xyXG5cdGNvbG9yOiAjNDM4MWVhO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW46IDAgMCA0cHggMThweDtcclxufVxyXG5cclxuXHJcbi50YWJsZV9tYWluIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNThiMmNhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxufVxyXG5cclxuLkxvY2F0aW9uIHtcclxuICBtYXJnaW46IDhweCAwIDA7XHJcbn1cclxuXHJcbi5Mb2NhdGlvbiBoNCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogNDYlO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi5Mb2NhdGlvbiBwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG50ci5kb25hdGlvbl90eXBlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwICNGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxudHIuYWxsX3B1cnBvc2Uge1xyXG4gIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmFsbF9wdXJwb3NlPnRoIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG5cclxuLkZvb3Rlcl9tYWluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLkZvb3Rlcl9tYWluIHAge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgNXB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5Eb250X1JlcHQgdGQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uRG9uYV9XYWppYmFoIHAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgbWFyZ2luOiAwIDAgM3B4IDJweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLkRvbm9yX1NpZ25hdHVyZSBwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZG9uYXRpb25fdHlwZSB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG4uRG9uYV9XYWppYmFoIHtcclxuICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfcmlnaHQgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDo3NjdweCksXHJcbnNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gIC5jbGFzc19yZXMge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zYW1lX3RkX2xvZ29zIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWFsaW5nLWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGV4dC1hbGluZy1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luX3RvcF9yZXMge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAud2lkdGhfc2V2ZW5IdW5kcmVkIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG4gIC53aWR0aF9mb3VySHVuZHJlZCB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1nX2NlbnRlcl9yZXMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29sX3Jlc193aWR0aCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuSGVhZGVyX0RvbmVyX2xlZnQge1xyXG5cclxuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnRkX2ltZ19hbGlnbntcclxuXHRwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuLmN0YWJsZXtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAxMHB4IDBweCAxMHB4IDQwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBhZGRlZCBieSBmYXlleiAqL1xyXG5cclxuLnJlY2lwdC1tYWluIC5hbGxfcHVycG9zZSB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICMwMDAgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG4ubm8tYm9yZGVyIHtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogZW5kZWQgYnkgZmF5ZXogKi8iXX0= */"] });


/***/ }),

/***/ 21626:
/*!********************************************************************************!*\
  !*** ./src/app/blank/acknowledgement-color/acknowledgement-color.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcknowledgementColorComponent": () => (/* binding */ AcknowledgementColorComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _constant_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/constant */ 90376);
/* harmony import */ var to_words__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! to-words */ 18087);
/* harmony import */ var to_words__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(to_words__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_class_base_join_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/class/base-join-actions */ 63661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _service_form_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/form-helper.service */ 64907);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 52954);









function AcknowledgementColorComponent_div_0_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Acknowledgment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AcknowledgementColorComponent_div_0_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Verification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AcknowledgementColorComponent_div_0_tr_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 57);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const receipt_data_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r5 == null ? null : receipt_data_r5.donation_type == null ? null : receipt_data_r5.donation_type.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r5 == null ? null : receipt_data_r5.purpose == null ? null : receipt_data_r5.purpose.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r5 == null ? null : receipt_data_r5.pay_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r5 == null ? null : receipt_data_r5.instrument_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r5 == null ? null : receipt_data_r5.bank == null ? null : receipt_data_r5.bank.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r5 == null ? null : receipt_data_r5.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r5 == null ? null : receipt_data_r5.currency == null ? null : receipt_data_r5.currency.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](19, 12, receipt_data_r5 == null ? null : receipt_data_r5.amount, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r5 == null ? null : receipt_data_r5.branch == null ? null : receipt_data_r5.branch.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r5 == null ? null : receipt_data_r5.additionalInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r5 == null ? null : receipt_data_r5.majlis == null ? null : receipt_data_r5.majlis.title);
} }
function AcknowledgementColorComponent_div_0_table_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Donation Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Wajibah Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Nafila Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](42, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](50, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Grand Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](58, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](62, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](66, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](26, 10, ctx_r4.other_detail.wajiba.cash, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](30, 14, ctx_r4.other_detail.wajiba.inkind, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](34, 18, ctx_r4.other_detail.wajiba.total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](42, 22, ctx_r4.other_detail.nafila.cash, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](46, 26, ctx_r4.other_detail.nafila.inkind, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](50, 30, ctx_r4.other_detail.nafila.total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](58, 34, ctx_r4.other_detail.grandTotal.cash, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](62, 38, ctx_r4.other_detail.grandTotal.inkind, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](66, 42, ctx_r4.other_detail.grandTotal.total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r4.final_Total, " only");
} }
function AcknowledgementColorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "www.dawateislami.net");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, AcknowledgementColorComponent_div_0_td_30_Template, 5, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, AcknowledgementColorComponent_div_0_td_31_Template, 5, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "canvas", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "User's Information:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "strong", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](85, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, "Receipt No: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "strong", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](103, "date");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "caption", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, " Location: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, " Cabina: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Sr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "Donation Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, "Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "Pay Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128, "Instrument No. / item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130, "Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, "Date / weight / quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](138, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140, "Add. Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142, "Majlis");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](144, AcknowledgementColorComponent_div_0_tr_144_Template, 26, 16, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](145, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "table", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "tbody", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](152, AcknowledgementColorComponent_div_0_table_152_Template, 71, 46, "table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](154, "table", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](155, "tbody", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](158, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](162, "Received By: _________________________");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166, "Donor Signature: ______________________");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "table", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](174, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](176, "\"Donations made to Dawat-e-Islami is entitled to the tax credit u/s 61 of the Income Tax Ordinance 2001\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](178, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](179, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](181, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "table", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](183, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](184, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](185, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](186, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](187, "Alami Madani Markaz, Faizan-e-Madinah Mahallah Saudagran, Purani Sabzi Mandi, Bab-ul-Madinah, Karachi, Pakistan");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](189, "Phone: +92 21 -34921389-91, UAN: 111 -25-26-92, E-Mail: donations@dawateislami.net, http://www.dawateislami.net/donation/donate.do ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](190, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](191, "td", 56);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.top_image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.rec_type == "ack");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.rec_type == "ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" User ID: ", ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.action_by, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Time: ", ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.action_when, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" C.P.: ", ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.ou, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" User ID: ", ctx_r0.printData == null ? null : ctx_r0.printData.user_info == null ? null : ctx_r0.printData.user_info.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("User Address: ", ctx_r0.printData == null ? null : ctx_r0.printData.user_info == null ? null : ctx_r0.printData.user_info.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("User Number: ", ctx_r0.printData == null ? null : ctx_r0.printData.user_info == null ? null : ctx_r0.printData.user_info.mobile_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("User Email: ", ctx_r0.printData == null ? null : ctx_r0.printData.user_info == null ? null : ctx_r0.printData.user_info.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("User Batch No: ", ctx_r0.printData == null ? null : ctx_r0.printData.user_info == null ? null : ctx_r0.printData.user_info.batch_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.action_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](103, 21, ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.action_when, "yyyy-MM-dd"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.division == null ? null : ctx_r0.printData.basic_info.division.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.basic_info == null ? null : ctx_r0.printData.basic_info.kabina == null ? null : ctx_r0.printData.basic_info.kabina.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.printData.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.printData != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.warning_image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.footer_image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
class AcknowledgementColorComponent extends src_app_class_base_join_actions__WEBPACK_IMPORTED_MODULE_4__.BaseJoinAction {
    constructor(injector, helper, activeRoute) {
        super(injector);
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
        this.slip_type = this.activeRoute.snapshot.paramMap.get('rec_t');
        this.rec_type = this.activeRoute.snapshot.paramMap.get('type');
        this.ver_no = this.activeRoute.snapshot.paramMap.get('ver_no');
        if (window.location.pathname.includes('ver_no')) {
            this.getVerification(this.ver_no, this.slip_type);
        }
        if (window.location.pathname.includes('slipId')) {
            this.getAcknowledgment(this.slipId, this.slip_type);
        }
    }
    getAcknowledgment(slipId, type) {
        this._http.get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TRANSACTION,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.PRINT_GENERAL,
            query: {
                receipt_type: type,
                act_no: slipId,
            }
        }).subscribe((res) => {
            this.calCulation(res.data.records);
        });
    }
    getVerification(slipId, type) {
        this._http.get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TRANSACTION,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.PRINT_GENERAL,
            query: {
                receipt_type: type,
                act_no: slipId,
            }
        }).subscribe((res) => {
            this.calCulation(res.data.records);
        });
    }
    calCulation(data) {
        const toWords = new to_words__WEBPACK_IMPORTED_MODULE_3__.ToWords();
        this.printData = data;
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
            // this.final_Total = this.helper._numberTostring( this.other_detail.grandTotal.total);
            this.final_Total = toWords.convert(this.other_detail.grandTotal.total);
        }
    }
}
AcknowledgementColorComponent.ɵfac = function AcknowledgementColorComponent_Factory(t) { return new (t || AcknowledgementColorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_form_helper_service__WEBPACK_IMPORTED_MODULE_5__.FormHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
AcknowledgementColorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AcknowledgementColorComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "recipt-main", "style", "margin: 0px auto; padding: 10px; background: white; width: 100%;", 4, "ngIf"], [1, "recipt-main", 2, "margin", "0px auto", "padding", "10px", "background", "white", "width", "100%"], ["id", "wrapper", "width", "630", "cellpadding", "0", "cellspacing", "0", "border", "0", "background", "./receipt_color_files/testing.png", 1, "Dont_Rept", "class_res", 2, "width", "82%", "background", "white", "padding", "10px", "height", "100vh"], ["height", "5"], ["cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Header_Doner_left", "no-border"], ["colspan", "2", 2, "font-size", "12px", "padding-left", "25px", "padding-top", "40px"], ["align", "center", "width", "400", 1, "same_td_logos", "td_img_align"], ["cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Header_Doner_center"], ["align", "center"], ["width", "200", 3, "src"], ["href", "http://localhost/development/donation-prod/Personnel/print_email_receipt/receipt:U1VQRVJBRE1JTjIxLTI=/receiptType:ReceiptDetail/print:1#"], ["align", "center", 4, "ngIf"], ["align", "center", "valign", "top", "width", "130", 1, "same_td_logos"], ["cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Header_Doner_right"], [1, "text-aling-center"], ["width", "625", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Donor_Information_left"], [2, "float", "right", "margin-bottom", "-88px"], ["id", "container"], ["width", "100", "height", "100"], ["width", "360", "cellpadding", "0", "cellspacing", "0", "border", "0"], ["align", "left", 1, "text-aling-left"], ["align", "left"], [2, "font-size", "11px"], [2, "display", "block"], [2, "text-align", "center"], ["src", "https://www.ginifab.com/feeds/qr_code/img/qr_code_scanner.jpg", 2, "width", "30%", "visibility", "hidden"], ["width", "295", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Donor_Information_center", 2, "margin-right", "100px"], ["align", "right", "valign", "top", "width", "200"], ["cellpadding", "0", "cellspacing", "0", "border", "0"], ["align", "center", 2, "margin-left", "-100px"], [2, "margin-left", "44px", "margin-top", "4px"], [2, "font-size", "12px"], [2, "margin-left", "46px"], [1, "Location", "margin_top_res", "ctable", 2, "margin-bottom", "0", "padding-bottom", "0"], [2, "margin-bottom", "0  !important"], [2, "margin-right", "0px !important", "margin-left", "-13px"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "table_main", 2, "width", "95%"], [1, "donation_type"], [2, "color", "#000"], ["class", "all_purpose", 4, "ngFor", "ngForOf"], ["type", "hidden", "id", "text", "value", "https://donations.dawateislami.info/result/detail/f1cb5e42072745db5b1bc392eac9b5e9f7c271ac"], ["width", "625", "cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Header_Doner_left", "outer_table"], [1, "inner_main_table"], ["width", "310", "align", "left"], ["cellspacing", "0", "cellpadding", "0", "border", "0", "class", "Dona_Wajibah width_sevenHundred", 4, "ngIf"], ["width", "300", "valign", "top", 1, "width_fourHundred", 2, "margin-left", "100px"], ["cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Donor_Signature", 2, "/* margin", "0px 0px 10px 80px", "*/width", "100%"], [2, "width", "auto", "text-align", "right"], ["align", "left", 2, "text-align", "revert"], ["width", "350", 2, "margin-right", "20px", 3, "src"], ["align", "left", 2, "text-align", "right"], [2, "text-align", "right", "margin-right", "26px"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "border", "0"], [1, "Footer_main"], [1, "img_center_res", 2, "text-align", "center"], [2, "height", "40px", "width", "625px", 3, "src"], ["height", "50"], [1, "all_purpose"], ["cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Dona_Wajibah", "width_sevenHundred"], ["align", "left", "width", "100"], ["align", "left", "width", "100", 1, "col_res_width"], ["colspan", "4", "width", "400", "align", "left"], [2, "height", "auto !important", "text-transform", "capitalize"]], template: function AcknowledgementColorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AcknowledgementColorComponent_div_0_Template, 192, 24, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.printData !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 0.5em;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n\tfont-size: 100%;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n\tfont-family: 'Gill Sans', 'lucida grande', helvetica, arial, sans-serif;\r\n\tfont-size: 190%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] { \r\n\tfont-family: 'Gill Sans', 'lucida grande', helvetica, arial, sans-serif;\r\n\tfont-size: 165%;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n\tcolor: #993;\r\n\tfont-weight: normal;\r\n}\r\n\r\n@media print {}\r\n\r\n@page {\r\n  size: auto;\r\n  margin: 0;\r\n}\r\n\r\n.Header_Doner_left[_ngcontent-%COMP%], .Header_Doner_center[_ngcontent-%COMP%], .Header_Doner_right[_ngcontent-%COMP%], .Donor_Information_left[_ngcontent-%COMP%]{\r\n\tvertical-align: top;\r\n}\r\n\r\n.Header_Doner_left[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #58b2ca;\r\n  margin: 0 0 5px;\r\n  padding: 0 0 5px;\r\n  width: 100%;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%] {\r\n  display: unset;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .Header_Doner_center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\tcolor: #00b050;\r\n\tdisplay: block;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\ttext-align: center;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  margin: 0 0 10px 0;\r\n  padding: 0;\r\n  text-decoration: underline;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  margin: 0;\r\n  padding: 0;\r\n  letter-spacing: 6px;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%] {\r\n\ttext-align: left;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .Donor_Information_center[_ngcontent-%COMP%], .Donor_Information_left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .Donor_Information_center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\tcolor: #000;\r\n    display: block;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n\tpadding: 0;\r\n\ttext-align: left;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  margin: 2px 0;\r\n}\r\n\r\n.Donor_Information_center[_ngcontent-%COMP%], .Donor_Information_center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\tfont-weight: normal;\r\n\tfont-size: 10px;\r\n    margin: 0 11px 0 0;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 9px;\r\n  margin: 0 0 0 18px;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\tcolor: #4381ea;\r\n\tdisplay: block;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tfont-size: 14px;\r\n\tmargin: 0 0 4px 18px;\r\n}\r\n\r\n.table_main[_ngcontent-%COMP%] {\r\n  border: 1px solid #58b2ca;\r\n  border-radius: 4px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  margin: 0 auto 10px;\r\n}\r\n\r\n.Location[_ngcontent-%COMP%] {\r\n  margin: 8px 0 0;\r\n}\r\n\r\n.Location[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 16px;\r\n  padding: 5px;\r\n  text-align: left;\r\n  width: 46%;\r\n  margin-right: 40px;\r\n  margin-left: -20px;\r\n  \r\n}\r\n\r\n.Location[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 12px;\r\n}\r\n\r\ntr.donation_type[_ngcontent-%COMP%] {\r\n  background: none repeat scroll 0 0 #FFF;\r\n  border-radius: 4px;\r\n  color: #000;\r\n  height: 35px;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n}\r\n\r\ntr.all_purpose[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n}\r\n\r\n.all_purpose[_ngcontent-%COMP%] > th[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #000;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    padding: 1px;\r\n}\r\n\r\n.Footer_main[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.Footer_main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 9px;\r\n  margin: 5px 0 5px 0;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.Dont_Rept[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.Dona_Wajibah[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  height: 19px;\r\n  margin: 0 0 3px 2px;\r\n  padding: 2px;\r\n  vertical-align: middle;\r\n  font-weight: bold;\r\n}\r\n\r\n.Donor_Signature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  margin: 12px 0;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.donation_type[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-right: 1px solid #000;\r\n  font-size: 15px;\r\n  text-align: center;\r\n  padding: 1px;\r\n}\r\n\r\n.Dona_Wajibah[_ngcontent-%COMP%] {\r\n  margin: 0 0 0 20px;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 900;\r\n}\r\n\r\n@media screen and (max-device-width:767px), screen and (max-width:767px) {\r\n  .class_res[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    width: 100%;\r\n  }\r\n\r\n  .same_td_logos[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n  }\r\n\r\n  .text-aling-center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .text-aling-left[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n\r\n  .margin_top_res[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n\r\n  }\r\n\r\n  .width_sevenHundred[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n\r\n  .width_fourHundred[_ngcontent-%COMP%] {\r\n    width: 550px;\r\n  }\r\n\r\n  .img_center_res[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  td[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  th[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  .col_res_width[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n  }\r\n\r\n  .Header_Doner_left[_ngcontent-%COMP%] {\r\n\r\n    padding: 40px 0px;\r\n  }\r\n\r\n  .Donor_Information_left[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n  }\r\n}\r\n\r\n.td_img_align[_ngcontent-%COMP%]{\r\n\tpadding-left: 50px;\r\n}\r\n\r\n.ctable[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin: 10px 0px 10px 40px;\r\n}\r\n\r\n\r\n\r\n.recipt-main[_ngcontent-%COMP%]   .all_purpose[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #000 !important;\r\n\tcolor: #000 !important; \r\n}\r\n\r\n.no-border[_ngcontent-%COMP%] {\r\n  border-bottom: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWNvbG9yLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsdUVBQXVFO0NBQ3ZFLGVBQWU7QUFDaEI7O0FBRUEsS0FBSyxrQkFBa0I7Q0FDdEIsdUVBQXVFO0NBQ3ZFLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCOztBQUdBLGNBQWM7O0FBRWQ7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBOzs7O0NBSUMsbUJBQW1CO0FBQ3BCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7O0NBRUMsY0FBYztDQUNkLGNBQWM7Q0FDZCx5Q0FBeUM7Q0FDekMsa0JBQWtCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBOzs7O0NBSUMsV0FBVztJQUNSLGNBQWM7SUFDZCx5Q0FBeUM7Q0FDNUMsVUFBVTtDQUNWLGdCQUFnQjtBQUNqQjs7QUFHQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBOztDQUVDLG1CQUFtQjtDQUNuQixlQUFlO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUdBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFHQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2QseUNBQXlDO0NBQ3pDLGVBQWU7Q0FDZixvQkFBb0I7QUFDckI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVix5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtDQUNDLHNCQUFzQjtJQUNuQix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFJQTtFQUVFO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBR0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiwwQkFBMEI7QUFDM0I7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJLGlDQUFpQztDQUNwQyxzQkFBc0I7QUFDdkI7O0FBR0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBQ0EsbUJBQW1CIiwiZmlsZSI6InByaW50LWNvbG9yLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBoMiwgaDMsIGg0IHtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG5oMiB7XHJcblx0Zm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnbHVjaWRhIGdyYW5kZScsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxOTAlO1xyXG59XHJcblxyXG5oMyB7IC8qY29sb3I6ICMyYzY4Nzc7Ki9cclxuXHRmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdsdWNpZGEgZ3JhbmRlJywgaGVsdmV0aWNhLCBhcmlhbCwgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE2NSU7XHJcbn1cclxuXHJcbmg0IHtcclxuXHRjb2xvcjogIzk5MztcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHByaW50IHt9XHJcblxyXG5AcGFnZSB7XHJcbiAgc2l6ZTogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfbGVmdCxcclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIsXHJcbi5IZWFkZXJfRG9uZXJfcmlnaHQsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9sZWZ0e1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfbGVmdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1OGIyY2E7XHJcbiAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gIHBhZGRpbmc6IDAgMCA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfY2VudGVyIHtcclxuICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9yaWdodCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIgYSxcclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIgaDEge1xyXG5cdGNvbG9yOiAjMDBiMDUwO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIgYSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uSGVhZGVyX0RvbmVyX2NlbnRlciBoMSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiA2cHg7XHJcbn1cclxuXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uSGVhZGVyX0RvbmVyX3JpZ2h0IHAsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9jZW50ZXIsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9sZWZ0IHAsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9jZW50ZXIgcHtcclxuXHRjb2xvcjogIzAwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0cGFkZGluZzogMDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLkhlYWRlcl9Eb25lcl9yaWdodCBwIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAycHggMDtcclxufVxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2NlbnRlcixcclxuLkRvbm9yX0luZm9ybWF0aW9uX2NlbnRlciBwe1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDExcHggMCAwO1xyXG59XHJcblxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQgcCB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgbWFyZ2luOiAwIDAgMCAxOHB4O1xyXG59XHJcblxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQgaDMge1xyXG5cdGNvbG9yOiAjNDM4MWVhO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW46IDAgMCA0cHggMThweDtcclxufVxyXG5cclxuXHJcbi50YWJsZV9tYWluIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNThiMmNhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxufVxyXG5cclxuLkxvY2F0aW9uIHtcclxuICBtYXJnaW46IDhweCAwIDA7XHJcbn1cclxuXHJcbi5Mb2NhdGlvbiBoNCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogNDYlO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi5Mb2NhdGlvbiBwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG50ci5kb25hdGlvbl90eXBlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwICNGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxudHIuYWxsX3B1cnBvc2Uge1xyXG4gIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmFsbF9wdXJwb3NlPnRoIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG5cclxuLkZvb3Rlcl9tYWluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLkZvb3Rlcl9tYWluIHAge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgNXB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5Eb250X1JlcHQgdGQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uRG9uYV9XYWppYmFoIHAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgbWFyZ2luOiAwIDAgM3B4IDJweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLkRvbm9yX1NpZ25hdHVyZSBwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZG9uYXRpb25fdHlwZSB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG4uRG9uYV9XYWppYmFoIHtcclxuICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfcmlnaHQgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDo3NjdweCksXHJcbnNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gIC5jbGFzc19yZXMge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zYW1lX3RkX2xvZ29zIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWFsaW5nLWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGV4dC1hbGluZy1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luX3RvcF9yZXMge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAud2lkdGhfc2V2ZW5IdW5kcmVkIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG4gIC53aWR0aF9mb3VySHVuZHJlZCB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1nX2NlbnRlcl9yZXMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29sX3Jlc193aWR0aCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuSGVhZGVyX0RvbmVyX2xlZnQge1xyXG5cclxuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnRkX2ltZ19hbGlnbntcclxuXHRwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuLmN0YWJsZXtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAxMHB4IDBweCAxMHB4IDQwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBhZGRlZCBieSBmYXlleiAqL1xyXG5cclxuLnJlY2lwdC1tYWluIC5hbGxfcHVycG9zZSB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICMwMDAgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG4ubm8tYm9yZGVyIHtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogZW5kZWQgYnkgZmF5ZXogKi8iXX0= */"] });


/***/ }),

/***/ 54851:
/*!***********************************************!*\
  !*** ./src/app/blank/blank-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankRoutingModule": () => (/* binding */ BlankRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _print_black_print_black_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-black/print-black.component */ 54885);
/* harmony import */ var _print_color_print_color_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-color/print-color.component */ 97023);
/* harmony import */ var _material_color_material_color_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-color/material-color.component */ 35450);
/* harmony import */ var _material_black_material_black_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-black/material-black.component */ 23354);
/* harmony import */ var _acknowledgement_color_acknowledgement_color_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./acknowledgement-color/acknowledgement-color.component */ 21626);
/* harmony import */ var _ack_material_color_ack_material_color_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ack-material-color/ack-material-color.component */ 89811);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq/faq.component */ 58646);
/* harmony import */ var _qr_receipt_qr_receipt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./qr-receipt/qr-receipt.component */ 16958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 39609);











const routes = [
    { path: 'cash_cheque_color', component: _print_color_print_color_component__WEBPACK_IMPORTED_MODULE_1__.PrintColorComponent },
    { path: 'cash_cheque_black', component: _print_black_print_black_component__WEBPACK_IMPORTED_MODULE_0__.PrintBlackComponent },
    { path: 'material_color', component: _material_color_material_color_component__WEBPACK_IMPORTED_MODULE_2__.MaterialColorComponent },
    { path: 'material_black', component: _material_black_material_black_component__WEBPACK_IMPORTED_MODULE_3__.MaterialBlackComponent },
    { path: 'acknowledgement_color', component: _acknowledgement_color_acknowledgement_color_component__WEBPACK_IMPORTED_MODULE_4__.AcknowledgementColorComponent },
    { path: 'ack_material_color', component: _ack_material_color_ack_material_color_component__WEBPACK_IMPORTED_MODULE_5__.AckMaterialColorComponent },
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__.FaqComponent },
    { path: 'qr_receipt/:id', component: _qr_receipt_qr_receipt_component__WEBPACK_IMPORTED_MODULE_7__.QrReceiptComponent }
];
class BlankRoutingModule {
}
BlankRoutingModule.ɵfac = function BlankRoutingModule_Factory(t) { return new (t || BlankRoutingModule)(); };
BlankRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: BlankRoutingModule });
BlankRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](BlankRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 75349);
/* harmony import */ var _blank_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank-routing.module */ 54851);
/* harmony import */ var _print_black_print_black_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print-black/print-black.component */ 54885);
/* harmony import */ var _print_color_print_color_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./print-color/print-color.component */ 97023);
/* harmony import */ var _material_color_material_color_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material-color/material-color.component */ 35450);
/* harmony import */ var _material_black_material_black_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-black/material-black.component */ 23354);
/* harmony import */ var _acknowledgement_color_acknowledgement_color_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./acknowledgement-color/acknowledgement-color.component */ 21626);
/* harmony import */ var _ack_material_color_ack_material_color_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ack-material-color/ack-material-color.component */ 89811);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq/faq.component */ 58646);
/* harmony import */ var _qr_receipt_qr_receipt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./qr-receipt/qr-receipt.component */ 16958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 39609);












class BlankModule {
}
BlankModule.ɵfac = function BlankModule_Factory(t) { return new (t || BlankModule)(); };
BlankModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: BlankModule });
BlankModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _blank_routing_module__WEBPACK_IMPORTED_MODULE_1__.BlankRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](BlankModule, { declarations: [_print_black_print_black_component__WEBPACK_IMPORTED_MODULE_2__.PrintBlackComponent,
        _print_color_print_color_component__WEBPACK_IMPORTED_MODULE_3__.PrintColorComponent,
        _material_color_material_color_component__WEBPACK_IMPORTED_MODULE_4__.MaterialColorComponent,
        _material_black_material_black_component__WEBPACK_IMPORTED_MODULE_5__.MaterialBlackComponent,
        _acknowledgement_color_acknowledgement_color_component__WEBPACK_IMPORTED_MODULE_6__.AcknowledgementColorComponent,
        _ack_material_color_ack_material_color_component__WEBPACK_IMPORTED_MODULE_7__.AckMaterialColorComponent,
        _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__.FaqComponent,
        _qr_receipt_qr_receipt_component__WEBPACK_IMPORTED_MODULE_9__.QrReceiptComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _blank_routing_module__WEBPACK_IMPORTED_MODULE_1__.BlankRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 15566:
/*!*********************************************!*\
  !*** ./src/app/blank/faq/faq-data-class.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqData": () => (/* binding */ FaqData)
/* harmony export */ });
class FaqData {
    constructor(id, question, answer, points, images) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.points = points;
        this.images = images;
    }
    getList() {
        return [
            new FaqData(1, 'سوال ۔ ای رسید موبائل میں کس طرح انسٹال کی جائے؟', null, [
                'سب سے پہلے اپنے موبائل میں گوگل پلے اسٹور اوپن کریں۔',
                'لکھیں اور سرچ کریں۔E-Raseed dawateislami میں Search bar',
                'کے بٹن پر کلک کریں۔Install',
                'کیجئے۔ App Open مکمل ہونے کے بعد Installation',
            ], [
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2iyVuqu4c4YJmC8jk8S2ICttotzRuxDOBVQ&usqp=CAU',
                    para: 'Step 1'
                },
                {
                    url: 'https://image.shutterstock.com/image-photo/saudi-arabiamadina28052019masjid-nabwi-minerats-green-260nw-1491610727.jpg',
                    para: 'Step 2'
                },
                {
                    url: 'https://st4.depositphotos.com/20178602/31350/v/1600/depositphotos_313507466-stock-illustration-kaaba-mekkah-and-madina-pak.jpg',
                    para: 'Step 3'
                },
                {
                    url: 'https://cdn1.vectorstock.com/i/1000x1000/32/65/a-draw-masjid-nabawi-madina-tun-nabi-in-grey-vector-27413265.jpg',
                    para: 'Step 4'
                }
            ]),
            new FaqData(2, 'سوال۔ کیا میں خود ای رسید میں اپنی  آئ ڈی بنا سکتا ہوں۔', 'جی نہیں آپ کو اپنی آئی ڈی بنوانے کے لئے دعوت اسلامی کے مالیات ذمہ دار سے رابطہ کرنا ہوگا۔	'),
            new FaqData(3, 'سوال۔ اپنی آئی ڈی میں  کس طرح  لاگ ان  کر سکتا ہوں۔', '    جواب۔یہ سافٹ ویٔر کی لاگ ان اسکرین ہے، جس میں آپ اپنا موبائل نمبر(جس  نمبر پر آئی ڈی بنی ہے)  اور پاسورڈ لکھ کر لاگ ان کرینگے۔ '),
            new FaqData(4, 'سوال۔ مدنی عطیات اور مٹیریل کی رسید کس طرح بناتے ہیں؟', 'جواب۔ لاگ ان ہونے کی بعد یہ اسکرین آپ کے سامنے آئے گی۔اس میں 6 آپشن موجود ہیں ', [
                'مدنی عطیات کی رسید',
                'مٹیریل  عطیات کی رسید',
                'مدنی عطیات کی فہرست',
                'مدنی عطیات جمع کریں۔',
                'جمع کی ہوئی ڈپازٹ سلپ',
                'اگ آ  ئوٹ (آئی ڈی بند کرنا) '
            ]),
            new FaqData(5, ' بیچ بنانے ', `جب آپ عطیات کی رسید بنانے کے آپشن کو کلک  کریں گےتو سوفٹ ویئر ایک بیچ نمبربنانے کے لئے کہے گا، اور جب بھی یہ آپشن آئے تو جنیریٹ کا بٹن  پر کلک کر کے بیچ بنا لیں۔ اس کے بغیر یہ آپ کو آگے  نہیں جانے دے گا۔`, [
                ' کا بٹن ڈبائیں گے تو ایک اور اسکرین آئیگی  اس پر Generate جب آپ    کا بٹن دبائیں۔OK بیچ بنانے کے لئے',
                'یچ نمبر سے پریشان نہ ہوں یہ آپ کے استعمال کے لئے نہیں ہے۔ جب بھی آپ سے بیچ بنانے کا کہے ، آپ بیچ بنا لیں۔ آپ کے پاس بیچ کلوز کرنے کا آپشن نہیں ہے۔'
            ]),
            new FaqData(6, 'مدنی عطیات کی رسید', 'رسید بنانے کے 3 مرحلے ( اسٹیپس) ہیں۔', [
                'مدنی عطیات دینے والے کی تفصیلات',
                'رقم یا چیک کی معلومات',
                'مدنی عطیات کی تفصیل'
            ]),
            new FaqData(6, 'عطیات دینے والے کی تفصیل', 'یہاں ڈونر کی تمام معلومات لکھیں گے', [
                'ڈونر کا موبائل نمبر',
                'ڈونر کا نام',
                ' اگر ڈونر کا ای میل ایڈرس بھی لکھا جاۓ تو رسید ڈونر کوآٹو  ای میل بھی ہوجائے گی۔ ',
                'ڈونر کا ایڈرس',
                ' ڈونر کے ملک کا نام سلیکٹ کریں۔',
                ' ڈونر کا شہر۔',
                'اگر کسی ذمہ دار کے ریفرنس سے ڈونر آیا ہے ',
                'تو اُس ذمہ دار کا نام معرفت میں لکھیں۔',
                'نیز اگر معرفت میں کسی کا نام بھی نہیں لکھا تو کویٔ حرج نہیں۔',
                ' میں  ہو گا تو آپ صرف  ڈونر(Databaseاگر ڈونر کا ریکارڈ پہلے سے  ڈی ایم کی ڈیٹابیس(   کے نشان پر کلک کریں گے ۔ڈونر کا نام اور تمامSearch کا موبائل نمبر لکھ کر جیسے ہیمعلومات لکھی ہوئی آجائیں گی۔',
                'یاد رہے ! جس کا موبائل نمبر  لکھا ہے نام بھی اسی کا لکھنا ہے، آپ کے ساتھ ایسا بھی ہو سکتا ہے کہ ڈونر نمبر کسی اور کا لکھوائے اور نام کسی دوسرے کا۔ آپ ایسا نہ کیجیے گا۔ کیوں کہ ایک بار جس نمبر پر جو نام لکھ دیا جائے گا ، وہ مستقل طور پر اسی نام کے ساتھ محفوظ ہو جائے گا۔اور اگر ایساہو کہ ڈونر کے بتائے ہوئے نمبر  پر کسی اور کا نام آ رہا ہے تو فوراً اپنے سپر وائزر کے ذریعے ریجن سافٹ ویئر سپر وائزر سے رابطہ کریں۔'
            ]), new FaqData(7, 'لوکیشن ، کیش ، چیک اور کرنسی کی معلومات', '', [
                '۔یہاں آپ کے کاؤنٹر کی  ڈویژن یا شہر کانام لکھا  ہوا ہوگا، اگر اس میں کوئی فرق ہو تو فوراً اپنے سپر وائزر سے رابطہ کر کے درست کروائیں، اور درست ہونے تک کوئی رسید نہ بنائیں۔',
                '۔اگر آپ کی آئی ڈی پر ایک سے زائد لوکیشن دی گئی ہے تو ہر بار رسید بناتے ہوئے درست لوکیشن کو سلیکٹ کرنا آپ کی ذمہ دار ی ہے۔ یہاں جو لوکیشن سلیکٹ کی جائے گی کارکردگی بھی اسی ڈویژن یا شہر کی بنے گی۔',
                '۔اگر عطیات کیش ہیں تو یہاں کیش سلیکٹ کریں، اور اگر کسی بینک کا چیک ہے تو چیک سلیکٹ کر کے موصول ہونے والے چیک کی تمام مطلوبہ معلومات درج کریں۔',
                '  میں ہی سلیکٹ رہنے دیں ، اس میں تبدیلی نہ کریں۔PKR 4۔عطیات پاکستانی کرنسی  ',
                '5۔اگر عطیات کسی دوسرے ملک کی کرنسی میں ہیں تو اسی ملک کی کرنسی کو سلیکٹ کریں  اور اپنے سپر وائزر کو اپ ڈیٹ کریں۔ سپر وائزر ریجن سافٹ ویئر سپر وائزر سے رابطہ کر کے آپ کی رسید کو اپ ڈیٹ  کروائیں گے۔',
                '6۔اگر عطیات پرائز بونڈ کی صورت میں ہوں تو پاکستانی کرنسی کو سلیکٹ کرتے ہوئے رسید بنائے جائے گی اور اضافی معلومات میں پرائز بانڈ کی تفصیل لکھ دیں(اضافی معلومات کی تفصیل آگے آئے گی)-اور سپر وائزر  کو اپ ڈیٹ کریں۔  ',
                '7۔یاد رہے! اگر ڈونر نے عطیات چیک کی صورت میں جمع کروائیں ہیں تو اس کی رسید بنانے کے بعد فوری مالیات میں جمع کروانے کی ترکیب بنائیں۔ بینک میں جمع کروانے کی اجازت نہیں ہے۔',
                '8۔اسی طرح پرائزبانڈ ہوں یا  غیر ملکی کرنسی ہو، بینک میں جمع کروانے ، کسی دوسرے کو دے کر کیش کروانے ،پاکستانی کرنسی میں تبدیل کروانے کی اجازت نہیں ہے۔',
                '9۔غیر ملکی کرنسی کےسکّوں کی قیمت نہ ہونے کے برابر ہوتی ہے، لوگ عطیات بکس میں اس طرح کے سکے ڈال دیتے ہیں، ان کی رسید نہ بنائی جائے۔بلکہ مالیات میں جمع کروا دیں۔',
                '10۔ڈونر سے عطیات وصول کر کے نوٹوں کو اچھی طرح گن کر اور چیک کرنے کے بعد رقم کا اندراج کریں۔',
                '11۔عطیات کی قِسم میں نافلہ یا واجبہ کو سلیکٹ کریں۔',
                '12۔نافلہ سلیکٹ کرنے بعد مزید وضاحت کریں کہ صدقہ  ، /خیرات/عطیہ',
                '13۔واجبہ سلیکٹ کرنے پر زکوۃ یا فطرہ کو بھی واضح کریں',
                '14۔ڈونر کے بتائے ہوئے مقصد کو سلیکٹ کریں، اگر ڈونر نے کوئی خاص مقصد نہیں بتایا تو  کو سلیکٹ کریں۔(All Purpose) آل پرپز',
                '15۔پرپز کے بعد آپ کے شعبہ کا نام ہوگا۔',
                'اگر شعبہ کا نام درست نہیں ہے تواپنے سپر وائزر سے رابطہ کر کے اس کو درست کروائیں۔',
                '16۔شعبہ کے نام کے بعد اگر  مدرسہ یا جامعہ کے تحت ہے تو مدرسہ یا جامعہ کا نام آئے گا۔اس کو بھی غور کریں، اگر کسی دوسرے مدرسے یا جامعہ کا نام ہے تو سپروائزر سے رابطہ کریں'
            ]),
            new FaqData(8, ' عطیات کی تفصیل مقصد', '', [
                '۔عطیات جمع کرنے میں مقصد کو سلیکٹ کرنے میں خاص احتیاط کی  جائے، ڈونر نے جس پرپز کے لئے عطیات دیئے ہیں اسی پرپز کو سلیکٹ کرنا ضروری ہے، اگر عطیات وصول کرنے والے کی غلطی سے کسی دوسرے  پرپز میں عطیات خرچ ہو گئے تو تاوان کی صورت بھی بن سکتی ہے۔2۔آپ کی آئی ڈی پر چند مخصوص پرپز شو ہوتے ہیں۔اگر ڈونر کا بتایا گیا پرپز اس لسٹ میں کوسلیکٹ کر کے اضافی معلومات میں پرپز لکھنا لازمی ہے۔Undefined نہیں ہے تو',
                '14۔یاد رکھیں! اگر ڈونر نے مسجد کے وضوخانے کی تعمیر کے لئے عطیات دیئے ہیں تو اس Undefined کی رسید بناتے ہوئے پرپز میں مسجد کو سلیکٹ نہیں کریں گے، بلکہ سلیکٹ کر کے اضافی معلومات میں مسجدکےنام  کے ساتھ  تفصیل لکھیں گے۔ کابٹن دبائیں، اس (Add Line) اگر ایک سے زائد مد یا مقصد کے لئے عطیات ہیں تو سے عطیات کے اندراج کی ایک اور ونڈو کھل جائے گی  اور اسی طرح سے عطیات کی مد اور مقصد وغیرہ کو لکھیں ۔جتنی لائین چاہیں ایڈ  کریں اور مدنی عطیات کی تفصیل لکھیں۔جب  کا کابٹن دبائیں۔Saveتمام عطیات کی تفصیل مکمل ہو جائے تو'
            ]),
            new FaqData(1, 'کرناSave رسید کو', 'کابٹن دباتے ہی  کنفر میشن کا میسج آئے گا ، جس میں ڈونر کا نام، عطیات  اور مقصد  لکھاSave  ہو گا، آپ کے کنفرم کرنے پر رسید بنا دی جائے گی  اور ایک چھوٹا سا میسج آپ کی اسکرین پر کچھ لمحوں کے لئے آئے گا۔ '),
            new FaqData(2, 'رسید شیئر کرنا', 'کنفرم کا بٹن دباتے ہی آپ کی رسید بن کر آپ کے موبائل اسکرین پر آجائے گی۔شیئر کرنے کا بھی آپشن موجود ہے ، رسید کو آپ ڈونر کو واٹس اپ بھی کرسکتے ہیں۔'),
            new FaqData(3, 'یاد رکھیں!', 'رسید بنانے کے بعد آپ اس میں تبدیلی نہیں کر سکتے ، لہذا بڑی توجہ کے ساتھ رسید کی تمام معلومات اور خاص طور پر مدنی عطیات   احتیاط سے لکھیں۔ اوریاد رہے رسید غیر متعلقہ افراد کوشیئر نہ کی جائے۔'),
            new FaqData(4, 'مٹیریل کی رسید بنانے کے 2 اسٹیپس', '', [
                'ڈونر کی معلومات(جس طرح کیش کی رسیدمیں ڈونر کی معلومات موجود ہے)',
                'اشیاء یا نان کیش آئٹم کی تفصیل۔',
                'آپ کے شہر کی بنیاد پر مٹیریل کا اکاونٹ آئی ڈی پر شو ہوگا،اسے سلیکٹ کریں۔',
                'وصول ہونے والی شے / چیز/تعمیراتی سامان / کھانے پینے کی اشیاء کا نام لکھیں۔',
                'اس شے کا وزن یا تعداد لکھیں۔',
                'اگر شے وزن میں ہے تو ملی گرام/گرام/کلوگرام/میٹرک ٹن سلیکٹ کریں۔',
                '(Nos)7-اگر شے تعداد کے اعتبار سے ہے تو سلیکٹ کریں۔',
                'اس کے بعد کیش کی رسید کی طرح مد(نافلہ/ واجبہ۔۔) ، پرپز  ، زرائع ، ایونٹ کو سلیکٹ کر کے رسید موجود Add Lineکردیں۔یہاں بھیSave مکمل کریں ۔ آخر میں تصویر بھی لیں، اور رسیدہے۔',
            ]),
            new FaqData(5, 'سوال۔ کیا میں اپنی بنائی ہوئی تمام رسیدیں دیکھ سکتا ہوں۔', 'انتہائ سے(From) جواب۔ جی سابقہ بنائی گئی تمام رسیدوں کو  ابتدائ تاریخ  تک سلیکٹ کر کے باآسانی دیکھا جا سکتا ہے۔ (To)', [
                'رسیدوں کی لسٹ کی ابتدائی اور انتہائی تاریخ',
                'کے بٹن سےرسید کودیکھ اور شیئر سکتے ہیں Preview',
                'سےرسید کی  مکمل تفصیل دیکھی جا سکتی ہے Detail',
                'رسید کی تاریخ ہے',
                'رسید کا نمبر(ڈی ایم نمبر)',
                'کش/ چیک / مٹیریل کی وضاحت ہے',
                'رسید کی رقم-7  ',
                'لکھا ہوگا۔ Verify رسید کے عطیات ما لیات میں جمع ہونے پر',
                '، کا مطلب ابھی عطیات مالیات میں جمع نہیں ہوئے ہیں۔ Unverify',
                'دوبارہ نئی تاریخوں کے مطابق رسید دیکھنے کے لئے',
                'اس بٹن پر کلک کر کے رسید بنانے کی ونڈو پر جا سکتے ہیں۔'
            ]),
            new FaqData(1, 'سوال۔ سلپ بنانے کے بعد رقم کہاں اور کس کو جمع کروائی جائے؟', ' اگر آپ کو شعبہ کی طرف سے مالیات کو کیش جمع کروانے کی اجازت ہے تو اپنے شہر کے قریبی مالیات آفس میں  جاکر تمام عطیات جمع کروا کر اکنالجمنٹ رسید حاصل کریں-اور اگر مالیات کی طرف سے ڈونیشن سیل پر عطیات جمع کروانے کی اجازت ہے تو آپ ڈونیشن سیل پر بھی عطیات جمع کروا کر اکنالجمنٹ رسید حاصل کر سکتے ہیں۔'),
            new FaqData(10, 'عطیات جمع کروانے کا طریقہ', 'مالیات یا ڈونیشن سیل یا بینک  میں عطیات جمع کروانے کے لئے جانے سے پہلے ان باتوں کو چیک کر لیں۔', [
                'کیا آپ نے تمام عطیات کی رسیدیں سافٹ ویئر پر بنا لی ہیں؟',
                'کیا آپ کے پاس موجود رقم سافٹ ویئر میں شو ہونے والی رقم کے برابر ہے؟',
                'کیا آپ کی کسی رسید میں مد، مقصد، شعبہ، برانچ، اضافی معلومات وغیرہ میں کوئی تبدیلی تو نہیں کروانی ہے؟',
                'اگر کسی تبدیلی کی حاجت ہے تو کیا تبدیلیاں کروالی گئی ہیں؟',
                'کیا تمام رقم کو اچھی طرح گن لیا گیا ہے؟اور تمام کرنسی نوٹ کو ترتیب وار کر کے ہر مالیت کے نوٹ کی تعداد لکھ لی ہے؟(10 ، 20 والے نوٹ اور سکّوں کو قریبی دکان دار سے بڑے نوٹ میں تبدیل کروا لیں)',
                'کرنسی نوٹ کی تعداد  تصویر میں  دیکھائے گئے انداز میں لکھ لیں۔',
                'مالیات آفس یا ڈونیشن جا کر آپ  ذمہ دار سے کہیں یوزرہوں اورتمام عطیات کی سافٹ ویئر پر ڈی ایم بنا چکا ہوںE-Raseed میں آپ کیش لے کر میری آئی ڈی سے 0 کر دیں اور مجھے اکنالجمنٹ رسید بنا کر دے دیں۔ مالیات ذمہ دار کو اپنا موبائل نمبر بتائیں (جس نمبر پر آپ کی آئی ڈی بنی ہوئی ہے) اگر مالیات ذمہ دار آپ سے عطیات کی تفصیل (مد، مقصد) مجلس یا شعبہ وغیرہ  معلوم کرے تو آپ فوراً اپنے سپر وائزر سے رابطہ کروا دیں۔اس لئے کہ اکنالجمنٹ رسید بنانے میں ان تفصلات کو معلوم کرنے کی حاجت نہیں ہوتی (ہوسکتا ہے آپ مالیات ذمہ دار کو بات نہ سمجھا سکے ہوں)مالیات ذمہ دار کی طرف سے ملنے والی رسید کو اچھی طرح چیک کر کے دستخط کریں ۔ اگر رسید کے اوپر نہیں لکھا ہے توآپ E-Raseed Acknowledgment Receipt رسید پر دستخط نہ کریں اور فوراً سپر وائزر سے رابطہ کر یں۔ '
            ]),
            new FaqData(1, 'عطیات بینک میں جمع کروانے اور  بینک سلپ کوسافٹ ویئر میں پروسیڈ کرنے کا طریقہ', '', [
                '-1صفحہ نمبر 17 پر درج تمام پوائنٹس کو چیک کرنے کے بعد آپ مجلس کی طرف سے بتائے گئے بینک میں ہی عطیات جمع کروائیں گے –',
                '-2بینک کا نام اور اکاؤنٹ نمبر آپ کی موبائل آئی ڈی میں بھی شو ہوتا ہے-',
                '-3نافلہ اور واجبہ عطیات کے لئے الگ الگ یا ایک ہی بینک اکاؤنٹ ہوسکتا ہے۔',
                '-4اگر نافلہ اور واجبہ کے اکاؤنٹ نمبر الگ ہیں تو نافلہ عطیات نافلہ کے اکاؤنٹ میں اور واجبہ عطیات واجبہ کے اکاؤنٹ میں جمع کروائیں گے۔(یہاں بینک کے نام کے ساتھ اکاؤنٹ نمبر کو بھی دیکھیں)',
                '-5اگر مجلس یا شعبہ کی طرف سے بتائے گئے اکاؤنٹ نمبر اور سافٹ ویئر میں شو ہونے والے اکاؤنٹ نمبر میں فرق ہو تو بینک میں عطیات جمع کروانے سے پہلے اپنے سپر وائزر سے رابطہ کر یں۔',
                '-6بینک میں اُتنے ہی عطیات جمع کروائیں جتنے آپ کی آئی ڈی میں شو ہو رہے ہیں۔ایک روپیہ بھی کم یا زیادہ نہ ہو۔',
                'آئی ڈی میں شو ہونے والی رقم کو بینک میں جمع کروانے کے فوراً بعد اس بینک سلپ پر پین سے اپنا نام، موبائل نمبراور شعبہ لکھ کر اپنے موبائل سے تصویر لے کر اپنے سپر وائزر کو شیئر کر دیں۔ اور مزید کوئی نئی رسید بنانے سے پہلے سافٹ ویئر میں  پروسیڈ کر دیں۔  ',
                'اگر سافٹ ویئر کی رقم اور بینک سلپ کی رقم برابرہے تو نافلہ بینک سلپ کو پروسیڈ کرنے کے لئے نافلہ بینک اکاؤنٹ نمبر کو سلیکٹ کریں،  بینک  سلپ کا نمبر لکھیں، بینک سلپ پر بینک کی طرف سے دی گئی تاریخ کو سلیکٹ کرکے پروسیڈ کر دیں۔(اسی طرح واجبہ کی سلپ کو بھی پروسیڈ کریں)',
                'پروسیڈ کا بٹن دباتے ہی ایک چھوٹی اسکرین آجائے گی ، اس میں پروسیڈ کی گئی بینک سلپ کا نمبر  لکھا ہوگا اس کے آگے اس بینک سلپ کی رقم کو لکھ کر کنفرمConfirm کا بٹن دبا دیں، بینک سلپ پروسیڈ ہوجائے گی۔',
                'یہ کنفرمیشن اسکرین آپ کو غلط رقم پروسیڈ کرنے سے روکتی ہے ، لیکن اگر آپ نے اس اسکرین میں غلط معلومات  درج کی تو مسائل کا سامنا ہوگا۔',
                '(بینک سلپ نمبر کے آگے بینک سلپ پر موجود رقم ہی درج کریں، موبائل  پر شو ہونے والی رقم نہ لکھیں)',
                'اگر بینک سلپ کی رقم اور سافٹ ویئر میں شو ہونے والی   رقم میں فرق ہو تو Detail کا بٹن دبائیں،ایک نئی اسکرین پر تمام رسیدوں کی  تفصیل شو ہو جائے گی۔ یہاں سے ان تمام رسیدوں کو سلیکٹ  کریں جن کے عطیات اس بینک سلپ کے ذریعے جمع کروائیں ہیں  باقی رسیدوں سے چیک ہٹا دیں، نیچے سلیکٹ کی گئی رسیدوں کا ٹوٹل شو ہوتا ہے۔ جب بینک سلپ کی رقم اور رسیدوں کا ٹوٹل برابر  ہوجائے تو Continue کا بٹن دبا ئیں، آپ کے سامنے بینک سلپ پروسیڈ کرنے والی اسکرین آجائے، یہاں پروسیڈ کا بٹن بائیں اور بقیہ پروسس مکمل کریں۔',
                'بینک سلپ کو پروسیڈ کرنے کے فوراً بعد سپروائزر  کو اطلاع دیں،  اوراسے مالیات سے ویریفائی کروانے کی معلومات حاصل کریں-',
                'اگر نافلہ اور واجبہ کے عطیات الگ الگ بینک اکاؤنٹ نمبر میں جمع کروائے جاتے ہیں تو  ان دونوں بینک سلپ کو الگ الگ پروسیڈ کریں تو بہتر ہے۔لیکن اگر ایک ہی اکاؤنٹ میں نافلہ اور واجبہ عطیات جمع  ہوتے ہیں تو   نافلہ اور واجبہ کی رقم کو الگ الگ پروسیڈ کرنا لازمی ہے(پہلے نافلہ رقم پروسیڈ کر لیں ، اس کے بعد واجبہ ) اس بات کا خیال رکھیں کہ نافلہ  اور واجبہ کا ٹوٹل بینک سلپ کے ٹوٹل کے برابر ہو '
            ]),
            new FaqData(0, 'سوال۔  اپنی Deposit اور un-depositرقمیں کس طرح دیکھ سکتے ہیں؟', '', [
                '-1       مالیات میں کیش جمع کروانے یا عطیات بینک میں جمع کروانے کے بعد بینک سلپ  مالیات                                                                       میں جمع کروانے پر مالیات سے جاری کردہ  اکنالجمنٹ رسید نمبر ہے۔',
                '2-      بینک ڈپازٹ سلپ کی تاریخ ہے۔',
                '3-مالیات میں جمع کروائی گئی کیش رقم یا بینک میں جمع کروائی گئی رقم ہے۔',
                '4- یہ  آپکی عطیات کا Current Statusہے کہ آپ نے اپنے وصول کئے ہوئے عطیات مالیات میں جمع کروائے ہیں یا نہیں۔',
                '      Un-deposit-1 کا مطلب آپ کے پاس موجود کیش، پرائز بانڈ، غیر ملکی کرنسی، چیک، مٹیریل کی مجموعی رقم ہے جو کہ مالیات میں جمع نہیں کئے گئے ہیں (کیش ان ہینڈ) ۔',
                'Deposit-3 سے مراد   وہ عطیات ہیں، جو بینک میں جمع کروانے کے بعد بینک سلپ کو سافٹ ویئر میں پروسید کر کے 0 کر دیئے گئے ہیں۔ یاد رہے صرف بینک میں جمع کروا کر سافٹ ویئر میں پروسیڈ کرنے کے بعداس بینک سلپ کو مالیات میں جمع کروا کر یا طے شدہ طریقہ   کار کے مطابق مالیات ذمہ دار سے ویریفائی کروا کر اکنالجمنٹ رسید  بنوانا  لازمی ہے',
                'Verified-3 سے  مراد وہ عطیات ہیں جو آ پ کی کوشش اور تعاون سے دعوت اسلامی کے لئے مختلف ڈونرز   نے دی اور آپ نے وہ امانت مالیات تک پہنچا کر اپنی ذمہ داری پوری کر دی۔',
            ]),
            new FaqData(1, 'یاد رہے!', 'مالیاتی پالیسی کے تحت  چیک کو بینک میں جمع کروانے، غیر ملکی کرنسی کو پاکستانی روپے میں تبدیل کروانے ، پرائز بانڈ کو تبدیل کرنے یا پاکستانی روپے میں تبدیل کروانے ،اشیاء کو فروخت کر کے اس کی رقم جمع کروانے کی اجازت کسی کو نہیں ہے۔'),
            new FaqData(3, 'سوال۔اپنی آئی ڈی کا passwordکس طرح تبدیل کر سکتے ہیں؟', 'جواب۔ رسید بنانے کے آپشن پر کلک کریں گے تو اسکرین کے اوپر کی طرف چھوٹا سا ایرو کا نشان آئے گا ، اس پر کلک کرنے پر پاسورڈ تبدیل Change Password کا آپشن آئے گا، اس پر کلک کرنے پر پاسورڈ تبدیل کرنے کی اسکرین آجائے گی ۔ اس میں آپ نیا پاسورڈ لکھ کر گرین بٹن پر کلک کر کے نیا پاسورڈ محفوظ فرما لیں۔', [
                'پاسورڈ میں ایک لفظ بڑی   حروف کا (ABC..)، ایک چھوٹے حروف کا (abc..)اور ایک نمبر (1234…)ہونا لازمی ہےمثلا Gulam685پاسورڈ میں کم سے کم 8 حروف لازمی ہیں۔'
            ]),
            new FaqData(4, 'یاد رہے!', 'اپنی آئی ڈی کا پاسورڈ کسی سے بھی شیئر نہ کریں، آپ کے کسی بھی مسئلہکے حل کے لئے مجلس کو پاسورڈ کی حاجت نہیں ہوتی۔ کسی بھی تحریر یا  درخواست پر اپنا پاسورڈنہ لکھیں۔  نہ ہی کسی ذمہ دار کو اپنا پاسورڈ بتائیں۔ ')
        ];
    }
}


/***/ }),

/***/ 58646:
/*!********************************************!*\
  !*** ./src/app/blank/faq/faq.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _faq_data_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-data-class */ 15566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ 89516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 38076);





function FaqComponent_mat_expansion_panel_2_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", a_r5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" .", i_r6 + 1, "");
} }
function FaqComponent_mat_expansion_panel_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r7.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](img_r7.para);
} }
function FaqComponent_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-expansion-panel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-expansion-panel-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FaqComponent_mat_expansion_panel_2_p_9_Template, 5, 2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FaqComponent_mat_expansion_panel_2_div_11_Template, 6, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r1.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", d_r1.answer, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", d_r1.points);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", d_r1.images);
} }
class FaqComponent {
    constructor() {
        this.step = 0;
    }
    ngOnInit() {
        const instance = new _faq_data_class__WEBPACK_IMPORTED_MODULE_0__.FaqData();
        this.data = instance.getList();
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["di-component-name-here"]], decls: 3, vars: 1, consts: [[1, "pt-2", 2, "margin", "auto", "width", "90%"], [1, "example-headers-align"], ["hideToggle", "", 4, "ngFor", "ngForOf"], ["hideToggle", ""], [1, "pt-3", "pb-2"], [2, "font-family", "Calibri, sans-serif", "font-size", "22px"], [2, "font-family", "Calibri, sans-serif", "font-size", "21px"], ["class", "text-right p-1", "style", "font-family: Calibri, sans-serif; font-size: 15px;", "style", "font-family: Calibri, sans-serif; font-size: 20px;", 4, "ngFor", "ngForOf"], [1, "row", "ml-2", "mr-2"], ["class", "col-md-3 p-1 float-right", 4, "ngFor", "ngForOf"], [1, "text-right", "p-1", 2, "font-family", "Calibri, sans-serif", "font-size", "20px"], [2, "float", "right"], [1, "col-md-3", "p-1", "float-right"], [1, "home-card"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 2, "height", "200px", 3, "src"], [1, "text-center", "font-weight-bold"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FaqComponent_mat_expansion_panel_2_Template, 12, 4, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatAccordion, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelDescription, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n}\n\np[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtRkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJmYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbnB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 23354:
/*!******************************************************************!*\
  !*** ./src/app/blank/material-black/material-black.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialBlackComponent": () => (/* binding */ MaterialBlackComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/http.service */ 4584);
/* harmony import */ var _service_form_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/form-helper.service */ 64907);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 52954);







function MaterialBlackComponent_tr_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const receipt_data_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r1 == null ? null : receipt_data_r1.donation_type == null ? null : receipt_data_r1.donation_type.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r1 == null ? null : receipt_data_r1.donation_sub_type == null ? null : receipt_data_r1.donation_sub_type.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r1 == null ? null : receipt_data_r1.purpose == null ? null : receipt_data_r1.purpose.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r1 == null ? null : receipt_data_r1.material_item == null ? null : receipt_data_r1.material_item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((receipt_data_r1 == null ? null : receipt_data_r1.weight) + (receipt_data_r1 == null ? null : receipt_data_r1.unit == null ? null : receipt_data_r1.unit.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r1 == null ? null : receipt_data_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r1 == null ? null : receipt_data_r1.branch == null ? null : receipt_data_r1.branch.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r1 == null ? null : receipt_data_r1.additionalInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r1 == null ? null : receipt_data_r1.majlis == null ? null : receipt_data_r1.majlis.title);
} }
class MaterialBlackComponent {
    constructor(http, helper, activeRoute) {
        this.http = http;
        this.helper = helper;
        this.activeRoute = activeRoute;
        this.printData = {};
        this.batchName = '';
        this.printBy = '';
    }
    ngOnInit() {
        this.currDateandTime = this.helper._getCurrentdatenadTime();
        this.batchName = this.printBy = this.helper._getuserPermission()?.profile?.name;
        this.slipId = this.activeRoute.snapshot.paramMap.get('slipId');
        this.getSystems(this.slipId);
    }
    getSystems(slipId) {
        this.http.get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TRANSACTION,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.PRINT_TRANSACTION,
            resource: slipId,
            query: {
                preview: 1,
                receipt_type: 4,
            }
        })
            .subscribe((res) => {
            this.printData = res.data.row;
        });
    }
}
MaterialBlackComponent.ɵfac = function MaterialBlackComponent_Factory(t) { return new (t || MaterialBlackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_2__.HTTPService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_form_helper_service__WEBPACK_IMPORTED_MODULE_3__.FormHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
MaterialBlackComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MaterialBlackComponent, selectors: [["app-material-black"]], decls: 175, vars: 17, consts: [[1, "recipt-main", 2, "margin", "0px auto", "padding", "10px", "background", "white", "width", "100%"], ["id", "wrapper", "width", "630", "cellpadding", "0", "cellspacing", "0", "border", "0", "background", "./receipt_color_files/testing.png", 1, "Dont_Rept", "class_res", 2, "width", "82%", "background", "white", "padding", "10px", "height", "100vh"], ["colspan", "2", 2, "font-size", "12px", "padding-left", "25px", "padding-top", "10px", "color", "black"], ["height", "5", 2, "text-align", "right", "padding-right", "120px", "padding-top", "0px", "padding-bottom", "10px !important"], ["src", "https://www.ginifab.com/feeds/qr_code/img/qr_code_scanner.jpg", 2, "width", "12%"], [1, "text-aling-center"], ["width", "625", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Donor_Information_left", 2, "margin-top", "50px"], [2, "float", "right", "margin-bottom", "-88px"], ["id", "container"], ["width", "100", "height", "100"], ["width", "360", "cellpadding", "0", "cellspacing", "0", "border", "0"], ["align", "left", 1, "text-aling-left"], ["align", "left"], [2, "font-size", "16px"], [2, "display", "block"], [2, "font-size", "11px"], [2, "text-align", "center"], ["width", "295", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Donor_Information_center", 2, "margin-right", "100px"], ["align", "right", "valign", "top", "width", "200"], ["cellpadding", "0", "cellspacing", "0", "border", "0"], ["align", "center"], [2, "margin-left", "80px", "margin-top", "4px"], [2, "font-size", "12px"], [2, "margin-left", "80px"], [1, "Location", "margin_top_res", "ctable", 2, "margin-bottom", "0", "padding-bottom", "0"], [2, "margin-bottom", "0"], [2, "margin-right", "0px !important", "margin-left", "-13px"], [2, "color", "black"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "table_main", 2, "width", "95%"], [1, "donation_type"], ["width", "", 2, "color", "#000"], ["width", ""], ["class", "all_purpose", 4, "ngFor", "ngForOf"], ["type", "hidden", "id", "text", "value", "https://donations.dawateislami.info/result/detail/f1cb5e42072745db5b1bc392eac9b5e9f7c271ac"], ["width", "625", "cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Header_Doner_left", "outer_table"], [1, "inner_main_table"], ["width", "300", "valign", "top", 1, "width_fourHundred", 2, "margin-left", "100px"], ["cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Donor_Signature", 2, "/* margin", "0px 0px 10px 80px", "*/width", "100%"], [2, "width", "auto", "text-align", "right"], ["align", "left", 2, "text-align", "revert"], ["width", "350", 2, "margin-right", "20px", 3, "src"], ["align", "left", 2, "text-align", "right"], [2, "text-align", "right", "margin-right", "26px"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "border", "0"], [1, "Footer_main"], ["height", "50"], [1, "all_purpose"]], template: function MaterialBlackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Printed Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Printed By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Donor's Information: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "strong", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "Receipt No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "strong", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "caption", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, " Location: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, " Cabina: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "Donation Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Sub Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "Material Desc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "Add. Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Majlis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](135, MaterialBlackComponent_tr_135_Template, 21, 10, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](136, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "table", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "tbody", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "tbody", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](147, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "Received By: _________________________");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, "Donor Signature: ______________________");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "table", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](161, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](162, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "table", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, "Alami Madani Markaz, Faizan-e-Madinah Mahallah Saudagran, Purani Sabzi Mandi, Bab-ul-Madinah, Karachi, Pakistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "Phone: +92 21 -34921389-91, UAN: 111 -25-26-92, E-Mail: donations@dawateislami.net, http://www.dawateislami.net/donation/donate.do ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](174, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.currDateandTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.printBy, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.printData == null ? null : ctx.printData.displayName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.printData == null ? null : ctx.printData.donor == null ? null : ctx.printData.donor.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.printData == null ? null : ctx.printData.donor == null ? null : ctx.printData.donor.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("C/o: ", ctx.printData == null ? null : ctx.printData.additional_info == null ? null : ctx.printData.additional_info.careOfName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("User: ", ctx.printData == null ? null : ctx.printData.created_by == null ? null : ctx.printData.created_by.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Time: ", (ctx.printData == null ? null : ctx.printData.date) + " " + (ctx.printData == null ? null : ctx.printData.time), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("C.P: ", ctx.printData == null ? null : ctx.printData.operating_unit == null ? null : ctx.printData.operating_unit.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("C/o:", ctx.printData == null ? null : ctx.printData.batch_number, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.printData == null ? null : ctx.printData.receipt_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Date: ", ctx.printData == null ? null : ctx.printData.date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("MR No: ", ctx.printData == null ? null : ctx.printData.additional_info == null ? null : ctx.printData.additional_info.mr, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.printData == null ? null : ctx.printData.divison == null ? null : ctx.printData.divison.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.printData == null ? null : ctx.printData.cabina == null ? null : ctx.printData.cabina.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.printData.receipt_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.printData == null ? null : ctx.printData.images == null ? null : ctx.printData.images.warning_image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 0.5em;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] { \r\n\t\r\n\tfont-size: 100%;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] { \r\n\t\r\n\tfont-family: 'Gill Sans', 'lucida grande', helvetica, arial, sans-serif;\r\n\tfont-size: 190%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] { \r\n\tfont-family: 'Gill Sans', 'lucida grande', helvetica, arial, sans-serif;\r\n\tfont-size: 165%;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n\tcolor: #993;\r\n\tfont-weight: normal;\r\n}\r\n\r\n@media print {}\r\n\r\n@page {\r\n  size: auto;\r\n  margin: 0;\r\n}\r\n\r\n.Header_Doner_left[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #000;\r\n  \r\n  margin: 0 0 5px;\r\n  padding: 0 0 5px;\r\n  vertical-align: top;\r\n  width: 100%;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-align: center;\r\n  vertical-align: top;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  margin: 2px 0;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  vertical-align: top;\r\n}\r\n\r\n.Donor_Information_center[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  vertical-align: top;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: #4381ea;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  margin: 0 0 4px 18px;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 9px;\r\n  margin: 0 0 0 18px;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.Donor_Information_center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 9px;\r\n  font-weight: normal;\r\n  margin: 0 11px 0 0;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.table_main[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  margin: 0 auto 10px;\r\n}\r\n\r\n.Location[_ngcontent-%COMP%] {\r\n  margin: 8px 0 0;\r\n}\r\n\r\n.Location[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 16px;\r\n  padding: 5px;\r\n  text-align: left;\r\n\r\n  width: 46%;\r\n  margin-right: 40px;\r\n  margin-left: -20px;\r\n  \r\n}\r\n\r\n.Location[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 12px;\r\n}\r\n\r\ntr.donation_type[_ngcontent-%COMP%] {\r\n  background: none repeat scroll 0 0 #FFF;\r\n  border-radius: 4px;\r\n  color: #000;\r\n  height: 35px;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n}\r\n\r\ntr.all_purpose[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n}\r\n\r\n.all_purpose[_ngcontent-%COMP%] > th[_ngcontent-%COMP%] {\r\n  border-right: 1px solid #000;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n  text-align: center;\r\n  padding: 1px;\r\n}\r\n\r\n.Footer_main[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  \r\n  width: 100%;\r\n}\r\n\r\n.Footer_main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 9px;\r\n  margin: 5px 0 5px 0;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.Dont_Rept[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.Dona_Wajibah[_ngcontent-%COMP%] {\r\n\tmargin: 0 0 0 20px;\r\n}\r\n\r\n.Dona_Wajibah[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  height: 19px;\r\n  margin: 0 0 3px 2px;\r\n  padding: 2px;\r\n  vertical-align: middle;\r\n  font-weight: bold\r\n  \r\n  \r\n}\r\n\r\n.Donor_Signature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  margin: 12px 0;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.donation_type[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #000;\r\n  border-right: 1px solid #000;\r\n  font-size: 15px;\r\n    text-align: center;\r\n    padding: 1px;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  font-weight: 900;\r\n}\r\n\r\n@media screen and (max-device-width:767px), screen and (max-width:767px) {\r\n  .class_res[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    width: 100%;\r\n  }\r\n\r\n  .same_td_logos[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n  }\r\n\r\n  .text-aling-center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .text-aling-left[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n\r\n  .margin_top_res[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n\r\n  }\r\n\r\n  .width_sevenHundred[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n\r\n  .width_fourHundred[_ngcontent-%COMP%] {\r\n    width: 550px;\r\n  }\r\n\r\n  .img_center_res[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  td[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  th[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  .col_res_width[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n  }\r\n\r\n  .Header_Doner_left[_ngcontent-%COMP%] {\r\n    padding: 40px 0px;\r\n  }\r\n\r\n  .Donor_Information_left[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n  }\r\n}\r\n\r\n.ctable[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin: 10px 0px 10px 40px;\r\n}\r\n\r\n\r\n\r\n.recipt-main[_ngcontent-%COMP%]   .all_purpose[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border: 1px solid #000 !important;\r\ncolor: #000 !important; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWJsYWNrLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsb0JBQW9CO0FBQ3JCOztBQUVBLEtBQUssc0JBQXNCO0NBQzFCLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCOztBQUVBLEtBQUssbUJBQW1CO0NBQ3ZCLGVBQWU7Q0FDZix1RUFBdUU7Q0FDdkUsZUFBZTtBQUNoQjs7QUFFQSxLQUFLLGtCQUFrQjtDQUN0Qix1RUFBdUU7Q0FDdkUsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7O0FBTUEsY0FBYzs7QUFFZDtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjs7RUFFaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEI7Ozs7Ozs7O3dCQVFzQjs7QUFFeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixlQUFlO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBRUU7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCOztFQUVsQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUdBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMEJBQTBCO0FBQzNCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxpQ0FBaUM7QUFDbkMsc0JBQXNCO0FBQ3RCOztBQUVBLG1CQUFtQiIsImZpbGUiOiJwcmludC1ibGFjay5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDEsIGgyLCBoMywgaDQge1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbn1cclxuXHJcbmgxIHsgLypiYWNrZ3JvdW5kOiM5OUM5MkI7Ki9cclxuXHQvKmNvbG9yOiAjMDAzZDRjOyovXHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG5oMiB7IC8qYmFja2dyb3VuZDojZmZmOyovXHJcblx0Lypjb2xvcjogI2UzMjsqL1xyXG5cdGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ2x1Y2lkYSBncmFuZGUnLCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTkwJTtcclxufVxyXG5cclxuaDMgeyAvKmNvbG9yOiAjMmM2ODc3OyovXHJcblx0Zm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnbHVjaWRhIGdyYW5kZScsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxNjUlO1xyXG59XHJcblxyXG5oNCB7XHJcblx0Y29sb3I6ICM5OTM7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBwcmludCB7fVxyXG5cclxuQHBhZ2Uge1xyXG4gIHNpemU6IGF1dG87XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uSGVhZGVyX0RvbmVyX2xlZnQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xyXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICBtYXJnaW46IDAgMCA1cHg7XHJcbiAgcGFkZGluZzogMCAwIDVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uSGVhZGVyX0RvbmVyX3JpZ2h0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcblxyXG4uSGVhZGVyX0RvbmVyX3JpZ2h0IHAge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDJweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2NlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uRG9ub3JfSW5mb3JtYXRpb25fbGVmdCBoMyB7XHJcbiAgY29sb3I6ICM0MzgxZWE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMCAwIDRweCAxOHB4O1xyXG59XHJcblxyXG4uRG9ub3JfSW5mb3JtYXRpb25fbGVmdCBwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDlweDtcclxuICBtYXJnaW46IDAgMCAwIDE4cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uRG9ub3JfSW5mb3JtYXRpb25fY2VudGVyIHAge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbWFyZ2luOiAwIDExcHggMCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuXHJcbi50YWJsZV9tYWluIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxufVxyXG5cclxuLkxvY2F0aW9uIHtcclxuICBtYXJnaW46IDhweCAwIDA7XHJcbn1cclxuXHJcbi5Mb2NhdGlvbiBoNCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgd2lkdGg6IDQ2JTtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIFxyXG59XHJcblxyXG4uTG9jYXRpb24gcCB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxudHIuZG9uYXRpb25fdHlwZSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCAjRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbnRyLmFsbF9wdXJwb3NlIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5hbGxfcHVycG9zZT50aCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG5cclxuLkZvb3Rlcl9tYWluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAvKiB3aWR0aDogNTk1cHg7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5Gb290ZXJfbWFpbiBwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDlweDtcclxuICBtYXJnaW46IDVweCAwIDVweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uRG9udF9SZXB0IHRkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLkRvbmFfV2FqaWJhaCB7XHJcblx0bWFyZ2luOiAwIDAgMCAyMHB4O1xyXG59XHJcblxyXG4uRG9uYV9XYWppYmFoIHAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgbWFyZ2luOiAwIDAgM3B4IDJweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbjogMCAwIDNweCAycHg7XHJcbiAgICBwYWRkaW5nOiAxcHggN3B4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4gIFxyXG59XHJcblxyXG4uRG9ub3JfU2lnbmF0dXJlIHAge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDEycHggMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5kb25hdGlvbl90eXBlIHRoIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFweDtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9yaWdodCBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDo3NjdweCksXHJcbnNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gIC5jbGFzc19yZXMge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zYW1lX3RkX2xvZ29zIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWFsaW5nLWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGV4dC1hbGluZy1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luX3RvcF9yZXMge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAud2lkdGhfc2V2ZW5IdW5kcmVkIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG4gIC53aWR0aF9mb3VySHVuZHJlZCB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1nX2NlbnRlcl9yZXMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29sX3Jlc193aWR0aCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuSGVhZGVyX0RvbmVyX2xlZnQge1xyXG4gICAgcGFkZGluZzogNDBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAuRG9ub3JfSW5mb3JtYXRpb25fbGVmdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uY3RhYmxle1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtYXJnaW46IDEwcHggMHB4IDEwcHggNDBweDtcclxufVxyXG5cclxuLyogYWRkZWQgYnkgZmF5ZXogKi9cclxuXHJcbi5yZWNpcHQtbWFpbiAuYWxsX3B1cnBvc2UgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcclxuY29sb3I6ICMwMDAgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi8qIGVuZGVkIGJ5IGZheWV6ICovIl19 */"] });


/***/ }),

/***/ 35450:
/*!******************************************************************!*\
  !*** ./src/app/blank/material-color/material-color.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialColorComponent": () => (/* binding */ MaterialColorComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/http.service */ 4584);
/* harmony import */ var _service_form_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/form-helper.service */ 64907);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 52954);







function MaterialColorComponent_div_0_tr_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const receipt_data_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.donation_type == null ? null : receipt_data_r2.donation_type.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.donation_sub_type == null ? null : receipt_data_r2.donation_sub_type.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.purpose == null ? null : receipt_data_r2.purpose.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.material_item == null ? null : receipt_data_r2.material_item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((receipt_data_r2 == null ? null : receipt_data_r2.weight) + (receipt_data_r2 == null ? null : receipt_data_r2.unit == null ? null : receipt_data_r2.unit.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.branch == null ? null : receipt_data_r2.branch.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.additionalInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.majlis == null ? null : receipt_data_r2.majlis.title);
} }
function MaterialColorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Printed Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Printed By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "www.dawateislami.net");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "DONATION RECEIPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "canvas", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Donor's Information:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "strong", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "Receipt No: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "strong", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "caption", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, " Location: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, " Cabina: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "Donation Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "Sub Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "Material Desc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "Add. Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "Majlis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](146, MaterialColorComponent_div_0_tr_146_Template, 21, 10, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](147, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "table", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "tbody", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "table", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "tbody", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](158, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, "Received By: _________________________");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, "Donor Signature: ______________________");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "table", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](176, "\"Donations made to Dawat-e-Islami is entitled to the tax credit u/s 61 of the Income Tax Ordinance 2001\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](179, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "table", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "Alami Madani Markaz, Faizan-e-Madinah Mahallah Saudagran, Purani Sabzi Mandi, Bab-ul-Madinah, Karachi, Pakistan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, "Phone: +92 21 -34921389-91, UAN: 111 -25-26-92, E-Mail: donations@dawateislami.net, http://www.dawateislami.net/donation/donate.do ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](191, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.currDateandTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.printBy, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.logo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.top_image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("User: ", ctx_r0.printData == null ? null : ctx_r0.printData.created_by == null ? null : ctx_r0.printData.created_by.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Time: ", (ctx_r0.printData == null ? null : ctx_r0.printData.date) + " " + (ctx_r0.printData == null ? null : ctx_r0.printData.time), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("C.P.: ", ctx_r0.printData == null ? null : ctx_r0.printData.operating_unit == null ? null : ctx_r0.printData.operating_unit.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Batch: ", ctx_r0.printData == null ? null : ctx_r0.printData.batch_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.printData == null ? null : ctx_r0.printData.displayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.donor == null ? null : ctx_r0.printData.donor.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.donor == null ? null : ctx_r0.printData.donor.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("C/o: ", ctx_r0.printData == null ? null : ctx_r0.printData.additional_info == null ? null : ctx_r0.printData.additional_info.careOfName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.receipt_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Date: ", ctx_r0.printData == null ? null : ctx_r0.printData.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("MR No: ", ctx_r0.printData == null ? null : ctx_r0.printData.additional_info == null ? null : ctx_r0.printData.additional_info.mr, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.divison == null ? null : ctx_r0.printData.divison.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.printData == null ? null : ctx_r0.printData.cabina == null ? null : ctx_r0.printData.cabina.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.printData.receipt_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.warning_image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r0.printData == null ? null : ctx_r0.printData.images == null ? null : ctx_r0.printData.images.footer_image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
class MaterialColorComponent {
    constructor(http, helper, activeRoute) {
        this.http = http;
        this.helper = helper;
        this.activeRoute = activeRoute;
        this.printData = {};
        this.batchName = '';
        this.printBy = '';
    }
    ngOnInit() {
        this.currDateandTime = this.helper._getCurrentdatenadTime();
        this.batchName = this.printBy = this.helper._getuserPermission()?.profile?.name;
        this.slipId = this.activeRoute.snapshot.paramMap.get('slipId');
        this.getSystems(this.slipId);
    }
    getSystems(slipId) {
        this.http.get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TRANSACTION,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.PRINT_TRANSACTION,
            resource: slipId,
            query: {
                preview: 1,
                receipt_type: 4,
            }
        })
            .subscribe((res) => {
            this.printData = res.data.row;
        });
    }
}
MaterialColorComponent.ɵfac = function MaterialColorComponent_Factory(t) { return new (t || MaterialColorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_2__.HTTPService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_form_helper_service__WEBPACK_IMPORTED_MODULE_3__.FormHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
MaterialColorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MaterialColorComponent, selectors: [["app-material-color"]], decls: 1, vars: 1, consts: [["class", "recipt-main", "style", "margin: 0px auto; padding: 10px; background: white; width: 100%;", 4, "ngIf"], [1, "recipt-main", 2, "margin", "0px auto", "padding", "10px", "background", "white", "width", "100%"], ["id", "wrapper", "width", "630", "cellpadding", "0", "cellspacing", "0", "border", "0", "background", "./receipt_color_files/testing.png", 1, "Dont_Rept", "class_res", 2, "width", "82%", "background", "white", "padding", "10px", "height", "100vh"], ["height", "5"], ["cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Header_Doner_left"], ["colspan", "2", 2, "font-size", "12px", "padding-left", "25px", "padding-top", "40px", "color", "black"], ["width", "110", "align", "center", 1, "same_td_logos"], ["width", "100", 2, "margin-bottom", "15px", 3, "src"], ["align", "center", "width", "400", 1, "same_td_logos", "td_img_align"], ["cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Header_Doner_center"], ["align", "center"], ["width", "200", 3, "src"], ["href", "http://localhost/development/donation-prod/Personnel/print_email_receipt/receipt:U1VQRVJBRE1JTjIxLTI=/receiptType:ReceiptDetail/print:1#"], ["align", "center", "valign", "top", "width", "130", 1, "same_td_logos"], ["cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Header_Doner_right"], [1, "text-aling-center"], ["width", "625", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Donor_Information_left"], [2, "float", "right", "margin-bottom", "-88px"], ["id", "container"], ["width", "100", "height", "100"], ["width", "360", "cellpadding", "0", "cellspacing", "0", "border", "0"], ["align", "left", 1, "text-aling-left"], ["align", "left"], [2, "font-size", "14px"], [2, "display", "block"], [2, "font-size", "11px"], [2, "text-align", "center"], ["_ngcontent-edi-c142", "", "src", "https://www.ginifab.com/feeds/qr_code/img/qr_code_scanner.jpg", 2, "width", "30%"], ["width", "295", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Donor_Information_center", 2, "margin-right", "100px"], ["align", "right", "valign", "top", "width", "200"], ["cellpadding", "0", "cellspacing", "0", "border", "0"], ["align", "center", 2, "margin-left", "-100px"], [2, "margin-left", "44px", "margin-top", "4px"], [2, "font-size", "12px"], [2, "margin-left", "46px"], [2, "margin-left", "45px"], [1, "Location", "margin_top_res", "ctable", 2, "margin-bottom", "0", "padding-bottom", "0"], [2, "margin-bottom", "0"], [2, "margin-right", "0px !important", "margin-left", "-13px"], [2, "color", "black"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "table_main", 2, "width", "95%"], [1, "donation_type"], ["width", "", 2, "color", "#000"], ["width", ""], ["class", "all_purpose", 4, "ngFor", "ngForOf"], ["type", "hidden", "id", "text", "value", "https://donations.dawateislami.info/result/detail/f1cb5e42072745db5b1bc392eac9b5e9f7c271ac"], ["width", "625", "cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Header_Doner_left", "outer_table"], [1, "inner_main_table"], ["width", "300", "valign", "top", 1, "width_fourHundred", 2, "margin-left", "100px"], ["cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Donor_Signature", 2, "/* margin", "0px 0px 10px 80px", "*/width", "100%"], [2, "width", "auto", "text-align", "right"], ["align", "left", 2, "text-align", "revert"], ["width", "350", 2, "margin-right", "20px", 3, "src"], ["align", "left", 2, "text-align", "right"], [2, "text-align", "right", "margin-right", "26px"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "border", "0"], [1, "Footer_main"], [1, "img_center_res", 2, "text-align", "center"], [2, "height", "40px", "width", "625px", 3, "src"], ["height", "50"], [1, "all_purpose"]], template: function MaterialColorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MaterialColorComponent_div_0_Template, 192, 20, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.printData !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 0.5em;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n\tfont-size: 100%;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n\tfont-family: 'Gill Sans', 'lucida grande', helvetica, arial, sans-serif;\r\n\tfont-size: 190%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] { \r\n\tfont-family: 'Gill Sans', 'lucida grande', helvetica, arial, sans-serif;\r\n\tfont-size: 165%;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n\tcolor: #993;\r\n\tfont-weight: normal;\r\n}\r\n\r\n@media print {}\r\n\r\n@page {\r\n  size: auto;\r\n  margin: 0;\r\n}\r\n\r\n.Header_Doner_left[_ngcontent-%COMP%], .Header_Doner_center[_ngcontent-%COMP%], .Header_Doner_right[_ngcontent-%COMP%], .Donor_Information_left[_ngcontent-%COMP%]{\r\n\tvertical-align: top;\r\n}\r\n\r\n.Header_Doner_left[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #58b2ca;\r\n  margin: 0 0 5px;\r\n  padding: 0 0 5px;\r\n  width: 100%;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%] {\r\n  display: unset;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .Header_Doner_center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\tcolor: #00b050;\r\n\tdisplay: block;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\ttext-align: center;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  margin: 0 0 10px 0;\r\n  padding: 0;\r\n  text-decoration: underline;\r\n}\r\n\r\n.Header_Doner_center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  margin: 0;\r\n  padding: 0;\r\n  letter-spacing: 6px;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%] {\r\n\ttext-align: left;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .Donor_Information_center[_ngcontent-%COMP%], .Donor_Information_left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .Donor_Information_center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\tcolor: #000;\r\n    display: block;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n\tpadding: 0;\r\n\ttext-align: left;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  margin: 2px 0;\r\n}\r\n\r\n.Donor_Information_center[_ngcontent-%COMP%], .Donor_Information_center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\tfont-weight: normal;\r\n\tfont-size: 10px;\r\n    margin: 0 11px 0 0;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 9px;\r\n  margin: 0 0 0 18px;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\tcolor: #4381ea;\r\n\tdisplay: block;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tfont-size: 14px;\r\n\tmargin: 0 0 4px 18px;\r\n}\r\n\r\n.table_main[_ngcontent-%COMP%] {\r\n  border: 1px solid #58b2ca;\r\n  border-radius: 4px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  margin: 0 auto 10px;\r\n}\r\n\r\n.Location[_ngcontent-%COMP%] {\r\n  margin: 8px 0 0;\r\n}\r\n\r\n.Location[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 16px;\r\n  padding: 5px;\r\n  text-align: left;\r\n  width: 46%;\r\n  margin-right: 40px;\r\n  margin-left: -20px;\r\n  \r\n}\r\n\r\n.Location[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 12px;\r\n}\r\n\r\ntr.donation_type[_ngcontent-%COMP%] {\r\n  background: none repeat scroll 0 0 #FFF;\r\n  border-radius: 4px;\r\n  color: #000;\r\n  height: 35px;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n}\r\n\r\ntr.all_purpose[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n}\r\n\r\n.all_purpose[_ngcontent-%COMP%] > th[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #000;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    padding: 1px;\r\n}\r\n\r\n.Footer_main[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.Footer_main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 9px;\r\n  margin: 5px 0 5px 0;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.Dont_Rept[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.Dona_Wajibah[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  height: 19px;\r\n  margin: 0 0 3px 2px;\r\n  padding: 2px;\r\n  vertical-align: middle;\r\n  font-weight: bold;\r\n}\r\n\r\n.Donor_Signature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  margin: 12px 0;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.donation_type[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-right: 1px solid #000;\r\n  font-size: 15px;\r\n  text-align: center;\r\n  padding: 1px;\r\n}\r\n\r\n.Dona_Wajibah[_ngcontent-%COMP%] {\r\n  margin: 0 0 0 20px;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 900;\r\n}\r\n\r\n@media screen and (max-device-width:767px), screen and (max-width:767px) {\r\n  .class_res[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    width: 100%;\r\n  }\r\n\r\n  .same_td_logos[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n  }\r\n\r\n  .text-aling-center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .text-aling-left[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n\r\n  .margin_top_res[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n\r\n  }\r\n\r\n  .width_sevenHundred[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n\r\n  .width_fourHundred[_ngcontent-%COMP%] {\r\n    width: 550px;\r\n  }\r\n\r\n  .img_center_res[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  td[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  th[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  .col_res_width[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n  }\r\n\r\n  .Header_Doner_left[_ngcontent-%COMP%] {\r\n\r\n    padding: 40px 0px;\r\n  }\r\n\r\n  .Donor_Information_left[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n  }\r\n}\r\n\r\n.td_img_align[_ngcontent-%COMP%]{\r\n\tpadding-left: 50px;\r\n}\r\n\r\n.ctable[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin: 10px 0px 10px 40px;\r\n}\r\n\r\n\r\n\r\n.recipt-main[_ngcontent-%COMP%]   .all_purpose[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #000 !important;\r\n\tcolor: #000 !important; \r\n}\r\n\r\n.no-border[_ngcontent-%COMP%] {\r\n  border-bottom: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWNvbG9yLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsdUVBQXVFO0NBQ3ZFLGVBQWU7QUFDaEI7O0FBRUEsS0FBSyxrQkFBa0I7Q0FDdEIsdUVBQXVFO0NBQ3ZFLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCOztBQUdBLGNBQWM7O0FBRWQ7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBOzs7O0NBSUMsbUJBQW1CO0FBQ3BCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7O0NBRUMsY0FBYztDQUNkLGNBQWM7Q0FDZCx5Q0FBeUM7Q0FDekMsa0JBQWtCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBOzs7O0NBSUMsV0FBVztJQUNSLGNBQWM7SUFDZCx5Q0FBeUM7Q0FDNUMsVUFBVTtDQUNWLGdCQUFnQjtBQUNqQjs7QUFHQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBOztDQUVDLG1CQUFtQjtDQUNuQixlQUFlO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUdBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFHQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2QseUNBQXlDO0NBQ3pDLGVBQWU7Q0FDZixvQkFBb0I7QUFDckI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVix5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtDQUNDLHNCQUFzQjtJQUNuQix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFJQTtFQUVFO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBR0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiwwQkFBMEI7QUFDM0I7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJLGlDQUFpQztDQUNwQyxzQkFBc0I7QUFDdkI7O0FBR0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBQ0EsbUJBQW1CIiwiZmlsZSI6InByaW50LWNvbG9yLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBoMiwgaDMsIGg0IHtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG5oMiB7XHJcblx0Zm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnbHVjaWRhIGdyYW5kZScsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxOTAlO1xyXG59XHJcblxyXG5oMyB7IC8qY29sb3I6ICMyYzY4Nzc7Ki9cclxuXHRmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdsdWNpZGEgZ3JhbmRlJywgaGVsdmV0aWNhLCBhcmlhbCwgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE2NSU7XHJcbn1cclxuXHJcbmg0IHtcclxuXHRjb2xvcjogIzk5MztcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHByaW50IHt9XHJcblxyXG5AcGFnZSB7XHJcbiAgc2l6ZTogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfbGVmdCxcclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIsXHJcbi5IZWFkZXJfRG9uZXJfcmlnaHQsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9sZWZ0e1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfbGVmdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1OGIyY2E7XHJcbiAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gIHBhZGRpbmc6IDAgMCA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfY2VudGVyIHtcclxuICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9yaWdodCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIgYSxcclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIgaDEge1xyXG5cdGNvbG9yOiAjMDBiMDUwO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9jZW50ZXIgYSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uSGVhZGVyX0RvbmVyX2NlbnRlciBoMSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiA2cHg7XHJcbn1cclxuXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uSGVhZGVyX0RvbmVyX3JpZ2h0IHAsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9jZW50ZXIsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9sZWZ0IHAsXHJcbi5Eb25vcl9JbmZvcm1hdGlvbl9jZW50ZXIgcHtcclxuXHRjb2xvcjogIzAwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0cGFkZGluZzogMDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLkhlYWRlcl9Eb25lcl9yaWdodCBwIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAycHggMDtcclxufVxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2NlbnRlcixcclxuLkRvbm9yX0luZm9ybWF0aW9uX2NlbnRlciBwe1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDExcHggMCAwO1xyXG59XHJcblxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQgcCB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgbWFyZ2luOiAwIDAgMCAxOHB4O1xyXG59XHJcblxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQgaDMge1xyXG5cdGNvbG9yOiAjNDM4MWVhO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW46IDAgMCA0cHggMThweDtcclxufVxyXG5cclxuXHJcbi50YWJsZV9tYWluIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNThiMmNhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxufVxyXG5cclxuLkxvY2F0aW9uIHtcclxuICBtYXJnaW46IDhweCAwIDA7XHJcbn1cclxuXHJcbi5Mb2NhdGlvbiBoNCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogNDYlO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi5Mb2NhdGlvbiBwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG50ci5kb25hdGlvbl90eXBlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwICNGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxudHIuYWxsX3B1cnBvc2Uge1xyXG4gIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmFsbF9wdXJwb3NlPnRoIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG5cclxuLkZvb3Rlcl9tYWluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLkZvb3Rlcl9tYWluIHAge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgNXB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5Eb250X1JlcHQgdGQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uRG9uYV9XYWppYmFoIHAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgbWFyZ2luOiAwIDAgM3B4IDJweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLkRvbm9yX1NpZ25hdHVyZSBwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZG9uYXRpb25fdHlwZSB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG4uRG9uYV9XYWppYmFoIHtcclxuICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbn1cclxuXHJcbi5IZWFkZXJfRG9uZXJfcmlnaHQgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDo3NjdweCksXHJcbnNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gIC5jbGFzc19yZXMge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zYW1lX3RkX2xvZ29zIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWFsaW5nLWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGV4dC1hbGluZy1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luX3RvcF9yZXMge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAud2lkdGhfc2V2ZW5IdW5kcmVkIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG4gIC53aWR0aF9mb3VySHVuZHJlZCB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1nX2NlbnRlcl9yZXMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29sX3Jlc193aWR0aCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuSGVhZGVyX0RvbmVyX2xlZnQge1xyXG5cclxuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnRkX2ltZ19hbGlnbntcclxuXHRwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuLmN0YWJsZXtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAxMHB4IDBweCAxMHB4IDQwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBhZGRlZCBieSBmYXlleiAqL1xyXG5cclxuLnJlY2lwdC1tYWluIC5hbGxfcHVycG9zZSB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICMwMDAgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG4ubm8tYm9yZGVyIHtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogZW5kZWQgYnkgZmF5ZXogKi8iXX0= */"] });


/***/ }),

/***/ 54885:
/*!************************************************************!*\
  !*** ./src/app/blank/print-black/print-black.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintBlackComponent": () => (/* binding */ PrintBlackComponent)
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









function PrintBlackComponent_tr_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 46);
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
    const receipt_data_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.donation_type == null ? null : receipt_data_r2.donation_type.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.donation_sub_type == null ? null : receipt_data_r2.donation_sub_type.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.purpose == null ? null : receipt_data_r2.purpose.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.pay_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.instrument_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.bank == null ? null : receipt_data_r2.bank.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.currency == null ? null : receipt_data_r2.currency.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](21, 13, receipt_data_r2 == null ? null : receipt_data_r2.amount, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.branch == null ? null : receipt_data_r2.branch.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.additionalInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](receipt_data_r2 == null ? null : receipt_data_r2.majlis == null ? null : receipt_data_r2.majlis.title);
} }
function PrintBlackComponent_table_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Donation Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "In-Kind");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Wajibah Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Nafila Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](42, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](50, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Grand Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](58, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](62, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](66, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](26, 10, ctx_r1.other_detail.wajiba.cash, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](30, 14, ctx_r1.other_detail.wajiba.inkind, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](34, 18, ctx_r1.other_detail.wajiba.total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](42, 22, ctx_r1.other_detail.nafila.cash, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](46, 26, ctx_r1.other_detail.nafila.inkind, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](50, 30, ctx_r1.other_detail.nafila.total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](58, 34, ctx_r1.other_detail.grandTotal.cash, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](62, 38, ctx_r1.other_detail.grandTotal.inkind, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](66, 42, ctx_r1.other_detail.grandTotal.total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.final_Total, " only");
} }
class PrintBlackComponent {
    constructor(http, helper, activeRoute) {
        this.http = http;
        this.helper = helper;
        this.activeRoute = activeRoute;
        this.printData = {};
        this.batchName = '';
        this.printBy = '';
        this.wajibaCash = '';
        this.wajibaIn_kind = '';
        this.nafilaCash = '';
        this.nafilaIn_kind = '';
        this.final_Total = '';
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
        })
            .subscribe((res) => {
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
PrintBlackComponent.ɵfac = function PrintBlackComponent_Factory(t) { return new (t || PrintBlackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_4__.HTTPService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_form_helper_service__WEBPACK_IMPORTED_MODULE_5__.FormHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
PrintBlackComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PrintBlackComponent, selectors: [["app-print-black"]], decls: 183, vars: 18, consts: [[1, "recipt-main", 2, "margin", "0px auto", "padding", "10px", "background", "white", "width", "100%"], ["id", "wrapper", "width", "630", "cellpadding", "0", "cellspacing", "0", "border", "0", "background", "./receipt_color_files/testing.png", 1, "Dont_Rept", "class_res", 2, "width", "82%", "background", "white", "padding", "10px", "height", "100vh"], ["colspan", "2", 2, "font-size", "12px", "padding-left", "25px", "padding-top", "10px"], ["height", "5", 2, "text-align", "right", "padding-right", "120px", "padding-top", "0px"], ["src", "https://www.ginifab.com/feeds/qr_code/img/qr_code_scanner.jpg", 2, "width", "12%"], [1, "text-aling-center"], ["width", "625", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Donor_Information_left", 2, "margin-top", "70px"], [2, "float", "right", "margin-bottom", "-88px"], ["id", "container"], ["width", "100", "height", "100"], ["width", "360", "cellpadding", "0", "cellspacing", "0", "border", "0"], ["align", "left", 1, "text-aling-left"], ["align", "left"], [2, "font-size", "16px"], [2, "display", "block"], [2, "font-size", "11px"], [2, "text-align", "center"], ["width", "295", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "Donor_Information_center", 2, "margin-right", "100px"], ["align", "right", "valign", "top", "width", "200"], ["cellpadding", "0", "cellspacing", "0", "border", "0"], ["align", "center"], [2, "margin-left", "80px", "margin-top", "4px"], [2, "font-size", "12px"], [2, "margin-left", "80px"], [1, "Location", "margin_top_res", "ctable", 2, "margin-bottom", "0", "padding-bottom", "0"], [2, "margin-bottom", "0 !important"], [2, "margin-right", "0px !important", "margin-left", "-13px"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "border", "0", 1, "table_main", 2, "width", "95%"], [1, "donation_type"], [2, "color", "#000"], ["class", "all_purpose", 4, "ngFor", "ngForOf"], ["type", "hidden", "id", "text", "value", "https://donations.dawateislami.info/result/detail/f1cb5e42072745db5b1bc392eac9b5e9f7c271ac"], ["width", "625", "cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Header_Doner_left", "outer_table"], [1, "inner_main_table"], ["width", "310", "align", "left"], ["cellspacing", "0", "cellpadding", "0", "border", "0", "class", "Dona_Wajibah width_sevenHundred", 4, "ngIf"], ["width", "300", "valign", "top", 1, "width_fourHundred", 2, "margin-left", "100px"], ["cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Donor_Signature", 2, "/* margin", "0px 0px 10px 80px", "*/width", "100%"], [2, "width", "auto", "text-align", "right"], ["align", "left", 2, "text-align", "revert"], ["width", "350", 2, "margin-right", "20px", 3, "src"], ["align", "left", 2, "text-align", "right"], [2, "text-align", "right", "margin-right", "26px"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "border", "0"], [1, "Footer_main"], ["height", "50"], [1, "all_purpose"], ["cellspacing", "0", "cellpadding", "0", "border", "0", 1, "Dona_Wajibah", "width_sevenHundred"], ["align", "left", "width", "100"], ["align", "left", "width", "100", 1, "col_res_width"], ["colspan", "4", "width", "400", "align", "left"], [2, "height", "auto !important", "text-transform", "capitalize"]], template: function PrintBlackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Printed Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Printed By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Donor's Information:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "strong", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Receipt No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "strong", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "caption", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, " Location: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, " Cabina: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, "Donation Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "Sub Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, "Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, "Pay Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](125, "Instrument No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, "Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "Cur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "Add. Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](139, "Majlis");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](141, PrintBlackComponent_tr_141_Template, 28, 17, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](142, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "tbody", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](149, PrintBlackComponent_table_149_Template, 71, 46, "table", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "tbody", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](154, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](155, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](159, "Received By: _________________________");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](162, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](163, "Donor Signature: ______________________");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "table", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](169, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](170, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "table", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](174, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](178, "Alami Madani Markaz, Faizan-e-Madinah Mahallah Saudagran, Purani Sabzi Mandi, Bab-ul-Madinah, Karachi, Pakistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](180, "Phone: +92 21 -34921389-91, UAN: 111 -25-26-92, E-Mail: donations@dawateislami.net, http://www.dawateislami.net/donation/donate.do ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](181, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](182, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.currDateandTime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.printBy, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.printData == null ? null : ctx.printData.displayName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.printData == null ? null : ctx.printData.donor == null ? null : ctx.printData.donor.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.printData == null ? null : ctx.printData.donor == null ? null : ctx.printData.donor.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("C/o: ", ctx.printData == null ? null : ctx.printData.additional_info == null ? null : ctx.printData.additional_info.careOfName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("User: ", ctx.printData == null ? null : ctx.printData.created_by == null ? null : ctx.printData.created_by.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Time: ", (ctx.printData == null ? null : ctx.printData.date) + " " + (ctx.printData == null ? null : ctx.printData.time), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("C.P : ", ctx.printData == null ? null : ctx.printData.operating_unit == null ? null : ctx.printData.operating_unit.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Batch : ", ctx.printData == null ? null : ctx.printData.batch_number, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.printData == null ? null : ctx.printData.receipt_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Date: ", ctx.printData == null ? null : ctx.printData.date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("MR No: ", ctx.printData == null ? null : ctx.printData.additional_info == null ? null : ctx.printData.additional_info.mr, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.printData == null ? null : ctx.printData.divison == null ? null : ctx.printData.divison.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.printData == null ? null : ctx.printData.cabina == null ? null : ctx.printData.cabina.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.printData.receipt_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.printData != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx.printData == null ? null : ctx.printData.images == null ? null : ctx.printData.images.warning_image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 0.5em;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] { \r\n\t\r\n\tfont-size: 100%;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] { \r\n\t\r\n\tfont-family: 'Gill Sans', 'lucida grande', helvetica, arial, sans-serif;\r\n\tfont-size: 190%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] { \r\n\tfont-family: 'Gill Sans', 'lucida grande', helvetica, arial, sans-serif;\r\n\tfont-size: 165%;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n\tcolor: #993;\r\n\tfont-weight: normal;\r\n}\r\n\r\n@media print {}\r\n\r\n@page {\r\n  size: auto;\r\n  margin: 0;\r\n}\r\n\r\n.Header_Doner_left[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #000;\r\n  \r\n  margin: 0 0 5px;\r\n  padding: 0 0 5px;\r\n  vertical-align: top;\r\n  width: 100%;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-align: center;\r\n  vertical-align: top;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  margin: 2px 0;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  vertical-align: top;\r\n}\r\n\r\n.Donor_Information_center[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  vertical-align: top;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: #4381ea;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  margin: 0 0 4px 18px;\r\n}\r\n\r\n.Donor_Information_left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 9px;\r\n  margin: 0 0 0 18px;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.Donor_Information_center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 9px;\r\n  font-weight: normal;\r\n  margin: 0 11px 0 0;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.table_main[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  margin: 0 auto 10px;\r\n}\r\n\r\n.Location[_ngcontent-%COMP%] {\r\n  margin: 8px 0 0;\r\n}\r\n\r\n.Location[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 16px;\r\n  padding: 5px;\r\n  text-align: left;\r\n\r\n  width: 46%;\r\n  margin-right: 40px;\r\n  margin-left: -20px;\r\n  \r\n}\r\n\r\n.Location[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 12px;\r\n}\r\n\r\ntr.donation_type[_ngcontent-%COMP%] {\r\n  background: none repeat scroll 0 0 #FFF;\r\n  border-radius: 4px;\r\n  color: #000;\r\n  height: 35px;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n}\r\n\r\ntr.all_purpose[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n}\r\n\r\n.all_purpose[_ngcontent-%COMP%] > th[_ngcontent-%COMP%] {\r\n  border-right: 1px solid #000;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n  text-align: center;\r\n  padding: 1px;\r\n}\r\n\r\n.Footer_main[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  \r\n  width: 100%;\r\n}\r\n\r\n.Footer_main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 9px;\r\n  margin: 5px 0 5px 0;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.Dont_Rept[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.Dona_Wajibah[_ngcontent-%COMP%] {\r\n\tmargin: 0 0 0 20px;\r\n}\r\n\r\n.Dona_Wajibah[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  border: 1px solid #000;\r\n  border-radius: 4px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  height: 19px;\r\n  margin: 0 0 3px 2px;\r\n  padding: 2px;\r\n  vertical-align: middle;\r\n  font-weight: bold\r\n  \r\n  \r\n}\r\n\r\n.Donor_Signature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  display: block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  margin: 12px 0;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.donation_type[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #000;\r\n  border-right: 1px solid #000;\r\n  font-size: 15px;\r\n    text-align: center;\r\n    padding: 1px;\r\n}\r\n\r\n.Header_Doner_right[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  font-weight: 900;\r\n}\r\n\r\n@media screen and (max-device-width:767px), screen and (max-width:767px) {\r\n  .class_res[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    width: 100%;\r\n  }\r\n\r\n  .same_td_logos[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n  }\r\n\r\n  .text-aling-center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .text-aling-left[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n\r\n  .margin_top_res[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n\r\n  }\r\n\r\n  .width_sevenHundred[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n\r\n  .width_fourHundred[_ngcontent-%COMP%] {\r\n    width: 550px;\r\n  }\r\n\r\n  .img_center_res[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  td[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  th[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n  }\r\n\r\n  .col_res_width[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n  }\r\n\r\n  .Header_Doner_left[_ngcontent-%COMP%] {\r\n    padding: 40px 0px;\r\n  }\r\n\r\n  .Donor_Information_left[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n  }\r\n}\r\n\r\n.ctable[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin: 10px 0px 10px 40px;\r\n}\r\n\r\n\r\n\r\n.recipt-main[_ngcontent-%COMP%]   .all_purpose[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border: 1px solid #000 !important;\r\ncolor: #000 !important; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWJsYWNrLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsb0JBQW9CO0FBQ3JCOztBQUVBLEtBQUssc0JBQXNCO0NBQzFCLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCOztBQUVBLEtBQUssbUJBQW1CO0NBQ3ZCLGVBQWU7Q0FDZix1RUFBdUU7Q0FDdkUsZUFBZTtBQUNoQjs7QUFFQSxLQUFLLGtCQUFrQjtDQUN0Qix1RUFBdUU7Q0FDdkUsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7O0FBTUEsY0FBYzs7QUFFZDtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjs7RUFFaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEI7Ozs7Ozs7O3dCQVFzQjs7QUFFeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixlQUFlO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBRUU7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCOztFQUVsQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUdBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMEJBQTBCO0FBQzNCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxpQ0FBaUM7QUFDbkMsc0JBQXNCO0FBQ3RCOztBQUVBLG1CQUFtQiIsImZpbGUiOiJwcmludC1ibGFjay5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDEsIGgyLCBoMywgaDQge1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbn1cclxuXHJcbmgxIHsgLypiYWNrZ3JvdW5kOiM5OUM5MkI7Ki9cclxuXHQvKmNvbG9yOiAjMDAzZDRjOyovXHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG5oMiB7IC8qYmFja2dyb3VuZDojZmZmOyovXHJcblx0Lypjb2xvcjogI2UzMjsqL1xyXG5cdGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ2x1Y2lkYSBncmFuZGUnLCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTkwJTtcclxufVxyXG5cclxuaDMgeyAvKmNvbG9yOiAjMmM2ODc3OyovXHJcblx0Zm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnbHVjaWRhIGdyYW5kZScsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxNjUlO1xyXG59XHJcblxyXG5oNCB7XHJcblx0Y29sb3I6ICM5OTM7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBwcmludCB7fVxyXG5cclxuQHBhZ2Uge1xyXG4gIHNpemU6IGF1dG87XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uSGVhZGVyX0RvbmVyX2xlZnQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xyXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICBtYXJnaW46IDAgMCA1cHg7XHJcbiAgcGFkZGluZzogMCAwIDVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uSGVhZGVyX0RvbmVyX3JpZ2h0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcblxyXG4uSGVhZGVyX0RvbmVyX3JpZ2h0IHAge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDJweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2xlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLkRvbm9yX0luZm9ybWF0aW9uX2NlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uRG9ub3JfSW5mb3JtYXRpb25fbGVmdCBoMyB7XHJcbiAgY29sb3I6ICM0MzgxZWE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMCAwIDRweCAxOHB4O1xyXG59XHJcblxyXG4uRG9ub3JfSW5mb3JtYXRpb25fbGVmdCBwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDlweDtcclxuICBtYXJnaW46IDAgMCAwIDE4cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uRG9ub3JfSW5mb3JtYXRpb25fY2VudGVyIHAge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbWFyZ2luOiAwIDExcHggMCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuXHJcbi50YWJsZV9tYWluIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxufVxyXG5cclxuLkxvY2F0aW9uIHtcclxuICBtYXJnaW46IDhweCAwIDA7XHJcbn1cclxuXHJcbi5Mb2NhdGlvbiBoNCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgd2lkdGg6IDQ2JTtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIFxyXG59XHJcblxyXG4uTG9jYXRpb24gcCB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxudHIuZG9uYXRpb25fdHlwZSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCAjRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbnRyLmFsbF9wdXJwb3NlIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5hbGxfcHVycG9zZT50aCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG5cclxuLkZvb3Rlcl9tYWluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAvKiB3aWR0aDogNTk1cHg7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5Gb290ZXJfbWFpbiBwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDlweDtcclxuICBtYXJnaW46IDVweCAwIDVweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uRG9udF9SZXB0IHRkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLkRvbmFfV2FqaWJhaCB7XHJcblx0bWFyZ2luOiAwIDAgMCAyMHB4O1xyXG59XHJcblxyXG4uRG9uYV9XYWppYmFoIHAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgbWFyZ2luOiAwIDAgM3B4IDJweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbjogMCAwIDNweCAycHg7XHJcbiAgICBwYWRkaW5nOiAxcHggN3B4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4gIFxyXG59XHJcblxyXG4uRG9ub3JfU2lnbmF0dXJlIHAge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDEycHggMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5kb25hdGlvbl90eXBlIHRoIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFweDtcclxufVxyXG5cclxuLkhlYWRlcl9Eb25lcl9yaWdodCBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDo3NjdweCksXHJcbnNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gIC5jbGFzc19yZXMge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zYW1lX3RkX2xvZ29zIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWFsaW5nLWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGV4dC1hbGluZy1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luX3RvcF9yZXMge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAud2lkdGhfc2V2ZW5IdW5kcmVkIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG4gIC53aWR0aF9mb3VySHVuZHJlZCB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1nX2NlbnRlcl9yZXMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29sX3Jlc193aWR0aCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuSGVhZGVyX0RvbmVyX2xlZnQge1xyXG4gICAgcGFkZGluZzogNDBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAuRG9ub3JfSW5mb3JtYXRpb25fbGVmdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uY3RhYmxle1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtYXJnaW46IDEwcHggMHB4IDEwcHggNDBweDtcclxufVxyXG5cclxuLyogYWRkZWQgYnkgZmF5ZXogKi9cclxuXHJcbi5yZWNpcHQtbWFpbiAuYWxsX3B1cnBvc2UgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcclxuY29sb3I6ICMwMDAgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi8qIGVuZGVkIGJ5IGZheWV6ICovIl19 */"] });


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

/***/ 16958:
/*!**********************************************************!*\
  !*** ./src/app/blank/qr-receipt/qr-receipt.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrReceiptComponent": () => (/* binding */ QrReceiptComponent)
/* harmony export */ });
/* harmony import */ var src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base-list-class */ 42286);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ 71144);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 16873);







function QrReceiptComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QrReceiptComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
} }
function QrReceiptComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QrReceiptComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r9.date, " ");
} }
function QrReceiptComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QrReceiptComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r10.amount, " ");
} }
function QrReceiptComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 22);
} }
function QrReceiptComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 23);
} }
const _c0 = function () { return ["/transaction/cash_cheque_add"]; };
const _c1 = function () { return ["/dm_dashboard"]; };
class QrReceiptComponent extends src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__.BaseListClass {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    ngOnInit() {
        this.initTables();
    }
    initTables() {
        this._reset(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].columns = ['name', 'date', 'amount'];
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.QR_RECEIPT;
        this.getData();
    }
    getData() {
        this._activeRoute.params.subscribe(params => {
            const id = params['id'];
            this._http.get({
                endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.QR_RECEIPT,
                query: {
                    id
                }
            }).subscribe(res => {
                const records = [res.data.row];
                this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].dataSource.data = records;
            });
        });
    }
}
QrReceiptComponent.ɵfac = function QrReceiptComponent_Factory(t) { return new (t || QrReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector)); };
QrReceiptComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QrReceiptComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 8, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0", "d-flex", "justify-content-center"], [1, "automatic__sizing"], [2, "border-top", "0px !important"], [1, "card-body", "pt-0"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "name"], ["class", "pr-3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "amount"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "card-footer"], [1, "col-12", "text-center"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "m-2", 3, "routerLink"], ["mat-header-cell", "", 1, "pr-3"], ["mat-cell", "", 1, "px-3"], ["mat-header-row", ""], ["mat-row", ""]], template: function QrReceiptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("matSortChange", function QrReceiptComponent_Template_table_matSortChange_9_listener($event) { return ctx._sort($event, ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](10, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, QrReceiptComponent_th_11_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, QrReceiptComponent_td_12_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, QrReceiptComponent_th_14_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, QrReceiptComponent_td_15_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, QrReceiptComponent_th_17_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, QrReceiptComponent_td_18_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, QrReceiptComponent_tr_19_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, QrReceiptComponent_tr_20_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Donate More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.URLz.$].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.URLz.$].columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.URLz.$].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink], styles: [".automatic__sizing[_ngcontent-%COMP%]{\r\n  margin: 0px auto 0px auto;\r\n  width: 90%;\r\n  height: 50px;\r\n  background-image: url('main.png');\r\n  background-position: center;\r\n  background-size: 170px;\r\n  background-repeat: no-repeat;\r\n}\r\n.topbar[_ngcontent-%COMP%]   .top-navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{\r\n  padding: 0px  0px 0px 0px!important;\r\n}\r\n.margin-left-zero[_ngcontent-%COMP%]{\r\nmargin-left: 0 !important;\r\n}\r\n.margin-left-two-twenty[_ngcontent-%COMP%]{\r\nmargin-left: 220px !important;\r\n}\r\n@media(max-width: 992px){\r\n  .automatic__sizing[_ngcontent-%COMP%]{\r\n      padding: 0px 100px;\r\n  }\r\n}\r\n.card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.text-red[_ngcontent-%COMP%]{\r\n  color: #c53b55;\r\n}\r\n.mat-column-id[_ngcontent-%COMP%]{\r\n  border-right: 0px solid #90909400 !important;\r\n}\r\n\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\nfont-size: 22px;\r\nbackground: #039be5;\r\nbox-shadow: 0px 10px 7px -7px #00000057;\r\nmargin: 0px 0px 10px 0px;\r\npadding: 10px 10px;\r\ncolor: white;\r\n}\r\n\r\n\r\n.custon__add__btns__class[_ngcontent-%COMP%]{\r\nposition: absolute;\r\nright: 0;\r\ntop: 0;\r\nheight: 100%;\r\npadding: 3px 5px;\r\nbackground: transparent;\r\nborder: 0px;\r\nbox-shadow: 0px 0px 0px transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:hover{\r\nbackground-color: transparent !important;\r\nborder-color: transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:active{\r\nbackground-color: transparent !important;\r\n  border-color: transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:focus{\r\nbackground-color: transparent !important;\r\nborder-color: transparent !important;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper{\r\npadding: 0px 15px;\r\ncolor: white !important;\r\nbackground: #00c292 !important;\r\ndisplay: block;\r\nfont-size: 15px;\r\nborder-radius: 3px;\r\ntransition: 0.5s;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper:hover{\r\nbox-shadow: 0px 0px 10px -4px #000000a6;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-ripple.mat-button-ripple{\r\ndisplay: none !important;\r\nopacity: 0 !important;\r\n}\r\n.cdk-mouse-focused.cdk-focused[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{\r\nopacity: 0 !important;\r\n}\r\n.slection__styled   [_nghost-%COMP%]      .search.ng-touched{\r\ncolor: #1a1a1a !important;\r\n\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%]{\r\nbackground: #024e70 !important;\r\ncolor: white !important;\r\n}\r\n.search[_ngcontent-%COMP%]{\r\ncolor: #ffffff !important;\r\nborder-bottom: 1px solid whitesmoke;\r\n}\r\n[_nghost-%COMP%]      .mat-sort-header-arrow{\r\ncolor: white;\r\n}\r\n[_nghost-%COMP%]      .mat-sort-header-content{\r\ncolor: white !important;\r\n}\r\n[_nghost-%COMP%]      .search::-moz-placeholder{\r\ncolor: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search:-ms-input-placeholder{\r\ncolor: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search::placeholder{\r\ncolor: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search.ng-touched{\r\ncolor: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search .ng-star-inserted{\r\ncolor: #000 !important;\r\n}\r\n\r\n\r\n.mat_table[_ngcontent-%COMP%]{\r\nmax-height: 490px;\r\nheight: auto;\r\n}\r\ntr.mat-header-row[_ngcontent-%COMP%]{\r\nheight: 40px !important;\r\n}\r\n[_nghost-%COMP%]      tr.mat-row, tr.mat-footer-row[_ngcontent-%COMP%]{\r\nheight: 40px !important;\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{\r\nwhite-space: nowrap !important;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(odd){\r\nbackground-color: #ffffff00 !important;\r\ntransition: 0.1s;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(even){\r\nbackground-color: #b3eeff2c !important;\r\nborder-top: 2px solid #0000000d !important;\r\nborder-bottom: 2px solid #0000000d !important;\r\ntransition: 0.1s;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(even):hover{\r\nbox-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(odd):hover{\r\nbox-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .switch.switch-small.checked{\r\nbackground-color: #03a9f3 !important;\r\n}\r\n\r\n\r\n.custom__select__class[_ngcontent-%COMP%]{\r\nborder-radius: 3px;\r\npadding: 4px;\r\nborder: 1px solid #0000004b;\r\nbackground: white;\r\n}\r\n.custom__select__class[_ngcontent-%COMP%]   .cus_opt[_ngcontent-%COMP%]{\r\nborder-radius: 4px;\r\nbackground: #ffffff;\r\nbox-shadow: 0px 0px 10px black;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-paginator-range-label{\r\nmargin: 0px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLXJlY2VpcHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlDQUEyRDtFQUMzRCwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUVBO0VBQ0U7TUFDSSxrQkFBa0I7RUFDdEI7QUFDRjtBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLHVDQUF1QztBQUN2Qyx3QkFBd0I7QUFDeEIsa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWjtBQUNBLGlCQUFpQjtBQUVqQix3QkFBd0I7QUFDeEI7QUFDQSxrQkFBa0I7QUFDbEIsUUFBUTtBQUNSLE1BQU07QUFDTixZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLHVCQUF1QjtBQUN2QixXQUFXO0FBQ1gsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSx3Q0FBd0M7RUFDdEMsb0NBQW9DO0FBQ3RDO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5QixjQUFjO0FBQ2QsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBRkE7QUFDQSx5QkFBeUI7QUFDekI7QUFGQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSx5QkFBeUI7QUFFekIsMEJBQTBCO0FBQzFCO0FBQ0EsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLDBDQUEwQztBQUMxQyw2Q0FBNkM7QUFDN0MsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBLDBCQUEwQjtBQUUxQixvQ0FBb0M7QUFDcEM7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSxvQ0FBb0M7QUFFcEMsdUJBQXVCO0FBQ3ZCO0FBQ0Esa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWiwyQkFBMkI7QUFDM0IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLDhCQUE4QjtBQUM5QjtBQUNBLHVCQUF1QjtBQUV2QixvQkFBb0I7QUFDcEI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxvQkFBb0IiLCJmaWxlIjoicXItcmVjZWlwdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dG9tYXRpY19fc2l6aW5ne1xyXG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby9tYWluLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTcwcHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4udG9wYmFyIC50b3AtbmF2YmFyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmR7XHJcbiAgcGFkZGluZzogMHB4ICAwcHggMHB4IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXJnaW4tbGVmdC16ZXJve1xyXG5tYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXJnaW4tbGVmdC10d28tdHdlbnR5e1xyXG5tYXJnaW4tbGVmdDogMjIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogOTkycHgpe1xyXG4gIC5hdXRvbWF0aWNfX3NpemluZ3tcclxuICAgICAgcGFkZGluZzogMHB4IDEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmRfX3N0eWxpbmd7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzZDtcclxufVxyXG4udGV4dC1yZWR7XHJcbiAgY29sb3I6ICNjNTNiNTU7XHJcbn1cclxuLm1hdC1jb2x1bW4taWR7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgIzkwOTA5NDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogSEVBREVSIFNUWUxFICovXHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmd7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG92ZXJmbG93LXg6IGNsaXA7XHJcbn1cclxuLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuZm9udC1zaXplOiAyMnB4O1xyXG5iYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG5ib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbm1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcclxucGFkZGluZzogMTBweCAxMHB4O1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuLyogSEVBREVSIFNUWUxFICovXHJcblxyXG4vKiBIRUFERVIgQlVUVE9OIFNUWUxFICovXHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3N7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxucmlnaHQ6IDA7XHJcbnRvcDogMDtcclxuaGVpZ2h0OiAxMDAlO1xyXG5wYWRkaW5nOiAzcHggNXB4O1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuYm9yZGVyOiAwcHg7XHJcbmJveC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczpob3ZlcntcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3M6YWN0aXZle1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmZvY3Vze1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3MgLm1hdC1idXR0b24td3JhcHBlcntcclxucGFkZGluZzogMHB4IDE1cHg7XHJcbmNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG5iYWNrZ3JvdW5kOiAjMDBjMjkyICFpbXBvcnRhbnQ7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDNweDtcclxudHJhbnNpdGlvbjogMC41cztcclxufVxyXG46aG9zdCAvZGVlcC8gLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzcyAubWF0LWJ1dHRvbi13cmFwcGVyOmhvdmVye1xyXG5ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggLTRweCAjMDAwMDAwYTY7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3MgLm1hdC1yaXBwbGUubWF0LWJ1dHRvbi1yaXBwbGV7XHJcbmRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxub3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jZGstbW91c2UtZm9jdXNlZC5jZGstZm9jdXNlZCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e1xyXG5vcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNsZWN0aW9uX19zdHlsZWQgOmhvc3QgL2RlZXAvICAuc2VhcmNoLm5nLXRvdWNoZWR7XHJcbmNvbG9yOiAjMWExYTFhICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGx7XHJcbmJhY2tncm91bmQ6ICMwMjRlNzAgIWltcG9ydGFudDtcclxuY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaHtcclxuY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNvcnQtaGVhZGVyLWFycm93e1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNvcnQtaGVhZGVyLWNvbnRlbnR7XHJcbmNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLnNlYXJjaDo6cGxhY2Vob2xkZXJ7XHJcbmNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoLm5nLXRvdWNoZWR7XHJcbmNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoIC5uZy1zdGFyLWluc2VydGVke1xyXG5jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIFRBQkxFIGhlYWRlciBTVFlMSU5HICovXHJcblxyXG4vKiBsaXN0IHN0eWxpbmcgaW4gdGFibGUgKi9cclxuLm1hdF90YWJsZXtcclxubWF4LWhlaWdodDogNDkwcHg7XHJcbmhlaWdodDogYXV0bztcclxufVxyXG50ci5tYXQtaGVhZGVyLXJvd3tcclxuaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICB0ci5tYXQtcm93LCB0ci5tYXQtZm9vdGVyLXJvd3tcclxuaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1mb290ZXItY2VsbCwgLm1hdC1jZWxse1xyXG53aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMCAhaW1wb3J0YW50O1xyXG50cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcclxuYmFja2dyb3VuZC1jb2xvcjogI2IzZWVmZjJjICFpbXBvcnRhbnQ7XHJcbmJvcmRlci10b3A6IDJweCBzb2xpZCAjMDAwMDAwMGQgIWltcG9ydGFudDtcclxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDAwZCAhaW1wb3J0YW50O1xyXG50cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChldmVuKTpob3ZlcntcclxuYm94LXNoYWRvdzowcHggMHB4IDhweCAwcHggIzAwMDAwMDVlO1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChvZGQpOmhvdmVye1xyXG5ib3gtc2hhZG93OjBweCAwcHggOHB4IDBweCAjMDAwMDAwNWU7XHJcbn1cclxuLyogbGlzdCBzdHlsaW5nIGluIHRhYmxlICovXHJcblxyXG4vKiBjaGFjayBvbiBvciBvZmYgYnV0dG9uICBzdHlsaW5nICovXHJcbjpob3N0IC9kZWVwLyAgLnN3aXRjaC5zd2l0Y2gtc21hbGwuY2hlY2tlZHtcclxuYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmMyAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGNoYWNrIG9uIG9yIG9mZiBidXR0b24gIHN0eWxpbmcgKi9cclxuXHJcbi8qIHNlbGVjdCBib3ggc3R5bGluZyAqL1xyXG4uY3VzdG9tX19zZWxlY3RfX2NsYXNze1xyXG5ib3JkZXItcmFkaXVzOiAzcHg7XHJcbnBhZGRpbmc6IDRweDtcclxuYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDRiO1xyXG5iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uY3VzdG9tX19zZWxlY3RfX2NsYXNzIC5jdXNfb3B0e1xyXG5ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbmJveC1zaGFkb3c6IDBweCAwcHggMTBweCBibGFjaztcclxufVxyXG4vKiBzZWxlY3QgYm94IHN0eWxpbmcgKi9cclxuXHJcbi8qIHBhZ2luYXRpb24gYXJlYSAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVse1xyXG5tYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHBhZ2luYXRpb24gYXJlYSAqL1xyXG4iXX0= */"] });


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