"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["common"],{

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


/***/ })

}]);
//# sourceMappingURL=common.js.map