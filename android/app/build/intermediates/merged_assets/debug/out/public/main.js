(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eliud\Desktop\proyecto-master\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "aSPh");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "mbft");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firestore.service */ "YWyl");






let HomeComponent = class HomeComponent {
    //apenas se abre mandamos a llamar la funcion 
    constructor(menucontroler, firestoreService) {
        this.menucontroler = menucontroler;
        this.firestoreService = firestoreService;
        this.path = 'Productos/';
        this.productos = [];
        this.loadProductos();
    }
    ngOnInit() { }
    //funcion para abrir el menú lateral
    openMenu() {
        console.log('open menu');
        this.menucontroler.toggle('principal');
    }
    //Se encarga de traer de firebase todos los productos guardados para mostrarlos en el apartado de tienda
    loadProductos() {
        this.firestoreService.getCollection(this.path).subscribe(res => {
            //console.log(res);
            this.productos = res;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "1Nmf":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/producto/producto.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<ion-card style=\"position: relative\">\n  <ion-img class= \"img-producto\" [src]= \"producto.foto\" ></ion-img>\n  <ion-item lines= \"full\" >\n    <ion-label class=\"subtitulo\">{{producto.nombre}}</ion-label>\n  </ion-item>\n  <p class=\"tachado\"> {{producto.precioNormal}} </p>\n  <p class=\"precio\"> {{producto.precioReducido}} </p>\n  <ion-icon (click)= \"addCarrito()\" class=\"icon-producto\" name=\"cart-sharp\"></ion-icon>\n</ion-card>");

/***/ }),

/***/ "3/b2":
/*!************************************************************!*\
  !*** ./src/app/pages/mispedidos/mispedidos.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXNwZWRpZG9zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "9peO":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/item-carrito/item-carrito.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-add {\n  background: #67e95b;\n  border-radius: 100%;\n  color: white;\n  margin-right: 10px !important;\n}\n\n.icon-remove {\n  background: #ec5a5a;\n  border-radius: 100%;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLWNhcnJpdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6Iml0ZW0tY2Fycml0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWFkZHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAzLCAyMzMsIDkxKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmljb24tcmVtb3Zle1xuICAgIGJhY2tncm91bmQ6IHJnYigyMzYsIDkwLCA5MCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "AGYO":
/*!*********************************************!*\
  !*** ./src/app/services/carrito.service.ts ***!
  \*********************************************/
/*! exports provided: CarritoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoService", function() { return CarritoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _firebaseauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebaseauth.service */ "NAz0");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firestore.service */ "YWyl");






