(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productos-productos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/productos.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productos/productos.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons> \n    <ion-title>Productos</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"servicio.irA('/producto/0')\">\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"Cargar_Productos()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar color=\"success\" debounce=\"500\" (ionChange)=\"Cargar_Productos()\" [(ngModel)]=\"texto\" placeholder=\"Buscar...\"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let producto of productos\" #ionItemSliding>\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <img [src]='producto.imagen' />\n        </ion-thumbnail>\n        <ion-label text-wrap>\n          <h2>{{producto.nombre}}</h2>\n          <p>Stock: {{producto.stock}}</p>\n          <p>Precio: {{producto.precio|number}}</p>\n        </ion-label>\n        <ion-badge slot=\"end\" color=\"danger\">{{producto.codigo}}</ion-badge>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"warning\" (click)=\"Editar(producto, ionItemSliding)\">Editar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"Borrar(producto, ionItemSliding)\">Eliminar</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/productos/productos-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/productos/productos-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ProductosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPageRoutingModule", function() { return ProductosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _productos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productos.page */ "./src/app/productos/productos.page.ts");




const routes = [
    {
        path: '',
        component: _productos_page__WEBPACK_IMPORTED_MODULE_3__["ProductosPage"]
    }
];
let ProductosPageRoutingModule = class ProductosPageRoutingModule {
};
ProductosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductosPageRoutingModule);



/***/ }),

/***/ "./src/app/productos/productos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/productos/productos.module.ts ***!
  \***********************************************/
/*! exports provided: ProductosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPageModule", function() { return ProductosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _productos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productos-routing.module */ "./src/app/productos/productos-routing.module.ts");
/* harmony import */ var _productos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productos.page */ "./src/app/productos/productos.page.ts");







let ProductosPageModule = class ProductosPageModule {
};
ProductosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _productos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductosPageRoutingModule"]
        ],
        declarations: [_productos_page__WEBPACK_IMPORTED_MODULE_6__["ProductosPage"]]
    })
], ProductosPageModule);



/***/ }),

/***/ "./src/app/productos/productos.page.scss":
/*!***********************************************!*\
  !*** ./src/app/productos/productos.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rvcy9wcm9kdWN0b3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/productos/productos.page.ts":
/*!*********************************************!*\
  !*** ./src/app/productos/productos.page.ts ***!
  \*********************************************/
/*! exports provided: ProductosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPage", function() { return ProductosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios.service */ "./src/app/servicios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let ProductosPage = class ProductosPage {
    constructor(servicio, loading, alert) {
        this.servicio = servicio;
        this.loading = loading;
        this.alert = alert;
        this.productos = [];
        this.total = 0;
        this.texto = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.Cargar_Productos();
    }
    Cargar_Productos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let l = yield this.loading.create();
            l.present();
            this.servicio.Producto_Listado(this.texto)
                .subscribe((data) => {
                this.productos = data.info.items;
                this.total = data.info.total;
                l.dismiss();
            }, (error) => {
                l.dismiss();
            });
        });
    }
    Editar(item, ionItemSliding) {
        ionItemSliding.close();
        this.servicio.irA('/producto/' + item.id);
    }
    Borrar(item, ionItemSliding) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ionItemSliding.close();
            let alert = yield this.alert.create({
                header: 'Confirmaci??n',
                message: '??Est?? seguro que desea eliminar el producto [' + item.nombre + ']?',
                buttons: [
                    {
                        text: 'Si',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            let l = yield this.loading.create({
                                message: 'Borrando...'
                            });
                            l.present();
                            this.servicio.Producto_Borrar(item.id)
                                .subscribe((data) => {
                                this.Cargar_Productos();
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
ProductosPage.ctorParameters = () => [
    { type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
ProductosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./productos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/productos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./productos.page.scss */ "./src/app/productos/productos.page.scss")).default]
    })
], ProductosPage);



/***/ })

}]);
//# sourceMappingURL=productos-productos-module-es2015.js.map