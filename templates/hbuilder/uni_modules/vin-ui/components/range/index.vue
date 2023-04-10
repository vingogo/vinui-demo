<template>
  <view :class="containerClasses" :style="mainStyle">
    <view class="min" v-if="!hiddenRange">{{ +min }}</view>
    <view ref="root" :id="rootId" :style="wrapperStyle" :class="mainClass" @click.stop="onClick">
      <view class="vin-range-mark" v-if="marksList.length > 0">
        <span
          v-for="marks in marksList"
          :key="marks"
          :class="markClassName(marks)"
          :style="marksStyle(marks)"
        >
          {{ marks }}
          <span class="vin-range-tick" :style="tickStyle(marks)"></span>
        </span>
      </view>
      <view class="vin-range-bar" :style="barStyle">
        <template v-if="range">
          <view
            v-for="index of [0, 1]"
            :key="index"
            role="slider"
            :class="{
              'vin-range-button-wrapper-left': index == 0,
              'vin-range-button-wrapper-right': index == 1,
            }"
            :catch-move="true"
            :tabindex="disabled ? -1 : 0"
            :aria-valuemin="+min"
            :aria-valuenow="curValue(index)"
            :aria-valuemax="+max"
            aria-orientation="horizontal"
            @touchstart.stop.prevent="
              (e) => {
                if (typeof index === 'number') {
                  // 实时更新当前拖动的按钮索引
                  buttonIndex = index;
                }
                onTouchStart(e);
              }
            "
            @touchmove.stop.prevent="onTouchMove"
            @touchend.stop.prevent="onTouchEnd"
            @touchcancel.stop.prevent="onTouchEnd"
            @click="(e) => e.stopPropagation()"
          >
            <slot v-if="$slots.button" name="button"></slot>
            <view class="vin-range-button" v-else :style="buttonStyle">
              <view class="number" v-if="!hiddenTag">{{ curValue(index) }}</view>
            </view>
          </view>
        </template>
        <template v-else>
          <view
            role="slider"
            class="vin-range-button-wrapper"
            :tabindex="disabled ? -1 : 0"
            :aria-valuemin="+min"
            :aria-valuenow="curValue()"
            :aria-valuemax="+max"
            aria-orientation="horizontal"
            :catch-move="true"
            @touchstart.stop.prevent="
              (e) => {
                onTouchStart(e);
              }
            "
            @touchmove.stop.prevent="onTouchMove"
            @touchend.stop.prevent="onTouchEnd"
            @touchcancel.stop.prevent="onTouchEnd"
            @click="(e) => e.stopPropagation()"
          >
            <slot v-if="$slots.button" name="button"></slot>
            <view class="vin-range-button" v-else :style="buttonStyle">
              <view class="number" v-if="!hiddenTag">{{ curValue() }}</view>
            </view>
          </view>
        </template>
      </view>
    </view>
    <view class="max" v-if="!hiddenRange">{{ +max }}</view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>