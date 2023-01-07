"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["src_app_feature_receipt_knock-off_knock-off_module_ts"],{

/***/ 4128:
/*!******************************************************************************************!*\
  !*** ./src/app/feature/receipt/knock-off/knock-off-detail/knock-off-detail.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnockOffDetailComponent": () => (/* binding */ KnockOffDetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 95432);











function KnockOffDetailComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " S No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function KnockOffDetailComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r17 + 1, " ");
} }
function KnockOffDetailComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function KnockOffDetailComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function KnockOffDetailComponent_td_18_Template_input_valueChange_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const item_r18 = restoredCtx.$implicit; return item_r18.recd_tranno = $event; })("click", function KnockOffDetailComponent_td_18_Template_input_click_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const item_r18 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.getcheckBoxValue($event, item_r18 == null ? null : item_r18.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.__checkDisabled, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", item_r18.recd_tranno);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", item_r18 == null ? null : item_r18.checked)("value", item_r18.recd_tranno);
} }
function KnockOffDetailComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Receipt No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function KnockOffDetailComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r24 == null ? null : item_r24.receipt_number, " ");
} }
function KnockOffDetailComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function KnockOffDetailComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r25 == null ? null : item_r25.amount, " ");
} }
function KnockOffDetailComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Purpose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function KnockOffDetailComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r26 == null ? null : item_r26.purpose == null ? null : item_r26.purpose.title, " ");
} }
function KnockOffDetailComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Donation Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function KnockOffDetailComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r27 == null ? null : item_r27.donation_type == null ? null : item_r27.donation_type.title, " ");
} }
function KnockOffDetailComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Donation Subtype ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function KnockOffDetailComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r28 == null ? null : item_r28.donation_sub_type == null ? null : item_r28.donation_sub_type.title, " ");
} }
function KnockOffDetailComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 32);
} }
function KnockOffDetailComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 33);
} }
class KnockOffDetailComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_3__.BaseForm {
    constructor(injector, activeRoute) {
        super(injector);
        this.injector = injector;
        this.activeRoute = activeRoute;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
        this.editData = [];
        this.displayedColumns = ['S No', 'Select', 'Receipt No', 'Amount', 'Purpose', 'Donation Type', 'Donation Subtype'];
    }
    ngOnInit() {
        this._fhs._pathLocation = '/knock_off';
        this.componentName = "Knock Off Edit";
        this._dcoId = this.activeRoute.snapshot.paramMap.get('dcoId');
        this._ou = this.activeRoute.snapshot.paramMap.get('ou');
        this._dco_receipt = this.activeRoute.snapshot.paramMap.get('dcoReceipt');
        this._pId = this.activeRoute.snapshot.paramMap.get('pId');
        this.initForm();
        this.getEditdata(this._dcoId);
    }
    initForm() {
        this._fs._form = this._fb.group({
            dco_id: [''],
            eraseed_ids: this._fb.array([]),
        });
    }
    getEditdata(dcoId) {
        this._fs._form.get('dco_id').patchValue(dcoId);
        const selectedPerArr = this._fs._form.get('eraseed_ids');
        this._http.get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.KNOCK_OFF,
            query: {
                id: dcoId,
            }
        }).subscribe((res) => {
            this.dataSource.data = res.data.records;
            this.editData = res.data.records;
            res.data.records.forEach(val => {
                if (val.checked) {
                    selectedPerArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(val.id));
                }
            });
        });
    }
    getcheckBoxValue(event, eId) {
        const selectedPerArr = this._fs._form.get('eraseed_ids');
        if (event.target.checked) {
            selectedPerArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(eId));
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
    }
    switch() {
        this._router.navigate(['/knock_off', { ou: this._ou, dcoReceipt: this._dco_receipt, pId: this._pId }]);
    }
    _onSubmit() {
        this._fs._form.markAllAsTouched();
        this._vs._submitted = true;
        if (this._fs._form.valid) {
            const modify = this._http.update({ body: this._fs._form.value, url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL, endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.KNOCK_OFF });
            modify.subscribe({
                next: (res) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                        title: 'KnockedOff',
                        text: res.message,
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: '<i class="fas fa-thumbs-up"></i>',
                    }).then((res) => {
                        this._fs._form.reset();
                        this.switch();
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
}
KnockOffDetailComponent.ɵfac = function KnockOffDetailComponent_Factory(t) { return new (t || KnockOffDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
KnockOffDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: KnockOffDetailComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 41, vars: 7, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], [2, "border-top", "0px !important"], [1, "card-body", "pt-0"], [1, "tablet-view"], [3, "formGroup", "ngSubmit"], [1, "mat_table"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "S No"], ["mat-header-cell", "", "class", "pr-3", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "px-3", 4, "matCellDef"], ["matColumnDef", "Select"], ["matColumnDef", "Receipt No"], ["matColumnDef", "Amount"], ["matColumnDef", "Purpose"], ["matColumnDef", "Donation Type"], ["matColumnDef", "Donation Subtype"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "card-body"], [1, "action-form"], [1, "form-group", "m-b-0", "text-right"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light", 3, "hidden"], ["mat-header-cell", "", 1, "pr-3"], ["mat-cell", "", 1, "px-3"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "id", "value", "valueChange", "click"], ["checkboxes", ""], [1, "form-check-label"], ["mat-header-row", ""], ["mat-row", ""]], template: function KnockOffDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "E-raseed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function KnockOffDetailComponent_Template_form_ngSubmit_10_listener() { return ctx._onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, KnockOffDetailComponent_th_14_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, KnockOffDetailComponent_td_15_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, KnockOffDetailComponent_th_17_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, KnockOffDetailComponent_td_18_Template, 6, 4, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, KnockOffDetailComponent_th_20_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, KnockOffDetailComponent_td_21_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, KnockOffDetailComponent_th_23_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, KnockOffDetailComponent_td_24_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, KnockOffDetailComponent_th_26_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, KnockOffDetailComponent_td_27_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, KnockOffDetailComponent_th_29_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, KnockOffDetailComponent_td_30_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, KnockOffDetailComponent_th_32_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, KnockOffDetailComponent_td_33_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, KnockOffDetailComponent_tr_34_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, KnockOffDetailComponent_tr_35_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.componentName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx._fs._form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.editData.length == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrbm9jay1vZmYtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 31402:
/*!***********************************************************************!*\
  !*** ./src/app/feature/receipt/knock-off/knock-off-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnockOffRoutingModule": () => (/* binding */ KnockOffRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _knock_off_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knock-off.component */ 3412);
/* harmony import */ var _knock_off_detail_knock_off_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knock-off-detail/knock-off-detail.component */ 4128);
/* harmony import */ var src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/enums/action.enum */ 31978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);






const routes = [
    {
        path: "",
        children: [
            {
                path: '',
                redirectTo: 'knock_off',
                pathMatch: 'full'
            },
            {
                path: "",
                component: _knock_off_component__WEBPACK_IMPORTED_MODULE_0__.KnockOffComponent,
                data: {
                    title: "Knock Off",
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_2__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_2__.ACTION.EDIT
                    ],
                }
            },
            {
                path: "knock_off_detail",
                component: _knock_off_detail_knock_off_detail_component__WEBPACK_IMPORTED_MODULE_1__.KnockOffDetailComponent,
                data: {
                    title: "Knock Off",
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_2__.ACTION.VIEW,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_2__.ACTION.STATUS
                    ],
                }
                // canDeactivate: [FormGuard],
            }
        ]
    }
];
class KnockOffRoutingModule {
}
KnockOffRoutingModule.ɵfac = function KnockOffRoutingModule_Factory(t) { return new (t || KnockOffRoutingModule)(); };
KnockOffRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: KnockOffRoutingModule });
KnockOffRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](KnockOffRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 3412:
/*!******************************************************************!*\
  !*** ./src/app/feature/receipt/knock-off/knock-off.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnockOffComponent": () => (/* binding */ KnockOffComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_swal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/swal.service */ 87217);
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _shared_components_filters_knock_off_filter_knock_off_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/filters/knock-off-filter/knock-off-filter.component */ 9737);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 15719);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 95432);















