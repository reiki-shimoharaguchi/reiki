<template>
  <div id="drawer">
    <div
      v-if="drawerflg"
      class="drawer-menu-wrapper"
    >
      <div>
        <button
          id="batu"
          @click="pushClose"
        >
          ✖︎
          <Header
            :drawer-flg="drawerflg"
          />
        </button>
      </div>
      <div>
        <button @click="push1">
          ・Home
        </button>
      </div>
      <div>
        <button @click="push2">
          ・About Me
        </button>
      </div>
      <div>
        <button @click="push3">
          ・Skill Sets
        </button>
      </div>
      <div>
        <button @click="push4">
          ・Vision
        </button>
      </div>
      <!-- <div>
        <button @click="push5">
          ・Customize Item1
        </button>
      </div>
      <div>
        <button @click="push6">
          ・Customize Item2
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue"
// import Main from "./Main.vue"
// import About from "./About.vue"
// import Skill from "./Skill.vue"
// import Vision from "./Vision.vue"

export default {
  name: "Drawer",
  components: {
    Header,
    // Main,
    // About,
    // Skill,
    // Vision,
  },
  props: {
    drawerflg:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      main: false,
      about: false,
      skill: false,
      vision: false,
    };
  },
  methods: {
    pushClose(){
      this.drawerflg = false
    },
    push1(){
      console.log(this.main)
      // this.main = true
      console.log(this.main)
      console.log("main ok")
      this.drawerflg = false
    },
    push2(){
      console.log("about ok")
      this.drawerflg = false
    },
    push3(){
      this.drawerflg = false
    },
    push4(){
      console.log("vision ok")
      this.drawerflg = false
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
  text-align: left;
  z-index: 110;
  width: 100%;
  height: 100%;
  background-color: gray;
}

.drawer-menu {
  padding: 24px;
}

.drawer {
  margin: 0;
  padding: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
}

.batu {
  position: fixed;
  text-align: right;
}
</style>
