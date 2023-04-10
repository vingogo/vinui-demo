<template>
  <button :class="classes" :style="mainStyle" @click="handleClick">
    <view class="vin-button__warp">
      <vin-icon custom-class="vin-icon-loading" v-if="loading"></vin-icon>
      <vin-icon
        v-if="icon && !loading"
        :name="icon"
        :class-prefix="iconClassPrefix"
        :font-class-name="iconFontClassName"
      ></vin-icon>
      <view :class="{ text: icon || loading }" v-if="$slots.default">
        <slot></slot>
      </view>
    </view>
  </button>
</template>
<script>import s from './index.js';export default s;</script>