"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_meeting_meeting_module_ts"],{

/***/ 52277:
/*!******************************************************************!*\
  !*** ./src/app/pages/meeting-create/meeting-create.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingCreateComponent": () => (/* binding */ MeetingCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/api.service */ 55384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);







function MeetingCreateComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Meeting TOPIC is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MeetingCreateComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MeetingCreateComponent_div_19_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.meetingForm.controls.TOPIC.errors.required);
} }
function MeetingCreateComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Meeting date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MeetingCreateComponent_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Select time current or above ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MeetingCreateComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MeetingCreateComponent_div_29_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MeetingCreateComponent_div_29_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.meetingForm.controls.MEETING_DATE.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.meetingForm.controls.MEETING_DATE.errors.invalidDate);
} }
function MeetingCreateComponent_tr_49_div_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "First Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MeetingCreateComponent_tr_49_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MeetingCreateComponent_tr_49_div_3_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", group_r9.controls.FIRST_NAME.errors.required);
} }
function MeetingCreateComponent_tr_49_div_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Last Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MeetingCreateComponent_tr_49_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MeetingCreateComponent_tr_49_div_6_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", group_r9.controls.LAST_NAME.errors.required);
} }
function MeetingCreateComponent_tr_49_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is not valid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MeetingCreateComponent_tr_49_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MeetingCreateComponent_tr_49_div_9_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", group_r9.controls.EMAIL.errors.pattern);
} }
function MeetingCreateComponent_tr_49_div_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MeetingCreateComponent_tr_49_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MeetingCreateComponent_tr_49_div_12_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", group_r9.controls.PHONE.errors.required);
} }
function MeetingCreateComponent_tr_49_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MeetingCreateComponent_tr_49_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.deleteRow(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function MeetingCreateComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 33)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MeetingCreateComponent_tr_49_div_3_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MeetingCreateComponent_tr_49_div_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MeetingCreateComponent_tr_49_div_9_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MeetingCreateComponent_tr_49_div_12_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MeetingCreateComponent_tr_49_a_14_Template, 2, 0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const group_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx_r3.submitted && group_r9.controls.FIRST_NAME.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.submitted && group_r9.controls.FIRST_NAME.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx_r3.submitted && group_r9.controls.LAST_NAME.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.submitted && group_r9.controls.LAST_NAME.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx_r3.submitted && group_r9.controls.EMAIL.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.submitted && group_r9.controls.EMAIL.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ctx_r3.submitted && group_r9.controls.PHONE.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.submitted && group_r9.controls.PHONE.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.getFormControls.controls.length > 1);
} }
function MeetingCreateComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function MeetingCreateComponent_i_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 41);
} }
class MeetingCreateComponent {
    //   @ViewChild('dateTimePiker') dateTimePiker: ElementRef;
    constructor(formBuilder, _apiService, router, datepipe) {
        this.formBuilder = formBuilder;
        this._apiService = _apiService;
        this.router = router;
        this.datepipe = datepipe;
        this.submitted = false;
        this.isLoading = false;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DDThh:mm');
    }
    ngOnInit() {
        this.meetingForm = this.formBuilder.group({
            TOPIC: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            REF_NO: [''],
            MEETING_DATE: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, dateValidator()] }],
            // MEETING_DATE2: ['', [Validators.required]],
            MeetingRecipient: this.formBuilder.array([])
        });
        this.addRow();
    }
    ngAfterViewInit() {
        // let formControl = this.meetingForm;
        this.control = this.meetingForm.get('MeetingRecipient');
        //   new AirDatepicker(this.dateTimePiker.nativeElement, {
        //      timepicker: true,
        //      timeFormat: 'hh:mm AA',
        //      locale: localeEn,
        //      onSelect({ date, formattedDate }) {
        //       //   console.log(formattedDate)
        //       //   console.log(formControl.value.MEETING_DATE2)
        //          // 04/27/2022 05:01 PM
        //          // 2022-04-27T17:02
        //       //   formControl.patchValue({ 'MEETING_DATE': moment(formattedDate, 'MM/DD/YYYY HH:mm').format() })
        //       //   formControl.patchValue({ 'MEETING_DATE': moment(formControl.value.MEETING_DATE).format() })
        //         console.log(moment(formControl.value.MEETING_DATE2, 'YYYY-MM-DD HH:mm').format())
        //         console.log(moment(formControl.value.MEETING_DATE2).toISOString())
        //         console.log(moment(formControl.value.MEETING_DATE2).parseZone().format())
        //         console.log(moment(formControl.value.MEETING_DATE2).local(true).format())
        //         console.log(moment(formControl.value.MEETING_DATE2).parseZone().local(true).format())
        //          console.log(formControl.value.MEETING_DATE)
        //      }
        //   });
    }
    initiateForm() {
        return this.formBuilder.group({
            FIRST_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            LAST_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            PHONE: [''],
            EMAIL: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    addRow() {
        const control = this.meetingForm.get('MeetingRecipient');
        control.push(this.initiateForm());
    }
    deleteRow(index) {
        const control = this.meetingForm.get('MeetingRecipient');
        control.removeAt(index);
    }
    editRow(group) {
        group.get('isEditable').setValue(true);
    }
    doneRow(group) {
        group.get('isEditable').setValue(false);
    }
    get getFormControls() {
        const control = this.meetingForm.get('MeetingRecipient');
        return control;
    }
    submitForm() {
        this.submitted = true;
        this.isLoading = true;
        console.log(this.meetingForm.value);
        if (!this.meetingForm.valid) {
            this.isLoading = false;
            return;
        }
        this.meetingForm.patchValue({ 'MEETING_DATE': moment__WEBPACK_IMPORTED_MODULE_0__(this.meetingForm.value.MEETING_DATE).format() });
        // const control = this.meetingForm.get('MeetingRecipient') as FormArray;
        // this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
        // console.log(this.touchedRows);
        // let date = this.datepipe.transform(this.meetingForm.value.MEETING_DATE, 'dd/MM/yyyy');
        this._apiService.post('InserVCSMeeting', this.meetingForm.value).subscribe(res => {
            this.isLoading = false;
            this.router.navigate(['/meeting']);
        }, err => {
            this.isLoading = false;
        });
    }
}
MeetingCreateComponent.ɵfac = function MeetingCreateComponent_Factory(t) { return new (t || MeetingCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe)); };
MeetingCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MeetingCreateComponent, selectors: [["app-meeting-create"]], decls: 54, vars: 14, consts: [[1, "container-fluid"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between", "pb-0", 2, "margin-top", "-20px"], [1, "d-flex", "align-items-center"], ["routerLink", "/meeting", "type", "button", 1, "btn", "btn-bck"], [1, "bx", "bx-chevron-left"], [1, "mb-0", "font-size-18"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup", "ngSubmit"], [1, "col-5", "mb-3"], [1, "control-label"], ["type", "text", "formControlName", "TOPIC", "placeholder", "Topic", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-3", "mb-3"], ["type", "text", "formControlName", "REF_NO", "placeholder", "Ref #", 1, "form-control"], [1, "col-4", "mb-3"], ["type", "datetime-local", "id", "dateTime", "formControlName", "MEETING_DATE", "placeholder", "Date", 1, "form-control", 3, "ngClass", "min"], ["dateTimePiker", ""], [1, "d-flex", "justify-content-between", "align-items-center", "pt-4", "pb-2"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "table-responsive"], [1, "table", "table-borderless", "mb-0"], ["formArrayName", "MeetingRecipient"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-wrap", "gap-2", "justify-content-end", "mt-2"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary"], [4, "ngIf"], ["class", "bx bx-loader bx-spin font-size-16 align-middle me-2", 4, "ngIf"], [1, "invalid-feedback"], [3, "formGroupName"], ["placeholder", "First Name", "type", "text", "formControlName", "FIRST_NAME", 1, "form-control", 3, "ngClass"], ["placeholder", "Last Name", "type", "text", "formControlName", "LAST_NAME", 1, "form-control", 3, "ngClass"], ["placeholder", "Email", "type", "EMAIL", "formControlName", "EMAIL", 1, "form-control", 3, "ngClass"], ["mask", "0000-0000000", "placeholder", "03XX-XXXXXXX", "type", "tel", "formControlName", "PHONE", 1, "form-control", 3, "ngClass"], ["style", "cursor: pointer;", "data-placement", "bottom", "title", "Delete", 3, "routerLink", "click", 4, "ngIf"], ["data-placement", "bottom", "title", "Delete", 2, "cursor", "pointer", 3, "routerLink", "click"], [1, "mdi", "mdi-delete-circle", "text-danger", "bx-sm"], [1, "bx", "bx-loader", "bx-spin", "font-size-16", "align-middle", "me-2"]], template: function MeetingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Fill out the following information!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function MeetingCreateComponent_Template_form_ngSubmit_13_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6)(15, "div", 12)(16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, MeetingCreateComponent_div_19_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16)(21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Ref #");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 18)(25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Meeting Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, MeetingCreateComponent_div_29_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 21)(31, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Recipients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MeetingCreateComponent_Template_button_click_33_listener() { return ctx.addRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Add Recipient ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div")(36, "div", 24)(37, "table", 25)(38, "thead")(39, "tr")(40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "tbody", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, MeetingCreateComponent_tr_49_Template, 15, 18, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 28)(51, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, MeetingCreateComponent_ng_container_52_Template, 2, 0, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, MeetingCreateComponent_i_53_Template, 1, 0, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Create New Meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.meetingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.meetingForm.controls.TOPIC.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.meetingForm.controls.TOPIC.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.meetingForm.controls.MEETING_DATE.errors))("min", ctx.minDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.meetingForm.controls.MEETING_DATE.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getFormControls.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".btn-bck[_ngcontent-%COMP%] {\n  line-height: 1;\n  border: 0;\n  box-shadow: none;\n  font-size: 34px;\n}\n\n.recipients-div[_ngcontent-%COMP%] {\n  border: 1px dashed #bcbcbc;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.recipients-title[_ngcontent-%COMP%] {\n  border: 1px dashed #bcbcbc;\n  border-radius: 5px;\n  padding: 2px 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-top: -25px;\n  margin-bottom: 0;\n  background: #eff2f7;\n}\n\ninput.form-control[type=datetime-local][_ngcontent-%COMP%] {\n  position: relative;\n}\n\ninput.form-control[type=datetime-local][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  color: transparent;\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSDs7QUFFQTtFQUNHLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0g7O0FBRUE7RUFDRywwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSDs7QUFFQTtFQUNHLGtCQUFBO0FBQ0g7O0FBRUE7RUFDRyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNIIiwiZmlsZSI6Im1lZXRpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1iY2sge1xyXG4gICBsaW5lLWhlaWdodDogMTtcclxuICAgYm9yZGVyOiAwO1xyXG4gICBib3gtc2hhZG93OiBub25lO1xyXG4gICBmb250LXNpemU6IDM0cHg7XHJcbn1cclxuXHJcbi5yZWNpcGllbnRzLWRpdiB7XHJcbiAgIGJvcmRlcjogMXB4IGRhc2hlZCAjYmNiY2JjO1xyXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5yZWNpcGllbnRzLXRpdGxlIHtcclxuICAgYm9yZGVyOiAxcHggZGFzaGVkICNiY2JjYmM7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgYmFja2dyb3VuZDogI2VmZjJmNztcclxufVxyXG5cclxuaW5wdXQuZm9ybS1jb250cm9sW3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXSB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaW5wdXQuZm9ybS1jb250cm9sW3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICB0b3A6IDA7XHJcbiAgIHJpZ2h0OiAwO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBwYWRkaW5nOiAwO1xyXG4gICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"] });
function dateValidator() {
    return (control) => {
        const value = control.value;
        const date = moment__WEBPACK_IMPORTED_MODULE_0__(value).add(1, 'm').isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_0__());
        return date ? { invalidDate: { value: control.value } } : null;
    };
}


/***/ }),

