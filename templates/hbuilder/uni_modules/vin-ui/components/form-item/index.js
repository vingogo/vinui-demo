var A = Object.defineProperty, b = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var s = (e, t, r) => t in e ? A(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, u = (e, t) => {
  for (var r in t || (t = {}))
    x.call(t, r) && s(e, r, t[r]);
  if (i)
    for (var r of i(t))
      M.call(t, r) && s(e, r, t[r]);
  return e;
}, m = (e, t) => b(e, h(t));
import { provide as C, computed as n } from "vue";
import { p as w } from "../pxCheck-5050e78e.mjs";
import { c as E } from "../component-fc679f22.mjs";
import { F as P } from "../common-11c4202a.mjs";
import { c as B } from "../props-dd2296ba.mjs";
import { u as v } from "../useInject-3fe60ff4.mjs";
import "../useProvide-9af628ed.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const F = m(u({}, B), {
  required: {
    type: Boolean,
    default: !1
  },
  prop: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: ""
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelAlign: {
    type: String,
    default: ""
  },
  bodyAlign: {
    type: String,
    default: ""
  },
  rules: {
    type: Array,
    default: () => []
  },
  showErrorMessage: {
    type: Boolean,
    default: !0
  },
  showErrorLine: {
    type: Boolean,
    default: !0
  },
  errorMessageAlign: {
    type: String,
    default: ""
  }
}), { create: I, useVinContext: L } = E("form-item"), Y = I({
  inheritAttrs: !1,
  props: F,
  setup(e) {
    var l;
    const { getMainClass: t, getMainStyle: r } = L(e), o = ((l = v(P).parent) == null ? void 0 : l.formErrorTip) || {};
    C("form", {
      props: e
    });
    const f = n(() => ({
      width: w(e.labelWidth),
      textAlign: e.labelAlign
    })), c = n(() => ({
      textAlign: e.bodyAlign
    })), d = n(() => ({
      textAlign: e.errorMessageAlign
    })), g = n(() => {
      var a;
      const { showErrorLine: y, prop: S } = e;
      return t({
        error: !!((a = o == null ? void 0 : o.value) != null && a[S]),
        line: y
      });
    }), p = n(r);
    return { formErrorTip: o, labelStyle: f, bodyStyle: c, errorMessageStyle: d, mainClass: g, mainStyle: p };
  }
});
export {
  Y as default
};
