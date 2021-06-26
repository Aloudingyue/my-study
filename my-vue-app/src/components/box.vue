<template>
  <div class="box">
    {{ msg }}
   <button @click="onClick">点击我</button>
  </div>

</template>

<script>
export default {
    date (){
      return{
        msgFormChild:'hello  hello!!',
      };
    },
     props: {
       msg: String,
       aa:String,
       callback:Function,
    },
    methods:{
      onClick (){
         this.$emit('my-func',this.msgFormChild);
      },
    },
    //mounted 进行初始化的一些操作
    mounted (){
      this.msgFormChild='hello  hello!!',
      this.callback(this.msgFormChild);
    },
}
</script>

<style>

</style>