"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8a24ca5b0ea0\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MGFmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjhhMjRjYTViMGVhMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/AltNav.tsx":
/*!***************************************!*\
  !*** ./src/app/components/AltNav.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AltNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/legacy/image */ \"(app-pages-browser)/./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction AltNav() {\n    _s();\n    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const toggleMobileMenu = ()=>{\n        setOpen(!isOpen);\n    };\n    const navItems = [\n        {\n            title: \"HOME\",\n            href: \"/\"\n        },\n        {\n            title: \"PROGRAM\",\n            href: \"#program\"\n        },\n        {\n            title: \"CONTACT\",\n            href: \"/contact\"\n        },\n        {\n            title: \"GALLERY\",\n            href: \"/gallery\"\n        }\n    ];\n    // hide NavBar on scroll down\n    if (true) {\n        let pos1 = window.scrollY;\n        window.onscroll = function() {\n            let pos2s = window.scrollY;\n            const navElement = document.getElementById(\"nav\");\n            if (navElement && pos1 > pos2s) {\n                navElement.classList.remove(\"nav-hidden\");\n            } else if (navElement) {\n                navElement.classList.add(\"nav-hidden\");\n            }\n            pos1 = pos2s;\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"nav\",\n        className: \"z-50 flex justify-around items-center top-0 text-base md:text-lg \".concat(isOpen ? \"\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-center gap-8 items-center md:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        onClick: ()=>setItem(0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/logo.png\",\n                            width: \"120\",\n                            height: \"90\",\n                            alt: \"Montessori Logo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 48\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleMobileMenu,\n                        className: \"focus:outline-none\",\n                        children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"w-8 h-8\",\n                            fill: \"none\",\n                            stroke: \"currentColor\",\n                            viewBox: \"0 0 24 24\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: \"2\",\n                                d: \"M6 18L18 6M6 6l12 12\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"w-8 h-8\",\n                            fill: \"none\",\n                            stroke: \"currentColor\",\n                            viewBox: \"0 0 24 24\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: \"2\",\n                                d: \"M4 6h16M4 12h16m-7 6h7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:block transition duration-400\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        onClick: ()=>setItem(0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/h_banner.png\",\n                            height: \"144\",\n                            width: \"930\",\n                            alt: \"banner\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 48\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"nav\",\n                        className: \"flex flex-col md:flex-row items-center sticky justify-center\",\n                        children: navItems.map((e, i)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                id: e.title,\n                                href: e.href,\n                                onMouseDown: ()=>setItem(i),\n                                className: \"px-10 py-1 text-white font-extrabold transition bg-blue-300 duration-500 \".concat(item == i ? \"bg-blue-700\" : \"bg-blue-500\", \" hover:bg-blue-100 hover:text-blue-900\"),\n                                children: e.title\n                            }, i, false, {\n                                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"opacity-90 fixed w-screen h-screen text-3xl top-24 z-40 left-1/2 transform -translate-x-1/2 bg-yellow-100 md:hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: navItems.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            id: e.title,\n                            href: e.href,\n                            onClick: toggleMobileMenu,\n                            className: \"px-10 py-1 text-gray-700 font-extrabold  duration-500 \".concat(item == i ? \"underline\" : \"\", \" hover:bg-blue-100 hover:text-blue-900\"),\n                            children: e.title\n                        }, i, false, {\n                            fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(AltNav, \"WcL73OUCcq11YQTyCGUBgf0YviQ=\");\n_c = AltNav;\nvar _c;\n$RefreshReg$(_c, \"AltNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BbHROYXYudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDUztBQUNMO0FBRWxCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1NLG1CQUFtQjtRQUN2QkgsUUFBUSxDQUFDRDtJQUNYO0lBRUEsTUFBTUssV0FBVztRQUNmO1lBQ0VDLE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsTUFBTTtRQUNSO0tBQ0Q7SUFFRCw2QkFBNkI7SUFDN0IsSUFBSSxJQUE2QixFQUFFO1FBQ2pDLElBQUlDLE9BQU9DLE9BQU9DLE9BQU87UUFDekJELE9BQU9FLFFBQVEsR0FBRztZQUNoQixJQUFJQyxRQUFRSCxPQUFPQyxPQUFPO1lBQzFCLE1BQU1HLGFBQWFDLFNBQVNDLGNBQWMsQ0FBQztZQUMzQyxJQUFJRixjQUFjTCxPQUFPSSxPQUFPO2dCQUM5QkMsV0FBV0csU0FBUyxDQUFDQyxNQUFNLENBQUM7WUFDOUIsT0FBTyxJQUFJSixZQUFZO2dCQUNyQkEsV0FBV0csU0FBUyxDQUFDRSxHQUFHLENBQUM7WUFDM0I7WUFDQVYsT0FBT0k7UUFDVDtJQUNGO0lBRUEscUJBRUUsOERBQUNPO1FBQUlDLElBQUc7UUFDTkMsV0FBVyxvRUFFVixPQURDckIsU0FBVSxLQUFLOzswQkFJakIsOERBQUNtQjtnQkFBSUUsV0FBVTs7a0NBQ2YsOERBQUN6QixrREFBSUE7d0JBQUNXLE1BQUs7d0JBQUllLFNBQVMsSUFBSW5CLFFBQVE7a0NBQUssNEVBQUNOLDBEQUFLQTs0QkFBQzBCLEtBQUk7NEJBQVlDLE9BQU07NEJBQU1DLFFBQU87NEJBQUtDLEtBQUk7Ozs7Ozs7Ozs7O2tDQUMxRiw4REFBQ0M7d0JBQU9MLFNBQVNsQjt3QkFBa0JpQixXQUFVO2tDQUMxQ3JCLHVCQUNDLDhEQUFDNEI7NEJBQ0NQLFdBQVU7NEJBQ1ZRLE1BQUs7NEJBQ0xDLFFBQU87NEJBQ1BDLFNBQVE7NEJBQ1JDLE9BQU07c0NBRU4sNEVBQUNDO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsYUFBWTtnQ0FDWkMsR0FBRTs7Ozs7Ozs7OztpREFJTiw4REFBQ1Q7NEJBQ0NQLFdBQVU7NEJBQ1ZRLE1BQUs7NEJBQ0xDLFFBQU87NEJBQ1BDLFNBQVE7NEJBQ1JDLE9BQU07c0NBRU4sNEVBQUNDO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsYUFBWTtnQ0FDWkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRWiw4REFBQ2xCO2dCQUFJRSxXQUFVOztrQ0FDZiw4REFBQ3pCLGtEQUFJQTt3QkFBQ1csTUFBSzt3QkFBSWUsU0FBUyxJQUFJbkIsUUFBUTtrQ0FBSyw0RUFBQ04sMERBQUtBOzRCQUFDMEIsS0FBSTs0QkFBZ0JFLFFBQU87NEJBQU1ELE9BQU07NEJBQU1FLEtBQUk7Ozs7Ozs7Ozs7O2tDQUUvRiw4REFBQ1A7d0JBQUlDLElBQUc7d0JBQU1DLFdBQVU7a0NBQ3JCaEIsU0FBU2lDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQzs0QkFDaEIscUJBRUksOERBQUM1QyxrREFBSUE7Z0NBQVN3QixJQUFJbUIsRUFBRWpDLEtBQUs7Z0NBQUVDLE1BQU1nQyxFQUFFaEMsSUFBSTtnQ0FBRWtDLGFBQWEsSUFBSXRDLFFBQVFxQztnQ0FDbEVuQixXQUFXLDRFQUVSLE9BRENuQixRQUFRc0MsSUFBSSxnQkFBZ0IsZUFDN0I7MENBQ0FELEVBQUVqQyxLQUFLOytCQUpDa0M7Ozs7O3dCQVFqQjs7Ozs7Ozs7Ozs7O1lBS0h4Qyx3QkFDQyw4REFBQ21CO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDRjtvQkFBSUUsV0FBVTs4QkFDZGhCLFNBQVNpQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0M7d0JBQ2hCLHFCQUVJLDhEQUFDNUMsa0RBQUlBOzRCQUFTd0IsSUFBSW1CLEVBQUVqQyxLQUFLOzRCQUFFQyxNQUFNZ0MsRUFBRWhDLElBQUk7NEJBQUVlLFNBQVNsQjs0QkFDbERpQixXQUFXLHlEQUVSLE9BRENuQixRQUFRc0MsSUFBSSxjQUFjLElBQzNCO3NDQUNBRCxFQUFFakMsS0FBSzsyQkFKQ2tDOzs7OztvQkFRakI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1Y7R0FqSXdCekM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0FsdE5hdi50c3g/M2U0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9sZWdhY3kvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsdE5hdigpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IHRvZ2dsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0T3BlbighaXNPcGVuKTtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJIT01FXCIsXG4gICAgICBocmVmOiBcIi9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlBST0dSQU1cIixcbiAgICAgIGhyZWY6IFwiI3Byb2dyYW1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNPTlRBQ1RcIixcbiAgICAgIGhyZWY6IFwiL2NvbnRhY3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkdBTExFUllcIixcbiAgICAgIGhyZWY6IFwiL2dhbGxlcnlcIixcbiAgICB9LFxuICBdO1xuXG4gIC8vIGhpZGUgTmF2QmFyIG9uIHNjcm9sbCBkb3duXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbGV0IHBvczEgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgcG9zMnMgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGNvbnN0IG5hdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcbiAgICAgIGlmIChuYXZFbGVtZW50ICYmIHBvczEgPiBwb3Mycykge1xuICAgICAgICBuYXZFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtaGlkZGVuXCIpO1xuICAgICAgfSBlbHNlIGlmIChuYXZFbGVtZW50KSB7XG4gICAgICAgIG5hdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdi1oaWRkZW5cIik7XG4gICAgICB9XG4gICAgICBwb3MxID0gcG9zMnM7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgXG4gICAgPGRpdiBpZD1cIm5hdlwiXG4gICAgICBjbGFzc05hbWU9e2B6LTUwIGZsZXgganVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIHRvcC0wIHRleHQtYmFzZSBtZDp0ZXh0LWxnICR7XG4gICAgICAgIGlzT3BlbiA/IGBgIDogYGBcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIHsvKiBIYW1idXJnZXIgbWVudSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTggaXRlbXMtY2VudGVyIG1kOmhpZGRlblwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBvbkNsaWNrPXsoKT0+c2V0SXRlbSgwKX0gPjxJbWFnZSBzcmM9XCIvbG9nby5wbmdcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjkwXCIgYWx0PVwiTW9udGVzc29yaSBMb2dvXCIgLz48L0xpbms+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTW9iaWxlTWVudX0gY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAge2lzT3BlbiA/IChcbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04IGgtOFwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04IGgtOFwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBkPVwiTTQgNmgxNk00IDEyaDE2bS03IDZoN1wiXG4gICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTWVudSBJdGVtcyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrIHRyYW5zaXRpb24gZHVyYXRpb24tNDAwXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiIG9uQ2xpY2s9eygpPT5zZXRJdGVtKDApfSA+PEltYWdlIHNyYz1cIi9oX2Jhbm5lci5wbmdcIiBoZWlnaHQ9XCIxNDRcIiB3aWR0aD1cIjkzMFwiIGFsdD1cImJhbm5lclwiIC8+PC9MaW5rPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBpZD1cIm5hdlwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIHN0aWNreSBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKGUsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtpfSBpZD17ZS50aXRsZX0gaHJlZj17ZS5ocmVmfSBvbk1vdXNlRG93bj17KCk9PnNldEl0ZW0oaSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMTAgcHktMSB0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkIHRyYW5zaXRpb24gYmctYmx1ZS0zMDAgZHVyYXRpb24tNTAwICR7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPT0gaSA/IFwiYmctYmx1ZS03MDBcIiA6IFwiYmctYmx1ZS01MDBcIlxuICAgICAgICAgICAgICAgICAgfSBob3ZlcjpiZy1ibHVlLTEwMCBob3Zlcjp0ZXh0LWJsdWUtOTAwYH0+XG4gICAgICAgICAgICAgICAgICB7ZS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFdoZW4gbWVudSB0b2dnbGVkIG9wZW4gKi99XG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5LTkwIGZpeGVkIHctc2NyZWVuIGgtc2NyZWVuIHRleHQtM3hsIHRvcC0yNCB6LTQwIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIGJnLXllbGxvdy0xMDAgbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKGUsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtpfSBpZD17ZS50aXRsZX0gaHJlZj17ZS5ocmVmfSBvbkNsaWNrPXt0b2dnbGVNb2JpbGVNZW51fSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0xMCBweS0xIHRleHQtZ3JheS03MDAgZm9udC1leHRyYWJvbGQgIGR1cmF0aW9uLTUwMCAke1xuICAgICAgICAgICAgICAgICAgICBpdGVtID09IGkgPyBcInVuZGVybGluZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfSBob3ZlcjpiZy1ibHVlLTEwMCBob3Zlcjp0ZXh0LWJsdWUtOTAwYH0+XG4gICAgICAgICAgICAgICAgICB7ZS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICAgIFxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZVN0YXRlIiwiQWx0TmF2IiwiaXNPcGVuIiwic2V0T3BlbiIsIml0ZW0iLCJzZXRJdGVtIiwidG9nZ2xlTW9iaWxlTWVudSIsIm5hdkl0ZW1zIiwidGl0bGUiLCJocmVmIiwicG9zMSIsIndpbmRvdyIsInNjcm9sbFkiLCJvbnNjcm9sbCIsInBvczJzIiwibmF2RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImJ1dHRvbiIsInN2ZyIsImZpbGwiLCJzdHJva2UiLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwibWFwIiwiZSIsImkiLCJvbk1vdXNlRG93biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AltNav.tsx\n"));

/***/ })

});