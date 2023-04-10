<template>
  <view :class="mainClass" :style="mainStyle">
    <view
      v-show="showNoticeBar"
      class="vin-noticebar-page"
      :class="{ withicon: closeMode, close: closeMode, wrapable: wrapable }"
      :style="barStyle"
      @click="handleClick"
      v-if="direction == 'across'"
    >
      <view class="left-icon" v-if="iconShow" :style="{ 'background-image': `url(${iconBg})` }">
        <slot name="left-icon"
          ><vin-icon name="notice" size="16" :color="color" v-if="!iconBg"></vin-icon
        ></slot>
      </view>
      <view ref="wrap" :class="`wrap wrap${id}`">
        <view
          ref="content"
          class="content"
          :class="[animationClass, { 'vin-ellipsis': isEllipsis }, `content${id}`]"
          :style="contentStyle"
          @animationend="onAnimationEnd"
          @webkitAnimationEnd="onAnimationEnd"
        >
          <slot>{{ text }}</slot>
        </view>
      </view>
      <view v-if="closeMode || rightIcon" class="right-icon" @click.stop="onClickIcon">
        <slot name="right-icon">
          <vin-icon :name="rightIcon ? rightIcon : 'close'" :color="color"></vin-icon
        ></slot>
      </view>
    </view>

    <view
      class="vin-noticebar-vertical"
      v-if="scrollList.length > 0 && direction == 'vertical'"
      :style="barStyle"
    >
      <ul class="horseLamp_list" :style="horseLampStyle">
        <li
          class="horseLamp_list_item"
          v-for="(item, index) in scrollList"
          :key="index"
          :style="{ height: height }"
          @click="go(item)"
        >
          {{ item }}
        </li>
      </ul>

      <view class="go" @click="!slots.rightIcon && handleClickIcon()">
        <template v-if="slots.rightIcon">
          <slot name="rightIcon"></slot>
        </template>
        <template v-else-if="closeMode">
          <vin-icon type="cross" :color="color" size="11px"></vin-icon>
        </template>
      </view>
    </view>
  </view>
</template>
<script>import s from './index.js';export default s;</script>