import { nextTick as m, ref as a } from "vue";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const z = (e, t) => new Promise((o) => {
  m(() => {
    uni.createSelectorQuery().in(t).select(`#${e}`).boundingClientRect((n) => {
      o(n);
    }).exec();
  });
}), v = 10;
function X(e, t) {
  return e > t && e > v ? "horizontal" : t > e && t > v ? "vertical" : "";
}
function M() {
  const e = a(0), t = a(0), o = a(0), n = a(0), c = a(0), l = a(0), u = a(""), f = () => u.value === "vertical", h = () => u.value === "horizontal", r = () => {
    o.value = 0, n.value = 0, c.value = 0, l.value = 0, u.value = "";
  };
  return {
    move: (s) => {
      const i = s.touches[0];
      o.value = i.clientX - e.value, n.value = i.clientY - t.value, c.value = Math.abs(o.value), l.value = Math.abs(n.value), u.value || (u.value = X(c.value, l.value));
    },
    start: (s) => {
      r(), e.value = s.touches[0].clientX, t.value = s.touches[0].clientY;
    },
    reset: r,
    startX: e,
    startY: t,
    deltaX: o,
    deltaY: n,
    offsetX: c,
    offsetY: l,
    direction: u,
    isVertical: f,
    isHorizontal: h
  };
}
export {
  z as a,
  M as u
};
