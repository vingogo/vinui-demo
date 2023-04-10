var P = Object.defineProperty, _ = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var z = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var c = (e, u, a) => u in e ? P(e, u, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[u] = a, s = (e, u) => {
  for (var a in u || (u = {}))
    z.call(u, a) && c(e, a, u[a]);
  if (o)
    for (var a of o(u))
      A.call(u, a) && c(e, a, u[a]);
  return e;
}, b = (e, u) => _(e, w(u));
import { computed as f } from "vue";
import { c as B } from "../component-fc679f22.mjs";
import { p as N } from "../pxCheck-5050e78e.mjs";
import { c as M } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const k = b(s({}, M), {
  modelValue: {
    type: [Number, String],
    default: 0
  },
  inputWidth: {
    type: [Number, String],
    default: ""
  },
  buttonSize: {
    type: [Number, String],
    default: ""
  },
  min: {
    type: [Number, String],
    default: 1
  },
  max: {
    type: [Number, String],
    default: 9999
  },
  step: {
    type: [Number, String],
    default: 1
  },
  decimalPlaces: {
    type: [Number, String],
    default: 0
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  }
}), { componentName: D, create: F, useVinContext: W } = B("input-number"), H = F({
  props: k,
  emits: ["update:modelValue", "change", "blur", "focus", "reduce", "add", "overlimit"],
  setup(e, { emit: u }) {
    const { getMainClass: a, getMainStyle: g } = W(e), y = f(() => a({
      [`${D}--disabled`]: e.disabled
    })), x = f(() => g({
      height: N(e.buttonSize)
    })), S = (t) => Number(t).toFixed(Number(e.decimalPlaces)), V = (t) => {
      const l = t.target;
      u("update:modelValue", l.value, t);
    }, r = (t, l) => {
      const n = S(t);
      u("update:modelValue", n, l), u("change", n, l);
    }, d = (t = Number(e.modelValue)) => t < Number(e.max) && !e.disabled, m = (t = Number(e.modelValue)) => t > Number(e.min) && !e.disabled, h = (t) => {
      if (u("reduce", t), m()) {
        const l = Number(e.modelValue) - Number(e.step);
        r(l, t);
      } else
        u("overlimit", t, "reduce");
    }, C = (t) => {
      if (u("add", t), d()) {
        const l = Number(e.modelValue) + Number(e.step);
        r(l, t);
      } else
        u("overlimit", t, "add");
    }, i = (t) => {
      if (e.disabled || e.readonly)
        return;
      let n = +t.target.value;
      n < Number(e.min) ? n = Number(e.min) : n > Number(e.max) && (n = Number(e.max)), r(n, t), u("blur", t);
    };
    return {
      mainClass: y,
      mainStyle: x,
      change: V,
      blur: i,
      focus: (t) => {
        if (!e.disabled) {
          if (e.readonly) {
            i(t);
            return;
          }
          u("focus", t);
        }
      },
      add: C,
      addAllow: d,
      reduce: h,
      reduceAllow: m,
      pxCheck: N
    };
  }
});
export {
  H as default
};
