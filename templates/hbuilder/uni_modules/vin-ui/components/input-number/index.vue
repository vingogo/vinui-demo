<template>
  <view :class="mainClass" :style="mainStyle">
    <vin-icon
      name="minus"
      class="vin-input-number__icon"
      :class="{ 'vin-input-number__icon--disabled': !reduceAllow() }"
      :size="buttonSize"
      @click="reduce"
    >
    </vin-icon>
    <view v-if="readonly" class="vin-input-number__text--readonly">
      {{ modelValue }}
    </view>
    <input
      v-else
      type="number"
      :min="min"
      :max="max"
      :style="{ width: pxCheck(inputWidth) }"
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      @input="change"
      @blur="blur"
      @focus="focus"
    />
    <vin-icon
      name="plus"
      class="vin-input-number__icon"
      :class="{ 'vin-input-number__icon--disabled': !addAllow() }"
      :size="buttonSize"
      @click="add"
    >
    </vin-icon>
  </view>
</template>
<script>import s from './index.js';export default s;</script>