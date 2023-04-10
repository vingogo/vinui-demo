var u = Object.defineProperty;
var n = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, l = (e, t) => {
  for (var o in t || (t = {}))
    y.call(t, o) && a(e, o, t[o]);
  if (n)
    for (var o of n(t))
      C.call(t, o) && a(e, o, t[o]);
  return e;
};
import { computed as i } from "vue";
import { c as d } from "../component-fc679f22.mjs";
import { o as f } from "../common-5c58cb85.mjs";
import "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const { create: v, useVinContext: k } = d("overlay"), I = v({
  props: f,
  emits: ["click", "update:visible"],
  setup(e, { emit: t }) {
    const { getMainClass: o, getMainStyle: s } = k(e), c = i(() => o(e.overlayClass)), r = i(() => s(l({
      zIndex: e.zIndex
    }, e.overlayStyle)));
    return { mainClass: c, mainStyle: r, onClick: (m) => {
      t("click", m), e.closeOnClickOverlay && t("update:visible", !1);
    } };
  }
});
export {
  I as default
};
