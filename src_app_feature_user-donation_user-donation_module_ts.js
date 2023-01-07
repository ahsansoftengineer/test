"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["src_app_feature_user-donation_user-donation_module_ts"],{

/***/ 95084:
/*!***********************************************************************!*\
  !*** ./src/app/feature/user-donation/user-donation-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDonationRoutingModule": () => (/* binding */ UserDonationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/action.enum */ 31978);
/* harmony import */ var _user_donation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-donation.component */ 41179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39609);





const routes = [
    {
        path: '',
        component: _user_donation_component__WEBPACK_IMPORTED_MODULE_1__.UserDonationComponent,
        data: {
            permission: [
                src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.EDIT,
                src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD
            ],
            title: "Category List"
        }
    }
];
class UserDonationRoutingModule {
}
UserDonationRoutingModule.ɵfac = function UserDonationRoutingModule_Factory(t) { return new (t || UserDonationRoutingModule)(); };
UserDonationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserDonationRoutingModule });
UserDonationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserDonationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 41179:
/*!******************************************************************!*\
  !*** ./src/app/feature/user-donation/user-donation.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDonationComponent": () => (/* binding */ UserDonationComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _shared_components_dialogs_user_donation_dialog_user_donation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/dialogs/user-donation-dialog/user-donation-dialog.component */ 1081);
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/control/dd/dd.component */ 32231);
/* harmony import */ var _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/control/date/date.component */ 24280);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 15719);











