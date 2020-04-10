<template>
  <div id="drawer">
    <div
      v-if="drawerFlg"
      class="drawer-menu-wrapper"
    >
      <!--
            <div class="drawer-menu"><p>・Home</p></div>
            <div class="drawer-menu"><p>・About Me</p></div>
            <div class="drawer-menu"><p>・Skill Sets</p></div>
            <div class="drawer-menu"><p>・Vision</p></div>
            <div class="drawer-menu"><p>・Customize Item1</p></div>
            <div class="drawer-menu"><p>・Customize Item2</p></div>
            -->
      <div v-if="!header">
        <button @click="push1">
          ・Home
        </button>
      </div>
      <Header :header="header" />
      <!-- <div><button @click="push2">・About Me</button></div>
            <div><button @click="push3">・Skill Sets</button></div>
            <div><button @click="push4">・Vision</button></div>
            <div><button @click="push5">・Customize Item1</button></div>
            <div><button @click="push6">・Customize Item2</button></div> -->


      <Main />
      <About />
      <Skill />
      <Vision />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue"
import Main from "./Main.vue"
import About from "./About.vue"
import Skill from "./Skill.vue"
import Vision from "./Vision.vue"
import Footer from "./Footer.vue"

export default {
  name: "Drawer",
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer
  },
  props: {
      drawerFlg: {default: false}
  },
  data() {
    return {
      header: false
    };
  },
  methods: {
    push1(){
      console.log(this.header)
      this.header = true
      console.log(this.header)
    }
  }
};
</script>

<style>

.left-enter-active,
.left-leave-active {
  transform: translate(0, 0);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.left-enter,
.left-leave-to {
  transform: translateX(-100vw) translateX(0);
}

.drawer-menu-wrapper {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
}

.drawer-menu {
  padding: 24px;
}

#drawer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  padding-top: 0;
  margin: 0 auto;
  width: 0 px;
}

</style>
