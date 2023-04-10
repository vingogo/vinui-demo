var Z = Object.defineProperty, _ = Object.defineProperties;
var tt = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var et = Object.prototype.hasOwnProperty, at = Object.prototype.propertyIsEnumerable;
var V = (o, l, c) => l in o ? Z(o, l, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[l] = c, M = (o, l) => {
  for (var c in l || (l = {}))
    et.call(l, c) && V(o, c, l[c]);
  if (C)
    for (var c of C(l))
      at.call(l, c) && V(o, c, l[c]);
  return o;
}, k = (o, l) => _(o, tt(l));
import { ref as H, reactive as rt, computed as $, onMounted as nt, watch as st, toRefs as Y, nextTick as ot } from "vue";
import { c as lt } from "../component-fc679f22.mjs";
import { U as s } from "../date-4e4f84ef.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const ct = {
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
    type: [String, Array],
    default: null
  },
  startDate: {
    type: String,
    default: s.getDay(0)
  },
  endDate: {
    type: String,
    default: s.getDay(365)
  }
}, { create: it, translate: v } = lt("calendar-item"), dt = it({
  props: ct,
  emits: ["choose", "update", "close", "select"],
  setup(o, { emit: l, slots: c }) {
    const q = H(v("weekdays")), f = H(2), T = H(0), y = H(null), t = rt({
      yearMonthTitle: "",
      defaultRange: [0, 1],
      compConthsDatas: [],
      containerHeight: "100%",
      currDate: "",
      propStartDate: "",
      propEndDate: "",
      unLoadPrev: !1,
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      transformY: 0,
      translateY: 0,
      scrollDistance: 0,
      defaultData: [],
      chooseData: [],
      monthsData: [],
      dayPrefix: "calendar-month-day",
      startData: "",
      endData: "",
      isRange: o.type === "range",
      timer: 0,
      currentIndex: 0,
      avgHeight: 0,
      scrollTop: 0,
      monthsNum: 0
    });
    $(() => t.monthsData.slice(t.defaultRange[0], t.defaultRange[1]));
    const F = $(() => c.btn), O = $(() => c.topInfo), j = $(() => c.bottomInfo), p = (e) => e.split("-"), A = (e) => s.isEqual(t.currDate[0], e), w = (e) => s.isEqual(t.currDate[1], e), R = (e, a) => `${a.curData[0]}-${a.curData[1]}-${s.getNumTwoBit(+e.day)}`, b = (e, a) => {
      const r = R(e, a);
      return e.type === "curr" ? !t.isRange && s.isEqual(t.currDate, r) || t.isRange && (A(r) || w(r)) ? `${t.dayPrefix}-active` : o.startDate && s.compareDate(r, o.startDate) || o.endDate && s.compareDate(o.endDate, r) ? `${t.dayPrefix}-disabled` : t.isRange && Array.isArray(t.currDate) && Object.values(t.currDate).length === 2 && s.compareDate(t.currDate[0], r) && s.compareDate(r, t.currDate[1]) ? `${t.dayPrefix}-choose` : null : `${t.dayPrefix}-disabled`;
    }, I = () => {
      (t.isRange && t.chooseData.length === 2 || !t.isRange) && (l("choose", t.chooseData), o.poppable && l("update"));
    }, x = (e, a, r = !1) => {
      if (b(e, a) !== `${t.dayPrefix}-disabled`) {
        const n = [...a.curData];
        n[2] = typeof e.day == "number" ? s.getNumTwoBit(e.day) : e.day, n[3] = `${n[0]}-${n[1]}-${n[2]}`, n[4] = s.getWhatDay(+n[0], +n[1], +n[2]), t.isRange ? (Object.values(t.currDate).length === 2 ? t.currDate = [n[3]] : s.compareDate(t.currDate[0], n[3]) ? Array.isArray(t.currDate) && t.currDate.push(n[3]) : Array.isArray(t.currDate) && t.currDate.unshift(n[3]), t.chooseData.length === 2 || !t.chooseData.length ? t.chooseData = [...n] : s.compareDate(t.chooseData[3], n[3]) ? t.chooseData = [[...t.chooseData], [...n]] : t.chooseData = [[...n], [...t.chooseData]]) : (t.currDate = n[3], t.chooseData = [...n]), r || (l("select", t.chooseData), o.isAutoBackFill && I());
      }
    }, J = (e) => {
      const a = e === "prev" ? t.monthsData[0] : t.monthsData[t.monthsData.length - 1];
      let r = parseInt(a.curData[0], 10), n = parseInt(a.curData[1].toString().replace(/^0/, ""), 10);
      switch (e) {
        case "prev":
          n === 1 && (r -= 1), n = n === 1 ? 12 : --n;
          break;
        case "next":
          n === 12 && (r += 1), n = n === 12 ? 1 : ++n;
          break;
      }
      return [r, s.getNumTwoBit(n), s.getMonthDays(String(r), String(n))];
    }, L = (e, a, r) => {
      const { year: n, month: i } = r;
      return a === "prev" && e >= 7 && (e -= 7), Array.from(Array(e), (g, h) => ({
        day: h + 1,
        type: a,
        year: n,
        month: i
      }));
    }, U = (e, a, r, n) => {
      const { year: i, month: g } = r;
      return a === "prev" && e >= 7 && (e -= 7), Array.from(Array(n), (d, u) => ({
        day: u + 1,
        type: a,
        year: i,
        month: g
      })).slice(n - e);
    }, P = (e, a) => {
      const r = s.getMonthPreDay(+e[0], +e[1]);
      let n = e[1] - 1, i = e[0];
      n <= 0 && (n = 12, i += 1);
      const g = s.getMonthDays(e[0], e[1]), h = s.getMonthDays(`${i}`, `${n}`), d = {
        year: e[0],
        month: e[1]
      }, u = {
        curData: e,
        title: v("monthTitle", d.year, d.month),
        monthData: [
          ...U(
            r,
            "prev",
            { month: n, year: i },
            h
          ),
          ...L(g, "curr", d)
        ],
        cssScrollHeight: 0
      };
      let m, D;
      m = 46 * f.value + 16 * f.value * 2, D = 128 * f.value, m = Math.floor(46 * f.value) + Math.floor(16 * f.value) * 2, D = Math.floor(128 * f.value), u.cssHeight = m + (u.monthData.length > 35 ? D * 6 : D * 5);
      let S = 0;
      t.monthsData.length > 0 && (S = t.monthsData[t.monthsData.length - 1].cssScrollHeight + t.monthsData[t.monthsData.length - 1].cssHeight), u.cssScrollHeight = S, a === "next" ? (!t.endData || !s.compareDate(
        `${t.endData[0]}-${t.endData[1]}-${s.getMonthDays(
          t.endData[0],
          t.endData[1]
        )}`,
        `${e[0]}-${e[1]}-${e[2]}`
      )) && t.monthsData.push(u) : !t.startData || !s.compareDate(
        `${e[0]}-${e[1]}-${e[2]}`,
        `${t.startData[0]}-${t.startData[1]}-01`
      ) ? t.monthsData.unshift(u) : t.unLoadPrev = !0;
    }, N = () => {
      const e = o.startDate ? o.startDate : s.getDay(0), a = o.endDate ? o.endDate : s.getDay(365);
      t.propStartDate = e, t.propEndDate = a, t.startData = p(e), t.endData = p(a), !o.defaultValue || Array.isArray(o.defaultValue) && o.defaultValue.length <= 0 ? t.currDate = t.isRange ? [s.date2Str(new Date()), s.getDay(1)] : s.date2Str(new Date()) : t.currDate = t.isRange ? [...o.defaultValue] : o.defaultValue;
      const r = {
        year: Number(t.startData[0]),
        month: Number(t.startData[1])
      }, n = {
        year: Number(t.endData[0]),
        month: Number(t.endData[1])
      };
      let i = n.month - r.month;
      n.year - r.year > 0 && (i += 12 * (n.year - r.year)), P(t.startData, "next");
      let g = 1;
      do
        P(J("next"), "next");
      while (g++ < i);
      t.monthsNum = i, t.isRange && Array.isArray(t.currDate) ? (e && s.compareDate(t.currDate[0], e) && t.currDate.splice(0, 1, e), a && s.compareDate(a, t.currDate[1]) && t.currDate.splice(1, 1, a), t.defaultData = [...p(t.currDate[0]), ...p(t.currDate[1])]) : (e && s.compareDate(t.currDate, e) ? t.currDate = e : a && !s.compareDate(t.currDate, a) && (t.currDate = a), t.defaultData = [...p(t.currDate)]);
      let h = 0, d = 0;
      t.monthsData.forEach((D, S) => {
        D.title === v("monthTitle", t.defaultData[0], t.defaultData[1]) && (h = S), t.isRange && D.title === v("monthTitle", t.defaultData[3], t.defaultData[4]) && (d = S);
      }), B(i, h), t.currentIndex = h, t.yearMonthTitle = t.monthsData[t.currentIndex].title, t.isRange ? (x(
        { day: t.defaultData[2], type: "curr" },
        t.monthsData[t.currentIndex],
        !0
      ), x({ day: t.defaultData[5], type: "curr" }, t.monthsData[d], !0)) : x(
        { day: t.defaultData[2], type: "curr" },
        t.monthsData[t.currentIndex],
        !0
      );
      const u = t.monthsData[t.monthsData.length - 1], m = u.cssHeight + u.cssScrollHeight;
      t.containerHeight = `${m}px`, t.scrollTop = t.monthsData[t.currentIndex].cssScrollHeight, t.avgHeight = Math.floor(m / (i + 1)), y != null && y.value && (T.value = y.value.clientHeight), ot(() => {
        uni.createSelectorQuery().select(".vin-calendar-content").boundingClientRect((D) => {
          T.value = D.height;
        }).exec();
      });
    }, B = (e, a) => {
      let r = [];
      e >= 3 ? a > 0 && a < e ? r = [a - 1, a + 3] : a === 0 ? r = [a, a + 4] : a === e && (r = [a - 2, a + 2]) : r = [0, e + 1], JSON.stringify(t.defaultRange) !== JSON.stringify(r) && (t.defaultRange[0] = r[0], t.defaultRange[1] = r[1], t.compConthsDatas = t.monthsData.slice(r[0], r[1]));
      const n = t.monthsData[t.defaultRange[0]].cssScrollHeight;
      t.translateY = n;
    }, E = (e, a) => t.isRange && e.type === "curr" && b(e, a) === "calendar-month-day-active", W = (e, a) => E(e, a) && A(R(e, a)), Q = (e, a) => t.currDate.length >= 2 && w(R(e, a)) ? E(e, a) : !1, z = (e, a) => {
      if (t.currDate.length >= 2)
        return s.isEqual(t.currDate[0], t.currDate[1]);
    }, G = (e) => {
      const a = `${e.year}-${e.month}-${e.day < 10 ? `0${e.day}` : e.day}`;
      return s.isEqual(a, s.date2Str(new Date()));
    }, K = (e) => {
      const a = e.detail.scrollTop;
      let r = Math.floor(a / t.avgHeight);
      if (r === 0)
        a >= t.monthsData[r + 1].cssScrollHeight && (r += 1);
      else if (r > 0 && r < t.monthsNum - 1)
        a >= t.monthsData[r + 1].cssScrollHeight && (r += 1), a < t.monthsData[r].cssScrollHeight && (r -= 1);
      else {
        const n = Math.round(a + T.value);
        n < t.monthsData[r].cssScrollHeight + t.monthsData[r].cssHeight && a < t.monthsData[r].cssScrollHeight && (r -= 1), r + 1 <= t.monthsNum && n >= t.monthsData[r + 1].cssScrollHeight + t.monthsData[r + 1].cssHeight && (r += 1), a < t.monthsData[r - 1].cssScrollHeight && (r -= 1);
      }
      t.currentIndex !== r && (t.currentIndex = r, B(t.monthsNum, r)), t.yearMonthTitle = t.monthsData[r].title;
    }, X = () => {
      t.chooseData.splice(0), t.monthsData.splice(0), N();
    };
    return nt(() => {
      uni.getSystemInfo({
        success(e) {
          let a = 2;
          const { screenWidth: r } = e;
          let n = 3;
          n = 5, a = Number((r / 750).toFixed(n)), f.value = a, N();
        }
      });
    }), st(
      () => o.defaultValue,
      (e) => {
        e && o.poppable && X();
      }
    ), k(M(M({
      weeks: q,
      showTopBtn: F,
      topInfo: O,
      bottomInfo: j,
      rangeTip: z,
      mothsViewScroll: K,
      getClass: b,
      isStartTip: W,
      isEndTip: Q,
      chooseDay: x,
      isCurrDay: G,
      confirm: I,
      months: y
    }, Y(t)), Y(o)), {
      translate: v
    });
  }
});
export {
  dt as default
};