function UserDonationComponent_div_27_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r4.date, " ");
} }
const _c0 = function (a0, a1) { return { "custom-link": a0, "no-link": a1 }; };
function UserDonationComponent_div_27_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserDonationComponent_div_27_tr_16_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const item_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r7.openDialog(item_r5.id, item_r5 == null ? null : item_r5.name, item_r5 == null ? null : item_r5.receipt_type, "undeposited"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserDonationComponent_div_27_tr_16_Template_a_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const item_r5 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r9.openDialog(item_r5.id, item_r5 == null ? null : item_r5.name, item_r5 == null ? null : item_r5.receipt_type, "unverified"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r5 == null ? null : item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](49, _c0, (item_r5 == null ? null : item_r5.undeposited) != 0 && (item_r5 == null ? null : item_r5.undeposited) != undefined, (item_r5 == null ? null : item_r5.undeposited) == 0 || (item_r5 == null ? null : item_r5.undeposited) == undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (item_r5 == null ? null : item_r5.undeposited) == undefined ? 0 : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](8, 13, item_r5 == null ? null : item_r5.undeposited, "1.0", "en-US"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](52, _c0, (item_r5 == null ? null : item_r5.unverified) != 0, (item_r5 == null ? null : item_r5.unverified) == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](12, 17, item_r5 == null ? null : item_r5.unverified, "1.0", "en-US"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](15, 21, item_r5 == null ? null : item_r5.day_0, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](18, 25, item_r5 == null ? null : item_r5.day_1, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](21, 29, item_r5 == null ? null : item_r5.day_2, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](24, 33, item_r5 == null ? null : item_r5.day_3, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](27, 37, item_r5 == null ? null : item_r5.day_4, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](30, 41, item_r5 == null ? null : item_r5.day_5, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](33, 45, item_r5 == null ? null : item_r5.day_6, "1.0", "en-US"));
} }
const _c1 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function UserDonationComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, UserDonationComponent_div_27_th_15_Template, 2, 1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, UserDonationComponent_div_27_tr_16_Template, 34, 55, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](35, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](38, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](41, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](44, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](67, _c1, ctx_r1._ss.lng === "en", ctx_r1._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 21, "S No"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](70, _c1, ctx_r1._ss.lng === "en", ctx_r1._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 23, "User Name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](73, _c1, ctx_r1._ss.lng === "en", ctx_r1._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 25, "Undeposited"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](76, _c1, ctx_r1._ss.lng === "en", ctx_r1._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 27, "Unverified"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.daysArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.userData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 29, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.undepositedTotal == undefined ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](23, 31, ctx_r1.undepositedTotal, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.unverifiedTotal == undefined ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](26, 35, ctx_r1.unverifiedTotal, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.day_0_Total == undefined ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](29, 39, ctx_r1.day_0_Total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.day_1_Total == undefined ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](32, 43, ctx_r1.day_1_Total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.day_2_Total == undefined ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](35, 47, ctx_r1.day_2_Total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.day_3_Total == undefined ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](38, 51, ctx_r1.day_3_Total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.day_4_Total == undefined ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](41, 55, ctx_r1.day_4_Total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.day_5_Total == undefined ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](44, 59, ctx_r1.day_5_Total, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.day_6_Total == undefined ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](47, 63, ctx_r1.day_6_Total, "1.0", "en-US"));
} }
const _c2 = function () { return { id: 1, title: "Cash/Cheque" }; };
const _c3 = function () { return { id: 4, title: "Material" }; };
const _c4 = function (a0, a1) { return [a0, a1]; };
class UserDonationComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_3__.BaseForm {
    constructor(injector) {
        super(injector);
        this.maxDate = new Date();
        this.daysArray = [];
        this.userData = [];
        this.param.endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.ADDITIONAL_INFO;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this._fs._form = this._fb.group({
            organisation_id: ['', this._vs._vals('Donation Org')],
            system_id: ['', this._vs._vals('Donation System')],
            date: ['', [this._vs._val('Date', { isField: 0 }), this._vs._val_Date({})]],
            receipt_type: ['', this._vs._vals('Receipt')],
            currency_id: ['', this._vs._vals('Currency')],
        });
    }
    onSubmit() {
        this._fs._form.markAllAsTouched();
        this._vs._submitted = true;
        let data = this._fs._form.getRawValue();
        data.date = this._fhs._dateOnly(data.date);
        if (this._fs._form.valid) {
            let modify;
            modify = this._http.create({ body: data, url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL, endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.DEPOSITED_DONATIONS });
            modify.subscribe({
                next: (res) => {
                    if (!!res.data) {
                        this.getDates(7, data.date);
                        this.userData = res.data.records;
                        this.CalTotalAmount(res.data.records);
                    }
                    if (res?.data?.records.length == 0)
                        this._swl.noDataFound();
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
    getDates(days, sdate) {
        for (var i = 0; i < days; i++) {
            let temp = {};
            var date = new Date(sdate);
            date.setDate(date.getDate() - i);
            temp.date = this._fhs._dateOnlyWithMonth(date);
            this.daysArray[i] = temp;
        }
    }
    CalTotalAmount(data) {
        this._fhs;
        let undepositedAmArr = [], unverifiedAmArr = [], day_0_arr = [], day_1_arr = [], day_2_arr = [], day_3_arr = [], day_4_arr = [], day_5_arr = [], day_6_arr = [];
        for (let i = 0; i < data.length; i++) {
            undepositedAmArr[i] = data[i].undeposited ? data[i].undeposited : 0;
            unverifiedAmArr[i] = data[i].unverified;
            day_0_arr[i] = data[i].day_0;
            day_1_arr[i] = data[i].day_1;
            day_2_arr[i] = data[i].day_2;
            day_3_arr[i] = data[i].day_3;
            day_4_arr[i] = data[i].day_4;
            day_5_arr[i] = data[i].day_5;
            day_6_arr[i] = data[i].day_6;
        }
        this.undepositedTotal = undepositedAmArr.reduce((a, b) => a + b, 0);
        this.unverifiedTotal = unverifiedAmArr.reduce((a, b) => a + b, 0);
        this.day_0_Total = day_0_arr.reduce((a, b) => a + b, 0);
        this.day_1_Total = day_1_arr.reduce((a, b) => a + b, 0);
        this.day_2_Total = day_2_arr.reduce((a, b) => a + b, 0);
        this.day_3_Total = day_3_arr.reduce((a, b) => a + b, 0);
        this.day_4_Total = day_4_arr.reduce((a, b) => a + b, 0);
        this.day_5_Total = day_5_arr.reduce((a, b) => a + b, 0);
        this.day_6_Total = day_6_arr.reduce((a, b) => a + b, 0);
    }
    openDialog(id, name, rec_type, amounttype) {
        this._http.get({
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.DEPOSIT_DONATION_DETAIL,
            query: {
                person_id: id,
                receipt_type: rec_type,
                type: amounttype
            }
        }).subscribe((res) => {
            this.detailData = res.data.records;
            let config = {
                panelClass: 'dialog-responsive',
                data: { source: this.detailData, title: name },
            };
            const dialogRef = this._dialog.open(_shared_components_dialogs_user_donation_dialog_user_donation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.UserDonationDialogComponent, config);
            dialogRef.afterClosed().subscribe((result) => { });
        });
    }
}
UserDonationComponent.ɵfac = function UserDonationComponent_Factory(t) { return new (t || UserDonationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector)); };
UserDonationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UserDonationComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 24, consts: [[1, "row"], [1, "col-sm-12", "col-lg-12", "p-0"], [1, "card", "card__styling"], [1, "card-body", "custom__card__body__styling"], [1, "card-title"], [2, "border-top", "0px !important"], ["autocomplete", "off", 3, "formGroup"], [1, "row", "card-body", "py-0"], [1, "col-lg-3", "col-md-4", "p-0", "my-1"], ["field", "organisation_id", "lbl", "Donation Org", 3, "url", "child"], ["field", "system_id", "lbl", "Donation Sytem", 3, "url", "load"], ["sys", ""], [1, "col-sm-3", "col-md-3", "p-0", "my-1", "mt-2"], ["field", "date", "lbl", "Choose a date", 3, "max"], ["field", "receipt_type", "lbl", "Receipt Type", 3, "prelist"], ["field", "currency_id", "lbl", "Currency", 3, "url"], [1, "card-body"], [1, "action-form"], [1, "form-group", "m-b-0", "text_align"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "waves-effect", "waves-light", "custon__btns__class", 3, "ngClass", "click"], ["class", "card-body pt-0 make__scroll", 4, "ngIf"], [1, "card-body", "pt-0", "make__scroll"], [1, "mat-table"], [1, "mat-header-row"], [1, "mat-header-cell", "pl-4", 3, "ngClass"], [1, "mat-header-cell", 3, "ngClass"], ["class", "mat-header-cell", 4, "ngFor", "ngForOf"], ["class", "mat-row", 4, "ngFor", "ngForOf"], [1, "mat-row", 2, "background-color", "#a2c2d1!important"], [1, "mat-cell", "pl-4", 2, "font-size", "20px", "font-weight", "600"], [1, "mat-cell", "font-bold"], [1, "mat-header-cell"], [1, "mat-row"], [1, "mat-cell", "pl-4"], [1, "mat-cell"], ["href", "javascript:void(0)", 3, "ngClass", "click"]], template: function UserDonationComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "di-dd", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "di-dd", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "di-date", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "di-dd", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "di-dd", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserDonationComponent_Template_button_click_24_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, UserDonationComponent_div_27_Template, 48, 79, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 12, "Users donation"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx._fs._form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", ctx.URLz.ORG)("child", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", ctx.URLz.ORG_SYSTEM)("load", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("prelist", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](18, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](16, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](17, _c3)));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", ctx.URLz.CURRENCY);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](21, _c1, ctx._ss.lng === "en", ctx._ss.lng === "ur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 14, "Filter"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userData.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_4__.DdComponent, _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_5__.DateComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe], styles: [".upload-large[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n  .img-fluid[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    text-align: auto;\r\n  }\r\n  .make__scroll[_ngcontent-%COMP%]{\r\n    overflow-x: scroll;\r\n  }\r\n  \r\n  .make__scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track{\r\n    box-shadow: inset 0 0 0px #ff000000 !important;\r\n  }\r\n  \r\n  .card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n  \r\n  .text_align[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n  .custon__btns__class[_ngcontent-%COMP%]{\r\nwidth: 100px;\r\n\r\n}\r\n  @media(max-width: 768px){\r\n.text_align[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n}\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n      padding: 5px 0 7px 0 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n    top: 30px !important;\r\n    margin-top: -15px !important;\r\n    font-weight: 700 !important;\r\n    font-size: 15px;\r\n    color: #303030ad;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n      overflow: visible !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-select-panel{\r\n    width: 100% !important;\r\n    min-width: 100% !important;\r\n    transform: translate(15px, 40px) !important;\r\n    background: #ffffff !important;\r\n    border: 1px solid #00000033;\r\n    box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-select-value{\r\n    font-size: 16px;\r\n    font-weight: 600 !important;\r\n    overflow: hidden !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-input-element{\r\n    font-size: 16px !important;\r\n    font-weight: 600 !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-option-text{\r\n    color: #0c0c0c;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\n  color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n    color: #f44836 !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n    color: #f44836 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n    color: #0c0c0c !important;\r\n    overflow: visible !important;\r\n    \r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label{\r\n    overflow: visible !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n    color: #0c0c0c !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n    color: #0c0c0c77;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .ng-touched.ng-valid{\r\n    color: #0c0c0c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n    background-color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n    background-color: #024d7071 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n    color: #bfc1c4;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n    transform: translate3d(30px, 0, 0) !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n      width: 50px !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-error{\r\n      font-size: 10px;\r\n  }\r\n  \r\n  .card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n  .text-red[_ngcontent-%COMP%]{\r\n    color: #c53b55;\r\n}\r\n  \r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n  \r\n  \r\n  .custon__add__btns__class[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  padding: 3px 5px;\r\n  background: transparent;\r\n  border: 0px;\r\n  box-shadow: 0px 0px 0px transparent !important;\r\n}\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:hover{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:active{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:focus{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n  [_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper{\r\n  padding: 0px 15px;\r\n  color: white !important;\r\n  background: #00c292 !important;\r\n  display: block;\r\n  font-size: 15px;\r\n  border-radius: 3px;\r\n  transition: 0.5s;\r\n}\r\n  [_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper:hover{\r\n  box-shadow: 0px 0px 10px -4px #000000a6;\r\n}\r\n  [_nghost-%COMP%]     .custon__add__btns__class .mat-ripple.mat-button-ripple{\r\n  display: none !important;\r\n  opacity: 0 !important;\r\n}\r\n  .cdk-mouse-focused.cdk-focused[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{\r\n  opacity: 0 !important;\r\n}\r\n  \r\n  \r\n  \r\n  .slection__styled   [_nghost-%COMP%]      .search.ng-touched{\r\n    color: #1a1a1a !important;\r\n\r\n}\r\n  .mat-header-cell[_ngcontent-%COMP%]{\r\n    background: #024e70 !important;\r\n    color: white !important;\r\n}\r\n  .search[_ngcontent-%COMP%]{\r\n    color: #ffffff !important;\r\n    border-bottom: 1px solid whitesmoke;\r\n  }\r\n  [_nghost-%COMP%]      .mat-sort-header-arrow{\r\n    color: white;\r\n}\r\n  [_nghost-%COMP%]      .mat-sort-header-content{\r\n    color: white !important;\r\n}\r\n  [_nghost-%COMP%]      .search::-moz-placeholder{\r\n    color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search:-ms-input-placeholder{\r\n    color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search::placeholder{\r\n    color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search.ng-touched{\r\n    color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search .ng-star-inserted{\r\n    color: #000 !important;\r\n}\r\n  \r\n  \r\n  .mat_table[_ngcontent-%COMP%]{\r\n    max-height: 490px;\r\n    height: auto;\r\n}\r\n  tr.mat-header-row[_ngcontent-%COMP%]{\r\n    height: 40px !important;\r\n}\r\n  [_nghost-%COMP%]      tr.mat-row, tr.mat-footer-row[_ngcontent-%COMP%]{\r\n    height: 40px !important;\r\n}\r\n  .mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{\r\n    white-space: nowrap !important;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(odd){\r\n    background-color: #ffffff00 !important;\r\n    transition: 0.1s;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(even){\r\n    background-color: #b3eeff2c !important;\r\n    border-top: 2px solid #0000000d !important;\r\n    border-bottom: 2px solid #0000000d !important;\r\n    transition: 0.1s;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(even):hover{\r\n    box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(odd):hover{\r\n    box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n  \r\n  \r\n  [_nghost-%COMP%]      .switch.switch-small.checked{\r\n    background-color: #03a9f3 !important;\r\n}\r\n  \r\n  \r\n  .custom__select__class[_ngcontent-%COMP%]{\r\n    border-radius: 3px;\r\n    padding: 4px;\r\n    border: 1px solid #0000004b;\r\n    background: white;\r\n}\r\n  .custom__select__class[_ngcontent-%COMP%]   .cus_opt[_ngcontent-%COMP%]{\r\n    border-radius: 4px;\r\n    background: #ffffff;\r\n    box-shadow: 0px 0px 10px black;\r\n}\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-paginator-range-label{\r\n    margin: 0px !important;\r\n}\r\n  \r\n  .custom-link[_ngcontent-%COMP%] {\r\n  color: #024e70;\r\n  font-weight: 600;\r\n  text-decoration: underline;\r\n}\r\n  .no-link[_ngcontent-%COMP%]{\r\n  pointer-events: none;\r\n}\r\n  .no-link[_ngcontent-%COMP%], .no-link[_ngcontent-%COMP%]:hover{\r\n  color: rgba(0,0,0,.87);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZG9uYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQSxLQUFLO0VBQ0w7SUFDRSw4Q0FBOEM7RUFDaEQ7RUFDQSxLQUFLO0VBQ0w7SUFDRSxrQ0FBa0M7QUFDdEM7RUFDRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBQ0Ysd0JBQXdCO0VBQ3hCO0VBQ0UsaUJBQWlCO0FBQ25CO0VBQ0E7QUFDQSxZQUFZO0FBQ1osc0JBQXNCO0FBQ3RCO0VBQ0E7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0Esd0JBQXdCO0VBQ3RCLDRCQUE0QjtFQUM1QjtNQUNJLCtCQUErQjtFQUNuQztFQUNBLHdCQUF3QjtFQUN4QjtJQUNFLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtNQUNJLDRCQUE0QjtFQUNoQztFQUNBLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDJDQUEyQztJQUMzQyw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGtEQUFrRDtFQUNwRDtFQUNBO0lBQ0UsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTs7S0FFRztFQUNILHdCQUF3QjtFQUN4Qjs7RUFFQSx5QkFBeUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUVBOztJQUVFLHlCQUF5QjtFQUMzQjtFQUNBLHdCQUF3QjtFQUN4QjtJQUNFLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBLGtCQUFrQjtFQUNsQjtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBLGtCQUFrQjtFQUNsQjtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7RUFFQSxhQUFhO0VBQ2I7SUFDRSxjQUFjO0VBQ2hCO0VBQ0EsYUFBYTtFQUViLGVBQWU7RUFDZjtJQUNFLDZDQUE2QztFQUMvQztFQUNBO01BQ0ksc0JBQXNCO0VBQzFCO0VBQ0EsZUFBZTtFQUVmLG9CQUFvQjtFQUNwQjtNQUNJLGVBQWU7RUFDbkI7RUFDQSxvQkFBb0I7RUFLcEI7SUFDRSxrQ0FBa0M7QUFDdEM7RUFDQTtJQUNJLGNBQWM7QUFDbEI7RUFDQSxpQkFBaUI7RUFDakI7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2Qyx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtFQUNGLGlCQUFpQjtFQUVqQix3QkFBd0I7RUFDdEI7RUFDQSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsOENBQThDO0FBQ2hEO0VBQ0E7RUFDRSx3Q0FBd0M7SUFDdEMsb0NBQW9DO0FBQ3hDO0VBQ0E7RUFDRSx3Q0FBd0M7SUFDdEMsb0NBQW9DO0FBQ3hDO0VBQ0E7RUFDRSx3Q0FBd0M7SUFDdEMsb0NBQW9DO0FBQ3hDO0VBQ0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7RUFDQTtFQUNFLHVDQUF1QztBQUN6QztFQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2QjtFQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0VBQ0U7Ozs7Ozs7Ozs7Ozs7R0FhQztFQUNILHdCQUF3QjtFQUV4Qix5QkFBeUI7RUFDekI7SUFDSSx5QkFBeUI7O0FBRTdCO0VBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsdUJBQXVCO0FBQzNCO0VBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUNBQW1DO0VBQ3JDO0VBQ0Y7SUFDSSxZQUFZO0FBQ2hCO0VBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7RUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtFQUZBO0lBQ0kseUJBQXlCO0FBQzdCO0VBRkE7SUFDSSx5QkFBeUI7QUFDN0I7RUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtFQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0VBQ0EseUJBQXlCO0VBRXpCLDBCQUEwQjtFQUMxQjtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0VBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7RUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtFQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0VBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0FBQ3BCO0VBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsMENBQTBDO0lBQzFDLDZDQUE2QztJQUM3QyxnQkFBZ0I7QUFDcEI7RUFDQTtJQUNJLG9DQUFvQztBQUN4QztFQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0VBQ0EsMEJBQTBCO0VBRTFCLG9DQUFvQztFQUNwQztJQUNJLG9DQUFvQztBQUN4QztFQUNBLG9DQUFvQztFQUVwQyx1QkFBdUI7RUFDdkI7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixpQkFBaUI7QUFDckI7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0VBQ0EsdUJBQXVCO0VBRXZCLG9CQUFvQjtFQUNwQjtJQUNJLHNCQUFzQjtBQUMxQjtFQUNBLG9CQUFvQjtFQUdwQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCO0VBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7RUFFQTs7RUFFRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoidXNlci1kb25hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1sYXJnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5pbWctZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogYXV0bztcclxuICB9XHJcbiAgLm1ha2VfX3Njcm9sbHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICB9XHJcbiAgLyogICovXHJcbiAgLm1ha2VfX3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4ICNmZjAwMDAwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiAgKi9cclxuICAuY2FyZF9fc3R5bGluZ3tcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwM2Q7XHJcbn1cclxuICAuY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogY2xpcDtcclxuICB9XHJcbiAgLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4vKiBidXR0b25zIHNhdmUgQ2FuY2VsICovXHJcbi50ZXh0X2FsaWdue1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5jdXN0b25fX2J0bnNfX2NsYXNze1xyXG53aWR0aDogMTAwcHg7XHJcbi8qIHBhZGRpbmc6IDVweCAwcHg7ICovXHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4udGV4dF9hbGlnbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG59XHJcbi8qIGJ1dHRvbnMgc2F2ZSBDYW5jZWwgKi9cclxuICAvKiBmaWVsZHMgbGluZSBoZWlnaHQgd29yayAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwIDdweCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gICAgdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMzMDMwMzBhZDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcntcclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIC8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC1wYW5lbHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMzM7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggLTRweCAjMDAwMDAwOWMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC12YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWlucHV0LWVsZW1lbnR7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LW9wdGlvbi10ZXh0e1xyXG4gICAgY29sb3I6ICMwYzBjMGM7XHJcbiAgfVxyXG4gIC8qIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuICAvKiBmaWVsZHMgYm9yZGVyIGhvdmVyICovXHJcbiAgOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2ssXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcclxuICBjb2xvcjogIzBlYjllYyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gICAgY29sb3I6ICNmNDQ4MzYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXHJcbiAgOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBmaWVsZHMgYm9yZGVyIGhvdmVyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gICAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBmb250LXNpemU6IDE1cHg7ICovXHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3d7XHJcbiAgICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBmaWVsZHMgYm9yZGVyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le1xyXG4gICAgY29sb3I6ICMwYzBjMGM3NztcclxuICB9XHJcbiAgLyogZmllbGRzIGJvcmRlciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm5nLXRvdWNoZWQubmctdmFsaWR7XHJcbiAgICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlYjllYyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjRkNzA3MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyogZGlzYWJsZWQgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7XHJcbiAgICBjb2xvcjogI2JmYzFjNDtcclxuICB9XHJcbiAgLyogZGlzYWJsZWQgKi9cclxuXHJcbiAgLyogdG9nZ2xlIGJhciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMHB4LCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntcclxuICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogdG9nZ2xlIGJhciAqL1xyXG5cclxuICAvKiBlcnJvciBmb250LXNpemUgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZXJyb3J7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLyogZXJyb3IgZm9udC1zaXplICovXHJcblxyXG5cclxuXHJcblxyXG4gIC5jYXJkX19zdHlsaW5ne1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzZDtcclxufVxyXG4udGV4dC1yZWR7XHJcbiAgICBjb2xvcjogI2M1M2I1NTtcclxufVxyXG4vKiBIRUFERVIgU1RZTEUgKi9cclxuLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZ3tcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGNsaXA7XHJcbiAgfVxyXG4gIC5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmcgaDJ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggN3B4IC03cHggIzAwMDAwMDU3O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuLyogSEVBREVSIFNUWUxFICovXHJcblxyXG4vKiBIRUFERVIgQlVUVE9OIFNUWUxFICovXHJcbiAgLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzc3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3M6YWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczpmb2N1c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogIzAwYzI5MiAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG46aG9zdCAvZGVlcC8gLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzcyAubWF0LWJ1dHRvbi13cmFwcGVyOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAtNHB4ICMwMDAwMDBhNjtcclxufVxyXG46aG9zdCAvZGVlcC8gLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzcyAubWF0LXJpcHBsZS5tYXQtYnV0dG9uLXJpcHBsZXtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jZGstbW91c2UtZm9jdXNlZC5jZGstZm9jdXNlZCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e1xyXG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxufVxyXG4gIC8qIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3N7XHJcbiAgICAgIG1hcmdpbjogLTdweCAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGMyOTI7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwYzI5MjtcclxuICAgICAgYm94LXNoYWRvdzowcHggMHB4IDEwcHggLTVweCAjMDAwMDAwOGY7XHJcbiAgfVxyXG4gIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3M6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gIzFlOWQ3ZDgwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3M6YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxY2I5OSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDFjYjk5ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gIzFlOWQ3ZDgwICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuLyogSEVBREVSIEJVVFRPTiBTVFlMRSAqL1xyXG5cclxuLyogVEFCTEUgaGVhZGVyIFNUWUxJTkcgKi9cclxuLnNsZWN0aW9uX19zdHlsZWQgOmhvc3QgL2RlZXAvICAuc2VhcmNoLm5nLXRvdWNoZWR7XHJcbiAgICBjb2xvcjogIzFhMWExYSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4ubWF0LWhlYWRlci1jZWxse1xyXG4gICAgYmFja2dyb3VuZDogIzAyNGU3MCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaHtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcclxuICB9XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zb3J0LWhlYWRlci1hcnJvd3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc29ydC1oZWFkZXItY29udGVudHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLnNlYXJjaDo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLnNlYXJjaC5uZy10b3VjaGVke1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5zZWFyY2ggLm5nLXN0YXItaW5zZXJ0ZWR7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIFRBQkxFIGhlYWRlciBTVFlMSU5HICovXHJcblxyXG4vKiBsaXN0IHN0eWxpbmcgaW4gdGFibGUgKi9cclxuLm1hdF90YWJsZXtcclxuICAgIG1heC1oZWlnaHQ6IDQ5MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbnRyLm1hdC1oZWFkZXItcm93e1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICB0ci5tYXQtcm93LCB0ci5tYXQtZm9vdGVyLXJvd3tcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwsIC5tYXQtY2VsbHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcztcclxufVxyXG4ubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlZWZmMmMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDAwMDAwMGQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwMDAwMGQgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IDAuMXM7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzowcHggMHB4IDhweCAwcHggIzAwMDAwMDVlO1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChvZGQpOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzowcHggMHB4IDhweCAwcHggIzAwMDAwMDVlO1xyXG59XHJcbi8qIGxpc3Qgc3R5bGluZyBpbiB0YWJsZSAqL1xyXG5cclxuLyogY2hhY2sgb24gb3Igb2ZmIGJ1dHRvbiAgc3R5bGluZyAqL1xyXG46aG9zdCAvZGVlcC8gIC5zd2l0Y2guc3dpdGNoLXNtYWxsLmNoZWNrZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWYzICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogY2hhY2sgb24gb3Igb2ZmIGJ1dHRvbiAgc3R5bGluZyAqL1xyXG5cclxuLyogc2VsZWN0IGJveCBzdHlsaW5nICovXHJcbi5jdXN0b21fX3NlbGVjdF9fY2xhc3N7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNGI7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uY3VzdG9tX19zZWxlY3RfX2NsYXNzIC5jdXNfb3B0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBibGFjaztcclxufVxyXG4vKiBzZWxlY3QgYm94IHN0eWxpbmcgKi9cclxuXHJcbi8qIHBhZ2luYXRpb24gYXJlYSAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVse1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4vKiBwYWdpbmF0aW9uIGFyZWEgKi9cclxuXHJcblxyXG4uY3VzdG9tLWxpbmsge1xyXG4gIGNvbG9yOiAjMDI0ZTcwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLm5vLWxpbmt7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5uby1saW5rLFxyXG4ubm8tbGluazpob3ZlcntcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG59Il19 */"] });


/***/ }),

/***/ 51088:
/*!***************************************************************!*\
  !*** ./src/app/feature/user-donation/user-donation.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDonationModule": () => (/* binding */ UserDonationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 75349);
/* harmony import */ var _user_donation_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-donation-routing.module */ 95084);
/* harmony import */ var _user_donation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-donation.component */ 41179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);





class UserDonationModule {
}
UserDonationModule.ɵfac = function UserDonationModule_Factory(t) { return new (t || UserDonationModule)(); };
UserDonationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UserDonationModule });
UserDonationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _user_donation_routing_module__WEBPACK_IMPORTED_MODULE_1__.UserDonationRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserDonationModule, { declarations: [_user_donation_component__WEBPACK_IMPORTED_MODULE_2__.UserDonationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _user_donation_routing_module__WEBPACK_IMPORTED_MODULE_1__.UserDonationRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_feature_user-donation_user-donation_module_ts.js.map