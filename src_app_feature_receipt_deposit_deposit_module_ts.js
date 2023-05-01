"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["src_app_feature_receipt_deposit_deposit_module_ts"],{

/***/ 53546:
/*!******************************************************************************************!*\
  !*** ./src/app/feature/receipt/deposit/cash-deposit-bank/cash-deposit-bank.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashDepositBankComponent": () => (/* binding */ CashDepositBankComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var src_app_shared_components_filters_cash_deposit_filter_cash_deposit_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/filters/cash-deposit-filter/cash-deposit-filter.component */ 34753);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/control/dd/dd.component */ 32231);
/* harmony import */ var _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/control/date/date.component */ 24280);
/* harmony import */ var _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/control/txt/txt.component */ 55806);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 15719);
/* harmony import */ var _shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/directive/permission.directive */ 47399);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 96053);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 952);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 33695);




















const _c0 = ["parencheckbox"];
function CashDepositBankComponent_div_0_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " S No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CashDepositBankComponent_div_0_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r29 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", i_r29 + 1, " ");
} }
function CashDepositBankComponent_div_0_th_47_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CashDepositBankComponent_div_0_th_47_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r31.selectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("indeterminate", ctx_r3._fs._form.get("id").length > 0 && ctx_r3._fs._form.get("id").length < ctx_r3.selectAllList.length)("disabled", ctx_r3.selectAllList.length == 0)("checked", ctx_r3.multiSelect);
} }
function CashDepositBankComponent_div_0_td_48_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function CashDepositBankComponent_div_0_td_48_Template_input_valueChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const item_r33 = restoredCtx.$implicit; return item_r33.id = $event; })("change", function CashDepositBankComponent_div_0_td_48_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const item_r33 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r37.getCheckBoxValue($event, item_r33.master_id, item_r33.donation_type, item_r33 == null ? null : item_r33.amount); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("id", i_r34 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r4.multiSelect)("value", item_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("for", i_r34 + 1);
} }
function CashDepositBankComponent_div_0_th_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Receipt Date"), " ");
} }
function CashDepositBankComponent_div_0_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, item_r38.date, "dd/MM/yyyy"), " ");
} }
function CashDepositBankComponent_div_0_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Receipt No"));
} }
function CashDepositBankComponent_div_0_td_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r39.receipt_no, " ");
} }
function CashDepositBankComponent_div_0_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Amount"), " ");
} }
function CashDepositBankComponent_div_0_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, item_r40 == null ? null : item_r40.amount), " ");
} }
function CashDepositBankComponent_div_0_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Batch Number"), " ");
} }
function CashDepositBankComponent_div_0_td_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (item_r41 == null ? null : item_r41.batch == null ? null : item_r41.batch.title) !== undefined && (item_r41 == null ? null : item_r41.batch == null ? null : item_r41.batch.title) !== "" ? (item_r41 == null ? null : item_r41.batch == null ? null : item_r41.batch.title) + "_" + (item_r41 == null ? null : item_r41.created_by == null ? null : item_r41.created_by.title) : "", " ");
} }
function CashDepositBankComponent_div_0_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Account"), " ");
} }
function CashDepositBankComponent_div_0_td_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r42 == null ? null : item_r42.account == null ? null : item_r42.account.title, " ");
} }
function CashDepositBankComponent_div_0_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Donation Type"), " ");
} }
function CashDepositBankComponent_div_0_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r43 == null ? null : item_r43.donation_type, " ");
} }
function CashDepositBankComponent_div_0_th_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Purpose"), " ");
} }
function CashDepositBankComponent_div_0_td_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r44 == null ? null : item_r44.purpose, " ");
} }
function CashDepositBankComponent_div_0_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Organization"), " ");
} }
function CashDepositBankComponent_div_0_td_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r45 == null ? null : item_r45.organisation == null ? null : item_r45.organisation.title, " ");
} }
function CashDepositBankComponent_div_0_th_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "System"), " ");
} }
function CashDepositBankComponent_div_0_td_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r46 == null ? null : item_r46.system == null ? null : item_r46.system.title, " ");
} }
const _c1 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function CashDepositBankComponent_div_0_tr_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 56);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](1, _c1, ctx_r23._ss.lng === "en", ctx_r23._ss.lng === "ur"));
} }
function CashDepositBankComponent_div_0_tr_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 57);
} }
function CashDepositBankComponent_div_0_button_81_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CashDepositBankComponent_div_0_button_81_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](83); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r48.openDialogWithTemplateRef(_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r25._fhs._disableBtn("id"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](5, _c1, ctx_r25._ss.lng === "en", ctx_r25._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 3, "Process"));
} }
function CashDepositBankComponent_div_0_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h2", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "form", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function CashDepositBankComponent_div_0_ng_template_82_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r50._onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "table", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CashDepositBankComponent_div_0_ng_template_82_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r52._wpopTotal = $event; })("blur", function CashDepositBankComponent_div_0_ng_template_82_Template_input_blur_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r53.getWajibaAmount($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CashDepositBankComponent_div_0_ng_template_82_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r54._npopTotal = $event; })("blur", function CashDepositBankComponent_div_0_ng_template_82_Template_input_blur_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r55.getNafilaAmount($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "b", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](42, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CashDepositBankComponent_div_0_ng_template_82_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r56.dialogClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](42, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 24, "Please Enter Your Deposit Slip Amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r27._fs._form);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](45, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 26, "Donation Type"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](48, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 28, "Amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](51, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 30, "Wajiba"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](54, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r27._wpopTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r27._vs.errMsg("wajiba.amount"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](57, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](27, 32, "Nafila"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](60, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r27._npopTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r27._vs.errMsg("nafila.amount"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](63, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](38, 34, "Total Amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](42, 36, ctx_r27._wpopTotal + ctx_r27._npopTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](66, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](49, 38, "Confirm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](69, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](52, 40, "Cancel"));
} }
const _c2 = function (a1, a2) { return { type: "0", system_id: a1, organisation_id: a2 }; };
const _c3 = function (a0) { return { query: a0 }; };
function CashDepositBankComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CashDepositBankComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r57.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "hr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "di-dd", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "di-date", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "di-txt", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "di-dd", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "di-date", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](39, "di-txt", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](43, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, CashDepositBankComponent_div_0_th_44_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, CashDepositBankComponent_div_0_td_45_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](46, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, CashDepositBankComponent_div_0_th_47_Template, 5, 3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, CashDepositBankComponent_div_0_td_48_Template, 4, 4, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](49, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, CashDepositBankComponent_div_0_th_50_Template, 3, 3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, CashDepositBankComponent_div_0_td_51_Template, 3, 4, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](52, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, CashDepositBankComponent_div_0_th_53_Template, 3, 3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, CashDepositBankComponent_div_0_td_54_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](55, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, CashDepositBankComponent_div_0_th_56_Template, 3, 3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](57, CashDepositBankComponent_div_0_td_57_Template, 3, 3, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](58, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, CashDepositBankComponent_div_0_th_59_Template, 3, 3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, CashDepositBankComponent_div_0_td_60_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](61, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](62, CashDepositBankComponent_div_0_th_62_Template, 3, 3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](63, CashDepositBankComponent_div_0_td_63_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](64, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](65, CashDepositBankComponent_div_0_th_65_Template, 3, 3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](66, CashDepositBankComponent_div_0_td_66_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](67, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](68, CashDepositBankComponent_div_0_th_68_Template, 3, 3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](69, CashDepositBankComponent_div_0_td_69_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](70, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](71, CashDepositBankComponent_div_0_th_71_Template, 3, 3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, CashDepositBankComponent_div_0_td_72_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](73, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](74, CashDepositBankComponent_div_0_th_74_Template, 3, 3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](75, CashDepositBankComponent_div_0_td_75_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](76, CashDepositBankComponent_div_0_tr_76_Template, 1, 4, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](77, CashDepositBankComponent_div_0_tr_77_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](81, CashDepositBankComponent_div_0_button_81_Template, 3, 8, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](82, CashDepositBankComponent_div_0_ng_template_82_Template, 53, 72, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 25, "Cash Deposit in Bank"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](37, _c1, ctx_r0._ss.lng === "en", ctx_r0._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 27, "Filter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0._fs._form);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 29, "WAJIBA"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 31, ctx_r0.wajibaTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("req", false)("url", ctx_r0.URLz.BANK)("param", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](43, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](40, _c2, ctx_r0._system, ctx_r0._org)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("max", ctx_r0.maxDate)("req", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("req", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](30, 33, "NAFILA"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](33, 35, ctx_r0.nafilaTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("req", false)("url", ctx_r0.URLz.BANK)("param", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](48, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](45, _c2, ctx_r0._system, ctx_r0._org)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("max", ctx_r0.maxDate)("req", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("req", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("permission", ctx_r0.ACTION.ADD);
} }
class CashDepositBankComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_4__.BaseForm {
    constructor(injector) {
        super(injector);
        this._load_Template = false;
        this.wajibaTotal = 0;
        this.nafilaTotal = 0;
        this.totalSum = 0;
        this._wpopTotal = 0;
        this._npopTotal = 0;
        this.multiSelect = false;
        this.maxDate = new Date();
        this.selectAllList = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource();
        this.displayedColumns = [
            'S No',
            'Select',
            'Receipt Date',
            'Receipt No',
            'Amount',
            'Batch Number',
            'Account',
            'Donation Type',
            'Purpose',
            'Donation Org',
            'Donation System'
        ];
        //  Validator Object
        this.validation = {
            deposit_bank: [this._vs._vals('Deposit Bank')],
            deposit_date: [this._vs._val('Deposit Date', { isField: 0 }), this._vs._val_Date({})],
            deposit_slip: [this._vs._val('Deposit Slip', { minChar: 3, maxChar: 20 })],
            amount: [this._vs._val('Amount', { isField: 0, num: 1 })]
        };
        this.param.endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.CASH_DEPOSIT;
    }
    ngOnInit() {
        this.initForm();
        this._fhs._pathLocation = '/deposit/cash_deopsit_bank';
        this.continueProcess();
    }
    openDialogWithTemplateRef(templateRef) {
        this._dialog.open(templateRef);
    }
    dialogClose() {
        if (this._fs._form.valid) {
            this._dialog.closeAll();
        }
    }
    initControl() {
        return this._fb.group({
            deposit_bank: [null],
            deposit_slip: [null],
            deposit_date: [''],
            amount: [null],
        });
    }
    initForm() {
        this._fs._form = this._fb.group({
            wajiba: this._fs._fb.group({
                ...this.initControl().controls,
            }),
            nafila: this._fs._fb.group({
                ...this.initControl().controls,
            }),
            id: this._fb.array([]),
        });
    }
    openDialog() {
        const dialogRef = this._dialog.open(src_app_shared_components_filters_cash_deposit_filter_cash_deposit_filter_component__WEBPACK_IMPORTED_MODULE_1__.CashDepositFilterComponent, {
            width: '55%',
            data: {},
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined) {
                this.getCashData(result);
            }
        });
    }
    continueProcess() {
        if (this._ss?.hierarchy?.org_status) {
            this.openDialog();
        }
        // For Single Hierarchy
        else {
            this.patchData();
        }
    }
    patchData() {
        const h = this._ss.hierarchy;
        this._system = h?.system_id;
        this._org = h?.organisation_id;
        this._http.get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.TRANSACTION,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.TRANSACTION_DETAIL,
            query: {
                organisation_id: h?.organisation_id,
                system_id: h?.system_id,
            }
        }).subscribe((res) => {
            this._load_Template = true;
            this.dataSource.data = res?.data?.records;
            this.selectAllList = res?.data?.records;
            this.totalRecords = res?.data.totalRecords;
        });
    }
    getCashData(cashdata) {
        this._system = cashdata.systemId;
        this._org = cashdata?.orgId;
        this._http.get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.TRANSACTION,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.TRANSACTION_DETAIL,
            query: {
                start_date: cashdata.startDate,
                end_date: cashdata.endDate,
                cash_account: cashdata.cashAcc,
                purpose: cashdata.purpose,
                batch_number: cashdata.branchNo,
                organisation_id: cashdata.orgId,
                system_id: cashdata.systemId,
            }
        }).subscribe((res) => {
            this._load_Template = true;
            this.dataSource.data = res?.data?.records;
            this.selectAllList = res?.data?.records;
            this.totalRecords = res?.data.totalRecords;
        });
    }
    // =========   Individual Checkbox functionality ================== //
    getCheckBoxValue(val, masterId, type, ammount) {
        this.AmountTotal(type, ammount, val.target.checked);
        const selectedIdArr = this._fs._form.get('id');
        if (val.target.checked) {
            selectedIdArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(val.target.value),
                master_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(masterId),
                type: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(type)
            }));
        }
        else {
            let i = 0;
            selectedIdArr.controls.forEach((ctrl) => {
                if (ctrl.value.id == val.target.value &&
                    ctrl.value.master_id == masterId) {
                    selectedIdArr.removeAt(i);
                    return;
                }
                i++;
            });
        }
        this.ValidationHandler(type, val.target.checked);
        this.indeterminate(selectedIdArr.value);
    }
    indeterminate(checked_arr) {
        if (checked_arr.length == this.totalRecords) {
            this.parencheckbox.forEach((element) => {
                console.log(element);
                element.nativeElement.checked = true;
            });
        }
        else if (checked_arr.length == 0) {
            this.parencheckbox.forEach((element) => {
                console.log(element);
                element.nativeElement.checked = false;
            });
        }
    }
    ValidationHandler(donateType, checkCondition) {
        const selectedIdArr = this._fs._form.get('id');
        for (const key in this._fs._form.get(donateType).controls) {
            if (checkCondition) {
                this._fs._form.get(donateType).get(key).setValidators(this.validation[key]);
                this._fs._form.get(donateType).markAllAsTouched();
            }
            else if (!checkCondition) {
                if (!(selectedIdArr.controls.some((el) => el.value.type === donateType))) {
                    this._fs._form.get(donateType).get(key).clearValidators();
                    this._fs._form.get(donateType).get(key).markAsUntouched();
                }
            }
            this._fs._form.get(donateType).get(key).updateValueAndValidity();
        }
    }
    AmountTotal(donationType, amount, condition) {
        if (condition) {
            if (donationType == 'wajiba') {
                this.wajibaTotal += amount;
            }
            else if (donationType == 'nafila') {
                this.nafilaTotal += amount;
            }
            this.getUserAmount(this.wajibaTotal, this.nafilaTotal);
        }
        else if (!condition) {
            if (donationType == 'wajiba') {
                this.wajibaTotal -= amount;
            }
            else if (donationType == 'nafila') {
                this.nafilaTotal -= amount;
            }
            this.getUserAmount(this.wajibaTotal, this.nafilaTotal);
        }
    }
    getUserAmount(totalOne, totalTwo) {
        this.totalSum = totalOne + totalTwo;
    }
    // =========   Individual Checkbox functionality ================== //
    // =========   CheckAll functionality ================== //
    validateSelectAll() {
        this.selectAllList.forEach(val => {
            this.ValidationHandler(val.donation_type, this.multiSelect);
        });
    }
    selectAll() {
        const selectedPerArr = this._fs._form.get('id');
        this._fs._form.get('id').clear();
        this.multiSelect = !this.multiSelect;
        this.AllAmountTotal();
        this.validateSelectAll();
        if (this.multiSelect) {
            if (this.selectAllList.length != 0) {
                this.selectAllList.forEach(val => {
                    selectedPerArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
                        id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(val.id),
                        master_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(val.master_id),
                        type: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(val.donation_type)
                    }));
                });
            }
        }
        else {
            while (selectedPerArr.length != 0) {
                selectedPerArr.removeAt(0);
            }
        }
    }
    AllAmountTotal() {
        this.wajibaTotal = 0;
        this.nafilaTotal = 0;
        this.totalSum = 0;
        if (this.selectAllList.length != 0) {
            this.selectAllList.forEach(val => {
                if (this.multiSelect) {
                    if (val.donation_type == 'wajiba') {
                        this.wajibaTotal += val.amount;
                    }
                    else if (val.donation_type == 'nafila') {
                        this.nafilaTotal += val.amount;
                    }
                    this.getUserAmount(this.wajibaTotal, this.nafilaTotal);
                }
                else if (!this.multiSelect) {
                    if (val.donation_type == 'wajiba') {
                        if (this.wajibaTotal != 0)
                            this.wajibaTotal -= val.amount;
                    }
                    else if (val.donation_type == 'nafila') {
                        if (this.nafilaTotal != 0)
                            this.nafilaTotal -= val.amount;
                    }
                    this.getUserAmount(this.wajibaTotal, this.nafilaTotal);
                }
            });
        }
    }
    // =========   CheckAll functionality ================== //
    getWajibaAmount(e) {
        if (e.target.value != '') {
            if (this.wajibaTotal > e.target.value) {
                this._swl.cashDepositBankWajiba('wajiba', e.target.value);
            }
            else if (this.wajibaTotal < e.target.value) {
                this._swl.cashDepositBankWajiba('wajiba', e.target.value);
            }
        }
    }
    getNafilaAmount(e) {
        if (e.target.value != '') {
            if (this.nafilaTotal > e.target.value) {
                this._swl.cashDepositBankWajiba('nafila', e.target.value);
            }
            else if (this.nafilaTotal < e.target.value) {
                this._swl.cashDepositBankWajiba('nafila', e.target.value);
            }
        }
    }
    deleteGroup(newGroup) {
        if ((newGroup.nafila.deposit_date == null && newGroup.nafila.amount == null && newGroup.nafila.deposit_bank == null && newGroup.nafila.deposit_slip == null) ||
            (newGroup.nafila.deposit_date == null && newGroup.nafila.amount == 0 && newGroup.nafila.deposit_bank == null && newGroup.nafila.deposit_slip == null) ||
            (newGroup.nafila.deposit_date == "" && newGroup.nafila.amount == 0 && newGroup.nafila.deposit_bank == null && newGroup.nafila.deposit_slip == null)) {
            return delete newGroup.nafila;
        }
        if ((newGroup.wajiba.deposit_date == null && newGroup.wajiba.amount == null && newGroup.wajiba.deposit_bank == null && newGroup.wajiba.deposit_slip == null) ||
            (newGroup.wajiba.deposit_date == null && newGroup.wajiba.amount == 0 && newGroup.wajiba.deposit_bank == null && newGroup.wajiba.deposit_slip == null) ||
            (newGroup.wajiba.deposit_date == "" && newGroup.wajiba.amount == 0 && newGroup.wajiba.deposit_bank == null && newGroup.wajiba.deposit_slip == null)) {
            return delete newGroup.wajiba;
        }
    }
    _onSubmit() {
        const grandTotal = this._wpopTotal + this._npopTotal;
        this._fs._form.markAllAsTouched();
        if (grandTotal == this.totalSum) {
            this._vs._submitted = true;
            if (this._fs._form.valid) {
                const newGroup = { ...this._fs._form.value };
                this.deleteGroup(newGroup);
                this._http.create({ body: newGroup, url: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.DEPOSITE_CASH, endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.CASH_DEPOSIT }).subscribe({
                    next: (res) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                            title: this._translate.instant('Processed'),
                            text: this._translate.instant(res.message),
                            icon: 'success',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: '<i class="fas fa-thumbs-up"></i>',
                        }).then(() => {
                            this._fs._form.reset();
                            this._fhs.reloadComponent();
                            // this._fhs.reloadCmpNew();
                        });
                    },
                    error: (httpErrorResponse) => {
                        this._vs._error_server(httpErrorResponse.error);
                    }
                });
                this._vs._submitted = false;
            }
            else {
                return this._fs._form.valid;
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                title: 'Please enter Correct amount',
                text: "",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: '<i class="fas fa-thumbs-up"></i>',
            });
        }
    }
}
CashDepositBankComponent.ɵfac = function CashDepositBankComponent_Factory(t) { return new (t || CashDepositBankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injector)); };
CashDepositBankComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CashDepositBankComponent, selectors: [["app-cash-deposit-bank"]], viewQuery: function CashDepositBankComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.parencheckbox = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-12", "col-lg-12", "p-0"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-success", "custon__add__btns__class", "float-right", 3, "ngClass", "click"], [2, "border-top", "0px !important"], [3, "formGroup"], ["formGroupName", "wajiba", 1, "row", "card-body", "py-0"], [1, "col-sm-12", "col-md-3", "p-0", "my-1"], [1, "wajiba-nafila"], ["field", "deposit_bank", "lbl", "Deposit Bank", "groupName", "wajiba", 3, "req", "url", "param"], ["field", "deposit_date", "groupName", "wajiba", "lbl", "Deposit Date", 3, "max", "req"], ["field", "deposit_slip", "lbl", "Deposit Slip No", "groupName", "wajiba", "type", "number", 3, "req"], ["formGroupName", "nafila", 1, "row", "card-body", "py-0"], ["field", "deposit_bank", "lbl", "Deposit Bank", "groupName", "nafila", 3, "req", "url", "param"], ["field", "deposit_date", "groupName", "nafila", "lbl", "Deposit Date", 3, "max", "req"], ["field", "deposit_slip", "lbl", "Deposit Slip No", "groupName", "nafila", "type", "number", 3, "req"], [1, "row", "card-body", "py-0"], [1, "mat_table"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "S No"], ["mat-header-cell", "", "translate", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "Receipt Date"], ["class", "px-3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Receipt No"], ["matColumnDef", "Amount"], ["matColumnDef", "Batch Number"], ["matColumnDef", "Account"], ["matColumnDef", "Donation Type"], ["matColumnDef", "Purpose"], ["matColumnDef", "Donation Org"], ["matColumnDef", "Donation System"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "card-body"], [1, "action-form"], [1, "form-group", "m-b-0", "text-right"], ["mat-raised-button", "", "type", "button", "class", "btn btn-info btn-sm  my-2", 3, "disabled", "ngClass", "click", 4, "permission"], ["myDialog", ""], ["mat-header-cell", "", "translate", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", "custom-chk", 3, "indeterminate", "disabled", "checked", "change"], ["parencheckbox", ""], [1, "custom-control-label"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "value", "valueChange", "change"], [1, "custom-control-label", 3, "for"], ["mat-header-cell", "", 1, "px-3"], ["mat-cell", "", 1, "px-3"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "btn-sm", "my-2", 3, "disabled", "ngClass", "click"], ["matDialogTitle", "", 3, "ngClass"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "table-responsive"], [1, "mat-table"], [1, "mat-header-row"], [1, "mat-header-cell", "px-3", 3, "ngClass"], [1, "mat-row"], [1, "mat-cell", "px-3", 3, "ngClass"], [1, "mat-cell", "px-3"], [1, "col-sm-12", "col-md-12", "p-0", "my-1"], ["appearance", "outline", 1, "col-md-12", 3, "ngClass"], ["matInput", "", "type", "number", "formControlName", "amount", 3, "ngModel", "ngModelChange", "blur"], [1, "mat-cell", "px-3", "text-center"], [2, "font-size", "25px"], ["mat-dialog-actions", ""], ["mat-button", "", "type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light", 3, "ngClass", "click"], ["mat-button", "", "type", "button", "matDialogClose", "", 1, "btn", "btn-info", "waves-effect", "waves-light", "custon__btns__class", 3, "ngClass"]], template: function CashDepositBankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CashDepositBankComponent_div_0_Template, 84, 50, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx._load_Template && ctx._fs._form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupName, _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_5__.DdComponent, _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_6__.DateComponent, _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_7__.TxtComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_8__.PermissionDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogClose], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".upload-large[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n  .img-fluid[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    text-align: auto;\r\n  }\r\n  .card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n  \r\n  .text_align[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n  .custon__btns__class[_ngcontent-%COMP%]{\r\nwidth: 100px;\r\n\r\n}\r\n  .wajiba-nafila[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 9px 9px;\r\n}\r\n  .cash-deposit[_ngcontent-%COMP%] {\r\n  \r\n}\r\n  .table-responsive[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  overflow-x: auto;\r\n}\r\n  .mat-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  margin-bottom: 1rem;\r\n  display: table;\r\n  border-collapse: collapse;\r\n  margin: 0px;\r\n}\r\n  .mat-row[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%] {\r\n  display: table-row;\r\n}\r\n  .mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\r\n  word-wrap: initial;\r\n  display: table-cell;\r\n  padding: 0px 5px;\r\n  line-break: unset;\r\n  width: auto;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  vertical-align: middle;\r\n}\r\n  @media(max-width: 768px){\r\n    .text_align[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n    [_nghost-%COMP%]     .custom-date  .md-drppicker.double{\r\n      width: 290px !important;\r\n      left: 0!important;\r\n      top: 100% !important;\r\n    }\r\n}\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n      padding: 5px 0 7px 0 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n    top: 30px !important;\r\n    margin-top: -15px !important;\r\n    font-weight: 700 !important;\r\n    font-size: 15px;\r\n    color: #303030ad;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n      overflow: visible !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-select-panel{\r\n    width: 100% !important;\r\n    min-width: 100% !important;\r\n    transform: translate(15px, 40px) !important;\r\n    background: #ffffff !important;\r\n    border: 1px solid #00000033;\r\n    box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-select-value{\r\n    font-size: 16px;\r\n    font-weight: 600 !important;\r\n    overflow: hidden !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-input-element{\r\n    font-size: 16px !important;\r\n    font-weight: 600 !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-option-text{\r\n    color: #0c0c0c;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\n  color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n    color: #f44836 !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n    color: #f44836 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n    color: #0c0c0c !important;\r\n    overflow: visible !important;\r\n    \r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label{\r\n    overflow: visible !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n    color: #0c0c0c !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n    color: #0c0c0c77;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .ng-touched.ng-valid{\r\n    color: #0c0c0c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n    background-color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n    background-color: #024d7071 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n    color: #bfc1c4;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n    transform: translate3d(30px, 0, 0) !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n      width: 50px !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-error{\r\n      font-size: 10px;\r\n  }\r\n  \r\n  [_nghost-%COMP%]     .md-drppicker.double {\r\n    width: 500px !important;\r\n}\r\n  .card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n  .text-red[_ngcontent-%COMP%]{\r\n  color: #c53b55;\r\n}\r\n  \r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n  \r\n  \r\n  .custon__add__btns__class[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  padding: 3px 5px;\r\n  background: transparent;\r\n  border: 0px;\r\n  box-shadow: 0px 0px 0px transparent !important;\r\n}\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:hover{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:active{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:focus{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n  [_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper{\r\n  padding: 0px 15px;\r\n  color: white !important;\r\n  background: #00c292 !important;\r\n  display: block;\r\n  font-size: 15px;\r\n  border-radius: 3px;\r\n  transition: 0.5s;\r\n}\r\n  [_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper:hover{\r\n  box-shadow: 0px 0px 10px -4px #000000a6;\r\n}\r\n  [_nghost-%COMP%]     .custon__add__btns__class .mat-ripple.mat-button-ripple{\r\n  display: none !important;\r\n  opacity: 0 !important;\r\n}\r\n  .cdk-mouse-focused.cdk-focused[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{\r\n  opacity: 0 !important;\r\n}\r\n  \r\n  \r\n  .slection__styled   [_nghost-%COMP%]      .search.ng-touched{\r\n  color: #1a1a1a !important;\r\n\r\n}\r\n  .mat-header-cell[_ngcontent-%COMP%]{\r\n  background: #024e70 !important;\r\n  color: white !important;\r\n}\r\n  .search[_ngcontent-%COMP%]{\r\n  color: #ffffff !important;\r\n  border-bottom: 1px solid whitesmoke;\r\n}\r\n  [_nghost-%COMP%]      .mat-sort-header-arrow{\r\n  color: white;\r\n}\r\n  [_nghost-%COMP%]      .mat-sort-header-content{\r\n  color: white !important;\r\n}\r\n  [_nghost-%COMP%]      .search::-moz-placeholder{\r\n  color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search:-ms-input-placeholder{\r\n  color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search::placeholder{\r\n  color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search.ng-touched{\r\n  color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search .ng-star-inserted{\r\n  color: #000 !important;\r\n}\r\n  \r\n  \r\n  .mat_table[_ngcontent-%COMP%]{\r\n  max-height: 490px;\r\n  height: auto;\r\n}\r\n  tr.mat-header-row[_ngcontent-%COMP%]{\r\n  height: 40px !important;\r\n}\r\n  [_nghost-%COMP%]      tr.mat-row, tr.mat-footer-row[_ngcontent-%COMP%]{\r\n  height: 40px !important;\r\n}\r\n  .mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{\r\n  white-space: nowrap !important;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(odd){\r\n  background-color: #ffffff00 !important;\r\n  transition: 0.1s;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(even){\r\n  background-color: #b3eeff2c !important;\r\n  border-top: 2px solid #0000000d !important;\r\n  border-bottom: 2px solid #0000000d !important;\r\n  transition: 0.1s;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(even):hover{\r\n  box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(odd):hover{\r\n  box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n  \r\n  \r\n  [_nghost-%COMP%]      .switch.switch-small.checked{\r\n  background-color: #03a9f3 !important;\r\n}\r\n  \r\n  \r\n  .custom__select__class[_ngcontent-%COMP%]{\r\n  border-radius: 3px;\r\n  padding: 4px;\r\n  border: 1px solid #0000004b;\r\n  background: white;\r\n}\r\n  .custom__select__class[_ngcontent-%COMP%]   .cus_opt[_ngcontent-%COMP%]{\r\n  border-radius: 4px;\r\n  background: #ffffff;\r\n  box-shadow: 0px 0px 10px black;\r\n}\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-paginator-range-label{\r\n  margin: 0px !important;\r\n}\r\n  \r\n  .pd-none[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\r\n  padding-top: 1.34375em !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2gtZGVwb3NpdC1iYW5rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0NBQWtDO0FBQ3RDO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2Qyx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtFQUNGLHdCQUF3QjtFQUN4QjtFQUNFLGlCQUFpQjtBQUNuQjtFQUNBO0FBQ0EsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QjtFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtFQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0VBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtFQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7RUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7RUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0VBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO01BQ0UsdUJBQXVCO01BQ3ZCLGlCQUFpQjtNQUNqQixvQkFBb0I7SUFDdEI7QUFDSjtFQUNBLHdCQUF3QjtFQUN0Qiw0QkFBNEI7RUFDNUI7TUFDSSwrQkFBK0I7RUFDbkM7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSw0QkFBNEI7RUFDaEM7RUFDQSx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixrREFBa0Q7RUFDcEQ7RUFDQTtJQUNFLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7O0tBRUc7RUFDSCx3QkFBd0I7RUFDeEI7O0VBRUEseUJBQXlCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0Usc0NBQXNDO0VBQ3hDO0VBRUEsYUFBYTtFQUNiO0lBQ0UsY0FBYztFQUNoQjtFQUNBLGFBQWE7RUFFYixlQUFlO0VBQ2Y7SUFDRSw2Q0FBNkM7RUFDL0M7RUFDQTtNQUNJLHNCQUFzQjtFQUMxQjtFQUNBLGVBQWU7RUFFZixvQkFBb0I7RUFDcEI7TUFDSSxlQUFlO0VBQ25CO0VBQ0Esb0JBQW9CO0VBR3BCO0lBQ0UsdUJBQXVCO0FBQzNCO0VBR0E7RUFDRSxrQ0FBa0M7QUFDcEM7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQSxpQkFBaUI7RUFDakI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0VBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtFQUNBLGlCQUFpQjtFQUVqQix3QkFBd0I7RUFDeEI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsOENBQThDO0FBQ2hEO0VBQ0E7RUFDRSx3Q0FBd0M7SUFDdEMsb0NBQW9DO0FBQ3hDO0VBQ0E7RUFDRSx3Q0FBd0M7SUFDdEMsb0NBQW9DO0FBQ3hDO0VBQ0E7RUFDRSx3Q0FBd0M7SUFDdEMsb0NBQW9DO0FBQ3hDO0VBQ0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7RUFDQTtFQUNFLHVDQUF1QztBQUN6QztFQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2QjtFQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0VBRUEsd0JBQXdCO0VBRXhCLHlCQUF5QjtFQUN6QjtFQUNFLHlCQUF5Qjs7QUFFM0I7RUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7RUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQ0FBbUM7QUFDckM7RUFDQTtFQUNFLFlBQVk7QUFDZDtFQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0VBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7RUFGQTtFQUNFLHlCQUF5QjtBQUMzQjtFQUZBO0VBQ0UseUJBQXlCO0FBQzNCO0VBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7RUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtFQUNBLHlCQUF5QjtFQUV6QiwwQkFBMEI7RUFDMUI7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0VBQ0E7RUFDRSx1QkFBdUI7QUFDekI7RUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtFQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0VBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCO0VBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsMENBQTBDO0VBQzFDLDZDQUE2QztFQUM3QyxnQkFBZ0I7QUFDbEI7RUFDQTtFQUNFLG9DQUFvQztBQUN0QztFQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0VBQ0EsMEJBQTBCO0VBRTFCLG9DQUFvQztFQUNwQztFQUNFLG9DQUFvQztBQUN0QztFQUNBLG9DQUFvQztFQUVwQyx1QkFBdUI7RUFDdkI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0VBQ0EsdUJBQXVCO0VBRXZCLG9CQUFvQjtFQUNwQjtFQUNFLHNCQUFzQjtBQUN4QjtFQUNBLG9CQUFvQjtFQUVwQjtFQUNFLGlDQUFpQztBQUNuQyIsImZpbGUiOiJjYXNoLWRlcG9zaXQtYmFuay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1sYXJnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5pbWctZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogYXV0bztcclxuICB9XHJcbiAgLmNhcmRfX3N0eWxpbmd7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG59XHJcbiAgLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZ3tcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGNsaXA7XHJcbiAgfVxyXG4gIC5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmcgaDJ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggN3B4IC03cHggIzAwMDAwMDU3O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4udGV4dF9hbGlnbntcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY3VzdG9uX19idG5zX19jbGFzc3tcclxud2lkdGg6IDEwMHB4O1xyXG4vKiBwYWRkaW5nOiA1cHggMHB4OyAqL1xyXG59XHJcblxyXG4ud2FqaWJhLW5hZmlsYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDlweCA5cHg7XHJcbn1cclxuXHJcbi5jYXNoLWRlcG9zaXQge1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbi5tYXQtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm1hdC1yb3csXHJcbi5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG59XHJcbi5tYXQtY2VsbCxcclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgd29yZC13cmFwOiBpbml0aWFsO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgcGFkZGluZzogMHB4IDVweDtcclxuICBsaW5lLWJyZWFrOiB1bnNldDtcclxuICB3aWR0aDogYXV0bztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLnRleHRfYWxpZ257XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgOmhvc3QgL2RlZXAvIC5jdXN0b20tZGF0ZSAgLm1kLWRycHBpY2tlci5kb3VibGV7XHJcbiAgICAgIHdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAwIWltcG9ydGFudDtcclxuICAgICAgdG9wOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4gIC8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgICAgcGFkZGluZzogNXB4IDAgN3B4IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICB0b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzMwMzAzMGFkO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXBhbmVse1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgNDBweCkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAzMztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAtNHB4ICMwMDAwMDA5YyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtaW5wdXQtZWxlbWVudHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtb3B0aW9uLXRleHR7XHJcbiAgICBjb2xvcjogIzBjMGMwYztcclxuICB9XHJcbiAgLyogOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcHtcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG4gIC8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayxcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xyXG4gIGNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjZjQ0ODM2ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tcclxuICAgIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGZpZWxkcyBib3JkZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7XHJcbiAgICBjb2xvcjogIzBjMGMwYzc3O1xyXG4gIH1cclxuICAvKiBmaWVsZHMgYm9yZGVyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubmctdG91Y2hlZC5uZy12YWxpZHtcclxuICAgIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAvKiBkaXNhYmxlZCAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICAgIGNvbG9yOiAjYmZjMWM0O1xyXG4gIH1cclxuICAvKiBkaXNhYmxlZCAqL1xyXG5cclxuICAvKiB0b2dnbGUgYmFyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYi1jb250YWluZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwcHgsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUtYmFye1xyXG4gICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiB0b2dnbGUgYmFyICovXHJcblxyXG4gIC8qIGVycm9yIGZvbnQtc2l6ZSAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1lcnJvcntcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAvKiBlcnJvciBmb250LXNpemUgKi9cclxuXHJcblxyXG4gIDpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyLmRvdWJsZSB7XHJcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jYXJkX19zdHlsaW5ne1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwM2Q7XHJcbn1cclxuLnRleHQtcmVke1xyXG4gIGNvbG9yOiAjYzUzYjU1O1xyXG59XHJcbi8qIEhFQURFUiBTVFlMRSAqL1xyXG4uY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBvdmVyZmxvdy14OiBjbGlwO1xyXG59XHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmcgaDJ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggN3B4IC03cHggIzAwMDAwMDU3O1xyXG4gIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIEhFQURFUiBTVFlMRSAqL1xyXG5cclxuLyogSEVBREVSIEJVVFRPTiBTVFlMRSAqL1xyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczphY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmZvY3Vze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3MgLm1hdC1idXR0b24td3JhcHBlcntcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjMDBjMjkyICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbjpob3N0IC9kZWVwLyAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzIC5tYXQtYnV0dG9uLXdyYXBwZXI6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IC00cHggIzAwMDAwMGE2O1xyXG59XHJcbjpob3N0IC9kZWVwLyAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzIC5tYXQtcmlwcGxlLm1hdC1idXR0b24tcmlwcGxle1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNkay1tb3VzZS1mb2N1c2VkLmNkay1mb2N1c2VkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7XHJcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBIRUFERVIgQlVUVE9OIFNUWUxFICovXHJcblxyXG4vKiBUQUJMRSBoZWFkZXIgU1RZTElORyAqL1xyXG4uc2xlY3Rpb25fX3N0eWxlZCA6aG9zdCAvZGVlcC8gIC5zZWFyY2gubmctdG91Y2hlZHtcclxuICBjb2xvcjogIzFhMWExYSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4ubWF0LWhlYWRlci1jZWxse1xyXG4gIGJhY2tncm91bmQ6ICMwMjRlNzAgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoe1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNvcnQtaGVhZGVyLWFycm93e1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc29ydC1oZWFkZXItY29udGVudHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5zZWFyY2g6OnBsYWNlaG9sZGVye1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoLm5nLXRvdWNoZWR7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5zZWFyY2ggLm5nLXN0YXItaW5zZXJ0ZWR7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG4vKiBUQUJMRSBoZWFkZXIgU1RZTElORyAqL1xyXG5cclxuLyogbGlzdCBzdHlsaW5nIGluIHRhYmxlICovXHJcbi5tYXRfdGFibGV7XHJcbiAgbWF4LWhlaWdodDogNDkwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbnRyLm1hdC1oZWFkZXItcm93e1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgdHIubWF0LXJvdywgdHIubWF0LWZvb3Rlci1yb3d7XHJcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1mb290ZXItY2VsbCwgLm1hdC1jZWxse1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDAgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlZWZmMmMgIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzAwMDAwMDBkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDAwZCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IDAuMXM7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6MHB4IDBweCA4cHggMHB4ICMwMDAwMDA1ZTtcclxufVxyXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKTpob3ZlcntcclxuICBib3gtc2hhZG93OjBweCAwcHggOHB4IDBweCAjMDAwMDAwNWU7XHJcbn1cclxuLyogbGlzdCBzdHlsaW5nIGluIHRhYmxlICovXHJcblxyXG4vKiBjaGFjayBvbiBvciBvZmYgYnV0dG9uICBzdHlsaW5nICovXHJcbjpob3N0IC9kZWVwLyAgLnN3aXRjaC5zd2l0Y2gtc21hbGwuY2hlY2tlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWYzICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogY2hhY2sgb24gb3Igb2ZmIGJ1dHRvbiAgc3R5bGluZyAqL1xyXG5cclxuLyogc2VsZWN0IGJveCBzdHlsaW5nICovXHJcbi5jdXN0b21fX3NlbGVjdF9fY2xhc3N7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNGI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLmN1c3RvbV9fc2VsZWN0X19jbGFzcyAuY3VzX29wdHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggYmxhY2s7XHJcbn1cclxuLyogc2VsZWN0IGJveCBzdHlsaW5nICovXHJcblxyXG4vKiBwYWdpbmF0aW9uIGFyZWEgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LXBhZ2luYXRvci1yYW5nZS1sYWJlbHtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHBhZ2luYXRpb24gYXJlYSAqL1xyXG5cclxuLnBkLW5vbmUgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxLjM0Mzc1ZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 66824:
/*!**********************************************************************************************!*\
  !*** ./src/app/feature/receipt/deposit/cash-deposit-office/cash-deposit-office.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashDepositOfficeComponent": () => (/* binding */ CashDepositOfficeComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var src_app_shared_components_filters_cash_deposit_filter_cash_deposit_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/filters/cash-deposit-filter/cash-deposit-filter.component */ 34753);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/control/dd/dd.component */ 32231);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 15719);
