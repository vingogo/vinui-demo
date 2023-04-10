var i = Object.defineProperty, y = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, e, t) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, r = (a, e) => {
  for (var t in e || (e = {}))
    d.call(e, t) && o(a, t, e[t]);
  if (l)
    for (var t of l(e))
      c.call(e, t) && o(a, t, e[t]);
  return a;
}, n = (a, e) => y(a, p(e));
import { p as u } from "./common-8440b0d5.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const g = n(r({}, u), {
  modelValue: Array,
  visible: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  lazy: Boolean,
  lazyLoad: Function,
  valueKey: {
    type: String,
    default: "value"
  },
  textKey: {
    type: String,
    default: "text"
  },
  childrenKey: {
    type: String,
    default: "children"
  },
  convertConfig: Object,
  title: String
}), v = {
  visible: Boolean,
  modelValue: Array,
  options: {
    type: Array,
    default: () => []
  },
  lazy: Boolean,
  lazyLoad: Function,
  valueKey: {
    type: String,
    default: "value"
  },
  textKey: {
    type: String,
    default: "text"
  },
  childrenKey: {
    type: String,
    default: "children"
  },
  convertConfig: Object
};
export {
  v as a,
  g as c
};
