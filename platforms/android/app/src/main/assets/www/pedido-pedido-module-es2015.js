(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedido-pedido-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pedido/pedido.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pedido/pedido.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"pedidos\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"small\">{{id == 0 ? 'Nuevo' : 'Editar'}} pedido {{id == 0 ? '' : id}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"Guardar()\">\n        <ion-icon name=\"save\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\">Cliente</ion-label>\n      <ion-select placeholder=\"Seleccionar\" [(ngModel)]=\"cliente_id\" [disabled]=\"id != 0\" okText=\"Seleccionar\" cancelText=\"Cancelar\">\n        <ion-select-option [value]=\"cliente.id\" *ngFor=\"let cliente of clientes\">{{cliente.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Atendido por:</ion-label>\n      <ion-select placeholder=\"Seleccionar\" [(ngModel)]=\"usuario_id\" okText=\"Seleccionar\" cancelText=\"Cancelar\">\n        <ion-select-option [value]=\"usuario.id\" *ngFor=\"let usuario of usuarios\">{{usuario.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Fecha</ion-label>\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Seleccionar fecha\" [disabled]=\"id != 0\" cancelText=\"Cancelar\" doneText=\"Seleccionar\" [(ngModel)]=\"fecha\"></ion-datetime>\n    </ion-item>\n    <ion-item *ngIf=\"id != 0\">\n      <ion-label position=\"stacked\">Estado</ion-label>\n      <ion-select placeholder=\"Seleccionar\" [(ngModel)]=\"estado\" okText=\"Seleccionar\" cancelText=\"Cancelar\">\n        <ion-select-option [value]=\"est.id\" *ngFor=\"let est of estados\">{{est.texto}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf=\"id != 0\">\n      <ion-label position=\"stacked\">Productos</ion-label>\n      <ion-select placeholder=\"Seleccionar\" [(ngModel)]=\"_producto\" okText=\"Seleccionar\" cancelText=\"Cancelar\" (ionChange)=\"Prod_Seleccionado()\">\n        <ion-select-option [value]=\"producto\" *ngFor=\"let producto of productos\">{{producto.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-list-header color=\"danger\">\n      Detalle productos\n    </ion-list-header>\n    <ion-item-sliding *ngFor=\"let _prod of productos_listado\" #ionItemSliding>\n      <ion-item>\n        <ion-label text-wrap>\n          <h3>{{_prod.nombre|uppercase}}</h3>\n          <p><b>Precio:</b> ${{_prod.precio|number}}</p>\n        </ion-label>\n        <ion-input slot=\"end\" [(ngModel)]=\"_prod.cantidad\" (ionChange)=\"Mod_Producto(_prod)\" type=\"number\"></ion-input>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"Borrar_Producto(_prod, ionItemSliding)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-list-header color=\"success\">\n      <ion-grid>\n        <ion-row>\n          <ion-col><strong>Subtotal: </strong>{{subtotal|currency}}</ion-col>\n          <ion-col><strong>Iva: </strong>{{iva|currency}}</ion-col>\n          <ion-col><strong>Total: </strong>{{total|currency}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list-header>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pedido/pedido-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pedido/pedido-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PedidoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoPageRoutingModule", function() { return PedidoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pedido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedido.page */ "./src/app/pedido/pedido.page.ts");




const routes = [
    {
        path: '',
        component: _pedido_page__WEBPACK_IMPORTED_MODULE_3__["PedidoPage"]
    }
];
let PedidoPageRoutingModule = class PedidoPageRoutingModule {
};
PedidoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PedidoPageRoutingModule);



/***/ }),

/***/ "./src/app/pedido/pedido.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pedido/pedido.module.ts ***!
  \*****************************************/
/*! exports provided: PedidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoPageModule", function() { return PedidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pedido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedido-routing.module */ "./src/app/pedido/pedido-routing.module.ts");
/* harmony import */ var _pedido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedido.page */ "./src/app/pedido/pedido.page.ts");







let PedidoPageModule = class PedidoPageModule {
};
PedidoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pedido_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidoPageRoutingModule"]
        ],
        declarations: [_pedido_page__WEBPACK_IMPORTED_MODULE_6__["PedidoPage"]]
    })
], PedidoPageModule);



/***/ }),

/***/ "./src/app/pedido/pedido.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pedido/pedido.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkby9wZWRpZG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pedido/pedido.page.ts":
/*!***************************************!*\
  !*** ./src/app/pedido/pedido.page.ts ***!
  \***************************************/