/* harmony import */ var _shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/directive/permission.directive */ 47399);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 96053);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 952);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 33695);


















const _c0 = ["parencheckbox"];
function CashDepositOfficeComponent_div_0_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " S No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CashDepositOfficeComponent_div_0_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r29 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r29 + 1, " ");
} }
function CashDepositOfficeComponent_div_0_th_39_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CashDepositOfficeComponent_div_0_th_39_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r31.selectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("indeterminate", ctx_r3._fs._form.get("id").length > 0 && ctx_r3._fs._form.get("id").length < ctx_r3.selectAllList.length)("disabled", ctx_r3.selectAllList.length == 0)("checked", ctx_r3.multiSelect);
} }
function CashDepositOfficeComponent_div_0_td_40_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function CashDepositOfficeComponent_div_0_td_40_Template_input_valueChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36); const item_r33 = restoredCtx.$implicit; return item_r33.id = $event; })("change", function CashDepositOfficeComponent_div_0_td_40_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36); const item_r33 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r37.getCheckBoxValue($event, item_r33.master_id, item_r33.donation_type, item_r33 == null ? null : item_r33.amount); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", i_r34 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r4.multiSelect)("value", item_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("for", i_r34 + 1);
} }
function CashDepositOfficeComponent_div_0_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Receipt Date"), " ");
} }
function CashDepositOfficeComponent_div_0_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, item_r38.date, "dd/MM/yyyy"), " ");
} }
function CashDepositOfficeComponent_div_0_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Receipt No"));
} }
function CashDepositOfficeComponent_div_0_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r39.receipt_no, " ");
} }
function CashDepositOfficeComponent_div_0_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Amount"), " ");
} }
function CashDepositOfficeComponent_div_0_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, item_r40 == null ? null : item_r40.amount), " ");
} }
function CashDepositOfficeComponent_div_0_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Batch Number"), " ");
} }
function CashDepositOfficeComponent_div_0_td_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r41 == null ? null : item_r41.batch == null ? null : item_r41.batch.title) !== undefined && (item_r41 == null ? null : item_r41.batch == null ? null : item_r41.batch.title) !== "" ? (item_r41 == null ? null : item_r41.batch == null ? null : item_r41.batch.title) + "_" + (item_r41 == null ? null : item_r41.created_by == null ? null : item_r41.created_by.title) : "", " ");
} }
function CashDepositOfficeComponent_div_0_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Account"), " ");
} }
function CashDepositOfficeComponent_div_0_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r42 == null ? null : item_r42.account == null ? null : item_r42.account.title, " ");
} }
function CashDepositOfficeComponent_div_0_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Donation Type"), " ");
} }
function CashDepositOfficeComponent_div_0_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r43 == null ? null : item_r43.donation_type, " ");
} }
function CashDepositOfficeComponent_div_0_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Purpose"), " ");
} }
function CashDepositOfficeComponent_div_0_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r44 == null ? null : item_r44.purpose, " ");
} }
function CashDepositOfficeComponent_div_0_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Organization"), " ");
} }
function CashDepositOfficeComponent_div_0_td_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r45 == null ? null : item_r45.organisation == null ? null : item_r45.organisation.title, " ");
} }
function CashDepositOfficeComponent_div_0_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "System"), " ");
} }
function CashDepositOfficeComponent_div_0_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r46 == null ? null : item_r46.system == null ? null : item_r46.system.title, " ");
} }
const _c1 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function CashDepositOfficeComponent_div_0_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 53);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](1, _c1, ctx_r23._ss.lng === "en", ctx_r23._ss.lng === "ur"));
} }
function CashDepositOfficeComponent_div_0_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 54);
} }
function CashDepositOfficeComponent_div_0_button_73_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CashDepositOfficeComponent_div_0_button_73_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r49); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](75); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r48.openDialogWithTemplateRef(_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r25._fhs._disableBtn("id"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](5, _c1, ctx_r25._ss.lng === "en", ctx_r25._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, "Process"));
} }
function CashDepositOfficeComponent_div_0_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h2", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "form", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CashDepositOfficeComponent_div_0_ng_template_74_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r50._onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "table", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "tr", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CashDepositOfficeComponent_div_0_ng_template_74_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r52._wpopTotal = $event; })("blur", function CashDepositOfficeComponent_div_0_ng_template_74_Template_input_blur_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r53.getWajibaAmount($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "tr", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CashDepositOfficeComponent_div_0_ng_template_74_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r54._npopTotal = $event; })("blur", function CashDepositOfficeComponent_div_0_ng_template_74_Template_input_blur_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r55.getNafilaAmount($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "tr", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "b", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CashDepositOfficeComponent_div_0_ng_template_74_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r56.dialogClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](42, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 24, "Please Enter Your Deposit Slip Amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r27._fs._form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](45, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 26, "Donation Type"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](48, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 28, "Amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](51, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 30, "Wajiba"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](54, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r27._wpopTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r27._vs.errMsg("wajiba.amount"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](57, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 32, "Nafila"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](60, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r27._npopTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r27._vs.errMsg("nafila.amount"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](63, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](38, 34, "Total Amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 36, ctx_r27._wpopTotal + ctx_r27._npopTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](66, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](49, 38, "Confirm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](69, _c1, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](52, 40, "Cancel"));
} }
const _c2 = function (a1, a2) { return { type: "1", system_id: a1, organisation_id: a2 }; };
const _c3 = function (a0) { return { query: a0 }; };
function CashDepositOfficeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CashDepositOfficeComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r57.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "hr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "di-dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "di-dd", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](35, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, CashDepositOfficeComponent_div_0_th_36_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, CashDepositOfficeComponent_div_0_td_37_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](38, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, CashDepositOfficeComponent_div_0_th_39_Template, 5, 3, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, CashDepositOfficeComponent_div_0_td_40_Template, 4, 4, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](41, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, CashDepositOfficeComponent_div_0_th_42_Template, 3, 3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, CashDepositOfficeComponent_div_0_td_43_Template, 3, 4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](44, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, CashDepositOfficeComponent_div_0_th_45_Template, 3, 3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, CashDepositOfficeComponent_div_0_td_46_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](47, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, CashDepositOfficeComponent_div_0_th_48_Template, 3, 3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, CashDepositOfficeComponent_div_0_td_49_Template, 3, 3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](50, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, CashDepositOfficeComponent_div_0_th_51_Template, 3, 3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, CashDepositOfficeComponent_div_0_td_52_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](53, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, CashDepositOfficeComponent_div_0_th_54_Template, 3, 3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, CashDepositOfficeComponent_div_0_td_55_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](56, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, CashDepositOfficeComponent_div_0_th_57_Template, 3, 3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, CashDepositOfficeComponent_div_0_td_58_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](59, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, CashDepositOfficeComponent_div_0_th_60_Template, 3, 3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, CashDepositOfficeComponent_div_0_td_61_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](62, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, CashDepositOfficeComponent_div_0_th_63_Template, 3, 3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, CashDepositOfficeComponent_div_0_td_64_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](65, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, CashDepositOfficeComponent_div_0_th_66_Template, 3, 3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, CashDepositOfficeComponent_div_0_td_67_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, CashDepositOfficeComponent_div_0_tr_68_Template, 1, 4, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, CashDepositOfficeComponent_div_0_tr_69_Template, 1, 0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, CashDepositOfficeComponent_div_0_button_73_Template, 3, 8, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, CashDepositOfficeComponent_div_0_ng_template_74_Template, 53, 72, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 19, "Cash Deposit in Office"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](31, _c1, ctx_r0._ss.lng === "en", ctx_r0._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 21, "Filter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0._fs._form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 23, "WAJIBA"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 25, ctx_r0.wajibaTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("req", false)("url", ctx_r0.URLz.BANK)("param", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](37, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](34, _c2, ctx_r0._system, ctx_r0._org)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 27, "NAFILA"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 29, ctx_r0.nafilaTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("req", false)("url", ctx_r0.URLz.BANK)("param", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](42, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](39, _c2, ctx_r0._system, ctx_r0._org)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("permission", ctx_r0.ACTION.ADD);
} }
class CashDepositOfficeComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_4__.BaseForm {
    constructor(injector) {
        super(injector);
        this._load_Template = false;
        this.wajibaTotal = 0;
        this.nafilaTotal = 0;
        this.totalSum = 0;
        this._wpopTotal = 0;
        this._npopTotal = 0;
        this.multiSelect = false;
        this.maxDate = new Date();
        this.selectAllList = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
        this.displayedColumns = [
            'S No',
            'Select',
            'Receipt Date',
            'Receipt No',
            'Amount',
            'Batch Number',
            'Account',
            'Donation Type',
            'Purpose',
            'Donation Org',
            'Donation System'
        ];
        //  Validator Object
        this.validation = {
            deposit_bank: [this._vs._vals('Deposit Bank')],
            // deposit_date: [this._vs._val('Deposit Date', {isField:0}),this._vs._val_Date({})],
            amount: [this._vs._val('Amount', { isField: 0, num: 1 })]
        };
        this.param.endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.CASH_DEPOSIT;
    }
    ngOnInit() {
        this.initForm();
        this._fhs._pathLocation = '/deposit/cash_deopsit_office';
        this.continueProcess();
    }
    openDialogWithTemplateRef(templateRef) {
        this._dialog.open(templateRef);
    }
    dialogClose() {
        if (this._fs._form.valid) {
            this._dialog.closeAll();
        }
    }
    initControl() {
        return this._fb.group({
            deposit_bank: [null],
            // deposit_date: [''],
            amount: [null],
        });
    }
    initForm() {
        this._fs._form = this._fb.group({
            wajiba: this._fs._fb.group({
                ...this.initControl().controls,
            }),
            nafila: this._fs._fb.group({
                ...this.initControl().controls,
            }),
            id: this._fb.array([]),
        });
    }
    openDialog() {
        const dialogRef = this._dialog.open(src_app_shared_components_filters_cash_deposit_filter_cash_deposit_filter_component__WEBPACK_IMPORTED_MODULE_1__.CashDepositFilterComponent, {
            width: '55%',
            data: {},
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined) {
                this.getCashData(result);
            }
        });
    }
    continueProcess() {
        if (this._ss?.hierarchy?.org_status) {
            this.openDialog();
        }
        // For Single Hierarchy
        else {
            this.patchData();
        }
    }
    patchData() {
        const h = this._ss.hierarchy;
        this._system = h?.system_id;
        this._org = h?.organisation_id;
        this._http.get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.TRANSACTION,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.TRANSACTION_DETAIL,
            query: {
                organisation_id: h?.organisation_id,
                system_id: h?.system_id,
            }
        }).subscribe((res) => {
            this._load_Template = true;
            this.dataSource.data = res?.data?.records;
            this.selectAllList = res?.data?.records;
            this.totalRecords = res?.data.totalRecords;
        });
    }
    getCashData(cashdata) {
        this._system = cashdata.systemId;
        this._org = cashdata?.orgId;
        this._http.get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.TRANSACTION,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.TRANSACTION_DETAIL,
            query: {
                start_date: cashdata.startDate,
                end_date: cashdata.endDate,
                cash_account: cashdata.cashAcc,
                purpose: cashdata.purpose,
                batch_number: cashdata.branchNo,
                organisation_id: cashdata.orgId,
                system_id: cashdata.systemId,
            }
        }).subscribe((res) => {
            this._load_Template = true;
            this.dataSource.data = res?.data?.records;
            this.selectAllList = res?.data?.records;
            this.totalRecords = res?.data.totalRecords;
        });
    }
    // =========   Individual Checkbox functionality ================== //
    getCheckBoxValue(val, masterId, type, ammount) {
        this.AmountTotal(type, ammount, val.target.checked);
        const selectedIdArr = this._fs._form.get('id');
        if (val.target.checked) {
            selectedIdArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(val.target.value),
                master_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(masterId),
                type: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(type)
            }));
        }
        else {
            let i = 0;
            selectedIdArr.controls.forEach((ctrl) => {
                if (ctrl.value.id == val.target.value &&
                    ctrl.value.master_id == masterId) {
                    selectedIdArr.removeAt(i);
                    return;
                }
                i++;
            });
        }
        this.ValidationHandler(type, val.target.checked);
        this.indeterminate(selectedIdArr.value);
    }
    indeterminate(checked_arr) {
        if (checked_arr.length == this.totalRecords) {
            this.parencheckbox.forEach((element) => {
                console.log(element);
                element.nativeElement.checked = true;
            });
        }
        else if (checked_arr.length == 0) {
            this.parencheckbox.forEach((element) => {
                console.log(element);
                element.nativeElement.checked = false;
            });
        }
    }
    ValidationHandler(donateType, checkCondition) {
        const selectedIdArr = this._fs._form.get('id');
        for (const key in this._fs._form.get(donateType).controls) {
            if (checkCondition) {
                this._fs._form.get(donateType).get(key).setValidators(this.validation[key]);
                this._fs._form.get(donateType).markAllAsTouched();
            }
            else if (!checkCondition) {
                if (!(selectedIdArr.controls.some((el) => el.value.type === donateType))) {
                    this._fs._form.get(donateType).get(key).clearValidators();
                    this._fs._form.get(donateType).get(key).markAsUntouched();
                }
            }
            this._fs._form.get(donateType).get(key).updateValueAndValidity();
        }
    }
    AmountTotal(donationType, amount, condition) {
        if (condition) {
            if (donationType == 'wajiba') {
                this.wajibaTotal += amount;
            }
            else if (donationType == 'nafila') {
                this.nafilaTotal += amount;
            }
            this.getUserAmount(this.wajibaTotal, this.nafilaTotal);
        }
        else if (!condition) {
            if (donationType == 'wajiba') {
                this.wajibaTotal -= amount;
            }
            else if (donationType == 'nafila') {
                this.nafilaTotal -= amount;
            }
            this.getUserAmount(this.wajibaTotal, this.nafilaTotal);
        }
    }
    getUserAmount(totalOne, totalTwo) {
        this.totalSum = totalOne + totalTwo;
    }
    // =========   Individual Checkbox functionality ================== //
    // =========   CheckAll functionality ================== //
    validateSelectAll() {
        this.selectAllList.forEach(val => {
            this.ValidationHandler(val.donation_type, this.multiSelect);
        });
    }
    selectAll() {
        const selectedPerArr = this._fs._form.get('id');
        this._fs._form.get('id').clear();
        this.multiSelect = !this.multiSelect;
        this.AllAmountTotal();
        this.validateSelectAll();
        if (this.multiSelect) {
            if (this.selectAllList.length != 0) {
                this.selectAllList.forEach(val => {
                    selectedPerArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
                        id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(val.id),
                        master_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(val.master_id),
                        type: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(val.donation_type)
                    }));
                });
            }
        }
        else {
            while (selectedPerArr.length != 0) {
                selectedPerArr.removeAt(0);
            }
        }
    }
    AllAmountTotal() {
        this.wajibaTotal = 0;
        this.nafilaTotal = 0;
        this.totalSum = 0;
        if (this.selectAllList.length != 0) {
            this.selectAllList.forEach(val => {
                if (this.multiSelect) {
                    if (val.donation_type == 'wajiba') {
                        this.wajibaTotal += val.amount;
                    }
                    else if (val.donation_type == 'nafila') {
                        this.nafilaTotal += val.amount;
                    }
                    this.getUserAmount(this.wajibaTotal, this.nafilaTotal);
                }
                else if (!this.multiSelect) {
                    if (val.donation_type == 'wajiba') {
                        if (this.wajibaTotal != 0)
                            this.wajibaTotal -= val.amount;
                    }
                    else if (val.donation_type == 'nafila') {
                        if (this.nafilaTotal != 0)
                            this.nafilaTotal -= val.amount;
                    }
                    this.getUserAmount(this.wajibaTotal, this.nafilaTotal);
                }
            });
        }
    }
    // =========   CheckAll functionality ================== //
    getWajibaAmount(e) {
        if (e.target.value != '') {
            if (this.wajibaTotal > e.target.value) {
                this._swl.cashDepositBankWajiba('wajiba', e.target.value);
            }
            else if (this.wajibaTotal < e.target.value) {
                this._swl.cashDepositBankWajiba('wajiba', e.target.value);
            }
        }
    }
    getNafilaAmount(e) {
        if (e.target.value != '') {
            if (this.nafilaTotal > e.target.value) {
                this._swl.cashDepositBankWajiba('nafila', e.target.value);
            }
            else if (this.nafilaTotal < e.target.value) {
                this._swl.cashDepositBankWajiba('nafila', e.target.value);
            }
        }
    }
    deleteGroup(newGroup) {
        if ((newGroup.nafila.amount == null && newGroup.nafila.deposit_bank == null) ||
            (newGroup.nafila.amount == 0 && newGroup.nafila.deposit_bank == null) ||
            (newGroup.nafila.amount == 0 && newGroup.nafila.deposit_bank == null)) {
            return delete newGroup.nafila;
        }
        if ((newGroup.wajiba.amount == null && newGroup.wajiba.deposit_bank == null) ||
            (newGroup.wajiba.amount == 0 && newGroup.wajiba.deposit_bank == null) ||
            (newGroup.wajiba.amount == 0 && newGroup.wajiba.deposit_bank == null)) {
            return delete newGroup.wajiba;
        }
    }
    _onSubmit() {
        const grandTotal = this._wpopTotal + this._npopTotal;
        this._fs._form.markAllAsTouched();
        if (grandTotal == this.totalSum) {
            this._vs._submitted = true;
            if (this._fs._form.valid) {
                const newGroup = { ...this._fs._form.value };
                this.deleteGroup(newGroup);
                this._http.create({ body: newGroup, url: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.DEPOSITE_CASH, endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.CASH_DEPOSIT }).subscribe({
                    next: (res) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                            title: this._translate.instant('Processed'),
                            text: this._translate.instant(res.message),
                            icon: 'success',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: '<i class="fas fa-thumbs-up"></i>',
                        }).then(() => {
                            this._fs._form.reset();
                            this._fhs.reloadComponent();
                            // this._fhs.reloadCmpNew();
                        });
                    },
                    error: (httpErrorResponse) => {
                        this._vs._error_server(httpErrorResponse.error);
                    }
                });
                this._vs._submitted = false;
            }
            else {
                return this._fs._form.valid;
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                title: 'Please enter Correct amount',
                text: "",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: '<i class="fas fa-thumbs-up"></i>',
            });
        }
    }
}
CashDepositOfficeComponent.ɵfac = function CashDepositOfficeComponent_Factory(t) { return new (t || CashDepositOfficeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector)); };
CashDepositOfficeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CashDepositOfficeComponent, selectors: [["di-component-name-here"]], viewQuery: function CashDepositOfficeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.parencheckbox = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-12", "col-lg-12", "p-0"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-success", "custon__add__btns__class", "float-right", 3, "ngClass", "click"], [2, "border-top", "0px !important"], [3, "formGroup"], ["formGroupName", "wajiba", 1, "row", "card-body", "py-0"], [1, "col-sm-12", "col-md-3", "p-0", "my-1"], [1, "wajiba-nafila"], [1, "col-sm-12", "col-md-6", "p-0", "my-1"], ["field", "deposit_bank", "lbl", "Cash Account", "groupName", "wajiba", 3, "req", "url", "param"], ["formGroupName", "nafila", 1, "row", "card-body", "py-0"], ["field", "deposit_bank", "lbl", "Cash Account", "groupName", "nafila", 3, "req", "url", "param"], [1, "row", "card-body", "py-0"], [1, "mat_table"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "S No"], ["mat-header-cell", "", "translate", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "Receipt Date"], ["class", "px-3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Receipt No"], ["matColumnDef", "Amount"], ["matColumnDef", "Batch Number"], ["matColumnDef", "Account"], ["matColumnDef", "Donation Type"], ["matColumnDef", "Purpose"], ["matColumnDef", "Donation Org"], ["matColumnDef", "Donation System"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "card-body"], [1, "action-form"], [1, "form-group", "m-b-0", "text-right"], ["mat-raised-button", "", "type", "button", "class", "btn btn-info btn-sm  my-2", 3, "disabled", "ngClass", "click", 4, "permission"], ["myDialog", ""], ["mat-header-cell", "", "translate", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", "custom-chk", 3, "indeterminate", "disabled", "checked", "change"], ["parencheckbox", ""], [1, "custom-control-label"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "value", "valueChange", "change"], [1, "custom-control-label", 3, "for"], ["mat-header-cell", "", 1, "px-3"], ["mat-cell", "", 1, "px-3"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "btn-sm", "my-2", 3, "disabled", "ngClass", "click"], ["matDialogTitle", "", 3, "ngClass"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "table-responsive"], [1, "mat-table"], [1, "mat-header-row"], [1, "mat-header-cell", "px-3", 3, "ngClass"], [1, "mat-row"], [1, "mat-cell", "px-3", 3, "ngClass"], [1, "mat-cell", "px-3"], [1, "col-sm-12", "col-md-12", "p-0", "my-1"], ["appearance", "outline", 1, "col-md-12", 3, "ngClass"], ["matInput", "", "type", "number", "formControlName", "amount", 3, "ngModel", "ngModelChange", "blur"], [1, "mat-cell", "px-3", "text-center"], [2, "font-size", "25px"], ["mat-dialog-actions", ""], ["mat-button", "", "type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light", 3, "ngClass", "click"], ["mat-button", "", "type", "button", "matDialogClose", "", 1, "btn", "btn-info", "waves-effect", "waves-light", "custon__btns__class", 3, "ngClass"]], template: function CashDepositOfficeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CashDepositOfficeComponent_div_0_Template, 76, 44, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx._load_Template && ctx._fs._form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_5__.DdComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_6__.PermissionDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogClose], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: [".upload-large[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n  .img-fluid[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    text-align: auto;\r\n  }\r\n  .card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n  \r\n  .text_align[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n  .custon__btns__class[_ngcontent-%COMP%]{\r\nwidth: 100px;\r\n\r\n}\r\n  .wajiba-nafila[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 9px 9px;\r\n}\r\n  .cash-deposit[_ngcontent-%COMP%] {\r\n  \r\n}\r\n  .table-responsive[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  overflow-x: auto;\r\n}\r\n  .mat-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  margin-bottom: 1rem;\r\n  display: table;\r\n  border-collapse: collapse;\r\n  margin: 0px;\r\n}\r\n  .mat-row[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%] {\r\n  display: table-row;\r\n}\r\n  .mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\r\n  word-wrap: initial;\r\n  display: table-cell;\r\n  padding: 0px 5px;\r\n  line-break: unset;\r\n  width: auto;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  vertical-align: middle;\r\n}\r\n  @media(max-width: 768px){\r\n    .text_align[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n    [_nghost-%COMP%]     .custom-date  .md-drppicker.double{\r\n      width: 290px !important;\r\n      left: 0!important;\r\n      top: 100% !important;\r\n    }\r\n}\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n      padding: 5px 0 7px 0 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n    top: 30px !important;\r\n    margin-top: -15px !important;\r\n    font-weight: 700 !important;\r\n    font-size: 15px;\r\n    color: #303030ad;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n      overflow: visible !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-select-panel{\r\n    width: 100% !important;\r\n    min-width: 100% !important;\r\n    transform: translate(15px, 40px) !important;\r\n    background: #ffffff !important;\r\n    border: 1px solid #00000033;\r\n    box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-select-value{\r\n    font-size: 16px;\r\n    font-weight: 600 !important;\r\n    overflow: hidden !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-input-element{\r\n    font-size: 16px !important;\r\n    font-weight: 600 !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-option-text{\r\n    color: #0c0c0c;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\n  color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n    color: #f44836 !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n    color: #f44836 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n    color: #0c0c0c !important;\r\n    overflow: visible !important;\r\n    \r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label{\r\n    overflow: visible !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n    color: #0c0c0c !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n    color: #0c0c0c77;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .ng-touched.ng-valid{\r\n    color: #0c0c0c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n    background-color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n    background-color: #024d7071 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n    color: #bfc1c4;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n    transform: translate3d(30px, 0, 0) !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n      width: 50px !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-error{\r\n      font-size: 10px;\r\n  }\r\n  \r\n  [_nghost-%COMP%]     .md-drppicker.double {\r\n    width: 500px !important;\r\n}\r\n  .card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n  .text-red[_ngcontent-%COMP%]{\r\n  color: #c53b55;\r\n}\r\n  \r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n  \r\n  \r\n  .custon__add__btns__class[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  padding: 3px 5px;\r\n  background: transparent;\r\n  border: 0px;\r\n  box-shadow: 0px 0px 0px transparent !important;\r\n}\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:hover{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:active{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:focus{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n  [_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper{\r\n  padding: 0px 15px;\r\n  color: white !important;\r\n  background: #00c292 !important;\r\n  display: block;\r\n  font-size: 15px;\r\n  border-radius: 3px;\r\n  transition: 0.5s;\r\n}\r\n  [_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper:hover{\r\n  box-shadow: 0px 0px 10px -4px #000000a6;\r\n}\r\n  [_nghost-%COMP%]     .custon__add__btns__class .mat-ripple.mat-button-ripple{\r\n  display: none !important;\r\n  opacity: 0 !important;\r\n}\r\n  .cdk-mouse-focused.cdk-focused[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{\r\n  opacity: 0 !important;\r\n}\r\n  \r\n  \r\n  .slection__styled   [_nghost-%COMP%]      .search.ng-touched{\r\n  color: #1a1a1a !important;\r\n\r\n}\r\n  .mat-header-cell[_ngcontent-%COMP%]{\r\n  background: #024e70 !important;\r\n  color: white !important;\r\n}\r\n  .search[_ngcontent-%COMP%]{\r\n  color: #ffffff !important;\r\n  border-bottom: 1px solid whitesmoke;\r\n}\r\n  [_nghost-%COMP%]      .mat-sort-header-arrow{\r\n  color: white;\r\n}\r\n  [_nghost-%COMP%]      .mat-sort-header-content{\r\n  color: white !important;\r\n}\r\n  [_nghost-%COMP%]      .search::-moz-placeholder{\r\n  color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search:-ms-input-placeholder{\r\n  color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search::placeholder{\r\n  color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search.ng-touched{\r\n  color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search .ng-star-inserted{\r\n  color: #000 !important;\r\n}\r\n  \r\n  \r\n  .mat_table[_ngcontent-%COMP%]{\r\n  max-height: 490px;\r\n  height: auto;\r\n}\r\n  tr.mat-header-row[_ngcontent-%COMP%]{\r\n  height: 40px !important;\r\n}\r\n  [_nghost-%COMP%]      tr.mat-row, tr.mat-footer-row[_ngcontent-%COMP%]{\r\n  height: 40px !important;\r\n}\r\n  .mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{\r\n  white-space: nowrap !important;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(odd){\r\n  background-color: #ffffff00 !important;\r\n  transition: 0.1s;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(even){\r\n  background-color: #b3eeff2c !important;\r\n  border-top: 2px solid #0000000d !important;\r\n  border-bottom: 2px solid #0000000d !important;\r\n  transition: 0.1s;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(even):hover{\r\n  box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(odd):hover{\r\n  box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n  \r\n  \r\n  [_nghost-%COMP%]      .switch.switch-small.checked{\r\n  background-color: #03a9f3 !important;\r\n}\r\n  \r\n  \r\n  .custom__select__class[_ngcontent-%COMP%]{\r\n  border-radius: 3px;\r\n  padding: 4px;\r\n  border: 1px solid #0000004b;\r\n  background: white;\r\n}\r\n  .custom__select__class[_ngcontent-%COMP%]   .cus_opt[_ngcontent-%COMP%]{\r\n  border-radius: 4px;\r\n  background: #ffffff;\r\n  box-shadow: 0px 0px 10px black;\r\n}\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-paginator-range-label{\r\n  margin: 0px !important;\r\n}\r\n  \r\n  .pd-none[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\r\n  padding-top: 1.34375em !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2gtZGVwb3NpdC1iYW5rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0NBQWtDO0FBQ3RDO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2Qyx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtFQUNGLHdCQUF3QjtFQUN4QjtFQUNFLGlCQUFpQjtBQUNuQjtFQUNBO0FBQ0EsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QjtFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtFQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0VBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtFQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7RUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7RUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0VBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO01BQ0UsdUJBQXVCO01BQ3ZCLGlCQUFpQjtNQUNqQixvQkFBb0I7SUFDdEI7QUFDSjtFQUNBLHdCQUF3QjtFQUN0Qiw0QkFBNEI7RUFDNUI7TUFDSSwrQkFBK0I7RUFDbkM7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSw0QkFBNEI7RUFDaEM7RUFDQSx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixrREFBa0Q7RUFDcEQ7RUFDQTtJQUNFLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7O0tBRUc7RUFDSCx3QkFBd0I7RUFDeEI7O0VBRUEseUJBQXlCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0Usc0NBQXNDO0VBQ3hDO0VBRUEsYUFBYTtFQUNiO0lBQ0UsY0FBYztFQUNoQjtFQUNBLGFBQWE7RUFFYixlQUFlO0VBQ2Y7SUFDRSw2Q0FBNkM7RUFDL0M7RUFDQTtNQUNJLHNCQUFzQjtFQUMxQjtFQUNBLGVBQWU7RUFFZixvQkFBb0I7RUFDcEI7TUFDSSxlQUFlO0VBQ25CO0VBQ0Esb0JBQW9CO0VBR3BCO0lBQ0UsdUJBQXVCO0FBQzNCO0VBR0E7RUFDRSxrQ0FBa0M7QUFDcEM7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQSxpQkFBaUI7RUFDakI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0VBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtFQUNBLGlCQUFpQjtFQUVqQix3QkFBd0I7RUFDeEI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsOENBQThDO0FBQ2hEO0VBQ0E7RUFDRSx3Q0FBd0M7SUFDdEMsb0NBQW9DO0FBQ3hDO0VBQ0E7RUFDRSx3Q0FBd0M7SUFDdEMsb0NBQW9DO0FBQ3hDO0VBQ0E7RUFDRSx3Q0FBd0M7SUFDdEMsb0NBQW9DO0FBQ3hDO0VBQ0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7RUFDQTtFQUNFLHVDQUF1QztBQUN6QztFQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2QjtFQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0VBRUEsd0JBQXdCO0VBRXhCLHlCQUF5QjtFQUN6QjtFQUNFLHlCQUF5Qjs7QUFFM0I7RUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7RUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQ0FBbUM7QUFDckM7RUFDQTtFQUNFLFlBQVk7QUFDZDtFQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0VBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7RUFGQTtFQUNFLHlCQUF5QjtBQUMzQjtFQUZBO0VBQ0UseUJBQXlCO0FBQzNCO0VBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7RUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtFQUNBLHlCQUF5QjtFQUV6QiwwQkFBMEI7RUFDMUI7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0VBQ0E7RUFDRSx1QkFBdUI7QUFDekI7RUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtFQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0VBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCO0VBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsMENBQTBDO0VBQzFDLDZDQUE2QztFQUM3QyxnQkFBZ0I7QUFDbEI7RUFDQTtFQUNFLG9DQUFvQztBQUN0QztFQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0VBQ0EsMEJBQTBCO0VBRTFCLG9DQUFvQztFQUNwQztFQUNFLG9DQUFvQztBQUN0QztFQUNBLG9DQUFvQztFQUVwQyx1QkFBdUI7RUFDdkI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0VBQ0EsdUJBQXVCO0VBRXZCLG9CQUFvQjtFQUNwQjtFQUNFLHNCQUFzQjtBQUN4QjtFQUNBLG9CQUFvQjtFQUVwQjtFQUNFLGlDQUFpQztBQUNuQyIsImZpbGUiOiJjYXNoLWRlcG9zaXQtYmFuay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1sYXJnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5pbWctZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogYXV0bztcclxuICB9XHJcbiAgLmNhcmRfX3N0eWxpbmd7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG59XHJcbiAgLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZ3tcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGNsaXA7XHJcbiAgfVxyXG4gIC5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmcgaDJ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggN3B4IC03cHggIzAwMDAwMDU3O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4udGV4dF9hbGlnbntcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY3VzdG9uX19idG5zX19jbGFzc3tcclxud2lkdGg6IDEwMHB4O1xyXG4vKiBwYWRkaW5nOiA1cHggMHB4OyAqL1xyXG59XHJcblxyXG4ud2FqaWJhLW5hZmlsYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDlweCA5cHg7XHJcbn1cclxuXHJcbi5jYXNoLWRlcG9zaXQge1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbi5tYXQtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm1hdC1yb3csXHJcbi5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG59XHJcbi5tYXQtY2VsbCxcclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgd29yZC13cmFwOiBpbml0aWFsO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgcGFkZGluZzogMHB4IDVweDtcclxuICBsaW5lLWJyZWFrOiB1bnNldDtcclxuICB3aWR0aDogYXV0bztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLnRleHRfYWxpZ257XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgOmhvc3QgL2RlZXAvIC5jdXN0b20tZGF0ZSAgLm1kLWRycHBpY2tlci5kb3VibGV7XHJcbiAgICAgIHdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAwIWltcG9ydGFudDtcclxuICAgICAgdG9wOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4gIC8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgICAgcGFkZGluZzogNXB4IDAgN3B4IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICB0b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzMwMzAzMGFkO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXBhbmVse1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgNDBweCkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAzMztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAtNHB4ICMwMDAwMDA5YyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtaW5wdXQtZWxlbWVudHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtb3B0aW9uLXRleHR7XHJcbiAgICBjb2xvcjogIzBjMGMwYztcclxuICB9XHJcbiAgLyogOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcHtcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG4gIC8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayxcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xyXG4gIGNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjZjQ0ODM2ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tcclxuICAgIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGZpZWxkcyBib3JkZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7XHJcbiAgICBjb2xvcjogIzBjMGMwYzc3O1xyXG4gIH1cclxuICAvKiBmaWVsZHMgYm9yZGVyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubmctdG91Y2hlZC5uZy12YWxpZHtcclxuICAgIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAvKiBkaXNhYmxlZCAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICAgIGNvbG9yOiAjYmZjMWM0O1xyXG4gIH1cclxuICAvKiBkaXNhYmxlZCAqL1xyXG5cclxuICAvKiB0b2dnbGUgYmFyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYi1jb250YWluZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwcHgsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUtYmFye1xyXG4gICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiB0b2dnbGUgYmFyICovXHJcblxyXG4gIC8qIGVycm9yIGZvbnQtc2l6ZSAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1lcnJvcntcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAvKiBlcnJvciBmb250LXNpemUgKi9cclxuXHJcblxyXG4gIDpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyLmRvdWJsZSB7XHJcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jYXJkX19zdHlsaW5ne1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwM2Q7XHJcbn1cclxuLnRleHQtcmVke1xyXG4gIGNvbG9yOiAjYzUzYjU1O1xyXG59XHJcbi8qIEhFQURFUiBTVFlMRSAqL1xyXG4uY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBvdmVyZmxvdy14OiBjbGlwO1xyXG59XHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmcgaDJ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggN3B4IC03cHggIzAwMDAwMDU3O1xyXG4gIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIEhFQURFUiBTVFlMRSAqL1xyXG5cclxuLyogSEVBREVSIEJVVFRPTiBTVFlMRSAqL1xyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczphY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmZvY3Vze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3MgLm1hdC1idXR0b24td3JhcHBlcntcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjMDBjMjkyICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbjpob3N0IC9kZWVwLyAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzIC5tYXQtYnV0dG9uLXdyYXBwZXI6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IC00cHggIzAwMDAwMGE2O1xyXG59XHJcbjpob3N0IC9kZWVwLyAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzIC5tYXQtcmlwcGxlLm1hdC1idXR0b24tcmlwcGxle1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNkay1tb3VzZS1mb2N1c2VkLmNkay1mb2N1c2VkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7XHJcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBIRUFERVIgQlVUVE9OIFNUWUxFICovXHJcblxyXG4vKiBUQUJMRSBoZWFkZXIgU1RZTElORyAqL1xyXG4uc2xlY3Rpb25fX3N0eWxlZCA6aG9zdCAvZGVlcC8gIC5zZWFyY2gubmctdG91Y2hlZHtcclxuICBjb2xvcjogIzFhMWExYSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4ubWF0LWhlYWRlci1jZWxse1xyXG4gIGJhY2tncm91bmQ6ICMwMjRlNzAgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoe1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNvcnQtaGVhZGVyLWFycm93e1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc29ydC1oZWFkZXItY29udGVudHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5zZWFyY2g6OnBsYWNlaG9sZGVye1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoLm5nLXRvdWNoZWR7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5zZWFyY2ggLm5nLXN0YXItaW5zZXJ0ZWR7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG4vKiBUQUJMRSBoZWFkZXIgU1RZTElORyAqL1xyXG5cclxuLyogbGlzdCBzdHlsaW5nIGluIHRhYmxlICovXHJcbi5tYXRfdGFibGV7XHJcbiAgbWF4LWhlaWdodDogNDkwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbnRyLm1hdC1oZWFkZXItcm93e1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgdHIubWF0LXJvdywgdHIubWF0LWZvb3Rlci1yb3d7XHJcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1mb290ZXItY2VsbCwgLm1hdC1jZWxse1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDAgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlZWZmMmMgIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzAwMDAwMDBkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDAwZCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IDAuMXM7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6MHB4IDBweCA4cHggMHB4ICMwMDAwMDA1ZTtcclxufVxyXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKTpob3ZlcntcclxuICBib3gtc2hhZG93OjBweCAwcHggOHB4IDBweCAjMDAwMDAwNWU7XHJcbn1cclxuLyogbGlzdCBzdHlsaW5nIGluIHRhYmxlICovXHJcblxyXG4vKiBjaGFjayBvbiBvciBvZmYgYnV0dG9uICBzdHlsaW5nICovXHJcbjpob3N0IC9kZWVwLyAgLnN3aXRjaC5zd2l0Y2gtc21hbGwuY2hlY2tlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWYzICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogY2hhY2sgb24gb3Igb2ZmIGJ1dHRvbiAgc3R5bGluZyAqL1xyXG5cclxuLyogc2VsZWN0IGJveCBzdHlsaW5nICovXHJcbi5jdXN0b21fX3NlbGVjdF9fY2xhc3N7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNGI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLmN1c3RvbV9fc2VsZWN0X19jbGFzcyAuY3VzX29wdHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggYmxhY2s7XHJcbn1cclxuLyogc2VsZWN0IGJveCBzdHlsaW5nICovXHJcblxyXG4vKiBwYWdpbmF0aW9uIGFyZWEgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LXBhZ2luYXRvci1yYW5nZS1sYWJlbHtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHBhZ2luYXRpb24gYXJlYSAqL1xyXG5cclxuLnBkLW5vbmUgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxLjM0Mzc1ZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 57076:
/*!****************************************************************************************!*\
  !*** ./src/app/feature/receipt/deposit/cheque-clearance/cheque-clearance.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChequeClearanceComponent": () => (/* binding */ ChequeClearanceComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _service_form_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/form-helper.service */ 64907);
/* harmony import */ var _shared_components_filters_cheque_deposit_filter_cheque_deposit_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/filters/cheque-deposit-filter/cheque-deposit-filter.component */ 72117);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 952);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 56370);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 24716);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 33695);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 15719);

















