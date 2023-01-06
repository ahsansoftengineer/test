"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["src_app_feature_transaction_transaction_module_ts"],{

/***/ 55934:
/*!**********************************************************************!*\
  !*** ./src/app/feature/transaction/trans-add/trans-add.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransAddComponent": () => (/* binding */ TransAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_app_model_donor_donor_gsb_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/donor/donor-gsb.form */ 76011);
/* harmony import */ var src_app_model_transaction_full_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/transaction/full.form */ 56904);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _donor_info_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../donor/info/info.component */ 67418);
/* harmony import */ var _donor_gsb_gsb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../donor/gsb/gsb.component */ 75130);
/* harmony import */ var src_app_model_donor_full_basic_donor_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/donor/full-basic-donor.form */ 60940);
/* harmony import */ var src_app_model_donor_full_donor_gsb_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/donor/full-donor-gsb.form */ 44424);
/* harmony import */ var _trans_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trans-dialog.component */ 59448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/control/txt/txt.component */ 55806);
/* harmony import */ var _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/control/dd/dd.component */ 32231);
/* harmony import */ var _shared_components_control_cell_cell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/control/cell/cell.component */ 12080);
/* harmony import */ var _shared_components_control_ac_off_ac_off_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/control/ac-off/ac-off.component */ 53087);
/* harmony import */ var _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/control/date/date.component */ 24280);
/* harmony import */ var _shared_components_control_ddd_ddd_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/control/ddd/ddd.component */ 80834);
/* harmony import */ var _shared_components_control_ac_ac_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/control/ac/ac.component */ 30625);
/* harmony import */ var _shared_components_control_currency_currency_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/control/currency/currency.component */ 37063);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 15719);

