let CarritoService = class CarritoService {
    constructor(firebaseauthService, firestoreService, router) {
        this.firebaseauthService = firebaseauthService;
        this.firestoreService = firestoreService;
        this.router = router;
        this.pedido$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.uid = '';
        this.firebaseauthService.stateAuth().subscribe(res => {
            console.log(res);
            if (res !== null) {
                this.uid = res.uid;
                this.loadCliente();
            }
        });
    }
    //Esta funcion trae de la base de datos todos los productos que el usuario ingresó al carrito
    loadCarrito() {
        const path = 'Cliente/' + this.uid + '/' + 'carrito';
        this.firestoreService.getDoc(path, this.uid).subscribe(res => {
            console.log(res);
            if (res) {
                this.pedido = res;
                this.pedido$.next(this.pedido);
            }
            else {
                this.initCarrito();
            }
        });
    }
    //Inicializar datos del carrito
    initCarrito() {
        this.pedido = {
            uid: this.uid,
            cliente: this.cliente,
            productos: [],
            precioTotal: null,
            estado: 'enviado',
            fecha: new Date(),
            valoracion: null,
        };
        this.pedido$.next(this.pedido);
    }
    //Funcion para cargar la informacion de la base de datos asociada a el usuario ingresado
    loadCliente() {
        console.log('getUserInfo');
        const path = 'Cliente';
        this.firestoreService.getDoc(path, this.uid).subscribe(res => {
            this.cliente = res;
            this.loadCarrito();
        });
    }
    //Se registran todos los cambios en el pedido
    getCarrito() {
        return this.pedido$.asObservable();
    }
    //Funcion que agrega productos selecionados al carrito de compras
    addProducto(producto) {
        //Si el usuario ya ha iniciado sesion 
        //En caso de no tener sesion iniciada te redirige a el apartado de perfil para hacer login
        if (this.uid.length) {
            const item = this.pedido.productos.find(productoPedido => {
                //Si existe un producto en el carrito con la misma id que el que se esta solicitando actualmente entinces se guarda el id en item
                return (productoPedido.producto.id === producto.id);
            });
            //Si ya esta en el carrito un mismop producto solo sumamos uno a la cantidad
            if (item !== undefined) {
                item.cantidad++;
            }
            else {
                //Sino se habia guardado ese mismo producto en el carrito agregamos el producto y guardamos la cantidad como 1
                const add = {
                    cantidad: 1,
                    producto,
                };
                this.pedido.productos.push(add);
            }
        }
        else {
            this.router.navigate(['/perfil']);
            return;
        }
        this.pedido$.next(this.pedido);
        console.log('en add pedido -> ', this.pedido);
        const path = 'Cliente/' + this.uid + '/' + this.path;
        //se agregan los cambios a la base de datos
        this.firestoreService.createDoc(this.pedido, path, this.uid).then(() => {
            console.log('agregado con exito ');
        });
    }
    //Al igual que la funcion agregar, la funcion removerProducto baja en uno la cantidad del producto o en caso de ser el ultimo de ese tipo en el carrito
    //lo remueve completamente de la misma. Estos cambios ademas se guardan en la base de datos
    removeProducto(producto) {
        if (this.uid.length) {
            let position = 0;
            const item = this.pedido.productos.find((productoPedido, index) => {
                position = index;
                return (productoPedido.producto.id === producto.id);
            });
            if (item !== undefined) {
                item.cantidad--;
                if (item.cantidad === 0) {
                    this.pedido.productos.splice(position, 1);
                }
                console.log('en remove pedido -> ', this.pedido);
                const path = 'Cliente/' + this.uid + '/' + this.path;
                this.firestoreService.createDoc(this.pedido, path, this.uid).then(() => {
                    console.log('removido con exito ');
                });
            }
        }
    }
    realizarPedido() {
    }
    //Funcion que limpia el carrito de compras una vez ya se presionó  el boton de pedir la compra
    //Se guardan cambios en la base de datos
    clearCarrito() {
        const path = 'Cliente/' + this.uid + '/' + 'carrito';
        this.firestoreService.deleteDoc(path, this.uid).then(() => {
            this.initCarrito();
        });
    }
};
CarritoService.ctorParameters = () => [
    { type: _firebaseauth_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseauthService"] },
    { type: _firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CarritoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CarritoService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyBvmN5RDSM8yPVONbU3RVRTHTbMp2LKz7A',
        authDomain: 'proyectofinal-1bbc8.firebaseapp.com',
        projectId: 'proyectofinal-1bbc8',
        storageBucket: 'proyectofinal-1bbc8.appspot.com',
        messagingSenderId: '512027938012',
        appId: '1:512027938012:web:2f6082c576468d1b68f819',
        measurementId: 'G-DD1M8FRB23'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DvcB":
/*!**************************************************************!*\
  !*** ./src/app/componentes/producto/producto.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-producto {\n  width: 300px;\n  margin: auto;\n}\n\n.precio {\n  margin: 0px 20px 10px 0px;\n  text-align: right;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 17px;\n  color: #070505;\n  font-weight: bold;\n}\n\n.tachado {\n  margin: 10px 20px 0px 0px;\n  text-align: right;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 19px;\n  color: #ca1818;\n  text-decoration: line-through;\n}\n\n.icon-producto {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  font-size: 25px;\n  margin: 10px;\n  background: black;\n  padding: 10px;\n  border-radius: 100%;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFGSiIsImZpbGUiOiJwcm9kdWN0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi5pbWctcHJvZHVjdG8ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5wcmVjaW8ge1xuICAgIG1hcmdpbjogMHB4IDIwcHggMTBweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogcmdiKDcsIDUsIDUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGFjaGFkbyB7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHggMHB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGNvbG9yOiByZ2IoMjAyLCAyNCwgMjQpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uaWNvbi1wcm9kdWN0byB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "ESNV":
/*!******************************************************!*\
  !*** ./src/app/pages/carrito/carrito.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJyaXRvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "K/sM":
/*!************************************************************!*\
  !*** ./src/app/componentes/producto/producto.component.ts ***!
  \************************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_producto_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./producto.component.html */ "1Nmf");
/* harmony import */ var _producto_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./producto.component.scss */ "DvcB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/carrito.service */ "AGYO");





let ProductoComponent = class ProductoComponent {
    constructor(carritoService) {
        this.carritoService = carritoService;
    }
    ngOnInit() {
        //console.log('el producto es -> ', this.producto);
    }
    //Al precionar el boton de agregar producto que se encuentra en cada item de la tienda se manda a llamar la funcion de addProducto
    addCarrito() {
        this.carritoService.addProducto(this.producto);
    }
};
ProductoComponent.ctorParameters = () => [
    { type: src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_4__["CarritoService"] }
];
ProductoComponent.propDecorators = {
    producto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-producto',
        template: _raw_loader_producto_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_producto_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductoComponent);



/***/ }),

/***/ "NAz0":
/*!**************************************************!*\
  !*** ./src/app/services/firebaseauth.service.ts ***!
  \**************************************************/
/*! exports provided: FirebaseauthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseauthService", function() { return FirebaseauthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");



let FirebaseauthService = class FirebaseauthService {
    //  Autenticacion con firebase
    //Nada mas al abrir la aplicacion se manda a llamar la funcion para conseguir el id del usuario
    //Esto para en caso de haberse registrado ya no perderá sus datos incluso al refrescar la pag
    constructor(auth) {
        this.auth = auth;
        this.getUid();
    }
    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }
    logout() {
        return this.auth.signOut();
    }
    registrar(email, password) {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }
    //En caso de existir, esta funcion regresa el id creada con firebase del usuario actual.
    //Esta va a utilizarse como identificador para el resto de datos del usuario, tales como productos en el carrito, pedidos, entre otros
    getUid() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.auth.currentUser;
            if (user === null) {
                return null;
            }
            else {
                return user.uid;
            }
        });
    }
    //observable que registra todos lo que pasa con el estado de autenticacion del usuario
    stateAuth() {
        return this.auth.authState;
    }
};
FirebaseauthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
FirebaseauthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirebaseauthService);



/***/ }),

/***/ "NYXt":
/*!******************************************************************!*\
  !*** ./src/app/backend/set-productos/set-productos.component.ts ***!
  \******************************************************************/