function ChequeClearanceComponent_div_9_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Select"));
} }
function ChequeClearanceComponent_div_9_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ChequeClearanceComponent_div_9_td_6_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const item_r29 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r32.getcheckBoxValue($event, item_r29.id, item_r29.FormGroup); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", item_r29.FormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("id", item_r29 == null ? null : item_r29.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", item_r29.id);
} }
function ChequeClearanceComponent_div_9_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Status"), " ");
} }
function ChequeClearanceComponent_div_9_td_9_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", item_r37.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r37.title, " ");
} }
const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function ChequeClearanceComponent_div_9_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ChequeClearanceComponent_div_9_td_9_mat_option_7_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", item_r34.FormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](8, _c0, ctx_r4._ss.lng === "en", ctx_r4._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 6, "Status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("required", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.USER_STATUS_ARRAY);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_5_0 = ctx_r4._vs.errMsg("status", item_r34.FormGroup)) == null ? null : tmp_5_0.message);
} }
function ChequeClearanceComponent_div_9_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Description"), " ");
} }
function ChequeClearanceComponent_div_9_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "textarea", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", item_r38.FormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](6, _c0, ctx_r6._ss.lng === "en", ctx_r6._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, "Description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_3_0 = ctx_r6._vs.errMsg("reason", item_r38.FormGroup)) == null ? null : tmp_3_0.message);
} }
function ChequeClearanceComponent_div_9_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Receipt Date"), " ");
} }
function ChequeClearanceComponent_div_9_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r40 == null ? null : item_r40.receipt_date, " ");
} }
function ChequeClearanceComponent_div_9_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Receipt No"), " ");
} }
function ChequeClearanceComponent_div_9_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r41 == null ? null : item_r41.receipt_no, " ");
} }
function ChequeClearanceComponent_div_9_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Status"), " ");
} }
function ChequeClearanceComponent_div_9_td_21_p_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChequeClearanceComponent_div_9_td_21_p_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50); const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r48.reason(item_r42 == null ? null : item_r42.reason); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c0, ctx_r43._ss.lng === "en", ctx_r43._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "on-hold"), " ");
} }
function ChequeClearanceComponent_div_9_td_21_p_2_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChequeClearanceComponent_div_9_td_21_p_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53); const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r51.reason(item_r42 == null ? null : item_r42.reason); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c0, ctx_r44._ss.lng === "en", ctx_r44._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "cleared"), " ");
} }
function ChequeClearanceComponent_div_9_td_21_p_3_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChequeClearanceComponent_div_9_td_21_p_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r54.reason(item_r42 == null ? null : item_r42.reason); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c0, ctx_r45._ss.lng === "en", ctx_r45._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "return"), " ");
} }
function ChequeClearanceComponent_div_9_td_21_p_4_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChequeClearanceComponent_div_9_td_21_p_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59); const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r57.reason(item_r42 == null ? null : item_r42.reason); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c0, ctx_r46._ss.lng === "en", ctx_r46._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "deposited"), " ");
} }
function ChequeClearanceComponent_div_9_td_21_p_5_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChequeClearanceComponent_div_9_td_21_p_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r60.reason(item_r42 == null ? null : item_r42.reason); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c0, ctx_r47._ss.lng === "en", ctx_r47._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "not deposit"), " ");
} }
function ChequeClearanceComponent_div_9_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ChequeClearanceComponent_div_9_td_21_p_1_Template, 4, 7, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ChequeClearanceComponent_div_9_td_21_p_2_Template, 4, 7, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ChequeClearanceComponent_div_9_td_21_p_3_Template, 4, 7, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ChequeClearanceComponent_div_9_td_21_p_4_Template, 4, 7, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ChequeClearanceComponent_div_9_td_21_p_5_Template, 4, 7, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r42 == null ? null : item_r42.status) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r42 == null ? null : item_r42.status) == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r42 == null ? null : item_r42.status) == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r42 == null ? null : item_r42.status) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r42 == null ? null : item_r42.status) == null);
} }
function ChequeClearanceComponent_div_9_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Amount"), " ");
} }
function ChequeClearanceComponent_div_9_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r63 == null ? null : item_r63.amount, " ");
} }
function ChequeClearanceComponent_div_9_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Donor"), " ");
} }
function ChequeClearanceComponent_div_9_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r64 == null ? null : item_r64.donor == null ? null : item_r64.donor.name, " ");
} }
function ChequeClearanceComponent_div_9_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Donor Contact#"), " ");
} }
function ChequeClearanceComponent_div_9_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r65 == null ? null : item_r65.donor == null ? null : item_r65.donor.mobile);
} }
function ChequeClearanceComponent_div_9_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Cheque Date"), " ");
} }
function ChequeClearanceComponent_div_9_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r66 == null ? null : item_r66.cheque_date, " ");
} }
function ChequeClearanceComponent_div_9_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Deposit Date"), " ");
} }
function ChequeClearanceComponent_div_9_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r67 == null ? null : item_r67.cheque_dep_date, " ");
} }
function ChequeClearanceComponent_div_9_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Cheque No"), " ");
} }
function ChequeClearanceComponent_div_9_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r68 == null ? null : item_r68.cheque_no, " ");
} }
function ChequeClearanceComponent_div_9_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Issuing Bank"), " ");
} }
function ChequeClearanceComponent_div_9_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r69 == null ? null : item_r69.bank == null ? null : item_r69.bank.title, " ");
} }
function ChequeClearanceComponent_div_9_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 54);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](1, _c0, ctx_r27._ss.lng === "en", ctx_r27._ss.lng === "ur"));
} }
function ChequeClearanceComponent_div_9_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 55);
} }
function ChequeClearanceComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ChequeClearanceComponent_div_9_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r71._onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ChequeClearanceComponent_div_9_th_5_Template, 3, 3, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ChequeClearanceComponent_div_9_td_6_Template, 5, 3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ChequeClearanceComponent_div_9_th_8_Template, 3, 3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ChequeClearanceComponent_div_9_td_9_Template, 10, 11, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](10, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ChequeClearanceComponent_div_9_th_11_Template, 3, 3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ChequeClearanceComponent_div_9_td_12_Template, 10, 9, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ChequeClearanceComponent_div_9_th_14_Template, 3, 3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ChequeClearanceComponent_div_9_td_15_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ChequeClearanceComponent_div_9_th_17_Template, 3, 3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ChequeClearanceComponent_div_9_td_18_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](19, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ChequeClearanceComponent_div_9_th_20_Template, 3, 3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ChequeClearanceComponent_div_9_td_21_Template, 6, 5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](22, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ChequeClearanceComponent_div_9_th_23_Template, 3, 3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ChequeClearanceComponent_div_9_td_24_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ChequeClearanceComponent_div_9_th_26_Template, 3, 3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ChequeClearanceComponent_div_9_td_27_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](28, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, ChequeClearanceComponent_div_9_th_29_Template, 3, 3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ChequeClearanceComponent_div_9_td_30_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](31, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ChequeClearanceComponent_div_9_th_32_Template, 3, 3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ChequeClearanceComponent_div_9_td_33_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](34, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ChequeClearanceComponent_div_9_th_35_Template, 3, 3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, ChequeClearanceComponent_div_9_td_36_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](37, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, ChequeClearanceComponent_div_9_th_38_Template, 3, 3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, ChequeClearanceComponent_div_9_td_39_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](40, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ChequeClearanceComponent_div_9_th_41_Template, 3, 3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ChequeClearanceComponent_div_9_td_42_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, ChequeClearanceComponent_div_9_tr_43_Template, 1, 4, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, ChequeClearanceComponent_div_9_tr_44_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0._fs._form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.procssed)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](10, _c0, ctx_r0._ss.lng === "en", ctx_r0._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](52, 8, "Process"), " ");
} }
class ChequeClearanceComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_1__.BaseForm {
    constructor(injector, hepler) {
        super(injector);
        this.injector = injector;
        this.hepler = hepler;
        this.displayedColumns = ['Select', 'select_st', 'reason', 'Receipt_date', 'Receipt_no', 'status', 'amount', 'donor', 'donor_contact', 'cheque_date', 'cheque_dep_date', 'cheque_no', 'issuing_bank'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
        this.showTable = false;
        this.procssed = false;
        this.selectAllList = [];
        this.showtextarea = false;
        this.selectedIdArr = [];
        this.USER_STATUS_ARRAY = [
            { id: 2, title: 'Cleared' },
            { id: 3, title: 'return' }
        ];
    }
    ngOnInit() {
        this.componentName = "Cheque Clearance";
        this.initForm();
    }
    initForm() {
        this._fs._form = this._fb.group({
            type: [''],
            details: this._fb.array([this.customization_detail()])
        });
    }
    // 1 Customization Initialization
    customization_detail(id = '', status = '', reason = '') {
        return this._fb.group({
            id: [{ value: id, disabled: true }],
            status: [{ value: status, disabled: true }],
            reason: [{ value: reason, disabled: true }]
        });
    }
    // 2 Customization (Template Iteration Purpose)
    get customization_details() {
        return this._fs._form?.get('details');
    }
    getStoreFilter(event) {
        if (event !== '' && event !== undefined && event !== null) {
            this._http.get({
                url: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.TRANSACTION,
                endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.CHEQUE_DEPOSIT,
                query: {
                    ...event,
                    type: 2,
                }
            }).subscribe((res) => {
                res?.data?.records.length > 0 ? (this.showTable = true,
                    this.patchInitialValues(res.data.records),
                    this.DataToRender(res.data.records)) : (this.showTable = false,
                    this._swl.noDataFound());
            });
        }
    }
    DataToRender(data) {
        for (let i = 0; i < data.length; i++) {
            const temp = {};
            temp.id = data[i].id;
            temp.receipt_date = data[i].receipt_date;
            temp.receipt_no = data[i].receipt_no;
            temp.reason = data[i].reason;
            temp.status = data[i].status;
            temp.amount = data[i].amount;
            temp.donor = data[i].donor;
            temp.cheque_date = data[i].cheque_date;
            temp.cheque_dep_date = data[i].cheque_dep_date;
            temp.cheque_no = data[i].cheque_no;
            temp.bank = data[i].bank;
            temp.FormGroup = this.customization_details.controls[i];
            this.dataSource.data[i] = temp;
            this.selectAllList[i] = temp;
        }
    }
    patchInitialValues(data) {
        const formArray = this._fs._form.get('details');
        if (data.length > 0)
            formArray.clear();
        data.forEach((custom) => {
            formArray.push(this.customization_detail('', '', ''));
        });
    }
    reason(reason) {
        this._swl.genericSwal(reason, '', 'Reason');
    }
    getcheckBoxValue(event, eId, group) {
        const selectedPerArr = this._fs._form.get('details');
        this.GetIds(event, eId);
        if (event.target.checked == true) {
            this.enableDisableFormControls(event.target.checked, group);
            group.get('id').patchValue(eId);
            this.AddValidation(event.target.checked, group);
        }
        else if (event.target.checked == false) {
            this.removeValidator(event.target.checked, group);
            let i = 0;
            selectedPerArr.controls.forEach((ctrl) => {
                if (ctrl.value.id == eId) {
                    // Remove the unselected element from the arrayForm
                    // selectedPerArr.removeAt(i);
                    group.get('id').patchValue('');
                    group.get('status').patchValue('');
                    group.get('reason').patchValue('');
                    this.enableDisableFormControls(event.target.checked, group);
                    return;
                }
                i++;
            });
        }
    }
    enableDisableFormControls(condition, group) {
        if (condition == true) {
            group.controls['id'].enable();
            group.controls['status'].enable();
            group.controls['reason'].enable();
        }
        else if (condition == false) {
            group.controls['id'].disable();
            group.controls['status'].disable();
            group.controls['reason'].disable();
        }
    }
    GetIds(event, eId) {
        if (event.target.checked) {
            this.selectedIdArr.push(eId);
        }
        else {
            this.selectedIdArr.forEach((ctrl, i) => {
                if (ctrl == eId) {
                    this.selectedIdArr.splice(i, 1);
                    return;
                }
            });
        }
        this.procssed = this.hepler._disable_simple_array(this.selectedIdArr);
    }
    AddValidation(condition, group) {
        if (condition) {
            group.get('status').addValidators([this._vs._vals('Status')]);
            group.get('reason').addValidators([this._vs._val('reason', { specialChar: 1 })]);
            this.updateValidity(group);
        }
    }
    removeValidator(condition, group) {
        if (condition == false) {
            group.get('status').clearValidators();
            group.get('reason').clearValidators();
            this.updateValidity(group);
        }
    }
    updateValidity(group) {
        group.get('status').updateValueAndValidity();
        group.get('reason').updateValueAndValidity();
    }
    _onSubmit() {
        this._fs._form.markAllAsTouched();
        this._vs._submitted = true;
        this._fs._form.get('type').patchValue(2);
        if (this._fs._form.value.details.length == 0) {
            this.hepler.openSnackBar('Please select one checkbox', 'close', 'right', 'top');
        }
        else {
            if (this._fs._form.valid) {
                // this.disableFileds();
                const data = this._fs._form.value;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    title: this._translate.instant('Are you sure?'),
                    text: this._translate.instant("You won't be able to revert this!"),
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: this._translate.instant("Yes, Proceed!"),
                    cancelButtonText: this._translate.instant("Cancel")
                }).then((result) => {
                    if (result.isConfirmed) {
                        const modify = this._http.create({ body: data, url: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.TRANSACTION, endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.CHEQUE_DEPOSIT });
                        modify.subscribe({
                            next: (res) => {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                                    title: this._translate.instant('Processed'),
                                    text: this._translate.instant(res.message),
                                    icon: 'success',
                                    confirmButtonColor: '#3085d6',
                                    confirmButtonText: '<i class="fas fa-thumbs-up"></i>',
                                }).then(() => {
                                    this._fs._form.reset();
                                    this._fhs.reloadComponent();
                                });
                            },
                            error: (httpErrorResponse) => {
                                this._vs._error_server(httpErrorResponse.error);
                            }
                        });
                        this._vs._submitted = false;
                    }
                });
            }
            else {
                return this._fs._form.valid;
            }
        }
    }
}
ChequeClearanceComponent.ɵfac = function ChequeClearanceComponent_Factory(t) { return new (t || ChequeClearanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_form_helper_service__WEBPACK_IMPORTED_MODULE_4__.FormHelperService)); };
ChequeClearanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ChequeClearanceComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 4, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], [2, "border-top", "0px !important"], [3, "filterData"], ["class", "card-body pt-0", 4, "ngIf"], [1, "card-body", "pt-0"], [3, "formGroup", "ngSubmit"], [1, "mat_table"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "Select"], ["mat-header-cell", "", "class", "pr-3 pl-3", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "px-3", 4, "matCellDef"], ["matColumnDef", "select_st"], ["mat-header-cell", "", "class", "px-3 pl-4", 4, "matHeaderCellDef"], ["matColumnDef", "reason"], ["matColumnDef", "Receipt_date"], ["mat-header-cell", "", "class", "pr-3", 4, "matHeaderCellDef"], ["matColumnDef", "Receipt_no"], ["matColumnDef", "status"], ["matColumnDef", "amount"], ["matColumnDef", "donor"], ["matColumnDef", "donor_contact"], ["matColumnDef", "cheque_date"], ["matColumnDef", "cheque_dep_date"], ["matColumnDef", "cheque_no"], ["matColumnDef", "issuing_bank"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "card-body"], [1, "action-form"], [1, "form-group", "m-b-0", "text-right"], [1, "col-sm-12", "col-md-12", "p-0", "my-1"], ["mat-raised-button", "", "type", "submit", 1, "mt-1", "btn", "btn-info", "waves-effect", "waves-light", 3, "disabled", "ngClass"], ["mat-header-cell", "", 1, "pr-3", "pl-3"], ["mat-cell", "", 1, "px-3"], [1, "form-check", 3, "formGroup"], ["type", "checkbox", 1, "form-check-input", 3, "id", "value", "change"], ["checkboxes", ""], [1, "form-check-label"], ["mat-header-cell", "", 1, "px-3", "pl-4"], [1, "col-sm-12", "col-md-12", "p-0", "my-1", 3, "formGroup"], ["appearance", "outline", 1, "col-md-12", 3, "ngClass"], ["formControlName", "status", 3, "required"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-sm-12", "col-md-12", "pt-3", "my-1", "pd-none", 3, "formGroup"], ["formControlName", "reason", "matInput", ""], ["mat-header-cell", "", 1, "pr-3"], ["style", "margin-bottom: 0;", 4, "ngIf"], [2, "margin-bottom", "0"], ["href", "javascript:void(0)", 1, "custom-status", 3, "ngClass", "click"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""]], template: function ChequeClearanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "cheque-deposit-filter", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("filterData", function ChequeClearanceComponent_Template_cheque_deposit_filter_filterData_8_listener($event) { return ctx.getStoreFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ChequeClearanceComponent_div_9_Template, 53, 13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 2, "Cheque Clearance"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showTable);
    } }, directives: [_shared_components_filters_cheque_deposit_filter_cheque_deposit_filter_component__WEBPACK_IMPORTED_MODULE_5__.ChequeDepositFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: [".upload-large[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n  .img-fluid[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    text-align: auto;\r\n  }\r\n  .card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n  \r\n  .text_align[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  }\r\n  .custon__btns__class[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  \r\n  }\r\n  .wajiba-nafila[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 50px 10px;\r\n  }\r\n  @media(max-width: 768px){\r\n    .text_align[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n    [_nghost-%COMP%]     .custom-date  .md-drppicker.double{\r\n      width: 290px !important;\r\n      left: 0!important;\r\n      top: 100% !important; \r\n    }\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n      padding: 5px 0 7px 0 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n    top: 30px !important;\r\n    margin-top: -15px !important;\r\n    font-weight: 700 !important;\r\n    font-size: 15px;\r\n    color: #303030ad;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n      overflow: visible !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-select-panel{\r\n    width: 100% !important;\r\n    min-width: 100% !important;\r\n    transform: translate(15px, 40px) !important;\r\n    background: #ffffff !important;\r\n    border: 1px solid #00000033;\r\n    box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-select-value{\r\n    font-size: 16px;\r\n    font-weight: 600 !important;\r\n    overflow: hidden !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-input-element{\r\n    font-size: 16px !important;\r\n    font-weight: 600 !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-option-text{\r\n    color: #0c0c0c;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\n  color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n    color: #f44836 !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n    color: #f44836 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n    color: #0c0c0c !important;\r\n    overflow: visible !important;\r\n    \r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label{\r\n    overflow: visible !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n    color: #0c0c0c !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n    color: #0c0c0c77;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .ng-touched.ng-valid{\r\n    color: #0c0c0c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n    background-color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n    background-color: #024d7071 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n    color: #bfc1c4;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n    transform: translate3d(30px, 0, 0) !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n      width: 50px !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-error{\r\n      font-size: 10px;\r\n  }\r\n  \r\n  [_nghost-%COMP%]     .md-drppicker.double {\r\n    width: 500px !important;\r\n  }\r\n  [_nghost-%COMP%]     .md-drppicker td.active, [_nghost-%COMP%]     .md-drppicker td.active:hover {\r\n    background-color: #039be5 !important;\r\n  }\r\n  [_nghost-%COMP%]     .md-drppicker .btn {\r\n    background-color: #03a9f3 !important;\r\n    text-transform: capitalize !important;\r\n    font-size: 14px !important;\r\n  }\r\n  \r\n    .mat-snack-bar-container {\r\n    color: #000;\r\n    background: #d51c41;\r\n    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);\r\n}\r\n  \r\n  .custom-status[_ngcontent-%COMP%] {\r\n  padding: 5px 10px;\r\n  background-color: #03a9f3;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXF1ZS1kZXBvc2l0LWJhbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBQ0Esd0JBQXdCO0VBQ3hCO0VBQ0EsaUJBQWlCO0VBQ2pCO0VBQ0E7RUFDQSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCO0VBRUE7RUFDQSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCO0VBR0E7SUFDRTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO01BQ0UsdUJBQXVCO01BQ3ZCLGlCQUFpQjtNQUNqQixvQkFBb0I7SUFDdEI7RUFDRjtFQUNBLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUI7TUFDSSwrQkFBK0I7RUFDbkM7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSw0QkFBNEI7RUFDaEM7RUFDQSx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixrREFBa0Q7RUFDcEQ7RUFDQTtJQUNFLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7O0tBRUc7RUFDSCx3QkFBd0I7RUFDeEI7O0VBRUEseUJBQXlCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0Usc0NBQXNDO0VBQ3hDO0VBRUEsYUFBYTtFQUNiO0lBQ0UsY0FBYztFQUNoQjtFQUNBLGFBQWE7RUFFYixlQUFlO0VBQ2Y7SUFDRSw2Q0FBNkM7RUFDL0M7RUFDQTtNQUNJLHNCQUFzQjtFQUMxQjtFQUNBLGVBQWU7RUFFZixvQkFBb0I7RUFDcEI7TUFDSSxlQUFlO0VBQ25CO0VBQ0Esb0JBQW9CO0VBR3BCO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBRUE7O0lBRUUsb0NBQW9DO0VBQ3RDO0VBRUE7SUFDRSxvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLDBCQUEwQjtFQUM1QjtFQUVBOztLQUVHO0VBRUw7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1IQUFtSDtBQUN2SDtFQUlBLDZCQUE2QjtFQUU3QjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtFQUlBLDhCQUE4QiIsImZpbGUiOiJjaGVxdWUtZGVwb3NpdC1iYW5rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWxhcmdle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLmltZy1mbHVpZHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBhdXRvO1xyXG4gIH1cclxuICAuY2FyZF9fc3R5bGluZ3tcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwM2Q7XHJcbiAgfVxyXG4gIC5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmd7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBjbGlwO1xyXG4gIH1cclxuICAuY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5nIGgye1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAzOWJlNTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDdweCAtN3B4ICMwMDAwMDA1NztcclxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4gIC50ZXh0X2FsaWdue1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAuY3VzdG9uX19idG5zX19jbGFzc3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgLyogcGFkZGluZzogNXB4IDBweDsgKi9cclxuICB9XHJcbiAgXHJcbiAgLndhamliYS1uYWZpbGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC50ZXh0X2FsaWdue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIDpob3N0IC9kZWVwLyAuY3VzdG9tLWRhdGUgIC5tZC1kcnBwaWNrZXIuZG91Ymxle1xyXG4gICAgICB3aWR0aDogMjkwcHggIWltcG9ydGFudDtcclxuICAgICAgbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICAgIHRvcDogMTAwJSAhaW1wb3J0YW50OyBcclxuICAgIH1cclxuICB9XHJcbiAgLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4gIC8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgICAgcGFkZGluZzogNXB4IDAgN3B4IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICB0b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzMwMzAzMGFkO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXBhbmVse1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgNDBweCkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAzMztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAtNHB4ICMwMDAwMDA5YyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtaW5wdXQtZWxlbWVudHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtb3B0aW9uLXRleHR7XHJcbiAgICBjb2xvcjogIzBjMGMwYztcclxuICB9XHJcbiAgLyogOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcHtcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG4gIC8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayxcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xyXG4gIGNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6ICNmNDQ4MzYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogZmllbGRzIGJvcmRlciBob3ZlciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICAgIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e1xyXG4gICAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogZmllbGRzIGJvcmRlciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICAgIGNvbG9yOiAjMGMwYzBjNzc7XHJcbiAgfVxyXG4gIC8qIGZpZWxkcyBib3JkZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5uZy10b3VjaGVkLm5nLXZhbGlke1xyXG4gICAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZWI5ZWMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0ZDcwNzEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogZGlzYWJsZWQgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7XHJcbiAgICBjb2xvcjogI2JmYzFjNDtcclxuICB9XHJcbiAgLyogZGlzYWJsZWQgKi9cclxuICBcclxuICAvKiB0b2dnbGUgYmFyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYi1jb250YWluZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwcHgsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUtYmFye1xyXG4gICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiB0b2dnbGUgYmFyICovXHJcbiAgXHJcbiAgLyogZXJyb3IgZm9udC1zaXplICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWVycm9ye1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC8qIGVycm9yIGZvbnQtc2l6ZSAqL1xyXG4gIFxyXG4gIFxyXG4gIDpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyLmRvdWJsZSB7XHJcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgL2RlZXAvIC5tZC1kcnBwaWNrZXIgdGQuYWN0aXZlLFxyXG4gIDpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyIHRkLmFjdGl2ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM5YmU1ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyIC5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmMyAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyogOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG5cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNkNTFjNDE7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDBweCA2cHggMTBweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCAxOHB4IDBweCByZ2IoMCAwIDAgLyAxMiUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIERvbnQgcmVtb3ZlIGl0IGZyb20gaGVyZSAqL1xyXG5cclxuLmN1c3RvbS1zdGF0dXMge1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIERvbid0IHJlbW92ZSBpdCBmcm9tIGhlcmUgKi8iXX0= */"] });