const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function TransAddComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TransAddComponent_div_0_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r6.hierarchyDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](4, _c0, ctx_r1._ss.lng === "en", ctx_r1._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 2, "Change Hierarchy"));
} }
function TransAddComponent_div_0_fieldset_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "fieldset", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "legend", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "donor-gsb");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 1, "Donor GSB Info"), " ");
} }
const _c1 = function (a0) { return { parent_id: a0 }; };
const _c2 = function (a0) { return { query: a0 }; };
function TransAddComponent_div_0_di_ac_off_36_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "di-ac-off", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("changeEvent", function TransAddComponent_div_0_di_ac_off_36_Template_di_ac_off_changeEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r8.handleCurrencyChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("param", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](6, _c1, ctx_r3._fs._form == null ? null : (tmp_0_0 = ctx_r3._fs._form.get("hierarchy.le")) == null ? null : tmp_0_0.value)))("parentFC", ctx_r3._fs._form == null ? null : ctx_r3._fs._form.get("hierarchy.le"))("both", true)("url", ctx_r3.URLz.CURRENCY)("disabled", ctx_r3._fhs._hasVal("id"))("length", 0);
} }
function TransAddComponent_div_0_di_date_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-date", 34);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("min", ctx_r4._ss == null ? null : ctx_r4._ss.permission_data_local == null ? null : ctx_r4._ss.permission_data_local.transaction_receipt_date)("max", ctx_r4._fhs._dateOnly());
} }
function TransAddComponent_div_0_div_39_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "div", 69);
} }
const _c3 = function (a0) { return { cih: a0 }; };
function TransAddComponent_div_0_div_39_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "di-ddd", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("changeEvent", function TransAddComponent_div_0_div_39_div_2_ng_container_2_Template_di_ddd_changeEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35); const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3); return ctx_r33.donationModeChanged($event, i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "di-ddd", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    let tmp_6_0;
    let tmp_10_0;
    let tmp_11_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("url", ctx_r14.URLz.DONATION_MODE)("oneTimeLoad", true)("load", false)("disabled", ctx_r14._fhs._hasVal("row_id", item_r11))("canLoadChild", !ctx_r14._fhs._hasVal("row_id", item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("lbl", ((item_r11 == null ? null : (tmp_6_0 = item_r11.get("donationMode")) == null ? null : tmp_6_0.value) == ctx_r14.RECEIPT_TYPEZ.CASH ? "Cash" : "Cheque") + " Account")("group", item_r11)("url", ctx_r14.URLz.BANK)("disabled", ctx_r14._fhs._hasVal("row_id", item_r11))("param", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](14, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](12, _c3, (item_r11 == null ? null : (tmp_10_0 = item_r11.get("donationMode")) == null ? null : tmp_10_0.value) == ctx_r14.RECEIPT_TYPEZ.CHEQUE ? 1 : null)))("parent_id", (item_r11 == null ? null : (tmp_11_0 = item_r11.get("donationMode")) == null ? null : tmp_11_0.value) == ctx_r14.RECEIPT_TYPEZ.CHEQUE ? ctx_r14.RECEIPT_TYPEZ.CHEQUE : ctx_r14.RECEIPT_TYPEZ.CASH);
} }
function TransAddComponent_div_0_div_39_div_2_ng_container_7_di_txt_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-txt", 76);
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("disabled", ctx_r37._fhs._hasVal("row_id", item_r11));
} }
function TransAddComponent_div_0_div_39_div_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "di-ac", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "di-txt", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "di-ddd", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, TransAddComponent_div_0_div_39_div_2_ng_container_7_di_txt_4_Template, 1, 2, "di-txt", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("url", ctx_r17.URLz.ITEM)("disabled", ctx_r17._fhs._hasVal("row_id", item_r11) || !((tmp_2_0 = item_r11.get("donation_type_id")) == null ? null : tmp_2_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("disabled", ctx_r17._fhs._hasVal("row_id", item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("load", false)("url", ctx_r17.URLz.UNIT_BY_ITEM_ID)("disabled", ctx_r17._fhs._hasVal("row_id", item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r17._fhs._has("description", item_r11));
} }
function TransAddComponent_div_0_div_39_div_2_di_ac_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-ac", 77);
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("url", ctx_r18.URLz.BRANCH)("req", false)("disabled", ctx_r18._fhs._hasVal("row_id", item_r11))("oneTimeLoad", true);
} }
function TransAddComponent_div_0_div_39_div_2_di_ac_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-ac", 78);
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("url", ctx_r19.URLz.FUND_CATEGORY)("req", false)("disabled", ctx_r19._fhs._hasVal("row_id", item_r11))("oneTimeLoad", true);
} }
function TransAddComponent_div_0_div_39_div_2_di_ac_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-ac", 79);
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("url", ctx_r20.URLz.C5)("group", item_r11)("req", false)("disabled", ctx_r20._fhs._hasVal("row_id", item_r11))("oneTimeLoad", true);
} }
function TransAddComponent_div_0_div_39_div_2_di_ddd_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-ddd", 80);
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("url", ctx_r21.URLz.DEFAULT)("req", false)("oneTimeLoad", false)("load", false)("disabled", ctx_r21._fhs._hasVal("row_id", item_r11));
} }
function TransAddComponent_div_0_div_39_div_2_di_ddd_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-ddd", 81);
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("url", ctx_r22.URLz.BANK_MASTER)("load", false)("oneTimeLoad", true)("renderRow", ctx_r22.bankCallBack.bind(ctx_r22))("parent_id", ctx_r22.RECEIPT_TYPEZ.CHEQUE)("disabled", ctx_r22._fhs._hasVal("row_id", item_r11));
} }
function TransAddComponent_div_0_div_39_div_2_di_ddd_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-ddd", 82);
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("url", ctx_r23.URLz.BANK)("load", false)("oneTimeLoad", true)("renderRow", ctx_r23.bankCallBack.bind(ctx_r23))("disabled", ctx_r23._fhs._hasVal("row_id", item_r11));
} }
function TransAddComponent_div_0_div_39_div_2_di_txt_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-txt", 83);
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("disabled", ctx_r24._fhs._hasVal("row_id", item_r11));
} }
function TransAddComponent_div_0_div_39_div_2_di_txt_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-txt", 84);
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("disabled", ctx_r25._fhs._hasVal("row_id", item_r11));
} }
function TransAddComponent_div_0_div_39_div_2_di_txt_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-txt", 85);
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("disabled", ctx_r26._fhs._hasVal("row_id", item_r11));
} }
function TransAddComponent_div_0_div_39_div_2_di_date_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-date", 86);
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("min", ctx_r27._fhs._LastSixMonthDate(6))("group", item_r11);
} }
function TransAddComponent_div_0_div_39_div_2_di_date_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-date", 87);
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("min", ctx_r28._fhs._LastSixMonthDate(1))("max", ctx_r28._fhs._dateOnly())("group", item_r11);
} }
function TransAddComponent_div_0_div_39_div_2_di_ac_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "di-ac", 88);
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("url", ctx_r29.URLz.ITEM)("disabled", ctx_r29._fhs._hasVal("row_id", item_r11) || !((tmp_2_0 = item_r11.get("donation_type_id")) == null ? null : tmp_2_0.value))("req", false);
} }
function TransAddComponent_div_0_div_39_div_2_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TransAddComponent_div_0_div_39_div_2_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r54); const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().index; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3); return ctx_r52.rmvReceiptDetail(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", !(ctx_r30.receiptDetails.length > 1));
} }
function TransAddComponent_div_0_div_39_div_2_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TransAddComponent_div_0_div_39_div_2_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); const i_r12 = ctx_r56.index; const item_r11 = ctx_r56.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3); return ctx_r55.cancelReceiptDetail(i_r12, item_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", item_r11.get("is_active").value === 2);
} }
function TransAddComponent_div_0_div_39_div_2_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TransAddComponent_div_0_div_39_div_2_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r61); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3); return ctx_r59.addReceiptDetail(item_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", item_r11.invalid || ctx_r32.exceedLimitDisable || ctx_r32.addMoreDisabled);
} }
const _c4 = function (a0) { return { prefix: a0 }; };
function TransAddComponent_div_0_div_39_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, TransAddComponent_div_0_div_39_div_2_div_1_Template, 1, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, TransAddComponent_div_0_div_39_div_2_ng_container_2_Template, 3, 16, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "di-ddd", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "di-ddd", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, TransAddComponent_div_0_div_39_div_2_ng_container_7_Template, 5, 10, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "di-currency", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "di-ac", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "di-ac", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "di-ac", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, TransAddComponent_div_0_div_39_div_2_di_ac_12_Template, 1, 5, "di-ac", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, TransAddComponent_div_0_div_39_div_2_di_ac_13_Template, 1, 5, "di-ac", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](14, "di-txt", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](15, TransAddComponent_div_0_div_39_div_2_di_ac_15_Template, 1, 5, "di-ac", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](16, TransAddComponent_div_0_div_39_div_2_di_ddd_16_Template, 1, 6, "di-ddd", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](17, TransAddComponent_div_0_div_39_div_2_di_ddd_17_Template, 1, 7, "di-ddd", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](18, TransAddComponent_div_0_div_39_div_2_di_ddd_18_Template, 1, 6, "di-ddd", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, TransAddComponent_div_0_div_39_div_2_di_txt_19_Template, 1, 2, "di-txt", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](20, TransAddComponent_div_0_div_39_div_2_di_txt_20_Template, 1, 2, "di-txt", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](21, TransAddComponent_div_0_div_39_div_2_di_txt_21_Template, 1, 2, "di-txt", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](22, TransAddComponent_div_0_div_39_div_2_di_date_22_Template, 1, 2, "di-date", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](23, TransAddComponent_div_0_div_39_div_2_di_date_23_Template, 1, 3, "di-date", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](24, TransAddComponent_div_0_div_39_div_2_di_ac_24_Template, 1, 4, "di-ac", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](27, TransAddComponent_div_0_div_39_div_2_button_27_Template, 2, 1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](28, TransAddComponent_div_0_div_39_div_2_button_28_Template, 2, 1, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, TransAddComponent_div_0_div_39_div_2_button_29_Template, 2, 1, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TransAddComponent_div_0_div_39_div_2_Template_button_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r64); const item_r11 = restoredCtx.$implicit; const i_r12 = restoredCtx.index; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3); return ctx_r63.copyData(item_r11.getRawValue(), i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](31, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](4);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](6);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroupName", i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", i_r12 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10.is(ctx_r10.RECEIPT_TYPEZ.CASH));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("url", ctx_r10.URLz.DONATION_T)("load", false)("oneTimeLoad", true)("child", _r16)("canLoadChild", !ctx_r10._fhs._hasVal("row_id", item_r11))("disabled", ctx_r10._fhs._hasVal("row_id", item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("load", false)("url", ctx_r10.URLz.DONATION_S_T)("parent", _r15)("disabled", ctx_r10._fhs._hasVal("row_id", item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10.is(ctx_r10.RECEIPT_TYPEZ.MATERIAL));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](50, _c4, ctx_r10.currencyPrefix))("group", item_r11)("disabled", ctx_r10._fhs._hasVal("row_id", item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("url", ctx_r10.URLz.LOCATION)("group", item_r11)("disabled", ctx_r10._fhs._hasVal("row_id", item_r11))("oneTimeLoad", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("url", ctx_r10.URLz.MAJLIS)("group", item_r11)("disabled", ctx_r10._fhs._hasVal("row_id", item_r11))("oneTimeLoad", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("url", ctx_r10.URLz.PURPOSE)("disabled", ctx_r10._fhs._hasVal("row_id", item_r11))("oneTimeLoad", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10._ss == null ? null : ctx_r10._ss.hierarchy == null ? null : ctx_r10._ss.hierarchy.branch_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10._ss == null ? null : ctx_r10._ss.hierarchy == null ? null : ctx_r10._ss.hierarchy.fund_category_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("group", item_r11)("req", false)("disabled", ctx_r10._fhs._hasVal("row_id", item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10._ss == null ? null : ctx_r10._ss.hierarchy == null ? null : ctx_r10._ss.hierarchy.c5_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10._fhs._has("bank_id", item_r11) && ctx_r10.is(ctx_r10.RECEIPT_TYPEZ.CASH));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10._fhs._has("account_id", item_r11) && ctx_r10.is(ctx_r10.RECEIPT_TYPEZ.DEPOSIT));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10._fhs._has("branchCode", item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10._fhs._has("chequeNumber", item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10._fhs._has("depositSlipNumber", item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10._fhs._has("chequeDate", item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10._fhs._has("depositDate", item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r10.is(ctx_r10.RECEIPT_TYPEZ.MATERIAL));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10._fhs._getVal("row_id", item_r11) == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10._fhs._hasVal("row_id", item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (ctx_r10.receiptDetails == null ? null : ctx_r10.receiptDetails.length) == i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", item_r11.invalid || (ctx_r10.exceedLimitDisable || ctx_r10.addMoreDisabled));
} }
function TransAddComponent_div_0_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, TransAddComponent_div_0_div_39_div_2_Template, 32, 52, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r5.receiptDetails == null ? null : ctx_r5.receiptDetails.controls);
} }
function TransAddComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "b", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, TransAddComponent_div_0_button_9_Template, 3, 7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "fieldset", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "legend", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "donor-info", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "fieldset", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "legend", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](23, "di-txt", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](24, "di-dd", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](25, "di-txt", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](26, "di-txt", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](27, "di-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](28, "di-txt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](29, "di-txt", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](30, TransAddComponent_div_0_fieldset_30_Template, 5, 3, "fieldset", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "fieldset", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "legend", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](36, TransAddComponent_div_0_di_ac_off_36_Template, 1, 10, "di-ac-off", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](37, "di-ac-off", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](38, TransAddComponent_div_0_di_date_38_Template, 1, 2, "di-date", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](39, TransAddComponent_div_0_div_39_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](43, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TransAddComponent_div_0_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r65._onSubmity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](46, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TransAddComponent_div_0_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r67.Switch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 36, ctx_r0._component), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r0.receipt_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r0._activeId && (ctx_r0._ss == null ? null : ctx_r0._ss.hierarchy == null ? null : ctx_r0._ss.hierarchy.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r0._fs._form);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](16, 38, "Donor Basic Info"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("transDisabled", ctx_r0._fhs._hasVal("id") || ctx_r0._fhs._hasVal("id", ctx_r0._fhs._getGroup("donor")));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](21, 40, "Donor Additional Info"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r0._fhs._hasVal("id") || ctx_r0._fhs._hasVal("id", ctx_r0._fhs._getGroup("donor")))("req", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r0._fhs._hasVal("id") || ctx_r0._fhs._hasVal("id", ctx_r0._fhs._getGroup("donor")))("load", false)("req", false)("prelist", ctx_r0._ss.GENDER);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r0._fhs._hasVal("id") || ctx_r0._fhs._hasVal("id", ctx_r0._fhs._getGroup("donor")))("req", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("req", false)("disabled", ctx_r0._ss == null ? null : ctx_r0._ss.hierarchy == null ? null : ctx_r0._ss.hierarchy.display_name_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r0._fhs._hasVal("id"))("req", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r0._fhs._hasVal("id"))("req", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r0._fhs._hasVal("id"))("req", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.is_advance === 1 && ctx_r0.receipt_type != ctx_r0.RECEIPT_TYPEZ.MATERIAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](34, 42, "Receipt Details"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.receipt_type != ctx_r0.RECEIPT_TYPEZ.MATERIAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("url", ctx_r0.URLz.COST_CENTER)("disabled", ctx_r0._fhs._hasVal("id"))("req", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0._fhs._has("transaction_receipt_date", ctx_r0.item) && !ctx_r0._activeId && (ctx_r0._ss == null ? null : ctx_r0._ss.permission_data_local == null ? null : ctx_r0._ss.permission_data_local.display_receipt_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0._fhs._has("receipt_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](48, _c0, ctx_r0._ss.lng === "en", ctx_r0._ss.lng === "ur"))("disabled", ctx_r0.submitDisabed);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](45, 44, "Save"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](51, _c0, ctx_r0._ss.lng === "en", ctx_r0._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](48, 46, ctx_r0._activeId ? "Cancel" : "Refresh"), " ");
} }
// Typescript does not support Partial Class Concept and it will be able to do this
// in future
class TransAddComponent extends _trans_dialog_component__WEBPACK_IMPORTED_MODULE_8__.TransDialogComponent {
    constructor() {
        super(...arguments);
        // Here Function Hoisting is mandatory b/c Parent Class is calling this function
        this.continueProcess = () => {
            const h = this._ss.permission_data_local;
            // TRANSACTION UPDATE CASE
            if (this._activeId != null && Number(this._activeId) > 0) {
                this.loadTemplate = false;
                this.patchData();
            }
            // CASE HANDLE BY STATES GUARDS
            // LOCAL STORAGE SAVED || (SINGLE HIERARCHY  && OU PREFIX STATUS = OK)
            else if (h) {
                this.patchHierarchy();
                this.loadTemplate = this._ss.permission_data_local_status = true;
                // this.userForDonorSubscription();
            }
            // MUTIPLE HIERARCHY || DEALING BY DIALOG BOX
            else if (this._ss.hierarchy.status) {
                this.hierarchyDialog();
            }
            // SERVER IS NOT AUTHORIZING FOR SUCH USER
            // SINGLE HIERARCHY BUT OU PREFIX NOT SET
            else if (!this._ss.hierarchy.status && !this._ss.hierarchy.ou_prefix_status) {
                this._vs._toastr_error('Operating Unit', 'Please create prefix for selected OU');
                this.loadTemplate = false;
                localStorage.removeItem('permission_data_local');
                this._ss.permission_data_local = null;
                this._ss.permission_data_local_status = false;
            }
        };
    }
    ngOnInit() {
        super.continueProcess = this.continueProcess;
        super.ngOnInit();
        this.routerStrategy();
        this.systemSubscription();
        this.userForDonorSubscription();
    }
    ngAfterViewInit() {
        if (this._activeId == null)
            this.checkBatchDialog();
        else
            this.continueProcess();
    }
    _onSubmity() {
        super._onSubmity({
            body: (ps) => {
                if (ps._activeId)
                    this._fs._form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(this._activeId));
                ps.param.body = this._fs._form.getRawValue();
                const receipt_details = this.receiptDetails.value;
                const newArray = [];
                receipt_details.forEach((receipt) => {
                    if (!this.emptyCheck(receipt?.row_id)) {
                        newArray.push(receipt);
                    }
                });
                ps.param.body.receipt_details = newArray;
            },
            confirmation: this.confirmation,
            next: (ps, res) => {
                const id = res.data.id;
                const heading = this._activeId ? 'Updated' : 'Created';
                const message = res?.message;
                const receipt_no = res.data.receipt_no;
                this.confirmationDialog(id, heading, message, receipt_no);
            }
        });
    }
    patchData() {
        this._http
            .get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.TRANSACTION,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.TRANSACTION,
            resource: this._activeId,
            query: {
                receipt_type: this.receipt_type
            }
        }).subscribe((res) => {
            const data = (this.data = res.data.row);
            // Transaction Top Properties
            this.receipt_number = data.receipt_number;
            this._fs._form.patchValue({
                id: data.id,
                currency_id: data.currency_id,
                event_id: data.event_id,
                is_advance: data.is_advance,
                receipt_type: data.receipt_type,
                hierarchy: data.hierarchy,
            });
            if (data?.hierarchy) {
                this._http.org_id = data.hierarchy.organisation_id;
                this._http.sys_id = data.hierarchy.system_id;
            }
            this.is_advance = data.is_advance;
            if (!data?.hierarchy?.dco) {
                const group = this._fs._form.get('hierarchy');
                group.removeControl('dco');
            }
            this._fs._form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(data.id));
            // Transaction Donor
            this.patchDonor(data);
            this.fullTransactionForm.patchReceiptDetail(data.receipt_details, this.receipt_type, true);
            this.loadTemplate = true;
        });
    }
    patchDonor(data) {
        const donor = this._fs._form.get('donor');
        const additional_info = this._fs._form.get('additional_info');
        const donorGSBForm = new src_app_model_donor_donor_gsb_form__WEBPACK_IMPORTED_MODULE_1__.DonorGSBForm(this.injector);
        const infoComponent = new _donor_info_info_component__WEBPACK_IMPORTED_MODULE_4__.InfoComponent(this.injector);
        const gSBComponent = new _donor_gsb_gsb_component__WEBPACK_IMPORTED_MODULE_5__.GSBComponent(this.injector);
        donor?.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(this._activeId));
        if (!data?.gsb && data?.donor) {
            this._fs._form.patchValue({
                additional_info: data.additional_info,
                is_advance: data.is_advance,
            });
            infoComponent.fillData(data);
        }
        else {
            if (!this._activeId) {
                const currentMobile = donor.get('mobile').value;
                donor.reset();
                additional_info.reset();
                donor.get('mobile').patchValue(currentMobile);
            }
        }
        if (data?.is_advance === 1 && data?.gsb) {
            this._fs._form.addControl('gsb', this._fs._fb.group({ ...donorGSBForm.initForm().controls }));
            gSBComponent.fillData(data);
        }
    }
}
TransAddComponent.ɵfac = /*@__PURE__*/ function () { let ɵTransAddComponent_BaseFactory; return function TransAddComponent_Factory(t) { return (ɵTransAddComponent_BaseFactory || (ɵTransAddComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetInheritedFactory"](TransAddComponent)))(t || TransAddComponent); }; }();
TransAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: TransAddComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵProvidersFeature"]([
            src_app_model_transaction_full_form__WEBPACK_IMPORTED_MODULE_2__.FullTransactionForm,
            // For Child Components
            src_app_model_donor_full_basic_donor_form__WEBPACK_IMPORTED_MODULE_6__.FullBasicDonorForm,
            src_app_model_donor_full_donor_gsb_form__WEBPACK_IMPORTED_MODULE_7__.FullGSBDonorForm,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-12", "col-lg-12"], [1, "card", "card__styling"], [1, "card-body", "custom__card__body__styling"], [1, "card-title", "mb-0"], [1, "float-right"], ["mat-raised-button", "", "type", "button", "class", "btn btn-info custon__add__btns__class float-right", 3, "ngClass", "click", 4, "ngIf"], [1, "card-body"], ["autocomplete", "off", 1, "row", 3, "formGroup"], [1, "card-body", "py-0"], [1, "adv-field-set"], [1, "adv-legend-one"], [3, "transDisabled"], [1, "adv-field-set", "mt-4"], ["formGroupName", "additional_info", 1, "row"], ["field", "email", "lbl", "Email", "groupName", "additional_info", 3, "disabled", "req"], ["field", "gender", "lbl", "Gender", "groupName", "additional_info", 3, "disabled", "load", "req", "prelist"], ["field", "address", "lbl", "Address", "groupName", "additional_info", 3, "disabled", "req"], ["field", "displayName", "lbl", "Display Name", "groupName", "additional_info", 3, "req", "disabled"], ["field", "careOf", "lbl", "Care Of", "groupName", "additional_info", 3, "disabled", "req"], ["field", "careOfName", "lbl", "Care Of Name", "groupName", "additional_info", 3, "disabled", "req"], ["field", "mr", "lbl", "MR #", "groupName", "additional_info", 3, "disabled", "req"], ["class", "adv-field-set mt-4", 4, "ngIf"], ["field", "currency_id", "lbl", "Currency", 3, "param", "parentFC", "both", "url", "disabled", "length", "changeEvent", 4, "ngIf"], ["field", "event_id", "lbl", "Cost Centers (Events)", 3, "url", "disabled", "req"], ["field", "transaction_receipt_date", "lbl", "Receipt Date", 3, "min", "max", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [1, "action-form"], [1, "form-group", "m-b-0", "text-right"], ["mat-raised-button", "", "type", "submit", "type", "button", 1, "btn", "btn-info", "waves-effect", "waves-light", 3, "ngClass", "disabled", "click"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "waves-effect", "waves-light", "ml-1", 3, "ngClass", "click"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "custon__add__btns__class", "float-right", 3, "ngClass", "click"], ["field", "currency_id", "lbl", "Currency", 3, "param", "parentFC", "both", "url", "disabled", "length", "changeEvent"], ["field", "transaction_receipt_date", "lbl", "Receipt Date", 3, "min", "max"], [1, "col-md-12"], ["formArrayName", "receipt_details"], ["class", "row mb-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", "mb-4", 3, "formGroupName"], ["class", "col-md-12 mb-5", "style", "border-top: 1px solid rgb(153, 151, 151);", 4, "ngIf"], [4, "ngIf"], ["field", "donation_type_id", "lbl", "Donation Type", 3, "group", "url", "load", "oneTimeLoad", "child", "canLoadChild", "disabled"], ["donation_type_id", ""], ["field", "donation_sub_type_id", "lbl", "Donation Subtype", 3, "group", "load", "url", "parent", "disabled"], ["donation_sub_type_id", ""], ["field", "amount", "lbl", "Amount", "type", "number", 3, "options", "group", "disabled"], ["field", "location_id", "lbl", "Location", 3, "url", "group", "disabled", "oneTimeLoad"], ["field", "majlis_id", "lbl", "Majlis", 3, "url", "group", "disabled", "oneTimeLoad"], ["field", "purpose_id", "lbl", "Purpose", 3, "group", "url", "disabled", "oneTimeLoad"], ["field", "branch_id", "lbl", "Branch", 3, "group", "url", "req", "disabled", "oneTimeLoad", 4, "ngIf"], ["field", "fund_category_id", "lbl", "Fund Category", 3, "group", "url", "req", "disabled", "oneTimeLoad", 4, "ngIf"], ["field", "additionalInfo", "lbl", "Additional Info", 3, "group", "req", "disabled"], ["field", "c5", "lbl", "C-5", "key_select", "cost_five", 3, "url", "group", "req", "disabled", "oneTimeLoad", 4, "ngIf"], ["field", "a7", "lbl", "Analysis 7", 3, "group", "url", "req", "oneTimeLoad", "load", "disabled", 4, "ngIf"], ["field", "bank_id", "lbl", "Bank", 3, "group", "url", "load", "oneTimeLoad", "renderRow", "parent_id", "disabled", 4, "ngIf"], ["field", "account_id", "lbl", "Deposit Bank", 3, "group", "url", "load", "oneTimeLoad", "renderRow", "disabled", 4, "ngIf"], ["field", "branchCode", "lbl", "Branch Code", "type", "number", 3, "group", "disabled", 4, "ngIf"], ["field", "chequeNumber", "lbl", "Cheque No", "type", "number", 3, "group", "disabled", 4, "ngIf"], ["field", "depositSlipNumber", "lbl", "Deposit Slip No", "type", "number", 3, "group", "disabled", 4, "ngIf"], ["field", "chequeDate", "lbl", "Cheque Date", 3, "min", "group", 4, "ngIf"], ["field", "depositDate", "lbl", "Deposit Date", 3, "min", "max", "group", 4, "ngIf"], ["field", "usher_item_id", "lbl", "Usher Item", "parentFCName", "donation_type_id", 3, "group", "url", "disabled", "req", 4, "ngIf"], [1, "col-md-3", "p-0", "mt-0"], [1, "col-md-12", "d-flex", "justify-content-lg-start", "justify-content-sm-end"], ["mat-raised-button", "", "type", "button", "class", "btn btn-sm btn-outline-danger my-2 mr-2", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "class", "btn btn-sm btn-outline-warning my-2 mr-2", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "class", "btn btn-sm btn-outline-primary my-2 mr-2", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-sm", "btn-outline-info", "my-2", 3, "disabled", "click"], [1, "ti-layers", "text-primary", "m-10"], [1, "col-md-12", "mb-5", 2, "border-top", "1px solid rgb(153, 151, 151)"], ["field", "donationMode", "lbl", "Donation Mode", 3, "group", "url", "oneTimeLoad", "load", "disabled", "canLoadChild", "changeEvent"], ["field", "account_id", 3, "lbl", "group", "url", "disabled", "param", "parent_id"], ["field", "material_item_id", "lbl", "Material Item", "parentFCName", "donation_type_id", "key_id", "itm_buyunit", 3, "group", "url", "disabled"], ["field", "weight", "lbl", "Weight / Qty", "type", "number", 3, "group", "disabled"], ["field", "unit_id", "lbl", "Unit", "key_select_subscription", "material_item", 3, "group", "load", "url", "disabled"], ["field", "description", "lbl", "Description", 3, "group", "disabled", 4, "ngIf"], ["field", "description", "lbl", "Description", 3, "group", "disabled"], ["field", "branch_id", "lbl", "Branch", 3, "group", "url", "req", "disabled", "oneTimeLoad"], ["field", "fund_category_id", "lbl", "Fund Category", 3, "group", "url", "req", "disabled", "oneTimeLoad"], ["field", "c5", "lbl", "C-5", "key_select", "cost_five", 3, "url", "group", "req", "disabled", "oneTimeLoad"], ["field", "a7", "lbl", "Analysis 7", 3, "group", "url", "req", "oneTimeLoad", "load", "disabled"], ["field", "bank_id", "lbl", "Bank", 3, "group", "url", "load", "oneTimeLoad", "renderRow", "parent_id", "disabled"], ["field", "account_id", "lbl", "Deposit Bank", 3, "group", "url", "load", "oneTimeLoad", "renderRow", "disabled"], ["field", "branchCode", "lbl", "Branch Code", "type", "number", 3, "group", "disabled"], ["field", "chequeNumber", "lbl", "Cheque No", "type", "number", 3, "group", "disabled"], ["field", "depositSlipNumber", "lbl", "Deposit Slip No", "type", "number", 3, "group", "disabled"], ["field", "chequeDate", "lbl", "Cheque Date", 3, "min", "group"], ["field", "depositDate", "lbl", "Deposit Date", 3, "min", "max", "group"], ["field", "usher_item_id", "lbl", "Usher Item", "parentFCName", "donation_type_id", 3, "group", "url", "disabled", "req"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "my-2", "mr-2", 3, "disabled", "click"], [1, "ti-trash", "text-warning", "m-10"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-sm", "btn-outline-warning", "my-2", "mr-2", 3, "disabled", "click"], [1, "ti-na", "text-danger", "m-10"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "my-2", "mr-2", 3, "disabled", "click"], [1, "ti-plus", "text-info", "m-10"]], template: function TransAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, TransAddComponent_div_0_Template, 49, 54, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.loadTemplate && ctx._fs._form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _donor_info_info_component__WEBPACK_IMPORTED_MODULE_4__.InfoComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupName, _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_9__.TxtComponent, _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_10__.DdComponent, _shared_components_control_cell_cell_component__WEBPACK_IMPORTED_MODULE_11__.CellComponent, _donor_gsb_gsb_component__WEBPACK_IMPORTED_MODULE_5__.GSBComponent, _shared_components_control_ac_off_ac_off_component__WEBPACK_IMPORTED_MODULE_12__.AcOffComponent, _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_13__.DateComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _shared_components_control_ddd_ddd_component__WEBPACK_IMPORTED_MODULE_14__.DddComponent, _shared_components_control_ac_ac_component__WEBPACK_IMPORTED_MODULE_15__.AcComponent, _shared_components_control_currency_currency_component__WEBPACK_IMPORTED_MODULE_16__.CurrencyComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe], styles: [".custom__img__div[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  padding: 5px;\r\n  border: 1px solid #8e8e8e;\r\n  border-radius: 3px;\r\n}\r\n.custom__img[_ngcontent-%COMP%]{\r\n  display: block;\r\n  width: 100px;\r\n  height: 150px;\r\n  margin: 0px auto;\r\n}\r\n\r\n.card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n\r\n.custon__add__btns__class[_ngcontent-%COMP%]{\r\n  margin: -7px 0px;\r\n  background-color: #00c292;\r\n  border-color: #00c292;\r\n  box-shadow:0px 0px 10px -5px #0000008f;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:hover{\r\nbox-shadow: 0 0 0 0.2rem #1e9d7d80 !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:active{\r\nbackground-color: #01cb99 !important;\r\nborder-color: #01cb99 !important;\r\nbox-shadow: 0 0 0 0.2rem #1e9d7d80 !important;\r\n}\r\n\r\n.text_align[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n.custon__btns__class[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  padding: 5px 0px;\r\n}\r\n.custom_p[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  float: right;\r\n}\r\n@media(max-width: 768px){\r\n  .text_align[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n    padding: 5px 0 7px 0 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n  top: 30px !important;\r\n  margin-top: -15px !important;\r\n  font-weight: 700 !important;\r\n  font-size: 15px;\r\n  color: #303030ad;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n    overflow: visible !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-select-panel{\r\n  width: 100% !important;\r\n  min-width: 100% !important;\r\n  \r\n  background: #ffffff !important;\r\n  border: 1px solid #00000033;\r\n  box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-select-value{\r\n  font-size: 16px;\r\n  font-weight: 600 !important;\r\n  overflow: hidden !important;\r\n}\r\n[_nghost-%COMP%]      .mat-input-element{\r\n  font-size: 16px !important;\r\n  font-weight: 600 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-option-text{\r\n  color: #0c0c0c;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\ncolor: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n  color: #f44836 !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #f44836 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n  color: #0c0c0c !important;\r\n  overflow: visible !important;\r\n  \r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label{\r\n  \r\n}\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n  color: #0c0c0c !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n  color: #0c0c0c77;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .ng-touched.ng-valid{\r\n  color: #0c0c0c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-ripple-element{\r\n  background-color: #024d7071 !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n  color: #bfc1c4;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n  transform: translate3d(30px, 0, 0) !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n    width: 50px !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-error{\r\n    font-size: 10px;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .cdk-overlay-pane{\r\n  transform: translateX(0px) translateY(25px) !important;\r\n}\r\nngx-mat-select-search   [_nghost-%COMP%]      .mat-select-search-inner{\r\n  background: #edf1f5 !important;\r\n}\r\nngx-mat-select-search   [_nghost-%COMP%]      .mat-select-search-no-entries-found{\r\n  background: #eaeff5 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVE7QUFDUjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0EsUUFBUTtBQUVSO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNDQUFzQztBQUN4QztBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsZ0NBQWdDO0FBQ2hDLDZDQUE2QztBQUM3QztBQUNBLHdCQUF3QjtBQUN4QjtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDtBQUVBO0VBQ0U7TUFDSSxrQkFBa0I7RUFDdEI7QUFDRjtBQUNBLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUI7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQSx3QkFBd0I7QUFDeEI7RUFDRSxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQSx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCO0VBQ0Usc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixpREFBaUQ7RUFDakQsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixrREFBa0Q7QUFDcEQ7QUFDQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0dBRUc7QUFDSCx3QkFBd0I7QUFDeEI7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7QUFDQSx3QkFBd0I7QUFDeEI7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQSxrQkFBa0I7QUFDbEI7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFFbEIsWUFBWTtBQUNaO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBLFlBQVk7QUFFWixhQUFhO0FBQ2I7RUFDRSxjQUFjO0FBQ2hCO0FBQ0EsYUFBYTtBQUliLGVBQWU7QUFDZjtFQUNFLDZDQUE2QztBQUMvQztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0EsZUFBZTtBQUVmLG9CQUFvQjtBQUNwQjtJQUNJLGVBQWU7QUFDbkI7QUFDQSxvQkFBb0I7QUFHcEIsb0JBQW9CO0FBQ3BCO0VBQ0Usc0RBQXNEO0FBQ3hEO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBLG9CQUFvQiIsImZpbGUiOiJ0cmFucy1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltZyAqL1xyXG4uY3VzdG9tX19pbWdfX2RpdntcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhlOGU4ZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmN1c3RvbV9faW1ne1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLyogaW1nICovXHJcblxyXG4uY2FyZF9fc3R5bGluZ3tcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG59XHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmd7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG92ZXJmbG93LXg6IGNsaXA7XHJcbn1cclxuLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLyogSEVBREVSIEJVVFRPTiBTVFlMRSAqL1xyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNze1xyXG4gIG1hcmdpbjogLTdweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzI5MjtcclxuICBib3JkZXItY29sb3I6ICMwMGMyOTI7XHJcbiAgYm94LXNoYWRvdzowcHggMHB4IDEwcHggLTVweCAjMDAwMDAwOGY7XHJcbn1cclxuLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczpob3ZlcntcclxuYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICMxZTlkN2Q4MCAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3M6YWN0aXZle1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDFjYjk5ICFpbXBvcnRhbnQ7XHJcbmJvcmRlci1jb2xvcjogIzAxY2I5OSAhaW1wb3J0YW50O1xyXG5ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gIzFlOWQ3ZDgwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4udGV4dF9hbGlnbntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5jdXN0b25fX2J0bnNfX2NsYXNze1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBwYWRkaW5nOiA1cHggMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tX3Age1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAudGV4dF9hbGlnbntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4vKiBidXR0b25zIHNhdmUgQ2FuY2VsICovXHJcbi8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICBwYWRkaW5nOiA1cHggMCA3cHggMCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICB0b3A6IDMwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAtMTVweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICMzMDMwMzBhZDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zZWxlY3QtcGFuZWx7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCA0MHB4KSAhaW1wb3J0YW50OyAqL1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMzM7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMXB4IC00cHggIzAwMDAwMDljICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC12YWx1ZXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtaW5wdXQtZWxlbWVudHtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LW9wdGlvbi10ZXh0e1xyXG4gIGNvbG9yOiAjMGMwYzBjO1xyXG59XHJcbi8qIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxufSAqL1xyXG4vKiBmaWVsZHMgYm9yZGVyIGhvdmVyICovXHJcbjpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrLFxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xyXG5jb2xvcjogIzBlYjllYyAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6ICNmNDQ4MzYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6ICNmNDQ4MzYgIWltcG9ydGFudDtcclxufVxyXG4vKiBmaWVsZHMgYm9yZGVyIGhvdmVyICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIC8qIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3d7XHJcbiAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxufVxyXG4vKiBmaWVsZHMgYm9yZGVyICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICBjb2xvcjogIzBjMGMwYzc3O1xyXG59XHJcbi8qIGZpZWxkcyBib3JkZXIgKi9cclxuXHJcbi8qIHRvZ2dsZXIgKi9cclxuOmhvc3QgL2RlZXAvICAubmctdG91Y2hlZC5uZy12YWxpZHtcclxuICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlYjllYyAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlYjllYyAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjRkNzA3MSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjRkNzA3MSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0ZDcwNzEgIWltcG9ydGFudDtcclxufVxyXG4vKiB0b2dnbGVyICovXHJcblxyXG4vKiBkaXNhYmxlZCAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7XHJcbiAgY29sb3I6ICNiZmMxYzQ7XHJcbn1cclxuLyogZGlzYWJsZWQgKi9cclxuXHJcblxyXG5cclxuLyogdG9nZ2xlIGJhciAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iLWNvbnRhaW5lcntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwcHgsIDAsIDApICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHRvZ2dsZSBiYXIgKi9cclxuXHJcbi8qIGVycm9yIGZvbnQtc2l6ZSAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZXJyb3J7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLyogZXJyb3IgZm9udC1zaXplICovXHJcblxyXG5cclxuLyogc2VhcmNoIGlucHV0IG10ICovXHJcbjpob3N0IC9kZWVwLyAgLmNkay1vdmVybGF5LXBhbmV7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgyNXB4KSAhaW1wb3J0YW50O1xyXG59XHJcbm5neC1tYXQtc2VsZWN0LXNlYXJjaCA6aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXNlYXJjaC1pbm5lcntcclxuICBiYWNrZ3JvdW5kOiAjZWRmMWY1ICFpbXBvcnRhbnQ7XHJcbn1cclxubmd4LW1hdC1zZWxlY3Qtc2VhcmNoIDpob3N0IC9kZWVwLyAgLm1hdC1zZWxlY3Qtc2VhcmNoLW5vLWVudHJpZXMtZm91bmR7XHJcbiAgYmFja2dyb3VuZDogI2VhZWZmNSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHNlYXJjaCBpbnB1dCBtdCAqL1xyXG4iXX0= */"] });


/***/ }),

/***/ 59448:
/*!*************************************************************************!*\
  !*** ./src/app/feature/transaction/trans-add/trans-dialog.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransDialogComponent": () => (/* binding */ TransDialogComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_app_shared_components_dialogs_transaction_confirmation_transaction_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/dialogs/transaction-confirmation/transaction-confirmation.component */ 9570);
/* harmony import */ var src_app_shared_components_filters_transaction_dialog_transaction_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/filters/transaction-dialog/transaction-dialog.component */ 89947);
/* harmony import */ var _trans_subscription_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trans-subscription.component */ 748);
/* harmony import */ var src_app_shared_components_dialogs_transaction_confirm_transaction_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/dialogs/transaction-confirm/transaction-confirm.component */ 10936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 39609);






