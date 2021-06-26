<template>
  <div class="box" >
    <input type="text" v-model="ite">
    <button @click="add">添加</button>
   <div class="table" > 
     <div class="item" v-for="(items,idx) in list" :key="idx"> {{items}} 
     <button @click="del(idx)">删除</button></div>
   </div>

  </div>
</template>

<script>
export default {
    data (){
      return{
        msgFormChild:'hello  hello!!',
        list:['one','two','three','four'],
        ite:null,
      };
    },
     props: {
       msg: String,
       aa:String,
       callback:Function,
    },
    methods:{
      onClick (){
         this.$emit('my-func',1,2,3,4,5,6,7);
      },
      del (idx){
       this.list.splice(idx,1);
      },
      add (){
      this.list.push(this.ite);
      this.ite="";
      }
    },
    mounted (){
    this.callback(this.msgFormChild);
    },
}
</script>

<style>
.table{
    width: 300px;
    height:300px;
    text-align: center;
    margin-top: 20px;
}
.item{
    height: 70px;
}
input{
    display: inline-block;
    margin-right: 10px;
    margin-left: 100px
}
</style>