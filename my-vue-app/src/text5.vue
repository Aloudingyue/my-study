<template>
  <div class="window" @mouseover="stop" @mouseleave="start">
    <div
        class="item"
        v-for="(item, idx) in list"
        :key="idx"
        :style="`
        left: ${ (200 * idx - 200 * count - 200) % 600 + 200 }px;
        background: ${ item.color };
        z-index: ${ (200 * idx - 200 * count - 200) % 600 + 200 === 0 ? 999 : 0 };
      `"
    >
      {{ item.content }}
    </div>
      <div class="left" @click="left">&lt;</div>
      <div class="right" @click="right">&gt;</div>
      <div class="app"  v-for="(item,index) in listt" :key="index"> 
  <div class="a" :style="`width:${item}px; opacity:${item===0? 0:1};`"></div>
  </div>
  </div>
</template>
<script>
// let clickable = true;
export default {
  name: "App",
  data() {
    return {
      list:[
        {
          content: '1',
          color: 'red',
        },
        {
          content: '2',
          color: 'green',
        },
        {
          content: '3',
          color: 'blue',
        },
      ],
      count: 0,
      //counter 变量获取的是setInterval（）定时器的唯一ID 方便clearInterval（）函数通过ID去清除定时器（停止计时）
     //setInterval（）定时器每隔固定的时间去执行函数或计算
      counter:"",
      clickable:true,
    };
  },
  methods: {
    abs (num) {
      return Math.abs(num);
    },
    stop(){
      clearInterval(this.counter);
    },
    start(){
      this.counter=setInterval(() => {
        this.count++;
      }, 1000);
    },
    left (){
        if(this.clickable)
        {
            this.count--;
            this.setclickable();
        }
    },
    right (){
        if(this.clickable)
        {
            this.count++;
            this.setclickable();
        }
    },
    setclickable (){
      this.clickable=false;
      setInterval(() => {
          this.clickable=true;
      }, 500);
    },
  },
  //界面加载时，初始化，进行一些函数，计算等
  //100wx 游览器刚好占满 100%
  mounted () {
    this.start()
  },
};
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
.window {
  height: 120px;
  width: 200px;
  outline: 1px solid red;
  position: relative;
  left: 400px;
  overflow: hidden;
}
.right:hover{
    transition: .2s;
    transform: translateX(5px);
}
.left:hover{
  transition: .2s;
   transform: translateX(-5px);
} 
.window *{
  cursor: pointer;
}
.item {
  height: 120px;
  width: 200px;
  text-align: center;
  line-height: 120px;
  font-size: 100px;
  font-weight: bold;
  position: absolute;
  top: 0px;
  left: 0;
  transition: .5s linear;
  background: white;
}
.left{
  width: 50px;
  height: 25px;
  text-align: center;
  color: black;
  z-index: 1500;
  position: absolute;
  top: 45px;
  left:0;
}
.right{
  width: 50px;
  height: 25px;
  z-index: 1500;
  text-align: center;
  color: black;
  position: absolute;
  top:45px;
  left:150px;
}

</style>