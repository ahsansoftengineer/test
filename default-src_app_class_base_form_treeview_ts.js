"use strict";
(self["webpackChunkdi_donation"] = self["webpackChunkdi_donation"] || []).push([["default-src_app_class_base_form_treeview_ts"],{

/***/ 11217:
/*!***********************************************************!*\
  !*** ./src/app/class/allow-permission/DynamicDataBase.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicDatabase": () => (/* binding */ DynamicDatabase)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76027);
/* harmony import */ var src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/url.enum */ 34509);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/http.service */ 4584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);




class DynamicDatabase {
    constructor(injector) {
        this.user_id = null;
        this.treeCases = 0;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this._http = injector.get(src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__.HTTPService);
    }
    isExpandable(node) {
        return node.expandable;
    }
    get data() {
        return this.dataChange.value;
    }
    // ?user_id=145&system_id=5&organisation_id=12&parameters=1&level=2&id=01
    getAnalysis(query) {
        if (this.treeCases == 2) {
            return this._http.gets({
                endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.ANALYSIS_PURPOSE_PERMISSION_TREE,
                query,
            });
        }
        else if (this.user_id === null && this.treeCases == 0) {
            return this._http.gets({
                endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.ANALYSIS_PERMISSION_TREE,
                query,
            });
        }
        else {
            return this._http.gets({
                endpoint: src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.ANALYSIS_PERMISSION_USER_TREE,
                query,
            });
        }
    }
    saveAnalysis(body) {
        const endpoint = this.treeCases == 2
            ? src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.ANALYSIS_PURPOSE_PERMISSION_TREE
            : src_app_enums_url_enum__WEBPACK_IMPORTED_MODULE_0__.URLz.ANALYSIS_PERMISSION_TREE;
        return this._http.create({
            endpoint,
            body,
        });
    }
}
DynamicDatabase.ɵfac = function DynamicDatabase_Factory(t) { return new (t || DynamicDatabase)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector)); };
DynamicDatabase.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DynamicDatabase, factory: DynamicDatabase.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 30781:
/*!*************************************************************!*\
  !*** ./src/app/class/allow-permission/DynamicDataSource.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicDataSource": () => (/* binding */ DynamicDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76027);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1753);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 64736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ 88003);
/* harmony import */ var _DynamicDataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DynamicDataBase */ 11217);





class DynamicDataSource {
    constructor(treeControl, database) {
        this.treeControl = treeControl;
        this.database = database;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this._activeNode = '';
    }
    get data() {
        return this.dataChange.value;
    }
    set data(value) {
        this.treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    // Expande and Close
    connect(collectionViewer) {
        this.treeControl.expansionModel.changed.subscribe((change) => {
            if (change.added ||
                change.removed) {
                this.handleTreeControl(change);
            }
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(collectionViewer.viewChange, this.dataChange).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => this.data));
    }
    // Problemetic
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach((node) => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed.reverse().forEach((node) => this.toggleNode(node, false));
        }
    }
    // Adding Removing Child from Server
    toggleNode(node, expand) {
        node.isLoading = true;
        const index = this.data.indexOf(node);
        if (expand) {
            if (node.level === 1)
                this._activeNode = node.id;
            const data = { ...this.database.dbForm.value };
            data.id = node.id;
            data.level = node.level + 1;
            data.type = node.type;
            this.database.getAnalysis(data).subscribe((res) => {
                const children = res.data.records;
                this.data.splice(index + 1, 0, ...children);
                this.dataChange.next(this.data);
                node.isLoading = false;
                node.freez = -1;
            });
        }
        else {
            let imidiateChildren = 0;
            let continu = false;
            this.data.forEach((subNode) => {
                if (subNode.level > node.level && continu) {
                    imidiateChildren++;
                }
                else if (subNode.id == node.id) {
                    continu = true;
                }
                else if (subNode.level == node.level) {
                    continu = false;
                }
            });
            this.data.splice(index + 1, imidiateChildren);
            this.dataChange.next(this.data);
            node.isLoading = false;
            if (node.level === 1) {
                this._activeNode = '';
                node.freez = node.checked;
            }
        }
    }
}
DynamicDataSource.ɵfac = function DynamicDataSource_Factory(t) { return new (t || DynamicDataSource)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__.FlatTreeControl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_DynamicDataBase__WEBPACK_IMPORTED_MODULE_0__.DynamicDatabase)); };
DynamicDataSource.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DynamicDataSource, factory: DynamicDataSource.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 28466:
/*!*********************************************!*\
  !*** ./src/app/class/base.form.treeview.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeView": () => (/* binding */ TreeView)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 35630);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ 88003);
/* harmony import */ var _class_allow_permission_DynamicDataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/allow-permission/DynamicDataBase */ 11217);
/* harmony import */ var _class_allow_permission_DynamicDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class/allow-permission/DynamicDataSource */ 30781);
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.form */ 14187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 39609);






