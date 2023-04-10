var U = Object.defineProperty, V = Object.defineProperties;
var X = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var Y = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
var y = (t, l, i) => l in t ? U(t, l, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[l] = i, r = (t, l) => {
  for (var i in l || (l = {}))
    Y.call(l, i) && y(t, i, l[i]);
  if (h)
    for (var i of h(l))
      j.call(l, i) && y(t, i, l[i]);
  return t;
}, d = (t, l) => V(t, X(l));
import { getCurrentInstance as z, ref as g, reactive as G, computed as o, watch as S, onMounted as H, onActivated as J, onDeactivated as K, onUnmounted as O, toRefs as w } from "vue";
import { c as Z } from "../component-fc679f22.mjs";
import { c as _ } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const p = d(r({}, _), {
  // 滚动方向  across 横向 vertical 纵向
  direction: {
    type: String,
    default: "across"
  },
  list: {
    type: Array,
    default: () => []
  },
  standTime: {
    type: Number,
    default: 1e3
  },
  complexAm: {
    type: Boolean,
    default: !1
  },
  height: {
    type: Number,
    default: 40
  },
  text: {
    type: String,
    default: ""
  },
  closeMode: {
    type: Boolean,
    default: !1
  },
  wrapable: {
    type: Boolean,
    default: !1
  },
  leftIcon: { type: String, default: "" },
  rightIcon: { type: String, default: "" },
  color: {
    type: String,
    default: "#F9911B"
  },
  background: {
    type: String,
    default: ""
  },
  delay: {
    type: [String, Number],
    default: 1
  },
  scrollable: {
    type: Boolean,
    default: null
  },
  speed: {
    type: Number,
    default: 50
  }
}), { create: tt, useVinContext: et } = Z("noticebar"), ot = tt({
  props: p,
  emits: ["click", "close"],
  setup(t, { emit: l, slots: i }) {
    const { getMainClass: C, getMainStyle: b } = et(t), k = z(), v = g(null), x = g(null), e = G({
      wrapWidth: 0,
      firstRound: !0,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: !0,
      animationClass: "",
      animate: !1,
      scrollList: [],
      distance: 0,
      timer: null,
      keepAlive: !1,
      isCanScroll: !1,
      id: Math.round(Math.random() * 1e5)
    }), I = o(C), L = o(b), A = o(() => e.isCanScroll == null ? !1 : !e.isCanScroll && !t.wrapable), W = o(() => t.leftIcon !== "close"), $ = o(() => {
      const n = {
        color: t.color,
        background: t.background
      };
      return t.direction === "vertical" && (n.height = `${t.height}px`), n;
    }), B = o(() => ({
      animationDelay: `${e.firstRound ? t.delay : 0}s`,
      animationDuration: `${e.duration}s`,
      transform: `translateX(${e.firstRound ? 0 : `${e.wrapWidth}px`})`
    })), R = o(() => {
      let n = "";
      return t.leftIcon && (n = t.leftIcon), n;
    }), T = o(() => {
      let n = {};
      return t.complexAm ? n = {
        transform: `translateY(${e.distance}px)`
      } : e.animate && (n = {
        transition: `all ${~~(t.height / t.speed / 4)}s`,
        "margin-top": `-${t.height}px`
      }), n;
    });
    S(
      () => t.list,
      (n) => {
        e.scrollList = [].concat(n);
      }
    );
    const u = (n) => {
      e.showNoticeBar !== !1 && setTimeout(() => {
        let a = 0, c = 0;
        const m = uni.createSelectorQuery().in(k);
        m.select(`.wrap${e.id}`).boundingClientRect((s) => {
          (s == null ? void 0 : s.width) > 0 && (a = s.width);
        }).exec(), m.select(`.content${e.id}`).boundingClientRect((s) => {
          s.width > 0 && (c = s.width), e.isCanScroll = t.scrollable == null ? c > a : t.scrollable, e.isCanScroll ? (e.wrapWidth = a, e.offsetWidth = c, e.duration = c / t.speed, e.animationClass = "play") : e.animationClass = "";
        }).exec();
      }, 100);
    }, M = (n) => {
      l("click", n);
    }, N = (n) => {
      t.closeMode && (e.showNoticeBar = !t.closeMode), l("close", n);
    }, D = () => {
      e.firstRound = !1, setTimeout(() => {
        e.duration = (e.offsetWidth + e.wrapWidth) / t.speed, e.animationClass = "play-infinite";
      }, 0);
    }, f = () => {
      e.animate = !0, setTimeout(() => {
        e.scrollList.push(e.scrollList[0]), e.scrollList.shift(), e.animate = !1;
      }, ~~(t.height / t.speed / 4) * 1e3);
    }, E = () => {
      f(), e.timer = setInterval(
        f,
        ~~(t.height / t.speed / 4) * 1e3 + t.standTime
      );
    }, P = (n, a) => {
      setTimeout(() => {
        e.distance -= t.height / 100, a && (e.scrollList.push(e.scrollList[0]), e.scrollList.shift(), e.distance = 0);
      }, n * t.speed);
    }, q = () => {
      e.timer = setInterval(() => {
        for (let a = 0; a < 100; a++)
          P(a, !(a < 100 - 1));
      }, t.standTime + 100 * t.speed);
    }, F = (n) => {
      l("click", n);
    }, Q = () => {
      l("close", e.scrollList[0]);
    };
    return S(
      () => t.text,
      (n) => {
        u();
      }
    ), H(() => {
      t.direction === "vertical" ? (i.default || (e.scrollList = [].concat(t.list)), setTimeout(() => {
        t.complexAm ? q() : E();
      }, t.standTime)) : u(t.text);
    }), J(() => {
      e.keepAlive && (e.keepAlive = !1);
    }), K(() => {
      e.keepAlive = !0, clearInterval(e.timer);
    }), O(() => {
      clearInterval(e.timer);
    }), d(r(r({}, w(t)), w(e)), {
      isEllipsis: A,
      mainClass: I,
      mainStyle: L,
      iconShow: W,
      barStyle: $,
      contentStyle: B,
      iconBg: R,
      horseLampStyle: T,
      wrap: v,
      content: x,
      handleClick: M,
      onClickIcon: N,
      onAnimationEnd: D,
      go: F,
      handleClickIcon: Q,
      slots: i
    });
  }
});
export {
  ot as default
};
