exports.id = 516;
exports.ids = [516];
exports.modules = {

/***/ 6869:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3271))

/***/ }),

/***/ 6321:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/dembadembele/next13tuto/app/shops/layout.js");


/***/ }),

/***/ 3271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@supabase/supabase-js/dist/main/index.js
var main = __webpack_require__(2231);
;// CONCATENATED MODULE: ./supabaseClient.js

const supabase = (0,main.createClient)("https://cpgjhszgfzcportusvqb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwZ2poc3pnZnpjcG9ydHVzdnFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUwODA3NzEsImV4cCI6MTk4MDY1Njc3MX0.n-kF0dgQdLRJ69MoDrUhXO-nqJ9z-aw-OL21sZ_Vp4A");

;// CONCATENATED MODULE: ./app/shops/layout.js





async function getShops() {
    try {
        const { data , error  } = await supabase.from("Shop").select("*").order("title");
        if (error) console.log(error);
        return {
            data
        };
    } catch (error1) {
        console.log(error1);
    }
}
function Layout({ children , href  }) {
    const path = (0,navigation.usePathname)();
    const shops = (0,react_.use)(getShops());
    if (!shops) return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        children: "No shops found"
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mr-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "pr-10 flex-none",
                    children: shops && shops.data.map((shop)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/shops/${shop.id}`,
                                className: path === `/shops/${shop.id}` ? " underline text-blue-400" : "hover:text-blue-500",
                                children: shop.title
                            })
                        }, shop.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: children
            })
        ]
    });
}


/***/ })

};
;