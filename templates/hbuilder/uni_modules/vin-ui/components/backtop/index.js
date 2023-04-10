var f = Object.defineProperty, k = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var l = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, r = (t, e) => {
  for (var o in e || (e = {}))
    g.call(e, o) && l(t, o, e[o]);
  if (n)
    for (var o of n(e))
      h.call(e, o) && l(t, o, e[o]);
  return t;
}, a = (t, e) => k(t, x(e));
import { reactive as y, computed as i, toRefs as T } from "vue";
import { c as N } from "../component-fc679f22.mjs";
import { c as z } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const C = a(r({}, z), {
  height: {
    type: String,
    default: "100vh"
  },
  bottom: {
    type: Number,
    default: 20
  },
  right: {
    type: Number,
    default: 10
  },
  distance: {
    type: Number,
    default: 200
  },
  zIndex: {
    type: Number,
    default: 10
  }
}), { create: I, useVinContext: S } = N("backtop"), w = I({
  props: C,
  emits: ["click"],
  setup(t, { emit: e }) {
    const { getMainClass: o, getMainStyle: p } = S(t), c = y({
      backTop: !1,
      scrollTop: 1
    }), m = i(() => o({ show: c.backTop })), u = i(() => p({
      right: `${t.right}px`,
      bottom: `${t.bottom}px`,
      zIndex: t.zIndex
    })), d = (s) => {
      c.scrollTop = 2, c.backTop = s.detail.scrollTop >= t.distance;
    }, b = (s) => {
      c.scrollTop = 1, e("click", s);
    };
    return a(r({}, T(c)), {
      classes: m,
      style: u,
      scroll: d,
      click: b
    });
  }
});
export {
  w as default
};
