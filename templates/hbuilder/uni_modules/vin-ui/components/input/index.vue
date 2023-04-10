<template>
  <view :class="mainClass" :style="mainStyle">
    <view
      v-if="leftIcon && leftIcon.length > 0"
      class="vin-input-left-icon"
      @click="onClickLeftIcon"
    >
      <vin-icon :name="leftIcon" :size="leftIconSize"></vin-icon>
    </view>
    <view
      v-if="label"
      class="vin-input-label"
      :class="labelClass"
      :style="{
        width: `${labelWidth}px`,
        textAlign: labelAlign,
      }"
    >
      <view class="label-string">
        {{ label }}
        {{ colon ? ':' : '' }}
      </view>
    </view>
    <view class="vin-input-value">
      <view class="vin-input-inner" @click="onClickInput">
        <textarea
          v-if="type == 'textarea'"
          class="input-text"
          ref="inputRef"
          :style="stylesTextarea"
          :maxlength="maxLength"
          :placeholder="placeholder"
          placeholder-class="vin-placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :value="modelValue"
          :formatTrigger="formatTrigger"
          :autofocus="autofocus"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
        />
        <input
          v-else
          class="input-text"
          ref="inputRef"
          :style="styles"
          :type="inputType(type)"
          :maxLength="maxLength"
          :placeholder="placeholder"
          placeholder-class="vin-placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :value="modelValue"
          :formatTrigger="formatTrigger"
          :autofocus="autofocus"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
        />
        <vin-icon
          custom-class="vin-input-clear"
          v-if="clearable && !readonly"
          v-show="active && modelValue.length > 0"
          :name="clearIcon"
          :size="clearSize"
          @click="clear"
        >
        </vin-icon>
        <view
          v-if="rightIcon && rightIcon.length > 0"
          class="vin-input-right-icon"
          @click="onClickRightIcon"
        >
          <vin-icon :name="rightIcon" :size="rightIconSize"></vin-icon>
        </view>
        <slot v-if="$slots.button" name="button" class="vin-input-button"></slot>
        <view v-if="readonly" class="vin-input-disabled-mask"></view>
      </view>
      <view v-if="showWordLimit && maxLength" class="vin-input-word-limit">
        <span class="vin-input-word-num">{{ modelValue ? modelValue.length : 0 }}</span
        >/{{ maxLength }}
      </view>
      <view
        v-if="errorMessage"
        class="vin-input-error-message"
        :style="{
          textAlign: errorMessageAlign,
        }"
      >
        {{ errorMessage }}
      </view>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>