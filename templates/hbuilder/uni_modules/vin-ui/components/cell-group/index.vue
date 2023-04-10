<template>
  <view :class="mainClass" :style="mainStyle">
    <slot v-if="$slots.title" name="title"></slot>
    <view v-else-if="title" class="vin-cell-group__title">{{ title }}</view>
    <slot v-if="$slots.desc" name="desc"></slot>
    <view v-else-if="desc" class="vin-cell-group__desc">{{ desc }}</view>
    <view class="vin-cell-group__warp">
      <slot></slot>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>