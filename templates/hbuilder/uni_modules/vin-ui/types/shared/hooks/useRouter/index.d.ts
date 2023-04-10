/// <reference types="@dcloudio/types" />
export type NavigateToOptions = string | UniApp.NavigateToOptions;
export type RedirectToOptions = string | UniApp.RedirectToOptions;
export type RouterOptions = UniApp.NavigateToOptions | UniApp.RedirectToOptions;
declare const useRouter: () => {
    push: (options: NavigateToOptions) => void;
    replace: (options: RedirectToOptions) => void;
};
export default useRouter;
