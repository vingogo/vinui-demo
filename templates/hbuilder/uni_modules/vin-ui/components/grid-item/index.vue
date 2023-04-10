<template>
  <view :class="mainClass" :style="mainStyle" @click="handleClick">
    <view :class="contentClass">
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>
        <slot v-if="$slots.icon" name="icon"></slot>
        <vin-icon
          v-else-if="iconProps?.name"
          :name="iconProps?.name"
          :size="iconProps?.size"
          :color="iconProps?.color"
        ></vin-icon>

        <slot v-if="$slots.text" name="text"></slot>
        <view v-else class="vin-grid-item__text">{{ text }}</view>
      </template>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>