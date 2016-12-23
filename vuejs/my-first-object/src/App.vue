<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p> child tells me:<b>{{ message }}</b></p>
    <hello v-bind:msg="name"  v-on:child-tell-me="listenToMyBoy"></hello>
  </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<script>
import Hello from './components/Hello3'

export default {
  name: 'app',
  components: {
    Hello
  },
  events:{

  },
  data () {
    return {
      name:"PETER",
      message:""
    }
  },
  methods:{
    listenToMyBoy:function(msg){
      this.message=msg
    }
  }
}
</script>
