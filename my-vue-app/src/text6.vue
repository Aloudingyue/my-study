<template>
<div class="app1">
    <!-- <div class="header">
        <div class="header-left">
            <img width="200px" height="50px" src="../public/static/huawei_logo.png" alt="">
        </div>
        <div class="header-right">
            <div class="liebiao" v-for="(item,index) in list" :key="item" :index="index">{{item}}</div>
          
        </div>
    </div>
    <div class="window">
      <div
        class="item"
        v-for="(items, idx) in lists"
        :key="idx"
        :style="`
        left: ${ (200 * idx - 200 * count - 200) % 600 + 200 }px;
        background: url(${ 'items'});
        z-index: ${ (200 * idx - 200 * count - 200) % 600 + 200 === 0 ? 999 : 0 };
      `"
    >
      {{ item.content }}
    </div>
      <div class="left" @click="left">&lt;</div>
      <div class="right" @click="right">&gt;</div>
  </div> -->
  <div class="app"  v-for="(item,index) in listt" :key="index"> 
  <div class="a" :style="`width:${item}px; opacity:${item===0? 0:1};`"></div>
  </div>

</div>
  
</template>

<script>
export default {
    name:"app",
    data() {
        return{
          listt:[0,0,0],
          current:0,
            list:[
           '个人及家庭产品',
           '商用产品及方案',
           '服务支持',
           '合作伙伴与开发者',
           '关于华为',
            ],
           lists:[
               '../public/static/hwcloud-618-2.jpg',
               '../public/static/vmall-618.jpg',
           ],
           count:0,
           template: ' <img :src="lists">',
           width:10,
        };
    },
    methods:{
   
    },
//只执行一次
   mounted(){
    //  setTimeout(() => {
    //    this.width=100;
    //  }, 500);
    setInterval(() => {
      this.listt[this.current]=100;
      this.listt[this.current-1 < 0? this.listt.length-1:this.current-1]=0;
      if(this.current===this.listt.length-1)
      {
        this.current=0;
      }
      else{
        this.current++;
      }
      //合并数组
      //使用新数组替换原有数组触发更新
      this.listt=this.listt.concat();
    },1000);
   },

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.app{
  height: 30px;
  width: 100px;
  background-color:lightslategray;
  border-radius: 15px;
  float: left;
  margin-left: 16px;
}
.a{
  height: 30px;
  width: 0;
  border-radius: 15px;
  background: red;
  transition: width 1s linear;
}
.header{
    width: 100%;
    height: 50px;
}
.header-left{
    float: left;
    width: 100px;
    height: 50px;
    margin-left: 50px;
}
.liebiao{
    float: right;
    width: 150px;
    height: 50px;
    padding-top:25px;
    text-align: center;
}
.window {
  clear: both;
  height: 300px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.item {
  height: 300x;
  width: 100%;
  text-align: center;
  font-size: 100px;
  font-weight: bold;
  position: absolute;
  top: 0px;
  left: 0;
  transition: .5s linear;
  background: white;
}
</style>