var l = Object.defineProperty, u = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var s = (e, t, o) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, r = (e, t) => {
  for (var o in t || (t = {}))
    d.call(t, o) && s(e, o, t[o]);
  if (n)
    for (var o of n(t))
      y.call(t, o) && s(e, o, t[o]);
  return e;
}, c = (e, t) => u(e, f(t));
import { computed as i } from "vue";
import { c as b } from "../component-fc679f22.mjs";
import { T as S } from "../common-94cefcbc.mjs";
import { c as g } from "../props-dd2296ba.mjs";
import { u as C } from "../useInject-3fe60ff4.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const K = c(r({}, g), {
  title: {
    type: [String, Number],
    default: ""
  },
  paneKey: {
    type: [String, Number],
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}), { create: x, useVinContext: v } = b("tabpane"), k = x({
  props: K,
  emits: ["click"],
  setup(e) {
    const { getMainClass: t, getMainStyle: o } = v(e), { parent: a } = C(S), m = i(
      () => t({
        active: e.paneKey === (a == null ? void 0 : a.activeKey)
      })
    ), p = i(o);
    return { mainClass: m, mainStyle: p };
  }
});
export {
  k as default
};
