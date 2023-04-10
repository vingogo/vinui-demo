var n = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, r = (o, e) => {
  for (var t in e || (e = {}))
    u.call(e, t) && a(o, t, e[t]);
  if (l)
    for (var t of l(e))
      i.call(e, t) && a(o, t, e[t]);
  return o;
}, y = (o, e) => p(o, s(e));
import { c as d } from "./props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const m = y(r({}, d), {
  visible: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  duration: {
    type: [Number, String],
    default: 300
  },
  overlayClass: {
    type: String,
    default: ""
  },
  overlayStyle: {
    type: Object
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  }
});
export {
  m as o
};
