"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["src_app_feature_allow-permission_allow-permission_module_ts"],{

/***/ 43770:
/*!*****************************************************************************!*\
  !*** ./src/app/feature/allow-permission/allow-permission-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllowPermissionRoutingModule": () => (/* binding */ AllowPermissionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/action.enum */ 31978);
/* harmony import */ var _allow_permission_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allow-permission.component */ 31161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39609);





const routes = [
    {
        path: '',
        component: _allow_permission_component__WEBPACK_IMPORTED_MODULE_1__.AllowPermissionComponent,
        data: {
            title: "Allow Purpose",
            permission: [
                src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD,
                src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.EDIT,
            ],
        }
    }
];
class AllowPermissionRoutingModule {
}
AllowPermissionRoutingModule.ɵfac = function AllowPermissionRoutingModule_Factory(t) { return new (t || AllowPermissionRoutingModule)(); };
AllowPermissionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AllowPermissionRoutingModule });
AllowPermissionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AllowPermissionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 31161:
/*!************************************************************************!*\
  !*** ./src/app/feature/allow-permission/allow-permission.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllowPermissionComponent": () => (/* binding */ AllowPermissionComponent)
/* harmony export */ });
/* harmony import */ var src_app_class_base_form_treeview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base.form.treeview */ 28466);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/control/dd/dd.component */ 32231);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 37661);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 63139);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tree */ 63236);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 29383);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 63953);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 15719);













function AllowPermissionComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllowPermissionComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11._fhs._prevRoute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !ctx_r5.current_path.includes("allow_system") ? "text-center" : "");
} }
function AllowPermissionComponent_mat_icon_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AllowPermissionComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllowPermissionComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13._fhs._switchToList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !ctx_r7.current_path.includes("allow_system") ? "text-center" : "");
} }
function AllowPermissionComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllowPermissionComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.__switch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !ctx_r8.current_path.includes("allow_system") ? "text-center" : "");
} }
function AllowPermissionComponent_mat_tree_node_39_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tree-node", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-checkbox", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AllowPermissionComponent_mat_tree_node_39_Template_mat_checkbox_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const node_r17 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.leafSelected(node_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r17 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r9.checkSelection(node_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", node_r17.title, " ");
} }
function AllowPermissionComponent_mat_tree_node_40_mat_progress_bar_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 48);
} }
function AllowPermissionComponent_mat_tree_node_40_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tree-node", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AllowPermissionComponent_mat_tree_node_40_Template_mat_checkbox_change_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const node_r20 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.itemToggle(node_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AllowPermissionComponent_mat_tree_node_40_mat_progress_bar_6_Template, 1, 0, "mat-progress-bar", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r20 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r10._disabledNode(node_r20) || node_r20.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Analysis " + node_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r10.treeControl.isExpanded(node_r20) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", node_r20.isLoading)("checked", ctx_r10.parentAll(node_r20))("indeterminate", ctx_r10.parentPartially(node_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", node_r20.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", node_r20.isLoading);
} }
const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
class AllowPermissionComponent extends src_app_class_base_form_treeview__WEBPACK_IMPORTED_MODULE_0__.TreeView {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this._totalSelected = 2;
        this.applyClass = { 'col-lg-3': false, 'col-md-4': false, 'col-md-12': true, 'ml-1': true };
        this.param.endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.ALLOW_SYSTEM_USER;
    }
    // queryParam = {
    //   id:''
    // }
    ngOnInit() {
        this._fhs._pathLocation = '/user/allow_cash';
        this._fhs._prepath = '/user/user_add';
        this.current_path = window.location.pathname;
        //userId=147;orgId=12;sysId=5
        this._component = 'Allow / Disallow Receipt Parameter';
        this.database.user_id = null;
        this.database.treeCases = 0;
        this.user_ids = this._fhs._getURLParam('userId');
        this.org_id = this._fhs._getURLParam('orgId');
        this.system_id = this._fhs._getURLParam('sysId');
        this._fhs._queryParam.userId = this.user_ids;
        this._fhs._queryParam.orgId = this.org_id;
        this._fhs._queryParam.sysId = this.system_id;
        this.initForm();
        if (this.emptyCheck(this.user_ids) &&
            this.emptyCheck(this.org_id) &&
            this.emptyCheck(this.system_id)) {
            this.database.user_id = this.user_ids;
            this.patchData();
        }
        super.ngOnInit();
        this._fs._form.updateValueAndValidity();
    }
    initForm() {
        if (this.user_ids == null) {
            this._fs._form = this._fb.group({
                parameters: ['', this._vs._vals('Parameters')],
                system_id: ['', this._vs._vals('System')],
                organisation_id: ['', this._vs._vals('Organization')],
                permission_level: ['LE', this._vs._vals('Permission Level')],
                bg: ['', this._vs._vals('Business Group')],
                le: ['', this._vs._vals('Legal Entity')],
                ou: ['', this._vs._vals('Operating Unit')],
                su: ['', this._vs._vals('Sub Unit')],
            });
            this._fs._form.get('ou').disable();
            this._fs._form.get('su').disable();
        }
        else {
            this._fs._form = this._fb.group({
                parameters: ['', this._vs._vals('Parameters')],
                system_id: ['', this._vs._vals('System')],
                organisation_id: ['', this._vs._vals('Organization')],
                person_id: ['', this._vs._vals('User')],
            });
        }
    }
    // Only Allow Analysis User
    patchData() {
        this._fs._form.patchValue({
            // parameters: data.parameters,
            system_id: +this.system_id,
            organisation_id: +this.org_id,
            person_id: +this.user_ids,
        });
    }
    // Only Allow Permission
    authorizeEntity(changeEvent) {
        if (changeEvent.event?.isUserInput) {
            const f = this._fs._form;
            const val = changeEvent.id;
            if (val == 'LE') {
                f.get('ou').disable();
                f.get('su').disable();
            }
            else if (val == 'OU') {
                f.get('ou').enable();
                f.get('su').disable();
            }
            else if (val == 'SU') {
                f.get('ou').enable();
                f.get('su').enable();
            }
        }
        this._fs._form.updateValueAndValidity();
    }
    __switch() {
        this._router.navigate([
            this._fhs._pathLocation,
            { userId: this.user_ids,
                orgId: this.org_id,
                sysId: this.system_id
            }
        ]);
    }
}
AllowPermissionComponent.ɵfac = function AllowPermissionComponent_Factory(t) { return new (t || AllowPermissionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector)); };
AllowPermissionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AllowPermissionComponent, selectors: [["app-allow-permission"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 41, vars: 61, consts: [[1, "row"], [1, "col-sm-12", "col-lg-12"], [1, "card", "card__styling"], [1, "card-body", "custom__card__body__styling"], [1, "card-title"], [2, "border-top", "0px !important"], [1, "row", "card-body", "pt-0"], [1, "col-md-4"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["field", "parameters", "lbl", "Parameters", 3, "url", "ngClass"], ["field", "organisation_id", "lbl", "Organization", 3, "url", "child", "ngClass", "disabled"], ["field", "system_id", "lbl", "System", 3, "url", "load", "child", "disabled", "ngClass"], ["sys", ""], ["field", "permission_level", "lbl", "Permission Level", 3, "url", "load", "hide", "ngClass", "prelist", "changeEvent"], ["field", "bg", "lbl", "Business Group", 3, "url", "load", "child", "hide", "ngClass"], ["bg", ""], ["field", "le", "lbl", "Legal Entity", 3, "url", "load", "child", "hide", "ngClass"], ["le", ""], ["field", "ou", "lbl", "Operating Unit", 3, "url", "load", "hide", "child", "ngClass"], ["ou", ""], ["field", "su", "lbl", "Sub Unit", 3, "url", "load", "hide", "ngClass"], ["su", ""], ["field", "person_id", "lbl", "User", 3, "disabled", "hide", "parent_id", "url", "ngClass"], [1, "col-md-12", 3, "ngClass"], ["mat-raised-button", "", "type", "button", "class", "btn btn-border waves-effect waves-light custon__btns__class", 3, "ngClass", "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "waves-effect", "waves-light", 3, "ngClass", "disabled", "click"], [2, "margin-bottom", "0px", "font-size", "inherit", 3, "ngClass"], [4, "ngIf"], ["mat-raised-button", "", "type", "button", "class", "btn button-danger waves-effect waves-light custon__btns__class", 3, "ngClass", "click", 4, "ngIf"], [1, "col-md-8"], [1, "tree__view__scroll__and__class"], [3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-border", "waves-effect", "waves-light", "custon__btns__class", 3, "ngClass", "click"], [1, "fas", "fa-angle-double-left"], ["diameter", "20", 1, "warn"], ["mat-raised-button", "", "type", "button", 1, "btn", "button-danger", "waves-effect", "waves-light", "custon__btns__class", 3, "ngClass", "click"], [1, "fas", "fa-window-close"], [1, "fas", "fa-angle-double-right"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["color", "primary", 1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "matTreeNodeToggle", "", 3, "disabled"], [1, "mat-icon-rtl-mirror"], ["color", "primary", 3, "disabled", "checked", "indeterminate", "change"], ["mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate"]], template: function AllowPermissionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AllowPermissionComponent_Template_form_ngSubmit_11_listener() { return ctx._onSubmity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "di-dd", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "di-dd", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "di-dd", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "di-dd", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changeEvent", function AllowPermissionComponent_Template_di_dd_changeEvent_17_listener($event) { return ctx.authorizeEntity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "di-dd", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "di-dd", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "di-dd", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "di-dd", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "di-dd", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AllowPermissionComponent_button_28_Template, 2, 1, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllowPermissionComponent_Template_button_click_29_listener() { return ctx._process(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AllowPermissionComponent_mat_icon_33_Template, 2, 0, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AllowPermissionComponent_button_34_Template, 2, 1, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AllowPermissionComponent_button_35_Template, 2, 1, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-tree", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, AllowPermissionComponent_mat_tree_node_39_Template, 4, 2, "mat-tree-node", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, AllowPermissionComponent_mat_tree_node_40_Template, 7, 8, "mat-tree-node", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 54, "Allow / Disallow Receipt Parameter"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx._fs._form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.URLz.PARAMETER)("ngClass", ctx.applyClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.URLz.ORG)("child", _r0)("ngClass", ctx.applyClass)("disabled", ctx.user_ids);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.URLz.ORG_SYSTEM)("load", false)("child", _r1)("disabled", ctx.user_ids)("ngClass", ctx.applyClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.URLz.DEFAULT)("load", false)("hide", ctx._fhs._disable("permission_level"))("ngClass", ctx.applyClass)("prelist", ctx._ss.HIERARCHY);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.URLz.BG)("load", false)("child", _r2)("hide", ctx._fhs._disable("bg"))("ngClass", ctx.applyClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.URLz.LE)("load", false)("child", _r3)("hide", ctx._fhs._disable("le"))("ngClass", ctx.applyClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.URLz.OU)("load", false)("hide", ctx._fhs._disable("ou"))("child", _r4)("ngClass", ctx.applyClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.URLz.SU)("load", false)("hide", ctx._fhs._disable("su"))("ngClass", ctx.applyClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.user_ids)("hide", ctx._fhs._disable("person_id"))("parent_id", +ctx.user_ids)("url", ctx.URLz.ALLOW_SYSTEM_USER)("ngClass", ctx.applyClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !ctx.current_path.includes("allow_system") ? "text-center" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.current_path.includes("allow_system"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !ctx.current_path.includes("allow_system") ? "col-md-11" : "custon__btns__class")("disabled", ctx._fs._form.invalid || ctx.loadingTree || (ctx.dataSource.data == null ? null : ctx.dataSource.data.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](58, _c0, ctx._ss.lng === "en", ctx._ss.lng === "ur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 56, !ctx.loadingTree ? "Process" : ""), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loadingTree);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.current_path.includes("allow_system"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.current_path.includes("allow_system"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_2__.DdComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatSpinner, _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__.MatTree, _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__.MatTreeNodeDef, _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__.MatTreeNode, _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__.MatTreeNodeToggle, _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__.MatTreeNodePadding, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBar], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: [".card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n\r\n.text_align[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\r\n.custon__btns__class[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  padding: 0px 0px;\r\n  margin-left: 5px\r\n}\r\n@media(max-width: 768px){\r\n  .text_align[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n  .tree__view__scroll__and__class[_ngcontent-%COMP%]{\r\n    overflow-y: scroll !important;\r\n    \r\n    min-width: 100% !important;\r\n    width: 100px !important;\r\n    margin-top: 15px;\r\n  }\r\n  .tree__view__scroll__and__class[_ngcontent-%COMP%]   .mat-tree-node.cdk-tree-node[_ngcontent-%COMP%]{\r\n    padding: 0px !important;\r\n  }\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n    padding: 5px 0 7px 0 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n  top: 30px !important;\r\n  margin-top: -15px !important;\r\n  font-weight: 700 !important;\r\n  font-size: 15px;\r\n  color: #303030ad;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n    overflow: visible !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-select-panel{\r\n  width: 100% !important;\r\n  min-width: 100% !important;\r\n  transform: translate(15px, 40px) !important;\r\n  background: #ffffff !important;\r\n  border: 1px solid #00000033;\r\n  box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-select-value{\r\n  font-size: 16px;\r\n  font-weight: 600 !important;\r\n  overflow: hidden !important;\r\n}\r\n[_nghost-%COMP%]      .mat-input-element{\r\n  font-size: 16px !important;\r\n  font-weight: 600 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-option-text{\r\n  color: #0c0c0c;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\ncolor: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n  color: #f44836 !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #f44836 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n  color: #0c0c0c !important;\r\n  overflow: visible !important;\r\n  \r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label{\r\n  overflow: visible !important;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n  color: #0c0c0c !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n  color: #0c0c0c77;\r\n}\r\n\r\n[_nghost-%COMP%]      .ng-touched.ng-valid{\r\n  color: #0c0c0c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n  color: #bfc1c4;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n  transform: translate3d(30px, 0, 0) !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n    width: 50px !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-error{\r\n    font-size: 10px;\r\n}\r\n\r\n\r\n.tree__view__scroll__and__class[_ngcontent-%COMP%]{\r\n  \r\n  overflow-y: auto;\r\n  min-height: 0px;\r\n  max-height: 440px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbG93LXBlcm1pc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUNILGdCQUFnQjtBQUNoQjtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQSx3QkFBd0I7QUFDeEI7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEI7QUFDRjtBQUNBO0VBQ0U7TUFDSSxrQkFBa0I7RUFDdEI7RUFDQTtJQUNFLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGO0FBQ0Esd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QjtJQUNJLCtCQUErQjtBQUNuQztBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUI7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLGtEQUFrRDtBQUNwRDtBQUNBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7R0FFRztBQUNILHdCQUF3QjtBQUN4Qjs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFFQSxhQUFhO0FBQ2I7RUFDRSxjQUFjO0FBQ2hCO0FBQ0EsYUFBYTtBQUViLGVBQWU7QUFDZjtFQUNFLDZDQUE2QztBQUMvQztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0EsZUFBZTtBQUVmLG9CQUFvQjtBQUNwQjtJQUNJLGVBQWU7QUFDbkI7QUFDQSxvQkFBb0I7QUFFcEIsb0JBQW9CO0FBQ3BCO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0Esb0JBQW9CIiwiZmlsZSI6ImFsbG93LXBlcm1pc3Npb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNwaW5uZXIgQnV0dG9uICovXHJcbi8qIEBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgdG8ge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxyXG59XHJcblxyXG4uc3Bpbm5lcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICMwMDAwMDA7XHJcbiAgYW5pbWF0aW9uOiBzcGlubmVyIC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbn0gKi9cclxuLyogT3RoZXIgU3R5bGUgKi9cclxuLmNhcmRfX3N0eWxpbmd7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG59XHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmd7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG92ZXJmbG93LXg6IGNsaXA7XHJcbn1cclxuLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4udGV4dF9hbGlnbntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmN1c3Rvbl9fYnRuc19fY2xhc3N7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweFxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAudGV4dF9hbGlnbntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudHJlZV9fdmlld19fc2Nyb2xsX19hbmRfX2NsYXNze1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBoZWlnaHQ6IDQ0MHB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgLnRyZWVfX3ZpZXdfX3Njcm9sbF9fYW5kX19jbGFzcyAubWF0LXRyZWUtbm9kZS5jZGstdHJlZS1ub2Rle1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi8qIGJ1dHRvbnMgc2F2ZSBDYW5jZWwgKi9cclxuLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgIHBhZGRpbmc6IDVweCAwIDdweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIHRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzMwMzAzMGFkO1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC1wYW5lbHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAzMztcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggLTRweCAjMDAwMDAwOWMgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtb3B0aW9uLXRleHR7XHJcbiAgY29sb3I6ICMwYzBjMGM7XHJcbn1cclxuLyogOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59ICovXHJcbi8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2ssXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XHJcbmNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAvKiBmb250LXNpemU6IDE1cHg7ICovXHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tcclxuICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZpZWxkcyBib3JkZXIgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le1xyXG4gIGNvbG9yOiAjMGMwYzBjNzc7XHJcbn1cclxuLyogZmllbGRzIGJvcmRlciAqL1xyXG46aG9zdCAvZGVlcC8gIC5uZy10b3VjaGVkLm5nLXZhbGlke1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIGRpc2FibGVkICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICBjb2xvcjogI2JmYzFjNDtcclxufVxyXG4vKiBkaXNhYmxlZCAqL1xyXG5cclxuLyogdG9nZ2xlIGJhciAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iLWNvbnRhaW5lcntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwcHgsIDAsIDApICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHRvZ2dsZSBiYXIgKi9cclxuXHJcbi8qIGVycm9yIGZvbnQtc2l6ZSAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZXJyb3J7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLyogZXJyb3IgZm9udC1zaXplICovXHJcblxyXG4vKiB0cmVlX192aWV3X19jc3MgKi9cclxuLnRyZWVfX3ZpZXdfX3Njcm9sbF9fYW5kX19jbGFzc3tcclxuICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNTBweCk7ICAqL1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQ0MHB4O1xyXG59XHJcbi8qIHRyZWVfX3ZpZXdfX2NzcyAqL1xyXG4iXX0= */"] });


/***/ }),

/***/ 61634:
/*!*********************************************************************!*\
  !*** ./src/app/feature/allow-permission/allow-permission.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllowPermissionModule": () => (/* binding */ AllowPermissionModule)
/* harmony export */ });
/* harmony import */ var _allow_permission_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allow-permission-routing.module */ 43770);
/* harmony import */ var _allow_permission_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allow-permission.component */ 31161);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 75349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);




class AllowPermissionModule {
}
AllowPermissionModule.ɵfac = function AllowPermissionModule_Factory(t) { return new (t || AllowPermissionModule)(); };
AllowPermissionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AllowPermissionModule });
AllowPermissionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _allow_permission_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllowPermissionRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AllowPermissionModule, { declarations: [_allow_permission_component__WEBPACK_IMPORTED_MODULE_1__.AllowPermissionComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _allow_permission_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllowPermissionRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_feature_allow-permission_allow-permission_module_ts.js.map