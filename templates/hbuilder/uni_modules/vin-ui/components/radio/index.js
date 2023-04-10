var V = Object.defineProperty, z = Object.defineProperties;
var A = Object.getOwnPropertyDescriptors;
var d = Object.getOwnPropertySymbols;
var F = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var p = (t, e, n) => e in t ? V(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, m = (t, e) => {
  for (var n in e || (e = {}))
    F.call(e, n) && p(t, n, e[n]);
  if (d)
    for (var n of d(e))
      M.call(e, n) && p(t, n, e[n]);
  return t;
}, f = (t, e) => z(t, A(e));
import { inject as j, computed as a } from "vue";
import { c as B } from "../component-fc679f22.mjs";
import { c as I } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const q = f(m({}, I), {
  disabled: {
    type: Boolean,
    default: !1
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
    default: "check-checked"
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
    type: [String, Number],
    default: ""
  },
  shape: {
    type: String,
    default: "round"
  }
}), { componentName: o, create: w, useVinContext: D } = B("radio"), K = w({
  props: q,
  setup(t) {
    const { getMainClass: e, getMainStyle: n } = D(t), {
      label: s,
      shape: l,
      disabled: i,
      iconName: b,
      iconSize: v,
      iconActiveName: _,
      iconClassPrefix: C,
      iconFontClassName: S
    } = t, c = j("parent", null), r = a(() => c.label.value === s), $ = a(() => i ? "vin-radio__icon--disable" : r.value ? "vin-radio__icon" : "vin-radio__icon--unchecked"), y = a(() => c.position), N = () => {
      r.value || i || c.updateValue(s);
    }, u = y.value === "left", g = a(() => e({
      [`${o}--${l}`]: !0,
      [`${o}--reverse`]: !!u
    })), h = a(n), k = a(() => `${o}__button ${r.value && `${o}__button--active`} ${i ? `${o}__button--disabled` : ""}`), x = a(() => `${o}__label ${i ? `${o}__label--disabled` : ""}`), P = a(() => r.value ? _ : b);
    return {
      shape: l,
      mainClass: g,
      mainStyle: h,
      btnClass: k,
      handleClick: N,
      reverseState: u,
      curIconName: P,
      iconSize: v,
      iconClass: $,
      iconClassPrefix: C,
      iconFontClassName: S,
      labelClass: x
    };
  }
});
export {
  K as default
};
