(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-usuario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"usuarios\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"small\">{{id == 0 ? 'Nuevo' : 'Editar'}} usuario {{id == 0 ? '' : id}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"Guardar()\">\n        <ion-icon name=\"save\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\">Usuario</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"usuario\" [disabled]=\"id != 0\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Clave</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"clave\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"nombre\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Teléfono</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"telefono\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Correo</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"correo\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Activo</ion-label>\n      <ion-toggle slot=\"end\" [(ngModel)]=\"activo\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/usuario/usuario-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/usuario/usuario-routing.module.ts ***!
  \***************************************************/
/*! exports provided: UsuarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPageRoutingModule", function() { return UsuarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario.page */ "./src/app/usuario/usuario.page.ts");




const routes = [
    {
        path: '',
        component: _usuario_page__WEBPACK_IMPORTED_MODULE_3__["UsuarioPage"]
    }
];
let UsuarioPageRoutingModule = class UsuarioPageRoutingModule {
};
UsuarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsuarioPageRoutingModule);



/***/ }),

/***/ "./src/app/usuario/usuario.module.ts":
/*!*******************************************!*\
  !*** ./src/app/usuario/usuario.module.ts ***!
  \*******************************************/
/*! exports provided: UsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPageModule", function() { return UsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario-routing.module */ "./src/app/usuario/usuario-routing.module.ts");
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario.page */ "./src/app/usuario/usuario.page.ts");







let UsuarioPageModule = class UsuarioPageModule {
};
UsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuarioPageRoutingModule"]
        ],
        declarations: [_usuario_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPage"]]
    })
], UsuarioPageModule);



/***/ }),

/***/ "./src/app/usuario/usuario.page.scss":
/*!*******************************************!*\
  !*** ./src/app/usuario/usuario.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8vdXN1YXJpby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/usuario/usuario.page.ts":
/*!*****************************************!*\
  !*** ./src/app/usuario/usuario.page.ts ***!
  \*****************************************/
/*! exports provided: UsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPage", function() { return UsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios.service */ "./src/app/servicios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let UsuarioPage = class UsuarioPage {
    constructor(servicio, route, loading) {
        this.servicio = servicio;
        this.route = route;
        this.loading = loading;
        this.id = 0;
        this.usuario = '';
        this.nombre = '';
        this.clave = '';
        this.correo = '';
        this.telefono = '';
        this.activo = true;
        this.id = this.route.snapshot.params.usuarioId ? this.route.snapshot.params.usuarioId : 0;
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.id > 0) {
                let l = yield this.loading.create();
                l.present();
                this.servicio.Usuario_Consulta(this.id)
                    .subscribe((data) => {
                    l.dismiss();
                    if (data.info.item.id > 0) {
                        this.nombre = data.info.item.nombre;
                        this.usuario = data.info.item.usuario;
                        this.clave = data.info.item.clave;
                        this.correo = data.info.item.correo;
                        this.telefono = data.info.item.telefono;
                        this.activo = data.info.item.activo == 1 ? true : false;
                    }
                    else {
                        this.servicio.Mensaje('El usuario que intenta consultar no existe.', 'danger');
                        this.servicio.irA('/usuarios');
                    }
                }, _ => {
                    l.dismiss();
                    this.servicio.Mensaje('No se pudo realizar la petición.', 'danger');
                    this.servicio.irA('/usuarios');
                });
            }
        });
    }
    ngOnInit() {
    }
    Guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.usuario == '') {
                this.servicio.Mensaje('Debe ingresar el usuario.', 'warning');
            }
            else if (this.clave == '') {
                this.servicio.Mensaje('Debe ingresar la clave.', 'warning');
            }
            else if (this.nombre == '') {
                this.servicio.Mensaje('Debe ingresar el nombre.', 'warning');
            }
            else if (this.telefono == '') {
                this.servicio.Mensaje('Debe ingresar el teléfono.', 'warning');
            }
            else if (this.correo == '') {
                this.servicio.Mensaje('Debe ingresar el correo.', 'warning');
            }
            else {
                let l = yield this.loading.create();
                l.present();
                this.servicio.Usuario_Guardar({
                    id: this.id,
                    usuario: this.usuario,
                    nombre: this.nombre,
                    correo: this.correo,
                    telefono: this.telefono,
                    clave: this.clave,
                    activo: this.activo ? 1 : 0
                }).subscribe((data) => {
                    l.dismiss();
                    this.servicio.Mensaje(data.mensaje, data.info.id == 0 ? 'danger' : 'success');
                    if (data.info.id > 0) {
                        this.servicio.irA('/usuarios');
                    }
                }, _ => {
                    l.dismiss();
                    this.servicio.Mensaje('No se pudo realizar la petición.', 'danger');
                });
            }
        });
    }
};
UsuarioPage.ctorParameters = () => [
    { type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
UsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./usuario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./usuario.page.scss */ "./src/app/usuario/usuario.page.scss")).default]
    })
], UsuarioPage);



/***/ })

}]);
//# sourceMappingURL=usuario-usuario-module-es2015.js.map