/*! exports provided: SetProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetProductosComponent", function() { return SetProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_set_productos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./set-productos.component.html */ "iBC2");
/* harmony import */ var _set_productos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-productos.component.scss */ "TG2W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firestore.service */ "YWyl");
/* harmony import */ var src_app_services_firestorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firestorage.service */ "iPno");







let SetProductosComponent = class SetProductosComponent {
    constructor(menucontroler, firestoreService, loadingController, toastController, alertController, firestorageService) {
        this.menucontroler = menucontroler;
        this.firestoreService = firestoreService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.firestorageService = firestorageService;
        this.productos = [];
        this.enableNewProducto = false;
        this.path = 'Productos/';
        this.newImage = "";
        this.newFile = "";
    }
    ngOnInit() {
        this.getProductos();
    }
    //abrir menú lateral
    openMenu() {
        console.log('open menu');
        this.menucontroler.toggle('principal');
    }
    //funcion que manda la informacion registrada de un producto a la base de datos 
    //y mientras se realiza el poceso manda a llamar la funcion para mostrar una ventana emergente 
    guardarProducto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            const path = 'Productos';
            const name = this.newProducto.nombre;
            const res = yield this.firestorageService.uploadImage(this.newFile, path, name);
            this.newProducto.foto = res;
            this.firestoreService.createDoc(this.newProducto, this.path, this.newProducto.id).then(res => {
                this.loading.dismiss();
                this.presentToast('Guardado con exito');
            }).catch(error => {
                this.presentToast('No se pudo guardar');
            });
        });
    }
    //funcion que lee todos los productos refgistrados en la base de datos
    getProductos() {
        this.firestoreService.getCollection(this.path).subscribe(res => {
            this.productos = res;
        });
    }
    //Funcion que muestra una ventana emergente preguntando si esta seguro de eliminar el producto seleccionado
    deleteProducto(producto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'nomral',
                header: 'ADVERTENCIA',
                message: 'Seguro desea <strong>eliminar</strong> este producto',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'normal',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            //this.alertController.dismiss();
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.firestoreService.deleteDoc(this.path, producto.id).then(res => {
                                this.presentToast('Eliminado con exito');
                                this.alertController.dismiss();
                            }).catch(error => {
                                this.presentToast('No se pudo eliminar');
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //Funcion para agregar un producto nuevo a la base de datos
    nuevo() {
        this.enableNewProducto = true;
        this.newProducto = {
            nombre: '',
            precioNormal: null,
            precioReducido: null,
            foto: '',
            id: this.firestoreService.getId(),
            fecha: new Date()
        };
    }
    //Funcion que muestra una ventana emergente con la leyenda de ""guardando"
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'normal',
                message: 'Guardando...',
            });
            yield this.loading.present();
            //await loading.onDidDismiss();
            //console.log('Loading dismissed!');
        });
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                cssClass: 'normal',
                duration: 2000,
                color: 'light',
            });
            toast.present();
        });
    }
    //Funcion para poder mostrar y guardar una imagen de referencia a cada producto
    newImageupload(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event.target.files && event.target.files[0]) {
                this.newFile = event.target.files[0];
                const reader = new FileReader();
                reader.onload = ((image) => {
                    this.newProducto.foto = image.target.result;
                });
                reader.readAsDataURL(event.target.files[0]);
            }
            //console.log('recibi res de la promesa', res);
            //console.log('fin de la funcion -> newImageupload');
        });
    }
};
SetProductosComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_firestorage_service__WEBPACK_IMPORTED_MODULE_6__["FirestorageService"] }
];
SetProductosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-set-productos',
        template: _raw_loader_set_productos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_set_productos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SetProductosComponent);



/***/ }),

/***/ "OnV2":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mispedidos/mispedidos.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"subtitulo ion-text-wrap\">\n     Mis pedidos\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"openMenu()\">\n        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n      <ion-menu-buttom></ion-menu-buttom>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/perfil']\">\n        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"person-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-menu-buttom></ion-menu-buttom>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<div>\n  <ion-segment (ionChange)=\"changeSegment($event)\" value=\"nuevos\">\n    <ion-segment-button value=\"Nuevos\">\n      <ion-label>Nuevos</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Entregados\">\n      <ion-label>Entregados</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n<ion-card *ngFor=\"let pedido of pedidos\">\n  <ion-item>\n    <ion-label class=\"normal\">\n      Estado: {{pedido.Estado}}\n      <p>\n        fecha: {{pedido.fecha.seconds | date}}\n      </p>\n    </ion-label>\n  </ion-item>\n <app-itemcarrito *ngFor=\"let producto of pedido.productos\" \n [productoPedido]=\"producto\"></app-itemcarrito>\n</ion-card>\n\n\n</ion-content>\n");

/***/ }),

/***/ "QObP":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/item-carrito/item-carrito.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-img [src]=\"productoPedido.producto.foto\"></ion-img>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-item>\n          <ion-label class=\"subtitulo ion-text-wrap\">{{productoPedido.producto.nombre}}</ion-label>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"addCarrito()\" class=\"icon-add\">\n              <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"removeCarrito()\" class=\"icon-remove\">\n              <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n        <p class=\"normal m-3\">Precio: {{productoPedido.producto.precioReducido}}</p>\n        <p class=\"normal m-3\">Cantidad: {{productoPedido.cantidad}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>");

/***/ }),

/***/ "RG4u":
/*!**************************************************!*\
  !*** ./src/app/pages/perfil/perfil.component.ts ***!
  \**************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_perfil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./perfil.component.html */ "WeKO");
