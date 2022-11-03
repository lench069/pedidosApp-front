function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-cliente-inicio-cliente-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio-cliente/inicio-cliente.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio-cliente/inicio-cliente.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInicioClienteInicioClientePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-item lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\" defaultHref=\"start\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"end\">\r\n      <img src=\"https://yt3.ggpht.com/a-/AOh14GjThP6xpdHXuwV9tVt7wMvBIytCfvZm4N_BkN1MrA=s288-c-k-c0xffffffff-no-rj-mo\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h2>Sweet & Salty</h2>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n<div class=\"ion-padding wrapper\">\r\n\r\n  <ion-searchbar placeholder=\"Buscar...\" animated=\"true\"></ion-searchbar>\r\n\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"ion-align-items-baseline\">\r\n      <ion-col size=\"6\">\r\n        <h4 class=\"title\">\r\n          Categorias\r\n        </h4>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  </div>\r\n\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-slides [options]=\"categories\">\r\n            \r\n            <ion-slide *ngFor=\"let categoria of categorias\">\r\n              <ion-card class=\"category\" [color]=\"categoria.color\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon [src]=\"categoria.icon\"></ion-icon>\r\n                  <ion-card-title>{{categoria.nombre}}</ion-card-title>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>    \r\n            </ion-slides>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div class=\"ion-padding-horizontal wrapper\">\r\n  \r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-align-items-baseline\">\r\n          <ion-col size=\"6\">\r\n            <h4 class=\"title\">\r\n              Menu\r\n            </h4>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    \r\n      </div>\r\n\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-slides [options]=\"options\">\r\n\r\n          <ion-slide *ngFor=\"let producto of productos\">\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img [src]=\"producto.imagen\"></ion-img>\r\n                </div>\r\n                \r\n                <ion-card-title class=\"title\">{{producto.nombre}}</ion-card-title>\r\n                <ion-card-subtitle>{{producto.descripcion}}</ion-card-subtitle>        \r\n                <ion-item>\r\n                  <ion-badge slot=\"start\" color=\"success\">{{producto.precio | currency}}</ion-badge>   \r\n                  <ion-button fill=\"outline\" color=\"warning\" slot=\"end\">Agregar</ion-button>   \r\n                </ion-item>      \r\n                                                 \r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/inicio-cliente/inicio-cliente-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/inicio-cliente/inicio-cliente-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: InicioClientePageRoutingModule */

  /***/
  function srcAppInicioClienteInicioClienteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioClientePageRoutingModule", function () {
      return InicioClientePageRoutingModule;
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


    var _inicio_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inicio-cliente.page */
    "./src/app/inicio-cliente/inicio-cliente.page.ts");

    var routes = [{
      path: '',
      component: _inicio_cliente_page__WEBPACK_IMPORTED_MODULE_3__["InicioClientePage"]
    }];

    var InicioClientePageRoutingModule = function InicioClientePageRoutingModule() {
      _classCallCheck(this, InicioClientePageRoutingModule);
    };

    InicioClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InicioClientePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/inicio-cliente/inicio-cliente.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/inicio-cliente/inicio-cliente.module.ts ***!
    \*********************************************************/

  /*! exports provided: InicioClientePageModule */

  /***/
  function srcAppInicioClienteInicioClienteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioClientePageModule", function () {
      return InicioClientePageModule;
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


    var _inicio_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inicio-cliente-routing.module */
    "./src/app/inicio-cliente/inicio-cliente-routing.module.ts");
    /* harmony import */


    var _inicio_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inicio-cliente.page */
    "./src/app/inicio-cliente/inicio-cliente.page.ts");

    var InicioClientePageModule = function InicioClientePageModule() {
      _classCallCheck(this, InicioClientePageModule);
    };

    InicioClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inicio_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioClientePageRoutingModule"]],
      declarations: [_inicio_cliente_page__WEBPACK_IMPORTED_MODULE_6__["InicioClientePage"]]
    })], InicioClientePageModule);
    /***/
  },

  /***/
  "./src/app/inicio-cliente/inicio-cliente.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/inicio-cliente/inicio-cliente.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInicioClienteInicioClientePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --background: rgba(248, 248, 250, .96);\n}\nion-item h2 {\n  font-weight: bold;\n  font-size: 18px;\n  padding-top: 8px;\n}\nion-content {\n  --background: #f8f8fa;\n}\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 12px;\n}\n.more {\n  font-size: 12px;\n  color: #FB4E4E;\n}\n.title {\n  font-size: 16px;\n}\n.card {\n  margin: 0;\n  margin-right: 50px;\n  width: 80%;\n  box-shadow: none;\n  border-radius: 14px;\n}\n.category {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n}\nion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 200px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\nion-card-content ion-icon {\n  color: #f2994a;\n  padding-right: 4px;\n}\nion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\nion-card-header ion-icon {\n  font-size: 60px;\n}\nion-card-header ion-card-title {\n  font-size: 22px;\n  font-weight: bolder;\n}\n.wrapper {\n  padding-bottom: 0;\n}\nion-badge {\n  padding: 10px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvLWNsaWVudGUvQzpcXHdhbXA2NFxcd3d3XFxwZWRpZG9zQXBwLWZyb250L3NyY1xcYXBwXFxpbmljaW8tY2xpZW50ZVxcaW5pY2lvLWNsaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9pbmljaW8tY2xpZW50ZS9pbmljaW8tY2xpZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FESUE7RUFDRSxxQkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7QUNERjtBRElBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNERjtBREtBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGRjtBRE9FO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pKO0FET0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFFO0VBQ0UsZ0JBQUE7QUNOSjtBRFlFO0VBQ0UsZUFBQTtBQ1RKO0FEWUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNWSjtBRGNBO0VBQ0UsaUJBQUE7QUNYRjtBRGNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNYRiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby1jbGllbnRlL2luaWNpby1jbGllbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDgsIDI1MCwgLjk2KTtcclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmOGY4ZmE7XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi5tb3JlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICNGQjRFNEU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuXHJcbi5jYXRlZ29yeSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgLmltZy13cmFwcGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZjI5OTRhO1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQtc3VidGl0bGU6bGFzdC1vZi10eXBlIHtcclxuICAgIHBhZGRpbmctdG9wOjZweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXIge1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbmlvbi1iYWRnZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn0iLCJpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0OCwgMjUwLCAuOTYpO1xufVxuaW9uLWl0ZW0gaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y4ZjhmYTtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4ubW9yZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNGQjRFNEU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgd2lkdGg6IDgwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLmNhdGVnb3J5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQgLmltZy13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuaW9uLWNhcmQtY29udGVudCBpb24taWNvbiB7XG4gIGNvbG9yOiAjZjI5OTRhO1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5pb24tY2FyZC1jb250ZW50IGlvbi1jYXJkLXN1YnRpdGxlOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cbmlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/inicio-cliente/inicio-cliente.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/inicio-cliente/inicio-cliente.page.ts ***!
    \*******************************************************/

  /*! exports provided: InicioClientePage */

  /***/
  function srcAppInicioClienteInicioClientePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioClientePage", function () {
      return InicioClientePage;
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


    var _servicios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../servicios.service */
    "./src/app/servicios.service.ts");

    var InicioClientePage = /*#__PURE__*/function () {
      function InicioClientePage(servicio, loading, alert) {
        _classCallCheck(this, InicioClientePage);

        this.servicio = servicio;
        this.loading = loading;
        this.alert = alert;
        this.options = {
          centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: -60
        };
        this.categories = {
          slidesPerView: 2.5
        };
        this.categorias = [];
        this.total = 0;
        this.productos = [];
        this.totalP = 0;
      }

      _createClass(InicioClientePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.Cargar_Categorias();
          this.Cargar_Productos();
        }
      }, {
        key: "Cargar_Categorias",
        value: function Cargar_Categorias() {
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
                    this.servicio.Categorias_Listado().subscribe(function (data) {
                      _this.categorias = data.info.items;
                      console.log(_this.categorias);
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
        key: "Cargar_Productos",
        value: function Cargar_Productos() {
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
                    this.servicio.Producto_Listado().subscribe(function (data) {
                      _this2.productos = data.info.items;
                      _this2.totalP = data.info.total;
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
      }]);

      return InicioClientePage;
    }();

    InicioClientePage.ctorParameters = function () {
      return [{
        type: _servicios_service__WEBPACK_IMPORTED_MODULE_3__["ServiciosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    InicioClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio-cliente',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inicio-cliente.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio-cliente/inicio-cliente.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inicio-cliente.page.scss */
      "./src/app/inicio-cliente/inicio-cliente.page.scss"))["default"]]
    })], InicioClientePage);
    /***/
  }
}]);
//# sourceMappingURL=inicio-cliente-inicio-cliente-module-es5.js.map