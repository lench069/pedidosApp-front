(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-cliente-inicio-cliente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio-cliente/inicio-cliente.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio-cliente/inicio-cliente.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-item lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\" defaultHref=\"start\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-label>\r\n      <h2>Sweet & Salty</h2>\r\n    </ion-label>\r\n    <ion-buttons slot=\"end\">\r\n      <button ion-button icon-only  (click)=\"servicio.irA('/carrito')\" class=\"header-btn-cart\">\r\n        <ion-icon name=\"fast-food-outline\" style=\"zoom:2.0;\"></ion-icon>\r\n        <ion-badge class=\"carts\" item-right color=\"danger\">{{pedidolocal!= null ? pedidolocal.length : 0}}</ion-badge>\r\n      </button>\r\n    </ion-buttons>\r\n  </ion-item>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n<div class=\"ion-padding wrapper\">\r\n\r\n  <ion-searchbar placeholder=\"Buscar...\" animated=\"true\"></ion-searchbar>\r\n\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"ion-align-items-baseline\">\r\n      <ion-col size=\"6\">\r\n        <h4 class=\"title\">\r\n          Categorias\r\n        </h4>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  </div>\r\n\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-slides [options]=\"categories\">\r\n            \r\n            <ion-slide *ngFor=\"let categoria of categorias\">\r\n              <ion-card class=\"category\" [color]=\"categoria.color\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon [src]=\"categoria.icon\"></ion-icon>\r\n                  <ion-card-title>{{categoria.nombre}}</ion-card-title>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>    \r\n            </ion-slides>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div class=\"ion-padding-horizontal wrapper\">\r\n  \r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-align-items-baseline\">\r\n          <ion-col size=\"6\">\r\n            <h4 class=\"title\">\r\n              Menu\r\n            </h4>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    \r\n      </div>\r\n\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-slides [options]=\"options\">\r\n\r\n          <ion-slide *ngFor=\"let producto of productos; let i = index\">\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img [src]=\"producto.imagen\"></ion-img>\r\n                </div>\r\n                \r\n                <ion-card-title class=\"title\">{{producto.nombre}}</ion-card-title>\r\n                <ion-card-subtitle>{{producto.descripcion}}</ion-card-subtitle>        \r\n                <ion-item>\r\n                  <ion-badge slot=\"start\" color=\"success\">{{producto.precio | currency}}</ion-badge>                \r\n                  <ion-button color=\"warning\" (click)=\"remove(producto, i)\"><ion-icon name=\"remove-outline\"></ion-icon></ion-button> \r\n                  <ion-input type=\"number\" inputMode=\"numeric\"  [(ngModel)]=\"producto.cantidad\" min=\"1\" max=\"10\" disabled></ion-input>\r\n                  <ion-button color=\"warning\" (click)=\"add(producto, i)\"><ion-icon name=\"add-outline\"></ion-icon></ion-button>       \r\n                </ion-item>      \r\n                <ion-item><ion-button fill=\"outline\" color=\"warning\" slot=\"end\" (click)=\"addProducto(producto, i)\">Agregar</ion-button>  </ion-item>    \r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: rgba(248, 248, 250, .96);\n}\nion-item h2 {\n  font-weight: bold;\n  font-size: 18px;\n  padding-top: 8px;\n}\nion-content {\n  --background: #f8f8fa;\n}\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 12px;\n}\n.more {\n  font-size: 12px;\n  color: #FB4E4E;\n}\n.title {\n  font-size: 16px;\n}\n.card {\n  margin: 0;\n  margin-right: 50px;\n  width: 80%;\n  box-shadow: none;\n  border-radius: 14px;\n}\n.category {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n}\nion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 200px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\nion-card-content ion-icon {\n  color: #ffff;\n  padding-right: 5px;\n  padding-left: 5px;\n}\nion-card-content ion-input {\n  text-align: center;\n}\nion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\nion-card-header ion-icon {\n  font-size: 60px;\n}\nion-card-header ion-card-title {\n  font-size: 22px;\n  font-weight: bolder;\n}\n.wrapper {\n  padding-bottom: 0;\n}\nion-badge {\n  padding: 10px;\n  font-size: 14px;\n}\n.header-btn-cart {\n  margin: 0 0px !important;\n}\n.carts {\n  position: absolute;\n  top: -3px;\n  right: 25px;\n  border-radius: 50%;\n  height: 19px;\n  width: 20px;\n}\nion-badge {\n  display: inline-block;\n  font-size: 11px;\n  padding-top: 5px;\n  padding-left: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvLWNsaWVudGUvQzpcXHdhbXA2NFxcd3d3XFxwZWRpZG9zQXBwLWZyb250L3NyY1xcYXBwXFxpbmljaW8tY2xpZW50ZVxcaW5pY2lvLWNsaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9pbmljaW8tY2xpZW50ZS9pbmljaW8tY2xpZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FESUE7RUFDRSxxQkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7QUNERjtBRElBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNERjtBREtBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGRjtBRE9FO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pKO0FET0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0xKO0FEUUU7RUFDRSxrQkFBQTtBQ05KO0FEU0U7RUFDRSxnQkFBQTtBQ1BKO0FEYUU7RUFDRSxlQUFBO0FDVko7QURhRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ1hKO0FEZUE7RUFDRSxpQkFBQTtBQ1pGO0FEZUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ1pGO0FEY0E7RUFDRSx3QkFBQTtBQ1hGO0FEYUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1ZGO0FEYUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9pbmljaW8tY2xpZW50ZS9pbmljaW8tY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ4LCAyNTAsIC45Nik7XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOGZhO1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4ubW9yZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjRkI0RTRFO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuXHJcblxyXG4uY2F0ZWdvcnkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIC5pbWctd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZC1zdWJ0aXRsZTpsYXN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZy10b3A6NnB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlciB7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuaW9uLWJhZGdlIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uaGVhZGVyLWJ0bi1jYXJ0IHtcclxuICBtYXJnaW46IDAgMHB4IWltcG9ydGFudDtcclxufVxyXG4uY2FydHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0zcHg7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogMTlweDtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuaW9uLWJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbn1cclxuIiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDgsIDI1MCwgLjk2KTtcbn1cbmlvbi1pdGVtIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmOGY4ZmE7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLm1vcmUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRkI0RTRFO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5jYXRlZ29yeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IC5pbWctd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5pb24tY2FyZC1jb250ZW50IGlvbi1pbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLWNhcmQtc3VidGl0bGU6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5pb24tYmFkZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5oZWFkZXItYnRuLWNhcnQge1xuICBtYXJnaW46IDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJ0cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE5cHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG5pb24tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG59Il19 */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios.service */ "./src/app/servicios.service.ts");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");





