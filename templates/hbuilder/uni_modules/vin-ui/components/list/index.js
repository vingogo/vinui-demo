var b = Object.defineProperty, O = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var d = (t, n, e) => n in t ? b(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, g = (t, n) => {
  for (var e in n || (n = {}))
    N.call(n, e) && d(t, e, n[e]);
  if (m)
    for (var e of m(n))
      P.call(n, e) && d(t, e, n[e]);
  return t;
}, f = (t, n) => O(t, I(n));
var y = (t, n, e) => new Promise((c, o) => {
  var i = (s) => {
    try {
      l(e.next(s));
    } catch (r) {
      o(r);
    }
  }, h = (s) => {
    try {
      l(e.throw(s));
    } catch (r) {
      o(r);
    }
  }, l = (s) => s.done ? c(s.value) : Promise.resolve(s.value).then(i, h);
  l((e = e.apply(t, n)).next());
});
import { ref as T, reactive as $, computed as a, watch as A, toRefs as E } from "vue";
import { c as R } from "../component-fc679f22.mjs";
import { c as V } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
var v, H;
const j = f(g({}, V), {
  height: {
    type: [Number],
    default: 0
  },
  listData: {
    type: Array,
    default: () => []
  },
  containerHeight: {
    type: Number,
    default: ((H = (v = uni == null ? void 0 : uni.getSystemInfoSync) == null ? void 0 : v.call(uni)) == null ? void 0 : H.windowHeight) || 667
  }
}), { create: k, useVinContext: q } = R("list"), z = uni.getSystemInfoSync().windowHeight || 667, K = k({
  props: j,
  emits: ["scroll"],
  setup(t, { emit: n }) {
    const { getMainClass: e, getMainStyle: c } = q(t), o = T(null), i = $({
      startOffset: 0,
      start: 0,
      list: t.listData.slice()
    }), h = a(() => Math.min(t.containerHeight, z)), l = a(() => Math.ceil(h.value / t.height)), s = a(() => i.start + l.value), r = a(() => `translate3d(0, ${i.startOffset}px, 0)`), S = a(e), C = a(() => c({ height: `${t.containerHeight}px` })), M = a(() => i.list.length * t.height), w = a(() => i.list.slice(i.start, Math.min(s.value, i.list.length))), x = (D) => y(this, null, function* () {
      const { scrollTop: u } = D.detail;
      i.start = Math.floor(u / t.height), s.value > i.list.length && n("scroll"), i.startOffset = u - u % t.height;
    });
    return A(
      () => t.listData,
      () => {
        i.list = t.listData.slice();
      }
    ), f(g({}, E(i)), {
      list: o,
      getTransform: r,
      listHeight: M,
      visibleData: w,
      mainClass: S,
      mainStyle: C,
      handleScrollEvent: x
    });
  }
});
export {
  K as default
};