/***/ 49284:
/*!**************************************************************!*\
  !*** ./src/app/pages/meeting-list/meeting-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingListComponent": () => (/* binding */ MeetingListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meeting_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meeting-sortable.directive */ 75997);
/* harmony import */ var _meeting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meeting.service */ 27156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ 55384);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);













function MeetingListComponent_tbody_35_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const table_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbTooltip", "Upcoming Meeting: " + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, table_r3.NXTMTNG_DT, "medium"));
} }
const _c0 = function (a1) { return ["../meet", a1]; };
function MeetingListComponent_tbody_35_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Join Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, table_r3.URL));
} }
const _c1 = function (a0) { return { "text-success": a0 }; };
function MeetingListComponent_tbody_35_ngb_highlight_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngb-highlight", 46);
} if (rf & 2) {
    const table_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", ctx_r7.getSchedule(table_r3) > 0 ? "Meeting in " + ctx_r7.getSchedule(table_r3) + " day(s)  " : "--")("term", ctx_r7.service.searchTerm)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r7.getSchedule(table_r3) > 0));
} }
function MeetingListComponent_tbody_35_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MeetingListComponent_tbody_35_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.changeValue(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Show details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MeetingListComponent_tbody_35_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MeetingListComponent_tbody_35_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.changeValue(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Hide details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MeetingListComponent_tbody_35_tr_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 55)(1, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Next Meeting:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const table_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 1, table_r3.NXTMTNG_DT, "medium"));
} }
function MeetingListComponent_tbody_35_tr_19_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.FIRST_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.LAST_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.PHONE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.EMAIL);
} }
function MeetingListComponent_tbody_35_tr_19_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "caption", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const table_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](table_r3.NOTES || "--");
} }
function MeetingListComponent_tbody_35_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 48)(2, "div", 49)(3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MeetingListComponent_tbody_35_tr_19_div_4_Template, 6, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "caption", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "List of Recipients");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "table", 53)(8, "thead", 54)(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, MeetingListComponent_tbody_35_tr_19_tr_19_Template, 9, 4, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, MeetingListComponent_tbody_35_tr_19_div_20_Template, 5, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const table_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", table_r3.NXTMTNG_DT);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", table_r3.MeetingRecipient);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", table_r3.NOTES);
} }
const _c2 = function (a0, a1, a2) { return { "bg-success": a0, "bg-warning": a1, "bg-danger": a2 }; };
function MeetingListComponent_tbody_35_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ngb-highlight", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ngb-highlight", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ngb-highlight", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ngb-highlight", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MeetingListComponent_tbody_35_i_11_Template, 2, 4, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MeetingListComponent_tbody_35_a_13_Template, 2, 3, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, MeetingListComponent_tbody_35_ngb_highlight_14_Template, 1, 5, "ngb-highlight", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 40)(16, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MeetingListComponent_tbody_35_Template_i_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const table_r3 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](46); return ctx_r28.editMeeting(_r1, table_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, MeetingListComponent_tbody_35_a_17_Template, 2, 0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, MeetingListComponent_tbody_35_a_18_Template, 2, 0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, MeetingListComponent_tbody_35_tr_19_Template, 21, 3, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", table_r3.TOPIC)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", table_r3.REF_NO ? table_r3.REF_NO : "--")("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 15, table_r3.MEETING_DATE, "medium"))("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](18, _c2, table_r3.FINISHED_DATE, !table_r3.FINISHED_DATE && ctx_r0.getSchedule(table_r3) >= 0, !table_r3.FINISHED_DATE && ctx_r0.getSchedule(table_r3) < 0))("result", table_r3.FINISHED_DATE ? "Completed" : !table_r3.FINISHED_DATE && ctx_r0.getSchedule(table_r3) >= 0 ? "Pending" : "Expired")("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", table_r3.NXTMTNG_DT);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.getSchedule(table_r3) === 0 && !table_r3.FINISHED_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.getSchedule(table_r3) != 0 || table_r3.FINISHED_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.service.hideme[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.service.hideme[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.service.hideme[i_r4]);
} }
function MeetingListComponent_ng_template_45_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Meeting date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MeetingListComponent_ng_template_45_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Select time current or above ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MeetingListComponent_ng_template_45_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MeetingListComponent_ng_template_45_div_12_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MeetingListComponent_ng_template_45_div_12_div_2_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r32.submitted && ctx_r32.editMeetingForm.controls.NXTMTNG_DT.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r32.submitted && ctx_r32.editMeetingForm.controls.NXTMTNG_DT.errors.invalidDate);
} }
function MeetingListComponent_ng_template_45_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function MeetingListComponent_ng_template_45_i_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 75);
} }
const _c3 = function (a0) { return { "is-invalid": a0 }; };
function MeetingListComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60)(1, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Edit Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MeetingListComponent_ng_template_45_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const modal_r30 = restoredCtx.$implicit; return modal_r30.dismiss("corss click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 63)(5, "form", 64)(6, "div", 1)(7, "div", 2)(8, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Next Meeting Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MeetingListComponent_ng_template_45_div_12_Template, 3, 2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 69)(14, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "textarea", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 71)(18, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MeetingListComponent_ng_template_45_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const modal_r30 = restoredCtx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r39.submitMeeting(modal_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, MeetingListComponent_ng_template_45_ng_container_19_Template, 2, 0, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, MeetingListComponent_ng_template_45_i_20_Template, 1, 0, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r2.editMeetingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c3, ctx_r2.submitted && ctx_r2.editMeetingForm.controls.NXTMTNG_DT.errors))("min", ctx_r2.minDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.editMeetingForm.controls.NXTMTNG_DT.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
} }
class MeetingListComponent {
    constructor(service, formBuilder, _apiService, modalService) {
        this.service = service;
        this.formBuilder = formBuilder;
        this._apiService = _apiService;
        this.modalService = modalService;
        this.submitted = false;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DDThh:mm');
        this.meeting$ = service.meeting$;
        this.total$ = service.total$;
    }
    ngOnInit() {
        // this.onSort({ column: 'MEETING_ID', direction: 'asc' })
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    changeValue(i) {
        this.service.hideme[i] = !this.service.hideme[i];
    }
    getSchedule(table) {
        // let date = table.MEETING_DATE
        // if (table.FINISHED_DATE && table.NXTMTNG_DT) {
        //   date = table.NXTMTNG_DT
        // }
        let meeting_date = new Date(table.MEETING_DATE);
        let today = new Date();
        let Difference_In_Time = meeting_date.getTime() - today.getTime();
        let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
        return Difference_In_Days;
        //   expiry_date.setDate(expiry_date.getDate() + table.EXPIRY_DAYS);
        //   const current_date = new Date();
        //   let Difference_In_Time = expiry_date.getTime() - current_date.getTime();
        //   let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
        //   return (Difference_In_Days < 1 ? 0 : Difference_In_Days);
    }
    removeMinusSign(num) {
        return Math.abs(num);
    }
    editMeeting(content, data) {
        this.editMeetingForm = this.formBuilder.group({
            MEETING_ID: [data.MEETING_ID],
            NXTMTNG_DT: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, dateValidator()] }],
            NOTES: ['']
        });
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
        });
    }
    submitMeeting(modal) {
        this.submitted = true;
        this.isLoading = true;
        console.log(this.editMeetingForm.value);
        if (!this.editMeetingForm.valid) {
            this.isLoading = false;
            return;
        }
        this.editMeetingForm.patchValue({ 'NXTMTNG_DT': moment__WEBPACK_IMPORTED_MODULE_0__(this.editMeetingForm.value.NXTMTNG_DT).format() });
        this._apiService.put('updateNextVCSMeeting', this.editMeetingForm.value).subscribe(res => {
            this.isLoading = false;
            this.service.getMeeting();
            modal.close('success');
        }, err => {
            this.isLoading = false;
        });
    }
}
MeetingListComponent.ɵfac = function MeetingListComponent_Factory(t) { return new (t || MeetingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_meeting_service__WEBPACK_IMPORTED_MODULE_2__.MeetingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal)); };
MeetingListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MeetingListComponent, selectors: [["app-meeting-list"]], viewQuery: function MeetingListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_meeting_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.MeetingSortableService, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_meeting_service__WEBPACK_IMPORTED_MODULE_2__.MeetingService, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe])], decls: 47, vars: 12, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "card", "m-0"], [1, "card-body", "pb-0"], [1, "row", "mb-md-2"], [1, "col-sm-12", "col-md-6"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "name", "searchTerm", "aria-controls", "tickets-table", "placeholder", "Search...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "bx", "bx-search-alt", "search-icon"], [1, "col-sm-12", "col-md-6", "text-md-end"], ["routerLink", "create", 1, "btn", "btn-primary", "w-md", "btn-rounded", "mb-2", "mr-2"], [2, "height", "calc(100vh - 327px)", "overflow-y", "auto"], ["id", "basic-datatable", 1, "table", "dt-responsive", "nowrap"], [1, "table-light"], ["sortable", "TOPIC", 2, "padding", "0.50rem 0.75rem", 3, "sort"], ["sortable", "REF_NO", 2, "padding", "0.50rem 0.75rem", 3, "sort"], ["sortable", "MEETING_DATE", 2, "padding", "0.50rem 0.75rem", 3, "sort"], ["sortable", "STATUS", 2, "padding", "0.50rem 0.75rem", 3, "sort"], [2, "padding", "0.50rem 0.75rem"], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-md-between", "align-items-md-center", "mt-2"], [1, "col-sm-12", "col-md-5", "mb-4"], ["id", "tickets-table_info", "role", "status", "aria-live", "polite", 1, "dataTables_info"], [1, "col-sm-12", "col-md-5"], [1, "text-md-right", "float-md-end", "pagination-rounded"], [1, "pagination", 3, "collectionSize", "page", "pageSize", "pageChange"], ["content", ""], [2, "padding", "0.40rem 0.75rem 0.40rem 0.75rem"], [3, "result", "term"], [2, "padding", "0.40rem 0.75rem 0.40rem 0.75rem", "display", "flex", "align-items", "center", "position", "relative"], [1, "badge", "font-size-12", "bg-primary", 3, "ngClass", "result", "term"], ["placement", "top", "container", "body", "class", "mdi mdi-calendar-clock text-warning font-size-20", "style", "position: absolute; right: 10px;", 3, "ngbTooltip", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], [3, "result", "term", "ngClass", 4, "ngIf"], ["align", "right", 2, "padding", "0.40rem 0.75rem 0.40rem 0.75rem", "position", "relative"], [1, "mdi", "mdi-calendar-edit", "text-warning", 3, "click"], ["style", "cursor: pointer; margin-right: 25px;", "class", "font-size-11", 3, "click", 4, "ngIf"], [4, "ngIf"], ["placement", "top", "container", "body", 1, "mdi", "mdi-calendar-clock", "text-warning", "font-size-20", 2, "position", "absolute", "right", "10px", 3, "ngbTooltip"], [3, "routerLink"], [3, "result", "term", "ngClass"], [1, "font-size-11", 2, "cursor", "pointer", "margin-right", "25px", 3, "click"], ["colspan", "6"], [1, "card", 2, "border-radius", "0.5rem !important", "background", "#eff2f7bf"], [1, "card-body"], ["class", "badge-soft-success mtng_date", 4, "ngIf"], [1, "pt-0", 2, "width", "max-content"], [1, "table", "table-sm", "mb-0"], [2, "z-index", "0"], [1, "badge-soft-success", "mtng_date"], [1, "font-size-12", 2, "color", "#152f3c"], [1, "font-size-14"], [2, "width", "max-content", "padding-bottom", "0"], [2, "font-weight", "500"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "control-label"], ["type", "datetime-local", "id", "dateTime", "formControlName", "NXTMTNG_DT", "placeholder", "Date", 1, "form-control", 3, "ngClass", "min"], ["dateTimePiker", ""], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-12", "mt-3"], ["type", "text", "formControlName", "NOTES", "placeholder", "Enter your notes here...", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["class", "bx bx-loader bx-spin font-size-16 align-middle me-2", 4, "ngIf"], [1, "invalid-feedback"], [1, "bx", "bx-loader", "bx-spin", "font-size-16", "align-middle", "me-2"]], template: function MeetingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "My Meetings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MeetingListComponent_Template_input_ngModelChange_15_listener($event) { return ctx.service.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 15)(18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Create Meeting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 17)(21, "table", 18)(22, "thead", 19)(23, "tr")(24, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function MeetingListComponent_Template_th_sort_24_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function MeetingListComponent_Template_th_sort_26_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Ref #");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function MeetingListComponent_Template_th_sort_28_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Meeting date & time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function MeetingListComponent_Template_th_sort_30_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Schedule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, MeetingListComponent_tbody_35_Template, 20, 22, "tbody", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 26)(38, "div", 27)(39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 29)(42, "div", 30)(43, "ngb-pagination", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function MeetingListComponent_Template_ngb_pagination_pageChange_43_listener($event) { return ctx.service.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](44, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, MeetingListComponent_ng_template_45_Template, 21, 8, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 8, ctx.meeting$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Showing ", ctx.service.startIndex + 1, " to ", ctx.service.endIndex, " of ", ctx.service.totalRecords, " entries ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](44, 10, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _meeting_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.MeetingSortableService, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbHighlight, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPagination, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".expand-row[_ngcontent-%COMP%] {\n  width: 100%;\n  border: solid 1px #596269;\n  display: inline-block;\n  border-radius: 3px;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  vertical-align: top;\n  background: #596269;\n  color: #ffffff !important;\n}\n.expand-row[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.expand-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: top;\n  position: relative;\n  top: 2px;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.mdi-calendar-edit[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 22px;\n  \n  position: absolute;\n  right: 5px;\n  \n  top: 0;\n  bottom: 0;\n  cursor: pointer;\n}\n.mtng_date[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  right: 12px;\n  top: 12px;\n  padding: 10px;\n  border-radius: 0.5rem;\n  font-weight: 500;\n}\n.mtng_date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0g7QUFDRztFQUNHLGVBQUE7QUFDTjtBQUdBO0VBQ0csbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFBSDtBQUlHO0VBQ0csVUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0FBRE47QUFLQTtFQUNHLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFFQSxTQUFBO0VBQ0EsZUFBQTtBQUhIO0FBTUE7RUFDRywwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFISDtBQUtHO0VBQ0csb0JBQUE7QUFITiIsImZpbGUiOiJtZWV0aW5nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5kLXJvdyB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBib3JkZXI6IHNvbGlkIDFweCAjNTk2MjY5O1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgd2lkdGg6IDE2cHg7XHJcbiAgIGhlaWdodDogMTZweDtcclxuICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgIGJhY2tncm91bmQ6ICM1OTYyNjk7XHJcbiAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcblxyXG4gICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICB9XHJcbn1cclxuXHJcbi5leHBhbmQtcm93IGltZyB7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgdG9wOiAycHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgdGhlYWQge1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICB0b3A6IDA7XHJcbiAgIH1cclxufVxyXG5cclxuLm1kaS1jYWxlbmRhci1lZGl0IHtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBmb250LXNpemU6IDIycHg7XHJcbiAgIC8qIG1hcmdpbi1ib3R0b206IC0xNHJlbTsgKi9cclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICByaWdodDogNXB4O1xyXG4gICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgIHRvcDogMDtcclxuICAgLy8gY29sb3I6ICM1NTZlZTY7XHJcbiAgIGJvdHRvbTogMDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubXRuZ19kYXRlIHtcclxuICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHJpZ2h0OiAxMnB4O1xyXG4gICB0b3A6IDEycHg7XHJcbiAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgIHAge1xyXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgfVxyXG59XHJcbiJdfQ== */"] });
function dateValidator() {
    return (control) => {
        const value = control.value;
        const date = moment__WEBPACK_IMPORTED_MODULE_0__(value).add(1, 'm').isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_0__());
        return date ? { invalidDate: { value: control.value } } : null;
    };
}


