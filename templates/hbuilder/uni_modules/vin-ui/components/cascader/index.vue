<template>
  <vin-popup
    v-model:visible="innerVisible"
    position="bottom"
    pop-class="vin-cascader__popup"
    round
    :closeable="!closeable"
    :close-icon="closeIcon"
    :destroy-on-close="false"
    :close-icon-position="closeIconPosition"
  >
    <template v-if="title">
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <view class="vin-cascader__bar" v-html="title"></view>
    </template>

    <vin-cascader-item
      @change="onChange"
      @path-change="onPathChange"
      :modelValue="innerValue"
      :options="options"
      :lazy="lazy"
      :lazy-load="lazyLoad"
      :value-key="valueKey"
      :text-key="textKey"
      :children-key="childrenKey"
      :convert-config="convertConfig"
      :visible="innerVisible"
    />
  </vin-popup>
</template>
<script>import s from './index.js';export default s;</script>