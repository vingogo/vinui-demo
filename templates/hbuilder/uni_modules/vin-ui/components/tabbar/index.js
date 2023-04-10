var v = Object.defineProperty, p = Object.defineProperties;
var y = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var s = (t, e, a) => e in t ? v(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a, c = (t, e) => {
  for (var a in e || (e = {}))
    C.call(e, a) && s(t, a, e[a]);
  if (r)
    for (var a of r(e))
      S.call(e, a) && s(t, a, e[a]);
  return t;
}, m = (t, e) => p(t, y(e));
import { reactive as u, provide as g, watch as h, computed as d } from "vue";
import { c as x } from "../component-fc679f22.mjs";
import { c as V } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const B = m(c({}, V), {
  visible: {
    type: [Number, String],
    default: 0
  },
  bottom: {
    type: Boolean,
    default: !1
  },
  type: {
    type: String,
    default: "base"
  },
  size: {
    type: String,
    default: "20px"
  },
  unactiveColor: {
    type: String,
    default: "#000000"
  },
  activeColor: {
    type: String,
    default: ""
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: !1
  }
}), { create: w, useVinContext: z } = x("tabbar"), N = w({
  props: B,
  emits: ["tab-switch", "update:visible"],
  setup(t, { emit: e }) {
    const { getMainClass: a, getMainStyle: b } = z(t), l = u({
      val: t.visible,
      children: []
    }), i = (o) => {
      e("update:visible", o), n.modelValue = o, e("tab-switch", n.children[o], o);
    };
    let n = u({
      children: l.children,
      size: t.size,
      modelValue: l.val,
      unactiveColor: t.unactiveColor,
      activeColor: t.activeColor,
      changeIndex: i
    });
    g("parent", n), h(
      () => t.visible,
      (o) => {
        n.modelValue = o;
      }
    );
    const f = d(() => a({
      "vin-tabbar-bottom": t.bottom,
      "vin-tabbar-safebottom": t.safeAreaInsetBottom
    }));
    return {
      mainStyle: d(b),
      mainClass: f,
      changeIndex: i
    };
  }
});
export {
  N as default
};
