var d = Object.defineProperty, p = Object.defineProperties;
var y = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var s = (t, e, n) => e in t ? d(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, l = (t, e) => {
  for (var n in e || (e = {}))
    S.call(e, n) && s(t, n, e[n]);
  if (o)
    for (var n of o(e))
      w.call(e, n) && s(t, n, e[n]);
  return t;
}, c = (t, e) => p(t, y(e));
import { provide as C, computed as u } from "vue";
import { c as $ } from "../component-fc679f22.mjs";
import { c as k } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const x = c(l({}, k), {
  type: {
    type: String,
    default: ""
  },
  gutter: {
    type: [String, Number],
    default: ""
  },
  justify: {
    type: String,
    default: "start"
  },
  align: {
    type: String,
    default: "flex-start"
  },
  wrap: {
    type: String,
    default: "nowrap"
  }
}), { create: j, useVinContext: P } = $("row"), V = j({
  props: x,
  emits: ["click"],
  setup(t, { emit: e }) {
    const { getMainClass: n, getMainStyle: g } = P(t);
    C("gutter", t.gutter);
    const a = (r, i) => r ? i ? `vin-row-${r}-${i}` : "" : `vin-row-${i}`, f = u(() => n(`
        ${a("", t.type)}
        ${a("justify", t.justify)}
        ${a("align", t.align)}
        ${a("flex", t.wrap)}
      `)), m = u(g);
    return {
      mainClass: f,
      mainStyle: m,
      handleClick: (r) => {
        r.stopPropagation(), e("click", r);
      }
    };
  }
});
export {
  V as default
};
