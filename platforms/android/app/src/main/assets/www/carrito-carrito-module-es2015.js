(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carrito-carrito-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/carrito/carrito.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carrito/carrito.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-item lines=\"none\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"inicio-cliente\"></ion-back-button>\n    </ion-buttons>\n    <ion-label>\n      <h2>Resumen de pedido</h2>\n    </ion-label>\n  </ion-item>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"page-cart\">\n\n  <div *ngIf=\"!flag\">\n    <ion-row>\n      <ion-icon class=\"empty-cart\" name=\"cart\"></ion-icon>\n    </ion-row>\n    <h4 style=\"background-color: #32cd32;\">No tienes items seleccionados</h4>\n  </div>\n\n  <ion-list class=\"cart-list\" *ngFor=\"let pedido of pedidos\">\n    <!-- item-list -->\n    <ion-item class=\"cart-item\">\n      <!-- item -->\n      <ion-row>\n\n        <ion-col size=\"12\">\n          <!-- col-for item-image and details -->\n          <ion-row>\n            <ion-col size=\"5\">\n              <!-- item-image -->\n              <img src={{pedido.imagen}} alt=\"\">\n            </ion-col>\n            <ion-col size=\"7\">\n              <p class=\"item-name\" text-wrap>{{pedido.nombre}}</p>\n              <p class=\"item-detail\" text-wrap>Cantidad: {{pedido.cantidad}}</p>\n              <p class=\"item-detail\">Precio: {{pedido.precio | currency}}</p>\n              <ion-row class=\"count-row\">\n                <!-- row-for count item -->\n                <ion-col size=\"10\">\n                  <div class=\"count\">\n                    <span class=\"item-count\" (click)=\"remove(pedido, i)\">\n                      -\n                    </span>\n                    <span class=\"item-count show-count\"> {{pedido.cantidad}}\n                    </span>\n                    <span class=\"item-count\" (click)=\"add(pedido, i)\">\n                      +\n                    </span>\n                  </div>\n\n                </ion-col>\n                <ion-col size=\"2\">\n                  <!-- col-cancel  button -->\n                  <ion-icon name=\"trash\" (click)=\"deleteItem(pedido, i)\">\n                  </ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n  <ion-row class=\"price-details\" *ngIf=\"flag\">\n    <ion-col col-12 class=\"calculate\">\n      <p class=\"bill-detail\">Subtotal\n        <span> {{subTotal | currency}}</span>\n      </p>     \n      <p class=\"bill-detail\">Iva (12%)\n        <span> {{iva | currency}}</span>\n      </p>\n      <hr>       \n      <p class=\"cart-total\">\n        <strong>Order Total </strong>\n        <span class=\"price\"> {{Total | currency}}</span>\n      </p>\n\n    </ion-col>\n  </ion-row>\n  <ion-button expand=\"block\" color=\"success\" *ngIf=\"flag\" (click)=\"pedir()\"><strong>Pedir</strong></ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/carrito/carrito-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/carrito/carrito-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CarritoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoPageRoutingModule", function() { return CarritoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carrito.page */ "./src/app/carrito/carrito.page.ts");




const routes = [
    {
        path: '',
        component: _carrito_page__WEBPACK_IMPORTED_MODULE_3__["CarritoPage"]
    }
];
let CarritoPageRoutingModule = class CarritoPageRoutingModule {
};
CarritoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarritoPageRoutingModule);



/***/ }),

/***/ "./src/app/carrito/carrito.module.ts":
/*!*******************************************!*\
  !*** ./src/app/carrito/carrito.module.ts ***!
  \*******************************************/
/*! exports provided: CarritoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoPageModule", function() { return CarritoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _carrito_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrito-routing.module */ "./src/app/carrito/carrito-routing.module.ts");
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carrito.page */ "./src/app/carrito/carrito.page.ts");







let CarritoPageModule = class CarritoPageModule {
};
CarritoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _carrito_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarritoPageRoutingModule"]
        ],
        declarations: [_carrito_page__WEBPACK_IMPORTED_MODULE_6__["CarritoPage"]]
    })
], CarritoPageModule);



