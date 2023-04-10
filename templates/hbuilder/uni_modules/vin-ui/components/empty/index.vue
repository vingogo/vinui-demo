<template>
  <view :class="mainClass" :style="mainStyle">
    <!-- 占位图 -->
    <view class="vin-empty-image" :style="imgStyle">
      <template v-if="$slots.image">
        <slot name="image"></slot>
      </template>
      <template v-else>
        <img v-if="imageUrl" class="img" :src="imageUrl" />
      </template>
    </view>

    <!-- 文本区 -->
    <template v-if="$slots.description">
      <slot name="description"></slot>
    </template>
    <template v-else>
      <view class="vin-empty-description">{{ description || translate('noData') }}</view>
    </template>

    <!-- 自定义slot -->
    <template v-if="$slots.default">
      <slot></slot>
    </template>
  </view>
</template>
<script>import s from './index.js';export default s;</script>