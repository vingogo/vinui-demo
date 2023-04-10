<template>
  <view :class="mainClass" :style="mainStyle">
    <view
      class="vin-progress-outer"
      :id="'vin-progress-outer-uni-' + randRef"
      ref="progressOuter"
      :class="[
        showText && !textInside ? 'vin-progress-outer-part' : '',
        size ? 'vin-progress-' + size : '',
      ]"
      :style="{ height: height }"
    >
      <view
        :class="['vin-progress-inner', status == 'active' ? 'vin-active' : '']"
        :style="bgStyle"
      >
        <view
          class="vin-progress-text vin-progress-insidetext"
          ref="insideText"
          :style="{
            lineHeight: height,
            left: `${percentage}%`,
            transform: `translate(-${+percentage}%,-50%)`,
            background: textBackground || strokeColor,
          }"
          v-if="showText && textInside && !slotDefault"
        >
          <span :style="textStyle">{{ percentage }}{{ isShowPercentage ? '%' : '' }}</span>
        </view>
        <view
          ref="insideText"
          :style="{
            position: `absolute`,
            top: `50%`,
            left: `${percentage}%`,
            transform: `translate(-${+percentage}%,-50%)`,
          }"
          v-if="showText && textInside && slotDefault"
        >
          <slot></slot>
        </view>
      </view>
    </view>
    <view class="vin-progress-text" :style="{ lineHeight: height }" v-if="showText && !textInside">
      <template v-if="status == 'text' || status == 'active'">
        <span :style="textStyle">{{ percentage }}{{ isShowPercentage ? '%' : '' }} </span>
      </template>
      <template v-else-if="status == 'icon'">
        <vin-icon size="16px" :name="iconName" :color="iconColor"></vin-icon>
      </template>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>