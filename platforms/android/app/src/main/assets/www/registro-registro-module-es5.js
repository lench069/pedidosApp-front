function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-registro-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistroRegistroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"danger\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\" defaultHref=\"start\"></ion-back-button>\n        </ion-buttons>\n      <ion-title>Registro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"fondo\" class=\"vertical-align-content ion-text-center\">\n\t<ion-grid >\n\t  <ion-row>\n\t\t<ion-col class=\"ion-text-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n\t\t\t<div class=\"logo\">\n\t\t\t  <img src=\"./assets/imagenes/logo.jpg\">\n\t\t\t</div>\n\t\t\t<ion-card>\n\t\t\t\t<br>\n\t\t\t\t<ion-card  class=\"auth-card ion-margin\">\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t  <ion-label position=\"floating\">Cedula</ion-label>\n\t\t\t\t\t  <ion-input type=\"text\" [(ngModel)]=\"cedula\" ></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<br>\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t  <ion-label position=\"floating\">Nombre</ion-label>\n\t\t\t\t\t  <ion-input type=\"text\" [(ngModel)]=\"nombre\"></ion-input>\n\t\t\t\t\t</ion-item>\n          <ion-item>\n\t\t\t\t\t  <ion-label position=\"floating\">Telefono</ion-label>\n\t\t\t\t\t  <ion-input type=\"text\" [(ngModel)]=\"telefono\"></ion-input>\n\t\t\t\t\t</ion-item>\n          <ion-item>\n\t\t\t\t\t  <ion-label position=\"floating\">Correo</ion-label>\n\t\t\t\t\t  <ion-input type=\"email\" [(ngModel)]=\"correo\"></ion-input>\n\t\t\t\t\t</ion-item>\n          <ion-item>\n\t\t\t\t\t  <ion-label position=\"floating\">Direccion</ion-label>\n\t\t\t\t\t  <ion-input type=\"text\" [(ngModel)]=\"direccion\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t  </ion-card>\n\t\t\t\t  <br>\n\t\t\t\t  <ion-button expand=\"block\" color=\"warning\" (click)=\"prosesLogin()\" class=\"ion-margin-start ion-margin-end ion-margin-bottom\" >\n\t\t\t\t\t<b>Registrar</b> \n\t\t\t\t  </ion-button>\n\t\t\t\t  <span class=\"ion-margin\"></span>\n\t\t\t\t  <span class=\"ion-margin\"></span>\t\t \n\t\t\t\t  <br>\n\t\t\t</ion-card>\n\t\t\t\n\t\t</ion-col>\n\t  </ion-row>\n\t</ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/registro/registro-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/registro/registro-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegistroPageRoutingModule */

  /***/
  function srcAppRegistroRegistroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function () {
      return RegistroPageRoutingModule;
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


    var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registro.page */
    "./src/app/registro/registro.page.ts");

    var routes = [{
      path: '',
      component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }];

    var RegistroPageRoutingModule = function RegistroPageRoutingModule() {
      _classCallCheck(this, RegistroPageRoutingModule);
    };

    RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/registro/registro.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/registro/registro.module.ts ***!
    \*********************************************/

  /*! exports provided: RegistroPageModule */

  /***/
  function srcAppRegistroRegistroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function () {
      return RegistroPageModule;
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


    var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registro-routing.module */
    "./src/app/registro/registro-routing.module.ts");
    /* harmony import */


    var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registro.page */
    "./src/app/registro/registro.page.ts");

    var RegistroPageModule = function RegistroPageModule() {
      _classCallCheck(this, RegistroPageModule);
    };

    RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"]],
      declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })], RegistroPageModule);
    /***/
  },

  /***/
  "./src/app/registro/registro.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/registro/registro.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistroRegistroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/registro/registro.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/registro/registro.page.ts ***!
    \*******************************************/

  /*! exports provided: RegistroPage */

  /***/
  function srcAppRegistroRegistroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPage", function () {
      return RegistroPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage-angular */
    "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");
    /* harmony import */


    var _servicios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../servicios.service */
    "./src/app/servicios.service.ts");

    var RegistroPage = /*#__PURE__*/function () {
      function RegistroPage(router, storage, toastCtrl, servicio, loading) {
        _classCallCheck(this, RegistroPage);

        this.router = router;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.servicio = servicio;
        this.loading = loading;
        this.id = 0;
        this.cedula = '';
        this.nombre = '';
        this.telefono = '';
        this.correo = '';
        this.direccion = '';
        this.uuid = '';
      }

      _createClass(RegistroPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.storage.get('uuid');

                  case 2:
                    this.uuid = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "prosesLogin",
        value: function prosesLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var l;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loading.create();

                  case 2:
                    l = _context2.sent;
                    //se crea el loading
                    l.present(); //se muestra el loading

                    if (this.cedula == '') {
                      this.servicio.Mensaje('Ingrese su cedula.', 'warning');
                      l.dismiss(); //quita el loading una vez cargue todo
                    } else if (this.nombre == '') {
                      this.servicio.Mensaje('Ingrese su nombre.', 'warning');
                      l.dismiss(); //quita el loading una vez cargue todo
                    } else if (this.telefono == '') {
                      this.servicio.Mensaje('Ingrese su telefono.', 'warning');
                      l.dismiss(); //quita el loading una vez cargue todo
                    } else if (this.correo == '') {
                      this.servicio.Mensaje('Ingrese su correo.', 'warning');
                      l.dismiss(); //quita el loading una vez cargue todo
                    } else if (this.direccion == '') {
                      this.servicio.Mensaje('Ingrese su direccion.', 'warning');
                      l.dismiss(); //quita el loading una vez cargue todo
                    } else {
                      this.servicio.Cliente_Guardar({
                        id: this.id,
                        cedula: this.cedula,
                        nombre: this.nombre,
                        telefono: this.telefono,
                        correo: this.correo,
                        direccion: this.direccion,
                        uuid: this.uuid
                      }).subscribe(function (data) {
                        console.log(data);
                        l.dismiss();

                        _this.servicio.Mensaje(data.mensaje, data.info.id == 0 ? 'danger' : 'success');

                        if (data.info.id > 0) {
                          _this.servicio.irA('/inicio-cliente');
                        }
                      }, function (error) {
                        _this.servicio.Mensaje('No se pudo realizar la peticion, compruebe su conexion a internet.', 'danger');

                        l.dismiss(); //quita el loading una vez cargue todo
                      });
                    }

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return RegistroPage;
    }();

    RegistroPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _servicios_service__WEBPACK_IMPORTED_MODULE_5__["ServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registro.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registro.page.scss */
      "./src/app/registro/registro.page.scss"))["default"]]
    })], RegistroPage);
    /***/
  }
}]);
//# sourceMappingURL=registro-registro-module-es5.js.map