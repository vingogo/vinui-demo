<template>
  <view :class="mainClass" :style="mainStyle" @click="handleClick">
    <view v-if="shape === 'button'" :class="btnClass">
      <slot />
    </view>

    <template v-else-if="reverseState">
      <view :class="labelClass">
        <slot />
      </view>

      <vin-icon
        :customClass="iconClass"
        :name="curIconName"
        :size="iconSize"
        :classPrefix="iconClassPrefix"
        :fontClassName="iconFontClassName"
      ></vin-icon>
    </template>

    <template v-else>
      <vin-icon
        :customClass="iconClass"
        :name="curIconName"
        :size="iconSize"
        :classPrefix="iconClassPrefix"
        :fontClassName="iconFontClassName"
      ></vin-icon>

      <view :class="labelClass">
        <slot />
      </view>
    </template>
  </view>
</template>
<script>import s from './index.js';export default s;</script>