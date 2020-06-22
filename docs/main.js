(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comps_Giraff_admin_giraff_page_giraff_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps/Giraff-admin/giraff-page/giraff-page.component */ "./src/app/comps/Giraff-admin/giraff-page/giraff-page.component.ts");



class AppComponent {
    constructor() {
        this.title = 'giraff-IO';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-giraff-page");
    } }, directives: [_comps_Giraff_admin_giraff_page_giraff_page_component__WEBPACK_IMPORTED_MODULE_1__["GiraffPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_Giraff_admin_giraff_item_giraff_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/Giraff-admin/giraff-item/giraff-item.component */ "./src/app/comps/Giraff-admin/giraff-item/giraff-item.component.ts");
/* harmony import */ var _comps_Giraff_admin_giraff_details_giraff_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/Giraff-admin/giraff-details/giraff-details.component */ "./src/app/comps/Giraff-admin/giraff-details/giraff-details.component.ts");
/* harmony import */ var _comps_Giraff_admin_giraff_page_giraff_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/Giraff-admin/giraff-page/giraff-page.component */ "./src/app/comps/Giraff-admin/giraff-page/giraff-page.component.ts");
/* harmony import */ var _comps_Giraff_admin_giraff_label_span_giraff_label_span_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/Giraff-admin/giraff-label-span/giraff-label-span.component */ "./src/app/comps/Giraff-admin/giraff-label-span/giraff-label-span.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _comps_Giraff_admin_giraff_item_giraff_item_component__WEBPACK_IMPORTED_MODULE_3__["GiraffItemComponent"],
        _comps_Giraff_admin_giraff_details_giraff_details_component__WEBPACK_IMPORTED_MODULE_4__["GiraffDetailsComponent"],
        _comps_Giraff_admin_giraff_page_giraff_page_component__WEBPACK_IMPORTED_MODULE_5__["GiraffPageComponent"],
        _comps_Giraff_admin_giraff_label_span_giraff_label_span_component__WEBPACK_IMPORTED_MODULE_6__["GiraffLabelspanComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _comps_Giraff_admin_giraff_item_giraff_item_component__WEBPACK_IMPORTED_MODULE_3__["GiraffItemComponent"],
                    _comps_Giraff_admin_giraff_details_giraff_details_component__WEBPACK_IMPORTED_MODULE_4__["GiraffDetailsComponent"],
                    _comps_Giraff_admin_giraff_page_giraff_page_component__WEBPACK_IMPORTED_MODULE_5__["GiraffPageComponent"],
                    _comps_Giraff_admin_giraff_label_span_giraff_label_span_component__WEBPACK_IMPORTED_MODULE_6__["GiraffLabelspanComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_comps_Giraff_admin_giraff_page_giraff_page_component__WEBPACK_IMPORTED_MODULE_5__["GiraffPageComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgPluralCase"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
    _comps_Giraff_admin_giraff_item_giraff_item_component__WEBPACK_IMPORTED_MODULE_3__["GiraffItemComponent"],
    _comps_Giraff_admin_giraff_details_giraff_details_component__WEBPACK_IMPORTED_MODULE_4__["GiraffDetailsComponent"],
    _comps_Giraff_admin_giraff_page_giraff_page_component__WEBPACK_IMPORTED_MODULE_5__["GiraffPageComponent"],
    _comps_Giraff_admin_giraff_label_span_giraff_label_span_component__WEBPACK_IMPORTED_MODULE_6__["GiraffLabelspanComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/comps/Giraff-admin/giraff-details/giraff-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/comps/Giraff-admin/giraff-details/giraff-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GiraffDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiraffDetailsComponent", function() { return GiraffDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _giraff_label_span_giraff_label_span_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../giraff-label-span/giraff-label-span.component */ "./src/app/comps/Giraff-admin/giraff-label-span/giraff-label-span.component.ts");




function GiraffDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label-span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label-span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "label-span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("G-Item" + (ctx_r0.G.isBig ? " bigGiraff" : " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("GId", ctx_r0.G.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.G.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx_r0.G.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx_r0.G.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx_r0.G.id);
} }
class GiraffDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
GiraffDetailsComponent.ɵfac = function GiraffDetailsComponent_Factory(t) { return new (t || GiraffDetailsComponent)(); };
GiraffDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GiraffDetailsComponent, selectors: [["app-giraff-details"]], inputs: { G: "G" }, decls: 3, vars: 1, consts: [[3, "class", 4, "ngIf"], ["label", "height", 3, "val"], ["label", "color", 3, "val"], ["label", "id", 3, "val"]], template: function GiraffDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Giraff details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GiraffDetailsComponent_div_2_Template, 6, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.G);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _giraff_label_span_giraff_label_span_component__WEBPACK_IMPORTED_MODULE_2__["GiraffLabelspanComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL0dpcmFmZi1hZG1pbi9naXJhZmYtZGV0YWlscy9naXJhZmYtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GiraffDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-giraff-details',
                templateUrl: './giraff-details.component.html',
                styleUrls: ['./giraff-details.component.css']
            }]
    }], function () { return []; }, { G: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/comps/Giraff-admin/giraff-item/giraff-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/comps/Giraff-admin/giraff-item/giraff-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: GiraffItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiraffItemComponent", function() { return GiraffItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _giraff_label_span_giraff_label_span_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../giraff-label-span/giraff-label-span.component */ "./src/app/comps/Giraff-admin/giraff-label-span/giraff-label-span.component.ts");



class GiraffItemComponent {
    constructor() {
        //notyfications
        this.clickNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dbclickNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.randomColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    clickNoteFn() {
        // console.log(`${this.clickNote} clickNoteFn for Giraff`);
        this.clickNote.emit();
    }
    deleteNoteFn() {
        this.deleteNote.emit(this.G.id);
    }
    ngOnInit() {
        setTimeout(() => {
            this.randomColor.emit(this.G.color);
        }, 1000 * this.G.id);
        console.log(this.G.color);
    }
}
GiraffItemComponent.ɵfac = function GiraffItemComponent_Factory(t) { return new (t || GiraffItemComponent)(); };
GiraffItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GiraffItemComponent, selectors: [["G-item"]], inputs: { G: "G" }, outputs: { clickNote: "clickNote", dbclickNote: "dbclickNote", deleteNote: "deleteNote", randomColor: "randomColor" }, decls: 8, vars: 7, consts: [[3, "click"], ["label", "height", 3, "val"], ["label", "color", 3, "val"], ["label", "id", 3, "val"]], template: function GiraffItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GiraffItemComponent_Template_div_click_0_listener() { return ctx.clickNoteFn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label-span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label-span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "label-span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GiraffItemComponent_Template_button_click_6_listener() { return ctx.deleteNoteFn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("G-Item" + (ctx.G.isBig ? " bigGiraff" : " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("GId", ctx.G.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.G.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx.G.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx.G.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx.G.id);
    } }, directives: [_giraff_label_span_giraff_label_span_component__WEBPACK_IMPORTED_MODULE_1__["GiraffLabelspanComponent"]], styles: [".G-Item[_ngcontent-%COMP%]{\r\n    padding: 2px;\r\n    border: 1px solid yellowgreen;\r\n    margin: 4px;\r\n\r\n}\r\n.G-Item.bigGiraff[_ngcontent-%COMP%]{\r\n   background-color: cyan;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvR2lyYWZmLWFkbWluL2dpcmFmZi1pdGVtL2dpcmFmZi1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixXQUFXOztBQUVmO0FBQ0E7R0FDRyxzQkFBc0I7O0FBRXpCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvR2lyYWZmLWFkbWluL2dpcmFmZi1pdGVtL2dpcmFmZi1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLkctSXRlbXtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvd2dyZWVuO1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcblxyXG59XHJcbi5HLUl0ZW0uYmlnR2lyYWZme1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GiraffItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'G-item',
                templateUrl: './giraff-item.component.html',
                styleUrls: ['./giraff-item.component.css']
            }]
    }], function () { return []; }, { G: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickNote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dbclickNote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteNote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], randomColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/comps/Giraff-admin/giraff-label-span/giraff-label-span.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/comps/Giraff-admin/giraff-label-span/giraff-label-span.component.ts ***!
  \*************************************************************************************/
