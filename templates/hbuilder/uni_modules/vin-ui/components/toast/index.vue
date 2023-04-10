<template>
  <vin-transition
    name="toast-fade"
    :custom-class="mainClass"
    :show="visible"
    :custom-style="mainStyle"
    @click="clickCover"
    @after-leave="onAfterLeave"
  >
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <view :class="['vin-toast-inner', toastClass]" :style="toastInnerStyle">
        <view v-if="hasIcon" class="vin-toast-icon-wrapper">
          <vin-icon :size="iconSize" color="#ffffff" :name="iconName"></vin-icon>
        </view>
        <view v-if="title" class="vin-toast-title">
          {{ title }}
        </view>
        <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
        <view class="vin-toast-text" v-html="msg"></view>
      </view>
    </template>
  </vin-transition>
</template>
<script>import s from './index.js';export default s;</script>