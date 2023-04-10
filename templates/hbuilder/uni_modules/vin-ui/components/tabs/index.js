var B = Object.defineProperty;
var C = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var f = (e, t, l) => t in e ? B(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, V = (e, t) => {
  for (var l in t || (t = {}))
    D.call(t, l) && f(e, l, t[l]);
  if (C)
    for (var l of C(t))
      L.call(t, l) && f(e, l, t[l]);
  return e;
};
var r = (e, t, l) => (f(e, typeof t != "symbol" ? t + "" : t, l), l);
import { computed as i, ref as T, watch as A, onMounted as R, onActivated as Y } from "vue";
import { c as _ } from "../component-fc679f22.mjs";
import { p as I } from "../pxCheck-5050e78e.mjs";
import { t as j, T as q } from "../common-94cefcbc.mjs";
import { u as F } from "../useProvide-9af628ed.mjs";
import "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const { create: H, componentName: J, useVinContext: O } = _("tabs");
class Q {
  // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
  constructor() {
    r(this, "title", "");
    r(this, "titleSlot");
    r(this, "paneKey", "");
    r(this, "disabled", !1);
  }
}
const ne = H({
  props: j,
  emits: ["update:modelValue", "click", "change"],
  expose: ["componentName", "pushKey"],
  setup(e, { emit: t }) {
    const { getMainClass: l, getMainStyle: M } = O(e), { internalChildren: d } = F(
      q,
      "vin-tabpane"
    )({ activeKey: i(() => e.modelValue) }), o = T([]), y = (n) => {
      n.forEach((a, p) => {
        var h, g, x, K, k, v, S;
        let { type: c } = a;
        if (c = c.name || c, c === "vin-tabpane") {
          const u = new Q();
          ((h = a.props) != null && h.title || (g = a.props) != null && g["pane-key"] || (x = a.props) != null && x.paneKey) && (u.title = (K = a.props) == null ? void 0 : K.title, u.paneKey = ((k = a.props) == null ? void 0 : k["pane-key"]) || ((v = a.props) == null ? void 0 : v.paneKey) || p, u.disabled = (S = a.props) == null ? void 0 : S.disabled), o.value.push(u);
        } else
          y(a.children);
      });
    }, s = T(e.modelValue || 0), b = (n) => {
      const a = o.value.findIndex((p) => p.paneKey === n);
      o.value.length > 0 && a > -1 && (s.value = a);
    }, m = (n = d.map((a) => a.vnode)) => {
      o.value = [], n && n.length && y(n), b(e.modelValue);
    };
    A(
      () => d.map((n) => n.props),
      (n) => {
        m(d.map((a) => a.vnode));
      },
      { deep: !0 }
    ), A(
      () => e.modelValue,
      (n) => {
        b(n);
      }
    ), R(m), Y(m);
    const N = i(() => ({
      transform: e.direction === "horizontal" ? `translate3d(-${s.value * 100}%, 0, 0)` : `translate3d( 0,-${s.value * 100}%, 0)`,
      transitionDuration: `${e.animatedTime}ms`
    })), $ = i(() => ({
      background: e.background
    })), w = i(() => ({
      color: e.type === "smile" ? e.color : "",
      background: e.type === "line" ? e.color : ""
    })), E = i(() => ({
      marginLeft: I(e.titleGutter),
      marginRight: I(e.titleGutter)
    })), G = {
      tabChange: (n, a) => {
        t("click", n), !n.disabled && (s.value = a, t("update:modelValue", n.paneKey), t("change", n));
      }
    }, P = i(() => l({
      [e.direction]: !0
    })), z = i(M);
    return V({
      titles: o,
      mainStyle: z,
      mainClass: P,
      contentStyle: N,
      tabsNavStyle: $,
      titleStyle: E,
      tabsActiveStyle: w,
      componentName: J
    }, G);
  }
});
export {
  Q as Title,
  ne as default
};
