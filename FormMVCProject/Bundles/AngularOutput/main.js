(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./public/application/application.module": "./src/app/public/application/application.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--div class='container-fluid'>\r\n  <div class='row'>\r\n    <div class='col-sm-3'>\r\n      <app-nav-menu></app-nav-menu>\r\n    </div>\r\n    <div class='col-sm-9 body-content'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n\r\n\r\n\r\n<div class=\"container-fluid\"> </div>\r\n\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n\r\n      <a class=\"navbar-brand\" href=\"\"><img src=\"../Bundles/AngularOutput/assets/images/logo.png\" alt=\"\" class=\"img-responsive changeLogo\" /></a>\r\n\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right manu-top\">\r\n\r\n        <li><a href=\"/auth/login\">{{ 'Login' | translate }} </a></li>\r\n        <li><a href=\"/auth/register\">{{ 'Register' | translate }} </a></li>\r\n\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\r\n              {{ 'Create_New' | translate }}\r\n        <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n            <li><a href=\"tailor-made/create/form\">        {{ 'Form' | translate }} </a></li>\r\n            <li><a href=\"tailor-made/create/queues\">  {{ 'Queues' | translate }}</a></li>\r\n            <li><a href=\"tailor-made/create/calendar\">  {{ 'Calendar' | translate }}</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\r\n              {{ 'Forms' | translate }}\r\n            <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n            <li><a href=\"javascript:;\" onClick=\"addNewForm('', '', '','')\">\r\n                {{ 'Add_New_Form' | translate }}\r\n            </a></li>\r\n            <li><a href=\"javascript:;\" onClick=\"addNewForm('', '', 'check','','')\">   {{ 'Add_New_Queue' | translate }}</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"forms/personal\">{{ 'Personal_Forms' | translate }}</a></li>\r\n            <li><a href=\"forms/private\">{{ 'Private_Group_Forms' | translate }}</a></li>\r\n            <li><a href=\"forms/subscribed\">{{ 'My_Subscribed_Public_Forms' | translate }}</a></li>\r\n            <li><a href=\"forms/public\">{{ 'All_Public_Forms' | translate }}</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\r\n            {{ 'Groups' | translate }}\r\n            <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n            <li><a href=\"/groups/create\">       {{ 'Create_Groups' | translate }}  </a></li>\r\n            <li><a href=\"groups\"> {{ 'Group_List' | translate }}  </a></li>\r\n          </ul>\r\n        </li>\r\n        <li><a href=\"users\"> {{ 'Contacts' | translate }} </a></li>\r\n        <li><a href=\"application\"> {{ 'Applications' | translate }} </a></li>\r\n        <li><a href=\"forms/market-place\"> {{ 'Market_Place' | translate }} </a></li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\r\n            <span class=\"caret\"></span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\" role=\"menu\">\r\n            <li><a href=\"user/profile\"> {{ 'Profile' | translate }} </a></li>\r\n            <li><a href=\"user-forms\"> {{ 'Forms' | translate }} </a></li>\r\n            <li><a href=\"menus\"> {{ 'Menu_Config' | translate }} </a></li>\r\n            <li><a href=\"plan\"> {{ 'Plan' | translate }} </a></li>\r\n            <li><a href=\"user/orderHistory\"> {{ 'Order_History' | translate }} </a></li>\r\n            <li><a href=\"settings\"> {{ 'Global_Settings' | translate }} </a></li>\r\n            <li><a href=\"github\"> {{ 'GitHub' | translate }} </a></li>\r\n            <li><a href=\"#\" data-href=\"/auth/logout\" id=\"signOut\"> {{ 'Logout' | translate }} </a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\r\n             {{ 'Languages' | translate }} \r\n            <span class=\"caret\"></span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\" role=\"menu\">\r\n            <li><a (click)=\"changeLanguage('en')\" >English</a></li>\r\n            <li><a (click)=\"changeLanguage('ch')\" >Chinese</a></li>\r\n          \r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container-fluid\">\r\n  \r\n\r\n  <!--{{-- Breadcrumbs::render('users') --}}\r\n  @if(Auth::user())\r\n  @if((!empty(Auth::user()->email) && Auth::user()->emailVerified == \"No\" && isset(Auth::user()->emailCheck) && Auth::user()->emailCheck==\"Yes\") || (!empty(Auth::user()->phoneNumber) && Auth::user()->phoneVerified == \"No\" && isset(Auth::user()->phoneCheck) && Auth::user()->phoneCheck==\"Yes\"))\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"alert alert-info alert-dismissible\" role=\"alert\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      Your\r\n      @if((Auth::user()->emailVerified == \"No\" && isset(Auth::user()->emailCheck) && Auth::user()->emailCheck==\"No\"))\r\n      email id\r\n      @endif\r\n      @if((Auth::user()->emailVerified == \"No\" && isset(Auth::user()->emailCheck) && Auth::user()->emailCheck==\"Yes\") && (Auth::user()->phoneVerified == \"No\" && isset(Auth::user()->phoneCheck) && Auth::user()->phoneCheck==\"Yes\"))\r\n      and\r\n      @endif\r\n      @if((Auth::user()->phoneVerified == \"No\"))\r\n      phone number\r\n      @endif\r\n      is not verified. Please verify it first!\r\n      <a href=\"user/profile\" class=\"btn btn-success\">Go to Profile</a><br />\r\n    </div>\r\n  </div>-->\r\n  <div class=\"clearfix\"></div>\r\n      <router-outlet></router-outlet>\r\n    \r\n \r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <span id=\"menuName\">Counter</span>\r\n  \r\n    </div>\r\n    <div class=\"panel-body\">\r\n\r\n\r\n\r\n<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table' *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.dateFormatted }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div id=\"searchModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\">\r\n  <div class=\"modal-dialog modal-md\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\"></h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div id=\"search-results\" class=\"list-group\">\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <span id=\"menuName\">Applications</span>\r\n    <a href=\"tooltipContent/application\" data-toggle=\"modal\" data-target=\"#myModal\"><span class=\"fa fa-question-circle\"></span></a>\r\n    <span class=\"hidden\" id=\"menuDescription\">This is the description of the Application List. </span>\r\n    <input type=\"hidden\" name=\"tabulator\" value=\"application\">\r\n    <input type=\"hidden\" name=\"tabulatorStorage\" value=\"E\">\r\n  </div>\r\n  <div class=\"panel-body\">\r\n\r\n    <div id=\"pageActions\">\r\n      <a routerLink=\"/counter\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create Application</a>\r\n  \r\n      <!--                        <a href=\"tailor-made/create/form\" class=\"btn btn-danger btn-sm\"><i class=\"fab fa-wpforms\" aria-hidden=\"true\"></i> Create Form</a>\r\n                  <a href=\"tailor-made/create/queue\" class=\"btn btn-default btn-sm\"><i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i> Create Queues</a>\r\n                  <a href=\"tailor-made/create/calendar\" class=\"btn btn-warning btn-sm\"><i class=\"fa fa-calendar-alt\" aria-hidden=\"true\"></i> Create Calendar</a>-->\r\n  \r\n    </div>\r\n    <form class=\"form-inline\" id=\"search-form\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" id=\"keyword\" class=\"form-control\" placeholder=\"Search in pdf attachments...\">\r\n        <span class=\"input-group-btn\">\r\n          <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search</button>\r\n        </span>\r\n      </div><!-- /input-group -->\r\n    </form>\r\n\r\n\r\n    <div class=\"table-responsive mt-10\">\r\n      <div id=\"application-table\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div id=\"menuModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\">\r\n    <div class=\"modal-dialog modal-md\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n          <div id=\"tabs\">\r\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n              <li role=\"presentation\" class=\"active\"><a href=\"#first\" role=\"tab\" data-toggle=\"tab\">Create New Packery Menu</a></li>\r\n              <li role=\"presentation\"><a href=\"#second\" role=\"tab\" data-toggle=\"tab\">Add Menuitem in Existing Packery Menu</a></li>\r\n            </ul>\r\n            <div class=\"content tab-content\">\r\n              <div id=\"first\" role=\"tabpanel\" class=\"tab-pane active row mt-15\">\r\n                <form class=\"col-md-12 form-inline text-center\" method=\"post\" autocomplete=\"off\">\r\n                  <div class=\"col-sm-12 form-group\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"menuName\" placeholder=\"Enter New Menu Name\" required=\"\">\r\n                    <input type=\"hidden\" name=\"_token\" value=\"\">\r\n                    <input type=\"hidden\" name=\"menu_type\" value=\"new_packery\">\r\n                    <input type=\"hidden\" name=\"group_menu_ids\" class=\"group_menu_ids\" value=\"\">\r\n                    <select name=\"menuitem_option\" class=\"form-control hidden\">\r\n                      <option value=\"form_list\" selected>Form list as description</option>\r\n                      <option value=\"member_list\">Member list as description</option>\r\n                    </select>\r\n                    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n              <div id=\"second\" role=\"tabpanel\" class=\"tab-pane row mt-15\">\r\n                <form class=\"col-md-12 form-inline text-center\" method=\"post\" autocomplete=\"off\">\r\n                  <div class=\"col-sm-12 form-group\">\r\n                    <select class=\"form-control\" name=\"menuID\">\r\n                      <option value=\"\">Select</option>\r\n                   \r\n                      <option value=\"\">0</option>\r\n                   \r\n                    </select>\r\n                    <select name=\"menuitem_option\" class=\"form-control hidden\">\r\n                      <option value=\"form_list\" selected>Form list as description</option>\r\n                      <option value=\"member_list\">Member list as description</option>\r\n                    </select>\r\n                    <input type=\"hidden\" name=\"menu_type\" value=\"copy_packery\">\r\n                    <input type=\"hidden\" name=\"group_menu_ids\" class=\"group_menu_ids\" value=\"\">\r\n                    <input type=\"hidden\" name=\"_token\" value=\"\">\r\n                    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<script src=\"assets/pdfjs/pdf.js\"></script>\r\n<script src=\"assets/pdfjs/pdf.worker.js\"></script>\r\n\r\n\r\n<script src=\"assets/js/bootbox.min.js\" type=\"text/javascript\"></script>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse' [attr.aria-expanded]='isExpanded' (click)='toggle()'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]='[\"/\"]'>FormGenerator_Net_Project</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse' [ngClass]='{ \"in\": isExpanded }'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n                    <a [routerLink]='[\"/\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/counter\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-education'></span> Counter\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/fetch-data\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n\r\n\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n\r\n        <a class=\"navbar-brand\" href=\"\"><img src=\"assets/images/logo.png\" alt=\"\" class=\"img-responsive changeLogo\" /></a>\r\n\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav navbar-right manu-top\">\r\n\r\n          <li><a href=\"/auth/login\">Login</a></li>\r\n          <li><a href=\"/auth/register\">Register</a></li>\r\n\r\n          <li class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Create New<span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n              <li><a href=\"tailor-made/create/form\">Form</a></li>\r\n              <li><a href=\"tailor-made/create/queues\">Queues</a></li>\r\n              <li><a href=\"tailor-made/create/calendar\">Calendar</a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Forms<span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n              <li><a href=\"javascript:;\" onClick=\"addNewForm('', '', '','')\">Add New Form</a></li>\r\n              <li><a href=\"javascript:;\" onClick=\"addNewForm('', '', 'check','','')\">Add New Queue</a></li>\r\n              <li role=\"separator\" class=\"divider\"></li>\r\n              <li><a href=\"forms/personal\">Personal Forms</a></li>\r\n              <li><a href=\"forms/private\">Private Group Forms</a></li>\r\n              <li><a href=\"forms/subscribed\">My Subscribed Public Forms</a></li>\r\n              <li><a href=\"forms/public\">All Public Forms</a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Groups<span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n              <li><a href=\"/groups/create\"> Create Group</a></li>\r\n              <li><a href=\"groups\"> Group List</a></li>\r\n            </ul>\r\n          </li>\r\n          <li><a href=\"users\">Contacts</a></li>\r\n          <li><a href=\"application\">Applications</a></li>\r\n          <li><a href=\"forms/market-place\">Market Place</a></li>\r\n          <li class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\r\n              <span class=\"caret\"></span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\" role=\"menu\">\r\n              <li><a href=\"user/profile\">Profile</a></li>\r\n              <li><a href=\"user-forms\">Forms</a></li>\r\n              <li><a href=\"menus\">Menu Config</a></li>\r\n              <li><a href=\"plan\">Plan</a></li>\r\n              <li><a href=\"user/orderHistory\">Order History</a></li>\r\n              <li><a href=\"settings\">Global Settings</a></li>\r\n              <li><a href=\"github\">GitHub</a></li>\r\n              <li><a href=\"#\" data-href=\"/auth/logout\" id=\"signOut\">Logout</a></li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/application/create-application/create-application.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/application/create-application/create-application.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <span id=\"menuName\">Create New Application</span>\n                    <span class=\"hidden\" id=\"menuDescription\">This is the description of the Create New Application. </span>\n                </div>\n                <div class=\"panel-body\">\n                        <form\n                        class=\"needs-validation\"\n                        name=\"form\"\n                        (ngSubmit)=\"(f.valid && f.dirty)  && onSubmit()\"\n                        #f=\"ngForm\"\n                        novalidate\n                      >\n                    <div class=\"col-sm-12\">\n               \n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                    <label for=\"applicationTitle\" class=\"control-label\">Application Title</label>\n                                   \n                                <input\n                                id=\"applicationTitle1\"               \n                                class=\"form-control\"             \n                                name=\"applicationTitle\"\n                             \n                                type=\"text\"\n                                placeholder=\"Enter applicationTitle\"\n                                [(ngModel)]=\"applicationData.applicationTitle\"\n                                #applicationTitle=\"ngModel\"\n                                [ngClass]=\"{\n                                  'is-invalid':\n                                  applicationTitle.invalid && (applicationTitle.dirty || applicationTitle.touched),\n                                  'is-valid': applicationTitle.valid && (applicationTitle.dirty || applicationTitle.touched)\n                                }\"\n                                tabindex=\"1\"\n                                required\n                                       \n                              />\n                \n                              <div\n                                *ngIf=\"applicationTitle.invalid && (applicationTitle.dirty || applicationTitle.touched)\"\n                                class=\"invalid-feedback\"\n                              >\n                                <div *ngIf=\"applicationTitle.errors.required\">applicationTitle is required</div>\n                    \n\n                           \n                              </div>\n                            \n\n\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                    <label class=\"control-label\">Application Tag</label>\n                                    <input\n                                    id=\"applicationTag\"               \n                                    class=\"form-control\"             \n                                    name=\"applicationTag\"\n                                 \n                                    type=\"text\"\n                                    placeholder=\"Enter    Application Tag\"\n                                    [(ngModel)]=\"applicationData.applicationTag\"\n                                    #applicationTag=\"ngModel\"\n                                 \n                                    tabindex=\"2\"\n                                    \n                                           \n                                  />\n                    \n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                    <label class=\"control-label\">Status</label>     \n                            <select class=\"form-control\" name=\"status\"    #status=\"ngModel\" [(ngModel)]=\"applicationData.status\" >\n                                <option *ngFor=\"let s of statusList\" value=\"{{s.value}}\">\n                                    {{s.name}}\n                                </option>\n                            </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                 \n                                    <label class=\"control-label\">   Public Template</label> \n                             <span *ngFor=\"let a of accessList;let i =index\">\n                                 <input type=\"radio\"  id=\"publicTemplate\" name=\"publicTemplate\"   \n                                  (change)=\"changeCheckbox(1,$event)\"\n                               [checked]=\"a.ischecked\"\n                                 >{{a.name}} \n                             </span>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                    \n                                    <label class=\"control-label\">   Protected</label> \n                                    <span *ngFor=\"let a of accessList;let i =index\">\n                                            <input type=\"radio\" id=\"protectedApplication\" name=\"protectedApplication\" \n                                            (change)=\"changeCheckbox(2,$event)\"    [checked]=\"a.ischecked\"  \n                                            >{{a.name}}\n                                        </span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                        <button type=\"submit\" [disabled]=\"!f.valid || !f.dirty\" class=\"btn btn-primary\">Submit</button>\n                            </div>\n                        </div>\n\n                    </div>\n                    </form>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/application/edit-application/edit-application.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/application/edit-application/edit-application.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n<div class=\"container\">\n    <div class=\"row\"> \n        <div class=\"col-sm-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <span id=\"menuName\">Edit Application</span>\n                    <span class=\"hidden\" id=\"menuDescription\">This is the description of the Application. </span>\n                    <input type=\"hidden\" name=\"tabulator\" value=\"applicationDetail\">\n                    <input type=\"hidden\" name=\"tabulatorStorage\" value=\"appDetail\">\n                </div>\n                <div class=\"panel-body\">                    \n                        <form\n                        class=\"needs-validation\"\n                        name=\"form\"\n                        (ngSubmit)=\"(f.valid && f.dirty)  && onUpdate()\"\n                        #f=\"ngForm\"\n                        novalidate\n                      >\n                    <div class=\"col-sm-12\">\n               \n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                    <label for=\"applicationTitle\" class=\"control-label\">Application Title</label>\n                                   \n                                <input\n                                id=\"applicationTitle1\"               \n                                class=\"form-control\"             \n                                name=\"applicationTitle\"\n                             \n                                type=\"text\"\n                                placeholder=\"Enter applicationTitle\"\n                                [(ngModel)]=\"applicationData.applicationTitle\"\n                                #applicationTitle=\"ngModel\"\n                                [ngClass]=\"{\n                                  'is-invalid':\n                                  applicationTitle.invalid && (applicationTitle.dirty || applicationTitle.touched),\n                                  'is-valid': applicationTitle.valid && (applicationTitle.dirty || applicationTitle.touched)\n                                }\"\n                                tabindex=\"1\"\n                                required\n                                       \n                              />\n                \n                              <div\n                                *ngIf=\"applicationTitle.invalid && (applicationTitle.dirty || applicationTitle.touched)\"\n                                class=\"invalid-feedback\"\n                              >\n                                <div *ngIf=\"applicationTitle.errors.required\">applicationTitle is required</div>\n                    \n\n                           \n                              </div>\n                            \n\n\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                    <label class=\"control-label\">Application Tag</label>\n                                    <input\n                                    id=\"applicationTag\"               \n                                    class=\"form-control\"             \n                                    name=\"applicationTag\"\n                                 \n                                    type=\"text\"\n                                    placeholder=\"Enter    Application Tag\"\n                                    [(ngModel)]=\"applicationData.applicationTag\"\n                                    #applicationTag=\"ngModel\"\n                                 \n                                    tabindex=\"2\"\n                                    \n                                           \n                                  />\n                    \n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                    <label class=\"control-label\">Status</label>     \n                            <select class=\"form-control\" name=\"status\"    #status=\"ngModel\" [(ngModel)]=\"applicationData.status\" >\n                                <option *ngFor=\"let s of statusList\" value=\"{{s.value}}\">\n                                    {{s.name}}\n                                </option>\n                            </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                 \n                                    <label class=\"control-label\">   Public Template</label> \n                             <span *ngFor=\"let a of accessList;let i =index\">\n                                 <input type=\"radio\"  id=\"publicTemplate\" name=\"publicTemplate\"   \n                             \n                               [checked]=\"a.ischecked\"\n                                 >{{a.name}} \n                             </span>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                    \n                                    <label class=\"control-label\">   Protected</label> \n                                    <span *ngFor=\"let a of accessList;let i =index\">\n                                            <input type=\"radio\" id=\"protectedApplication\" name=\"protectedApplication\" \n                                                [checked]=\"a.ischecked\"  \n                                            >{{a.name}}\n                                        </span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                        <button type=\"submit\" [disabled]=\"!f.valid || !f.dirty\" class=\"btn btn-primary\">Update</button>\n                            </div>\n                        </div>\n\n                    </div>\n                    </form>\n\n                    <div class=\"form-group\">\n                        <div class=\"col-md-12\">\n                            <h4>Forms List \n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"openAddNewForm()\"><i class=\"fa fa-plus\"></i> Add New Form</button>\n                                    <button type=\"button\" class=\"btn btn-success\" ><i class=\"fa fa-plus\"></i> Add New Queue</button>\n                               \n                            </h4>\n                            <div id=\"forms-table\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/application/list-application/list-application.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/application/list-application/list-application.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"searchModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\">\n    <div class=\"modal-dialog modal-md\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\"></h4>\n        </div>\n        <div class=\"modal-body\">\n          <div id=\"search-results\" class=\"list-group\">\n  \n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <span id=\"menuName\">{{'Applications'| translate}}</span>\n      <a href=\"tooltipContent/application\" data-toggle=\"modal\" data-target=\"#myModal\"><span class=\"fa fa-question-circle\"></span></a>\n      <span class=\"hidden\" id=\"menuDescription\">This is the description of the Application List. </span>\n      <input type=\"hidden\" name=\"tabulator\" value=\"application\">\n      <input type=\"hidden\" name=\"tabulatorStorage\" value=\"E\">\n    </div>\n    <div class=\"panel-body\">\n  \n      <div id=\"pageActions\">\n        <a routerLink=\"create\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> {{'Create_Applications'| translate}} </a>\n    \n        <!--                        <a href=\"tailor-made/create/form\" class=\"btn btn-danger btn-sm\"><i class=\"fab fa-wpforms\" aria-hidden=\"true\"></i> Create Form</a>\n                    <a href=\"tailor-made/create/queue\" class=\"btn btn-default btn-sm\"><i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i> Create Queues</a>\n                    <a href=\"tailor-made/create/calendar\" class=\"btn btn-warning btn-sm\"><i class=\"fa fa-calendar-alt\" aria-hidden=\"true\"></i> Create Calendar</a>-->\n    \n      </div>\n      <form class=\"form-inline\" id=\"search-form\">\n        <div class=\"input-group\">\n          <input type=\"text\" id=\"keyword\" class=\"form-control\" placeholder=\"Search in pdf attachments...\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search</button>\n          </span>\n        </div><!-- /input-group -->\n      </form>\n  \n  \n      <div class=\"table-responsive mt-10\">\n        <div id=\"application-table\"></div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n    <div id=\"menuModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\">\n      <div class=\"modal-dialog modal-md\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body\">\n            <div id=\"tabs\">\n              <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li role=\"presentation\" class=\"active\"><a href=\"#first\" role=\"tab\" data-toggle=\"tab\">Create New Packery Menu</a></li>\n                <li role=\"presentation\"><a href=\"#second\" role=\"tab\" data-toggle=\"tab\">Add Menuitem in Existing Packery Menu</a></li>\n              </ul>\n              <div class=\"content tab-content\">\n                <div id=\"first\" role=\"tabpanel\" class=\"tab-pane active row mt-15\">\n                  <form class=\"col-md-12 form-inline text-center\" method=\"post\" autocomplete=\"off\">\n                    <div class=\"col-sm-12 form-group\">\n                      <input type=\"text\" class=\"form-control\" name=\"menuName\" placeholder=\"Enter New Menu Name\" required=\"\">\n                      <input type=\"hidden\" name=\"_token\" value=\"\">\n                      <input type=\"hidden\" name=\"menu_type\" value=\"new_packery\">\n                      <input type=\"hidden\" name=\"group_menu_ids\" class=\"group_menu_ids\" value=\"\">\n                      <select name=\"menuitem_option\" class=\"form-control hidden\">\n                        <option value=\"form_list\" selected>Form list as description</option>\n                        <option value=\"member_list\">Member list as description</option>\n                      </select>\n                      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n                    </div>\n                  </form>\n                </div>\n                <div id=\"second\" role=\"tabpanel\" class=\"tab-pane row mt-15\">\n                  <form class=\"col-md-12 form-inline text-center\" method=\"post\" autocomplete=\"off\">\n                    <div class=\"col-sm-12 form-group\">\n                      <select class=\"form-control\" name=\"menuID\">\n                        <option value=\"\">Select</option>\n                     \n                        <option value=\"\">0</option>\n                     \n                      </select>\n                      <select name=\"menuitem_option\" class=\"form-control hidden\">\n                        <option value=\"form_list\" selected>Form list as description</option>\n                        <option value=\"member_list\">Member list as description</option>\n                      </select>\n                      <input type=\"hidden\" name=\"menu_type\" value=\"copy_packery\">\n                      <input type=\"hidden\" name=\"group_menu_ids\" class=\"group_menu_ids\" value=\"\">\n                      <input type=\"hidden\" name=\"_token\" value=\"\">\n                      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <script src=\"assets/pdfjs/pdf.js\"></script>\n  <script src=\"assets/pdfjs/pdf.worker.js\"></script>\n  \n  \n  <script src=\"assets/js/bootbox.min.js\" type=\"text/javascript\"></script>\n  ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Models/FormGenerator.ts":
/*!*****************************************!*\
  !*** ./src/app/Models/FormGenerator.ts ***!
  \*****************************************/
/*! exports provided: CommonInterface, ApplicationTable, TopicTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonInterface", function() { return CommonInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationTable", function() { return ApplicationTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicTable", function() { return TopicTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CommonInterface {
}
class ApplicationTable extends CommonInterface {
}
class TopicTable extends CommonInterface {
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_4__["CounterComponent"] },
    { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_5__["FetchDataComponent"] },
    {
        path: 'application',
        loadChildren: "./public/application/application.module#ApplicationModule"
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2RkFBNkY7RUFDN0Y7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xyXG4gIC5ib2R5LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let AppComponent = class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'app';
        this.Name = "Name";
    }
    changeLanguage(lang) {
        this.translate.use(lang);
    }
    ngOnInit() {
        this.translate.addLangs(["en", "ch"]);
        this.translate.setDefaultLang('en');
        //        translate.use('en');
        //let browserLang = translate.getBrowserLang();
        let browserLang = 'en';
        this.translate.use(browserLang.match(/en|ch/) ? browserLang : 'en');
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _public_application_application_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./public/application/application.module */ "./src/app/public/application/application.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/common-service.service */ "./src/app/services/common-service.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");

















// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, 'api/FormAPI/getLanguage?filename=', '.json');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
            _public_application_application_module__WEBPACK_IMPORTED_MODULE_11__["ApplicationModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                }
            })
        ],
        exports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"]
        ],
        providers: [_services_common_service_service__WEBPACK_IMPORTED_MODULE_13__["CommonServiceService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-counter-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/enum/common-enum.enum.ts":
/*!******************************************!*\
  !*** ./src/app/enum/common-enum.enum.ts ***!
  \******************************************/
/*! exports provided: actionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionType", function() { return actionType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var actionType;
(function (actionType) {
    actionType[actionType["selectAll"] = 4] = "selectAll";
    actionType[actionType["selectSpecific"] = 5] = "selectSpecific";
    actionType[actionType["SpecificRecord"] = 6] = "SpecificRecord";
    actionType[actionType["insert"] = 1] = "insert";
    actionType[actionType["update"] = 2] = "update";
    actionType[actionType["updateByRecord"] = 7] = "updateByRecord";
    actionType[actionType["delete"] = 3] = "delete";
    actionType[actionType["updateRows"] = 3] = "updateRows";
})(actionType || (actionType = {}));


/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fetch-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL'))
], FetchDataComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var tabulator_tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tabulator-tables */ "./node_modules/tabulator-tables/dist/js/tabulator.js");
/* harmony import */ var tabulator_tables__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tabulator_tables__WEBPACK_IMPORTED_MODULE_2__);



