<template>
  <view :class="mainClass" :style="mainStyle" @click="onClick">
    <slot></slot>
    <vin-icon
      custom-class="vin-tag--close"
      v-if="closeable"
      name="close"
      size="8"
      @click="onClose"
    ></vin-icon>
  </view>
</template>
<script>import s from './index.js';export default s;</script>