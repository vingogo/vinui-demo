var $ = Object.defineProperty;
var b = (t, r, e) => r in t ? $(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var n = (t, r, e) => (b(t, typeof r != "symbol" ? r + "" : r, e), e);
import { reactive as N, ref as A, computed as f, defineComponent as h } from "vue";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
class S {
}
let R = class extends S {
  constructor() {
    super(...arguments);
    n(this, "save", "保存");
    n(this, "confirm", "确认");
    n(this, "cancel", "取消");
    n(this, "done", "完成");
    n(this, "noData", "暂无数据");
    n(this, "placeholder", "请输入");
    n(this, "select", "请选择");
    n(this, "video", {
      errorTip: "视频加载失败",
      clickRetry: "点击重试"
    });
    n(this, "fixednav", {
      activeText: "收起导航",
      unActiveText: "快速导航"
    });
    n(this, "pagination", {
      prev: "上一页",
      next: "下一页"
    });
    n(this, "calendaritem", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日历选择",
      monthTitle: (e, s) => `${e}年${s}月`,
      today: "今天"
    });
    n(this, "shortpassword", {
      title: "请输入密码",
      desc: "您使用了虚拟资产，请进行验证",
      tips: "忘记密码"
    });
    n(this, "uploader", {
      ready: "准备完成",
      readyUpload: "准备上传",
      waitingUpload: "等待上传",
      uploading: "上传中",
      success: "上传成功",
      error: "上传失败"
    });
    n(this, "countdown", {
      day: "天",
      hour: "时",
      minute: "分",
      second: "秒"
    });
    n(this, "address", {
      selectRegion: "请选择所在地区",
      deliveryTo: "配送至",
      chooseAnotherAddress: "选择其他地址"
    });
    n(this, "signature", {
      reSign: "重签",
      unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
    });
    n(this, "ecard", {
      chooseText: "请选择电子卡面值",
      otherValueText: "其他面值",
      placeholder: "请输入1-5000整数"
    });
    n(this, "timeselect", {
      pickupTime: "取件时间"
    });
    n(this, "sku", {
      buyNow: "立即购买",
      buyNumber: "购买数量",
      addToCard: "加入购物车"
    });
    n(this, "skuheader", {
      skuId: "商品编号"
    });
    n(this, "addresslist", {
      addAddress: "新建地址"
    });
    n(this, "comment", {
      complaintsText: "我要投诉",
      additionalReview: (e) => `购买${e}天后追评`,
      additionalImages: (e) => `${e}张追评图片`
    });
  }
};
const v = R;
class k extends S {
  constructor() {
    super(...arguments);
    n(this, "save", "Save");
    n(this, "confirm", "Confirm");
    n(this, "cancel", "Cancel");
    n(this, "done", "Done");
    n(this, "noData", "No Data");
    n(this, "placeholder", "Placeholder");
    n(this, "select", "Select");
    n(this, "video", {
      errorTip: "Error Tip",
      clickRetry: "Click Retry"
    });
    n(this, "fixednav", {
      activeText: "Close Nav",
      unActiveText: "Open Nav"
    });
    n(this, "pagination", {
      prev: "Previous",
      next: "Next"
    });
    n(this, "calendaritem", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (e, s) => `${e}/${s}`,
      today: "Today"
    });
    n(this, "shortpassword", {
      title: "Please input a password",
      desc: "Verify",
      tips: "Forget password"
    });
    n(this, "uploader", {
      ready: "Ready",
      readyUpload: "Ready to upload",
      waitingUpload: "Waiting for upload",
      uploading: "Uploading",
      success: "Upload successful",
      error: "Upload failed"
    });
    n(this, "countdown", {
      day: " Day ",
      hour: " Hour ",
      minute: " Minute ",
      second: " Second "
    });
    n(this, "address", {
      selectRegion: "Select Region",
      deliveryTo: "Delivery To",
      chooseAnotherAddress: "Choose Another Address"
    });
    n(this, "signature", {
      reSign: "Re Sign",
      unSupportTpl: "Sorry, the current browser doesn't support canvas, so we can't use this control!"
    });
    n(this, "ecard", {
      chooseText: "Select",
      otherValueText: "Other Value",
      placeholder: "Placeholder"
    });
    n(this, "timeselect", {
      pickupTime: "Pickup Time"
    });
    n(this, "sku", {
      buyNow: "Buy Now",
      buyNumber: "Buy Number",
      addToCard: "Add to Card"
    });
    n(this, "skuheader", {
      skuId: "Sku Number"
    });
    n(this, "addresslist", {
      addAddress: "Add New Address"
    });
    n(this, "comment", {
      complaintsText: "I have a complaint",
      additionalReview: (e) => `Review after ${e} days of purchase`,
      additionalImages: (e) => `There are ${e} follow-up comments`
    });
  }
}
const P = k, D = /;(?![^(]*\))/g, E = /:([^]+)/, U = new RegExp("\\/\\*.*?\\*\\/", "gs");
function V(t) {
  const r = {};
  return t.replace(U, "").split(D).forEach((e) => {
    if (e) {
      const s = e.split(E);
      s.length > 1 && (r[s[0].trim()] = s[1].trim());
    }
  }), r;
}
function u(t) {
  if (C(t)) {
    const r = {};
    for (let e = 0; e < t.length; e++) {
      const s = t[e], o = i(s) ? V(s) : u(s);
      if (o)
        for (const a in o)
          r[a] = o[a];
    }
    return r;
  }
  if (i(t) || c(t))
    return t;
}
function y(t) {
  let r = "";
  if (!t || i(t))
    return r;
  for (const e in t) {
    const s = t[e], o = e.startsWith("--") ? e : L(e);
    (i(s) || typeof s == "number") && (r += `${o}:${s};`);
  }
  return r;
}
function p(t) {
  let r = "";
  if (i(t))
    r = t;
  else if (C(t))
    for (let e = 0; e < t.length; e++) {
      const s = p(t[e]);
      s && (r += `${s} `);
    }
  else if (c(t))
    for (const e in t)
      t[e] && (r += `${e} `);
  return r.trim();
}
const { isArray: C } = Array, m = (t) => typeof t == "function", i = (t) => typeof t == "string", c = (t) => t !== null && typeof t == "object", Z = (t) => c(t) && m(t.then) && m(t.catch), g = (t, r) => {
  try {
    return r.split(".").reduce((e, s) => e[s], t);
  } catch (e) {
    return "";
  }
}, x = (t, r) => (Object.keys(r).forEach((e) => {
  const s = t[e], o = r[e];
  c(s) && c(o) ? x(s, o) : t[e] = o;
}), t), K = (t) => new Promise((r) => setTimeout(r, t)), q = (t, r) => Object.prototype.toString.call(t) === "[object Object]" ? t : Object.keys(t).reduce((e, s) => (r.includes(s) || (e[s] = t[s]), e), {}), O = (t) => {
  const r = /* @__PURE__ */ Object.create(null);
  return (e) => r[e] || (r[e] = t(e));
}, z = /\B([A-Z])/g, L = O(
  (t) => t.replace(z, "-$1").toLowerCase()
), d = N({
  "zh-CN": new v(),
  "en-US": new P()
});
class w {
  static languages() {
    return d[this.currentLang.value];
  }
  static use(r, e) {
    e && (d[r] = new e()), this.currentLang.value = r;
  }
  static merge(r, e) {
    e && (d[r] ? x(d[r], e) : this.use(r, e));
  }
}
n(w, "currentLang", A("zh-CN"));
const M = w, I = "vin", j = (t, { componentName: r }) => {
  const e = f(() => p([t.customClass, { [r]: !0 }])), s = f(() => y(u(t.customStyle)));
  return {
    classPrefix: I,
    mainClass: e,
    mainStyle: s,
    getMainClass: (l) => p([t.customClass, { [r]: !0 }, l]),
    getMainStyle: (l) => y(u([t.customStyle, l]))
  };
}, B = j, T = "vin";
function G(t) {
  const r = `${T}-${t}`;
  return {
    classPrefix: T,
    componentName: r,
    translate(e, ...s) {
      const o = M.languages(), a = g(o, `${t.replace("-", "")}.${e}`) || g(o, e);
      return m(a) ? a(...s) : a;
    },
    create: function(e) {
      return e.baseName = t, e.name = r, e.install = (s) => {
        s.component(e.name, e);
      }, e.options = {
        // #ifdef MP-WEIXIN
        // 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
        virtualHost: !0,
        // #endif
        styleIsolation: "shared"
      }, h(e);
    },
    useVinContext: (e) => B(e, { componentName: r }),
    createDemo(e) {
      return e.baseName = t, e.name = `demo-${t}`, h(e);
    }
  };
}
export {
  Z as a,
  G as c,
  g,
  c as i,
  q as o,
  K as s
};
