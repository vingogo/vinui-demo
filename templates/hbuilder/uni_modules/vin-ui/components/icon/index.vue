<template>
  <img v-if="isImage" :src="name" :style="mainStyle" :class="mainClass" @click="handleClick" />

  <text v-else :style="mainStyle" :class="mainClass" @click="handleClick">
    <slot />
  </text>
</template>
<script>import s from './index.js';export default s;</script>