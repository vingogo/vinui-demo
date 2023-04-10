var B = Object.defineProperty, D = Object.defineProperties;
var $ = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var z = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var C = (e, o, a) => o in e ? B(e, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[o] = a, R = (e, o) => {
  for (var a in o || (o = {}))
    z.call(o, a) && C(e, a, o[a]);
  if (S)
    for (var a of S(o))
      E.call(o, a) && C(e, a, o[a]);
  return e;
}, w = (e, o) => D(e, $(o));
var d = (e, o, a) => new Promise((g, h) => {
  var r = (f) => {
    try {
      u(a.next(f));
    } catch (s) {
      h(s);
    }
  }, p = (f) => {
    try {
      u(a.throw(f));
    } catch (s) {
      h(s);
    }
  }, u = (f) => f.done ? g(f.value) : Promise.resolve(f.value).then(r, p);
  u((a = a.apply(e, o)).next());
});
import { getCurrentInstance as H, computed as T, ref as k, onMounted as V, reactive as j } from "vue";
import { c as q } from "../component-fc679f22.mjs";
import { c as A } from "../props-dd2296ba.mjs";
import { u as F, a as G } from "../index-ee773536.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const J = w(R({}, A), {
  name: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  touchMoveStopPropagation: {
    type: Boolean,
    default: !1
  },
  touchMovePreventDefault: {
    type: Boolean,
    default: !1
  }
}), { create: K, useVinContext: L } = q("swipe"), _ = K({
  props: J,
  emits: ["open", "close"],
  setup(e, { emit: o }) {
    const { getMainClass: a, getMainStyle: g } = L(e), h = H(), r = Math.random().toString(36).slice(-8), p = T(a), u = (t) => d(this, null, function* () {
      const i = yield G(t, h);
      return (i == null ? void 0 : i.width) || 0;
    }), f = `leftRef-${r}`, s = k(0), P = `rightRef-${r}`, c = k(0), x = () => d(this, null, function* () {
      s.value = yield u(f), c.value = yield u(P);
    });
    V(() => {
      setTimeout(() => {
        x();
      }, 100);
    });
    let m = !1, l = "", M = "";
    const n = j({
      offset: 0,
      moving: !1
    }), b = (t = "") => {
      m = !0, t && (n.offset = t === "left" ? -c.value : s.value), o("open", {
        name: e.name,
        position: l || t
      });
    }, y = () => {
      n.offset = 0, m = !1, o("close", {
        name: e.name,
        position: l
      });
    }, I = T(() => g({
      transform: `translate3d(${n.offset}px, 0, 0)`
    })), W = (t) => {
      l = t > 0 ? "right" : "left";
      let i = t;
      switch (l) {
        case "left":
          m && M === l ? i = -c.value : i = Math.abs(t) > c.value ? -c.value : t;
          break;
        case "right":
          m && M === l ? i = s.value : i = Math.abs(t) > s.value ? s.value : t;
          break;
      }
      n.offset = i;
    }, v = F();
    return w(R({
      mainClass: p,
      mainStyle: I
    }, {
      onTouchStart(t) {
        e.disabled || v.start(t);
      },
      onTouchMove(t) {
        return d(this, null, function* () {
          e.disabled || (v.move(t), v.isHorizontal() && (n.moving = !0, W(v.deltaX.value), e.touchMovePreventDefault && t.preventDefault(), e.touchMoveStopPropagation && t.stopPropagation()));
        });
      },
      onTouchEnd() {
        if (n.moving)
          switch (n.moving = !1, M = l, l) {
            case "left":
              Math.abs(n.offset) <= c.value / 2 ? y() : (n.offset = -c.value, b());
              break;
            case "right":
              Math.abs(n.offset) <= s.value / 2 ? y() : (n.offset = s.value, b());
              break;
          }
      }
    }), {
      leftRefId: f,
      rightRefId: P,
      refRandomId: r,
      open: b,
      close: y
    });
  }
});
export {
  _ as default
};
