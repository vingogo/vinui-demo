var p = Object.defineProperty, A = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var d = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, $ = Object.prototype.propertyIsEnumerable;
var u = (e, o, n) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[o] = n, f = (e, o) => {
  for (var n in o || (o = {}))
    S.call(o, n) && u(e, n, o[n]);
  if (d)
    for (var n of d(o))
      $.call(o, n) && u(e, n, o[n]);
  return e;
}, v = (e, o) => A(e, O(o));
import { reactive as h, computed as r, onMounted as w, onBeforeUnmount as N, onActivated as M, onDeactivated as g, watch as s, toRefs as B } from "vue";
import { p as D } from "../common-8440b0d5.mjs";
import { c as L } from "../component-fc679f22.mjs";
import "../common-5c58cb85.mjs";
import "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const { create: P, useVinContext: R } = L("popup");
let c = 2e3;
const E = P({
  props: D,
  emits: [
    "click",
    "click-close-icon",
    "open",
    "close",
    "opend",
    "closed",
    "update:visible",
    "click-overlay"
  ],
  setup(e, { emit: o }) {
    const { getMainClass: n, getMainStyle: b } = R(e), i = h({
      zIndex: e.zIndex ? e.zIndex : c,
      showSlot: !0,
      transitionName: `popup-fade-${e.position}`,
      overLayCount: 1,
      keepAlive: !1,
      closed: e.closeable
    }), k = r(() => n({
      round: e.round,
      [`vin-popup-${e.position}`]: !0,
      [`vin-popup-${e.position}--safebottom`]: e.position === "bottom" && e.safeAreaInsetBottom,
      [e.popClass]: !0
    })), C = r(() => b({ zIndex: i.zIndex })), a = () => {
      e.visible || (e.zIndex !== void 0 && (c = Number(e.zIndex)), o("update:visible", !0), i.zIndex = ++c), e.destroyOnClose && (i.showSlot = !0), o("open");
    }, l = () => {
      e.visible && (o("update:visible", !1), e.destroyOnClose && setTimeout(() => {
        i.showSlot = !1, o("close");
      }, +e.duration * 1e3));
    }, m = (t) => {
      o("click", t);
    }, x = (t) => {
      o("click-close-icon", t), l();
    }, I = (t) => {
      e.closeOnClickOverlay && (o("click-overlay", t), l());
    }, y = (t) => {
      o("opend", t);
    }, z = (t) => {
      o("closed", t);
    };
    return w(() => {
      i.transitionName = e.transition ? e.transition : `popup-slide-${e.position}`, e.visible && a();
    }), N(() => {
      e.visible && l();
    }), M(() => {
      i.keepAlive && (o("update:visible", !0), i.keepAlive = !1);
    }), g(() => {
      e.visible && (l(), i.keepAlive = !0);
    }), s(
      () => e.visible,
      (t) => {
        t ? a() : l();
      }
    ), s(
      () => e.position,
      (t) => {
        i.transitionName = t === "center" ? "popup-fade" : `popup-slide-${t}`;
      }
    ), s(
      () => e.closeable,
      (t) => {
        i.closed = t;
      }
    ), v(f({}, B(i)), {
      popStyle: C,
      mainClass: k,
      onClick: m,
      onClickCloseIcon: x,
      onClickOverlay: I,
      onOpened: y,
      onClosed: z
    });
  }
});
export {
  E as default
};