/* harmony import */ var _perfil_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.component.scss */ "b52d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebaseauth.service */ "NAz0");
/* harmony import */ var src_app_services_firestorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firestorage.service */ "iPno");
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firestore.service */ "YWyl");








let PerfilComponent = class PerfilComponent {
    //En caso de existir se obtiene la informacion ingresada anteriormente por el usuario, esto por un observador que nos proporciona la id; 
    //con esta id se manda a llamar una funcion que busca los datos en firebase.
    //En el caso que no exista ningun usuario logueado simplemente se manda a inicializar los datos
    constructor(menucontroler, firebaseauthService, firestoreService, firestorageService) {
        this.menucontroler = menucontroler;
        this.firebaseauthService = firebaseauthService;
        this.firestoreService = firestoreService;
        this.firestorageService = firestorageService;
        this.cliente = {
            uid: '',
            email: '',
            nombre: '',
            celular: '',
            foto: '',
            referencia: '',
            ubicacion: null,
        };
        this.uid = '';
        this.ingresarEnable = false;
        this.firebaseauthService.stateAuth().subscribe(res => {
            if (res !== null) {
                this.uid = res.uid;
                this.getUserInfo(this.uid);
            }
            else {
                this.initCliente();
            }
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uid = yield this.firebaseauthService.getUid();
            console.log(uid);
        });
    }
    //Se inicializan los datos de cliente
    initCliente() {
        this.uid = '';
        this.cliente = {
            uid: '',
            email: '',
            nombre: '',
            celular: '',
            foto: '',
            referencia: '',
            ubicacion: null,
        };
        console.log(this.cliente);
    }
    openMenu() {
        console.log('open menu');
        this.menucontroler.toggle('principal');
    }
    //Funcion para agregar imagen al perfil
    newImageupload(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event.target.files && event.target.files[0]) {
                this.newFile = event.target.files[0];
                const reader = new FileReader();
                reader.onload = ((image) => {
                    this.cliente.foto = image.target.result;
                });
                reader.readAsDataURL(event.target.files[0]);
            }
        });
    }
    //En esta funcion se leen los datos de email y celular para crear una cuenta que con la autenticacion de firebase nos va generar una id
    registrarse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credenciales = {
                email: this.cliente.email,
                password: this.cliente.celular,
            };
            const res = yield this.firebaseauthService.registrar(credenciales.email, credenciales.password).catch(err => {
                console.log('error=>', err);
            });
            const uid = yield this.firebaseauthService.getUid();
            this.cliente.uid = uid;
            this.guardarUser;
            console.log(uid);
        });
    }
    //funcion para guardar los datos ingresados por el usuario en el apartado de perfil al registrarse
    //en caso de que se haya agregado una foto de perfil, esta se guarda primero, sino simplemente se mandan el resto de datos a firebase
    guardarUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const path = 'Cliente';
            const name = this.cliente.nombre;
            if (this.newFile !== undefined) {
                const res = yield this.firestorageService.uploadImage(this.newFile, path, name);
                this.cliente.foto = res;
            }
            this.firestoreService.createDoc(this.cliente, path, this.cliente.uid).then(res => {
                console.log('guardado con exito');
            }).catch(error => {
            });
        });
    }
    salir() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //const uid = await this.firebaseauthService.getUid();
            //console.log(uid);
            this.firebaseauthService.logout();
            this.suscriberUserInfo.unsubscribe();
        });
    }
    //Esta funcion obtiene los datos del usuario anteriormente registrados de la base de datos
    getUserInfo(uid) {
        console.log('getUserInfo');
        const path = 'Cliente';
        this.suscriberUserInfo = this.firestoreService.getDoc(path, uid).subscribe(res => {
            this.cliente = res;
        });
    }
    //Inicio de sesion con la autenticacion de firebase
    ingresar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credenciales = {
                email: this.cliente.email,
                password: this.cliente.celular,
            };
            const res = yield this.firebaseauthService.login(credenciales.email, credenciales.password).then(res => {
                console.log('Ingreso con exito');
            });
        });
    }
    ;
};
PerfilComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_app_services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseauthService"] },
    { type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] },
    { type: src_app_services_firestorage_service__WEBPACK_IMPORTED_MODULE_6__["FirestorageService"] }
];
PerfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil',
        template: _raw_loader_perfil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PerfilComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/firebaseauth.service */ "NAz0");






let AppComponent = class AppComponent {
    constructor(platform, firebaseauthService) {
        this.platform = platform;
        this.firebaseauthService = firebaseauthService;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseauthService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "T8P+":
/*!********************************************************************!*\
  !*** ./src/app/componentes/item-carrito/item-carrito.component.ts ***!
  \********************************************************************/
/*! exports provided: ItemCarritoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCarritoComponent", function() { return ItemCarritoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_carrito_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item-carrito.component.html */ "QObP");
/* harmony import */ var _item_carrito_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-carrito.component.scss */ "9peO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/carrito.service */ "AGYO");





let ItemCarritoComponent = class ItemCarritoComponent {
    constructor(carritoService) {
        this.carritoService = carritoService;
    }
    ngOnInit() { }
    //funciones para los botones de añadir o quitar una unidad desde el apartado de carrito
    addCarrito() {
        this.carritoService.addProducto(this.productoPedido.producto);
    }
    removeCarrito() {
        this.carritoService.removeProducto(this.productoPedido.producto);
    }
};
ItemCarritoComponent.ctorParameters = () => [
    { type: src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_4__["CarritoService"] }
];
ItemCarritoComponent.propDecorators = {
    productoPedido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ItemCarritoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-item-carrito',
        template: _raw_loader_item_carrito_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_item_carrito_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemCarritoComponent);



/***/ }),

