<template>
  <view :class="mainClass" :style="mainStyle">
    <view
      class="vin-rate-item"
      v-for="n in Number(count)"
      :key="n"
      :style="{ marginRight: pxCheck(spacing) }"
    >
      <vin-icon
        :size="iconSize"
        @click="onClick(1, n)"
        :custom-class="
          disabled || n > modelValue
            ? 'vin-rate-item__icon vin-rate-item__icon--disabled'
            : 'vin-rate-item__icon'
        "
        :color="n <= modelValue ? activeColor : voidColor"
        :font-class-name="fontClassName"
        :class-prefix="classPrefix"
        :name="n <= modelValue ? checkedIcon : uncheckedIcon"
      />
      <vin-icon
        v-if="allowHalf && Number(modelValue) + 1 > n"
        custom-class="vin-rate-item__icon vin-rate-item__icon--half"
        @click="onClick(2, n)"
        :font-class-name="fontClassName"
        :class-prefix="classPrefix"
        :color="n <= Number(modelValue) + 1 ? activeColor : voidColor"
        :size="iconSize"
        :name="checkedIcon"
      />
      <vin-icon
        v-else-if="allowHalf && Number(modelValue) + 1 < n"
        custom-class="vin-rate-item__icon vin-rate-item__icon--disabled vin-rate-item__icon--half"
        @click="onClick(2, n)"
        :font-class-name="fontClassName"
        :class-prefix="classPrefix"
        :color="voidColor"
        :size="iconSize"
        :name="uncheckedIcon"
      />
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>