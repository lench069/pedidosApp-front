function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-usuario-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsuarioUsuarioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"usuarios\"></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"small\">{{id == 0 ? 'Nuevo' : 'Editar'}} usuario {{id == 0 ? '' : id}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"Guardar()\">\n        <ion-icon name=\"save\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\">Usuario</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"usuario\" [disabled]=\"id != 0\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Clave</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"clave\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"nombre\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Teléfono</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"telefono\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Correo</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"correo\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Activo</ion-label>\n      <ion-toggle slot=\"end\" [(ngModel)]=\"activo\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/usuario/usuario-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/usuario/usuario-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: UsuarioPageRoutingModule */

  /***/
  function srcAppUsuarioUsuarioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioPageRoutingModule", function () {
      return UsuarioPageRoutingModule;
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


    var _usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./usuario.page */
    "./src/app/usuario/usuario.page.ts");

    var routes = [{
      path: '',
      component: _usuario_page__WEBPACK_IMPORTED_MODULE_3__["UsuarioPage"]
    }];

    var UsuarioPageRoutingModule = function UsuarioPageRoutingModule() {
      _classCallCheck(this, UsuarioPageRoutingModule);
    };

    UsuarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UsuarioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/usuario/usuario.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/usuario/usuario.module.ts ***!
    \*******************************************/

  /*! exports provided: UsuarioPageModule */

  /***/
  function srcAppUsuarioUsuarioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioPageModule", function () {
      return UsuarioPageModule;
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


    var _usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./usuario-routing.module */
    "./src/app/usuario/usuario-routing.module.ts");
    /* harmony import */


    var _usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./usuario.page */
    "./src/app/usuario/usuario.page.ts");

    var UsuarioPageModule = function UsuarioPageModule() {
      _classCallCheck(this, UsuarioPageModule);
    };

    UsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuarioPageRoutingModule"]],
      declarations: [_usuario_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPage"]]
    })], UsuarioPageModule);
    /***/
  },

  /***/
  "./src/app/usuario/usuario.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/usuario/usuario.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsuarioUsuarioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8vdXN1YXJpby5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/usuario/usuario.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/usuario/usuario.page.ts ***!
    \*****************************************/

  /*! exports provided: UsuarioPage */

  /***/
  function srcAppUsuarioUsuarioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioPage", function () {
      return UsuarioPage;
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

    var UsuarioPage = /*#__PURE__*/function () {
      function UsuarioPage(servicio, route, loading) {
        _classCallCheck(this, UsuarioPage);

        this.servicio = servicio;
        this.route = route;
        this.loading = loading;
        this.id = 0;
        this.usuario = '';
        this.nombre = '';
        this.clave = '';
        this.correo = '';
        this.telefono = '';
        this.activo = true;
        this.id = this.route.snapshot.params.usuarioId ? this.route.snapshot.params.usuarioId : 0;
      }

      _createClass(UsuarioPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var l;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.id > 0)) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 3;
                    return this.loading.create();

                  case 3:
                    l = _context.sent;
                    l.present();
                    this.servicio.Usuario_Consulta(this.id).subscribe(function (data) {
                      l.dismiss();

                      if (data.info.item.id > 0) {
                        _this.nombre = data.info.item.nombre;
                        _this.usuario = data.info.item.usuario;
                        _this.clave = data.info.item.clave;
                        _this.correo = data.info.item.correo;
                        _this.telefono = data.info.item.telefono;
                        _this.activo = data.info.item.activo == 1 ? true : false;
                      } else {
                        _this.servicio.Mensaje('El usuario que intenta consultar no existe.', 'danger');

                        _this.servicio.irA('/usuarios');
                      }
                    }, function (_) {
                      l.dismiss();

                      _this.servicio.Mensaje('No se pudo realizar la petición.', 'danger');

                      _this.servicio.irA('/usuarios');
                    });

                  case 6:
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
                    if (!(this.usuario == '')) {
                      _context2.next = 4;
                      break;
                    }

                    this.servicio.Mensaje('Debe ingresar el usuario.', 'warning');
                    _context2.next = 25;
                    break;

                  case 4:
                    if (!(this.clave == '')) {
                      _context2.next = 8;
                      break;
                    }

                    this.servicio.Mensaje('Debe ingresar la clave.', 'warning');
                    _context2.next = 25;
                    break;

                  case 8:
                    if (!(this.nombre == '')) {
                      _context2.next = 12;
                      break;
                    }

                    this.servicio.Mensaje('Debe ingresar el nombre.', 'warning');
                    _context2.next = 25;
                    break;

                  case 12:
                    if (!(this.telefono == '')) {
                      _context2.next = 16;
                      break;
                    }

                    this.servicio.Mensaje('Debe ingresar el teléfono.', 'warning');
                    _context2.next = 25;
                    break;

                  case 16:
                    if (!(this.correo == '')) {
                      _context2.next = 20;
                      break;
                    }

                    this.servicio.Mensaje('Debe ingresar el correo.', 'warning');
                    _context2.next = 25;
                    break;

                  case 20:
                    _context2.next = 22;
                    return this.loading.create();

                  case 22:
                    l = _context2.sent;
                    l.present();
                    this.servicio.Usuario_Guardar({
                      id: this.id,
                      usuario: this.usuario,
                      nombre: this.nombre,
                      correo: this.correo,
                      telefono: this.telefono,
                      clave: this.clave,
                      activo: this.activo ? 1 : 0
                    }).subscribe(function (data) {
                      l.dismiss();

                      _this2.servicio.Mensaje(data.mensaje, data.info.id == 0 ? 'danger' : 'success');

                      if (data.info.id > 0) {
                        _this2.servicio.irA('/usuarios');
                      }
                    }, function (_) {
                      l.dismiss();

                      _this2.servicio.Mensaje('No se pudo realizar la petición.', 'danger');
                    });

                  case 25:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return UsuarioPage;
    }();

    UsuarioPage.ctorParameters = function () {
      return [{
        type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    UsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-usuario',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./usuario.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./usuario.page.scss */
      "./src/app/usuario/usuario.page.scss"))["default"]]
    })], UsuarioPage);
    /***/
  }
}]);
//# sourceMappingURL=usuario-usuario-module-es5.js.map