class TransDialogComponent extends _trans_subscription_component__WEBPACK_IMPORTED_MODULE_3__.TransSubscriptionComponent {
    constructor() {
        super(...arguments);
        this.receipt_number = '';
        // Not in Use
        this.confirmation = (ps) => {
            const data = this._fs._form.getRawValue();
            const config = {
                panelClass: "dialog-responsive",
                data
            };
            const dialogRef = this._dialog.open(src_app_shared_components_dialogs_transaction_confirm_transaction_confirm_component__WEBPACK_IMPORTED_MODULE_4__.TransactionConfirmComponent, config);
            this.subscriptionArray.push(dialogRef.afterClosed().subscribe());
            dialogRef.afterClosed().subscribe({
                next: (result) => {
                    if (result) {
                        ps.confirmationAction(ps);
                    }
                    else {
                        ps.confirmationDeny(ps);
                    }
                }
            });
        };
    }
    resetForm() {
        if (this._fs._form.dirty) {
            this._swl.formLeave.then((x) => {
                if (x.isConfirmed) {
                    this.resetActionForm();
                }
            });
        }
        else {
            this.resetActionForm();
        }
    }
    resetActionForm() {
        const hierarchy = this._fs._form.get('hierarchy').value;
        const receipt_date = this._fs._form.get('transaction_receipt_date').value;
        this._ss.hierarchy = { ...this._ss.hierarchy, ...hierarchy };
        this.rmvAllReceiptDetail();
        this._fs._form.reset();
        this.addReceiptDetail();
        this._fs._form.get('transaction_receipt_date').patchValue(receipt_date);
        this._fs._form.get('receipt_type').patchValue(this.receipt_type);
        this.patchHierarchy();
    }
    // SELECT HIEARCHY
    hierarchyDialog() {
        if (this._fs._form.dirty) {
            this._swl.formLeave.then((x) => {
                if (x.isConfirmed) {
                    this.hierarchyDialogAction();
                }
            });
        }
        else {
            this.hierarchyDialogAction();
        }
    }
    hierarchyDialogAction() {
        this.resetActionForm();
        const config = {
            panelClass: "dialog-responsive",
            data: {}
        };
        const dialogRef = this._dialog.open(src_app_shared_components_filters_transaction_dialog_transaction_dialog_component__WEBPACK_IMPORTED_MODULE_2__.TransactionDialogComponent, config);
        dialogRef.afterClosed().subscribe(() => {
            this.patchHierarchy();
            this.loadTemplate = true;
        });
    }
    patchHierarchy(h = this._ss.permission_data_local) {
        if (!h && localStorage.getItem('permission_data_local')) {
            this._ss.permission_data_local = JSON.parse(localStorage.getItem('permission_data_local'));
            h = JSON.parse(localStorage.getItem('permission_data_local'));
        }
        const hierarchy = this._fs._form.get('hierarchy');
        if (hierarchy.invalid) {
            hierarchy.patchValue({
                organisation_id: h?.organisation_id,
                system_id: h?.system_id,
                bg: h?.bg,
                le: h?.le,
                ou: h?.ou,
                su: h?.su,
            });
        }
        if (this.emptyCheck(h?.dco))
            hierarchy.patchValue({ dco: h.dco });
        if (hierarchy?.get('dco')?.invalid && !h?.dco)
            hierarchy.removeControl('dco');
        if (+h?.system_id != 3)
            this._fs._form.removeControl('gsb');
        if (h?.currency_id)
            this._fs._form?.get('currency_id')?.patchValue(h?.currency_id);
        // For Array to use org system as well
        if (h?.organisation_id)
            this._http.org_id = h?.organisation_id;
        if (h?.system_id)
            this._http.sys_id = h?.system_id;
        if (!this._ss?.hierarchy?.status) {
            this.loadTemplate = true;
        }
    }
    confirmationDialog(id, heading, message, receipt_no) {
        const config = {
            panelClass: "dialog-responsive",
            data: { id, heading, message, receipt_no }
        };
        const dialogRef = this._dialog.open(src_app_shared_components_dialogs_transaction_confirmation_transaction_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.TransactionConfirmationComponent, config);
        dialogRef.afterClosed().subscribe(() => {
            if (this._activeId != null) {
                const hierarchy = this._fs._form.get('hierarchy').value;
                this._ss.hierarchy = {
                    ...this._ss.hierarchy,
                    ...hierarchy
                };
                this._fs._form.reset();
                this.Switch();
            }
            else {
                this.resetActionForm();
                if (!this._ss.permission_data_local_status && this._ss?.hierarchy?.status) {
                    this.hierarchyDialog();
                }
            }
        });
    }
    checkBatchDialog() {
        this._http
            .get({ endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.CHECK_BATCH })
            .subscribe((res) => {
            const data = res.data.row;
            if (!data.status) {
                const batchNumber = res.data.row.batch_number ? res.data.row.batch_number : 0;
                this._swl.transBatch(batchNumber, this._ss?.hierarchy?.profile?.name, () => {
                    this.continueProcess();
                });
            }
            else
                this.continueProcess();
        });
    }
    Switch() {
        if (this._activeId) {
            let url;
            if (window.location.href.indexOf('material') != -1)
                url = 'material';
            else
                url = 'cash_cheque';
            this._router.navigate(['transaction/' + url]);
            // window.open('http://localhost:4200/blank/cash_cheque_color;slipId=562', '_blank');
        }
        else {
            this.resetForm();
        }
    }
}
TransDialogComponent.ɵfac = /*@__PURE__*/ function () { let ɵTransDialogComponent_BaseFactory; return function TransDialogComponent_Factory(t) { return (ɵTransDialogComponent_BaseFactory || (ɵTransDialogComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](TransDialogComponent)))(t || TransDialogComponent); }; }();
TransDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TransDialogComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function TransDialogComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 748:
/*!*******************************************************************************!*\
  !*** ./src/app/feature/transaction/trans-add/trans-subscription.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransSubscriptionComponent": () => (/* binding */ TransSubscriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 21491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 35878);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_app_model_donor_donor_gsb_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/donor/donor-gsb.form */ 76011);
