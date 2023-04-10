var c = Object.defineProperty;
var f = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var i = (n, r, e) => r in n ? c(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e, a = (n, r) => {
  for (var e in r || (r = {}))
    v.call(r, e) && i(n, e, r[e]);
  if (f)
    for (var e of f(r))
      d.call(r, e) && i(n, e, r[e]);
  return n;
};
import { shallowReactive as m, getCurrentInstance as x, provide as y, markRaw as p, isVNode as b } from "vue";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
function T(n, r) {
  const e = [], s = (u) => {
    Array.isArray(u) && u.forEach((t) => {
      var o;
      if (b(t)) {
        if (r) {
          if (t.type && t.type.name === r) {
            e.push(t);
            return;
          }
        } else
          e.push(t);
        (o = t.component) != null && o.subTree && s(t.component.subTree.children), t.children && s(t.children);
      }
    });
  };
  return s(n), e;
}
function C(n, r, e) {
  const s = T(n && n.subTree && n.subTree.children, e);
  r.sort((u, t) => s.indexOf(u.vnode) - s.indexOf(t.vnode));
}
function w(n, r) {
  const e = m([]), s = x(), u = (o) => {
    o.proxy && (e.push(p(o)), C(s, e, r));
  }, t = (o) => {
    e.splice(e.indexOf(p(o)), 1);
  };
  return (o) => (y(n, a({
    add: u,
    remove: t,
    internalChildren: e
  }, o)), {
    internalChildren: e
  });
}
export {
  w as u
};
