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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
const get = async ({ params, locals, request }) => {
  const apiBaseUrl = process.env.API_URL;
  const { isbn } = params;
  console.log("hello", { isbn, apiBaseUrl });
  try {
    const response = await fetch(`${apiBaseUrl}/books/${isbn}`);
    const data = await response.json();
    console.log({ data });
    return {
      status: 200,
      body: data
    };
  } catch (e) {
    console.log(e);
    return {
      status: 500,
      body: {}
    };
  }
};
