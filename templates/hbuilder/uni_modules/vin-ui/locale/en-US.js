var t = Object.defineProperty;
var s = (r, o, a) => o in r ? t(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a;
var e = (r, o, a) => (s(r, typeof o != "symbol" ? o + "" : o, a), a);
import { B as i } from "./baseLang-0bdc6353.mjs";
class c extends i {
  constructor() {
    super(...arguments);
    e(this, "save", "Save");
    e(this, "confirm", "Confirm");
    e(this, "cancel", "Cancel");
    e(this, "done", "Done");
    e(this, "noData", "No Data");
    e(this, "placeholder", "Placeholder");
    e(this, "select", "Select");
    e(this, "video", {
      errorTip: "Error Tip",
      clickRetry: "Click Retry"
    });
    e(this, "fixednav", {
      activeText: "Close Nav",
      unActiveText: "Open Nav"
    });
    e(this, "pagination", {
      prev: "Previous",
      next: "Next"
    });
    e(this, "calendaritem", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (a, d) => `${a}/${d}`,
      today: "Today"
    });
    e(this, "shortpassword", {
      title: "Please input a password",
      desc: "Verify",
      tips: "Forget password"
    });
    e(this, "uploader", {
      ready: "Ready",
      readyUpload: "Ready to upload",
      waitingUpload: "Waiting for upload",
      uploading: "Uploading",
      success: "Upload successful",
      error: "Upload failed"
    });
    e(this, "countdown", {
      day: " Day ",
      hour: " Hour ",
      minute: " Minute ",
      second: " Second "
    });
    e(this, "address", {
      selectRegion: "Select Region",
      deliveryTo: "Delivery To",
      chooseAnotherAddress: "Choose Another Address"
    });
    e(this, "signature", {
      reSign: "Re Sign",
      unSupportTpl: "Sorry, the current browser doesn't support canvas, so we can't use this control!"
    });
    e(this, "ecard", {
      chooseText: "Select",
      otherValueText: "Other Value",
      placeholder: "Placeholder"
    });
    e(this, "timeselect", {
      pickupTime: "Pickup Time"
    });
    e(this, "sku", {
      buyNow: "Buy Now",
      buyNumber: "Buy Number",
      addToCard: "Add to Card"
    });
    e(this, "skuheader", {
      skuId: "Sku Number"
    });
    e(this, "addresslist", {
      addAddress: "Add New Address"
    });
    e(this, "comment", {
      complaintsText: "I have a complaint",
      additionalReview: (a) => `Review after ${a} days of purchase`,
      additionalImages: (a) => `There are ${a} follow-up comments`
    });
  }
}
export {
  c as default
};
