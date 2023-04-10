<template>
  <view :class="mainClass" :style="mainStyle">
    <slot />
  </view>
</template>
<script>import s from './index.js';export default s;</script>