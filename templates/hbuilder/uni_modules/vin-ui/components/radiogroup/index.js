var p = Object.defineProperty, g = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var r = (e, t, o) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, l = (e, t) => {
  for (var o in t || (t = {}))
    V.call(t, o) && r(e, o, t[o]);
  if (i)
    for (var o of i(t))
      y.call(t, o) && r(e, o, t[o]);
  return e;
}, c = (e, t) => g(e, f(t));
import { provide as S, readonly as x, computed as n, watch as h } from "vue";
import { c as C } from "../component-fc679f22.mjs";
import { c as P } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const b = c(l({}, P), {
  modelValue: {
    type: [Number, String, Boolean],
    default: ""
  },
  textPosition: {
    type: String,
    default: "right"
  },
  direction: {
    type: String,
    default: "vertical"
  }
}), { componentName: v, create: M, useVinContext: N } = C("radiogroup"), j = M({
  props: b,
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const { getMainClass: o, getMainStyle: u } = N(e), d = (a) => t("update:modelValue", a);
    S("parent", {
      label: x(n(() => e.modelValue)),
      position: e.textPosition,
      updateValue: d
    }), h(
      () => e.modelValue,
      (a) => t("change", a)
    );
    const m = n(
      () => o({
        [`${v}--${e.direction}`]: !0
      })
    ), s = n(u);
    return {
      mainClass: m,
      mainStyle: s
    };
  }
});
export {
  j as default
};
