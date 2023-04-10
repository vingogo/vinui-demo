<template>
  <view :class="mainClass" :style="mainStyle" @click="handleClick">
    <slot></slot>
  </view>
</template>
<script>import s from './index.js';export default s;</script>