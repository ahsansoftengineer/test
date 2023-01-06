"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["src_app_dm-dashboard_dm-dashboard_module_ts"],{

/***/ 17361:
/*!*************************************************************!*\
  !*** ./src/app/dm-dashboard/dm-dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DmDashboardRoutingModule": () => (/* binding */ DmDashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _enums_action_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/action.enum */ 31978);
/* harmony import */ var _dm_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dm-dashboard.component */ 61499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39609);





const routes = [
    { path: '',
        component: _dm_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DmDashboardComponent,
        data: {
            title: "Allow Purpose",
            permission: [
                _enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.VIEW,
                _enums_action_enum__WEBPACK_IMPORTED_MODULE_0__.ACTION.EVERY
            ],
        }
    }
];
class DmDashboardRoutingModule {
}
DmDashboardRoutingModule.ɵfac = function DmDashboardRoutingModule_Factory(t) { return new (t || DmDashboardRoutingModule)(); };
DmDashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DmDashboardRoutingModule });
DmDashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DmDashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 61499:
/*!********************************************************!*\
  !*** ./src/app/dm-dashboard/dm-dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DmDashboardComponent": () => (/* binding */ DmDashboardComponent)
/* harmony export */ });
/* harmony import */ var _class_base_join_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/base-join-actions */ 63661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ 30255);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 15719);




class DmDashboardComponent extends _class_base_join_actions__WEBPACK_IMPORTED_MODULE_0__.BaseJoinAction {
    constructor(injector, cookie) {
        super(injector);
        this.cookie = cookie;
    }
    ngOnInit() {
        this._DashBoard();
    }
    _DashBoard() {
        if (this.cookie.get('current_module') == '2')
            this._router.navigateByUrl('/dm_dashboard');
        else if (this.cookie.get('current_module') == '')
            window.location.href = this._fhs._logout();
        else
            this._router.navigateByUrl('/e_raseed_dashboard');
    }
}
DmDashboardComponent.ɵfac = function DmDashboardComponent_Factory(t) { return new (t || DmDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService)); };
DmDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DmDashboardComponent, selectors: [["di-component-name-here"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 0, consts: [[1, "row"], [1, "col-md-12", "p-0"], [1, "card", "card__styling"], [1, "card-header", "custom__card__body__styling"], ["translate", "", 1, "card-title", "mb-0"], [1, "card-body"], [1, "card-body", "pt-0"]], template: function DmDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " DM DASHBOARD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkbS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 47705:
/*!*****************************************************!*\
  !*** ./src/app/dm-dashboard/dm-dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "DmDashboardModule": () => (/* binding */ DmDashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 52474);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 52450);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 15719);
/* harmony import */ var _dm_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dm-dashboard-routing.module */ 17361);
/* harmony import */ var _dm_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dm-dashboard.component */ 61499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);








function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http);
}
class DmDashboardModule {
}
DmDashboardModule.ɵfac = function DmDashboardModule_Factory(t) { return new (t || DmDashboardModule)(); };
DmDashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DmDashboardModule });
DmDashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _dm_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DmDashboardRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient]
                },
                isolate: false
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DmDashboardModule, { declarations: [_dm_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DmDashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _dm_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DmDashboardRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_dm-dashboard_dm-dashboard_module_ts.js.map