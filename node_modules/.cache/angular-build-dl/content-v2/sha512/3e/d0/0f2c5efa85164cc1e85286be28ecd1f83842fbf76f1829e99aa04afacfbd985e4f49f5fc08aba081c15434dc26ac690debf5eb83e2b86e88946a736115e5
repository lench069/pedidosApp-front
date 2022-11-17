function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historial-historial-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/historial/historial.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/historial/historial.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHistorialHistorialPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"inicio-cliente\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pedidos</ion-title>\n    <ion-buttons slot=\"end\">\n      <!--<ion-button (click)=\"servicio.irA('/pedido/0')\">\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-button>-->\n      <ion-button (click)=\"Cargar_Pedidos()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let pedido of pedidos\" #ionItemSliding>\n      <ion-item>\n        <ion-label text-wrap>\n          <h2>{{pedido.cliente}}</h2>\n          <small>Cant. Productos: {{pedido.n_productos}}</small>\n          <br/>\n          <small>Vendido por: {{pedido.vendedor}}</small>\n          <p>Total: {{pedido.total|currency}}</p>\n        </ion-label>\n        <ion-badge slot=\"end\" color=\"warning\" *ngIf=\"pedido.estado == 0\">Creado</ion-badge>\n        <ion-badge slot=\"end\" color=\"primary\" *ngIf=\"pedido.estado == 1\">Procesado</ion-badge>\n        <ion-badge slot=\"end\" color=\"success\" *ngIf=\"pedido.estado == 2\">Finalizado</ion-badge>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>";
    /***/
  },

  /***/
  "./src/app/historial/historial-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/historial/historial-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: HistorialPageRoutingModule */

  /***/
  function srcAppHistorialHistorialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialPageRoutingModule", function () {
      return HistorialPageRoutingModule;
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


    var _historial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./historial.page */
    "./src/app/historial/historial.page.ts");

    var routes = [{
      path: '',
      component: _historial_page__WEBPACK_IMPORTED_MODULE_3__["HistorialPage"]
    }];

    var HistorialPageRoutingModule = function HistorialPageRoutingModule() {
      _classCallCheck(this, HistorialPageRoutingModule);
    };

    HistorialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HistorialPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/historial/historial.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/historial/historial.module.ts ***!
    \***********************************************/

  /*! exports provided: HistorialPageModule */

  /***/
  function srcAppHistorialHistorialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialPageModule", function () {
      return HistorialPageModule;
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


    var _historial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./historial-routing.module */
    "./src/app/historial/historial-routing.module.ts");
    /* harmony import */


    var _historial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./historial.page */
    "./src/app/historial/historial.page.ts");

    var HistorialPageModule = function HistorialPageModule() {
      _classCallCheck(this, HistorialPageModule);
    };

    HistorialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _historial_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistorialPageRoutingModule"]],
      declarations: [_historial_page__WEBPACK_IMPORTED_MODULE_6__["HistorialPage"]]
    })], HistorialPageModule);
    /***/
  },

  /***/
  "./src/app/historial/historial.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/historial/historial.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHistorialHistorialPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcmlhbC9oaXN0b3JpYWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/historial/historial.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/historial/historial.page.ts ***!
    \*********************************************/

  /*! exports provided: HistorialPage */

  /***/
  function srcAppHistorialHistorialPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialPage", function () {
      return HistorialPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage-angular */
    "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");
    /* harmony import */


    var _servicios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../servicios.service */
    "./src/app/servicios.service.ts");

    var HistorialPage = /*#__PURE__*/function () {
      function HistorialPage(servicio, loading, alert, storage) {
        _classCallCheck(this, HistorialPage);

        this.servicio = servicio;
        this.loading = loading;
        this.alert = alert;
        this.storage = storage;
        this.pedidos = [];
        this.cliente = null;
        this.storage.create();
      }

      _createClass(HistorialPage, [{
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
                    return this.storage.get('cliente');

                  case 2:
                    this.cliente = _context.sent;
                    _context.next = 5;
                    return this.loading.create();

                  case 5:
                    l = _context.sent;
                    l.present();
                    this.servicio.Pedido_Listado_cliente(this.cliente.id).subscribe(function (data) {
                      _this.pedidos = data.info.items;
                      l.dismiss();
                    }, function (error) {
                      l.dismiss();
                    });

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return HistorialPage;
    }();

    HistorialPage.ctorParameters = function () {
      return [{
        type: _servicios_service__WEBPACK_IMPORTED_MODULE_4__["ServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    HistorialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-historial',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./historial.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/historial/historial.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./historial.page.scss */
      "./src/app/historial/historial.page.scss"))["default"]]
    })], HistorialPage);
    /***/
  }
}]);
//# sourceMappingURL=historial-historial-module-es5.js.map