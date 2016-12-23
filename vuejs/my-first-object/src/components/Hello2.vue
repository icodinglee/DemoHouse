<template>
  <div>
    <!-- 数据的双向绑定 -->
    <p　v-show="!msg">请输入内容</p>
    <input v-model="msg" v-on:keyup.enter="addNew" />
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello Vue.js',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
