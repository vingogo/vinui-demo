<template>
  <view :class="mainClass" :style="mainStyle" @click="handleClick">
    <vin-icon
      :name="iconName"
      :customClass="color"
      :size="iconSize"
      :classPrefix="iconClassPrefix"
      :fontClassName="iconFontClassName"
    ></vin-icon>

    <view :class="labelClass">
      <slot />
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>