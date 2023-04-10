<template>
  <vin-transition
    name="fade"
    :show="visible"
    :custom-class="mainClass"
    :custom-style="mainStyle"
    @click="onClick"
    @after-leave="onAfterLeave"
  >
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>{{ message }}</template>
  </vin-transition>
</template>
<script>import s from './index.js';export default s;</script>