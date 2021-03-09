<template>
  <van-rate v-model="value" />
</template>

<script>
import { Rate } from 'vant'
import 'vant/lib/Rate/style'
export default {
  components : {
    'van-rate': Rate
  },
  data () {
    return {
      value: 3
    }
  }
}
</script>

<style>

</style>