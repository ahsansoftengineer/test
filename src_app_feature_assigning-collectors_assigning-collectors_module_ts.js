"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["src_app_feature_assigning-collectors_assigning-collectors_module_ts"],{

/***/ 93925:
/*!*************************************************************************************!*\
  !*** ./src/app/feature/assigning-collectors/assigning-collectors-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssigningCollectorsRoutingModule": () => (/* binding */ AssigningCollectorsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/action.enum */ 31978);
/* harmony import */ var _assigning_collectors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assigning-collectors.component */ 16753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39609);





const routes = [
    {
        path: '',
        component: _assigning_collectors_component__WEBPACK_IMPORTED_MODULE_1__.AssigningCollectorsComponent,
        data: {
            title: "Assigning Collectors",
            permission: [
                src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD,
                src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.EDIT,
            ],
        }
    }
];
class AssigningCollectorsRoutingModule {
}
AssigningCollectorsRoutingModule.ɵfac = function AssigningCollectorsRoutingModule_Factory(t) { return new (t || AssigningCollectorsRoutingModule)(); };
AssigningCollectorsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AssigningCollectorsRoutingModule });
AssigningCollectorsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AssigningCollectorsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 16753:
/*!********************************************************************************!*\
  !*** ./src/app/feature/assigning-collectors/assigning-collectors.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssigningCollectorsComponent": () => (/* binding */ AssigningCollectorsComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _shared_components_filters_hirarchy_filter_hirarchy_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/filters/hirarchy-filter/hirarchy-filter.component */ 12846);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 15719);











