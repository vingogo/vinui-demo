var D = Object.defineProperty, F = Object.defineProperties;
var G = Object.getOwnPropertyDescriptors;
var x = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
var T = (a, t, l) => t in a ? D(a, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[t] = l, p = (a, t) => {
  for (var l in t || (t = {}))
    I.call(t, l) && T(a, l, t[l]);
  if (x)
    for (var l of x(t))
      O.call(t, l) && T(a, l, t[l]);
  return a;
}, S = (a, t) => F(a, G(t));
var z = (a) => typeof a == "symbol" ? a : a + "", E = (a, t) => {
  var l = {};
  for (var n in a)
    I.call(a, n) && t.indexOf(n) < 0 && (l[n] = a[n]);
  if (a != null && x)
    for (var n of x(a))
      t.indexOf(n) < 0 && O.call(a, n) && (l[n] = a[n]);
  return l;
};
var P = (a, t, l) => (T(a, typeof t != "symbol" ? t + "" : t, l), l);
var L = (a, t, l) => new Promise((n, s) => {
  var c = (i) => {
    try {
      r(l.next(i));
    } catch (o) {
      s(o);
    }
  }, u = (i) => {
    try {
      r(l.throw(i));
    } catch (o) {
      s(o);
    }
  }, r = (i) => i.done ? n(i.value) : Promise.resolve(i.value).then(c, u);
  r((l = l.apply(a, t)).next());
});
import { computed as M, ref as K, watch as b } from "vue";
import { c as H } from "../component-fc679f22.mjs";
import { a as J } from "../common-731656a5.mjs";
import "../common-8440b0d5.mjs";
import "../common-5c58cb85.mjs";
import "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const V = (a, t, l) => a.map((n) => {
  const {
    value: s = "value",
    text: c = "text",
    children: u = "children"
  } = l, m = n, { [s]: r, [c]: i, [u]: o } = m, f = E(m, [z(s), z(c), z(u)]), h = S(p({
    loading: !1
  }, f), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: r,
    text: i,
    children: o,
    _parent: t
  });
  return h.children && h.children.length && (h.children = V(h.children, h, l)), h;
}), _ = (a, t) => {
  let l = 0, n;
  for (; (n = a[l++]) && t(n) !== !0; )
    n.children && n.children.length && _(n.children, t);
}, Q = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, R = (a, t) => {
  const l = p(p({}, Q), t || {}), { topId: n, idKey: s, pidKey: c, sortKey: u } = l;
  let r = [], i = {};
  return a.forEach((o) => {
    o = p({}, o);
    const { [s]: f, [c]: h } = o, m = i[h] = i[h] || [];
    !r.length && h === n && (r = m), m.push(o), o.children = i[f] || (i[f] = []);
  }), u && Object.keys(i).forEach((o) => {
    i[o].length > 1 && i[o].sort((f, h) => f[u] - h[u]);
  }), i = null, r;
};
class U {
  constructor(t, l) {
    P(this, "nodes");
    P(this, "config");
    this.config = p({
      value: "value",
      text: "text",
      children: "children"
    }, l || {}), this.nodes = V(t, null, this.config);
  }
  updateChildren(t, l) {
    l ? l.children = V(t, l, this.config) : this.nodes = V(t, null, this.config);
  }
  // for test
  getNodeByValue(t) {
    let l;
    return _(this.nodes, (n) => {
      if (n.value === t)
        return l = n, !0;
    }), l;
  }
  getPathNodesByValue(t) {
    if (!t.length)
      return [];
    const l = [];
    let n = this.nodes;
    for (; n && n.length; ) {
      const s = n.find(
        (c) => c.value === t[c.level]
      );
      if (!s)
        break;
      l.push(s), n = s.children;
    }
    return l;
  }
  // eslint-disable-next-line class-methods-use-this
  isLeaf(t, l) {
    const { leaf: n, children: s } = t, c = Array.isArray(s) && Boolean(s.length);
    return n || !c && !l;
  }
  hasChildren(t, l) {
    if (this.isLeaf(t, l))
      return !1;
    const { children: s } = t;
    return Array.isArray(s) && Boolean(s.length);
  }
}
const j = U, { create: W, translate: X } = H("cascader-item"), re = W({
  props: J,
  emits: ["update:modelValue", "change", "pathChange"],
  setup(a, { emit: t }) {
    const l = M(() => ({
      lazy: a.lazy,
      lazyLoad: a.lazyLoad,
      valueKey: a.valueKey,
      textKey: a.textKey,
      childrenKey: a.childrenKey,
      convertConfig: a.convertConfig
    })), n = K(0), s = K(!1), c = K(a.modelValue), u = K(new j([], {})), r = K([]), i = M(() => l.value.lazy && Boolean(l.value.lazyLoad)), o = /* @__PURE__ */ new Map();
    let f;
    const h = () => L(this, null, function* () {
      o.clear(), r.value = [], n.value = 0, s.value = !1, f = null;
      let { options: e } = a;
      l.value.convertConfig && (e = R(
        e,
        l.value.convertConfig
      )), u.value = new j(e, {
        value: l.value.valueKey,
        text: l.value.textKey,
        children: l.value.childrenKey
      }), i.value && !u.value.nodes.length && (yield w({
        root: !0,
        loading: !0,
        text: "",
        value: ""
      })), r.value = [{ nodes: u.value.nodes, selectedNode: null }], m();
    }), m = () => L(this, null, function* () {
      const e = c.value;
      if (e === void 0 || !u.value.nodes.length)
        return;
      if (e.length === 0) {
        n.value = 0, r.value = [{ nodes: u.value.nodes, selectedNode: null }];
        return;
      }
      let d = e;
      if (i.value && Array.isArray(e) && e.length) {
        d = [];
        const v = u.value.nodes.find((y) => y.value === e[0]);
        if (v) {
          d = [v.value], s.value = !0;
          const y = yield e.slice(1).reduce((g, N) => L(this, null, function* () {
            var k;
            const C = yield g;
            yield w(C);
            const B = (k = C == null ? void 0 : C.children) == null ? void 0 : k.find((q) => q.value === N);
            return B && d.push(N), Promise.resolve(B);
          }), Promise.resolve(v));
          yield w(y), s.value = !1;
        }
      }
      d.length && e === a.modelValue && u.value.getPathNodesByValue(d).map((y, g) => {
        n.value = g, A.handleNode(y, !0);
      });
    }), w = (e) => L(this, null, function* () {
      if (!e)
        return;
      if (!l.value.lazyLoad) {
        e.leaf = !0;
        return;
      }
      if (u.value.isLeaf(e, i.value) || u.value.hasChildren(e, i.value))
        return;
      e.loading = !0;
      const d = e.root ? null : e;
      let v = o.get(e);
      v || (v = new Promise((g) => {
        var N, C;
        (C = (N = l.value).lazyLoad) == null || C.call(N, e, g);
      }), o.set(e, v));
      const y = yield v;
      Array.isArray(y) && y.length > 0 ? u.value.updateChildren(y, d) : e.leaf = !0, e.loading = !1, o.delete(e);
    }), $ = (e) => {
      const d = e.map((v) => v.value);
      c.value = d, t("change", d, e), t("update:modelValue", d, e);
    }, A = {
      // 选中一个节点，静默模式不触发事件
      handleNode(e, d) {
        return L(this, null, function* () {
          const { disabled: v, loading: y } = e;
          if (!(!d && v || !r.value[n.value])) {
            if (u.value.isLeaf(e, i.value)) {
              if (e.leaf = !0, r.value[n.value].selectedNode = e, r.value = r.value.slice(0, e.level + 1), !d) {
                const g = r.value.map((N) => N.selectedNode);
                $(g), t("pathChange", g);
              }
              return;
            }
            if (u.value.hasChildren(e, i.value)) {
              const g = e.level + 1;
              if (r.value[n.value].selectedNode = e, r.value = r.value.slice(0, g), r.value.push({
                nodes: e.children || [],
                selectedNode: null
              }), n.value = g, !d) {
                const N = r.value.map((C) => C.selectedNode);
                t("pathChange", N);
              }
              return;
            }
            f = e, !y && (yield w(e), f === e && (r.value[n.value].selectedNode = e, A.handleNode(e, d)));
          }
        });
      },
      handleTabClick(e) {
        f = null, n.value = e.paneKey;
      },
      formatTabTitle(e) {
        return e.selectedNode ? e.selectedNode.text : X("select");
      },
      isSelected(e, d) {
        var v;
        return ((v = e == null ? void 0 : e.selectedNode) == null ? void 0 : v.value) === d.value;
      }
    };
    return b(
      [l, () => a.options],
      () => {
        h();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), b(
      () => a.modelValue,
      (e) => {
        e !== c.value && (c.value = e, m());
      }
    ), b(
      () => a.visible,
      (e) => {
        e && Array.isArray(c.value) && c.value.length > 0 && m();
      }
    ), p({ panes: r, initLoading: s, tabsCursor: n }, A);
  }
});
export {
  re as default
};
