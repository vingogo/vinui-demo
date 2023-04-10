var u = Object.defineProperty, h = Object.defineProperties;
var m = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var c = (t, e, n) => e in t ? u(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, l = (t, e) => {
  for (var n in e || (e = {}))
    k.call(e, n) && c(t, n, e[n]);
  if (a)
    for (var n of a(e))
      g.call(e, n) && c(t, n, e[n]);
  return t;
}, s = (t, e) => h(t, m(e));
import { toRefs as y, computed as i } from "vue";
import { c as C } from "../component-fc679f22.mjs";
import { c as S } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const x = s(l({}, S), {
  leftShow: { type: Boolean, default: !0 },
  // 左侧  是否显示返回icon
  title: { type: String, default: "" },
  // 中间  文字标题
  titIcon: { type: String, default: "" },
  // 中间  标题icon
  desc: { type: String, default: "" },
  // 右侧   按钮文字
  fixed: {
    type: Boolean,
    default: !1
  },
  safeAreaInsetTop: {
    type: Boolean,
    default: !1
  }
}), { componentName: I, create: b, useVinContext: v } = C("navbar"), N = b({
  props: x,
  emits: ["on-click-back", "on-click-title", "on-click-icon", "on-click-right"],
  setup(t, { emit: e }) {
    const { getMainClass: n, getMainStyle: r } = v(t), { fixed: f, safeAreaInsetTop: d } = y(t), p = i(() => {
      const o = I;
      return n({
        [`${o}--fixed`]: f.value,
        [`${o}--safe-area-inset-top`]: d.value
      });
    });
    return {
      mainStyle: i(r),
      mainClass: p,
      handleLeft: () => {
        e("on-click-back");
      },
      handleCenter: () => {
        e("on-click-title");
      },
      handleCenterIcon: () => {
        e("on-click-icon");
      },
      handleRight: () => {
        e("on-click-right");
      }
    };
  }
});
export {
  N as default
};
