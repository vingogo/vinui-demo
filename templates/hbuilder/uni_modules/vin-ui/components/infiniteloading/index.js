var b = Object.defineProperty, C = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var d = (o, i, n) => i in o ? b(o, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[i] = n, l = (o, i) => {
  for (var n in i || (i = {}))
    B.call(i, n) && d(o, n, i[n]);
  if (c)
    for (var n of c(i))
      E.call(i, n) && d(o, n, i[n]);
  return o;
}, r = (o, i) => C(o, w(i));
import { reactive as R, computed as a, onMounted as $, toRefs as D } from "vue";
import { c as P } from "../component-fc679f22.mjs";
import { c as v } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const z = r(l({}, v), {
  hasMore: {
    type: Boolean,
    default: !0
  },
  threshold: {
    type: Number,
    default: 200
  },
  upperThreshold: {
    type: Number,
    default: 40
  },
  pullIcon: {
    type: String,
    default: "refresh"
  },
  pullText: {
    type: String,
    default: ""
  },
  loadIcon: {
    type: String,
    default: "refresh"
  },
  loadText: {
    type: String,
    default: ""
  },
  loadMoreText: {
    type: String,
    default: ""
  },
  useWindow: {
    type: Boolean,
    default: !0
  },
  containerId: {
    type: String,
    default: ""
  },
  useCapture: {
    type: Boolean,
    default: !1
  },
  isOpenRefresh: {
    type: Boolean,
    default: !1
  }
}), { create: N, translate: O, useVinContext: Y } = P("infiniteloading"), j = N({
  props: z,
  emits: ["scroll-change", "load-more", "refresh"],
  setup(o, { emit: i }) {
    const { getMainClass: n, getMainStyle: u } = Y(o), e = R({
      scrollHeight: 0,
      scrollTop: 0,
      isInfiniting: !1,
      direction: "down",
      isTouching: !1,
      refreshMaxH: 0,
      y: 0,
      x: 0,
      distance: 0
    }), f = a(n), h = a(() => u({ height: "100%" })), p = a(() => ({
      height: e.distance < 0 ? "0px" : `${e.distance}px`,
      transition: e.isTouching ? "height 0s cubic-bezier(0.25,0.1,0.25,1)" : "height 0.2s cubic-bezier(0.25,0.1,0.25,1)"
    })), g = (t) => uni.createSelectorQuery().select(o.containerId ? `#${o.containerId} #${t}` : `#${t}`), T = () => {
      g("scroller").boundingClientRect((s) => {
        e.scrollHeight = (s == null ? void 0 : s.height) || 0;
      }).exec();
    }, m = () => {
      e.isInfiniting = !1;
    }, y = () => {
      if (e.direction === "up" || !o.hasMore || e.isInfiniting)
        return !1;
      e.isInfiniting = !0, i("load-more", m);
    }, x = (t) => {
      t.detail.scrollTop <= 0 ? t.detail.scrollTop = 0 : t.detail.scrollTop >= e.scrollHeight && (t.detail.scrollTop = e.scrollHeight), t.detail.scrollTop > e.scrollTop || t.detail.scrollTop >= e.scrollHeight ? e.direction = "down" : e.direction = "up", e.scrollTop = t.detail.scrollTop, i("scroll-change", t.detail.scrollTop);
    }, S = (t) => {
      e.scrollTop === 0 && !e.isTouching && o.isOpenRefresh && (e.y = t.touches[0].pageY, e.isTouching = !0);
    }, M = (t) => {
      e.distance = t.touches[0].pageY - e.y, e.distance > 0 && e.isTouching ? (t.preventDefault(), e.distance >= e.refreshMaxH && (e.distance = e.refreshMaxH)) : (e.distance = 0, e.isTouching = !1);
    }, H = () => {
      e.distance = 0, e.isTouching = !1;
    }, I = () => {
      e.distance < e.refreshMaxH ? e.distance = 0 : i("refresh", H);
    };
    return $(() => {
      e.refreshMaxH = o.upperThreshold, setTimeout(() => {
        T();
      }, 200);
    }), r(l({
      mainStyle: h,
      mainClass: f
    }, D(e)), {
      lower: y,
      scroll: x,
      touchStart: S,
      touchMove: M,
      touchEnd: I,
      getStyle: p,
      translate: O
    });
  }
});
export {
  j as default
};
