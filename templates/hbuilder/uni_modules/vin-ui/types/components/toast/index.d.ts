import Toast from './index.vue';
export declare const ToastFunction: {
    text(msg: string, opts?: {}): any;
    success(msg: string, opts?: {}): any;
    fail(msg: string, opts?: {}): any;
    warn(msg: string, opts?: {}): any;
    loading(msg: string, opts?: {}): any;
    hide(id?: string): void;
    install(app: any): void;
};
export { Toast };
export default ToastFunction;
