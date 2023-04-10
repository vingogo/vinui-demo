import { inject as u, getCurrentInstance as d, onUnmounted as s, computed as a, ref as l } from "vue";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
function m(t) {
  const n = u(t, null);
  if (n) {
    const e = d(), { add: r, remove: o, internalChildren: c } = n;
    r(e), s(() => o(e));
    const i = a(() => c.indexOf(e));
    return {
      parent: n,
      index: i
    };
  }
  return {
    parent: null,
    index: l(-1)
  };
}
export {
  m as u
};
