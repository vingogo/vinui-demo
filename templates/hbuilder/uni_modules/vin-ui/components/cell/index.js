var p = Object.defineProperty, y = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var o = (e, t, n) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, r = (e, t) => {
  for (var n in t || (t = {}))
    x.call(t, n) && o(e, n, t[n]);
  if (c)
    for (var n of c(t))
      k.call(t, n) && o(e, n, t[n]);
  return e;
}, a = (e, t) => y(e, S(t));
import { computed as l } from "vue";
import { c as C } from "../component-fc679f22.mjs";
import { p as b } from "../pxCheck-5050e78e.mjs";
import { c as h } from "../props-dd2296ba.mjs";
import { u as R } from "../index-91dcda46.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const T = a(r({}, h), {
  title: { type: String, default: "" },
  subTitle: { type: String, default: "" },
  desc: { type: String, default: "" },
  descTextAlign: { type: String, default: "right" },
  isLink: { type: Boolean, default: !1 },
  icon: { type: String, default: "" },
  roundRadius: { type: [String, Number], default: "" },
  to: { type: String, default: "" },
  replace: { type: Boolean, default: !1 }
}), { componentName: A, create: B, useVinContext: L } = C("cell"), v = B({
  props: T,
  emits: ["click"],
  setup(e, { emit: t }) {
    const { getMainClass: n, getMainStyle: s } = L(e), { push: u, replace: d } = R(), f = l(() => n({
      [`${A}--clickable`]: e.isLink || e.to
    })), m = l(() => s({
      borderRadius: b(e.roundRadius)
    })), g = l(() => ({
      "text-align": e.descTextAlign
    }));
    return {
      handleClick: (i) => {
        if (e.replace && e.to) {
          d(e.to);
          return;
        }
        if (e.to) {
          u(e.to);
          return;
        }
        t("click", i);
      },
      classes: f,
      baseStyle: m,
      descStyle: g
    };
  }
});
export {
  v as default
};
