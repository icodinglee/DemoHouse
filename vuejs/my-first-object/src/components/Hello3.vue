<template>
  <div>
    <!--  事件-->
<form  action="index.html"  v-on:submit.prevent="submitForm">
  <input type="submit" value="submit" class="submit"></input>
</form>
<input type="button" @click="updatecount" class="submit count" value="+"></input>
<input type="button" @click="count--" class="submit count" value="-"></input>
<p>{{count}}</p>
<Hello4></Hello4>
</template>

<script>
import Hello4 from './Hello4';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello Vue.js',
      count:0
    }
  },
  methods:{
    submitForm:function(e){
      alert("submitForm")
      e.prventDefault()
    },
    updatecount:function(){
      this.count ++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .submit{
    width:120px;
    height: 40px;
    background-color: #F06292;
    font-size: 18px;
    color: #fff;
    border-radius: 5px;
    border: none
  }
  .count{
    margin-top: 20px
  }
</style>
