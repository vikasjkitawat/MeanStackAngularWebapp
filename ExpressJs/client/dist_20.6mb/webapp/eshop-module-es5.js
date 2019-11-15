(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eshop-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eshop/eshop.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eshop/eshop.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>EShop</h2>\n\n\n<!-- (onProductAdd) tells that it is subscribed to the onProductAdd function and fetch the output value -->\n<!-- <app-productentry (onProductAdd)=\"addProduct($event)\"></app-productentry>\n<app-productlist [products]=\"EShopInventory\">\n    Content Projection\n    <header>\n        <h3>\n            EShop Inventory Status\n        </h3>\n    </header>\n    <footer>\n        <h3>\n            Product Rates as per Yesterday\n        </h3>\n    </footer>\n    <div id=\"div1\">\n        <h3>\n            Div 1\n        </h3>\n    </div>\n    <div id=\"div2\">\n        <h3>\n            Div 2\n        </h3>\n    </div>\n    <div id=\"div3\">\n        <h3>\n            EShop Inventory Status {{EShopInventory.length}}\n        </h3>\n    </div>\n</app-productlist>\n -->\n\n<div>\n    <ul>\n        <li><a routerLink=\"list\">Available Products</a></li>\n        <li><a routerLink=\"entry\">Product Entry</a></li>\n    </ul>\n</div>\n\n<!-- Second level of router-outlet -->\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/productentry/productentry.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/productentry/productentry.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>Product Entry</h2>\n<form>\n    <!-- <div>\n        <span>Name</span>\n        <input type=\"text\" name=\"Name\" [(ngModel)]=\"newProduct.Name\">\n    </div>\n    <div>\n        <span>Brand</span>\n        <input type=\"text\" name=\"Brand\" [(ngModel)]=\"newProduct.Brand\">\n    </div>\n    <div>\n        <span>Price</span>\n        <input type=\"number\" name=\"Price\" [(ngModel)]=\"newProduct.Price\">\n    </div>\n    <div>\n        <input type=\"button\" value=\"Save\"/>\n    </div> -->\n    <table>\n        <tr>\n            <td>Name</td>\n            <td><input type=\"text\" name=\"Name\" [(ngModel)]=\"newProduct.Name\"></td>\n        </tr>\n        <tr>\n            <td>Brand</td>\n            <td><input type=\"text\" name=\"Brand\" [(ngModel)]=\"newProduct.Brand\"></td>\n        </tr>\n        <tr>\n            <td>Price</td>\n            <td><input type=\"number\" name=\"Price\" [(ngModel)]=\"newProduct.Price\"></td>\n        </tr>\n\n    </table>\n    <div>\n        <input type=\"button\" value=\"Save\" (click)=\"saveProduct()\"/>\n    </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/productlist/productlist.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/productlist/productlist.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <ng-content></ng-content> -->\n<!--  path : \"list\",\n                component : ProductlistComponent -->\n<h3>Test</h3>\n<table *ngIf=\"products.length > 0\">\n    <thead>\n        <tr>\n            <td>Name</td>\n            <td>Brand</td>\n            <td>Price</td>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let product of products\">\n            <td>{{product.Name}}</td>\n            <td>{{product.Brand}}</td>\n            <td>{{product.Price}}</td>\n        </tr>\n    </tbody>\n</table>\n\n\n<!-- <ng-content select=\"footer\"></ng-content>\n<ng-content select=\"div[id='div1']\"></ng-content>\n<ng-content select=\"div[id='div2']\"></ng-content>\n<ng-content select=\"div[id='div3']\"></ng-content> -->\n");
            /***/ 
        }),
        /***/ "./src/app/components/eshop/eshop.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/eshop/eshop.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXNob3AvZXNob3AuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/eshop/eshop.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/eshop/eshop.component.ts ***!
          \*****************************************************/
        /*! exports provided: EshopComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EshopComponent", function () { return EshopComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
            var EshopComponent = /** @class */ (function () {
                function EshopComponent(dataService) {
                    this.dataService = dataService;
                    console.log('eshop comp : ' + dataService.getServiceId());
                    // this.EShopInventory =
                    //   [
                    //     // mock data
                    //     new Product("Mobiles", "Apple", 50000),
                    //     new Product("Laptops", "HP", 75000),
                    //     new Product("Desktops", "Dell", 25000)
                    //   ];
                    //OPTION 2: 
                    //this.EShopInventory = dataService.getProducts();
                    //OPTION 3: USING REST API
                    this.EShopInventory = [];
                    // var promise = dataService.getProducts();
                    // promise.then(
                    //   (products: Product[]) => // success
                    //   {
                    //     this.EShopInventory = products;
                    //   },
                    //   (errorMessage: string) => // error
                    //   {
                    //     alert(errorMessage);
                    //   }
                    // )
                }
                EshopComponent.prototype.ngOnInit = function () {
                };
                EshopComponent.prototype.addProduct = function (newProduct) {
                    var _this = this;
                    // this.EShopInventory.push(newProduct);
                    // Create a copy of EShopInventory with the new product added
                    // var newArray = [];
                    // this.EShopInventory = newArray.concat(this.EShopInventory, newProduct);
                    // Doing this to change the memory ref which EShopInventory points to
                    // Concept of Immutables implemented using ES6 spread operator
                    // this.EShopInventory =
                    //   [
                    //     ...this.EShopInventory,
                    //     newProduct
                    //   ];
                    //this.dataService.addProducts(newProduct);
                    //this.EShopInventory = this.dataService.getProducts();
                    //this.EShopInventory=[...this.EShopInventory];
                    var promise = this.dataService.addProducts(newProduct);
                    promise.then(function (updatedProductList) {
                        _this.EShopInventory = updatedProductList;
                    }, function (errorMessage) {
                        alert(errorMessage);
                    });
                };
                return EshopComponent;
            }());
            EshopComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            EshopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-eshop',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eshop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eshop/eshop.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eshop.component.css */ "./src/app/components/eshop/eshop.component.css")).default]
                })
            ], EshopComponent);
            /***/ 
        }),
        /***/ "./src/app/components/productentry/productentry.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/components/productentry/productentry.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdGVudHJ5L3Byb2R1Y3RlbnRyeS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/productentry/productentry.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/productentry/productentry.component.ts ***!
          \*******************************************************************/
        /*! exports provided: ProductentryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductentryComponent", function () { return ProductentryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/product */ "./src/app/models/product.ts");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ProductentryComponent = /** @class */ (function () {
                function ProductentryComponent(_dataService, _routerService) {
                    this._dataService = _dataService;
                    this._routerService = _routerService;
                    this.newProduct = new _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
                }
                ProductentryComponent.prototype.ngOnInit = function () {
                };
                ProductentryComponent.prototype.saveProduct = function () {
                    var _this = this;
                    console.dir(this.newProduct);
                    var promise = this._dataService.addProducts(this.newProduct);
                    promise.then(function (prod) {
                        console.dir(prod);
                        console.log('new prod id ' + prod.id);
                        _this._routerService.navigate([
                            "eshop",
                            "list"
                        ]);
                    }, function (errorMessage) {
                        alert(errorMessage);
                    });
                    this.newProduct = new _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
                };
                return ProductentryComponent;
            }());
            ProductentryComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            ProductentryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-productentry',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./productentry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/productentry/productentry.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./productentry.component.css */ "./src/app/components/productentry/productentry.component.css")).default]
                })
            ], ProductentryComponent);
            /***/ 
        }),
        /***/ "./src/app/components/productlist/productlist.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/components/productlist/productlist.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdGxpc3QvcHJvZHVjdGxpc3QuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/productlist/productlist.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/productlist/productlist.component.ts ***!
          \*****************************************************************/
        /*! exports provided: ProductlistComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistComponent", function () { return ProductlistComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
            var ProductlistComponent = /** @class */ (function () {
                function ProductlistComponent(_dataService, _changeDetector) {
                    var _this = this;
                    this._dataService = _dataService;
                    this._changeDetector = _changeDetector;
                    var promise = this._dataService.getProducts();
                    promise.then(function (prod) {
                        _this.products = prod;
                        _changeDetector.detectChanges();
                    }, function (errorMessage) {
                        alert(errorMessage);
                    });
                }
                ProductlistComponent.prototype.ngOnInit = function () {
                };
                return ProductlistComponent;
            }());
            ProductlistComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            ProductlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-productlist',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./productlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/productlist/productlist.component.html")).default,
                    // Here even though we have set OnPush, change detection for products list will only 
                    // happen when a new object is created
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./productlist.component.css */ "./src/app/components/productlist/productlist.component.css")).default]
                })
            ], ProductlistComponent);
            /***/ 
        }),
        /***/ "./src/app/eshop.module.ts": 
        /*!*********************************!*\
          !*** ./src/app/eshop.module.ts ***!
          \*********************************/
        /*! exports provided: EShopModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EShopModule", function () { return EShopModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _components_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/eshop/eshop.component */ "./src/app/components/eshop/eshop.component.ts");
            /* harmony import */ var _components_productlist_productlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/productlist/productlist.component */ "./src/app/components/productlist/productlist.component.ts");
            /* harmony import */ var _components_productentry_productentry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/productentry/productentry.component */ "./src/app/components/productentry/productentry.component.ts");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _routes_eshop_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/eshop.routes */ "./src/app/routes/eshop.routes.ts");
            // import { BrowserModule } from '@angular/platform-browser';
            // import { FormsModule } from '@angular/forms';
            // import { NgModule } from '@angular/core';
            // import { AppComponent } from './app.component';
            // import { EshopComponent } from './components/eshop/eshop.component';
            // import { ProductlistComponent } from './components/productlist/productlist.component';
            // import { ProductentryComponent } from './components/productentry/productentry.component';
            // import { ReportComponent } from './components/report/report.component';
            // import { DataService } from './services/data.service';
            // import { HttpClientModule } from "@angular/common/http";
            // import { CommonModule } from '@angular/common';
            var EShopModule = /** @class */ (function () {
                function EShopModule() {
                }
                return EShopModule;
            }());
            EShopModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(_routes_eshop_routes__WEBPACK_IMPORTED_MODULE_10__["EShopRoutes"])
                    ],
                    declarations: [
                        _components_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_5__["EshopComponent"],
                        _components_productlist_productlist_component__WEBPACK_IMPORTED_MODULE_6__["ProductlistComponent"],
                        _components_productentry_productentry_component__WEBPACK_IMPORTED_MODULE_7__["ProductentryComponent"]
                    ],
                    providers: [
                        _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]
                    ],
                    exports: [
                        _components_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_5__["EshopComponent"]
                    ]
                })
            ], EShopModule);
            /***/ 
        }),
        /***/ "./src/app/routes/eshop.routes.ts": 
        /*!****************************************!*\
          !*** ./src/app/routes/eshop.routes.ts ***!
          \****************************************/
        /*! exports provided: EShopRoutes */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EShopRoutes", function () { return EShopRoutes; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _components_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/eshop/eshop.component */ "./src/app/components/eshop/eshop.component.ts");
            /* harmony import */ var _components_productentry_productentry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/productentry/productentry.component */ "./src/app/components/productentry/productentry.component.ts");
            /* harmony import */ var _components_productlist_productlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/productlist/productlist.component */ "./src/app/components/productlist/productlist.component.ts");
            var EShopRoutes = [
                // http://localhost/eshop
                {
                    path: "",
                    component: _components_eshop_eshop_component__WEBPACK_IMPORTED_MODULE_1__["EshopComponent"],
                    children: [
                        // http://localhost/eshop
                        //Default for Second level
                        {
                            path: "",
                            component: _components_productlist_productlist_component__WEBPACK_IMPORTED_MODULE_3__["ProductlistComponent"]
                        },
                        // http://localhost/eshop/list
                        {
                            path: "list",
                            component: _components_productlist_productlist_component__WEBPACK_IMPORTED_MODULE_3__["ProductlistComponent"]
                        },
                        // http://localhost/eshop/entry
                        {
                            path: "entry",
                            component: _components_productentry_productentry_component__WEBPACK_IMPORTED_MODULE_2__["ProductentryComponent"]
                        }
                    ]
                },
            ];
            /***/ 
        })
    }]);
//# sourceMappingURL=eshop-module-es2015.js.map
//# sourceMappingURL=eshop-module-es5.js.map
//# sourceMappingURL=eshop-module-es5.js.map