/***/ }),

/***/ "./src/app/carrito/carrito.page.scss":
/*!*******************************************!*\
  !*** ./src/app/carrito/carrito.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: rgba(248, 248, 250, .96);\n}\nion-item h2 {\n  font-weight: bold;\n  font-size: 18px;\n  padding-top: 8px;\n}\nion-content {\n  --background: #f8f8fa;\n}\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 12px;\n}\n.more {\n  font-size: 12px;\n  color: #FB4E4E;\n}\n.title {\n  font-size: 16px;\n}\n.card {\n  margin: 0;\n  margin-right: 50px;\n  width: 80%;\n  box-shadow: none;\n  border-radius: 14px;\n}\n.category {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n}\nion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 200px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\nion-card-content ion-icon {\n  color: #ffff;\n  padding-right: 5px;\n  padding-left: 5px;\n}\nion-card-content ion-input {\n  text-align: center;\n}\nion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\nion-card-header ion-icon {\n  font-size: 60px;\n}\nion-card-header ion-card-title {\n  font-size: 22px;\n  font-weight: bolder;\n}\n.wrapper {\n  padding-bottom: 0;\n}\nion-badge {\n  padding: 10px;\n  font-size: 14px;\n}\n.header-btn-cart {\n  margin: 0 0px !important;\n}\n.carts {\n  position: absolute;\n  top: -3px;\n  right: 25px;\n  border-radius: 50%;\n  height: 19px;\n  width: 20px;\n}\nion-badge {\n  display: inline-block;\n  font-size: 11px;\n  padding-top: 5px;\n  padding-left: 7px;\n}\n.bg {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.price-details {\n  display: flex;\n  width: 97%;\n}\nh4 {\n  font-size: 2.2rem;\n  text-align: center;\n  color: white;\n}\n.cart-list {\n  background-color: #f8f8fa;\n  margin-bottom: -12px !important;\n}\n.cart-list .cart-item {\n  background-color: #f8f8fa;\n}\n.cart-list .cart-item .close-btn {\n  top: 33%;\n  left: -32%;\n  color: gray !important;\n}\n.cart-list .cart-item img {\n  height: 91px;\n  width: 100%;\n}\n.cart-list .cart-item .item-name {\n  font-weight: 700;\n  font-size: 17px;\n}\n.cart-list .cart-item .item-detail {\n  font-size: 13px;\n  line-height: 1.3em;\n  white-space: initial !important;\n}\n.cart-list .cart-item .item-price {\n  font-weight: 700;\n  color: #32cd32;\n}\n.calculate {\n  margin: 0 4px;\n}\n.calculate .bill-detail {\n  color: #666666 !important;\n  padding: 10px 3px 0px 2px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.calculate .bill-detail span {\n  float: right;\n}\n.calculate .cart-total {\n  font-size: 1.2em;\n  padding: 7px 0px;\n  color: #666;\n}\n.calculate .cart-total span {\n  float: right;\n  font-weight: 700;\n  color: #32cd32;\n}\n.continue-btn {\n  background-color: #32cd32 !important;\n  height: 46px;\n  font-size: 1.8rem;\n  border-radius: 0;\n  margin-top: 1em;\n}\n.empty-btn {\n  background-color: #32cd32 !important;\n  margin: 3em auto;\n  display: block;\n}\n.count .item-count {\n  padding: 1.5px 9px;\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  background-color: gray;\n}\n.count .show-count {\n  background-color: #32cd32 !important;\n}\nion-icon {\n  color: red;\n  font-size: 1.3rem;\n}\n.apply-coupon-btn {\n  color: #32cd32;\n  border-color: #32cd32;\n}\n.invalid-text {\n  color: red;\n}\n.input-coupon {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  height: 36px;\n  margin-top: 8px;\n}\n.select-item {\n  margin-top: 6px;\n}\n.select-item .label {\n  color: #424242 !important;\n  font-size: 14px !important;\n}\n.select-item ion-select {\n  padding-left: 0 !important;\n  font-size: 14px !important;\n}\n.empty-cart {\n  font-size: 10.2em;\n  display: block;\n  margin: 0.2em auto 0;\n  color: #32cd32;\n}\n.coupon-applied {\n  color: #32cd32;\n}\np {\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycml0by9DOlxcd2FtcDY0XFx3d3dcXHBlZGlkb3NBcHAtZnJvbnQvc3JjXFxhcHBcXGNhcnJpdG9cXGNhcnJpdG8ucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJyaXRvL2NhcnJpdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7QUNDSjtBRENJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBRElFO0VBQ0UscUJBQUE7QUNESjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0FDREo7QURJRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREo7QURLRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRko7QURPSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNKTjtBRE9JO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNMTjtBRFFJO0VBQ0Usa0JBQUE7QUNOTjtBRFNJO0VBQ0UsZ0JBQUE7QUNQTjtBRGFJO0VBQ0UsZUFBQTtBQ1ZOO0FEYUk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNYTjtBRGVFO0VBQ0UsaUJBQUE7QUNaSjtBRGVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNaSjtBRGNFO0VBQ0Usd0JBQUE7QUNYSjtBRGFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNWSjtBRGFFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1ZKO0FEZUk7RUFDQywyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNaTDtBRGNLO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUNYUDtBRGFLO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNWUDtBRGFLO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtBQ1ZQO0FEV087RUFDRSx5QkFBQTtBQ1RUO0FEVVM7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDUlg7QURVUztFQUNFLFlBQUE7RUFDQSxXQUFBO0FDUlg7QURVUztFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ1JYO0FEVVM7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ1JYO0FEV1M7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNUWDtBRGdCSztFQUNFLGFBQUE7QUNiUDtBRGNPO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1pUO0FEYVM7RUFDRSxZQUFBO0FDWFg7QURjTztFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDWlQ7QURhUztFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNYWDtBRGVLO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNaUDtBRGNLO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNYUDtBRGVPO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNaVDtBRGNPO0VBQ0Usb0NBQUE7QUNaVDtBRGVPO0VBQ0MsVUFBQTtFQUNBLGlCQUFBO0FDWlI7QURlTztFQUNDLGNBQUE7RUFDQSxxQkFBQTtBQ1pSO0FEY087RUFDRSxVQUFBO0FDWFQ7QURhTztFQUVJLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNYWDtBRGFLO0VBRUUsZUFBQTtBQ1hQO0FEWU87RUFFRSx5QkFBQTtFQUNBLDBCQUFBO0FDWFQ7QURhTztFQUVFLDBCQUFBO0VBQ0EsMEJBQUE7QUNaVDtBRGdCSztFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ2JQO0FEZUs7RUFDRSxjQUFBO0FDWlA7QURjSztFQUNDLGVBQUE7RUFDQSxrQkFBQTtBQ1hOIiwiZmlsZSI6InNyYy9hcHAvY2Fycml0by9jYXJyaXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0OCwgMjUwLCAuOTYpO1xyXG4gIFxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOGY4ZmE7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAubW9yZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI0ZCNEU0RTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY2F0ZWdvcnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAuaW1nLXdyYXBwZXIge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjZmZmZjtcclxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkLXN1YnRpdGxlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOjZweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICBpb24tYmFkZ2Uge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmhlYWRlci1idG4tY2FydCB7XHJcbiAgICBtYXJnaW46IDAgMHB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNhcnRzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTNweDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5cclxuICAgIC5iZyB7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICB9XHJcbiAgICAgLnByaWNlLWRldGFpbHMge1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgfVxyXG4gICAgIGg0IHtcclxuICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIFxyXG4gICAgIH1cclxuICAgICAuY2FydC1saXN0IHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZmE7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiAtMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgLmNhcnQtaXRlbSB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZmE7XHJcbiAgICAgICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgICAgIHRvcDogMzMlO1xyXG4gICAgICAgICAgIGxlZnQ6IC0zMiU7XHJcbiAgICAgICAgICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpbWcge1xyXG4gICAgICAgICAgIGhlaWdodDogOTFweDtcclxuICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuaXRlbS1uYW1lIHtcclxuICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuaXRlbS1kZXRhaWwge1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zZW07XHJcbiAgICAgICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLml0ZW0tcHJpY2Uge1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgY29sb3I6ICMzMmNkMzI7XHJcbiAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgXHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICBcclxuICAgICAuY2FsY3VsYXRlIHtcclxuICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgICAuYmlsbC1kZXRhaWwge1xyXG4gICAgICAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIHBhZGRpbmc6IDEwcHggM3B4IDBweCAycHg7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgICAuY2FydC10b3RhbCB7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgIHBhZGRpbmc6IDdweCAwcHg7XHJcbiAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICBjb2xvcjogIzMyY2QzMlxyXG4gICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgIC5jb250aW51ZS1idG4ge1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMyY2QzMiAhaW1wb3J0YW50O1xyXG4gICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgIH1cclxuICAgICAuZW1wdHktYnRue1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMyY2QzMiAhaW1wb3J0YW50O1xyXG4gICAgICAgbWFyZ2luOiAzZW0gYXV0bztcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICAuY291bnQge1xyXG4gICAgICAgLml0ZW0tY291bnQge1xyXG4gICAgICAgICBwYWRkaW5nOiAxLjVweCA5cHg7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICB9XHJcbiAgICAgICAuc2hvdy1jb3VudCB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMmNkMzIgIWltcG9ydGFudDtcclxuICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZm9udC1zaXplOjEuM3JlbTtcclxuICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgLmFwcGx5LWNvdXBvbi1idG57XHJcbiAgICAgICAgY29sb3I6ICMzMmNkMzI7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzJjZDMyO1xyXG4gICAgICAgfVxyXG4gICAgICAgLmludmFsaWQtdGV4dHtcclxuICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgIH1cclxuICAgICAgIC5pbnB1dC1jb3Vwb25cclxuICAgICAgIHtcclxuICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICB9XHJcbiAgICAgLnNlbGVjdC1pdGVtXHJcbiAgICAge1xyXG4gICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgLmxhYmVsXHJcbiAgICAgICB7XHJcbiAgICAgICAgIGNvbG9yOiAjNDI0MjQyIWltcG9ydGFudDtcclxuICAgICAgICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxuICAgICAgIH1cclxuICAgICAgIGlvbi1zZWxlY3RcclxuICAgICAgIHtcclxuICAgICAgICAgcGFkZGluZy1sZWZ0OiAwIWltcG9ydGFudDtcclxuICAgICAgICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDsgIFxyXG4gICBcclxuICAgICAgIH1cclxuICAgICB9IFxyXG4gICAgIC5lbXB0eS1jYXJ0e1xyXG4gICAgICAgZm9udC1zaXplOiAxMC4yZW07XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIG1hcmdpbjogLjJlbSBhdXRvIDA7XHJcbiAgICAgICBjb2xvcjogIzMyY2QzMjtcclxuICAgICB9IFxyXG4gICAgIC5jb3Vwb24tYXBwbGllZHtcclxuICAgICAgIGNvbG9yOiMzMmNkMzI7XHJcbiAgICAgfVxyXG4gICAgIHB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgIH1cclxuICAgIiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDgsIDI1MCwgLjk2KTtcbn1cbmlvbi1pdGVtIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmOGY4ZmE7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLm1vcmUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRkI0RTRFO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5jYXRlZ29yeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IC5pbWctd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5pb24tY2FyZC1jb250ZW50IGlvbi1pbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLWNhcmQtc3VidGl0bGU6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5pb24tYmFkZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5oZWFkZXItYnRuLWNhcnQge1xuICBtYXJnaW46IDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJ0cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE5cHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG5pb24tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnByaWNlLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTclO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcnQtbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZmE7XG4gIG1hcmdpbi1ib3R0b206IC0xMnB4ICFpbXBvcnRhbnQ7XG59XG4uY2FydC1saXN0IC5jYXJ0LWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZhO1xufVxuLmNhcnQtbGlzdCAuY2FydC1pdGVtIC5jbG9zZS1idG4ge1xuICB0b3A6IDMzJTtcbiAgbGVmdDogLTMyJTtcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbn1cbi5jYXJ0LWxpc3QgLmNhcnQtaXRlbSBpbWcge1xuICBoZWlnaHQ6IDkxcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcnQtbGlzdCAuY2FydC1pdGVtIC5pdGVtLW5hbWUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4uY2FydC1saXN0IC5jYXJ0LWl0ZW0gLml0ZW0tZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS4zZW07XG4gIHdoaXRlLXNwYWNlOiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG4uY2FydC1saXN0IC5jYXJ0LWl0ZW0gLml0ZW0tcHJpY2Uge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzMyY2QzMjtcbn1cblxuLmNhbGN1bGF0ZSB7XG4gIG1hcmdpbjogMCA0cHg7XG59XG4uY2FsY3VsYXRlIC5iaWxsLWRldGFpbCB7XG4gIGNvbG9yOiAjNjY2NjY2ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggM3B4IDBweCAycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jYWxjdWxhdGUgLmJpbGwtZGV0YWlsIHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uY2FsY3VsYXRlIC5jYXJ0LXRvdGFsIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgcGFkZGluZzogN3B4IDBweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uY2FsY3VsYXRlIC5jYXJ0LXRvdGFsIHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMzJjZDMyO1xufVxuXG4uY29udGludWUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyY2QzMiAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5lbXB0eS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJjZDMyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogM2VtIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY291bnQgLml0ZW0tY291bnQge1xuICBwYWRkaW5nOiAxLjVweCA5cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG4uY291bnQgLnNob3ctY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJjZDMyICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5hcHBseS1jb3Vwb24tYnRuIHtcbiAgY29sb3I6ICMzMmNkMzI7XG4gIGJvcmRlci1jb2xvcjogIzMyY2QzMjtcbn1cblxuLmludmFsaWQtdGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pbnB1dC1jb3Vwb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLnNlbGVjdC1pdGVtIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnNlbGVjdC1pdGVtIC5sYWJlbCB7XG4gIGNvbG9yOiAjNDI0MjQyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuLnNlbGVjdC1pdGVtIGlvbi1zZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lbXB0eS1jYXJ0IHtcbiAgZm9udC1zaXplOiAxMC4yZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAuMmVtIGF1dG8gMDtcbiAgY29sb3I6ICMzMmNkMzI7XG59XG5cbi5jb3Vwb24tYXBwbGllZCB7XG4gIGNvbG9yOiAjMzJjZDMyO1xufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/carrito/carrito.page.ts":
/*!*****************************************!*\
  !*** ./src/app/carrito/carrito.page.ts ***!
  \*****************************************/
