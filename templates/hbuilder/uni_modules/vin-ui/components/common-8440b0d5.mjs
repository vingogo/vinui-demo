var s = Object.defineProperty, r = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var l = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, n = (o, e) => {
  for (var t in e || (e = {}))
    i.call(e, t) && l(o, t, e[t]);
  if (a)
    for (var t of a(e))
      u.call(e, t) && l(o, t, e[t]);
  return o;
}, p = (o, e) => r(o, f(e));
import { o as y } from "./common-5c58cb85.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const g = p(n({}, y), {
  overlay: {
    type: Boolean,
    default: !0
  },
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  popClass: {
    type: String,
    default: ""
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  closeIconPosition: {
    type: String,
    default: "top-right"
  },
  closeIcon: {
    type: String,
    default: "close"
  },
  destroyOnClose: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: !1
  }
});
export {
  g as p
};
