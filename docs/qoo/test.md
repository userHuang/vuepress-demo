# Rate 评分

<div class="div-block">
  <h3>介绍</h3>
  用于对事物进行评级操作。
</div>

<div class="div-block">
  <rate />
</div>

<h2>引入</h2>

``` js
import { Rate } from 'vant'
import 'vant/lib/Rate/style'
```

<h2>代码演示</h2>

``` html
<template>
  <van-rate v-model="value" />
</template>

<script>
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
```

<style>
  .div-block {
    background: #FFF;
    box-shadow: 0 8px 12px #ebedf0;
    border-radius: 12px;
    margin-top: 20px;
    padding: 20px;
  }
</style>