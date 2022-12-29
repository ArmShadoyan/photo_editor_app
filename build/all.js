/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sizeBlock\": () => (/* binding */ sizeBlock)\n/* harmony export */ });\n/* harmony import */ var _modules_globalBlockInner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/globalBlockInner */ \"./src/js/modules/globalBlockInner.js\");\n/* harmony import */ var _modules_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/upload */ \"./src/js/modules/upload.js\");\n/* harmony import */ var _modules_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/db */ \"./src/js/modules/db.js\");\n/* harmony import */ var _modules_adjusts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/adjusts */ \"./src/js/modules/adjusts.js\");\n/* harmony import */ var _modules_sizeBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sizeBlock */ \"./src/js/modules/sizeBlock.js\");\n/* harmony import */ var _modules_rotateFlip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/rotateFlip */ \"./src/js/modules/rotateFlip.js\");\nconst globalBlock = document.querySelector(\"#globalBlock\");\r\n\r\n\r\n// imported functions\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_globalBlockInner__WEBPACK_IMPORTED_MODULE_0__.printUploadBlock)(globalBlock);\r\n(0,_modules_globalBlockInner__WEBPACK_IMPORTED_MODULE_0__.printEditingBlockDefault)(globalBlock);\r\n//Dom API s\r\nconst resetAllButton = document.querySelector(\".resetAllButton\");\r\nconst forEditImg = document.querySelector(\".forEditImg\");\r\nconst adjusts = document.querySelectorAll(\".adjusts\");\r\nconst uploadLabel = document.querySelector(\".uploadLabel\");\r\nconst uploadInput = document.getElementById(\"uploadInput\");\r\nlet editingBlockInner = document.querySelector(\".editingBlockInner\");\r\nconst allAdjusts = document.querySelector(\".allAdjusts\");\r\n\r\n\r\n// function calls\r\n\tfunction adjustsBlock(){\r\n\t\tconst adjustImg = document.querySelector(\".adjustImg\");\r\n\t\tadjustImg.addEventListener(\"click\",()=>{\r\n\t\t(0,_modules_adjusts__WEBPACK_IMPORTED_MODULE_3__.printAdjustsBlock)(_modules_db__WEBPACK_IMPORTED_MODULE_2__.effectsDb,editingBlockInner);\r\n\t\t(0,_modules_adjusts__WEBPACK_IMPORTED_MODULE_3__.adjustOutputs)();\r\n\t\t(0,_modules_adjusts__WEBPACK_IMPORTED_MODULE_3__.changeImgEffect)();\r\n\t\t(0,_modules_adjusts__WEBPACK_IMPORTED_MODULE_3__.resetChanges)(resetAllButton,forEditImg,adjusts);\r\n\t});\r\n\t}\r\n\r\n\tfunction rotateFlipBlock(){\r\n\t\tconst flipImg = document.querySelector(\".flipImg\");\r\n\t\tflipImg.addEventListener(\"click\",()=>{\r\n\t\t\t(0,_modules_rotateFlip__WEBPACK_IMPORTED_MODULE_5__.printRotateFlipBlock)(editingBlockInner);\r\n\t\t\t(0,_modules_adjusts__WEBPACK_IMPORTED_MODULE_3__.resetChanges)(resetAllButton,forEditImg,adjusts);\r\n\t\t});\r\n\t}\r\n\r\n\tfunction sizeBlock(){\r\n\t\tconst cropImg = document.querySelector(\".cropImg\");\r\n\t\t\t\tcropImg.addEventListener(\"click\",()=>{\r\n\t\t\t\t\tconst forEditImg = document.querySelector(\".forEditImg\");\r\n\t\t\t\t\tconst defaultWidth = forEditImg.style.width;\r\n\t\t\t\t\tconst defaultHeight = forEditImg.style.height;\r\n\t\t\t\t(0,_modules_sizeBlock__WEBPACK_IMPORTED_MODULE_4__.printSizeBlock)(editingBlockInner,forEditImg,defaultHeight,defaultWidth);\r\n\t\t\t\t(0,_modules_adjusts__WEBPACK_IMPORTED_MODULE_3__.resetChanges)(resetAllButton,forEditImg);\r\n\t\t\t});\r\n\t\t\r\n\t}\r\n\r\n\r\n    (0,_modules_upload__WEBPACK_IMPORTED_MODULE_1__.uploadPhotoForEdit)(uploadInput,uploadLabel);\r\n\trotateFlipBlock();\r\n\tadjustsBlock();\r\n\r\n\r\n\tfunction back(){\r\n\t\tconst back = document.querySelector(\".back\");\r\n\t\tback.addEventListener(\"click\",()=>{\r\n\t\t\teditingBlockInner.innerHTML = `\r\n\t\t\t<div class=\"adjustImgDiv globalOptionsDiv\">\r\n\t\t\t\t<img src=\"./images/adjust.png\" alt=\"\" width=\"50px\" height=\"50px\" class =\"adjustImg optionIcons\"> \r\n\t\t\t\t<h3 class=\"adjustH3\">Adjust</h3>\r\n\t\t\t</div>\t\r\n\t\t\t<div class=\"flipImgDiv globalOptionsDiv\">\r\n\t\t\t\t<img src=\"/src/images/flip.png\"\" width=\"50px\" height=\"50px\" class =\"flipImg optionIcons\"> \r\n\t\t\t\t<h3 class=\"positionH3\">Position</h3>\r\n\t\t\t</div>\t\r\n\t\t\t<div class=\"cropImgDiv globalOptionsDiv\">\r\n\t\t\t\t<img src=\"/src/images/crop.png\"\" width=\"50px\" height=\"50px\" class =\"cropImg optionIcons\"> \r\n\t\t\t\t<h3 class=\"sizeH3\">Size</h3>\r\n\t\t\t</div>\t\r\n\t\t\t\r\n\t\t\t`;\r\n\t\t\tadjustsBlock();\t\t\r\n\t\t\trotateFlipBlock();\t\r\n\t\t\tsizeBlock();\r\n\t\t});\r\n\t}\r\n\tback();\r\n\r\n\n\n//# sourceURL=webpack://photo-editor/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/adjusts.js":
/*!***********************************!*\
  !*** ./src/js/modules/adjusts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"adjustOutputs\": () => (/* binding */ adjustOutputs),\n/* harmony export */   \"changeImgEffect\": () => (/* binding */ changeImgEffect),\n/* harmony export */   \"printAdjustsBlock\": () => (/* binding */ printAdjustsBlock),\n/* harmony export */   \"resetChanges\": () => (/* binding */ resetChanges)\n/* harmony export */ });\n\r\nfunction printAdjustsBlock(effectsDb,editingBlockInner){\r\n\r\n\teditingBlockInner.innerHTML = `\r\n\t<div class=\"adjustBlock\">\r\n\t<div class=\"allAdjusts\"></div>\r\n\t</div> `;\r\n\tconst allAdjusts = document.querySelector(\".allAdjusts\");\r\n\r\n\t\t\teffectsDb.map(effect => {\r\n\t\t\t\tallAdjusts.innerHTML += `\r\n\t\t\t\t<div class=\"${effect.title}adjust adjustDiv\">\r\n\t\t\t\t\t<h3 class=\"adjustTitleH3\">${effect.title}</h3>\r\n\t\t\t\t\t<input type=\"range\" class=\"${effect.title} adjust\" >\r\n\t\t\t\t\t<h3 class=\"adjustOutput\">50</h3>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t`;\r\n\t\t\t});\r\n}\r\n\r\nfunction adjustOutputs(){\r\n\tconst adjusts = document.querySelectorAll(\".adjust\");\r\n\r\n\tadjusts.forEach(adjust => {\r\n\t\tif(adjust.classList[0] === \"blur\" || adjust.classList[0] === \"grayscale\" || adjust.classList[0] === \"hue-rotate\" || adjust.classList[0] === \"invert\" || adjust.classList[0] === \"sepia\"){\r\n\t\t\tadjust.value = 0;\r\n\t\t\tadjust.nextElementSibling.innerHTML = adjust.value;\r\n\t\t}\r\n\t\tif(adjust.classList[0] === \"opacity\"){\r\n\t\t\tadjust.value = 100;\r\n\t\t\tadjust.nextElementSibling.innerHTML = adjust.value;\r\n\t\t}\r\n\t\tif(adjust.classList[0] === \"saturate\"){\r\n\t\t\tadjust.value = 1;\r\n\t\t\tadjust.min = 1;\r\n\t\t\tadjust.nextElementSibling.innerHTML = adjust.value;\r\n\t\t}\r\n\t\tadjust.addEventListener(\"input\",() => {\r\n\t\t\tadjust.nextElementSibling.innerHTML = adjust.value;\r\n\t\t});\r\n\t});\r\n}\r\n\r\nfunction changeImgEffect(){\r\n\r\n\tconst adjusts = document.querySelectorAll(\".adjust\");\r\n\r\n\tadjusts.forEach(adjust => {\r\n\t\tadjust.addEventListener(\"input\",() => {\r\n\t\t\tconst forEditImg = document.querySelector(\".forEditImg\");\r\n\t\t\tif(adjust.classList[0] === \"brightness\" || adjust.classList[0] === \"contrast\" || adjust.classList[0] === \"blur\"){\r\n\t\t\tforEditImg.style.filter = `${adjust.classList[0]}(${adjust.value/50})`;}\r\n\t\t\t\r\n\t\t\tif(adjust.classList[0] === \"blur\"){\r\n\t\t\tforEditImg.style.filter = `${adjust.classList[0]}(${adjust.value/50}px)`;}\r\n\r\n\t\t\tif(adjust.classList[0] === \"grayscale\"){\r\n\t\t\tforEditImg.style.filter = `${adjust.classList[0]}(${adjust.value}%)`;}\r\n\r\n\t\t\tif(adjust.classList[0] === \"hue-rotate\"){\r\n\t\t\tforEditImg.style.filter = `${adjust.classList[0]}(${adjust.value*2}deg)`;}\r\n\r\n\t\t\tif(adjust.classList[0] === \"invert\"){\r\n\t\t\tforEditImg.style.filter = `${adjust.classList[0]}(${adjust.value}%)`;}\r\n\r\n\t\t\tif(adjust.classList[0] === \"opacity\"){\r\n\t\t\tforEditImg.style.filter = `${adjust.classList[0]}(${adjust.value}%)`;}\r\n\r\n\t\t\tif(adjust.classList[0] === \"saturate\"){\r\n\t\t\tforEditImg.style.filter = `${adjust.classList[0]}(${adjust.value})`;}\r\n\r\n\t\t\tif(adjust.classList[0] === \"sepia\"){\r\n\t\t\tforEditImg.style.filter = `${adjust.classList[0]}(${adjust.value*2}%)`;}\r\n\t\r\n\r\n\t\t});\r\n\t});\r\n}\r\n\r\nfunction resetChanges(resetAllButton,defaultWidth,defaultHeight){\r\n\tresetAllButton.addEventListener(\"click\",() => {\r\n\t\tconst forEditImg = document.querySelector(\".forEditImg\");\r\n\t\tforEditImg.style.filter = \"\";\r\n\t\tforEditImg.style.transform = `rotate(${0}deg)`;\r\n\t\tconst adjusts = document.querySelectorAll(\".adjust\");\r\n\t\t\tadjusts.forEach(adjust => {\r\n\t\t\t\tif (adjust.classList[0] === \"opacity\"){\r\n\t\t\t\t\tadjust.value = 100;\r\n\t\t\t\t\tadjust.nextElementSibling.textContent = adjust.value;\r\n\t\t\t\t}else if(adjust.classList[0] === \"brightness\" || adjust.classList[0] === \"contrast\"){\r\n\t\t\t\t\tadjust.value = 50;\r\n\t\t\t\t\tadjust.nextElementSibling.textContent = adjust.value;\r\n\t\t\t\t}else if(adjust.classList[0] === \"saturate\"){\r\n\t\t\t\t\tadjust.value = 1;\r\n\t\t\t\t\tadjust.nextElementSibling.textContent = adjust.value;\r\n\t\t\t\t}else{\r\n\t\t\t\t\tadjust.value = 0;\r\n\t\t\t\t\tadjust.nextElementSibling.textContent = adjust.value;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t\tconst widthInput = document.querySelector(\".widthInput\");\r\n\t\t\tconst heightInput = document.querySelector(\".heightInput\");\r\n\t\t\tforEditImg.style.width = defaultWidth;\r\n\t\t\tforEditImg.style.height = defaultHeight;\r\n\t\t\tif(widthInput || heightInput){\r\n\t\t\t\twidthInput.value = \"\";\r\n\t\t\t\theightInput.value = \"\";\r\n\t\t\t}\t\r\n\t\t});\r\n}\n\n//# sourceURL=webpack://photo-editor/./src/js/modules/adjusts.js?");