let HomeComponent = class HomeComponent {
    constructor() {
        //called first time before the ngOnInit()
    }
    ngOnInit() {
        //   //called after the constructor and called  after the first ngOnChanges()
        //   var tableData = [
        //     { id: 1, name: "Billy Bob", age: "12", gender: "male", height: 1, col: "red", dob: "", cheese: 1 },
        //     { id: 2, name: "Mary May", age: "1", gender: "female", height: 2, col: "blue", dob: "14/05/1982", cheese: true },
        //   ]
        //   var table = new Tabulator("#application-table", {
        //    // data: tableData, //set initial table data
        //    ajaxURL: "https://localhost:44303/api/FormAPI/GetApplicationList",
        //  //  ajaxParams:{key1:"value1", key2:"value2"}, //ajax parameters
        //   //ajaxConfig:"post", //ajax HTTP request type
        //     columns: [
        //       { title: "applicationTitle", field: "applicationTitle" },
        //     ],
        //     ajaxResponse:function(url, params, response){
        //       //url - the URL of the request
        //       //params - the parameters passed with the request
        //       //response - the JSON object returned in the body of the response.
        //       return response; //pass the data array into Tabulator
        //    },
        //   });
        var status_value = 0, tabulator, tabulatorChildren = [];
        var formTypes = ['', 'Personal', 'Private', 'Public', 'Open'];
        var formStatus = ['', 'Draft', 'Active', 'Inactive', 'Template'];
        //custom formatter definition
        var arrowIcon = function (cell, formatterParams) {
            return "<i class='glyphicon glyphicon-chevron-right'></i>";
        };
        //custom formatter definition
        var actionIcon = function (cell, formatterParams) {
            if (formatterParams.type === 1)
                return '<img src="../Angular/src/assets/images/settings.png" width="20">';
            else
                return '<i class="fa fa-cogs" aria-hidden="true"></i>';
        };
        // var tabulator = $("input[name=tabulator]").val();
        var itemName = tabulator + 'Actions';
        var actionObj = JSON.parse(localStorage.getItem(itemName));
        if (actionObj && actionObj['responsive']) {
            $(window).resize(function () {
                tabulator.redraw();
            });
        }
        tabulator = new tabulator_tables__WEBPACK_IMPORTED_MODULE_2___default.a('#application-table', {
            placeholder: "No application.",
            selectable: true,
            movableRows: true,
            responsiveLayout: (actionObj ? actionObj['responsive'] : false),
            persistenceID: "E",
            //index:"applicationId",
            columns: [
                { title: "Actions", field: "parentActions", formatter: actionIcon, formatterParams: { type: 1 }, width: 50, frozen: true, headerSort: false, align: "center", cellClick: function (e, cell) {
                        var applicationId = cell.getRow().getData().applicationId;
                        var applicationName = cell.getRow().getData().applicationTitle;
                        var applicationStatus = cell.getRow().getData().status;
                        var applicationCycle = cell.getRow().getData().cycle;
                        var applicationPrivacy = cell.getRow().getData().protected;
                        var applicationRole = typeof cell.getRow().getData().role != 'undefined' ? cell.getRow().getData().role : 3;
                        var prototypeActions = '';
                        var actionsPopup = '<div class="panel-blue">' +
                            '<div class="row">' +
                            '<div class="col-sm-12">' +
                            '<form class="form-inline app-pdf-search mb-0" autocomplete="off">' +
                            '<div class="input-group mb-10">' +
                            '<input type="hidden" id="applicationId" class="form-control" value="' + applicationId + '">' +
                            '<input type="text" id="keyword" class="form-control" placeholder="Search in pdf attachments...">' +
                            '<span class="input-group-btn">' +
                            '<button class="btn btn-default" type="submit"><i class="fa fa-search" aria-hidden="true"></i> Search</button>' +
                            '</span>' +
                            '</div>' +
                            '<button type="button" onclick="groupBy(\'formTag\', ' + applicationId + ')" name="group-rows" class="btn btn-danger mb-10 formTag"> <span class="show-rating"><i class="fa fa-object-group"></i> Group Forms by Tags</span> <span class="hide-rating"><i class="fa fa-object-ungroup"></i> Remove Group</span> </button>' +
                            '<button type="button" class="btn btn-success btn-md mb-10" onClick="getFunction()"><i class="fa fa-plus"></i> Add Form</button>\n\
                              <a href="" class="btn btn-warning btn-md mb-10"><i class="fa fa-download"></i> Download attachments</a>';
                        if (applicationPrivacy == 'No') {
                            actionsPopup += '<button type="button" class="btn btn-primary btn-md mb-10" onClick="getFunction()"><i class="fa fa-clone"></i> Copy Application</button>';
                        }
                        if (applicationRole == 3) {
                            actionsPopup += '<button type="button" class="btn btn-default btn-md mb-10" onClick="getFunction()"><i class="fa fa-users"></i> Application Roles</button>' +
                                '<button type="button" class="btn btn-danger btn-md mb-10" onclick="getFunction()"><i class="fa fa-trash"></i> Delete Application</button>';
                        }
                        actionsPopup += prototypeActions + '</form>' +
                            '</div></div></div></div>';
                        bootbox.dialog({
                            backdrop: true,
                            onEscape: true,
                            title: applicationName + " - Actions",
                            //size: 'small',
                            message: actionsPopup
                        });
                    } },
                { title: "Move Row", field: "rowHandle", rowHandle: true, formatter: "handle", headerSort: false, width: 35, minWidth: 30 },
                { title: "Expand Row", field: "subItems", formatter: arrowIcon, width: 35, headerSort: false, align: "center", cellClick: function (e, cell) {
                        var applicationId = cell.getRow().getData().applicationId;
                        if ($(cell.getElement()).is('.active')) {
                            $(cell.getRow().getElement()).find('.table-wrapper').slideUp();
                            $(cell.getElement()).removeClass('active');
                        }
                        else {
                            $(cell.getRow().getElement()).find('.table-wrapper').slideDown();
                            $(cell.getElement()).addClass('active');
                            var table = tabulatorChildren[applicationId];
                            if (cell.getRow().getData().otherApp) {
                                table.setData("{{ url('otherAppRecords') }}/" + applicationId);
                            }
                            else {
                                table.setData("{{ url('appRecords') }}/" + applicationId);
                            }
                        }
                    } },
                { title: "Application Id", field: "applicationId", visible: false },
                { title: "Application Title", field: "applicationTitle", formatter: "html", align: "left", headerFilter: true, cellClick: function (e, cell) {
                        if (!cell.getRow().getData().otherApp) {
                            var applicationId = cell.getRow().getData().applicationId;
                            window.location.href = "{{ url('application') }}/" + applicationId + '/edit';
                        }
                    } },
                { title: "Application Tag", editor: "textarea", field: "applicationTag", align: "left", headerFilter: "input" },
                { title: "Public Template", field: "publicTemplate", editor: "select", editorParams: { values: ['Yes', 'No'] }, headerFilter: "select", headerFilterParams: { values: ['', 'Yes', 'No'] } },
                { title: "Status", field: "status", editor: "select", editorParams: { values: ['Draft', 'Active', 'Inactive', 'Template'] }, headerFilter: "select", headerFilterParams: { values: formStatus } },
                { title: "Created At", field: "created_at", headerFilter: true, sorter: 'datetime', sorterParams: { format: "{{config('app.datetime_format_js')}}", alignEmptyValues: "bottom" } }
            ],
            cellEdited: function (cell) {
                //This callback is called any time a cell is edited
                var input = [];
                var json = {};
                var columnName = cell.getColumn().getField();
                json[columnName] = (columnName === "status" ? formStatus.indexOf(cell.getValue()) : cell.getValue());
                input['url'] = "{{url('update_custom')}}";
                input['data'] = { 'table': 'application', 'update': json, 'where': { applicationId: cell.getRow().getData().applicationId } };
            },
            rowMoved: function (row) {
                //row - row component
                var tabulatorData = tabulator.getData();
                var recordIDs = [];
                tabulatorData.forEach(function (row) {
                    recordIDs.push(row.applicationId);
                });
                // $.ajax({
                //     type: "POST",
                //     url: '<?= URL::to('update_order')?>',
                //     data: {table: 'application', primaryKey: 'applicationId', recordIDs: recordIDs},
                //     beforeSend: function() {
                //         showLoader("#application-table");
                //     },
                //     complete: function() {
                //         $("#application-table").unblock(); 
                //     }
                // });
            },
            rowFormatter: function (row) {
                var applicationId = row.getData().applicationId;
                //define a table layout structure and set width of row
                var table = $("<table>", { 'class': 'table table-bordered', 'id': 'application-' + applicationId });
                //append newly formatted contents to the row
                $(row.getElement()).append($('<div>', { 'class': 'table-wrapper', "style": "padding-left: 3%" }).append(table));
                var childTabulator = new tabulator_tables__WEBPACK_IMPORTED_MODULE_2___default.a("#application-" + applicationId, {
                    //height:'50%',
                    layout: "fitDataFill",
                    placeholder: "No form in this application...",
                    //selectable:1,
                    tooltips: true,
                    tooltipsHeader: true,
                    responsiveLayout: true,
                    //persistentLayout: true,
                    //persistenceID: "E2",
                    groupStartOpen: false,
                    groupToggleElement: "header",
                    pagination: "local",
                    paginationSize: 10,
                    columns: [
                        { title: "Actions", field: "childActions", formatter: actionIcon, formatterParams: { type: 2 }, width: '7%', headerSort: false, align: "center", cellClick: function (e, cell) {
                                var rowData = cell.getRow().getData();
                                var topicID = rowData.topicID;
                                var formID = rowData.formID;
                                var appRole = typeof rowData.appRole != 'undefined' ? rowData.appRole : 3;
                                var formName = rowData.title, topicName = rowData.topicTitle, isAccessible = rowData.isAccessible;
                                var formEditUrl = "{{ url('subforms/edit') }}/" + formID;
                                var formDeleteUrl = "{{ url('subforms/delete') }}/" + formID;
                                var formFilterUrl = "{{ url('subforms/filter-criteria') }}/" + formID;
                                var formRoleUrl = "{{ url('user-forms/roles') }}/" + formID;
                                var formSummaryUrl = "{{ url('summary') }}/" + formID;
                                var formClearUrl = "{{ url('clear_records') }}/" + formID;
                                var formEntryUrl = "{{ url('savedata') }}/" + formID;
                                var formRecordUrl = "{{ url('records') }}/" + formID;
                                if (appRole == 3) {
                                    var actions = '<div class="panel-blue text-center">' +
                                        '<div class="row">' +
                                        '<div class="col-sm-12">' +
                                        '<a class="btn btn-success btn-md entry-button" href="' + formEntryUrl + '"><i class="fa fa-plus" aria-hidden="true"></i> Entry</a>&nbsp;&nbsp;' +
                                        '<a class="btn btn-info btn-md" href="' + formRecordUrl + '"><i class="fa fa-list-ol" aria-hidden="true"></i> Records</a>&nbsp;&nbsp;' +
                                        '<a class="btn btn-default btn-md" href="' + formSummaryUrl + '"><i class="fa fa-th-list" aria-hidden="true"></i> Summary</a>&nbsp;&nbsp;' +
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_form\',\'{{$url}}\')" class="btn btn-primary" title="Copy Form"><i class="fa fa-copy"></i> Copy Form</a>&nbsp;&nbsp;' +
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_application\',\'\')" class="btn btn-primary" title="Copy Application"><i class="fa fa-copy"></i> Copy Application</a>' +
                                        '<div class="form-group more_setup-wrap mt-15 mb-10"><input type="checkbox" class="show-more-settings" id="more_setup" name="more_setup">&nbsp;<label for="more_setup">Administrator Settings</label></div>' +
                                        '<div class="form-group">' +
                                        '<a class="btn btn-primary btn-md" href="' + formEditUrl + '"><i class="fa fa-edit" aria-hidden="true"></i> Edit Form</a>&nbsp;&nbsp;' +
                                        '<a class="btn btn-default btn-md" href="' + formFilterUrl + '"><i class="fa fa-filter" aria-hidden="true"></i> Filter Criteria</a>&nbsp;&nbsp;' +
                                        '<a class="btn btn-default btn-md" href="' + formRoleUrl + '"><i class="fa fa-user-tag" aria-hidden="true"></i> Form Roles</a>&nbsp;&nbsp;' +
                                        '<button class="btn btn-danger btn-md" onClick="return formClear(\'' + formClearUrl + '\');"><i class="fa fa-eraser" aria-hidden="true"></i> Clear Records</button>&nbsp;&nbsp;' +
                                        '<button class="btn btn-danger btn-md" onClick="return formDel(\'' + formDeleteUrl + '\');"><i class="fa fa-trash" aria-hidden="true"></i> Delete Form</button></div>' +
                                        '<div class="form-group advance_setup-wrap mt-15 mb-10"><input type="checkbox" class="show-advance-settings" id="advance_setup" name="advance_setup">&nbsp;<label for="advance_setup">Advance Settings</label></div>' +
                                        '<div class="form-group">' +
                                        '<a href="forms/edit" class="btn btn-primary btn-md"><i class="fa fa-edit" aria-hidden="true"></i> Edit Topic</a>&nbsp;&nbsp;' +
                                        '<button class="btn btn-danger btn-md" title="Delete Menu" onClick="return topicDel(' + topicID + ');"><i class="fa fa-trash" aria-hidden="true"></i> Delete Topic</button>&nbsp;&nbsp;' +
                                        '<button class="btn btn-info btn-md" title="Quick Edit Form" onClick="getFunction()"><i class="fa fa-pen"></i> Quick Edit Form</button>&nbsp;&nbsp;' +
                                        '<br/><a href="forms/download" class="btn btn-warning" title="Export to JSON"><i class="fa fa-download"></i> Export to JSON</a>&nbsp;&nbsp;' +
                                        '<a href="forms/exportFormExcel" class="btn btn-warning" title="Export to Excel (Full)"><i class="fa fa-download"></i> Export to Excel (Full)</a>&nbsp;&nbsp;' +
                                        '<a href="forms/exportFormExcel" class="btn btn-warning" title="Export to Excel (Basic)"><i class="fa fa-download"></i> Export to Excel (Basic)</a>&nbsp;&nbsp;' +
                                        '</div></div></div></div></div>';
                                }
                                else {
                                    var actions = '<div class="panel-blue text-center">' +
                                        '<div class="row">' +
                                        '<div class="col-sm-12">' +
                                        '<a class="btn btn-success btn-md entry-button" href="' + formEntryUrl + '"><i class="fa fa-plus" aria-hidden="true"></i> Entry</a>&nbsp;&nbsp;' +
                                        '<a class="btn btn-info btn-md" href="' + formRecordUrl + '"><i class="fa fa-list-ol" aria-hidden="true"></i> Records</a>&nbsp;&nbsp;' +
                                        '<a class="btn btn-default btn-md" href="' + formSummaryUrl + '"><i class="fa fa-th-list" aria-hidden="true"></i> Summary</a>&nbsp;&nbsp;' +
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_form\',\'{{$url}}\')" class="btn btn-primary" title="Copy Form"><i class="fa fa-copy"></i> Copy Form</a>&nbsp;&nbsp;' +
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_application\',\'\')" class="btn btn-primary" title="Copy Application"><i class="fa fa-copy"></i> Copy Application</a>' +
                                        '<a href="" class="btn btn-warning" title="Download"><i class="fa fa-download"></i> Download Form</a>&nbsp;&nbsp;' +
                                        '<a href="" class="btn btn-warning" title="Export Form Excel"><i class="fa fa-download"></i> Export Form Excel</a>&nbsp;&nbsp;' +
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'import_form\',\'\')" class="btn btn-success" title="Import Form Excel"><i class="fa fa-upload"></i> Import Form Excel</a>&nbsp;&nbsp;' +
                                        '</div></div></div>';
                                }
                                bootbox.dialog({
                                    backdrop: true,
                                    onEscape: true,
                                    title: formName + ' (' + topicName + ")",
                                    //size: 'small',
                                    message: actions
                                })
                                    .on('shown.bs.modal', function (e) {
                                    if (Object.keys(rowData).length) {
                                        //$('.bootbox.modal .form-actions').removeClass('disabled hidden');
                                        if (!isAccessible) {
                                            $('.bootbox.modal a.entry-button').addClass('disabled');
                                        }
                                        /*if(userRole > 1){
                                            $('.bootbox.modal .group-actions').removeClass('disabled hidden');
                                        }else{
                                            $('.bootbox.modal .group-actions').addClass('disabled hidden');
                                        } */
                                    }
                                    else {
                                        $('.bootbox.modal .group-actions,.bootbox.modal .form-actions').addClass('disabled hidden');
                                    }
                                });
                                // $( "div.form-group.more_setup-wrap", '.panel-blue' ).nextUntil( "div.form-group.advance_setup-wrap" ).hide();
                                // $( "div.form-group.advance_setup-wrap", '.panel-blue' ).nextAll( "div.form-group" ).hide();
                            } },
                        { title: "App ID", field: 'applicationId', visible: false },
                        { title: "Topic ID", field: 'topicID', visible: false },
                        { title: "Form ID", field: 'formID', visible: false },
                        { title: "Topic Name", field: 'topicTitle', headerFilter: true },
                        //{title:"Topic Description", width:'33%'},
                        { title: "Form Name", field: 'title', headerFilter: true, formatter: 'html', cellClick: function (e, cell) {
                                var rowData = cell.getRow().getData();
                                window.location.href = "{{ url('records') }}/" + rowData.formID;
                            } },
                        { title: "Form Tags", field: 'formTag', headerFilter: true, sorter: "string", sorterParams: { alignEmptyValues: "bottom" } },
                        { title: "Form Type", field: 'formType', headerFilter: "select", headerFilterParams: { values: formTypes } },
                        { title: "Form Status", field: 'status', headerFilter: "select", headerFilterParams: { values: formStatus } },
                        { title: "Last Activity", field: "lastActivityDate", headerFilter: true, sorter: 'datetime', sorterParams: { format: "{{config('app.datetime_format_js')}}", alignEmptyValues: "bottom" } },
                        { title: "Number of Records", field: "totalRecords", headerFilter: true, sorter: "number", align: 'right' }
                    ]
                });
                tabulatorChildren[applicationId] = childTabulator;
                $(".table-wrapper").hide();
            },
            ajaxFiltering: true,
            ajaxURL: "http://geligulu.augursapps.com/api/FormAPI/GetApplicationList",
            ajaxProgressiveLoad: "scroll",
            paginationSize: 50,
            ajaxResponse: function (url, params, response) {
                //url - the URL of the request
                //params - the parameters passed with the request
                //response - the JSON object returned in the body of the response.
                return response; //pass the data array into Tabulator
            },
        });
        //  setTabulatorHeaderFilter(tabulator);
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSwwQ0FBMEM7O0FBQzFDOzs7SUFHSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQSx5RUFBeUU7O0FBQ3pFO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlFQUFpRTtJQUNqRTtRQUNJLFlBQVk7UUFDWix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLFdBQVc7SUFDZjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksbURBQW1EO1FBQ25ELFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtJQUMzQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIC5nbHlwaGljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXHJcbmxpLmxpbmstYWN0aXZlIGEsXHJcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXHJcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cclxuLm1haW4tbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXHJcbiAgICAubWFpbi1uYXYge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcclxuICAgIH1cclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIHVsIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgbGkge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBtYXJnaW46IDZweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgbGkgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgYSB7XHJcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/public/application/application-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/public/application/application-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ApplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationRoutingModule", function() { return ApplicationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_application_list_application_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-application/list-application.component */ "./src/app/public/application/list-application/list-application.component.ts");
/* harmony import */ var _create_application_create_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-application/create-application.component */ "./src/app/public/application/create-application/create-application.component.ts");
/* harmony import */ var _edit_application_edit_application_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-application/edit-application.component */ "./src/app/public/application/edit-application/edit-application.component.ts");