/*! exports provided: PedidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoPage", function() { return PedidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios.service */ "./src/app/servicios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let PedidoPage = class PedidoPage {
    constructor(servicio, route, loading, alert) {
        this.servicio = servicio;
        this.route = route;
        this.loading = loading;
        this.alert = alert;
        this.id = 0;
        this.cliente_id = 0;
        this.usuario_id = 0;
        this.fecha = null;
        this.estado = 0;
        this.subtotal = 0;
        this.iva = 0;
        this.total = 0;
        this.clientes = [];
        this.usuarios = [];
        this.productos = [];
        this.productos_listado = [];
        this._producto = null;
        this.pedido = null;
        this.estados = [
            {
                id: 0,
                texto: 'Creado'
            },
            {
                id: 1,
                texto: 'Procesado'
            },
            {
                id: 2,
                texto: 'Finalizado'
            }
        ];
        this.id = this.route.snapshot.params.pedidoId ? this.route.snapshot.params.pedidoId : 0;
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.servicio.Cliente_Listado()
                .subscribe((data) => {
                this.clientes = data.info.items;
            });
            this.servicio.Usuario_Listado()
                .subscribe((data) => {
                this.usuarios = data.info.items;
            });
            this.servicio.Producto_Listado()
                .subscribe((data) => {
                this.productos = data.info.items;
            });
            if (this.id > 0) {
                this.Cargar_Informacion();
            }
        });
    }
    ngOnInit() {
    }
    Guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.cliente_id == 0) {
                this.servicio.Mensaje('Debe seleccionar el cliente.', 'warning');
            }
            else if (this.usuario_id == 0) {
                this.servicio.Mensaje('Debe seleccionar el vendedor.', 'warning');
            }
            else if (this.fecha == null) {
                this.servicio.Mensaje('Debe seleccioanr la fecha.', 'warning');
            }
            else {
                console.log(this.fecha);
                let l = yield this.loading.create();
                l.present();
                this.servicio.Pedido_Guardar({
                    id: this.id,
                    cliente_id: this.cliente_id,
                    usuario_id: this.usuario_id,
                    fecha: this.fecha,
                    estado: this.estado,
                    subtotal: this.subtotal,
                    iva: this.iva,
                    total: this.total,
                }).subscribe((data) => {
                    l.dismiss();
                    this.servicio.Mensaje(data.mensaje, data.info.id == 0 ? 'danger' : 'success');
                    if (data.info.id > 0) {
                        this.servicio.irA('/pedidos');
                    }
                }, _ => {
                    l.dismiss();
                    this.servicio.Mensaje('No se pudo realizar la petición.', 'danger');
                });
            }
        });
    }
    Cargar_Informacion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let l = yield this.loading.create();
            l.present();
            this.servicio.Pedido_Consulta(this.id)
                .subscribe((data) => {
                l.dismiss();
                if (data.info.item.id > 0) {
                    this.cliente_id = data.info.item.cliente_id;
                    this.usuario_id = data.info.item.usuario_id;
                    this.estado = data.info.item.estado;
                    this.fecha = data.info.item.fecha;
                    this.productos_listado = data.info.item.items;
                    this.subtotal = data.info.item.subtotal;
                    this.iva = data.info.item.iva;
                    this.total = data.info.item.total;
                    this.pedido = data.info.item;
                }
                else {
                    this.servicio.Mensaje('El pedido que intenta consultar no existe.', 'danger');
                    this.servicio.irA('/pedidos');
                }
            }, _ => {
                l.dismiss();
                this.servicio.Mensaje('No se pudo realizar la petición.', 'danger');
                this.servicio.irA('/pedidos');
            });
        });
    }
    Prod_Seleccionado() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let l = yield this.loading.create();
            l.present();
            this.servicio.Pedido_Guardar_Producto({
                pedido_id: this.id,
                producto_id: this._producto.id,
                cantidad: 1,
                precio: this._producto.precio
            }).subscribe((data) => {
                l.dismiss();
                this.Cargar_Informacion();
            }, _ => {
                l.dismiss();
            });
        });
    }
    Mod_Producto(producto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let l = yield this.loading.create();
            l.present();
            this.servicio.Pedido_Guardar_Producto({
                pedido_id: this.id,
                producto_id: producto.producto_id,
                cantidad: producto.cantidad,
                precio: producto.precio
            }).subscribe((data) => {
                l.dismiss();
                //this.Cargar_Informacion();
                this.calcularTotal();
            }, _ => {
                l.dismiss();
            });
        });
    }
    Calcular_Total() {
        let total = 0;
        for (let prod of this.productos_listado) {
            total += prod.cantidad * prod.precio;
        }
        return total;
    }
    calcularTotal() {
        this.subtotal = 0;
        console.log(this.pedido);
        this.pedido.items.forEach(element => {
            this.subtotal = this.subtotal + (parseFloat(element.precio) * element.cantidad);
        });
        console.log(this.subtotal);
        this.iva = this.subtotal * 0.12;
        this.total = this.subtotal + this.iva;
    }
    Borrar_Producto(producto, ionItemSliding) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ionItemSliding.close();
            let alert = yield this.alert.create({
                header: 'Confirmación',
                message: '¿Está seguro que desea eliminar?',
                buttons: [
                    {
                        text: 'Si',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            let l = yield this.loading.create();
                            l.present();
                            this.servicio.Pedido_Borrar_Producto({
                                pedido_id: this.id,
                                item_id: producto.id
                            }).subscribe((data) => {
                                l.dismiss();
                                this.Cargar_Informacion();
                            }, _ => {
                                l.dismiss();
                            });
                        })
                    },
                    {
                        text: 'No',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();
        });
    }
};
PedidoPage.ctorParameters = () => [
    { type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
PedidoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pedido',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pedido.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pedido/pedido.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pedido.page.scss */ "./src/app/pedido/pedido.page.scss")).default]
    })
], PedidoPage);



/***/ })

}]);
//# sourceMappingURL=pedido-pedido-module-es2015.js.map