/***/ }),

/***/ 64116:
/*!**********************************************************************************************!*\
  !*** ./src/app/feature/receipt/deposit/cheque-deposit-bank/cheque-deposit-bank.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChequeDepositBankComponent": () => (/* binding */ ChequeDepositBankComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _service_form_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/form-helper.service */ 64907);
/* harmony import */ var _shared_components_filters_cheque_deposit_filter_cheque_deposit_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/filters/cheque-deposit-filter/cheque-deposit-filter.component */ 72117);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 952);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 56370);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 24716);
/* harmony import */ var _shared_components_control_ddd_ddd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/control/ddd/ddd.component */ 80834);
/* harmony import */ var _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/control/date/date.component */ 24280);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 33695);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 15719);




















function ChequeDepositBankComponent_div_9_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Select"));
} }
function ChequeDepositBankComponent_div_9_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function ChequeDepositBankComponent_div_9_td_6_Template_input_valueChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const item_r33 = restoredCtx.$implicit; return item_r33.id = $event; })("change", function ChequeDepositBankComponent_div_9_td_6_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const item_r33 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r38.getcheckBoxValue($event, item_r33.id, item_r33.FormGroup); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", item_r33.FormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("id", item_r33 == null ? null : item_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r33.id);
} }
function ChequeDepositBankComponent_div_9_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Change Status"), " ");
} }
function ChequeDepositBankComponent_div_9_td_9_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r41.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r41.title, " ");
} }
const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function ChequeDepositBankComponent_div_9_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-form-field", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ChequeDepositBankComponent_div_9_td_9_Template_mat_select_ngModelChange_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43); const item_r39 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r42.DateandBank($event, item_r39.FormGroup); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ChequeDepositBankComponent_div_9_td_9_mat_option_7_Template, 2, 2, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", item_r39.FormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](8, _c0, ctx_r4._ss.lng === "en", ctx_r4._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 6, "Status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("required", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.USER_STATUS_ARRAY);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((tmp_5_0 = ctx_r4._vs.errMsg("status", item_r39.FormGroup)) == null ? null : tmp_5_0.message);
} }
function ChequeDepositBankComponent_div_9_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Receipt No"), " ");
} }
function ChequeDepositBankComponent_div_9_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r44 == null ? null : item_r44.receipt_no, " ");
} }
function ChequeDepositBankComponent_div_9_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Receipt Date"), " ");
} }
function ChequeDepositBankComponent_div_9_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", item_r45 == null ? null : item_r45.receipt_date, " ");
} }
function ChequeDepositBankComponent_div_9_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Cheque No"), " ");
} }
function ChequeDepositBankComponent_div_9_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r46 == null ? null : item_r46.cheque_no, " ");
} }
function ChequeDepositBankComponent_div_9_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Cheque Date"), " ");
} }
function ChequeDepositBankComponent_div_9_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r47 == null ? null : item_r47.cheque_date, " ");
} }
function ChequeDepositBankComponent_div_9_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Amount"), " ");
} }
function ChequeDepositBankComponent_div_9_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r48 == null ? null : item_r48.amount, " ");
} }
function ChequeDepositBankComponent_div_9_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Banks"), " ");
} }
const _c1 = function () { return { type: "0" }; };
const _c2 = function (a0) { return { query: a0 }; };
function ChequeDepositBankComponent_div_9_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "di-ddd", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", item_r49.FormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("req", false)("group", item_r49.FormGroup)("url", ctx_r16.URLz.BANK)("param", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c1)))("oneTimeLoad", true)("load", false);
} }
function ChequeDepositBankComponent_div_9_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Deposit Date"), " ");
} }
function ChequeDepositBankComponent_div_9_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "di-date", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("max", ctx_r18.maxDate)("min", item_r50 == null ? null : item_r50.cheque_date)("group", item_r50.FormGroup)("req", false);
} }
function ChequeDepositBankComponent_div_9_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Current Status"), " ");
} }
function ChequeDepositBankComponent_div_9_td_33_p_1_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChequeDepositBankComponent_div_9_td_33_p_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59); const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r57.reason(item_r51 == null ? null : item_r51.reason); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](4, _c0, ctx_r52._ss.lng === "en", ctx_r52._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "on-hold"), " ");
} }
function ChequeDepositBankComponent_div_9_td_33_p_2_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChequeDepositBankComponent_div_9_td_33_p_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r62); const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r60.reason(item_r51 == null ? null : item_r51.reason); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](4, _c0, ctx_r53._ss.lng === "en", ctx_r53._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "cleared"), " ");
} }
function ChequeDepositBankComponent_div_9_td_33_p_3_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChequeDepositBankComponent_div_9_td_33_p_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r65); const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r63.reason(item_r51 == null ? null : item_r51.reason); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](4, _c0, ctx_r54._ss.lng === "en", ctx_r54._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "return"), " ");
} }
function ChequeDepositBankComponent_div_9_td_33_p_4_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChequeDepositBankComponent_div_9_td_33_p_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r68); const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r66.reason(item_r51 == null ? null : item_r51.reason); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](4, _c0, ctx_r55._ss.lng === "en", ctx_r55._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "deposited"), " ");
} }
function ChequeDepositBankComponent_div_9_td_33_p_5_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChequeDepositBankComponent_div_9_td_33_p_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r71); const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r69.reason(item_r51 == null ? null : item_r51.reason); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](4, _c0, ctx_r56._ss.lng === "en", ctx_r56._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "not deposit"), " ");
} }
function ChequeDepositBankComponent_div_9_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ChequeDepositBankComponent_div_9_td_33_p_1_Template, 4, 7, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ChequeDepositBankComponent_div_9_td_33_p_2_Template, 4, 7, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ChequeDepositBankComponent_div_9_td_33_p_3_Template, 4, 7, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ChequeDepositBankComponent_div_9_td_33_p_4_Template, 4, 7, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ChequeDepositBankComponent_div_9_td_33_p_5_Template, 4, 7, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (item_r51 == null ? null : item_r51.status) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (item_r51 == null ? null : item_r51.status) == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (item_r51 == null ? null : item_r51.status) == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (item_r51 == null ? null : item_r51.status) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (item_r51 == null ? null : item_r51.status) == null);
} }
function ChequeDepositBankComponent_div_9_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Deposit Slip No"), " ");
} }
function ChequeDepositBankComponent_div_9_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-form-field", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r72 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", item_r72.FormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](7, _c0, ctx_r22._ss.lng === "en", ctx_r22._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, "Deposit Slip No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("required", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = ctx_r22._vs.errMsg("deposit_slip", item_r72.FormGroup)) == null ? null : tmp_4_0.message, "");
} }
function ChequeDepositBankComponent_div_9_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Reason"), " ");
} }
function ChequeDepositBankComponent_div_9_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-form-field", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r73 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", item_r73.FormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](7, _c0, ctx_r24._ss.lng === "en", ctx_r24._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, "Reason"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("required", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = ctx_r24._vs.errMsg("reason", item_r73.FormGroup)) == null ? null : tmp_4_0.message, "");
} }
function ChequeDepositBankComponent_div_9_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Donor"), " ");
} }
function ChequeDepositBankComponent_div_9_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r74 == null ? null : item_r74.donor == null ? null : item_r74.donor.name, " ");
} }
function ChequeDepositBankComponent_div_9_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Donor Contact#"), " ");
} }
function ChequeDepositBankComponent_div_9_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r75 == null ? null : item_r75.donor == null ? null : item_r75.donor.mobile);
} }
function ChequeDepositBankComponent_div_9_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Issuing Bank"), " ");
} }
function ChequeDepositBankComponent_div_9_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r76 == null ? null : item_r76.bank == null ? null : item_r76.bank.title, " ");
} }
function ChequeDepositBankComponent_div_9_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 62);
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r31._ss.lng === "en", ctx_r31._ss.lng === "ur"));
} }
function ChequeDepositBankComponent_div_9_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 63);
} }
function ChequeDepositBankComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ChequeDepositBankComponent_div_9_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r78._onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](4, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ChequeDepositBankComponent_div_9_th_5_Template, 3, 3, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ChequeDepositBankComponent_div_9_td_6_Template, 5, 3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](7, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ChequeDepositBankComponent_div_9_th_8_Template, 3, 3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ChequeDepositBankComponent_div_9_td_9_Template, 10, 11, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](10, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ChequeDepositBankComponent_div_9_th_11_Template, 3, 3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ChequeDepositBankComponent_div_9_td_12_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](13, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, ChequeDepositBankComponent_div_9_th_14_Template, 3, 3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, ChequeDepositBankComponent_div_9_td_15_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](16, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, ChequeDepositBankComponent_div_9_th_17_Template, 3, 3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, ChequeDepositBankComponent_div_9_td_18_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](19, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, ChequeDepositBankComponent_div_9_th_20_Template, 3, 3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ChequeDepositBankComponent_div_9_td_21_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](22, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, ChequeDepositBankComponent_div_9_th_23_Template, 3, 3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, ChequeDepositBankComponent_div_9_td_24_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](25, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, ChequeDepositBankComponent_div_9_th_26_Template, 3, 3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, ChequeDepositBankComponent_div_9_td_27_Template, 3, 10, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](28, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, ChequeDepositBankComponent_div_9_th_29_Template, 3, 3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, ChequeDepositBankComponent_div_9_td_30_Template, 3, 4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](31, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, ChequeDepositBankComponent_div_9_th_32_Template, 3, 3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, ChequeDepositBankComponent_div_9_td_33_Template, 6, 5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](34, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, ChequeDepositBankComponent_div_9_th_35_Template, 3, 3, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, ChequeDepositBankComponent_div_9_td_36_Template, 9, 10, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](37, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, ChequeDepositBankComponent_div_9_th_38_Template, 3, 3, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, ChequeDepositBankComponent_div_9_td_39_Template, 9, 10, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](40, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, ChequeDepositBankComponent_div_9_th_41_Template, 3, 3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, ChequeDepositBankComponent_div_9_td_42_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](43, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, ChequeDepositBankComponent_div_9_th_44_Template, 3, 3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, ChequeDepositBankComponent_div_9_td_45_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](46, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, ChequeDepositBankComponent_div_9_th_47_Template, 3, 3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, ChequeDepositBankComponent_div_9_td_48_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, ChequeDepositBankComponent_div_9_tr_49_Template, 1, 4, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, ChequeDepositBankComponent_div_9_tr_50_Template, 1, 0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0._fs._form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r0.procssed)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](10, _c0, ctx_r0._ss.lng === "en", ctx_r0._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](58, 8, "Process"));
} }
class ChequeDepositBankComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_3__.BaseForm {
    constructor(injector, hepler) {
        super(injector);
        this.injector = injector;
        this.hepler = hepler;
        this.maxDate = new Date();
        this.displayedColumns = ['Select', 'select_st', 'Receipt_no', 'Receipt_date', 'cheque_no', 'cheque_date', 'amount', 'st_bank', 'st_date', 'status', 'st_slip', 'reason', 'donor', 'donor_contact', 'issuing_bank'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource();
        this.showTable = false;
        this.procssed = false;
        this.selectAllList = [];
        this.selectedIdArr = [];
        this.showtextarea = false;
        this.required = false;
        this.showbank = false;
        this.USER_STATUS_ARRAY = [
            { id: 1, title: 'On Hold' },
            { id: 2, title: 'Deposit' }
        ];
        //  Validator Object
        this.validation = {
            'status': [this._vs._vals('Status')],
            'reason': [this._vs._val('reason', { specialChar: 1 })],
            'deposit_slip': [this._vs._val('Deposit Slip no.', { minChar: 1, maxChar: 25, num: 1 })],
        };
        this.datePipe = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe);
    }
    ngOnInit() {
        this.componentName = "Cheque Deposit in Bank";
        this.initForm();
    }
    initForm() {
        this._fs._form = this._fb.group({
            type: [''],
            details: this._fb.array([this.customization_detail()])
        });
    }
    // 1 Customization Initialization
    customization_detail(id = '', status = '', reason = '', date = '', deposit_slip = '', bank_id = '') {
        return this._fb.group({
            id: [{ value: id, disabled: true }],
            status: [{ value: status, disabled: true }],
            reason: [{ value: reason, disabled: true }],
            date: [{ value: date, disabled: true }],
            deposit_slip: [{ value: deposit_slip, disabled: true }],
            bank_id: [{ value: bank_id, disabled: true }],
        });
    }
    // 2 Customization (Template Iteration Purpose)
    get customization_details() {
        return this._fs._form?.get('details');
    }
    getChequeData(event) {
        if (event !== '' && event !== undefined && event !== null) {
            this._http.get({
                url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TRANSACTION,
                endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.CHEQUE_DEPOSIT,
                query: {
                    ...event,
                    type: 1,
                }
            }).subscribe((res) => {
                res?.data?.records.length > 0 ? (this.showTable = true,
                    this.patchInitialValues(res.data.records, event),
                    this.DataToRender(res.data.records)) : (this.showTable = false,
                    this._swl.noDataFound());
            });
        }
    }
    DataToRender(data) {
        for (let i = 0; i < data.length; i++) {
            let temp = {};
            temp.id = data[i].id;
            temp.receipt_date = data[i].receipt_date;
            temp.receipt_no = data[i].receipt_no;
            temp.reason = data[i].reason;
            temp.status = data[i].status;
            temp.amount = data[i].amount;
            temp.donor = data[i].donor;
            temp.cheque_date = data[i].cheque_date;
            temp.cheque_no = data[i].cheque_no;
            temp.bank = data[i].bank;
            temp.FormGroup = this.customization_details.controls[i];
            this.dataSource.data[i] = temp;
            this.selectAllList[i] = temp;
        }
    }
    patchInitialValues(data, eve) {
        let formArray = this._fs._form.get('details');
        if (data.length > 0)
            formArray.clear();
        data.forEach((custom) => {
            formArray.push(this.customization_detail('', '', '', '', '', ''));
        });
    }
    reason(reason) {
        this._swl.genericSwal(reason, '', 'Reason');
    }
    getcheckBoxValue(event, eId, group) {
        var selectedPerArr = this._fs._form.get('details');
        this.GetIds(event, eId);
        this.ValidationHandler(event.target.checked, group);
        if (event.target.checked) {
            this.enableDisableFormControls(event.target.checked, group);
            group.get('id').patchValue(eId);
        }
        else {
            let i = 0;
            selectedPerArr.controls.forEach((ctrl) => {
                if (ctrl.value.id == eId) {
                    this.patchEmptyValue(group);
                    this.enableDisableFormControls(event.target.checked, group);
                    return;
                }
                i++;
            });
        }
    }
    patchEmptyValue(group) {
        for (const key in group.controls) {
            group.get(key).patchValue('');
        }
    }
    enableDisableFormControls(condition, group) {
        if (condition == true) {
            group.controls['id'].enable();
            group.controls['status'].enable();
            group.controls['reason'].enable();
            group.controls['deposit_slip'].enable();
            // group.controls['date'].enable();
            // group.controls['bank_id'].enable();
        }
        else if (condition == false) {
            for (const key in group.controls) {
                group.get(key).disable();
            }
            // group.controls['id'].disable();
            // group.controls['status'].disable();
            // group.controls['reason'].disable();
            // group.controls['deposit_slip'].disable();
            // group.controls['date'].disable();
            // group.controls['bank_id'].disable();
        }
    }
    GetIds(event, eId) {
        if (event.target.checked) {
            this.selectedIdArr.push(eId);
        }
        else {
            this.selectedIdArr.forEach((ctrl, i) => {
                if (ctrl == eId) {
                    this.selectedIdArr.splice(i, 1);
                    return;
                }
            });
        }
        this.procssed = this.hepler._disable_simple_array(this.selectedIdArr);
    }
    ValidationHandler(condition, group) {
        for (const key in group.controls) {
            if (condition)
                group.get(key).setValidators(this.validation[key]);
            else if (!condition)
                group.get(key).clearValidators();
            group.get(key).updateValueAndValidity();
        }
    }
    DateandBank(event, group) {
        if (event == 1) {
            group.controls['date'].disable();
            group.controls['bank_id'].disable();
            group.get('date').clearValidators();
            group.get('bank_id').clearValidators();
            this.updateValidity(group);
        }
        else if (event == 2) {
            group.controls['date'].enable();
            group.controls['bank_id'].enable();
            group.get('date').addValidators([this._vs._val('Date', { isField: 0 }), this._vs._val_Date({})]);
            group.get('bank_id').addValidators([this._vs._vals('Bank')]);
            this.updateValidity(group);
        }
    }
    updateValidity(group) {
        // group.get('status').updateValueAndValidity();
        // group.get('reason').updateValueAndValidity();
        // group.get('deposit_slip').updateValueAndValidity();
        group.get('date').updateValueAndValidity();
        group.get('bank_id').updateValueAndValidity();
    }
    _onSubmit() {
        this._fs._form.markAllAsTouched();
        this._vs._submitted = true;
        this._fs._form.get('type').patchValue(1);
        if (this._fs._form.value.details.length == 0) {
            this.hepler.openSnackBar('Please select one checkbox', 'close', 'right', 'top');
        }
        else {
            if (this._fs._form.valid) {
                const data = this._fs._form.value;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    title: this._translate.instant('Are you sure?'),
                    text: this._translate.instant("You won't be able to revert this!"),
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: this._translate.instant("Yes, Proceed!"),
                    cancelButtonText: this._translate.instant("Cancel")
                }).then((result) => {
                    if (result.isConfirmed) {
                        this._http.create({ body: data, url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TRANSACTION, endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.CHEQUE_DEPOSIT }).subscribe({
                            next: (res) => {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                                    title: this._translate.instant('Processed'),
                                    text: this._translate.instant(res.message),
                                    icon: 'success',
                                    confirmButtonColor: '#3085d6',
                                    confirmButtonText: '<i class="fas fa-thumbs-up"></i>',
                                }).then((res) => {
                                    this._fs._form.reset();
                                    this._fhs.reloadComponent();
                                });
                            },
                            error: (httpErrorResponse) => {
                                this._vs._error_server(httpErrorResponse.error);
                            }
                        });
                        this._vs._submitted = false;
                    }
                });
            }
            else {
                return this._fs._form.valid;
            }
        }
    }
}
ChequeDepositBankComponent.ɵfac = function ChequeDepositBankComponent_Factory(t) { return new (t || ChequeDepositBankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_form_helper_service__WEBPACK_IMPORTED_MODULE_4__.FormHelperService)); };
ChequeDepositBankComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ChequeDepositBankComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 4, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], [2, "border-top", "0px !important"], [3, "filterData"], ["class", "card-body pt-0", 4, "ngIf"], [1, "card-body", "pt-0"], [3, "formGroup", "ngSubmit"], [1, "mat_table"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "Select"], ["mat-header-cell", "", "class", "pr-3 pl-3", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "px-3", 4, "matCellDef"], ["matColumnDef", "select_st"], ["mat-header-cell", "", "class", "pl-4 px-3", 4, "matHeaderCellDef"], ["matColumnDef", "Receipt_no"], ["mat-header-cell", "", "class", "pr-3", 4, "matHeaderCellDef"], ["matColumnDef", "Receipt_date"], ["matColumnDef", "cheque_no"], ["matColumnDef", "cheque_date"], ["matColumnDef", "amount"], ["matColumnDef", "st_bank"], ["matColumnDef", "st_date"], ["matColumnDef", "status"], ["matColumnDef", "st_slip"], ["mat-header-cell", "", "class", "pl-5 px-3", 4, "matHeaderCellDef"], ["matColumnDef", "reason"], ["matColumnDef", "donor"], ["matColumnDef", "donor_contact"], ["matColumnDef", "issuing_bank"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "px-3", 4, "matRowDef", "matRowDefColumns"], [1, "card-body"], [1, "action-form"], [1, "form-group", "m-b-0", "text-right"], [1, "col-sm-12", "col-md-12", "p-0", "my-1"], ["mat-raised-button", "", "type", "submit", 1, "mt-1", "btn", "btn-info", "waves-effect", "waves-light", 3, "disabled", "ngClass"], ["mat-header-cell", "", 1, "pr-3", "pl-3"], ["mat-cell", "", 1, "px-3"], [1, "form-check", 3, "formGroup"], ["type", "checkbox", 1, "form-check-input", 3, "id", "value", "valueChange", "change"], ["checkboxes", ""], [1, "form-check-label"], ["mat-header-cell", "", 1, "pl-4", "px-3"], [1, "col-sm-12", "col-md-12", "p-0", "my-1", 3, "formGroup"], ["appearance", "outline", 1, "col-md-12", 3, "ngClass"], ["formControlName", "status", 3, "required", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-header-cell", "", 1, "pr-3"], ["field", "bank_id", "lbl", "Bank", 3, "req", "group", "url", "param", "oneTimeLoad", "load"], [1, "col-sm-12", "col-md-12", "my-1", "pd-none"], ["field", "date", "lbl", "Date", "readonly", "", 3, "max", "min", "group", "req"], ["style", "margin-bottom: 0;", 4, "ngIf"], [2, "margin-bottom", "0"], ["href", "javascript:void(0)", 1, "custom-status", 3, "ngClass", "click"], ["mat-header-cell", "", 1, "pl-5", "px-3"], [1, "col-sm-12", "col-md-12", "my-1", "pd-none", 3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "deposit_slip", 3, "required"], ["matInput", "", "type", "text", "formControlName", "reason", 3, "required"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", "", 1, "px-3"]], template: function ChequeDepositBankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "cheque-deposit-filter", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("filterData", function ChequeDepositBankComponent_Template_cheque_deposit_filter_filterData_8_listener($event) { return ctx.getChequeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ChequeDepositBankComponent_div_9_Template, 59, 13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 2, "Cheque Deposit in Bank"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showTable);
    } }, directives: [_shared_components_filters_cheque_deposit_filter_cheque_deposit_filter_component__WEBPACK_IMPORTED_MODULE_5__.ChequeDepositFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _shared_components_control_ddd_ddd_component__WEBPACK_IMPORTED_MODULE_6__.DddComponent, _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_7__.DateComponent, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: [".upload-large[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n  .img-fluid[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    text-align: auto;\r\n  }\r\n  .card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n  \r\n  .text_align[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  }\r\n  .custon__btns__class[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  \r\n  }\r\n  .wajiba-nafila[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 50px 10px;\r\n  }\r\n  @media(max-width: 768px){\r\n    .text_align[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n    [_nghost-%COMP%]     .custom-date  .md-drppicker.double{\r\n      width: 290px !important;\r\n      left: 0!important;\r\n      top: 100% !important; \r\n    }\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n      padding: 5px 0 7px 0 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n    top: 30px !important;\r\n    margin-top: -15px !important;\r\n    font-weight: 700 !important;\r\n    font-size: 15px;\r\n    color: #303030ad;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n      overflow: visible !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-select-panel{\r\n    width: 100% !important;\r\n    min-width: 100% !important;\r\n    transform: translate(15px, 40px) !important;\r\n    background: #ffffff !important;\r\n    border: 1px solid #00000033;\r\n    box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-select-value{\r\n    font-size: 16px;\r\n    font-weight: 600 !important;\r\n    overflow: hidden !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-input-element{\r\n    font-size: 16px !important;\r\n    font-weight: 600 !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-option-text{\r\n    color: #0c0c0c;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\n  color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n    color: #f44836 !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n    color: #f44836 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n    color: #0c0c0c !important;\r\n    overflow: visible !important;\r\n    \r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label{\r\n    overflow: visible !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n    color: #0c0c0c !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n    color: #0c0c0c77;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .ng-touched.ng-valid{\r\n    color: #0c0c0c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n    background-color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n    background-color: #024d7071 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n    color: #bfc1c4;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n    transform: translate3d(30px, 0, 0) !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n      width: 50px !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-error{\r\n      font-size: 10px;\r\n  }\r\n  \r\n  [_nghost-%COMP%]     .md-drppicker.double {\r\n    width: 500px !important;\r\n  }\r\n  [_nghost-%COMP%]     .md-drppicker td.active, [_nghost-%COMP%]     .md-drppicker td.active:hover {\r\n    background-color: #039be5 !important;\r\n  }\r\n  [_nghost-%COMP%]     .md-drppicker .btn {\r\n    background-color: #03a9f3 !important;\r\n    text-transform: capitalize !important;\r\n    font-size: 14px !important;\r\n  }\r\n  \r\n    .mat-snack-bar-container {\r\n    color: #000;\r\n    background: #d51c41;\r\n    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);\r\n}\r\n  \r\n  .custom-status[_ngcontent-%COMP%] {\r\n  padding: 5px 10px;\r\n  background-color: #03a9f3;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXF1ZS1kZXBvc2l0LWJhbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBQ0Esd0JBQXdCO0VBQ3hCO0VBQ0EsaUJBQWlCO0VBQ2pCO0VBQ0E7RUFDQSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCO0VBRUE7RUFDQSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCO0VBR0E7SUFDRTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO01BQ0UsdUJBQXVCO01BQ3ZCLGlCQUFpQjtNQUNqQixvQkFBb0I7SUFDdEI7RUFDRjtFQUNBLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUI7TUFDSSwrQkFBK0I7RUFDbkM7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSw0QkFBNEI7RUFDaEM7RUFDQSx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixrREFBa0Q7RUFDcEQ7RUFDQTtJQUNFLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7O0tBRUc7RUFDSCx3QkFBd0I7RUFDeEI7O0VBRUEseUJBQXlCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0Usc0NBQXNDO0VBQ3hDO0VBRUEsYUFBYTtFQUNiO0lBQ0UsY0FBYztFQUNoQjtFQUNBLGFBQWE7RUFFYixlQUFlO0VBQ2Y7SUFDRSw2Q0FBNkM7RUFDL0M7RUFDQTtNQUNJLHNCQUFzQjtFQUMxQjtFQUNBLGVBQWU7RUFFZixvQkFBb0I7RUFDcEI7TUFDSSxlQUFlO0VBQ25CO0VBQ0Esb0JBQW9CO0VBR3BCO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBRUE7O0lBRUUsb0NBQW9DO0VBQ3RDO0VBRUE7SUFDRSxvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLDBCQUEwQjtFQUM1QjtFQUVBOztLQUVHO0VBRUw7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1IQUFtSDtBQUN2SDtFQUlBLDZCQUE2QjtFQUU3QjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtFQUlBLDhCQUE4QiIsImZpbGUiOiJjaGVxdWUtZGVwb3NpdC1iYW5rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWxhcmdle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLmltZy1mbHVpZHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBhdXRvO1xyXG4gIH1cclxuICAuY2FyZF9fc3R5bGluZ3tcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwM2Q7XHJcbiAgfVxyXG4gIC5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmd7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBjbGlwO1xyXG4gIH1cclxuICAuY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5nIGgye1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAzOWJlNTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDdweCAtN3B4ICMwMDAwMDA1NztcclxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4gIC50ZXh0X2FsaWdue1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAuY3VzdG9uX19idG5zX19jbGFzc3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgLyogcGFkZGluZzogNXB4IDBweDsgKi9cclxuICB9XHJcbiAgXHJcbiAgLndhamliYS1uYWZpbGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC50ZXh0X2FsaWdue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIDpob3N0IC9kZWVwLyAuY3VzdG9tLWRhdGUgIC5tZC1kcnBwaWNrZXIuZG91Ymxle1xyXG4gICAgICB3aWR0aDogMjkwcHggIWltcG9ydGFudDtcclxuICAgICAgbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICAgIHRvcDogMTAwJSAhaW1wb3J0YW50OyBcclxuICAgIH1cclxuICB9XHJcbiAgLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4gIC8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgICAgcGFkZGluZzogNXB4IDAgN3B4IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICB0b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzMwMzAzMGFkO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXBhbmVse1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgNDBweCkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAzMztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAtNHB4ICMwMDAwMDA5YyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtaW5wdXQtZWxlbWVudHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtb3B0aW9uLXRleHR7XHJcbiAgICBjb2xvcjogIzBjMGMwYztcclxuICB9XHJcbiAgLyogOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcHtcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG4gIC8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayxcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xyXG4gIGNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6ICNmNDQ4MzYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogZmllbGRzIGJvcmRlciBob3ZlciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICAgIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e1xyXG4gICAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogZmllbGRzIGJvcmRlciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICAgIGNvbG9yOiAjMGMwYzBjNzc7XHJcbiAgfVxyXG4gIC8qIGZpZWxkcyBib3JkZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5uZy10b3VjaGVkLm5nLXZhbGlke1xyXG4gICAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZWI5ZWMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0ZDcwNzEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogZGlzYWJsZWQgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7XHJcbiAgICBjb2xvcjogI2JmYzFjNDtcclxuICB9XHJcbiAgLyogZGlzYWJsZWQgKi9cclxuICBcclxuICAvKiB0b2dnbGUgYmFyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYi1jb250YWluZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwcHgsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUtYmFye1xyXG4gICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiB0b2dnbGUgYmFyICovXHJcbiAgXHJcbiAgLyogZXJyb3IgZm9udC1zaXplICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWVycm9ye1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC8qIGVycm9yIGZvbnQtc2l6ZSAqL1xyXG4gIFxyXG4gIFxyXG4gIDpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyLmRvdWJsZSB7XHJcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgL2RlZXAvIC5tZC1kcnBwaWNrZXIgdGQuYWN0aXZlLFxyXG4gIDpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyIHRkLmFjdGl2ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM5YmU1ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyIC5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmMyAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyogOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG5cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNkNTFjNDE7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDBweCA2cHggMTBweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCAxOHB4IDBweCByZ2IoMCAwIDAgLyAxMiUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIERvbnQgcmVtb3ZlIGl0IGZyb20gaGVyZSAqL1xyXG5cclxuLmN1c3RvbS1zdGF0dXMge1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIERvbid0IHJlbW92ZSBpdCBmcm9tIGhlcmUgKi8iXX0= */"] });


