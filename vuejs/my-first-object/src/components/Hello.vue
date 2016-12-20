<template>
  <div>
    <input v-model="newItem" v-on:keyup.enter="addNew" />
    <ul>
      <li v-for="i in items"  >
        {{ i.lable }}
      </li>
    </ul>
    <h2> {{ msg }} </h2>
    <button @click="sayprops">click me</button>
  </div>
</template>

<script>
import Store from '../Store';
console.log(Store);
export default {
  name: 'hello',
  data () {
    return {
      newItem:"",
      items:Store.fetch(),
      words:"HELLO FATHER"
    }
  },
  props:["msg"],
  watch :{
    items:{
      handler:function(items){
        console.log(items)
        Store.save(items)
      },
      deep:true
    }
  },
  methods:{
    toDolist:function(i){
      i.isFinished=!i.isFinished
    },
    addNew:function(){
      this.items.push({lable:this.newItem,isFinished:true})
      this.newItem=""
    },
    sayprops:function(){
      console.log(this.msg)
      this.$emit("child-tell-me",this.words)
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


a {
  color: #42b983;
}

.finished{
  text-decoration: underline;
}
</style>
