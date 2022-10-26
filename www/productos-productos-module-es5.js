function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productos-productos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/productos.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productos/productos.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductosProductosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons> \n    <ion-title>Productos</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"servicio.irA('/producto/0')\">\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"Cargar_Productos()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar color=\"success\" debounce=\"500\" (ionChange)=\"Cargar_Productos()\" [(ngModel)]=\"texto\" placeholder=\"Buscar...\"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let producto of productos\" #ionItemSliding>\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <img [src]='producto.imagen' />\n        </ion-thumbnail>\n        <ion-label text-wrap>\n          <h2>{{producto.nombre}}</h2>\n          <p>Stock: {{producto.stock}}</p>\n          <p>Precio: {{producto.precio|number}}</p>\n        </ion-label>\n        <ion-badge slot=\"end\" color=\"danger\">{{producto.codigo}}</ion-badge>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"warning\" (click)=\"Editar(producto, ionItemSliding)\">Editar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"Borrar(producto, ionItemSliding)\">Eliminar</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/productos/productos-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/productos/productos-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ProductosPageRoutingModule */

  /***/
  function srcAppProductosProductosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductosPageRoutingModule", function () {
      return ProductosPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _productos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./productos.page */
    "./src/app/productos/productos.page.ts");

    var routes = [{
      path: '',
      component: _productos_page__WEBPACK_IMPORTED_MODULE_3__["ProductosPage"]
    }];

    var ProductosPageRoutingModule = function ProductosPageRoutingModule() {
      _classCallCheck(this, ProductosPageRoutingModule);
    };

    ProductosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/productos/productos.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/productos/productos.module.ts ***!
    \***********************************************/

  /*! exports provided: ProductosPageModule */

  /***/
  function srcAppProductosProductosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductosPageModule", function () {
      return ProductosPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _productos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./productos-routing.module */
    "./src/app/productos/productos-routing.module.ts");
    /* harmony import */


    var _productos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./productos.page */
    "./src/app/productos/productos.page.ts");

    var ProductosPageModule = function ProductosPageModule() {
      _classCallCheck(this, ProductosPageModule);
    };

    ProductosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _productos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductosPageRoutingModule"]],
      declarations: [_productos_page__WEBPACK_IMPORTED_MODULE_6__["ProductosPage"]]
    })], ProductosPageModule);
    /***/
  },

  /***/
  "./src/app/productos/productos.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/productos/productos.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductosProductosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rvcy9wcm9kdWN0b3MucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/productos/productos.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/productos/productos.page.ts ***!
    \*********************************************/

  /*! exports provided: ProductosPage */

  /***/
  function srcAppProductosProductosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductosPage", function () {
      return ProductosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../servicios.service */
    "./src/app/servicios.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ProductosPage = /*#__PURE__*/function () {
      function ProductosPage(servicio, loading, alert) {
        _classCallCheck(this, ProductosPage);

        this.servicio = servicio;
        this.loading = loading;
        this.alert = alert;
        this.productos = [];
        this.total = 0;
        this.texto = '';
      }

      _createClass(ProductosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.Cargar_Productos();
        }
      }, {
        key: "Cargar_Productos",
        value: function Cargar_Productos() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var l;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loading.create();

                  case 2:
                    l = _context.sent;
                    l.present();
                    this.servicio.Producto_Listado(this.texto).subscribe(function (data) {
                      _this.productos = data.info.items;
                      _this.total = data.info.total;
                      l.dismiss();
                    }, function (error) {
                      l.dismiss();
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "Editar",
        value: function Editar(item, ionItemSliding) {
          ionItemSliding.close();
          this.servicio.irA('/producto/' + item.id);
        }
      }, {
        key: "Borrar",
        value: function Borrar(item, ionItemSliding) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    ionItemSliding.close();
                    _context3.next = 3;
                    return this.alert.create({
                      header: 'Confirmación',
                      message: '¿Está seguro que desea eliminar el producto [' + item.nombre + ']?',
                      buttons: [{
                        text: 'Si',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var _this3 = this;

                            var l;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return this.loading.create({
                                      message: 'Borrando...'
                                    });

                                  case 2:
                                    l = _context2.sent;
                                    l.present();
                                    this.servicio.Producto_Borrar(item.id).subscribe(function (data) {
                                      _this3.Cargar_Productos();

                                      l.dismiss();
                                    }, function (error) {
                                      l.dismiss();
                                    });

                                  case 5:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        }
                      }, {
                        text: 'No',
                        handler: function handler() {}
                      }]
                    });

                  case 3:
                    alert = _context3.sent;
                    alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ProductosPage;
    }();

    ProductosPage.ctorParameters = function () {
      return [{
        type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    ProductosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-productos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./productos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/productos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./productos.page.scss */
      "./src/app/productos/productos.page.scss"))["default"]]
    })], ProductosPage);
    /***/
  }
}]);
//# sourceMappingURL=productos-productos-module-es5.js.map