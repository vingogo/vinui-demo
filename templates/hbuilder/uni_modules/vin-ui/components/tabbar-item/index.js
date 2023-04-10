var g = Object.defineProperty, v = Object.defineProperties;
var y = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var s = (n, t, e) => t in n ? g(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, u = (n, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && s(n, e, t[e]);
  if (l)
    for (var e of l(t))
      S.call(t, e) && s(n, e, t[e]);
  return n;
}, d = (n, t) => v(n, y(t));
import { inject as x, reactive as C, getCurrentInstance as b, computed as a, watch as I } from "vue";
import { c as V } from "../component-fc679f22.mjs";
import { c as w } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const P = d(u({}, w), {
  tabTitle: {
    // 标签页的标题
    type: String,
    default: ""
  },
  icon: {
    // 标签页显示的icon
    type: String,
    default: ""
  },
  href: {
    // 标签页的跳转链接
    type: String,
    default: ""
  },
  num: {
    // 页签右上角的数字角标
    type: String,
    default: ""
  },
  activeImg: {
    type: String,
    default: ""
  },
  img: {
    type: String,
    default: ""
  },
  dot: {
    type: Boolean,
    default: !1
  },
  classPrefix: {
    type: String,
    default: "vin-icon"
  },
  fontClassName: {
    type: String,
    default: "vin-iconfont"
  },
  to: [Object, String]
}), { create: j, useVinContext: z } = V("tabbar-item"), k = j({
  props: P,
  setup(n) {
    const { getMainClass: t, getMainStyle: e } = z(n), o = x("parent"), i = C({
      size: o.size,
      unactiveColor: o.unactiveColor,
      // 未选中的颜色
      activeColor: o.activeColor,
      // 选中的颜色
      active: o.modelValue,
      // 是否选中
      index: 0
    });
    ((r) => {
      if (r.proxy) {
        const c = o.children.length;
        i.index = c, o.children.push(r.proxy);
      }
    })(b());
    const f = (r) => {
      o.changeIndex(r);
    }, p = a(() => o ? o.modelValue : null);
    I(p, (r, c) => {
      i.active = r, setTimeout(() => {
        o.children[r].href && (window.location.href = o.children[r].href);
      });
    });
    const m = a(() => t({
      "vin-tabbar-item__icon--unactive": i.active !== i.index
    }));
    return {
      mainStyle: a(() => e({
        color: i.active === i.index ? i.activeColor : i.unactiveColor
      })),
      mainClass: m,
      state: i,
      change: f
    };
  }
});
export {
  k as default
};
