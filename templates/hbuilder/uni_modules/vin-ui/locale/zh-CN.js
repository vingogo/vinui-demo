var s = Object.defineProperty;
var r = (t, d, a) => d in t ? s(t, d, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[d] = a;
var e = (t, d, a) => (r(t, typeof d != "symbol" ? d + "" : d, a), a);
import { B as i } from "./baseLang-0bdc6353.mjs";
class c extends i {
  constructor() {
    super(...arguments);
    e(this, "save", "保存");
    e(this, "confirm", "确认");
    e(this, "cancel", "取消");
    e(this, "done", "完成");
    e(this, "noData", "暂无数据");
    e(this, "placeholder", "请输入");
    e(this, "select", "请选择");
    e(this, "video", {
      errorTip: "视频加载失败",
      clickRetry: "点击重试"
    });
    e(this, "fixednav", {
      activeText: "收起导航",
      unActiveText: "快速导航"
    });
    e(this, "pagination", {
      prev: "上一页",
      next: "下一页"
    });
    e(this, "calendaritem", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日历选择",
      monthTitle: (a, o) => `${a}年${o}月`,
      today: "今天"
    });
    e(this, "shortpassword", {
      title: "请输入密码",
      desc: "您使用了虚拟资产，请进行验证",
      tips: "忘记密码"
    });
    e(this, "uploader", {
      ready: "准备完成",
      readyUpload: "准备上传",
      waitingUpload: "等待上传",
      uploading: "上传中",
      success: "上传成功",
      error: "上传失败"
    });
    e(this, "countdown", {
      day: "天",
      hour: "时",
      minute: "分",
      second: "秒"
    });
    e(this, "address", {
      selectRegion: "请选择所在地区",
      deliveryTo: "配送至",
      chooseAnotherAddress: "选择其他地址"
    });
    e(this, "signature", {
      reSign: "重签",
      unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
    });
    e(this, "ecard", {
      chooseText: "请选择电子卡面值",
      otherValueText: "其他面值",
      placeholder: "请输入1-5000整数"
    });
    e(this, "timeselect", {
      pickupTime: "取件时间"
    });
    e(this, "sku", {
      buyNow: "立即购买",
      buyNumber: "购买数量",
      addToCard: "加入购物车"
    });
    e(this, "skuheader", {
      skuId: "商品编号"
    });
    e(this, "addresslist", {
      addAddress: "新建地址"
    });
    e(this, "comment", {
      complaintsText: "我要投诉",
      additionalReview: (a) => `购买${a}天后追评`,
      additionalImages: (a) => `${a}张追评图片`
    });
  }
}
export {
  c as default
};
