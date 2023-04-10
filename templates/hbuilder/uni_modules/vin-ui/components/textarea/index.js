var y = Object.defineProperty, b = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var u = (e, t, n) => t in e ? y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, d = (e, t) => {
  for (var n in t || (t = {}))
    h.call(t, n) && u(e, n, t[n]);
  if (s)
    for (var n of s(t))
      S.call(t, n) && u(e, n, t[n]);
  return e;
}, i = (e, t) => b(e, x(t));
import { computed as r, onMounted as C } from "vue";
import { c as V } from "../component-fc679f22.mjs";
import { c as p } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const B = i(d({}, p), {
  modelValue: {
    type: [String],
    default: ""
  },
  placeholder: {
    type: String,
    default: ""
  },
  maxLength: {
    type: [String, Number],
    default: ""
  },
  rows: {
    type: [String, Number],
    default: ""
  },
  limitShow: {
    type: Boolean,
    default: !1
  },
  autosize: {
    type: Boolean,
    default: !1
  },
  textAlign: {
    type: String,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  autofocus: {
    type: Boolean,
    default: !1
  }
}), { componentName: N, create: L, translate: A, useVinContext: M } = V("textarea"), D = L({
  props: B,
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(e, { emit: t }) {
    const { getMainClass: n, getMainStyle: f } = M(e), c = r(() => n({
      [`${N}--disabled`]: e.disabled
    })), m = r(f), g = r(() => ({
      textAlign: e.textAlign
      // resize: props.autosize ? 'vertical' : 'none'
    })), o = (a, l) => {
      e.maxLength && (a == null ? void 0 : a.length) > Number(e.maxLength) && (a = a.substring(0, Number(e.maxLength))), t("update:modelValue", a, l), t("change", a, l);
    };
    return C(() => {
      e.modelValue && o(String(e.modelValue));
    }), {
      mainStyle: m,
      mainClass: c,
      styles: g,
      change: (a) => {
        const { value: l } = a.detail;
        o(l, a);
      },
      focus: (a) => {
        e.disabled || e.readonly || t("focus", a);
      },
      blur: (a) => {
        if (e.disabled || e.readonly)
          return;
        const { value: l } = a.detail;
        o(l, a), t("blur", a);
      },
      translate: A
    };
  }
});
export {
  D as default
};