/* harmony import */ var src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/transaction/enum */ 25100);
/* harmony import */ var src_app_static_custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/static/custom */ 65910);
/* harmony import */ var _trans_xreceiptarray_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trans-xreceiptarray.component */ 76992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 39609);








class TransSubscriptionComponent extends _trans_xreceiptarray_component__WEBPACK_IMPORTED_MODULE_4__.TransReceiptComponent {
    userForDonorSubscription() {
        if (!this._activeId && !this.userForDonorSubscriptions) {
            this.userForDonorSubscriptions = this._fs._form
                .get('additional_info.careOf').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(450), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)()).subscribe((mobile) => {
                if (this.emptyCheck(mobile)) {
                    this._http.get({
                        endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.CAREOF,
                        query: { title: mobile }
                    }).subscribe((res) => {
                        const data = res.data.row;
                        const gsb = this._fs._form.get('additional_info');
                        if (data?.name) {
                            gsb.get('careOfName').patchValue(data?.name);
                        }
                        else {
                            gsb.get('careOfName').patchValue('');
                        }
                    });
                }
            });
            this.subscriptionArray.push(this.userForDonorSubscriptions);
        }
    }
    systemSubscription() {
        const gsb = new src_app_model_donor_donor_gsb_form__WEBPACK_IMPORTED_MODULE_1__.DonorGSBForm(this.injector);
        this.systemSubscriptions = this._fs._form?.get('hierarchy').get('system_id')
            .valueChanges.subscribe((val) => {
            if (src_app_static_custom__WEBPACK_IMPORTED_MODULE_3__.Custom.emptyCheck(val)) {
                if (!this.is(src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_2__.RECEIPT_TYPE.MATERIAL)) {
                    // E-Raseed
                    if (val != 3) {
                        this._fs._form.removeControl('gsb');
                        this._fs._form.get('is_advance').patchValue(0);
                        this.is_advance = 0;
                    }
                    else {
                        this._fs._form.get('is_advance').patchValue(1);
                        this.is_advance = 1;
                        this._fs._form.addControl('gsb', this._fs._fb.group({
                            ...gsb.initForm().controls,
                        }));
                    }
                }
                else if (this.is(src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_2__.RECEIPT_TYPE.MATERIAL)) {
                    this._fs._form.removeControl('gsb');
                    this._fs._form.removeControl('currency_id');
                    this._fs._form.get('is_advance').patchValue(0);
                    this.is_advance = 0;
                }
                const hierarchy = this._fs._form?.get('hierarchy');
                // If System DCO
                if (val != '2')
                    hierarchy.removeControl('dco');
                else {
                    hierarchy.addControl('dco', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', this._vs._vals('Donation Cell Office')));
                }
            }
        });
        this.subscriptionArray.push(this.systemSubscriptions);
    }
}
TransSubscriptionComponent.ɵfac = /*@__PURE__*/ function () { let ɵTransSubscriptionComponent_BaseFactory; return function TransSubscriptionComponent_Factory(t) { return (ɵTransSubscriptionComponent_BaseFactory || (ɵTransSubscriptionComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](TransSubscriptionComponent)))(t || TransSubscriptionComponent); }; }();
TransSubscriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: TransSubscriptionComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function TransSubscriptionComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 76992:
/*!********************************************************************************!*\
  !*** ./src/app/feature/transaction/trans-add/trans-xreceiptarray.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransReceiptComponent": () => (/* binding */ TransReceiptComponent)
