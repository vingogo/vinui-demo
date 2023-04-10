<template>
  <view :class="mainClass" :style="mainStyle">
    <vin-overlay v-if="overlay" :visible="visible" :z-index="200" @click="updateValue(false)" />
    <slot name="list">
      <view class="vin-fixednav__list">
        <view
          class="vin-fixednav__list-item"
          v-for="(item, index) in navList"
          @click="selected(item, $event)"
          :key="item.id || index"
        >
          <img :src="item.icon" />
          <view class="span">{{ item.text }}</view>
          <view class="b" v-if="item.num">{{ item.num }}</view>
        </view>
      </view>
    </slot>
    <view class="vin-fixednav__btn" @click="updateValue()">
      <slot name="btn">
        <vin-icon name="left" color="#fff" />
        <view class="vin-fixednav__btn-text"
          >{{
            visible
              ? activeText || translate('activeText')
              : unActiveText || translate('unActiveText')
          }}
        </view>
      </slot>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>