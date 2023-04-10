import { ref as i, computed as l, watch as p } from "vue";
import { c as u } from "../component-fc679f22.mjs";
import { c as d } from "../common-731656a5.mjs";
import "../common-8440b0d5.mjs";
import "../common-5c58cb85.mjs";
import "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const { create: m } = u("cascader"), v = m({
  props: d,
  emits: ["update:modelValue", "change", "pathChange", "update:visible"],
  setup(o, { emit: a }) {
    const t = i(o.modelValue), n = l({
      get() {
        return o.visible;
      },
      set(e) {
        a("update:visible", e);
      }
    }), r = (e, s) => {
      t.value = e, n.value = !1, a("change", e, s), a("update:modelValue", e);
    }, c = (e) => {
      a("pathChange", e);
    };
    return p(
      () => o.modelValue,
      (e) => {
        e !== t.value && (t.value = e);
      }
    ), {
      onChange: r,
      onPathChange: c,
      innerValue: t,
      innerVisible: n
    };
  }
});
export {
  v as default
};
