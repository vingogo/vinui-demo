/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const r = () => ({
  push: (e) => {
    if (typeof e == "string") {
      uni.navigateTo({ url: e });
      return;
    }
    uni.navigateTo(e);
  },
  replace: (e) => {
    if (typeof e == "string") {
      uni.redirectTo({ url: e });
      return;
    }
    uni.redirectTo(e);
  }
}), n = r;
export {
  n as u
};