/***/ }),

/***/ "./src/js/modules/db.js":
/*!******************************!*\
  !*** ./src/js/modules/db.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"effectsDb\": () => (/* binding */ effectsDb)\n/* harmony export */ });\nconst effectsDb = [\r\n\t{id:1,title:\"brightness\",defaultValue:\"50\"},\r\n\t{id:2,title:\"contrast\",defaultValue:\"50\"},\r\n\t{id:3,title:\"blur\",defaultValue:\"0\"},\r\n\t{id:4,title:\"grayscale\",defaultValue:\"0\"},\r\n\t{id:5,title:\"hue-rotate\",defaultValue:\"0\"},\r\n\t{id:6,title:\"invert\",defaultValue:\"0\"},\r\n\t{id:7,title:\"opacity\",defaultValue:\"100\"},\r\n\t{id:8,title:\"saturate\",defaultValue:\"1\"},\r\n\t{id:9,title:\"sepia\"},\r\n];\n\n//# sourceURL=webpack://photo-editor/./src/js/modules/db.js?");

/***/ }),

/***/ "./src/js/modules/globalBlockInner.js":
/*!********************************************!*\
  !*** ./src/js/modules/globalBlockInner.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editingBlockInnerDefault\": () => (/* binding */ editingBlockInnerDefault),\n/* harmony export */   \"printEditingBlockDefault\": () => (/* binding */ printEditingBlockDefault),\n/* harmony export */   \"printUploadBlock\": () => (/* binding */ printUploadBlock)\n/* harmony export */ });\n\r\n function editingBlockInnerDefault(){\r\n\treturn `\r\n<div class=\"adjustImgDiv globalOptionsDiv\">\r\n\t<img src=\"./images/adjust.png\" alt=\"\" width=\"50px\" height=\"50px\" class =\"adjustImg optionIcons\"> \r\n\t<h3 class=\"adjustH3\">Adjust</h3>\r\n</div>\t\r\n<div class=\"flipImgDiv globalOptionsDiv\">\r\n\t<img src=\"/src/images/flip.png\"\" width=\"50px\" height=\"50px\" class =\"flipImg optionIcons\"> \r\n\t<h3 class=\"positionH3\">Position</h3>\r\n</div>\t\r\n<div class=\"cropImgDiv globalOptionsDiv\">\r\n\t<img src=\"/src/images/crop.png\"\" width=\"50px\" height=\"50px\" class =\"cropImg optionIcons\"> \r\n\t<h3 class=\"sizeH3\">Size</h3>\r\n</div>\t\r\n\r\n`;\r\n}\r\n\r\nfunction printUploadBlock(globalBlock){\r\n\tconst uploadHtml = `\r\n\t<div id = \"uploadBlock\">\r\n\t\t<div class=\"uploadBlockInner\">\r\n\t\t\t\t<div id=\"imgDiv\"></div>\r\n\r\n\t\t\t\t<label for=\"uploadInput\" class=\"uploadLabel\">\r\n\t\t\t\t\t<h1 class=\"uploadH3\">Click to upload photo</h1>\r\n\t\t\t\t\t<img src=\"./images/upload.png\" id=\"uploadIcon\" alt=\"uploadIcon\"> \r\n\t\t\t\t\t<input type=\"file\" id=\"uploadInput\">\r\n\t\t\t\t</label>\r\n\t\t<div>\r\n\t</div>\r\n\t\t`;\r\n\tglobalBlock.insertAdjacentHTML(\"afterbegin\",uploadHtml);\r\n}\r\n\r\nfunction printEditingBlockDefault(globalBlock){\r\n\tconst editingHtml = `\r\n\t<div id = editingBlock>\r\n\t\t<div class=\"editingBlockInner\">\r\n\t\t \t${editingBlockInnerDefault()}\r\n\r\n\t\t\r\n\t\t</div>\r\n\t\t\t<button class = \"download\">Download</button>\r\n\t\t\t<button class = \"resetAllButton\">Reset changes</button>\r\n\t\t\t<button class = \"back\">Back</button>\r\n\t</div>\r\n\t`;\r\n\tglobalBlock.insertAdjacentHTML(\"beforeend\",editingHtml);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\n\n//# sourceURL=webpack://photo-editor/./src/js/modules/globalBlockInner.js?");

