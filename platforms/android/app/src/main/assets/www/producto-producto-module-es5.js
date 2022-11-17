function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["producto-producto-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductoProductoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"productos\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"small\">{{id == 0 ? 'Nuevo' : 'Editar'}} producto {{id == 0 ? '' : id}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"Guardar()\">\n        <ion-icon name=\"save\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\">Código</ion-label>\n      <ion-input [(ngModel)]=\"codigo\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Nombre</ion-label>\n      <ion-input [(ngModel)]=\"nombre\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Descripcion</ion-label>\n      <ion-input [(ngModel)]=\"descripcion\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Categoria</ion-label>\n      <ion-select class=\"custom-options\" interface=\"popover\" [(ngModel)]=\"id_categoria\"  placeholder='Seleccione..'>\n        <ion-select-option *ngFor=\"let categoria of categorias\" value=\"{{ categoria.id}}\">\n            {{ categoria.nombre }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Stock</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"stock\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Precio</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"precio\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Activo</ion-label>\n      <ion-toggle slot=\"end\" [(ngModel)]=\"activo\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-button slot=\"start\" fill=\"outline\" (click)=\"Capturar_Foto()\">\n        <ion-icon name=\"camera-outline\"></ion-icon>\n      </ion-button>\n      <ion-label>\n        <h3>Foto</h3>\n        <img *ngIf=\"imagen != null\" [src]=\"imagen\" />\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/producto/producto-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/producto/producto-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductoPageRoutingModule */

  /***/
  function srcAppProductoProductoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductoPageRoutingModule", function () {
      return ProductoPageRoutingModule;
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


    var _producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./producto.page */
    "./src/app/producto/producto.page.ts");

    var routes = [{
      path: '',
      component: _producto_page__WEBPACK_IMPORTED_MODULE_3__["ProductoPage"]
    }];

    var ProductoPageRoutingModule = function ProductoPageRoutingModule() {
      _classCallCheck(this, ProductoPageRoutingModule);
    };

    ProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/producto/producto.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/producto/producto.module.ts ***!
    \*********************************************/

  /*! exports provided: ProductoPageModule */

  /***/
  function srcAppProductoProductoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductoPageModule", function () {
      return ProductoPageModule;
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


    var _producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./producto-routing.module */
    "./src/app/producto/producto-routing.module.ts");
    /* harmony import */


    var _producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./producto.page */
    "./src/app/producto/producto.page.ts");

    var ProductoPageModule = function ProductoPageModule() {
      _classCallCheck(this, ProductoPageModule);
    };

    ProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductoPageRoutingModule"]],
      declarations: [_producto_page__WEBPACK_IMPORTED_MODULE_6__["ProductoPage"]]
    })], ProductoPageModule);
    /***/
  },

  /***/
  "./src/app/producto/producto.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/producto/producto.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductoProductoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvL3Byb2R1Y3RvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/producto/producto.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/producto/producto.page.ts ***!
    \*******************************************/

  /*! exports provided: ProductoPage */

  /***/
  function srcAppProductoProductoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductoPage", function () {
      return ProductoPage;
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
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

    var ProductoPage = /*#__PURE__*/function () {
      function ProductoPage(servicio, route, loading, camara) {
        _classCallCheck(this, ProductoPage);

        this.servicio = servicio;
        this.route = route;
        this.loading = loading;
        this.camara = camara;
        this.id = 0;
        this.codigo = '';
        this.nombre = '';
        this.descripcion = '';
        this.stock = 0;
        this.precio = 0;
        this.activo = true;
        this.imagen = null;
        this.id_provincia = 0;
        this.categorias = [];
        this.id_categoria = 0;
        this.id = this.route.snapshot.params.productoId ? this.route.snapshot.params.productoId : 0;
      }

      _createClass(ProductoPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var l;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.Cargar_Categorias();

                    if (!(this.id > 0)) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 4;
                    return this.loading.create();

                  case 4:
                    l = _context.sent;
                    l.present();
                    this.servicio.Producto_Consulta(this.id).subscribe(function (data) {
                      l.dismiss();

                      if (data.info.item.id > 0) {
                        _this.codigo = data.info.item.codigo;
                        _this.nombre = data.info.item.nombre;
                        _this.stock = data.info.item.stock;
                        _this.precio = data.info.item.precio;
                      } else {
                        _this.servicio.Mensaje('El producto que intenta consultar no existe.', 'danger');

                        _this.servicio.irA('/productos');
                      }
                    }, function (_) {
                      l.dismiss();

                      _this.servicio.Mensaje('No se pudo realizar la petición.', 'danger');

                      _this.servicio.irA('/productos');
                    });

                  case 7:
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
        key: "Cargar_Categorias",
        value: function Cargar_Categorias() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var l;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loading.create();

                  case 2:
                    l = _context2.sent;
                    l.present();
                    this.servicio.Categorias_Listado().subscribe(function (data) {
                      _this2.categorias = data.info.items;
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
        key: "Guardar",
        value: function Guardar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var l;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.codigo == '')) {
                      _context3.next = 4;
                      break;
                    }

                    this.servicio.Mensaje('Debe ingresar el código.', 'warning');
                    _context3.next = 29;
                    break;

                  case 4:
                    if (!(this.id_categoria == 0)) {
                      _context3.next = 8;
                      break;
                    }

                    this.servicio.Mensaje('Debe seleccionar una categoria.', 'warning');
                    _context3.next = 29;
                    break;

                  case 8:
                    if (!(this.nombre == '')) {
                      _context3.next = 12;
                      break;
                    }

                    this.servicio.Mensaje('Debe ingresar el nombre.', 'warning');
                    _context3.next = 29;
                    break;

                  case 12:
                    if (!(this.descripcion == '')) {
                      _context3.next = 16;
                      break;
                    }

                    this.servicio.Mensaje('Debe ingresar una descripcion.', 'warning');
                    _context3.next = 29;
                    break;

                  case 16:
                    if (!(this.stock == 0)) {
                      _context3.next = 20;
                      break;
                    }

                    this.servicio.Mensaje('Debe ingresar el stock.', 'warning');
                    _context3.next = 29;
                    break;

                  case 20:
                    if (!(this.precio == 0)) {
                      _context3.next = 24;
                      break;
                    }

                    this.servicio.Mensaje('Debe ingresar el precio.', 'warning');
                    _context3.next = 29;
                    break;

                  case 24:
                    _context3.next = 26;
                    return this.loading.create();

                  case 26:
                    l = _context3.sent;
                    l.present();
                    this.servicio.Producto_Guardar({
                      id: this.id,
                      codigo: this.codigo,
                      nombre: this.nombre,
                      descripcion: this.descripcion,
                      id_categoria: this.id_categoria,
                      stock: this.stock,
                      precio: this.precio,
                      activo: this.activo ? 1 : 0,
                      imagen: this.imagen
                    }).subscribe(function (data) {
                      l.dismiss();

                      _this3.servicio.Mensaje(data.mensaje, data.info.id == 0 ? 'danger' : 'success');

                      if (data.info.id > 0) {
                        _this3.servicio.irA('/productos');
                      }
                    }, function (_) {
                      l.dismiss();

                      _this3.servicio.Mensaje('No se pudo realizar la petición.', 'danger');
                    });

                  case 29:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "Capturar_Foto",
        value: function Capturar_Foto() {
          var _this4 = this;

          this.camara.getPicture({
            quality: 60,
            targetHeight: 800,
            targetWidth: 800,
            destinationType: this.camara.DestinationType.DATA_URL,
            encodingType: this.camara.EncodingType.JPEG,
            mediaType: this.camara.MediaType.PICTURE
          }).then(function (imageData) {
            _this4.imagen = 'data:image/jpeg;base64,' + imageData;
          }, function (err) {
            _this4.servicio.Mensaje('No capturó ninguna imagen.', 'danger');
          });
        }
      }]);

      return ProductoPage;
    }();

    ProductoPage.ctorParameters = function () {
      return [{
        type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
      }];
    };

    ProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-producto',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./producto.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./producto.page.scss */
      "./src/app/producto/producto.page.scss"))["default"]]
    })], ProductoPage);
    /***/
  }
}]);
//# sourceMappingURL=producto-producto-module-es5.js.map