/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_components_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/components.scss */ \"./src/scss/components.scss\");\n/* harmony import */ var _scss_components_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_components_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vue_dropzone_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue/dropzone.vue */ \"./src/vue/dropzone.vue.js\");\n/* harmony import */ var _vue_dropzone_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vue_dropzone_vue__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vue_gallery_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vue/gallery.vue */ \"./src/vue/gallery.vue.js\");\n/* harmony import */ var _vue_gallery_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vue_gallery_vue__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _vue_user_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vue/user.vue */ \"./src/vue/user.vue.js\");\n/* harmony import */ var _vue_user_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vue_user_vue__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _vue_register_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vue/register.vue */ \"./src/vue/register.vue.js\");\n/* harmony import */ var _vue_register_vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vue_register_vue__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _vue_create_post_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vue/create-post.vue */ \"./src/vue/create-post.vue.js\");\n/* harmony import */ var _vue_create_post_vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vue_create_post_vue__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n\n(function() {\n\n\n    //State Management\n\n    var store = {\n        // debug: true,\n        // state: {\n        //     message: 'Hello!'\n        // },\n        // setMessageAction(newValue) {\n        //     if (this.debug) console.log('setMessageAction triggered with', newValue)\n        //     this.state.message = newValue\n        // },\n        // clearMessageAction() {\n        //     if (this.debug) console.log('clearMessageAction triggered')\n        //     this.state.message = ''\n        // }\n\n        uploadApi: ''\n    }\n\n\n\n    var app = new Vue({\n        el: '#app',\n        data: {\n            message: 'Hello Vue!'\n        }\n    });\n\n\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/components.scss":
/*!**********************************!*\
  !*** ./src/scss/components.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/components.scss?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ }),

/***/ "./src/vue/create-post.vue.js":
/*!************************************!*\
  !*** ./src/vue/create-post.vue.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const createPost = `\n<div class=\"card\">\n<div class=\"card-header\">\n    <h4>Write Your Post</h4>\n</div>\n<div class=\"card-body\">\n    <form id=\"create-post\" method=\"POST\" action=\"/admin/post/create\">\n        <input type=\"hidden\" name=\"csrf_token\" value=\"{{ csrf_token }}\">\n        <div class=\"form-group row mb-4\">\n            <label class=\"col-form-label col-12\">Title</label>\n            <div class=\"col-sm-12\">\n                    <input name=\"title\" autofocus=\"true\" type=\"text\" class=\"form-control\">\n                </div>\n            </div>\n            <div class=\"form-group row mb-4\">\n                <label class=\"col-form-label col-12\">Permalink</label>\n                <div class=\"col-sm-12\">\n                    <input id=\"permalink\" name=\"permalink\" type=\"text\" class=\"form-control\">\n                </div>\n            </div>\n            <div class=\"form-group row mb-4\">\n                <label class=\"col-form-label col-12\">Category</label>\n                <div class=\"col-sm-12\">\n                    <select name=\"category\" class=\"form-control selectric\">\n                        <option>Uncategorized</option>\n                        <option>Tech</option>\n                        <option>News</option>\n                        <option>Political</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"form-group row mb-4\">\n                <label class=\"col-form-label col-12\">Summary Note</label>\n                <div class=\"col-sm-12\">\n                    <textarea name=\"summary\" class=\"form-control\"  style=\"height:130px\">{{ post.summary }}</textarea>\n                </div>\n            </div>\n            <div class=\"form-group row mb-4\">\n                <label class=\"col-form-label col-12\">Content</label>\n                <div class=\"col-sm-12\">\n                    <textarea name=\"body\" class=\"summernote-blog\"></textarea>\n                </div>\n            </div>\n            \n            <div class=\"form-group row mb-4\">\n                <label class=\"col-form-label col-12\"></label>\n                <div class=\"col-sm-12\">\n                    <button type=\"submit\" class=\"btn btn-primary\">Create Post</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n`;\n\nVue.component('create-post', {\n    template: createPost\n})\n\n//# sourceURL=webpack:///./src/vue/create-post.vue.js?");

/***/ }),

