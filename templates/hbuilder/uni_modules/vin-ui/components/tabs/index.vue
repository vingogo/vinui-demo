<template>
  <view :class="mainClass" :style="mainStyle">
    <view
      class="vin-tabs__titles"
      :class="{ [type]: type, scrollable: titleScroll, [size]: size }"
      :style="tabsNavStyle"
    >
      <template v-if="$slots.titles">
        <slot name="titles"></slot>
      </template>
      <template v-else>
        <view
          class="vin-tabs__titles-item"
          :style="titleStyle"
          @click="tabChange(item, index)"
          :class="{
            active: item.paneKey === modelValue,
            disabled: item.disabled,
          }"
          v-for="(item, index) in titles"
          :key="item.paneKey"
        >
          <view
            class="vin-tabs__titles-item__line"
            :style="tabsActiveStyle"
            v-if="type === 'line'"
          ></view>
          <view
            class="vin-tabs__titles-item__smile"
            :style="tabsActiveStyle"
            v-if="type === 'smile'"
          >
            <vin-icon :color="color" name="joy-smile" />
          </view>
          <view
            class="vin-tabs__titles-item__text"
            :class="{
              ellipsis: ellipsis && !titleScroll && direction == 'horizontal',
            }"
            >{{ item.title }}
          </view>
        </view>
      </template>
    </view>
    <view class="vin-tabs__content" :style="contentStyle">
      <slot name="default"></slot>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>