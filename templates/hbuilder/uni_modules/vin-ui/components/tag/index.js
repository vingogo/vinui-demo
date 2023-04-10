var C = Object.defineProperty, k = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, $ = Object.prototype.propertyIsEnumerable;
var u = (t, o, l) => o in t ? C(t, o, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[o] = l, p = (t, o) => {
  for (var l in o || (o = {}))
    S.call(o, l) && u(t, l, o[l]);
  if (c)
    for (var l of c(o))
      $.call(o, l) && u(t, l, o[l]);
  return t;
}, f = (t, o) => k(t, x(o));
import { toRefs as b, computed as i } from "vue";
import { c as B } from "../component-fc679f22.mjs";
import { c as P } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const M = f(p({}, P), {
  color: { type: String, default: "" },
  textColor: { type: String, default: "" },
  type: {
    type: String,
    default: "default"
  },
  plain: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  mark: {
    type: Boolean,
    default: !1
  },
  closeable: {
    type: Boolean,
    default: !1
  }
}), { componentName: N, create: R, useVinContext: V } = B("tag"), D = R({
  props: M,
  emits: ["close", "click"],
  setup(t, { emit: o }) {
    const { getMainClass: l, getMainStyle: d } = V(t), { type: r, color: a, plain: n, round: m, mark: v, textColor: s } = b(t), y = i(() => {
      const e = N;
      return l({
        [`${e}--${r.value}`]: r.value,
        [`${e}--plain`]: n.value,
        [`${e}--round`]: m.value,
        [`${e}--mark`]: v.value
      });
    }), g = i(() => {
      const e = {};
      return s.value ? e.color = s.value : a.value && n.value && (e.color = a.value), n.value ? (e.background = "#fff", e["border-color"] = a.value) : a.value && (e.background = a.value), d(e);
    });
    return {
      mainClass: y,
      mainStyle: g,
      onClose: (e) => {
        e.stopPropagation(), o("close", e);
      },
      onClick: (e) => {
        e.stopPropagation(), o("click", e);
      }
    };
  }
});
export {
  D as default
};
