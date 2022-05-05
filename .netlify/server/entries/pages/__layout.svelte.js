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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_8f0b34dd = require("../../chunks/index-8f0b34dd.js");
const Nav = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  return `<nav><a href="${"/login"}"><span>Login</span></a>
	<a href="${"/"}"><span>Books</span></a></nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-vcuhhx{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-height:100vh}",
  map: null
};
const _layout = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_8f0b34dd.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
<main class="${"svelte-vcuhhx"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
