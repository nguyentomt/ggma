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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f16dbb18eedf\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MGFmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImYxNmRiYjE4ZWVkZlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/AltNav.tsx":
/*!***************************************!*\
  !*** ./src/app/components/AltNav.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AltNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/legacy/image */ \"(app-pages-browser)/./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction AltNav() {\n    _s();\n    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const toggleMobileMenu = ()=>{\n        setOpen(!isOpen);\n    };\n    const navItems = [\n        {\n            title: \"HOME\",\n            href: \"/\"\n        },\n        {\n            title: \"PROGRAM\",\n            href: \"/program\"\n        },\n        {\n            title: \"CONTACT\",\n            href: \"/contact\"\n        },\n        {\n            title: \"GALLERY\",\n            href: \"/gallery\"\n        }\n    ];\n    // hide NavBar on scroll down\n    // if (typeof window !== \"undefined\") {\n    //   let pos1 = window.scrollY;\n    //   window.onscroll = function () {\n    //     let pos2s = window.scrollY;\n    //     const navElement = document.getElementById(\"nav\");\n    //     if (navElement && pos1 > pos2s) {\n    //       navElement.classList.remove(\"nav-hidden\");\n    //     } else if (navElement) {\n    //       navElement.classList.add(\"nav-hidden\");\n    //     }\n    //     pos1 = pos2s;\n    //   };\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"nav\",\n        className: \"z-50 flex justify-around items-center top-0 text-base md:text-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-center gap-8 items-center md:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        onClick: ()=>setItem(0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/logo.png\",\n                            width: \"120\",\n                            height: \"90\",\n                            alt: \"Montessori Logo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 48\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleMobileMenu,\n                        className: \"focus:outline-none\",\n                        children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"w-8 h-8\",\n                            fill: \"none\",\n                            stroke: \"currentColor\",\n                            viewBox: \"0 0 24 24\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: \"2\",\n                                d: \"M6 18L18 6M6 6l12 12\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"w-8 h-8\",\n                            fill: \"none\",\n                            stroke: \"currentColor\",\n                            viewBox: \"0 0 24 24\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: \"2\",\n                                d: \"M4 6h16M4 12h16m-7 6h7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:block transition duration-400\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        onClick: ()=>setItem(0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/h_banner.png\",\n                            height: \"144\",\n                            width: \"930\",\n                            alt: \"banner\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 48\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"nav\",\n                        className: \"flex flex-col md:flex-row items-center sticky justify-center\",\n                        children: navItems.map((e, i)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                id: e.title,\n                                href: e.href,\n                                onMouseDown: ()=>setItem(i),\n                                className: \"px-10 py-1 text-white font-extrabold transition duration-500 \".concat(item == i ? \"bg-blue-700\" : \"bg-blue-500\", \" hover:bg-blue-100 hover:text-blue-900\"),\n                                children: e.title\n                            }, i, false, {\n                                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"opacity-90 fixed w-screen h-screen text-3xl top-0 pt-20 z-40 left-1/2 transform -translate-x-1/2 bg-yellow-100 md:hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: navItems.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            id: e.title,\n                            href: e.href,\n                            onClick: toggleMobileMenu,\n                            className: \"px-10 py-1 text-gray-700 font-extrabold  duration-500 \".concat(item == i ? \"underline\" : \"\", \" hover:bg-blue-100 hover:text-blue-900\"),\n                            children: e.title\n                        }, i, false, {\n                            fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tomnguyen/Codesmith/ggma/ggma-1/src/app/components/AltNav.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(AltNav, \"WcL73OUCcq11YQTyCGUBgf0YviQ=\");\n_c = AltNav;\nvar _c;\n$RefreshReg$(_c, \"AltNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BbHROYXYudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDUztBQUNMO0FBRWxCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1NLG1CQUFtQjtRQUN2QkgsUUFBUSxDQUFDRDtJQUNYO0lBRUEsTUFBTUssV0FBVztRQUNmO1lBQ0VDLE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsTUFBTTtRQUNSO0tBQ0Q7SUFFRCw2QkFBNkI7SUFDN0IsdUNBQXVDO0lBQ3ZDLCtCQUErQjtJQUMvQixvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLHlEQUF5RDtJQUN6RCx3Q0FBd0M7SUFDeEMsbURBQW1EO0lBQ25ELCtCQUErQjtJQUMvQixnREFBZ0Q7SUFDaEQsUUFBUTtJQUNSLG9CQUFvQjtJQUNwQixPQUFPO0lBQ1AsSUFBSTtJQUVKLHFCQUVFLDhEQUFDQztRQUFJQyxJQUFHO1FBQ05DLFdBQVk7OzBCQUdaLDhEQUFDRjtnQkFBSUUsV0FBVTs7a0NBQ2YsOERBQUNkLGtEQUFJQTt3QkFBQ1csTUFBSzt3QkFBSUksU0FBUyxJQUFJUixRQUFRO2tDQUFLLDRFQUFDTiwwREFBS0E7NEJBQUNlLEtBQUk7NEJBQVlDLE9BQU07NEJBQU1DLFFBQU87NEJBQUtDLEtBQUk7Ozs7Ozs7Ozs7O2tDQUMxRiw4REFBQ0M7d0JBQU9MLFNBQVNQO3dCQUFrQk0sV0FBVTtrQ0FDMUNWLHVCQUNDLDhEQUFDaUI7NEJBQ0NQLFdBQVU7NEJBQ1ZRLE1BQUs7NEJBQ0xDLFFBQU87NEJBQ1BDLFNBQVE7NEJBQ1JDLE9BQU07c0NBRU4sNEVBQUNDO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsYUFBWTtnQ0FDWkMsR0FBRTs7Ozs7Ozs7OztpREFJTiw4REFBQ1Q7NEJBQ0NQLFdBQVU7NEJBQ1ZRLE1BQUs7NEJBQ0xDLFFBQU87NEJBQ1BDLFNBQVE7NEJBQ1JDLE9BQU07c0NBRU4sNEVBQUNDO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsYUFBWTtnQ0FDWkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRWiw4REFBQ2xCO2dCQUFJRSxXQUFVOztrQ0FDZiw4REFBQ2Qsa0RBQUlBO3dCQUFDVyxNQUFLO3dCQUFJSSxTQUFTLElBQUlSLFFBQVE7a0NBQUssNEVBQUNOLDBEQUFLQTs0QkFBQ2UsS0FBSTs0QkFBZ0JFLFFBQU87NEJBQU1ELE9BQU07NEJBQU1FLEtBQUk7Ozs7Ozs7Ozs7O2tDQUUvRiw4REFBQ1A7d0JBQUlDLElBQUc7d0JBQU1DLFdBQVU7a0NBQ3JCTCxTQUFTc0IsR0FBRyxDQUFDLENBQUNDLEdBQUdDOzRCQUNoQixxQkFFSSw4REFBQ2pDLGtEQUFJQTtnQ0FBU2EsSUFBSW1CLEVBQUV0QixLQUFLO2dDQUFFQyxNQUFNcUIsRUFBRXJCLElBQUk7Z0NBQUV1QixhQUFhLElBQUkzQixRQUFRMEI7Z0NBQ2xFbkIsV0FBVyxnRUFFUixPQURDUixRQUFRMkIsSUFBSSxnQkFBZ0IsZUFDN0I7MENBQ0FELEVBQUV0QixLQUFLOytCQUpDdUI7Ozs7O3dCQVFqQjs7Ozs7Ozs7Ozs7O1lBS0g3Qix3QkFDQyw4REFBQ1E7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNGO29CQUFJRSxXQUFVOzhCQUNkTCxTQUFTc0IsR0FBRyxDQUFDLENBQUNDLEdBQUdDO3dCQUNoQixxQkFFSSw4REFBQ2pDLGtEQUFJQTs0QkFBU2EsSUFBSW1CLEVBQUV0QixLQUFLOzRCQUFFQyxNQUFNcUIsRUFBRXJCLElBQUk7NEJBQUVJLFNBQVNQOzRCQUNsRE0sV0FBVyx5REFFUixPQURDUixRQUFRMkIsSUFBSSxjQUFjLElBQzNCO3NDQUNBRCxFQUFFdEIsS0FBSzsyQkFKQ3VCOzs7OztvQkFRakI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1Y7R0EvSHdCOUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0FsdE5hdi50c3g/M2U0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9sZWdhY3kvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsdE5hdigpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IHRvZ2dsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0T3BlbighaXNPcGVuKTtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJIT01FXCIsXG4gICAgICBocmVmOiBcIi9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlBST0dSQU1cIixcbiAgICAgIGhyZWY6IFwiL3Byb2dyYW1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNPTlRBQ1RcIixcbiAgICAgIGhyZWY6IFwiL2NvbnRhY3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkdBTExFUllcIixcbiAgICAgIGhyZWY6IFwiL2dhbGxlcnlcIixcbiAgICB9LFxuICBdO1xuXG4gIC8vIGhpZGUgTmF2QmFyIG9uIHNjcm9sbCBkb3duXG4gIC8vIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIC8vICAgbGV0IHBvczEgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgLy8gICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIC8vICAgICBsZXQgcG9zMnMgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgLy8gICAgIGNvbnN0IG5hdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcbiAgLy8gICAgIGlmIChuYXZFbGVtZW50ICYmIHBvczEgPiBwb3Mycykge1xuICAvLyAgICAgICBuYXZFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtaGlkZGVuXCIpO1xuICAvLyAgICAgfSBlbHNlIGlmIChuYXZFbGVtZW50KSB7XG4gIC8vICAgICAgIG5hdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdi1oaWRkZW5cIik7XG4gIC8vICAgICB9XG4gIC8vICAgICBwb3MxID0gcG9zMnM7XG4gIC8vICAgfTtcbiAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgXG4gICAgPGRpdiBpZD1cIm5hdlwiXG4gICAgICBjbGFzc05hbWU9e2B6LTUwIGZsZXgganVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIHRvcC0wIHRleHQtYmFzZSBtZDp0ZXh0LWxnYH1cbiAgICA+XG4gICAgICB7LyogSGFtYnVyZ2VyIG1lbnUgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGdhcC04IGl0ZW1zLWNlbnRlciBtZDpoaWRkZW5cIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgb25DbGljaz17KCk9PnNldEl0ZW0oMCl9ID48SW1hZ2Ugc3JjPVwiL2xvZ28ucG5nXCIgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCI5MFwiIGFsdD1cIk1vbnRlc3NvcmkgTG9nb1wiIC8+PC9MaW5rPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1vYmlsZU1lbnV9IGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLThcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLThcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgZD1cIk00IDZoMTZNNCAxMmgxNm0tNyA2aDdcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIE1lbnUgSXRlbXMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayB0cmFuc2l0aW9uIGR1cmF0aW9uLTQwMFwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBvbkNsaWNrPXsoKT0+c2V0SXRlbSgwKX0gPjxJbWFnZSBzcmM9XCIvaF9iYW5uZXIucG5nXCIgaGVpZ2h0PVwiMTQ0XCIgd2lkdGg9XCI5MzBcIiBhbHQ9XCJiYW5uZXJcIiAvPjwvTGluaz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgaWQ9XCJuYXZcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBzdGlja3kganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7bmF2SXRlbXMubWFwKChlLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaWQ9e2UudGl0bGV9IGhyZWY9e2UuaHJlZn0gb25Nb3VzZURvd249eygpPT5zZXRJdGVtKGkpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTEwIHB5LTEgdGV4dC13aGl0ZSBmb250LWV4dHJhYm9sZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCAke1xuICAgICAgICAgICAgICAgICAgICBpdGVtID09IGkgPyBcImJnLWJsdWUtNzAwXCIgOiBcImJnLWJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgICAgIH0gaG92ZXI6YmctYmx1ZS0xMDAgaG92ZXI6dGV4dC1ibHVlLTkwMGB9PlxuICAgICAgICAgICAgICAgICAge2UudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBXaGVuIG1lbnUgdG9nZ2xlZCBvcGVuICovfVxuICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eS05MCBmaXhlZCB3LXNjcmVlbiBoLXNjcmVlbiB0ZXh0LTN4bCB0b3AtMCBwdC0yMCB6LTQwIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIGJnLXllbGxvdy0xMDAgbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKGUsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtpfSBpZD17ZS50aXRsZX0gaHJlZj17ZS5ocmVmfSBvbkNsaWNrPXt0b2dnbGVNb2JpbGVNZW51fSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0xMCBweS0xIHRleHQtZ3JheS03MDAgZm9udC1leHRyYWJvbGQgIGR1cmF0aW9uLTUwMCAke1xuICAgICAgICAgICAgICAgICAgICBpdGVtID09IGkgPyBcInVuZGVybGluZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfSBob3ZlcjpiZy1ibHVlLTEwMCBob3Zlcjp0ZXh0LWJsdWUtOTAwYH0+XG4gICAgICAgICAgICAgICAgICB7ZS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICAgIFxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZVN0YXRlIiwiQWx0TmF2IiwiaXNPcGVuIiwic2V0T3BlbiIsIml0ZW0iLCJzZXRJdGVtIiwidG9nZ2xlTW9iaWxlTWVudSIsIm5hdkl0ZW1zIiwidGl0bGUiLCJocmVmIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJidXR0b24iLCJzdmciLCJmaWxsIiwic3Ryb2tlIiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCIsIm1hcCIsImUiLCJpIiwib25Nb3VzZURvd24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AltNav.tsx\n"));

/***/ })

});