var b = Object.defineProperty, v = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var c = (t, e, o) => e in t ? b(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, s = (t, e) => {
  for (var o in e || (e = {}))
    k.call(e, o) && c(t, o, e[o]);
  if (l)
    for (var o of l(e))
      C.call(e, o) && c(t, o, e[o]);
  return t;
}, r = (t, e) => v(t, S(e));
import { computed as u, watch as h } from "vue";
import { c as x } from "../component-fc679f22.mjs";
import { c as T } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const w = r(s({}, T), {
  id: String,
  type: {
    type: String,
    default: "danger"
  },
  message: { type: String, default: "" },
  duration: { type: Number, default: 3e3 },
  color: { type: String, default: "" },
  background: { type: String, default: "" },
  visible: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "top"
  }
}), { create: A, useVinContext: L } = x("notify"), V = A({
  props: w,
  emits: ["update:visible", "closed", "click"],
  setup(t, { emit: e }) {
    const { getMainClass: o, getMainStyle: d } = L(t);
    let i = null;
    const f = u(
      () => o([`vin-popup-${t.position}`, `vin-notify--${t.type}`])
    ), m = u(
      () => d({
        color: t.color,
        background: t.background
      })
    ), y = () => {
      e("click");
    }, a = () => {
      i && (clearTimeout(i), i = null);
    }, n = () => {
      e("update:visible", !1), e("closed");
    }, g = () => {
      a(), t.duration && (i = setTimeout(() => {
        n();
      }, t.duration));
    };
    return h(
      () => t.visible,
      (p) => {
        p && g();
      }
    ), { mainStyle: m, mainClass: f, hide: n, onAfterLeave: () => {
      t.visible && (a(), n());
    }, onClick: y };
  }
});
export {
  V as default
};