/* harmony export */ });
/* harmony import */ var src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/transaction/enum */ 25100);
/* harmony import */ var _trans_zbase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trans-zbase.component */ 33459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39609);



// HANDLING RECEIPT ARRAY
class TransReceiptComponent extends _trans_zbase_component__WEBPACK_IMPORTED_MODULE_1__.TransDialogComponent {
    constructor() {
        super(...arguments);
        this.date = new Date();
        // 12. Currency Prefix in Amount
        this.currencyPrefix = 'PKR ';
        this.currencyCount = 0;
    }
    // 1 Receipt Detail Initialization
    receiptDetail(tt = this.receipt_type) {
        return this.fullTransactionForm.receiptDetail(tt);
    }
    // 2 Receipt Detail (Template Iteration)
    get receiptDetails() {
        return this._fs._form?.get('receipt_details');
    }
    // 3 Receipt Detail Add
    addReceiptDetail(tt = this.receipt_type) {
        const arr = this._fs._form?.get('receipt_details');
        if (tt?.value?.donationMode == 2) {
            arr.push(this.receiptDetail(src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_0__.RECEIPT_TYPE.CHEQUE));
        }
        else
            arr.push(this.receiptDetail());
    }
    // 4. Receipt Detail Copy
    copyData(d) {
        d.row_id = null;
        d.is_active = null;
        d.code = null;
        this.fullTransactionForm.patchReceiptDetail([d], this.receipt_type, false);
    }
    // 5. Receipt Detail Remove
    rmvReceiptDetail(index) {
        const arr = this._fs._form.get('receipt_details');
        arr.removeAt(index);
    }
    // 6. Receipt Detail Not in Use
    rmvAllReceiptDetail() {
        // Don't Use the Browser Submit Behaviour in Case of Array it looses the
        // Form Validation Sync incase of  FormArray
        const arr = this._fs._form.get('receipt_details');
        while (arr.length > 0) {
            arr.removeAt(0);
        }
        // arr.patchValue([{
        //   code: '',
        //   row_id: '',
        //   donationMode: this.receipt_type,
        // }])
    }
    // 7. Receipt Detail Cancel Entry from Array
    cancelReceiptDetail(index, item) {
        const cash = item.value;
        this._swl.transCancel(cash, this.receipt_type)
            .then(status => {
            if (status) {
                item.get('is_active').patchValue(2);
                // this.rmvReceiptDetail(index)
            }
        });
    }
    // 8. Receipt Detail Mode Change
    donationModeChanged(event, index) {
        if (event?.event?.isUserInput) {
            const tranz = +event.id;
            const fr = this._fs._form.get('receipt_details');
            fr.insert(index, this.fullTransactionForm.receiptDetail(tranz));
            fr.removeAt(index + 1);
        }
    }
    // 9. Receipt Detail Add Disabled
    get addMoreDisabled() {
        let allDisabled = true;
        const trans = this._fs._form.value;
        trans.receipt_details.forEach((receipt) => {
            if ((receipt.is_active == null && receipt.row_id == null) ||
                (receipt.is_active == 1 && receipt.row_id != null)) {
                allDisabled = false;
            }
        });
        return allDisabled;
    }
    // 10. Receipt Detail Disable Submit when > than
    get exceedLimitDisable() {
        const trans = this._fs._form.value;
        return trans?.receipt_details?.length >= 20;
    }
    // 11. Submit Disabled
    get submitDisabed() {
        const trans = this._fs._form.value;
        let hasNotRowID = true;
        trans?.receipt_details?.forEach(rec => {
            if (!this.emptyCheck(rec.row_id)) {
                hasNotRowID = false;
            }
        });
        return hasNotRowID;
    }
    handleCurrencyChange(event) {
        if (this.currencyCount == 0 || event.event.isUserInput) {
            this.currencyCount++;
            this.currencyPrefix = event.obj.title + ' ';
        }
    }
    // 13. Bank Display Text
    bankCallBack(val) {
        return val?.title + (val?.account_number ? ' - ' + val?.account_number : '');
    }
}
TransReceiptComponent.ɵfac = /*@__PURE__*/ function () { let ɵTransReceiptComponent_BaseFactory; return function TransReceiptComponent_Factory(t) { return (ɵTransReceiptComponent_BaseFactory || (ɵTransReceiptComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TransReceiptComponent)))(t || TransReceiptComponent); }; }();
TransReceiptComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TransReceiptComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function TransReceiptComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 33459:
/*!************************************************************************!*\
  !*** ./src/app/feature/transaction/trans-add/trans-zbase.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransDialogComponent": () => (/* binding */ TransDialogComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var src_app_model_transaction_full_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/transaction/full.form */ 56904);
/* harmony import */ var src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/transaction/enum */ 25100);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var src_app_model_donor_full_basic_donor_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/donor/full-basic-donor.form */ 60940);
/* harmony import */ var src_app_model_donor_full_donor_gsb_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/donor/full-donor-gsb.form */ 44424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 39609);








// For Injecting Service and Imports
class TransDialogComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_1__.BaseForm {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        // Transaction Properties
        this.RECEIPT_TYPEZ = src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_3__.RECEIPT_TYPE;
        this.is_advance = 1;
        this.loadTemplate = false;
        this.fullTransactionForm = injector.get(src_app_model_transaction_full_form__WEBPACK_IMPORTED_MODULE_2__.FullTransactionForm);
        this.fullBasicDonorForm = injector.get(src_app_model_donor_full_basic_donor_form__WEBPACK_IMPORTED_MODULE_5__.FullBasicDonorForm);
        this.fullGSBDonorForm = injector.get(src_app_model_donor_full_donor_gsb_form__WEBPACK_IMPORTED_MODULE_6__.FullGSBDonorForm);
    }
    ngOnInit() {
        this._activeId = this._fhs._getURLParam('id');
        this._fhs._pathLocation = '/transaction/list';
        this.param.endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.TRANSACTION;
        this.param.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.TRANSACTION;
        this._vs.showWarning = true;
        this.getTransationType();
        this._fs._form = this.fullTransactionForm.initForm(this.receipt_type);
        if (this.receipt_type == src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_3__.RECEIPT_TYPE.MATERIAL) {
            this._fs._form.removeControl('gsb');
            this._fs._form.removeControl('currency_id');
        }
        this.param.query = {
            receipt_type: this.receipt_type
        };
    }
    getTransationType() {
        const url = window.location.href;
        if (url.indexOf('cash') != -1) {
            this._component = 'Cash / Cheque Receipt';
            this.receipt_type = src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_3__.RECEIPT_TYPE.CASH;
        }
        if (url.indexOf('deposit') != -1) {
            this._component = 'Direct Deposit Receipt';
            this.receipt_type = src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_3__.RECEIPT_TYPE.DEPOSIT;
        }
        else if (url.indexOf('material') != -1) {
            this._component = 'Material Receipt';
            this.receipt_type = src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_3__.RECEIPT_TYPE.MATERIAL;
            this._fs._form.removeControl('gsb');
            this._fs._form.removeControl('currency_id');
        }
    }
    is(RT) {
        return RT == this.receipt_type;
    }
}
TransDialogComponent.ɵfac = function TransDialogComponent_Factory(t) { return new (t || TransDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector)); };
TransDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TransDialogComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function TransDialogComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 56093:
/*!************************************************************************!*\
  !*** ./src/app/feature/transaction/trans-list/trans-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransListComponent": () => (/* binding */ TransListComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/transaction/enum */ 25100);
/* harmony import */ var src_app_model_transaction_hierarchy_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/transaction/hierarchy.form */ 72860);
/* harmony import */ var src_app_shared_components_dialogs_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/dialogs/transaction-detail/transaction-detail.component */ 67812);
/* harmony import */ var src_app_shared_components_filters_transaction_dialog_transaction_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/filters/transaction-dialog/transaction-dialog.component */ 89947);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/class/base-list-class */ 42286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 71144);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 32460);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 37661);
/* harmony import */ var _shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directive/permission.directive */ 47399);
/* harmony import */ var _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/table/tbl-txt/tbl-txt.component */ 33086);
/* harmony import */ var _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/table/di-paginator/di-paginator.component */ 65141);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 15719);


















