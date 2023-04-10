<template>
  <view class="vin-badge">
    <view class="slot-icons">
      <slot name="icons"></slot>
    </view>
    <slot></slot>
    <view
      v-show="!hidden && (content || dot)"
      class="vin-badge__content sup"
      :class="{ 'is-dot': dot }"
      :style="mainStyle"
    >
      {{ content }}
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>