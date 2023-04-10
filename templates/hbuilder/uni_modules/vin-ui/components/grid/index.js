import { computed as e } from "vue";
import { c as s } from "../component-fc679f22.mjs";
import { p as a } from "../pxCheck-5050e78e.mjs";
import { g as c, G as u } from "../common-d2f0c3ce.mjs";
import { u as d } from "../useProvide-9af628ed.mjs";
import "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const { create: f, componentName: r, useVinContext: g } = s("grid"), G = f({
  props: c,
  setup(t) {
    const { getMainClass: o, getMainStyle: n } = g(t);
    d(u, `${r}-item`)({ props: t });
    const i = e(() => o({
      [`${r}--border`]: t.border && !t.gutter
    })), m = e(() => n({
      "padding-left": t.gutter && a(t.gutter)
    }));
    return {
      mainClass: i,
      mainStyle: m
    };
  }
});
export {
  G as default
};
