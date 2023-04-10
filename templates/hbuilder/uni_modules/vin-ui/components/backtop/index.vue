<template>
  <view>
    <scroll-view
      :scroll-y="true"
      :style="{ height }"
      @scroll="scroll"
      :scroll-top="scrollTop"
      :scroll-with-animation="true"
    >
      <slot name="content"></slot>
    </scroll-view>
    <view :class="classes" :style="style" @click.stop="click">
      <slot name="icon">
        <vin-icon size="19px" custom-class="vin-backtop-main" name="top"></vin-icon>
      </slot>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>