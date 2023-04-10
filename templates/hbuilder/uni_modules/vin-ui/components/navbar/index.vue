<template>
  <view :class="mainClass" :style="mainStyle">
    <view class="vin-navbar__left">
      <vin-icon v-if="leftShow" color="#979797" name="left" @click="handleLeft"></vin-icon>
      <slot name="left"></slot>
    </view>
    <view class="vin-navbar__title">
      <view v-if="title" @click="handleCenter">{{ title }}</view>
      <vin-icon v-if="titIcon" class="icon" :name="titIcon" @click="handleCenterIcon"></vin-icon>
      <slot name="content"></slot>
    </view>

    <view class="vin-navbar__right">
      <view v-if="desc" class="right_text" @click="handleRight">{{ desc }}</view>
      <slot name="right"></slot>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>