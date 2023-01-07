"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["src_app_feature_box-management_box-management_module_ts"],{

/***/ 23970:
/*!*************************************************************************!*\
  !*** ./src/app/feature/box-management/box-management-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxManagementRoutingModule": () => (/* binding */ BoxManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/action.enum */ 31978);
/* harmony import */ var _deposit_add_deposit_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deposit-add/deposit-add.component */ 79758);
/* harmony import */ var _deposit_list_deposit_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deposit-list/deposit-list.component */ 75988);
/* harmony import */ var _receive_add_receive_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receive-add/receive-add.component */ 42754);
/* harmony import */ var _receive_list_receive_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./receive-list/receive-list.component */ 63840);
/* harmony import */ var _sell_add_sell_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sell-add/sell-add.component */ 23068);
/* harmony import */ var _sell_list_sell_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sell-list/sell-list.component */ 71257);
/* harmony import */ var _stock_zimmidar_stock_zimmidar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stock-zimmidar/stock-zimmidar.component */ 10959);
/* harmony import */ var _stock_zone_stock_zone_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stock-zone/stock-zone.component */ 96947);
/* harmony import */ var _stock_stock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stock/stock.component */ 71392);
/* harmony import */ var _vendor_add_vendor_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vendor-add/vendor-add.component */ 23624);
/* harmony import */ var _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vendor-list/vendor-list.component */ 44604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 39609);















const routes = [
    {
        path: '',
        children: [
            {
                path: 'vendor',
                component: _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_11__.VendorListComponent,
                data: {
                    title: 'Vendor List',
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.VIEW
                    ],
                    urls: [
                        { title: 'Box Management' },
                        { title: 'Vendor' },
                        { title: 'List' },
                    ],
                },
            },
            {
                path: 'vendor_add',
                component: _vendor_add_vendor_add_component__WEBPACK_IMPORTED_MODULE_10__.VendorAddComponent,
                data: {
                    title: 'Vendor Add',
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.EDIT
                    ],
                    urls: [
                        { title: 'Box Management' },
                        { title: 'Vendor' },
                        { title: 'Add' },
                    ],
                },
            },
            {
                path: 'box_receive',
                component: _receive_list_receive_list_component__WEBPACK_IMPORTED_MODULE_4__.ReceiveListComponent,
                data: {
                    title: 'Box Receive List',
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.VIEW,
                    ],
                    urls: [
                        { title: 'Box Management' },
                        { title: 'Box Receive' },
                        { title: 'List' },
                    ],
                },
            },
            {
                path: 'box_receive_add',
                component: _receive_add_receive_add_component__WEBPACK_IMPORTED_MODULE_3__.ReceiveAddComponent,
                data: {
                    title: 'Box Receive Add',
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.EDIT
                    ],
                    urls: [
                        { title: 'Box Management' },
                        { title: 'Box Receive' },
                        { title: 'Add' },
                    ],
                },
            },
            {
                path: 'box_stock',
                component: _stock_stock_component__WEBPACK_IMPORTED_MODULE_9__.StockComponent,
                data: {
                    title: 'Box Stock',
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.EDIT
                    ],
                    urls: [
                        { title: 'Box Management' },
                        { title: 'Box Stock' },
                        { title: 'List' },
                    ],
                },
            },
            {
                path: 'box_stock_ou',
                component: _stock_zone_stock_zone_component__WEBPACK_IMPORTED_MODULE_8__.StockZoneComponent,
                data: {
                    title: 'Box Stock OU',
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.VIEW
                    ],
                    urls: [
                        { title: 'Box Management' },
                        { title: 'Box Stock OU' },
                        { title: 'List' },
                    ],
                },
            },
            {
                path: 'box_stock_collector',
                component: _stock_zimmidar_stock_zimmidar_component__WEBPACK_IMPORTED_MODULE_7__.StockZimmidarComponent,
                data: {
                    title: 'Box Collector',
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.VIEW
                    ],
                    urls: [
                        { title: 'Box Management' },
                        { title: 'Box Stock Collector' },
                        { title: 'List' },
                    ],
                },
            },
            {
                path: 'box_sell_add',
                component: _sell_add_sell_add_component__WEBPACK_IMPORTED_MODULE_5__.SellAddComponent,
                data: {
                    title: 'Box Sell',
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.EDIT
                    ],
                    urls: [
                        { title: 'Box Management' },
                        { title: 'Box Sell' },
                        { title: 'Add' },
                    ],
                },
            },
            {
                path: 'box_sell_distribution_add',
                component: _sell_add_sell_add_component__WEBPACK_IMPORTED_MODULE_5__.SellAddComponent,
                data: {
                    title: 'Box Sell',
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.EDIT
                    ],
                    urls: [
                        { title: 'Box Management' },
                        { title: 'Box Sell' },
                        { title: 'Add' },
                    ],
                },
            },
            {
                path: 'box_sell',
                component: _sell_list_sell_list_component__WEBPACK_IMPORTED_MODULE_6__.SellListComponent,
                data: {
                    title: 'Box Sell',
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.VIEW,
                    ],
                    urls: [
                        { title: 'Box Management' },
                        { title: 'Box Sell' },
                        { title: 'List' },
                    ],
                },
            },
            {
                path: 'box_sell_distribution',
                component: _sell_list_sell_list_component__WEBPACK_IMPORTED_MODULE_6__.SellListComponent,
                data: {
                    title: 'Box Sell',
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.VIEW,
                    ],
                    urls: [
                        { title: 'Box Management' },
                        { title: 'Box Sell' },
                        { title: 'List' },
                    ],
                },
            },
            {
                path: 'box_deposit_add',
                component: _deposit_add_deposit_add_component__WEBPACK_IMPORTED_MODULE_1__.DepositAddComponent,
                data: {
                    title: 'Box Deposit',
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD,
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.EDIT
                    ],
                    urls: [
                        { title: 'Box Management' },
                        { title: 'Box Deposit' },
                        { title: 'Add' },
                    ],
                },
            },
            {
                path: 'box_deposit',
                component: _deposit_list_deposit_list_component__WEBPACK_IMPORTED_MODULE_2__.DepositListComponent,
                data: {
                    title: 'Box Deposit',
                    permission: [
                        src_app_enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.VIEW
                    ],
                    urls: [
                        { title: 'Box Management' },
                        { title: 'Box Deposit' },
                        { title: 'List' },
                    ],
                },
            },
        ],
    },
];
class BoxManagementRoutingModule {
}
BoxManagementRoutingModule.ɵfac = function BoxManagementRoutingModule_Factory(t) { return new (t || BoxManagementRoutingModule)(); };
BoxManagementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: BoxManagementRoutingModule });
BoxManagementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](BoxManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 92230:
/*!*****************************************************************!*\
  !*** ./src/app/feature/box-management/box-management.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxManagementModule": () => (/* binding */ BoxManagementModule)
/* harmony export */ });
/* harmony import */ var _box_management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box-management-routing.module */ 23970);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 75349);
/* harmony import */ var _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor-list/vendor-list.component */ 44604);
/* harmony import */ var _receive_list_receive_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receive-list/receive-list.component */ 63840);
/* harmony import */ var _receive_add_receive_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./receive-add/receive-add.component */ 42754);
/* harmony import */ var _vendor_add_vendor_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor-add/vendor-add.component */ 23624);
/* harmony import */ var _stock_stock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock/stock.component */ 71392);
/* harmony import */ var _donor_donor_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../donor/donor.module */ 99820);
/* harmony import */ var _sell_add_sell_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sell-add/sell-add.component */ 23068);
/* harmony import */ var _sell_list_sell_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sell-list/sell-list.component */ 71257);
/* harmony import */ var _stock_zimmidar_stock_zimmidar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stock-zimmidar/stock-zimmidar.component */ 10959);
/* harmony import */ var _stock_zone_stock_zone_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stock-zone/stock-zone.component */ 96947);
/* harmony import */ var _deposit_add_deposit_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./deposit-add/deposit-add.component */ 79758);
/* harmony import */ var _deposit_list_deposit_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deposit-list/deposit-list.component */ 75988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 39609);















class BoxManagementModule {
}
BoxManagementModule.ɵfac = function BoxManagementModule_Factory(t) { return new (t || BoxManagementModule)(); };
BoxManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: BoxManagementModule });
BoxManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _donor_donor_module__WEBPACK_IMPORTED_MODULE_7__.DonorModule,
            _box_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.BoxManagementRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](BoxManagementModule, { declarations: [_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_2__.VendorListComponent,
        _receive_list_receive_list_component__WEBPACK_IMPORTED_MODULE_3__.ReceiveListComponent,
        _receive_add_receive_add_component__WEBPACK_IMPORTED_MODULE_4__.ReceiveAddComponent,
        _vendor_add_vendor_add_component__WEBPACK_IMPORTED_MODULE_5__.VendorAddComponent,
        _stock_stock_component__WEBPACK_IMPORTED_MODULE_6__.StockComponent,
        _sell_add_sell_add_component__WEBPACK_IMPORTED_MODULE_8__.SellAddComponent,
        _sell_list_sell_list_component__WEBPACK_IMPORTED_MODULE_9__.SellListComponent,
        _stock_zimmidar_stock_zimmidar_component__WEBPACK_IMPORTED_MODULE_10__.StockZimmidarComponent,
        _stock_zone_stock_zone_component__WEBPACK_IMPORTED_MODULE_11__.StockZoneComponent,
        _deposit_add_deposit_add_component__WEBPACK_IMPORTED_MODULE_12__.DepositAddComponent,
        _deposit_list_deposit_list_component__WEBPACK_IMPORTED_MODULE_13__.DepositListComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _donor_donor_module__WEBPACK_IMPORTED_MODULE_7__.DonorModule,
        _box_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.BoxManagementRoutingModule] }); })();


/***/ }),

/***/ 79758:
/*!*****************************************************************************!*\
  !*** ./src/app/feature/box-management/deposit-add/deposit-add.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositAddComponent": () => (/* binding */ DepositAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base-list-class */ 42286);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_app_model_transaction_hierarchy_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/transaction/hierarchy.form */ 72860);
/* harmony import */ var src_app_static_custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/static/custom */ 65910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _shared_components_control_ddd_ddd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/control/ddd/ddd.component */ 80834);
/* harmony import */ var _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/control/dd/dd.component */ 32231);
/* harmony import */ var _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/control/txt/txt.component */ 55806);
/* harmony import */ var _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/control/date/date.component */ 24280);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ 37366);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _shared_components_control_image_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/control/image/image.component */ 26876);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 71144);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 29383);
/* harmony import */ var _shared_components_table_tbl_date_tbl_date_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/table/tbl-date/tbl-date.component */ 98308);
/* harmony import */ var _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/table/tbl-txt/tbl-txt.component */ 33086);
/* harmony import */ var _shared_components_table_tbl_ac_tbl_ac_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/table/tbl-ac/tbl-ac.component */ 11136);
/* harmony import */ var _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/table/di-paginator/di-paginator.component */ 65141);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/directive/permission.directive */ 47399);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 15719);
























function DepositAddComponent_di_txt_38_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "di-txt", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function DepositAddComponent_di_txt_38_Template_di_txt_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r36.addValidatorToAmount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function DepositAddComponent_di_img_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "di-img", 32);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("imgType", ctx_r6.img_expense_slip)("imgURL", ctx_r6.IMG_URL.BOX_DEPOSIT)("submitted", ctx_r6._vs._submitted);
} }
function DepositAddComponent_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "S No"));
} }
function DepositAddComponent_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r39 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", i_r39 + ctx_r8._tbls[ctx_r8.URLz.$].index * ctx_r8._tbls[ctx_r8.URLz.$].size + 1, " ");
} }
function DepositAddComponent_th_50_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositAddComponent_th_50_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); ctx_r40._reset(ctx_r40.URLz.$); return ctx_r40._refresh(ctx_r40.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositAddComponent_th_50_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r42._refresh(ctx_r42.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function DepositAddComponent_td_51_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-checkbox", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function DepositAddComponent_td_51_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r44.addValidatorToAmount(); })("ngModelChange", function DepositAddComponent_td_51_Template_mat_checkbox_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r45); const item_r43 = restoredCtx.$implicit; return item_r43.deposit_id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", item_r43.deposit_id != null && item_r43.deposit_id != true && item_r43.deposit_id != false)("ngModel", item_r43.deposit_id);
} }
function DepositAddComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "di-tbl-date", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("group", ctx_r11._tbls[ctx_r11.URLz.$] == null ? null : ctx_r11._tbls[ctx_r11.URLz.$].form);
} }
function DepositAddComponent_td_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r47 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](2, 1, item_r47 == null ? null : item_r47.created_at, ctx_r12.date, "mediumDate"), " ");
} }
function DepositAddComponent_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "di-tbl-txt", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("group", ctx_r13._tbls[ctx_r13.URLz.$] == null ? null : ctx_r13._tbls[ctx_r13.URLz.$].form);
} }
function DepositAddComponent_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r48 == null ? null : item_r48.donor == null ? null : item_r48.donor.name, " ");
} }
function DepositAddComponent_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "di-tbl-txt", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("group", ctx_r15._tbls[ctx_r15.URLz.$] == null ? null : ctx_r15._tbls[ctx_r15.URLz.$].form);
} }
function DepositAddComponent_td_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r49 == null ? null : item_r49.donor == null ? null : item_r49.donor.mobile, " ");
} }
function DepositAddComponent_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "di-tbl-txt", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("group", ctx_r17._tbls[ctx_r17.URLz.$] == null ? null : ctx_r17._tbls[ctx_r17.URLz.$].form);
} }
function DepositAddComponent_td_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r50 == null ? null : item_r50.donor == null ? null : item_r50.donor.donor_detail == null ? null : item_r50.donor.donor_detail.followup, " ");
} }
function DepositAddComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "di-tbl-txt", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("group", ctx_r19._tbls[ctx_r19.URLz.$] == null ? null : ctx_r19._tbls[ctx_r19.URLz.$].form);
} }
function DepositAddComponent_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r51 == null ? null : item_r51.donor == null ? null : item_r51.donor.address, " ");
} }
function DepositAddComponent_th_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "di-tbl-txt", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("group", ctx_r21._tbls[ctx_r21.URLz.$] == null ? null : ctx_r21._tbls[ctx_r21.URLz.$].form);
} }
function DepositAddComponent_td_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r52 == null ? null : item_r52.donor == null ? null : item_r52.donor.donor_detail == null ? null : item_r52.donor.donor_detail.near_by, " ");
} }
function DepositAddComponent_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "di-tbl-txt", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("group", ctx_r23._tbls[ctx_r23.URLz.$] == null ? null : ctx_r23._tbls[ctx_r23.URLz.$].form);
} }
function DepositAddComponent_td_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r53 == null ? null : item_r53.box_stock == null ? null : item_r53.box_stock.reference_no, " ");
} }
function DepositAddComponent_th_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "Box Quantity"), " ");
} }
function DepositAddComponent_td_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r54 == null ? null : item_r54.box_qty, " ");
} }
function DepositAddComponent_th_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "di-tbl-txt", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("group", ctx_r27._tbls[ctx_r27.URLz.$] == null ? null : ctx_r27._tbls[ctx_r27.URLz.$].form);
} }
function DepositAddComponent_td_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r55 == null ? null : item_r55.box_stock == null ? null : item_r55.box_stock.price_per_box, " ");
} }
function DepositAddComponent_th_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "Total"));
} }
function DepositAddComponent_td_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", (item_r56 == null ? null : item_r56.box_stock == null ? null : item_r56.box_stock.price_per_box) * (item_r56 == null ? null : item_r56.box_qty), " ");
} }
function DepositAddComponent_th_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "di-tbl-ac", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("group", ctx_r31._tbls[ctx_r31.URLz.$] == null ? null : ctx_r31._tbls[ctx_r31.URLz.$].form)("url", ctx_r31.URLz.COLLECTOR);
} }
function DepositAddComponent_td_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r57 == null ? null : item_r57.collector == null ? null : item_r57.collector.title, " ");
} }
const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function DepositAddComponent_tr_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 83);
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](1, _c0, ctx_r33._ss.lng === "en", ctx_r33._ss.lng === "ur"));
} }
function DepositAddComponent_tr_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 84);
} }
function DepositAddComponent_button_95_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositAddComponent_button_95_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r59._fhs._switch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](4, _c0, ctx_r35._ss.lng === "en", ctx_r35._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "Cancel"), " ");
} }
const _c1 = function () { return { parent_id: 2 }; };
const _c2 = function (a0) { return { query: a0 }; };
class DepositAddComponent extends src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__.BaseListClass {
    constructor(injector) {
        super(injector);
        // Images Access
        this.img_expense_slip = { display: 'Expense Slip' };
        this.img_deposit_slip = { display: 'Deposit Slip' };
    }
    ngOnInit() {
        this._fhs._pathLocation = 'box_management/box_sell';
        this._component = 'Box Deposit';
        this.param.endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_SELL_DEPOSIT;
        this.initForm();
        this.afterInitForm();
        this.initTables();
    }
    initForm() {
        const hierarchyForm = this.injector.get(src_app_model_transaction_hierarchy_form__WEBPACK_IMPORTED_MODULE_2__.HierarchyForm);
        this._fs._form = this._fb.group({
            ...hierarchyForm.initForm().controls,
            deposit_date: ['', this._vs._vals('Deposit Date')],
            bank_id: ['', this._vs._vals('Bank')],
            branch_name: ['', this._vs._val('Branch Name', { alphaNum: 1 })],
            receipt_number: ['', this._vs._val('Receipt No', { min: 1, max: 1000000000 })],
            amount: ['', this._vs._val('Amount', { min: 1, max: 1000000000, decimal: 1 })],
            is_expense_amount: [false],
            total_collection_amount: [''],
            date_from: ['', this._vs._vals('From Date')],
            date_to: ['', this._vs._vals('To Date')]
        });
        // expense_slip : string;
        // deposit_slip: string;
    }
    afterInitForm() {
        this.subscribeExpenseChanges();
        this._activeId = this._fhs._getURLParam('id');
        if (this._activeId) {
            this.patchData();
        }
        else {
            this.subscribeDateRangeChanges('date_from');
            this.subscribeDateRangeChanges('date_to');
        }
        this.serviceFormValueSubscritpion();
    }
    patchData() {
        this._http
            .get({ ...this.param, resource: this._activeId })
            .subscribe((res) => {
            const data = this.data = res.data.row;
            this._fs._form.patchValue({
                organisation_id: data?.organisation_id,
                system_id: data?.system_id,
                bg: data?.bg,
                le: data?.le,
                ou: data?.ou,
                su: data?.su,
                deposit_date: data.deposit_date,
                bank_id: data.bank_id,
                branch_name: data.branch_name,
                receipt_number: data.receipt_number,
                amount: data.amount,
                expense_amount: data.expense_amount,
                total_collection_amount: data.total_collection_amount,
                date_from: data.date_from,
                date_to: data.date_to,
            });
            this.img_expense_slip.link = data.expense_slip;
            this.img_deposit_slip.link = data.deposit_slip;
        });
    }
    _onSubmity() {
        const list = this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].dataSource.data;
        const finalList = [];
        list.forEach(x => {
            if (x.deposit_id)
                finalList.push(x.id);
        });
        return super._onSubmity({
            validate: () => {
                const form = this._fs._form;
                if (form.valid && this.img_deposit_slip.link &&
                    !this.img_deposit_slip.error &&
                    finalList.length > 0 &&
                    this.addValidatorToAmount()) {
                    if (form.get('is_expense_amount').value) {
                        return (!this.img_expense_slip.link || this.img_expense_slip.error);
                    }
                    else {
                        // Validatation Success
                        return false;
                    }
                }
                else {
                    return true;
                }
            },
            body: (ps) => {
                const fd = new FormData();
                if (this.img_expense_slip.file) {
                    fd.append('expense_slip', this.img_expense_slip.file);
                }
                if (this.img_deposit_slip.file) {
                    fd.append('deposit_slip', this.img_deposit_slip.file);
                }
                if (this._activeId) {
                    this._fs._form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this._activeId));
                }
                const result = this._fs._form.value;
                result.sell_box_id = finalList;
                src_app_static_custom__WEBPACK_IMPORTED_MODULE_3__.Custom.jsontoFormData(result, '', fd);
                ps.param.body = fd;
            }
        });
    }
    // Subscriptions
    addValidatorToAmount() {
        let totalSelection = 0;
        let selectedItems = 0;
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].dataSource.data.forEach(item => {
            if (item.deposit_id == true) {
                selectedItems++;
                const resultvalue = item?.box_stock?.price_per_box * item?.box_qty;
                totalSelection += resultvalue;
            }
        });
        const form = this._fs._form;
        if (form.get('is_expense_amount').value && form.get('expense_amount')?.value) {
            const expenseAmount = form.get('expense_amount').value;
            totalSelection += +expenseAmount;
        }
        const control = form.get('amount');
        control.clearValidators();
        if (totalSelection == 0) {
            totalSelection = 1;
        }
        control.addValidators([
            this._vs._val('Amount', { min: totalSelection, max: 1000000000 })
        ]);
        const amount = control.value;
        if (amount < totalSelection) {
            control.setErrors({
                key: "MIN",
                en: 'Minimum digits ' + totalSelection + ' allowed',
                ur: ' کم از کم'.concat(' ', totalSelection.toString(), ' ', 'ہندسے کی اجازت ہے۔')
            });
        }
        else if (amount > 0 && amount >= totalSelection) {
            control.setErrors(null);
        }
        this._fs._form.updateValueAndValidity();
        return (amount > 0 && amount >= totalSelection && selectedItems);
    }
    subscribeExpenseChanges() {
        const subs = this._fs._form.get('is_expense_amount').valueChanges.subscribe(val => {
            if (val) {
                this._fs._form.addControl('expense_amount', new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', this._vs._val('Expense Amount', { num: 1, max: 1000000000 })));
            }
            else {
                this._fs._form.removeControl('expense_amount');
            }
            this.addValidatorToAmount();
        });
        this.subscriptionArray.push(subs);
    }
    subscribeDateRangeChanges(controlName) {
        const subs = this._fs?._form?.get(controlName)?.valueChanges?.subscribe(val => {
            if (controlName == 'date_from') {
                this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].dataSource.data = [];
            }
            else if (val) {
                val = this._fhs._dateOnly(val);
                this.getDataByDate(val, (result) => {
                    this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].dataSource.data = result.data.records;
                    this._refresh(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
                });
            }
        });
        this.subscriptionArray.push(subs);
    }
    getDataByDate(
    // tslint:disable-next-line: variable-name
    date_to, handleNext) {
        const { organisation_id, system_id, bg, le, ou, su, date_from } = this._fs._form.value;
        if (date_from && date_to && organisation_id && system_id && bg && le && ou && su) {
            this.listParam = {
                organisation_id,
                system_id,
                bg,
                le,
                ou,
                su,
                date_from,
                date_to,
            };
            this._http.gets({
                endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_SELL,
                query: {
                    ...this.listParam
                }
            }).subscribe({
                next: (res) => {
                    handleNext(res);
                }
            });
            // BOX_SELL
        }
        else {
            this._fs._form.markAllAsTouched();
        }
    }
    serviceFormValueSubscritpion() {
        // this._fs._form.valueChanges.subscribe(x => {
        // })
    }
    // List Handling
    initTables() {
        this._reset(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].columns = [
            'id',
            'actions',
            'date',
            'name',
            'mobile',
            'followup',
            'address',
            'near_by',
            'reference_no',
            'box_qty',
            'price_per_box',
            'total',
            'collector_id',
        ];
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_SELL;
        this._formCreator(this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$]);
        // this._refresh(URLz.$, '')
    }
}
DepositAddComponent.ɵfac = function DepositAddComponent_Factory(t) { return new (t || DepositAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Injector)); };
DepositAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: DepositAddComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵProvidersFeature"]([src_app_model_transaction_hierarchy_form__WEBPACK_IMPORTED_MODULE_2__.HierarchyForm]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]], decls: 96, vars: 59, consts: [[1, "row"], [1, "col-sm-12", "col-lg-12"], [1, "card", "card__styling"], [1, "card-body", "custom__card__body__styling"], [1, "card-title"], [2, "border-top", "0px !important"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "row", "card-body", "py-0"], ["field", "organisation_id", "lbl", "Organization", 3, "url", "oneTimeLoad", "load", "child"], ["field", "system_id", "lbl", "System", 3, "url", "load", "child"], ["sys", ""], ["field", "bg", "lbl", "Business Group", 3, "url", "load", "child"], ["bg", ""], ["field", "le", "lbl", "Legal Entity", 3, "url", "load", "child"], ["le", ""], ["field", "ou", "lbl", "Operating Unit", 3, "url", "load", "child"], ["ou", ""], ["field", "su", "lbl", "Sub Unit", 3, "url", "load"], ["su", ""], ["field", "bank_id", "lbl", "Bank", "key_parent_id", "no", "parentFCName", "system_id", 3, "url", "param", "load"], ["field", "branch_name", "lbl", "Branch Name"], ["field", "receipt_number", "lbl", "Receipt No", "type", "number"], ["field", "deposit_date", "lbl", "Deposit Date"], ["field", "date_from", "lbl", "From Date", "toDate", "date_to"], ["field", "date_to", "lbl", "To Date", "fromDate", "date_from"], [1, "col-12", "pb-3"], ["field", "amount", "lbl", "Amount", "type", "number"], ["field", "total_collection_amount", "lbl", "Total Collection Amount", "type", "number", 3, "disabled"], [1, "col-lg-3", "col-md-4", "p-0", "my-1"], ["formControlName", "is_expense_amount", 1, "col-md-12", "pt-3", "req-bank", 3, "ngClass"], [1, "pl-3", "pt-2", 2, "font-size", "10px", "color", "#f44336"], ["field", "expense_amount", "lbl", "Expense Amount", "type", "number", 3, "change", 4, "ngIf"], [3, "imgType", "imgURL", "submitted"], [3, "imgType", "imgURL", "submitted", 4, "ngIf"], [1, "col-12"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px;", "class", "", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "pl-3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "date"], ["class", "pr-3", "mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 4, "matHeaderCellDef"], ["class", "px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "mobile"], ["matColumnDef", "followup"], ["matColumnDef", "address"], ["matColumnDef", "near_by"], ["matColumnDef", "reference_no"], ["matColumnDef", "box_qty"], ["matColumnDef", "price_per_box"], ["matColumnDef", "total"], ["class", "pr-3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "collector_id"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "tbl", "paginateEvent"], [1, "card-body"], [1, "action-form"], [1, "form-group", "m-b-0", "text_align"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light", "custon__btns__class", 3, "disabled", "ngClass"], ["mat-raised-button", "", "type", "button", "class", "btn btn-info waves-effect waves-light custon__btns__class", 3, "ngClass", "click", 4, "permission"], ["field", "expense_amount", "lbl", "Expense Amount", "type", "number", 3, "change"], ["mat-header-cell", "", 1, "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", 1, "pl-3"], [1, "ti-reload", "text-info", "pointer", "px-2", 3, "click"], [1, "ti-search", "text-info", "pointer", "px-2", 3, "click"], ["color", "primary", 3, "disabled", "ngModel", "change", "ngModelChange"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 1, "pr-3"], ["field", "date", "lbl", "Date", 3, "group"], ["mat-cell", "", 1, "px-3"], ["field", "name", "lbl", "Donor Name", 3, "group"], ["field", "mobile", "lbl", "Mobile", 3, "group"], ["field", "followup", "lbl", "Follow up", 3, "group"], ["field", "address", "lbl", "Address", 3, "group"], ["field", "near_by", "lbl", "Near By", 3, "group"], ["field", "reference_no", "lbl", "Reference No", 3, "group"], ["field", "price_per_box", "lbl", "Price", 3, "group"], ["mat-header-cell", "", 1, "pr-3"], ["lbl", "Collector", "field", "collector_id", 3, "group", "url"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "waves-effect", "waves-light", "custon__btns__class", 3, "ngClass", "click"]], template: function DepositAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function DepositAddComponent_Template_form_ngSubmit_9_listener() { return ctx._onSubmity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "di-ddd", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "di-dd", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "di-dd", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "di-dd", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "di-dd", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "di-dd", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "di-dd", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "di-txt", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "di-txt", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](25, "di-date", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "di-date", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](27, "di-date", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "di-txt", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](31, "di-txt", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "mat-slide-toggle", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](38, DepositAddComponent_di_txt_38_Template, 1, 0, "di-txt", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](41, "di-img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, DepositAddComponent_di_img_42_Template, 1, 3, "di-img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "table", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("matSortChange", function DepositAddComponent_Template_table_matSortChange_45_listener($event) { return ctx._sort($event, ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](46, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](47, DepositAddComponent_th_47_Template, 3, 3, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](48, DepositAddComponent_td_48_Template, 2, 1, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](49, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](50, DepositAddComponent_th_50_Template, 3, 0, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](51, DepositAddComponent_td_51_Template, 2, 2, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](52, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, DepositAddComponent_th_53_Template, 2, 1, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](54, DepositAddComponent_td_54_Template, 3, 5, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](55, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](56, DepositAddComponent_th_56_Template, 2, 1, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](57, DepositAddComponent_td_57_Template, 2, 1, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](58, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, DepositAddComponent_th_59_Template, 2, 1, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, DepositAddComponent_td_60_Template, 2, 1, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](61, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](62, DepositAddComponent_th_62_Template, 2, 1, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](63, DepositAddComponent_td_63_Template, 2, 1, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](64, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](65, DepositAddComponent_th_65_Template, 2, 1, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](66, DepositAddComponent_td_66_Template, 2, 1, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](67, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](68, DepositAddComponent_th_68_Template, 2, 1, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](69, DepositAddComponent_td_69_Template, 2, 1, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](70, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](71, DepositAddComponent_th_71_Template, 2, 1, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](72, DepositAddComponent_td_72_Template, 2, 1, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](73, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](74, DepositAddComponent_th_74_Template, 3, 3, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](75, DepositAddComponent_td_75_Template, 2, 1, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](76, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](77, DepositAddComponent_th_77_Template, 2, 1, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](78, DepositAddComponent_td_78_Template, 2, 1, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](79, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](80, DepositAddComponent_th_80_Template, 3, 3, "th", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](81, DepositAddComponent_td_81_Template, 2, 1, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](82, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](83, DepositAddComponent_th_83_Template, 2, 2, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](84, DepositAddComponent_td_84_Template, 2, 1, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](85, DepositAddComponent_tr_85_Template, 1, 4, "tr", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](86, DepositAddComponent_tr_86_Template, 1, 0, "tr", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "di-paginator", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("paginateEvent", function DepositAddComponent_Template_di_paginator_paginateEvent_87_listener() { return ctx._refresh(ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function DepositAddComponent_Template_form_ngSubmit_88_listener() { return ctx._onSubmity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](91, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](95, DepositAddComponent_button_95_Template, 3, 7, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](13);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](15);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](17);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](19);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](21);
        let tmp_26_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 42, !ctx._activeId ? "Add" : "Edit"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 44, "Box Deposit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx._fs._form);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("url", ctx.URLz.ORG)("oneTimeLoad", true)("load", false)("child", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("url", ctx.URLz.ORG_SYSTEM)("load", false)("child", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("url", ctx.URLz.BG)("load", false)("child", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("url", ctx.URLz.LE)("load", false)("child", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("url", ctx.URLz.OU)("load", false)("child", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("url", ctx.URLz.SU)("load", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("url", ctx.URLz.BANK)("param", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](51, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](50, _c1)))("load", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](53, _c0, ctx._ss.lng === "en", ctx._ss.lng === "ur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](35, 46, "Expense Amount"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", (tmp_26_0 = ctx._vs.errMsg("is_deposit")) == null ? null : tmp_26_0.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx._fhs._has("expense_amount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("imgType", ctx.img_deposit_slip)("imgURL", ctx.IMG_URL.BOX_DEPOSIT)("submitted", ctx._vs._submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx._fhs._has("expense_amount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.URLz.$].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.URLz.$].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.URLz.$].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("tbl", ctx._tbls[ctx.URLz.$]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx._fs._form);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !(ctx._tbls[ctx.URLz.$].dataSource == null ? null : ctx._tbls[ctx.URLz.$].dataSource.data == null ? null : ctx._tbls[ctx.URLz.$].dataSource.data.length))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](56, _c0, ctx._ss.lng === "en", ctx._ss.lng === "ur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](94, 48, "Save"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("permission", ctx.ACTION.VIEW);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _shared_components_control_ddd_ddd_component__WEBPACK_IMPORTED_MODULE_4__.DddComponent, _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_5__.DdComponent, _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_6__.TxtComponent, _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_7__.DateComponent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_components_control_image_image_component__WEBPACK_IMPORTED_MODULE_8__.ImageComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCell, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortHeader, _shared_components_table_tbl_date_tbl_date_component__WEBPACK_IMPORTED_MODULE_9__.TblDateComponent, _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_10__.TblTxtComponent, _shared_components_table_tbl_ac_tbl_ac_component__WEBPACK_IMPORTED_MODULE_11__.TblACComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRow, _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_12__.DiPaginatorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_13__.PermissionDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe], styles: [".card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n\r\n.text_align[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n.custon__btns__class[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  padding: 0px 0px;\r\n  margin-left: 5px\r\n}\r\n@media(max-width: 768px){\r\n  .text_align[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-disabled .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline {\r\n  background-color: #ebebeb !important;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n    padding: 5px 0 7px 0 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle-content {\r\n  font-size: 13px !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n  top: 30px !important;\r\n  margin-top: -15px !important;\r\n  font-weight: 700 !important;\r\n  font-size: 15px;\r\n  color: #303030ad;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n    overflow: visible !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-select-panel{\r\n  width: 100% !important;\r\n  min-width: 100% !important;\r\n  transform: translate(15px, 40px) !important;\r\n  background: #ffffff !important;\r\n  border: 1px solid #00000033;\r\n  box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-select-value{\r\n  font-size: 16px;\r\n  font-weight: 600 !important;\r\n  overflow: hidden !important;\r\n}\r\n[_nghost-%COMP%]      .mat-input-element{\r\n  font-size: 16px !important;\r\n  font-weight: 600 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-option-text{\r\n  color: #0c0c0c;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\ncolor: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n  color: #f44836 !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #f44836 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n  color: #0c0c0c !important;\r\n  overflow: visible !important;\r\n  \r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label{\r\n  overflow: visible !important;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n  color: #0c0c0c !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n  color: #0c0c0c77;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .ng-touched.ng-valid{\r\n  color: #0c0c0c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-ripple-element{\r\n  background-color: #024d7071 !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n  color: #bfc1c4;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n  transform: translate3d(30px, 0, 0) !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n    width: 50px !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-error{\r\n    font-size: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcG9zaXQtYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0Esd0JBQXdCO0FBQ3hCO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCO0FBQ0Y7QUFFQTtFQUNFO01BQ0ksa0JBQWtCO0VBQ3RCO0FBQ0Y7QUFDQSx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBRTVCO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUI7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLGtEQUFrRDtBQUNwRDtBQUNBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7R0FFRztBQUNILHdCQUF3QjtBQUN4Qjs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUVsQixZQUFZO0FBQ1o7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0EsWUFBWTtBQUVaLGFBQWE7QUFDYjtFQUNFLGNBQWM7QUFDaEI7QUFDQSxhQUFhO0FBSWIsZUFBZTtBQUNmO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQSxlQUFlO0FBRWYsb0JBQW9CO0FBQ3BCO0lBQ0ksZUFBZTtBQUNuQjtBQUNBLG9CQUFvQiIsImZpbGUiOiJkZXBvc2l0LWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRfX3N0eWxpbmd7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzZDtcclxufVxyXG4uY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBvdmVyZmxvdy14OiBjbGlwO1xyXG59XHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmcgaDJ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggN3B4IC03cHggIzAwMDAwMDU3O1xyXG4gIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIGJ1dHRvbnMgc2F2ZSBDYW5jZWwgKi9cclxuLnRleHRfYWxpZ257XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY3VzdG9uX19idG5zX19jbGFzc3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMHB4IDBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAudGV4dF9hbGlnbntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4vKiBidXR0b25zIHNhdmUgQ2FuY2VsICovXHJcbi8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICBwYWRkaW5nOiA1cHggMCA3cHggMCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIHRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzMwMzAzMGFkO1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC1wYW5lbHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAzMztcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggLTRweCAjMDAwMDAwOWMgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtb3B0aW9uLXRleHR7XHJcbiAgY29sb3I6ICMwYzBjMGM7XHJcbn1cclxuLyogOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59ICovXHJcbi8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2ssXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XHJcbmNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAvKiBmb250LXNpemU6IDE1cHg7ICovXHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tcclxuICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZpZWxkcyBib3JkZXIgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le1xyXG4gIGNvbG9yOiAjMGMwYzBjNzc7XHJcbn1cclxuLyogZmllbGRzIGJvcmRlciAqL1xyXG5cclxuLyogdG9nZ2xlciAqL1xyXG46aG9zdCAvZGVlcC8gIC5uZy10b3VjaGVkLm5nLXZhbGlke1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjRkNzA3MSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHRvZ2dsZXIgKi9cclxuXHJcbi8qIGRpc2FibGVkICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICBjb2xvcjogI2JmYzFjNDtcclxufVxyXG4vKiBkaXNhYmxlZCAqL1xyXG5cclxuXHJcblxyXG4vKiB0b2dnbGUgYmFyICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVye1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzBweCwgMCwgMCkgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntcclxuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogdG9nZ2xlIGJhciAqL1xyXG5cclxuLyogZXJyb3IgZm9udC1zaXplICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1lcnJvcntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4vKiBlcnJvciBmb250LXNpemUgKi9cclxuIl19 */"] });