const routes = [
    { path: '', component: _list_application_list_application_component__WEBPACK_IMPORTED_MODULE_3__["ListApplicationComponent"], pathMatch: 'full' },
    { path: 'create', component: _create_application_create_application_component__WEBPACK_IMPORTED_MODULE_4__["CreateApplicationComponent"] },
    { path: 'edit/:appId', component: _edit_application_edit_application_component__WEBPACK_IMPORTED_MODULE_5__["EditApplicationComponent"] }
];
let ApplicationRoutingModule = class ApplicationRoutingModule {
};
ApplicationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ApplicationRoutingModule);



/***/ }),

/***/ "./src/app/public/application/application.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/public/application/application.module.ts ***!
  \**********************************************************/
/*! exports provided: ApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationModule", function() { return ApplicationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _application_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application-routing.module */ "./src/app/public/application/application-routing.module.ts");
/* harmony import */ var _list_application_list_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-application/list-application.component */ "./src/app/public/application/list-application/list-application.component.ts");
/* harmony import */ var _create_application_create_application_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-application/create-application.component */ "./src/app/public/application/create-application/create-application.component.ts");
/* harmony import */ var _edit_application_edit_application_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-application/edit-application.component */ "./src/app/public/application/edit-application/edit-application.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let ApplicationModule = class ApplicationModule {
};
ApplicationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_application_list_application_component__WEBPACK_IMPORTED_MODULE_4__["ListApplicationComponent"], _create_application_create_application_component__WEBPACK_IMPORTED_MODULE_5__["CreateApplicationComponent"], _edit_application_edit_application_component__WEBPACK_IMPORTED_MODULE_6__["EditApplicationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _application_routing_module__WEBPACK_IMPORTED_MODULE_3__["ApplicationRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
        ]
    })
], ApplicationModule);



