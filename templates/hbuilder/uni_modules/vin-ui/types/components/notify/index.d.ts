import Notify from './index.vue';
export declare const NotifyFunction: {
    text(msg: string, obj?: {}): any;
    primary(msg: string, obj?: {}): any;
    success(msg: string, obj?: {}): any;
    danger(msg: string, obj?: {}): any;
    warn(msg: string, obj?: {}): any;
    hide(): void;
    install(app: any): void;
};
export default NotifyFunction;
export { Notify };
