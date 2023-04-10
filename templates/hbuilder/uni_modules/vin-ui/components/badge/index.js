var m = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var u = (t, e, n) => e in t ? m(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, d = (t, e) => {
  for (var n in e || (e = {}))
    y.call(e, n) && u(t, n, e[n]);
  if (a)
    for (var n of a(e))
      g.call(e, n) && u(t, n, e[n]);
  return t;
}, c = (t, e) => i(t, p(e));
import { computed as f } from "vue";
import { c as s } from "../component-fc679f22.mjs";
import { c as x } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const b = c(d({}, x), {
  value: {
    type: [String, Number]
  },
  max: {
    type: Number,
    default: 1e4
  },
  dot: {
    type: Boolean,
    default: !1
  },
  hidden: {
    type: Boolean,
    default: !1
  },
  top: {
    type: String,
    default: "0"
  },
  right: {
    type: String,
    default: "0"
  },
  zIndex: {
    type: Number,
    default: 9
  },
  color: {
    type: String,
    default: ""
  }
}), { create: S, useVinContext: h } = s("badge"), v = S({
  props: b,
  setup(t) {
    const { getMainStyle: e } = h(t), n = f(() => e({
      top: `${t.top}px`,
      right: `${t.right}px`,
      zIndex: t.zIndex,
      background: t.color
    })), l = f(() => {
      if (t.dot)
        return "";
      const { value: o } = t, { max: r } = t;
      return typeof o == "number" && typeof r == "number" && r < o ? `${r}+` : o;
    });
    return {
      mainStyle: n,
      content: l
    };
  }
});
export {
  v as default
};
