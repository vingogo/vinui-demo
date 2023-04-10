var u = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? u(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, l = (o, e) => {
  for (var t in e || (e = {}))
    d.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      f.call(e, t) && a(o, t, e[t]);
  return o;
}, n = (o, e) => i(o, p(e));
import { c as s } from "./props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const m = Symbol("grid"), g = n(l({}, s), {
  // 列数
  columnNum: {
    type: [Number, String],
    default: 4
  },
  // 图标大小
  iconSize: {
    type: [Number, String],
    default: 28
  },
  // 图标颜色
  iconColor: {
    type: String
  },
  // 是否显示边框
  border: {
    type: Boolean,
    default: !0
  },
  // 格子之间间隔距离
  gutter: {
    type: [Number, String],
    default: 0
  },
  // 是否内容居中
  center: {
    type: Boolean,
    default: !0
  },
  // 是否固定正方形
  square: {
    type: Boolean,
    default: !1
  },
  // 内容与文字翻转
  reverse: {
    type: Boolean,
    default: !1
  },
  // 内容排列方向
  direction: {
    type: String
  },
  // 是否开启点击反馈
  clickable: {
    type: Boolean,
    default: !1
  }
});
export {
  m as G,
  g
};
