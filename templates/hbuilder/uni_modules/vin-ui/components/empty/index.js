var d = Object.defineProperty, g = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var n = (e, t, s) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, o = (e, t) => {
  for (var s in t || (t = {}))
    v.call(t, s) && n(e, s, t[s]);
  if (c)
    for (var s of c(t))
      y.call(t, s) && n(e, s, t[s]);
  return e;
}, p = (e, t) => g(e, h(t));
import { toRefs as S, computed as r } from "vue";
import { c as b } from "../component-fc679f22.mjs";
import { c as x } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const C = {
  empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
  error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
  network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
}, $ = p(o({}, x), {
  image: {
    type: String,
    default: "empty"
    // 默认empty
  },
  imageSize: {
    type: [Number, String],
    // 图片大小，正方形
    default: ""
  },
  description: {
    type: String,
    // 文字区
    default: ""
  }
}), { create: j, translate: w, useVinContext: U } = b("empty"), k = j({
  props: $,
  setup(e) {
    const { getMainClass: t, getMainStyle: s } = U(e), { image: i, imageSize: a } = S(e), m = r(() => a.value ? typeof a.value == "number" ? `width:${a.value}px;height:${a.value}px` : `width:${a.value};height:${a.value}` : ""), l = i.value.startsWith("https://") || i.value.startsWith("http://") || i.value.startsWith("//") ? i.value : C[i.value], u = r(t), f = r(s);
    return {
      imageUrl: l,
      imgStyle: m,
      translate: w,
      mainClass: u,
      mainStyle: f
    };
  }
});
export {
  k as default
};
