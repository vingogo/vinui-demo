<template>
  <view :class="mainClass" :style="mainStyle" @click="change(state.index)">
    <view class="vin-tabbar-item_icon-box">
      <template v-if="!dot">
        <view
          class="vin-tabbar-item_icon-box_tips vin-tabbar-item_icon-box_num"
          v-if="num && Number(num) <= 99"
        >
          {{ num }}
        </view>
        <view
          class="vin-tabbar-item_icon-box_tips vin-tabbar-item_icon-box_nums"
          v-else-if="num && Number(num) > 100"
          >{{ '99+' }}</view
        >
      </template>
      <template v-if="dot">
        <view class="vin-tabbar-item_icon-box_dot"></view>
      </template>
      <view v-if="icon">
        <vin-icon
          class="vin-tabbar-item_icon-box_icon"
          :size="state.size"
          :name="icon"
          :font-class-name="fontClassName"
          :class-prefix="classPrefix"
        ></vin-icon>
      </view>
      <view
        v-if="!icon && activeImg"
        class="vin-tabbar-item_icon-box_icon"
        :style="{
          backgroundImage: `url(${state.active == state.index ? activeImg : img})`,
          width: state.size,
          height: state.size,
        }"
      ></view>
      <view
        :class="[
          'vin-tabbar-item_icon-box_nav-word',
          { 'vin-tabbar-item_icon-box_big-word': !icon && !activeImg },
        ]"
      >
        <view v-if="tabTitle">{{ tabTitle }}</view>
        <slot v-if="!tabTitle"></slot>
      </view>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>