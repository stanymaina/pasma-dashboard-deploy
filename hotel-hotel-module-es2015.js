(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hotel-hotel-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/custom/hotel/bookings/bookings.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom/hotel/bookings/bookings.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Customers\n  </nb-card-header>\n\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"bookings\" (deleteConfirm)=\"onDeleteConfirm($event)\" (createConfirm)=\"addRecord($event)\" (editConfirm)=\"updateRecord($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom/hotel/categories/categories.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom/hotel/categories/categories.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Room Categories\n  </nb-card-header>\n\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom/hotel/countries/countries.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom/hotel/countries/countries.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Customers\n  </nb-card-header>\n\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"countries\" (deleteConfirm)=\"onDeleteConfirm($event)\" (createConfirm)=\"addRecord($event)\" (editConfirm)=\"updateRecord($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom/hotel/customers/customers.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom/hotel/customers/customers.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Customers\n  </nb-card-header>\n\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"customers\" (deleteConfirm)=\"onDeleteConfirm($event)\" (createConfirm)=\"addRecord($event)\" (editConfirm)=\"updateRecord($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom/hotel/rooms/rooms.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom/hotel/rooms/rooms.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Rooms\n  </nb-card-header>\n\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"rooms\" (deleteConfirm)=\"onDeleteConfirm($event)\" (createConfirm)=\"addRecord($event)\" (editConfirm)=\"updateRecord($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/custom/hotel/bookings/bookings.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/custom/hotel/bookings/bookings.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS9ob3RlbC9ib29raW5ncy9ib29raW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/custom/hotel/bookings/bookings.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/custom/hotel/bookings/bookings.component.ts ***!
  \*************************************************************/
/*! exports provided: BookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsComponent", function() { return BookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BookingsComponent = class BookingsComponent {
    constructor(http) {
        this.http = http;
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmEdit: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                room_number: {
                    title: 'Booking Number',
                    type: 'string',
                },
                floor: {
                    title: 'Floor',
                    type: 'number',
                },
                room_description: {
                    title: 'Description',
                    type: 'string',
                },
            },
        };
        this.http.get('http://api.mainahighwayhotel.com/api/bookings').subscribe(data => {
            this.data = data;
            this.bookings = this.data.response.bookings;
            console.log(this.data);
        }, (err) => {
            console.log(err);
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    }
    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    addRecord(event) {
        const data = {
            'room_number': event.newData.room_number,
            'floor': event.newData.floor,
            'description': event.newData.room_description,
            'room_price': event.newData.room_price,
        };
        this.http.post('http://api.mainahighwayhotel.com/api/bookings', data).subscribe(res => {
            console.log(res);
            event.confirm.resolve(event.newData);
        }, (err) => {
            console.log(err);
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    }
    updateRecord(event) {
        console.log('ddddd');
        const data = {
            'room_number': event.newData.room_number,
            'floor': event.newData.floor,
            'description': event.newData.room_description,
            'room_price': event.newData.room_price,
            'id': event.newData.id,
        };
        this.http.put(this.url + '/' + event.newData.id, data).subscribe(res => {
            console.log(res);
            event.confirm.resolve(event.newData);
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    }
    ngOnInit() {
    }
};
BookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-bookings',
        template: __webpack_require__(/*! raw-loader!./bookings.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom/hotel/bookings/bookings.component.html"),
        styles: [__webpack_require__(/*! ./bookings.component.scss */ "./src/app/custom/hotel/bookings/bookings.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BookingsComponent);



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
                quantity: this.product.product.product_quantity,
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

/***/ "./src/app/custom/hotel/countries/countries.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/custom/hotel/countries/countries.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS9ob3RlbC9jb3VudHJpZXMvY291bnRyaWVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/custom/hotel/countries/countries.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/custom/hotel/countries/countries.component.ts ***!
  \***************************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CountriesComponent = class CountriesComponent {
    constructor(http) {
        this.http = http;
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmEdit: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                shortcode: {
                    title: 'Country Shortcode',
                    type: 'string',
                },
                title: {
                    title: 'Title',
                    type: 'string',
                },
            },
        };
        this.http.get('http://api.mainahighwayhotel.com/api/countries').subscribe(data => {
            this.data = data;
            this.countries = this.data.response.countries;
            console.log(this.data);
        }, (err) => {
            console.log(err);
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    }
    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    addRecord(event) {
        const data = {
            'shortcode': event.newData.shortcode,
            'title': event.newData.title,
        };
        this.http.post('http://api.mainahighwayhotel.com/api/countries', data).subscribe(res => {
            console.log(res);
            event.confirm.resolve(event.newData);
        }, (err) => {
            console.log(err);
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    }
    updateRecord(event) {
        const data = {
            'shortcode': event.newData.shortcode,
            'title': event.newData.title,
        };
        this.http.put(this.url + '/' + event.newData.id, data).subscribe(res => {
            console.log(res);
            event.confirm.resolve(event.newData);
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    }
    ngOnInit() {
    }
};
CountriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-countries',
        template: __webpack_require__(/*! raw-loader!./countries.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom/hotel/countries/countries.component.html"),
        styles: [__webpack_require__(/*! ./countries.component.scss */ "./src/app/custom/hotel/countries/countries.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CountriesComponent);



/***/ }),

/***/ "./src/app/custom/hotel/customers/customers.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/custom/hotel/customers/customers.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS9ob3RlbC9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/custom/hotel/customers/customers.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/custom/hotel/customers/customers.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/multi-select/multi-select.component */ "./src/app/custom/components/multi-select/multi-select.component.ts");




let CustomersComponent = class CustomersComponent {
    constructor(http) {
        this.http = http;
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmEdit: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                first_name: {
                    title: 'First Name',
                    type: 'string',
                },
                last_name: {
                    title: 'Last Name',
                    type: 'string',
                },
                phone: {
                    title: 'Phone',
                    type: 'number',
                },
                email: {
                    title: 'Email',
                    type: 'string',
                },
                address: {
                    title: 'Address',
                    type: 'string',
                },
                // country_id: {
                //   title: 'Country',
                //   type: 'number',
                // },
                country_id: {
                    title: 'Multi select',
                    type: 'html',
                    editor: {
                        type: 'custom',
                        valuePrepareFunction: (cell, row) => row,
                        component: _components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_3__["MultiSelectComponent"],
                    },
                }
            },
        };
        this.http.get('http://api.mainahighwayhotel.com/api/customers').subscribe(data => {
            this.data = data;
            this.customers = this.data.response.customers;
            console.log(this.data);
        }, (err) => {
            console.log(err);
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    }
    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    addRecord(event) {
        const data = {
            'first_name': event.newData.first_name,
            'last_name': event.newData.last_name,
            'phone': event.newData.phone,
            'address': event.newData.address,
            'email': event.newData.email,
            'country_id': event.newData.country_id,
        };
        this.http.post('http://api.mainahighwayhotel.com/api/customers', data).subscribe(res => {
            console.log(res);
            event.confirm.resolve(event.newData);
        }, (err) => {
            console.log(err);
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    }
    updateRecord(event) {
        console.log('Client-side error occured.');
        const data = {
            'first_name': event.newData.first_name,
            'last_name': event.newData.last_name,
            'phone': event.newData.phone,
            'address': event.newData.address,
            'email': event.newData.email,
            'country_id': event.newData.country_id,
        };
        this.http.put(this.url + '/' + event.newData.id, data).subscribe(res => {
            console.log(res);
            event.confirm.resolve(event.newData);
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    }
    ngOnInit() {
    }
};
CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-customers',
        template: __webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom/hotel/customers/customers.component.html"),
        styles: [__webpack_require__(/*! ./customers.component.scss */ "./src/app/custom/hotel/customers/customers.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CustomersComponent);



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
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/custom/hotel/customers/customers.component.ts");
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bookings/bookings.component */ "./src/app/custom/hotel/bookings/bookings.component.ts");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./countries/countries.component */ "./src/app/custom/hotel/countries/countries.component.ts");









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
            {
                path: 'customers',
                component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"],
            },
            {
                path: 'bookings',
                component: _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_7__["BookingsComponent"],
            },
            {
                path: 'countries',
                component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_8__["CountriesComponent"],
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
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/custom/hotel/customers/customers.component.ts");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./countries/countries.component */ "./src/app/custom/hotel/countries/countries.component.ts");
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bookings/bookings.component */ "./src/app/custom/hotel/bookings/bookings.component.ts");













let HotelModule = class HotelModule {
};
HotelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _hotel_component__WEBPACK_IMPORTED_MODULE_4__["HotelComponent"],
            _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"],
            _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_6__["RoomsComponent"],
            _customers_customers_component__WEBPACK_IMPORTED_MODULE_10__["CustomersComponent"],
            _countries_countries_component__WEBPACK_IMPORTED_MODULE_11__["CountriesComponent"],
            _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__["BookingsComponent"],
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
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let RoomsComponent = class RoomsComponent {
    constructor(
    // private service: SmartTableData,
    http, Jarwis) {
        // this.source = new ServerDataSource(http, { endPoint: 'http://api.mainahighwayhotel.com/api/rooms' });
        // this.getRooms();
        // const data = this.service.getData();
        this.http = http;
        this.Jarwis = Jarwis;
        this.settings = {
            mode: 'inline',
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmEdit: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                room_number: {
                    title: 'Room Number',
                    type: 'string',
                },
                floor: {
                    title: 'Floor',
                    type: 'number',
                },
                room_description: {
                    title: 'Description',
                    type: 'string',
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        // this.data = this.Jarwis.getURI('rooms').subscribe(rooms => {
        //   this.rooms = rooms;
        //   // this.rooms = this.rooms.response;
        //   this.source.load(this.rooms.response);
        //   // console.log(this.rooms);
        //   // this.source.load(data);
        // });
        // console.log(data);
    }
    ngOnInit() {
        // this.getRooms();
        this.http.get('http://api.mainahighwayhotel.com/api/rooms').subscribe(data => {
            this.data = data;
            this.rooms = this.data.response.rooms;
            console.log(this.data);
        }, (err) => {
            console.log(err);
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    }
    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    addRecord(event) {
        const data = {
            'room_number': event.newData.room_number,
            'floor': event.newData.floor,
            'description': event.newData.room_description,
            'room_price': event.newData.room_price,
        };
        this.http.post('http://api.mainahighwayhotel.com/api/rooms', data).subscribe(res => {
            console.log(res);
            event.confirm.resolve(event.newData);
        }, (err) => {
            console.log(err);
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    }
    updateRecord(event) {
        console.log('ddddd');
        const data = {
            'room_number': event.newData.room_number,
            'floor': event.newData.floor,
            'description': event.newData.room_description,
            'room_price': event.newData.room_price,
            'id': event.newData.id,
        };
        this.http.put(this.url + '/' + event.newData.id, data).subscribe(res => {
            console.log(res);
            event.confirm.resolve(event.newData);
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    }
    getRooms() {
        const url = 'rooms';
        this.Jarwis.getURI(url).subscribe(rooms => {
            this.rooms = rooms;
            // this.dataSource(this.rooms.response)
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
                quantity: this.product.product.product_quantity,
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _services_jarwis_service__WEBPACK_IMPORTED_MODULE_3__["JarwisService"]])
], RoomsComponent);



/***/ })

}]);
//# sourceMappingURL=hotel-hotel-module-es2015.js.map