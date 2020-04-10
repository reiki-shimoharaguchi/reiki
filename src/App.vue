<template>
  <div id="app">
    <button @click="push">
      <img
        src="./assets/line.png"
        alt="button"
        width="30%"
        height="30%"
      >
    </button>
    <Drawer :drawer-flg="drawerFlg" />
    <!-- <Header /> -->
    <Main />
    <About />
    <Skill />
    <Vision />
    <Footer />
  </div>
</template>

<script>
import Drawer from "./components/Drawer.vue"
// import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import About from "./components/About.vue"
import Skill from "./components/Skill.vue"
import Vision from "./components/Vision.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  components: {
    Drawer,
    // Header,
    Main,
    About,
    Skill,
    Vision,
    Footer
  },
  data() {
    return {
      drawerFlg: false
    };
  },
  methods: {
    push(){
      console.log('aaaaa')
      this.drawerFlg = true
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  padding-top: 0;
  margin: 0 auto;
  width: 0 px;
}

</style>