/***/ }),

/***/ 75988:
/*!*******************************************************************************!*\
  !*** ./src/app/feature/box-management/deposit-list/deposit-list.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositListComponent": () => (/* binding */ DepositListComponent)
/* harmony export */ });
/* harmony import */ var src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base-list-class */ 42286);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_app_shared_components_dialogs_box_deposit_dialog_box_deposit_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/dialogs/box-deposit-dialog/box-deposit-dialog.component */ 59287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directive/permission.directive */ 47399);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/control/date/date.component */ 24280);
/* harmony import */ var _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/control/dd/dd.component */ 32231);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 71144);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 15719);
/* harmony import */ var _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/table/tbl-dd/tbl-dd.component */ 18533);
/* harmony import */ var _shared_components_table_tbl_ac_tbl_ac_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/table/tbl-ac/tbl-ac.component */ 11136);
/* harmony import */ var _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/table/tbl-txt/tbl-txt.component */ 33086);
/* harmony import */ var _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/table/di-paginator/di-paginator.component */ 65141);
















const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function DepositListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DepositListComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r34._switch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](4, _c0, ctx_r0._ss.lng === "en", ctx_r0._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("+ ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "Add"), " ");
} }
function DepositListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "S No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function DepositListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r37 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", i_r37 + ctx_r3._tbls[ctx_r3.URLz.$].index * ctx_r3._tbls[ctx_r3.URLz.$].size + 1, " ");
} }
function DepositListComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DepositListComponent_th_21_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); ctx_r38._reset(ctx_r38.URLz.$); return ctx_r38._refresh(ctx_r38.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DepositListComponent_th_21_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r40._refresh(ctx_r40.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function DepositListComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DepositListComponent_td_22_Template_i_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r43); const item_r41 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r42.openDialog(item_r41.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function DepositListComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-dd", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r6._tbls[ctx_r6.URLz.$] == null ? null : ctx_r6._tbls[ctx_r6.URLz.$].form)("url", ctx_r6.URLz.BG);
} }
function DepositListComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r44 == null ? null : item_r44.business_group == null ? null : item_r44.business_group.title, " ");
} }
function DepositListComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-dd", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r8._tbls[ctx_r8.URLz.$] == null ? null : ctx_r8._tbls[ctx_r8.URLz.$].form)("load", false)("url", ctx_r8.URLz.LE);
} }
function DepositListComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r45.legal_entity == null ? null : item_r45.legal_entity.title, " ");
} }
function DepositListComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-dd", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r10._tbls[ctx_r10.URLz.$] == null ? null : ctx_r10._tbls[ctx_r10.URLz.$].form)("url", ctx_r10.URLz.OU)("load", false);
} }
function DepositListComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r46.operating_unit == null ? null : item_r46.operating_unit.title, " ");
} }
function DepositListComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-dd", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r12._tbls[ctx_r12.URLz.$] == null ? null : ctx_r12._tbls[ctx_r12.URLz.$].form)("url", ctx_r12.URLz.SU)("load", false);
} }
function DepositListComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r47.sub_unit == null ? null : item_r47.sub_unit.title, " ");
} }
function DepositListComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-ac", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r14._tbls[ctx_r14.URLz.$] == null ? null : ctx_r14._tbls[ctx_r14.URLz.$].form)("url", ctx_r14.URLz.COLLECTOR);
} }
function DepositListComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r48 == null ? null : item_r48.collector == null ? null : item_r48.collector.title, " ");
} }
function DepositListComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-txt", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r16._tbls[ctx_r16.URLz.$] == null ? null : ctx_r16._tbls[ctx_r16.URLz.$].form);
} }
function DepositListComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r49 == null ? null : item_r49.receipt_number, " ");
} }
function DepositListComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-txt", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r18._tbls[ctx_r18.URLz.$] == null ? null : ctx_r18._tbls[ctx_r18.URLz.$].form);
} }
function DepositListComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r50 == null ? null : item_r50.amount, " ");
} }
function DepositListComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-dd", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r20._tbls[ctx_r20.URLz.$] == null ? null : ctx_r20._tbls[ctx_r20.URLz.$].form)("url", ctx_r20.URLz.BANK)("parent_id", 2);
} }
function DepositListComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r51 == null ? null : item_r51.bank == null ? null : item_r51.bank.title, " ");
} }
function DepositListComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-txt", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r22._tbls[ctx_r22.URLz.$] == null ? null : ctx_r22._tbls[ctx_r22.URLz.$].form);
} }
function DepositListComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r52 == null ? null : item_r52.branch_name, " ");
} }
function DepositListComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "Deposit Slip"), " ");
} }
function DepositListComponent_td_52_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DepositListComponent_td_52_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r56); const item_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r55.openImage(ctx_r55.IMG_URL.BOX_DEPOSIT + (item_r53 == null ? null : item_r53.deposit_slip), "Footer Image"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, "Deposit Slip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r54.IMG_URL.BOX_DEPOSIT + (item_r53 == null ? null : item_r53.deposit_slip), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function DepositListComponent_td_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DepositListComponent_td_52_img_1_Template, 2, 4, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r53 == null ? null : item_r53.deposit_slip);
} }
function DepositListComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "Expense Slip"), " ");
} }
function DepositListComponent_td_55_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DepositListComponent_td_55_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r62); const item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r61.openImage(ctx_r61.IMG_URL.BOX_DEPOSIT + (item_r59 == null ? null : item_r59.expense_slip), "Footer Image"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, "Expense Slip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r60.IMG_URL.BOX_DEPOSIT + (item_r59 == null ? null : item_r59.expense_slip), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function DepositListComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DepositListComponent_td_55_img_1_Template, 2, 4, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r59 == null ? null : item_r59.expense_slip);
} }
function DepositListComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-txt", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r28._tbls[ctx_r28.URLz.$] == null ? null : ctx_r28._tbls[ctx_r28.URLz.$].form);
} }
function DepositListComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r65 == null ? null : item_r65.expense_amount, " ");
} }
function DepositListComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "di-tbl-txt", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx_r30._tbls[ctx_r30.URLz.$] == null ? null : ctx_r30._tbls[ctx_r30.URLz.$].form);
} }
function DepositListComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r66 == null ? null : item_r66.total_collection_amount, " ");
} }
function DepositListComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 59);
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](1, _c0, ctx_r32._ss.lng === "en", ctx_r32._ss.lng === "ur"));
} }
function DepositListComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 60);
} }
class DepositListComponent extends src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__.BaseListClass {
    constructor() {
        super(...arguments);
        this.applyClass = { 'col-lg-6': true, 'col-md-6': true };
    }
    ngOnInit() {
        this._pathLocation = '/box_management/box_deposit_add';
        this._component = 'Box Deposit';
        this.initTables();
    }
    initTables() {
        this._reset(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].columns = [
            'id',
            'actions',
            'bg',
            'le',
            'ou',
            'su',
            'collector_id',
            'receipt_number',
            'amount',
            'bank_id',
            'branch_name',
            'deposit_slip',
            'expense_slip',
            'expense_amount',
            'total_collection_amount',
        ];
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_SELL_DEPOSIT;
        this._formCreator(this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$]);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].formFilter = this._fb.group({
            organisation_id: ['', this._vs._vals('Organisation')],
            system_id: ['', this._vs._vals('System')],
            date_from: ['', this._vs._vals('From Date')],
            date_to: ['', this._vs._vals('To Date')]
        });
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].formFilter.get('system_id').valueChanges.subscribe(val => {
            if (this.emptyCheck(val)) {
                this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].formFilter.get('system_id').patchValue(val, { emitEvent: false });
                this._refresh(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
            }
        });
    }
    openDialog(data) {
        const config = {
            panelClass: "dialog-responsive",
            data: { source: data }
        };
        const dialogRef = this._dialog.open(src_app_shared_components_dialogs_box_deposit_dialog_box_deposit_dialog_component__WEBPACK_IMPORTED_MODULE_2__.BoxDepositDialogComponent, config);
        dialogRef.afterClosed().subscribe(() => { return; });
    }
}
DepositListComponent.ɵfac = /*@__PURE__*/ function () { let ɵDepositListComponent_BaseFactory; return function DepositListComponent_Factory(t) { return (ɵDepositListComponent_BaseFactory || (ɵDepositListComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetInheritedFactory"](DepositListComponent)))(t || DepositListComponent); }; }();
DepositListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: DepositListComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 65, vars: 15, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], ["mat-raised-button", "", "type", "button", "class", "btn btn-info custon__add__btns__class float-right", 3, "ngClass", "click", 4, "permission"], [1, "card-body", "pt-0", "mt-4"], ["field", "date_from", "lbl", "From Date", "toDate", "date_to", 3, "group"], ["field", "date_to", "lbl", "To Date", "fromDate", "date_from", 3, "group"], ["field", "organisation_id", "lbl", "Organization", 3, "group", "url", "child"], ["field", "system_id", "lbl", "System", 3, "group", "url"], ["sys", ""], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px;", "class", "", "mat-header-cell", "", "translate", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "pl-3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "bg"], ["class", "pr-3", "mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 4, "matHeaderCellDef"], ["class", "px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "le"], ["matColumnDef", "ou"], ["matColumnDef", "su"], ["matColumnDef", "collector_id"], ["matColumnDef", "receipt_number"], ["matColumnDef", "amount"], ["matColumnDef", "bank_id"], ["matColumnDef", "branch_name"], ["matColumnDef", "deposit_slip"], ["matColumnDef", "expense_slip"], ["matColumnDef", "expense_amount"], ["matColumnDef", "total_collection_amount"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "tbl", "paginateEvent"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "custon__add__btns__class", "float-right", 3, "ngClass", "click"], ["mat-header-cell", "", "translate", "", 1, "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", 1, "pl-3"], [1, "ti-reload", "text-info", "pointer", "px-2", 3, "click"], [1, "ti-search", "text-info", "pointer", "px-2", 3, "click"], [1, "ti-eye", "text-info", "pointer", "px-2", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 1, "pr-3"], ["field", "bg", "lbl", "Business Group", 3, "group", "url"], ["mat-cell", "", 1, "px-3"], ["field", "le", "lbl", "Legal Entity", "parentFCName", "bg", 3, "group", "load", "url"], ["field", "ou", "lbl", "Operating Unit", "parentFCName", "le", 3, "group", "url", "load"], ["field", "su", "lbl", "Sub Unit", "parentFCName", "ou", 3, "group", "url", "load"], ["lbl", "Collector", "field", "collector_id", 3, "group", "url"], ["field", "receipt_number", "lbl", "Receipt No", 3, "group"], ["field", "amount", "lbl", "Amount", 3, "group"], ["field", "bank_id", "lbl", "Bank", 3, "group", "url", "parent_id"], ["field", "branch_name", "lbl", "Branch", 3, "group"], ["class", "tbl_img", 3, "src", "alt", "click", 4, "ngIf"], [1, "tbl_img", 3, "src", "alt", "click"], ["field", "expense_amount", "lbl", "Expense Amount", 3, "group"], ["field", "total_collection_amount", "lbl", "Total Collection", 3, "group"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""]], template: function DepositListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, DepositListComponent_button_7_Template, 3, 7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "di-date", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "di-date", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "di-dd", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "di-dd", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("matSortChange", function DepositListComponent_Template_table_matSortChange_16_listener($event) { return ctx._sort($event, ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](17, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, DepositListComponent_th_18_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, DepositListComponent_td_19_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](20, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, DepositListComponent_th_21_Template, 3, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, DepositListComponent_td_22_Template, 2, 0, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](23, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, DepositListComponent_th_24_Template, 2, 2, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, DepositListComponent_td_25_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](26, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, DepositListComponent_th_27_Template, 2, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, DepositListComponent_td_28_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](29, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, DepositListComponent_th_30_Template, 2, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, DepositListComponent_td_31_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](32, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, DepositListComponent_th_33_Template, 2, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, DepositListComponent_td_34_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](35, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, DepositListComponent_th_36_Template, 2, 2, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, DepositListComponent_td_37_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](38, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, DepositListComponent_th_39_Template, 2, 1, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, DepositListComponent_td_40_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](41, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, DepositListComponent_th_42_Template, 2, 1, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, DepositListComponent_td_43_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](44, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, DepositListComponent_th_45_Template, 2, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, DepositListComponent_td_46_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](47, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, DepositListComponent_th_48_Template, 2, 1, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, DepositListComponent_td_49_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](50, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, DepositListComponent_th_51_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](52, DepositListComponent_td_52_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](53, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](54, DepositListComponent_th_54_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](55, DepositListComponent_td_55_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](56, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, DepositListComponent_th_57_Template, 2, 1, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, DepositListComponent_td_58_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](59, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](60, DepositListComponent_th_60_Template, 2, 1, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](61, DepositListComponent_td_61_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](62, DepositListComponent_tr_62_Template, 1, 4, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, DepositListComponent_tr_63_Template, 1, 0, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "di-paginator", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("paginateEvent", function DepositListComponent_Template_di_paginator_paginateEvent_64_listener() { return ctx._refresh(ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 13, "Box Deposit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("permission", ctx.ACTION.ADD);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx._tbls[ctx.URLz.$] == null ? null : ctx._tbls[ctx.URLz.$].formFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx._tbls[ctx.URLz.$] == null ? null : ctx._tbls[ctx.URLz.$].formFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx._tbls[ctx.URLz.$] == null ? null : ctx._tbls[ctx.URLz.$].formFilter)("url", ctx.URLz.ORG)("child", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("group", ctx._tbls[ctx.URLz.$] == null ? null : ctx._tbls[ctx.URLz.$].formFilter)("url", ctx.URLz.ORG_SYSTEM);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.URLz.$].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.URLz.$].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.URLz.$].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("tbl", ctx._tbls[ctx.URLz.$]);
    } }, directives: [_shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_3__.PermissionDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_4__.DateComponent, _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_5__.DdComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_6__.TblDDComponent, _shared_components_table_tbl_ac_tbl_ac_component__WEBPACK_IMPORTED_MODULE_7__.TblACComponent, _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_8__.TblTxtComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_9__.DiPaginatorComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: [".card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.text-red[_ngcontent-%COMP%]{\r\n    color: #c53b55;\r\n}\r\n\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n\r\n\r\n.custon__add__btns__class[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  padding: 3px 5px;\r\n  background: transparent;\r\n  border: 0px;\r\n  box-shadow: 0px 0px 0px transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:hover{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:active{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:focus{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper{\r\n  padding: 0px 15px;\r\n  color: white !important;\r\n  background: #00c292 !important;\r\n  display: block;\r\n  font-size: 15px;\r\n  border-radius: 3px;\r\n  transition: 0.5s;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper:hover{\r\n  box-shadow: 0px 0px 10px -4px #000000a6;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-ripple.mat-button-ripple{\r\n  display: none !important;\r\n  opacity: 0 !important;\r\n}\r\n.cdk-mouse-focused.cdk-focused[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{\r\n  opacity: 0 !important;\r\n}\r\n\r\n\r\n\r\n.slection__styled   [_nghost-%COMP%]      .search.ng-touched{\r\n    color: #1a1a1a !important;\r\n\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%]{\r\n    background: #024e70 !important;\r\n    color: white !important;\r\n}\r\n.search[_ngcontent-%COMP%]{\r\n    color: #ffffff !important;\r\n    border-bottom: 1px solid whitesmoke;\r\n  }\r\n[_nghost-%COMP%]      .mat-sort-header-arrow{\r\n    color: white;\r\n}\r\n[_nghost-%COMP%]      .mat-sort-header-content{\r\n    color: white !important;\r\n}\r\n[_nghost-%COMP%]      .search::-moz-placeholder{\r\n    color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search:-ms-input-placeholder{\r\n    color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search::placeholder{\r\n    color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search.ng-touched{\r\n    color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search .ng-star-inserted{\r\n    color: #000 !important;\r\n}\r\n\r\n\r\n.mat_table[_ngcontent-%COMP%]{\r\n    max-height: 490px;\r\n    height: auto;\r\n}\r\ntr.mat-header-row[_ngcontent-%COMP%]{\r\n    height: 40px !important;\r\n}\r\n[_nghost-%COMP%]      tr.mat-row, tr.mat-footer-row[_ngcontent-%COMP%]{\r\n    height: 40px !important;\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{\r\n    white-space: nowrap !important;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(odd){\r\n    background-color: #ffffff00 !important;\r\n    transition: 0.1s;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(even){\r\n    background-color: #b3eeff2c !important;\r\n    border-top: 2px solid #0000000d !important;\r\n    border-bottom: 2px solid #0000000d !important;\r\n    transition: 0.1s;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(even):hover{\r\n    box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(odd):hover{\r\n    box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .switch.switch-small.checked{\r\n    background-color: #03a9f3 !important;\r\n}\r\n\r\n\r\n.custom__select__class[_ngcontent-%COMP%]{\r\n    border-radius: 3px;\r\n    padding: 4px;\r\n    border: 1px solid #0000004b;\r\n    background: white;\r\n}\r\n.custom__select__class[_ngcontent-%COMP%]   .cus_opt[_ngcontent-%COMP%]{\r\n    border-radius: 4px;\r\n    background: #ffffff;\r\n    box-shadow: 0px 0px 10px black;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-paginator-range-label{\r\n    margin: 0px !important;\r\n}\r\n\r\n\r\n.upload-large[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n.img-fluid[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    text-align: auto;\r\n  }\r\n.card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n  }\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n\r\n.text_align[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  }\r\n.custon__btns__class[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  \r\n  }\r\n.wajiba-nafila[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 50px 10px;\r\n  }\r\n@media(max-width: 768px){\r\n    .text_align[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n    [_nghost-%COMP%]     .custom-date  .md-drppicker.double{\r\n      width: 290px !important;\r\n      left: 0!important;\r\n      top: 100% !important;\r\n    }\r\n  }\r\n\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n      padding: 5px 0 7px 0 !important;\r\n  }\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n    top: 30px !important;\r\n    margin-top: -15px !important;\r\n    font-weight: 700 !important;\r\n    font-size: 15px;\r\n    color: #303030ad;\r\n  }\r\n[_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n      overflow: visible !important;\r\n  }\r\n\r\n\r\n[_nghost-%COMP%]      .mat-select-panel{\r\n    width: 100% !important;\r\n    min-width: 100% !important;\r\n    transform: translate(15px, 40px) !important;\r\n    background: #ffffff !important;\r\n    border: 1px solid #00000033;\r\n    box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-select-value{\r\n    font-size: 16px;\r\n    font-weight: 600 !important;\r\n    overflow: hidden !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-input-element{\r\n    font-size: 16px !important;\r\n    font-weight: 600 !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-option-text{\r\n    color: #0c0c0c;\r\n  }\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\n  color: #0eb9ec !important;\r\n  }\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n    color: #f44836 !important;\r\n  }\r\n[_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n    color: #f44836 !important;\r\n  }\r\n\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n    color: #0c0c0c !important;\r\n    overflow: visible !important;\r\n    \r\n  }\r\n[_nghost-%COMP%]      .mat-form-field-label{\r\n    overflow: visible !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n    color: #0c0c0c !important;\r\n  }\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n    color: #0c0c0c77;\r\n  }\r\n\r\n[_nghost-%COMP%]      .ng-touched.ng-valid{\r\n    color: #0c0c0c !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n    background-color: #0eb9ec !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n    background-color: #024d7071 !important;\r\n  }\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n    color: #bfc1c4;\r\n  }\r\n\r\n\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n    transform: translate3d(30px, 0, 0) !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n      width: 50px !important;\r\n  }\r\n\r\n\r\n[_nghost-%COMP%]      .mat-error{\r\n      font-size: 10px;\r\n  }\r\n\r\n[_nghost-%COMP%]     .md-drppicker.double {\r\n    width: 500px !important;\r\n  }\r\n[_nghost-%COMP%]     .md-drppicker td.active, [_nghost-%COMP%]     .md-drppicker td.active:hover {\r\n    background-color: #039be5 !important;\r\n  }\r\n[_nghost-%COMP%]     .md-drppicker .btn {\r\n    background-color: #03a9f3 !important;\r\n    text-transform: capitalize !important;\r\n    font-size: 14px !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcG9zaXQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0EsaUJBQWlCO0FBQ2pCO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7QUFDRixpQkFBaUI7QUFFakIsd0JBQXdCO0FBQ3RCO0VBQ0Esa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0VBQ04sWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0Usd0NBQXdDO0lBQ3RDLG9DQUFvQztBQUN4QztBQUNBO0VBQ0Usd0NBQXdDO0lBQ3RDLG9DQUFvQztBQUN4QztBQUNBO0VBQ0Usd0NBQXdDO0lBQ3RDLG9DQUFvQztBQUN4QztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNFOzs7Ozs7Ozs7Ozs7O0dBYUM7QUFDSCx3QkFBd0I7QUFFeEIseUJBQXlCO0FBQ3pCO0lBQ0kseUJBQXlCOztBQUU3QjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1DQUFtQztFQUNyQztBQUNGO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFGQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUZBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBLHlCQUF5QjtBQUV6QiwwQkFBMEI7QUFDMUI7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLDBDQUEwQztJQUMxQyw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBLDBCQUEwQjtBQUUxQixvQ0FBb0M7QUFDcEM7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQSxvQ0FBb0M7QUFFcEMsdUJBQXVCO0FBQ3ZCO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQztBQUNBLHVCQUF1QjtBQUV2QixvQkFBb0I7QUFDcEI7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQSxvQkFBb0I7QUFJcEIsYUFBYTtBQUdiO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0VBQ1o7QUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGtDQUFrQztFQUNwQztBQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7QUFDQSx3QkFBd0I7QUFDeEI7RUFDQSxpQkFBaUI7RUFDakI7QUFDQTtFQUNBLFlBQVk7RUFDWixzQkFBc0I7RUFDdEI7QUFFQTtFQUNBLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEI7QUFHQTtJQUNFO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7TUFDRSx1QkFBdUI7TUFDdkIsaUJBQWlCO01BQ2pCLG9CQUFvQjtJQUN0QjtFQUNGO0FBQ0Esd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QjtNQUNJLCtCQUErQjtFQUNuQztBQUNBLHdCQUF3QjtBQUN4QjtJQUNFLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFDQTtNQUNJLDRCQUE0QjtFQUNoQztBQUNBLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDJDQUEyQztJQUMzQyw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGtEQUFrRDtFQUNwRDtBQUNBO0lBQ0UsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQiwyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLDBCQUEwQjtJQUMxQiwyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDQTs7S0FFRztBQUNILHdCQUF3QjtBQUN4Qjs7RUFFQSx5QkFBeUI7RUFDekI7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBOztJQUVFLHlCQUF5QjtFQUMzQjtBQUNBLHdCQUF3QjtBQUN4QjtJQUNFLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBLGtCQUFrQjtBQUNsQjtJQUNFLGdCQUFnQjtFQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0FBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7QUFFQSxhQUFhO0FBQ2I7SUFDRSxjQUFjO0VBQ2hCO0FBQ0EsYUFBYTtBQUViLGVBQWU7QUFDZjtJQUNFLDZDQUE2QztFQUMvQztBQUNBO01BQ0ksc0JBQXNCO0VBQzFCO0FBQ0EsZUFBZTtBQUVmLG9CQUFvQjtBQUNwQjtNQUNJLGVBQWU7RUFDbkI7QUFDQSxvQkFBb0I7QUFHcEI7SUFDRSx1QkFBdUI7RUFDekI7QUFFQTs7SUFFRSxvQ0FBb0M7RUFDdEM7QUFFQTtJQUNFLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsMEJBQTBCO0VBQzVCIiwiZmlsZSI6ImRlcG9zaXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRfX3N0eWxpbmd7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG59XHJcbi50ZXh0LXJlZHtcclxuICAgIGNvbG9yOiAjYzUzYjU1O1xyXG59XHJcbi8qIEhFQURFUiBTVFlMRSAqL1xyXG4uY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogY2xpcDtcclxuICB9XHJcbiAgLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4vKiBIRUFERVIgU1RZTEUgKi9cclxuXHJcbi8qIEhFQURFUiBCVVRUT04gU1RZTEUgKi9cclxuICAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczphY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmZvY3Vze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3MgLm1hdC1idXR0b24td3JhcHBlcntcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjMDBjMjkyICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbjpob3N0IC9kZWVwLyAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzIC5tYXQtYnV0dG9uLXdyYXBwZXI6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IC00cHggIzAwMDAwMGE2O1xyXG59XHJcbjpob3N0IC9kZWVwLyAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzIC5tYXQtcmlwcGxlLm1hdC1idXR0b24tcmlwcGxle1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNkay1tb3VzZS1mb2N1c2VkLmNkay1mb2N1c2VkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7XHJcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG59XHJcbiAgLyogLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzc3tcclxuICAgICAgbWFyZ2luOiAtN3B4IDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzI5MjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDBjMjkyO1xyXG4gICAgICBib3gtc2hhZG93OjBweCAwcHggMTBweCAtNXB4ICMwMDAwMDA4ZjtcclxuICB9XHJcbiAgLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjMWU5ZDdkODAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFjYjk5ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMWNiOTkgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjMWU5ZDdkODAgIWltcG9ydGFudDtcclxufSAqL1xyXG4vKiBIRUFERVIgQlVUVE9OIFNUWUxFICovXHJcblxyXG4vKiBUQUJMRSBoZWFkZXIgU1RZTElORyAqL1xyXG4uc2xlY3Rpb25fX3N0eWxlZCA6aG9zdCAvZGVlcC8gIC5zZWFyY2gubmctdG91Y2hlZHtcclxuICAgIGNvbG9yOiAjMWExYTFhICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDI0ZTcwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoe1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNvcnQtaGVhZGVyLWFycm93e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zb3J0LWhlYWRlci1jb250ZW50e1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoLm5nLXRvdWNoZWR7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLnNlYXJjaCAubmctc3Rhci1pbnNlcnRlZHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogVEFCTEUgaGVhZGVyIFNUWUxJTkcgKi9cclxuXHJcbi8qIGxpc3Qgc3R5bGluZyBpbiB0YWJsZSAqL1xyXG4ubWF0X3RhYmxle1xyXG4gICAgbWF4LWhlaWdodDogNDkwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxudHIubWF0LWhlYWRlci1yb3d7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIHRyLm1hdC1yb3csIHRyLm1hdC1mb290ZXItcm93e1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1mb290ZXItY2VsbCwgLm1hdC1jZWxse1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChvZGQpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2VlZmYyYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDAwMDAwZCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDAwZCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcztcclxufVxyXG4ubWF0LXJvdzpudGgtY2hpbGQoZXZlbik6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OjBweCAwcHggOHB4IDBweCAjMDAwMDAwNWU7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCk6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OjBweCAwcHggOHB4IDBweCAjMDAwMDAwNWU7XHJcbn1cclxuLyogbGlzdCBzdHlsaW5nIGluIHRhYmxlICovXHJcblxyXG4vKiBjaGFjayBvbiBvciBvZmYgYnV0dG9uICBzdHlsaW5nICovXHJcbjpob3N0IC9kZWVwLyAgLnN3aXRjaC5zd2l0Y2gtc21hbGwuY2hlY2tlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjMgIWltcG9ydGFudDtcclxufVxyXG4vKiBjaGFjayBvbiBvciBvZmYgYnV0dG9uICBzdHlsaW5nICovXHJcblxyXG4vKiBzZWxlY3QgYm94IHN0eWxpbmcgKi9cclxuLmN1c3RvbV9fc2VsZWN0X19jbGFzc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA0YjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5jdXN0b21fX3NlbGVjdF9fY2xhc3MgLmN1c19vcHR7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGJsYWNrO1xyXG59XHJcbi8qIHNlbGVjdCBib3ggc3R5bGluZyAqL1xyXG5cclxuLyogcGFnaW5hdGlvbiBhcmVhICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWx7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHBhZ2luYXRpb24gYXJlYSAqL1xyXG5cclxuXHJcblxyXG4vKiBkcm9wZG93biAqL1xyXG5cclxuXHJcbi51cGxvYWQtbGFyZ2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuaW1nLWZsdWlke1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHRleHQtYWxpZ246IGF1dG87XHJcbiAgfVxyXG4gIC5jYXJkX19zdHlsaW5ne1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzZDtcclxuICB9XHJcbiAgLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZ3tcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGNsaXA7XHJcbiAgfVxyXG4gIC5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmcgaDJ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggN3B4IC03cHggIzAwMDAwMDU3O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAvKiBidXR0b25zIHNhdmUgQ2FuY2VsICovXHJcbiAgLnRleHRfYWxpZ257XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5jdXN0b25fX2J0bnNfX2NsYXNze1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICAvKiBwYWRkaW5nOiA1cHggMHB4OyAqL1xyXG4gIH1cclxuXHJcbiAgLndhamliYS1uYWZpbGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLnRleHRfYWxpZ257XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgOmhvc3QgL2RlZXAvIC5jdXN0b20tZGF0ZSAgLm1kLWRycHBpY2tlci5kb3VibGV7XHJcbiAgICAgIHdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAwIWltcG9ydGFudDtcclxuICAgICAgdG9wOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qIGJ1dHRvbnMgc2F2ZSBDYW5jZWwgKi9cclxuICAvKiBmaWVsZHMgbGluZSBoZWlnaHQgd29yayAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwIDdweCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gICAgdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMzMDMwMzBhZDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcntcclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIC8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC1wYW5lbHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMzM7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggLTRweCAjMDAwMDAwOWMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC12YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWlucHV0LWVsZW1lbnR7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LW9wdGlvbi10ZXh0e1xyXG4gICAgY29sb3I6ICMwYzBjMGM7XHJcbiAgfVxyXG4gIC8qIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuICAvKiBmaWVsZHMgYm9yZGVyIGhvdmVyICovXHJcbiAgOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2ssXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcclxuICBjb2xvcjogIzBlYjllYyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gICAgY29sb3I6ICNmNDQ4MzYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXHJcbiAgOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBmaWVsZHMgYm9yZGVyIGhvdmVyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gICAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBmb250LXNpemU6IDE1cHg7ICovXHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3d7XHJcbiAgICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBmaWVsZHMgYm9yZGVyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le1xyXG4gICAgY29sb3I6ICMwYzBjMGM3NztcclxuICB9XHJcbiAgLyogZmllbGRzIGJvcmRlciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm5nLXRvdWNoZWQubmctdmFsaWR7XHJcbiAgICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlYjllYyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjRkNzA3MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyogZGlzYWJsZWQgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7XHJcbiAgICBjb2xvcjogI2JmYzFjNDtcclxuICB9XHJcbiAgLyogZGlzYWJsZWQgKi9cclxuXHJcbiAgLyogdG9nZ2xlIGJhciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMHB4LCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntcclxuICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogdG9nZ2xlIGJhciAqL1xyXG5cclxuICAvKiBlcnJvciBmb250LXNpemUgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZXJyb3J7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLyogZXJyb3IgZm9udC1zaXplICovXHJcblxyXG5cclxuICA6aG9zdCAvZGVlcC8gLm1kLWRycHBpY2tlci5kb3VibGUge1xyXG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLm1kLWRycHBpY2tlciB0ZC5hY3RpdmUsXHJcbiAgOmhvc3QgL2RlZXAvIC5tZC1kcnBwaWNrZXIgdGQuYWN0aXZlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzliZTUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyIC5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmMyAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ 42754:
/*!*****************************************************************************!*\
  !*** ./src/app/feature/box-management/receive-add/receive-add.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiveAddComponent": () => (/* binding */ ReceiveAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_app_static_custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/static/custom */ 65910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/control/date/date.component */ 24280);
/* harmony import */ var _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/control/dd/dd.component */ 32231);
/* harmony import */ var _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/control/txt/txt.component */ 55806);
/* harmony import */ var _shared_components_control_image_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/control/image/image.component */ 26876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 15719);














const _c0 = function () { return { "col-md-12": true }; };
const _c1 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
const _c2 = function () { return ["/box_management/box_receive"]; };
class ReceiveAddComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_0__.BaseForm {
    constructor(injector) {
        super(injector);
        // Images Access
        this.box_img = { display: 'Box Image' };
        this.applyClass = { 'col-lg-4': true, 'col-md-4': true };
        this.param.endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_RECEIVE;
    }
    ngOnInit() {
        this._fhs._pathLocation = '/box_management/box_receive';
        this._component = 'Box Receiving';
        this.initForm();
        this._activeId = this._fhs._getURLParam('id');
        if (this._activeId != null && Number(this._activeId) > 0)
            this.patchData();
    }
    initForm() {
        this._fs._form = this._fb.group({
            organisation_id: ['', this._vs._vals('Oranaization')],
            system_id: ['', this._vs._vals('System')],
            receive_date: ['', this._vs._vals('Receive Date')],
            vendor_id: ['', this._vs._vals('Vendor')],
            box_qty: ['', this._vs._val('Box Qty', { num: 1, maxChar: 10, minChar: 1, authorized: 0 })],
            box_price: ['', this._vs._val('Box Price', { num: 1, maxChar: 10, minChar: 1, authorized: 0 })],
            ref_no: ['', this._vs._val('Reference No', { num: 1, minChar: 4, maxChar: 20 })],
        });
        // bank: SelectOption;
    }
    patchData() {
        this._http.get({ ...this.param, resource: this._activeId }).subscribe((res) => {
            const data = res.data.row;
            this._fs._form.patchValue({
                ...data,
            });
            this.box_img.link = data.box_img;
        });
    }
    _onSubmit() {
        return super._onSubmity({
            validate: () => {
                return (this._fs._form.invalid ||
                    !this.box_img.link ||
                    this.box_img.error);
            },
            body: (ps) => {
                const fd = new FormData();
                if (this.box_img.file)
                    fd.append('box_img', this.box_img.file);
                if (this._activeId) {
                    this._fs._form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this._activeId));
                }
                const data = this._fs._form.getRawValue();
                src_app_static_custom__WEBPACK_IMPORTED_MODULE_2__.Custom.jsontoFormData(data, '', fd);
                ps.param.body = fd;
            }
        });
    }
}
ReceiveAddComponent.ɵfac = function ReceiveAddComponent_Factory(t) { return new (t || ReceiveAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector)); };
ReceiveAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ReceiveAddComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 33, consts: [[1, "row"], [1, "col-sm-12", "col-lg-12"], [1, "card", "card__styling"], [1, "card-body", "custom__card__body__styling"], [1, "card-title"], [2, "border-top", "0px !important"], [3, "formGroup", "ngSubmit"], [1, "card-body", "py-0"], [1, "col-md-9"], ["field", "receive_date", "lbl", "Receive Date"], ["field", "organisation_id", "lbl", "Organization", 3, "url", "child"], ["field", "system_id", "lbl", "System", 3, "load", "url"], ["system_id", ""], ["field", "vendor_id", "lbl", "Vendor", 3, "url"], ["field", "box_qty", "lbl", "Box Quantity", "type", "number"], ["field", "box_price", "lbl", "Box Price", "type", "number"], ["field", "ref_no", "lbl", "Reference #", "type", "number"], [1, "col-md-3", 2, "margin-top", "-33px"], [3, "imgType", "imgURL", "submitted", "ngClass"], [1, "card-body"], [1, "action-form"], [1, "form-group", "m-b-0", "text_align"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light", "custon__btns__class", 3, "ngClass"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "waves-effect", "waves-light", "custon__btns__class", 3, "routerLink", "ngClass"]], template: function ReceiveAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ReceiveAddComponent_Template_form_ngSubmit_9_listener() { return ctx._onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "di-date", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "di-dd", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "di-dd", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "di-dd", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "di-txt", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "di-txt", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "di-txt", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "di-img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 17, !ctx._activeId ? "Add" : "Edit"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 19, "Box Receiving"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx._fs._form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("url", ctx.URLz.ORG)("child", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("load", false)("url", ctx.URLz.ORG_SYSTEM);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("url", ctx.URLz.BOX_VENDORS);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("imgType", ctx.box_img)("imgURL", ctx.IMG_URL.BOX)("submitted", ctx._vs._submitted)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](26, _c1, ctx._ss.lng === "en", ctx._ss.lng === "ur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 21, "Save"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](29, _c2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](30, _c1, ctx._ss.lng === "en", ctx._ss.lng === "ur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 23, "Cancel"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _shared_components_control_date_date_component__WEBPACK_IMPORTED_MODULE_3__.DateComponent, _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_4__.DdComponent, _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_5__.TxtComponent, _shared_components_control_image_image_component__WEBPACK_IMPORTED_MODULE_6__.ImageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: [".card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n\r\n.text_align[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n.custon__btns__class[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  padding: 0px 0px;\r\n  margin-left: 5px\r\n}\r\n@media(max-width: 768px){\r\n  .text_align[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-disabled .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline {\r\n  background-color: #ebebeb !important;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n    padding: 5px 0 7px 0 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle-content {\r\n  font-size: 13px !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n  top: 30px !important;\r\n  margin-top: -15px !important;\r\n  font-weight: 700 !important;\r\n  font-size: 15px;\r\n  color: #303030ad;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n    overflow: visible !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-select-panel{\r\n  width: 100% !important;\r\n  min-width: 100% !important;\r\n  transform: translate(15px, 40px) !important;\r\n  background: #ffffff !important;\r\n  border: 1px solid #00000033;\r\n  box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-select-value{\r\n  font-size: 16px;\r\n  font-weight: 600 !important;\r\n  overflow: hidden !important;\r\n}\r\n[_nghost-%COMP%]      .mat-input-element{\r\n  font-size: 16px !important;\r\n  font-weight: 600 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-option-text{\r\n  color: #0c0c0c;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\ncolor: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n  color: #f44836 !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #f44836 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n  color: #0c0c0c !important;\r\n  overflow: visible !important;\r\n  \r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label{\r\n  overflow: visible !important;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n  color: #0c0c0c !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n  color: #0c0c0c77;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .ng-touched.ng-valid{\r\n  color: #0c0c0c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-ripple-element{\r\n  background-color: #024d7071 !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n  color: #bfc1c4;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n  transform: translate3d(30px, 0, 0) !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n    width: 50px !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-error{\r\n    font-size: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpdmUtYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0Esd0JBQXdCO0FBQ3hCO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCO0FBQ0Y7QUFFQTtFQUNFO01BQ0ksa0JBQWtCO0VBQ3RCO0FBQ0Y7QUFDQSx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBRTVCO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUI7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLGtEQUFrRDtBQUNwRDtBQUNBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7R0FFRztBQUNILHdCQUF3QjtBQUN4Qjs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUVsQixZQUFZO0FBQ1o7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0EsWUFBWTtBQUVaLGFBQWE7QUFDYjtFQUNFLGNBQWM7QUFDaEI7QUFDQSxhQUFhO0FBSWIsZUFBZTtBQUNmO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQSxlQUFlO0FBRWYsb0JBQW9CO0FBQ3BCO0lBQ0ksZUFBZTtBQUNuQjtBQUNBLG9CQUFvQiIsImZpbGUiOiJyZWNlaXZlLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRfX3N0eWxpbmd7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzZDtcclxufVxyXG4uY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBvdmVyZmxvdy14OiBjbGlwO1xyXG59XHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmcgaDJ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggN3B4IC03cHggIzAwMDAwMDU3O1xyXG4gIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIGJ1dHRvbnMgc2F2ZSBDYW5jZWwgKi9cclxuLnRleHRfYWxpZ257XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY3VzdG9uX19idG5zX19jbGFzc3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMHB4IDBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAudGV4dF9hbGlnbntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4vKiBidXR0b25zIHNhdmUgQ2FuY2VsICovXHJcbi8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICBwYWRkaW5nOiA1cHggMCA3cHggMCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIHRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzMwMzAzMGFkO1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC1wYW5lbHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAzMztcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggLTRweCAjMDAwMDAwOWMgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtb3B0aW9uLXRleHR7XHJcbiAgY29sb3I6ICMwYzBjMGM7XHJcbn1cclxuLyogOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59ICovXHJcbi8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2ssXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XHJcbmNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAvKiBmb250LXNpemU6IDE1cHg7ICovXHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tcclxuICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZpZWxkcyBib3JkZXIgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le1xyXG4gIGNvbG9yOiAjMGMwYzBjNzc7XHJcbn1cclxuLyogZmllbGRzIGJvcmRlciAqL1xyXG5cclxuLyogdG9nZ2xlciAqL1xyXG46aG9zdCAvZGVlcC8gIC5uZy10b3VjaGVkLm5nLXZhbGlke1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjRkNzA3MSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHRvZ2dsZXIgKi9cclxuXHJcbi8qIGRpc2FibGVkICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICBjb2xvcjogI2JmYzFjNDtcclxufVxyXG4vKiBkaXNhYmxlZCAqL1xyXG5cclxuXHJcblxyXG4vKiB0b2dnbGUgYmFyICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVye1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzBweCwgMCwgMCkgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntcclxuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogdG9nZ2xlIGJhciAqL1xyXG5cclxuLyogZXJyb3IgZm9udC1zaXplICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1lcnJvcntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4vKiBlcnJvciBmb250LXNpemUgKi9cclxuIl19 */"] });


/***/ }),

