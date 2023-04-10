var p = Object.defineProperty, y = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var r = (e, t, a) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    S.call(t, a) && r(e, a, t[a]);
  if (o)
    for (var a of o(t))
      C.call(t, a) && r(e, a, t[a]);
  return e;
}, c = (e, t) => y(e, g(t));
import { computed as u } from "vue";
import { c as b } from "../component-fc679f22.mjs";
import { p as h } from "../pxCheck-5050e78e.mjs";
import { c as k } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const v = c(i({}, k), {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  iconSize: {
    type: [String, Number],
    default: 18
  },
  activeColor: {
    type: String,
    default: ""
  },
  voidColor: {
    type: String,
    default: ""
  },
  uncheckedIcon: {
    type: String,
    default: "star-n"
  },
  checkedIcon: {
    type: String,
    default: "star-fill-n"
  },
  fontClassName: {
    type: String,
    default: "vin-iconfont"
  },
  classPrefix: {
    type: String,
    default: "vin-icon"
  },
  allowHalf: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  spacing: {
    type: [String, Number],
    default: 14
  }
}), { create: N, useVinContext: V } = b("rate"), M = N({
  props: v,
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const { getMainClass: a, getMainStyle: f } = V(e), d = u(a), s = u(f);
    return {
      mainClass: d,
      mainStyle: s,
      onClick: (m, n) => {
        if (e.disabled || e.readonly)
          return;
        let l = 0;
        n === 1 && e.modelValue === n || (l = n, e.allowHalf && m === 2 && (l -= 0.5)), t("update:modelValue", l), t("change", l);
      },
      pxCheck: h
    };
  }
});
export {
  M as default
};
