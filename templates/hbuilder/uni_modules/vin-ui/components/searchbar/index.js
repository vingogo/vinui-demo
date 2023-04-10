var L = Object.defineProperty, k = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var d = (t, e, a) => e in t ? L(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a, r = (t, e) => {
  for (var a in e || (e = {}))
    C.call(e, a) && d(t, a, e[a]);
  if (g)
    for (var a of g(e))
      N.call(e, a) && d(t, a, e[a]);
  return t;
}, o = (t, e) => k(t, v(e));
import { reactive as V, computed as s, toRefs as B } from "vue";
import { c as M } from "../component-fc679f22.mjs";
import { c as P } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const T = o(r({}, P), {
  modelValue: {
    type: [String, Number],
    default: ""
  },
  maxLength: {
    type: [String, Number],
    default: "9999"
  },
  inputType: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: !0
  },
  background: {
    type: String,
    default: ""
  },
  inputBackground: {
    type: String,
    default: ""
  }
}), { create: F, translate: R, useVinContext: j } = M("searchbar"), D = F({
  props: T,
  emits: ["change", "update:modelValue", "blur", "focus", "clear", "search"],
  setup(t, { emit: e }) {
    const { getMainClass: a, getMainStyle: i } = j(t), l = V({
      active: !1
    }), m = s(a), h = s(() => i({
      background: t.background
    })), f = s(() => ({
      background: t.inputBackground
    })), b = (n) => {
      let u = n.target.value;
      t.maxLength && u.length > Number(t.maxLength) && (u = u.slice(0, Number(t.maxLength))), e("update:modelValue", u, n), e("change", u, n);
    }, p = (n) => {
      const c = n.target, { value: u } = c;
      l.active = !0, e("focus", u, n);
    }, S = (n) => {
      setTimeout(() => {
        l.active = !1;
      }, 0);
      const c = n.target;
      let { value: u } = c;
      t.maxLength && u.length > Number(t.maxLength) && (u = u.slice(0, Number(t.maxLength))), e("blur", u, n);
    }, x = (n) => {
      e("update:modelValue", "", n), e("change", "", n), e("clear", "");
    }, y = () => {
      e("search", t.modelValue);
    };
    return o(r({}, B(l)), {
      mainClass: m,
      valueChange: b,
      valueFocus: p,
      valueBlur: S,
      handleClear: x,
      handleSubmit: y,
      searchbarStyle: h,
      inputSearchbarStyle: f,
      translate: R
    });
  }
});
export {
  D as default
};
