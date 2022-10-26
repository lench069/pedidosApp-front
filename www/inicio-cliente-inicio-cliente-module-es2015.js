(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-cliente-inicio-cliente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio-cliente/inicio-cliente.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio-cliente/inicio-cliente.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>inicio-cliente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/inicio-cliente/inicio-cliente-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/inicio-cliente/inicio-cliente-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: InicioClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioClientePageRoutingModule", function() { return InicioClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inicio_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio-cliente.page */ "./src/app/inicio-cliente/inicio-cliente.page.ts");




const routes = [
    {
        path: '',
        component: _inicio_cliente_page__WEBPACK_IMPORTED_MODULE_3__["InicioClientePage"]
    }
];
let InicioClientePageRoutingModule = class InicioClientePageRoutingModule {
};
InicioClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioClientePageRoutingModule);



/***/ }),

/***/ "./src/app/inicio-cliente/inicio-cliente.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/inicio-cliente/inicio-cliente.module.ts ***!
  \*********************************************************/
/*! exports provided: InicioClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioClientePageModule", function() { return InicioClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _inicio_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-cliente-routing.module */ "./src/app/inicio-cliente/inicio-cliente-routing.module.ts");
/* harmony import */ var _inicio_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio-cliente.page */ "./src/app/inicio-cliente/inicio-cliente.page.ts");







let InicioClientePageModule = class InicioClientePageModule {
};
InicioClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioClientePageRoutingModule"]
        ],
        declarations: [_inicio_cliente_page__WEBPACK_IMPORTED_MODULE_6__["InicioClientePage"]]
    })
], InicioClientePageModule);



/***/ }),

/***/ "./src/app/inicio-cliente/inicio-cliente.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/inicio-cliente/inicio-cliente.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby1jbGllbnRlL2luaWNpby1jbGllbnRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/inicio-cliente/inicio-cliente.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/inicio-cliente/inicio-cliente.page.ts ***!
  \*******************************************************/
/*! exports provided: InicioClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioClientePage", function() { return InicioClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InicioClientePage = class InicioClientePage {
    constructor() { }
    ngOnInit() {
    }
};
InicioClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio-cliente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inicio-cliente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio-cliente/inicio-cliente.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inicio-cliente.page.scss */ "./src/app/inicio-cliente/inicio-cliente.page.scss")).default]
    })
], InicioClientePage);



/***/ })

}]);
//# sourceMappingURL=inicio-cliente-inicio-cliente-module-es2015.js.map