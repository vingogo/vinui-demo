<template>
  <view
    :style="!showMax ? styles : maxStyles"
    :class="classes"
    @click="activeAvatar"
    ref="avatarRef"
    v-if="showMax || !parent?.props?.maxCount || index <= parent?.props?.maxCount"
  >
    <template v-if="!parent?.props?.maxCount || index <= parent?.props?.maxCount">
      <template v-if="url">
        <img :src="url" :alt="alt" @error="onError" />
      </template>
      <template v-else-if="icon">
        <vin-icon custom-class="icon" :name="iconStyles"></vin-icon>
      </template>
      <view class="text" v-if="isShowText">
        <slot></slot>
      </view>
    </template>
    <template v-if="showMax && parent?.props?.maxCount">
      {{
        parent?.props?.maxContent
          ? parent?.props?.maxContent
          : `+ ${maxIndex - (Number(parent?.props?.maxCount) || 0)}`
      }}
    </template>
  </view>
</template>
<script>import s from './index.js';export default s;</script>