/***/ "TG2W":
/*!********************************************************************!*\
  !*** ./src/app/backend/set-productos/set-productos.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXQtcHJvZHVjdG9zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n\n  <ion-split-pane contentId=\"main\">\n    <!--  the side menu  -->\n    <ion-menu contentId=\"main\" menuId=\"principal\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title class=\"subtitulo\">Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-menu-toggle autoHide=false>\n          <ion-item button=true detail=true [routerLink]=\"['/']\">\n            <ion-label clase=\"normal\">Tienda</ion-label>\n            <ion-icon slot=\"start\" name=\"storefront-sharp\"></ion-icon>\n          </ion-item>\n        </ion-menu-toggle>\n          <ion-menu-toggle autoHide=false>\n            <ion-item button=true detail=true [routerLink]=\"['/carrito']\">\n              <ion-label clase=\"normal\">Carrito</ion-label>\n              <ion-icon slot=\"start\" name=\"cart-sharp\"></ion-icon>\n            </ion-item>\n          </ion-menu-toggle>\n        <ion-menu-toggle autoHide=false>\n        <ion-item button=true detail=true [routerLink]=\"['/set-productos']\">\n          <ion-label clase=\"normal\">Configuracion de productos</ion-label>\n          <ion-icon slot=\"start\" name=\"create-sharp\"></ion-icon>\n        </ion-item>\n        </ion-menu-toggle>\n       \n        <ion-menu-toggle autoHide=false>\n          <ion-item button=true detail=true [routerLink]=\"['/mispedidos']\">\n            <ion-label clase=\"normal\">Mis pedidos</ion-label>\n            <ion-icon slot=\"start\" name=\"archive-sharp\"></ion-icon>\n          </ion-item>\n          </ion-menu-toggle>\n\n      </ion-content>\n\n    </ion-menu>\n  \n    <!-- the main content -->\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\n  </ion-split-pane>\n\n</ion-app>\n\n");

/***/ }),

/***/ "WeKO":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"subtitulo ion-text-wrap\">\n     Perfil\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"openMenu()\">\n        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"!uid.length\">\n\n  </div>\n  <h3 class=\"subtitulo encabezado\">Ingresa tus datos</h3>\n  <ion-item>\n    <ion-label class=\"normal\" position=\"floating\">\n      Email:\n    </ion-label>\n    <ion-input [(ngModel)] =\"cliente.email\" class=\"normal\" type=\"text\" inputmode=\"text\">\n    </ion-input>\n  </ion-item>\n  <ion-item *ngIf=\"!ingresarEnable\">\n    <ion-label class=\"normal\" position=\"floating\">\n      Nombre:\n    </ion-label>\n    <ion-input [(ngModel)]=\"cliente.nombre\" class=\"normal\" type=\"text\" inputmode=\"text\">\n    </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label class=\"normal\" position=\"floating\">\n      Celular:\n    </ion-label>\n    <ion-input [(ngModel)]=\"cliente.celular\" class=\"normal\"  type=\"text\">\n    </ion-input>\n  </ion-item>\n  <ion-item *ngIf=\"!ingresarEnable\">\n    <ion-label class=\"normal\" position=\"floating\">\n      Referencia a la ubicacion:\n    </ion-label>\n    <ion-input [(ngModel)]=\"cliente.referencia\" class=\"normal\" type=\"text\">\n    </ion-input>\n  </ion-item>\n\n  <ion-item *ngIf=\"!ingresarEnable\">\n    <ion-label class=\"normal\">\n      Foto referencial:\n    </ion-label>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <label for=\"file-upload\">\n          <ion-icon slot=\"icon-only\"name=\"images\"></ion-icon>\n        </label>\n        <input (change)=\"newImageupload($event)\" id=\"file-upload\" style=\"display: none;\" type=\"file\" accept=\"image/*\">\n      </ion-button>\n    </ion-buttons>\n  </ion-item>\n  <ion-item *ngIf=\"!ingresarEnable\">\n   <img class=\"image\" [src]= \"cliente.foto\">\n  </ion-item>\n\n  <div style=\"text-align: end; margin: 10px;\">\n    <ion-button *ngIf=\"!ingresarEnable\" (click)=\"ingresarEnable = true\" class=\"normal\" color=\"dark\">O INGRESAR</ion-button>\n    <ion-button *ngIf=\"ingresarEnable\" (click)=\"ingresar()\" [routerLink]=\"['/Tienda']\" class=\"normal\" color=\"dark\">Login</ion-button>\n    <ion-button *ngIf=\"!ingresarEnable\" (click)=\"registrarse()\" class=\"normal\" color=\"dark\">REGISTRARSE</ion-button>\n    <ion-button *ngIf=\"ingresarEnable\" (click)=\"ingresarEnable = false\" class=\"normal\" color=\"dark\">O REGISTRARSE</ion-button>\n  </div>\n\n  <div *ngIf= \"uid.length\">\n\n    <h3 class=\"subtitulo encabezado\">Tus datos</h3>\n    <ion-item>\n      <ion-label class=\"normal\">\n        Email: {{cliente.email}}\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"normal\">\n        Celular: {{cliente.celular}}\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"normal\" position=\"floating\">\n        Nombre:\n      </ion-label>\n      <ion-input [(ngModel)]=\"cliente.nombre\" class=\"normal\" type=\"text\" inputmode=\"text\">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"normal\" position=\"floating\">\n        Referencia a la ubicacion:\n      </ion-label>\n      <ion-input [(ngModel)]=\"cliente.referencia\" class=\"normal\" type=\"text\">\n      </ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label class=\"normal\">\n        Foto referencial:\n      </ion-label>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <label for=\"file-upload\">\n            <ion-icon slot=\"icon-only\"name=\"images\"></ion-icon>\n          </label>\n          <input (change)=\"newImageupload($event)\" id=\"file-upload\" style=\"display: none;\" type=\"file\" accept=\"image/*\">\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n    <ion-item>\n     <img class=\"image\" [src]= \"cliente.foto\">\n    </ion-item>\n\n    <div style=\"text-align: end; margin: 10px;\">\n      <ion-button (click)=\"guardarUser()\" class=\"normal\" color=\"dark\">GUARDAR</ion-button>\n      </div>\n    <div style=\"text-align: end; margin: 10px;\">\n    <ion-button (click)=\"salir()\" class=\"normal\" color=\"dark\">SALIR</ion-button>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "YWyl":
/*!***********************************************!*\
  !*** ./src/app/services/firestore.service.ts ***!
  \***********************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



let FirestoreService = class FirestoreService {
    constructor(database) {
        this.database = database;
    }
    //funcion para crear un documento en la base de datos o en caso de existir ya uno restablecer todos sus valores a los indicados
    createDoc(data, path, id) {
        const collection = this.database.collection(path);
        return collection.doc(id).set(data);
    }
    //funcion para obtener los documentos de la base de datos
    getDoc(path, id) {
        const collection = this.database.collection(path);
        return collection.doc(id).valueChanges();
    }
    //eliminar un documento de la base de datos
    deleteDoc(path, id) {
        const collection = this.database.collection(path);
        return collection.doc(id).delete();
    }
    //actualizar un documento de la base de datos sin borrar los demas cambios
    updateDoc(data, path, id) {
        const collection = this.database.collection(path);
        return collection.doc(id).update(data);
    }
    //funcion para crear un id 
    getId() {
        return this.database.createId();
    }
    //funcion para obtener la informacion de toda una colecion de la base de datos
    getCollection(path) {
        const collection = this.database.collection(path);
        return collection.valueChanges();
    }
    //Funcion que trae una coleccion en base a una busqueda de algun parametro
    //La utilizamos para filtrar los pedidos dependiendo de su estado
    getCollectionQuery(path, parametro, condicion, busqueda) {
        const collection = this.database.collection(path, ref => ref.where(parametro, condicion, busqueda));
        return collection.valueChanges();
    }
};
FirestoreService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FirestoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirestoreService);



/***/ }),

