import { App } from 'vue';
import { Locale } from './locale';
import Avatar from './components/avatar/index.vue';
import AvatarGroup from './components/avatar-group/index.vue';
import Backtop from './components/backtop/index.vue';
import Badge from './components/badge/index.vue';
import Button from './components/button/index.vue';
import Calendar from './components/calendar/index.vue';
import CalendarItem from './components/calendar-item/index.vue';
import Cascader from './components/cascader/index.vue';
import CascaderItem from './components/cascader-item/index.vue';
import Cell from './components/cell/index.vue';
import CellGroup from './components/cell-group/index.vue';
import Checkbox from './components/checkbox/index.vue';
import CheckboxGroup from './components/checkbox-group/index.vue';
import Col from './components/col/index.vue';
import Dialog from './components/dialog/index.vue';
import Divider from './components/divider/index.vue';
import Empty from './components/empty/index.vue';
import Fixednav from './components/fixednav/index.vue';
import FormItem from './components/form-item/index.vue';
import Grid from './components/grid/index.vue';
import GridItem from './components/grid-item/index.vue';
import Icon from './components/icon/index.vue';
import Infiniteloading from './components/infiniteloading/index.vue';
import Input from './components/input/index.vue';
import InputNumber from './components/input-number/index.vue';
import List from './components/list/index.vue';
import Navbar from './components/navbar/index.vue';
import Noticebar from './components/noticebar/index.vue';
import Notify from './components/notify/index.vue';
import Overlay from './components/overlay/index.vue';
import Popup from './components/popup/index.vue';
import Progress from './components/progress/index.vue';
import Radio from './components/radio/index.vue';
import Radiogroup from './components/radiogroup/index.vue';
import Range from './components/range/index.vue';
import Rate from './components/rate/index.vue';
import Row from './components/row/index.vue';
import Searchbar from './components/searchbar/index.vue';
import Skeleton from './components/skeleton/index.vue';
import Step from './components/step/index.vue';
import Steps from './components/steps/index.vue';
import Swipe from './components/swipe/index.vue';
import Switch from './components/switch/index.vue';
import Tabbar from './components/tabbar/index.vue';
import TabbarItem from './components/tabbar-item/index.vue';
import Tabpane from './components/tabpane/index.vue';
import Tabs from './components/tabs/index.vue';
import Tag from './components/tag/index.vue';
import Textarea from './components/textarea/index.vue';
import Toast from './components/toast/index.vue';
import Transition from './components/transition/index.vue';
import Uploader from './components/uploader/index.vue';


declare function install(app: App): void;
declare const version = "0.2.9";
export { install, version, Locale, Avatar,AvatarGroup,Backtop,Badge,Button,Calendar,CalendarItem,Cascader,CascaderItem,Cell,CellGroup,Checkbox,CheckboxGroup,Col,Dialog,Divider,Empty,Fixednav,FormItem,Grid,GridItem,Icon,Infiniteloading,Input,InputNumber,List,Navbar,Noticebar,Notify,Overlay,Popup,Progress,Radio,Radiogroup,Range,Rate,Row,Searchbar,Skeleton,Step,Steps,Swipe,Switch,Tabbar,TabbarItem,Tabpane,Tabs,Tag,Textarea,Toast,Transition,Uploader };
declare const _default: {
    install: typeof install;
    version: string;
    Locale: typeof Locale;
};
export default _default;