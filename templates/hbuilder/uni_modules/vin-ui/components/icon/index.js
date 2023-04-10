var x = Object.defineProperty, y = Object.defineProperties;
var C = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, z = Object.prototype.propertyIsEnumerable;
var m = (e, t, n) => t in e ? x(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, s = (e, t) => {
  for (var n in t || (t = {}))
    h.call(t, n) && m(e, n, t[n]);
  if (c)
    for (var n of c(t))
      z.call(t, n) && m(e, n, t[n]);
  return e;
}, l = (e, t) => y(e, C(t));
import { computed as i } from "vue";
import { c as $ } from "../component-fc679f22.mjs";
import { p as a } from "../pxCheck-5050e78e.mjs";
import { c as k } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const N = l(s({}, k), {
  name: { type: String, default: "" },
  color: { type: String, default: "" },
  size: { type: [String, Number], default: "" },
  fontClassName: { type: String, default: "vin-iconfont" },
  classPrefix: { type: String, default: "vin-icon" },
  tag: {
    type: String,
    default: "text"
  }
}), { componentName: r, create: P, useVinContext: v } = $("icon"), I = P({
  props: N,
  emits: ["click"],
  setup(e, { emit: t }) {
    const { getMainClass: n, getMainStyle: f } = v(e), u = (S) => {
      t("click", S);
    }, o = i(() => e.name ? e.name.indexOf("/") !== -1 : !1), d = i(() => n(
      o.value ? `${r}__img` : `${e.fontClassName} ${r} ${e.classPrefix}-${e.name}`
    )), g = i(() => f({
      color: e.color,
      fontSize: a(e.size),
      width: a(e.size),
      height: a(e.size)
    }));
    return {
      isImage: o,
      mainStyle: g,
      mainClass: d,
      handleClick: u,
      name: e.name
    };
  }
});
export {
  I as default
};
