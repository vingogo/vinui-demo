<template>
  <view v-show="isShow" ref="transition" @click="handleClick" :class="mainClass" :style="mainStyle">
    <slot />
  </view>
</template>
<script>import s from './index.js';export default s;</script>