function AssigningCollectorsComponent_table_12_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " S No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssigningCollectorsComponent_table_12_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r12 + 1, " ");
} }
function AssigningCollectorsComponent_table_12_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Collector"), " ");
} }
function AssigningCollectorsComponent_table_12_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r13 == null ? null : item_r13.collector, " ");
} }
function AssigningCollectorsComponent_table_12_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Non-Collector"));
} }
function AssigningCollectorsComponent_table_12_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r14 == null ? null : item_r14.non_collector, " ");
} }
function AssigningCollectorsComponent_table_12_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Actions"));
} }
function AssigningCollectorsComponent_table_12_td_13_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const arr_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", arr_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", arr_r19.name, " ");
} }
function AssigningCollectorsComponent_table_12_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "select", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AssigningCollectorsComponent_table_12_td_13_option_4_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssigningCollectorsComponent_table_12_td_13_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const item_r15 = restoredCtx.$implicit; const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.assignCollector(_r16.value, item_r15 == null ? null : item_r15.id, _r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssigningCollectorsComponent_table_12_td_13_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const item_r15 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r22.removeCollector(item_r15 == null ? null : item_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.non_Collector_Array);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", item_r15 == null ? null : item_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", item_r15 == null ? null : item_r15.id);
} }
const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function AssigningCollectorsComponent_table_12_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 35);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c0, ctx_r9._ss.lng === "en", ctx_r9._ss.lng === "ur"));
} }
function AssigningCollectorsComponent_table_12_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 36);
} }
function AssigningCollectorsComponent_table_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AssigningCollectorsComponent_table_12_th_2_Template, 2, 0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AssigningCollectorsComponent_table_12_td_3_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](5, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AssigningCollectorsComponent_table_12_th_6_Template, 3, 3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AssigningCollectorsComponent_table_12_td_7_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AssigningCollectorsComponent_table_12_th_9_Template, 3, 3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AssigningCollectorsComponent_table_12_td_10_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AssigningCollectorsComponent_table_12_th_12_Template, 3, 3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AssigningCollectorsComponent_table_12_td_13_Template, 10, 3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AssigningCollectorsComponent_table_12_tr_14_Template, 1, 4, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AssigningCollectorsComponent_table_12_tr_15_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedCol)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedCol);
} }
class AssigningCollectorsComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_1__.BaseForm {
    constructor(injector, _activeRoute) {
        super(injector);
        this.non_Collector_Array = [];
        this.table_list = [];
        this.filter_object = {};
        this.showTable = false;
        this.displayedCol = ['S No', 'Collectors', 'Non-Collectors', 'Actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
    }
    ngOnInit() {
        this.componentName = 'Assigning Collectors';
        this.initForm();
    }
    initForm() {
        this.form = this._fb.group({
            id: [''],
            user_id: [''],
        });
    }
    getData(event) {
        this.filter_object = event;
        this._http.get({
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.SEARCH_COLLECTOR,
            query: {
                bg: event.bg,
                le: event.le,
                ou: event.ou,
                su: event.su != undefined ? event.su : '',
                organisation_id: event.organisation_id,
                system_id: event.system_id,
            }
        }).subscribe((res) => {
            this.table_list = res.data.records;
            this.dataSource.data = this.table_list;
            res?.data?.records.length > 0 ? (this.showTable = true) : (this.showTable = false,
                this._swl.noDataFound());
        });
    }
    getNonCollectors(event) {
        this._http.get({
            endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.NON_COLLECTORS,
            query: {
                bg: event.bg,
                le: event.le,
                ou: event.ou,
                su: event.su != undefined ? event.su : '',
                organisation_id: event.organisation_id,
                system_id: event.system_id,
            }
        }).subscribe((res) => {
            this.non_Collector_Array = res.data.records;
        });
    }
    assignCollector(val, id, buttonref) {
        if (val == undefined) {
            this._swl.genericSwal('please select the non-collector', 'warning', '');
        }
        else {
            this.form.get('id').patchValue(id);
            this.form.addControl('user_id', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''));
            this.form.get('user_id').patchValue(val);
            this.onSubmit(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.ASSIGN, 'Assigned');
        }
    }
    removeCollector(id) {
        this.form.get('id').patchValue(id);
        this.form.removeControl('user_id');
        this.onSubmit(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.REMOVE_ASSIGN, 'Unassigned');
    }
    onSubmit(url, title) {
        this.form.markAllAsTouched();
        this._vs._submitted = true;
        if (this.form.valid || true) {
            this._http.create({ body: this.form.value, endpoint: url }).subscribe({
                next: (res) => {
                    this._swl.swal(title, res.message).then((res) => {
                        this.form.reset();
                    });
                    if (!!res.data) {
                        this.dataSource.data = this._swl.UpdateObject(this.table_list, res.data);
                    }
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
AssigningCollectorsComponent.ɵfac = function AssigningCollectorsComponent_Factory(t) { return new (t || AssigningCollectorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
AssigningCollectorsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AssigningCollectorsComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 5, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], [2, "border-top", "0px !important"], [3, "filterData"], [1, "card-body", "pt-0"], [3, "formGroup"], [1, "mat_table"], ["mat-table", "", 3, "dataSource", 4, "ngIf"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "S No"], ["mat-header-cell", "", "class", "px-2", "translate", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "px-2", 4, "matCellDef"], ["matColumnDef", "Collectors"], ["mat-header-cell", "", "class", "px-2 w-custom", 4, "matHeaderCellDef"], ["matColumnDef", "Non-Collectors"], ["matColumnDef", "Actions"], ["mat-header-cell", "", "class", "px-2", 4, "matHeaderCellDef"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "translate", "", 1, "px-2"], ["mat-cell", "", 1, "px-2"], ["mat-header-cell", "", 1, "px-2", "w-custom"], ["mat-header-cell", "", 1, "px-2"], [1, "custom-actions"], ["placeholder", "Non-Collector", 1, "custom__select__class"], ["nonCollector", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "cutom-close", 3, "id", "click"], ["sucessAssign", ""], [1, "icon-check"], [1, "icon-close"], [3, "value"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""]], template: function AssigningCollectorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "hirarchy-filter", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("filterData", function AssigningCollectorsComponent_Template_hirarchy_filter_filterData_8_listener($event) { ctx.getData($event); return ctx.getNonCollectors($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AssigningCollectorsComponent_table_12_Template, 16, 4, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 3, "Assigning Collectors"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx._fs._form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showTable);
    } }, directives: [_shared_components_filters_hirarchy_filter_hirarchy_filter_component__WEBPACK_IMPORTED_MODULE_2__.HirarchyFilterComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".ng-select[_ngcontent-%COMP%] {\r\n    \r\n    width: 100%;\r\n}\r\n.cutom-close[_ngcontent-%COMP%] {\r\n    font-size: 29px;\r\n    padding: 0;\r\n    margin: 0 10px;\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n.cutom-close[_ngcontent-%COMP%]   i.icon-check[_ngcontent-%COMP%] {\r\n    color: #219521;\r\n}\r\n.cutom-close[_ngcontent-%COMP%]   i.icon-close[_ngcontent-%COMP%] {\r\n    color: #d90303;\r\n}\r\n.custom-actions[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.w-custom[_ngcontent-%COMP%] {\r\n    width: 200px !important;\r\n}\r\n\r\n.custom__select__class[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    border-radius: 3px;\r\n    padding: 4px;\r\n    border: 1px solid #0000004b;\r\n    background: white;\r\n}\r\n.custom__select__class[_ngcontent-%COMP%]   .cus_opt[_ngcontent-%COMP%]{\r\n    border-radius: 4px;\r\n    background: #ffffff;\r\n    box-shadow: 0px 0px 10px black;\r\n}\r\n\r\n@media(max-width: 1280px){\r\n    .custom__select__class[_ngcontent-%COMP%]{\r\n        width: 150px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbmluZy1jb2xsZWN0b3JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQSx1QkFBdUI7QUFFdkI7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJhc3NpZ25pbmctY29sbGVjdG9ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXNlbGVjdCB7XHJcbiAgICAvKiB6LWluZGV4OiAxOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmN1dG9tLWNsb3NlIHtcclxuICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY3V0b20tY2xvc2UgaS5pY29uLWNoZWNrIHtcclxuICAgIGNvbG9yOiAjMjE5NTIxO1xyXG59XHJcblxyXG4uY3V0b20tY2xvc2UgaS5pY29uLWNsb3NlIHtcclxuICAgIGNvbG9yOiAjZDkwMzAzO1xyXG59XHJcblxyXG4uY3VzdG9tLWFjdGlvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udy1jdXN0b20ge1xyXG4gICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIHNlbGVjdCBib3ggc3R5bGluZyAqL1xyXG4uY3VzdG9tX19zZWxlY3RfX2NsYXNze1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDRiO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLmN1c3RvbV9fc2VsZWN0X19jbGFzcyAuY3VzX29wdHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggYmxhY2s7XHJcbn1cclxuLyogc2VsZWN0IGJveCBzdHlsaW5nICovXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMjgwcHgpe1xyXG4gICAgLmN1c3RvbV9fc2VsZWN0X19jbGFzc3tcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 56211:
/*!*****************************************************************************!*\
  !*** ./src/app/feature/assigning-collectors/assigning-collectors.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssigningCollectorsModule": () => (/* binding */ AssigningCollectorsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 75349);
/* harmony import */ var _assigning_collectors_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assigning-collectors-routing.module */ 93925);
/* harmony import */ var _assigning_collectors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assigning-collectors.component */ 16753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);





class AssigningCollectorsModule {
}
AssigningCollectorsModule.ɵfac = function AssigningCollectorsModule_Factory(t) { return new (t || AssigningCollectorsModule)(); };
AssigningCollectorsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AssigningCollectorsModule });
AssigningCollectorsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _assigning_collectors_routing_module__WEBPACK_IMPORTED_MODULE_1__.AssigningCollectorsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AssigningCollectorsModule, { declarations: [_assigning_collectors_component__WEBPACK_IMPORTED_MODULE_2__.AssigningCollectorsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _assigning_collectors_routing_module__WEBPACK_IMPORTED_MODULE_1__.AssigningCollectorsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_feature_assigning-collectors_assigning-collectors_module_ts.js.map