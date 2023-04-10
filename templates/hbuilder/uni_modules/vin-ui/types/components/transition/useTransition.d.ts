declare const useTransition: (props: any, { beforeEnter, enter, afterEnter, beforeLeave, leave, afterLeave, }: {
    beforeEnter: () => void;
    enter: () => void;
    afterEnter: () => void;
    beforeLeave: () => void;
    leave: () => void;
    afterLeave: () => void;
}) => {
    isShow: import("vue").Ref<boolean>;
    classes: import("vue").Ref<string>;
    onEnter: () => void;
    onLeave: () => void;
};
export default useTransition;
