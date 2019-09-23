(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-restaurant-module"],{

/***/ "./src/app/custom/restaurant/restaurant-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/custom/restaurant/restaurant-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: RestaurantRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantRoutingModule", function() { return RestaurantRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let RestaurantRoutingModule = class RestaurantRoutingModule {
};
RestaurantRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RestaurantRoutingModule);



/***/ }),

/***/ "./src/app/custom/restaurant/restaurant.module.ts":
/*!********************************************************!*\
  !*** ./src/app/custom/restaurant/restaurant.module.ts ***!
  \********************************************************/
/*! exports provided: RestaurantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantModule", function() { return RestaurantModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _restaurant_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant-routing.module */ "./src/app/custom/restaurant/restaurant-routing.module.ts");




let RestaurantModule = class RestaurantModule {
};
RestaurantModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _restaurant_routing_module__WEBPACK_IMPORTED_MODULE_3__["RestaurantRoutingModule"],
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
        ],
    })
], RestaurantModule);



/***/ })

}]);
//# sourceMappingURL=restaurant-restaurant-module-es2015.js.map