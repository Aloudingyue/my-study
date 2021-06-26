<template>
  <div id="app">
    <div :class="'board ' + (on ? 'board-on' : 'board-off')" @click="onClick">
      <div :class="'button ' + (on ? 'button-on' : 'button-off')"></div>
    </div><br>
    <div class="fangkuai"></div><br>
    <div v-if="visible" class="box"></div><br>
    <button @click="vbox">点击我改变</button>
     <button @click="vboxx">点击打开弹层</button>
    <div v-if="visible" class="tankuang">
         <div>娄丁月</div>
         <p>欢迎登陆</p>
         <button @click="boxx" class="buttons">确定</button>
    </div><br><br>
    <box :msg="msg"></box>
  </div>
</template>

<script>
import box from './components/box.vue';
export default {
  name: 'App',
  data () {
    return {
      on: true,
      visible:false,
       msg:'hello world',
    }
  },
  components:{
    box,
  },
  methods: {
    onClick () {
      this.on = !this.on;
    },
    vbox (){
        if(this.visible===true)
        this.visible=false;
        else
        this.visible=true;
    },
     boxx (){
        if(this.visible===true)
        this.visible=false;
        else
        this.visible=true;
    },
    vboxx (){
        if(this.visible===true)
        this.visible=false;
        else
        this.visible=true;
    },
  }, 
  mounted () {
  }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
    background-color: grey;
}
#app {
  align-items: center;
  justify-content: center;
}
.buttons{
    position: absolute;
    width: 70px;
    height: 30px;
    left: 60%;
}
.tankuang{
    position:absolute;
    width: 200px;
    height: 120px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.box{
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background-color: aquamarine;
}
.boxs{
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background-color: blueviolet;
}
.board {
  border-radius: 11px;
  width: 44px;
  height: 22px;
  box-shadow: 0, 0, 15px, #000;
  transition: all .2s ease-in-out;
}
.board-on {
  background: #45f;
}
.board-off {
  background-color: gray;
}
.button {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: #fff;
  transition: all .2s ease-in-out;
}
.button-on {
  top: 2px;
  left: 3px;
}
.button-off {
  top: 2px;
  left: 24px;
}
.fangkuai{
   width: 100px;
   height:100px;
   background-color: red;
   animation: aa 4s ease infinite;
}
@keyframes aa {
  0%,25%{transform: rotate(90deg) ; background-color: aqua;}  
  25%,50%{transform: rotate(180deg) ; background-color:pink;}  
  50%,75%{transform: rotate(270deg) ; background-color:plum;}  
  75%,100%{transform: rotate(360deg) ; background-color:rosybrown;}  
}

</style>