var C = Object.defineProperty, x = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var d = (l, t, a) => t in l ? C(l, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : l[t] = a, p = (l, t) => {
  for (var a in t || (t = {}))
    h.call(t, a) && d(l, a, t[a]);
  if (f)
    for (var a of f(t))
      P.call(t, a) && d(l, a, t[a]);
  return l;
}, v = (l, t) => x(l, B(t));
import { toRefs as z, computed as m } from "vue";
import { c as M } from "../component-fc679f22.mjs";
import { c as N } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const F = v(p({}, N), {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  shape: {
    type: String,
    default: "round"
  },
  color: String,
  plain: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String,
    default: ""
  },
  iconFontClassName: {
    type: String,
    default: "vin-iconfont"
  },
  iconClassPrefix: {
    type: String,
    default: "vin-icon"
  },
  loading: {
    type: Boolean,
    default: !1
  }
}), { componentName: R, create: V, useVinContext: j } = M("button"), E = V({
  props: F,
  emits: ["click"],
  setup(l, { emit: t }) {
    const { type: a, size: n, shape: i, disabled: s, loading: u, color: o, plain: c, block: g } = z(l), { getMainClass: y, getMainStyle: b } = j(l), S = (e) => {
      !u.value && !s.value && t("click", e);
    }, $ = m(() => {
      const e = R;
      return y({
        [`${e}--${a.value}`]: a.value,
        [`${e}--${n.value}`]: n.value,
        [`${e}--${i.value}`]: i.value,
        [`${e}--plain`]: c.value,
        [`${e}--block`]: g.value,
        [`${e}--disabled`]: s.value,
        [`${e}--loading`]: u.value
      });
    }), k = m(() => {
      var r;
      const e = {};
      return o != null && o.value && (c.value ? (e.color = o.value, e.background = "#fff", (r = o.value) != null && r.includes("gradient") || (e.borderColor = o.value)) : (e.color = "#fff", e.background = o.value)), b(e);
    });
    return {
      handleClick: S,
      classes: $,
      mainStyle: k
    };
  }
});
export {
  E as default
};
