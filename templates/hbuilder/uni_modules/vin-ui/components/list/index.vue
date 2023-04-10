<template>
  <scroll-view
    :class="mainClass"
    :scroll-y="true"
    :style="mainStyle"
    scroll-top="0"
    @scroll="handleScrollEvent"
    ref="list"
  >
    <view class="vin-list-phantom" :style="{ height: listHeight + 'px' }"></view>
    <view class="vin-list-container" :style="{ transform: getTransform }">
      <view
        class="vin-list-item"
        :style="{ height: height + 'px' }"
        v-for="(item, index) in visibleData"
        :key="index"
      >
        <slot :item="item" :index="'list-item-' + index"></slot>
      </view>
    </view>
  </scroll-view>
</template>
<script>import s from './index.js';export default s;</script>