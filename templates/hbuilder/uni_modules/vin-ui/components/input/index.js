var w = Object.defineProperty, z = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (e, l, n) => l in e ? w(e, l, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[l] = n, y = (e, l) => {
  for (var n in l || (l = {}))
    P.call(l, n) && m(e, n, l[n]);
  if (g)
    for (var n of g(l))
      R.call(l, n) && m(e, n, l[n]);
  return e;
}, p = (e, l) => z(e, E(l));
import { ref as d, reactive as W, computed as i, watch as O, onMounted as j } from "vue";
import { c as G } from "../component-fc679f22.mjs";
import { c as H } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
function S(e, l, n) {
  const r = e.indexOf(l);
  return r === -1 ? e : l === "-" && r !== 0 ? e.slice(0, r) : e.slice(0, r + 1) + e.slice(r).replace(n, "");
}
function b(e, l = !0, n = !0) {
  l ? e = S(e, ".", /\./g) : e = e.split(".")[0], n ? e = S(e, "-", /-/g) : e = e.replace(/-/, "");
  const r = l ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(r, "");
}
const J = p(y({}, H), {
  ref: {
    type: String,
    default: ""
  },
  modelValue: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: ""
  },
  labelClass: {
    type: String,
    default: ""
  },
  labelWidth: {
    type: [String, Number],
    default: "80"
  },
  labelAlign: {
    type: String,
    default: "left"
  },
  inputAlign: {
    type: String,
    default: "left"
  },
  colon: {
    type: Boolean,
    default: !1
  },
  required: {
    type: Boolean,
    default: !1
  },
  border: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  autofocus: {
    type: Boolean,
    default: !1
  },
  maxLength: {
    type: [String, Number],
    default: ""
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  clearIcon: {
    type: String,
    default: "mask-close"
  },
  clearSize: {
    type: [String, Number],
    default: "14"
  },
  leftIconSize: {
    type: [String, Number],
    default: ""
  },
  leftIcon: {
    type: String,
    default: ""
  },
  rightIcon: {
    type: String,
    default: ""
  },
  rightIconSize: {
    type: [String, Number],
    default: ""
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  center: {
    type: Boolean,
    default: !1
  },
  rules: {
    type: Array,
    default: []
  },
  rows: {
    type: [String, Number],
    default: null
  },
  error: {
    type: Boolean,
    default: !1
  },
  errorMessage: {
    type: String,
    default: ""
  },
  errorMessageAlign: {
    type: String,
    default: ""
  },
  formatter: {
    type: Function,
    default: null
  },
  formatTrigger: {
    type: String,
    default: "onChange"
  }
}), { componentName: K, create: Q, useVinContext: U } = G("input"), D = Q({
  props: J,
  emits: [
    "update:modelValue",
    "change",
    "blur",
    "focus",
    "clear",
    "keypress",
    "click-input",
    "click-left-icon",
    "click-right-icon"
  ],
  setup(e, { emit: l, slots: n }) {
    const { getMainClass: r, getMainStyle: h } = U(e), u = d(!1), x = d(), s = d(), c = () => {
      var t;
      return String((t = e.modelValue) != null ? t : "");
    }, f = W({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), V = i(() => {
      const t = K;
      return r({
        center: e.center,
        [`${t}-disabled`]: e.disabled,
        [`${t}-required`]: e.required,
        [`${t}-error`]: e.error,
        [`${t}-border`]: e.border
      });
    }), B = i(h), C = i(() => ({
      textAlign: e.inputAlign
    })), k = i(() => ({
      textAlign: e.inputAlign,
      height: `${Number(e.rows) * 24}px`
    })), N = (t) => t === "number" ? "text" : t === "digit" ? "tel" : t;
    i(() => s.value && n.input ? s.value() : e.modelValue);
    const o = (t, a = "onChange") => {
      e.type === "digit" && (t = b(t, !1, !1)), e.type === "number" && (t = b(t, !0, !0)), e.formatter && a === e.formatTrigger && (t = e.formatter(t)), t !== e.modelValue && (l("update:modelValue", t), l("change", t));
    }, I = (t) => {
      const { value: a } = t.detail;
      o(a);
    }, A = (t) => {
      const { value: a } = t.detail;
      u.value = !0, l("focus", a, t);
    }, M = (t) => {
      setTimeout(() => {
        u.value = !1;
      }, 200);
      let { value: a } = t.detail;
      e.maxLength && a.length > Number(e.maxLength) && (a = a.slice(0, Number(e.maxLength))), o(c(), "onBlur"), l("blur", a, t);
    }, L = (t) => {
      l("update:modelValue", "", t), l("change", "", t), l("clear", "", t);
    }, T = () => {
      f.validateFailed && (f.validateFailed = !1, f.validateMessage = "");
    }, F = (t) => {
      l("click-input", t);
    }, $ = (t) => l("click-left-icon", t), q = (t) => l("click-right-icon", t);
    return O(
      () => e.modelValue,
      () => {
        o(c()), T();
      }
    ), j(() => {
      o(c(), e.formatTrigger);
    }), {
      inputRef: x,
      active: u,
      mainClass: V,
      styles: C,
      mainStyle: B,
      stylesTextarea: k,
      inputType: N,
      onInput: I,
      onFocus: A,
      onBlur: M,
      clear: L,
      onClickInput: F,
      onClickLeftIcon: $,
      onClickRightIcon: q
    };
  }
});
export {
  D as default
};