/***/ }),

/***/ 75997:
/*!******************************************************************!*\
  !*** ./src/app/pages/meeting-list/meeting-sortable.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingSortableService": () => (/* binding */ MeetingSortableService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


const rotate = { asc: 'desc', desc: '', '': 'asc' };
class MeetingSortableService {
    constructor() {
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
}
MeetingSortableService.ɵfac = function MeetingSortableService_Factory(t) { return new (t || MeetingSortableService)(); };
MeetingSortableService.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MeetingSortableService, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function MeetingSortableService_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetingSortableService_click_HostBindingHandler() { return ctx.rotate(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
    } }, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" } });


/***/ }),

/***/ 27156:
/*!*******************************************************!*\
  !*** ./src/app/pages/meeting-list/meeting.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingService": () => (/* binding */ MeetingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/api.service */ 55384);






function compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
function sort(meeting, column, direction) {
    if (direction === '') {
        return meeting;
    }
    else {
        return [...meeting].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(meeting, term, pipe) {
    return meeting.MEETING_ID.toLowerCase().includes(term)
        || meeting.TOPIC.toLowerCase().includes(term.toLowerCase())
        || meeting.REF_NO.toLowerCase().includes(term.toLowerCase())
        || meeting.MEETING_DATE.toLowerCase().includes(term.toLowerCase())
        || meeting.USER_ID.toLowerCase().includes(term);
}
class MeetingService {
    constructor(pipe, _apiService) {
        this.pipe = pipe;
        this._apiService = _apiService;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this._meeting$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: '',
            startIndex: 1,
            endIndex: 10,
            totalRecords: 0
        };
        this.hideme = [];
        this.getMeeting();
        this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(false))).subscribe(result => {
            this._meeting$.next(result.meeting);
            this._total$.next(result.total);
        });
    }
    getMeeting() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this._apiService.get('getVCSMeeting').subscribe(res => {
                this.meetingData = res;
                for (let i = 0; i <= this.meetingData.length; i++) {
                    this.hideme.push(true);
                    // if (i == 2) {
                    //    let date = new Date(this.meetingData[i].CREATED_DATE);
                    //    this.meetingData[i].CREATED_DATE = date.setDate(date.getDate() + 7);
                    // }
                }
                this.meetingData.sort((a, b) => {
                    const res = compare(a.CREATED_DATE, b.CREATED_DATE);
                    return -res;
                });
                this._search$.next();
            });
        });
    }
    get meeting$() { return this._meeting$.asObservable(); }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    get startIndex() { return this._state.startIndex; }
    get endIndex() { return this._state.endIndex; }
    get totalRecords() { return this._state.totalRecords; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set startIndex(startIndex) { this._set({ startIndex }); }
    set endIndex(endIndex) { this._set({ endIndex }); }
    set totalRecords(totalRecords) { this._set({ totalRecords }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        let meeting = sort(this.meetingData, sortColumn, sortDirection);
        meeting = meeting.filter(table => matches(table, searchTerm, this.pipe));
        const total = meeting.length;
        this.totalRecords = meeting.length;
        this._state.startIndex = (page - 1) * this.pageSize;
        this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
        if (this.endIndex > this.totalRecords) {
            this.endIndex = this.totalRecords;
        }
        meeting = meeting.slice(this._state.startIndex, this._state.endIndex);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({ meeting, total });
    }
}
MeetingService.ɵfac = function MeetingService_Factory(t) { return new (t || MeetingService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
MeetingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: MeetingService, factory: MeetingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5083:
/*!*************************************************!*\
  !*** ./src/app/pages/meeting/meeting.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingModule": () => (/* binding */ MeetingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 19694);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var _meeting_list_meeting_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../meeting-list/meeting-list.component */ 49284);
/* harmony import */ var _meeting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meeting.component */ 17873);
/* harmony import */ var _meeting_list_meeting_sortable_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meeting-list/meeting-sortable.directive */ 75997);
/* harmony import */ var _meeting_create_meeting_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../meeting-create/meeting-create.component */ 52277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);












