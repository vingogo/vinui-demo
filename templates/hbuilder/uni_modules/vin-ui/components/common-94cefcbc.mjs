var n = Object.defineProperty, u = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (l, t, e) => t in l ? n(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e, o = (l, t) => {
  for (var e in t || (t = {}))
    s.call(t, e) && r(l, e, t[e]);
  if (a)
    for (var e of a(t))
      d.call(t, e) && r(l, e, t[e]);
  return l;
}, i = (l, t) => u(l, p(t));
import { c as f } from "./props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const S = i(o({}, f), {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  color: {
    type: String,
    default: ""
  },
  direction: {
    type: String,
    default: "horizontal"
    // vertical
  },
  size: {
    type: String,
    default: "normal"
  },
  type: {
    type: String,
    default: "line"
    // card、line、smile
  },
  titleScroll: {
    type: Boolean,
    default: !1
  },
  ellipsis: {
    type: Boolean,
    default: !0
  },
  background: {
    type: String,
    default: ""
  },
  animatedTime: {
    type: [Number, String],
    default: 300
  },
  titleGutter: {
    type: [Number, String],
    default: 0
  },
  customClass: {
    type: [String, Object],
    default: ""
  }
}), c = Symbol("tabs");
export {
  c as T,
  S as t
};
