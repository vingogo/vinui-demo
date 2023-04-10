var S = Object.defineProperty, y = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var l = (n, t, e) => t in n ? S(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, i = (n, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && l(n, e, t[e]);
  if (u)
    for (var e of u(t))
      k.call(t, e) && l(n, e, t[e]);
  return n;
}, p = (n, t) => y(n, v(t));
import { getCurrentInstance as I, inject as M, reactive as N, computed as o, toRefs as P } from "vue";
import { c as $ } from "../component-fc679f22.mjs";
import { c as b } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const j = p(i({}, b), {
  title: {
    type: String,
    default: ""
  },
  content: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: null
  },
  iconColor: {
    type: String,
    default: ""
  },
  size: {
    type: [String, Number],
    default: "12px"
  }
}), { create: w, componentName: z, useVinContext: D } = $("step"), q = w({
  props: j,
  emits: ["click-step"],
  setup(n) {
    const { getMainClass: t, getMainStyle: e } = D(n), { proxy: a } = I(), r = M("parent");
    r.relation(a);
    const m = N({
      dot: r.props.progressDot
    }), s = o(() => r.state.children.indexOf(a) + 1), f = () => {
      const c = s.value;
      return c < +r.props.current ? "finish" : c === +r.props.current ? "process" : "wait";
    }, d = o(() => f()), g = o(() => t({
      [`${z}-${d.value}`]: !0
    })), x = o(e), C = () => {
      r.onEmit(s.value);
    };
    return p(i({}, P(m)), {
      index: s,
      mainClass: g,
      mainStyle: x,
      handleClickStep: C
    });
  }
});
export {
  q as default
};
