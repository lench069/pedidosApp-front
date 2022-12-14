(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cliente-cliente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cliente/cliente.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cliente/cliente.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"usuarios\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"small\">{{id == 0 ? 'Nuevo' : 'Editar'}} cliente {{id == 0 ? '' : id}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"Guardar()\">\n        <ion-icon name=\"save\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\">Identificación</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"identificacion\" [disabled]=\"id != 0\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"nombre\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Teléfono</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"telefono\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Correo</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"correo\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Dirección</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"direccion\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Ciudad</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"ciudad\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">País</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"pais\"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/cliente/cliente-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/cliente/cliente-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientePageRoutingModule", function() { return ClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente.page */ "./src/app/cliente/cliente.page.ts");




const routes = [
    {
        path: '',
        component: _cliente_page__WEBPACK_IMPORTED_MODULE_3__["ClientePage"]
    }
];
let ClientePageRoutingModule = class ClientePageRoutingModule {
};
ClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClientePageRoutingModule);



/***/ }),

/***/ "./src/app/cliente/cliente.module.ts":
/*!*******************************************!*\
  !*** ./src/app/cliente/cliente.module.ts ***!
  \*******************************************/
/*! exports provided: ClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientePageModule", function() { return ClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cliente-routing.module */ "./src/app/cliente/cliente-routing.module.ts");
/* harmony import */ var _cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cliente.page */ "./src/app/cliente/cliente.page.ts");







let ClientePageModule = class ClientePageModule {
};
ClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientePageRoutingModule"]
        ],
        declarations: [_cliente_page__WEBPACK_IMPORTED_MODULE_6__["ClientePage"]]
    })
], ClientePageModule);



/***/ }),

/***/ "./src/app/cliente/cliente.page.scss":
/*!*******************************************!*\
  !*** ./src/app/cliente/cliente.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGUvY2xpZW50ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/cliente/cliente.page.ts":
/*!*****************************************!*\
  !*** ./src/app/cliente/cliente.page.ts ***!
  \*****************************************/
/*! exports provided: ClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientePage", function() { return ClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios.service */ "./src/app/servicios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let ClientePage = class ClientePage {
    constructor(servicio, route, loading) {
        this.servicio = servicio;
        this.route = route;
        this.loading = loading;
        this.id = 0;
        this.identificacion = '';
        this.nombre = '';
        this.telefono = '';
        this.correo = '';
        this.direccion = '';
        this.ciudad = '';
        this.pais = '';
        this.id = this.route.snapshot.params.clienteId ? this.route.snapshot.params.clienteId : 0;
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.id > 0) {
                let l = yield this.loading.create();
                l.present();
                this.servicio.Cliente_Consulta(this.id)
                    .subscribe((data) => {
                    l.dismiss();
                    if (data.info.item.id > 0) {
                        this.identificacion = data.info.item.identificacion;
                        this.nombre = data.info.item.nombre;
                        this.telefono = data.info.item.telefono;
                        this.correo = data.info.item.correo;
                        this.direccion = data.info.item.direccion;
                        this.ciudad = data.info.item.ciudad;
                        this.pais = data.info.item.pais;
                    }
                    else {
                        this.servicio.Mensaje('El cliente que intenta consultar no existe.', 'danger');
                        this.servicio.irA('/clientes');
                    }
                }, _ => {
                    l.dismiss();
                    this.servicio.Mensaje('No se pudo realizar la petición.', 'danger');
                    this.servicio.irA('/clientes');
                });
            }
        });
    }
    ngOnInit() {
    }
    Guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.identificacion == '') {
                this.servicio.Mensaje('Debe ingresar la identificación.', 'warning');
            }
            else if (this.nombre == '') {
                this.servicio.Mensaje('Debe ingresar el nombre.', 'warning');
            }
            else if (this.telefono == '') {
                this.servicio.Mensaje('Debe ingresar el telefono.', 'warning');
            }
            else if (this.correo == '') {
                this.servicio.Mensaje('Debe ingresar el correo.', 'warning');
            }
            else if (this.direccion == '') {
                this.servicio.Mensaje('Debe ingresar la dirección.', 'warning');
            }
            else if (this.pais == '') {
                this.servicio.Mensaje('Debe ingresar el país.', 'warning');
            }
            else if (this.ciudad == '') {
                this.servicio.Mensaje('Debe ingresar la ciudad.', 'warning');
            }
            else {
                let l = yield this.loading.create();
                l.present();
                this.servicio.Cliente_Guardar({
                    id: this.id,
                    identificacion: this.identificacion,
                    nombre: this.nombre,
                    telefono: this.telefono,
                    correo: this.correo,
                    direccion: this.direccion,
                    pais: this.pais,
                    ciudad: this.ciudad,
                }).subscribe((data) => {
                    l.dismiss();
                    this.servicio.Mensaje(data.mensaje, data.info.id == 0 ? 'danger' : 'success');
                    if (data.info.id > 0) {
                        this.servicio.irA('/clientes');
                    }
                }, _ => {
                    l.dismiss();
                    this.servicio.Mensaje('No se pudo realizar la petición.', 'danger');
                });
            }
        });
    }
};
ClientePage.ctorParameters = () => [
    { type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cliente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cliente/cliente.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cliente.page.scss */ "./src/app/cliente/cliente.page.scss")).default]
    })
], ClientePage);



/***/ })

}]);
//# sourceMappingURL=cliente-cliente-module-es2015.js.map