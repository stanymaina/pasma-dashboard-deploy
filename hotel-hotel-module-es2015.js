(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hotel-hotel-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/custom/hotel/categories/categories.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom/hotel/categories/categories.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Room Categories\n  </nb-card-header>\n\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom/hotel/rooms/rooms.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom/hotel/rooms/rooms.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Rooms\n  </nb-card-header>\n\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/custom/hotel/categories/categories.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/custom/hotel/categories/categories.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS9ob3RlbC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/custom/hotel/categories/categories.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/custom/hotel/categories/categories.component.ts ***!
  \*****************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/data/smart-table */ "./src/app/@core/data/smart-table.ts");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");





let CategoriesComponent = class CategoriesComponent {
    constructor(service, Jarwis) {
        this.service = service;
        this.Jarwis = Jarwis;
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                },
                firstName: {
                    title: 'First Name',
                    type: 'string',
                },
                lastName: {
                    title: 'Last Name',
                    type: 'string',
                },
                username: {
                    title: 'Username',
                    type: 'string',
                },
                email: {
                    title: 'E-mail',
                    type: 'string',
                },
                age: {
                    title: 'Age',
                    type: 'number',
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        const data = this.service.getData();
        this.source.load(data);
    }
    ngOnInit() {
        // this.getProducts();
        // this.getOrders();
        this.getCategories();
        /* this.productForm = new FormGroup({
            'name': new FormControl(),
            'category': new FormControl(),
            'notes': new FormControl(),
            'price': new FormControl(),
            'quantity': new FormControl()
        }); */
    }
    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    getCategories() {
        const url = 'categories';
        this.Jarwis.getURI(url).subscribe(categories => {
            this.categories = categories;
            console.log(categories);
        });
    }
    showProduct(id) {
        const url = 'products';
        console.log('Get Product ' + id);
        // return this.http.get('http://laravel-api.testing/api/product/' + id).subscribe(product => {
        this.Jarwis.showURI(url, id).subscribe(product => {
            this.product = product;
            this.productForm.patchValue({
                id: this.product.product.product_id,
                name: this.product.product.product_name,
                category: this.product.product.product_category,
                notes: this.product.product.product_notes,
                price: this.product.product.selling_price,
                quantity: this.product.product.product_quantity
            });
        });
    }
    deleteProduct(id) {
        const url = 'products';
        console.log('Delete Product id ' + id);
        // this.http.delete('http://laravel-api.testing/api/product/' + id).subscribe(res => {
        this.Jarwis.deleteURI(url, id).subscribe(res => {
            console.log('Product Deleted and refresh Table');
            // this.getProducts();
        }, err => {
            console.log('Error occured');
        });
    }
    putProduct(id) {
        const url = 'products';
        console.log('Update Product id ' + id);
        // this.http.put('http://laravel-api.testing/api/product/' + id, this.productForm.value).subscribe(res => {
        this.Jarwis.putURI(url, id, this.productForm.value).subscribe(res => {
            // $('#product-modal').hide();
            console.log('Product Updated and refresh table');
            // this.getProducts();
        }, err => {
            console.log('Error occured');
        });
    }
    // Add a New Product
    // storeProduct(productForm: NgForm) {
    storeProduct(productForm) {
        const url = 'products';
        // console.log('Form successful submit.');
        // console.log(productForm.value);
        this.Jarwis.postURI(url, productForm.value).subscribe(res => {
            // this.getProducts();
            productForm.reset();
        }, err => {
            console.log('Error occured');
        });
    }
};
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-categories',
        template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom/hotel/categories/categories.component.html"),
        styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/custom/hotel/categories/categories.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_data_smart_table__WEBPACK_IMPORTED_MODULE_3__["SmartTableData"],
        _services_jarwis_service__WEBPACK_IMPORTED_MODULE_4__["JarwisService"]])
], CategoriesComponent);



/***/ }),

/***/ "./src/app/custom/hotel/hotel-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/custom/hotel/hotel-routing.module.ts ***!
  \******************************************************/
/*! exports provided: HotelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelRoutingModule", function() { return HotelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hotel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotel.component */ "./src/app/custom/hotel/hotel.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/custom/hotel/categories/categories.component.ts");
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rooms/rooms.component */ "./src/app/custom/hotel/rooms/rooms.component.ts");






const routes = [{
        path: '',
        component: _hotel_component__WEBPACK_IMPORTED_MODULE_3__["HotelComponent"],
        children: [
            {
                path: 'categories',
                component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"],
            },
            {
                path: 'rooms',
                component: _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_5__["RoomsComponent"],
            },
        ],
    }];
let HotelRoutingModule = class HotelRoutingModule {
};
HotelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HotelRoutingModule);



/***/ }),

/***/ "./src/app/custom/hotel/hotel.component.ts":
/*!*************************************************!*\
  !*** ./src/app/custom/hotel/hotel.component.ts ***!
  \*************************************************/