/***/ }),

/***/ "./src/js/modules/rotateFlip.js":
/*!**************************************!*\
  !*** ./src/js/modules/rotateFlip.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printRotateFlipBlock\": () => (/* binding */ printRotateFlipBlock)\n/* harmony export */ });\nfunction printRotateFlipBlock(editingBlockInner){\r\n\teditingBlockInner.innerHTML=`\r\n\t\t<div class=\"left rotateFlipDiv\">\r\n\t\t\t<img src=\"/src/images/rotateleft (1).png\" alt=\"\" width=\"50px\" height=\"50px\" class =\"rotateleftImg optionIcons\"> \r\n\t\t\t<h3 class=\"rotateLeftH3\"> Rotate left</h3>\r\n\t\t</div>\r\n\t\t<div class=\"right rotateFlipDiv\">\r\n\t\t\t<img src=\"/src/images/rotateright (2).png\" alt=\"\" width=\"50px\" height=\"50px\" class =\"rotaterightImg optionIcons\">\r\n\t\t\t<h3 class=\"rotateRightH3\"> Rotate right</h3>\r\n\t\t</div>\r\n\t\t<div class=\"flip rotateFlipDiv\">\r\n\t\t\t<img src=\"/src/images/flip.png\" alt=\"\" width=\"50px\" height=\"50px\" class =\"flipImg optionIcons\">\r\n\t\t\t<h3 class=\"flipH3\">Flip</h3>\r\n\t\t</div>\r\n\t`;\r\n\tconst rotateLeftBtn = document.querySelector(\".rotateleftImg\");\r\n\tconst rotateRightBtn = document.querySelector(\".rotaterightImg\");\r\n\tconst flipBtn = document.querySelector(\".flipImg\");\r\n\tconst forEditImg = document.querySelector(\".forEditImg\");\r\n\r\n\tlet defaultN = 0;\r\n\trotateLeftBtn.addEventListener(\"click\",()=>{\r\n\t\tforEditImg.style.transform = `rotate(${defaultN-=90}deg)`;\r\n\t});\r\n\trotateRightBtn.addEventListener(\"click\",()=>{\r\n\t\tforEditImg.style.transform = `rotate(${defaultN+=90}deg)`;\r\n\t});\r\n\tflipBtn.addEventListener(\"click\",()=>{\r\n\r\n\t\tif(forEditImg.style.transform === \"\"){\r\n\t\t\tforEditImg.style.transform = `scaleX(${-1})`;\r\n\t\t}else{\r\n\t\t\tforEditImg.style.transform = \"\";\r\n\t\t}\r\n\t});\r\n}\n\n//# sourceURL=webpack://photo-editor/./src/js/modules/rotateFlip.js?");

/***/ }),

