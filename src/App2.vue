<template>
  <div id="app">
    <div>
      <button @click="openDrawerMenu">ボタン</button>
    </div>
    <transition name="right">
      <div v-if="drawerFlg" class="drawer-menu-wrapper">
        <div class="drawer-menu">
          <!-- ここにメニューの内容を書いていく -->
        </div>
      </div>
    </transition>
  </div>


  <div id="app">
    <img alt="Vue logo" src="./assets/logo2.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawerFlg: false
    };
  },
  methods: {
    openDrawerMenu() {
      this.drawerFlg = true;
    }
  }
};


import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

</script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


//左から出したい場合
.left-enter-active, .left-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.left-enter, .left-leave-to {
  transform: translateX(-100vw) translateX(0px);
}

//以下、メニューの形に合わせて良い具合に変更してください
.drawer-menu-wrapper {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0; //左に出す場合
  width: 50%;
  height: 100%;
  background-color: white;
}
.drawer-menu {
  padding: 24px;
}
</style>
