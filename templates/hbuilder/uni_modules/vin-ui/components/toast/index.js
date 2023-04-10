var x = Object.defineProperty, B = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
var s = (t, e, n) => e in t ? x(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, l = (t, e) => {
  for (var n in e || (e = {}))
    k.call(e, n) && s(t, n, e[n]);
  if (u)
    for (var n of u(e))
      O.call(e, n) && s(t, n, e[n]);
  return t;
}, f = (t, e) => B(t, h(e));
import { watch as A, computed as o } from "vue";
import { c as w } from "../component-fc679f22.mjs";
import { c as z } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const N = f(l({}, z), {
  id: String,
  msg: String,
  duration: {
    type: Number,
    default: 2e3
  },
  title: {
    type: String,
    default: ""
  },
  center: {
    type: Boolean,
    default: !0
  },
  bottom: {
    type: String,
    default: "30px"
  },
  textAlignCenter: {
    type: Boolean,
    default: !0
  },
  bgColor: {
    type: String,
    default: ""
  },
  size: {
    type: [String, Number],
    default: "base"
  },
  icon: String,
  iconSize: {
    type: String,
    default: "20"
  },
  cover: {
    type: Boolean,
    default: !1
  },
  coverColor: {
    type: String,
    default: ""
  },
  loadingRotate: {
    type: Boolean,
    default: !0
  },
  onClose: Function,
  unmount: Function,
  closeOnClickOverlay: {
    type: Boolean,
    default: !1
  },
  visible: {
    type: Boolean,
    default: !1
  },
  type: {
    type: String,
    default: "text"
  },
  toastStyle: {
    type: Object,
    default: () => ({})
  },
  toastClass: String
}), { create: T, useVinContext: F } = w("toast"), R = T({
  props: N,
  emits: ["update:visible", "closed"],
  setup(t, { emit: e }) {
    const { getMainClass: n, getMainStyle: d } = F(t);
    let a;
    const c = () => {
      a && (clearTimeout(a), a = null);
    }, i = () => {
      e("update:visible", !1), e("closed");
    }, g = () => {
      c(), t.duration && (a = setTimeout(() => {
        i();
      }, t.duration));
    }, y = () => {
      t.closeOnClickOverlay && i();
    };
    A(
      () => t.visible,
      (C) => {
        C && g();
      }
    );
    const r = o(() => t.type !== "text" ? !0 : !!t.icon), m = o(() => t.icon ? t.icon : {
      success: "success",
      fail: "failure",
      warn: "tips",
      loading: "loading"
    }[t.type]), v = o(() => n([
      { "vin-toast-center": t.center },
      { "vin-toast-has-icon": r.value },
      { "vin-toast-cover": t.cover },
      { "vin-toast-loading": t.type === "loading" },
      `vin-toast-${t.size}`
    ])), S = o(() => d({
      bottom: t.center ? "auto" : t.bottom,
      "background-color": t.coverColor
    })), b = o(() => l({
      "text-align": t.textAlignCenter ? "center" : "left",
      "background-color": t.bgColor
    }, t.toastStyle || {}));
    return {
      clickCover: y,
      hasIcon: r,
      iconName: m,
      mainClass: v,
      mainStyle: S,
      onAfterLeave: () => {
        t.visible && (c(), i());
      },
      toastInnerStyle: b
    };
  }
});
export {
  R as default
};
