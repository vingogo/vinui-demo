<template>
  <view v-if="!loading">
    <slot></slot>
  </view>
  <view v-else :class="mainClass" :style="mainStyle">
    <view class="vin-skeleton-animation" v-if="animated"></view>
    <view class="content">
      <vin-avatar
        v-if="avatar"
        :custom-class="avatarClass"
        :shape="avatarShape"
        :custom-style="getStyle()"
        bg-color="rgb(239, 239, 239)"
      ></vin-avatar>

      <view v-if="Number(row) == 1" :class="blockClass" :style="{ width, height }"> </view>

      <view class="content-line">
        <view v-if="title" class="title"></view>
        <view
          v-for="(item, index) in Number(row)"
          :key="index"
          :class="blockClass"
          :style="{ width, height }"
        >
        </view
      ></view>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>