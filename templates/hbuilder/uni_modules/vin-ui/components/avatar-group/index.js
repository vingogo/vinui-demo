import { ref as o, computed as n } from "vue";
import { c } from "../component-fc679f22.mjs";
import { a as p, A as u } from "../common-60a9ed3e.mjs";
import { u as i } from "../useProvide-9af628ed.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const { classPrefix: m, create: f, useVinContext: l } = c("avatar-group"), C = f({
  props: p,
  setup(a) {
    const { getMainClass: r } = l(a), t = o(null), s = o(0), e = n(r);
    return i(u, `${m}-avatar`)({ props: a, avatarGroupRef: t, index: s }), {
      classes: e,
      avatarGroupRef: t
    };
  }
});
export {
  C as default
};
