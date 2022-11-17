function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedido-pedido-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pedido/pedido.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pedido/pedido.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPedidoPedidoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"pedidos\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"small\">{{id == 0 ? 'Nuevo' : 'Editar'}} pedido {{id == 0 ? '' : id}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"Guardar()\">\n        <ion-icon name=\"save\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\">Cliente</ion-label>\n      <ion-select placeholder=\"Seleccionar\" [(ngModel)]=\"cliente_id\" [disabled]=\"id != 0\" okText=\"Seleccionar\" cancelText=\"Cancelar\">\n        <ion-select-option [value]=\"cliente.id\" *ngFor=\"let cliente of clientes\">{{cliente.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Atendido por:</ion-label>\n      <ion-select placeholder=\"Seleccionar\" [(ngModel)]=\"usuario_id\" okText=\"Seleccionar\" cancelText=\"Cancelar\">\n        <ion-select-option [value]=\"usuario.id\" *ngFor=\"let usuario of usuarios\">{{usuario.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Fecha</ion-label>\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Seleccionar fecha\" [disabled]=\"id != 0\" cancelText=\"Cancelar\" doneText=\"Seleccionar\" [(ngModel)]=\"fecha\"></ion-datetime>\n    </ion-item>\n    <ion-item *ngIf=\"id != 0\">\n      <ion-label position=\"stacked\">Estado</ion-label>\n      <ion-select placeholder=\"Seleccionar\" [(ngModel)]=\"estado\" okText=\"Seleccionar\" cancelText=\"Cancelar\">\n        <ion-select-option [value]=\"est.id\" *ngFor=\"let est of estados\">{{est.texto}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf=\"id != 0\">\n      <ion-label position=\"stacked\">Productos</ion-label>\n      <ion-select placeholder=\"Seleccionar\" [(ngModel)]=\"_producto\" okText=\"Seleccionar\" cancelText=\"Cancelar\" (ionChange)=\"Prod_Seleccionado()\">\n        <ion-select-option [value]=\"producto\" *ngFor=\"let producto of productos\">{{producto.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-list-header color=\"danger\">\n      Detalle productos\n    </ion-list-header>\n    <ion-item-sliding *ngFor=\"let _prod of productos_listado\" #ionItemSliding>\n      <ion-item>\n        <ion-label text-wrap>\n          <h3>{{_prod.nombre|uppercase}}</h3>\n          <p><b>Precio:</b> ${{_prod.precio|number}}</p>\n        </ion-label>\n        <ion-input slot=\"end\" [(ngModel)]=\"_prod.cantidad\" (ionChange)=\"Mod_Producto(_prod)\" type=\"number\"></ion-input>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"Borrar_Producto(_prod, ionItemSliding)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-list-header color=\"success\">\n      <ion-grid>\n        <ion-row>\n          <ion-col><strong>Subtotal: </strong>{{subtotal|currency}}</ion-col>\n          <ion-col><strong>Iva: </strong>{{iva|currency}}</ion-col>\n          <ion-col><strong>Total: </strong>{{total|currency}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list-header>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pedido/pedido-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pedido/pedido-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: PedidoPageRoutingModule */

  /***/
  function srcAppPedidoPedidoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoPageRoutingModule", function () {
      return PedidoPageRoutingModule;
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


    var _pedido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pedido.page */
    "./src/app/pedido/pedido.page.ts");

    var routes = [{
      path: '',
      component: _pedido_page__WEBPACK_IMPORTED_MODULE_3__["PedidoPage"]
    }];

    var PedidoPageRoutingModule = function PedidoPageRoutingModule() {
      _classCallCheck(this, PedidoPageRoutingModule);
    };

    PedidoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PedidoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pedido/pedido.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pedido/pedido.module.ts ***!
    \*****************************************/

  /*! exports provided: PedidoPageModule */

  /***/
  function srcAppPedidoPedidoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoPageModule", function () {
      return PedidoPageModule;
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


    var _pedido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pedido-routing.module */
    "./src/app/pedido/pedido-routing.module.ts");
    /* harmony import */


    var _pedido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pedido.page */
    "./src/app/pedido/pedido.page.ts");

    var PedidoPageModule = function PedidoPageModule() {
      _classCallCheck(this, PedidoPageModule);
    };

    PedidoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pedido_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidoPageRoutingModule"]],
      declarations: [_pedido_page__WEBPACK_IMPORTED_MODULE_6__["PedidoPage"]]
    })], PedidoPageModule);
    /***/
  },

  /***/
  "./src/app/pedido/pedido.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/pedido/pedido.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPedidoPedidoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkby9wZWRpZG8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pedido/pedido.page.ts":
  /*!***************************************!*\
    !*** ./src/app/pedido/pedido.page.ts ***!
    \***************************************/

  /*! exports provided: PedidoPage */

  /***/
  function srcAppPedidoPedidoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoPage", function () {
      return PedidoPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var PedidoPage = /*#__PURE__*/function () {
      function PedidoPage(servicio, route, loading, alert) {
        _classCallCheck(this, PedidoPage);

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
        this.estados = [{
          id: 0,
          texto: 'Creado'
        }, {
          id: 1,
          texto: 'Procesado'
        }, {
          id: 2,
          texto: 'Finalizado'
        }];
        this.id = this.route.snapshot.params.pedidoId ? this.route.snapshot.params.pedidoId : 0;
      }

      _createClass(PedidoPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.servicio.Cliente_Listado().subscribe(function (data) {
                      _this.clientes = data.info.items;
                    });
                    this.servicio.Usuario_Listado().subscribe(function (data) {
                      _this.usuarios = data.info.items;
                    });
                    this.servicio.Producto_Listado().subscribe(function (data) {
                      _this.productos = data.info.items;
                    });

                    if (this.id > 0) {
                      this.Cargar_Informacion();
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Guardar",
        value: function Guardar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var l;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.cliente_id == 0)) {
                      _context2.next = 4;
                      break;
                    }

                    this.servicio.Mensaje('Debe seleccionar el cliente.', 'warning');
                    _context2.next = 18;
                    break;

                  case 4:
                    if (!(this.usuario_id == 0)) {
                      _context2.next = 8;
                      break;
                    }

                    this.servicio.Mensaje('Debe seleccionar el vendedor.', 'warning');
                    _context2.next = 18;
                    break;

                  case 8:
                    if (!(this.fecha == null)) {
                      _context2.next = 12;
                      break;
                    }

                    this.servicio.Mensaje('Debe seleccioanr la fecha.', 'warning');
                    _context2.next = 18;
                    break;

                  case 12:
                    console.log(this.fecha);
                    _context2.next = 15;
                    return this.loading.create();

                  case 15:
                    l = _context2.sent;
                    l.present();
                    this.servicio.Pedido_Guardar({
                      id: this.id,
                      cliente_id: this.cliente_id,
                      usuario_id: this.usuario_id,
                      fecha: this.fecha,
                      estado: this.estado,
                      subtotal: this.subtotal,
                      iva: this.iva,
                      total: this.total
                    }).subscribe(function (data) {
                      l.dismiss();

                      _this2.servicio.Mensaje(data.mensaje, data.info.id == 0 ? 'danger' : 'success');

                      if (data.info.id > 0) {
                        _this2.servicio.irA('/pedidos');
                      }
                    }, function (_) {
                      l.dismiss();

                      _this2.servicio.Mensaje('No se pudo realizar la petición.', 'danger');
                    });

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "Cargar_Informacion",
        value: function Cargar_Informacion() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var l;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loading.create();

                  case 2:
                    l = _context3.sent;
                    l.present();
                    this.servicio.Pedido_Consulta(this.id).subscribe(function (data) {
                      l.dismiss();

                      if (data.info.item.id > 0) {
                        _this3.cliente_id = data.info.item.cliente_id;
                        _this3.usuario_id = data.info.item.usuario_id;
                        _this3.estado = data.info.item.estado;
                        _this3.fecha = data.info.item.fecha;
                        _this3.productos_listado = data.info.item.items;
                        _this3.subtotal = data.info.item.subtotal;
                        _this3.iva = data.info.item.iva;
                        _this3.total = data.info.item.total;
                        _this3.pedido = data.info.item;
                      } else {
                        _this3.servicio.Mensaje('El pedido que intenta consultar no existe.', 'danger');

                        _this3.servicio.irA('/pedidos');
                      }
                    }, function (_) {
                      l.dismiss();

                      _this3.servicio.Mensaje('No se pudo realizar la petición.', 'danger');

                      _this3.servicio.irA('/pedidos');
                    });

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "Prod_Seleccionado",
        value: function Prod_Seleccionado() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var l;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loading.create();

                  case 2:
                    l = _context4.sent;
                    l.present();
                    this.servicio.Pedido_Guardar_Producto({
                      pedido_id: this.id,
                      producto_id: this._producto.id,
                      cantidad: 1,
                      precio: this._producto.precio
                    }).subscribe(function (data) {
                      l.dismiss();

                      _this4.Cargar_Informacion();
                    }, function (_) {
                      l.dismiss();
                    });

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "Mod_Producto",
        value: function Mod_Producto(producto) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            var l;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loading.create();

                  case 2:
                    l = _context5.sent;
                    l.present();
                    this.servicio.Pedido_Guardar_Producto({
                      pedido_id: this.id,
                      producto_id: producto.producto_id,
                      cantidad: producto.cantidad,
                      precio: producto.precio
                    }).subscribe(function (data) {
                      l.dismiss(); //this.Cargar_Informacion();

                      _this5.calcularTotal();
                    }, function (_) {
                      l.dismiss();
                    });

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "Calcular_Total",
        value: function Calcular_Total() {
          var total = 0;

          var _iterator = _createForOfIteratorHelper(this.productos_listado),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var prod = _step.value;
              total += prod.cantidad * prod.precio;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return total;
        }
      }, {
        key: "calcularTotal",
        value: function calcularTotal() {
          var _this6 = this;

          this.subtotal = 0;
          console.log(this.pedido);
          this.pedido.items.forEach(function (element) {
            _this6.subtotal = _this6.subtotal + parseFloat(element.precio) * element.cantidad;
          });
          console.log(this.subtotal);
          this.iva = this.subtotal * 0.12;
          this.total = this.subtotal + this.iva;
        }
      }, {
        key: "Borrar_Producto",
        value: function Borrar_Producto(producto, ionItemSliding) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    ionItemSliding.close();
                    _context7.next = 3;
                    return this.alert.create({
                      header: 'Confirmación',
                      message: '¿Está seguro que desea eliminar?',
                      buttons: [{
                        text: 'Si',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                            var _this8 = this;

                            var l;
                            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                              while (1) {
                                switch (_context6.prev = _context6.next) {
                                  case 0:
                                    _context6.next = 2;
                                    return this.loading.create();

                                  case 2:
                                    l = _context6.sent;
                                    l.present();
                                    this.servicio.Pedido_Borrar_Producto({
                                      pedido_id: this.id,
                                      item_id: producto.id
                                    }).subscribe(function (data) {
                                      l.dismiss();

                                      _this8.Cargar_Informacion();
                                    }, function (_) {
                                      l.dismiss();
                                    });

                                  case 5:
                                  case "end":
                                    return _context6.stop();
                                }
                              }
                            }, _callee6, this);
                          }));
                        }
                      }, {
                        text: 'No',
                        handler: function handler() {}
                      }]
                    });

                  case 3:
                    alert = _context7.sent;
                    alert.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return PedidoPage;
    }();

    PedidoPage.ctorParameters = function () {
      return [{
        type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    PedidoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pedido',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pedido.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pedido/pedido.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pedido.page.scss */
      "./src/app/pedido/pedido.page.scss"))["default"]]
    })], PedidoPage);
    /***/
  }
}]);
//# sourceMappingURL=pedido-pedido-module-es5.js.map