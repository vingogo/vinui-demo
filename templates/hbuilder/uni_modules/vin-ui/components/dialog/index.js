var C = Object.defineProperty, x = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (t, e, o) => e in t ? C(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, r = (t, e) => {
  for (var o in e || (e = {}))
    k.call(e, o) && i(t, o, e[o]);
  if (s)
    for (var o of s(e))
      A.call(e, o) && i(t, o, e[o]);
  return t;
}, p = (t, e) => x(t, B(e));
import { ref as b, watch as v, computed as a } from "vue";
import { c as O } from "../component-fc679f22.mjs";
import { p as h } from "../common-8440b0d5.mjs";
import "../common-5c58cb85.mjs";
import "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const P = p(r({}, h), {
  title: {
    type: String,
    default: ""
  },
  content: {
    type: [String, Object],
    default: ""
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !1
  },
  noFooter: {
    type: Boolean,
    default: !1
  },
  noOkBtn: {
    type: Boolean,
    default: !1
  },
  noCancelBtn: {
    type: Boolean,
    default: !1
  },
  cancelText: {
    type: String,
    default: ""
  },
  okText: {
    type: String,
    default: ""
  },
  cancelAutoClose: {
    type: Boolean,
    default: !0
  },
  textAlign: {
    type: String,
    default: "center"
  },
  footerDirection: {
    type: String,
    default: "horizontal"
    // vertical
  }
}), { create: w, translate: M, useVinContext: T } = O("dialog"), E = w({
  inheritAttrs: !1,
  props: P,
  emits: ["update", "update:visible", "ok", "cancel", "open", "opened", "close", "closed"],
  setup(t, { emit: e }) {
    const { getMainClass: o, getMainStyle: u } = T(t), c = b(t.visible);
    v(
      () => t.visible,
      (n) => {
        c.value = n;
      }
    );
    const d = a(o), f = a(u), y = (n) => {
      e("update", n), e("update:visible", n);
    }, l = () => {
      y(!1), e("closed");
    }, g = () => {
      e("cancel"), t.cancelAutoClose && l();
    }, S = () => {
      l(), e("ok");
    }, m = a(() => ({
      textAlign: t.textAlign
    }));
    return {
      closed: l,
      mainClass: d,
      mainStyle: f,
      onCancel: g,
      onOk: S,
      showPopup: c,
      translate: M,
      contentStyle: m
    };
  }
});
export {
  E as default
};
