<template>
  <view>
    <vin-overlay
      v-if="overlay"
      :visible="visible"
      :close-on-click-overlay="closeOnClickOverlay"
      :class="overlayClass"
      :style="overlayStyle"
      :z-index="zIndex"
      :duration="duration"
      @click="onClickOverlay"
    />
    <vin-transition
      :show="visible"
      :name="transitionName"
      :custom-class="mainClass"
      :custom-style="popStyle"
      :duration="duration"
      @after-enter="onOpened"
      @after-leave="onClosed"
      @click="onClick"
    >
      <slot v-if="showSlot"></slot>
      <view
        v-if="closed"
        @click="onClickCloseIcon"
        class="vin-popup__close-icon"
        :class="'vin-popup__close-icon--' + closeIconPosition"
      >
        <vin-icon :name="closeIcon" size="12px" />
      </view>
    </vin-transition>
  </view>
</template>
<script>import s from './index.js';export default s;</script>