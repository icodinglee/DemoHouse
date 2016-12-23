<template>
<p>{{count}}</p>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
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