function TransListComponent_div_0_th_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TransListComponent_div_0_th_15_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); ctx_r17._reset(ctx_r17.URLz.$); return ctx_r17._refresh(ctx_r17.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TransListComponent_div_0_th_15_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r19._refresh(ctx_r19.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function TransListComponent_div_0_td_16_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TransListComponent_div_0_td_16_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26); const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r24._switchs(item_r20 == null ? null : item_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function TransListComponent_div_0_td_16_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TransListComponent_div_0_td_16_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r29); const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r27._resendSms(item_r20 == null ? null : item_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function TransListComponent_div_0_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-menu", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, TransListComponent_div_0_td_16_button_6_Template, 2, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TransListComponent_div_0_td_16_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31); const item_r20 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r30.detailDialog(item_r20 == null ? null : item_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TransListComponent_div_0_td_16_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31); const item_r20 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r32.Switch(item_r20.id, "black"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TransListComponent_div_0_td_16_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31); const item_r20 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r33.Switch(item_r20.id, "colored"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, TransListComponent_div_0_td_16_button_13_Template, 2, 0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("permission", ctx_r2.ACTION.EDIT);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (item_r20 == null ? null : item_r20.resend_sms) == true);
} }
function TransListComponent_div_0_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-txt", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r3._tbls[ctx_r3.URLz.$].form);
} }
function TransListComponent_div_0_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r34 == null ? null : item_r34.donor == null ? null : item_r34.donor.title, " ");
} }
function TransListComponent_div_0_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-txt", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r5._tbls[ctx_r5.URLz.$].form);
} }
function TransListComponent_div_0_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r35 == null ? null : item_r35.donor == null ? null : item_r35.donor.donor_mobile, " ");
} }
function TransListComponent_div_0_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-txt", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r7._tbls[ctx_r7.URLz.$].form);
} }
function TransListComponent_div_0_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r36.receipt_number, " ");
} }
function TransListComponent_div_0_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "Receipt Type"));
} }
function TransListComponent_div_0_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r10.returnRecType(ctx_r10.receipt_type), " ");
} }
function TransListComponent_div_0_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "Amount"));
} }
function TransListComponent_div_0_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r38.amount + " " + item_r38.currency.symbol, " ");
} }
function TransListComponent_div_0_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "Date"));
} }
function TransListComponent_div_0_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r39.date, " ");
} }
const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function TransListComponent_div_0_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 45);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](1, _c0, ctx_r15._ss.lng === "en", ctx_r15._ss.lng === "ur"));
} }
function TransListComponent_div_0_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 46);
} }
function TransListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TransListComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r41.changeHierarchy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "hr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("matSortChange", function TransListComponent_div_0_Template_table_matSortChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r43._sort($event, ctx_r43.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](14, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, TransListComponent_div_0_th_15_Template, 3, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, TransListComponent_div_0_td_16_Template, 14, 3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](17, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, TransListComponent_div_0_th_18_Template, 2, 1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, TransListComponent_div_0_td_19_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](20, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, TransListComponent_div_0_th_21_Template, 2, 1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, TransListComponent_div_0_td_22_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](23, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, TransListComponent_div_0_th_24_Template, 2, 1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, TransListComponent_div_0_td_25_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](26, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, TransListComponent_div_0_th_27_Template, 3, 3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, TransListComponent_div_0_td_28_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](29, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, TransListComponent_div_0_th_30_Template, 3, 3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, TransListComponent_div_0_td_31_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](32, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, TransListComponent_div_0_th_33_Template, 3, 3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, TransListComponent_div_0_td_34_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, TransListComponent_div_0_tr_35_Template, 1, 4, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, TransListComponent_div_0_tr_36_Template, 1, 0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "di-paginator", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("paginateEvent", function TransListComponent_div_0_Template_di_paginator_paginateEvent_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r44._refresh(ctx_r44.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 8, ctx_r0._component), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](12, _c0, ctx_r0._ss.lng === "en", ctx_r0._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 10, "Filter"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx_r0._tbls[ctx_r0.URLz.$].dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx_r0._tbls[ctx_r0.URLz.$].columns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx_r0._tbls[ctx_r0.URLz.$].columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("tbl", ctx_r0._tbls[ctx_r0.URLz.$]);
} }
class TransListComponent extends src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_6__.BaseListClass {
    constructor() {
        super(...arguments);
        this.transURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.TRANSACTION + src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.TRANSACTION;
        this.showTemplate = false;
        this.subSearch = {};
        this.globurl = window.location.href;
    }
    ngOnInit() {
        this.setRecieptType();
        this._pathLocation = "/transaction/cash_cheque";
        this._component = "Transaction " + this.returnRecType(this.receipt_type);
        this.changeHierarchy();
        this.initTables();
    }
    initTables() {
        this._reset(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$);
        this.initForm();
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].columns = [
            'actions',
            'name',
            'donor_mobile',
            'receipt_number',
            'receipt_type',
        ];
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].columns.splice(3, 0, this.receipt_type == src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_1__.RECEIPT_TYPE.MATERIAL ? "date" : "amount");
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.TRANSACTION;
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.TRANSACTION;
        this._formCreator(this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$]);
        this._refresh(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$);
    }
    initForm() {
        const hierarchy = new src_app_model_transaction_hierarchy_form__WEBPACK_IMPORTED_MODULE_2__.HierarchyForm(this.injector);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].formFilter = this._fs._fb.group({
            from_date: [this._fhs._dateOnly(), this._vs._vals('From Date')],
            to_date: [this._fhs._dateOnly(), this._vs._vals('To Date')],
            ...hierarchy.initForm().controls,
            receipt_type: [this.receipt_type],
        });
        this._fs._form = this._fs._fb.group({
            hierarchy: this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].formFilter
        });
    }
    // Resend Email
    _resendSms(id) {
        const smsObj = {
            id,
            receipt_type: this.receipt_type
        };
        this._http.create({
            body: smsObj,
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.TRANSACTION,
            endpoint: 'resend_sms'
        }).subscribe((res) => {
            this._swl.swal('SMS', res?.message);
        });
    }
    Switch(id, slip) {
        let url = '/blank/';
        if (this.globurl.indexOf('cash') != -1 || this.globurl.indexOf('deposit') != -1) {
            if (id)
                url += slip == 'colored' ? 'cash_cheque_color' : 'cash_cheque_black';
        }
        else if (this.globurl.indexOf('material') != -1) {
            if (id)
                url += slip == 'colored' ? 'material_color' : 'material_black';
        }
        url = this._router.serializeUrl(this._router.createUrlTree([url, { slipId: id }]));
        window.open(url, '_blank');
    }
    patchLastSelectedResult() {
        if (TransListComponent.lastSelectedHierarchy) {
            this.patchHiearchy(TransListComponent.lastSelectedHierarchy);
            this._reset(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$);
            this._refresh(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$);
        }
    }
    // HIEARCHY
    changeHierarchy() {
        this.openDialog('');
    }
    openDialog(title) {
        const config = {
            panelClass: "dialog-responsive",
            data: { title, hideCheckBox: true }
        };
        const dialogRef = this._dialog.open(src_app_shared_components_filters_transaction_dialog_transaction_dialog_component__WEBPACK_IMPORTED_MODULE_4__.TransactionDialogComponent, config);
        dialogRef.afterOpened().subscribe(() => {
            if (TransListComponent.lastSelectedHierarchy) {
                this.patchHiearchy(TransListComponent.lastSelectedHierarchy);
            }
            else {
                const currentDate = this._fhs._dateOnly();
                this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].formFilter?.patchValue({
                    from_date: currentDate,
                    to_date: currentDate
                });
            }
        });
        dialogRef.afterClosed().subscribe(() => {
            TransListComponent.lastSelectedHierarchy =
                this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].formFilter?.value;
            this.showTemplate = true;
            this._reset(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$);
            this._refresh(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$);
        });
    }
    patchHiearchy(d) {
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].formFilter.patchValue({
            organisation_id: d.organisation_id,
            system_id: d.system_id,
            bg: d.bg,
            le: d.le,
            ou: d.ou,
            su: d.su
        });
        if (d.dco) {
            this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].formFilter.patchValue({
                dco: d.dco
            });
        }
        if (d['from_date']) {
            this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].formFilter.patchValue({
                from_date: d['from_date'],
                to_date: d['to_date']
            });
        }
    }
    detailDialog(id) {
        this._http
            .get({
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.TRANSACTION,
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.TRANSACTION,
            resource: id,
            query: { receipt_type: this.receipt_type }
        })
            .subscribe((res) => {
            const data = res.data.row;
            const config = {
                panelClass: "dialog-responsive",
                data
            };
            const dialogRef = this._dialog.open(src_app_shared_components_dialogs_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_3__.TransactionDetailComponent, config);
            dialogRef.afterClosed().subscribe();
        });
    }
    setRecieptType() {
        const url = window.location.href;
        if (url.indexOf('cash') != -1) {
            this.receipt_type = src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_1__.RECEIPT_TYPE.CASH;
        }
        else if (url.indexOf('deposit') != -1) {
            this.receipt_type = src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_1__.RECEIPT_TYPE.DEPOSIT;
        }
        else if (url.indexOf('material') != -1) {
            this.receipt_type = src_app_model_transaction_enum__WEBPACK_IMPORTED_MODULE_1__.RECEIPT_TYPE.MATERIAL;
        }
    }
    returnRecType(rt) {
        if (rt == 1)
            return '(Cash / Cheque)';
        else if (rt == 3)
            return 'Deposit';
        else if (rt == 4)
            return 'Material';
        else
            return rt;
    }
    _switchs(id, rt = this.receipt_type) {
        let path = 'transaction/';
        if (id > 0 && rt) {
            if (rt == 1)
                path += 'cash_cheque_add';
            else if (rt == 3)
                path += 'deposit_add';
            else if (rt == 4)
                path += 'material_add';
            this._router.navigate([path, { id }]);
        }
    }
    ngOnDestroy() {
        TransListComponent.lastSelectedHierarchy = undefined;
    }
}
TransListComponent.ɵfac = /*@__PURE__*/ function () { let ɵTransListComponent_BaseFactory; return function TransListComponent_Factory(t) { return (ɵTransListComponent_BaseFactory || (ɵTransListComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetInheritedFactory"](TransListComponent)))(t || TransListComponent); }; }();
TransListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: TransListComponent, selectors: [["di-trans-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "card", "card__styling"], [1, "card-body", "custom__card__body__styling"], [1, "card-title", "mb-0"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "custon__add__btns__class", "float-right", 3, "ngClass", "click"], [2, "border-top", "0px !important"], [1, "card-body", "pt-0"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "actions"], ["style", "width: 100px;", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["class", "pr-3", "mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 4, "matHeaderCellDef"], ["class", "px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "donor_mobile"], ["matColumnDef", "receipt_number"], ["matColumnDef", "receipt_type"], ["matColumnDef", "amount"], ["matColumnDef", "date"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "tbl", "paginateEvent"], ["mat-header-cell", "", 2, "width", "100px"], [1, "ti-reload", "text-info", "pointer", "px-2", 3, "click"], [1, "ti-search", "text-info", "pointer", "px-2", 3, "click"], ["mat-cell", ""], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], [1, "custom_menu_icon"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "permission"], ["mat-menu-item", "", 3, "click"], [1, "ti-eye", "text-info", "m-10", "pointer"], [1, "ti-receipt", "text-info", "m-10", "receipt_black", "pointer"], [1, "ti-receipt", "text-info", "m-10", "receipt_colored", "pointer"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [1, "ti-pencil", "text-info", "m-10", "pointer"], [1, "ti-mobile", "text-info", "m-10", "pointer"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 1, "pr-3"], ["field", "name", "lbl", "Donor", 3, "group"], ["mat-cell", "", 1, "px-3"], ["field", "donor_mobile", "lbl", "Donor Mobile", 3, "group"], ["field", "receipt_number", "lbl", "Receipt No", 3, "group"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""]], template: function TransListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, TransListComponent_div_0_Template, 38, 15, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_7__.PermissionDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuItem, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_8__.TblTxtComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_9__.DiPaginatorComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: [".ti-receipt.text-info.m-10.receipt_colored.pointer[_ngcontent-%COMP%] {\r\n    background: #649173;\r\n    background: linear-gradient(to right, #DBD5A4, #649173);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\ni.ti-receipt.text-info.m-10.receipt_black.pointer[_ngcontent-%COMP%] {\r\n    color: #000 !important;\r\n}\r\n\r\n\r\n\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n.custon__add__btns__class[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  padding: 3px 5px;\r\n  background: transparent;\r\n  border: 0px;\r\n  box-shadow: 0px 0px 0px transparent !important;\r\n}\r\n\r\n.custon__add__btns__class[_ngcontent-%COMP%]:hover{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n\r\n.custon__add__btns__class[_ngcontent-%COMP%]:active{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n\r\n.custon__add__btns__class[_ngcontent-%COMP%]:focus{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper{\r\n  padding: 0px 15px;\r\n  color: white !important;\r\n  background: #00c292 !important;\r\n  display: block;\r\n  font-size: 15px;\r\n  border-radius: 3px;\r\n  transition: 0.5s;\r\n}\r\n\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper:hover{\r\n  box-shadow: 0px 0px 10px -4px #000000a6;\r\n}\r\n\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-ripple.mat-button-ripple{\r\n  display: none !important;\r\n  opacity: 0 !important;\r\n}\r\n\r\n.cdk-mouse-focused.cdk-focused[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{\r\n  opacity: 0 !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n[_nghost-%COMP%]     .mat-menu-panel{\r\n    min-width: 68px !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .mat-menu-panel .mat-menu-content {\r\n  padding: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUVuQix1REFBdUQ7SUFDdkQsNkJBQTZCO0lBQzdCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztBQUNGLHdCQUF3Qjs7QUFDeEIsd0JBQXdCOztBQUN4QjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSx3Q0FBd0M7SUFDdEMsb0NBQW9DO0FBQ3hDOztBQUNBO0VBQ0Usd0NBQXdDO0lBQ3RDLG9DQUFvQztBQUN4Qzs7QUFDQTtFQUNFLHdDQUF3QztJQUN0QyxvQ0FBb0M7QUFDeEM7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBLHdCQUF3Qjs7QUFDdEIsaUJBQWlCOztBQUVuQjtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJ0cmFucy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGktcmVjZWlwdC50ZXh0LWluZm8ubS0xMC5yZWNlaXB0X2NvbG9yZWQucG9pbnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjQ5MTczO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNEQkQ1QTQsICM2NDkxNzMpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREJENUE0LCAjNjQ5MTczKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pLnRpLXJlY2VpcHQudGV4dC1pbmZvLm0tMTAucmVjZWlwdF9ibGFjay5wb2ludGVyIHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEhFQURFUiBTVFlMRSAqL1xyXG4uY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogY2xpcDtcclxuICB9XHJcbiAgLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4vKiBIRUFERVIgQlVUVE9OIFNUWUxFICovXHJcbi8qIEhFQURFUiBCVVRUT04gU1RZTEUgKi9cclxuLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzc3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3M6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3M6Zm9jdXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzcyAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICMwMGMyOTIgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3MgLm1hdC1idXR0b24td3JhcHBlcjpob3ZlcntcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggLTRweCAjMDAwMDAwYTY7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3MgLm1hdC1yaXBwbGUubWF0LWJ1dHRvbi1yaXBwbGV7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxufVxyXG4uY2RrLW1vdXNlLWZvY3VzZWQuY2RrLWZvY3VzZWQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtcclxuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogSEVBREVSIEJVVFRPTiBTVFlMRSAqL1xyXG4gIC8qIEhFQURFUiBTVFlMRSAqL1xyXG5cclxuOmhvc3QgL2RlZXAvIC5tYXQtbWVudS1wYW5lbHtcclxuICAgIG1pbi13aWR0aDogNjhweCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAubWF0LW1lbnUtcGFuZWwgLm1hdC1tZW51LWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 96420:
/*!*******************************************************************!*\
  !*** ./src/app/feature/transaction/transaction-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionRoutingModule": () => (/* binding */ TransactionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/action.enum */ 31978);
/* harmony import */ var _trans_add_trans_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trans-add/trans-add.component */ 55934);
/* harmony import */ var _trans_list_trans_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trans-list/trans-list.component */ 56093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);






const routes = [
    {
        path: "",
        children: [
            {
                path: '',
                redirectTo: 'cash_cheque',
                pathMatch: 'full'
            },
            {
                path: "cash_cheque_add",
                component: _trans_add_trans_add_component__WEBPACK_IMPORTED_MODULE_1__.TransAddComponent,
                data: {
                    title: "Cash",
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.EDIT
                    ],
                    urls: [
                        { title: "Transaction" },
                        { title: "Cash" },
                        { title: "Add" },
                    ]
                }
            },
            {
                path: "cash_cheque",
                component: _trans_list_trans_list_component__WEBPACK_IMPORTED_MODULE_2__.TransListComponent,
                data: {
                    title: "Cash / Cheque List",
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.VIEW
                    ],
                    urls: [
                        { title: "Transaction" },
                        { title: "Cash / Cheque" },
                        { title: "List" },
                    ]
                }
            },
            {
                path: "deposit_add",
                component: _trans_add_trans_add_component__WEBPACK_IMPORTED_MODULE_1__.TransAddComponent,
                data: {
                    title: "Deposit",
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.EDIT
                    ],
                    urls: [
                        { title: "Transaction" },
                        { title: "Deposit" },
                        { title: "Add" },
                    ]
                }
            },
            {
                path: "deposit",
                component: _trans_list_trans_list_component__WEBPACK_IMPORTED_MODULE_2__.TransListComponent,
                data: {
                    title: "Deposit List",
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.VIEW
                    ],
                    urls: [
                        { title: "Transaction" },
                        { title: "Deposit" },
                        { title: "List" },
                    ]
                }
            },
            {
                path: "material_add",
                component: _trans_add_trans_add_component__WEBPACK_IMPORTED_MODULE_1__.TransAddComponent,
                data: {
                    title: "Material",
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.EDIT
                    ],
                    urls: [
                        { title: "Transaction" },
                        { title: "Material" },
                        { title: "Add" },
                    ]
                }
            },
            {
                path: "material",
                component: _trans_list_trans_list_component__WEBPACK_IMPORTED_MODULE_2__.TransListComponent,
                data: {
                    title: "Material List",
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.VIEW
                    ],
                    urls: [
                        { title: "Transaction" },
                        { title: "Material" },
                        { title: "List" },
                    ]
                }
            },
        ]
    }
];
class TransactionRoutingModule {
}
TransactionRoutingModule.ɵfac = function TransactionRoutingModule_Factory(t) { return new (t || TransactionRoutingModule)(); };
TransactionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TransactionRoutingModule });
TransactionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TransactionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 64450:
/*!**************************************************************!*\
  !*** ./src/app/feature/transaction/transaction.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionComponent": () => (/* binding */ TransactionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 16873);