/***/ "./src/vue/dropzone.vue.js":
/*!*********************************!*\
  !*** ./src/vue/dropzone.vue.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const dropzoneTemplate = `\n<div class=\"card\">\n    <div class=\"card-header\">\n    <h4>Upload Images</h4>\n    </div>\n    <div class=\"card-body\">\n    <form action=\"#\" class=\"dropzone\" id=\"mydropzone\">\n        <div class=\"fallback\">\n        <input name=\"file\" type=\"file\" multiple />\n        </div>\n    </form>\n    </div>\n</div>\n`;\n\n// Define a new component called todo-item\nVue.component('dropzone', {\n    template: dropzoneTemplate,\n    created: function() {\n\n    },\n    mounted: function() {\n        let _ = this;\n\n        const myDropzone = $(\"#mydropzone\").dropzone({\n            uploadMultiple: true,\n            headers: {\n                'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n            },\n            url: \"/api/upload\",\n            success: function(data, files) {\n                // console.log(files);\n                // let url_file = '/uploads/' + files[0].filename;\n                // $('.summernote-blog').summernote('editor.insertImage', url_file, files[0].filename);\n                // $('.close').click();\n                _.$root.$emit('updateGallery', files);\n            },\n            complete: function(file) {\n                // _.$root.$emit('updateGallery', file);\n                this.removeFile(file);\n            }\n        });\n\n        myDropzone.on('complete', function(file) {\n            // myDropzone.removeFile(file);\n            console.log('removing all files');\n            myDropzone.removeAllFiles();\n        });\n    }\n});\n\n//# sourceURL=webpack:///./src/vue/dropzone.vue.js?");

/***/ }),

/***/ "./src/vue/gallery.vue.js":
/*!********************************!*\
  !*** ./src/vue/gallery.vue.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const galleryTemp = `\n<div class=\"card\">\n    <!--\n    <div class=\"card-header\">\n        <h4>Gallery</h4> \n    </div>\n    -->\n    <div class=\"card-body\">\n        <div class=\"gallery gallery-md\">\n            <div v-for=\"img in images\" :data-image=\"img.filepath\" data-title=\"Image 1\" class=\"gallery-item\" :href=\"img.filepath\" title=\"Image 1\" :style=\"'background-image: url(' + img.filepath  + ');'\"></div>\n        </div>\n    </div>\n</div>\n`;\n\nVue.component('gallery', {\n    template: galleryTemp,\n    data: function() {\n        return {\n            images: [\n\n            ]\n        }\n    },\n    mounted() {\n        this.getImages();\n    },\n    created() {\n        let _ = this;\n        _.$root.$on('updateGallery', (files) => {\n            // files.forEach(img_file => {\n            //     debugger;\n            //     this.images.push(img_file);\n            // });\n\n            _.getImages();\n\n            // debugger;\n            // this.images = [\n            //     { filename: '/assets/img/news/img01.jpg' }\n            // ];\n\n\n            $(\".gallery .gallery-item\").each(function() {\n                var me = $(this);\n\n                me.attr('href', me.data('image'));\n                me.attr('title', me.data('title'));\n                if (me.parent().hasClass('gallery-fw')) {\n                    me.css({\n                        height: me.parent().data('item-height'),\n                    });\n                    me.find('div').css({\n                        lineHeight: me.parent().data('item-height') + 'px'\n                    });\n                }\n                me.css({\n                    backgroundImage: 'url(\"' + me.data('image') + '\")'\n                });\n            });\n\n        });\n\n    },\n    methods: {\n        getImages: function() {\n            let _ = this;\n            axios.get('/api/media/all').then(res => {\n                // res.data.map(img => img.filename = '/' + img.filename);\n                _.images = res.data;\n                // console.log(res.data);\n            });\n        }\n    }\n});\n\n//# sourceURL=webpack:///./src/vue/gallery.vue.js?");

/***/ }),