let InicioClientePage = class InicioClientePage {
    constructor(servicio, loading, alert, storage) {
        this.servicio = servicio;
        this.loading = loading;
        this.alert = alert;
        this.storage = storage;
        this.cantidad = 0;
        this.pedido = [];
        this.pedidolocal = [];
        this.options = {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: -60,
        };
        this.categories = {
            slidesPerView: 2.5,
        };
        this.categorias = [];
        this.total = 0;
        this.productos = [];
        this.totalP = 0;
        this.storage.create();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.Cargar_Categorias();
            this.Cargar_Productos();
            let pedido = yield this.storage.get('pedidos');
            this.pedidolocal = pedido != null ? pedido : [];
        });
    }
    Cargar_Categorias() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let l = yield this.loading.create();
            l.present();
            this.servicio.Categorias_Listado()
                .subscribe((data) => {
                this.categorias = data.info.items;
                console.log(this.categorias);
                this.total = data.info.total;
                l.dismiss();
            }, (error) => {
                l.dismiss();
            });
        });
    }
    Cargar_Productos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let l = yield this.loading.create();
            l.present();
            this.servicio.Producto_Listado()
                .subscribe((data) => {
                this.productos = data.info.items;
                this.productos.forEach(producto => {
                    producto.cantidad = 0;
                });
                console.log(this.productos);
                this.totalP = data.info.total;
                l.dismiss();
            }, (error) => {
                l.dismiss();
            });
        });
    }
    add(producto, i) {
        if (producto.cantidad < 10) {
            producto.cantidad++;
            this.productos[i] = producto;
            console.log(this.productos[i]);
        }
    }
    remove(producto, i) {
        if (producto.cantidad > 0) {
            producto.cantidad--;
            this.productos[i] = producto;
        }
    }
    addProducto(producto, i) {
        if (producto.cantidad != 0) {
            this.pedidolocal.push(producto);
            this.storage.set('pedidos', this.pedidolocal).then((data) => {
                producto.cantidad = 0;
            });
            this.servicio.Mensaje('Producto agregado correctamente', 'success');
        }
        else {
            this.servicio.Mensaje('Debe seleccionar una cantidad', 'warning');
        }
    }
};
InicioClientePage.ctorParameters = () => [
    { type: _servicios_service__WEBPACK_IMPORTED_MODULE_3__["ServiciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
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