class TransactionComponent {
}
TransactionComponent.ɵfac = function TransactionComponent_Factory(t) { return new (t || TransactionComponent)(); };
TransactionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionComponent, selectors: [["di-transaction"]], decls: 1, vars: 0, template: function TransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 59546:
/*!***********************************************************!*\
  !*** ./src/app/feature/transaction/transaction.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionModule": () => (/* binding */ TransactionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction-routing.module */ 96420);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 75349);
/* harmony import */ var _donor_donor_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../donor/donor.module */ 99820);
/* harmony import */ var _trans_list_trans_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trans-list/trans-list.component */ 56093);
/* harmony import */ var _transaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transaction.component */ 64450);
/* harmony import */ var _trans_add_trans_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trans-add/trans-add.component */ 55934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39609);








class TransactionModule {
}
TransactionModule.ɵfac = function TransactionModule_Factory(t) { return new (t || TransactionModule)(); };
TransactionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TransactionModule });
TransactionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _donor_donor_module__WEBPACK_IMPORTED_MODULE_2__.DonorModule,
            _transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TransactionModule, { declarations: [_transaction_component__WEBPACK_IMPORTED_MODULE_4__.TransactionComponent,
        _trans_list_trans_list_component__WEBPACK_IMPORTED_MODULE_3__.TransListComponent,
        _trans_add_trans_add_component__WEBPACK_IMPORTED_MODULE_5__.TransAddComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _donor_donor_module__WEBPACK_IMPORTED_MODULE_2__.DonorModule,
        _transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionRoutingModule] }); })();


/***/ }),

/***/ 12575:
/*!************************************************!*\
  !*** ./src/app/model/transaction/cash.form.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionCashForm": () => (/* binding */ TransactionCashForm)
/* harmony export */ });
/* harmony import */ var src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/base.validator.service */ 33682);
/* harmony import */ var src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/form.service */ 96033);
/* harmony import */ var src_app_service_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/state.service */ 82923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);




class TransactionCashForm {
    constructor(injector) {
        this.injector = injector;
        this._fs = injector.get(src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__.FormService);
        this._vs = injector.get(src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__.ValidatorService);
        // this.initForm();
    }
    initForm(cash = { donationMode: 1 }) {
        this._ss = this.injector.get(src_app_service_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService);
        let accountVal;
        if (cash.donationMode === 1)
            accountVal = this._vs._vals('Cash Account');
        else if (cash.donationMode === 2)
            accountVal = this._vs._vals('Cheque Account');
        else
            accountVal = null;
        return this._fs._fb.group({
            is_active: [cash.is_active],
            code: [cash.code],
            row_id: [cash.row_id],
            donationMode: [
                cash.donationMode,
                this._vs._vals('Donation Mode')
            ],
            amount: [
                cash.amount,
                this._vs._val('Amount', { min: 1, max: 1000000000, decimal: 1 }),
            ],
            account_id: [
                cash.account_id,
                accountVal
            ],
            donation_type_id: [
                cash.donation_type_id,
                this._vs._vals('Donation Type')
            ],
            donation_sub_type_id: [
                cash?.donation_sub_type_id,
                this._vs._vals('Donation Subtype')
            ],
            location_id: [
                cash.location_id,
                this._vs._vals('Location')
            ],
            majlis_id: [
                cash.majlis_id,
                this._vs._vals('Majlis')
            ],
            purpose_id: [
                cash.purpose_id,
                this._vs._vals('Purpose')
            ],
            branch_id: [
                cash.branch_id
                // this._vs._vals('Branch')
            ],
            fund_category_id: [
                cash.fund_category_id
                // this._vs._vals('Fund Category')
            ],
            additionalInfo: [
                cash.additionalInfo,
                this._vs._val('', { maxChar: 255, alphaNum: 1 }),
            ],
            c5: [
                cash.c5
                // this._vs._vals('C-5')
            ],
            a7: [cash.a7],
            usher_item_id: [cash.usher_item_id],
            cost_five: [{ value: cash?.cost_five, disabled: true }],
            account: [{ value: cash?.account, disabled: true }],
            fund_category: [{ value: cash?.fund_category, disabled: true }],
            majlis: [{ value: cash?.majlis, disabled: true }],
            branch: [{ value: cash?.branch, disabled: true }],
            purpose: [{ value: cash?.purpose, disabled: true }],
            location: [{ value: cash?.location, disabled: true }],
            usher_item: [{ value: cash?.usher_item, disabled: true }],
            donation_type: [{ value: cash?.donation_type, disabled: true }],
            donation_sub_type: [{ value: cash?.donation_sub_type, disabled: true }],
        });
    }
}
TransactionCashForm.ɵfac = function TransactionCashForm_Factory(t) { return new (t || TransactionCashForm)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector)); };
TransactionCashForm.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TransactionCashForm, factory: TransactionCashForm.ɵfac });


/***/ }),

/***/ 30860:
/*!**************************************************!*\
  !*** ./src/app/model/transaction/cheque.form.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionChequeForm": () => (/* binding */ TransactionChequeForm)
/* harmony export */ });
/* harmony import */ var src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/base.validator.service */ 33682);
/* harmony import */ var src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/form.service */ 96033);
/* harmony import */ var _cash_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cash.form */ 12575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);




class TransactionChequeForm {
    constructor(injector) {
        this.injector = injector;
        this._fs = injector.get(src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__.FormService);
        this._vs = injector.get(src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__.ValidatorService);
    }
    initForm(d = {}) {
        const transactionCashForm = new _cash_form__WEBPACK_IMPORTED_MODULE_2__.TransactionCashForm(this.injector);
        d.donationMode = 2;
        return this._fs._fb.group({
            ...transactionCashForm.initForm(d).controls,
            bank_id: [d.bank_id, this._vs._vals('Bank')],
            branchCode: [d.branchCode, this._vs._val('Branch Code')],
            chequeNumber: [d.chequeNumber, this._vs._val('Cheque No', { maxChar: 10 })],
            chequeDate: [
                d.chequeDate,
                [
                    this._vs._vals('Cheque Date'),
                ],
                // Shaheer Bhi
                // this._vs._val_Date({ maxDate: new Date() })
            ],
            bank: [{ value: d.bank, disabled: true }],
        });
    }
}
TransactionChequeForm.ɵfac = function TransactionChequeForm_Factory(t) { return new (t || TransactionChequeForm)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector)); };
TransactionChequeForm.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TransactionChequeForm, factory: TransactionChequeForm.ɵfac });


/***/ }),

/***/ 17638:
/*!***************************************************!*\
  !*** ./src/app/model/transaction/deposit.form.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionDepositForm": () => (/* binding */ TransactionDepositForm)
/* harmony export */ });
/* harmony import */ var src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/base.validator.service */ 33682);
/* harmony import */ var src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/form.service */ 96033);
/* harmony import */ var _cash_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cash.form */ 12575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);




class TransactionDepositForm {
    constructor(injector) {
        this.injector = injector;
        this._fs = injector.get(src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__.FormService);
        this._vs = injector.get(src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__.ValidatorService);
    }
    initForm(d = {}) {
        const transactionCashForm = new _cash_form__WEBPACK_IMPORTED_MODULE_2__.TransactionCashForm(this.injector);
        return this._fs._fb.group({
            ...transactionCashForm.initForm(d).controls,
            account_id: [
                d.account_id,
                this._vs._vals('Deposit Bank')
            ],
            branchCode: [
                d.branchCode,
                this._vs._val('Branch Code')
            ],
            depositSlipNumber: [
                d.depositSlipNumber,
                this._vs._val('Deposit Slip No')
            ],
            depositDate: [
                d.depositDate,
                [
                    this._vs._val('Deposit Date'),
                    this._vs._val_Date({ maxDate: new Date() })
                ]
            ],
            bank: [{ value: d.bank, disabled: true }],
        });
    }
}
TransactionDepositForm.ɵfac = function TransactionDepositForm_Factory(t) { return new (t || TransactionDepositForm)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector)); };
TransactionDepositForm.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TransactionDepositForm, factory: TransactionDepositForm.ɵfac });


/***/ }),

/***/ 70753:
/*!************************************************************!*\
  !*** ./src/app/model/transaction/donor-additional.form.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionDonorAddForm": () => (/* binding */ TransactionDonorAddForm)
/* harmony export */ });
/* harmony import */ var src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/base.validator.service */ 33682);
/* harmony import */ var src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/form.service */ 96033);
/* harmony import */ var _donor_donor_add_info_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../donor/donor-add-info.form */ 49463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);




