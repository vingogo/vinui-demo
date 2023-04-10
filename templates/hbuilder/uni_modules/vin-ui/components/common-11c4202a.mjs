import { computed as E, reactive as F, watch as O } from "vue";
import { c as V, i as S, g as x, a as I } from "./component-fc679f22.mjs";
import { u as A } from "./useProvide-9af628ed.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const { create: C, componentName: T } = V("form"), q = Symbol("Form"), _ = C({
  props: {
    modelValue: {
      type: Object,
      default: {}
    }
  },
  emits: ["validate"],
  setup(m, { emit: j }) {
    const l = E(() => F({})), { internalChildren: f } = A(
      q,
      `${T}-item`
    )({ props: m, formErrorTip: l }), P = (t = m.modelValue) => {
      Object.keys(l.value).forEach((s) => {
        l.value[s] = "";
      });
    }, k = () => {
      P();
    };
    O(
      () => m.modelValue,
      (t) => {
        P(t);
      },
      { immediate: !0 }
    );
    const p = (t) => {
      let s = [];
      return t.forEach((e, c) => {
        var r, i, a, n;
        let { type: o } = e;
        o = o.name || o, o === "vin-form-item" ? s.push({
          prop: (r = e.props) == null ? void 0 : r.prop,
          rules: ((i = e.props) == null ? void 0 : i.rules) || []
        }) : Array.isArray(e.children) && ((a = e.children) != null && a.length) ? s = s.concat(p(e.children)) : S(e.children) && Object.keys(e.children) && (n = e.children) != null && n.default && (e.children = e.children.default(), s = s.concat(p(e.children)));
      }), s;
    }, h = (t) => {
      t.message && j("validate", t), l.value[t.prop] = t.message;
    }, g = (t) => {
      const { rules: s, prop: e } = t, c = (i) => new Promise((a, n) => {
        h(i), a(i);
      });
      e || console.warn("[VinUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const o = x(m.modelValue, e || "");
      h({ prop: e, message: "" });
      const r = [...s];
      for (; r.length; ) {
        const { required: i, validator: a, regex: n, message: v } = r.shift(), u = { prop: e, message: v };
        if (i && !o || n && !n.test(String(o)))
          return c(u);
        if (a) {
          const d = a(o);
          if (I(d))
            return new Promise((b, K) => {
              d.then((w) => {
                w ? b(!0) : (h(u), b(u));
              });
            });
          if (!d)
            return c(u);
        }
      }
      return Promise.resolve(!0);
    }, y = (t = "") => new Promise((s, e) => {
      const o = p(f == null ? void 0 : f.map((r) => r.vnode)).map((r) => t ? t === r.prop ? g(r) : Promise.resolve(!0) : g(r));
      Promise.all(o).then((r) => {
        r = r.filter((a) => a !== !0);
        const i = { valid: !0, errors: [] };
        r.length && (i.valid = !1, i.errors = r), s(i);
      });
    });
    return { validate: y, reset: k, onSubmit: () => (y(), !1), formErrorTip: l };
  }
});
export {
  _ as C,
  q as F
};
