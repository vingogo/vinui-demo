var u = Object.defineProperty;
var a = (r, t, e) => t in r ? u(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var o = (r, t, e) => (a(r, typeof t != "symbol" ? t + "" : t, e), e);
import { reactive as l, ref as m } from "vue";
import p from "./zh-CN.js";
import h from "./en-US.js";
import "./baseLang-0bdc6353.mjs";
const n = (r) => r !== null && typeof r == "object", f = (r, t) => (Object.keys(t).forEach((e) => {
  const i = r[e], c = t[e];
  n(i) && n(c) ? f(i, c) : r[e] = c;
}), r), s = l({
  "zh-CN": new p(),
  "en-US": new h()
});
class b {
  static languages() {
    return s[this.currentLang.value];
  }
  static use(t, e) {
    e && (s[t] = new e()), this.currentLang.value = t;
  }
  static merge(t, e) {
    e && (s[t] ? f(s[t], e) : this.use(t, e));
  }
}
o(b, "currentLang", m("zh-CN"));
export {
  b as Locale,
  b as default
};
