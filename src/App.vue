<template>
  <div id="app">
    <button @click="toggle" class="btn btn-success">≡</button>
    <Drawer name="left">
      <div v-if="drawerFlg" class="drawer-menu-wrapper">
        <div class="drawer-menu">・Home</div>
        <div class="drawer-menu">・About Me</div>
        <div class="drawer-menu">・Skill Sets</div>
        <div class="drawer-menu">・Vision</div>
        <div class="drawer-menu">・Customize Item1</div>
        <div class="drawer-menu">・Customize Item2</div>
      </div>
    </Drawer>
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
    <Footer />
  </div>
</template>
 
<script>
import Drawer from "./components/Drawer.vue";
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import About from "./components/About.vue"
import Skill from "./components/Skill.vue"
import Vision from "./components/Vision.vue"
import Footer from "./components/Footer.vue"
 
export default {
  name: "App",
  components: {
    Drawer,
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>

<style lang="scss">
</style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  padding-top: 0px;
  margin: 0 auto;
  width: 0ｆpx;
}

//以下、メニューの形に合わせて良い具合に変更してください
.drawer-menu-wrapper {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: white;
}
.drawer-menu {
  padding: 24px;
}

</style>