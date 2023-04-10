<template>
  <view :class="mainClass" @click="onClick" :style="mainStyle">
    <view class="switch-button">
      <vin-icon v-if="loading" :name="name" :size="size" :color="color"></vin-icon>
      <template v-if="activeText">
        <view class="vin-switch-label open" v-show="modelValue">{{ activeText }}</view>
        <view class="vin-switch-label close" v-show="!modelValue">{{ inactiveText }}</view>
      </template>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>