/***/ "Z8sg":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carrito/carrito.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"subtitulo ion-text-wrap\">\n     Carrito\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"openMenu()\">\n        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n      <ion-menu-buttom></ion-menu-buttom>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/perfil']\">\n        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"person-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-menu-buttom></ion-menu-buttom>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngFor=\"let producto of pedido.productos\">  \n  <app-item-carrito [productoPedido]= \"producto\"></app-item-carrito>\n</div>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"normal text-center\" size=\"6\">\n        Cantidad: {{cantidad}}\n      </ion-col>\n      <ion-col class=\"normal text-center\" size=\"6\">\n        Total: {{total}}$\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"initCarrito()\" expand=\"full\" class=\"normal\" [routerLink]=\"['/mispedidos']\">\n          Pedir\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _backend_backend_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./backend/backend.module */ "rl3G");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");














let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"],
            _backend_backend_module__WEBPACK_IMPORTED_MODULE_8__["BackendModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "aSPh":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"subtitulo ion-text-wrap\">\n     Tienda\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"openMenu()\">\n        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n      <ion-menu-buttom></ion-menu-buttom>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/perfil']\">\n        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"person-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-menu-buttom></ion-menu-buttom>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor= \"let producto of productos\">\n    <app-producto [producto] = producto ></app-producto>\n  </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "b52d":
/*!****************************************************!*\
  !*** ./src/app/pages/perfil/perfil.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJmaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "1LmZ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil/perfil.component */ "RG4u");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componentes/componentes.module */ "lSLK");
/* harmony import */ var _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carrito/carrito.component */ "eADT");
/* harmony import */ var _mispedidos_mispedidos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mispedidos/mispedidos.component */ "kMC1");











let PagesModule = class PagesModule {
};
PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_6__["PerfilComponent"],
            _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_9__["CarritoComponent"],
            _mispedidos_mispedidos_component__WEBPACK_IMPORTED_MODULE_10__["MispedidosComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_8__["ComponentesModule"],
        ]
    })
], PagesModule);



/***/ }),

/***/ "eADT":
/*!****************************************************!*\
  !*** ./src/app/pages/carrito/carrito.component.ts ***!
  \****************************************************/
/*! exports provided: CarritoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoComponent", function() { return CarritoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_carrito_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./carrito.component.html */ "Z8sg");
/* harmony import */ var _carrito_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrito.component.scss */ "ESNV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/carrito.service */ "AGYO");
/* harmony import */ var src_app_services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firebaseauth.service */ "NAz0");
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firestore.service */ "YWyl");








