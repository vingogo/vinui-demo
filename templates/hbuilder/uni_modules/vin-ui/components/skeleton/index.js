var g = Object.defineProperty, v = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var u = (e, t, a) => t in e ? g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    x.call(t, a) && u(e, a, t[a]);
  if (s)
    for (var a of s(t))
      C.call(t, a) && u(e, a, t[a]);
  return e;
}, i = (e, t) => v(e, h(t));
import { toRefs as B, computed as n } from "vue";
import { c as $ } from "../component-fc679f22.mjs";
import { c as k } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const w = i(p({}, k), {
  // 每行宽度
  width: {
    type: String,
    default: "100px"
  },
  // 每行高度
  height: {
    type: String,
    default: "100px"
  },
  // 是否显示动画
  animated: {
    type: Boolean,
    default: !1
  },
  // 头像
  avatar: {
    type: Boolean,
    default: !1
  },
  // 头像形状：正方形/圆形
  avatarShape: {
    type: String,
    default: "round"
  },
  // 头像大小
  avatarSize: {
    type: String,
    default: "50px"
  },
  // 是否显示骨架屏
  loading: {
    type: Boolean,
    default: !0
  },
  // 标题/段落 圆角风格
  round: {
    type: Boolean,
    default: !1
  },
  // 显示段落行数
  row: {
    type: String,
    default: "1"
  },
  // 是否显示段落标题
  title: {
    type: Boolean,
    default: !0
  }
}), { create: _, componentName: c, useVinContext: b } = $("skeleton"), V = _({
  props: w,
  setup(e) {
    const { getMainClass: t, getMainStyle: a } = b(e), { avatarShape: r, round: d, avatarSize: l } = B(e), f = n(t), m = n(a), y = n(() => {
      const o = `${c}__avatar`;
      return {
        [o]: !0,
        [`${o}--${r.value}`]: r.value
      };
    }), S = n(() => {
      const o = `${c}__block`;
      return {
        [o]: !0,
        [`${o}--round`]: d.value
      };
    });
    return {
      mainStyle: m,
      mainClass: f,
      avatarShape: r,
      avatarClass: y,
      blockClass: S,
      getStyle: () => l.value ? {
        width: l.value,
        height: l.value
      } : {
        width: "50px",
        height: "50px"
      }
    };
  }
});
export {
  V as default
};
