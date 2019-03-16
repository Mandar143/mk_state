(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar>\n<span>Angular 6 -Mean Stack Application</span>\n\n</mat-toolbar>\n\n\n<div>\n  <router-outlet></router-outlet>\n\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _components_state_state_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/state/state.component */ "./src/app/components/state/state.component.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state.service */ "./src/app/state.service.ts");
/* harmony import */ var _country_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./country.service */ "./src/app/country.service.ts");
/* harmony import */ var _district_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./district.service */ "./src/app/district.service.ts");



//import { AppRoutingModule, Routes } from './app-routing.module';














var routes = [
    { path: 'create', component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"] },
    { path: 'edit/:id', component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"] },
    { path: 'list', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"] },
    { path: 'state', component: _components_state_state_component__WEBPACK_IMPORTED_MODULE_13__["StateComponent"] },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"],
                _components_state_state_component__WEBPACK_IMPORTED_MODULE_13__["StateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                //AppRoutingModule.forRoot(routes),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_issue_service__WEBPACK_IMPORTED_MODULE_12__["IssueService"], _state_service__WEBPACK_IMPORTED_MODULE_14__["StateService"], _country_service__WEBPACK_IMPORTED_MODULE_15__["CountrieService"], _district_service__WEBPACK_IMPORTED_MODULE_16__["DistrictService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n\n  <mat-card>\n    <section class=\"mat-typography\">\n      <h3>Create a new issue</h3>\n    </section>\n    <mat-divider></mat-divider>\n    <br>\n    <form [formGroup]=\"createForm\" class=\"create-form\">\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Issue Title\" formControlName=\"title\" #title>\n      </mat-form-field>\n\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Responsible\" formControlName=\"responsible\" #responsible>\n      </mat-form-field>\n\n      <mat-form-field class=\"field-full-width\">\n        <textarea matInput placeholder=\"Description\" formControlName=\"description\" #description>\n          </textarea>\n      </mat-form-field>\n\n      <mat-form-field class=\"field-full-width\">\n        <mat-select placeholder=\"Severity\" formControlName=\"severity\" #severity>\n         <mat-option value=\"Low\">Low</mat-option> \n         <mat-option value=\"Medium\">Medium</mat-option>\n         <mat-option value=\"High\">High</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"field-full-width\">\n  \n    <mat-select placeholder=\"State\" formControlName=\"stateid\" (ngModelChange)='onChangeStatenew($event)' >\n         <mat-option class='mat-option' *ngFor='let state of states' [value]=\"state.stateid\">{{state.statename}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"field-full-width\">\n        <mat-select placeholder=\"District\" formControlName=\"distId\" >\n         <mat-option class='mat-option' *ngFor='let district of districts' [value]=\"district.id\">{{district.distName}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      \n      <br><br>\n      <button mat-raised-button color=\"ascent\" routerLink=\"/list\">Back</button>\n       <button type=\"submit\" (click)=\"addIssue(title.value, responsible.value, description.value, severity.value)\"[disabled]=\"createForm.pristine || createForm.invalid\" mat-raised-button color=\"primary\">Save</button>\n\n    </form>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _district_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../district.service */ "./src/app/district.service.ts");







var CreateComponent = /** @class */ (function () {
    function CreateComponent(issueService, stateService, districtService, fb, router) {
        this.issueService = issueService;
        this.stateService = stateService;
        this.districtService = districtService;
        this.fb = fb;
        this.router = router;
        this.createForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            responsible: '',
            description: '',
            severity: '',
            stateid: '',
            distId: ''
        });
    }
    CreateComponent.prototype.fetchStates = function () {
        var _this = this;
        this.stateService
            .getState()
            .subscribe(function (data) {
            _this.states = data;
            // console.log('data requested!!!');
            console.log(_this.states);
        });
    };
    CreateComponent.prototype.onChangeState = function () {
        var _this = this;
        this.districtService
            .getDistrict()
            .subscribe(function (data) {
            _this.district = data;
            console.log(_this.district);
        });
    };
    CreateComponent.prototype.onChangeStatenew = function (stateId) {
        var _this = this;
        this.districtService
            .getDistrictsfill(stateId)
            .subscribe(function (data) {
            _this.district = data;
            console.log(_this.district);
        });
    };
    //onChangeState(stateId: number) {
    //  console.log(this.states);
    //}
    CreateComponent.prototype.addIssue = function (title, responsible, description, severity) {
        var _this = this;
        this.issueService.addIssue(title, responsible, description, severity).subscribe(function () {
            _this.router.navigate(['/list']);
        });
    };
    CreateComponent.prototype.onOptionsSelected = function (event) {
        console.log(event); //option value will be sent as event
    };
    CreateComponent.prototype.ngOnInit = function () {
        this.fetchStates();
        //this.onChangeState();
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/components/create/create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_4__["IssueService"], _state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"], _district_service__WEBPACK_IMPORTED_MODULE_6__["DistrictService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/edit/edit.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-form {\r\n    min-width: 150px;\r\n    width: 100%;\r\n}\r\n.field-full-width {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZmllbGQtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <br>\n  \n    <mat-card>\n      <section class=\"mat-typography\">\n        <h3>Update Issue</h3>\n      </section>\n      <mat-divider></mat-divider>\n      <br>\n      <form [formGroup]=\"updateForm\" class=\"edit-form\">\n        <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"Issue Title\" formControlName=\"title\" #title>\n        </mat-form-field>\n  \n        <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"Responsible\" formControlName=\"responsible\" #responsible>\n        </mat-form-field>\n  \n        <mat-form-field class=\"field-full-width\">\n          <textarea matInput placeholder=\"Description\" formControlName=\"description\" #description>\n            </textarea>\n        </mat-form-field>\n  \n        <mat-form-field class=\"field-full-width\">\n          <mat-select placeholder=\"Severity\" formControlName=\"severity\" #severity>\n           <mat-option value=\"Low\">Low</mat-option> \n           <mat-option value=\"Medium\">Medium</mat-option>\n           <mat-option value=\"High\">High</mat-option>\n          </mat-select>\n        </mat-form-field>\n  \n        <mat-form-field class=\"field-full-width\">\n            <mat-select placeholder=\"Status\" formControlName=\"status\" #status>\n             <mat-option value=\"Open\">Open</mat-option> \n             <mat-option value=\"In  Progress\">In Progress</mat-option>\n             <mat-option value=\"Done\">Done</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n        <!--  <mat-divide></mat-divide>-->\n        <br><br>\n        <button mat-raised-button color=\"ascent\" routerLink=\"/list\">Back</button>\n         <button type=\"submit\" (click)=\"updateIssue(title.value, responsible.value, description.value, severity.value, status.value)\"[disabled]=\"updateForm.pristine || updateForm.invalid\" mat-raised-button color=\"primary\">Save</button>\n  \n      </form>\n    </mat-card>\n  </div>"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");






var EditComponent = /** @class */ (function () {
    function EditComponent(issueService, router, route, snackBar, fb) {
        this.issueService = issueService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.fb = fb;
        this.issue = {};
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.updateForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            responsible: '',
            description: '',
            severity: '',
            status: ''
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.issueService.getIssueById(_this.id).subscribe(function (res) {
                _this.issue = res;
                _this.updateForm.get('title').setValue(_this.issue.title);
                _this.updateForm.get('responsible').setValue(_this.issue.responsible);
                _this.updateForm.get('description').setValue(_this.issue.description);
                _this.updateForm.get('severity').setValue(_this.issue.severity);
                _this.updateForm.get('status').setValue(_this.issue.status);
            });
        });
    };
    EditComponent.prototype.updateIssue = function (title, responsible, description, severity, status) {
        var _this = this;
        this.issueService.updateIssue(this.id, title, responsible, description, severity, status).subscribe(function () {
            _this.snackBar.open('Issue updated successfully!!!', 'OK', {
                duration: 3000
            });
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_5__["IssueService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    width: 100%;\r\n}\r\n.mat-column-right{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC1jb2x1bW4tcmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<br>\n<mat-card>\n  <button mat-raised-button color=\"primary\" routerLink=\"/create\">Create New issue</button>\n  <br><br>\n  <!--     <mat-divide>\n\n  </mat-divide> -->\n<br>\n<table mat-table [dataSource]=\"issues\">\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef>Title</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n\n  </ng-container>\n\n  <ng-container matColumnDef=\"responsible\">\n      <th mat-header-cell *matHeaderCellDef>Responsible</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.responsible}} </td>\n  \n    </ng-container>\n  \n    <ng-container matColumnDef=\"severity\">\n        <th mat-header-cell *matHeaderCellDef>Severity</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.severity}} </td>\n    \n      </ng-container>\n    \n      <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef>Status</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Status}} </td>\n      \n      </ng-container>\n      \n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef class=\"mat-column-right\">Actions</th>\n        <td mat-cell *matCellDef=\"let element\"  class=\"mat-column-right\">\n        <button mat-button color=\"primary\" (click)=\"editIssue(element._id)\">Edit</button>  \n        <button mat-button color=\"warn\" (click)=\"deleteIssue(element._id)\">Delete</button>  \n\n        </td>\n    </ng-container>\n    \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n</table>\n\n</mat-card>\n\n</div>\n\n<div>\n  <br>\n  <mat-card>\n    <button mat-raised-button color=\"primary\" routerLink=\"/state\">Create New issue</button>\n    <br><br>\n    <!--     <mat-divide>\n  \n    </mat-divide> -->\n  <br>\n  <table mat-table [dataSource]=\"states\">\n    <ng-container matColumnDef=\"stateid\">\n      <th mat-header-cell *matHeaderCellDef>State Id</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.stateid}} </td>\n  \n    </ng-container>\n  \n    <ng-container matColumnDef=\"statename\">\n        <th mat-header-cell *matHeaderCellDef>State Name</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.statename}} </td>\n    \n      </ng-container>\n    \n      \n      \n   \n      \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumnsstate\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsstate;\"></tr>\n  \n  </table>\n  \n  </mat-card>\n  \n  </div>\n \n     <li *ngFor=\"let state of states\">{{state.statename}}</li>\n"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state.service */ "./src/app/state.service.ts");





var ListComponent = /** @class */ (function () {
    function ListComponent(issueService, stateService, router) {
        this.issueService = issueService;
        this.stateService = stateService;
        this.router = router;
        this.displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];
        this.displayedColumnsstate = ['stateid', 'statename'];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.fetchIssues();
        this.fetchStates();
        /*this.issueService.getIssues().subscribe((issues) => {
    
          console.log(issues);
    
        }); */
    };
    ListComponent.prototype.fetchStates = function () {
        var _this = this;
        this.stateService
            .getState()
            .subscribe(function (data) {
            _this.states = data;
            console.log('data requested!!!');
            console.log(_this.states);
        });
    };
    ListComponent.prototype.fetchIssues = function () {
        var _this = this;
        this.issueService
            .getIssues()
            .subscribe(function (data) {
            _this.issues = data;
            console.log('Data Requested...');
            console.log(_this.issues);
        });
    };
    ListComponent.prototype.editIssue = function (id) {
        this.router.navigate(["/edit/" + id]);
    };
    ListComponent.prototype.deleteIssue = function (id) {
        var _this = this;
        this.issueService.deleteIssue(id).subscribe(function () {
            _this.fetchIssues();
        });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueService"], _state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/state/state.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/state/state.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGUvc3RhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/state/state.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/state/state.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n\n  <mat-card>\n    <section class=\"mat-typography\">\n      <h3>Create a new state</h3>\n    </section>\n    <mat-divider></mat-divider>\n    <br>\n    <form [formGroup]=\"createForm\" class=\"create-form\">\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"State Id\" formControlName=\"stateid\" #stateid>\n      </mat-form-field>\n\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"State name\" formControlName=\"statename\" #statename>\n      </mat-form-field>\n      \n      \n      \n\n      <!--  <mat-divide></mat-divide>-->\n      <br><br>\n      <button mat-raised-button color=\"ascent\" routerLink=\"/list\">Back</button>\n       <button type=\"submit\" (click)=\"addState(stateid.value, statename.value)\"[disabled]=\"createForm.pristine || createForm.invalid\" mat-raised-button color=\"primary\">Save</button>\n\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/state/state.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/state/state.component.ts ***!
  \*****************************************************/
/*! exports provided: StateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return StateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state.service */ "./src/app/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var StateComponent = /** @class */ (function () {
    function StateComponent(stateService, fb, router) {
        this.stateService = stateService;
        this.fb = fb;
        this.router = router;
        this.createForm = this.fb.group({
            stateid: '',
            statename: ''
        });
    }
    StateComponent.prototype.addState = function (stateid, statename) {
        var _this = this;
        this.stateService.addState(stateid, statename).subscribe(function () {
            _this.router.navigate(['/list']);
        });
    };
    StateComponent.prototype.ngOnInit = function () {
    };
    StateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-state',
            template: __webpack_require__(/*! ./state.component.html */ "./src/app/components/state/state.component.html"),
            styles: [__webpack_require__(/*! ./state.component.css */ "./src/app/components/state/state.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StateComponent);
    return StateComponent;
}());



/***/ }),

/***/ "./src/app/country.service.ts":
/*!************************************!*\
  !*** ./src/app/country.service.ts ***!
  \************************************/
/*! exports provided: CountrieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrieService", function() { return CountrieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CountrieService = /** @class */ (function () {
    function CountrieService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    CountrieService.prototype.getCountries = function () {
        return this.http.get(this.uri + "/countries");
    };
    CountrieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CountrieService);
    return CountrieService;
}());



/***/ }),

/***/ "./src/app/district.service.ts":
/*!*************************************!*\
  !*** ./src/app/district.service.ts ***!
  \*************************************/
/*! exports provided: DistrictService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictService", function() { return DistrictService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DistrictService = /** @class */ (function () {
    function DistrictService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    DistrictService.prototype.getDistrict = function () {
        // return this.http.get(`${this.uri}/districts/${stateid}`);
        return this.http.get(this.uri + "/districts");
    };
    DistrictService.prototype.getDistrictsfill = function (stateid) {
        return this.http.get(this.uri + "/districts/" + stateid);
    };
    DistrictService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DistrictService);
    return DistrictService;
}());



/***/ }),

/***/ "./src/app/issue.service.ts":
/*!**********************************!*\
  !*** ./src/app/issue.service.ts ***!
  \**********************************/
/*! exports provided: IssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueService", function() { return IssueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//import { stat } from 'fs';
var IssueService = /** @class */ (function () {
    function IssueService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    IssueService.prototype.getIssues = function () {
        return this.http.get(this.uri + "/issues");
    };
    IssueService.prototype.getIssueById = function (id) {
        return this.http.get(this.uri + "/issues/" + id);
    };
    IssueService.prototype.addIssue = function (title, responsible, description, severity) {
        var issue = {
            title: title,
            responsible: responsible,
            description: description,
            severity: severity
        };
        return this.http.post(this.uri + "/issues/add", issue);
    };
    IssueService.prototype.updateIssue = function (id, title, responsible, description, severity, status) {
        var issue = {
            title: title,
            responsible: responsible,
            description: description,
            severity: severity,
            status: status
        };
        return this.http.post(this.uri + "/issues/update/" + id, issue);
    };
    IssueService.prototype.deleteIssue = function (id) {
        return this.http.get(this.uri + "/issues/delete/" + id);
    };
    IssueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IssueService);
    return IssueService;
}());



/***/ }),

/***/ "./src/app/state.service.ts":
/*!**********************************!*\
  !*** ./src/app/state.service.ts ***!
  \**********************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var StateService = /** @class */ (function () {
    function StateService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    StateService.prototype.getCountries = function () {
        return this.http.get(this.uri + "/countries");
    };
    StateService.prototype.getState = function () {
        return this.http.get(this.uri + "/states");
    };
    StateService.prototype.addState = function (stateid, statename) {
        var state = {
            stateid: stateid,
            statename: statename
        };
        return this.http.post(this.uri + "/states/add", state);
    };
    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StateService);
    return StateService;
}());



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
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular_06_march\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map