/***/ }),

/***/ 13481:
/*!*******************************************************************!*\
  !*** ./src/app/feature/receipt/deposit/deposit-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositRoutingModule": () => (/* binding */ DepositRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _cash_deposit_bank_cash_deposit_bank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash-deposit-bank/cash-deposit-bank.component */ 53546);
/* harmony import */ var _cheque_deposit_bank_cheque_deposit_bank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cheque-deposit-bank/cheque-deposit-bank.component */ 64116);
/* harmony import */ var _storePlacement_material_store_material_store_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storePlacement/material-store/material-store.component */ 30718);
/* harmony import */ var _cheque_clearance_cheque_clearance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cheque-clearance/cheque-clearance.component */ 57076);
/* harmony import */ var _cash_deposit_office_cash_deposit_office_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cash-deposit-office/cash-deposit-office.component */ 66824);
/* harmony import */ var src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enums/action.enum */ 31978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39609);









const routes = [
    {
        path: "",
        children: [
            {
                path: '',
                redirectTo: 'cash_deopsit_bank',
                pathMatch: 'full'
            },
            {
                path: "cash_deopsit_bank",
                component: _cash_deposit_bank_cash_deposit_bank_component__WEBPACK_IMPORTED_MODULE_0__.CashDepositBankComponent,
                data: {
                    title: "Cash Deopsit In Bank",
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_5__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_5__.ACTION.EDIT
                    ],
                    urls: [
                        { title: "Cash Deopsit In Bank" },
                        { title: "Add" },
                    ]
                }
            },
            {
                path: "cash_deopsit_office",
                component: _cash_deposit_office_cash_deposit_office_component__WEBPACK_IMPORTED_MODULE_4__.CashDepositOfficeComponent,
                data: {
                    title: "Cash Deopsit In Office",
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_5__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_5__.ACTION.EDIT
                    ],
                    urls: [
                        { title: "Cash Deopsit In Office" },
                        { title: "Add" },
                    ]
                }
            },
            {
                path: "cheque_deopsit_bank",
                component: _cheque_deposit_bank_cheque_deposit_bank_component__WEBPACK_IMPORTED_MODULE_1__.ChequeDepositBankComponent,
                data: {
                    title: "Cheque Deopsit In Bank",
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_5__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_5__.ACTION.EDIT
                    ],
                    urls: [
                        { title: "Cheque Deopsit In Bank" },
                        { title: "Add" },
                    ]
                }
            },
            {
                path: "cheque_clearance",
                component: _cheque_clearance_cheque_clearance_component__WEBPACK_IMPORTED_MODULE_3__.ChequeClearanceComponent,
                data: {
                    title: "Cheque Clearance",
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_5__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_5__.ACTION.EDIT
                    ],
                    urls: [
                        { title: "Cheque Clearance" },
                        { title: "Add" },
                    ]
                }
            },
            {
                path: "material_store_placement",
                component: _storePlacement_material_store_material_store_component__WEBPACK_IMPORTED_MODULE_2__.MaterialStoreComponent,
                data: {
                    title: "Material Store Placement",
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_5__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_5__.ACTION.EDIT
                    ],
                    urls: [
                        { title: "Material Store Placement" },
                        { title: "Add" },
                    ]
                }
            }
        ]
    }
];
class DepositRoutingModule {
}
DepositRoutingModule.ɵfac = function DepositRoutingModule_Factory(t) { return new (t || DepositRoutingModule)(); };
DepositRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DepositRoutingModule });
DepositRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DepositRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 84498:
/*!***********************************************************!*\
  !*** ./src/app/feature/receipt/deposit/deposit.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositModule": () => (/* binding */ DepositModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 75349);
