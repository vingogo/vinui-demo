/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const s = {
  /**
   * 是否为闫年
   * @return {Boolse} true|false
   */
  isLeapYear(e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
  },
  /**
   * 返回星期数
   * @return {String}
   */
  getWhatDay(e, t, a) {
    const n = new Date(`${e}/${t}/${a}`).getDay();
    return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][n];
  },
  /**
   * 返回星期数
   * @return {Number}
   */
  getMonthPreDay(e, t) {
    let r = new Date(`${e}/${t}/01`).getDay();
    return r === 0 && (r = 7), r;
  },
  /**
   * 返回月份天数
   * @return {Number}
   */
  getMonthDays(e, t) {
    return /^0/.test(t) && (t = t.split("")[1]), [
      0,
      31,
      this.isLeapYear(Number(e)) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ][t];
  },
  /**
   * 补齐数字位数
   * @return {string}
   */
  getNumTwoBit(e) {
    return e = Number(e), (e > 9 ? "" : "0") + e;
  },
  /**
   * 日期对象转成字符串
   * @return {string}
   */
  date2Str(e, t) {
    t = t || "-";
    const a = e.getFullYear(), r = this.getNumTwoBit(e.getMonth() + 1), n = this.getNumTwoBit(e.getDate());
    return [a, r, n].join(t);
  },
  /**
   * 返回日期格式字符串
   * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
   * @return {string} '2014-12-31'
   */
  getDay(e) {
    e = e || 0;
    let t = new Date();
    const a = e * (1e3 * 60 * 60 * 24);
    return t = new Date(t.getTime() + a), this.date2Str(t);
  },
  /**
   * 时间比较
   * @return {Boolean}
   */
  compareDate(e, t) {
    const a = new Date(e.replace("-", "/").replace("-", "/")), r = new Date(t.replace("-", "/").replace("-", "/"));
    return !(a >= r);
  },
  /**
   * 时间是否相等
   * @return {Boolean}
   */
  isEqual(e, t) {
    const a = new Date(e).getTime(), r = new Date(t).getTime();
    return a === r;
  }
}, o = s;
export {
  o as U
};