const routes = [
    { path: '', component: _meeting_list_meeting_list_component__WEBPACK_IMPORTED_MODULE_0__.MeetingListComponent },
    { path: 'create', component: _meeting_create_meeting_create_component__WEBPACK_IMPORTED_MODULE_3__.MeetingCreateComponent },
    // { path: ':id', component: MeetingCreateComponent },
];
class MeetingModule {
}
MeetingModule.ɵfac = function MeetingModule_Factory(t) { return new (t || MeetingModule)(); };
MeetingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MeetingModule });
MeetingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTypeaheadModule,
            angular_archwizard__WEBPACK_IMPORTED_MODULE_9__.ArchwizardModule,
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_10__.DropzoneModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MeetingModule, { declarations: [_meeting_list_meeting_list_component__WEBPACK_IMPORTED_MODULE_0__.MeetingListComponent, _meeting_component__WEBPACK_IMPORTED_MODULE_1__.MeetingComponent, _meeting_list_meeting_sortable_directive__WEBPACK_IMPORTED_MODULE_2__.MeetingSortableService, _meeting_create_meeting_create_component__WEBPACK_IMPORTED_MODULE_3__.MeetingCreateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTypeaheadModule,
        angular_archwizard__WEBPACK_IMPORTED_MODULE_9__.ArchwizardModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_10__.DropzoneModule] }); })();


/***/ }),

/***/ 71989:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 96936);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 41944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 93945);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;

    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };

    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();

      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }

      emit();
    }

    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();

      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_meeting_meeting_module_ts.js.map