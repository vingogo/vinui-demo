<template>
  <view class="content">
    <view>{{ msg }}</view>
    
    <vin-button custom-class="btn" type="primary" @click="count++">点击: {{ count }}</vin-button>
  </view>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    return {
      msg: '欢迎使用 VinUI',
      count
    }
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.btn {
  margin-top: 30px;
}
</style>
