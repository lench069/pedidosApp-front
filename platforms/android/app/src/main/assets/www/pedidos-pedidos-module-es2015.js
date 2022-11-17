(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedidos-pedidos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pedidos</ion-title>\n    <ion-buttons slot=\"end\">\n      <!--<ion-button (click)=\"servicio.irA('/pedido/0')\">\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-button>-->\n      <ion-button (click)=\"Cargar_Pedidos()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar color=\"warning\" debounce=\"500\" (ionChange)=\"Cargar_Pedidos()\" [(ngModel)]=\"texto\" placeholder=\"Buscar...\"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let pedido of pedidos\" #ionItemSliding>\n      <ion-item>\n        <ion-label text-wrap>\n          <h2>{{pedido.cliente}}</h2>\n          <small>Cant. Productos: {{pedido.n_productos}}</small>\n          <br/>\n          <small>Vendido por: {{pedido.vendedor}}</small>\n          <p>Total: {{pedido.total|currency}}</p>\n        </ion-label>\n        <ion-badge slot=\"end\" color=\"warning\" *ngIf=\"pedido.estado == 0\">Creado</ion-badge>\n        <ion-badge slot=\"end\" color=\"primary\" *ngIf=\"pedido.estado == 1\">Procesado</ion-badge>\n        <ion-badge slot=\"end\" color=\"success\" *ngIf=\"pedido.estado == 2\">Finalizado</ion-badge>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"warning\" (click)=\"Editar(pedido, ionItemSliding)\">Editar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"Borrar(pedido, ionItemSliding)\">Eliminar</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>");

/***/ }),

/***/ "./src/app/pedidos/pedidos-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pedidos/pedidos-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PedidosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageRoutingModule", function() { return PedidosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedidos.page */ "./src/app/pedidos/pedidos.page.ts");




const routes = [
    {
        path: '',
        component: _pedidos_page__WEBPACK_IMPORTED_MODULE_3__["PedidosPage"]
    }
];
let PedidosPageRoutingModule = class PedidosPageRoutingModule {
};
PedidosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PedidosPageRoutingModule);



/***/ }),

/***/ "./src/app/pedidos/pedidos.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pedidos/pedidos.module.ts ***!
  \*******************************************/
/*! exports provided: PedidosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function() { return PedidosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedidos-routing.module */ "./src/app/pedidos/pedidos-routing.module.ts");
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedidos.page */ "./src/app/pedidos/pedidos.page.ts");







let PedidosPageModule = class PedidosPageModule {
};
PedidosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidosPageRoutingModule"]
        ],
        declarations: [_pedidos_page__WEBPACK_IMPORTED_MODULE_6__["PedidosPage"]]
    })
], PedidosPageModule);



/***/ }),

/***/ "./src/app/pedidos/pedidos.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pedidos/pedidos.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkb3MvcGVkaWRvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pedidos/pedidos.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pedidos/pedidos.page.ts ***!
  \*****************************************/
/*! exports provided: PedidosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPage", function() { return PedidosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios.service */ "./src/app/servicios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let PedidosPage = class PedidosPage {
    constructor(servicio, loading, alert) {
        this.servicio = servicio;
        this.loading = loading;
        this.alert = alert;
        this.pedidos = [];
        this.total = 0;
        this.texto = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.Cargar_Pedidos();
    }
    Cargar_Pedidos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let l = yield this.loading.create();
            l.present();
            this.servicio.Pedido_Listado(this.texto)
                .subscribe((data) => {
                this.pedidos = data.info.items;
                this.total = data.info.total;
                console.log(this.pedidos);
                l.dismiss();
            }, (error) => {
                l.dismiss();
            });
        });
    }
    Editar(item, ionItemSliding) {
        ionItemSliding.close();
        this.servicio.irA('/pedido/' + item.id);
    }
    Borrar(item, ionItemSliding) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ionItemSliding.close();
            let alert = yield this.alert.create({
                header: 'Confirmación',
                message: '¿Está seguro que desea eliminar el pedido [' + item.id + ']?',
                buttons: [
                    {
                        text: 'Si',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            let l = yield this.loading.create({
                                message: 'Borrando...'
                            });
                            l.present();
                            this.servicio.Pedido_Borrar(item.id)
                                .subscribe((data) => {
                                this.Cargar_Pedidos();
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
PedidosPage.ctorParameters = () => [
    { type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
PedidosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pedidos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pedidos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pedidos.page.scss */ "./src/app/pedidos/pedidos.page.scss")).default]
    })
], PedidosPage);



/***/ })

}]);
//# sourceMappingURL=pedidos-pedidos-module-es2015.js.map