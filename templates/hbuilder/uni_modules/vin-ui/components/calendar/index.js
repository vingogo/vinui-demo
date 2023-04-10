import { computed as l, ref as r, watch as h } from "vue";
import { c as v } from "../component-fc679f22.mjs";
import { U as u } from "../date-4e4f84ef.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const m = {
  type: {
    type: String,
    default: "one"
  },
  isAutoBackFill: {
    type: Boolean,
    default: !1
  },
  poppable: {
    type: Boolean,
    default: !0
  },
  showTitle: {
    type: Boolean,
    default: !0
  },
  showSubTitle: {
    type: Boolean,
    default: !0
  },
  visible: {
    type: Boolean,
    default: !1
  },
  showToday: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  confirmText: {
    type: String,
    default: ""
  },
  startText: {
    type: String,
    default: ""
  },
  endText: {
    type: String,
    default: ""
  },
  defaultValue: {
    type: [String, Array]
  },
  startDate: {
    type: String,
    default: u.getDay(0)
  },
  endDate: {
    type: String,
    default: u.getDay(365)
  }
}, { create: B } = v("calendar"), I = B({
  props: m,
  emits: ["choose", "close", "update:visible", "select"],
  setup(s, { emit: e, slots: o }) {
    const c = l(() => o.btn), p = l(() => o.topInfo), f = l(() => o.day), d = l(() => o.bottomInfo), a = r(s.visible), i = r(null), y = () => {
      a.value = !1, e("update:visible", !1);
    }, n = () => {
      a.value = !1, e("close"), e("update:visible", !1);
    }, b = (t) => {
      n(), e("choose", t);
    }, g = () => {
      n();
    }, S = (t) => {
      e("select", t);
    };
    return h(
      () => s.visible,
      (t) => {
        a.value = t;
      }
    ), {
      show: a,
      closePopup: g,
      update: y,
      close: n,
      select: S,
      choose: b,
      calendarRef: i,
      showTopBtn: c,
      topInfo: p,
      dayInfo: f,
      bottomInfo: d
    };
  }
});
export {
  I as default
};
