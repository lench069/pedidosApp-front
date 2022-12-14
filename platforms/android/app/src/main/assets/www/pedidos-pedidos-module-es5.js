function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedidos-pedidos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPedidosPedidosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pedidos</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"servicio.irA('/pedido/0')\">\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"Cargar_Pedidos()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar color=\"warning\" debounce=\"500\" (ionChange)=\"Cargar_Pedidos()\" [(ngModel)]=\"texto\" placeholder=\"Buscar...\"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let pedido of pedidos\" #ionItemSliding>\n      <ion-item>\n        <ion-label text-wrap>\n          <h2>{{pedido.cliente}}</h2>\n          <small>Cant. Productos: {{pedido.n_productos}}</small>\n          <br/>\n          <small>Vendido por: {{pedido.vendedor}}</small>\n          <p>Total: ${{pedido.total|number}}</p>\n        </ion-label>\n        <ion-badge slot=\"end\" color=\"danger\">{{pedido.id}}</ion-badge>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"warning\" (click)=\"Editar(pedido, ionItemSliding)\">Editar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"Borrar(pedido, ionItemSliding)\">Eliminar</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>";
    /***/
  },

  /***/
  "./src/app/pedidos/pedidos-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pedidos/pedidos-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: PedidosPageRoutingModule */

  /***/
  function srcAppPedidosPedidosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidosPageRoutingModule", function () {
      return PedidosPageRoutingModule;
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


    var _pedidos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pedidos.page */
    "./src/app/pedidos/pedidos.page.ts");

    var routes = [{
      path: '',
      component: _pedidos_page__WEBPACK_IMPORTED_MODULE_3__["PedidosPage"]
    }];

    var PedidosPageRoutingModule = function PedidosPageRoutingModule() {
      _classCallCheck(this, PedidosPageRoutingModule);
    };

    PedidosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PedidosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pedidos/pedidos.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pedidos/pedidos.module.ts ***!
    \*******************************************/

  /*! exports provided: PedidosPageModule */

  /***/
  function srcAppPedidosPedidosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function () {
      return PedidosPageModule;
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


    var _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pedidos-routing.module */
    "./src/app/pedidos/pedidos-routing.module.ts");
    /* harmony import */


    var _pedidos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pedidos.page */
    "./src/app/pedidos/pedidos.page.ts");

    var PedidosPageModule = function PedidosPageModule() {
      _classCallCheck(this, PedidosPageModule);
    };

    PedidosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidosPageRoutingModule"]],
      declarations: [_pedidos_page__WEBPACK_IMPORTED_MODULE_6__["PedidosPage"]]
    })], PedidosPageModule);
    /***/
  },

  /***/
  "./src/app/pedidos/pedidos.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pedidos/pedidos.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPedidosPedidosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkb3MvcGVkaWRvcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pedidos/pedidos.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pedidos/pedidos.page.ts ***!
    \*****************************************/

  /*! exports provided: PedidosPage */

  /***/
  function srcAppPedidosPedidosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidosPage", function () {
      return PedidosPage;
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

    var PedidosPage = /*#__PURE__*/function () {
      function PedidosPage(servicio, loading, alert) {
        _classCallCheck(this, PedidosPage);

        this.servicio = servicio;
        this.loading = loading;
        this.alert = alert;
        this.pedidos = [];
        this.total = 0;
        this.texto = '';
      }

      _createClass(PedidosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.Cargar_Pedidos();
        }
      }, {
        key: "Cargar_Pedidos",
        value: function Cargar_Pedidos() {
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
                    this.servicio.Pedido_Listado(this.texto).subscribe(function (data) {
                      _this.pedidos = data.info.items;
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
          this.servicio.irA('/pedido/' + item.id);
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
                      header: 'Confirmaci??n',
                      message: '??Est?? seguro que desea eliminar el pedido [' + item.id + ']?',
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
                                    this.servicio.Pedido_Borrar(item.id).subscribe(function (data) {
                                      _this3.Cargar_Pedidos();

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

      return PedidosPage;
    }();

    PedidosPage.ctorParameters = function () {
      return [{
        type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    PedidosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pedidos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pedidos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pedidos.page.scss */
      "./src/app/pedidos/pedidos.page.scss"))["default"]]
    })], PedidosPage);
    /***/
  }
}]);
//# sourceMappingURL=pedidos-pedidos-module-es5.js.map