let CarritoComponent = class CarritoComponent {
    constructor(menucontroler, firestoreService, carritoService, firebaseauthService) {
        this.menucontroler = menucontroler;
        this.firestoreService = firestoreService;
        this.carritoService = carritoService;
        this.firebaseauthService = firebaseauthService;
        this.initCarrito();
        this.loadPedido();
    }
    ngOnInit() { }
    //funcion para abrir el menú lateral
    openMenu() {
        console.log('open menu');
        this.menucontroler.toggle('principal');
    }
    //Nos suscribimos a todos los posibles cambios, asi podemos seguir agregando productos de la tienda al carrito
    loadPedido() {
        this.carritoService.getCarrito().subscribe(res => {
            this.pedido = res;
            this.getTotal;
            this.getCantidad;
        });
    }
    //Se inicializa carrito
    initCarrito() {
        this.pedido = {
            uid: '',
            cliente: null,
            productos: [],
            precioTotal: null,
            estado: 'enviado',
            fecha: new Date(),
            valoracion: null,
        };
    }
    getTotal() {
        this.total = 0;
        this.pedido.productos.forEach(producto => {
            this.total = (producto.producto.precioReducido) * producto.cantidad + this.total;
        });
    }
    getCantidad() {
        this.cantidad = 0;
        this.pedido.productos.forEach(producto => {
            this.cantidad = producto.cantidad + this.cantidad;
        });
    }
    //Funcion para realizar pedido desde el carrito de compras
    //La informacion del pedido junto con el id del cliente se mandan a la base de datos
    pedir() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.pedido.productos.length) {
                console.log('Añade items');
                return;
            }
            this.pedido.fecha = new Date();
            this.pedido.precioTotal = this.total;
            this.pedido.uid = this.firestoreService.getId();
            const uid = yield this.firebaseauthService.getUid();
            console.log('pedir()->', this.pedido, uid);
            const path = 'Cliente/' + uid + 'pedidos/';
            this.firestoreService.createDoc(this.pedido, path, this.pedido.uid).then(() => {
                console.log('Guardado con exito');
                this.carritoService.clearCarrito();
            });
        });
    }
};
CarritoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] },
    { type: src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_5__["CarritoService"] },
    { type: src_app_services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseauthService"] }
];
CarritoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-carrito',
        template: _raw_loader_carrito_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_carrito_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CarritoComponent);



/***/ }),

/***/ "iBC2":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backend/set-productos/set-productos.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"subtitulo ion-text-wrap\">\n      Configuracion de productos\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"openMenu()\">\n        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n      <ion-menu-buttom></ion-menu-buttom>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div style=\"text-align: end; margin: 10px;\">\n    <ion-button (click)=\"nuevo()\" class=\"normal\" color=\"dark\">NUEVO</ion-button>\n  </div>\n  \n  <div *ngIf=\"enableNewProducto\">\n    <ion-item>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"enableNewProducto=false\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"guardarProducto()\">\n          <ion-icon color=\"primary\" slot=\"icon-only\" name=\"save\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n\n    <h3 class=\"subtitulo encabezado\">Ingrese datos del producto</h3>\n\n    <ion-item>\n      <ion-label class=\"normal\" position=\"floating\">\n        Nombre:\n      </ion-label>\n      <ion-input [(ngModel)]=\"newProducto.nombre\" class=\"normal\" type=\"text\" inputmode=\"text\">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"normal\" position=\"floating\">\n        Precio normal:\n      </ion-label>\n      <ion-input [(ngModel)]=\"newProducto.precioNormal\" class=\"normal\"  type=\"number\" inputmode=\"numeric\">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"normal\" position=\"floating\">\n        Precio reducido:\n      </ion-label>\n      <ion-input [(ngModel)]=\"newProducto.precioReducido\" class=\"normal\" type=\"number\" inputmode=\"numeric\">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"normal\">\n        Foto:\n      </ion-label>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <label for=\"file-upload\">\n            <ion-icon slot=\"icon-only\"name=\"images\"></ion-icon>\n          </label>\n          <input (change)=\"newImageupload($event)\" id=\"file-upload\" style=\"display: none;\" type=\"file\" accept=\"image/*\">\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n    <ion-item>\n     <img class=\"image\" [src]= \"newProducto.foto\">\n    </ion-item>\n\n  </div>\n\n  \n  <ion-card>\n    <h3 class=\"encabezado\">Lista de productos</h3>\n    <ion-item *ngFor=\"let producto of productos\">\n      <ion-label class=\"normal\">{{producto.nombre}}</ion-label>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"newProducto=producto;enableNewProducto=true;\">\n          <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"deleteProducto(producto)\">\n          <ion-icon slot=\"icon-only\" color=\"danger\" name=\"trash-bin-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  \n  </ion-card>  \n\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "iPno":
/*!*************************************************!*\
  !*** ./src/app/services/firestorage.service.ts ***!
  \*************************************************/
/*! exports provided: FirestorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestorageService", function() { return FirestorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let FirestorageService = class FirestorageService {
    constructor(storage) {
        this.storage = storage;
    }
    //funcion que se encarga de subir el archivo de la imagen guardada a la base de datos
    uploadImage(file, path, nombre) {
        return new Promise(resolve => {
            const filePath = path + '/' + nombre;
            const ref = this.storage.ref(filePath);
            const task = ref.put(file);
            // get notified when the download URL is available
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                ref.getDownloadURL().subscribe(res => {
                    const getDownloadURL = res;
                    resolve(getDownloadURL);
                    return;
                });
            }))
                .subscribe();
        });
    }
};
FirestorageService.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }
];
FirestorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirestorageService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kMC1":
/*!**********************************************************!*\
  !*** ./src/app/pages/mispedidos/mispedidos.component.ts ***!
  \**********************************************************/
