"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contact/page",{

/***/ "(app-pages-browser)/./src/app/contact/page.tsx":
/*!**********************************!*\
  !*** ./src/app/contact/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction Contact() {\n    const copyEmail = ()=>{\n        navigator.clipboard.writeText(\"ggmontessori@gmail.com\");\n        const tooltip = document.getElementById(\"myToolTip\");\n        if (tooltip) tooltip.innerHTML = \"Copied: ggmontessori@gmail.com\";\n    };\n    const outFunc = ()=>{\n        const tip = document.getElementById(\"myToolTip\");\n        if (tip) tip.innerHTML = \"Copy to clipboard\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"contact\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[vh80] py-8 flex flex-col items-center text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl\",\n                        children: \"Please come visit us at:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"10141 Lampson Ave, Garden Grove CA 92840\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl\",\n                        children: \"Call or email to schedule a tour:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"tel:7146366300\",\n                            children: \"\\uD83D\\uDCDE (714) 636 - 6300\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex flex-row gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"mailto:ggmontessori@gmail.com\",\n                                children: \"\\uD83D\\uDCBB ggmontessori@gmail.com\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"tooltip hover:cursor-pointer\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"tooltiptext\",\n                                        id: \"myToolTip\",\n                                        children: \"Copy to clipboard\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        viewBox: \"0 0 24 24\",\n                                        className: \"h-8 bg-yellow-300 rounded-lg\",\n                                        version: \"1.1\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        fill: \"#000000\",\n                                        onClick: copyEmail,\n                                        onMouseUp: outFunc,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M5.50280381,4.62704038 L5.5,6.75 L5.5,17.2542087 C5.5,19.0491342 6.95507456,20.5042087 8.75,20.5042087 L17.3662868,20.5044622 C17.057338,21.3782241 16.2239751,22.0042087 15.2444057,22.0042087 L8.75,22.0042087 C6.12664744,22.0042087 4,19.8775613 4,17.2542087 L4,6.75 C4,5.76928848 4.62744523,4.93512464 5.50280381,4.62704038 Z M17.75,2 C18.9926407,2 20,3.00735931 20,4.25 L20,17.25 C20,18.4926407 18.9926407,19.5 17.75,19.5 L8.75,19.5 C7.50735931,19.5 6.5,18.4926407 6.5,17.25 L6.5,4.25 C6.5,3.00735931 7.50735931,2 8.75,2 L17.75,2 Z M17.75,3.5 L8.75,3.5 C8.33578644,3.5 8,3.83578644 8,4.25 L8,17.25 C8,17.6642136 8.33578644,18 8.75,18 L17.75,18 C18.1642136,18 18.5,17.6642136 18.5,17.25 L18.5,4.25 C18.5,3.83578644 18.1642136,3.5 17.75,3.5 Z\",\n                                            id: \"\\uD83C\\uDFA8-Color\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                        height: \"400\",\n                        className: \"w-screen md:max-w-screen-sm\",\n                        src: \"https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=10141+Lampson+Avenue,+Garden+Grove,+CA+92840&aq=0&oq=10141+Lampson+Avenue,+Garden+Grove,+CA+92840&sll=33.844186,-118.338289&sspn=0.018,0.042272&ie=UTF8&hq=&hnear=10141+Lampson+Ave,+Garden+Grove,+Orange,+California+92840&t=m&ll=33.782928,-117.957888&spn=0.024968,0.036478&z=14&iwloc=A&output=embed\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-8 justify-center p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.yelp.com/biz/garden-grove-montessori-academy-garden-grove?osq=garden+grove+montessori\",\n                                target: \"_new\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    className: \"w-12 h-12 fill-red-600\",\n                                    viewBox: \"0 0 384 512\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M42.9 240.3l99.6 48.6c19.2 9.4 16.2 37.5-4.5 42.7L30.5 358.5a22.8 22.8 0 0 1 -28.2-19.6 197.2 197.2 0 0 1 9-85.3 22.8 22.8 0 0 1 31.6-13.2zm44 239.3a199.5 199.5 0 0 0 79.4 32.1A22.8 22.8 0 0 0 192.9 490l3.9-110.8c.7-21.3-25.5-31.9-39.8-16.1l-74.2 82.4a22.8 22.8 0 0 0 4.1 34.1zm145.3-109.9l58.8 94a22.9 22.9 0 0 0 34 5.5 198.4 198.4 0 0 0 52.7-67.6A23 23 0 0 0 364.2 370l-105.4-34.3c-20.3-6.5-37.8 15.8-26.5 33.9zm148.3-132.2a197.4 197.4 0 0 0 -50.4-69.3 22.9 22.9 0 0 0 -34 4.4l-62 91.9c-11.9 17.7 4.7 40.6 25.2 34.7L366 268.6a23 23 0 0 0 14.6-31.2zM62.1 30.2a22.9 22.9 0 0 0 -9.9 32l104.1 180.4c11.7 20.2 42.6 11.9 42.6-11.4V22.9a22.7 22.7 0 0 0 -24.5-22.8 320.4 320.4 0 0 0 -112.3 30.1z\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://maps.app.goo.gl/KQtjpUSpny6GFA7K9\",\n                                target: \"_new\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    className: \"w-12 h-12 fill-blue-100\",\n                                    viewBox: \"0 0 488 512\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"p-4 text-center\",\n                        children: \"Thanks for the love on Yelp/Google!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/contact/page.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGFjdC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFZSxTQUFTQTtJQUN0QixNQUFNQyxZQUFZO1FBQ2hCQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQztRQUM5QixNQUFNQyxVQUFVQyxTQUFTQyxjQUFjLENBQUM7UUFDeEMsSUFBSUYsU0FBU0EsUUFBUUcsU0FBUyxHQUFHO0lBQ25DO0lBRUEsTUFBTUMsVUFBVTtRQUNkLE1BQU1DLE1BQU1KLFNBQVNDLGNBQWMsQ0FBQztRQUNwQyxJQUFJRyxLQUFLQSxJQUFJRixTQUFTLEdBQUc7SUFDM0I7SUFFQSxxQkFDRSw4REFBQ0c7UUFBUUMsSUFBRzs7MEJBQ1YsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQVc7Ozs7OztrQ0FFekIsOERBQUNFO2tDQUFFOzs7Ozs7a0NBRUgsOERBQUNEO3dCQUFHRCxXQUFVO2tDQUFXOzs7Ozs7a0NBRXpCLDhEQUFDRTtrQ0FDQyw0RUFBQ0M7NEJBQUVDLE1BQUs7c0NBQWlCOzs7Ozs7Ozs7OztrQ0FHM0IsOERBQUNGO3dCQUFFRixXQUFVOzswQ0FDWCw4REFBQ0c7Z0NBQUVDLE1BQUs7MENBQWdDOzs7Ozs7MENBQ3hDLDhEQUFDTDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNLO3dDQUFLTCxXQUFVO3dDQUFjRixJQUFHO2tEQUFZOzs7Ozs7a0RBRzdDLDhEQUFDUTt3Q0FDQ0MsU0FBUTt3Q0FDUlAsV0FBVTt3Q0FDVlEsU0FBUTt3Q0FDUkMsT0FBTTt3Q0FDTkMsTUFBSzt3Q0FDTEMsU0FBU3hCO3dDQUNUeUIsV0FBV2pCO2tEQUVYLDRFQUFDa0I7NENBQ0NDLEdBQUU7NENBQ0ZoQixJQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNWCw4REFBQ2lCO3dCQUNDQyxRQUFPO3dCQUNQaEIsV0FBVTt3QkFDVmlCLEtBQUk7Ozs7Ozs7Ozs7OzswQkFHUiw4REFBQ2xCOztrQ0FDQyw4REFBQ0E7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FDQ0MsTUFBSztnQ0FDTGMsUUFBTzswQ0FFUCw0RUFBQ1o7b0NBQ0NHLE9BQU07b0NBQ05ULFdBQVU7b0NBQ1ZPLFNBQVE7OENBRVIsNEVBQUNNO3dDQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdaLDhEQUFDWDtnQ0FBRUMsTUFBSztnQ0FBNENjLFFBQU87MENBQ3pELDRFQUFDWjtvQ0FDQ0csT0FBTTtvQ0FDTlQsV0FBVTtvQ0FDVk8sU0FBUTs4Q0FFUiw0RUFBQ007d0NBQUtDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS2QsOERBQUNaO3dCQUFFRixXQUFVO2tDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZDO0tBbkZ3QmQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb250YWN0L3BhZ2UudHN4PzBlOTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIGNvbnN0IGNvcHlFbWFpbCA9ICgpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChcImdnbW9udGVzc29yaUBnbWFpbC5jb21cIik7XG4gICAgY29uc3QgdG9vbHRpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUb29sVGlwXCIpO1xuICAgIGlmICh0b29sdGlwKSB0b29sdGlwLmlubmVySFRNTCA9IFwiQ29waWVkOiBnZ21vbnRlc3NvcmlAZ21haWwuY29tXCI7XG4gIH07XG5cbiAgY29uc3Qgb3V0RnVuYyA9ICgpID0+IHtcbiAgICBjb25zdCB0aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VG9vbFRpcFwiKTtcbiAgICBpZiAodGlwKSB0aXAuaW5uZXJIVE1MID0gXCJDb3B5IHRvIGNsaXBib2FyZFwiO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtW3ZoODBdIHB5LTggZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+UGxlYXNlIGNvbWUgdmlzaXQgdXMgYXQ6PC9oMT5cblxuICAgICAgICA8cD4xMDE0MSBMYW1wc29uIEF2ZSwgR2FyZGVuIEdyb3ZlIENBIDkyODQwPC9wPlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPkNhbGwgb3IgZW1haWwgdG8gc2NoZWR1bGUgYSB0b3VyOjwvaDE+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgaHJlZj1cInRlbDo3MTQ2MzY2MzAwXCI+8J+TniAoNzE0KSA2MzYgLSA2MzAwPC9hPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtMlwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Z2dtb250ZXNzb3JpQGdtYWlsLmNvbVwiPvCfkrsgZ2dtb250ZXNzb3JpQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXAgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXB0ZXh0XCIgaWQ9XCJteVRvb2xUaXBcIj5cbiAgICAgICAgICAgICAgQ29weSB0byBjbGlwYm9hcmRcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCBiZy15ZWxsb3ctMzAwIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGZpbGw9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgb25DbGljaz17Y29weUVtYWlsfVxuICAgICAgICAgICAgICBvbk1vdXNlVXA9e291dEZ1bmN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk01LjUwMjgwMzgxLDQuNjI3MDQwMzggTDUuNSw2Ljc1IEw1LjUsMTcuMjU0MjA4NyBDNS41LDE5LjA0OTEzNDIgNi45NTUwNzQ1NiwyMC41MDQyMDg3IDguNzUsMjAuNTA0MjA4NyBMMTcuMzY2Mjg2OCwyMC41MDQ0NjIyIEMxNy4wNTczMzgsMjEuMzc4MjI0MSAxNi4yMjM5NzUxLDIyLjAwNDIwODcgMTUuMjQ0NDA1NywyMi4wMDQyMDg3IEw4Ljc1LDIyLjAwNDIwODcgQzYuMTI2NjQ3NDQsMjIuMDA0MjA4NyA0LDE5Ljg3NzU2MTMgNCwxNy4yNTQyMDg3IEw0LDYuNzUgQzQsNS43NjkyODg0OCA0LjYyNzQ0NTIzLDQuOTM1MTI0NjQgNS41MDI4MDM4MSw0LjYyNzA0MDM4IFogTTE3Ljc1LDIgQzE4Ljk5MjY0MDcsMiAyMCwzLjAwNzM1OTMxIDIwLDQuMjUgTDIwLDE3LjI1IEMyMCwxOC40OTI2NDA3IDE4Ljk5MjY0MDcsMTkuNSAxNy43NSwxOS41IEw4Ljc1LDE5LjUgQzcuNTA3MzU5MzEsMTkuNSA2LjUsMTguNDkyNjQwNyA2LjUsMTcuMjUgTDYuNSw0LjI1IEM2LjUsMy4wMDczNTkzMSA3LjUwNzM1OTMxLDIgOC43NSwyIEwxNy43NSwyIFogTTE3Ljc1LDMuNSBMOC43NSwzLjUgQzguMzM1Nzg2NDQsMy41IDgsMy44MzU3ODY0NCA4LDQuMjUgTDgsMTcuMjUgQzgsMTcuNjY0MjEzNiA4LjMzNTc4NjQ0LDE4IDguNzUsMTggTDE3Ljc1LDE4IEMxOC4xNjQyMTM2LDE4IDE4LjUsMTcuNjY0MjEzNiAxOC41LDE3LjI1IEwxOC41LDQuMjUgQzE4LjUsMy44MzU3ODY0NCAxOC4xNjQyMTM2LDMuNSAxNy43NSwzLjUgWlwiXG4gICAgICAgICAgICAgICAgaWQ9XCLwn46oLUNvbG9yXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgIGhlaWdodD1cIjQwMFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1zY3JlZW4gbWQ6bWF4LXctc2NyZWVuLXNtXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzP2Y9cSZhbXA7c291cmNlPXNfcSZhbXA7aGw9ZW4mYW1wO2dlb2NvZGU9JmFtcDtxPTEwMTQxK0xhbXBzb24rQXZlbnVlLCtHYXJkZW4rR3JvdmUsK0NBKzkyODQwJmFtcDthcT0wJmFtcDtvcT0xMDE0MStMYW1wc29uK0F2ZW51ZSwrR2FyZGVuK0dyb3ZlLCtDQSs5Mjg0MCZhbXA7c2xsPTMzLjg0NDE4NiwtMTE4LjMzODI4OSZhbXA7c3Nwbj0wLjAxOCwwLjA0MjI3MiZhbXA7aWU9VVRGOCZhbXA7aHE9JmFtcDtobmVhcj0xMDE0MStMYW1wc29uK0F2ZSwrR2FyZGVuK0dyb3ZlLCtPcmFuZ2UsK0NhbGlmb3JuaWErOTI4NDAmYW1wO3Q9bSZhbXA7bGw9MzMuNzgyOTI4LC0xMTcuOTU3ODg4JmFtcDtzcG49MC4wMjQ5NjgsMC4wMzY0NzgmYW1wO3o9MTQmYW1wO2l3bG9jPUEmYW1wO291dHB1dD1lbWJlZFwiXG4gICAgICAgID48L2lmcmFtZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC04IGp1c3RpZnktY2VudGVyIHAtNFwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cueWVscC5jb20vYml6L2dhcmRlbi1ncm92ZS1tb250ZXNzb3JpLWFjYWRlbXktZ2FyZGVuLWdyb3ZlP29zcT1nYXJkZW4rZ3JvdmUrbW9udGVzc29yaVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfbmV3XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgZmlsbC1yZWQtNjAwXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzODQgNTEyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk00Mi45IDI0MC4zbDk5LjYgNDguNmMxOS4yIDkuNCAxNi4yIDM3LjUtNC41IDQyLjdMMzAuNSAzNTguNWEyMi44IDIyLjggMCAwIDEgLTI4LjItMTkuNiAxOTcuMiAxOTcuMiAwIDAgMSA5LTg1LjMgMjIuOCAyMi44IDAgMCAxIDMxLjYtMTMuMnptNDQgMjM5LjNhMTk5LjUgMTk5LjUgMCAwIDAgNzkuNCAzMi4xQTIyLjggMjIuOCAwIDAgMCAxOTIuOSA0OTBsMy45LTExMC44Yy43LTIxLjMtMjUuNS0zMS45LTM5LjgtMTYuMWwtNzQuMiA4Mi40YTIyLjggMjIuOCAwIDAgMCA0LjEgMzQuMXptMTQ1LjMtMTA5LjlsNTguOCA5NGEyMi45IDIyLjkgMCAwIDAgMzQgNS41IDE5OC40IDE5OC40IDAgMCAwIDUyLjctNjcuNkEyMyAyMyAwIDAgMCAzNjQuMiAzNzBsLTEwNS40LTM0LjNjLTIwLjMtNi41LTM3LjggMTUuOC0yNi41IDMzLjl6bTE0OC4zLTEzMi4yYTE5Ny40IDE5Ny40IDAgMCAwIC01MC40LTY5LjMgMjIuOSAyMi45IDAgMCAwIC0zNCA0LjRsLTYyIDkxLjljLTExLjkgMTcuNyA0LjcgNDAuNiAyNS4yIDM0LjdMMzY2IDI2OC42YTIzIDIzIDAgMCAwIDE0LjYtMzEuMnpNNjIuMSAzMC4yYTIyLjkgMjIuOSAwIDAgMCAtOS45IDMybDEwNC4xIDE4MC40YzExLjcgMjAuMiA0Mi42IDExLjkgNDIuNi0xMS40VjIyLjlhMjIuNyAyMi43IDAgMCAwIC0yNC41LTIyLjggMzIwLjQgMzIwLjQgMCAwIDAgLTExMi4zIDMwLjF6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tYXBzLmFwcC5nb28uZ2wvS1F0anBVU3BueTZHRkE3SzlcIiB0YXJnZXQ9XCJfbmV3XCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgZmlsbC1ibHVlLTEwMFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDg4IDUxMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDg4IDI2MS44QzQ4OCA0MDMuMyAzOTEuMSA1MDQgMjQ4IDUwNCAxMTAuOCA1MDQgMCAzOTMuMiAwIDI1NlMxMTAuOCA4IDI0OCA4YzY2LjggMCAxMjMgMjQuNSAxNjYuMyA2NC45bC02Ny41IDY0LjlDMjU4LjUgNTIuNiA5NC4zIDExNi42IDk0LjMgMjU2YzAgODYuNSA2OS4xIDE1Ni42IDE1My43IDE1Ni42IDk4LjIgMCAxMzUtNzAuNCAxNDAuOC0xMDYuOUgyNDh2LTg1LjNoMjM2LjFjMi4zIDEyLjcgMy45IDI0LjkgMy45IDQxLjR6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicC00IHRleHQtY2VudGVyXCI+VGhhbmtzIGZvciB0aGUgbG92ZSBvbiBZZWxwL0dvb2dsZSE8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ29udGFjdCIsImNvcHlFbWFpbCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvb2x0aXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwib3V0RnVuYyIsInRpcCIsInNlY3Rpb24iLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImEiLCJocmVmIiwic3BhbiIsInN2ZyIsInZpZXdCb3giLCJ2ZXJzaW9uIiwieG1sbnMiLCJmaWxsIiwib25DbGljayIsIm9uTW91c2VVcCIsInBhdGgiLCJkIiwiaWZyYW1lIiwiaGVpZ2h0Iiwic3JjIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/contact/page.tsx\n"));

/***/ })

});