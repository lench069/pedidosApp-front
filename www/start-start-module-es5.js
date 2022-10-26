function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["start-start-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStartStartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"danger\">\n      <ion-title>Inicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <br>\n  <br><br>\n  <br><br>\n  <ion-grid>\n      <ion-row>\n          <ion-col>\n              <ion-card color=\"primary\" (click)=\"servicio.irA('/inicio-cliente')\">\n                  <ion-card-content>\n                      <ion-icon name=\"people-outline\"></ion-icon>\n                  </ion-card-content>\n                  <ion-card-header>\n                      <ion-card-title>Zona Clientes</ion-card-title>\n                  </ion-card-header>\n              </ion-card>\n          </ion-col>\n         \n      </ion-row>\n      <ion-col>\n          <ion-card color=\"dark\" (click)=\"servicio.irA('/inicio')\">\n              <ion-card-content>\n                  <ion-icon name=\"people-circle-outline\"></ion-icon>\n              </ion-card-content>\n              <ion-card-header>\n                  <ion-card-title>Zona Admin</ion-card-title>\n              </ion-card-header>\n          </ion-card>\n      </ion-col>\n      <ion-row>\n      </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/start/start-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/start/start-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: StartPageRoutingModule */

  /***/
  function srcAppStartStartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartPageRoutingModule", function () {
      return StartPageRoutingModule;
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


    var _start_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./start.page */
    "./src/app/start/start.page.ts");

    var routes = [{
      path: '',
      component: _start_page__WEBPACK_IMPORTED_MODULE_3__["StartPage"]
    }];

    var StartPageRoutingModule = function StartPageRoutingModule() {
      _classCallCheck(this, StartPageRoutingModule);
    };

    StartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StartPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/start/start.module.ts":
  /*!***************************************!*\
    !*** ./src/app/start/start.module.ts ***!
    \***************************************/

  /*! exports provided: StartPageModule */

  /***/
  function srcAppStartStartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartPageModule", function () {
      return StartPageModule;
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


    var _start_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./start-routing.module */
    "./src/app/start/start-routing.module.ts");
    /* harmony import */


    var _start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./start.page */
    "./src/app/start/start.page.ts");

    var StartPageModule = function StartPageModule() {
      _classCallCheck(this, StartPageModule);
    };

    StartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _start_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartPageRoutingModule"]],
      declarations: [_start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]]
    })], StartPageModule);
    /***/
  },

  /***/
  "./src/app/start/start.page.scss":
  /*!***************************************!*\
    !*** ./src/app/start/start.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppStartStartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-content {\n  text-align: center;\n}\n\nion-icon {\n  font-size: 80px;\n}\n\nion-card-title {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQvQzpcXFVzZXJzXFxsZW5jaFxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXFByb3llY3Rvc1xcSW52ZW50YXJpb0FwcC9zcmNcXGFwcFxcc3RhcnRcXHN0YXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RhcnQvc3RhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3N0YXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59IiwiaW9uLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDgwcHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/start/start.page.ts":
  /*!*************************************!*\
    !*** ./src/app/start/start.page.ts ***!
    \*************************************/

  /*! exports provided: StartPage */

  /***/
  function srcAppStartStartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartPage", function () {
      return StartPage;
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

    var StartPage = /*#__PURE__*/function () {
      function StartPage(servicio) {
        _classCallCheck(this, StartPage);

        this.servicio = servicio;
      }

      _createClass(StartPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StartPage;
    }();

    StartPage.ctorParameters = function () {
      return [{
        type: _servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"]
      }];
    };

    StartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-start',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./start.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./start.page.scss */
      "./src/app/start/start.page.scss"))["default"]]
    })], StartPage);
    /***/
  }
}]);
//# sourceMappingURL=start-start-module-es5.js.map