/*! exports provided: MispedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MispedidosComponent", function() { return MispedidosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mispedidos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mispedidos.component.html */ "OnV2");
/* harmony import */ var _mispedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mispedidos.component.scss */ "3/b2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebaseauth.service */ "NAz0");
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firestore.service */ "YWyl");







let MispedidosComponent = class MispedidosComponent {
    constructor(menucontroler, firestoreService, firebaseauthService) {
        this.menucontroler = menucontroler;
        this.firestoreService = firestoreService;
        this.firebaseauthService = firebaseauthService;
        this.pedidos = [];
    }
    ngOnInit() {
        this.getPedidosNuevos();
    }
    ngOnDestroy() {
        if (this.nuevosSuscriber) {
            this.nuevosSuscriber.unsubscribe();
        }
        if (this.entregadosSuscriber) {
            this.entregadosSuscriber.unsubscribe();
        }
    }
    //abrir menú lateral
    openMenu() {
        console.log('open menu');
        this.menucontroler.toggle('principal');
    }
    //Esta funcion se encarga de redirigirte a los distintos pedidos mediante la deteccion de un evento
    //el cual sucede al seleccionar una de las opciones en el apartado de pedidos
    changeSegment(ev) {
        //console.log('changeSegment(), ev.detail.value');
        const opc = ev.detail.value;
        if (opc === 'Entregados') {
            this.getPedidosEntregdos;
        }
        if (opc === 'Nuevos') {
            this.getPedidosNuevos;
        }
    }
    //Esta funcion se encarga de traer todos los pedidos con el estado "enviado" de la base de datos
    getPedidosNuevos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('getPedidosNuevos()');
            const uid = yield this.firebaseauthService.getUid();
            const path = 'Cliente/' + uid + 'pedidos/';
            this.nuevosSuscriber = this.firestoreService.getCollectionQuery(path, 'estado', '==', 'enviado').subscribe(res => {
                if (res.length) {
                    console.log('getPedidosNuevos() -> res', res);
                    this.pedidos = res;
                }
            });
        });
    }
    //Al igual que la anterior, esta funcion manda a llamar los datos de los pedidos con el estado entregado
    getPedidosEntregdos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('getPedidosEntregados()');
            const uid = yield this.firebaseauthService.getUid();
            const path = 'Cliente/' + uid + 'pedidos/';
            this.entregadosSuscriber = this.firestoreService.getCollectionQuery(path, 'estado', '==', 'entregado').subscribe(res => {
                if (res.length) {
                    console.log('getPedidosEntregados() -> res', res);
                    this.pedidos = res;
                }
            });
        });
    }
};
MispedidosComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] },
    { type: src_app_services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseauthService"] }
];
MispedidosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mispedidos',
        template: _raw_loader_mispedidos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mispedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MispedidosComponent);



/***/ }),

/***/ "lSLK":
/*!***************************************************!*\
  !*** ./src/app/componentes/componentes.module.ts ***!
  \***************************************************/
/*! exports provided: ComponentesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentesModule", function() { return ComponentesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _producto_producto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto/producto.component */ "K/sM");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _item_carrito_item_carrito_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-carrito/item-carrito.component */ "T8P+");







let ComponentesModule = class ComponentesModule {
};
ComponentesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _producto_producto_component__WEBPACK_IMPORTED_MODULE_3__["ProductoComponent"],
            _item_carrito_item_carrito_component__WEBPACK_IMPORTED_MODULE_6__["ItemCarritoComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ], exports: [
            _producto_producto_component__WEBPACK_IMPORTED_MODULE_3__["ProductoComponent"],
            _item_carrito_item_carrito_component__WEBPACK_IMPORTED_MODULE_6__["ItemCarritoComponent"]
        ]
    })
], ComponentesModule);



/***/ }),

/***/ "mbft":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "rl3G":
/*!*******************************************!*\
  !*** ./src/app/backend/backend.module.ts ***!
  \*******************************************/
/*! exports provided: BackendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendModule", function() { return BackendModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _set_productos_set_productos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-productos/set-productos.component */ "NYXt");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






let BackendModule = class BackendModule {
};
BackendModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _set_productos_set_productos_component__WEBPACK_IMPORTED_MODULE_3__["SetProductosComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]
    })
], BackendModule);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _backend_set_productos_set_productos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backend/set-productos/set-productos.component */ "NYXt");
/* harmony import */ var _pages_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/carrito/carrito.component */ "eADT");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_mispedidos_mispedidos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/mispedidos/mispedidos.component */ "kMC1");
/* harmony import */ var _pages_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/perfil/perfil.component */ "RG4u");








//Se asignan los nombres de las rutas que llevarán a cada componente
const routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'set-productos', component: _backend_set_productos_set_productos_component__WEBPACK_IMPORTED_MODULE_3__["SetProductosComponent"] },
    { path: 'mispedidos', component: _pages_mispedidos_mispedidos_component__WEBPACK_IMPORTED_MODULE_6__["MispedidosComponent"] },
    { path: 'carrito', component: _pages_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_4__["CarritoComponent"] },
    { path: 'perfil', component: _pages_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_7__["PerfilComponent"] },
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map