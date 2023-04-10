<template>
  <form class="vin-form" action="#" @submit.prevent="onSubmit">
    <vin-cell-group>
      <slot></slot>
    </vin-cell-group>
  </form>
</template>
<script>import s from './index.js';export default s;</script>