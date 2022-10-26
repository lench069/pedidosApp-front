function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInicioInicioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"danger\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" defaultHref=\"start\"></ion-back-button>\n          </ion-buttons>\n        <ion-title>Inventario App</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-card color=\"primary\" (click)=\"servicio.irA('/clientes')\">\n                    <ion-card-content>\n                        <ion-icon name=\"people-outline\"></ion-icon>\n                    </ion-card-content>\n                    <ion-card-header>\n                        <ion-card-title>Clientes</ion-card-title>\n                        <ion-card-subtitle>({{clientes}})</ion-card-subtitle>\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n            <ion-col>\n                <ion-card color=\"success\" (click)=\"servicio.irA('/productos')\">\n                    <ion-card-content>\n                        <ion-icon name=\"pricetags-outline\"></ion-icon>\n                    </ion-card-content>\n                    <ion-card-header>\n                        <ion-card-title>Productos</ion-card-title>\n                        <ion-card-subtitle>({{productos}})</ion-card-subtitle>\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-card color=\"warning\" (click)=\"servicio.irA('/pedidos')\">\n                    <ion-card-content>\n                        <ion-icon name=\"cart-outline\"></ion-icon>\n                    </ion-card-content>\n                    <ion-card-header>\n                        <ion-card-title>Pedidos</ion-card-title>\n                        <ion-card-subtitle>({{pedidos}})</ion-card-subtitle>\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n            <ion-col>\n                <ion-card color=\"dark\" (click)=\"servicio.irA('/usuarios')\">\n                    <ion-card-content>\n                        <ion-icon name=\"people-circle-outline\"></ion-icon>\n                    </ion-card-content>\n                    <ion-card-header>\n                        <ion-card-title>Usuarios</ion-card-title>\n                        <ion-card-subtitle>({{usuarios}})</ion-card-subtitle>\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/inicio/inicio-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/inicio/inicio-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: InicioPageRoutingModule */

  /***/
  function srcAppInicioInicioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function () {
      return InicioPageRoutingModule;
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


    var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/inicio/inicio.page.ts");

    var routes = [{
      path: '',
      component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }];

    var InicioPageRoutingModule = function InicioPageRoutingModule() {
      _classCallCheck(this, InicioPageRoutingModule);
    };

    InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InicioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/inicio/inicio.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/inicio/inicio.module.ts ***!
    \*****************************************/

  /*! exports provided: InicioPageModule */

  /***/
  function srcAppInicioInicioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPageModule", function () {
      return InicioPageModule;
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


    var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inicio-routing.module */
    "./src/app/inicio/inicio-routing.module.ts");
    /* harmony import */


    var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/inicio/inicio.page.ts");

    var InicioPageModule = function InicioPageModule() {
      _classCallCheck(this, InicioPageModule);
    };

    InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]],
      declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })], InicioPageModule);
    /***/
  },

  /***/
  "./src/app/inicio/inicio.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/inicio/inicio.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppInicioInicioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-content {\n  text-align: center;\n}\n\nion-icon {\n  font-size: 80px;\n}\n\nion-card-title {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL0M6XFxVc2Vyc1xcbGVuY2hcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxQcm95ZWN0b3NcXEludmVudGFyaW9BcHAvc3JjXFxhcHBcXGluaWNpb1xcaW5pY2lvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDgwcHg7XG59XG5cbmlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn0iLCJpb24tY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogODBweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/inicio/inicio.page.ts":
  /*!***************************************!*\
    !*** ./src/app/inicio/inicio.page.ts ***!
    \***************************************/

  /*! exports provided: InicioPage */

  /***/
  function srcAppInicioInicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPage", function () {
      return InicioPage;
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


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");

    var InicioPage = /*#__PURE__*/function () {
      function InicioPage(servicio, apermisos) {
        _classCallCheck(this, InicioPage);

        this.servicio = servicio;
        this.apermisos = apermisos;
        this.pedidos = 0;
        this.productos = 0;
        this.clientes = 0;
        this.usuarios = 0;
      }

      _createClass(InicioPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.servicio.Obtener_Totales().subscribe(function (data) {
            _this.pedidos = data.info.pedidos;
            _this.productos = data.info.productos;
            _this.clientes = data.info.clientes;
            _this.usuarios = data.info.usuarios;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.apermisos.requestPermissions([this.apermisos.PERMISSION.CAMERA, this.apermisos.PERMISSION.BIND_NOTIFICATION_LISTENER_SERVICE, this.apermisos.PERMISSION.ACCESS_NOTIFICATION_POLICY]).then(function (data) {});
          this.servicio.Inicializar_Notificacion();
        }
      }]);

      return InicioPage;
    }();

    InicioPage.ctorParameters = function () {
      return [{
        type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"]
      }];
    };

    InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inicio.page.scss */
      "./src/app/inicio/inicio.page.scss"))["default"]]
    })], InicioPage);
    /***/
  }
}]);
//# sourceMappingURL=inicio-inicio-module-es5.js.map