<template>
  <vin-popup
    v-model:visible="showPopup"
    :close-on-click-overlay="closeOnClickOverlay"
    :pop-class="overlayClass"
    :custom-style="overlayStyle"
    round
    @click-overlay="closed"
    @click-close-icon="closed"
  >
    <view :class="mainClass" :style="mainStyle">
      <view v-if="title" class="vin-dialog__header">
        <slot v-if="$slots.header" name="header"></slot>
        <template v-else>{{ title }}</template>
      </view>

      <view class="vin-dialog__content" :style="contentStyle">
        <slot v-if="$slots.default" name="default"></slot>
        <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
        <view v-else-if="typeof content === 'string'" v-html="content"></view>
      </view>

      <view
        class="vin-dialog__footer"
        :class="{ [footerDirection]: footerDirection }"
        v-if="!noFooter"
      >
        <slot v-if="$slots.footer" name="footer"></slot>
        <template v-else>
          <vin-button
            size="small"
            plain
            type="primary"
            custom-class="vin-dialog__footer-cancel"
            v-if="!noCancelBtn"
            @click="onCancel"
          >
            {{ cancelText || translate('cancel') }}
          </vin-button>
          <vin-button
            v-if="!noOkBtn"
            size="small"
            type="primary"
            custom-class="vin-dialog__footer-ok"
            @click="onOk"
          >
            {{ okText || translate('confirm') }}
          </vin-button>
        </template>
      </view>
    </view>
  </vin-popup>
</template>
<script>import s from './index.js';export default s;</script>