/*! exports provided: CarritoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoPage", function() { return CarritoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios.service */ "./src/app/servicios.service.ts");





let CarritoPage = class CarritoPage {
    constructor(servicio, loading, alert, storage) {
        this.servicio = servicio;
        this.loading = loading;
        this.alert = alert;
        this.storage = storage;
        this.subTotal = 0;
        this.iva = 0;
        this.Total = 0;
        this.flag = false;
        this.id = 0;
        this.cliente_id = 0;
        this.usuario_id = 0;
        this.fecha = new Date();
        this.estado = 0;
        this.cliente = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.create();
            let pedidos = yield this.storage.get('pedidos');
            this.cliente = yield this.storage.get('cliente');
            if (pedidos != null) {
                this.pedidos = pedidos;
            }
            else {
                this.pedidos = [];
            }
            this.calcularTotal();
        });
    }
    add(pedido, i) {
        if (pedido.cantidad < 10) {
            pedido.cantidad++;
            this.pedidos[i] = pedido;
            this.storage.set('pedidos', this.pedidos);
            this.calcularTotal();
        }
    }
    remove(pedido, i) {
        if (pedido.cantidad > 1) {
            pedido.cantidad--;
            this.pedidos[i] = pedido;
            this.storage.set('pedidos', this.pedidos);
            this.calcularTotal();
        }
    }
    deleteItem(pedido, i) {
        this.pedidos.splice(i - 1, 1);
        this.storage.set('pedidos', this.pedidos);
        this.calcularTotal();
        if (this.pedidos.length == 0) {
            this.flag = false;
        }
    }
    pedir() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Ingrese el numero de mesa',
                buttons: [{
                        text: 'No',
                        cssClass: 'alert-button-cancel',
                        handler: () => { console.log('CANCEL'); }
                    },
                    {
                        text: 'Yes',
                        cssClass: 'alert-button-confirm',
                        handler: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            console.log(this.subTotal);
                            let l = yield this.loading.create();
                            l.present();
                            this.servicio.Pedido_Guardar({
                                id: this.id,
                                cliente_id: this.cliente.id,
                                usuario_id: 1,
                                fecha: this.fecha,
                                estado: 0,
                                subtotal: this.subTotal,
                                iva: this.iva,
                                total: this.Total,
                                mesa: data[0]
                            }).subscribe((data) => {
                                l.dismiss();
                                this.pedidos.forEach(element => {
                                    this.guardarDetalle(data.info.id, element);
                                });
                                this.storage.remove('pedidos');
                                this.servicio.irA('/inicio-cliente');
                            }, _ => {
                                l.dismiss();
                                this.servicio.Mensaje('No se pudo realizar la petición.', 'danger');
                            });
                        })
                    }],
                inputs: [
                    {
                        id: 'mesa',
                        type: 'number',
                        placeholder: '# Mesa',
                        min: 1,
                        max: 10,
                    },
                ],
            });
            yield alert.present();
            /* console.log(this.subTotal);
             let l = await this.loading.create();
             l.present();
             this.servicio.Pedido_Guardar({
               id: this.id,
               cliente_id: this.cliente.id,
               usuario_id: 1,
               fecha: this.fecha,
               estado: 0,
               subtotal: this.subTotal,
               iva: this.iva,
               total: this.Total
             }).subscribe((data: any) => {
               l.dismiss();
               this.pedidos.forEach(element => {
                 this.guardarDetalle(data.info.id, element);
               });
               this.storage.remove('pedidos');
               this.servicio.irA('/inicio-cliente')
               
             }, _ => {
               l.dismiss();
               this.servicio.Mensaje('No se pudo realizar la petición.', 'danger');
             });*/
        });
    }
    calcularTotal() {
        if (this.pedidos.length > 0) {
            this.flag = true;
            console.log(this.pedidos);
            this.subTotal = 0;
            this.pedidos.forEach(element => {
                this.subTotal = this.subTotal + (parseFloat(element.precio) * element.cantidad);
            });
            this.iva = this.subTotal * 0.12;
            this.Total = this.subTotal + this.iva;
        }
    }
    guardarDetalle(pedidoId, pedido) {
        if (pedidoId > 0) {
            //Guarda el detalle del pedido
            this.servicio.Pedido_Guardar_Producto({
                pedido_id: pedidoId,
                producto_id: pedido.id,
                cantidad: 1,
                precio: pedido.precio
            }).subscribe((data) => {
            });
        }
    }
};
CarritoPage.ctorParameters = () => [
    { type: _servicios_service__WEBPACK_IMPORTED_MODULE_4__["ServiciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
CarritoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrito',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrito.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/carrito/carrito.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carrito.page.scss */ "./src/app/carrito/carrito.page.scss")).default]
    })
], CarritoPage);



/***/ })

}]);
//# sourceMappingURL=carrito-carrito-module-es2015.js.map