/***/ }),

/***/ "./src/app/public/application/create-application/create-application.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/public/application/create-application/create-application.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9hcHBsaWNhdGlvbi9jcmVhdGUtYXBwbGljYXRpb24vY3JlYXRlLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/public/application/create-application/create-application.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/public/application/create-application/create-application.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CreateApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateApplicationComponent", function() { return CreateApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Models_FormGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Models/FormGenerator */ "./src/app/Models/FormGenerator.ts");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common-service.service */ "./src/app/services/common-service.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_enum_common_enum_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enum/common-enum.enum */ "./src/app/enum/common-enum.enum.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");







let CreateApplicationComponent = class CreateApplicationComponent {
    constructor(commonservice, translate) {
        this.commonservice = commonservice;
        this.translate = translate;
        this.applicationData = new src_app_Models_FormGenerator__WEBPACK_IMPORTED_MODULE_2__["ApplicationTable"]();
        this.accessList = [];
        this.statusList = [];
    }
    ngOnInit() {
        this.accessList = [{ "name": "Yes", "value": true, "ischecked": false }, { "name": "No", "value": false, "ischecked": true }];
        this.statusList = [{ "name": "Draft", "value": 1, "ischecked": true }, { "name": "Active", "value": 2, "ischecked": false }, { "name": "InActive", "value": 3, "ischecked": false }, { "name": "Template", "value": 4, "ischecked": false }];
        this.applicationData.status = 1;
        this.applicationData.publicTemplate = false;
        this.applicationData.protectedApplication = false;
    }
    changeCheckbox(type, event) {
        if (type == 1) {
            this.applicationData.publicTemplate = event.target.checked;
        }
        if (type == 2) {
            this.applicationData.protectedApplication = event.target.checked;
        }
    }
    manageApplication(data) {
        this.commonservice.manageApplication(data).subscribe(dataList => {
            this.exists = underscore__WEBPACK_IMPORTED_MODULE_4__["_"].findWhere(dataList, { res: 1 });
            if (this.exists) {
                alert(this.exists.Message);
            }
            else {
                this.exists = underscore__WEBPACK_IMPORTED_MODULE_4__["_"].findWhere(dataList, { res: -1 });
                alert(this.exists.Message);
            }
        }, err => console.log(err));
    }
    onSubmit() {
        if (!this.applicationData.applicationTitle) {
            alert('Please Enter Title');
            return;
        }
        this.applicationData.action = src_app_enum_common_enum_enum__WEBPACK_IMPORTED_MODULE_5__["actionType"].insert;
        if (!this.applicationData.publicTemplate) {
            this.applicationData.publicTemplate = false;
        }
        if (!this.applicationData.protectedApplication) {
            this.applicationData.protectedApplication = false;
        }
        if (!this.applicationData.status) {
            this.applicationData.status = 0;
        }
        this.manageApplication(this.applicationData);
    }
};
CreateApplicationComponent.ctorParameters = () => [
    { type: src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
CreateApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-application',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-application.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/application/create-application/create-application.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-application.component.css */ "./src/app/public/application/create-application/create-application.component.css")).default]
    })
], CreateApplicationComponent);



