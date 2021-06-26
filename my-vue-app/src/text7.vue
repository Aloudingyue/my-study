<template>
  <div>
    <div>娄丁月</div>

    <div class="window">  

      <div 
        class="item"
        v-for="(item, idx) in list" 
        :key="idx"
        :style="`
          left: ${ (100 * idx - 100 * count - 100) % (100 * list.length) + 100 }vw;
          background: ${ item.src };
          z-index: ${ (100 * idx - 100 * count - 100) % (100 * list.length) + 100 === 0 ? 999 : 0 };
        `"
      >
        
        <img :src="item.src" alt="">
      </div>

      <div class="sliders">
        <div 
          class="container" 
          v-for="(item, idx) in widthList"
          :key="idx"
        >
          <div class="inner" :style="`width:${item}px; opacity: ${item === 0 ? 0 : 1};`"></div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      widthList: [0, 0, 0], // [width, width, width]
      currentIndex: 0,
      count: 0,
      list:[
        {
          src: 'https://img2.baidu.com/it/u=3206689113,2237998950&fm=26&fmt=auto&gp=0.jpg',
          color: 'red',
        },
        //public下的文件直接访问
        {
          src: '/static/hwcloud-618-2.jpg',
          color: 'green',
        },
        {
          src: '/static/vmall-618.jpg',
          color: 'blue',
        },
      ],
    };
  },
  methods: {
    update () {
      this.widthList[this.currentIndex] = 100;
      this.widthList[this.currentIndex - 1 < 0 ? this.widthList.length - 1 : this.currentIndex - 1] = 0;
      if (this.currentIndex === this.widthList.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }

      this.count++;

      // 使用新数组替换原有数组触发更新
      this.widthList = this.widthList.concat();
    },
  },
  mounted(){
    setTimeout(this.update, 1);
    setInterval(this.update, 3000);
  }
}
</script>

<style>
body {
  margin: 0;
}
.sliders {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;
}
.container {
  height: 3px;
  width: 100px;
  /* #000 #111 >>> #eee #fff */
  background: #aaa;
  margin-left: 16px;
  float: left;

}
.inner {
  height: 3px;
  width: 0px;
  background: white;
  transition: width 3s linear;
}

.window {
  height: 600px;
  width: 100vw;
  position: relative;
  left: 0;
  overflow: hidden;
}
.window .item {
  height: 600px;
  width: 100vw;
  position: absolute;
  top: 0px;
  left: 0;
  transition: .5s linear;
  background: white;
}
.window img {
  width: 100%;
  height: 100%;
}
</style>