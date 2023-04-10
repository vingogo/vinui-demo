<template>
  <vin-cell :class="mainClass" :style="mainStyle">
    <view
      class="vin-cell__title vin-form-item__label"
      :style="labelStyle"
      v-if="label"
      :class="{ required: required }"
    >
      {{ label }}</view
    >
    <view class="vin-cell__value vin-form-item__body">
      <view class="vin-form-item__body__slots" :style="bodyStyle">
        <slot></slot>
      </view>
      <view
        class="vin-form-item__body__tips"
        :style="errorMessageStyle"
        v-if="formErrorTip[prop] && showErrorMessage"
      >
        {{ formErrorTip[prop] }}</view
      >
    </view>
  </vin-cell>
</template>
<script>import s from './index.js';export default s;</script>