class TreeView extends _base_form__WEBPACK_IMPORTED_MODULE_2__.BaseForm {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.loadingTree = false;
        this.getLevel = (node) => {
            return node.level;
        };
        this.isExpandable = (node) => {
            return node.expandable;
        };
        this.hasChild = (_, _nodeData) => {
            return _nodeData.expandable;
        };
        /* Allowed multiple Selection */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(true);
        this.database = injector.get(_class_allow_permission_DynamicDataBase__WEBPACK_IMPORTED_MODULE_0__.DynamicDatabase);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__.FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource =
            new _class_allow_permission_DynamicDataSource__WEBPACK_IMPORTED_MODULE_1__.DynamicDataSource(this.treeControl, this.database);
    }
    ngOnInit() {
        this._fs._form.valueChanges.subscribe(() => {
            this.dataSource.data = [];
        });
        this.database.dbForm = this._fs._form;
    }
    _process() {
        this.loadingTree = true;
        this.dataSource._activeNode = '';
        const data = this._fs._form.value;
        data.level = '1';
        this.database.getAnalysis(data).subscribe({
            next: (res) => {
                this.dataSource.data = res.data.records;
            },
            complete: () => {
                this.loadingTree = false;
            }
        });
    }
    saveNodeTree(node) {
        const data = { ...this._fs._form.value };
        data.id = node.id;
        data.level = node.level;
        data.checked = node.checked;
        node.isLoading = true;
        this.database.saveAnalysis(data)
            .subscribe({
            complete: () => {
                node.isLoading = false;
            }
        });
    }
    _disabledNode(node) {
        return (node.id !== this.dataSource?._activeNode &&
            this.dataSource?._activeNode != '' &&
            node.level === 1);
    }
    /** Whether all the descendants of the node are selected. */
    parentAll(node) {
        if (node.allowed >= node.total && node.total != 0) {
            return true;
        }
        else
            return false;
    }
    /** Whether part of the descendants are selected */
    parentPartially(node) {
        if (node.allowed != 0 &&
            node.allowed != node.total &&
            node.allowed < node.total) {
            return true;
        }
        else {
            return false;
            //this.descendantsparentPartially(node);
        }
    }
    checkSelection(node) {
        if (node.checked === 1) {
            return true;
        }
        else
            false;
    }
    // Only For Parent Toggle Selection
    itemToggle(node) {
        if (node.allowed >= node.total) {
            node.checked = 0;
            node.allowed = 0;
        }
        else {
            node.checked = 1;
            node.allowed = node.total;
        }
        if (this.treeControl.isExpanded(node)) {
            const descendants = this.treeControl.getDescendants(node);
            descendants.forEach((child) => {
                if (node.checked == 1) {
                    child.allowed = child.total;
                    child.checked = 1;
                }
                else {
                    child.allowed = 0;
                    child.checked = 0;
                }
            });
        }
        this.saveNodeTree(node);
        this.checkAllParentsSelection(node);
    }
    // For Child Toggle Selection
    leafSelected(node) {
        if (node.checked == 1) {
            node.checked = 0;
            node.allowed = 0;
        }
        else {
            node.checked = 1;
            node.allowed = node.total;
        }
        this.saveNodeTree(node);
        this.checkAllParentsSelection(node);
    }
    checkAllParentsSelection(node) {
        let parent = this.getParentNode(node);
        let checkMore = true;
        let childTotal = node.total;
        let increment = 0;
        let childParentDecrement = false;
        while (parent) {
            this.checkRootNodeSelection(parent);
            if (node.checked == 1) {
                if (checkMore &&
                    ((parent.allowed + childTotal) + 1) >= parent.total) {
                    parent.allowed = parent.total;
                    parent.checked = 1;
                    increment += 1;
                    childTotal = parent.total;
                    checkMore = true;
                }
                else {
                    parent.allowed += node.total + increment;
                    parent.checked = 2;
                    checkMore = false;
                }
            }
            else {
                // If anything goes wrong work here
                if (parent.allowed == parent.total) {
                    childParentDecrement = true;
                    childTotal += 1;
                    parent.allowed -= childTotal;
                    parent.checked = 2;
                }
                else if ((parent.allowed - childTotal) == 0) {
                    parent.allowed = 0;
                    parent.checked = 0;
                }
                else if (childParentDecrement) {
                    parent.allowed -= childTotal;
                    parent.checked = 2;
                }
                else {
                    parent.allowed -= node.total;
                }
            }
            parent = this.getParentNode(parent);
        }
    }
    checkRootNodeSelection(node) {
        const nodeSelected = this.checklistSelection.isSelected(node);
        const descendants = this.treeControl.getDescendants(node);
        const descparentAll = descendants.length > 0 &&
            descendants.every((child) => {
                return this.checklistSelection.isSelected(child);
            });
        if (nodeSelected && !descparentAll) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descparentAll) {
            this.checklistSelection.select(node);
        }
    }
    getParentNode(node) {
        const currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i--) {
            const currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
}
TreeView.ɵfac = function TreeView_Factory(t) { return new (t || TreeView)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector)); };
TreeView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TreeView, selectors: [["di-tree-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_class_allow_permission_DynamicDataBase__WEBPACK_IMPORTED_MODULE_0__.DynamicDatabase]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function TreeView_Template(rf, ctx) { }, encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=default-src_app_class_base_form_treeview_ts.js.map