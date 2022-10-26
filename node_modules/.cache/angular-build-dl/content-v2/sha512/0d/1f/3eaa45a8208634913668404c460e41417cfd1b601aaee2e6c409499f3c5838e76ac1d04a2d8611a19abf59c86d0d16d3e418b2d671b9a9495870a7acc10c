function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuarios-usuarios-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsuariosUsuariosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Usuarios</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"servicio.irA('/usuario/0')\">\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"Cargar_Usuarios()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar color=\"dark\" debounce=\"500\" (ionChange)=\"Cargar_Usuarios()\" [(ngModel)]=\"texto\" placeholder=\"Buscar...\"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let usuario of usuarios\" #ionItemSliding>\n      <ion-item>\n        <ion-label text-wrap>\n          <h2>{{usuario.nombre}}</h2>\n          <p>Tel.:{{usuario.telefono}}</p>\n          <small>Email: {{usuario.correo}}</small>\n        </ion-label>\n        <ion-badge slot=\"end\" color=\"success\">{{usuario.id}}</ion-badge>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"warning\" (click)=\"Editar(usuario, ionItemSliding)\">Editar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"Borrar(usuario, ionItemSliding)\">Eliminar</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/usuarios/usuarios-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/usuarios/usuarios-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: UsuariosPageRoutingModule */

  /***/
  function srcAppUsuariosUsuariosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuariosPageRoutingModule", function () {
      return UsuariosPageRoutingModule;
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


    var _usuarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./usuarios.page */
    "./src/app/usuarios/usuarios.page.ts");

    var routes = [{
      path: '',
      component: _usuarios_page__WEBPACK_IMPORTED_MODULE_3__["UsuariosPage"]
    }];

    var UsuariosPageRoutingModule = function UsuariosPageRoutingModule() {
      _classCallCheck(this, UsuariosPageRoutingModule);
    };

    UsuariosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UsuariosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/usuarios/usuarios.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/usuarios/usuarios.module.ts ***!
    \*********************************************/

  /*! exports provided: UsuariosPageModule */

  /***/
  function srcAppUsuariosUsuariosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuariosPageModule", function () {
      return UsuariosPageModule;
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


    var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./usuarios-routing.module */
    "./src/app/usuarios/usuarios-routing.module.ts");
    /* harmony import */


    var _usuarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./usuarios.page */
    "./src/app/usuarios/usuarios.page.ts");

    var UsuariosPageModule = function UsuariosPageModule() {
      _classCallCheck(this, UsuariosPageModule);
    };

    UsuariosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuariosPageRoutingModule"]],
      declarations: [_usuarios_page__WEBPACK_IMPORTED_MODULE_6__["UsuariosPage"]]
    })], UsuariosPageModule);
    /***/
  },

  /***/
  "./src/app/usuarios/usuarios.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/usuarios/usuarios.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsuariosUsuariosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW9zL3VzdWFyaW9zLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/usuarios/usuarios.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/usuarios/usuarios.page.ts ***!
    \*******************************************/

  /*! exports provided: UsuariosPage */

  /***/
  function srcAppUsuariosUsuariosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuariosPage", function () {
      return UsuariosPage;
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

    var UsuariosPage = /*#__PURE__*/function () {
      function UsuariosPage(servicio, loading, alert) {
        _classCallCheck(this, UsuariosPage);

        this.servicio = servicio;
        this.loading = loading;
        this.alert = alert;
        this.usuarios = [];
        this.total = 0;
        this.texto = '';
      }

      _createClass(UsuariosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.Cargar_Usuarios();
        }
      }, {
        key: "Cargar_Usuarios",
        value: function Cargar_Usuarios() {
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
                    this.servicio.Usuario_Listado(this.texto).subscribe(function (data) {
                      _this.usuarios = data.info.items;
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
          this.servicio.irA('/usuario/' + item.id);
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
                      message: '¿Está seguro que desea eliminar el usuario [' + item.nombre + ']?',
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
                                    this.servicio.Usuario_Borrar(item.id).subscribe(function (data) {
                                      _this3.Cargar_Usuarios();

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

      return UsuariosPage;
    }();

    UsuariosPage.ctorParameters = function () {
      return [{
        type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    UsuariosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-usuarios',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./usuarios.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./usuarios.page.scss */
      "./src/app/usuarios/usuarios.page.scss"))["default"]]
    })], UsuariosPage);
    /***/
  }
}]);
//# sourceMappingURL=usuarios-usuarios-module-es5.js.map