/*! exports provided: GiraffLabelspanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiraffLabelspanComponent", function() { return GiraffLabelspanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GiraffLabelspanComponent {
    constructor() {
        this.label = '';
        this.val = '';
    }
    ngOnInit() {
    }
}
GiraffLabelspanComponent.ɵfac = function GiraffLabelspanComponent_Factory(t) { return new (t || GiraffLabelspanComponent)(); };
GiraffLabelspanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GiraffLabelspanComponent, selectors: [["label-span"]], inputs: { label: "label", val: "val" }, decls: 5, vars: 2, template: function GiraffLabelspanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.val);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL0dpcmFmZi1hZG1pbi9naXJhZmYtbGFiZWwtc3Bhbi9naXJhZmYtbGFiZWwtc3Bhbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GiraffLabelspanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'label-span',
                templateUrl: './giraff-label-span.component.html',
                styleUrls: ['./giraff-label-span.component.css']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], val: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/comps/Giraff-admin/giraff-page/giraff-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/comps/Giraff-admin/giraff-page/giraff-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: GiraffPageComponent, Giraff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiraffPageComponent", function() { return GiraffPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Giraff", function() { return Giraff; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


function GiraffPageComponent_G_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "G-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickNote", function GiraffPageComponent_G_item_4_Template_G_item_clickNote_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const Giraff_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selctedG = Giraff_r1; })("deleteNote", function GiraffPageComponent_G_item_4_Template_G_item_deleteNote_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteGiraff($event); })("randomColor", function GiraffPageComponent_G_item_4_Template_G_item_randomColor_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.bgRnd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Giraff_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("G", Giraff_r1);
} }
class GiraffPageComponent {
    constructor() {
        this.GiraffsArry = [
            { id: 1, name: 'Soly', height: 17.2, color: 'brown', isBig: true },
            { id: 2, name: 'Roly', height: 8.2, color: 'black', isBig: false },
            { id: 3, name: 'Toly', height: 7.2, color: 'red', isBig: false },
            { id: 4, name: 'Koly', height: 1.2, color: 'green', isBig: false },
            { id: 5, name: 'Moly', height: 15.2, color: 'orange', isBig: true },
            { id: 6, name: 'Boly', height: 3.2, color: 'pink', isBig: false },
            { id: 7, name: 'Coly', height: 7.2, color: 'purple', isBig: false },
            { id: 8, name: 'Voly', height: 17.2, color: 'indigo', isBig: true },
            { id: 9, name: 'Loly', height: 5.5, color: 'violet', isBig: false },
            { id: 10, name: 'Poly', height: 9.5, color: 'levender', isBig: false }
        ];
    }
    deleteGiraff(GId) {
        for (let index = 0; index < this.GiraffsArry.length; index++) {
            if (GId == this.GiraffsArry[index].id) {
                this.GiraffsArry.splice(index, 1);
                this.selctedG = null;
            }
        }
    }
    ngOnInit() {
    }
}
GiraffPageComponent.ɵfac = function GiraffPageComponent_Factory(t) { return new (t || GiraffPageComponent)(); };
GiraffPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GiraffPageComponent, selectors: [["app-giraff-page"]], decls: 6, vars: 4, consts: [[1, "wrap"], [1, "force-GiraffItem"], ["class", "GiraffItem-as-list", 3, "G", "clickNote", "deleteNote", "randomColor", 4, "ngFor", "ngForOf"], [3, "G"], [1, "GiraffItem-as-list", 3, "G", "clickNote", "deleteNote", "randomColor"]], template: function GiraffPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Weclome To The World Of Giraff Admin !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GiraffPageComponent_G_item_4_Template, 1, 1, "G-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-giraff-details", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.bgRnd, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.GiraffsArry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("G", ctx.selctedG);
    } }, styles: [".wrap[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n\r\n.force-GiraffItem[_ngcontent-%COMP%]{\r\n    display:list-item;\r\n    width: 40vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvR2lyYWZmLWFkbWluL2dpcmFmZi1wYWdlL2dpcmFmZi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL0dpcmFmZi1hZG1pbi9naXJhZmYtcGFnZS9naXJhZmYtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZm9yY2UtR2lyYWZmSXRlbXtcclxuICAgIGRpc3BsYXk6bGlzdC1pdGVtO1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GiraffPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-giraff-page',
                templateUrl: './giraff-page.component.html',
                styleUrls: ['./giraff-page.component.css']
            }]
    }], function () { return []; }, null); })();
class Giraff {
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\inputOutput\giraff-IO\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map