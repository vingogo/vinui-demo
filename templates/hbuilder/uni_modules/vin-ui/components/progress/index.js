var h = Object.defineProperty, C = Object.defineProperties;
var k = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? h(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, l = (t, e) => {
  for (var o in e || (e = {}))
    b.call(e, o) && a(t, o, e[o]);
  if (s)
    for (var o of s(e))
      B.call(e, o) && a(t, o, e[o]);
  return t;
}, c = (t, e) => C(t, k(e));
import { useSlots as w, ref as r, computed as n } from "vue";
import { c as M } from "../component-fc679f22.mjs";
import { c as N } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const P = c(l({}, N), {
  percentage: {
    type: [Number, String],
    default: 0,
    required: !0
  },
  size: {
    type: String,
    default: "base"
  },
  status: {
    type: String,
    default: "text"
  },
  strokeWidth: {
    type: [Number, String],
    default: ""
  },
  textInside: {
    type: Boolean,
    default: !1
  },
  showText: {
    type: Boolean,
    default: !0
  },
  strokeColor: {
    type: String,
    default: ""
  },
  textColor: {
    tyep: String,
    default: ""
  },
  textBackground: {
    tyep: String,
    default: ""
  },
  iconName: {
    type: String,
    default: "checked"
  },
  iconColor: {
    type: String,
    default: "#439422"
  },
  isShowPercentage: {
    type: Boolean,
    default: !0
  }
}), { create: I, useVinContext: R } = M("progress"), z = I({
  props: P,
  setup(t) {
    const { getMainClass: e, getMainStyle: o } = R(t), i = !!w().default, u = r(`${t.strokeWidth}px`), d = r(), f = r(), g = Math.random().toString(36).slice(-8), p = r(g), m = n(e), S = n(o), y = n(() => ({
      width: `${t.percentage}%`,
      background: t.strokeColor || ""
    })), x = n(() => ({
      color: t.textColor || ""
    }));
    return {
      mainClass: m,
      mainStyle: S,
      height: u,
      bgStyle: y,
      textStyle: x,
      progressOuter: d,
      insideText: f,
      randRef: p,
      slotDefault: i
    };
  }
});
export {
  z as default
};
