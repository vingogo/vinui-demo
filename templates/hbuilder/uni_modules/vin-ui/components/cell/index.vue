<template>
  <view :class="classes" :style="baseStyle" @click="handleClick">
    <slot>
      <view class="vin-cell__icon" v-if="icon || $slots.icon">
        <slot v-if="$slots.icon" name="icon"></slot>
        <vin-icon v-else-if="icon" class="icon" :name="icon"></vin-icon>
      </view>
      <view class="vin-cell__title" v-if="title || subTitle">
        <template v-if="subTitle">
          <view class="title">{{ title }}</view>
          <view class="vin-cell__title-desc">{{ subTitle }}</view>
        </template>
        <template v-else>
          {{ title }}
        </template>
      </view>
      <view v-if="desc" class="vin-cell__value" :style="descStyle">{{ desc }}</view>

      <slot v-if="$slots.link" name="link"></slot>
      <vin-icon v-else-if="isLink || to" class="vin-cell__link" name="right"></vin-icon>
    </slot>
  </view>
</template>
<script>import s from './index.js';export default s;</script>