var V = Object.defineProperty, P = Object.defineProperties;
var $ = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var v = (e, t, n) => t in e ? V(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, b = (e, t) => {
  for (var n in t || (t = {}))
    M.call(t, n) && v(e, n, t[n]);
  if (f)
    for (var n of f(t))
      A.call(t, n) && v(e, n, t[n]);
  return e;
}, h = (e, t) => P(e, $(t));
import { inject as B, computed as a, onMounted as j, getCurrentInstance as z } from "vue";
import { c as D } from "../component-fc679f22.mjs";
import { c as F } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const I = h(b({}, F), {
  modelValue: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  textPosition: {
    type: String,
    default: "right"
  },
  iconSize: {
    type: [String, Number],
    default: ""
  },
  iconName: {
    type: String,
    default: "check-normal"
  },
  iconActiveName: {
    type: String,
    default: "checked"
  },
  iconClassPrefix: {
    type: String,
    default: "vin-icon"
  },
  iconFontClassName: {
    type: String,
    default: "vin-iconfont"
  },
  label: {
    type: String,
    default: ""
  }
}), { create: O, componentName: s, useVinContext: q } = D("checkbox"), J = O({
  props: I,
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const { getMainClass: n, getMainStyle: g } = q(e), l = B("parent", null), o = a(() => !!l), r = a(() => o.value ? l.value.value.includes(e.label) : e.modelValue), i = a(() => o.value ? l.disabled.value : e.disabled), x = a(() => !!e.modelValue), p = a(() => i.value ? "vin-checkbox__icon--disable" : r.value ? "vin-checkbox__icon" : "vin-checkbox__icon--unchecked"), y = a(() => `${s}__label ${i.value ? `${s}__label--disabled` : ""}`), S = a(() => r.value ? e.iconActiveName : e.iconName), k = (u, c) => {
      t("update:modelValue", u), t("change", u, c);
    }, C = (u) => {
      if (!i.value && (k(!x.value, e.label), o.value)) {
        const { value: c } = l.value, { label: d } = e, m = c.indexOf(d);
        m > -1 ? c.splice(m, 1) : c.push(d), l.updateValue(c);
      }
    };
    j(() => {
      o.value && l.relation(z());
    });
    const _ = a(() => n({
      [`${s}--reverse`]: e.textPosition === "left"
    })), N = a(g);
    return {
      iconName: S,
      color: p,
      mainClass: _,
      mainStyle: N,
      labelClass: y,
      handleClick: C
    };
  }
});
export {
  J as default
};
