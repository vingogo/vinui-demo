var C = Object.defineProperty, B = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var w = (e, a, l) => a in e ? C(e, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[a] = l, b = (e, a) => {
  for (var l in a || (a = {}))
    v.call(a, l) && w(e, l, a[l]);
  if (k)
    for (var l of k(a))
      V.call(a, l) && w(e, l, a[l]);
  return e;
}, F = (e, a) => B(e, O(a));
import { reactive as M, computed as A } from "vue";
import { o as E, c as j } from "../component-fc679f22.mjs";
import { c as Q } from "../props-dd2296ba.mjs";
/*!
* @vingogo/uni-ui v0.2.9 Mon Apr 10 2023 23:02:43 GMT+0800 (China Standard Time)
* (c) 2023 @vingogo.
* Released under the MIT License.
*/
const X = F(b({}, Q), {
  name: { type: String, default: "file" },
  url: { type: String, default: "" },
  timeout: { type: Number, default: 1e3 * 30 },
  fileList: { type: Array, default: () => [] },
  isPreview: { type: Boolean, default: !0 },
  listType: { type: String, default: "picture" },
  isDeletable: { type: Boolean, default: !0 },
  capture: { type: Array, default: ["album", "camera"] },
  maximize: { type: [Number, String], default: Number.MAX_VALUE },
  maximum: { type: [Number, String], default: 1 },
  accept: { type: String, default: "image" },
  headers: { type: Object, default: {} },
  data: { type: Object, default: {} },
  uploadIcon: { type: String, default: "photograph" },
  uploadIconSize: { type: [String, Number], default: "" },
  xhrState: { type: Number, default: 200 },
  multiple: { type: Boolean, default: !1 },
  disabled: { type: Boolean, default: !1 },
  autoUpload: { type: Boolean, default: !0 },
  beforeUpload: {
    type: Function,
    default: null
  },
  beforeDelete: {
    type: Function,
    default: (e, a) => !0
  },
  onChange: { type: Function },
  // 当accept为video时生效，是否压缩视频，默认为true（默认 true ）
  compressed: { type: Boolean, default: !0 },
  // 当accept为video时生效，拍摄视频最长拍摄时间，单位秒（默认 60 ）
  maxDuration: { type: Number, default: 60 },
  // 所选的图片的尺寸, 可选值为original compressed
  sizeType: {
    type: Array,
    default: ["original", "compressed"]
  },
  // 当accept为video时生效，可选值为back或front
  camera: {
    type: String,
    default: "back"
  }
}), T = (e, a) => ["[object Object]", "[object File]"].includes(Object.prototype.toString.call(e)) ? E(e, a) : {}, _ = (e) => e.tempFiles.map((a) => F(b({}, T(a, ["path"])), {
  type: "image",
  url: a.path,
  thumb: a.path,
  size: a.size,
  name: a.name || "image"
})), q = (e) => [
  F(b({}, T(e, ["tempFilePath", "thumbTempFilePath", "errMsg"])), {
    type: "video",
    url: e.tempFilePath,
    thumb: e.thumbTempFilePath,
    size: e.size,
    name: e.name || "video"
  })
], G = (e) => e.tempFiles.map((a) => F(b({}, T(a, ["fileType", "thumbTempFilePath", "tempFilePath"])), {
  type: e.type,
  url: a.tempFilePath,
  thumb: e.type === "video" ? a.thumbTempFilePath : a.tempFilePath,
  size: a.size,
  name: (e == null ? void 0 : e.name) || "media"
})), L = (e) => {
  var a, l;
  return (l = (a = e.tempFiles) == null ? void 0 : a.map) == null ? void 0 : l.call(a, (s) => F(b({}, T(s, ["path"])), {
    url: s.path,
    size: s.size,
    name: s.name || "file",
    // #ifdef H5
    type: s.type
    // #endif
  }));
}, H = ({
  accept: e,
  multiple: a,
  capture: l,
  compressed: s,
  maxDuration: u,
  sizeType: c,
  camera: f,
  maxCount: y
}) => new Promise((h, d) => {
  switch (e) {
    case "image":
      uni.chooseImage({
        count: a ? Math.min(y, 9) : 1,
        sourceType: l,
        sizeType: c,
        success: (i) => h(_(i)),
        fail: d
      });
      break;
    case "media":
      uni.chooseMedia({
        count: a ? Math.min(y, 9) : 1,
        sourceType: l,
        maxDuration: u,
        sizeType: c,
        camera: f,
        success: (i) => h(G(i)),
        fail: d
      });
      break;
    case "video":
      uni.chooseVideo({
        sourceType: l,
        compressed: s,
        maxDuration: u,
        camera: f,
        success: (i) => h(q(i)),
        fail: d
      });
      break;
    default:
      uni.chooseMessageFile({
        count: a ? y : 1,
        type: e,
        success: (i) => h(L(i)),
        fail: d
      }), uni.chooseFile({
        count: a ? y : 1,
        type: "all",
        success: (i) => h(L(i)),
        fail: d
      });
  }
}), J = (e) => ({ upload: () => {
  var s;
  const l = uni.uploadFile({
    url: e.url,
    fileType: e.fileType,
    file: e.file,
    filePath: e.filePath,
    name: e.name,
    header: e.header,
    timeout: e.timeout,
    formData: e.formData,
    success: (u) => {
      var c, f;
      e.xhrState === u.statusCode ? (c = e.onSuccess) == null || c.call(e, u, e) : (f = e.onFailure) == null || f.call(e, u, e);
    },
    fail: (u) => {
      var c;
      (c = e.onFailure) == null || c.call(e, u, e);
    }
  });
  (s = e.onStart) == null || s.call(e, e), l.onProgressUpdate((u) => {
    var c;
    (c = e.onProgress) == null || c.call(e, u, e);
  });
} }), { componentName: ae, create: K, translate: P, useVinContext: R } = j("uploader"), te = K({
  props: X,
  emits: [
    "start",
    "progress",
    "oversize",
    "success",
    "failure",
    "change",
    "delete",
    "update:fileList",
    "file-item-click"
  ],
  setup(e, { emit: a }) {
    const { getMainClass: l, getMainStyle: s } = R(e), u = M(e.fileList);
    let c = [];
    const f = A(l), y = A(s), h = (t) => {
      a("file-item-click", { fileItem: t });
    }, d = (t = -1) => {
      t > -1 ? c.splice(t, 1) : c = [];
    }, i = (t, n) => {
      const { type: o, url: r, name: g, formData: z } = t, S = {
        url: e.url,
        filePath: r,
        name: g,
        fileType: o,
        header: e.headers,
        timeout: e == null ? void 0 : e.timeout,
        xhrState: e.xhrState,
        formData: z,
        file: t
      };
      S.onStart = (m) => {
        t.status = "ready", t.message = P("readyUpload"), d(n), a("start", m);
      }, S.onProgress = (m, p) => {
        t.status = "uploading", t.message = P("uploading"), t.percentage = m.progress, a("progress", { event: m, option: p, percentage: t.percentage });
      }, S.onSuccess = (m, p) => {
        t.status = "success", t.message = P("success"), a("success", {
          result: m,
          option: p,
          fileItem: t
        }), a("update:fileList", u);
      }, S.onFailure = (m, p) => {
        t.status = "error", t.message = P("error"), a("failure", {
          result: m,
          option: p,
          fileItem: t
        });
      };
      const U = J(S);
      e.autoUpload ? U.upload() : c.push(
        new Promise((m, p) => {
          m(U);
        })
      );
    }, N = () => {
      Promise.all(c).then((t) => {
        t.forEach((n) => n.upload());
      });
    }, x = (t) => {
      t.forEach((n, o) => {
        const r = M({});
        r.uid = new Date().getTime().toString(), r.status = "ready", r.formData = e.data, r.message = P("waitingUpload"), r.url = n.url, r.name = n.name, r.type = n.type, i(r, o), console.log("fileList", u), u.push(r);
      });
    }, D = (t) => {
      const n = e.maximum * 1, o = e.maximize * 1, r = new Array();
      t = t.filter((z) => z.size > o ? (r.push(z), !1) : !0), r.length && a("oversize", r);
      const g = t.length + u.length;
      return g > n && t.splice(t.length - (g - n)), t;
    };
    return {
      mainStyle: y,
      onChange: (t) => {
        if (e.disabled)
          return;
        const n = e.maximum * 1;
        H({
          accept: e.accept,
          multiple: e.multiple,
          capture: e.capture,
          compressed: e.compressed,
          maxDuration: e.maxDuration,
          sizeType: e.sizeType,
          camera: e.camera,
          maxCount: n - u.length
        }).then((o) => {
          if (e.beforeUpload)
            e.beforeUpload(o).then((r) => {
              const g = D(new Array().slice.call(r));
              x(g);
            });
          else {
            const r = D(
              new Array().slice.call(o)
            );
            x(r);
          }
          a("change", { fileList: u, event: t });
        });
      },
      onDelete: (t, n) => {
        d(n), e.beforeDelete(t, u) && (u.splice(n, 1), a("delete", {
          file: t,
          fileList: u,
          index: n
        }));
      },
      fileList: u,
      mainClass: f,
      fileItemClick: h,
      clearUploadQueue: d,
      submit: N
    };
  }
});
export {
  te as default
};