/* harmony import */ var _deposit_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deposit-routing.module */ 13481);
/* harmony import */ var _cash_deposit_bank_cash_deposit_bank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cash-deposit-bank/cash-deposit-bank.component */ 53546);
/* harmony import */ var _cheque_deposit_bank_cheque_deposit_bank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cheque-deposit-bank/cheque-deposit-bank.component */ 64116);
/* harmony import */ var _storePlacement_material_store_material_store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storePlacement/material-store/material-store.component */ 30718);
/* harmony import */ var _cheque_clearance_cheque_clearance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cheque-clearance/cheque-clearance.component */ 57076);
/* harmony import */ var _cash_deposit_office_cash_deposit_office_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cash-deposit-office/cash-deposit-office.component */ 66824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 39609);









class DepositModule {
}
DepositModule.ɵfac = function DepositModule_Factory(t) { return new (t || DepositModule)(); };
DepositModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DepositModule });
DepositModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _deposit_routing_module__WEBPACK_IMPORTED_MODULE_1__.DepositRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DepositModule, { declarations: [_cash_deposit_bank_cash_deposit_bank_component__WEBPACK_IMPORTED_MODULE_2__.CashDepositBankComponent,
        _storePlacement_material_store_material_store_component__WEBPACK_IMPORTED_MODULE_4__.MaterialStoreComponent,
        _cheque_deposit_bank_cheque_deposit_bank_component__WEBPACK_IMPORTED_MODULE_3__.ChequeDepositBankComponent,
        _cheque_clearance_cheque_clearance_component__WEBPACK_IMPORTED_MODULE_5__.ChequeClearanceComponent,
        _cash_deposit_office_cash_deposit_office_component__WEBPACK_IMPORTED_MODULE_6__.CashDepositOfficeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _deposit_routing_module__WEBPACK_IMPORTED_MODULE_1__.DepositRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 30718:
/*!***************************************************************************************************!*\
  !*** ./src/app/feature/receipt/deposit/storePlacement/material-store/material-store.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialStoreComponent": () => (/* binding */ MaterialStoreComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _service_form_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../service/form-helper.service */ 64907);
/* harmony import */ var _shared_components_filters_material_store_filter_material_store_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/filters/material-store-filter/material-store-filter.component */ 50909);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 15719);
/* harmony import */ var _shared_components_control_ac_ac_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/control/ac/ac.component */ 30625);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 95432);