/***/ 63840:
/*!*******************************************************************************!*\
  !*** ./src/app/feature/box-management/receive-list/receive-list.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiveListComponent": () => (/* binding */ ReceiveListComponent)
/* harmony export */ });
/* harmony import */ var src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base-list-class */ 42286);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_app_shared_components_dialogs_img_view_img_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/dialogs/img-view/img-view.component */ 14761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directive/permission.directive */ 47399);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 71144);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 15719);
/* harmony import */ var _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/table/tbl-dd/tbl-dd.component */ 18533);
/* harmony import */ var _shared_components_table_tbl_date_tbl_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/table/tbl-date/tbl-date.component */ 98308);
/* harmony import */ var _shared_components_table_tbl_ac_tbl_ac_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/table/tbl-ac/tbl-ac.component */ 11136);
/* harmony import */ var _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/table/tbl-txt/tbl-txt.component */ 33086);
/* harmony import */ var ngx_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-viewer */ 53409);
/* harmony import */ var _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/table/di-paginator/di-paginator.component */ 65141);
















const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function ReceiveListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReceiveListComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r23._switch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](4, _c0, ctx_r0._ss.lng === "en", ctx_r0._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("+ ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, "Add"), " ");
} }
function ReceiveListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "S No");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ReceiveListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r26 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", i_r26 + ctx_r2._tbls[ctx_r2.URLz.$].index * ctx_r2._tbls[ctx_r2.URLz.$].size + 1, " ");
} }
function ReceiveListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReceiveListComponent_th_15_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); ctx_r27._reset(ctx_r27.URLz.$); return ctx_r27._refresh(ctx_r27.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReceiveListComponent_th_15_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r29._refresh(ctx_r29.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ReceiveListComponent_td_16_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReceiveListComponent_td_16_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r32._switch(item_r30.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ReceiveListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ReceiveListComponent_td_16_i_1_Template, 1, 0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("permission", ctx_r4.ACTION.EDIT);
} }
function ReceiveListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-dd", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r5._tbls[ctx_r5.URLz.$] == null ? null : ctx_r5._tbls[ctx_r5.URLz.$].form)("url", ctx_r5.URLz.ORG);
} }
function ReceiveListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r35 == null ? null : item_r35.organisation == null ? null : item_r35.organisation.title, " ");
} }
function ReceiveListComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-dd", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r7._tbls[ctx_r7.URLz.$] == null ? null : ctx_r7._tbls[ctx_r7.URLz.$].form)("load", false)("url", ctx_r7.URLz.ORG_SYSTEM);
} }
function ReceiveListComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r36 == null ? null : item_r36.system == null ? null : item_r36.system.title, " ");
} }
function ReceiveListComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-date", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r9._tbls[ctx_r9.URLz.$] == null ? null : ctx_r9._tbls[ctx_r9.URLz.$].form);
} }
function ReceiveListComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](2, 1, item_r37 == null ? null : item_r37.receive_date, ctx_r10.date, "mediumDate"), " ");
} }
function ReceiveListComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-ac", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r11._tbls[ctx_r11.URLz.$] == null ? null : ctx_r11._tbls[ctx_r11.URLz.$].form)("url", ctx_r11.URLz.BOX_VENDOR);
} }
function ReceiveListComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r38 == null ? null : item_r38.vendor == null ? null : item_r38.vendor.title, " ");
} }
function ReceiveListComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-txt", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r13._tbls[ctx_r13.URLz.$] == null ? null : ctx_r13._tbls[ctx_r13.URLz.$].form);
} }
function ReceiveListComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r39.box_qty, " ");
} }
function ReceiveListComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-txt", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r15._tbls[ctx_r15.URLz.$] == null ? null : ctx_r15._tbls[ctx_r15.URLz.$].form);
} }
function ReceiveListComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r40.box_price, " ");
} }
function ReceiveListComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-txt", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r17._tbls[ctx_r17.URLz.$] == null ? null : ctx_r17._tbls[ctx_r17.URLz.$].form);
} }
function ReceiveListComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r41.ref_no, " ");
} }
function ReceiveListComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Box Image"), " ");
} }
function ReceiveListComponent_td_40_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 50);
} if (rf & 2) {
    const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r43.IMG_URL.BOX + item_r42.box_img, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"])("viewerOptions", ctx_r43.viewerOptions);
} }
function ReceiveListComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ReceiveListComponent_td_40_img_1_Template, 1, 2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r42.box_img);
} }
function ReceiveListComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 51);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](1, _c0, ctx_r21._ss.lng === "en", ctx_r21._ss.lng === "ur"));
} }
function ReceiveListComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 52);
} }
class ReceiveListComponent extends src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__.BaseListClass {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.viewerOptions = {
            navbar: false,
            transition: true,
            toolbar: {
                zoomIn: 4,
                zoomOut: 4,
                oneToOne: 4,
                reset: 4,
                // prev: 4,
                // play: {
                //   show: 4,
                //   size: 'large',
                // },
                // next: 4,
                rotateLeft: 4,
                rotateRight: 4,
                flipHorizontal: 4,
                flipVertical: 4,
            }
        };
        this.applyClass = { 'col-lg-6': true, 'col-md-6': true };
    }
    ngOnInit() {
        this._pathLocation = '/box_management/box_receive_add';
        this._component = 'Box Receive List';
        this.initTables();
    }
    initTables() {
        this._reset(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].columns = [
            'id',
            'actions',
            'organisation_id',
            'system_id',
            'receive_date',
            'vendor_id',
            'box_qty',
            'box_price',
            'ref_no',
            'box_img',
        ];
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_RECEIVE;
        this._formCreator(this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$]);
        this._refresh(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
    }
    openImage(data, title) {
        const config = {
            panelClass: "dialog-responsive",
            data: { source: data, title }
        };
        const dialogRef = this._dialog.open(src_app_shared_components_dialogs_img_view_img_view_component__WEBPACK_IMPORTED_MODULE_2__.ImgViewComponent, config);
        dialogRef.afterClosed().subscribe();
    }
}
ReceiveListComponent.ɵfac = function ReceiveListComponent_Factory(t) { return new (t || ReceiveListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injector)); };
ReceiveListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ReceiveListComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 44, vars: 8, consts: [[1, "row"], [1, "col-md-12", "p-0"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], ["mat-raised-button", "", "type", "button", "class", "btn btn-success custon__add__btns__class float-right", 3, "ngClass", "click", 4, "permission"], [1, "card-body", "pt-0", "mt-4"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px;", "class", "", "mat-header-cell", "", "translate", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "pl-3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "organisation_id"], ["class", "pr-3", "mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 4, "matHeaderCellDef"], ["class", "px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "system_id"], ["matColumnDef", "receive_date"], ["matColumnDef", "vendor_id"], ["matColumnDef", "box_qty"], ["mat-cell", "", "class", "px-3", 4, "matCellDef"], ["matColumnDef", "box_price"], ["matColumnDef", "ref_no"], ["matColumnDef", "box_img"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "pr-3", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "tbl", "paginateEvent"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-success", "custon__add__btns__class", "float-right", 3, "ngClass", "click"], ["mat-header-cell", "", "translate", "", 1, "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", 1, "pl-3"], [1, "ti-reload", "text-info", "pointer", "px-2", 3, "click"], [1, "ti-search", "text-info", "pointer", "px-2", 3, "click"], ["class", "ti-pencil text-info px-2 pointer", 3, "click", 4, "permission"], [1, "ti-pencil", "text-info", "px-2", "pointer", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 1, "pr-3"], ["field", "organisation_id", "lbl", "Organization", 3, "group", "url"], ["mat-cell", "", 1, "px-3"], ["field", "system_id", "lbl", "System", "parentFCName", "organisation_id", 3, "group", "load", "url"], ["field", "receive_date", "lbl", "Receive Date", 3, "group"], ["lbl", "Vendor", "field", "vendor_id", 3, "group", "url"], ["field", "box_qty", "type", "number", "lbl", "Quantity", 3, "group"], ["field", "box_price", "type", "number", "lbl", "Box Price", 3, "group"], ["field", "ref_no", "type", "number", "lbl", "Reference #", 3, "group"], ["mat-header-cell", ""], ["mat-cell", "", 1, "pr-3"], ["class", "tbl_img", "ngxViewer", "", "alt", "Box Image", 3, "src", "viewerOptions", 4, "ngIf"], ["ngxViewer", "", "alt", "Box Image", 1, "tbl_img", 3, "src", "viewerOptions"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""]], template: function ReceiveListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ReceiveListComponent_button_7_Template, 3, 7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("matSortChange", function ReceiveListComponent_Template_table_matSortChange_10_listener($event) { return ctx._sort($event, ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ReceiveListComponent_th_12_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, ReceiveListComponent_td_13_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](14, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, ReceiveListComponent_th_15_Template, 3, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, ReceiveListComponent_td_16_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](17, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, ReceiveListComponent_th_18_Template, 2, 2, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, ReceiveListComponent_td_19_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](20, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, ReceiveListComponent_th_21_Template, 2, 3, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, ReceiveListComponent_td_22_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](23, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, ReceiveListComponent_th_24_Template, 2, 1, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, ReceiveListComponent_td_25_Template, 3, 5, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](26, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, ReceiveListComponent_th_27_Template, 2, 2, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, ReceiveListComponent_td_28_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](29, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, ReceiveListComponent_th_30_Template, 2, 1, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, ReceiveListComponent_td_31_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](32, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, ReceiveListComponent_th_33_Template, 2, 1, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, ReceiveListComponent_td_34_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](35, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, ReceiveListComponent_th_36_Template, 2, 1, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, ReceiveListComponent_td_37_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](38, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, ReceiveListComponent_th_39_Template, 3, 3, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, ReceiveListComponent_td_40_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, ReceiveListComponent_tr_41_Template, 1, 4, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, ReceiveListComponent_tr_42_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "di-paginator", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("paginateEvent", function ReceiveListComponent_Template_di_paginator_paginateEvent_43_listener() { return ctx._refresh(ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 6, "Box Receive List"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("permission", ctx.ACTION.ADD);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.URLz.$].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.URLz.$].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.URLz.$].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tbl", ctx._tbls[ctx.URLz.$]);
    } }, directives: [_shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_3__.PermissionDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_4__.TblDDComponent, _shared_components_table_tbl_date_tbl_date_component__WEBPACK_IMPORTED_MODULE_5__.TblDateComponent, _shared_components_table_tbl_ac_tbl_ac_component__WEBPACK_IMPORTED_MODULE_6__.TblACComponent, _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_7__.TblTxtComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ngx_viewer__WEBPACK_IMPORTED_MODULE_15__.NgxViewerDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow, _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_8__.DiPaginatorComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".mat-column-id[_ngcontent-%COMP%]{\r\n  border-right: 0px solid #90909400 !important;\r\n}\r\n.card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.text-red[_ngcontent-%COMP%]{\r\n  color: #c53b55;\r\n}\r\n\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n\r\n\r\n.custon__add__btns__class[_ngcontent-%COMP%]{\r\n    margin: -7px 0px;\r\n    background-color: #00c292;\r\n    border-color: #00c292;\r\n    box-shadow:0px 0px 10px -5px #0000008f;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 0 0 0 0.2rem #1e9d7d80 !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:active{\r\n  background-color: #01cb99 !important;\r\n  border-color: #01cb99 !important;\r\n  box-shadow: 0 0 0 0.2rem #1e9d7d80 !important;\r\n}\r\n\r\n\r\n.slection__styled   [_nghost-%COMP%]      .search.ng-touched{\r\n  color: #1a1a1a !important;\r\n\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%]{\r\n  background: #024e70 !important;\r\n  color: white !important;\r\n}\r\n.search[_ngcontent-%COMP%]{\r\n  color: #ffffff !important;\r\n  border-bottom: 1px solid whitesmoke;\r\n}\r\n[_nghost-%COMP%]      .mat-sort-header-arrow{\r\n  color: white;\r\n}\r\n[_nghost-%COMP%]      .mat-sort-header-content{\r\n  color: #dadada !important;\r\n}\r\n[_nghost-%COMP%]      .search::-moz-placeholder{\r\n  color: #dadada !important;\r\n}\r\n[_nghost-%COMP%]      .search:-ms-input-placeholder{\r\n  color: #dadada !important;\r\n}\r\n[_nghost-%COMP%]      .search::placeholder{\r\n  color: #dadada !important;\r\n}\r\n[_nghost-%COMP%]      .search.ng-touched{\r\n  color: #dadada !important;\r\n}\r\n[_nghost-%COMP%]      .search .ng-star-inserted{\r\n  color: #000 !important;\r\n}\r\n\r\n\r\n.mat_table[_ngcontent-%COMP%]{\r\n  max-height: 490px;\r\n  height: auto;\r\n}\r\ntr.mat-header-row[_ngcontent-%COMP%]{\r\n  height: 40px !important;\r\n}\r\n[_nghost-%COMP%]      tr.mat-row, tr.mat-footer-row[_ngcontent-%COMP%]{\r\n  height: 40px !important;\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{\r\n  white-space: nowrap !important;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(odd){\r\n  background-color: #ffffff00 !important;\r\n  transition: 0.1s;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(even){\r\n  background-color: #b3eeff2c !important;\r\n  border-top: 2px solid #0000000d !important;\r\n  border-bottom: 2px solid #0000000d !important;\r\n  transition: 0.1s;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(even):hover{\r\n  box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(odd):hover{\r\n  box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .switch.switch-small.checked{\r\n  background-color: #03a9f3 !important;\r\n}\r\n\r\n\r\n.custom__select__class[_ngcontent-%COMP%]{\r\n  border-radius: 3px;\r\n  padding: 4px;\r\n  border: 1px solid #0000004b;\r\n  background: white;\r\n}\r\n.custom__select__class[_ngcontent-%COMP%]   .cus_opt[_ngcontent-%COMP%]{\r\n  border-radius: 4px;\r\n  background: #ffffff;\r\n  box-shadow: 0px 0px 10px black;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-paginator-range-label{\r\n  margin: 0px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpdmUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBLGlCQUFpQjtBQUVqQix3QkFBd0I7QUFDeEI7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixzQ0FBc0M7QUFDMUM7QUFDQTtFQUNFLDZDQUE2QztBQUMvQztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyw2Q0FBNkM7QUFDL0M7QUFDQSx3QkFBd0I7QUFFeEIseUJBQXlCO0FBQ3pCO0VBQ0UseUJBQXlCOztBQUUzQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUZBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRkE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0EseUJBQXlCO0FBRXpCLDBCQUEwQjtBQUMxQjtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNDQUFzQztFQUN0QywwQ0FBMEM7RUFDMUMsNkNBQTZDO0VBQzdDLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQSwwQkFBMEI7QUFFMUIsb0NBQW9DO0FBQ3BDO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0Esb0NBQW9DO0FBRXBDLHVCQUF1QjtBQUN2QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQSx1QkFBdUI7QUFFdkIsb0JBQW9CO0FBQ3BCO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0Esb0JBQW9CIiwiZmlsZSI6InJlY2VpdmUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4taWR7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgIzkwOTA5NDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmRfX3N0eWxpbmd7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzZDtcclxufVxyXG4udGV4dC1yZWR7XHJcbiAgY29sb3I6ICNjNTNiNTU7XHJcbn1cclxuLyogSEVBREVSIFNUWUxFICovXHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmd7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG92ZXJmbG93LXg6IGNsaXA7XHJcbn1cclxuLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLyogSEVBREVSIFNUWUxFICovXHJcblxyXG4vKiBIRUFERVIgQlVUVE9OIFNUWUxFICovXHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3N7XHJcbiAgICBtYXJnaW46IC03cHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzI5MjtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwYzI5MjtcclxuICAgIGJveC1zaGFkb3c6MHB4IDBweCAxMHB4IC01cHggIzAwMDAwMDhmO1xyXG59XHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3M6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICMxZTlkN2Q4MCAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3M6YWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWNiOTkgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICMwMWNiOTkgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gIzFlOWQ3ZDgwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogSEVBREVSIEJVVFRPTiBTVFlMRSAqL1xyXG5cclxuLyogVEFCTEUgaGVhZGVyIFNUWUxJTkcgKi9cclxuLnNsZWN0aW9uX19zdHlsZWQgOmhvc3QgL2RlZXAvICAuc2VhcmNoLm5nLXRvdWNoZWR7XHJcbiAgY29sb3I6ICMxYTFhMWEgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbHtcclxuICBiYWNrZ3JvdW5kOiAjMDI0ZTcwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaHtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zb3J0LWhlYWRlci1hcnJvd3tcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNvcnQtaGVhZGVyLWNvbnRlbnR7XHJcbiAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5zZWFyY2g6OnBsYWNlaG9sZGVye1xyXG4gIGNvbG9yOiAjZGFkYWRhICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoLm5nLXRvdWNoZWR7XHJcbiAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5zZWFyY2ggLm5nLXN0YXItaW5zZXJ0ZWR7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG4vKiBUQUJMRSBoZWFkZXIgU1RZTElORyAqL1xyXG5cclxuLyogbGlzdCBzdHlsaW5nIGluIHRhYmxlICovXHJcbi5tYXRfdGFibGV7XHJcbiAgbWF4LWhlaWdodDogNDkwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbnRyLm1hdC1oZWFkZXItcm93e1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgdHIubWF0LXJvdywgdHIubWF0LWZvb3Rlci1yb3d7XHJcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1mb290ZXItY2VsbCwgLm1hdC1jZWxse1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDAgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlZWZmMmMgIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzAwMDAwMDBkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDAwZCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IDAuMXM7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6MHB4IDBweCA4cHggMHB4ICMwMDAwMDA1ZTtcclxufVxyXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKTpob3ZlcntcclxuICBib3gtc2hhZG93OjBweCAwcHggOHB4IDBweCAjMDAwMDAwNWU7XHJcbn1cclxuLyogbGlzdCBzdHlsaW5nIGluIHRhYmxlICovXHJcblxyXG4vKiBjaGFjayBvbiBvciBvZmYgYnV0dG9uICBzdHlsaW5nICovXHJcbjpob3N0IC9kZWVwLyAgLnN3aXRjaC5zd2l0Y2gtc21hbGwuY2hlY2tlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWYzICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogY2hhY2sgb24gb3Igb2ZmIGJ1dHRvbiAgc3R5bGluZyAqL1xyXG5cclxuLyogc2VsZWN0IGJveCBzdHlsaW5nICovXHJcbi5jdXN0b21fX3NlbGVjdF9fY2xhc3N7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNGI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLmN1c3RvbV9fc2VsZWN0X19jbGFzcyAuY3VzX29wdHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggYmxhY2s7XHJcbn1cclxuLyogc2VsZWN0IGJveCBzdHlsaW5nICovXHJcblxyXG4vKiBwYWdpbmF0aW9uIGFyZWEgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LXBhZ2luYXRvci1yYW5nZS1sYWJlbHtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHBhZ2luYXRpb24gYXJlYSAqL1xyXG4iXX0= */"] });


/***/ }),

/***/ 23068:
/*!***********************************************************************!*\
  !*** ./src/app/feature/box-management/sell-add/sell-add.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellAddComponent": () => (/* binding */ SellAddComponent)
/* harmony export */ });
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_app_model_donor_full_donor_gsb_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/donor/full-donor-gsb.form */ 44424);
/* harmony import */ var src_app_shared_components_dialogs_box_mgmt_sell_box_mgmt_sell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/dialogs/box-mgmt-sell/box-mgmt-sell.component */ 35026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var _donor_info_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../donor/info/info.component */ 67418);
/* harmony import */ var _donor_add_info_add_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../donor/add-info/add-info.component */ 14381);
/* harmony import */ var _donor_gsb_gsb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../donor/gsb/gsb.component */ 75130);
/* harmony import */ var _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/control/txt/txt.component */ 55806);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 15719);















