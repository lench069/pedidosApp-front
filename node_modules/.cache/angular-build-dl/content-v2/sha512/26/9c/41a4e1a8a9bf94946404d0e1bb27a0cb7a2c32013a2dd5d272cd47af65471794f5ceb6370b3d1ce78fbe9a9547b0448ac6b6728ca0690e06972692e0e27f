(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-clientes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Clientes</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"servicio.irA('/cliente/0')\">\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"Cargar_Clientes()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar color=\"primary\" debounce=\"500\" (ionChange)=\"Cargar_Clientes()\" [(ngModel)]=\"texto\" placeholder=\"Buscar...\"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let cliente of clientes\" #ionItemSliding>\n      <ion-item>\n        <ion-label text-wrap>\n          <h2>{{cliente.nombre}}</h2>\n          <p>Dir.: {{cliente.direccion}}</p>\n          <p>Tel.: {{cliente.telefono}}</p>\n        </ion-label>\n        <ion-badge slot=\"end\" color=\"danger\">{{cliente.id}}</ion-badge>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"warning\" (click)=\"Editar(cliente, ionItemSliding)\">Editar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"Borrar(cliente, ionItemSliding)\">Eliminar</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/clientes/clientes-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/clientes/clientes-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ClientesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageRoutingModule", function() { return ClientesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientes.page */ "./src/app/clientes/clientes.page.ts");




const routes = [
    {
        path: '',
        component: _clientes_page__WEBPACK_IMPORTED_MODULE_3__["ClientesPage"]
    }
];
let ClientesPageRoutingModule = class ClientesPageRoutingModule {
};
ClientesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClientesPageRoutingModule);



/***/ }),

/***/ "./src/app/clientes/clientes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/clientes/clientes.module.ts ***!
  \*********************************************/
/*! exports provided: ClientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageModule", function() { return ClientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clientes-routing.module */ "./src/app/clientes/clientes-routing.module.ts");
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clientes.page */ "./src/app/clientes/clientes.page.ts");







let ClientesPageModule = class ClientesPageModule {
};
ClientesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientesPageRoutingModule"]
        ],
        declarations: [_clientes_page__WEBPACK_IMPORTED_MODULE_6__["ClientesPage"]]
    })
], ClientesPageModule);



/***/ }),

/***/ "./src/app/clientes/clientes.page.scss":
/*!*********************************************!*\
  !*** ./src/app/clientes/clientes.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/clientes/clientes.page.ts":
/*!*******************************************!*\
  !*** ./src/app/clientes/clientes.page.ts ***!
  \*******************************************/
/*! exports provided: ClientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPage", function() { return ClientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios.service */ "./src/app/servicios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let ClientesPage = class ClientesPage {
    constructor(servicio, loading, alert) {
        this.servicio = servicio;
        this.loading = loading;
        this.alert = alert;
        this.clientes = [];
        this.total = 0;
        this.texto = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.Cargar_Clientes();
    }
    Cargar_Clientes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let l = yield this.loading.create();
            l.present();
            this.servicio.Cliente_Listado(this.texto)
                .subscribe((data) => {
                this.clientes = data.info.items;
                this.total = data.info.total;
                l.dismiss();
            }, (error) => {
                l.dismiss();
            });
        });
    }
    Editar(item, ionItemSliding) {
        ionItemSliding.close();
        this.servicio.irA('/cliente/' + item.id);
    }
    Borrar(item, ionItemSliding) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ionItemSliding.close();
            let alert = yield this.alert.create({
                header: 'Confirmación',
                message: '¿Está seguro que desea eliminar el cliente [' + item.nombre + ']?',
                buttons: [
                    {
                        text: 'Si',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            let l = yield this.loading.create({
                                message: 'Borrando...'
                            });
                            l.present();
                            this.servicio.Cliente_Borrar(item.id)
                                .subscribe((data) => {
                                this.Cargar_Clientes();
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
ClientesPage.ctorParameters = () => [
    { type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
ClientesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clientes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./clientes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./clientes.page.scss */ "./src/app/clientes/clientes.page.scss")).default]
    })
], ClientesPage);



/***/ })

}]);
//# sourceMappingURL=clientes-clientes-module-es2015.js.map