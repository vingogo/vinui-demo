var f = Object.defineProperty, m = Object.defineProperties;
var y = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, s = (e, t) => {
  for (var a in t || (t = {}))
    v.call(t, a) && i(e, a, t[a]);
  if (o)
    for (var a of o(t))
      b.call(t, a) && i(e, a, t[a]);
  return e;
}, l = (e, t) => m(e, y(t));
import { computed as r } from "vue";
import { c as x } from "../component-fc679f22.mjs";
import { c as g } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const S = l(s({}, g), {
  visible: {
    type: Boolean,
    default: !1
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  navList: {
    default: () => [],
    type: Array
  },
  activeText: {
    default: "",
    type: String
  },
  unActiveText: {
    default: "",
    type: String
  },
  position: {
    default: () => ({
      top: "auto",
      bottom: "auto"
    }),
    type: Object
  },
  type: {
    default: "right",
    type: String
  }
}), { create: C, translate: V, useVinContext: A } = x("fixednav"), L = C({
  props: S,
  emits: ["update:visible", "selected"],
  setup(e, { emit: t }) {
    const { getMainClass: a, getMainStyle: u } = A(e), c = r(() => a({
      active: e.visible,
      [e.type]: !0
    })), d = r(() => u(e.position));
    return { mainClass: c, mainStyle: d, updateValue: (n = !e.visible) => {
      t("update:visible", n);
    }, selected: (n, p) => {
      t("selected", {
        item: n,
        event: p
      });
    }, translate: V };
  }
});
export {
  L as default
};
