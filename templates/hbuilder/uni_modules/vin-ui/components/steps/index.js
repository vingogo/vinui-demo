var d = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var c = (t, e, o) => e in t ? d(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, i = (t, e) => {
  for (var o in e || (e = {}))
    y.call(e, o) && c(t, o, e[o]);
  if (s)
    for (var o of s(e))
      C.call(e, o) && c(t, o, e[o]);
  return t;
}, a = (t, e) => f(t, g(e));
import { reactive as S, computed as p, provide as x } from "vue";
import { c as h } from "../component-fc679f22.mjs";
import { c as $ } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const k = a(i({}, $), {
  direction: {
    type: String,
    default: "horizontal"
  },
  current: {
    type: [String, Number],
    default: "0"
  },
  progressDot: {
    type: Boolean,
    default: !1
  }
}), { create: v, componentName: D, useVinContext: E } = h("steps"), V = v({
  props: k,
  emits: ["click-step"],
  setup(t, { emit: e }) {
    const { getMainClass: o, getMainStyle: m } = E(t), r = S({
      children: []
    }), l = p(() => {
      const n = D;
      return o({
        [`${n}-${t.direction}`]: !0,
        [`${n}-dot`]: !!t.progressDot
      });
    }), u = p(m);
    return x("parent", {
      relation: (n) => {
        n && r.children.push(n);
      },
      state: r,
      props: t,
      onEmit: (n) => {
        e("click-step", n);
      }
    }), {
      mainClass: l,
      mainStyle: u
    };
  }
});
export {
  V as default
};
