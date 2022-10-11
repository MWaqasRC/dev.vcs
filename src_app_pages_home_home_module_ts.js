"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 25245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ 90263);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/footer/footer.component */ 84158);








function HomeComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "E-Sign");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "To make the most of your valuable time, a smart way to get the documents signed digitally. Now you don\u2019t have to wait day long. It\u2019s handy and efficient.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Create Contract ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
function HomeComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "To keep you going and achieve your goals, you can make free video calls and presentations to prospect clients, now you can interact effectively and efficiently.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Create Meeting ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
function HomeComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "POS Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "The hassle-free approach is here to effectively answer the financial queries and cater the needs of prospect client. Prepare and demonstrate the illustrations to close the deal.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 37)(9, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Conventional ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Takaful ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r2.production ? "https://alpos.adamjeelife.com/POS_DIGITAL_C" : "http://192.168.2.24/POS_DEMODBC", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r2.production ? "https://alpos.adamjeelife.com/POS_DIGITAL_T" : "#", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
class HomeComponent {
    constructor(document, router, authFackservice) {
        this.document = document;
        this.router = router;
        this.authFackservice = authFackservice;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : '';
        this.userName = (user && user.UserName) ? user.UserName : '';
    }
    ngOnInit() {
        this.element = document.documentElement;
        this.production = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production;
    }
    getRights(num) {
        let arr = this.currentUser.AUA_Code.split(',');
        return arr.includes(num);
    }
    logout() {
        // if (environment.defaultauth === 'firebase') {
        //    this.authService.logout();
        // } else {
        this.authFackservice.logout();
        // }
        this.router.navigate(['/account/login']);
    }
    /**
     * Fullscreen method
     */
    fullscreen() {
        document.body.classList.toggle('fullscreen-enable');
        if (!document.fullscreenElement && !this.element.mozFullScreenElement &&
            !this.element.webkitFullscreenElement) {
            if (this.element.requestFullscreen) {
                this.element.requestFullscreen();
            }
            else if (this.element.mozRequestFullScreen) {
                /* Firefox */
                this.element.mozRequestFullScreen();
            }
            else if (this.element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.element.webkitRequestFullscreen();
            }
            else if (this.element.msRequestFullscreen) {
                /* IE/Edge */
                this.element.msRequestFullscreen();
            }
        }
        else {
            if (this.document.exitFullscreen) {
                this.document.exitFullscreen();
            }
            else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
            }
            else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
            }
            else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
            }
        }
    }
    pos() {
        window.open('http://192.168.2.24/testposlive');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 35, vars: 5, consts: [["id", "layout-wrapper"], ["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex", "align-items-center"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo"], [1, "logo-sm"], ["src", "assets/images/logo-con.png", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/images/logo-con.png", "alt", "", "height", "60"], [1, "logo-lg", 2, "margin-right", "0.5rem"], ["src", "assets/images/logo-light.png", "alt", "", "width", "48"], [1, "mb-0", "brand"], [1, "d-flex"], [1, "dropdown", "d-none", "d-lg-inline-block", "ms-1"], ["type", "button", "data-toggle", "fullscreen", 1, "btn", "header-item", "noti-icon", 3, "click"], [1, "bx", "bx-fullscreen"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block"], ["type", "button", "ngbDropdownToggle", "", "id", "page-header-user-dropdown", 1, "btn", "header-item"], ["src", "assets/images/users/default.jpg", "alt", "Header Avatar", 1, "rounded-circle", "header-profile-user"], [1, "d-none", "d-xl-inline-block", "ms-1"], [1, "mdi", "mdi-chevron-down", "d-none", "d-xl-inline-block"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bx", "bx-power-off", "font-size-16", "align-middle", "me-1", "text-danger"], [1, "page-content", "container"], [1, "row"], ["class", "col-md-4", 4, "ngIf"], [1, "col-md-4"], [1, "card"], [1, "card-body", "text-center"], [1, "mdi", "mdi-signature-freehand", "title-ico-blue"], [1, "my-2", "title"], ["routerLink", "contract", 1, "btn", "btn-success", "w-md", "btn-rounded", "my-4"], ["src", "assets/images/meeting-img.png", "alt", "", "height", "93px", 2, "margin", "18px"], ["routerLink", "meeting", 1, "btn", "btn-primary", "w-md", "btn-rounded", "my-4"], ["src", "assets/images/illustration-img.png", "alt", "", "height", "93px", 2, "margin", "18px"], [1, "btn-group", "my-4"], ["target", "_blank", 1, "btn", "btn-primary", "btn-rounded", 2, "width", "113px", 3, "href"], ["target", "_blank", 1, "btn", "btn-success", "btn-rounded", 2, "width", "113px", 3, "href"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "header", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "a", 5)(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Digital Insurance Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13)(16, "div", 14)(17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_17_listener() { return ctx.fullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 17)(20, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 22)(26, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_26_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 25)(30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, HomeComponent_div_31_Template, 10, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, HomeComponent_div_32_Template, 10, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, HomeComponent_div_33_Template, 13, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", "Logout", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.getRights("E"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.getRights("M"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.getRights("L"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".title[_ngcontent-%COMP%] {\n  font-family: \"Cuprum\", sans-serif;\n}\n\n.title-ico-blue[_ngcontent-%COMP%] {\n  color: #0679bb;\n  font-size: 84px;\n}\n\n.title-ico-green[_ngcontent-%COMP%] {\n  color: #089870;\n  font-size: 84px;\n}\n\n.page-content[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n}\n\n  app-footer .footer {\n  left: 0 !important;\n}\n\n.navbar-brand-box[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRyxpQ0FBQTtBQVZIOztBQWNBO0VBQ0csY0FBQTtFQUNBLGVBQUE7QUFYSDs7QUFjQTtFQUNHLGNBQUE7RUFDQSxlQUFBO0FBWEg7O0FBY0E7RUFDRyxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBWEg7O0FBZUc7RUFDRyxrQkFBQTtBQVpOOztBQWdCQTtFQUNHLGtDQUFBO0FBYkgiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jYXJkIHtcclxuLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4vLyBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDEgMTE5IDE4OSAvIDUwJSksIHJnYigxMiAxNTMgMTE1IC8gNzUlKSk7XHJcbi8vIH1cclxuXHJcbi8vIC5jYXJkLWJvZHkge1xyXG4vLyAgICAgaDMge1xyXG4vLyAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4udGl0bGUge1xyXG4gICBmb250LWZhbWlseTogXCJDdXBydW1cIiwgc2Fucy1zZXJpZjtcclxuICAgLy8gZm9udC1mYW1pbHk6IFwiWWVzdGVyeWVhclwiLCBjdXJzaXZlO1xyXG59XHJcblxyXG4udGl0bGUtaWNvLWJsdWUge1xyXG4gICBjb2xvcjogIzA2NzliYjtcclxuICAgZm9udC1zaXplOiA4NHB4O1xyXG59XHJcblxyXG4udGl0bGUtaWNvLWdyZWVuIHtcclxuICAgY29sb3I6ICMwODk4NzA7XHJcbiAgIGZvbnQtc2l6ZTogODRweDtcclxufVxyXG5cclxuLnBhZ2UtY29udGVudCB7XHJcbiAgIGhlaWdodDogMTAwdmg7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBhcHAtZm9vdGVyIHtcclxuICAgLmZvb3RlciB7XHJcbiAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kLWJveCB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 57994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 25245);
/* harmony import */ var src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layouts/layouts.module */ 52372);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    // { path: '', redirectTo: 'contract', pathMatch: 'full' },
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }
];
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__.LayoutsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__.LayoutsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map