/*! exports provided: HotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelComponent", function() { return HotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HotelComponent = class HotelComponent {
};
HotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-hotel',
        template: `<router-outlet></router-outlet>`,
    })
], HotelComponent);



/***/ }),

/***/ "./src/app/custom/hotel/hotel.module.ts":
/*!**********************************************!*\
  !*** ./src/app/custom/hotel/hotel.module.ts ***!
  \**********************************************/
/*! exports provided: HotelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelModule", function() { return HotelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _hotel_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotel-routing.module */ "./src/app/custom/hotel/hotel-routing.module.ts");
/* harmony import */ var _hotel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hotel.component */ "./src/app/custom/hotel/hotel.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/custom/hotel/categories/categories.component.ts");
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rooms/rooms.component */ "./src/app/custom/hotel/rooms/rooms.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");










let HotelModule = class HotelModule {
};
HotelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _hotel_component__WEBPACK_IMPORTED_MODULE_4__["HotelComponent"],
            _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"],
            _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_6__["RoomsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _hotel_routing_module__WEBPACK_IMPORTED_MODULE_3__["HotelRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbTreeGridModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
        ],
    })
], HotelModule);



/***/ }),

/***/ "./src/app/custom/hotel/rooms/rooms.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/custom/hotel/rooms/rooms.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS9ob3RlbC9yb29tcy9yb29tcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/custom/hotel/rooms/rooms.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/custom/hotel/rooms/rooms.component.ts ***!
  \*******************************************************/
/*! exports provided: RoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsComponent", function() { return RoomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/data/smart-table */ "./src/app/@core/data/smart-table.ts");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");





let RoomsComponent = class RoomsComponent {
    constructor(service, Jarwis) {
        this.service = service;
        this.Jarwis = Jarwis;
        this.settings = {
            add: false,
            // add: {
            //   addButtonContent: '<i class="nb-plus"></i>',
            //   createButtonContent: '<i class="nb-checkmark"></i>',
            //   cancelButtonContent: '<i class="nb-close"></i>',
            // },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                },
                firstName: {
                    title: 'First Name',
                    type: 'string',
                },
                lastName: {
                    title: 'Last Name',
                    type: 'string',
                },
                username: {
                    title: 'Username',
                    type: 'string',
                },
                email: {
                    title: 'E-mail',
                    type: 'string',
                },
                age: {
                    title: 'Age',
                    type: 'number',
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        const data = this.service.getData();
        this.source.load(data);
    }
    ngOnInit() {
        this.getRooms();
    }
    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    getRooms() {
        const url = 'rooms';
        this.Jarwis.getURI(url).subscribe(rooms => {
            this.rooms = rooms;
            console.log(rooms);
        });
    }
    showProduct(id) {
        const url = 'products';
        console.log('Get Product ' + id);
        // return this.http.get('http://laravel-api.testing/api/product/' + id).subscribe(product => {
        this.Jarwis.showURI(url, id).subscribe(product => {
            this.product = product;
            this.productForm.patchValue({
                id: this.product.product.product_id,
                name: this.product.product.product_name,
                category: this.product.product.product_category,
                notes: this.product.product.product_notes,
                price: this.product.product.selling_price,
                quantity: this.product.product.product_quantity
            });
        });
    }
    deleteProduct(id) {
        const url = 'products';
        console.log('Delete Product id ' + id);
        // this.http.delete('http://laravel-api.testing/api/product/' + id).subscribe(res => {
        this.Jarwis.deleteURI(url, id).subscribe(res => {
            console.log('Product Deleted and refresh Table');
            // this.getProducts();
        }, err => {
            console.log('Error occured');
        });
    }
    putProduct(id) {
        const url = 'products';
        console.log('Update Product id ' + id);
        // this.http.put('http://laravel-api.testing/api/product/' + id, this.productForm.value).subscribe(res => {
        this.Jarwis.putURI(url, id, this.productForm.value).subscribe(res => {
            // $('#product-modal').hide();
            console.log('Product Updated and refresh table');
            // this.getProducts();
        }, err => {
            console.log('Error occured');
        });
    }
    // Add a New Product
    // storeProduct(productForm: NgForm) {
    storeProduct(productForm) {
        const url = 'products';
        // console.log('Form successful submit.');
        // console.log(productForm.value);
        this.Jarwis.postURI(url, productForm.value).subscribe(res => {
            // this.getProducts();
            productForm.reset();
        }, err => {
            console.log('Error occured');
        });
    }
};
RoomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-rooms',
        template: __webpack_require__(/*! raw-loader!./rooms.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom/hotel/rooms/rooms.component.html"),
        styles: [__webpack_require__(/*! ./rooms.component.scss */ "./src/app/custom/hotel/rooms/rooms.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_data_smart_table__WEBPACK_IMPORTED_MODULE_3__["SmartTableData"],
        _services_jarwis_service__WEBPACK_IMPORTED_MODULE_4__["JarwisService"]])
], RoomsComponent);



/***/ })

}]);
//# sourceMappingURL=hotel-hotel-module-es2015.js.map