const _c0 = ["checkboxes"];
const _c1 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function KnockOffComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c1, ctx_r0._ss.lng === "en", ctx_r0._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "S No"), " ");
} }
function KnockOffComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r39 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r39 + 1, " ");
} }
function KnockOffComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " View detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function KnockOffComponent_td_21_Template_i_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42); const item_r40 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r41.Switch(item_r40 == null ? null : item_r40.id, ctx_r41.operting_unit, ctx_r41.DCO_Receipt, ctx_r41.person_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function KnockOffComponent_td_24_Template_input_valueChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46); const item_r43 = restoredCtx.$implicit; return item_r43.recd_tranno = $event; })("change", function KnockOffComponent_td_24_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46); const item_r43 = restoredCtx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r47.getRadioValue($event, item_r43, true); return ctx_r47.uncheckAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("name", item_r43.master_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("id", item_r43.recd_tranno);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", item_r43 == null ? null : item_r43.checked)("value", item_r43.recd_tranno);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("for", item_r43.recd_tranno);
} }
function KnockOffComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Receipt No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r48.receipt_number, " ");
} }
function KnockOffComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", item_r49.amount, "", item_r49 == null ? null : item_r49.currency == null ? null : item_r49.currency.title, " ");
} }
function KnockOffComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Remaining Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", item_r50 == null ? null : item_r50.remaining_amount, " ", item_r50 == null ? null : item_r50.currency == null ? null : item_r50.currency.title, " ");
} }
function KnockOffComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Received Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", item_r51 == null ? null : item_r51.received_amount, " ", item_r51 == null ? null : item_r51.currency == null ? null : item_r51.currency.title, " ");
} }
function KnockOffComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Purpose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r52 == null ? null : item_r52.purpose == null ? null : item_r52.purpose.title, " ");
} }
function KnockOffComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Donation Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r53 == null ? null : item_r53.donation_type == null ? null : item_r53.donation_type.title, " ");
} }
function KnockOffComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Donation Subtype ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r54 == null ? null : item_r54.donation_sub_type == null ? null : item_r54.donation_sub_type.title, " ");
} }
function KnockOffComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 44);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](1, _c1, ctx_r20._ss.lng === "en", ctx_r20._ss.lng === "ur"));
} }
function KnockOffComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 45);
} }
function KnockOffComponent_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " S No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r57 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r57 + 1, " ");
} }
function KnockOffComponent_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_60_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function KnockOffComponent_td_60_Template_input_valueChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const item_r58 = restoredCtx.$implicit; return item_r58.recd_tranno = $event; })("click", function KnockOffComponent_td_60_Template_input_click_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const item_r58 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r63.getcheckBoxValue($event, item_r58 == null ? null : item_r58.id, item_r58 == null ? null : item_r58.amount, item_r58 == null ? null : item_r58.purpose == null ? null : item_r58.purpose.id, item_r58 == null ? null : item_r58.currency == null ? null : item_r58.currency.id, item_r58 == null ? null : item_r58.donation_type == null ? null : item_r58.donation_type.id, item_r58 == null ? null : item_r58.donation_sub_type == null ? null : item_r58.donation_sub_type.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("id", item_r58.recd_tranno);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", item_r58 == null ? null : item_r58.checked)("disabled", !ctx_r25.__checkDisabled)("value", item_r58.recd_tranno);
} }
function KnockOffComponent_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Receipt No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r64 == null ? null : item_r64.receipt_number, " ");
} }
function KnockOffComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", item_r65 == null ? null : item_r65.amount, " ", item_r65 == null ? null : item_r65.currency.title, " ");
} }
function KnockOffComponent_th_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Purpose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r66 == null ? null : item_r66.purpose == null ? null : item_r66.purpose.title, " ");
} }
function KnockOffComponent_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Donation Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r67 == null ? null : item_r67.donation_type == null ? null : item_r67.donation_type.title, " ");
} }
function KnockOffComponent_th_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Donation Subtype ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function KnockOffComponent_td_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r68 == null ? null : item_r68.donation_sub_type == null ? null : item_r68.donation_sub_type.title, " ");
} }
function KnockOffComponent_tr_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 44);
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](1, _c1, ctx_r36._ss.lng === "en", ctx_r36._ss.lng === "ur"));
} }
function KnockOffComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 45);
} }
class KnockOffComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_4__.BaseForm {
    constructor(injector, _activeRoute) {
        super(injector);
        this.displayedDonationCol = ['S No', 'actions', 'Select', 'Receipt No', 'Total Amount', 'Remaining Amount', 'Received Amount', 'Purpose', 'Donation Type', 'Donation Subtype'];
        this.displayedEraseedCol = ['S No', 'Select', 'Receipt No', 'Amount', 'Purpose', 'Donation Type', 'Donation Subtype'];
        this.dataSourceEraseed = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
        this.DCO_Receipt = '';
        this.person_id = '';
        this.remainAmount = 0;
        this.e_amount_arr = [];
        this.e_amount_sum = 0;
        this.dco_currency = '';
        this.__checkDisabled = false;
        this.__radioChecked = false;
        this._swl = injector.get(_service_swal_service__WEBPACK_IMPORTED_MODULE_3__.SwalService);
    }
    ngOnInit() {
        this._fhs._pathLocation = '/knock_off';
        this.componentName = "E-Raseed Knock-off";
        this.initForm();
    }
    initForm() {
        this._fs._form = this._fb.group({
            dco_id: [''],
            eraseed_ids: this._fb.array([]),
        });
    }
    getStoreFilter(e) {
        this.getDcoData(e);
        this.getErseedData(e);
    }
    getDcoData(filterobj) {
        this._http.get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.DCO_TRANSACTION,
            query: {
                ou: filterobj.ou,
                receipt_no: filterobj.dco_receipt,
            }
        }).subscribe((res) => {
            this.dataSource.data = res?.data?.records;
            res.data.records.forEach(condition => {
                if (condition.checked) {
                    this.__checkDisabled = true;
                    this.__radioChecked = condition.checked;
                    this._fs._form.get('dco_id').patchValue(condition.id);
                    this.dco_purpose = condition.purpose?.id;
                    this.dco_dona_type = condition.donation_type?.id;
                    this.dco_dona_sub_type = condition.donation_sub_type?.id;
                    this.dco_amount = condition.amount;
                }
                else if (!condition.checked) {
                    this.__checkDisabled = false;
                    this.__radioChecked = false;
                }
            });
        });
    }
    getErseedData(filterobj) {
        this._fs._form.get('eraseed_ids').clear();
        let selectedPerArr = this._fs._form.get('eraseed_ids');
        this._http.get({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL,
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.ERASEED_TRANSACTION,
            query: {
                ou: filterobj.ou,
                person_id: filterobj.person_id,
            }
        }).subscribe((res) => {
            this.dataSourceEraseed.data = res?.data?.records;
            res.data.records.forEach(val => {
                if (val.checked) {
                    selectedPerArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(val.id));
                }
            });
        });
    }
    Switch(dco_id, ou, dco_receipt, p_id) {
        if (!!dco_id)
            this._router.navigate(['/knock_off/knock_off_detail', { dcoId: dco_id, ou: ou, dcoReceipt: dco_receipt, pId: p_id }]);
    }
    getRadioValue(event, dobj, condition) {
        this.__radioChecked = dobj?.checked;
        this.__checkDisabled = condition;
        this.dco_purpose = dobj?.purpose?.id;
        this.dco_currency = dobj?.currency?.id;
        this.dco_dona_type = dobj?.donation_type?.id;
        this.dco_dona_sub_type = dobj?.donation_sub_type?.id;
        this.dco_amount = dobj?.amount;
        this.remainAmount = dobj?.remaining_amount;
        this._fs._form.get('dco_id').patchValue(dobj?.id);
    }
    getcheckBoxValue(event, eId, eAmount, ePurpose, ecurrency, eDonationType, eSubType) {
        this.Custom_Validations(ePurpose, ecurrency, eDonationType, eSubType, eAmount, eId, event);
    }
    uncheckAll() {
        this.checkboxes.forEach((element) => {
            element.nativeElement.checked = false;
        });
        this._fs._form.get('eraseed_ids').clear();
        this.e_amount_arr = [];
    }
    Custom_Validations(e_Purpose, ecurrency, e_donation_Type, e_sub_type, e_amount, e_id, event) {
        if (e_Purpose != this.dco_purpose) {
            event.preventDefault();
            this._swl.genericSwal('DCO Purpose does not match with E-raseed Purpose.', 'warning', '');
        }
        else if (ecurrency != this.dco_currency) {
            event.preventDefault();
            this._swl.genericSwal('DCO Currency does not match with E-raseed currency.', 'warning', '');
        }
        else if (e_donation_Type != this.dco_dona_type) {
            event.preventDefault();
            this._swl.genericSwal('DCO Donation Type  does not match with E-raseed Donation Type.', 'warning', '');
        }
        else if (e_sub_type != this.dco_dona_sub_type) {
            event.preventDefault();
            this._swl.genericSwal('DCO Donation Subtype does not match with E-raseed Donation Subtype.', 'warning', '');
        }
        else {
            this.remainAmountCal(e_amount, e_id, event);
        }
    }
    remainAmountCal(e_amount, e_id, event) {
        if (event.target.checked) {
            if (e_amount > this.remainAmount) {
                event.preventDefault();
                this._swl.genericSwal(`E-raseed amount ${e_amount} must be less the DCO remaining amount${this.remainAmount}`, 'warning', '');
            }
            else {
                this.e_amount_arr.unshift(e_amount);
                this.e_amount_sum = this.e_amount_arr.reduce((pre, cur) => pre + cur, 0);
                if (this.e_amount_sum > this.remainAmount) {
                    event.preventDefault();
                    this._swl.genericSwal(`E-raseed amount ${this.e_amount_sum} must be less the DCO remaining amount${this.remainAmount}`, 'warning', '');
                    this.e_amount_sum = this.e_amount_sum - e_amount;
                    let index = this.e_amount_arr.findIndex((amount) => amount == e_amount);
                    this.e_amount_arr.splice(index, 1);
                }
                else {
                    this.fillFormdata(event, e_id, true);
                }
            }
        }
        else {
            let index = this.e_amount_arr.findIndex((amount) => amount == e_amount);
            this.e_amount_arr.splice(index, 1);
            this.e_amount_sum = this.e_amount_sum - e_amount;
            this.fillFormdata(event, e_id, false);
        }
    }
    fillFormdata(event, eId, bool) {
        var selectedPerArr = this._fs._form.get('eraseed_ids');
        if (event.target.checked && bool) {
            selectedPerArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(eId));
        }
        else if (!event.target.checked && !bool) {
            let i = 0;
            selectedPerArr.controls.forEach((ctrl) => {
                if (ctrl.value == eId) {
                    selectedPerArr.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }
    _onSubmit(param = '') {
        this._fs._form.markAllAsTouched();
        this._vs._submitted = true;
        if (this._fs._form.valid || true) {
            let modify;
            modify = this._http.create({ body: this._fs._form.value, url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL, endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.KNOCK_OFF });
            modify.subscribe({
                next: (res) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                        title: 'KnockedOff',
                        text: res.message,
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
        else {}
    }
}
KnockOffComponent.ɵfac = function KnockOffComponent_Factory(t) { return new (t || KnockOffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute)); };
KnockOffComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: KnockOffComponent, selectors: [["di-component-name-here"]], viewQuery: function KnockOffComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.checkboxes = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 84, vars: 25, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], [2, "border-top", "0px !important"], [3, "filterData"], [1, "card-body", "pt-0"], [1, "tablet-view"], [3, "formGroup", "ngSubmit"], [1, "mat_table"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "S No"], ["mat-header-cell", "", "class", "px-2", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "px-2", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "text-center", "mat-header-cell", "", "translate", "", 4, "matHeaderCellDef"], ["class", "", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Select"], ["mat-header-cell", "", "class", "px-2", "translate", "", 4, "matHeaderCellDef"], ["matColumnDef", "Receipt No"], ["matColumnDef", "Total Amount"], ["matColumnDef", "Remaining Amount"], ["matColumnDef", "Received Amount"], ["matColumnDef", "Purpose"], ["matColumnDef", "Donation Type"], ["matColumnDef", "Donation Subtype"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "Amount"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], [1, "card-body"], [1, "action-form"], [1, "form-group", "m-b-0", "text-right"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light", 3, "ngClass"], ["mat-header-cell", "", 1, "px-2", 3, "ngClass"], ["mat-cell", "", 1, "px-2"], ["mat-header-cell", "", "translate", "", 1, "text-center"], ["mat-cell", "", 1, ""], [1, "ti-eye", "text-info", "pointer", "px-2", 3, "click"], ["mat-header-cell", "", "translate", "", 1, "px-2"], [1, "custom-control", "custom-radio"], ["type", "radio", 1, "form-check-input", 3, "name", "id", "checked", "value", "valueChange", "change"], [1, "form-check-label", 3, "for"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "disabled", "id", "value", "valueChange", "click"], ["checkboxes", ""], [1, "form-check-label"]], template: function KnockOffComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "knock-off-filter", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("filterData", function KnockOffComponent_Template_knock_off_filter_filterData_8_listener($event) { return ctx.getStoreFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function KnockOffComponent_Template_form_ngSubmit_13_listener() { return ctx._onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, KnockOffComponent_th_17_Template, 3, 7, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, KnockOffComponent_td_18_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](19, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, KnockOffComponent_th_20_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, KnockOffComponent_td_21_Template, 2, 0, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](22, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, KnockOffComponent_th_23_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, KnockOffComponent_td_24_Template, 4, 5, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, KnockOffComponent_th_26_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, KnockOffComponent_td_27_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](28, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, KnockOffComponent_th_29_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, KnockOffComponent_td_30_Template, 2, 2, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](31, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, KnockOffComponent_th_32_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, KnockOffComponent_td_33_Template, 2, 2, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](34, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, KnockOffComponent_th_35_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, KnockOffComponent_td_36_Template, 2, 2, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](37, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, KnockOffComponent_th_38_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, KnockOffComponent_td_39_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](40, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, KnockOffComponent_th_41_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, KnockOffComponent_td_42_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](43, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, KnockOffComponent_th_44_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, KnockOffComponent_td_45_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, KnockOffComponent_tr_46_Template, 1, 4, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, KnockOffComponent_tr_47_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function KnockOffComponent_Template_form_ngSubmit_52_listener() { return ctx._onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](55, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, KnockOffComponent_th_56_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, KnockOffComponent_td_57_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](58, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, KnockOffComponent_th_59_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, KnockOffComponent_td_60_Template, 5, 4, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](61, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, KnockOffComponent_th_62_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, KnockOffComponent_td_63_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](64, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, KnockOffComponent_th_65_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, KnockOffComponent_td_66_Template, 2, 2, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](67, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, KnockOffComponent_th_68_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, KnockOffComponent_td_69_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](70, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, KnockOffComponent_th_71_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, KnockOffComponent_td_72_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](73, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, KnockOffComponent_th_74_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, KnockOffComponent_td_75_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, KnockOffComponent_tr_76_Template, 1, 4, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, KnockOffComponent_tr_77_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 14, ctx.componentName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 16, "DCO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx._fs._form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedDonationCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedDonationCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](51, 18, "E-raseed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx._fs._form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSourceEraseed);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedEraseedCol)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedEraseedCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](22, _c1, ctx._ss.lng === "en", ctx._ss.lng === "ur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](83, 20, "Process"));
    } }, directives: [_shared_components_filters_knock_off_filter_knock_off_filter_component__WEBPACK_IMPORTED_MODULE_5__.KnockOffFilterComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: [".upload-large[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n  .img-fluid[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    text-align: auto;\r\n  }\r\n  .card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n  \r\n  .text_align[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n  .custon__btns__class[_ngcontent-%COMP%]{\r\nwidth: 100px;\r\n\r\n}\r\n  .wajiba-nafila[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 9px 9px;\r\n}\r\n  .cash-deposit[_ngcontent-%COMP%] {\r\n  \r\n}\r\n  .custom_slip[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n  @media(max-width: 768px){\r\n    .text_align[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n    [_nghost-%COMP%]     .custom-date  .md-drppicker.double{\r\n      width: 290px !important;\r\n      left: 0!important;\r\n      top: 100% !important; \r\n    }\r\n}\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n      padding: 5px 0 7px 0 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n    top: 30px !important;\r\n    margin-top: -15px !important;\r\n    font-weight: 700 !important;\r\n    font-size: 15px;\r\n    color: #303030ad;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n      overflow: visible !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-select-panel{\r\n    width: 100% !important;\r\n    min-width: 100% !important;\r\n    transform: translate(15px, 40px) !important;\r\n    background: #ffffff !important;\r\n    border: 1px solid #00000033;\r\n    box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-select-value{\r\n    font-size: 16px;\r\n    font-weight: 600 !important;\r\n    overflow: hidden !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-input-element{\r\n    font-size: 16px !important;\r\n    font-weight: 600 !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-option-text{\r\n    color: #0c0c0c;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\n  color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n    color: #f44836 !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n    color: #f44836 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n    color: #0c0c0c !important;\r\n    overflow: visible !important;\r\n    \r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label{\r\n    overflow: visible !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n    color: #0c0c0c !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n    color: #0c0c0c77;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .ng-touched.ng-valid{\r\n    color: #0c0c0c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n    background-color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n    background-color: #024d7071 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n    color: #bfc1c4;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n    transform: translate3d(30px, 0, 0) !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n      width: 50px !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-error{\r\n      font-size: 10px;\r\n  }\r\n  \r\n  [_nghost-%COMP%]     .md-drppicker.double {\r\n    width: 500px !important;\r\n}\r\n  .card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n  .text-red[_ngcontent-%COMP%]{\r\n  color: #c53b55;\r\n}\r\n  \r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n  \r\n  \r\n  .custon__add__btns__class[_ngcontent-%COMP%]{\r\n    margin: -7px 0px;\r\n    background-color: #00c292;\r\n    border-color: #00c292;\r\n    box-shadow:0px 0px 10px -5px #0000008f;\r\n}\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 0 0 0 0.2rem #1e9d7d80 !important;\r\n}\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:active{\r\n  background-color: #01cb99 !important;\r\n  border-color: #01cb99 !important;\r\n  box-shadow: 0 0 0 0.2rem #1e9d7d80 !important;\r\n}\r\n  \r\n  \r\n  .slection__styled   [_nghost-%COMP%]      .search.ng-touched{\r\n  color: #1a1a1a !important;\r\n\r\n}\r\n  .mat-header-cell[_ngcontent-%COMP%]{\r\n  background: #024e70 !important;\r\n  color: white !important;\r\n}\r\n  .search[_ngcontent-%COMP%]{\r\n  color: #ffffff !important;\r\n  border-bottom: 1px solid whitesmoke;\r\n}\r\n  [_nghost-%COMP%]      .mat-sort-header-arrow{\r\n  color: white;\r\n}\r\n  [_nghost-%COMP%]      .mat-sort-header-content{\r\n  color: white !important;\r\n}\r\n  [_nghost-%COMP%]      .search::-moz-placeholder{\r\n  color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search:-ms-input-placeholder{\r\n  color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search::placeholder{\r\n  color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search.ng-touched{\r\n  color: #ffffff !important;\r\n}\r\n  [_nghost-%COMP%]      .search .ng-star-inserted{\r\n  color: #000 !important;\r\n}\r\n  \r\n  \r\n  .mat_table[_ngcontent-%COMP%]{\r\n  max-height: 490px;\r\n  height: auto;\r\n}\r\n  tr.mat-header-row[_ngcontent-%COMP%]{\r\n  height: 40px !important;\r\n}\r\n  [_nghost-%COMP%]      tr.mat-row, tr.mat-footer-row[_ngcontent-%COMP%]{\r\n  height: 40px !important;\r\n}\r\n  .mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{\r\n  white-space: nowrap !important;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(odd){\r\n  background-color: #ffffff00 !important;\r\n  transition: 0.1s;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(even){\r\n  background-color: #b3eeff2c !important;\r\n  border-top: 2px solid #0000000d !important;\r\n  border-bottom: 2px solid #0000000d !important;\r\n  transition: 0.1s;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(even):hover{\r\n  box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(odd):hover{\r\n  box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n  \r\n  \r\n  [_nghost-%COMP%]      .switch.switch-small.checked{\r\n  background-color: #03a9f3 !important;\r\n}\r\n  \r\n  \r\n  .custom__select__class[_ngcontent-%COMP%]{\r\n  border-radius: 3px;\r\n  padding: 4px;\r\n  border: 1px solid #0000004b;\r\n  background: white;\r\n}\r\n  .custom__select__class[_ngcontent-%COMP%]   .cus_opt[_ngcontent-%COMP%]{\r\n  border-radius: 4px;\r\n  background: #ffffff;\r\n  box-shadow: 0px 0px 10px black;\r\n}\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-paginator-range-label{\r\n  margin: 0px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtub2NrLW9mZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0VBQ1o7RUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtDQUFrQztBQUN0QztFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7RUFDRix3QkFBd0I7RUFDeEI7RUFDRSxpQkFBaUI7QUFDbkI7RUFDQTtBQUNBLFlBQVk7QUFDWixzQkFBc0I7QUFDdEI7RUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7RUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtFQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCO0VBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO01BQ0UsdUJBQXVCO01BQ3ZCLGlCQUFpQjtNQUNqQixvQkFBb0I7SUFDdEI7QUFDSjtFQUNBLHdCQUF3QjtFQUN0Qiw0QkFBNEI7RUFDNUI7TUFDSSwrQkFBK0I7RUFDbkM7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSw0QkFBNEI7RUFDaEM7RUFDQSx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixrREFBa0Q7RUFDcEQ7RUFDQTtJQUNFLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7O0tBRUc7RUFDSCx3QkFBd0I7RUFDeEI7O0VBRUEseUJBQXlCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0Usc0NBQXNDO0VBQ3hDO0VBRUEsYUFBYTtFQUNiO0lBQ0UsY0FBYztFQUNoQjtFQUNBLGFBQWE7RUFFYixlQUFlO0VBQ2Y7SUFDRSw2Q0FBNkM7RUFDL0M7RUFDQTtNQUNJLHNCQUFzQjtFQUMxQjtFQUNBLGVBQWU7RUFFZixvQkFBb0I7RUFDcEI7TUFDSSxlQUFlO0VBQ25CO0VBQ0Esb0JBQW9CO0VBR3BCO0lBQ0UsdUJBQXVCO0FBQzNCO0VBR0E7RUFDRSxrQ0FBa0M7QUFDcEM7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQSxpQkFBaUI7RUFDakI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0VBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtFQUNBLGlCQUFpQjtFQUVqQix3QkFBd0I7RUFDeEI7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixzQ0FBc0M7QUFDMUM7RUFDQTtFQUNFLDZDQUE2QztBQUMvQztFQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyw2Q0FBNkM7QUFDL0M7RUFDQSx3QkFBd0I7RUFFeEIseUJBQXlCO0VBQ3pCO0VBQ0UseUJBQXlCOztBQUUzQjtFQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6QjtFQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1DQUFtQztBQUNyQztFQUNBO0VBQ0UsWUFBWTtBQUNkO0VBQ0E7RUFDRSx1QkFBdUI7QUFDekI7RUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtFQUZBO0VBQ0UseUJBQXlCO0FBQzNCO0VBRkE7RUFDRSx5QkFBeUI7QUFDM0I7RUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtFQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0VBQ0EseUJBQXlCO0VBRXpCLDBCQUEwQjtFQUMxQjtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7RUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtFQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0VBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7RUFDQTtFQUNFLHNDQUFzQztFQUN0QyxnQkFBZ0I7QUFDbEI7RUFDQTtFQUNFLHNDQUFzQztFQUN0QywwQ0FBMEM7RUFDMUMsNkNBQTZDO0VBQzdDLGdCQUFnQjtBQUNsQjtFQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0VBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7RUFDQSwwQkFBMEI7RUFFMUIsb0NBQW9DO0VBQ3BDO0VBQ0Usb0NBQW9DO0FBQ3RDO0VBQ0Esb0NBQW9DO0VBRXBDLHVCQUF1QjtFQUN2QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjtFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7RUFDQSx1QkFBdUI7RUFFdkIsb0JBQW9CO0VBQ3BCO0VBQ0Usc0JBQXNCO0FBQ3hCO0VBQ0Esb0JBQW9CIiwiZmlsZSI6Imtub2NrLW9mZi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1sYXJnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5pbWctZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogYXV0bztcclxuICB9XHJcbiAgLmNhcmRfX3N0eWxpbmd7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG59XHJcbiAgLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZ3tcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGNsaXA7XHJcbiAgfVxyXG4gIC5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmcgaDJ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggN3B4IC03cHggIzAwMDAwMDU3O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4udGV4dF9hbGlnbntcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY3VzdG9uX19idG5zX19jbGFzc3tcclxud2lkdGg6IDEwMHB4O1xyXG4vKiBwYWRkaW5nOiA1cHggMHB4OyAqL1xyXG59XHJcblxyXG4ud2FqaWJhLW5hZmlsYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDlweCA5cHg7XHJcbn1cclxuXHJcbi5jYXNoLWRlcG9zaXQge1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXHJcbn1cclxuXHJcbi5jdXN0b21fc2xpcCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC50ZXh0X2FsaWdue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIDpob3N0IC9kZWVwLyAuY3VzdG9tLWRhdGUgIC5tZC1kcnBwaWNrZXIuZG91Ymxle1xyXG4gICAgICB3aWR0aDogMjkwcHggIWltcG9ydGFudDtcclxuICAgICAgbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICAgIHRvcDogMTAwJSAhaW1wb3J0YW50OyBcclxuICAgIH1cclxufVxyXG4vKiBidXR0b25zIHNhdmUgQ2FuY2VsICovXHJcbiAgLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4gICAgICBwYWRkaW5nOiA1cHggMCA3cHggMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICAgIHRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMzAzMDMwYWQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJ7XHJcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAvKiBmaWVsZHMgbGluZSBoZWlnaHQgd29yayAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zZWxlY3QtcGFuZWx7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCA0MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDMzO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMXB4IC00cHggIzAwMDAwMDljICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zZWxlY3QtdmFsdWV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1vcHRpb24tdGV4dHtcclxuICAgIGNvbG9yOiAjMGMwYzBjO1xyXG4gIH1cclxuICAvKiA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2Fwe1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICB9ICovXHJcbiAgLyogZmllbGRzIGJvcmRlciBob3ZlciAqL1xyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrLFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XHJcbiAgY29sb3I6ICMwZWI5ZWMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICAgIGNvbG9yOiAjZjQ0ODM2ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6ICNmNDQ4MzYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogZmllbGRzIGJvcmRlciBob3ZlciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICAgIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e1xyXG4gICAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogZmllbGRzIGJvcmRlciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICAgIGNvbG9yOiAjMGMwYzBjNzc7XHJcbiAgfVxyXG4gIC8qIGZpZWxkcyBib3JkZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5uZy10b3VjaGVkLm5nLXZhbGlke1xyXG4gICAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZWI5ZWMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0ZDcwNzEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8qIGRpc2FibGVkICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le1xyXG4gICAgY29sb3I6ICNiZmMxYzQ7XHJcbiAgfVxyXG4gIC8qIGRpc2FibGVkICovXHJcblxyXG4gIC8qIHRvZ2dsZSBiYXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iLWNvbnRhaW5lcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzBweCwgMCwgMCkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIHRvZ2dsZSBiYXIgKi9cclxuXHJcbiAgLyogZXJyb3IgZm9udC1zaXplICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWVycm9ye1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC8qIGVycm9yIGZvbnQtc2l6ZSAqL1xyXG5cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5tZC1kcnBwaWNrZXIuZG91YmxlIHtcclxuICAgIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmNhcmRfX3N0eWxpbmd7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzZDtcclxufVxyXG4udGV4dC1yZWR7XHJcbiAgY29sb3I6ICNjNTNiNTU7XHJcbn1cclxuLyogSEVBREVSIFNUWUxFICovXHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmd7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG92ZXJmbG93LXg6IGNsaXA7XHJcbn1cclxuLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLyogSEVBREVSIFNUWUxFICovXHJcblxyXG4vKiBIRUFERVIgQlVUVE9OIFNUWUxFICovXHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3N7XHJcbiAgICBtYXJnaW46IC03cHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzI5MjtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwYzI5MjtcclxuICAgIGJveC1zaGFkb3c6MHB4IDBweCAxMHB4IC01cHggIzAwMDAwMDhmO1xyXG59XHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3M6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICMxZTlkN2Q4MCAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3M6YWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWNiOTkgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICMwMWNiOTkgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gIzFlOWQ3ZDgwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogSEVBREVSIEJVVFRPTiBTVFlMRSAqL1xyXG5cclxuLyogVEFCTEUgaGVhZGVyIFNUWUxJTkcgKi9cclxuLnNsZWN0aW9uX19zdHlsZWQgOmhvc3QgL2RlZXAvICAuc2VhcmNoLm5nLXRvdWNoZWR7XHJcbiAgY29sb3I6ICMxYTFhMWEgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbHtcclxuICBiYWNrZ3JvdW5kOiAjMDI0ZTcwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaHtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zb3J0LWhlYWRlci1hcnJvd3tcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNvcnQtaGVhZGVyLWNvbnRlbnR7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoOjpwbGFjZWhvbGRlcntcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLnNlYXJjaC5uZy10b3VjaGVke1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoIC5uZy1zdGFyLWluc2VydGVke1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogVEFCTEUgaGVhZGVyIFNUWUxJTkcgKi9cclxuXHJcbi8qIGxpc3Qgc3R5bGluZyBpbiB0YWJsZSAqL1xyXG4ubWF0X3RhYmxle1xyXG4gIG1heC1oZWlnaHQ6IDQ5MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG50ci5tYXQtaGVhZGVyLXJvd3tcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIHRyLm1hdC1yb3csIHRyLm1hdC1mb290ZXItcm93e1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwsIC5tYXQtY2VsbHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogMC4xcztcclxufVxyXG4ubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZWVmZjJjICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDAwMDAwZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwMDAwMGQgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChldmVuKTpob3ZlcntcclxuICBib3gtc2hhZG93OjBweCAwcHggOHB4IDBweCAjMDAwMDAwNWU7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCk6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzowcHggMHB4IDhweCAwcHggIzAwMDAwMDVlO1xyXG59XHJcbi8qIGxpc3Qgc3R5bGluZyBpbiB0YWJsZSAqL1xyXG5cclxuLyogY2hhY2sgb24gb3Igb2ZmIGJ1dHRvbiAgc3R5bGluZyAqL1xyXG46aG9zdCAvZGVlcC8gIC5zd2l0Y2guc3dpdGNoLXNtYWxsLmNoZWNrZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmMyAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGNoYWNrIG9uIG9yIG9mZiBidXR0b24gIHN0eWxpbmcgKi9cclxuXHJcbi8qIHNlbGVjdCBib3ggc3R5bGluZyAqL1xyXG4uY3VzdG9tX19zZWxlY3RfX2NsYXNze1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDRiO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5jdXN0b21fX3NlbGVjdF9fY2xhc3MgLmN1c19vcHR7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGJsYWNrO1xyXG59XHJcbi8qIHNlbGVjdCBib3ggc3R5bGluZyAqL1xyXG5cclxuLyogcGFnaW5hdGlvbiBhcmVhICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWx7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4vKiBwYWdpbmF0aW9uIGFyZWEgKi9cclxuIl19 */"] });


/***/ }),

/***/ 57573:
/*!***************************************************************!*\
  !*** ./src/app/feature/receipt/knock-off/knock-off.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnockOffModule": () => (/* binding */ KnockOffModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 75349);
/* harmony import */ var _knock_off_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knock-off-routing.module */ 31402);
/* harmony import */ var _knock_off_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knock-off.component */ 3412);
/* harmony import */ var _knock_off_detail_knock_off_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./knock-off-detail/knock-off-detail.component */ 4128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39609);






class KnockOffModule {
}
KnockOffModule.ɵfac = function KnockOffModule_Factory(t) { return new (t || KnockOffModule)(); };
KnockOffModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: KnockOffModule });
KnockOffModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _knock_off_routing_module__WEBPACK_IMPORTED_MODULE_1__.KnockOffRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](KnockOffModule, { declarations: [_knock_off_component__WEBPACK_IMPORTED_MODULE_2__.KnockOffComponent,
        _knock_off_detail_knock_off_detail_component__WEBPACK_IMPORTED_MODULE_3__.KnockOffDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _knock_off_routing_module__WEBPACK_IMPORTED_MODULE_1__.KnockOffRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_feature_receipt_knock-off_knock-off_module_ts.js.map