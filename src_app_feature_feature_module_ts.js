"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["src_app_feature_feature_module_ts"],{

/***/ 81471:
/*!***************************************************!*\
  !*** ./src/app/feature/feature-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureRoutingModule": () => (/* binding */ FeatureRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 39609);



const routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    {
        path: 'organaization',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_donation-org_donation-org_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./donation-org/donation-org.module */ 75125)).then((m) => m.DonationOrgModule),
    },
    {
        path: 'operating_unit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_operating-unit_operating-unit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./operating-unit/operating-unit.module */ 58762)).then((m) => m.OperatingUnitModule),
    },
    {
        path: 'bank',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_bank_bank_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bank/bank.module */ 95318)).then((m) => m.BankModule),
    },
    {
        path: 'deposit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_receipt_deposit_deposit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./receipt/deposit/deposit.module */ 84498)).then((m) => m.DepositModule),
    },
    {
        path: 'verification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_receipt_deposit-verification_deposit-verification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./receipt/deposit-verification/deposit-verification.module */ 16156)).then((m) => m.DepositVerificationModule),
    },
    {
        path: 'reconciliation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_receipt_deposit-reconciliation_deposit-reconciliation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./receipt/deposit-reconciliation/deposit-reconciliation.module */ 24046)).then((m) => m.DepositReconciliationModule),
    },
    {
        path: 'mark_ready',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_mark-ready-for-erp_mark-ready-for-erp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mark-ready-for-erp/mark-ready-for-erp.module */ 75841)).then((m) => m.MarkReadyForErpModule),
    },
    {
        path: 'posting',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_mark-ready-posting_mark-ready-posting_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mark-ready-posting/mark-ready-posting.module */ 37125)).then((m) => m.MarkReadyPostingModule),
    },
    {
        path: 'knock_off',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_receipt_knock-off_knock-off_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./receipt/knock-off/knock-off.module */ 57573)).then((m) => m.KnockOffModule),
    },
    {
        path: 'eraseed_collection',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_receipt_eraseed-collection_eraseed-collection_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./receipt/eraseed-collection/eraseed-collection.module */ 7392)).then(m => m.EraseedCollectionModule)
    },
    {
        path: 'assigning-collectors',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_assigning-collectors_assigning-collectors_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./assigning-collectors/assigning-collectors.module */ 56211)).then(m => m.AssigningCollectorsModule)
    },
    {
        path: 'users-donation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_user-donation_user-donation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./user-donation/user-donation.module */ 51088)).then(m => m.UserDonationModule)
    },
    {
        path: 'acknowledgement-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_acknowledgement-list_acknowledgement-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./acknowledgement-list/acknowledgement-list.module */ 64188)).then(m => m.AcknowledgementListModule)
    },
    {
        path: 'box_management',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_feature_donor_donor_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_feature_box-management_box-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./box-management/box-management.module */ 92230)).then(m => m.BoxManagementModule)
    },
    {
        path: 'donation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_donation_donation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./donation/donation.module */ 28209)).then((m) => m.DonationModule),
    },
    {
        path: 'donor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_feature_donor_donor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./donor/donor.module */ 99820)).then((m) => m.DonorModule),
    },
    {
        path: 'madni_basta',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_madni-basta_madni-basta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./madni-basta/madni-basta.module */ 8264)).then((m) => m.MadniBastaModule),
    },
    {
        path: 'user',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_add-user_add-user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./add-user/add-user.module */ 6168)).then((m) => m.AddUserModule),
    },
    {
        path: 'generate_batch',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_generate-batch_generate-batch_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./generate-batch/generate-batch.module */ 65532)).then((m) => m.GenerateBatchModule),
    },
    {
        path: 'allow_permission',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_class_base_form_treeview_ts"), __webpack_require__.e("src_app_feature_allow-permission_allow-permission_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./allow-permission/allow-permission.module */ 61634)).then((m) => m.AllowPermissionModule),
    },
    {
        path: 'allow_system',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_class_base_form_treeview_ts"), __webpack_require__.e("src_app_feature_allow-permission_allow-permission_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./allow-permission/allow-permission.module */ 61634)).then((m) => m.AllowPermissionModule),
    },
    {
        path: 'transaction',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_feature_donor_donor_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_feature_transaction_transaction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./transaction/transaction.module */ 59546)).then((m) => m.TransactionModule),
    },
    {
        path: 'allow_purpose',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_class_base_form_treeview_ts"), __webpack_require__.e("src_app_feature_allow-purpose_allow-purpose_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./allow-purpose/allow-purpose.module */ 42278)).then((m) => m.AllowPurposeModule),
    },
    {
        path: 'reports',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_feature_donation-reports_donation-reports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./donation-reports/donation-reports.module */ 67932)).then((m) => m.DonationReportsModule),
    },
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_error-x_error-x-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./error-x/error-x-routing.module */ 53516)).then((m) => m.ErrorXRoutingModule),
    },
];
class FeatureRoutingModule {
}
FeatureRoutingModule.ɵfac = function FeatureRoutingModule_Factory(t) { return new (t || FeatureRoutingModule)(); };
FeatureRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeatureRoutingModule });
FeatureRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeatureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 17324:
/*!**********************************************!*\
  !*** ./src/app/feature/feature.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureComponent": () => (/* binding */ FeatureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 16873);


class FeatureComponent {
}
FeatureComponent.ɵfac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(); };
FeatureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatureComponent, selectors: [["di-feature"]], decls: 1, vars: 0, template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 26207:
/*!*******************************************!*\
  !*** ./src/app/feature/feature.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "FeatureModule": () => (/* binding */ FeatureModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 52450);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 15719);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 52474);
/* harmony import */ var _feature_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-routing.module */ 81471);
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature.component */ 17324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);







function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http);
}
class FeatureModule {
}
FeatureModule.ɵfac = function FeatureModule_Factory(t) { return new (t || FeatureModule)(); };
FeatureModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FeatureModule });
FeatureModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _feature_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeatureRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient]
                },
                isolate: false
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FeatureModule, { declarations: [_feature_component__WEBPACK_IMPORTED_MODULE_1__.FeatureComponent], imports: [_feature_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeatureRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_feature_feature_module_ts.js.map