/***/ }),

/***/ "./src/app/public/application/edit-application/edit-application.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/public/application/edit-application/edit-application.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9hcHBsaWNhdGlvbi9lZGl0LWFwcGxpY2F0aW9uL2VkaXQtYXBwbGljYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/public/application/edit-application/edit-application.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/public/application/edit-application/edit-application.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApplicationComponent", function() { return EditApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Models_FormGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Models/FormGenerator */ "./src/app/Models/FormGenerator.ts");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common-service.service */ "./src/app/services/common-service.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_enum_common_enum_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enum/common-enum.enum */ "./src/app/enum/common-enum.enum.ts");
/* harmony import */ var tabulator_tables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tabulator-tables */ "./node_modules/tabulator-tables/dist/js/tabulator.js");
/* harmony import */ var tabulator_tables__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tabulator_tables__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let EditApplicationComponent = class EditApplicationComponent {
    constructor(commonservice, route) {
        this.commonservice = commonservice;
        this.route = route;
        this.applicationData = new src_app_Models_FormGenerator__WEBPACK_IMPORTED_MODULE_2__["ApplicationTable"]();
        this.applicationDataTemp = new src_app_Models_FormGenerator__WEBPACK_IMPORTED_MODULE_2__["ApplicationTable"]();
        this.applicationParam = new src_app_Models_FormGenerator__WEBPACK_IMPORTED_MODULE_2__["ApplicationTable"]();
        this.accessList = [];
        this.statusList = [];
    }
    ngOnInit() {
        this.accessList = [{ "name": "Yes", "value": true, "ischecked": false }, { "name": "No", "value": false, "ischecked": true }];
        this.statusList = [{ "name": "Draft", "value": 1, "ischecked": true }, { "name": "Active", "value": 2, "ischecked": false }, { "name": "InActive", "value": 3, "ischecked": false }, { "name": "Template", "value": 4, "ischecked": false }];
        this.applicationData.status = 1;
        this.applicationData.publicTemplate = false;
        this.applicationData.protectedApplication = false;
        this.applicationData.action = src_app_enum_common_enum_enum__WEBPACK_IMPORTED_MODULE_5__["actionType"].SpecificRecord;
        if (this.route.snapshot.paramMap.get("appId"))
            this.applicationData.applicationId = Number(this.route.snapshot.paramMap.get("appId"));
        this.manageApplication(this.applicationData);
        var actionIcon = function (cell, formatterParams) {
            if (formatterParams.type === 1)
                return '<img src="../Bundles/AngularOutput/assets/images/settings.png" width="20">';
            else
                return '<i class="fa fa-cogs" aria-hidden="true"></i>';
        };
        var status_value = 0, tabulator, tabulatorChildren = [];
        var formTypes = ['', 'Personal', 'Private', 'Public', 'Open'];
        var formStatus = ['', 'Draft', 'Active', 'Inactive', 'Template'];
        tabulator = new tabulator_tables__WEBPACK_IMPORTED_MODULE_6___default.a('#forms-table', {
            height: '80%',
            initialSort: [
                { column: "lastActivityDate", dir: "desc" }
            ],
            persistenceID: "appDetail",
            footerElement: "<span class='pull-left' id='no-of-forms'></span>",
            dataLoaded: function (data) {
                //data - all data loaded into the table
                $('#forms-table .tabulator-footer #no-of-forms').text("Total Forms: " + data.length);
            },
            dataFiltered: function (filters, rows) {
                //filters - array of filters currently applied
                //rows - array of row components that pass the filters
                $('#forms-table .tabulator-footer #no-of-forms').text("Total Forms: " + rows.length);
            },
            pagination: "local",
            paginationSize: 20,
            columns: [
                { title: "Actions", field: "childActions", formatter: actionIcon, formatterParams: { type: 2 }, width: 30, frozen: true, headerSort: false, align: "center", cellClick: function (e, cell) {
                        var rowData = cell.getRow().getData();
                        var topicID = rowData.topicID;
                        var formID = rowData.formID;
                        var applicationId = rowData.applicationId;
                        var appRole = typeof rowData.appRole !== 'undefined' ? rowData.appRole : 3;
                        var formName = rowData.title, topicName = rowData.topicTitle, isAccessible = rowData.isAccessible;
                        var formEditUrl = "{{ url('subforms/edit') }}/" + formID;
                        var formDeleteUrl = "{{ url('subforms/delete') }}/" + formID;
                        var formFilterUrl = "{{ url('subforms/filter-criteria') }}/" + formID;
                        var formRoleUrl = "{{ url('user-forms/roles') }}/" + formID;
                        var formSummaryUrl = "{{ url('summary') }}/" + formID;
                        var formClearUrl = "{{ url('clear_records') }}/" + formID;
                        var formEntryUrl = "{{ url('savedata') }}/" + formID;
                        var formRecordUrl = "{{ url('records') }}/" + formID;
                        if (appRole == 3) {
                            var actions = '<div class="panel-blue text-center">' +
                                '<div class="row">' +
                                '<div class="col-sm-12">' +
                                '<a class="btn btn-success btn-md entry-button" href="' + formEntryUrl + '"><i class="fa fa-plus" aria-hidden="true"></i> Entry</a>&nbsp;&nbsp;' +
                                '<a class="btn btn-info btn-md" href="' + formRecordUrl + '"><i class="fa fa-list-ol" aria-hidden="true"></i> Records</a>&nbsp;&nbsp;' +
                                '<a class="btn btn-default btn-md" href="' + formSummaryUrl + '"><i class="fa fa-th-list" aria-hidden="true"></i> Summary</a>&nbsp;&nbsp;' +
                                '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_form\',\'{{$url}}\')" class="btn btn-primary" title="Copy Form"><i class="fa fa-copy"></i> Copy Form</a>&nbsp;&nbsp;' +
                                '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_application\')" class="btn btn-primary" title="Copy Application"><i class="fa fa-copy"></i> Copy Application</a>' +
                                '<div class="form-group more_setup-wrap mt-15 mb-10"><input type="checkbox" class="show-more-settings" id="more_setup" name="more_setup">&nbsp;<label for="more_setup">Administrator Settings</label></div>' +
                                '<div class="form-group">' +
                                '<a class="btn btn-primary btn-md" href="' + formEditUrl + '"><i class="fa fa-edit" aria-hidden="true"></i> Edit Form</a>&nbsp;&nbsp;' +
                                '<a class="btn btn-default btn-md" href="' + formFilterUrl + '"><i class="fa fa-filter" aria-hidden="true"></i> Filter Criteria</a>&nbsp;&nbsp;' +
                                '<a class="btn btn-default btn-md" href="' + formRoleUrl + '"><i class="fa fa-user-tag" aria-hidden="true"></i> Form Roles</a>&nbsp;&nbsp;' +
                                '<button class="btn btn-danger btn-md" onClick="return formClear(\'' + formClearUrl + '\');"><i class="fa fa-eraser" aria-hidden="true"></i> Clear Records</button>&nbsp;&nbsp;' +
                                '<button class="btn btn-danger btn-md" onClick="return formDel(\'' + formDeleteUrl + '\');"><i class="fa fa-trash" aria-hidden="true"></i> Delete Form</button></div>' +
                                '<div class="form-group advance_setup-wrap mt-15 mb-10"><input type="checkbox" class="show-advance-settings" id="advance_setup" name="advance_setup">&nbsp;<label for="advance_setup">Advance Settings</label></div>' +
                                '<div class="form-group">' +
                                '<a href="" class="btn btn-primary btn-md"><i class="fa fa-edit" aria-hidden="true"></i> Edit Topic</a>&nbsp;&nbsp;' +
                                '<button class="btn btn-danger btn-md" title="Delete Menu" onClick="return topicDel(' + topicID + ');"><i class="fa fa-trash" aria-hidden="true"></i> Delete Topic</button>&nbsp;&nbsp;' +
                                '<a href="" class="btn btn-info group-actions" title="Quick Edit"><i class="fa fa-pen"></i> Quick Edit Form</a>&nbsp;&nbsp;' +
                                '<br/><a href="" class="btn btn-warning" title="Export to JSON"><i class="fa fa-download"></i> Export to JSON</a>&nbsp;&nbsp;' +
                                '<a href="" class="btn btn-warning" title="Export to Excel (Full)"><i class="fa fa-download"></i> Export to Excel (Full)</a>&nbsp;&nbsp;' +
                                '<a href="" class="btn btn-warning" title="Export to Excel (Basic)"><i class="fa fa-download"></i> Export to Excel (Basic)</a>&nbsp;&nbsp;' +
                                '</div></div></div></div></div>';
                        }
                        else {
                            var actions = '<div class="panel-blue text-center">' +
                                '<div class="row">' +
                                '<div class="col-sm-12">' +
                                '<a class="btn btn-success btn-md entry-button" href="' + formEntryUrl + '"><i class="fa fa-plus" aria-hidden="true"></i> Entry</a>&nbsp;&nbsp;' +
                                '<a class="btn btn-info btn-md" href="' + formRecordUrl + '"><i class="fa fa-list-ol" aria-hidden="true"></i> Records</a>&nbsp;&nbsp;' +
                                '<a class="btn btn-default btn-md" href="' + formSummaryUrl + '"><i class="fa fa-th-list" aria-hidden="true"></i> Summary</a>&nbsp;&nbsp;' +
                                '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_form\',\'{{$url}}\')" class="btn btn-primary" title="Copy Form"><i class="fa fa-copy"></i> Copy Form</a>&nbsp;&nbsp;' +
                                '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_application\')" class="btn btn-primary" title="Copy Application"><i class="fa fa-copy"></i> Copy Application</a>' +
                                '<a href="" class="btn btn-warning" title="Export to Form"><i class="fa fa-download"></i> Export to Form</a>&nbsp;&nbsp;' +
                                '<a href="" class="btn btn-warning" title="Export to Excel (Full)"><i class="fa fa-download"></i> Export to Excel (Full)</a>&nbsp;&nbsp;' +
                                '<a href="" class="btn btn-warning" title="Export to Excel (Basic)"><i class="fa fa-download"></i> Export to Excel (Basic)</a>&nbsp;&nbsp;' +
                                '</div></div></div>';
                        }
                        bootbox.dialog({
                            backdrop: true,
                            onEscape: true,
                            title: formName + ' (' + topicName + ")",
                            //size: 'small',
                            message: actions
                        })
                            .on('shown.bs.modal', function (e) {
                            if (Object.keys(rowData).length) {
                                //$('.bootbox.modal .form-actions').removeClass('disabled hidden');
                                if (!isAccessible) {
                                    $('.bootbox.modal a.entry-button').addClass('disabled');
                                }
                                /*if(userRole > 1){
                                    $('.bootbox.modal .group-actions').removeClass('disabled hidden');
                                }else{
                                    $('.bootbox.modal .group-actions').addClass('disabled hidden');
                                } */
                            }
                            else {
                                $('.bootbox.modal .group-actions,.bootbox.modal .form-actions').addClass('disabled hidden');
                            }
                        });
                        // $( "div.form-group.more_setup-wrap", '.panel-blue' ).nextUntil( "div.form-group.advance_setup-wrap" ).hide();
                        // $( "div.form-group.advance_setup-wrap", '.panel-blue' ).nextAll( "div.form-group" ).hide();
                    } },
                { title: "App ID", field: 'applicationId', visible: false },
                { title: "Topic ID", field: 'topicID', visible: false },
                { title: "Form ID", field: 'formID', visible: false },
                { title: "Form Name", field: 'title', headerFilter: true, formatter: 'html', cellClick: function (e, cell) {
                        var rowData = cell.getRow().getData();
                        window.location.href = "{{ url('records') }}/" + rowData.formID;
                    } },
                { title: "Topic Name", field: 'topicTitle', headerFilter: true },
                { title: "Form Tags", field: 'formTag', headerFilter: true },
                { title: "Form Type", field: 'formType', headerFilter: "select", headerFilterParams: { values: formTypes } },
                { title: "Last Activity", field: "lastActivityDate", headerFilter: true, sorter: 'datetime', sorterParams: { format: "{{config('app.datetime_format_js')}}", alignEmptyValues: "bottom" } },
                { title: "Number of Records", field: "totalRecords", headerFilter: true, sorter: "number", align: 'right' },
                { title: "Form Status", field: 'status', headerFilter: "select", headerFilterParams: { values: formStatus } }
            ],
            ajaxURL: ""
        });
        // setTabulatorHeaderFilter(tabulator);
    }
    formFunction(applicationId, topicID, formID, type, url = '') {
        if (type === "copy_application") {
            bootbox.dialog({
                onEscape: true,
                title: "Copy Application",
                message: '<div class="row">' +
                    '<div class="col-sm-12">' +
                    '<form class="form-horizontal" id="quickFrm" action="{{url("getSave")}}">' +
                    '<input type="hidden" name="form_type" value="copy_application" /><input type="hidden" name="form_id" value="' + applicationId + '" />' +
                    '<div class="form-group"><label class="control-label col-sm-4">Application name :</label><div class="col-sm-6"><input type="text" name="form_name" id="frmName" class="form-control"></div></div>' +
                    '<div class="form-group"><div class="col-sm-offset-4 col-sm-8">' +
                    '<button class="btn btn-primary">Save</button> &nbsp;' +
                    '<button class="btn btn-default" data-dismiss="modal">Cancel</button></div></div></form>' +
                    '</div></div>'
            });
        }
        if (type === "copy_form") {
            var redirect = "{{url('getSave')}}";
            $.ajax({
                type: "post",
                url: url,
                success: function (data) {
                    data = JSON.parse(data);
                    if (data) {
                        bootbox.dialog({
                            onEscape: true,
                            //title: "Copy Form",
                            message: '<div class="row">' +
                                '<div class="col-sm-12">' +
                                '<ul class="nav nav-tabs" role="tablist">' +
                                '<li class="nav-item active"><a class="nav-link" data-toggle="tab" href="#home" role="tab">Quick Form</a></li>' +
                                '<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#profile" role="tab">Advance Form</a></li>' +
                                '</ul><div class="tab-content">' +
                                '<div class="tab-pane active" id="home" role="tabpanel">' +
                                '<form class="form-horizontal" id="quickFrm" action="' + redirect + '">' +
                                '<div class="col-sm-12 form-group"><input type="hidden" name="btnType" value="copy_btn" /><input type="hidden" name="copyFormId" value="' + formID + '" />' +
                                '<div class="col-sm-4"><label class="control-label">Enter Form Name :</label><input type="hidden" name="form_type" value="quick" /></div>' +
                                '<div class="col-sm-8"><input type="text" name="form_name" id="frmName" class="form-control"></div></div>' +
                                '<div class="col-sm-12 form-group">' +
                                '<div class="col-sm-4"></div>' +
                                '<div class="col-sm-8"><label><input type="checkbox" name="check_value" checked/> Put the Form in \"General Application\"</label></div></div>' +
                                '<div class="col-sm-offset-4 col-sm-8 navbar-btn btn-sm">' +
                                '<button class="btn btn-primary">Create</button> &nbsp;' +
                                '<button class="btn btn-default" data-dismiss="modal">Cancel</button></div></form></div>' +
                                '<div class="tab-pane" id="profile" role="tabpanel">' +
                                '<form class="form-horizontal" id="advancedForm" action="' + redirect + '">' +
                                '<div class="col-sm-12 form-group"><input type="hidden" name="form_type" value="advanced" />' +
                                '<div class="col-sm-4"><input type="hidden" name="btnType" value="copy_btn" /><input type="hidden" name="copyFormId" value="' + formID + '" />' +
                                '<label class="control-label">Enter Form Name :</label></div>' +
                                '<div class="col-sm-8">' +
                                '<input type="text" class="form-control" name="form_name" id="frmName" /></div></div>' +
                                '<div class="col-sm-12 form-group">' +
                                '<div class="col-sm-4"><label class="control-label">Select Application :</label></div>' +
                                '<div class="col-sm-8">' + data.appOption + '</div></div>' +
                                '<div class="col-sm-12 form-group">' +
                                '<div class="col-sm-4"></div>' +
                                '<div class="col-sm-8"><a href="javascript:;" onclick="app_link()"><i class="fa fa-plus"></i> Add Application</a></div></div>' +
                                '<div class="col-sm-12 form-group">' +
                                '<div class="col-sm-4"><label class="control-label">Select Topic :</label></div>' +
                                '<div class="col-sm-8">' + data.topicOption + '</div></div>' +
                                '<div class="col-sm-12 form-group">' +
                                '<div class="col-sm-4"></div>' +
                                '<div class="col-sm-8"><a href="javascript:;" onclick="topic_link(\'advancedForm\')"><i class="fa fa-plus"></i> Add Topic</a></div></div>' +
                                '<div class="col-sm-offset-4 col-sm-8 navbar-btn btn-sm"><button class="btn btn-primary">Create</button>&nbsp;' +
                                '<button class="btn btn-default" data-dismiss="modal">Cancel</button></div>' +
                                '</form></div></div></div></div>'
                        });
                    }
                },
                error: function (error) { console.log(error); }
            });
        }
    }
    manageApplication(data) {
        this.commonservice.manageApplication(data).subscribe(dataList => {
            if (data.action == 6) {
                if (dataList.length > 0)
                    this.applicationData = dataList[0];
                this.applicationDataTemp = Object.assign({}, this.applicationData);
                $("#publicTemplate").prop("checked", this.applicationData.publicTemplate);
                $("#protectedApplication").prop("checked", this.applicationData.protectedApplication);
            }
            else {
                this.exists = underscore__WEBPACK_IMPORTED_MODULE_4__["_"].findWhere(dataList, { res: 1 });
                if (this.exists) {
                    alert(this.exists.Message);
                }
                else {
                    this.exists = underscore__WEBPACK_IMPORTED_MODULE_4__["_"].findWhere(dataList, { res: -1 });
                    alert(this.exists.Message);
                }
            }
        }, err => console.log(err));
    }
    onUpdate() {
        if (!this.applicationData.applicationTitle) {
            alert('Please Enter Title');
            return;
        }
        this.applicationData.action = src_app_enum_common_enum_enum__WEBPACK_IMPORTED_MODULE_5__["actionType"].updateByRecord;
        if (!this.applicationData.publicTemplate) {
            this.applicationData.publicTemplate = false;
        }
        if (!this.applicationData.protectedApplication) {
            this.applicationData.protectedApplication = false;
        }
        if (!this.applicationData.status) {
            this.applicationData.status = 0;
        }
        this.manageApplication(this.applicationData);
    }
    getFunction(url, applicationID, method) {
        method = (method !== undefined ? method : 'default');
        // if(method === 'add-form')
        //  //   addForm(url, applicationID);
        // if(method === 'add-queue')
        //   //  addQueue(url, applicationID);
        // else
        if (method === "copy-application") {
            bootbox.dialog({
                onEscape: true,
                title: "Copy Application",
                message: '<div class="row">' +
                    '<div class="col-sm-12">' +
                    '<form class="form-horizontal" id="quickFrm" action="{{url("getSave")}}">' +
                    '<input type="hidden" name="form_type" value="copy_application" /><input type="hidden" name="form_id" value="' + applicationID + '" />' +
                    '<div class="form-group"><label class="control-label col-sm-4">Application Name :</label><div class="col-sm-6"><input type="text" name="form_name" class="form-control"></div></div>' +
                    '<div class="form-group"><label class="control-label col-sm-4">Application Tag :</label><div class="col-sm-6"><input type="text" name="app_tag" class="form-control"></div></div>' +
                    '<div class="form-group"><div class="col-sm-offset-4 col-sm-8">' +
                    '<button class="btn btn-primary">Save</button> &nbsp;' +
                    '<button class="btn btn-default" data-dismiss="modal">Cancel</button></div></div></form>' +
                    '</div></div>'
            });
        }
        else if (method === 'delete-app') {
            if (confirm('Are you sure you want to delete it?')) {
                window.location.href = url + "/" + applicationID;
            }
        }
        else if (method === "app-roles") {
            window.location.href = url + "/" + applicationID;
            return false;
        }
        return false;
    }
    openAddNewForm() {
        var diff = "";
        bootbox.dialog({
            onEscape: true,
            className: 'add-new-form-modal',
            message: '<div class="container pad-0">' +
                '<div class="panel-blue pad-0">' +
                '<div class="panel-body">' +
                '<div class="row">' +
                '<div class="col-sm-6">' +
                '<div class="tab-pane" id="profile" role="tabpanel">' +
                '<form class="form-horizontal" id="advancedForm" action="{{url("getSave")}}">' +
                '<div class="col-sm-12 form-group">' +
                '<div class="col-sm-4"><label class="control-label">Select Application :</label></div>' +
                '<div class="col-sm-8">' + this.applicationDataTemp.applicationTitle + '</div></div>' +
                '<div class="col-sm-12 form-group">' +
                '<div class="col-sm-4"><label class="control-label">Select Topic :</label></div>' +
                '<div class="col-sm-8">+data.topicOption+</div></div>' +
                '<div class="col-sm-12 form-group">' +
                '<div class="col-sm-4"></div>' +
                '<div class="col-sm-8"><a href="javascript:;" onclick="topic_link(\'advancedForm\')"><i class="fa fa-plus"></i> Add New Topic</a></div></div>' +
                '<div class="col-sm-12 navbar-btn btn-sm text-center"><button class="btn btn-primary">Create ' + (diff == "check" ? "Queue" : "Form") + '</button>&nbsp;' +
                '<button class="btn btn-default" data-dismiss="modal">Cancel</button></div>' +
                '</form></div>' +
                '</div></div></div></div></div>'
        });
    }
    addNewTopic() {
        var formName = "";
        bootbox.prompt({
            title: 'Add New Topic',
            placeholder: 'Enter Topic Name',
            value: $.trim(formName),
            buttons: {
                confirm: {
                    label: 'Submit'
                }
            },
            callback: function (value) {
                if (value) {
                }
            }
        });
    }
};
EditApplicationComponent.ctorParameters = () => [
    { type: src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
EditApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-application',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-application.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/application/edit-application/edit-application.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-application.component.css */ "./src/app/public/application/edit-application/edit-application.component.css")).default]
    })
], EditApplicationComponent);



