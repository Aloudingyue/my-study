<template>
 <div class="app">
    <box  aa="hellomyworld" :msg="msg" :callback="func" @my-func="myFunc"></box>
 </div>
</template>

<script>
import box from './components/box.vue';
export default {
    components:{
    box,
    },
    data (){
        return {
          msg:'hello world!',
        };
    },
    methods:{
     func (msg){
        console.log(msg);
     },
     myFunc (...args){
       console.log(args);
     },
    },
    
}
</script>

<style>

</style>