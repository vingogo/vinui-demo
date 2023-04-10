<template>
  <scroll-view
    :class="mainClass"
    scrollY="true"
    :style="mainStyle"
    id="scroller"
    @scrolltolower="lower"
    @scroll="scroll"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <view class="vin-infinite-top" :style="getStyle">
      <view class="top-box" id="refreshTop">
        <vin-icon custom-class="top-img" :name="pullIcon"></vin-icon>
        <view class="top-text">{{ pullText || translate('pullTxt') }}</view>
      </view>
    </view>

    <view class="vin-infinite-container">
      <slot></slot>
    </view>

    <view class="vin-infinite-bottom">
      <template v-if="isInfiniting">
        <view class="bottom-box">
          <vin-icon custom-class="bottom-img" :name="loadIcon"></vin-icon>
          <view class="bottom-text">{{ loadText || translate('loading') }}</view>
        </view>
      </template>
      <template v-else-if="!hasMore">
        <view class="tips">{{ loadMoreText || translate('loadMoreTxt') }}</view>
      </template>
    </view>
  </scroll-view>
</template>
<script>import s from './index.js';export default s;</script>