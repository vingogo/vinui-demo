var s = Object.defineProperty;
var r = (t, d, a) => d in t ? s(t, d, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[d] = a;
var e = (t, d, a) => (r(t, typeof d != "symbol" ? d + "" : d, a), a);
import { B as i } from "./baseLang-0bdc6353.mjs";
class c extends i {
  constructor() {
    super(...arguments);
    e(this, "save", "保存");
    e(this, "confirm", "確認");
    e(this, "cancel", "取消");
    e(this, "done", "完成");
    e(this, "noData", "暫無數據");
    e(this, "placeholder", "請輸入");
    e(this, "select", "請選擇");
    e(this, "video", {
      errorTip: "視頻加載失敗",
      clickRetry: "點擊重試"
    });
    e(this, "fixednav", {
      activeText: "收起導航",
      unActiveText: "快速導航"
    });
    e(this, "pagination", {
      prev: "上一頁",
      next: "下一頁"
    });
    e(this, "calendaritem", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "結束",
      start: "開始",
      title: "行事曆選擇",
      monthTitle: (a, o) => `${a}年${o}月`,
      today: "今天"
    });
    e(this, "shortpassword", {
      title: "請輸入密碼",
      desc: "您使用了虛擬資產,請進行驗證",
      tips: "忘記密碼"
    });
    e(this, "uploader", {
      ready: "準備完成",
      readyUpload: "準備上傳",
      waitingUpload: "等待上傳",
      uploading: "上傳中",
      success: "上傳成功",
      error: "上傳失敗"
    });
    e(this, "countdown", {
      day: "天",
      hour: "時",
      minute: "分",
      second: "秒"
    });
    e(this, "address", {
      selectRegion: "請選擇所在地區",
      deliveryTo: "配送至",
      chooseAnotherAddress: "選擇其他地址"
    });
    e(this, "signature", {
      reSign: "重簽",
      unSupportTpl: "對不起,當前瀏覽器不支持Canvas,無法使用本控制項！"
    });
    e(this, "ecard", {
      chooseText: "請選擇電子卡面值",
      otherValueText: "其他面值",
      placeholder: "請輸入1-5000整數"
    });
    e(this, "timeselect", {
      pickupTime: "取件時間"
    });
    e(this, "sku", {
      buyNow: "立即購買",
      buyNumber: "購買數量",
      addToCard: "加入購物車"
    });
    e(this, "skuheader", {
      skuId: "商品編號"
    });
    e(this, "addresslist", {
      addAddress: "新建地址"
    });
    e(this, "comment", {
      complaintsText: "我要投訴",
      additionalReview: (a) => `購買${a}天後追評`,
      additionalImages: (a) => `${a}張追評圖片`
    });
  }
}
export {
  c as default
};