/***/ "./src/vue/register.vue.js":
/*!*********************************!*\
  !*** ./src/vue/register.vue.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const registerTemp = `\n<div class=\"col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2\">\n<div class=\"login-brand\">\n  \n</div>\n\n<div class=\"card card-primary\">\n  <div class=\"card-header\"><h4>Register</h4></div>\n\n  <div class=\"card-body\">\n    <form method=\"POST\">\n        <input type=\"hidden\" name=\"csrf_token\" :value=\"csrf_token\">\n      <div class=\"row\">\n        <div class=\"form-group col-6\">\n          <label for=\"first_name\">First Name</label>\n          <input id=\"first_name\" type=\"text\" class=\"form-control\" name=\"first_name\" autofocus>\n        </div>\n        <div class=\"form-group col-6\">\n          <label for=\"last_name\">Last Name</label>\n          <input id=\"last_name\" type=\"text\" class=\"form-control\" name=\"last_name\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\">\n        <div class=\"invalid-feedback\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-6\">\n          <label for=\"password\" class=\"d-block\">Password</label>\n          <input id=\"password\" type=\"password\" class=\"form-control pwstrength\" data-indicator=\"pwindicator\" name=\"password\">\n          <div id=\"pwindicator\" class=\"pwindicator\">\n            <div class=\"bar\"></div>\n            <div class=\"label\"></div>\n          </div>\n        </div>\n        <div class=\"form-group col-6\">\n          <label for=\"password2\" class=\"d-block\">Password Confirmation</label>\n          <input id=\"password2\" type=\"password\" class=\"form-control\" name=\"password-confirm\">\n        </div>\n      </div>\n\n      \n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">\n          Register\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"simple-footer\">\n  Copyright &copy; Phikigai 2019\n</div>\n</div>\n`;\n\nVue.component('register', {\n    template: registerTemp,\n    data: function() {\n        return {\n            'csrf_token': $('meta[name=\"csrf-token\"]').attr('content')\n        }\n    }\n});\n\n//# sourceURL=webpack:///./src/vue/register.vue.js?");

/***/ }),

/***/ "./src/vue/user.vue.js":
/*!*****************************!*\
  !*** ./src/vue/user.vue.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const userTemp = `\n<div class=\"card author-box card-primary\">\n    <div class=\"card-body\">\n    <div class=\"author-box-left\">\n        <img alt=\"image\" src=\"/assets/img/avatar/avatar-1.png\" class=\"rounded-circle author-box-picture\">\n        <div class=\"clearfix\"></div>\n        <!-- <a href=\"#\" class=\"btn btn-primary mt-3 follow-btn\" data-follow-action=\"alert('follow clicked');\" data-unfollow-action=\"alert('unfollow clicked');\">Follow</a> -->\n    </div>\n    <div class=\"author-box-details\">\n        <div class=\"author-box-name\">\n            <a href=\"#\"> {{ firstname }} {{ lastname }}</a>\n        </div>\n        <div class=\"author-box-job\">Photographer</div>\n        <div class=\"author-box-description\">\n        <p>{{ profile.description }}</p>\n        </div>\n\n        <div class=\"\">\n            <div v-for=\"category in profiles\" class=\"badge badge-primary mt-1 mb-1 ml-1 mr-1\">{{ category.name }}</div>\n        </div>\n\n\n        <!--\n        \n        <div class=\"mb-2 mt-3\"><div class=\"text-small font-weight-bold\">Follow {{ firstname }}</div></div>\n       \n        \n        <a v-if=\"profile.facebook_url\" :href=\"profile.facebook_url\" class=\"btn btn-social-icon mr-1 btn-facebook\">\n            <i class=\"fab fa-facebook-f\"></i>\n        </a>\n        <a v-if=\"profile.twitter_url\"  :href=\"profile.twitter_url\" class=\"btn btn-social-icon mr-1 btn-twitter\">\n            <i class=\"fab fa-twitter\"></i>\n        </a>\n        <a v-if=\"profile.instagram_url\" :href=\"profile.instagram_url\" class=\"btn btn-social-icon mr-1 btn-instagram\">\n            <i class=\"fab fa-instagram\"></i>\n        </a>\n        <a v-if=\"profile.website_url\" :href=\"profile.website_url\" class=\"btn btn-social-icon mr-1 btn-instagram\">\n            <i class=\"far fa-browser\"></i>\n        </a>\n        -->\n\n    </div>\n    </div>\n</div>\n\n`;\n\nVue.component('user-profile', {\n    template: userTemp,\n    data: function() {\n        return {\n            profile: null\n        }\n    },\n    props: ['firstname', 'lastname', 'categories', 'user'],\n    created: function() {\n        this.profiles = JSON.parse(this.categories);\n\n        this.profile = JSON.parse(this.user);\n\n        console.log(this.profile);\n    }\n});\n\n//# sourceURL=webpack:///./src/vue/user.vue.js?");

/***/ })

/******/ });