/***/ "./src/js/modules/sizeBlock.js":
/*!*************************************!*\
  !*** ./src/js/modules/sizeBlock.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printSizeBlock\": () => (/* binding */ printSizeBlock)\n/* harmony export */ });\nfunction printSizeBlock(editingBlockInner,forEditImg,defaultHeight,defaultWidth){\r\n\teditingBlockInner.innerHTML = `\r\n\t\t<div class=\"sizeDiv\">\r\n\t\t\t<h3 class=\"widthH3\">Width</h3>\r\n\t\t\t<input type\"number\" id=\"widthInput\" class=\"widthInput sizeInput\" placeholder=\"write the width\" autocomplete=\"off\">\r\n\t\t\t\t\r\n\t\t\t<h3 class=\"heightH3\">Height</h3>\r\n\t\t\t<input type\"number\" id=\"heightInput\" class=\"heightInput sizeInput\" placeholder=\"write the height\" autocomplete=\"off\">\r\n\t\t\t\r\n\t\t\t<div>\r\n\t\t\t<button class=\"resetSizeButton\">Reset</button>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t`;\r\n\r\n\t\tconst widthInput = document.querySelector(\".widthInput\");\r\n\t\tconst heightInput = document.querySelector(\".heightInput\");\r\n\t\tconst resetButton  = document.querySelector(\".resetSizeButton\");\r\n\r\n\t\tconst sizeInputs = document.querySelectorAll(\".sizeInput\");\r\n\t\tsizeInputs.forEach(sizeInput => {\r\n\t\t\tsizeInput.addEventListener(\"input\",()=>{\r\n\t\t\t\tif(widthInput.value <= 370){\r\n\t\t\t\t\tforEditImg.style.width = `${widthInput.value}px`;\r\n\t\t\t\t}\r\n\t\t\t\tif(heightInput.value <= 300){\r\n\t\t\t\t\tforEditImg.style.height = `${heightInput.value}px`;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t\t\r\n\t\t\tresetButton.addEventListener(\"click\",()=>{\r\n\t\t\t\tforEditImg.style.width = defaultWidth;\r\n\t\t\t\tforEditImg.style.height = defaultHeight;\r\n\t\t\t\twidthInput.value = \"\";\r\n\t\t\t\theightInput.value = \"\";\r\n\r\n\t\t\t});\r\n\t\t});\r\n\t\r\n\t\t\r\n\t\tforEditImg.style.width = `${widthInput.value}px`;\r\n\t\tforEditImg.style.height = `${heightInput.value}px`;\r\n}\n\n//# sourceURL=webpack://photo-editor/./src/js/modules/sizeBlock.js?");

/***/ }),

/***/ "./src/js/modules/upload.js":
/*!**********************************!*\
  !*** ./src/js/modules/upload.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"uploadPhotoForEdit\": () => (/* binding */ uploadPhotoForEdit)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/js/index.js\");\n\r\nfunction uploadPhotoForEdit(uploadInput,uploadLabel){\r\n\tuploadInput.addEventListener(\"change\",(e) => {\r\n\t\tlet file = e.target.files[0];\r\n\t\tlet reader = new FileReader();\r\n\t\treader.readAsDataURL(file);\r\n\t\r\n\t\treader.onload = function(){\r\n\t\t\tlet img = document.createElement(\"img\");\r\n\t\t\timg.classList.add(\"forEditImg\");\r\n\t\t\timgDiv.appendChild(img);\r\n\t\t\timg.src = reader.result;\r\n\t\t};\r\n\t\tuploadLabel.remove();\r\n\t\t(0,___WEBPACK_IMPORTED_MODULE_0__.sizeBlock)();\r\n\t});\r\n}\n\n//# sourceURL=webpack://photo-editor/./src/js/modules/upload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;