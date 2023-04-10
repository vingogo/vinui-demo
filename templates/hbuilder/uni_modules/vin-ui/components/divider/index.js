var m = Object.defineProperty, f = Object.defineProperties;
var u = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (t, e, n) => e in t ? m(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, r = (t, e) => {
  for (var n in e || (e = {}))
    h.call(e, n) && a(t, n, e[n]);
  if (i)
    for (var n of i(e))
      p.call(e, n) && a(t, n, e[n]);
  return t;
}, s = (t, e) => f(t, u(e));
import { computed as c } from "vue";
import { c as P } from "../component-fc679f22.mjs";
import { c as g } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const y = s(r({}, g), {
  contentPosition: {
    type: String,
    default: "center"
  },
  dashed: {
    type: Boolean,
    default: !1
  },
  hairline: {
    type: Boolean,
    default: !0
  }
}), { componentName: C, create: $, useVinContext: x } = P("divider"), N = $({
  props: y,
  setup(t) {
    const { getMainClass: e, getMainStyle: n } = x(t), l = c(() => {
      const o = C;
      return e({
        [`${o}-center`]: t.contentPosition === "center",
        [`${o}-left`]: t.contentPosition === "left",
        [`${o}-right`]: t.contentPosition === "right",
        [`${o}-dashed`]: t.dashed,
        [`${o}-hairline`]: t.hairline
      });
    }), d = c(n);
    return { mainClass: l, mainStyle: d };
  }
});
export {
  N as default
};
