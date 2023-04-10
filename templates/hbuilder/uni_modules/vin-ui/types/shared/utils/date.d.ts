declare const Utils: {
    /**
     * 是否为闫年
     * @return {Boolse} true|false
     */
    isLeapYear(y: number): boolean;
    /**
     * 返回星期数
     * @return {String}
     */
    getWhatDay(year: number, month: number, day: number): string;
    /**
     * 返回星期数
     * @return {Number}
     */
    getMonthPreDay(year: number, month: number): number;
    /**
     * 返回月份天数
     * @return {Number}
     */
    getMonthDays(year: string, month: string): number;
    /**
     * 补齐数字位数
     * @return {string}
     */
    getNumTwoBit(n: number): string;
    /**
     * 日期对象转成字符串
     * @return {string}
     */
    date2Str(date: Date, split?: string): string;
    /**
     * 返回日期格式字符串
     * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
     * @return {string} '2014-12-31'
     */
    getDay(i: number): string;
    /**
     * 时间比较
     * @return {Boolean}
     */
    compareDate(date1: string, date2: string): boolean;
    /**
     * 时间是否相等
     * @return {Boolean}
     */
    isEqual(date1: string, date2: string): boolean;
};
export default Utils;