const _c0 = ["checkboxes"];
const _c1 = ["parencheckbox"];
function MaterialStoreComponent_table_12_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " S No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function MaterialStoreComponent_table_12_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r18 + 1, " ");
} }
function MaterialStoreComponent_table_12_th_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function MaterialStoreComponent_table_12_th_5_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r20.selectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("indeterminate", ctx_r3._fs._form.get("placement_ids").length > 0 && ctx_r3._fs._form.get("placement_ids").length < ctx_r3.selectAllList.length)("disabled", ctx_r3.selectAllList.length == 0)("checked", ctx_r3.multiSelect);
} }
function MaterialStoreComponent_table_12_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function MaterialStoreComponent_table_12_td_6_Template_input_valueChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const item_r22 = restoredCtx.$implicit; return item_r22.id = $event; })("change", function MaterialStoreComponent_table_12_td_6_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const item_r22 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r27.getcheckBoxValue($event, item_r22.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", item_r22 == null ? null : item_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r4.multiSelect)("value", item_r22.id);
} }
function MaterialStoreComponent_table_12_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Receipt No"), " ");
} }
function MaterialStoreComponent_table_12_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", item_r28 == null ? null : item_r28.receipt_number, " ");
} }
function MaterialStoreComponent_table_12_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Item"), " ");
} }
function MaterialStoreComponent_table_12_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r29 == null ? null : item_r29.item == null ? null : item_r29.item.title, " ");
} }
function MaterialStoreComponent_table_12_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Quantity"), " ");
} }
function MaterialStoreComponent_table_12_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r30 == null ? null : item_r30.qty, " ");
} }
function MaterialStoreComponent_table_12_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Description"), " ");
} }
function MaterialStoreComponent_table_12_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r31 == null ? null : item_r31.description);
} }
function MaterialStoreComponent_table_12_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Amount"), " ");
} }
function MaterialStoreComponent_table_12_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r32 == null ? null : item_r32.amount, " ");
} }
const _c2 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function MaterialStoreComponent_table_12_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 43);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](1, _c2, ctx_r15._ss.lng === "en", ctx_r15._ss.lng === "ur"));
} }
const _c3 = function (a0) { return { "make-red": a0 }; };
function MaterialStoreComponent_table_12_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 44);
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c3, ctx_r16.idList.length > 0 ? ctx_r16.idList.indexOf(row_r33.id) > -1 : ""));
} }
function MaterialStoreComponent_table_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MaterialStoreComponent_table_12_th_2_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MaterialStoreComponent_table_12_td_3_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](4, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, MaterialStoreComponent_table_12_th_5_Template, 5, 3, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MaterialStoreComponent_table_12_td_6_Template, 5, 3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](7, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, MaterialStoreComponent_table_12_th_8_Template, 3, 3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, MaterialStoreComponent_table_12_td_9_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](10, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, MaterialStoreComponent_table_12_th_11_Template, 3, 3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, MaterialStoreComponent_table_12_td_12_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](13, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, MaterialStoreComponent_table_12_th_14_Template, 3, 3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, MaterialStoreComponent_table_12_td_15_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, MaterialStoreComponent_table_12_th_17_Template, 3, 3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, MaterialStoreComponent_table_12_td_18_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, MaterialStoreComponent_table_12_th_20_Template, 3, 3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, MaterialStoreComponent_table_12_td_21_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, MaterialStoreComponent_table_12_tr_22_Template, 1, 4, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, MaterialStoreComponent_table_12_tr_23_Template, 1, 3, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
class MaterialStoreComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_3__.BaseForm {
    constructor(injector, hepler) {
        super(injector);
        this.injector = injector;
        this.hepler = hepler;
        this.displayedColumns = ['S No', 'Select', 'Receipt no', 'item', 'quantity', 'description', 'amount'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
        this.showTable = false;
        this.multiSelect = false;
        this.selectAllList = [];
        this.filter_data = {};
        this.idList = [];
    }
    ngOnInit() {
        this.componentName = "Material Store Placement";
        this.initForm();
    }
    initForm() {
        this._fs._form = this._fb.group({
            store_location: ['', this._vs._vals('Location (store)')],
            placement_ids: this._fb.array([]),
        });
    }
    getStoreFilter(event) {
        this.filter_data = event;
        if (event !== '' && event !== undefined && event !== null) {
            if (this._fs._form.get('placement_ids') != null) {
                this._fs._form.get('placement_ids').clear();
            }
            this.su = event.su;
            this._http.get({
                url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TRANSACTION,
                endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.MATERIAL_STORE_LIST,
                query: {
                    bg: event.bg,
                    le: event.le,
                    ou: event.ou,
                    su: event.su,
                    donation_category: event.donation_category,
                }
            }).subscribe((res) => {
                this.dataSource.data = res.data.records;
                this.selectAllList = res.data.records;
                this.totalRecords = res?.data.totalRecords;
                res?.data?.records.length > 0 ? (this.showTable = true) : (this.showTable = false,
                    this._swl.noDataFound());
            });
        }
    }
    uncheckAll() {
        this.checkboxes.forEach((element) => {
            element.nativeElement.checked = false;
        });
    }
    selectAll() {
        const selectedPerArr = this._fs._form.get('placement_ids');
        this.multiSelect = !this.multiSelect;
        if (this.multiSelect) {
            if (this.selectAllList.length != 0) {
                this.selectAllList.forEach(val => {
                    selectedPerArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(val.id));
                });
            }
        }
        else {
            while (0 !== selectedPerArr.length) {
                selectedPerArr.removeAt(0);
            }
        }
    }
    getcheckBoxValue(event, eId) {
        const selectedPerArr = this._fs._form.get('placement_ids');
        if (event.target.checked) {
            selectedPerArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(eId));
        }
        else {
            let i = 0;
            selectedPerArr.controls.forEach((ctrl) => {
                if (ctrl.value == eId) {
                    selectedPerArr.removeAt(i);
                    return;
                }
                i++;
            });
        }
        this.indeterminate(selectedPerArr.value);
    }
    indeterminate(checked_arr) {
        if (checked_arr.length == this.totalRecords) {
            this.parencheckbox.forEach((element) => {
                console.log(element);
                element.nativeElement.checked = true;
            });
        }
        else if (checked_arr.length == 0) {
            this.parencheckbox.forEach((element) => {
                console.log(element);
                element.nativeElement.checked = false;
            });
        }
    }
    checksForSubmit() {
        this.multiSelect = false;
        this.uncheckAll();
        if (this._fs._form.get('placement_ids') != null) {
            this._fs._form.get('placement_ids').clear();
        }
    }
    _onSubmit() {
        this._fs._form.markAllAsTouched();
        this._vs._submitted = true;
        if (this._fs._form.value.placement_ids.length == 0) {
            this.hepler.openSnackBar(this._translate.instant('Please select one checkbox'), 'close', 'right', 'top');
        }
        else {
            if (this._fs._form.valid) {
                const data = this._fs._form.getRawValue();
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    title: this._translate.instant('Are you sure?'),
                    text: this._translate.instant("You won't be able to revert this!"),
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: this._translate.instant("Yes, Proceed!"),
                    cancelButtonText: this._translate.instant("Cancel")
                }).then((result) => {
                    if (result.isConfirmed) {
                        let modify;
                        modify = this._http.create({ body: data, url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TRANSACTION, endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.MATERIAL_STORE_MAP });
                        modify.subscribe({
                            next: (res) => {
                                if (res.data != undefined && res.data != null) {
                                    if (res?.data?.errors?.length > 0) {
                                        for (let i = 0; i < res?.data?.errors?.length; i++) {
                                            this.idList[i] = res?.data.errors[i]?.fund_category[0]?.id;
                                        }
                                        this.checksForSubmit();
                                        if (res?.data?.success?.length > 0) {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                                                title: this._translate.instant('Processed'),
                                                text: this._translate.instant(res.message),
                                                icon: 'success',
                                                confirmButtonColor: '#3085d6',
                                                confirmButtonText: '<i class="fas fa-thumbs-up"></i>',
                                            });
                                        }
                                        this.getStoreFilter(this.filter_data);
                                        this._vs._error_from_success(data);
                                    }
                                    else {
                                        this.checksForSubmit();
                                        if (res?.data?.success?.length > 0) {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                                                title: 'Processed',
                                                text: res.message,
                                                icon: 'success',
                                                confirmButtonColor: '#3085d6',
                                                confirmButtonText: '<i class="fas fa-thumbs-up"></i>',
                                            });
                                        }
                                        this.getStoreFilter(this.filter_data);
                                    }
                                }
                            },
                            error: (httpErrorResponse) => {
                                this._vs._error_server(httpErrorResponse.error);
                            }
                        });
                        this._vs._submitted = false;
                    }
                });
            }
            else {
                return this._fs._form.valid;
            }
        }
    }
}
MaterialStoreComponent.ɵfac = function MaterialStoreComponent_Factory(t) { return new (t || MaterialStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_form_helper_service__WEBPACK_IMPORTED_MODULE_4__.FormHelperService)); };
MaterialStoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: MaterialStoreComponent, selectors: [["di-component-name-here"]], viewQuery: function MaterialStoreComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.checkboxes = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.parencheckbox = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 17, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], [2, "border-top", "0px !important"], [3, "filterData"], [1, "card-body", "pt-0"], [3, "formGroup", "ngSubmit"], [1, "mat_table"], ["mat-table", "", 3, "dataSource", 4, "ngIf"], [1, "card-body"], [1, "action-form"], [1, "form-group", "m-b-0", "text-right"], [1, "col-sm-12", "col-md-4", "p-0", "my-1"], [1, "col-sm-12", "col-md-6", "p-0", "my-1"], ["key_parent_id", "su", "field", "store_location", "lbl", "Location (store)", 3, "hidden", "parent_id", "url"], [1, "col-sm-12", "col-md-2", "p-0", "my-1"], ["mat-raised-button", "", "type", "submit", 1, "mt-1", "btn", "btn-info", "waves-effect", "waves-light", 3, "hidden", "disabled", "ngClass"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "S No"], ["mat-header-cell", "", "class", "pr-3", "translate", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "px-3", 4, "matCellDef"], ["matColumnDef", "Select"], ["mat-header-cell", "", "class", "pr-3 pl-3", 4, "matHeaderCellDef"], ["matColumnDef", "Receipt no"], ["mat-header-cell", "", "class", "pr-3", 4, "matHeaderCellDef"], ["matColumnDef", "item"], ["matColumnDef", "quantity"], ["matColumnDef", "description"], ["matColumnDef", "amount"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "ngClass", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "translate", "", 1, "pr-3"], ["mat-cell", "", 1, "px-3"], ["mat-header-cell", "", 1, "pr-3", "pl-3"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", "custom-chk", 3, "indeterminate", "disabled", "checked", "change"], ["parencheckbox", ""], [1, "custom-control-label"], ["type", "checkbox", 1, "custom-control-input", "custom-chk", 3, "checked", "id", "value", "valueChange", "change"], ["checkboxes", ""], ["mat-header-cell", "", 1, "pr-3"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", "", 3, "ngClass"]], template: function MaterialStoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "material-store-filter", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("filterData", function MaterialStoreComponent_Template_material_store_filter_filterData_8_listener($event) { return ctx.getStoreFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function MaterialStoreComponent_Template_form_ngSubmit_10_listener() { return ctx._onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, MaterialStoreComponent_table_12_Template, 24, 4, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "di-ac", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 10, "Material Store Placement"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx._fs._form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx.showTable)("parent_id", ctx.su)("url", ctx.URLz.STORE_LOCATION);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx.showTable)("disabled", !ctx._fhs._disableBtn("placement_ids"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](14, _c2, ctx._ss.lng === "en", ctx._ss.lng === "ur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 12, "Process"));
    } }, directives: [_shared_components_filters_material_store_filter_material_store_filter_component__WEBPACK_IMPORTED_MODULE_5__.MaterialStoreFilterComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _shared_components_control_ac_ac_component__WEBPACK_IMPORTED_MODULE_6__.AcComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: [".upload-large[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n  .img-fluid[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    text-align: auto;\r\n  }\r\n  .card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n  \r\n  .text_align[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  }\r\n  .custon__btns__class[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  \r\n  }\r\n  .wajiba-nafila[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 50px 10px;\r\n  }\r\n  .make-red[_ngcontent-%COMP%] {\r\n    background-color: #e13232c9 !important;\r\n  }\r\n  .make-red[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    color: #fff !important;\r\n  }\r\n  @media(max-width: 768px){\r\n    .text_align[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n    [_nghost-%COMP%]     .custom-date  .md-drppicker.double{\r\n      width: 290px !important;\r\n      left: 0!important;\r\n      top: 100% !important;\r\n    }\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n      padding: 5px 0 7px 0 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n    top: 30px !important;\r\n    margin-top: -15px !important;\r\n    font-weight: 700 !important;\r\n    font-size: 15px;\r\n    color: #303030ad;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n      overflow: visible !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-select-panel{\r\n    width: 100% !important;\r\n    min-width: 100% !important;\r\n    transform: translate(15px, 40px) !important;\r\n    background: #ffffff !important;\r\n    border: 1px solid #00000033;\r\n    box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-select-value{\r\n    font-size: 16px;\r\n    font-weight: 600 !important;\r\n    overflow: hidden !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-input-element{\r\n    font-size: 16px !important;\r\n    font-weight: 600 !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-option-text{\r\n    color: #0c0c0c;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\n  color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n    color: #f44836 !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n    color: #f44836 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n    color: #0c0c0c !important;\r\n    overflow: visible !important;\r\n    \r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label{\r\n    overflow: visible !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n    color: #0c0c0c !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n    color: #0c0c0c77;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .ng-touched.ng-valid{\r\n    color: #0c0c0c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n    background-color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n    background-color: #024d7071 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n    color: #bfc1c4;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n    transform: translate3d(30px, 0, 0) !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n      width: 50px !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-error{\r\n      font-size: 10px;\r\n  }\r\n  \r\n  [_nghost-%COMP%]     .md-drppicker.double {\r\n    width: 500px !important;\r\n  }\r\n  [_nghost-%COMP%]     .md-drppicker td.active, [_nghost-%COMP%]     .md-drppicker td.active:hover {\r\n    background-color: #039be5 !important;\r\n  }\r\n  [_nghost-%COMP%]     .md-drppicker .btn {\r\n    background-color: #03a9f3 !important;\r\n    text-transform: capitalize !important;\r\n    font-size: 14px !important;\r\n  }\r\n    .mat-snack-bar-container {\r\n    color: #000;\r\n    background: #d51c41;\r\n    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsLXN0b3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2Qyx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtFQUNBLHdCQUF3QjtFQUN4QjtFQUNBLGlCQUFpQjtFQUNqQjtFQUNBO0VBQ0EsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QjtFQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQjtFQUVBO0lBQ0Usc0NBQXNDO0VBQ3hDO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFJQTtJQUNFO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7TUFDRSx1QkFBdUI7TUFDdkIsaUJBQWlCO01BQ2pCLG9CQUFvQjtJQUN0QjtFQUNGO0VBQ0Esd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QjtNQUNJLCtCQUErQjtFQUNuQztFQUNBLHdCQUF3QjtFQUN4QjtJQUNFLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtNQUNJLDRCQUE0QjtFQUNoQztFQUNBLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDJDQUEyQztJQUMzQyw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGtEQUFrRDtFQUNwRDtFQUNBO0lBQ0UsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTs7S0FFRztFQUNILHdCQUF3QjtFQUN4Qjs7RUFFQSx5QkFBeUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUVBOztJQUVFLHlCQUF5QjtFQUMzQjtFQUNBLHdCQUF3QjtFQUN4QjtJQUNFLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBLGtCQUFrQjtFQUNsQjtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBLGtCQUFrQjtFQUNsQjtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7RUFFQSxhQUFhO0VBQ2I7SUFDRSxjQUFjO0VBQ2hCO0VBQ0EsYUFBYTtFQUViLGVBQWU7RUFDZjtJQUNFLDZDQUE2QztFQUMvQztFQUNBO01BQ0ksc0JBQXNCO0VBQzFCO0VBQ0EsZUFBZTtFQUVmLG9CQUFvQjtFQUNwQjtNQUNJLGVBQWU7RUFDbkI7RUFDQSxvQkFBb0I7RUFHcEI7SUFDRSx1QkFBdUI7RUFDekI7RUFFQTs7SUFFRSxvQ0FBb0M7RUFDdEM7RUFFQTtJQUNFLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsMEJBQTBCO0VBQzVCO0VBRUY7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1IQUFtSDtBQUN2SCIsImZpbGUiOiJtYXRlcmlhbC1zdG9yZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1sYXJnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5pbWctZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogYXV0bztcclxuICB9XHJcbiAgLmNhcmRfX3N0eWxpbmd7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG4gIH1cclxuICAuY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogY2xpcDtcclxuICB9XHJcbiAgLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC8qIGJ1dHRvbnMgc2F2ZSBDYW5jZWwgKi9cclxuICAudGV4dF9hbGlnbntcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLmN1c3Rvbl9fYnRuc19fY2xhc3N7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIC8qIHBhZGRpbmc6IDVweCAwcHg7ICovXHJcbiAgfVxyXG5cclxuICAud2FqaWJhLW5hZmlsYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDUwcHggMTBweDtcclxuICB9XHJcblxyXG4gIC5tYWtlLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTEzMjMyYzkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1ha2UtcmVkIHRkIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC50ZXh0X2FsaWdue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIDpob3N0IC9kZWVwLyAuY3VzdG9tLWRhdGUgIC5tZC1kcnBwaWNrZXIuZG91Ymxle1xyXG4gICAgICB3aWR0aDogMjkwcHggIWltcG9ydGFudDtcclxuICAgICAgbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICAgIHRvcDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiBidXR0b25zIHNhdmUgQ2FuY2VsICovXHJcbiAgLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4gICAgICBwYWRkaW5nOiA1cHggMCA3cHggMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICAgIHRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMzAzMDMwYWQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJ7XHJcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAvKiBmaWVsZHMgbGluZSBoZWlnaHQgd29yayAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zZWxlY3QtcGFuZWx7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCA0MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDMzO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMXB4IC00cHggIzAwMDAwMDljICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zZWxlY3QtdmFsdWV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1vcHRpb24tdGV4dHtcclxuICAgIGNvbG9yOiAjMGMwYzBjO1xyXG4gIH1cclxuICAvKiA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2Fwe1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICB9ICovXHJcbiAgLyogZmllbGRzIGJvcmRlciBob3ZlciAqL1xyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrLFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XHJcbiAgY29sb3I6ICMwZWI5ZWMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICAgIGNvbG9yOiAjZjQ0ODM2ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6ICNmNDQ4MzYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogZmllbGRzIGJvcmRlciBob3ZlciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICAgIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e1xyXG4gICAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogZmllbGRzIGJvcmRlciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICAgIGNvbG9yOiAjMGMwYzBjNzc7XHJcbiAgfVxyXG4gIC8qIGZpZWxkcyBib3JkZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5uZy10b3VjaGVkLm5nLXZhbGlke1xyXG4gICAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZWI5ZWMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0ZDcwNzEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8qIGRpc2FibGVkICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le1xyXG4gICAgY29sb3I6ICNiZmMxYzQ7XHJcbiAgfVxyXG4gIC8qIGRpc2FibGVkICovXHJcblxyXG4gIC8qIHRvZ2dsZSBiYXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iLWNvbnRhaW5lcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzBweCwgMCwgMCkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIHRvZ2dsZSBiYXIgKi9cclxuXHJcbiAgLyogZXJyb3IgZm9udC1zaXplICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWVycm9ye1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC8qIGVycm9yIGZvbnQtc2l6ZSAqL1xyXG5cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5tZC1kcnBwaWNrZXIuZG91YmxlIHtcclxuICAgIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5tZC1kcnBwaWNrZXIgdGQuYWN0aXZlLFxyXG4gIDpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyIHRkLmFjdGl2ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM5YmU1ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLm1kLWRycHBpY2tlciAuYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjMgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZDogI2Q1MWM0MTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMHB4IDZweCAxMHB4IDBweCByZ2IoMCAwIDAgLyAxNCUpLCAwcHggMXB4IDE4cHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_feature_receipt_deposit_deposit_module_ts.js.map