const _c0 = ["GSBComponent"];
function SellAddComponent_img_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 23);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.IMG_URL.BOX + ctx_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("alt", ctx_r1.imgUrl);
} }
const _c1 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
const _c2 = function (a0) { return [a0]; };
class SellAddComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_0__.BaseForm {
    constructor(injector, fullGSBDonorForm) {
        super(injector);
        this.injector = injector;
        this.fullGSBDonorForm = fullGSBDonorForm;
        // Here is the issue
        // Child Component is Overriding the changes made by parent components
        this._fs._form = this.fullGSBDonorForm.initForm();
        this._fs._form.addControl('box', this._fb.group({
            id: ['', this._vs._val('Id')],
            box_qty: ['', this._vs._val('Quantity')],
            box_stock_id: ['', this._vs._vals('Box Stock')],
        }));
        // Getting Id here is mendatory
        this._activeId = this._fhs._getURLParam('id');
        this.status = window?.location?.href?.indexOf('distribution') != -1 ? 2 : 1;
        this.routerStrategy();
    }
    ngOnInit() {
        this.param.endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_SELL;
        this._component = ((this.status == 2 ? 'Distribution' : 'Sell') + ' Box');
        this._fhs._pathLocation = '/box_management/box_sell' + (this.status == 2 ? '_distribution' : '');
        this.patchData();
    }
    enabledButton() {
        const group = this._fs._form.get('gsb');
        return (group.get('bg').status == 'VALID' &&
            group.get('le').status == 'VALID' &&
            group.get('ou').status == 'VALID' &&
            group.get('su').status == 'VALID' &&
            group.get('collector_id').status == 'VALID');
    }
    showDialog() {
        const y = this._fs._form.value;
        const gsb = y.gsb;
        const query = {
            organisation_id: y.donor.organisation_id,
            bg: gsb.bg,
            le: gsb.le,
            ou: gsb.ou,
            su: gsb.su,
            collector_id: gsb.collector_id,
            status: this.status
        };
        this._http.gets({ query, endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOXES_COLLECTOR }).subscribe((res) => {
            const config = {
                panelClass: 'dialog-responsive',
                data: { items: res.data.records },
            };
            const dialogRef = this._dialog.open(src_app_shared_components_dialogs_box_mgmt_sell_box_mgmt_sell_component__WEBPACK_IMPORTED_MODULE_3__.BoxMgmtSellComponent, config);
            dialogRef.afterClosed().subscribe((result) => {
                if (result != null) {
                    this.imgUrl = result?.box_stock?.image;
                    this._fs._form.get('box').patchValue({
                        id: result?.id,
                        box_stock_id: result?.box_stock_id
                    });
                    const control = this._fs._form.get('box.box_qty');
                    control.clearValidators();
                    control.addValidators([this._vs._val('Box Quantity', { min: 1, max: result?.issued })]);
                    control.updateValueAndValidity();
                    this._fs._form.updateValueAndValidity();
                }
            });
        });
    }
    patchData() {
        if (this._activeId != null && Number(this._activeId) > 0) {
            this._http.get({ ...this.param, resource: this._activeId }).subscribe((res) => {
                const data = res.data.row;
                // this._fs._form.patchValue({
                //   donor: data.donor,
                //   additional_info: data.additional_info,
                //   gsb: data.gsb
                // });
                this.gsbComponent.fillData(data);
            });
        }
    }
}
SellAddComponent.ɵfac = function SellAddComponent_Factory(t) { return new (t || SellAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_model_donor_full_donor_gsb_form__WEBPACK_IMPORTED_MODULE_2__.FullGSBDonorForm)); };
SellAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: SellAddComponent, selectors: [["di-component-name-here"]], viewQuery: function SellAddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.gsbComponent = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([src_app_model_donor_full_donor_gsb_form__WEBPACK_IMPORTED_MODULE_2__.FullGSBDonorForm]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 51, vars: 46, consts: [[1, "row"], [1, "col-sm-12", "col-lg-12"], [1, "card", "card__styling"], [1, "card-body", "custom__card__body__styling"], [1, "card-title"], [2, "border-top", "0px !important"], [3, "formGroup", "ngSubmit"], [1, "card-body", "py-0"], [1, "adv-field-set"], [1, "adv-legend-one"], [1, "adv-field-set", "mt-4"], ["GSBComponent", ""], ["field", "box_qty", "lbl", "Box Quantity", "type", "number", "groupName", "box"], [1, "col-md-4"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "mt-0", "my-2", "p-1", 3, "disabled", "ngClass", "click"], [2, "font-size", "10px", "color", "#f44336"], [1, "col-md-8"], ["style", "max-height:100px; border-radius: 10px;", "class", "p-1 shadow rounded", 3, "src", 4, "ngIf"], [1, "card-body"], [1, "action-form"], [1, "form-group", "m-b-0", "text_align"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light", "custon__btns__class", 3, "ngClass"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "waves-effect", "waves-light", "custon__btns__class", 3, "routerLink", "ngClass"], [1, "p-1", "shadow", "rounded", 2, "max-height", "100px", "border-radius", "10px", 3, "src"]], template: function SellAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function SellAddComponent_Template_form_ngSubmit_9_listener() { return ctx._onSubmity({ param: { query: { is_advance: 1, status: ctx.status } } }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "fieldset", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "legend", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "donor-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "fieldset", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "legend", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "donor-add-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "fieldset", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "legend", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "donor-gsb", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "fieldset", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "legend", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "di-txt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SellAddComponent_Template_button_click_34_listener() { return ctx.showDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, SellAddComponent_img_41_Template, 1, 2, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 17, !ctx._activeId ? "Add" : "Edit"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 19, ctx._component), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx._fs._form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 21, "Donor Basic Info"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 23, "Donor Additional Info"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 25, "Donor GSB Info"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 27, "Box Details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.enabledButton())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](35, _c1, ctx._ss.lng === "en", ctx._ss.lng === "ur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 29, "Show"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx._vs.errMsg("box.box_stock_id"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.imgUrl != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](38, _c1, ctx._ss.lng === "en", ctx._ss.lng === "ur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](47, 31, "Save"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](41, _c2, "/box_management/box_sell" + (ctx.status == 2 ? "_distribution" : "")))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](43, _c1, ctx._ss.lng === "en", ctx._ss.lng === "ur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](50, 33, "Cancel"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _donor_info_info_component__WEBPACK_IMPORTED_MODULE_4__.InfoComponent, _donor_add_info_add_info_component__WEBPACK_IMPORTED_MODULE_5__.AddInfoComponent, _donor_gsb_gsb_component__WEBPACK_IMPORTED_MODULE_6__.GSBComponent, _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_7__.TxtComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".upload-large[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n  .img-fluid[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    text-align: auto;\r\n  }\r\n  .card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n  .custon__btns__class[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    padding: 5px 0px;\r\n    margin: 0px 10px;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n      padding: 5px 0 7px 0 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n    top: 30px !important;\r\n    margin-top: -15px !important;\r\n    font-weight: 700 !important;\r\n    font-size: 15px;\r\n    color: #303030ad;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n      overflow: visible !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-select-panel{\r\n    width: 100% !important;\r\n    min-width: 100% !important;\r\n    transform: translate(15px, 40px) !important;\r\n    background: #ffffff !important;\r\n    border: 1px solid #00000033;\r\n    box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-select-value{\r\n    font-size: 16px;\r\n    font-weight: 600 !important;\r\n    overflow: hidden !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-input-element{\r\n    font-size: 16px !important;\r\n    font-weight: 600 !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-option-text{\r\n    color: #0c0c0c;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\n  color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n    color: #f44836 !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n    color: #f44836 !important;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n    color: #0c0c0c !important;\r\n    overflow: visible !important;\r\n    \r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label{\r\n    overflow: visible !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n    color: #0c0c0c !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n    color: #0c0c0c77;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .ng-touched.ng-valid{\r\n    color: #0c0c0c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n    background-color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n    background-color: #024d7071 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n    color: #bfc1c4;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n    transform: translate3d(30px, 0, 0) !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n      width: 50px !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-error{\r\n      font-size: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGwtYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0NBQWtDO0FBQ3RDO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2Qyx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDQSw0QkFBNEI7RUFDNUI7TUFDSSwrQkFBK0I7RUFDbkM7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSw0QkFBNEI7RUFDaEM7RUFDQSx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixrREFBa0Q7RUFDcEQ7RUFDQTtJQUNFLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7O0tBRUc7RUFDSCx3QkFBd0I7RUFDeEI7O0VBRUEseUJBQXlCO0VBQ3pCO0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7RUFFQSxZQUFZO0VBQ1o7Ozs7R0FJQztFQUNELFlBQVk7RUFFWix3QkFBd0I7RUFDeEI7SUFDRSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0Usc0NBQXNDO0VBQ3hDO0VBQ0EsYUFBYTtFQUNiO0lBQ0UsY0FBYztFQUNoQjtFQUNBLGFBQWE7RUFFYixlQUFlO0VBQ2Y7SUFDRSw2Q0FBNkM7RUFDL0M7RUFDQTtNQUNJLHNCQUFzQjtFQUMxQjtFQUNBLGVBQWU7RUFFZixvQkFBb0I7RUFDcEI7TUFDSSxlQUFlO0VBQ25CO0VBQ0Esb0JBQW9CIiwiZmlsZSI6InNlbGwtYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWxhcmdle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLmltZy1mbHVpZHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBhdXRvO1xyXG4gIH1cclxuICAuY2FyZF9fc3R5bGluZ3tcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwM2Q7XHJcbn1cclxuICAuY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogY2xpcDtcclxuICB9XHJcbiAgLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5jdXN0b25fX2J0bnNfX2NsYXNze1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgfVxyXG4gIC8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgICAgcGFkZGluZzogNXB4IDAgN3B4IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICB0b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzMwMzAzMGFkO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXBhbmVse1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgNDBweCkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAzMztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAtNHB4ICMwMDAwMDA5YyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtaW5wdXQtZWxlbWVudHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtb3B0aW9uLXRleHR7XHJcbiAgICBjb2xvcjogIzBjMGMwYztcclxuICB9XHJcbiAgLyogOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcHtcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG4gIC8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayxcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xyXG4gIGNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gICAgY29sb3I6ICNmNDQ4MzYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXHJcbiAgOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyogaW52YWxpZCAqL1xyXG4gIC8qIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayxcclxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIGNvbG9yOiAjMzZmNDM2ICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuICAvKiBpbnZhbGlkICovXHJcblxyXG4gIC8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tcclxuICAgIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGZpZWxkcyBib3JkZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7XHJcbiAgICBjb2xvcjogIzBjMGMwYzc3O1xyXG4gIH1cclxuICAvKiBmaWVsZHMgYm9yZGVyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubmctdG91Y2hlZC5uZy12YWxpZHtcclxuICAgIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGRpc2FibGVkICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le1xyXG4gICAgY29sb3I6ICNiZmMxYzQ7XHJcbiAgfVxyXG4gIC8qIGRpc2FibGVkICovXHJcblxyXG4gIC8qIHRvZ2dsZSBiYXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iLWNvbnRhaW5lcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzBweCwgMCwgMCkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIHRvZ2dsZSBiYXIgKi9cclxuXHJcbiAgLyogZXJyb3IgZm9udC1zaXplICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWVycm9ye1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC8qIGVycm9yIGZvbnQtc2l6ZSAqL1xyXG4iXX0= */"] });


/***/ }),

/***/ 71257:
/*!*************************************************************************!*\
  !*** ./src/app/feature/box-management/sell-list/sell-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellListComponent": () => (/* binding */ SellListComponent)
/* harmony export */ });
/* harmony import */ var src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base-list-class */ 42286);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directive/permission.directive */ 47399);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/control/dd/dd.component */ 32231);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 71144);
/* harmony import */ var _shared_components_table_tbl_date_tbl_date_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/table/tbl-date/tbl-date.component */ 98308);
/* harmony import */ var _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/table/tbl-dd/tbl-dd.component */ 18533);
/* harmony import */ var _shared_components_table_tbl_ac_tbl_ac_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/table/tbl-ac/tbl-ac.component */ 11136);
/* harmony import */ var _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/table/tbl-txt/tbl-txt.component */ 33086);
/* harmony import */ var _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/table/di-paginator/di-paginator.component */ 65141);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 15719);















const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function SellListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SellListComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r38._switch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](4, _c0, ctx_r0._ss.lng === "en", ctx_r0._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("+ ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, "Add"), " ");
} }
function SellListComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "S No"));
} }
function SellListComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r41 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", i_r41 + ctx_r3._tbls[ctx_r3.URLz.$].index * ctx_r3._tbls[ctx_r3.URLz.$].size + 1, " ");
} }
function SellListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SellListComponent_th_19_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); ctx_r42._reset(ctx_r42.URLz.$); return ctx_r42._refresh(ctx_r42.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SellListComponent_th_19_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r44._refresh(ctx_r44.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SellListComponent_td_20_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SellListComponent_td_20_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r47._switch(item_r45.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SellListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SellListComponent_td_20_i_1_Template, 1, 0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("permission", ctx_r5.ACTION.EDIT);
} }
function SellListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-date", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r6._tbls[ctx_r6.URLz.$] == null ? null : ctx_r6._tbls[ctx_r6.URLz.$].form);
} }
function SellListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](2, 1, item_r50 == null ? null : item_r50.created_at, ctx_r7.date, "mediumDate"), " ");
} }
function SellListComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-dd", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r8._tbls[ctx_r8.URLz.$] == null ? null : ctx_r8._tbls[ctx_r8.URLz.$].form)("url", ctx_r8.URLz.BG);
} }
function SellListComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r51 == null ? null : item_r51.business_group == null ? null : item_r51.business_group.title, " ");
} }
function SellListComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-dd", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r10._tbls[ctx_r10.URLz.$] == null ? null : ctx_r10._tbls[ctx_r10.URLz.$].form)("load", false)("url", ctx_r10.URLz.LE);
} }
function SellListComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r52.legal_entity == null ? null : item_r52.legal_entity.title, " ");
} }
function SellListComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-dd", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r12._tbls[ctx_r12.URLz.$] == null ? null : ctx_r12._tbls[ctx_r12.URLz.$].form)("url", ctx_r12.URLz.OU)("load", false);
} }
function SellListComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r53.operating_unit == null ? null : item_r53.operating_unit.title, " ");
} }
function SellListComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-dd", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r14._tbls[ctx_r14.URLz.$] == null ? null : ctx_r14._tbls[ctx_r14.URLz.$].form)("url", ctx_r14.URLz.SU)("load", false);
} }
function SellListComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r54.sub_unit == null ? null : item_r54.sub_unit.title, " ");
} }
function SellListComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-ac", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r16._tbls[ctx_r16.URLz.$] == null ? null : ctx_r16._tbls[ctx_r16.URLz.$].form)("url", ctx_r16.URLz.MAJLIS);
} }
function SellListComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r55 == null ? null : item_r55.majlis == null ? null : item_r55.majlis.title, " ");
} }
function SellListComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-txt", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r18._tbls[ctx_r18.URLz.$] == null ? null : ctx_r18._tbls[ctx_r18.URLz.$].form);
} }
function SellListComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r56 == null ? null : item_r56.donor == null ? null : item_r56.donor.name, " ");
} }
function SellListComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-txt", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r20._tbls[ctx_r20.URLz.$] == null ? null : ctx_r20._tbls[ctx_r20.URLz.$].form);
} }
function SellListComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r57 == null ? null : item_r57.donor == null ? null : item_r57.donor.mobile, " ");
} }
function SellListComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-txt", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r22._tbls[ctx_r22.URLz.$] == null ? null : ctx_r22._tbls[ctx_r22.URLz.$].form);
} }
function SellListComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r58 == null ? null : item_r58.donor == null ? null : item_r58.donor.donor_detail == null ? null : item_r58.donor.donor_detail.followup, " ");
} }
function SellListComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-txt", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r24._tbls[ctx_r24.URLz.$] == null ? null : ctx_r24._tbls[ctx_r24.URLz.$].form);
} }
function SellListComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r59 == null ? null : item_r59.donor == null ? null : item_r59.donor.address, " ");
} }
function SellListComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-txt", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r26._tbls[ctx_r26.URLz.$] == null ? null : ctx_r26._tbls[ctx_r26.URLz.$].form);
} }
function SellListComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r60 == null ? null : item_r60.donor == null ? null : item_r60.donor.donor_detail == null ? null : item_r60.donor.donor_detail.near_by, " ");
} }
function SellListComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-txt", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r28._tbls[ctx_r28.URLz.$] == null ? null : ctx_r28._tbls[ctx_r28.URLz.$].form);
} }
function SellListComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r61 == null ? null : item_r61.box_stock == null ? null : item_r61.box_stock.reference_no, " ");
} }
function SellListComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Box Quantity"), " ");
} }
function SellListComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r62 == null ? null : item_r62.box_qty, " ");
} }
function SellListComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-txt", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r32._tbls[ctx_r32.URLz.$] == null ? null : ctx_r32._tbls[ctx_r32.URLz.$].form);
} }
function SellListComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r63 == null ? null : item_r63.box_stock == null ? null : item_r63.box_stock.price_per_box, " ");
} }
function SellListComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "di-tbl-ac", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("group", ctx_r34._tbls[ctx_r34.URLz.$] == null ? null : ctx_r34._tbls[ctx_r34.URLz.$].form)("url", ctx_r34.URLz.COLLECTOR);
} }
function SellListComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r64 == null ? null : item_r64.collector == null ? null : item_r64.collector.title, " ");
} }
function SellListComponent_tr_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 61);
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](1, _c0, ctx_r36._ss.lng === "en", ctx_r36._ss.lng === "ur"));
} }
function SellListComponent_tr_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 62);
} }
class SellListComponent extends src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__.BaseListClass {
    constructor() {
        super(...arguments);
        this.applyClass = { 'col-lg-6': true, 'col-md-6': true };
    }
    ngOnInit() {
        this.status = window?.location?.href?.indexOf('distribution') == -1 ? 1 : 2;
        this._component = ((this.status == 2 ? 'Distribution' : 'Sell') + ' Box');
        this._pathLocation = '/box_management/box_sell' + (this.status == 2 ? '_distribution' : '') + '_add';
        this.routerStrategy();
        this.initTables();
    }
    initTables() {
        this._reset(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].columns = [
            'id',
            'actions',
            'date',
            'bg',
            'le',
            'ou',
            'su',
            'department_id',
            'name',
            'mobile',
            'followup',
            'address',
            'near_by',
            'reference_no',
            'box_qty',
            'price_per_box',
            'collector_id',
        ];
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_SELL;
        this._formCreator(this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$]);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].formFilter = this._fb.group({
            organisation_id: ['', this._vs._vals('Organisation')],
            system_id: ['', this._vs._vals('System')],
            status: [this.status]
        });
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].formFilter.get('system_id').valueChanges.subscribe(val => {
            if (this.emptyCheck(val)) {
                this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].formFilter.get('system_id').patchValue(val, { emitEvent: false });
                this._refresh(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
            }
        });
        // Subscribe System to View the List Later
        // this._refresh(URLz.$, '')
    }
}
SellListComponent.ɵfac = /*@__PURE__*/ function () { let ɵSellListComponent_BaseFactory; return function SellListComponent_Factory(t) { return (ɵSellListComponent_BaseFactory || (ɵSellListComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](SellListComponent)))(t || SellListComponent); }; }();
SellListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SellListComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 69, vars: 15, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], ["mat-raised-button", "", "type", "button", "class", "btn btn-info custon__add__btns__class float-right", 3, "ngClass", "click", 4, "permission"], [1, "card-body", "pt-0", "mt-4"], ["field", "organisation_id", "lbl", "Organization", 3, "ngClass", "group", "url", "child"], ["field", "system_id", "lbl", "System", 3, "ngClass", "group", "url"], ["sys", ""], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px;", "class", "", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "pl-3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "date"], ["class", "pr-3", "mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 4, "matHeaderCellDef"], ["class", "px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "bg"], ["matColumnDef", "le"], ["matColumnDef", "ou"], ["matColumnDef", "su"], ["matColumnDef", "department_id"], ["matColumnDef", "name"], ["matColumnDef", "mobile"], ["matColumnDef", "followup"], ["matColumnDef", "address"], ["matColumnDef", "near_by"], ["matColumnDef", "reference_no"], ["matColumnDef", "box_qty"], ["matColumnDef", "price_per_box"], ["matColumnDef", "collector_id"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "tbl", "paginateEvent"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "custon__add__btns__class", "float-right", 3, "ngClass", "click"], ["mat-header-cell", "", 1, "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", 1, "pl-3"], [1, "ti-reload", "text-info", "pointer", "px-2", 3, "click"], [1, "ti-search", "text-info", "pointer", "px-2", 3, "click"], ["class", "ti-pencil text-info px-2 pointer", 3, "click", 4, "permission"], [1, "ti-pencil", "text-info", "px-2", "pointer", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 1, "pr-3"], ["field", "date", "lbl", "Date", 3, "group"], ["mat-cell", "", 1, "px-3"], ["field", "bg", "lbl", "Business Group", 3, "group", "url"], ["field", "le", "lbl", "Legal Entity", "parentFCName", "bg", 3, "group", "load", "url"], ["field", "ou", "lbl", "Operating Unit", "parentFCName", "le", 3, "group", "url", "load"], ["field", "su", "lbl", "Sub Unit", "parentFCName", "ou", 3, "group", "url", "load"], ["lbl", "Department", "field", "department_id", 3, "group", "url"], ["field", "name", "lbl", "Donor Name", 3, "group"], ["field", "mobile", "lbl", "Mobile", 3, "group"], ["field", "followup", "lbl", "Follow up", 3, "group"], ["field", "address", "lbl", "Address", 3, "group"], ["field", "near_by", "lbl", "Near By", 3, "group"], ["field", "reference_no", "lbl", "Reference #", 3, "group"], ["field", "price_per_box", "lbl", "Price", 3, "group"], ["lbl", "Collector", "field", "collector_id", 3, "group", "url"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""]], template: function SellListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, SellListComponent_button_7_Template, 3, 7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "di-dd", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "di-dd", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("matSortChange", function SellListComponent_Template_table_matSortChange_14_listener($event) { return ctx._sort($event, ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](15, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, SellListComponent_th_16_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, SellListComponent_td_17_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](18, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, SellListComponent_th_19_Template, 3, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, SellListComponent_td_20_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](21, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, SellListComponent_th_22_Template, 2, 1, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, SellListComponent_td_23_Template, 3, 5, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](24, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, SellListComponent_th_25_Template, 2, 2, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, SellListComponent_td_26_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](27, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, SellListComponent_th_28_Template, 2, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, SellListComponent_td_29_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](30, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, SellListComponent_th_31_Template, 2, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, SellListComponent_td_32_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](33, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, SellListComponent_th_34_Template, 2, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, SellListComponent_td_35_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](36, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, SellListComponent_th_37_Template, 2, 2, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, SellListComponent_td_38_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](39, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, SellListComponent_th_40_Template, 2, 1, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, SellListComponent_td_41_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](42, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, SellListComponent_th_43_Template, 2, 1, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, SellListComponent_td_44_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](45, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, SellListComponent_th_46_Template, 2, 1, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, SellListComponent_td_47_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](48, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, SellListComponent_th_49_Template, 2, 1, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, SellListComponent_td_50_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](51, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, SellListComponent_th_52_Template, 2, 1, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, SellListComponent_td_53_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](54, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, SellListComponent_th_55_Template, 2, 1, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, SellListComponent_td_56_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](57, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, SellListComponent_th_58_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, SellListComponent_td_59_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](60, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, SellListComponent_th_61_Template, 2, 1, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](62, SellListComponent_td_62_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](63, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](64, SellListComponent_th_64_Template, 2, 2, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](65, SellListComponent_td_65_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](66, SellListComponent_tr_66_Template, 1, 4, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](67, SellListComponent_tr_67_Template, 1, 0, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "di-paginator", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("paginateEvent", function SellListComponent_Template_di_paginator_paginateEvent_68_listener() { return ctx._refresh(ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 13, ctx._component), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("permission", ctx.ACTION.ADD);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.applyClass)("group", ctx._tbls[ctx.URLz.$] == null ? null : ctx._tbls[ctx.URLz.$].formFilter)("url", ctx.URLz.ORG)("child", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.applyClass)("group", ctx._tbls[ctx.URLz.$] == null ? null : ctx._tbls[ctx.URLz.$].formFilter)("url", ctx.URLz.ORG_SYSTEM);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.URLz.$].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.URLz.$].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.URLz.$].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tbl", ctx._tbls[ctx.URLz.$]);
    } }, directives: [_shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_2__.PermissionDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_3__.DdComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _shared_components_table_tbl_date_tbl_date_component__WEBPACK_IMPORTED_MODULE_4__.TblDateComponent, _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_5__.TblDDComponent, _shared_components_table_tbl_ac_tbl_ac_component__WEBPACK_IMPORTED_MODULE_6__.TblACComponent, _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_7__.TblTxtComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow, _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_8__.DiPaginatorComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.text-red[_ngcontent-%COMP%]{\r\n    color: #c53b55;\r\n}\r\n\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n\r\n\r\n.custon__add__btns__class[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  padding: 3px 5px;\r\n  background: transparent;\r\n  border: 0px;\r\n  box-shadow: 0px 0px 0px transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:hover{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:active{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:focus{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper{\r\n  padding: 0px 15px;\r\n  color: white !important;\r\n  background: #00c292 !important;\r\n  display: block;\r\n  font-size: 15px;\r\n  border-radius: 3px;\r\n  transition: 0.5s;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper:hover{\r\n  box-shadow: 0px 0px 10px -4px #000000a6;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-ripple.mat-button-ripple{\r\n  display: none !important;\r\n  opacity: 0 !important;\r\n}\r\n.cdk-mouse-focused.cdk-focused[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{\r\n  opacity: 0 !important;\r\n}\r\n\r\n\r\n\r\n.slection__styled   [_nghost-%COMP%]      .search.ng-touched{\r\n    color: #1a1a1a !important;\r\n\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%]{\r\n    background: #024e70 !important;\r\n    color: white !important;\r\n}\r\n.search[_ngcontent-%COMP%]{\r\n    color: #ffffff !important;\r\n    border-bottom: 1px solid whitesmoke;\r\n  }\r\n[_nghost-%COMP%]      .mat-sort-header-arrow{\r\n    color: white;\r\n}\r\n[_nghost-%COMP%]      .mat-sort-header-content{\r\n    color: white !important;\r\n}\r\n[_nghost-%COMP%]      .search::-moz-placeholder{\r\n    color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search:-ms-input-placeholder{\r\n    color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search::placeholder{\r\n    color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search.ng-touched{\r\n    color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search .ng-star-inserted{\r\n    color: #000 !important;\r\n}\r\n\r\n\r\n.mat_table[_ngcontent-%COMP%]{\r\n    max-height: 490px;\r\n    height: auto;\r\n}\r\ntr.mat-header-row[_ngcontent-%COMP%]{\r\n    height: 40px !important;\r\n}\r\n[_nghost-%COMP%]      tr.mat-row, tr.mat-footer-row[_ngcontent-%COMP%]{\r\n    height: 40px !important;\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{\r\n    white-space: nowrap !important;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(odd){\r\n    background-color: #ffffff00 !important;\r\n    transition: 0.1s;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(even){\r\n    background-color: #b3eeff2c !important;\r\n    border-top: 2px solid #0000000d !important;\r\n    border-bottom: 2px solid #0000000d !important;\r\n    transition: 0.1s;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(even):hover{\r\n    box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(odd):hover{\r\n    box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .switch.switch-small.checked{\r\n    background-color: #03a9f3 !important;\r\n}\r\n\r\n\r\n.custom__select__class[_ngcontent-%COMP%]{\r\n    border-radius: 3px;\r\n    padding: 4px;\r\n    border: 1px solid #0000004b;\r\n    background: white;\r\n}\r\n.custom__select__class[_ngcontent-%COMP%]   .cus_opt[_ngcontent-%COMP%]{\r\n    border-radius: 4px;\r\n    background: #ffffff;\r\n    box-shadow: 0px 0px 10px black;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-paginator-range-label{\r\n    margin: 0px !important;\r\n}\r\n\r\n\r\n.upload-large[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n.img-fluid[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    text-align: auto;\r\n  }\r\n.card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n  }\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n\r\n.text_align[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  }\r\n.custon__btns__class[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  \r\n  }\r\n.wajiba-nafila[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 50px 10px;\r\n  }\r\n@media(max-width: 768px){\r\n    .text_align[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n    [_nghost-%COMP%]     .custom-date  .md-drppicker.double{\r\n      width: 290px !important;\r\n      left: 0!important;\r\n      top: 100% !important;\r\n    }\r\n  }\r\n\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n      padding: 5px 0 7px 0 !important;\r\n  }\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n    top: 30px !important;\r\n    margin-top: -15px !important;\r\n    font-weight: 700 !important;\r\n    font-size: 15px;\r\n    color: #303030ad;\r\n  }\r\n[_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n      overflow: visible !important;\r\n  }\r\n\r\n\r\n[_nghost-%COMP%]      .mat-select-panel{\r\n    width: 100% !important;\r\n    min-width: 100% !important;\r\n    transform: translate(15px, 40px) !important;\r\n    background: #ffffff !important;\r\n    border: 1px solid #00000033;\r\n    box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-select-value{\r\n    font-size: 16px;\r\n    font-weight: 600 !important;\r\n    overflow: hidden !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-input-element{\r\n    font-size: 16px !important;\r\n    font-weight: 600 !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-option-text{\r\n    color: #0c0c0c;\r\n  }\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\n  color: #0eb9ec !important;\r\n  }\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n    color: #f44836 !important;\r\n  }\r\n[_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n    color: #f44836 !important;\r\n  }\r\n\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n    color: #0c0c0c !important;\r\n    overflow: visible !important;\r\n    \r\n  }\r\n[_nghost-%COMP%]      .mat-form-field-label{\r\n    overflow: visible !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n    color: #0c0c0c !important;\r\n  }\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n    color: #0c0c0c77;\r\n  }\r\n\r\n[_nghost-%COMP%]      .ng-touched.ng-valid{\r\n    color: #0c0c0c !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n    background-color: #0eb9ec !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n    background-color: #024d7071 !important;\r\n  }\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n    color: #bfc1c4;\r\n  }\r\n\r\n\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n    transform: translate3d(30px, 0, 0) !important;\r\n  }\r\n[_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n      width: 50px !important;\r\n  }\r\n\r\n\r\n[_nghost-%COMP%]      .mat-error{\r\n      font-size: 10px;\r\n  }\r\n\r\n[_nghost-%COMP%]     .md-drppicker.double {\r\n    width: 500px !important;\r\n  }\r\n[_nghost-%COMP%]     .md-drppicker td.active, [_nghost-%COMP%]     .md-drppicker td.active:hover {\r\n    background-color: #039be5 !important;\r\n  }\r\n[_nghost-%COMP%]     .md-drppicker .btn {\r\n    background-color: #03a9f3 !important;\r\n    text-transform: capitalize !important;\r\n    font-size: 14px !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGwtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0EsaUJBQWlCO0FBQ2pCO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7QUFDRixpQkFBaUI7QUFFakIsd0JBQXdCO0FBQ3RCO0VBQ0Esa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0VBQ04sWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0Usd0NBQXdDO0lBQ3RDLG9DQUFvQztBQUN4QztBQUNBO0VBQ0Usd0NBQXdDO0lBQ3RDLG9DQUFvQztBQUN4QztBQUNBO0VBQ0Usd0NBQXdDO0lBQ3RDLG9DQUFvQztBQUN4QztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNFOzs7Ozs7Ozs7Ozs7O0dBYUM7QUFDSCx3QkFBd0I7QUFFeEIseUJBQXlCO0FBQ3pCO0lBQ0kseUJBQXlCOztBQUU3QjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1DQUFtQztFQUNyQztBQUNGO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFGQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUZBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBLHlCQUF5QjtBQUV6QiwwQkFBMEI7QUFDMUI7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLDBDQUEwQztJQUMxQyw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBLDBCQUEwQjtBQUUxQixvQ0FBb0M7QUFDcEM7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQSxvQ0FBb0M7QUFFcEMsdUJBQXVCO0FBQ3ZCO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQztBQUNBLHVCQUF1QjtBQUV2QixvQkFBb0I7QUFDcEI7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQSxvQkFBb0I7QUFJcEIsYUFBYTtBQUdiO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0VBQ1o7QUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGtDQUFrQztFQUNwQztBQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7QUFDQSx3QkFBd0I7QUFDeEI7RUFDQSxpQkFBaUI7RUFDakI7QUFDQTtFQUNBLFlBQVk7RUFDWixzQkFBc0I7RUFDdEI7QUFFQTtFQUNBLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEI7QUFHQTtJQUNFO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7TUFDRSx1QkFBdUI7TUFDdkIsaUJBQWlCO01BQ2pCLG9CQUFvQjtJQUN0QjtFQUNGO0FBQ0Esd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QjtNQUNJLCtCQUErQjtFQUNuQztBQUNBLHdCQUF3QjtBQUN4QjtJQUNFLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFDQTtNQUNJLDRCQUE0QjtFQUNoQztBQUNBLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDJDQUEyQztJQUMzQyw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGtEQUFrRDtFQUNwRDtBQUNBO0lBQ0UsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQiwyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLDBCQUEwQjtJQUMxQiwyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDQTs7S0FFRztBQUNILHdCQUF3QjtBQUN4Qjs7RUFFQSx5QkFBeUI7RUFDekI7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBOztJQUVFLHlCQUF5QjtFQUMzQjtBQUNBLHdCQUF3QjtBQUN4QjtJQUNFLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBLGtCQUFrQjtBQUNsQjtJQUNFLGdCQUFnQjtFQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0FBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7QUFFQSxhQUFhO0FBQ2I7SUFDRSxjQUFjO0VBQ2hCO0FBQ0EsYUFBYTtBQUViLGVBQWU7QUFDZjtJQUNFLDZDQUE2QztFQUMvQztBQUNBO01BQ0ksc0JBQXNCO0VBQzFCO0FBQ0EsZUFBZTtBQUVmLG9CQUFvQjtBQUNwQjtNQUNJLGVBQWU7RUFDbkI7QUFDQSxvQkFBb0I7QUFHcEI7SUFDRSx1QkFBdUI7RUFDekI7QUFFQTs7SUFFRSxvQ0FBb0M7RUFDdEM7QUFFQTtJQUNFLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNlbGwtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRfX3N0eWxpbmd7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG59XHJcbi50ZXh0LXJlZHtcclxuICAgIGNvbG9yOiAjYzUzYjU1O1xyXG59XHJcbi8qIEhFQURFUiBTVFlMRSAqL1xyXG4uY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogY2xpcDtcclxuICB9XHJcbiAgLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4vKiBIRUFERVIgU1RZTEUgKi9cclxuXHJcbi8qIEhFQURFUiBCVVRUT04gU1RZTEUgKi9cclxuICAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczphY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmZvY3Vze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3MgLm1hdC1idXR0b24td3JhcHBlcntcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjMDBjMjkyICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbjpob3N0IC9kZWVwLyAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzIC5tYXQtYnV0dG9uLXdyYXBwZXI6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IC00cHggIzAwMDAwMGE2O1xyXG59XHJcbjpob3N0IC9kZWVwLyAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzIC5tYXQtcmlwcGxlLm1hdC1idXR0b24tcmlwcGxle1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNkay1tb3VzZS1mb2N1c2VkLmNkay1mb2N1c2VkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7XHJcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG59XHJcbiAgLyogLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzc3tcclxuICAgICAgbWFyZ2luOiAtN3B4IDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzI5MjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDBjMjkyO1xyXG4gICAgICBib3gtc2hhZG93OjBweCAwcHggMTBweCAtNXB4ICMwMDAwMDA4ZjtcclxuICB9XHJcbiAgLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjMWU5ZDdkODAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFjYjk5ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMWNiOTkgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjMWU5ZDdkODAgIWltcG9ydGFudDtcclxufSAqL1xyXG4vKiBIRUFERVIgQlVUVE9OIFNUWUxFICovXHJcblxyXG4vKiBUQUJMRSBoZWFkZXIgU1RZTElORyAqL1xyXG4uc2xlY3Rpb25fX3N0eWxlZCA6aG9zdCAvZGVlcC8gIC5zZWFyY2gubmctdG91Y2hlZHtcclxuICAgIGNvbG9yOiAjMWExYTFhICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDI0ZTcwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoe1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNvcnQtaGVhZGVyLWFycm93e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zb3J0LWhlYWRlci1jb250ZW50e1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoLm5nLXRvdWNoZWR7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLnNlYXJjaCAubmctc3Rhci1pbnNlcnRlZHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogVEFCTEUgaGVhZGVyIFNUWUxJTkcgKi9cclxuXHJcbi8qIGxpc3Qgc3R5bGluZyBpbiB0YWJsZSAqL1xyXG4ubWF0X3RhYmxle1xyXG4gICAgbWF4LWhlaWdodDogNDkwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxudHIubWF0LWhlYWRlci1yb3d7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIHRyLm1hdC1yb3csIHRyLm1hdC1mb290ZXItcm93e1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1mb290ZXItY2VsbCwgLm1hdC1jZWxse1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChvZGQpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2VlZmYyYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDAwMDAwZCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDAwZCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcztcclxufVxyXG4ubWF0LXJvdzpudGgtY2hpbGQoZXZlbik6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OjBweCAwcHggOHB4IDBweCAjMDAwMDAwNWU7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCk6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OjBweCAwcHggOHB4IDBweCAjMDAwMDAwNWU7XHJcbn1cclxuLyogbGlzdCBzdHlsaW5nIGluIHRhYmxlICovXHJcblxyXG4vKiBjaGFjayBvbiBvciBvZmYgYnV0dG9uICBzdHlsaW5nICovXHJcbjpob3N0IC9kZWVwLyAgLnN3aXRjaC5zd2l0Y2gtc21hbGwuY2hlY2tlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjMgIWltcG9ydGFudDtcclxufVxyXG4vKiBjaGFjayBvbiBvciBvZmYgYnV0dG9uICBzdHlsaW5nICovXHJcblxyXG4vKiBzZWxlY3QgYm94IHN0eWxpbmcgKi9cclxuLmN1c3RvbV9fc2VsZWN0X19jbGFzc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA0YjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5jdXN0b21fX3NlbGVjdF9fY2xhc3MgLmN1c19vcHR7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGJsYWNrO1xyXG59XHJcbi8qIHNlbGVjdCBib3ggc3R5bGluZyAqL1xyXG5cclxuLyogcGFnaW5hdGlvbiBhcmVhICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWx7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHBhZ2luYXRpb24gYXJlYSAqL1xyXG5cclxuXHJcblxyXG4vKiBkcm9wZG93biAqL1xyXG5cclxuXHJcbi51cGxvYWQtbGFyZ2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuaW1nLWZsdWlke1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHRleHQtYWxpZ246IGF1dG87XHJcbiAgfVxyXG4gIC5jYXJkX19zdHlsaW5ne1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzZDtcclxuICB9XHJcbiAgLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZ3tcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGNsaXA7XHJcbiAgfVxyXG4gIC5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmcgaDJ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggN3B4IC03cHggIzAwMDAwMDU3O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAvKiBidXR0b25zIHNhdmUgQ2FuY2VsICovXHJcbiAgLnRleHRfYWxpZ257XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5jdXN0b25fX2J0bnNfX2NsYXNze1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICAvKiBwYWRkaW5nOiA1cHggMHB4OyAqL1xyXG4gIH1cclxuXHJcbiAgLndhamliYS1uYWZpbGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLnRleHRfYWxpZ257XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgOmhvc3QgL2RlZXAvIC5jdXN0b20tZGF0ZSAgLm1kLWRycHBpY2tlci5kb3VibGV7XHJcbiAgICAgIHdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAwIWltcG9ydGFudDtcclxuICAgICAgdG9wOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qIGJ1dHRvbnMgc2F2ZSBDYW5jZWwgKi9cclxuICAvKiBmaWVsZHMgbGluZSBoZWlnaHQgd29yayAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwIDdweCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gICAgdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMzMDMwMzBhZDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcntcclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIC8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC1wYW5lbHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMzM7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggLTRweCAjMDAwMDAwOWMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC12YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWlucHV0LWVsZW1lbnR7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LW9wdGlvbi10ZXh0e1xyXG4gICAgY29sb3I6ICMwYzBjMGM7XHJcbiAgfVxyXG4gIC8qIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuICAvKiBmaWVsZHMgYm9yZGVyIGhvdmVyICovXHJcbiAgOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2ssXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcclxuICBjb2xvcjogIzBlYjllYyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gICAgY29sb3I6ICNmNDQ4MzYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXHJcbiAgOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBmaWVsZHMgYm9yZGVyIGhvdmVyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gICAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBmb250LXNpemU6IDE1cHg7ICovXHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3d7XHJcbiAgICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBmaWVsZHMgYm9yZGVyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le1xyXG4gICAgY29sb3I6ICMwYzBjMGM3NztcclxuICB9XHJcbiAgLyogZmllbGRzIGJvcmRlciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm5nLXRvdWNoZWQubmctdmFsaWR7XHJcbiAgICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlYjllYyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjRkNzA3MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyogZGlzYWJsZWQgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7XHJcbiAgICBjb2xvcjogI2JmYzFjNDtcclxuICB9XHJcbiAgLyogZGlzYWJsZWQgKi9cclxuXHJcbiAgLyogdG9nZ2xlIGJhciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMHB4LCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntcclxuICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogdG9nZ2xlIGJhciAqL1xyXG5cclxuICAvKiBlcnJvciBmb250LXNpemUgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZXJyb3J7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLyogZXJyb3IgZm9udC1zaXplICovXHJcblxyXG5cclxuICA6aG9zdCAvZGVlcC8gLm1kLWRycHBpY2tlci5kb3VibGUge1xyXG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLm1kLWRycHBpY2tlciB0ZC5hY3RpdmUsXHJcbiAgOmhvc3QgL2RlZXAvIC5tZC1kcnBwaWNrZXIgdGQuYWN0aXZlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzliZTUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyIC5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmMyAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ 10959:
/*!***********************************************************************************!*\
  !*** ./src/app/feature/box-management/stock-zimmidar/stock-zimmidar.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockZimmidarComponent": () => (/* binding */ StockZimmidarComponent)
/* harmony export */ });
/* harmony import */ var src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base-list-class */ 42286);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/control/dd/dd.component */ 32231);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 71144);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 15719);
/* harmony import */ var _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/table/tbl-dd/tbl-dd.component */ 18533);
/* harmony import */ var _shared_components_table_tbl_ac_tbl_ac_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/table/tbl-ac/tbl-ac.component */ 11136);
/* harmony import */ var _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/table/di-paginator/di-paginator.component */ 65141);











function StockZimmidarComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "S No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function StockZimmidarComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r26 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r26 + ctx_r2._tbls[ctx_r2.URLz.$].index * ctx_r2._tbls[ctx_r2.URLz.$].size + 1, " ");
} }
function StockZimmidarComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StockZimmidarComponent_th_18_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r27._reset(ctx_r27.URLz.$); return ctx_r27._refresh(ctx_r27.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StockZimmidarComponent_th_18_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29._refresh(ctx_r29.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function StockZimmidarComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "td", 35);
} }
function StockZimmidarComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-dd", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r5._tbls[ctx_r5.URLz.$] == null ? null : ctx_r5._tbls[ctx_r5.URLz.$].form)("url", ctx_r5.URLz.BG);
} }
function StockZimmidarComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r31.business_group == null ? null : item_r31.business_group.title, " ");
} }
function StockZimmidarComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-dd", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r7._tbls[ctx_r7.URLz.$] == null ? null : ctx_r7._tbls[ctx_r7.URLz.$].form)("load", false)("url", ctx_r7.URLz.LE);
} }
function StockZimmidarComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r32.legal_entity == null ? null : item_r32.legal_entity.title, " ");
} }
function StockZimmidarComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-dd", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r9._tbls[ctx_r9.URLz.$] == null ? null : ctx_r9._tbls[ctx_r9.URLz.$].form)("url", ctx_r9.URLz.OU)("load", false);
} }
function StockZimmidarComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r33.operating_unit == null ? null : item_r33.operating_unit.title, " ");
} }
function StockZimmidarComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-dd", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r11._tbls[ctx_r11.URLz.$] == null ? null : ctx_r11._tbls[ctx_r11.URLz.$].form)("url", ctx_r11.URLz.SU)("load", false);
} }
function StockZimmidarComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r34.operating_unit == null ? null : item_r34.operating_unit.title, " ");
} }
function StockZimmidarComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-ac", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r13._tbls[ctx_r13.URLz.$] == null ? null : ctx_r13._tbls[ctx_r13.URLz.$].form)("url", ctx_r13.URLz.COLLECTOR);
} }
function StockZimmidarComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", item_r35 == null ? null : item_r35.collector == null ? null : item_r35.collector.title, " (", item_r35 == null ? null : item_r35.collector == null ? null : item_r35.collector.username, ") ");
} }
function StockZimmidarComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Issued"));
} }
function StockZimmidarComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r36 == null ? null : item_r36.issued, " ");
} }
function StockZimmidarComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Reference #"));
} }
function StockZimmidarComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r37 == null ? null : item_r37.box_stock == null ? null : item_r37.box_stock.reference_no, " ");
} }
function StockZimmidarComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Sell Qty"));
} }
function StockZimmidarComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r38.sellBoxQty, " ");
} }
function StockZimmidarComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Remaining"));
} }
function StockZimmidarComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r39.remaining, " ");
} }
const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function StockZimmidarComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 42);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](1, _c0, ctx_r23._ss.lng === "en", ctx_r23._ss.lng === "ur"));
} }
function StockZimmidarComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 43);
} }
class StockZimmidarComponent extends src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__.BaseListClass {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.applyClass = { 'col-lg-6': true, 'col-md-6': true };
    }
    ngOnInit() {
        // this._pathLocation = '/donation/cell_master_add';
        this._component = 'Collector Stock ';
        // this.initForm();
        this.initTables();
    }
    initForm() {
        // this._fs._form = this._fb.group({
        //   organisation_id: ['', this._vs._val('Oranaization')],
        //   system_id: ['', this._vs._val('System')]
        // });
    }
    initTables() {
        this._reset(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].columns = [
            'id',
            'actions',
            'bg',
            'le',
            'ou',
            'su',
            'collector_id',
            'box_stock',
            'ou_stock',
            'sellBoxQty',
            'remaining' // ???
        ];
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_COL;
        this._formCreator(this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$]);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].formFilter = this._fb.group({
            organisation_id: ['', this._vs._vals('Organisation')],
            system_id: ['', this._vs._vals('System')]
        });
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].formFilter.get('system_id').valueChanges.subscribe(val => {
            if (this.emptyCheck(val)) {
                this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].formFilter.get('system_id').patchValue(val, { emitEvent: false });
                this._refresh(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
            }
        });
        // Subscribe System to View the List Later
        // this._refresh(URLz.$, '')
    }
}
StockZimmidarComponent.ɵfac = function StockZimmidarComponent_Factory(t) { return new (t || StockZimmidarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector)); };
StockZimmidarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: StockZimmidarComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 50, vars: 15, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], [1, "card-body", "pt-0", "mt-4"], ["field", "organisation_id", "lbl", "Organization", 3, "group", "url", "ngClass", "child"], ["field", "system_id", "lbl", "System", 3, "group", "ngClass", "url"], ["sys", ""], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px;", "class", "", "mat-header-cell", "", "translate", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "pl-3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "bg"], ["class", "pr-3", "mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 4, "matHeaderCellDef"], ["matColumnDef", "le"], ["matColumnDef", "ou"], ["matColumnDef", "su"], ["matColumnDef", "collector_id"], ["matColumnDef", "ou_stock"], ["matColumnDef", "box_stock"], ["matColumnDef", "sellBoxQty"], ["matColumnDef", "remaining"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "tbl", "paginateEvent"], ["mat-header-cell", "", "translate", "", 1, "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", 1, "pl-3"], [1, "ti-reload", "text-info", "pointer", "px-2", 3, "click"], [1, "ti-search", "text-info", "pointer", "px-2", 3, "click"], ["mat-cell", "", 1, "px-3"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 1, "pr-3"], ["field", "bg", "lbl", "Business Group", 3, "group", "url"], ["field", "le", "lbl", "Legal Entity", "parentFCName", "bg", 3, "group", "load", "url"], ["field", "ou", "lbl", "Operating Unit", "parentFCName", "le", 3, "group", "url", "load"], ["field", "su", "lbl", "Sub Unit", "parentFCName", "ou", 3, "group", "url", "load"], ["lbl", "Collector", "field", "collector_id", 3, "group", "url"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""]], template: function StockZimmidarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "di-dd", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "di-dd", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function StockZimmidarComponent_Template_table_matSortChange_13_listener($event) { return ctx._sort($event, ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, StockZimmidarComponent_th_15_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, StockZimmidarComponent_td_16_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, StockZimmidarComponent_th_18_Template, 3, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, StockZimmidarComponent_td_19_Template, 1, 0, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, StockZimmidarComponent_th_21_Template, 2, 2, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, StockZimmidarComponent_td_22_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, StockZimmidarComponent_th_24_Template, 2, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, StockZimmidarComponent_td_25_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, StockZimmidarComponent_th_27_Template, 2, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, StockZimmidarComponent_td_28_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, StockZimmidarComponent_th_30_Template, 2, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, StockZimmidarComponent_td_31_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, StockZimmidarComponent_th_33_Template, 2, 2, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, StockZimmidarComponent_td_34_Template, 2, 2, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, StockZimmidarComponent_th_36_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, StockZimmidarComponent_td_37_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](38, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, StockZimmidarComponent_th_39_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, StockZimmidarComponent_td_40_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](41, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, StockZimmidarComponent_th_42_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, StockZimmidarComponent_td_43_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](44, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, StockZimmidarComponent_th_45_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, StockZimmidarComponent_td_46_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, StockZimmidarComponent_tr_47_Template, 1, 4, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, StockZimmidarComponent_tr_48_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "di-paginator", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("paginateEvent", function StockZimmidarComponent_Template_di_paginator_paginateEvent_49_listener() { return ctx._refresh(ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 13, "Collector Stock"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx._tbls[ctx.URLz.$] == null ? null : ctx._tbls[ctx.URLz.$].formFilter)("url", ctx.URLz.ORG)("ngClass", ctx.applyClass)("child", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx._tbls[ctx.URLz.$] == null ? null : ctx._tbls[ctx.URLz.$].formFilter)("ngClass", ctx.applyClass)("url", ctx.URLz.ORG_SYSTEM);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.URLz.$].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.URLz.$].columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.URLz.$].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tbl", ctx._tbls[ctx.URLz.$]);
    } }, directives: [_shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_2__.DdComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_3__.TblDDComponent, _shared_components_table_tbl_ac_tbl_ac_component__WEBPACK_IMPORTED_MODULE_4__.TblACComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_5__.DiPaginatorComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9jay16aW1taWRhci5jb21wb25lbnQuY3NzIn0= */", ".card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n\r\n.text_align[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n.custon__btns__class[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  padding: 0px 0px;\r\n  margin-left: 5px\r\n}\r\n@media(max-width: 768px){\r\n  .text_align[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-disabled .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline {\r\n  background-color: #ebebeb !important;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n    padding: 5px 0 7px 0 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle-content {\r\n  font-size: 13px !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n  top: 30px !important;\r\n  margin-top: -15px !important;\r\n  font-weight: 700 !important;\r\n  font-size: 15px;\r\n  color: #303030ad;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n    overflow: visible !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-select-panel{\r\n  width: 100% !important;\r\n  min-width: 100% !important;\r\n  transform: translate(15px, 40px) !important;\r\n  background: #ffffff !important;\r\n  border: 1px solid #00000033;\r\n  box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-select-value{\r\n  font-size: 16px;\r\n  font-weight: 600 !important;\r\n  overflow: hidden !important;\r\n}\r\n[_nghost-%COMP%]      .mat-input-element{\r\n  font-size: 16px !important;\r\n  font-weight: 600 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-option-text{\r\n  color: #0c0c0c;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\ncolor: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n  color: #f44836 !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #f44836 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n  color: #0c0c0c !important;\r\n  overflow: visible !important;\r\n  \r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label{\r\n  overflow: visible !important;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n  color: #0c0c0c !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n  color: #0c0c0c77;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .ng-touched.ng-valid{\r\n  color: #0c0c0c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-ripple-element{\r\n  background-color: #024d7071 !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n  color: #bfc1c4;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n  transform: translate3d(30px, 0, 0) !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n    width: 50px !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-error{\r\n    font-size: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpdmUtYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0Esd0JBQXdCO0FBQ3hCO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCO0FBQ0Y7QUFFQTtFQUNFO01BQ0ksa0JBQWtCO0VBQ3RCO0FBQ0Y7QUFDQSx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBRTVCO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUI7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLGtEQUFrRDtBQUNwRDtBQUNBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7R0FFRztBQUNILHdCQUF3QjtBQUN4Qjs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUVsQixZQUFZO0FBQ1o7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0EsWUFBWTtBQUVaLGFBQWE7QUFDYjtFQUNFLGNBQWM7QUFDaEI7QUFDQSxhQUFhO0FBSWIsZUFBZTtBQUNmO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQSxlQUFlO0FBRWYsb0JBQW9CO0FBQ3BCO0lBQ0ksZUFBZTtBQUNuQjtBQUNBLG9CQUFvQiIsImZpbGUiOiJyZWNlaXZlLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRfX3N0eWxpbmd7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzZDtcclxufVxyXG4uY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBvdmVyZmxvdy14OiBjbGlwO1xyXG59XHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmcgaDJ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggN3B4IC03cHggIzAwMDAwMDU3O1xyXG4gIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIGJ1dHRvbnMgc2F2ZSBDYW5jZWwgKi9cclxuLnRleHRfYWxpZ257XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY3VzdG9uX19idG5zX19jbGFzc3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMHB4IDBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAudGV4dF9hbGlnbntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4vKiBidXR0b25zIHNhdmUgQ2FuY2VsICovXHJcbi8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICBwYWRkaW5nOiA1cHggMCA3cHggMCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIHRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzMwMzAzMGFkO1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC1wYW5lbHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAzMztcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggLTRweCAjMDAwMDAwOWMgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtb3B0aW9uLXRleHR7XHJcbiAgY29sb3I6ICMwYzBjMGM7XHJcbn1cclxuLyogOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59ICovXHJcbi8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2ssXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XHJcbmNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAvKiBmb250LXNpemU6IDE1cHg7ICovXHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tcclxuICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZpZWxkcyBib3JkZXIgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le1xyXG4gIGNvbG9yOiAjMGMwYzBjNzc7XHJcbn1cclxuLyogZmllbGRzIGJvcmRlciAqL1xyXG5cclxuLyogdG9nZ2xlciAqL1xyXG46aG9zdCAvZGVlcC8gIC5uZy10b3VjaGVkLm5nLXZhbGlke1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjRkNzA3MSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHRvZ2dsZXIgKi9cclxuXHJcbi8qIGRpc2FibGVkICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICBjb2xvcjogI2JmYzFjNDtcclxufVxyXG4vKiBkaXNhYmxlZCAqL1xyXG5cclxuXHJcblxyXG4vKiB0b2dnbGUgYmFyICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVye1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzBweCwgMCwgMCkgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntcclxuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogdG9nZ2xlIGJhciAqL1xyXG5cclxuLyogZXJyb3IgZm9udC1zaXplICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1lcnJvcntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4vKiBlcnJvciBmb250LXNpemUgKi9cclxuIl19 */"] });


/***/ }),

/***/ 96947:
/*!***************************************************************************!*\
  !*** ./src/app/feature/box-management/stock-zone/stock-zone.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockZoneComponent": () => (/* binding */ StockZoneComponent)
/* harmony export */ });
/* harmony import */ var src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base-list-class */ 42286);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/control/dd/dd.component */ 32231);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 71144);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 15719);
/* harmony import */ var _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/table/tbl-dd/tbl-dd.component */ 18533);
/* harmony import */ var _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/table/di-paginator/di-paginator.component */ 65141);










function StockZoneComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "S No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function StockZoneComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r24 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r24 + ctx_r2._tbls[ctx_r2.URLz.$].index * ctx_r2._tbls[ctx_r2.URLz.$].size + 1, " ");
} }
function StockZoneComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StockZoneComponent_th_18_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r25._reset(ctx_r25.URLz.$); return ctx_r25._refresh(ctx_r25.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StockZoneComponent_th_18_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r27._refresh(ctx_r27.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function StockZoneComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "td", 34);
} }
function StockZoneComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-dd", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r5._tbls[ctx_r5.URLz.$] == null ? null : ctx_r5._tbls[ctx_r5.URLz.$].form)("url", ctx_r5.URLz.BG);
} }
function StockZoneComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r29.business_group == null ? null : item_r29.business_group.title, " ");
} }
function StockZoneComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-dd", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r7._tbls[ctx_r7.URLz.$] == null ? null : ctx_r7._tbls[ctx_r7.URLz.$].form)("load", false)("url", ctx_r7.URLz.LE);
} }
function StockZoneComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r30.legal_entity == null ? null : item_r30.legal_entity.title, " ");
} }
function StockZoneComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "di-tbl-dd", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx_r9._tbls[ctx_r9.URLz.$] == null ? null : ctx_r9._tbls[ctx_r9.URLz.$].form)("url", ctx_r9.URLz.OU)("load", false);
} }
function StockZoneComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r31.operating_unit == null ? null : item_r31.operating_unit.title, " ");
} }
function StockZoneComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Reference #"));
} }
function StockZoneComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r32 == null ? null : item_r32.box_stock == null ? null : item_r32.box_stock.reference_no, " ");
} }
function StockZoneComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "OU Issued"));
} }
function StockZoneComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r33 == null ? null : item_r33.issued, " ");
} }
function StockZoneComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Collector Issued"));
} }
function StockZoneComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r34 == null ? null : item_r34.box_stock_issued == null ? null : item_r34.box_stock_issued.collectorIssued, " ");
} }
function StockZoneComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Sell Qty"));
} }
function StockZoneComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r35 == null ? null : item_r35.sellBoxQty, " ");
} }
function StockZoneComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Remaining"));
} }
function StockZoneComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r36.remaining, " ");
} }
const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function StockZoneComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 39);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](1, _c0, ctx_r21._ss.lng === "en", ctx_r21._ss.lng === "ur"));
} }
function StockZoneComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 40);
} }
class StockZoneComponent extends src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__.BaseListClass {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.applyClass = { 'col-lg-6': true, 'col-md-6': true };
    }
    ngOnInit() {
        // this._pathLocation = '/donation/cell_master_add';
        this._component = 'OU Stock';
        // this.initForm();
        this.initTables();
    }
    // initForm(){
    //   this._fs._form = this._fb.group({
    //     organisation_id: ['', this._vs._val('Oranaization')],
    //     system_id: ['', this._vs._val('System')]
    //   });
    // }
    initTables() {
        this._reset(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].columns = [
            'id',
            'actions',
            'bg',
            'le',
            'ou',
            'reference_no',
            'issued',
            'collectorIssued',
            'sellBoxQty',
            'remaining' // ???
        ];
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_OU;
        this._formCreator(this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$]);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].formFilter = this._fb.group({
            organisation_id: ['', this._vs._vals('Organisation')],
            system_id: ['', this._vs._vals('System')]
        });
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].formFilter.get('system_id').valueChanges.subscribe(val => {
            if (this.emptyCheck(val)) {
                this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].formFilter.get('system_id').patchValue(val, { emitEvent: false });
                this._refresh(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
            }
        });
        // Subscribe System to View the List Later
        // this._refresh(URLz.$, '')
    }
}
StockZoneComponent.ɵfac = function StockZoneComponent_Factory(t) { return new (t || StockZoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector)); };
StockZoneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: StockZoneComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 47, vars: 15, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], [1, "card-body", "pt-0", "mt-4"], ["field", "organisation_id", "lbl", "Organization", 3, "group", "url", "ngClass", "child"], ["field", "system_id", "lbl", "System", 3, "group", "ngClass", "url"], ["sys", ""], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px;", "class", "", "mat-header-cell", "", "translate", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "pl-3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "bg"], ["class", "pr-3", "mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 4, "matHeaderCellDef"], ["matColumnDef", "le"], ["matColumnDef", "ou"], ["matColumnDef", "reference_no"], ["matColumnDef", "issued"], ["matColumnDef", "collectorIssued"], ["matColumnDef", "sellBoxQty"], ["matColumnDef", "remaining"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "tbl", "paginateEvent"], ["mat-header-cell", "", "translate", "", 1, "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", 1, "pl-3"], [1, "ti-reload", "text-info", "pointer", "px-2", 3, "click"], [1, "ti-search", "text-info", "pointer", "px-2", 3, "click"], ["mat-cell", "", 1, "px-3"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 1, "pr-3"], ["field", "bg", "lbl", "Business Group", 3, "group", "url"], ["field", "le", "lbl", "Legal Entity", "parentFCName", "bg", 3, "group", "load", "url"], ["field", "ou", "lbl", "Operating Unit", "parentFCName", "le", 3, "group", "url", "load"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""]], template: function StockZoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "di-dd", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "di-dd", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function StockZoneComponent_Template_table_matSortChange_13_listener($event) { return ctx._sort($event, ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, StockZoneComponent_th_15_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, StockZoneComponent_td_16_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, StockZoneComponent_th_18_Template, 3, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, StockZoneComponent_td_19_Template, 1, 0, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, StockZoneComponent_th_21_Template, 2, 2, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, StockZoneComponent_td_22_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, StockZoneComponent_th_24_Template, 2, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, StockZoneComponent_td_25_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](26, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, StockZoneComponent_th_27_Template, 2, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, StockZoneComponent_td_28_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](29, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, StockZoneComponent_th_30_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, StockZoneComponent_td_31_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](32, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, StockZoneComponent_th_33_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, StockZoneComponent_td_34_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](35, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, StockZoneComponent_th_36_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, StockZoneComponent_td_37_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](38, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, StockZoneComponent_th_39_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, StockZoneComponent_td_40_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](41, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, StockZoneComponent_th_42_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, StockZoneComponent_td_43_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, StockZoneComponent_tr_44_Template, 1, 4, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, StockZoneComponent_tr_45_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "di-paginator", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("paginateEvent", function StockZoneComponent_Template_di_paginator_paginateEvent_46_listener() { return ctx._refresh(ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 13, "OU Stock"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx._tbls[ctx.URLz.$] == null ? null : ctx._tbls[ctx.URLz.$].formFilter)("url", ctx.URLz.ORG)("ngClass", ctx.applyClass)("child", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", ctx._tbls[ctx.URLz.$] == null ? null : ctx._tbls[ctx.URLz.$].formFilter)("ngClass", ctx.applyClass)("url", ctx.URLz.ORG_SYSTEM);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.URLz.$].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.URLz.$].columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.URLz.$].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tbl", ctx._tbls[ctx.URLz.$]);
    } }, directives: [_shared_components_control_dd_dd_component__WEBPACK_IMPORTED_MODULE_2__.DdComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_3__.TblDDComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_4__.DiPaginatorComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n  }\r\n  .text-red[_ngcontent-%COMP%]{\r\n    color: #c53b55;\r\n  }\r\n  \r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n  \r\n  \r\n  .custon__add__btns__class[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  padding: 3px 5px;\r\n  background: transparent;\r\n  border: 0px;\r\n  box-shadow: 0px 0px 0px transparent !important;\r\n  }\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:hover{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n  }\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:active{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n  }\r\n  .custon__add__btns__class[_ngcontent-%COMP%]:focus{\r\n  background-color: transparent !important;\r\n    border-color: transparent !important;\r\n  }\r\n  [_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper{\r\n  padding: 0px 15px;\r\n  color: white !important;\r\n  background: #00c292 !important;\r\n  display: block;\r\n  font-size: 15px;\r\n  border-radius: 3px;\r\n  transition: 0.5s;\r\n  }\r\n  [_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper:hover{\r\n  box-shadow: 0px 0px 10px -4px #000000a6;\r\n  }\r\n  [_nghost-%COMP%]     .custon__add__btns__class .mat-ripple.mat-button-ripple{\r\n  display: none !important;\r\n  opacity: 0 !important;\r\n  }\r\n  .cdk-mouse-focused.cdk-focused[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{\r\n  opacity: 0 !important;\r\n  }\r\n  \r\n  \r\n  .slection__styled   [_nghost-%COMP%]      .search.ng-touched{\r\n    color: #1a1a1a !important;\r\n  \r\n  }\r\n  .mat-header-cell[_ngcontent-%COMP%]{\r\n    background: #024e70 !important;\r\n    color: white !important;\r\n  }\r\n  .search[_ngcontent-%COMP%]{\r\n    color: #ffffff !important;\r\n    border-bottom: 1px solid whitesmoke;\r\n  }\r\n  [_nghost-%COMP%]      .mat-sort-header-arrow{\r\n    color: white;\r\n  }\r\n  [_nghost-%COMP%]      .mat-sort-header-content{\r\n    color: white !important;\r\n  }\r\n  [_nghost-%COMP%]      .search::-moz-placeholder{\r\n    color: #ffffff !important;\r\n  }\r\n  [_nghost-%COMP%]      .search:-ms-input-placeholder{\r\n    color: #ffffff !important;\r\n  }\r\n  [_nghost-%COMP%]      .search::placeholder{\r\n    color: #ffffff !important;\r\n  }\r\n  [_nghost-%COMP%]      .search.ng-touched{\r\n    color: #ffffff !important;\r\n  }\r\n  [_nghost-%COMP%]      .search .ng-star-inserted{\r\n    color: #000 !important;\r\n  }\r\n  \r\n  \r\n  .mat_table[_ngcontent-%COMP%]{\r\n    max-height: 490px;\r\n    height: auto;\r\n  }\r\n  tr.mat-header-row[_ngcontent-%COMP%]{\r\n    height: 40px !important;\r\n  }\r\n  [_nghost-%COMP%]      tr.mat-row, tr.mat-footer-row[_ngcontent-%COMP%]{\r\n    height: 40px !important;\r\n  }\r\n  .mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{\r\n    white-space: nowrap !important;\r\n  }\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(odd){\r\n    background-color: #ffffff00 !important;\r\n    transition: 0.1s;\r\n  }\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(even){\r\n    background-color: #b3eeff2c !important;\r\n    border-top: 2px solid #0000000d !important;\r\n    border-bottom: 2px solid #0000000d !important;\r\n    transition: 0.1s;\r\n  }\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(even):hover{\r\n    box-shadow:0px 0px 8px 0px #0000005e;\r\n  }\r\n  .mat-row[_ngcontent-%COMP%]:nth-child(odd):hover{\r\n    box-shadow:0px 0px 8px 0px #0000005e;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .switch.switch-small.checked{\r\n    background-color: #03a9f3 !important;\r\n  }\r\n  \r\n  \r\n  .custom__select__class[_ngcontent-%COMP%]{\r\n    border-radius: 3px;\r\n    padding: 4px;\r\n    border: 1px solid #0000004b;\r\n    background: white;\r\n  }\r\n  .custom__select__class[_ngcontent-%COMP%]   .cus_opt[_ngcontent-%COMP%]{\r\n    border-radius: 4px;\r\n    background: #ffffff;\r\n    box-shadow: 0px 0px 10px black;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-paginator-range-label{\r\n    margin: 0px !important;\r\n  }\r\n  \r\n  \r\n  .upload-large[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n  .img-fluid[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    text-align: auto;\r\n  }\r\n  .card__styling[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 10px #0000003d;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    overflow-x: clip;\r\n  }\r\n  .custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    background: #039be5;\r\n    box-shadow: 0px 10px 7px -7px #00000057;\r\n    margin: 0px 0px 10px 0px;\r\n    padding: 10px 10px;\r\n    color: white;\r\n  }\r\n  \r\n  .text_align[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  }\r\n  .custon__btns__class[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  \r\n  }\r\n  .wajiba-nafila[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 50px 10px;\r\n  }\r\n  @media(max-width: 768px){\r\n    .text_align[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n    [_nghost-%COMP%]     .custom-date  .md-drppicker.double{\r\n      width: 290px !important;\r\n      left: 0!important;\r\n      top: 100% !important; \r\n    }\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n      padding: 5px 0 7px 0 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n    top: 30px !important;\r\n    margin-top: -15px !important;\r\n    font-weight: 700 !important;\r\n    font-size: 15px;\r\n    color: #303030ad;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n      overflow: visible !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-select-panel{\r\n    width: 100% !important;\r\n    min-width: 100% !important;\r\n    transform: translate(15px, 40px) !important;\r\n    background: #ffffff !important;\r\n    border: 1px solid #00000033;\r\n    box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-select-value{\r\n    font-size: 16px;\r\n    font-weight: 600 !important;\r\n    overflow: hidden !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-input-element{\r\n    font-size: 16px !important;\r\n    font-weight: 600 !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-option-text{\r\n    color: #0c0c0c;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\n  color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n    color: #f44836 !important;\r\n  }\r\n  [_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n    color: #f44836 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n    color: #0c0c0c !important;\r\n    overflow: visible !important;\r\n    \r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field-label{\r\n    overflow: visible !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n    color: #0c0c0c !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n    color: #0c0c0c77;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .ng-touched.ng-valid{\r\n    color: #0c0c0c !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n    background-color: #0eb9ec !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n    background-color: #024d7071 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n    color: #bfc1c4;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n    transform: translate3d(30px, 0, 0) !important;\r\n  }\r\n  [_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n      width: 50px !important;\r\n  }\r\n  \r\n  \r\n  [_nghost-%COMP%]      .mat-error{\r\n      font-size: 10px;\r\n  }\r\n  \r\n  [_nghost-%COMP%]     .md-drppicker.double {\r\n    width: 500px !important;\r\n  }\r\n  [_nghost-%COMP%]     .md-drppicker td.active, [_nghost-%COMP%]     .md-drppicker td.active:hover {\r\n    background-color: #039be5 !important;\r\n  }\r\n  [_nghost-%COMP%]     .md-drppicker .btn {\r\n    background-color: #03a9f3 !important;\r\n    text-transform: capitalize !important;\r\n    font-size: 14px !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2NrLXpvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBLGlCQUFpQjtFQUNqQjtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBQ0EsaUJBQWlCO0VBRWpCLHdCQUF3QjtFQUN4QjtFQUNBLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCw4Q0FBOEM7RUFDOUM7RUFDQTtFQUNBLHdDQUF3QztJQUN0QyxvQ0FBb0M7RUFDdEM7RUFDQTtFQUNBLHdDQUF3QztJQUN0QyxvQ0FBb0M7RUFDdEM7RUFDQTtFQUNBLHdDQUF3QztJQUN0QyxvQ0FBb0M7RUFDdEM7RUFDQTtFQUNBLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQjtFQUNBO0VBQ0EsdUNBQXVDO0VBQ3ZDO0VBQ0E7RUFDQSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCO0VBQ0E7RUFDQSxxQkFBcUI7RUFDckI7RUFDQSx3QkFBd0I7RUFFeEIseUJBQXlCO0VBQ3pCO0lBQ0UseUJBQXlCOztFQUUzQjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUZBO0lBQ0UseUJBQXlCO0VBQzNCO0VBRkE7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0EseUJBQXlCO0VBRXpCLDBCQUEwQjtFQUMxQjtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLHNDQUFzQztJQUN0QyxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHNDQUFzQztJQUN0QywwQ0FBMEM7SUFDMUMsNkNBQTZDO0lBQzdDLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQSwwQkFBMEI7RUFFMUIsb0NBQW9DO0VBQ3BDO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0Esb0NBQW9DO0VBRXBDLHVCQUF1QjtFQUN2QjtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7RUFDQSx1QkFBdUI7RUFFdkIsb0JBQW9CO0VBQ3BCO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0Esb0JBQW9CO0VBSXBCLGFBQWE7RUFHYjtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBQ0Esd0JBQXdCO0VBQ3hCO0VBQ0EsaUJBQWlCO0VBQ2pCO0VBQ0E7RUFDQSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCO0VBRUE7RUFDQSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCO0VBR0E7SUFDRTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO01BQ0UsdUJBQXVCO01BQ3ZCLGlCQUFpQjtNQUNqQixvQkFBb0I7SUFDdEI7RUFDRjtFQUNBLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUI7TUFDSSwrQkFBK0I7RUFDbkM7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSw0QkFBNEI7RUFDaEM7RUFDQSx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixrREFBa0Q7RUFDcEQ7RUFDQTtJQUNFLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7O0tBRUc7RUFDSCx3QkFBd0I7RUFDeEI7O0VBRUEseUJBQXlCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7RUFDQSx3QkFBd0I7RUFDeEI7SUFDRSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0Usc0NBQXNDO0VBQ3hDO0VBRUEsYUFBYTtFQUNiO0lBQ0UsY0FBYztFQUNoQjtFQUNBLGFBQWE7RUFFYixlQUFlO0VBQ2Y7SUFDRSw2Q0FBNkM7RUFDL0M7RUFDQTtNQUNJLHNCQUFzQjtFQUMxQjtFQUNBLGVBQWU7RUFFZixvQkFBb0I7RUFDcEI7TUFDSSxlQUFlO0VBQ25CO0VBQ0Esb0JBQW9CO0VBR3BCO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBRUE7O0lBRUUsb0NBQW9DO0VBQ3RDO0VBRUE7SUFDRSxvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLDBCQUEwQjtFQUM1QiIsImZpbGUiOiJzdG9jay16b25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9fc3R5bGluZ3tcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwM2Q7XHJcbiAgfVxyXG4gIC50ZXh0LXJlZHtcclxuICAgIGNvbG9yOiAjYzUzYjU1O1xyXG4gIH1cclxuICAvKiBIRUFERVIgU1RZTEUgKi9cclxuICAuY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogY2xpcDtcclxuICB9XHJcbiAgLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC8qIEhFQURFUiBTVFlMRSAqL1xyXG4gIFxyXG4gIC8qIEhFQURFUiBCVVRUT04gU1RZTEUgKi9cclxuICAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmZvY3Vze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogIzAwYzI5MiAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3MgLm1hdC1idXR0b24td3JhcHBlcjpob3ZlcntcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggLTRweCAjMDAwMDAwYTY7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzIC5tYXQtcmlwcGxlLm1hdC1idXR0b24tcmlwcGxle1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jZGstbW91c2UtZm9jdXNlZC5jZGstZm9jdXNlZCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e1xyXG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogSEVBREVSIEJVVFRPTiBTVFlMRSAqL1xyXG4gIFxyXG4gIC8qIFRBQkxFIGhlYWRlciBTVFlMSU5HICovXHJcbiAgLnNsZWN0aW9uX19zdHlsZWQgOmhvc3QgL2RlZXAvICAuc2VhcmNoLm5nLXRvdWNoZWR7XHJcbiAgICBjb2xvcjogIzFhMWExYSAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIH1cclxuICAubWF0LWhlYWRlci1jZWxse1xyXG4gICAgYmFja2dyb3VuZDogIzAyNGU3MCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zZWFyY2h7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zb3J0LWhlYWRlci1hcnJvd3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNvcnQtaGVhZGVyLWNvbnRlbnR7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAuc2VhcmNoOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLnNlYXJjaC5uZy10b3VjaGVke1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAuc2VhcmNoIC5uZy1zdGFyLWluc2VydGVke1xyXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogVEFCTEUgaGVhZGVyIFNUWUxJTkcgKi9cclxuICBcclxuICAvKiBsaXN0IHN0eWxpbmcgaW4gdGFibGUgKi9cclxuICAubWF0X3RhYmxle1xyXG4gICAgbWF4LWhlaWdodDogNDkwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIHRyLm1hdC1oZWFkZXItcm93e1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgdHIubWF0LXJvdywgdHIubWF0LWZvb3Rlci1yb3d7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1mb290ZXItY2VsbCwgLm1hdC1jZWxse1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcztcclxuICB9XHJcbiAgLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzZWVmZjJjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzAwMDAwMDBkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDAwMDBkICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gIH1cclxuICAubWF0LXJvdzpudGgtY2hpbGQoZXZlbik6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OjBweCAwcHggOHB4IDBweCAjMDAwMDAwNWU7XHJcbiAgfVxyXG4gIC5tYXQtcm93Om50aC1jaGlsZChvZGQpOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzowcHggMHB4IDhweCAwcHggIzAwMDAwMDVlO1xyXG4gIH1cclxuICAvKiBsaXN0IHN0eWxpbmcgaW4gdGFibGUgKi9cclxuICBcclxuICAvKiBjaGFjayBvbiBvciBvZmYgYnV0dG9uICBzdHlsaW5nICovXHJcbiAgOmhvc3QgL2RlZXAvICAuc3dpdGNoLnN3aXRjaC1zbWFsbC5jaGVja2Vke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmMyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBjaGFjayBvbiBvciBvZmYgYnV0dG9uICBzdHlsaW5nICovXHJcbiAgXHJcbiAgLyogc2VsZWN0IGJveCBzdHlsaW5nICovXHJcbiAgLmN1c3RvbV9fc2VsZWN0X19jbGFzc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA0YjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICAuY3VzdG9tX19zZWxlY3RfX2NsYXNzIC5jdXNfb3B0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBibGFjaztcclxuICB9XHJcbiAgLyogc2VsZWN0IGJveCBzdHlsaW5nICovXHJcbiAgXHJcbiAgLyogcGFnaW5hdGlvbiBhcmVhICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXBhZ2luYXRvci1yYW5nZS1sYWJlbHtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIHBhZ2luYXRpb24gYXJlYSAqL1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIGRyb3Bkb3duICovXHJcbiAgXHJcbiAgXHJcbiAgLnVwbG9hZC1sYXJnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5pbWctZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogYXV0bztcclxuICB9XHJcbiAgLmNhcmRfX3N0eWxpbmd7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG4gIH1cclxuICAuY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogY2xpcDtcclxuICB9XHJcbiAgLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC8qIGJ1dHRvbnMgc2F2ZSBDYW5jZWwgKi9cclxuICAudGV4dF9hbGlnbntcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLmN1c3Rvbl9fYnRuc19fY2xhc3N7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIC8qIHBhZGRpbmc6IDVweCAwcHg7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC53YWppYmEtbmFmaWxhIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNTBweCAxMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAudGV4dF9hbGlnbntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICA6aG9zdCAvZGVlcC8gLmN1c3RvbS1kYXRlICAubWQtZHJwcGlja2VyLmRvdWJsZXtcclxuICAgICAgd2lkdGg6IDI5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxlZnQ6IDAhaW1wb3J0YW50O1xyXG4gICAgICB0b3A6IDEwMCUgIWltcG9ydGFudDsgXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qIGJ1dHRvbnMgc2F2ZSBDYW5jZWwgKi9cclxuICAvKiBmaWVsZHMgbGluZSBoZWlnaHQgd29yayAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwIDdweCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gICAgdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMzMDMwMzBhZDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcntcclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIC8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC1wYW5lbHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMzM7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggLTRweCAjMDAwMDAwOWMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC12YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWlucHV0LWVsZW1lbnR7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LW9wdGlvbi10ZXh0e1xyXG4gICAgY29sb3I6ICMwYzBjMGM7XHJcbiAgfVxyXG4gIC8qIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuICAvKiBmaWVsZHMgYm9yZGVyIGhvdmVyICovXHJcbiAgOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2ssXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcclxuICBjb2xvcjogIzBlYjllYyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gICAgY29sb3I6ICNmNDQ4MzYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcclxuICA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjZjQ0ODM2ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tcclxuICAgIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGZpZWxkcyBib3JkZXIgKi9cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7XHJcbiAgICBjb2xvcjogIzBjMGMwYzc3O1xyXG4gIH1cclxuICAvKiBmaWVsZHMgYm9yZGVyICovXHJcbiAgOmhvc3QgL2RlZXAvICAubmctdG91Y2hlZC5uZy12YWxpZHtcclxuICAgIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGRpc2FibGVkICovXHJcbiAgOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le1xyXG4gICAgY29sb3I6ICNiZmMxYzQ7XHJcbiAgfVxyXG4gIC8qIGRpc2FibGVkICovXHJcbiAgXHJcbiAgLyogdG9nZ2xlIGJhciAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMHB4LCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntcclxuICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogdG9nZ2xlIGJhciAqL1xyXG4gIFxyXG4gIC8qIGVycm9yIGZvbnQtc2l6ZSAqL1xyXG4gIDpob3N0IC9kZWVwLyAgLm1hdC1lcnJvcntcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAvKiBlcnJvciBmb250LXNpemUgKi9cclxuICBcclxuICBcclxuICA6aG9zdCAvZGVlcC8gLm1kLWRycHBpY2tlci5kb3VibGUge1xyXG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyIHRkLmFjdGl2ZSxcclxuICA6aG9zdCAvZGVlcC8gLm1kLWRycHBpY2tlciB0ZC5hY3RpdmU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzOWJlNSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCAvZGVlcC8gLm1kLWRycHBpY2tlciAuYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjMgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICB9Il19 */", ".card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n\r\n.text_align[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n.custon__btns__class[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  padding: 0px 0px;\r\n  margin-left: 5px\r\n}\r\n@media(max-width: 768px){\r\n  .text_align[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-disabled .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline {\r\n  background-color: #ebebeb !important;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n    padding: 5px 0 7px 0 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle-content {\r\n  font-size: 13px !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n  top: 30px !important;\r\n  margin-top: -15px !important;\r\n  font-weight: 700 !important;\r\n  font-size: 15px;\r\n  color: #303030ad;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n    overflow: visible !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-select-panel{\r\n  width: 100% !important;\r\n  min-width: 100% !important;\r\n  transform: translate(15px, 40px) !important;\r\n  background: #ffffff !important;\r\n  border: 1px solid #00000033;\r\n  box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-select-value{\r\n  font-size: 16px;\r\n  font-weight: 600 !important;\r\n  overflow: hidden !important;\r\n}\r\n[_nghost-%COMP%]      .mat-input-element{\r\n  font-size: 16px !important;\r\n  font-weight: 600 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-option-text{\r\n  color: #0c0c0c;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\ncolor: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n  color: #f44836 !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #f44836 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n  color: #0c0c0c !important;\r\n  overflow: visible !important;\r\n  \r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label{\r\n  overflow: visible !important;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n  color: #0c0c0c !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n  color: #0c0c0c77;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .ng-touched.ng-valid{\r\n  color: #0c0c0c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-ripple-element{\r\n  background-color: #024d7071 !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n  color: #bfc1c4;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n  transform: translate3d(30px, 0, 0) !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n    width: 50px !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-error{\r\n    font-size: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpdmUtYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0Esd0JBQXdCO0FBQ3hCO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCO0FBQ0Y7QUFFQTtFQUNFO01BQ0ksa0JBQWtCO0VBQ3RCO0FBQ0Y7QUFDQSx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBRTVCO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUI7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLGtEQUFrRDtBQUNwRDtBQUNBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7R0FFRztBQUNILHdCQUF3QjtBQUN4Qjs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUVsQixZQUFZO0FBQ1o7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0EsWUFBWTtBQUVaLGFBQWE7QUFDYjtFQUNFLGNBQWM7QUFDaEI7QUFDQSxhQUFhO0FBSWIsZUFBZTtBQUNmO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQSxlQUFlO0FBRWYsb0JBQW9CO0FBQ3BCO0lBQ0ksZUFBZTtBQUNuQjtBQUNBLG9CQUFvQiIsImZpbGUiOiJyZWNlaXZlLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRfX3N0eWxpbmd7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzZDtcclxufVxyXG4uY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBvdmVyZmxvdy14OiBjbGlwO1xyXG59XHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmcgaDJ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggN3B4IC03cHggIzAwMDAwMDU3O1xyXG4gIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIGJ1dHRvbnMgc2F2ZSBDYW5jZWwgKi9cclxuLnRleHRfYWxpZ257XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY3VzdG9uX19idG5zX19jbGFzc3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMHB4IDBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAudGV4dF9hbGlnbntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4vKiBidXR0b25zIHNhdmUgQ2FuY2VsICovXHJcbi8qIGZpZWxkcyBsaW5lIGhlaWdodCB3b3JrICovXHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICBwYWRkaW5nOiA1cHggMCA3cHggMCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIHRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzMwMzAzMGFkO1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC1wYW5lbHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAzMztcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggLTRweCAjMDAwMDAwOWMgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtb3B0aW9uLXRleHR7XHJcbiAgY29sb3I6ICMwYzBjMGM7XHJcbn1cclxuLyogOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59ICovXHJcbi8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2ssXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XHJcbmNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAvKiBmb250LXNpemU6IDE1cHg7ICovXHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tcclxuICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZpZWxkcyBib3JkZXIgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le1xyXG4gIGNvbG9yOiAjMGMwYzBjNzc7XHJcbn1cclxuLyogZmllbGRzIGJvcmRlciAqL1xyXG5cclxuLyogdG9nZ2xlciAqL1xyXG46aG9zdCAvZGVlcC8gIC5uZy10b3VjaGVkLm5nLXZhbGlke1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjRkNzA3MSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHRvZ2dsZXIgKi9cclxuXHJcbi8qIGRpc2FibGVkICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICBjb2xvcjogI2JmYzFjNDtcclxufVxyXG4vKiBkaXNhYmxlZCAqL1xyXG5cclxuXHJcblxyXG4vKiB0b2dnbGUgYmFyICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVye1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzBweCwgMCwgMCkgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntcclxuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogdG9nZ2xlIGJhciAqL1xyXG5cclxuLyogZXJyb3IgZm9udC1zaXplICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1lcnJvcntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4vKiBlcnJvciBmb250LXNpemUgKi9cclxuIl19 */"] });


/***/ }),

/***/ 71392:
/*!*****************************************************************!*\
  !*** ./src/app/feature/box-management/stock/stock.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockComponent": () => (/* binding */ StockComponent),
/* harmony export */   "TBL": () => (/* binding */ TBL)
/* harmony export */ });
/* harmony import */ var src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base-list-class */ 42286);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_app_shared_components_dialogs_box_mgmt_stock_box_mgmt_stock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/dialogs/box-mgmt-stock/box-mgmt-stock.component */ 59773);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 71144);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 15719);
/* harmony import */ var _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/table/tbl-dd/tbl-dd.component */ 18533);
/* harmony import */ var _shared_components_table_tbl_date_tbl_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/table/tbl-date/tbl-date.component */ 98308);
/* harmony import */ var _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/table/tbl-txt/tbl-txt.component */ 33086);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/table/di-paginator/di-paginator.component */ 65141);













function StockComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "S No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StockComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r80 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", i_r80 + ctx_r1._tbls[ctx_r1.TBLz.STOCK].index * ctx_r1._tbls[ctx_r1.TBLz.STOCK].size + 1, " ");
} }
function StockComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StockComponent_th_18_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); ctx_r81._reset(ctx_r81.TBLz.STOCK); return ctx_r81._refresh(ctx_r81.TBLz.STOCK); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StockComponent_th_18_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r82); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r83._refresh(ctx_r83.TBLz.STOCK); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StockComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StockComponent_td_19_Template_i_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r86); const item_r84 = restoredCtx.$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](54); ctx_r85.setOrgSys(item_r84); ctx_r85.tblClickHandler(item_r84.id, ctx_r85.TBLz.STOCK, item_r84); return ctx_r85.scroll(_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StockComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "di-tbl-dd", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("url", ctx_r4.URLz.ORG)("child", ctx_r4.sys)("group", ctx_r4._tbls[ctx_r4.TBLz.STOCK] == null ? null : ctx_r4._tbls[ctx_r4.TBLz.STOCK].form);
} }
function StockComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r87 == null ? null : item_r87.organisation == null ? null : item_r87.organisation.title, " ");
} }
function StockComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "di-tbl-dd", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("load", false)("url", ctx_r6.URLz.ORG_SYSTEM)("group", ctx_r6._tbls[ctx_r6.TBLz.STOCK] == null ? null : ctx_r6._tbls[ctx_r6.TBLz.STOCK].form);
} }
function StockComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r88 == null ? null : item_r88.system == null ? null : item_r88.system.title, " ");
} }
function StockComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "di-tbl-date", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("group", ctx_r8._tbls[ctx_r8.TBLz.STOCK] == null ? null : ctx_r8._tbls[ctx_r8.TBLz.STOCK].form);
} }
function StockComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r89.receive_date, " ");
} }
function StockComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "di-tbl-dd", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("url", ctx_r10.URLz.BOX_VENDORS)("group", ctx_r10._tbls[ctx_r10.TBLz.STOCK] == null ? null : ctx_r10._tbls[ctx_r10.TBLz.STOCK].form);
} }
function StockComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r90 == null ? null : item_r90.vendor == null ? null : item_r90.vendor.title, " ");
} }
function StockComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "di-tbl-txt", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("group", ctx_r12._tbls[ctx_r12.TBLz.STOCK] == null ? null : ctx_r12._tbls[ctx_r12.TBLz.STOCK].form);
} }
function StockComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r91.ref_no, " ");
} }
function StockComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "di-tbl-txt", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("group", ctx_r14._tbls[ctx_r14.TBLz.STOCK] == null ? null : ctx_r14._tbls[ctx_r14.TBLz.STOCK].form);
} }
function StockComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r92.box_price, " ");
} }
function StockComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "di-tbl-txt", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("group", ctx_r16._tbls[ctx_r16.TBLz.STOCK] == null ? null : ctx_r16._tbls[ctx_r16.TBLz.STOCK].form);
} }
function StockComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r93.box_qty, " ");
} }
function StockComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "di-tbl-txt", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("group", ctx_r18._tbls[ctx_r18.TBLz.STOCK] == null ? null : ctx_r18._tbls[ctx_r18.TBLz.STOCK].form);
} }
function StockComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r94 == null ? null : item_r94.box_stock_issued) == null ? 0 : item_r94 == null ? null : item_r94.box_stock_issued == null ? null : item_r94.box_stock_issued.issued, " ");
} }
function StockComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "di-tbl-txt", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("group", ctx_r20._tbls[ctx_r20.TBLz.STOCK] == null ? null : ctx_r20._tbls[ctx_r20.TBLz.STOCK].form);
} }
function StockComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r95 == null ? null : item_r95.box_stock_issued) == null ? item_r95.box_qty : item_r95.box_qty - (item_r95 == null ? null : item_r95.box_stock_issued == null ? null : item_r95.box_stock_issued.issued), " ");
} }
function StockComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Box Image"));
} }
function StockComponent_td_49_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StockComponent_td_49_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r99); const item_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r98.openImage(ctx_r98.IMG_URL.BOX + item_r96.box_img, "Box Image"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r97.IMG_URL.BOX + item_r96.box_img, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
} }
function StockComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StockComponent_td_49_img_1_Template, 1, 1, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r96.box_img);
} }
const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function StockComponent_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 60);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r24._ss.lng === "en", ctx_r24._ss.lng === "ur"));
} }
function StockComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 61);
} }
function StockComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "S No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StockComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r104 = ctx.index;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", i_r104 + ctx_r28._tbls[ctx_r28.TBLz.GSBZONESTOCK].index * ctx_r28._tbls[ctx_r28.TBLz.GSBZONESTOCK].size + 1, " ");
} }
function StockComponent_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Actions"), " ");
} }
function StockComponent_td_64_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StockComponent_td_64_Template_i_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r107); const item_r105 = restoredCtx.$implicit; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](104); ctx_r106.tblClickHandler(item_r105.id, ctx_r106.TBLz.GSBZONESTOCK, item_r105); return ctx_r106.scroll(_r54); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StockComponent_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Date"));
} }
function StockComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r108 == null ? null : item_r108.date, " ");
} }
function StockComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Business Group"), " ");
} }
function StockComponent_td_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r109 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r109 == null ? null : item_r109.business_group == null ? null : item_r109.business_group.title, " ");
} }
function StockComponent_th_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Legal Entity"), " ");
} }
function StockComponent_td_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r110 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r110 == null ? null : item_r110.legal_entity == null ? null : item_r110.legal_entity.title, " ");
} }
function StockComponent_th_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Operating Unit"), " ");
} }
function StockComponent_td_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r111 == null ? null : item_r111.operating_unit == null ? null : item_r111.operating_unit.title, " ");
} }
function StockComponent_th_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Issued"));
} }
function StockComponent_td_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r112.issued, " ");
} }
function StockComponent_tr_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 60);
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r41._ss.lng === "en", ctx_r41._ss.lng === "ur"));
} }
function StockComponent_tr_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 61);
} }
function StockComponent_th_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "S No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StockComponent_td_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r115 = ctx.index;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", i_r115 + ctx_r45._tbls[ctx_r45.TBLz.AVAILAIBLEZONESTOCK].index * ctx_r45._tbls[ctx_r45.TBLz.AVAILAIBLEZONESTOCK].size + 1, " ");
} }
function StockComponent_th_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Actions"));
} }
function StockComponent_td_94_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StockComponent_td_94_Template_i_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r118); const item_r116 = restoredCtx.$implicit; const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r117.tblClickHandler(item_r116.id, ctx_r117.TBLz.AVAILAIBLEZONESTOCK, item_r116); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StockComponent_th_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Box Quantity"), " ");
} }
function StockComponent_td_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r119 == null ? null : item_r119.box_qty, " ");
} }
function StockComponent_th_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Remaining"));
} }
function StockComponent_td_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r120 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r120 == null ? null : item_r120.remaining, " ");
} }
function StockComponent_tr_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 60);
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r52._ss.lng === "en", ctx_r52._ss.lng === "ur"));
} }
function StockComponent_tr_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 61);
} }
function StockComponent_th_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "S No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StockComponent_td_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r123 = ctx.index;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", i_r123 + ctx_r56._tbls[ctx_r56.TBLz.ISSUEDZIMMIDARSTOCK].index * ctx_r56._tbls[ctx_r56.TBLz.ISSUEDZIMMIDARSTOCK].size + 1, " ");
} }
function StockComponent_th_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Actions"));
} }
function StockComponent_td_114_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StockComponent_td_114_Template_i_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r126); const item_r124 = restoredCtx.$implicit; const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); item_r124.remaining = (item_r124 == null ? null : item_r124.box_stock_issued) == null ? item_r124.box_qty : item_r124.box_qty - (item_r124 == null ? null : item_r124.box_stock_issued == null ? null : item_r124.box_stock_issued.issued); return ctx_r125.tblClickHandler(item_r124.id, ctx_r125.TBLz.AVAILAIBLEZONESTOCK, item_r124); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StockComponent_th_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Date"));
} }
function StockComponent_td_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r127 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r127 == null ? null : item_r127.date, " ");
} }
function StockComponent_th_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Sub Unit"));
} }
function StockComponent_td_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r128 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r128 == null ? null : item_r128.sub_unit == null ? null : item_r128.sub_unit.title);
} }
function StockComponent_th_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Collector"));
} }
function StockComponent_td_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r129 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r129 == null ? null : item_r129.collector == null ? null : item_r129.collector.title);
} }
function StockComponent_th_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Issued"));
} }
function StockComponent_td_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r130 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r130 == null ? null : item_r130.issued, " ");
} }
function StockComponent_tr_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 60);
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r67._ss.lng === "en", ctx_r67._ss.lng === "ur"));
} }
function StockComponent_tr_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 61);
} }
function StockComponent_th_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "S No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StockComponent_td_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r133 = ctx.index;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", i_r133 + ctx_r70._tbls[ctx_r70.TBLz.AVAILAIBLEZIMMIDARSTOCK].index * ctx_r70._tbls[ctx_r70.TBLz.AVAILAIBLEZIMMIDARSTOCK].size + 1, " ");
} }
function StockComponent_th_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Actions"));
} }
function StockComponent_td_140_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StockComponent_td_140_Template_i_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r136); const item_r134 = restoredCtx.$implicit; const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r135.tblClickHandler(item_r134.id, ctx_r135.TBLz.AVAILAIBLEZIMMIDARSTOCK, item_r134); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StockComponent_th_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Box Quantity"), " ");
} }
function StockComponent_td_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r137 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r137 == null ? null : item_r137.box_qty, " ");
} }
function StockComponent_th_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Remaining"));
} }
function StockComponent_td_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r138 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r138 == null ? null : item_r138.remaining, " ");
} }
function StockComponent_tr_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 60);
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r77._ss.lng === "en", ctx_r77._ss.lng === "ur"));
} }
function StockComponent_tr_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 61);
} }
class StockComponent extends src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__.BaseListClass {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.TBLz = TBL;
        this.tablesArray = [
            TBL.STOCK,
            TBL.GSBZONESTOCK,
            TBL.AVAILAIBLEZONESTOCK,
            TBL.ISSUEDZIMMIDARSTOCK,
            TBL.AVAILAIBLEZIMMIDARSTOCK
        ];
    }
    get currentURL() { return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_URL + src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_ISSUE; }
    ngOnInit() {
        this._pathLocation = '/box-management/stock';
        this._component = 'Box Stock Management';
        this.initTables();
        // this.initDropDown();
    }
    initTables() {
        this.iterateTables(x => this._reset(x));
        this.initTableColumns();
        this.initTableURL_EndPoints();
        this.initTableForms();
        this._refresh(TBL.STOCK);
    }
    initTableColumns() {
        this._tbls[TBL.STOCK].columns = [
            'id',
            'actions',
            'organisation_id',
            'system_id',
            'receive_date',
            'vendor_id',
            'ref_no',
            'box_price',
            'box_qty',
            'issued',
            'remaining',
            'box_img',
        ];
        this._tbls[TBL.GSBZONESTOCK].columns = [
            'id',
            'actions',
            'date',
            'bg',
            'le',
            'ou',
            'issued',
        ];
        this._tbls[TBL.AVAILAIBLEZONESTOCK].columns = [
            'id',
            'actions',
            'box_qty',
            'remaining',
        ];
        this._tbls[TBL.ISSUEDZIMMIDARSTOCK].columns = [
            'id',
            'actions',
            'date',
            'su',
            'collector',
            'issued',
        ];
        this._tbls[TBL.AVAILAIBLEZIMMIDARSTOCK].columns = [
            'id',
            'actions',
            'box_qty',
            'remaining',
        ];
    }
    initTableURL_EndPoints() {
        this._tbls[TBL.STOCK].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_ISSUE;
        this._tbls[TBL.GSBZONESTOCK].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_OU_ISSUE;
        this._tbls[TBL.AVAILAIBLEZONESTOCK].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.DEFAULT;
        this._tbls[TBL.ISSUEDZIMMIDARSTOCK].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_COL_ISSUE;
        this._tbls[TBL.AVAILAIBLEZIMMIDARSTOCK].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.DEFAULT;
        this._tbls[TBL.AVAILAIBLEZIMMIDARSTOCK].url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_URL + src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_COL_ISSUE + '/remaining';
    }
    initTableForms() {
        this._formCreator(this._tbls[TBL.STOCK]);
    }
    iterateTables(callBackFunction) {
        this.tablesArray.forEach(tbl => {
            callBackFunction(tbl);
        });
    }
    setOrgSys(item) {
        this._http.org_id = item?.organisation_id;
        this._http.sys_id = item?.system_id;
    }
    setAllListEmpty() {
        this._tbls[TBL.STOCK].dataSource.data = [];
        this.setAllChildListEmpty();
    }
    setAllChildListEmpty() {
        this._tbls[TBL.GSBZONESTOCK].dataSource.data = [];
        this._tbls[TBL.AVAILAIBLEZONESTOCK].dataSource.data = [];
        this._tbls[TBL.ISSUEDZIMMIDARSTOCK].dataSource.data = [];
        this._tbls[TBL.AVAILAIBLEZIMMIDARSTOCK].dataSource.data = [];
    }
    tblClickHandler(id, TBLs, item) {
        if (TBLs == TBL.STOCK) {
            this.setAllChildListEmpty();
            this._tbls[TBL.GSBZONESTOCK].query = { parent_id: id };
            this._refresh(TBL.GSBZONESTOCK);
            this._tbls[TBL.AVAILAIBLEZONESTOCK].dataSource.data = [
                {
                    id: item.id,
                    box_qty: item.box_qty,
                    remaining: item?.box_stock_issued == null ? item.box_qty : item.box_qty - item?.box_stock_issued?.issued
                }
            ];
            if (this._tbls[TBL.AVAILAIBLEZONESTOCK].dataSource.data[0].remaining == 0) {
                this._tbls[TBL.AVAILAIBLEZONESTOCK].dataSource.data = [];
            }
        }
        else if (TBLs == TBL.GSBZONESTOCK) {
            this.selectOU = item.operating_unit.id;
            this._tbls[TBL.ISSUEDZIMMIDARSTOCK].query = { parent_id: id };
            this._refresh(TBL.ISSUEDZIMMIDARSTOCK);
            this._tbls[TBL.AVAILAIBLEZIMMIDARSTOCK].query = { parent_id: id };
            this._refresh(TBL.AVAILAIBLEZIMMIDARSTOCK);
        }
        else if (TBLs == TBL.AVAILAIBLEZONESTOCK) {
            this.openDialog(item, 'Assign Boxes to Operating Units', 1);
        }
        else if (TBLs == TBL.AVAILAIBLEZIMMIDARSTOCK) {
            item.ou = this.selectOU;
            this.openDialog(item, 'Assign Boxes to Collector', 0);
        }
    }
    openDialog(data, title, popupType) {
        const config = {
            panelClass: "dialog-responsive",
            data: { data, title, popupType }
        };
        const dialogRef = this._dialog.open(src_app_shared_components_dialogs_box_mgmt_stock_box_mgmt_stock_component__WEBPACK_IMPORTED_MODULE_2__.BoxMgmtStockComponent, config);
        dialogRef.afterClosed().subscribe(result => {
            if (result.action == 'success') {
                this.setAllListEmpty();
                this._refresh(TBL.STOCK);
            }
        });
    }
}
StockComponent.ɵfac = function StockComponent_Factory(t) { return new (t || StockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector)); };
StockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: StockComponent, selectors: [["di-box-mgmt-stock"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 149, vars: 41, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], [2, "border-top", "0px !important"], [1, "card-body", "pt-0"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px", "mat-header-cell", "", "translate", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "pl-3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "pl-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "organisation_id"], ["class", "pr-3", "mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 4, "matHeaderCellDef"], ["class", "px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "system_id"], ["matColumnDef", "receive_date"], ["matColumnDef", "vendor_id"], ["matColumnDef", "ref_no"], ["matColumnDef", "box_price"], ["matColumnDef", "box_qty"], ["matColumnDef", "issued"], ["matColumnDef", "remaining"], ["matColumnDef", "box_img"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "tbl", "paginateEvent"], ["gsbZoneStock", ""], ["style", "width: 40px", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "date"], ["matColumnDef", "bg"], ["matColumnDef", "le"], ["matColumnDef", "ou"], ["zoneAvailableStock", ""], ["gsbZimmidar", ""], ["matColumnDef", "su"], ["matColumnDef", "collector"], ["mat-header-cell", "", "translate", "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", 1, "pl-3"], [1, "ti-reload", "text-info", "pointer", "px-2", 3, "click"], [1, "ti-search", "text-info", "pointer", "px-2", 3, "click"], ["mat-cell", "", 1, "pl-3"], [1, "ti-dropbox-alt", "text-info", "px-2", "pointer", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 1, "pr-3"], ["field", "organisation_id", "lbl", "Organization", 3, "url", "child", "group"], ["mat-cell", "", 1, "px-3"], ["field", "system_id", "lbl", "System", "parentFCName", "organisation_id", 3, "load", "url", "group"], ["field", "receive_date", "lbl", "Date", 3, "group"], ["field", "vendor_id", "lbl", "Vendor", 3, "url", "group"], ["field", "ref_no", "lbl", "Reference #", 3, "group"], ["field", "box_price", "lbl", "Box Price", 3, "group"], ["field", "box_qty", "lbl", "Box Quantity", 3, "group"], ["field", "issued", "lbl", "Issued", 3, "group"], ["field", "remaining", "lbl", "Remaining", 3, "group"], ["class", "tbl_img", "alt", "Box Image", 3, "src", "click", 4, "ngIf"], ["alt", "Box Image", 1, "tbl_img", 3, "src", "click"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""], ["mat-header-cell", "", 2, "width", "40px"], [1, "ti-control-shuffle", "text-info", "px-2", "pointer", 3, "click"], [1, "ti-share", "text-info", "px-2", "pointer", 3, "click"]], template: function StockComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("matSortChange", function StockComponent_Template_table_matSortChange_13_listener($event) { return ctx._sort($event, ctx.TBLz.STOCK); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, StockComponent_th_15_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, StockComponent_td_16_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](17, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, StockComponent_th_18_Template, 3, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, StockComponent_td_19_Template, 2, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](20, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, StockComponent_th_21_Template, 2, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, StockComponent_td_22_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](23, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, StockComponent_th_24_Template, 2, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, StockComponent_td_25_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](26, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, StockComponent_th_27_Template, 2, 1, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, StockComponent_td_28_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](29, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, StockComponent_th_30_Template, 2, 2, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, StockComponent_td_31_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](32, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, StockComponent_th_33_Template, 2, 1, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, StockComponent_td_34_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](35, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, StockComponent_th_36_Template, 2, 1, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, StockComponent_td_37_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](38, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, StockComponent_th_39_Template, 2, 1, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, StockComponent_td_40_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](41, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, StockComponent_th_42_Template, 2, 1, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, StockComponent_td_43_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](44, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, StockComponent_th_45_Template, 2, 1, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, StockComponent_td_46_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](47, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, StockComponent_th_48_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, StockComponent_td_49_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, StockComponent_tr_50_Template, 1, 4, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, StockComponent_tr_51_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "di-paginator", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("paginateEvent", function StockComponent_Template_di_paginator_paginateEvent_52_listener() { return ctx._refresh(ctx.TBLz.STOCK); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "h5", null, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("matSortChange", function StockComponent_Template_table_matSortChange_58_listener($event) { return ctx._sort($event, ctx.TBLz.GSBZONESTOCK); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](59, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, StockComponent_th_60_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, StockComponent_td_61_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](62, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, StockComponent_th_63_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, StockComponent_td_64_Template, 2, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](65, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, StockComponent_th_66_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, StockComponent_td_67_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](68, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, StockComponent_th_69_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](70, StockComponent_td_70_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](71, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, StockComponent_th_72_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, StockComponent_td_73_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](74, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, StockComponent_th_75_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](76, StockComponent_td_76_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](77, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, StockComponent_th_78_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, StockComponent_td_79_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](80, StockComponent_tr_80_Template, 1, 4, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](81, StockComponent_tr_81_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "di-paginator", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("paginateEvent", function StockComponent_Template_di_paginator_paginateEvent_82_listener() { return ctx._refresh(ctx.TBLz.GSBZONESTOCK); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "h5", null, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("matSortChange", function StockComponent_Template_table_matSortChange_88_listener($event) { return ctx._sort($event, ctx.TBLz.AVAILAIBLEZONESTOCK); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](89, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](90, StockComponent_th_90_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](91, StockComponent_td_91_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](92, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](93, StockComponent_th_93_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](94, StockComponent_td_94_Template, 2, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](95, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](96, StockComponent_th_96_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](97, StockComponent_td_97_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](98, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](99, StockComponent_th_99_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](100, StockComponent_td_100_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](101, StockComponent_tr_101_Template, 1, 4, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](102, StockComponent_tr_102_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "h5", null, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("matSortChange", function StockComponent_Template_table_matSortChange_108_listener($event) { return ctx._sort($event, ctx.TBLz.ISSUEDZIMMIDARSTOCK); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](109, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](110, StockComponent_th_110_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](111, StockComponent_td_111_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](112, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](113, StockComponent_th_113_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](114, StockComponent_td_114_Template, 2, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](115, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](116, StockComponent_th_116_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](117, StockComponent_td_117_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](118, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](119, StockComponent_th_119_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](120, StockComponent_td_120_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](121, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](122, StockComponent_th_122_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](123, StockComponent_td_123_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](124, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](125, StockComponent_th_125_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](126, StockComponent_td_126_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](127, StockComponent_tr_127_Template, 1, 4, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](128, StockComponent_tr_128_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "di-paginator", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("paginateEvent", function StockComponent_Template_di_paginator_paginateEvent_129_listener() { return ctx._refresh(ctx.TBLz.ISSUEDZIMMIDARSTOCK); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](132, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("matSortChange", function StockComponent_Template_table_matSortChange_134_listener($event) { return ctx._sort($event, ctx.TBLz.AVAILAIBLEZIMMIDARSTOCK); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](135, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](136, StockComponent_th_136_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](137, StockComponent_td_137_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](138, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](139, StockComponent_th_139_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](140, StockComponent_td_140_Template, 2, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](141, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](142, StockComponent_th_142_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](143, StockComponent_td_143_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](144, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](145, StockComponent_th_145_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](146, StockComponent_td_146_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](147, StockComponent_tr_147_Template, 1, 4, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](148, StockComponent_tr_148_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 29, "Box Stock Management"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 31, "Box Production Details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.TBLz.STOCK].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.TBLz.STOCK].columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.TBLz.STOCK].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tbl", ctx._tbls[ctx.TBLz.STOCK]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](56, 33, "OU Stock"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.TBLz.GSBZONESTOCK].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.TBLz.GSBZONESTOCK].columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.TBLz.GSBZONESTOCK].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tbl", ctx._tbls[ctx.TBLz.GSBZONESTOCK]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](86, 35, "OU Available Stock"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.TBLz.AVAILAIBLEZONESTOCK].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.TBLz.AVAILAIBLEZONESTOCK].columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.TBLz.AVAILAIBLEZONESTOCK].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](106, 37, "Issued Stock to Collector"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.TBLz.ISSUEDZIMMIDARSTOCK].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.TBLz.ISSUEDZIMMIDARSTOCK].columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.TBLz.ISSUEDZIMMIDARSTOCK].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tbl", ctx._tbls[ctx.TBLz.ISSUEDZIMMIDARSTOCK]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](132, 39, "Available Stock for Collector"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.TBLz.AVAILAIBLEZIMMIDARSTOCK].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.TBLz.AVAILAIBLEZIMMIDARSTOCK].columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.TBLz.AVAILAIBLEZIMMIDARSTOCK].columns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, _shared_components_table_tbl_dd_tbl_dd_component__WEBPACK_IMPORTED_MODULE_4__.TblDDComponent, _shared_components_table_tbl_date_tbl_date_component__WEBPACK_IMPORTED_MODULE_5__.TblDateComponent, _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_6__.TblTxtComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_7__.DiPaginatorComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: [".card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.text-red[_ngcontent-%COMP%]{\r\n  color: #c53b55;\r\n}\r\n\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n\r\n\r\n.custon__add__btns__class[_ngcontent-%COMP%]{\r\nposition: absolute;\r\nright: 0;\r\ntop: 0;\r\nheight: 100%;\r\npadding: 3px 5px;\r\nbackground: transparent;\r\nborder: 0px;\r\nbox-shadow: 0px 0px 0px transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:hover{\r\nbackground-color: transparent !important;\r\n  border-color: transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:active{\r\nbackground-color: transparent !important;\r\n  border-color: transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:focus{\r\nbackground-color: transparent !important;\r\n  border-color: transparent !important;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper{\r\npadding: 0px 15px;\r\ncolor: white !important;\r\nbackground: #00c292 !important;\r\ndisplay: block;\r\nfont-size: 15px;\r\nborder-radius: 3px;\r\ntransition: 0.5s;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper:hover{\r\nbox-shadow: 0px 0px 10px -4px #000000a6;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-ripple.mat-button-ripple{\r\ndisplay: none !important;\r\nopacity: 0 !important;\r\n}\r\n.cdk-mouse-focused.cdk-focused[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{\r\nopacity: 0 !important;\r\n}\r\n\r\n\r\n.slection__styled   [_nghost-%COMP%]      .search.ng-touched{\r\n  color: #1a1a1a !important;\r\n\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%]{\r\n  background: #024e70 !important;\r\n  color: white !important;\r\n}\r\n.search[_ngcontent-%COMP%]{\r\n  color: #ffffff !important;\r\n  border-bottom: 1px solid whitesmoke;\r\n}\r\n[_nghost-%COMP%]      .mat-sort-header-arrow{\r\n  color: white;\r\n}\r\n[_nghost-%COMP%]      .mat-sort-header-content{\r\n  color: white !important;\r\n}\r\n[_nghost-%COMP%]      .search::-moz-placeholder{\r\n  color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search:-ms-input-placeholder{\r\n  color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search::placeholder{\r\n  color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search.ng-touched{\r\n  color: #ffffff !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .ng-valid{\r\n  color: #0c0c0c !important;\r\n}\r\n[_nghost-%COMP%]      .search .ng-star-inserted{\r\n  color: #000 !important;\r\n}\r\n\r\n\r\n.mat_table[_ngcontent-%COMP%]{\r\n  max-height: 490px;\r\n  height: auto;\r\n}\r\ntr.mat-header-row[_ngcontent-%COMP%]{\r\n  height: 40px !important;\r\n}\r\n[_nghost-%COMP%]      tr.mat-row, tr.mat-footer-row[_ngcontent-%COMP%]{\r\n  height: 40px !important;\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{\r\n  white-space: nowrap !important;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(odd){\r\n  background-color: #ffffff00 !important;\r\n  transition: 0.1s;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(even){\r\n  background-color: #b3eeff2c !important;\r\n  border-top: 2px solid #0000000d !important;\r\n  border-bottom: 2px solid #0000000d !important;\r\n  transition: 0.1s;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(even):hover{\r\n  box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(odd):hover{\r\n  box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .switch.switch-small.checked{\r\n  background-color: #03a9f3 !important;\r\n}\r\n\r\n\r\n.custom__select__class[_ngcontent-%COMP%]{\r\n  border-radius: 3px;\r\n  padding: 4px;\r\n  border: 1px solid #0000004b;\r\n  background: white;\r\n}\r\n.custom__select__class[_ngcontent-%COMP%]   .cus_opt[_ngcontent-%COMP%]{\r\n  border-radius: 4px;\r\n  background: #ffffff;\r\n  box-shadow: 0px 0px 10px black;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-paginator-range-label{\r\n  margin: 0px !important;\r\n}\r\n\r\n\r\n.upload-large[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n  left: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n}\r\n.img-fluid[_ngcontent-%COMP%]{\r\n  height: 150px;\r\n  text-align: auto;\r\n}\r\n.card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n\r\n.text_align[_ngcontent-%COMP%]{\r\ntext-align: right;\r\n}\r\n.custon__btns__class[_ngcontent-%COMP%]{\r\nwidth: 100px;\r\n\r\n}\r\n.wajiba-nafila[_ngcontent-%COMP%] {\r\ntext-align: center;\r\npadding: 50px 10px;\r\n}\r\n@media(max-width: 768px){\r\n  .text_align[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n  [_nghost-%COMP%]     .custom-date  .md-drppicker.double{\r\n    width: 290px !important;\r\n    left: 0!important;\r\n    top: 100% !important;\r\n  }\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n    padding: 5px 0 7px 0 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n  top: 30px !important;\r\n  margin-top: -15px !important;\r\n  font-weight: 700 !important;\r\n  font-size: 15px;\r\n  color: #303030ad;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n    overflow: visible !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-select-panel{\r\n  width: 100% !important;\r\n  min-width: 100% !important;\r\n  transform: translate(15px, 40px) !important;\r\n  background: #ffffff !important;\r\n  border: 1px solid #00000033;\r\n  box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-select-value{\r\n  font-size: 16px;\r\n  font-weight: 600 !important;\r\n  overflow: hidden !important;\r\n}\r\n[_nghost-%COMP%]      .mat-input-element{\r\n  font-size: 16px !important;\r\n  font-weight: 600 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-option-text{\r\n  color: #0c0c0c;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\ncolor: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n  color: #f44836 !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #f44836 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n  color: #0c0c0c !important;\r\n  overflow: visible !important;\r\n  \r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label{\r\n  overflow: visible !important;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n  color: #0c0c0c !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n  color: #0c0c0c77;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n  color: #bfc1c4;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n  transform: translate3d(30px, 0, 0) !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n    width: 50px !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-error{\r\n    font-size: 10px;\r\n}\r\n\r\n[_nghost-%COMP%]     .md-drppicker.double {\r\n  width: 500px !important;\r\n}\r\n[_nghost-%COMP%]     .md-drppicker td.active, [_nghost-%COMP%]     .md-drppicker td.active:hover {\r\n  background-color: #039be5 !important;\r\n}\r\n[_nghost-%COMP%]     .md-drppicker .btn {\r\n  background-color: #03a9f3 !important;\r\n  text-transform: capitalize !important;\r\n  font-size: 14px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2NrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBLGlCQUFpQjtBQUVqQix3QkFBd0I7QUFDeEI7QUFDQSxrQkFBa0I7QUFDbEIsUUFBUTtBQUNSLE1BQU07QUFDTixZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLHVCQUF1QjtBQUN2QixXQUFXO0FBQ1gsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSx3Q0FBd0M7RUFDdEMsb0NBQW9DO0FBQ3RDO0FBQ0E7QUFDQSx3Q0FBd0M7RUFDdEMsb0NBQW9DO0FBQ3RDO0FBQ0E7QUFDQSx3Q0FBd0M7RUFDdEMsb0NBQW9DO0FBQ3RDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5QixjQUFjO0FBQ2QsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esd0JBQXdCO0FBRXhCLHlCQUF5QjtBQUN6QjtFQUNFLHlCQUF5Qjs7QUFFM0I7QUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFGQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUZBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQSxrQkFBa0I7QUFDbEI7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBLHlCQUF5QjtBQUV6QiwwQkFBMEI7QUFDMUI7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsMENBQTBDO0VBQzFDLDZDQUE2QztFQUM3QyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0EsMEJBQTBCO0FBRTFCLG9DQUFvQztBQUNwQztFQUNFLG9DQUFvQztBQUN0QztBQUNBLG9DQUFvQztBQUVwQyx1QkFBdUI7QUFDdkI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0EsdUJBQXVCO0FBRXZCLG9CQUFvQjtBQUNwQjtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBLG9CQUFvQjtBQUlwQixhQUFhO0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QjtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjtBQUdBO0VBQ0U7TUFDSSxrQkFBa0I7RUFDdEI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0FBQ0Y7QUFDQSx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0Esd0JBQXdCO0FBQ3hCO0VBQ0Usb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0Esd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QjtFQUNFLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0Isa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztHQUVHO0FBQ0gsd0JBQXdCO0FBQ3hCOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCO0FBQ0Esd0JBQXdCO0FBQ3hCO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0Esa0JBQWtCO0FBQ2xCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUVBLGFBQWE7QUFDYjtFQUNFLGNBQWM7QUFDaEI7QUFDQSxhQUFhO0FBRWIsZUFBZTtBQUNmO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQSxlQUFlO0FBRWYsb0JBQW9CO0FBQ3BCO0lBQ0ksZUFBZTtBQUNuQjtBQUNBLG9CQUFvQjtBQUdwQjtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBOztFQUVFLG9DQUFvQztBQUN0QztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHFDQUFxQztFQUNyQywwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3RvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkX19zdHlsaW5ne1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwM2Q7XHJcbn1cclxuLnRleHQtcmVke1xyXG4gIGNvbG9yOiAjYzUzYjU1O1xyXG59XHJcbi8qIEhFQURFUiBTVFlMRSAqL1xyXG4uY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5ne1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBvdmVyZmxvdy14OiBjbGlwO1xyXG59XHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmcgaDJ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggN3B4IC03cHggIzAwMDAwMDU3O1xyXG4gIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIEhFQURFUiBTVFlMRSAqL1xyXG5cclxuLyogSEVBREVSIEJVVFRPTiBTVFlMRSAqL1xyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNze1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnJpZ2h0OiAwO1xyXG50b3A6IDA7XHJcbmhlaWdodDogMTAwJTtcclxucGFkZGluZzogM3B4IDVweDtcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbmJvcmRlcjogMHB4O1xyXG5ib3gtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3M6aG92ZXJ7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3M6YWN0aXZle1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmZvY3Vze1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzcyAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG5wYWRkaW5nOiAwcHggMTVweDtcclxuY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbmJhY2tncm91bmQ6ICMwMGMyOTIgIWltcG9ydGFudDtcclxuZGlzcGxheTogYmxvY2s7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxuYm9yZGVyLXJhZGl1czogM3B4O1xyXG50cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbjpob3N0IC9kZWVwLyAuY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzIC5tYXQtYnV0dG9uLXdyYXBwZXI6aG92ZXJ7XHJcbmJveC1zaGFkb3c6IDBweCAwcHggMTBweCAtNHB4ICMwMDAwMDBhNjtcclxufVxyXG46aG9zdCAvZGVlcC8gLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzcyAubWF0LXJpcHBsZS5tYXQtYnV0dG9uLXJpcHBsZXtcclxuZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG5vcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNkay1tb3VzZS1mb2N1c2VkLmNkay1mb2N1c2VkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7XHJcbm9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxufVxyXG4vKiBIRUFERVIgQlVUVE9OIFNUWUxFICovXHJcblxyXG4vKiBUQUJMRSBoZWFkZXIgU1RZTElORyAqL1xyXG4uc2xlY3Rpb25fX3N0eWxlZCA6aG9zdCAvZGVlcC8gIC5zZWFyY2gubmctdG91Y2hlZHtcclxuICBjb2xvcjogIzFhMWExYSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4ubWF0LWhlYWRlci1jZWxse1xyXG4gIGJhY2tncm91bmQ6ICMwMjRlNzAgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoe1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNvcnQtaGVhZGVyLWFycm93e1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc29ydC1oZWFkZXItY29udGVudHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5zZWFyY2g6OnBsYWNlaG9sZGVye1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoLm5nLXRvdWNoZWR7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG4vKiBmaWVsZHMgYm9yZGVyICovXHJcbjpob3N0IC9kZWVwLyAgLm5nLXZhbGlke1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoIC5uZy1zdGFyLWluc2VydGVke1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogVEFCTEUgaGVhZGVyIFNUWUxJTkcgKi9cclxuXHJcbi8qIGxpc3Qgc3R5bGluZyBpbiB0YWJsZSAqL1xyXG4ubWF0X3RhYmxle1xyXG4gIG1heC1oZWlnaHQ6IDQ5MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG50ci5tYXQtaGVhZGVyLXJvd3tcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIHRyLm1hdC1yb3csIHRyLm1hdC1mb290ZXItcm93e1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwsIC5tYXQtY2VsbHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogMC4xcztcclxufVxyXG4ubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZWVmZjJjICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDAwMDAwZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwMDAwMGQgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChldmVuKTpob3ZlcntcclxuICBib3gtc2hhZG93OjBweCAwcHggOHB4IDBweCAjMDAwMDAwNWU7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCk6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzowcHggMHB4IDhweCAwcHggIzAwMDAwMDVlO1xyXG59XHJcbi8qIGxpc3Qgc3R5bGluZyBpbiB0YWJsZSAqL1xyXG5cclxuLyogY2hhY2sgb24gb3Igb2ZmIGJ1dHRvbiAgc3R5bGluZyAqL1xyXG46aG9zdCAvZGVlcC8gIC5zd2l0Y2guc3dpdGNoLXNtYWxsLmNoZWNrZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmMyAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGNoYWNrIG9uIG9yIG9mZiBidXR0b24gIHN0eWxpbmcgKi9cclxuXHJcbi8qIHNlbGVjdCBib3ggc3R5bGluZyAqL1xyXG4uY3VzdG9tX19zZWxlY3RfX2NsYXNze1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDRiO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5jdXN0b21fX3NlbGVjdF9fY2xhc3MgLmN1c19vcHR7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGJsYWNrO1xyXG59XHJcbi8qIHNlbGVjdCBib3ggc3R5bGluZyAqL1xyXG5cclxuLyogcGFnaW5hdGlvbiBhcmVhICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWx7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4vKiBwYWdpbmF0aW9uIGFyZWEgKi9cclxuXHJcblxyXG5cclxuLyogZHJvcGRvd24gKi9cclxuXHJcblxyXG4udXBsb2FkLWxhcmdle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uaW1nLWZsdWlke1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgdGV4dC1hbGlnbjogYXV0bztcclxufVxyXG4uY2FyZF9fc3R5bGluZ3tcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG59XHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmd7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG92ZXJmbG93LXg6IGNsaXA7XHJcbn1cclxuLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4udGV4dF9hbGlnbntcclxudGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmN1c3Rvbl9fYnRuc19fY2xhc3N7XHJcbndpZHRoOiAxMDBweDtcclxuLyogcGFkZGluZzogNXB4IDBweDsgKi9cclxufVxyXG5cclxuLndhamliYS1uYWZpbGEge1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnBhZGRpbmc6IDUwcHggMTBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAudGV4dF9hbGlnbntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmN1c3RvbS1kYXRlICAubWQtZHJwcGlja2VyLmRvdWJsZXtcclxuICAgIHdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4vKiBmaWVsZHMgbGluZSBoZWlnaHQgd29yayAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4gICAgcGFkZGluZzogNXB4IDAgN3B4IDAgIWltcG9ydGFudDtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMzAzMDMwYWQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcntcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBmaWVsZHMgbGluZSBoZWlnaHQgd29yayAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXBhbmVse1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgNDBweCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDMzO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAtNHB4ICMwMDAwMDA5YyAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zZWxlY3QtdmFsdWV7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LWlucHV0LWVsZW1lbnR7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1vcHRpb24tdGV4dHtcclxuICBjb2xvcjogIzBjMGMwYztcclxufVxyXG4vKiA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2Fwe1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuLyogZmllbGRzIGJvcmRlciBob3ZlciAqL1xyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayxcclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcclxuY29sb3I6ICMwZWI5ZWMgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiAjZjQ0ODM2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXHJcbjpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjZjQ0ODM2ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogZmllbGRzIGJvcmRlciBob3ZlciAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogZmllbGRzIGJvcmRlciAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7XHJcbiAgY29sb3I6ICMwYzBjMGM3NztcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIGRpc2FibGVkICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICBjb2xvcjogI2JmYzFjNDtcclxufVxyXG4vKiBkaXNhYmxlZCAqL1xyXG5cclxuLyogdG9nZ2xlIGJhciAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iLWNvbnRhaW5lcntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwcHgsIDAsIDApICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHRvZ2dsZSBiYXIgKi9cclxuXHJcbi8qIGVycm9yIGZvbnQtc2l6ZSAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZXJyb3J7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLyogZXJyb3IgZm9udC1zaXplICovXHJcblxyXG5cclxuOmhvc3QgL2RlZXAvIC5tZC1kcnBwaWNrZXIuZG91YmxlIHtcclxuICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5tZC1kcnBwaWNrZXIgdGQuYWN0aXZlLFxyXG46aG9zdCAvZGVlcC8gLm1kLWRycHBpY2tlciB0ZC5hY3RpdmU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzliZTUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5tZC1kcnBwaWNrZXIgLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmMyAhaW1wb3J0YW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
var TBL;
(function (TBL) {
    TBL["STOCK"] = "STOCK";
    TBL["GSBZONESTOCK"] = "GSBZONESTOCK";
    TBL["AVAILAIBLEZONESTOCK"] = "AVAILAIBLEZONESTOCK";
    TBL["ISSUEDZIMMIDARSTOCK"] = "ISSUEDZIMMIDARSTOCK";
    TBL["AVAILAIBLEZIMMIDARSTOCK"] = "AVAILAIBLEZIMMIDARSTOCK";
})(TBL || (TBL = {}));


/***/ }),

/***/ 23624:
/*!***************************************************************************!*\
  !*** ./src/app/feature/box-management/vendor-add/vendor-add.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorAddComponent": () => (/* binding */ VendorAddComponent)
/* harmony export */ });
/* harmony import */ var src_app_class_base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base.form */ 14187);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/control/txt/txt.component */ 55806);
/* harmony import */ var _shared_components_control_cell_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/control/cell/cell.component */ 12080);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 15719);










const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
const _c1 = function () { return ["/box_management/vendor"]; };
class VendorAddComponent extends src_app_class_base_form__WEBPACK_IMPORTED_MODULE_0__.BaseForm {
    constructor(injector) {
        super(injector);
    }
    ngOnInit() {
        this._component = 'Vendor';
        this.param.endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_VENDOR;
        this._fhs._pathLocation = '/box_management/vendor';
        this.initForm();
        this._activeId = this._fhs._getURLParam('id');
        this.patchData();
    }
    initForm() {
        this._fs._form = this._fb.group({
            company_name: ['', this._vs._val('Vendor Company Name', { alpha: 1 })],
            ntn_cnic: ['', this._vs._val('Vendor Company NTN / CNIC Number', { num: 1, minChar: 7, maxChar: 13 })],
            name: ['', this._vs._val('Vendor Name', { alpha: 1 })],
            company_tel_number: ['', this._vs._val('Company Telephone', { num: 1 })],
            vendor_mobile: ['', this._vs._val('Vendor Mobile')],
            vendor_email: ['', this._vs._val('Vendor Email', { email: 1 })],
            vendor_reference: [
                '',
                this._vs._val('Reference Vendor', { alphaNum: 1 }),
            ],
            company_address: ['', this._vs._val('Company Address', { alphaNum: 1 })],
            vendor_bank: [
                '',
                this._vs._val('Vendor Bank Name', {
                    isField: 0,
                    alpha: 1,
                }),
            ],
            account_title: ['', this._vs._val('Account Title', { alpha: 1 })],
            account_number: ['', this._vs._val('Account Number', { num: 1 })],
            branch_code: ['', this._vs._val('Branch Name with Code', { alphaNum: 1 })],
        });
        // bank: SelectOption;
    }
    patchData() {
        if (this._activeId != null && Number(this._activeId) > 0) {
            this._http.get({ ...this.param, resource: this._activeId }).subscribe((res) => {
                let data = res.data.row;
                this._fs._form.patchValue({
                    ...data,
                });
            });
        }
    }
}
VendorAddComponent.ɵfac = function VendorAddComponent_Factory(t) { return new (t || VendorAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector)); };
VendorAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VendorAddComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 23, consts: [[1, "row"], [1, "col-sm-12", "col-lg-12"], [1, "card", "card__styling"], [1, "card-body", "custom__card__body__styling"], [1, "card-title"], [2, "border-top", "0px !important"], [3, "formGroup", "ngSubmit"], [1, "card-body", "py-0"], ["field", "company_name", "lbl", "Company Name"], ["field", "ntn_cnic", "lbl", "NTN / CNIC"], ["field", "name", "lbl", "Vendor Name"], ["field", "company_tel_number", "lbl", "Company Telephone"], ["field", "vendor_mobile", "lbl", "Vendor Mobile"], ["field", "vendor_email", "lbl", "Vendor Email"], ["field", "vendor_reference", "lbl", "Reference Vendor"], ["field", "company_address", "lbl", "Company Address"], ["field", "vendor_bank", "lbl", "Vendor Bank"], ["field", "account_title", "lbl", "Account"], ["field", "account_number", "lbl", "Account Number", "type", "number"], ["field", "branch_code", "lbl", "Branch Name with Code"], [1, "card-body"], [1, "action-form"], [1, "form-group", "m-b-0", "text_align"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light", "custon__btns__class", 3, "ngClass"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-info", "waves-effect", "waves-light", "custon__btns__class", 3, "ngClass", "routerLink"]], template: function VendorAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function VendorAddComponent_Template_form_ngSubmit_9_listener() { return ctx._onSubmity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "di-txt", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "di-txt", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "di-txt", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "di-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "di-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "di-txt", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "di-txt", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "di-txt", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "di-txt", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "di-txt", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "di-txt", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "di-txt", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 8, !ctx._activeId ? "Add" : "Edit"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 10, "Vendor"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx._fs._form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](16, _c0, ctx._ss.lng === "en", ctx._ss.lng === "ur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 12, "Save"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](19, _c0, ctx._ss.lng === "en", ctx._ss.lng === "ur"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 14, "Cancel"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _shared_components_control_txt_txt_component__WEBPACK_IMPORTED_MODULE_2__.TxtComponent, _shared_components_control_cell_cell_component__WEBPACK_IMPORTED_MODULE_3__.CellComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".custom__img__div[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  padding: 5px;\r\n  border: 1px solid #8e8e8e;\r\n  border-radius: 3px;\r\n}\r\n.custom__img[_ngcontent-%COMP%]{\r\n  display: block;\r\n  width: 100px;\r\n  height: 150px;\r\n  margin: 0px auto;\r\n}\r\n\r\n.card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n\r\n.text_align[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n.custon__btns__class[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  padding: 5px 0px;\r\n}\r\n@media(max-width: 768px){\r\n  .text_align[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n    padding: 5px 0 7px 0 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n  top: 30px !important;\r\n  margin-top: -15px !important;\r\n  font-weight: 700 !important;\r\n  font-size: 15px;\r\n  color: #303030ad;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n    overflow: visible !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-select-panel{\r\n  width: 100% !important;\r\n  min-width: 100% !important;\r\n  \r\n  background: #ffffff !important;\r\n  border: 1px solid #00000033;\r\n  box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-select-value{\r\n  font-size: 16px;\r\n  font-weight: 600 !important;\r\n  overflow: hidden !important;\r\n}\r\n[_nghost-%COMP%]      .mat-input-element{\r\n  font-size: 16px !important;\r\n  font-weight: 600 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-option-text{\r\n  color: #0c0c0c;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\ncolor: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n  color: #f44836 !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #f44836 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n  color: #0c0c0c !important;\r\n  overflow: visible !important;\r\n  \r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label{\r\n  overflow: visible !important;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n  color: #0c0c0c !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n  color: #0c0c0c77;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .ng-touched.ng-valid{\r\n  color: #0c0c0c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-ripple-element{\r\n  background-color: #024d7071 !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n  color: #bfc1c4;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n  transform: translate3d(30px, 0, 0) !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n    width: 50px !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-error{\r\n    font-size: 10px;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .cdk-overlay-pane{\r\n  transform: translateX(0px) translateY(25px) !important;\r\n}\r\nngx-mat-select-search   [_nghost-%COMP%]      .mat-select-search-inner{\r\n  background: #edf1f5 !important;\r\n}\r\nngx-mat-select-search   [_nghost-%COMP%]      .mat-select-search-no-entries-found{\r\n  background: #eaeff5 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRO0FBQ1I7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBLFFBQVE7QUFFUjtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQSx3QkFBd0I7QUFDeEI7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO01BQ0ksa0JBQWtCO0VBQ3RCO0FBQ0Y7QUFDQSx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0Esd0JBQXdCO0FBQ3hCO0VBQ0Usb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0Esd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QjtFQUNFLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsaURBQWlEO0VBQ2pELDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0Isa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztHQUVHO0FBQ0gsd0JBQXdCO0FBQ3hCOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCO0FBQ0Esd0JBQXdCO0FBQ3hCO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0Esa0JBQWtCO0FBQ2xCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBRWxCLFlBQVk7QUFDWjtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQSxZQUFZO0FBRVosYUFBYTtBQUNiO0VBQ0UsY0FBYztBQUNoQjtBQUNBLGFBQWE7QUFJYixlQUFlO0FBQ2Y7RUFDRSw2Q0FBNkM7QUFDL0M7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBLGVBQWU7QUFFZixvQkFBb0I7QUFDcEI7SUFDSSxlQUFlO0FBQ25CO0FBQ0Esb0JBQW9CO0FBR3BCLG9CQUFvQjtBQUNwQjtFQUNFLHNEQUFzRDtBQUN4RDtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQSxvQkFBb0IiLCJmaWxlIjoidmVuZG9yLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW1nICovXHJcbi5jdXN0b21fX2ltZ19fZGl2e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOGU4ZThlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uY3VzdG9tX19pbWd7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4vKiBpbWcgKi9cclxuXHJcbi5jYXJkX19zdHlsaW5ne1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwM2Q7XHJcbn1cclxuLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZ3tcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgb3ZlcmZsb3cteDogY2xpcDtcclxufVxyXG4uY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5nIGgye1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDdweCAtN3B4ICMwMDAwMDA1NztcclxuICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4vKiBidXR0b25zIHNhdmUgQ2FuY2VsICovXHJcbi50ZXh0X2FsaWdue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmN1c3Rvbl9fYnRuc19fY2xhc3N7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAwcHg7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gIC50ZXh0X2FsaWdue1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbi8qIGJ1dHRvbnMgc2F2ZSBDYW5jZWwgKi9cclxuLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgIHBhZGRpbmc6IDVweCAwIDdweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIHRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzMwMzAzMGFkO1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogZmllbGRzIGxpbmUgaGVpZ2h0IHdvcmsgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC1wYW5lbHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDQwcHgpICFpbXBvcnRhbnQ7ICovXHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAzMztcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggLTRweCAjMDAwMDAwOWMgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtb3B0aW9uLXRleHR7XHJcbiAgY29sb3I6ICMwYzBjMGM7XHJcbn1cclxuLyogOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59ICovXHJcbi8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2ssXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XHJcbmNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogI2Y0NDgzNiAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZpZWxkcyBib3JkZXIgaG92ZXIgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAvKiBmb250LXNpemU6IDE1cHg7ICovXHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tcclxuICBjb2xvcjogIzBjMGMwYyAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGZpZWxkcyBib3JkZXIgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le1xyXG4gIGNvbG9yOiAjMGMwYzBjNzc7XHJcbn1cclxuLyogZmllbGRzIGJvcmRlciAqL1xyXG5cclxuLyogdG9nZ2xlciAqL1xyXG46aG9zdCAvZGVlcC8gIC5uZy10b3VjaGVkLm5nLXZhbGlke1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViOWVjICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGQ3MDcxICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjRkNzA3MSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHRvZ2dsZXIgKi9cclxuXHJcbi8qIGRpc2FibGVkICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtcclxuICBjb2xvcjogI2JmYzFjNDtcclxufVxyXG4vKiBkaXNhYmxlZCAqL1xyXG5cclxuXHJcblxyXG4vKiB0b2dnbGUgYmFyICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVye1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzBweCwgMCwgMCkgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntcclxuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogdG9nZ2xlIGJhciAqL1xyXG5cclxuLyogZXJyb3IgZm9udC1zaXplICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1lcnJvcntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4vKiBlcnJvciBmb250LXNpemUgKi9cclxuXHJcblxyXG4vKiBzZWFyY2ggaW5wdXQgbXQgKi9cclxuOmhvc3QgL2RlZXAvICAuY2RrLW92ZXJsYXktcGFuZXtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDI1cHgpICFpbXBvcnRhbnQ7XHJcbn1cclxubmd4LW1hdC1zZWxlY3Qtc2VhcmNoIDpob3N0IC9kZWVwLyAgLm1hdC1zZWxlY3Qtc2VhcmNoLWlubmVye1xyXG4gIGJhY2tncm91bmQ6ICNlZGYxZjUgIWltcG9ydGFudDtcclxufVxyXG5uZ3gtbWF0LXNlbGVjdC1zZWFyY2ggOmhvc3QgL2RlZXAvICAubWF0LXNlbGVjdC1zZWFyY2gtbm8tZW50cmllcy1mb3VuZHtcclxuICBiYWNrZ3JvdW5kOiAjZWFlZmY1ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogc2VhcmNoIGlucHV0IG10ICovXHJcbiJdfQ== */"] });


/***/ }),

