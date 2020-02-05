function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n<div class= \"container\">\r\n\r\n</div>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/list-books/list-books.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/list-books/list-books.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentAdminListBooksListBooksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"row mt-5\">\n    <div class=\"col\">\n        <button class=\"btn btn-primary float-right mb-3\" data-toggle=\"modal\" data-target=\"#modalBook\">New Book</button>\n        \n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">#</th>\n                    <th scope=\"col\">Titulo</th>\n                    <th scope=\"col\">Autor</th>\n                    <th scope=\"col\">Idioma</th>\n                    <th scope=\"col\">Precio</th>\n                    <th scope=\"col\">Oferta</th>\n                    <th scope=\"col\">&nbsp;</th>\n                    <th scope=\"col\">&nbsp;</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let book of books; index as i\">\n                    <th scope=\"row\">{{i+1}}</th>\n                    <td>{{book.titulo}}</td>\n                    <td>{{book.autor}}</td>\n                    <td>{{book.idioma}}</td>\n                    <td>{{book.precio}}</td>\n                    <td>{{book.oferta == 1 ? 'Si' : 'No'}}</td>\n                    <td *ngIf=\"book.userUid == userUid || isAdmin == true; else noOwner\">\n                        <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalBook\" (click)=\"onPreUpdateBook(book)\">Update</button>\n                      </td>\n                      <ng-template #noOwner>\n                        <td>\n                          <button class=\"btn btn-secondary\" disabled=\"true\">Update</button>\n                        </td>\n                      </ng-template>\n                      <td *ngIf=\"isAdmin == true; else noAdmin\">\n                        <button class=\"btn btn-danger\" (click)=\"onDeleteBook(book.id)\">Delete</button>\n                      </td>\n                      <ng-template #noAdmin>\n                        <td>\n                          <button class=\"btn btn-danger\" disabled=\"true\">Delete</button>\n                        </td>\n                      </ng-template>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </section>\n\n            <app-modal [userUid]=\"userUid\"></app-modal>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/details-book/details-book.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/details-book/details-book.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentDetailsBookDetailsBookComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"book\" class=\"mt-5\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n          <div class=\"card_book\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <p>\n                  <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\">\n                </p>\n                <h4 class=\"card-title\">{{book.titulo}}</h4>\n                <p class=\"card-text\">\n                  {{book.descripcion}}\n                </p>\n                <a href=\"{{book.link_amazon}}\" target=\"_blank\" class=\"btn btn-block btn-primary\">Buy</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/hero/hero.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/hero/hero.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentHeroHeroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class=\"jumbotron\">\n    <div class=\"container\">\n      <h1 class=\"display-3\">Hello, world!</h1>\n      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and\n        three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n      <p>\n        <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a>\n      </p>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"books\" class=\"mt-5\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let book of books\">\n          <div class=\"card_book\">\n            <div class=\"card\"> \n<!-- se repite tantas veces como libros carguemos a Firebase -->\n              <div class=\"card-body text-center\">\n                <p>\n                  <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\">\n                </p>\n                <h4 routerLink=\"/book/{{book.id}}\" class=\"card-title\">{{book.titulo}}</h4>\n                <p class=\"card-text\">\n                  {{book.descripcion }}\n                </p>\n                <div class=\"container-precio-idioma\">\n                  <p class=\"badge badge-info\">\n                    {{book.precio}}€\n                  </p>\n                  <p class=\"badge badge-info\">\n                    {{book.idioma}}\n                  </p>\n                </div>\n                <a href=\"{{book.link_amazon}}\" class=\"btn btn-block btn-primary\" target=\"_blank\">Buy</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/modal/modal.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/modal/modal.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal fade\" id=\"modalBook\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{!this.dataApi.selectedBook.id ? 'New Book': 'Update Book'}}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #formBook=\"ngForm\" (ngSubmit)=\"onSaveBook(formBook)\" >\n                    <input type=\"hidden\" name=\"id\" [(ngModel)]=\"this.dataApi.selectedBook.id\">\n                    <input type=\"hidden\" name=\"userUid\" [value]=\"userUid\">\n                    <div class=\"form-group\">\n                        <label for=\"titulo\" class=\"col-form-label\">Titulo:</label>\n                        <input type=\"text\" class=\"form-control\" name=\"titulo\" [(ngModel)]=\"this.dataApi.selectedBook.titulo\">\n                      </div>\n\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"idioma\">Idioma</label>\n                            <select name=\"idioma\" class=\"form-control\" [(ngModel)]=\"this.dataApi.selectedBook.idioma\">\n                                <option value=\"Inglés\">Inglés</option>\n                                <option value=\"Castellano\">Castellano</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"precio\">Precio</label>\n                            <input type=\"text\" name=\"precio\" class=\"form-control\" placeholder=\"0,00$\"\n                                [(ngModel)]=\"this.dataApi.selectedBook.precio\" >\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"autor\">Autor</label>\n                            <input type=\"text\" name=\"autor\" class=\"form-control\" placeholder=\"Autor\"\n                                [(ngModel)]=\"this.dataApi.selectedBook.autor\" />\n                        </div>\n\n\n\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"oferta\">Oferta</label>\n                            <select name=\"oferta\" class=\"form-control\" [(ngModel)]=\"this.dataApi.selectedBook.oferta\">\n                                <option value=\"1\">Sí</option>\n                                <option value=\"0\">No</option>\n                            </select>\n                        </div>\n\n                    </div>\n\n                    <div class=\"form-row\">\n\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"portada\">Portada</label>\n                            <input type=\"text\" name=\"portada\" class=\"form-control\" placeholder=\"Portada\"\n                            [(ngModel)]=\"this.dataApi.selectedBook.portada\">\n                        </div>\n\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"link_amazon\">Link Amazon</label>\n                            <input type=\"text\" name=\"link_amazon\" class=\"form-control\" placeholder=\"Link amazon\"\n                            [(ngModel)]=\"this.dataApi.selectedBook.link_amazon\">\n                        </div>\n\n                    </div>\n\n                    <div class=\" form-group\">\n                        <label for=\"descripcion\" class=\"col-form-label\">Descripcion:</label>\n                        <textarea class=\"form-control\" name=\"descripcion\"\n                        [(ngModel)]=\"this.dataApi.selectedBook.descripcion\"></textarea>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" #btnClose data-dismiss=\"modal\">Close</button>\n                        <button type=\"submit\" class=\"btn btn-primary\">Save Book</button>\n                    </div>\n\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-primary\">\n    <a class=\"navbar-brand\" routerLink=\"/\">{{app_name}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbar\" aria-controls=\"mainNavbar\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"mainNavbar\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" *ngIf=\"isLogged\" >\n          <a class=\"nav-link\" routerLink=\"/offers\">Offers\n          </a>\n        </li>\n      \n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" *ngIf=\"!isLogged\">\n          <a class=\"nav-link\" routerLink=\"/user/register\">Register\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\n          <a class=\"nav-link\" routerLink=\"/user/profile\">Profile</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\n          <a class=\"nav-link\" routerLink=\"/admin/list-books\">List Books</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!isLogged\">\n          <a class=\"nav-link\" routerLink=\"/user/login\">Login\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\n          <a href=\"#\" class=\"nav-link\" (click)=\"onLogout()\">Logout\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/offers/offers.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/offers/offers.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentOffersOffersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"books\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let book of books\">\n          <div class=\"card_book\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <p>\n                  <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\">\n                </p>\n                <h4 routerLink=\"/book/{{book.id}}\" class=\"card-title\">{{book.titulo}}</h4>\n                <p class=\"card-text\">\n                  {{book.descripcion }}\n                </p>\n                <div class=\"container-precio-idioma\">\n                  <p class=\"badge badge-info\">\n                    {{book.precio}}€\n                  </p>\n                  <p class=\"badge badge-info\">\n                    {{book.idioma}}\n                  </p>\n                </div>\n                <a href=\"{{book.link_amazon}}\" class=\"btn btn-block btn-primary\" target=\"_blank\">Buy</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/page404/page404.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/page404/page404.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentPage404Page404ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>page404 works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/user/login/login.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/user/login/login.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentUserLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"login\" class=\"mb-5 mt-5\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n          <div class=\"card_login\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <form #formLogin=\"ngForm\"(submit)=\"onLogin()\">\n                  <h1 class=\"h3 mb-3 font-weight-normal\" *ngIf=\"!isError\">Login</h1>\n                  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                    Something is wrong!\n                  </div>\n                    <!-- EMAIL -->\n                  <div class=\"form-group\">\n                    <input [(ngModel)]=email type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" required >\n                  </div>\n\n                  <!-- CONTRASEÑA -->\n                  <div class=\"form-group\">\n                    <input [(ngModel)]=password type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n                  </div>\n\n                  <!-- LOGIN -->\n                  <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Login</button>\n                  <div class=\"form-group\">\n                    <a routerLink=\"/user/register\" class=\"form-control login-user\">Are you new ?</a>\n                  </div>\n\n                  <!-- FACEBOOK & GOOGLE-->\n                  <div class = \"form-group\">\n                    <button class= \"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\" > <span class=\"fa fa-facebook\"> </span>  FACEBOOK</button>\n\n                    <button class= \"btn btn-block btn-social btn-google\" (click)= \"onLoginGoogle()\"> <span class=\"fa fa-google\"></span> GOOGLE</button>\n\n                  </div>\n                  <a href=\"\" click = \"onLogout()\">Salir</a>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/user/profile/profile.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/user/profile/profile.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentUserProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"profile\" class=\"container\">\n    <div class=\"row mt-5\">\n      <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center card\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-sm-12 col-12 profile-header\"></div>\n        </div>\n        <div class=\"row user-details\">\n          <div class=\"col-12\">\n            <img src=\"{{user.photoUrl}}\" class=\"rounded-circle img-thumbnail\" alt=\"profile\">\n            <h5 *ngIf=\"providerId != 'password'\">{{user.name}}</h5>\n            <p>\n              {{user.email}}\n            </p>\n  \n            <hr>\n            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores suscipit itaque minima quae.</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/user/register/register.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/user/register/register.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentUserRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"register\" class=\"mb-5 mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n        <div class=\"card_register\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <form #formRegister=\"ngForm\" (ngSubmit)=\"onAddUser()\">\n                <h1 class=\"h3 mb-3 font-weight-normal\">Register</h1>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                  {{msgError}}\n                </div>\n\n\n                <!-- <div class=\"form-group\">\n                    <input type=\"text\" #name=\"ngModel\" name=\"name\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"user.name\" required minlength=\"4\"\n                      maxlength=\"15\">\n                  </div> -->\n\n                <!-- <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"name.touched && !name.valid\">\n                    <div *ngIf=\"name.errors.required\">Name is required</div>\n                    <div *ngIf=\"name.errors.minlength\">Name must be at least 4 characters</div>\n                  </div> -->\n\n\n                <div class=\"form-group\">\n                  <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\" required\n                    minlength=\"8\">\n                </div>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"email.touched && !email.valid\">\n                  <div *ngIf=\"email.errors.required\">Email is required</div>\n                  <div *ngIf=\"email.errors.minlength\">Email must be at least 8 characters</div>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\"\n                    [(ngModel)]=\"password\" required minlength=\"5\" maxlength=\"10\">\n                </div>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"password.touched && !password.valid\">\n                  <div *ngIf=\"password.errors.required\">Password is required</div>\n                  <div *ngIf=\"password.errors.minlength\">Password must be at least 5 characters</div>\n                </div>\n                <hr>\n                <!-- AGREGO CAMPO PARA SUBIR LA IMAGEN -->\n                <div class=\"form-group\">\n                  <h5>Seleccionar image:</h5>\n                  <input type=\"file\" accept=\".png, .jpg\" (change)=\"onUpload($event)\">\n                </div> <!-- La subida de imagen se realiza cuando se dispara el evento change -  se modifica-->\n\n                <div class=\"progress\">\n                  <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\n                  [style.width]=\"(uploadPercent |async)+'%'\">\n                    \n                  </div>\n                </div>\n                <br>\n                <hr>\n                <!-- PARA LA URL DE LA IMAGEN  -->\n                <input #imageUser type=\"hidden\" [value]=\"urlImage | async\"> <!-- Esto será ocultado al usuario con hidden -->\n        \n                <button *ngIf=\"urlImage | async; else btnDisabled\"  type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Register</button>\n                <!-- Si no hay una imagen cargada el boton de registrar estará inactivo -->\n                <ng-template #btnDisabled>\n\n                  <button type=\"submit\" disabled= true class=\"btn btn-lg btn-secondary btn-block\">Register</button>\n\n                </ng-template>\n                \n                <div class=\"form-group\">\n                  <a routerLink=\"/user/login\" class=\"form-control login-user\">Do you have account?</a>\n                </div>\n\n                \n                \n\n                <!-- FACEBOOK & GOOGLE-->\n                <div class=\"form-group\">\n                  <button class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\"> <span\n                      class=\"fa fa-facebook\"> </span> FACEBOOK</button>\n\n                  <button class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\"> <span\n                      class=\"fa fa-google\"></span> GOOGLE</button>\n\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var _component_offers_offers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/offers/offers.component */
    "./src/app/component/offers/offers.component.ts");
    /* harmony import */


    var _component_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/details-book/details-book.component */
    "./src/app/component/details-book/details-book.component.ts");
    /* harmony import */


    var _component_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/admin/list-books/list-books.component */
    "./src/app/component/admin/list-books/list-books.component.ts");
    /* harmony import */


    var _component_user_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/user/login/login.component */
    "./src/app/component/user/login/login.component.ts");
    /* harmony import */


    var _component_user_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component/user/register/register.component */
    "./src/app/component/user/register/register.component.ts");
    /* harmony import */


    var _component_page404_page404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./component/page404/page404.component */
    "./src/app/component/page404/page404.component.ts");
    /* harmony import */


    var _component_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./component/user/profile/profile.component */
    "./src/app/component/user/profile/profile.component.ts");

    var routes = [{
      path: '',
      component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'offers',
      component: _component_offers_offers_component__WEBPACK_IMPORTED_MODULE_5__["OffersComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }, {
      path: 'book/:id',
      component: _component_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_6__["DetailsBookComponent"]
    }, {
      path: 'admin/list-books',
      component: _component_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_7__["ListBooksComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }, {
      path: 'user/login',
      component: _component_user_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    }, {
      path: 'user/register',
      component: _component_user_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
    }, {
      path: 'user/profile',
      component: _component_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }, {
      path: '**',
      component: _component_page404_page404_component__WEBPACK_IMPORTED_MODULE_10__["Page404Component"]
    } // Las rutas estan colocadas en orden, ya que de esto depenede de que muestra
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'bookStore';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _component_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/admin/list-books/list-books.component */
    "./src/app/component/admin/list-books/list-books.component.ts");
    /* harmony import */


    var _component_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/details-book/details-book.component */
    "./src/app/component/details-book/details-book.component.ts");
    /* harmony import */


    var _component_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/hero/hero.component */
    "./src/app/component/hero/hero.component.ts");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var _component_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component/modal/modal.component */
    "./src/app/component/modal/modal.component.ts");
    /* harmony import */


    var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./component/navbar/navbar.component */
    "./src/app/component/navbar/navbar.component.ts");
    /* harmony import */


    var _component_offers_offers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./component/offers/offers.component */
    "./src/app/component/offers/offers.component.ts");
    /* harmony import */


    var _component_user_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./component/user/login/login.component */
    "./src/app/component/user/login/login.component.ts");
    /* harmony import */


    var _component_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./component/user/profile/profile.component */
    "./src/app/component/user/profile/profile.component.ts");
    /* harmony import */


    var _component_user_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./component/user/register/register.component */
    "./src/app/component/user/register/register.component.ts");
    /* harmony import */


    var _component_page404_page404_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./component/page404/page404.component */
    "./src/app/component/page404/page404.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _component_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_5__["ListBooksComponent"], _component_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_6__["DetailsBookComponent"], _component_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _component_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _component_offers_offers_component__WEBPACK_IMPORTED_MODULE_11__["OffersComponent"], _component_user_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _component_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _component_user_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _component_page404_page404_component__WEBPACK_IMPORTED_MODULE_15__["Page404Component"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"]],
      providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestore"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/component/admin/list-books/list-books.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/component/admin/list-books/list-books.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentAdminListBooksListBooksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9saXN0LWJvb2tzL2xpc3QtYm9va3MuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/admin/list-books/list-books.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/component/admin/list-books/list-books.component.ts ***!
    \********************************************************************/

  /*! exports provided: ListBooksComponent */

  /***/
  function srcAppComponentAdminListBooksListBooksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListBooksComponent", function () {
      return ListBooksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/data-api.service */
    "./src/app/services/data-api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ListBooksComponent =
    /*#__PURE__*/
    function () {
      function ListBooksComponent(dataApi, authService) {
        _classCallCheck(this, ListBooksComponent);

        this.dataApi = dataApi;
        this.authService = authService;
        this.isAdmin = null;
        this.userUid = null;
      }

      _createClass(ListBooksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getListBooks();
          this.getCurrentUser();
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          var _this = this;

          this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
              _this.userUid = auth.uid;

              _this.authService.isUserAdmin(_this.userUid).subscribe(function (userRole) {
                _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin'); // this.isAdmin = true;
              });
            }
          });
        }
        /*Metodo para comprobar si el usuario es admin o no */

      }, {
        key: "getListBooks",
        value: function getListBooks() {
          var _this2 = this;

          this.dataApi.getAllBooks().subscribe(function (books) {
            _this2.books = books;
          });
        }
      }, {
        key: "onDeleteBook",
        value: function onDeleteBook(idBook) {
          console.log('Delete Book');
          var confirmacion = confirm('Estas seguro de borrar?');

          if (confirmacion) {
            this.dataApi.deleteBook(idBook);

            var _confirmacion = console.log('Se ha eliminado correctamente!');
          }
        }
      }, {
        key: "onPreUpdateBook",
        value: function onPreUpdateBook(book) {
          console.log('BOOK', book);
          this.dataApi.selectedBook = Object.assign({}, book);
        }
        /*Este metodo me permitira traer el id a la barra superior */

      }]);

      return ListBooksComponent;
    }();

    ListBooksComponent.ctorParameters = function () {
      return [{
        type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    ListBooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-list-books',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-books.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/list-books/list-books.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-books.component.css */
      "./src/app/component/admin/list-books/list-books.component.css")).default]
    })], ListBooksComponent);
    /***/
  },

  /***/
  "./src/app/component/details-book/details-book.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/component/details-book/details-book.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentDetailsBookDetailsBookComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p.card-text{\r\n\r\n    text-align: justify;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2RldGFpbHMtYm9vay9kZXRhaWxzLWJvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZGV0YWlscy1ib29rL2RldGFpbHMtYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicC5jYXJkLXRleHR7XHJcblxyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/component/details-book/details-book.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/component/details-book/details-book.component.ts ***!
    \******************************************************************/

  /*! exports provided: DetailsBookComponent */

  /***/
  function srcAppComponentDetailsBookDetailsBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsBookComponent", function () {
      return DetailsBookComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/data-api.service */
    "./src/app/services/data-api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DetailsBookComponent =
    /*#__PURE__*/
    function () {
      function DetailsBookComponent(dataApi, route) {
        _classCallCheck(this, DetailsBookComponent);

        this.dataApi = dataApi;
        this.route = route;
        this.book = {};
      }

      _createClass(DetailsBookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var idBook = this.route.snapshot.params['id'];
          this.getDetails(idBook);
        }
      }, {
        key: "getDetails",
        value: function getDetails(idBook) {
          var _this3 = this;

          this.dataApi.getOneBook(idBook).subscribe(function (book) {
            _this3.book = book;
          });
        }
      }]);

      return DetailsBookComponent;
    }();

    DetailsBookComponent.ctorParameters = function () {
      return [{
        type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    DetailsBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-details-book',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./details-book.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/details-book/details-book.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./details-book.component.css */
      "./src/app/component/details-book/details-book.component.css")).default]
    })], DetailsBookComponent);
    /***/
  },

  /***/
  "./src/app/component/hero/hero.component.css":
  /*!***************************************************!*\
    !*** ./src/app/component/hero/hero.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentHeroHeroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/hero/hero.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/hero/hero.component.ts ***!
    \**************************************************/

  /*! exports provided: HeroComponent */

  /***/
  function srcAppComponentHeroHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
      return HeroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeroComponent =
    /*#__PURE__*/
    function () {
      function HeroComponent() {
        _classCallCheck(this, HeroComponent);
      }

      _createClass(HeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeroComponent;
    }();

    HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hero',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hero.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/hero/hero.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hero.component.css */
      "./src/app/component/hero/hero.component.css")).default]
    })], HeroComponent);
    /***/
  },

  /***/
  "./src/app/component/home/home.component.css":
  /*!***************************************************!*\
    !*** ./src/app/component/home/home.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/home/home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/home/home.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/data-api.service */
    "./src/app/services/data-api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(dataApi) {
        _classCallCheck(this, HomeComponent);

        this.dataApi = dataApi;
        this.books = [];
        this.book = '';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.dataApi.getAllBooks().subscribe(function (books) {
            console.log('BOOKS', books);
            _this4.books = books;
          });
          /*Recuperamos desde nuestro servicio los libros
            
          */
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/component/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/component/modal/modal.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/component/modal/modal.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentModalModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/modal/modal.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/component/modal/modal.component.ts ***!
    \****************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppComponentModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/data-api.service */
    "./src/app/services/data-api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ModalComponent =
    /*#__PURE__*/
    function () {
      function ModalComponent(dataApi) {
        _classCallCheck(this, ModalComponent);

        this.dataApi = dataApi;
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //Angular ha agregado un cambio por lo que viewChild necesita dos argumentos, se utiliza { static: true } como segundo argumento, de otra forma solo lanzará error

      }, {
        key: "onSaveBook",
        value: function onSaveBook(bookForm) {
          //nuevo libro
          //
          console.log('bookForm.value.id', bookForm.value.id);

          if (bookForm.value.id === null) {
            //nuevo libro
            bookForm.value.userUid = this.userUid; //cuando

            this.dataApi.addBook(bookForm.value);
          } else {
            //update  
            this.dataApi.updateBook(bookForm.value);
          }

          bookForm.resetForm(); //me permite limpiar el formulario

          this.btnClose.nativeElement.click();
        }
        /*con este metodo puedo ingresar datos al modal y agregar un libro */

      }]);

      return ModalComponent;
    }();

    ModalComponent.ctorParameters = function () {
      return [{
        type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('btnClose', {
      static: true
    })], ModalComponent.prototype, "btnClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ModalComponent.prototype, "userUid", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/modal/modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal.component.css */
      "./src/app/component/modal/modal.component.css")).default]
    })], ModalComponent);
    /***/
  },

  /***/
  "./src/app/component/navbar/navbar.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/component/navbar/navbar.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/navbar/navbar.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/navbar/navbar.component.ts ***!
    \******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(authService, afsAuth) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.afsAuth = afsAuth;
        this.app_name = 'BookStore'; //Declaro mi navbar y lo muestro

        this.isLogged = false; //me permite saber si el usuario esta logeado o no // por defecto es false
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCurrentUser();
        } //metodo que controla si el usuario esta logeado o no

      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          var _this5 = this;

          this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
              console.log('user logged');
              _this5.isLogged = true;
            } else {
              console.log('NOT user logged');
              _this5.isLogged = false;
            }
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.afsAuth.auth.signOut();
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/component/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/component/offers/offers.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/component/offers/offers.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentOffersOffersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9vZmZlcnMvb2ZmZXJzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/offers/offers.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/offers/offers.component.ts ***!
    \******************************************************/

  /*! exports provided: OffersComponent */

  /***/
  function srcAppComponentOffersOffersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersComponent", function () {
      return OffersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/data-api.service */
    "./src/app/services/data-api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OffersComponent =
    /*#__PURE__*/
    function () {
      function OffersComponent(dataApi) {
        _classCallCheck(this, OffersComponent);

        this.dataApi = dataApi;
      }

      _createClass(OffersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getOffers();
          console.log('OFERTAS', this.books);
        }
      }, {
        key: "getOffers",
        value: function getOffers() {
          var _this6 = this;

          this.dataApi.getAllBooksOffers().subscribe(function (offers) {
            return _this6.books = offers;
          });
        }
      }]);

      return OffersComponent;
    }();

    OffersComponent.ctorParameters = function () {
      return [{
        type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"]
      }];
    };

    OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-offers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/offers/offers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offers.component.css */
      "./src/app/component/offers/offers.component.css")).default]
    })], OffersComponent);
    /***/
  },

  /***/
  "./src/app/component/page404/page404.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/component/page404/page404.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentPage404Page404ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wYWdlNDA0L3BhZ2U0MDQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/page404/page404.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/component/page404/page404.component.ts ***!
    \********************************************************/

  /*! exports provided: Page404Component */

  /***/
  function srcAppComponentPage404Page404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page404Component", function () {
      return Page404Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Page404Component =
    /*#__PURE__*/
    function () {
      function Page404Component() {
        _classCallCheck(this, Page404Component);
      }

      _createClass(Page404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Page404Component;
    }();

    Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page404',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page404.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/page404/page404.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page404.component.css */
      "./src/app/component/page404/page404.component.css")).default]
    })], Page404Component);
    /***/
  },

  /***/
  "./src/app/component/user/login/login.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/component/user/login/login.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentUserLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-control.login-user {\r\n  border: 0 solid #fff !important;\r\n}\r\n\r\n.btn-social {\r\n  position: relative;\r\n  \r\n  text-align: center;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n\r\n  color: #fff;\r\n  border-color: rgba(0, 0, 0, 0, 2);\r\n}\r\n\r\n.btn-facebook {\r\n  background: #225ddb;\r\n}\r\n\r\n.btn-google {\r\n  background: #cf0000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCOztFQUV2QixXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wubG9naW4tdXNlciB7XHJcbiAgYm9yZGVyOiAwIHNvbGlkICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCwgMik7XHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQ6ICMyMjVkZGI7XHJcbn1cclxuXHJcbi5idG4tZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kOiAjY2YwMDAwO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/component/user/login/login.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/component/user/login/login.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentUserLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(afAuth, router, authService) {
        _classCallCheck(this, LoginComponent);

        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.email = '';
        this.password = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //LOGIN

      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this7 = this;

          this.authService.loginEmailUser(this.email, this.password).then(function (res) {
            _this7.onLoginRedirect();
          }).catch(function (err) {
            return console.log('err', err.message);
          });
        } //LOGIN GOOGLE

      }, {
        key: "onLoginGoogle",
        value: function onLoginGoogle() {
          var _this8 = this;

          this.authService.loginGoogleUser().then(function (res) {
            _this8.onLoginRedirect();
          }).catch(function (err) {
            return console.log('err', err.message);
          });
          /*Lo que se ha hecho es llevar el login a servicio, se puede llamar a cualquier otra parte de la app a traves del service, nos devuelve una respuesta*/
        } //LOGIN FACEBOOK

      }, {
        key: "onLoginFacebook",
        value: function onLoginFacebook() {
          var _this9 = this;

          this.authService.loginFacebookUser().then(function (res) {
            _this9.onLoginRedirect();
          }).catch(function (err) {
            return console.log('err', err.message);
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logoutUser();
        }
        /**
        Lo que se hace en aqui es desloguear al usuario
        */

      }, {
        key: "onLoginRedirect",
        value: function onLoginRedirect() {
          this.router.navigate(['admin/list-books']);
        }
        /**
        Lo que se hace aqui es crear una ruta de redireccion, esto hace que con cualquiera de los metodos que utilice para entrar me redirecciona a la pagina elegida. La ventaja de esto es que si hay que modificar se hace una sola linea y no en 3 o demas metodos de logueo
        */

      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/user/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/component/user/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/component/user/profile/profile.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/component/user/profile/profile.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentUserProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-section {\r\n    border: 1px solid #007bff;\r\n    background: #fff;\r\n  }\r\n  .profile-header {\r\n    background: #007bff;\r\n    height: 150px;\r\n  }\r\n  .user-detail {\r\n    margin: -50px 0 30px 0;\r\n  }\r\n  img {\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n  .user-details h5 {\r\n    margin: 15px 0 5px 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2VjdGlvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbiAgLnByb2ZpbGUtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gIH1cclxuICAudXNlci1kZXRhaWwge1xyXG4gICAgbWFyZ2luOiAtNTBweCAwIDMwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIC51c2VyLWRldGFpbHMgaDUge1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgNXB4IDA7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/component/user/profile/profile.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/component/user/profile/profile.component.ts ***!
    \*************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentUserProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(authService) {
        _classCallCheck(this, ProfileComponent);

        this.authService = authService;
        this.user = {
          name: '',
          email: '',
          photoUrl: '',
          roles: {}
        };
        this.providerId = 'null';
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.authService.isAuth().subscribe(function (user) {
            if (user) {
              _this10.user.name = user.displayName;
              _this10.user.email = user.email;
              _this10.user.photoUrl = user.photoURL;
              _this10.providerId = user.providerData[0].providerId;
            }
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/user/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/component/user/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/component/user/register/register.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/component/user/register/register.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentUserRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-control.login-user {\r\n    border: 0px solid #fff !important;\r\n  }\r\n  .btn-social {\r\n    position: relative;\r\n    \r\n    text-align: center;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  \r\n    color: #fff;\r\n    border-color: rgba(0, 0, 0, 0, 2);\r\n  }\r\n  .btn-facebook {\r\n    background: #225ddb;\r\n  }\r\n  .btn-google {\r\n    background: #cf0000;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztFQUNuQztFQUNBO0lBQ0Usa0JBQWtCOztJQUVsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7O0lBRXZCLFdBQVc7SUFDWCxpQ0FBaUM7RUFDbkM7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wubG9naW4tdXNlciB7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG4tc29jaWFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAsIDIpO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjVkZGI7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZ29vZ2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICNjZjAwMDA7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/component/user/register/register.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/component/user/register/register.component.ts ***!
    \***************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentUserRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(router, authService, storage) {
        _classCallCheck(this, RegisterComponent);

        this.router = router;
        this.authService = authService;
        this.storage = storage;
        this.email = '';
        this.password = '';
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onUpload",
        value: function onUpload(e) {
          var _this11 = this;

          //console.log('subir', e.target.files[0]);
          var id = Math.random().toString(36).substring(2);
          var file = e.target.files[0];
          var filePath = "uploads/profile_".concat(id);
          var ref = this.storage.ref(filePath);
          var task = this.storage.upload(filePath, file);
          this.uploadPercent = task.percentageChanges();
          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            return _this11.urlImage = ref.getDownloadURL();
          })).subscribe();
        }
        /*Evento para agregar imagen. "e" es el evento, target.files[0] selecciona el primer elemento (ya que lo que devuelve es un array) para darnos cuenta de esto solo hay que ver la herramienta del navegador, donde sale el tipo de imagen (png,jpg) y el tamaño de la misma
        
        Generamos una constante "id" con MathRandom
        file es donde esta el archivo (array)
        filePath se crea una carpeta y con profile y el id le dan un nombre aleatorio (para que no se suban con el mismo nombre) IMPORTANTE -Se deben poner entre comillas literales-
        ref es la referencia y le pasamos la direccion o nombre del fechero
        task es donde se realiza la subida de fichero se le pasa la ruta y el fichero a subir
        */

      }, {
        key: "onAddUser",
        value: function onAddUser(email, password) {
          var _this12 = this;

          this.authService.registerUser(this.email, this.password).then(function (res) {
            _this12.authService.isAuth().subscribe(function (user) {
              if (user) {
                user.updateProfile({
                  displayName: '',
                  photoURL: _this12.inputImageUser.nativeElement.value
                }).then(function () {
                  _this12.router.navigate(['admin/list-books']);
                }).catch(function (error) {
                  return console.log('error', error);
                });
              }
            });
          }).catch(function (err) {
            return console.log('err', err.message);
          });
        } //LOGIN GOOGLE

      }, {
        key: "onLoginGoogle",
        value: function onLoginGoogle() {
          var _this13 = this;

          this.authService.loginGoogleUser().then(function (res) {
            _this13.onLoginRedirect();
          }).catch(function (err) {
            return console.log('err', err.message);
          });
          /*Lo que se ha hecho es llevar el login a servicio, se puede llamar a cualquier otra parte de la app a traves del service, nos devuelve una respuesta*/
        } //LOGIN FACEBOOK

      }, {
        key: "onLoginFacebook",
        value: function onLoginFacebook() {
          var _this14 = this;

          this.authService.loginFacebookUser().then(function (res) {
            _this14.onLoginRedirect();
          }).catch(function (err) {
            return console.log('err', err.message);
          });
        }
      }, {
        key: "onLoginRedirect",
        value: function onLoginRedirect() {
          this.router.navigate(['admin/list-books']);
        }
        /**
        Lo que se hace aqui es crear una ruta de redireccion, esto hace que con cualquiera de los metodos que utilice para entrar me redirecciona a la pagina elegida. La ventaja de esto es que si hay que modificar se hace una sola linea y no en 3 o demas metodos de logueo
        */

      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('imageUser', {
      static: true
    })], RegisterComponent.prototype, "inputImageUser", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/user/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/component/user/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(afsAuth, router) {
        _classCallCheck(this, AuthGuard);

        this.afsAuth = afsAuth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this15 = this;

          return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (authState) {
            return !!authState;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (auth) {
            if (!auth) {
              _this15.router.navigate(['/user/login']);
            }
          }));
          /*Permite ocultar zonas de la pagina para usuarios no logados, si quisiera entrar a la lista de libro sin loguear lo redireccionará al loguin */
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__); //import { from } from 'rxjs';
    //REGISTRO DE USUARIOS


    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(afsAuth, afs) {
        _classCallCheck(this, AuthService);

        this.afsAuth = afsAuth;
        this.afs = afs;
      } //Para trabajar con firebase


      _createClass(AuthService, [{
        key: "registerUser",
        value: function registerUser(email, pass) {
          var _this16 = this;

          return new Promise(function (resolve, reject) {
            _this16.afsAuth.auth.createUserWithEmailAndPassword(email, pass).then(function (userData) {
              resolve(userData), _this16.updateUserData(userData.user);
            }).catch(function (err) {
              return reject(err);
            });
          });
        }
        /*cuando un nuevo usuario se registre se le da un rol -  */

      }, {
        key: "loginEmailUser",
        value: function loginEmailUser(email, pass) {
          var _this17 = this;

          return new Promise(function (resolve, reject) {
            _this17.afsAuth.auth.signInWithEmailAndPassword(email, pass).then(function (userData) {
              return resolve(userData);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "loginFacebookUser",
        value: function loginFacebookUser() {
          var _this18 = this;

          return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider()).then(function (credential) {
            return _this18.updateUserData(credential.user);
          });
        }
      }, {
        key: "loginGoogleUser",
        value: function loginGoogleUser() {
          var _this19 = this;

          return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider()).then(function (credential) {
            return _this19.updateUserData(credential.user);
          });
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          return this.afsAuth.auth.signOut();
        }
      }, {
        key: "isAuth",
        value: function isAuth() {
          return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (auth) {
            return auth;
          }));
        }
      }, {
        key: "updateUserData",
        value: function updateUserData(user) {
          var userRef = this.afs.doc("users/".concat(user.uid));
          var data = {
            id: user.uid,
            email: user.email,
            roles: {
              admin: true
            }
          };
          return userRef.set(data, {
            merge: true
          });
        }
        /*
        cuando se cree una cuenta se le pasará el usuario*/

      }, {
        key: "isUserAdmin",
        value: function isUserAdmin(userUid) {
          return this.afs.doc("users/".concat(userUid)).valueChanges();
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/data-api.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/data-api.service.ts ***!
    \**********************************************/

  /*! exports provided: DataApiService */

  /***/
  function srcAppServicesDataApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataApiService", function () {
      return DataApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js"); //import { BADHINTS } from 'dns';


    var DataApiService =
    /*#__PURE__*/
    function () {
      function DataApiService(afs) {
        _classCallCheck(this, DataApiService);

        this.afs = afs;
        this.selectedBook = {
          id: null
        }; // this.booksCollection = afs.collection<BookInterface>('books');
        // this.books = this.booksCollection.valueChanges();
      }

      _createClass(DataApiService, [{
        key: "getAllBooks",
        value: function getAllBooks() {
          this.booksCollection = this.afs.collection('books');
          this.booksCollection = this.afs.collection('books');
          return this.books = this.booksCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (action) {
              var data = action.payload.doc.data();
              data.id = action.payload.doc.id;
              return data;
            });
          }));
        }
      }, {
        key: "getAllBooksOffers",
        value: function getAllBooksOffers() {
          this.booksCollection = this.afs.collection('books', function (ref) {
            return ref.where('oferta', '==', '1');
          });
          return this.books = this.booksCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (action) {
              var data = action.payload.doc.data();
              data.id = action.payload.doc.id;
              return data;
            });
          }));
        } //Me permite mostrar solo los librosd que se encuentran en oferta (hace un filtrado)

      }, {
        key: "getOneBook",
        value: function getOneBook(idBook) {
          this.bookDoc = this.afs.doc("books/".concat(idBook));
          return this.book = this.bookDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
            if (action.payload.exists === false) {
              return null;
            } else {
              var data = action.payload.data();
              data.id = action.payload.id;
              return data;
            }
          }));
        }
      }, {
        key: "addBook",
        value: function addBook(book) {
          this.booksCollection.add(book);
        }
      }, {
        key: "updateBook",
        value: function updateBook(book) {
          var idBook = book.id;
          this.bookDoc = this.afs.doc("books/".concat(idBook));
          this.bookDoc.update(book);
        }
      }, {
        key: "deleteBook",
        value: function deleteBook(idBook) {
          this.bookDoc = this.afs.doc("books/".concat(idBook));
          this.bookDoc.delete();
        }
      }]);

      return DataApiService;
    }();

    DataApiService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }];
    };

    DataApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], DataApiService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyAKY5jvoBuExbb1gLipi--xHaiEpQlP0Gc",
        authDomain: "bookstore-bc9d8.firebaseapp.com",
        databaseURL: "https://bookstore-bc9d8.firebaseio.com",
        projectId: "bookstore-bc9d8",
        storageBucket: "bookstore-bc9d8.appspot.com",
        messagingSenderId: "970944781132",
        appId: "1:970944781132:web:9130a5c5a9a3d466dd4de9",
        measurementId: "G-XL4XMQJ9DQ"
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\pablo\Desktop\Facebook\bookStore\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map