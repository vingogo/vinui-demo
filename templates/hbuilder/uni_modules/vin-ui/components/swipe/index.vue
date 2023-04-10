<template>
  <view
    :class="mainClass"
    :style="mainStyle"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <view class="vin-swipe__left" ref="leftRef" :id="leftRefId">
      <slot name="left"></slot>
    </view>

    <view class="vin-swipe__content">
      <slot name="default"></slot>
    </view>

    <view class="vin-swipe__right" ref="rightRef" :id="rightRefId">
      <slot name="right"></slot>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>