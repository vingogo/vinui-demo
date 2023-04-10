var ee = Object.defineProperty, te = Object.defineProperties;
var ae = Object.getOwnPropertyDescriptors;
var D = Object.getOwnPropertySymbols;
var ne = Object.prototype.hasOwnProperty, re = Object.prototype.propertyIsEnumerable;
var j = (t, n, r) => n in t ? ee(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[n] = r, A = (t, n) => {
  for (var r in n || (n = {}))
    ne.call(n, r) && j(t, r, n[r]);
  if (D)
    for (var r of D(n))
      re.call(n, r) && j(t, r, n[r]);
  return t;
}, B = (t, n) => te(t, ae(n));
var M = (t, n, r) => new Promise(($, V) => {
  var h = (m) => {
    try {
      u(r.next(m));
    } catch (s) {
      V(s);
    }
  }, g = (m) => {
    try {
      u(r.throw(m));
    } catch (s) {
      V(s);
    }
  }, u = (m) => m.done ? $(m.value) : Promise.resolve(m.value).then(h, g);
  u((r = r.apply(t, n)).next());
});
import { getCurrentInstance as le, ref as O, computed as f, toRefs as oe } from "vue";
import { c as ie } from "../component-fc679f22.mjs";
import { c as ce } from "../props-dd2296ba.mjs";
import { u as ue, a as J } from "../index-ee773536.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const se = B(A({}, ce), {
  range: {
    type: Boolean,
    default: !1
  },
  disabled: Boolean,
  activeColor: String,
  inactiveColor: String,
  buttonColor: String,
  vertical: {
    type: Boolean,
    default: !1
  },
  marks: {
    type: Object,
    default: {}
  },
  hiddenRange: {
    type: Boolean,
    default: !1
  },
  hiddenTag: {
    type: Boolean,
    default: !1
  },
  min: {
    type: [Number, String],
    default: 0
  },
  max: {
    type: [Number, String],
    default: 100
  },
  step: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: [Number, Array],
    default: 0
  }
}), { componentName: de, create: me, useVinContext: fe } = ie("range"), Ce = me({
  props: se,
  emits: ["change", "drag-end", "drag-start", "update:modelValue"],
  setup(t, { emit: n }) {
    const r = le(), { getMainClass: $, getMainStyle: V } = fe(t), h = O(0);
    let g, u;
    const m = O(), s = O(), x = ue(), P = Math.random().toString(36).slice(-8), K = f(() => {
      const { marks: e, max: a, min: l } = t;
      return Object.keys(e).map(parseFloat).sort((c, d) => c - d).filter((c) => c >= l && c <= a);
    }), b = f(() => Number(t.max) - Number(t.min)), w = f(() => `root-${P}`), X = f(() => {
      const e = de;
      return $({
        [`${e}-disabled`]: t.disabled,
        [`${e}-vertical`]: t.vertical,
        [`${e}-show-number`]: !t.hiddenRange
      });
    }), Y = f(() => {
      const e = "vin-range-container";
      return {
        [e]: !0,
        [`${e}-vertical`]: t.vertical
      };
    }), E = f(() => ({
      background: t.inactiveColor
    })), F = f(V), L = f(() => ({
      borderColor: t.buttonColor
    })), v = (e) => !!t.range && Array.isArray(e), R = () => {
      const { modelValue: e, min: a } = t;
      return v(e) ? `${(e[1] - e[0]) * 100 / b.value}%` : `${(e - Number(a)) * 100 / b.value}%`;
    }, T = () => {
      const { modelValue: e, min: a } = t;
      return v(e) ? `${(e[0] - Number(a)) * 100 / b.value}%` : "0%";
    }, q = f(() => t.vertical ? {
      height: R(),
      top: T(),
      background: t.activeColor,
      transition: s.value ? "none" : void 0
    } : {
      width: R(),
      left: T(),
      background: t.activeColor,
      transition: s.value ? "none" : void 0
    }), z = (e) => {
      const a = "vin-range-mark", { modelValue: l, max: o, min: i } = t;
      let c = Number(i), d = Number(o);
      if (t.range) {
        const [y, S] = l;
        c = y, d = S;
      } else
        d = l;
      const N = e <= d && e >= c;
      return {
        [`${a}-text`]: !0,
        [`${a}-text-active`]: N
      };
    }, G = (e) => {
      const { max: a, min: l, vertical: o } = t;
      let i = {
        left: `${(e - Number(l)) / b.value * 100}%`
      };
      return o && (i = {
        top: `${(e - Number(l)) / b.value * 100}%`
      }), i;
    }, H = (e) => {
      const { modelValue: a, max: l, min: o } = t;
      let i = Number(o), c = Number(l);
      if (t.range) {
        const [y, S] = a;
        i = y, c = S;
      }
      return {
        background: e <= c && e >= i ? t.activeColor : t.inactiveColor
      };
    }, k = (e) => {
      const { min: a, max: l, step: o } = t;
      return e = Math.max(+a, Math.min(e, +l)), Math.round(e / +o) * +o;
    }, I = (e, a) => JSON.stringify(e) === JSON.stringify(a), Q = (e) => e[0] > e[1] ? e.slice(0).reverse() : e, C = (e, a) => {
      v(e) ? e = Q(e).map(k) : e = k(e), I(e, t.modelValue) || n("update:modelValue", e), a && !I(e, g) && n("change", e);
    }, U = (e) => M(this, null, function* () {
      if (t.disabled)
        return;
      const { min: a, modelValue: l } = t, o = yield J(w.value, r);
      let i = e.touches[0].clientX - o.left, c = o.width;
      t.vertical && (i = e.touches[0].clientY - o.top, c = o.height);
      const d = Number(a) + i / c * b.value;
      if (v(l)) {
        const [N, y] = l, S = (N + y) / 2;
        d <= S ? C([d, y], !0) : C([N, d], !0);
      } else
        C(d, !0);
    }), W = (e) => {
      t.disabled || (x.start(e), u = t.modelValue, v(u) ? g = u.map(k) : g = k(u), s.value = "start", e.stopPropagation(), e.preventDefault());
    }, Z = (e) => M(this, null, function* () {
      if (t.disabled)
        return;
      s.value === "start" && n("drag-start"), x.move(e), s.value = "draging";
      const a = yield J(w.value, r);
      let l = x.deltaX.value, o = a.width, i = l / o * b.value;
      t.vertical && (l = x.deltaY.value, o = a.height, i = l / o * b.value), v(g) ? u[h.value] = g[h.value] + i : u = g + i, C(u), e.stopPropagation(), e.preventDefault();
    }), _ = (e) => {
      t.disabled || (s.value === "draging" && (C(u, !0), n("drag-end")), s.value = "", e.stopPropagation(), e.preventDefault());
    }, p = (e) => Array.isArray(t.modelValue) && typeof e == "number" ? t.modelValue[e] : Number(t.modelValue);
    return B(A({
      root: m,
      rootId: w,
      mainClass: X,
      mainStyle: F,
      wrapperStyle: E,
      buttonStyle: L,
      onClick: U,
      onTouchStart: W,
      onTouchMove: Z,
      onTouchEnd: _
    }, oe(t)), {
      barStyle: q,
      curValue: p,
      buttonIndex: h,
      containerClasses: Y,
      markClassName: z,
      marksStyle: G,
      marksList: K,
      tickStyle: H,
      refRandomId: P
    });
  }
});
export {
  Ce as default
};
