var l = Object.defineProperty, m = Object.defineProperties;
var u = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var s = (o, t, e) => t in o ? l(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, r = (o, t) => {
  for (var e in t || (t = {}))
    f.call(t, e) && s(o, e, t[e]);
  if (n)
    for (var e of n(t))
      d.call(t, e) && s(o, e, t[e]);
  return o;
}, c = (o, t) => m(o, u(t));
import { computed as p } from "vue";
import { c as g } from "../component-fc679f22.mjs";
import { c as S } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const y = c(r({}, S), {
  title: { type: String, default: "" },
  desc: { type: String, default: "" }
}), { create: C, useVinContext: x } = g("cell-group"), b = C({
  props: y,
  setup(o) {
    const { getMainClass: t, getMainStyle: e } = x(o), a = p(t), i = p(e);
    return {
      mainClass: a,
      mainStyle: i
    };
  }
});
export {
  b as default
};