/***/ }),

/***/ "./src/app/public/application/list-application/list-application.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/public/application/list-application/list-application.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9hcHBsaWNhdGlvbi9saXN0LWFwcGxpY2F0aW9uL2xpc3QtYXBwbGljYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/public/application/list-application/list-application.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/public/application/list-application/list-application.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListApplicationComponent", function() { return ListApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var tabulator_tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tabulator-tables */ "./node_modules/tabulator-tables/dist/js/tabulator.js");
/* harmony import */ var tabulator_tables__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tabulator_tables__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_Models_FormGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/FormGenerator */ "./src/app/Models/FormGenerator.ts");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-service.service */ "./src/app/services/common-service.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");







let ListApplicationComponent = class ListApplicationComponent {
    constructor(commonservice, translate) {
        this.commonservice = commonservice;
        this.translate = translate;
        this.applicationData = new src_app_Models_FormGenerator__WEBPACK_IMPORTED_MODULE_3__["ApplicationTable"]();
    }
    ngOnInit() {
        //   //called after the constructor and called  after the first ngOnChanges()
        //   var tableData = [
        //     { id: 1, name: "Billy Bob", age: "12", gender: "male", height: 1, col: "red", dob: "", cheese: 1 },
        //     { id: 2, name: "Mary May", age: "1", gender: "female", height: 2, col: "blue", dob: "14/05/1982", cheese: true },
        //   ]
        //   var table = new Tabulator("#application-table", {
        //    // data: tableData, //set initial table data
        //    ajaxURL: "https://localhost:44303/api/FormAPI/GetApplicationList",
        //  //  ajaxParams:{key1:"value1", key2:"value2"}, //ajax parameters
        //   //ajaxConfig:"post", //ajax HTTP request type
        //     columns: [
        //       { title: "applicationTitle", field: "applicationTitle" },
        //     ],
        //     ajaxResponse:function(url, params, response){
        //       //url - the URL of the request
        //       //params - the parameters passed with the request
        //       //response - the JSON object returned in the body of the response.
        //       return response; //pass the data array into Tabulator
        //    },
        //   });
        var status_value = 0, tabulator, tabulatorChildren = [];
        var formTypes = ['', 'Personal', 'Private', 'Public', 'Open'];
        var formStatus = ['', 'Draft', 'Active', 'Inactive', 'Template'];
        //custom formatter definition
        var arrowIcon = function (cell, formatterParams) {
            return "<i class='glyphicon glyphicon-chevron-right'></i>";
        };
        //custom formatter definition
        var actionIcon = function (cell, formatterParams) {
            if (formatterParams.type === 1)
                return '<img src="../Bundles/AngularOutput/assets/images/settings.png" width="20">';
            else
                return '<i class="fa fa-cogs" aria-hidden="true"></i>';
        };
        // var tabulator = $("input[name=tabulator]").val();
        var itemName = tabulator + 'Actions';
        var actionObj = JSON.parse(localStorage.getItem(itemName));
        if (actionObj && actionObj['responsive']) {
            $(window).resize(function () {
                tabulator.redraw();
            });
        }
        tabulator = new tabulator_tables__WEBPACK_IMPORTED_MODULE_2___default.a('#application-table', {
            placeholder: "No application.",
            selectable: true,
            movableRows: true,
            responsiveLayout: (actionObj ? actionObj['responsive'] : false),
            persistenceID: "E",
            //index:"applicationId",
            columns: [
                { title: "Actions", field: "parentActions", formatter: actionIcon, formatterParams: { type: 1 }, width: 50, frozen: true, headerSort: false, align: "center", cellClick: function (e, cell) {
                        var applicationId = cell.getRow().getData().applicationId;
                        var applicationName = cell.getRow().getData().applicationTitle;
                        var applicationStatus = cell.getRow().getData().status;
                        var applicationCycle = cell.getRow().getData().cycle;
                        var applicationPrivacy = cell.getRow().getData().protected;
                        var applicationRole = typeof cell.getRow().getData().role != 'undefined' ? cell.getRow().getData().role : 3;
                        var prototypeActions = '';
                        var actionsPopup = '<div class="panel-blue">' +
                            '<div class="row">' +
                            '<div class="col-sm-12">' +
                            '<form class="form-inline app-pdf-search mb-0" autocomplete="off">' +
                            '<div class="input-group mb-10">' +
                            '<input type="hidden" id="applicationId" class="form-control" value="' + applicationId + '">' +
                            '<input type="text" id="keyword" class="form-control" placeholder="Search in pdf attachments...">' +
                            '<span class="input-group-btn">' +
                            '<button class="btn btn-default" type="submit"><i class="fa fa-search" aria-hidden="true"></i> Search</button>' +
                            '</span>' +
                            '</div>' +
                            '<button type="button" onclick="groupBy(\'formTag\', ' + applicationId + ')" name="group-rows" class="btn btn-danger mb-10 formTag"> <span class="show-rating"><i class="fa fa-object-group"></i> Group Forms by Tags</span> <span class="hide-rating"><i class="fa fa-object-ungroup"></i> Remove Group</span> </button>' +
                            '<button type="button" class="btn btn-success btn-md mb-10" onClick="getFunction()"><i class="fa fa-plus"></i> Add Form</button>\n\
                                <a href="" class="btn btn-warning btn-md mb-10"><i class="fa fa-download"></i> Download attachments</a>';
                        if (applicationPrivacy == 'No') {
                            actionsPopup += '<button type="button" class="btn btn-primary btn-md mb-10" onClick="getFunction()"><i class="fa fa-clone"></i> Copy Application</button>';
                        }
                        if (applicationRole == 3) {
                            actionsPopup += '<button type="button" class="btn btn-default btn-md mb-10" onClick="getFunction()"><i class="fa fa-users"></i> Application Roles</button>' +
                                '<button type="button" class="btn btn-danger btn-md mb-10" onclick="getFunction()"><i class="fa fa-trash"></i> Delete Application</button>';
                        }
                        actionsPopup += prototypeActions + '</form>' +
                            '</div></div></div></div>';
                        bootbox.dialog({
                            backdrop: true,
                            onEscape: true,
                            title: applicationName + " - Actions",
                            //size: 'small',
                            message: actionsPopup
                        });
                    } },
                { title: "Move Row", field: "rowHandle", rowHandle: true, formatter: "handle", headerSort: false, width: 35, minWidth: 30 },
                { title: "Expand Row", field: "subItems", formatter: arrowIcon, width: 35, headerSort: false, align: "center", cellClick: function (e, cell) {
                        var applicationId = cell.getRow().getData().applicationId;
                        if ($(cell.getElement()).is('.active')) {
                            $(cell.getRow().getElement()).find('.table-wrapper').slideUp();
                            $(cell.getElement()).removeClass('active');
                        }
                        else {
                            $(cell.getRow().getElement()).find('.table-wrapper').slideDown();
                            $(cell.getElement()).addClass('active');
                            var table = tabulatorChildren[applicationId];
                            if (cell.getRow().getData().otherApp) {
                                table.setData("{{ url('otherAppRecords') }}/" + applicationId);
                            }
                            else {
                                table.setData("{{ url('appRecords') }}/" + applicationId);
                            }
                        }
                    } },
                { title: "Application Id", field: "applicationId", visible: false },
                { title: "Application Title", field: "applicationTitle", formatter: "html", align: "left", headerFilter: true, cellClick: function (e, cell) {
                        if (!cell.getRow().getData().otherApp) {
                            var applicationId = cell.getRow().getData().applicationId;
                            // alert(applicationId);
                            window.location.href = 'application/edit/' + applicationId;
                        }
                    } },
                { title: "Application Tag", editor: "textarea", field: "applicationTag", align: "left", headerFilter: "input" },
                { title: "Public Template", field: "publicTemplateText", editor: "select", editorParams: { values: ['Yes', 'No'] }, headerFilter: "select", headerFilterParams: { values: ['', 'Yes', 'No'] } },
                { title: "Status", field: "StatusName", editor: "select", editorParams: { values: ['Draft', 'Active', 'Inactive', 'Template'] }, headerFilter: "select", headerFilterParams: { values: formStatus } },
                { title: "Created At", field: "created_at", headerFilter: true, sorter: 'datetime', sorterParams: { format: "{{config('app.datetime_format_js')}}", alignEmptyValues: "bottom" } }
            ],
            cellEdited: function (cell) {
                //This callback is called any time a cell is edited
                var input = [];
                var json = {};
                var columnName = cell.getColumn().getField();
                json[columnName] = (columnName === "StatusName" ? formStatus.indexOf(cell.getValue()) : cell.getValue());
                //input['url'] = "{{url('update_custom')}}";            
                ///input['data'] = {'table':'application','update':json,'where' : {applicationId : cell.getRow().getData().applicationId}};
                var appid = cell.getRow().getData().applicationId;
                var publicTemplate = (columnName === "publicTemplateText" ? (cell.getValue() == "Yes" ? true : false) : (cell.getRow().getData().publicTemplateText == "Yes" ? true : false));
                var StatusName = (columnName === "StatusName" ? formStatus.indexOf(cell.getValue()) : cell.getRow().getData().status);
                var applicationTag = (columnName === "applicationTag" ? cell.getValue() : cell.getRow().getData().applicationTag);
                $.ajax({
                    type: "POST",
                    url: 'https://localhost:44303/api/FormAPI/ManageApplication',
                    data: { action: 2, applicationId: appid, applicationTag: applicationTag, publicTemplate: publicTemplate, status: StatusName },
                    beforeSend: function () {
                        // showLoader("#application-table");
                        console.log('its Moving');
                    },
                    complete: function () {
                        console.log('its Moved');
                        // $("#application-table").unblock(); 
                    }
                });
            },
            rowMoved: function (row) {
                //row - row component
                var rowIndex = row.getPosition();
                rowIndex += 1;
                var appid = row.getData().applicationId;
                $.ajax({
                    type: "POST",
                    url: 'https://localhost:44303/api/FormAPI/ManageApplication',
                    data: { action: 3, rowOrder: rowIndex, applicationId: appid },
                    beforeSend: function () {
                        // showLoader("#application-table");
                        console.log('its Moving');
                    },
                    complete: function () {
                        console.log('its Moved');
                        // $("#application-table").unblock(); 
                    }
                });
            },
            rowFormatter: function (row) {
                var applicationId = row.getData().applicationId;
                //define a table layout structure and set width of row
                var table = $("<table>", { 'class': 'table table-bordered', 'id': 'application-' + applicationId });
                //append newly formatted contents to the row
                $(row.getElement()).append($('<div>', { 'class': 'table-wrapper', "style": "padding-left: 3%" }).append(table));
                var childTabulator = new tabulator_tables__WEBPACK_IMPORTED_MODULE_2___default.a("#application-" + applicationId, {
                    //height:'50%',
                    layout: "fitDataFill",
                    placeholder: "No form in this application...",
                    //selectable:1,
                    tooltips: true,
                    tooltipsHeader: true,
                    responsiveLayout: true,
                    //persistentLayout: true,
                    //persistenceID: "E2",
                    groupStartOpen: false,
                    groupToggleElement: "header",
                    pagination: "local",
                    paginationSize: 10,
                    columns: [
                        { title: "Actions", field: "childActions", formatter: actionIcon, formatterParams: { type: 2 }, width: '7%', headerSort: false, align: "center", cellClick: function (e, cell) {
                                var rowData = cell.getRow().getData();
                                var topicID = rowData.topicID;
                                var formID = rowData.formID;
                                var appRole = typeof rowData.appRole != 'undefined' ? rowData.appRole : 3;
                                var formName = rowData.title, topicName = rowData.topicTitle, isAccessible = rowData.isAccessible;
                                var formEditUrl = "{{ url('subforms/edit') }}/" + formID;
                                var formDeleteUrl = "{{ url('subforms/delete') }}/" + formID;
                                var formFilterUrl = "{{ url('subforms/filter-criteria') }}/" + formID;
                                var formRoleUrl = "{{ url('user-forms/roles') }}/" + formID;
                                var formSummaryUrl = "{{ url('summary') }}/" + formID;
                                var formClearUrl = "{{ url('clear_records') }}/" + formID;
                                var formEntryUrl = "{{ url('savedata') }}/" + formID;
                                var formRecordUrl = "{{ url('records') }}/" + formID;
                                if (appRole == 3) {
                                    var actions = '<div class="panel-blue text-center">' +
                                        '<div class="row">' +
                                        '<div class="col-sm-12">' +
                                        '<a class="btn btn-success btn-md entry-button" href="' + formEntryUrl + '"><i class="fa fa-plus" aria-hidden="true"></i> Entry</a>&nbsp;&nbsp;' +
                                        '<a class="btn btn-info btn-md" href="' + formRecordUrl + '"><i class="fa fa-list-ol" aria-hidden="true"></i> Records</a>&nbsp;&nbsp;' +
                                        '<a class="btn btn-default btn-md" href="' + formSummaryUrl + '"><i class="fa fa-th-list" aria-hidden="true"></i> Summary</a>&nbsp;&nbsp;' +
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_form\',\'{{$url}}\')" class="btn btn-primary" title="Copy Form"><i class="fa fa-copy"></i> Copy Form</a>&nbsp;&nbsp;' +
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_application\',\'\')" class="btn btn-primary" title="Copy Application"><i class="fa fa-copy"></i> Copy Application</a>' +
                                        '<div class="form-group more_setup-wrap mt-15 mb-10"><input type="checkbox" class="show-more-settings" id="more_setup" name="more_setup">&nbsp;<label for="more_setup">Administrator Settings</label></div>' +
                                        '<div class="form-group">' +
                                        '<a class="btn btn-primary btn-md" href="' + formEditUrl + '"><i class="fa fa-edit" aria-hidden="true"></i> Edit Form</a>&nbsp;&nbsp;' +
                                        '<a class="btn btn-default btn-md" href="' + formFilterUrl + '"><i class="fa fa-filter" aria-hidden="true"></i> Filter Criteria</a>&nbsp;&nbsp;' +
                                        '<a class="btn btn-default btn-md" href="' + formRoleUrl + '"><i class="fa fa-user-tag" aria-hidden="true"></i> Form Roles</a>&nbsp;&nbsp;' +
                                        '<button class="btn btn-danger btn-md" onClick="return formClear(\'' + formClearUrl + '\');"><i class="fa fa-eraser" aria-hidden="true"></i> Clear Records</button>&nbsp;&nbsp;' +
                                        '<button class="btn btn-danger btn-md" onClick="return formDel(\'' + formDeleteUrl + '\');"><i class="fa fa-trash" aria-hidden="true"></i> Delete Form</button></div>' +
                                        '<div class="form-group advance_setup-wrap mt-15 mb-10"><input type="checkbox" class="show-advance-settings" id="advance_setup" name="advance_setup">&nbsp;<label for="advance_setup">Advance Settings</label></div>' +
                                        '<div class="form-group">' +
                                        '<a href="forms/edit" class="btn btn-primary btn-md"><i class="fa fa-edit" aria-hidden="true"></i> Edit Topic</a>&nbsp;&nbsp;' +
                                        '<button class="btn btn-danger btn-md" title="Delete Menu" onClick="return topicDel(' + topicID + ');"><i class="fa fa-trash" aria-hidden="true"></i> Delete Topic</button>&nbsp;&nbsp;' +
                                        '<button class="btn btn-info btn-md" title="Quick Edit Form" onClick="getFunction()"><i class="fa fa-pen"></i> Quick Edit Form</button>&nbsp;&nbsp;' +
                                        '<br/><a href="forms/download" class="btn btn-warning" title="Export to JSON"><i class="fa fa-download"></i> Export to JSON</a>&nbsp;&nbsp;' +
                                        '<a href="forms/exportFormExcel" class="btn btn-warning" title="Export to Excel (Full)"><i class="fa fa-download"></i> Export to Excel (Full)</a>&nbsp;&nbsp;' +
                                        '<a href="forms/exportFormExcel" class="btn btn-warning" title="Export to Excel (Basic)"><i class="fa fa-download"></i> Export to Excel (Basic)</a>&nbsp;&nbsp;' +
                                        '</div></div></div></div></div>';
                                }
                                else {
                                    var actions = '<div class="panel-blue text-center">' +
                                        '<div class="row">' +
                                        '<div class="col-sm-12">' +
                                        '<a class="btn btn-success btn-md entry-button" href="' + formEntryUrl + '"><i class="fa fa-plus" aria-hidden="true"></i> Entry</a>&nbsp;&nbsp;' +
                                        '<a class="btn btn-info btn-md" href="' + formRecordUrl + '"><i class="fa fa-list-ol" aria-hidden="true"></i> Records</a>&nbsp;&nbsp;' +
                                        '<a class="btn btn-default btn-md" href="' + formSummaryUrl + '"><i class="fa fa-th-list" aria-hidden="true"></i> Summary</a>&nbsp;&nbsp;' +
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_form\',\'{{$url}}\')" class="btn btn-primary" title="Copy Form"><i class="fa fa-copy"></i> Copy Form</a>&nbsp;&nbsp;' +
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_application\',\'\')" class="btn btn-primary" title="Copy Application"><i class="fa fa-copy"></i> Copy Application</a>' +
                                        '<a href="" class="btn btn-warning" title="Download"><i class="fa fa-download"></i> Download Form</a>&nbsp;&nbsp;' +
                                        '<a href="" class="btn btn-warning" title="Export Form Excel"><i class="fa fa-download"></i> Export Form Excel</a>&nbsp;&nbsp;' +
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'import_form\',\'\')" class="btn btn-success" title="Import Form Excel"><i class="fa fa-upload"></i> Import Form Excel</a>&nbsp;&nbsp;' +
                                        '</div></div></div>';
                                }
                                bootbox.dialog({
                                    backdrop: true,
                                    onEscape: true,
                                    title: formName + ' (' + topicName + ")",
                                    //size: 'small',
                                    message: actions
                                })
                                    .on('shown.bs.modal', function (e) {
                                    if (Object.keys(rowData).length) {
                                        //$('.bootbox.modal .form-actions').removeClass('disabled hidden');
                                        if (!isAccessible) {
                                            $('.bootbox.modal a.entry-button').addClass('disabled');
                                        }
                                        /*if(userRole > 1){
                                            $('.bootbox.modal .group-actions').removeClass('disabled hidden');
                                        }else{
                                            $('.bootbox.modal .group-actions').addClass('disabled hidden');
                                        } */
                                    }
                                    else {
                                        $('.bootbox.modal .group-actions,.bootbox.modal .form-actions').addClass('disabled hidden');
                                    }
                                });
                                // $( "div.form-group.more_setup-wrap", '.panel-blue' ).nextUntil( "div.form-group.advance_setup-wrap" ).hide();
                                // $( "div.form-group.advance_setup-wrap", '.panel-blue' ).nextAll( "div.form-group" ).hide();
                            } },
                        { title: "App ID", field: 'applicationId', visible: false },
                        { title: "Topic ID", field: 'topicID', visible: false },
                        { title: "Form ID", field: 'formID', visible: false },
                        { title: "Topic Name", field: 'topicTitle', headerFilter: true },
                        //{title:"Topic Description", width:'33%'},
                        { title: "Form Name", field: 'title', headerFilter: true, formatter: 'html', cellClick: function (e, cell) {
                                var rowData = cell.getRow().getData();
                                window.location.href = "{{ url('records') }}/" + rowData.formID;
                            } },
                        { title: "Form Tags", field: 'formTag', headerFilter: true, sorter: "string", sorterParams: { alignEmptyValues: "bottom" } },
                        { title: "Form Type", field: 'formType', headerFilter: "select", headerFilterParams: { values: formTypes } },
                        { title: "Form Status", field: 'status', headerFilter: "select", headerFilterParams: { values: formStatus } },
                        { title: "Last Activity", field: "lastActivityDate", headerFilter: true, sorter: 'datetime', sorterParams: { format: "{{config('app.datetime_format_js')}}", alignEmptyValues: "bottom" } },
                        { title: "Number of Records", field: "totalRecords", headerFilter: true, sorter: "number", align: 'right' }
                    ]
                });
                tabulatorChildren[applicationId] = childTabulator;
                $(".table-wrapper").hide();
            },
            ajaxFiltering: true,
            ajaxURL: "https://localhost:44303/api/FormAPI/GetApplicationList",
            //ajaxURL: "http://geligulu.augursapps.com/api/FormAPI/GetApplicationList",
            ajaxProgressiveLoad: "scroll",
            paginationSize: 50,
            ajaxResponse: function (url, params, response) {
                //url - the URL of the request
                //params - the parameters passed with the request
                //response - the JSON object returned in the body of the response.
                return response; //pass the data array into Tabulator
            },
        });
        //  setTabulatorHeaderFilter(tabulator);
    }
    manageApplication(data) {
        this.commonservice.manageApplication(data).subscribe(dataList => {
            this.exists = underscore__WEBPACK_IMPORTED_MODULE_5__["_"].findWhere(dataList, { res: 1 });
            if (this.exists) {
                alert(this.exists.Message);
            }
            else {
                this.exists = underscore__WEBPACK_IMPORTED_MODULE_5__["_"].findWhere(dataList, { res: -1 });
                alert(this.exists.Message);
            }
        }, err => console.log(err));
    }
};
ListApplicationComponent.ctorParameters = () => [
    { type: src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
ListApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-application',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-application.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/application/list-application/list-application.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-application.component.css */ "./src/app/public/application/list-application/list-application.component.css")).default]
    })
], ListApplicationComponent);



/***/ }),

/***/ "./src/app/services/common-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/common-service.service.ts ***!
  \****************************************************/
/*! exports provided: CommonServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonServiceService", function() { return CommonServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let CommonServiceService = class CommonServiceService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://localhost:44303/api/FormAPI/';
    }
    //baseUrl:string='http://geligulu.augursapps.com/api/FormAPI/';
    manageStatusMaster(data) {
        return this.http.post(this.baseUrl + 'manageStatusMaster', data, httpOptions);
    }
    manageApplication(data) {
        return this.http.post(this.baseUrl + 'ManageApplication', data, httpOptions);
    }
    manageTopic(data) {
        return this.http.post(this.baseUrl + 'ManageTopic', data, httpOptions);
    }
};
CommonServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommonServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CommonServiceService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FormGenerator_Net\FormMVCProject\FormMVCProject\FormMVCProject\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map