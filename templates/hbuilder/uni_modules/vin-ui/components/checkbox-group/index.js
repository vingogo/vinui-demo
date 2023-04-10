var y = Object.defineProperty, b = Object.defineProperties;
var C = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var d = (a, e, o) => e in a ? y(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, u = (a, e) => {
  for (var o in e || (e = {}))
    v.call(e, o) && d(a, o, e[o]);
  if (r)
    for (var o of r(e))
      S.call(e, o) && d(a, o, e[o]);
  return a;
}, p = (a, e) => b(a, C(e));
import { reactive as k, provide as A, computed as l, watch as M } from "vue";
import { c as P } from "../component-fc679f22.mjs";
import { c as w } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const B = p(u({}, w), {
  modelValue: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}), { create: E, useVinContext: G } = P("checkboxgroup"), F = E({
  props: B,
  emits: ["change", "update:modelValue"],
  setup(a, { emit: e, expose: o }) {
    const { getMainClass: i, getMainStyle: m } = G(a), c = k({
      children: []
    }), f = (t) => {
      t.proxy && c.children.push(t.proxy);
    }, h = (t) => {
      e("update:modelValue", t), e("change", t);
    }, g = (t) => {
      const s = [];
      t && c.children.forEach((n) => {
        s.push(n == null ? void 0 : n.label);
      }), e("update:modelValue", s);
    };
    A("parent", {
      value: l(() => a.modelValue),
      disabled: l(() => a.disabled),
      updateValue: h,
      relation: f
    }), M(
      () => a.modelValue,
      (t) => {
        e("change", t);
      }
    );
    const V = l(i), x = l(m);
    return o({ toggleAll: g }), {
      mainClass: V,
      mainStyle: x
    };
  }
});
export {
  F as default
};
