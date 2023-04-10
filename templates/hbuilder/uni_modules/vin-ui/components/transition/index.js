var $ = Object.defineProperty, h = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? $(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, y = (e, t) => {
  for (var a in t || (t = {}))
    k.call(t, a) && m(e, a, t[a]);
  if (g)
    for (var a of g(t))
      N.call(t, a) && m(e, a, t[a]);
  return e;
}, A = (e, t) => h(e, w(t));
var u = (e, t, a) => new Promise((o, l) => {
  var i = (s) => {
    try {
      n(a.next(s));
    } catch (c) {
      l(c);
    }
  }, v = (s) => {
    try {
      n(a.throw(s));
    } catch (c) {
      l(c);
    }
  }, n = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(i, v);
  n((a = a.apply(e, t)).next());
});
import { ref as C, computed as d, watchEffect as x, onUnmounted as F, nextTick as S } from "vue";
import { s as D, c as M } from "../component-fc679f22.mjs";
import { c as P } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const p = A(y({}, P), {
  // 控制组件显示或隐藏
  show: {
    type: Boolean,
    default: !1
  },
  // 内置过渡动画名
  name: {
    type: String,
    default: "fade"
  },
  enterClass: {
    type: String,
    default: ""
  },
  enterActiveClass: {
    type: String,
    default: ""
  },
  enterToClass: {
    type: String,
    default: ""
  },
  leaveClass: {
    type: String,
    default: ""
  },
  leaveActiveClass: {
    type: String,
    default: ""
  },
  leaveToClass: {
    type: String,
    default: ""
  },
  // 过渡动画持续时间，单位ms
  duration: {
    type: [Number, String],
    default: 300
  },
  // 使用的动画过渡函数
  timingFunction: {
    type: String,
    default: "ease-out"
  }
}), B = (e) => ({
  enter: `vin-${e}-enter`,
  enterActive: `vin-${e}-enter-active`,
  enterTo: `vin-${e}-enter-to vin-${e}-enter-active`,
  leave: `vin-${e}-leave`,
  leaveActiveClass: `vin-${e}-leave-active`,
  leaveTo: `vin-${e}-leave-to vin-${e}-leave-active`
}), I = (e, {
  enterClass: t,
  enterActiveClass: a,
  enterToClass: o,
  leaveClass: l,
  leaveActiveClass: i,
  leaveToClass: v
}) => {
  const n = B(e);
  return {
    enter: t || n.enter,
    enterActive: a || n.enterActive,
    enterTo: o || n.enterTo,
    leave: l || n.leave,
    leaveActive: i || n.leaveActiveClass,
    leaveTo: v || n.leaveTo
  };
}, U = (e, {
  beforeEnter: t,
  enter: a,
  afterEnter: o,
  beforeLeave: l,
  leave: i,
  afterLeave: v
}) => {
  const n = C(!1), s = C(""), c = C(), r = d(
    () => I(e.name, {
      enterClass: e.enterClass,
      enterActiveClass: e.enterActiveClass,
      enterToClass: e.enterToClass,
      leaveClass: e.leaveClass,
      leaveActiveClass: e.leaveActiveClass,
      leaveToClass: e.leaveToClass
    })
  ), f = () => {
    t == null || t(), n.value = !0, s.value = `${r.value.enter} ${r.value.enterActive}`, S(() => u(void 0, null, function* () {
      a == null || a(), yield D(20), s.value = r.value.enterTo, o == null || o();
    }));
  }, T = () => {
    l == null || l(), s.value = `${r.value.leave} ${r.value.leaveActive}`, S(() => u(void 0, null, function* () {
      i == null || i(), s.value = r.value.leaveTo, c.value = setTimeout(() => {
        v == null || v(), n.value = !1;
      }, parseInt(e.duration, 10));
    }));
  };
  return x(() => e.show ? f() : T()), F(() => clearTimeout(c.value)), {
    isShow: n,
    classes: s,
    onEnter: f,
    onLeave: T
  };
}, V = U, { create: j, useVinContext: q } = M("transition"), J = j({
  props: p,
  emits: ["click", "beforeEnter", "enter", "afterEnter", "beforeLeave", "leave", "afterLeave"],
  setup(e, { emit: t }) {
    const { getMainClass: a, getMainStyle: o } = q(e), { isShow: l, classes: i } = V(e, {
      beforeEnter: () => t("beforeEnter"),
      enter: () => t("enter"),
      afterEnter: () => t("afterEnter"),
      beforeLeave: () => t("beforeLeave"),
      leave: () => t("leave"),
      afterLeave: () => t("afterLeave")
    }), v = d(() => o({
      transitionDuration: `${e.duration}ms`,
      transitionTimingFunction: e.timingFunction
    })), n = d(() => a([i.value]));
    return {
      isShow: l,
      classes: i,
      mainClass: n,
      handleClick: () => {
        t("click");
      },
      mainStyle: v
    };
  }
});
export {
  J as default
};
