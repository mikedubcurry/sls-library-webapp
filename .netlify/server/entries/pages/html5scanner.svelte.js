var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Html5scanner
});
module.exports = __toCommonJS(stdin_exports);
var import_index_8f0b34dd = require("../../chunks/index-8f0b34dd.js");
var import_html5_qrcode = require("html5-qrcode");
const getStores = () => {
  const stores = (0, import_index_8f0b34dd.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var html5scanner_svelte_svelte_type_style_lang = "";
const css = {
  code: ".scanner.svelte-3t0cnm{max-width:600px;width:100%}",
  map: null
};
const Html5scanner = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_8f0b34dd.a)(page, (value) => value);
  let bookData = {};
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div><h1>Library of Alexa</h1></div>

<div class="${"scanner svelte-3t0cnm"}"><div id="${"reader"}"></div>
	<pre>${(0, import_index_8f0b34dd.e)(JSON.stringify(bookData, null, 2))}</pre>
</div>`;
});