class TransactionDonorAddForm {
    constructor(injector) {
        this.injector = injector;
        this._fs = injector.get(src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__.FormService);
        this._vs = injector.get(src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__.ValidatorService);
    }
    initForm() {
        const donorAddInfoForm = new _donor_donor_add_info_form__WEBPACK_IMPORTED_MODULE_2__.DonorAddInfoForm(this.injector);
        return this._fs._fb.group({
            ...donorAddInfoForm.initForm().controls,
            displayName: ['', this._vs._val('', { alpha: 1 })],
            careOf: ['', this._vs._val('', { minChar: 11, maxChar: 15, num: 1 })],
            careOfName: ['', this._vs._val('', { alpha: 1 })],
            mr: ['', this._vs._val('', { maxChar: 10, alphaNum: 1 })],
        });
    }
    patchForm(d) {
        this._fs._form.patchValue({
            gender: d.gender,
            email: d.email,
            address: d.address,
            displayName: d.displayName,
            careOf: d.careOf,
            careOfName: d.careOfName,
            mr: d.mr,
        });
    }
}
TransactionDonorAddForm.ɵfac = function TransactionDonorAddForm_Factory(t) { return new (t || TransactionDonorAddForm)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector)); };
TransactionDonorAddForm.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TransactionDonorAddForm, factory: TransactionDonorAddForm.ɵfac });


/***/ }),

/***/ 25100:
/*!*******************************************!*\
  !*** ./src/app/model/transaction/enum.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RECEIPT_TYPE": () => (/* binding */ RECEIPT_TYPE)
/* harmony export */ });
var RECEIPT_TYPE;
(function (RECEIPT_TYPE) {
    RECEIPT_TYPE[RECEIPT_TYPE["HOLD"] = 0] = "HOLD";
    RECEIPT_TYPE[RECEIPT_TYPE["CASH"] = 1] = "CASH";
    RECEIPT_TYPE[RECEIPT_TYPE["CHEQUE"] = 2] = "CHEQUE";
    RECEIPT_TYPE[RECEIPT_TYPE["DEPOSIT"] = 3] = "DEPOSIT";
    RECEIPT_TYPE[RECEIPT_TYPE["MATERIAL"] = 4] = "MATERIAL";
})(RECEIPT_TYPE || (RECEIPT_TYPE = {}));


/***/ }),

/***/ 56904:
/*!************************************************!*\
  !*** ./src/app/model/transaction/full.form.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullTransactionForm": () => (/* binding */ FullTransactionForm)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/base.validator.service */ 33682);
/* harmony import */ var src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/form.service */ 96033);
/* harmony import */ var src_app_service_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/state.service */ 82923);
/* harmony import */ var _donor_donor_gsb_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../donor/donor-gsb.form */ 76011);
/* harmony import */ var _donor_donor_info_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../donor/donor-info.form */ 24353);
/* harmony import */ var _cash_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cash.form */ 12575);
/* harmony import */ var _cheque_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cheque.form */ 30860);
/* harmony import */ var _deposit_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deposit.form */ 17638);
/* harmony import */ var _donor_additional_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./donor-additional.form */ 70753);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./enum */ 25100);
/* harmony import */ var _hierarchy_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hierarchy.form */ 72860);
/* harmony import */ var _material_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material.form */ 20153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 39609);















/**
 * #SOLID 4 Interface Segregation
 * The Interface Segregation Principle was defined by Robert C. Martin while consulting for Xerox to help them build the software for their new printer systems. He defined it as: “Clients should not be forced to depend upon interfaces that they do not use.”.
 *
 */
class FullTransactionForm {
    constructor(injector) {
        this.injector = injector;
        this._fs = injector.get(src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__.FormService);
        this._vs = injector.get(src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__.ValidatorService);
        this._ss = injector.get(src_app_service_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService);
    }
    initForm(trans) {
        const donorInfoForm = new _donor_donor_info_form__WEBPACK_IMPORTED_MODULE_4__.DonorInfoForm(this.injector);
        const donorGSBForm = new _donor_donor_gsb_form__WEBPACK_IMPORTED_MODULE_3__.DonorGSBForm(this.injector);
        const datePipe = this.injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe);
        const transactionDonorAddForm = new _donor_additional_form__WEBPACK_IMPORTED_MODULE_8__.TransactionDonorAddForm(this.injector);
        const hierarchy = new _hierarchy_form__WEBPACK_IMPORTED_MODULE_10__.HierarchyForm(this.injector);
        const currentDate = datePipe.transform(new Date(), 'yyyy-MM-dd');
        // Cash | Cheque | Deposit | Material;
        const group = this._fs._fb.group({
            currency_id: ['', this._vs._vals('Currency')],
            transaction_receipt_date: [currentDate, this._vs._vals('Receipt Date')],
            event_id: [''],
            is_advance: ['0'],
            donor: this._fs._fb.group({
                ...donorInfoForm.initForm().controls,
            }),
            gsb: this._fs._fb.group({
                ...donorGSBForm.initForm().controls,
            }),
            hierarchy: this._fs._fb.group({
                ...hierarchy.initForm().controls,
            }),
            additional_info: this._fs._fb.group({
                ...transactionDonorAddForm.initForm().controls,
            }),
            receipt_details: this._fs._fb.array([this.receiptDetail(trans)]),
        });
        this.setReceiptType(trans, group);
        return group;
    }
    setReceiptType(trans, group) {
        if (trans == _enum__WEBPACK_IMPORTED_MODULE_9__.RECEIPT_TYPE.CASH || trans == _enum__WEBPACK_IMPORTED_MODULE_9__.RECEIPT_TYPE.CHEQUE) {
            group.addControl('receipt_type', new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(1));
        }
        else if (trans == _enum__WEBPACK_IMPORTED_MODULE_9__.RECEIPT_TYPE.DEPOSIT) {
            group.addControl('receipt_type', new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(3));
        }
        else if (trans == _enum__WEBPACK_IMPORTED_MODULE_9__.RECEIPT_TYPE.MATERIAL) {
            group.addControl('receipt_type', new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(4));
        }
    }
    // 1 Receipt Detail Initialization
    receiptDetail(trans) {
        const cash = new _cash_form__WEBPACK_IMPORTED_MODULE_5__.TransactionCashForm(this.injector);
        const cheque = new _cheque_form__WEBPACK_IMPORTED_MODULE_6__.TransactionChequeForm(this.injector);
        const deposit = new _deposit_form__WEBPACK_IMPORTED_MODULE_7__.TransactionDepositForm(this.injector);
        const material = new _material_form__WEBPACK_IMPORTED_MODULE_11__.TransactionMaterialForm(this.injector);
        switch (trans) {
            case _enum__WEBPACK_IMPORTED_MODULE_9__.RECEIPT_TYPE.CASH:
                return this._fs._fb.group({
                    ...cash.initForm().controls,
                    donationMode: [1, this._vs._vals('Donation Mode')],
                });
            case _enum__WEBPACK_IMPORTED_MODULE_9__.RECEIPT_TYPE.CHEQUE:
                return this._fs._fb.group({
                    ...cheque.initForm().controls,
                    donationMode: [2, this._vs._vals('Donation Mode')],
                });
            case _enum__WEBPACK_IMPORTED_MODULE_9__.RECEIPT_TYPE.DEPOSIT:
                return this._fs._fb.group({
                    ...deposit.initForm().controls,
                    donationMode: [3, this._vs._vals('Donation Mode')],
                });
            case _enum__WEBPACK_IMPORTED_MODULE_9__.RECEIPT_TYPE.MATERIAL:
                return this._fs._fb.group({
                    ...material.initForm().controls,
                    donationMode: [4, this._vs._vals('Donation Mode')],
                });
        }
    }
    // 2 Receipt Detail (Adding New)
    addReceiptDetail(trans) {
        const custom = this._fs._form.get('receipt_details');
        const recieptDetial = this.receiptDetail(trans);
        custom.push(recieptDetial);
    }
    // 4 Receipt Detail (Updating Data)
    patchReceiptDetail(receiptDetails, trans, not_copy = true) {
        const formArray = this._fs._form.get('receipt_details');
        if (not_copy && receiptDetails.length > 0)
            formArray.clear();
        receiptDetails.forEach((d) => {
            let group = this._fs._fb.group({});
            if (trans === _enum__WEBPACK_IMPORTED_MODULE_9__.RECEIPT_TYPE.CASH || trans === _enum__WEBPACK_IMPORTED_MODULE_9__.RECEIPT_TYPE.CHEQUE) {
                if (d.donationMode == 1) {
                    const x = new _cash_form__WEBPACK_IMPORTED_MODULE_5__.TransactionCashForm(this.injector);
                    group = x.initForm(d);
                }
                else if (d.donationMode == 2) {
                    const x = new _cheque_form__WEBPACK_IMPORTED_MODULE_6__.TransactionChequeForm(this.injector);
                    group = x.initForm(d);
                }
            }
            else if (trans === _enum__WEBPACK_IMPORTED_MODULE_9__.RECEIPT_TYPE.DEPOSIT) {
                const x = new _deposit_form__WEBPACK_IMPORTED_MODULE_7__.TransactionDepositForm(this.injector);
                d.donationMode = 3;
                group = x.initForm(d);
            }
            else if (trans === _enum__WEBPACK_IMPORTED_MODULE_9__.RECEIPT_TYPE.MATERIAL) {
                const x = new _material_form__WEBPACK_IMPORTED_MODULE_11__.TransactionMaterialForm(this.injector);
                d.donationMode = 4;
                group = x.initForm(d);
            }
            if (d.donationMode == 1 || d.donationMode == 2) {
                group.addControl('donationMode', new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(d.donationMode, this._vs._vals('Donation Mode')));
            }
            formArray.push(group);
        });
    }
}
FullTransactionForm.ɵfac = function FullTransactionForm_Factory(t) { return new (t || FullTransactionForm)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Injector)); };
FullTransactionForm.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({ token: FullTransactionForm, factory: FullTransactionForm.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 72860:
/*!*****************************************************!*\
  !*** ./src/app/model/transaction/hierarchy.form.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HierarchyForm": () => (/* binding */ HierarchyForm)
/* harmony export */ });
/* harmony import */ var src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/base.validator.service */ 33682);
/* harmony import */ var src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/form.service */ 96033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39609);



class HierarchyForm {
    constructor(injector) {
        this.injector = injector;
        this._fs = injector.get(src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__.FormService);
        this._vs = injector.get(src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__.ValidatorService);
    }
    initForm(d = {}) {
        return this._fs._fb.group({
            organisation_id: [
                d.organisation_id,
                this._vs._vals('Organization')
            ],
            system_id: [
                d.system_id, this._vs._vals('System')
            ],
            bg: [
                d.bg,
                this._vs._vals('Business Group')
            ],
            le: [
                d.le,
                this._vs._vals('Legal Entity')
            ],
            ou: [
                d.ou,
                this._vs._vals('Operating Unit')
            ],
            su: [
                d.su, this._vs._vals('Sub Unit')
            ],
            // dco: [
            //   d.dco, this._vs._vals('Donation Cell Office')
            // ],
        });
    }
}
HierarchyForm.ɵfac = function HierarchyForm_Factory(t) { return new (t || HierarchyForm)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector)); };
HierarchyForm.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HierarchyForm, factory: HierarchyForm.ɵfac });


/***/ }),

/***/ 20153:
/*!****************************************************!*\
  !*** ./src/app/model/transaction/material.form.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionMaterialForm": () => (/* binding */ TransactionMaterialForm)
/* harmony export */ });
/* harmony import */ var src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/base.validator.service */ 33682);
/* harmony import */ var src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/form.service */ 96033);
/* harmony import */ var _cash_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cash.form */ 12575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);




class TransactionMaterialForm {
    constructor(injector) {
        this.injector = injector;
        this._fs = injector.get(src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__.FormService);
        this._vs = injector.get(src_app_service_base_validator_service__WEBPACK_IMPORTED_MODULE_0__.ValidatorService);
    }
    initForm(d = {}) {
        const transactionCashForm = new _cash_form__WEBPACK_IMPORTED_MODULE_2__.TransactionCashForm(this.injector);
        return this._fs._fb.group({
            ...transactionCashForm.initForm(d).controls,
            material_item_id: [
                d.material_item_id,
                this._vs._vals('Material Item')
            ],
            weight: [
                d.weight,
                this._vs._val('Weight', { isField: 0 })
            ],
            unit_id: [
                d.unit_id,
                this._vs._vals('Unit')
            ],
            description: [
                d.description,
                this._vs._val('Description', { maxChar: 255, alphaNum: 1 })
            ],
            material_item: [{ value: d.material_item, disabled: true }],
            unit: [{ value: d.unit, disabled: true }],
        });
    }
}
TransactionMaterialForm.ɵfac = function TransactionMaterialForm_Factory(t) { return new (t || TransactionMaterialForm)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector)); };
TransactionMaterialForm.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TransactionMaterialForm, factory: TransactionMaterialForm.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_feature_transaction_transaction_module_ts.js.map