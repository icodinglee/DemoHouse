<template>
  <div>
    <input v-model="newItem" v-on:keyup.enter="addNew" />
    <h1>{{ msg }}</h1>
    <h2 v-text="msg1"></h2>
    <h2 v-html="msg1"></h2>
    <ul>
      <li v-for="i in items" v-bind:class="[liClass]" >
        {{ i.lable }}
      </li>
    </ul>
    <ul>
      <li v-for="i in items" v-bind:class="{finished:i.isFinished}" v-on:click="toDolist(i)">
        {{ i.lable }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello Vue.js',
      msg1: '<span>Hello Vue.js</span>',
      liClass:"thisisliclass",
      newItem:"",
      items:[
        {lable:"apple",isFinished:true},
        {lable:"banans",isFinished:false}
      ]
    }
  },
  methods:{
    toDolist:function(i){
      i.isFinished=!i.isFinished
    },
    addNew:function(){
      console.log(this.newItem)
      this.items.push({lable:this.newItem,isFinished:true})
      this.newItem=""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.finished{
  text-decoration: underline;
}
</style>
