var y = Object.defineProperty, x = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var s = (e, n, o) => n in e ? y(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, u = (e, n) => {
  for (var o in n || (n = {}))
    k.call(n, o) && s(e, o, n[o]);
  if (l)
    for (var o of l(n))
      h.call(n, o) && s(e, o, n[o]);
  return e;
}, m = (e, n) => x(e, b(n));
import { computed as i } from "vue";
import { c as N } from "../component-fc679f22.mjs";
import { p as d } from "../pxCheck-5050e78e.mjs";
import { G as w } from "../common-d2f0c3ce.mjs";
import { c as z } from "../props-dd2296ba.mjs";
import { u as P } from "../useInject-3fe60ff4.mjs";
import { u as q } from "../index-91dcda46.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const v = m(u({}, z), {
  text: {
    type: String
  },
  icon: {
    type: String
  },
  iconSize: {
    type: [Number, String]
  },
  iconColor: {
    type: String
  },
  to: {
    type: [String, Object]
  },
  // #ifdef H5
  url: {
    type: String,
    default: ""
  },
  // #endif
  replace: {
    type: Boolean,
    default: !1
  }
}), { create: I, componentName: R, useVinContext: _ } = N("grid-item"), V = I({
  props: v,
  emits: ["click"],
  setup(e, { emit: n }) {
    const { getMainClass: o, getMainStyle: f } = _(e), c = P(w);
    if (!c.parent)
      return {};
    const { index: p } = c, t = c.parent.props || {}, g = i(o), C = i(() => {
      const r = {
        flexBasis: `${100 / +t.columnNum}%`
      };
      return t.square ? r.paddingTop = `${100 / +t.columnNum}%` : t.gutter && (r.paddingRight = d(t.gutter), p.value >= t.columnNum && (r.marginTop = d(t.gutter))), f(r);
    }), S = i(() => {
      const r = `${R}__content`;
      return {
        [`${r}`]: !0,
        [`${r}--border`]: t.border,
        [`${r}--surround`]: t.border && t.gutter,
        [`${r}--center`]: t.center,
        [`${r}--square`]: t.square,
        [`${r}--reverse`]: t.reverse,
        [`${r}--${t.direction}`]: !!t.direction,
        [`${r}--clickable`]: t.clickable
      };
    }), $ = i(() => ({
      name: e.icon,
      size: e.iconSize || t.iconSize,
      color: e.iconColor || t.iconColor
    })), a = q();
    return {
      mainClass: g,
      mainStyle: C,
      contentClass: S,
      iconProps: $,
      handleClick: (r) => {
        n("click", r), e.to && a ? a[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? window.location.replace(e.url) : window.location.href = e.url);
      }
    };
  }
});
export {
  V as default
};
