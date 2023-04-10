var k = Object.defineProperty, L = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
var f = (a, t, r) => t in a ? k(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[t] = r, c = (a, t) => {
  for (var r in t || (t = {}))
    P.call(t, r) && f(a, r, t[r]);
  if (p)
    for (var r of p(t))
      j.call(t, r) && f(a, r, t[r]);
  return a;
}, v = (a, t) => L(a, O(t));
import { toRefs as g, ref as B, reactive as h, onMounted as K, computed as i } from "vue";
import { c as N } from "../component-fc679f22.mjs";
import { c as Y } from "../props-dd2296ba.mjs";
import { A as _ } from "../common-60a9ed3e.mjs";
import { u as q } from "../useInject-3fe60ff4.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const D = v(c({}, Y), {
  size: {
    type: String,
    default: ""
  },
  shape: {
    type: String,
    default: "round"
  },
  bgColor: {
    type: String,
    default: "#eee"
  },
  color: {
    type: String,
    default: "#666"
  },
  url: {
    type: String,
    default: ""
  },
  alt: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: ""
  }
}), { create: F, useVinContext: G, componentName: S } = N("avatar"), oe = F({
  props: D,
  emits: ["active-avatar", "onError"],
  setup(a, { emit: t, slots: r }) {
    const { size: l, shape: $, bgColor: y, color: C, icon: u } = g(a), { getMainClass: I, getMainStyle: d } = G(a), { parent: e, index: b } = q(_), x = ["large", "normal", "small"], z = B(null), A = h({
      lightTheme: !1
    }), s = h({
      index: 1,
      showMax: !1,
      // 是否显示的最大头像个数
      maxIndex: 0
      // avatarGroup里的avatar的个数
    }), M = (o) => {
      var n;
      s.maxIndex = o.length, s.index = b.value, s.index === s.maxIndex && s.index !== ((n = e == null ? void 0 : e.props) == null ? void 0 : n.maxCount) && (s.showMax = !0);
    };
    K(() => {
      const o = e == null ? void 0 : e.internalChildren;
      o && M(o);
    });
    const E = i(() => {
      var o, n;
      return I({
        [`${S}-${l.value || ((o = e == null ? void 0 : e.props) == null ? void 0 : o.size) || "normal"}`]: !0,
        [`${S}-${$.value || ((n = e == null ? void 0 : e.props) == null ? void 0 : n.shape) || "normal"}`]: !0
      });
    }), w = i(() => {
      var o, n, m;
      return d({
        width: x.indexOf(l.value) > -1 ? "" : `${l.value}px`,
        height: x.indexOf(l.value) > -1 ? "" : `${l.value}px`,
        backgroundColor: `${y.value}`,
        color: `${C.value}`,
        marginLeft: s.index !== 1 && ((o = e == null ? void 0 : e.props) != null && o.span ? `${(n = e == null ? void 0 : e.props) == null ? void 0 : n.span}px` : ""),
        zIndex: ((m = e == null ? void 0 : e.props) == null ? void 0 : m.zIndex) === "right" ? `${Math.abs(s.maxIndex - s.index)}` : ""
      });
    }), R = i(() => {
      var o, n;
      return d({
        backgroundColor: `${(o = e == null ? void 0 : e.props) == null ? void 0 : o.maxBgColor}`,
        color: `${(n = e == null ? void 0 : e.props) == null ? void 0 : n.maxColor}`
      });
    }), T = i(() => u.value ? u.value : ""), V = i(() => r.default);
    return c({
      classes: E,
      styles: w,
      iconStyles: T,
      isShowText: V,
      maxStyles: R,
      activeAvatar: (o) => {
        t("active-avatar", o);
      },
      onError: (o) => {
        t("onError", o);
      },
      parent: e,
      visible: A,
      avatarRef: z
    }, g(s));
  }
});
export {
  oe as default
};
