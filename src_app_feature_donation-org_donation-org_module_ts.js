"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["src_app_feature_donation-org_donation-org_module_ts"],{

/***/ 20931:
/*!*********************************************************************!*\
  !*** ./src/app/feature/donation-org/donation-org-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "DonationOrgRoutingModule": () => (/* binding */ DonationOrgRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _org_add_org_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./org-add/org-add.component */ 49707);
/* harmony import */ var _org_list_org_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./org-list/org-list.component */ 6189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39609);





const routes = [
    {
        path: "",
        children: [
            {
                path: '',
                redirectTo: 'org',
                pathMatch: 'full'
            },
            {
                path: "org_add",
                component: _org_add_org_add_component__WEBPACK_IMPORTED_MODULE_0__.OrgAddComponent,
                data: {
                    title: "Organaization Add",
                    urls: [
                        { title: "Organaization" },
                        { title: "Add" },
                    ]
                }
            },
            {
                path: "org",
                component: _org_list_org_list_component__WEBPACK_IMPORTED_MODULE_1__.OrgListComponent,
                data: {
                    title: "Organaization",
                    urls: [
                        { title: "Organaization" },
                        { title: "List" },
                    ],
                },
            },
        ]
    }
];
class DonationOrgRoutingModule {
}
DonationOrgRoutingModule.ɵfac = function DonationOrgRoutingModule_Factory(t) { return new (t || DonationOrgRoutingModule)(); };
DonationOrgRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DonationOrgRoutingModule });
DonationOrgRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DonationOrgRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 52271:
/*!****************************************************************!*\
  !*** ./src/app/feature/donation-org/donation-org.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonationOrgComponent": () => (/* binding */ DonationOrgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 16873);


class DonationOrgComponent {
}
DonationOrgComponent.ɵfac = function DonationOrgComponent_Factory(t) { return new (t || DonationOrgComponent)(); };
DonationOrgComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonationOrgComponent, selectors: [["di-donation-org"]], decls: 1, vars: 0, template: function DonationOrgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 75125:
/*!*************************************************************!*\
  !*** ./src/app/feature/donation-org/donation-org.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonationOrgModule": () => (/* binding */ DonationOrgModule)
/* harmony export */ });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 75349);
/* harmony import */ var _donation_org_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donation-org-routing.module */ 20931);
/* harmony import */ var _donation_org_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donation-org.component */ 52271);
/* harmony import */ var _org_add_org_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./org-add/org-add.component */ 49707);
/* harmony import */ var _org_list_org_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./org-list/org-list.component */ 6189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 39609);






class DonationOrgModule {
}
DonationOrgModule.ɵfac = function DonationOrgModule_Factory(t) { return new (t || DonationOrgModule)(); };
DonationOrgModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DonationOrgModule });
DonationOrgModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _donation_org_routing_module__WEBPACK_IMPORTED_MODULE_1__.DonationOrgRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DonationOrgModule, { declarations: [_donation_org_component__WEBPACK_IMPORTED_MODULE_2__.DonationOrgComponent,
        _org_add_org_add_component__WEBPACK_IMPORTED_MODULE_3__.OrgAddComponent,
        _org_list_org_list_component__WEBPACK_IMPORTED_MODULE_4__.OrgListComponent], imports: [_donation_org_routing_module__WEBPACK_IMPORTED_MODULE_1__.DonationOrgRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 49707:
/*!*******************************************************************!*\
  !*** ./src/app/feature/donation-org/org-add/org-add.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgAddComponent": () => (/* binding */ OrgAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/control/txt/txt.component */ 55806);
/* harmony import */ var _shared_components_control_dd_multi_ii_dd_multi_ii_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/control/dd-multi-ii/dd-multi-ii.component */ 22406);
/* harmony import */ var _shared_components_utils_di_form_actions_di_form_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/utils/di-form-actions/di-form-actions.component */ 34362);








class OrgAddComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_0__.BaseForm {
    constructor(injector) {
        super(injector);
        this.param.endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.ORG;
    }
    ngOnInit() {
        this._activeId = this._fhs._getURLParam('id');
        this._fhs._pathLocation = '/organaization/org';
        this.initform();
        if (this.emptyCheck(this._activeId)) {
            this.patchData();
        }
    }
    initform() {
        this._fs._form = this._fb.group({
            title: ['', this._vs._val('Donation Org', { minChar: 3, maxChar: 100 })],
            system_id: this._fb.array([], this._vs._vals('System')),
        });
    }
    patchData() {
        this._http.get({ ...this.param, resource: this._activeId })
            .subscribe(res => {
            let data = res.data.row;
            this._fs._form.patchValue({
                title: data.title,
                system_id: data.system_id
            });
            data.organisation_system.forEach(org => {
                this._fs._form.get('system_id')
                    .push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(org.id));
            });
        });
    }
}
OrgAddComponent.ɵfac = function OrgAddComponent_Factory(t) { return new (t || OrgAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector)); };
OrgAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: OrgAddComponent, selectors: [["app-org-add"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 3, consts: [[1, "row"], [1, "col-sm-12", "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [3, "formGroup", "ngSubmit"], [1, "row", "card-body"], ["field", "title", "lbl", "Organization", "type", "text"], ["field", "system_id", "lbl", "Organization System", 3, "url"]], template: function OrgAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function OrgAddComponent_Template_form_ngSubmit_7_listener() { return ctx._onSubmity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "di-txt", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "di-dd-multi-ii", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "di-form-action");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", !ctx._activeId ? "Add" : "Edit", " Organization ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx._fs._form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", ctx.URLz.ORG_SYSTEM);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_2__.TxtComponent, _shared_components_control_dd_multi_ii_dd_multi_ii_component__WEBPACK_IMPORTED_MODULE_3__.DdMultiIiComponent, _shared_components_utils_di_form_actions_di_form_actions_component__WEBPACK_IMPORTED_MODULE_4__.DiFormActionsComponent], styles: [".example-form[_ngcontent-%COMP%] {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZy1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6Im9yZy1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6189:
/*!*********************************************************************!*\
  !*** ./src/app/feature/donation-org/org-list/org-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgListComponent": () => (/* binding */ OrgListComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/class/base-list-class */ 42286);
/* harmony import */ var src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/enums/action.enum */ 31978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directive/permission.directive */ 47399);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 71144);
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toggle-switch */ 86345);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/table/tbl-txt/tbl-txt.component */ 33086);
/* harmony import */ var _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/table/tbl-dd/tbl-dd.component */ 18533);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/table/di-paginator/di-paginator.component */ 65141);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 15719);















function OrgListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OrgListComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r13._switch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "+ Add"), " ");
} }
function OrgListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "S No"));
} }
function OrgListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", i_r16 + ctx_r2._tbls[ctx_r2.URLz.$].index * ctx_r2._tbls[ctx_r2.URLz.$].size + 1, " ");
} }
function OrgListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Status"));
} }
function OrgListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ui-switch", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function OrgListComponent_td_16_Template_ui_switch_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19); const item_r17 = restoredCtx.$implicit; return item_r17.activate = $event; })("change", function OrgListComponent_td_16_Template_ui_switch_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19); const item_r17 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r20._statusChanged($event, item_r17.id, ctx_r20.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", item_r17.activate);
} }
function OrgListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OrgListComponent_th_18_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); ctx_r21._reset(ctx_r21.URLz.$); return ctx_r21._refresh(ctx_r21.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OrgListComponent_th_18_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r23._refresh(ctx_r23.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function OrgListComponent_td_19_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OrgListComponent_td_19_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r26._switch(item_r24.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function OrgListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, OrgListComponent_td_19_i_1_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("permission", ctx_r6.ACTION.EDIT);
} }
function OrgListComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "di-tbl-txt", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("group", ctx_r7._tbls[ctx_r7.URLz.$] == null ? null : ctx_r7._tbls[ctx_r7.URLz.$].form);
} }
function OrgListComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r29.title, " ");
} }
function OrgListComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "di-tbl-dd", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("group", ctx_r9._tbls[ctx_r9.URLz.$] == null ? null : ctx_r9._tbls[ctx_r9.URLz.$].form)("load", false)("prelist", ctx_r9._ss.ORG_SYSTEM);
} }
function OrgListComponent_td_25_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const it_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", it_r32.title, " ");
} }
function OrgListComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, OrgListComponent_td_25_p_1_Template, 2, 1, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", item_r30.organisation_system);
} }
function OrgListComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 39);
} }
function OrgListComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 40);
} }
class OrgListComponent extends src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_1__.BaseListClass {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    ngOnInit() {
        this._pathLocation = "/organaization/org_add";
        this._component = "Donation Org";
        this.initTables();
    }
    initTables() {
        this._reset(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].columns = ['id', 'actions', 'title', 'system_id'];
        if (this._ss.checkPermission(src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_2__.ACTION.STATUS)) {
            this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].columns?.splice(2, 0, 'activate');
        }
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.ORG;
        this._formCreator(this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$]);
        this._refresh(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.$);
    }
}
OrgListComponent.ɵfac = function OrgListComponent_Factory(t) { return new (t || OrgListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector)); };
OrgListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: OrgListComponent, selectors: [["app-org-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 9, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", 2, "background-color", "white"], [1, "card-title", "mb-0"], ["mat-raised-button", "", "type", "button", "class", "btn btn-info float-right", 3, "click", 4, "permission"], [1, "card-body", "pt-0"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "activate"], ["style", "width: 100px;", "mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["class", "pl-3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "pl-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 4, "matHeaderCellDef"], ["matColumnDef", "system_id"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "tbl", "paginateEvent"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "float-right", 3, "click"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 2, "width", "100px"], ["color", "green", "size", "small", 3, "ngModel", "ngModelChange", "change"], ["mat-header-cell", "", 1, "pl-3"], [1, "ti-reload", "text-info", "pointer", "px-2", 3, "click"], [1, "ti-search", "text-info", "pointer", "px-2", 3, "click"], ["mat-cell", "", 1, "pl-3"], ["class", "ti-pencil text-info px-2 pointer", 3, "click", 4, "permission"], [1, "ti-pencil", "text-info", "px-2", "pointer", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before"], ["field", "title", "lbl", "Title", 3, "group"], ["field", "system_id", "lbl", "System", 3, "group", "load", "prelist"], ["class", "p-1 mr-1 innerItems", 4, "ngFor", "ngForOf"], [1, "p-1", "mr-1", "innerItems"], ["mat-header-row", ""], ["mat-row", ""]], template: function OrgListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, OrgListComponent_button_7_Template, 3, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("matSortChange", function OrgListComponent_Template_table_matSortChange_10_listener($event) { return ctx._sort($event, ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, OrgListComponent_th_12_Template, 3, 3, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, OrgListComponent_td_13_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](14, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, OrgListComponent_th_15_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, OrgListComponent_td_16_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](17, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, OrgListComponent_th_18_Template, 3, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, OrgListComponent_td_19_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](20, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, OrgListComponent_th_21_Template, 2, 1, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, OrgListComponent_td_22_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](23, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, OrgListComponent_th_24_Template, 2, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, OrgListComponent_td_25_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, OrgListComponent_tr_26_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, OrgListComponent_tr_27_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "di-paginator", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("paginateEvent", function OrgListComponent_Template_di_paginator_paginateEvent_28_listener() { return ctx._refresh(ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 7, ctx._component), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("permission", ctx.ACTION.ADD);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.URLz.$].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.URLz.$].columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.URLz.$].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tbl", ctx._tbls[ctx.URLz.$]);
    } }, directives: [_shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_3__.PermissionDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__.UiSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_5__.TblTxtComponent, _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_6__.TblDDComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_7__.DiPaginatorComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmctbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_feature_donation-org_donation-org_module_ts.js.map