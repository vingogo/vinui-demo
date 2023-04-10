var d = Object.defineProperty, g = Object.defineProperties;
var C = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var s = (e, t, n) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, i = (e, t) => {
  for (var n in t || (t = {}))
    x.call(t, n) && s(e, n, t[n]);
  if (r)
    for (var n of r(t))
      S.call(t, n) && s(e, n, t[n]);
  return e;
}, a = (e, t) => g(e, C(t));
import { inject as $, computed as p } from "vue";
import { c as k } from "../component-fc679f22.mjs";
import { c as y } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const h = a(i({}, y), {
  span: {
    type: [String, Number],
    default: "24"
  },
  offset: {
    type: [String, Number],
    default: "0"
  }
}), { componentName: N, create: P, useVinContext: b } = k("col"), V = P({
  props: h,
  emits: ["click"],
  setup(e, { emit: t }) {
    const { getMainClass: n, getMainStyle: l } = b(e), m = N, o = $("gutter"), u = p(() => n({
      [`${m}-gutter`]: o,
      [`vin-col-${e.span}`]: !0,
      [`vin-col-offset-${e.offset}`]: !0
    })), f = p(() => l({
      paddingLeft: `${o / 2}px`,
      paddingRight: `${o / 2}px`
    }));
    return {
      mainClass: u,
      mainStyle: f,
      handleClick: (c) => {
        c.stopPropagation(), t("click", c);
      }
    };
  }
});
export {
  V as default
};
