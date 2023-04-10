<template>
  <view :class="mainClass" :style="mainStyle">
    <view v-if="readonly" class="vin-textarea__textarea">
      {{ modelValue }}
    </view>
    <textarea
      v-else
      class="vin-textarea__textarea"
      :style="styles"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      :auto-height="autosize"
      @input="change"
      @blur="blur"
      @focus="focus"
      :maxlength="maxLength"
      :placeholder="placeholder || translate('placeholder')"
      :focus="autofocus"
      :auto-focus="autofocus"
    />
    <view class="vin-textarea__limit" v-if="limitShow">
      {{ modelValue ? modelValue.length : 0 }}/{{ maxLength }}</view
    >
  </view>
</template>
<script>import s from './index.js';export default s;</script>