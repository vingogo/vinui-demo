var g = Object.defineProperty, v = Object.defineProperties;
var y = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, r = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && c(e, a, t[a]);
  if (u)
    for (var a of u(t))
      S.call(t, a) && c(e, a, t[a]);
  return e;
}, d = (e, t) => v(e, y(t));
import { computed as o } from "vue";
import { c as C } from "../component-fc679f22.mjs";
import { c as b } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const V = d(r({}, b), {
  modelValue: {
    type: [String, Number, Boolean],
    default: !1
  },
  disable: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  name: {
    type: String,
    default: "loading"
  },
  color: {
    type: String,
    default: ""
  },
  size: {
    type: [String, Number],
    default: "12px"
  },
  activeColor: {
    type: String,
    default: ""
  },
  inactiveColor: {
    type: String,
    default: ""
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [String, Number, Boolean],
    default: !0
  },
  inactiveValue: {
    type: [String, Number, Boolean],
    default: !1
  }
}), { componentName: x, create: h, useVinContext: B } = C("switch"), T = h({
  props: V,
  emits: ["change", "update:modelValue", "update:loading"],
  setup(e, { emit: t }) {
    const { getMainClass: a, getMainStyle: s } = B(e), n = o(() => e.modelValue === e.activeValue), f = o(() => {
      const l = x;
      return a({
        [n.value ? "switch-open" : "switch-close"]: !0,
        [`${l}-disable`]: e.disable,
        [`${l}-base`]: !0
      });
    }), m = o(() => s({
      backgroundColor: n.value ? e.activeColor : e.inactiveColor
    }));
    return {
      mainClass: f,
      mainStyle: m,
      onClick: (l) => {
        if (e.disable || e.loading)
          return;
        const i = n.value ? e.inactiveValue : e.activeValue;
        t("update:modelValue", i), t("update:loading"), t("change", i, l);
      }
    };
  }
});
export {
  T as default
};
