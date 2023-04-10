<template>
  <view :class="mainClass" :style="searchbarStyle">
    <view v-if="$slots.leftout" class="vin-searchbar__search-icon vin-searchbar__left-search-icon">
      <slot name="leftout"></slot>
    </view>
    <view class="vin-searchbar__search-input" :style="inputSearchbarStyle">
      <view
        v-if="$slots.leftin"
        class="vin-searchbar__search-icon vin-searchbar__iptleft-search-icon"
      >
        <slot name="leftin"></slot>
      </view>
      <view class="vin-searchbar__input-inner">
        <form action="#" onsubmit="return false" @submit.prevent="handleSubmit">
          <input
            class="vin-searchbar__input-bar"
            :type="inputType"
            :maxlength="maxLength"
            :placeholder="placeholder || translate('placeholder')"
            :value="modelValue"
            @input="valueChange"
            @focus="valueFocus"
            @blur="valueBlur"
            @confirm="handleSubmit"
          />
        </form>
        <view
          @click="handleClear"
          class="vin-searchbar__input-clear"
          v-if="clearable"
          v-show="String(modelValue).length > 0"
        >
          <vin-icon name="circle-close" size="12" color="#555"></vin-icon>
        </view>
      </view>
      <view
        v-if="$slots.rightin"
        class="vin-searchbar__search-icon vin-searchbar__iptright-sarch-icon"
      >
        <slot name="rightin"></slot>
      </view>
    </view>
    <view
      v-if="$slots.rightout"
      class="vin-searchbar__search-icon vin-searchbar__right-search-icon"
    >
      <slot name="rightout"></slot>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>