/***/ 44604:
/*!*****************************************************************************!*\
  !*** ./src/app/feature/box-management/vendor-list/vendor-list.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorListComponent": () => (/* binding */ VendorListComponent)
/* harmony export */ });
/* harmony import */ var src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/base-list-class */ 42286);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directive/permission.directive */ 47399);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 95432);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 18219);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 71144);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 15719);
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ 86345);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/table/tbl-txt/tbl-txt.component */ 33086);
/* harmony import */ var _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/table/di-paginator/di-paginator.component */ 65141);













const _c0 = function (a0, a1) { return { "eng__font": a0, "urdu__font": a1 }; };
function VendorListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r33._switch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c0, ctx_r0._ss.lng === "en", ctx_r0._ss.lng === "ur"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "Add"), " ");
} }
function VendorListComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "S No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VendorListComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r36 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r36 + ctx_r2._tbls[ctx_r2.URLz.$].index * ctx_r2._tbls[ctx_r2.URLz.$].size + 1, " ");
} }
function VendorListComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Status"));
} }
function VendorListComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ui-switch", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function VendorListComponent_td_17_Template_ui_switch_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); const item_r37 = restoredCtx.$implicit; return item_r37.activate = $event; })("change", function VendorListComponent_td_17_Template_ui_switch_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); const item_r37 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r40._statusChanged($event, item_r37.id, ctx_r40.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", item_r37.activate);
} }
function VendorListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_th_19_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r41._reset(ctx_r41.URLz.$); return ctx_r41._refresh(ctx_r41.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_th_19_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r43._refresh(ctx_r43.URLz.$); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VendorListComponent_td_20_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_td_20_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48); const item_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r46._switch(item_r44.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VendorListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, VendorListComponent_td_20_i_1_Template, 1, 0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("permission", ctx_r6.ACTION.EDIT);
} }
function VendorListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-txt", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r7._tbls[ctx_r7.URLz.$] == null ? null : ctx_r7._tbls[ctx_r7.URLz.$].form);
} }
function VendorListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r49.company_name, " ");
} }
function VendorListComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-txt", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r9._tbls[ctx_r9.URLz.$] == null ? null : ctx_r9._tbls[ctx_r9.URLz.$].form);
} }
function VendorListComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r50.ntn_cnic, " ");
} }
function VendorListComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-txt", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r11._tbls[ctx_r11.URLz.$] == null ? null : ctx_r11._tbls[ctx_r11.URLz.$].form);
} }
function VendorListComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r51.name, " ");
} }
function VendorListComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-txt", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r13._tbls[ctx_r13.URLz.$] == null ? null : ctx_r13._tbls[ctx_r13.URLz.$].form);
} }
function VendorListComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r52.company_tel_number, " ");
} }
function VendorListComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-txt", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r15._tbls[ctx_r15.URLz.$] == null ? null : ctx_r15._tbls[ctx_r15.URLz.$].form);
} }
function VendorListComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r53.vendor_mobile, " ");
} }
function VendorListComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-txt", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r17._tbls[ctx_r17.URLz.$] == null ? null : ctx_r17._tbls[ctx_r17.URLz.$].form);
} }
function VendorListComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r54.vendor_email, " ");
} }
function VendorListComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-txt", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r19._tbls[ctx_r19.URLz.$] == null ? null : ctx_r19._tbls[ctx_r19.URLz.$].form);
} }
function VendorListComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r55.vendor_reference, " ");
} }
function VendorListComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-txt", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r21._tbls[ctx_r21.URLz.$] == null ? null : ctx_r21._tbls[ctx_r21.URLz.$].form);
} }
function VendorListComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r56.company_address, " ");
} }
function VendorListComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-txt", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r23._tbls[ctx_r23.URLz.$] == null ? null : ctx_r23._tbls[ctx_r23.URLz.$].form);
} }
function VendorListComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r57.vendor_bank, " ");
} }
function VendorListComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-txt", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r25._tbls[ctx_r25.URLz.$] == null ? null : ctx_r25._tbls[ctx_r25.URLz.$].form);
} }
function VendorListComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r58.account_title, " ");
} }
function VendorListComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-txt", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r27._tbls[ctx_r27.URLz.$] == null ? null : ctx_r27._tbls[ctx_r27.URLz.$].form);
} }
function VendorListComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r59.account_number, " ");
} }
function VendorListComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "di-tbl-txt", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", ctx_r29._tbls[ctx_r29.URLz.$] == null ? null : ctx_r29._tbls[ctx_r29.URLz.$].form);
} }
function VendorListComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r60.branch_code, " ");
} }
function VendorListComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 60);
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](1, _c0, ctx_r31._ss.lng === "en", ctx_r31._ss.lng === "ur"));
} }
function VendorListComponent_tr_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 61);
} }
class VendorListComponent extends src_app_class_base_list_class__WEBPACK_IMPORTED_MODULE_0__.BaseListClass {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    ngOnInit() {
        this._pathLocation = '/box_management/vendor_add';
        this._component = 'Vendor List';
        this.initTables();
    }
    initTables() {
        this._reset(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].columns = [
            'id',
            'actions',
            'company_name',
            'ntn_cnic',
            'name',
            'company_tel_number',
            'vendor_mobile',
            'vendor_email',
            'vendor_reference',
            'company_address',
            'vendor_bank',
            'account_title',
            'account_number',
            'branch_code'
        ];
        this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].endpoint = src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.BOX_VENDOR;
        if (this._ss.checkPermission(this.ACTION.STATUS)) {
            this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$].columns.splice(2, 0, 'activate');
        }
        this._formCreator(this._tbls[src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$]);
        this._refresh(src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_1__.URLz.$);
    }
}
VendorListComponent.ɵfac = function VendorListComponent_Factory(t) { return new (t || VendorListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector)); };
VendorListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: VendorListComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 60, vars: 9, consts: [[1, "row"], [1, "col-md-12", "p-0"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], [1, "card-title", "mb-0"], ["mat-raised-button", "", "type", "button", "class", "btn btn-success custon__add__btns__class float-right", 3, "ngClass", "click", 4, "permission"], [2, "border-top", "0px !important"], [1, "card-body", "pt-0"], [1, "mat_table"], ["mat-table", "", "matSort", "", 2, "box-shadow", "none", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["style", "width: 40px", "mat-header-cell", "", "translate", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "activate"], ["style", "width: 100px;", "mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 4, "matHeaderCellDef"], ["class", "pl-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "pl-3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "company_name"], ["class", "pr-3", "mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 4, "matHeaderCellDef"], ["class", "px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ntn_cnic"], ["matColumnDef", "name"], ["matColumnDef", "company_tel_number"], ["matColumnDef", "vendor_mobile"], ["matColumnDef", "vendor_email"], ["matColumnDef", "vendor_reference"], ["matColumnDef", "company_address"], ["matColumnDef", "vendor_bank"], ["matColumnDef", "account_title"], ["matColumnDef", "account_number"], ["matColumnDef", "branch_code"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "tbl", "paginateEvent"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-success", "custon__add__btns__class", "float-right", 3, "ngClass", "click"], ["mat-header-cell", "", "translate", "", 2, "width", "40px"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 2, "width", "100px"], ["mat-cell", "", 1, "pl-3"], ["color", "green", "size", "small", 3, "ngModel", "ngModelChange", "change"], ["mat-header-cell", "", 1, "pl-3"], [1, "ti-reload", "text-info", "pointer", "px-2", 3, "click"], [1, "ti-search", "text-info", "pointer", "px-2", 3, "click"], ["class", "ti-pencil text-info px-2 pointer", 3, "click", 4, "permission"], [1, "ti-pencil", "text-info", "px-2", "pointer", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "before", 1, "pr-3"], ["field", "company_name", "lbl", "Company Name", 3, "group"], ["mat-cell", "", 1, "px-3"], ["field", "ntn_cnic", "lbl", "NTN / CNIC", 3, "group"], ["field", "name", "lbl", "Name", 3, "group"], ["field", "company_tel_number", "lbl", "Company Tel Number", 3, "group"], ["field", "vendor_mobile", "lbl", "Vendor Mobile", 3, "group"], ["field", "vendor_email", "lbl", "Vendor Email", 3, "group"], ["field", "vendor_reference", "lbl", "Vendor Ref", 3, "group"], ["field", "company_address", "lbl", "Company Address", 3, "group"], ["field", "vendor_bank", "lbl", "Vendor Bank", 3, "group"], ["field", "account_title", "lbl", "Account Title", 3, "group"], ["field", "account_number", "lbl", "Account Number", 3, "group"], ["field", "branch_code", "lbl", "Branch Code", 3, "group"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", ""]], template: function VendorListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, VendorListComponent_button_7_Template, 3, 7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function VendorListComponent_Template_table_matSortChange_11_listener($event) { return ctx._sort($event, ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, VendorListComponent_th_13_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, VendorListComponent_td_14_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](15, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, VendorListComponent_th_16_Template, 3, 3, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, VendorListComponent_td_17_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](18, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, VendorListComponent_th_19_Template, 3, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, VendorListComponent_td_20_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](21, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, VendorListComponent_th_22_Template, 2, 1, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, VendorListComponent_td_23_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](24, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, VendorListComponent_th_25_Template, 2, 1, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, VendorListComponent_td_26_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](27, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, VendorListComponent_th_28_Template, 2, 1, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, VendorListComponent_td_29_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](30, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, VendorListComponent_th_31_Template, 2, 1, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, VendorListComponent_td_32_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](33, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, VendorListComponent_th_34_Template, 2, 1, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, VendorListComponent_td_35_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](36, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, VendorListComponent_th_37_Template, 2, 1, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, VendorListComponent_td_38_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](39, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, VendorListComponent_th_40_Template, 2, 1, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, VendorListComponent_td_41_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](42, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, VendorListComponent_th_43_Template, 2, 1, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, VendorListComponent_td_44_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](45, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, VendorListComponent_th_46_Template, 2, 1, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, VendorListComponent_td_47_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](48, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, VendorListComponent_th_49_Template, 2, 1, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, VendorListComponent_td_50_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](51, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, VendorListComponent_th_52_Template, 2, 1, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, VendorListComponent_td_53_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](54, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, VendorListComponent_th_55_Template, 2, 1, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, VendorListComponent_td_56_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, VendorListComponent_tr_57_Template, 1, 4, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, VendorListComponent_tr_58_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "di-paginator", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("paginateEvent", function VendorListComponent_Template_di_paginator_paginateEvent_59_listener() { return ctx._refresh(ctx.URLz.$); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 7, "Vendor List"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("permission", ctx.ACTION.ADD);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx._tbls[ctx.URLz.$].dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx._tbls[ctx.URLz.$].columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx._tbls[ctx.URLz.$].columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tbl", ctx._tbls[ctx.URLz.$]);
    } }, directives: [_shared_directive_permission_directive__WEBPACK_IMPORTED_MODULE_2__.PermissionDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__.UiSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _shared_components_table_tbl_txt_tbl_txt_component__WEBPACK_IMPORTED_MODULE_4__.TblTxtComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _shared_components_table_di_paginator_di_paginator_component__WEBPACK_IMPORTED_MODULE_5__.DiPaginatorComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: [".card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.text-red[_ngcontent-%COMP%]{\r\n  color: #c53b55;\r\n}\r\n\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n\r\n\r\n.custon__add__btns__class[_ngcontent-%COMP%]{\r\nposition: absolute;\r\nright: 0;\r\ntop: 0;\r\nheight: 100%;\r\npadding: 3px 5px;\r\nbackground: transparent;\r\nborder: 0px;\r\nbox-shadow: 0px 0px 0px transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:hover{\r\nbackground-color: transparent !important;\r\n  border-color: transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:active{\r\nbackground-color: transparent !important;\r\n  border-color: transparent !important;\r\n}\r\n.custon__add__btns__class[_ngcontent-%COMP%]:focus{\r\nbackground-color: transparent !important;\r\n  border-color: transparent !important;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper{\r\npadding: 0px 15px;\r\ncolor: white !important;\r\nbackground: #00c292 !important;\r\ndisplay: block;\r\nfont-size: 15px;\r\nborder-radius: 3px;\r\ntransition: 0.5s;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-button-wrapper:hover{\r\nbox-shadow: 0px 0px 10px -4px #000000a6;\r\n}\r\n[_nghost-%COMP%]     .custon__add__btns__class .mat-ripple.mat-button-ripple{\r\ndisplay: none !important;\r\nopacity: 0 !important;\r\n}\r\n.cdk-mouse-focused.cdk-focused[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{\r\nopacity: 0 !important;\r\n}\r\n\r\n\r\n.slection__styled   [_nghost-%COMP%]      .search.ng-touched{\r\n  color: #1a1a1a !important;\r\n\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%]{\r\n  background: #024e70 !important;\r\n  color: white !important;\r\n}\r\n.search[_ngcontent-%COMP%]{\r\n  color: #ffffff !important;\r\n  border-bottom: 1px solid whitesmoke;\r\n}\r\n[_nghost-%COMP%]      .mat-sort-header-arrow{\r\n  color: white;\r\n}\r\n[_nghost-%COMP%]      .mat-sort-header-content{\r\n  color: white !important;\r\n}\r\n[_nghost-%COMP%]      .search::-moz-placeholder{\r\n  color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search:-ms-input-placeholder{\r\n  color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search::placeholder{\r\n  color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search.ng-touched{\r\n  color: #ffffff !important;\r\n}\r\n[_nghost-%COMP%]      .search .ng-star-inserted{\r\n  color: #000 !important;\r\n}\r\n\r\n\r\n.mat_table[_ngcontent-%COMP%]{\r\n  max-height: 490px;\r\n  height: auto;\r\n}\r\ntr.mat-header-row[_ngcontent-%COMP%]{\r\n  height: 40px !important;\r\n}\r\n[_nghost-%COMP%]      tr.mat-row, tr.mat-footer-row[_ngcontent-%COMP%]{\r\n  height: 40px !important;\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{\r\n  white-space: nowrap !important;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(odd){\r\n  background-color: #ffffff00 !important;\r\n  transition: 0.1s;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(even){\r\n  background-color: #b3eeff2c !important;\r\n  border-top: 2px solid #0000000d !important;\r\n  border-bottom: 2px solid #0000000d !important;\r\n  transition: 0.1s;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(even):hover{\r\n  box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:nth-child(odd):hover{\r\n  box-shadow:0px 0px 8px 0px #0000005e;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .switch.switch-small.checked{\r\n  background-color: #03a9f3 !important;\r\n}\r\n\r\n\r\n.custom__select__class[_ngcontent-%COMP%]{\r\n  border-radius: 3px;\r\n  padding: 4px;\r\n  border: 1px solid #0000004b;\r\n  background: white;\r\n}\r\n.custom__select__class[_ngcontent-%COMP%]   .cus_opt[_ngcontent-%COMP%]{\r\n  border-radius: 4px;\r\n  background: #ffffff;\r\n  box-shadow: 0px 0px 10px black;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-paginator-range-label{\r\n  margin: 0px !important;\r\n}\r\n\r\n\r\n.upload-large[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n  left: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n}\r\n.img-fluid[_ngcontent-%COMP%]{\r\n  height: 150px;\r\n  text-align: auto;\r\n}\r\n.card__styling[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 10px #0000003d;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  overflow-x: clip;\r\n}\r\n.custom__card__body__styling[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  background: #039be5;\r\n  box-shadow: 0px 10px 7px -7px #00000057;\r\n  margin: 0px 0px 10px 0px;\r\n  padding: 10px 10px;\r\n  color: white;\r\n}\r\n\r\n.text_align[_ngcontent-%COMP%]{\r\ntext-align: right;\r\n}\r\n.custon__btns__class[_ngcontent-%COMP%]{\r\nwidth: 100px;\r\n\r\n}\r\n.wajiba-nafila[_ngcontent-%COMP%] {\r\ntext-align: center;\r\npadding: 50px 10px;\r\n}\r\n@media(max-width: 768px){\r\n  .text_align[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n  [_nghost-%COMP%]     .custom-date  .md-drppicker.double{\r\n    width: 290px !important;\r\n    left: 0!important;\r\n    top: 100% !important;\r\n  }\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-infix{\r\n    padding: 5px 0 7px 0 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-label{\r\n  top: 30px !important;\r\n  margin-top: -15px !important;\r\n  font-weight: 700 !important;\r\n  font-size: 15px;\r\n  color: #303030ad;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label-wrapper{\r\n    overflow: visible !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-select-panel{\r\n  width: 100% !important;\r\n  min-width: 100% !important;\r\n  transform: translate(15px, 40px) !important;\r\n  background: #ffffff !important;\r\n  border: 1px solid #00000033;\r\n  box-shadow: 0px 0px 11px -4px #0000009c !important;\r\n}\r\n[_nghost-%COMP%]      .mat-select-value{\r\n  font-size: 16px;\r\n  font-weight: 600 !important;\r\n  overflow: hidden !important;\r\n}\r\n[_nghost-%COMP%]      .mat-input-element{\r\n  font-size: 16px !important;\r\n  font-weight: 600 !important;\r\n}\r\n[_nghost-%COMP%]      .mat-option-text{\r\n  color: #0c0c0c;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, .mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{\r\ncolor: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\r\n  color: #f44836 !important;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field.mat-focused.mat-form-field-invalid .mat-form-field-label, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #f44836 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused .mat-form-field-label{\r\n  color: #0c0c0c !important;\r\n  overflow: visible !important;\r\n  \r\n}\r\n[_nghost-%COMP%]      .mat-form-field-label{\r\n  overflow: visible !important;\r\n}\r\n[_nghost-%COMP%]      .mat-form-field.mat-focused.mat-primary .mat-select-arrow{\r\n  color: #0c0c0c !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline .mat-form-field-outline{\r\n  color: #0c0c0c77;\r\n}\r\n\r\n[_nghost-%COMP%]      .ng-touched.ng-valid{\r\n  color: #ffffff !important\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{\r\n  background-color: #0eb9ec !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{\r\n  background-color: #024d7071 !important;\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{\r\n  color: #bfc1c4;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{\r\n  transform: translate3d(30px, 0, 0) !important;\r\n}\r\n[_nghost-%COMP%]      .mat-slide-toggle-bar{\r\n    width: 50px !important;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]      .mat-error{\r\n    font-size: 10px;\r\n}\r\n\r\n[_nghost-%COMP%]     .md-drppicker.double {\r\n  width: 500px !important;\r\n}\r\n[_nghost-%COMP%]     .md-drppicker td.active, [_nghost-%COMP%]     .md-drppicker td.active:hover {\r\n  background-color: #039be5 !important;\r\n}\r\n[_nghost-%COMP%]     .md-drppicker .btn {\r\n  background-color: #03a9f3 !important;\r\n  text-transform: capitalize !important;\r\n  font-size: 14px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBLGlCQUFpQjtBQUVqQix3QkFBd0I7QUFDeEI7QUFDQSxrQkFBa0I7QUFDbEIsUUFBUTtBQUNSLE1BQU07QUFDTixZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLHVCQUF1QjtBQUN2QixXQUFXO0FBQ1gsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSx3Q0FBd0M7RUFDdEMsb0NBQW9DO0FBQ3RDO0FBQ0E7QUFDQSx3Q0FBd0M7RUFDdEMsb0NBQW9DO0FBQ3RDO0FBQ0E7QUFDQSx3Q0FBd0M7RUFDdEMsb0NBQW9DO0FBQ3RDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5QixjQUFjO0FBQ2QsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esd0JBQXdCO0FBRXhCLHlCQUF5QjtBQUN6QjtFQUNFLHlCQUF5Qjs7QUFFM0I7QUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFGQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUZBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBLHlCQUF5QjtBQUV6QiwwQkFBMEI7QUFDMUI7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsMENBQTBDO0VBQzFDLDZDQUE2QztFQUM3QyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0EsMEJBQTBCO0FBRTFCLG9DQUFvQztBQUNwQztFQUNFLG9DQUFvQztBQUN0QztBQUNBLG9DQUFvQztBQUVwQyx1QkFBdUI7QUFDdkI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0EsdUJBQXVCO0FBRXZCLG9CQUFvQjtBQUNwQjtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBLG9CQUFvQjtBQUlwQixhQUFhO0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QjtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjtBQUdBO0VBQ0U7TUFDSSxrQkFBa0I7RUFDdEI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0FBQ0Y7QUFDQSx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0Esd0JBQXdCO0FBQ3hCO0VBQ0Usb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0Esd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QjtFQUNFLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0Isa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztHQUVHO0FBQ0gsd0JBQXdCO0FBQ3hCOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCO0FBQ0Esd0JBQXdCO0FBQ3hCO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0Esa0JBQWtCO0FBQ2xCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBQ2xCO0VBQ0U7QUFDRjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFFQSxhQUFhO0FBQ2I7RUFDRSxjQUFjO0FBQ2hCO0FBQ0EsYUFBYTtBQUViLGVBQWU7QUFDZjtFQUNFLDZDQUE2QztBQUMvQztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0EsZUFBZTtBQUVmLG9CQUFvQjtBQUNwQjtJQUNJLGVBQWU7QUFDbkI7QUFDQSxvQkFBb0I7QUFHcEI7RUFDRSx1QkFBdUI7QUFDekI7QUFFQTs7RUFFRSxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InZlbmRvci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9fc3R5bGluZ3tcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG59XHJcbi50ZXh0LXJlZHtcclxuICBjb2xvcjogI2M1M2I1NTtcclxufVxyXG4vKiBIRUFERVIgU1RZTEUgKi9cclxuLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZ3tcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgb3ZlcmZsb3cteDogY2xpcDtcclxufVxyXG4uY3VzdG9tX19jYXJkX19ib2R5X19zdHlsaW5nIGgye1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDdweCAtN3B4ICMwMDAwMDA1NztcclxuICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4vKiBIRUFERVIgU1RZTEUgKi9cclxuXHJcbi8qIEhFQURFUiBCVVRUT04gU1RZTEUgKi9cclxuLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzc3tcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5yaWdodDogMDtcclxudG9wOiAwO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnBhZGRpbmc6IDNweCA1cHg7XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5ib3JkZXI6IDBweDtcclxuYm94LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmhvdmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9uX19hZGRfX2J0bnNfX2NsYXNzOmFjdGl2ZXtcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzczpmb2N1c3tcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3MgLm1hdC1idXR0b24td3JhcHBlcntcclxucGFkZGluZzogMHB4IDE1cHg7XHJcbmNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG5iYWNrZ3JvdW5kOiAjMDBjMjkyICFpbXBvcnRhbnQ7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDNweDtcclxudHJhbnNpdGlvbjogMC41cztcclxufVxyXG46aG9zdCAvZGVlcC8gLmN1c3Rvbl9fYWRkX19idG5zX19jbGFzcyAubWF0LWJ1dHRvbi13cmFwcGVyOmhvdmVye1xyXG5ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggLTRweCAjMDAwMDAwYTY7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jdXN0b25fX2FkZF9fYnRuc19fY2xhc3MgLm1hdC1yaXBwbGUubWF0LWJ1dHRvbi1yaXBwbGV7XHJcbmRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxub3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jZGstbW91c2UtZm9jdXNlZC5jZGstZm9jdXNlZCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e1xyXG5vcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogSEVBREVSIEJVVFRPTiBTVFlMRSAqL1xyXG5cclxuLyogVEFCTEUgaGVhZGVyIFNUWUxJTkcgKi9cclxuLnNsZWN0aW9uX19zdHlsZWQgOmhvc3QgL2RlZXAvICAuc2VhcmNoLm5nLXRvdWNoZWR7XHJcbiAgY29sb3I6ICMxYTFhMWEgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbHtcclxuICBiYWNrZ3JvdW5kOiAjMDI0ZTcwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaHtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zb3J0LWhlYWRlci1hcnJvd3tcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LXNvcnQtaGVhZGVyLWNvbnRlbnR7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoOjpwbGFjZWhvbGRlcntcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLnNlYXJjaC5uZy10b3VjaGVke1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAuc2VhcmNoIC5uZy1zdGFyLWluc2VydGVke1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogVEFCTEUgaGVhZGVyIFNUWUxJTkcgKi9cclxuXHJcbi8qIGxpc3Qgc3R5bGluZyBpbiB0YWJsZSAqL1xyXG4ubWF0X3RhYmxle1xyXG4gIG1heC1oZWlnaHQ6IDQ5MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG50ci5tYXQtaGVhZGVyLXJvd3tcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gIHRyLm1hdC1yb3csIHRyLm1hdC1mb290ZXItcm93e1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwsIC5tYXQtY2VsbHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogMC4xcztcclxufVxyXG4ubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZWVmZjJjICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDAwMDAwZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwMDAwMGQgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChldmVuKTpob3ZlcntcclxuICBib3gtc2hhZG93OjBweCAwcHggOHB4IDBweCAjMDAwMDAwNWU7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCk6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzowcHggMHB4IDhweCAwcHggIzAwMDAwMDVlO1xyXG59XHJcbi8qIGxpc3Qgc3R5bGluZyBpbiB0YWJsZSAqL1xyXG5cclxuLyogY2hhY2sgb24gb3Igb2ZmIGJ1dHRvbiAgc3R5bGluZyAqL1xyXG46aG9zdCAvZGVlcC8gIC5zd2l0Y2guc3dpdGNoLXNtYWxsLmNoZWNrZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmMyAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGNoYWNrIG9uIG9yIG9mZiBidXR0b24gIHN0eWxpbmcgKi9cclxuXHJcbi8qIHNlbGVjdCBib3ggc3R5bGluZyAqL1xyXG4uY3VzdG9tX19zZWxlY3RfX2NsYXNze1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDRiO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5jdXN0b21fX3NlbGVjdF9fY2xhc3MgLmN1c19vcHR7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGJsYWNrO1xyXG59XHJcbi8qIHNlbGVjdCBib3ggc3R5bGluZyAqL1xyXG5cclxuLyogcGFnaW5hdGlvbiBhcmVhICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWx7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4vKiBwYWdpbmF0aW9uIGFyZWEgKi9cclxuXHJcblxyXG5cclxuLyogZHJvcGRvd24gKi9cclxuXHJcblxyXG4udXBsb2FkLWxhcmdle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uaW1nLWZsdWlke1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgdGV4dC1hbGlnbjogYXV0bztcclxufVxyXG4uY2FyZF9fc3R5bGluZ3tcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDNkO1xyXG59XHJcbi5jdXN0b21fX2NhcmRfX2JvZHlfX3N0eWxpbmd7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG92ZXJmbG93LXg6IGNsaXA7XHJcbn1cclxuLmN1c3RvbV9fY2FyZF9fYm9keV9fc3R5bGluZyBoMntcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCA3cHggLTdweCAjMDAwMDAwNTc7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4udGV4dF9hbGlnbntcclxudGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmN1c3Rvbl9fYnRuc19fY2xhc3N7XHJcbndpZHRoOiAxMDBweDtcclxuLyogcGFkZGluZzogNXB4IDBweDsgKi9cclxufVxyXG5cclxuLndhamliYS1uYWZpbGEge1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnBhZGRpbmc6IDUwcHggMTBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAudGV4dF9hbGlnbntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmN1c3RvbS1kYXRlICAubWQtZHJwcGlja2VyLmRvdWJsZXtcclxuICAgIHdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLyogYnV0dG9ucyBzYXZlIENhbmNlbCAqL1xyXG4vKiBmaWVsZHMgbGluZSBoZWlnaHQgd29yayAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4gICAgcGFkZGluZzogNXB4IDAgN3B4IDAgIWltcG9ydGFudDtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMzAzMDMwYWQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcntcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBmaWVsZHMgbGluZSBoZWlnaHQgd29yayAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtc2VsZWN0LXBhbmVse1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgNDBweCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDMzO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAtNHB4ICMwMDAwMDA5YyAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zZWxlY3QtdmFsdWV7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvICAubWF0LWlucHV0LWVsZW1lbnR7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1vcHRpb24tdGV4dHtcclxuICBjb2xvcjogIzBjMGMwYztcclxufVxyXG4vKiA6aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2Fwe1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuLyogZmllbGRzIGJvcmRlciBob3ZlciAqL1xyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayxcclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcclxuY29sb3I6ICMwZWI5ZWMgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiAjZjQ0ODM2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXHJcbjpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjZjQ0ODM2ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogZmllbGRzIGJvcmRlciBob3ZlciAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgY29sb3I6ICMwYzBjMGMgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cclxufVxyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e1xyXG4gIGNvbG9yOiAjMGMwYzBjICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogZmllbGRzIGJvcmRlciAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7XHJcbiAgY29sb3I6ICMwYzBjMGM3NztcclxufVxyXG4vKiBmaWVsZHMgYm9yZGVyICovXHJcbjpob3N0IC9kZWVwLyAgLm5nLXRvdWNoZWQubmctdmFsaWR7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudFxyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlYjllYyAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjRkNzA3MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBkaXNhYmxlZCAqL1xyXG46aG9zdCAvZGVlcC8gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7XHJcbiAgY29sb3I6ICNiZmMxYzQ7XHJcbn1cclxuLyogZGlzYWJsZWQgKi9cclxuXHJcbi8qIHRvZ2dsZSBiYXIgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYi1jb250YWluZXJ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMHB4LCAwLCAwKSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAgLm1hdC1zbGlkZS10b2dnbGUtYmFye1xyXG4gICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG4vKiB0b2dnbGUgYmFyICovXHJcblxyXG4vKiBlcnJvciBmb250LXNpemUgKi9cclxuOmhvc3QgL2RlZXAvICAubWF0LWVycm9ye1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi8qIGVycm9yIGZvbnQtc2l6ZSAqL1xyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyLmRvdWJsZSB7XHJcbiAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyIHRkLmFjdGl2ZSxcclxuOmhvc3QgL2RlZXAvIC5tZC1kcnBwaWNrZXIgdGQuYWN0aXZlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM5YmU1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubWQtZHJwcGlja2VyIC5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjMgIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_feature_box-management_box-management_module_ts.js.map