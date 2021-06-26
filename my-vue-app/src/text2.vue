<template>
  <div id="app">
      <!-- <div :class="'board '+(on? 'board-on':'board-off')">
          <div :class="'button '+(on? 'button-on':'button-off')" @click="onClick"></div>
      </div>
      <div class="float">
          <div class="a">11111</div>
          <div class="a">22222</div>
      </div>
      <div class="b"><img src="" alt="" width="500px" height="100px"> </div>
      <div class="c">444444</div> -->
      <!-- <div class="c">ppppp</div>
      <div class="d">1</div>
      <div class="d dd">2</div> -->
      <ol>
         <li v-for="item in list" :key="item">
             {{item}}
         </li>
      </ol>
      <!-- 变量前面加：号 -->
      <ul>
          <li v-for="(items,index) in lists" :key="items" :index="index">
            {{items}}
            {{index}}
          </li>
      </ul>

      <select name="sel" id="sel">
          <option :value="index" v-for="(items,index) in lists" :key="items">{{items}}</option>
      </select>
      <!-- 向下复制一行 Alt+Shift+down键 -->
      <table align="center" class="table">
          <!-- 头  行列-->
          <tr bgcolor="yellow">
              <td>姓名</td>
              <td>学号</td>
              <td>电话</td>
          </tr>
          <!-- 身体  行列-->
          <tr v-for="items in lis" :key="items" bgcolor="pink">
              <td>{{items.name}}</td>
              <td>{{items.hao}}</td>
              <td>{{items.number}}</td>
          </tr>
      </table>
      <!-- key属性只是一个绑定作用，可以快速找到更改的元素，减少重复性的工作 -->
      <div class="window" @mouseover="mouseOver" @mouseout="mouseOut">
        <div class="item" v-for="(item,idx) in list" :key="item" :style="`left:${(200*idx-200*count-200)%800+200}px; background:${item.color}; z-index:${(200*idx-200*count-200)%800+200===0? 999:0}`">
            {{item.content}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
   name:'app',
   data (){
       return{
           on:false,
           count:0,
           interval:'',
           list:[
              {content:'1',color:'red'},
              {content:'2',color:'green'},
              {content:'3',color:'blue'},              
              {content:'4',color:'yellow'},              
           ],
           lists:[ 
               '001',
               '002',
               '003',
               '004',
               '005',
           ],
           lis:[
              {name:'娄丁月',hao:'11803990721',number:'11111'},
              {name:'周海梅',hao:'11803990724',number:'22222'},
              {name:'伍倩',hao:'11803990332',number:'33333'},
              {name:'陈雅芳',hao:'11803990702',number:'44444'},
           ],
       };
   },
   //计算
   computed:{

   },
   methods:{
       onClick (){
           this. on=!this.on;
       },
       abs (num){
         return Math.abs(num);
       },
       mouseOver (){ 
       clearInterval(this.interval);
       },
       mouseOut (){
          this.interval = setInterval(() => {
                    this.count++;
                }, 1000);
       }
   },
 //计数器，mounted特定的函数
   mounted (){
      setInterval(() => {
          this.count++;
      }, 1000);
   }
}

</script>

<style>
body{
    margin: 0;
    padding: 0;
}
.window{
    top: 100px;
    height: 120px;
    width: 200px;
    position: relative;
    overflow: hidden;
    left: 400px;

}
.item{
    position: absolute;
    height: 120px;
    width: 200px;
    text-align: center;
    font-size: 100px;
    line-height: 120px;
    top: 0;
    left: 0;
    background-color: white;  
    transition:1s linear;
}
.table{
    width:300px;
    height:200px;
}
.c{
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 300px;
    background-color: aqua;
}
.dd{
    z-index: -100;
}
.d{
    top:50%;
    left: 50%;
    width: 300px;
    height: 300px;
    background-color: black;
    font-size: 100px;
    position: absolute;
    color: red;
    line-height: 300px;
    text-align: center;
}
.board{
    position: absolute;
    left: 50%;
    top: 20%;
    width: 44px;
    height: 22px;
    border-radius:11px;
}
.board-on{
    background-color: blue;
}
.board-off{
    background-color: gray;
}
.button{
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: aliceblue;
    transition: all 0.2s ease-in-out;
}
.button-on{
    top:2px;
    left:3px;
}
.button-off{
    top:2px;
    left: 24px;
}
.a{
    float:left;
}
.b{
    clear:both;
}
img{
    background-color: brown;
   
    display:block;
}

</style>