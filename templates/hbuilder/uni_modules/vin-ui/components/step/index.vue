<template>
  <view :class="mainClass" :style="mainStyle" @click="handleClickStep">
    <view class="vin-step-head">
      <view class="vin-step-line"></view>
      <view class="vin-step-icon" :class="[!dot ? (icon ? 'is-icon' : 'is-text') : '']">
        <template v-if="icon">
          <vin-icon class="vin-step-icon-inner" :color="iconColor" :name="icon" :size="size" />
        </template>
        <template v-else-if="dot"></template>
        <template v-else>
          <view class="vin-step-inner">{{ index }}</view>
        </template>
      </view>
    </view>
    <view class="vin-step-main">
      <view class="vin-step-title">
        <span v-if="!$slots.title">{{ title }}</span>
        <slot name="title"></slot>
      </view>
      <view class="vin-step-content" v-if="content || $slots.content">
        <span v-if="!$slots.content" v-html="content"></span>
        <slot name="content"></slot>
      </view>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>