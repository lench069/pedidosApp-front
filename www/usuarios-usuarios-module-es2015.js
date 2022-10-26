(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuarios-usuarios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Usuarios</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"servicio.irA('/usuario/0')\">\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"Cargar_Usuarios()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar color=\"dark\" debounce=\"500\" (ionChange)=\"Cargar_Usuarios()\" [(ngModel)]=\"texto\" placeholder=\"Buscar...\"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let usuario of usuarios\" #ionItemSliding>\n      <ion-item>\n        <ion-label text-wrap>\n          <h2>{{usuario.nombre}}</h2>\n          <p>Tel.:{{usuario.telefono}}</p>\n          <small>Email: {{usuario.correo}}</small>\n        </ion-label>\n        <ion-badge slot=\"end\" color=\"success\">{{usuario.id}}</ion-badge>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"warning\" (click)=\"Editar(usuario, ionItemSliding)\">Editar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"Borrar(usuario, ionItemSliding)\">Eliminar</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/usuarios/usuarios-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/usuarios/usuarios-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsuariosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageRoutingModule", function() { return UsuariosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios.page */ "./src/app/usuarios/usuarios.page.ts");




const routes = [
    {
        path: '',
        component: _usuarios_page__WEBPACK_IMPORTED_MODULE_3__["UsuariosPage"]
    }
];
let UsuariosPageRoutingModule = class UsuariosPageRoutingModule {
};
UsuariosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsuariosPageRoutingModule);



/***/ }),

/***/ "./src/app/usuarios/usuarios.module.ts":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.module.ts ***!
  \*********************************************/
/*! exports provided: UsuariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageModule", function() { return UsuariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios-routing.module */ "./src/app/usuarios/usuarios-routing.module.ts");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarios.page */ "./src/app/usuarios/usuarios.page.ts");







let UsuariosPageModule = class UsuariosPageModule {
};
UsuariosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuariosPageRoutingModule"]
        ],
        declarations: [_usuarios_page__WEBPACK_IMPORTED_MODULE_6__["UsuariosPage"]]
    })
], UsuariosPageModule);



/***/ }),

/***/ "./src/app/usuarios/usuarios.page.scss":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW9zL3VzdWFyaW9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/usuarios/usuarios.page.ts":
/*!*******************************************!*\
  !*** ./src/app/usuarios/usuarios.page.ts ***!
  \*******************************************/
/*! exports provided: UsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPage", function() { return UsuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios.service */ "./src/app/servicios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let UsuariosPage = class UsuariosPage {
    constructor(servicio, loading, alert) {
        this.servicio = servicio;
        this.loading = loading;
        this.alert = alert;
        this.usuarios = [];
        this.total = 0;
        this.texto = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.Cargar_Usuarios();
    }
    Cargar_Usuarios() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let l = yield this.loading.create();
            l.present();
            this.servicio.Usuario_Listado(this.texto)
                .subscribe((data) => {
                this.usuarios = data.info.items;
                this.total = data.info.total;
                l.dismiss();
            }, (error) => {
                l.dismiss();
            });
        });
    }
    Editar(item, ionItemSliding) {
        ionItemSliding.close();
        this.servicio.irA('/usuario/' + item.id);
    }
    Borrar(item, ionItemSliding) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ionItemSliding.close();
            let alert = yield this.alert.create({
                header: 'Confirmación',
                message: '¿Está seguro que desea eliminar el usuario [' + item.nombre + ']?',
                buttons: [
                    {
                        text: 'Si',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            let l = yield this.loading.create({
                                message: 'Borrando...'
                            });
                            l.present();
                            this.servicio.Usuario_Borrar(item.id)
                                .subscribe((data) => {
                                this.Cargar_Usuarios();
                                l.dismiss();
                            }, (error) => {
                                l.dismiss();
                            });
                        })
                    },
                    {
                        text: 'No',
                        handler: () => { }
                    }
                ]
            });
            alert.present();
        });
    }
};
UsuariosPage.ctorParameters = () => [
    { type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
UsuariosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuarios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./usuarios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./usuarios.page.scss */ "./src/app/usuarios/usuarios.page.scss")).default]
    })
], UsuariosPage);



/***/ })

}]);
//# sourceMappingURL=usuarios-usuarios-module-es2015.js.map