<template>
  <vin-transition
    :show="visible"
    :custom-class="mainClass"
    :custom-style="mainStyle"
    :duration="duration"
    @click="onClick"
  >
    <slot></slot>
  </vin-transition>
</template>
<script>import s from './index.js';export default s;</script>