<template>
  <div
    v-if="drawerflg"
    id="drawerSection"
  >
    <a
      @click="pushClose"
    >
      <img
        id="batu"
        src="../assets/batu.png"
        width="5%"
        height="5%"
      >
    </a>
    <ul id="drawerMenuSection">
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#main"
          @click="push1"
        >
          Home
          <Header
            :drawer-flg="drawerflg"
          />
        </a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#aboutSection"
          @click="push2"
        >
          About Me
        </a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#skillSection"
          @click="push3"
        >
          Skill Set
        </a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#visionSection"
          @click="push4"
        >
          Vision
        </a>
      </li>
    </ul>
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
  methods: {
    pushClose(){
      console.log("abbbbb")
      this.$emit('closeDrawer')
    },
    push1() {
      this.drawerflg = false
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#main'),
        800,
        'y'
      )
    },
    push2() {
      this.drawerflg = false
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#aboutSection'),
        800,
        'y'
      )
    },
    push3() {
      this.drawerflg = false
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#skillSection'),
        800,
        'y'
      )
    },
    push4() {
      this.drawerflg = false
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#visionSection'),
        800,
        'y'
      )
    },
  }
};
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

#drawerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: 100%;
}

#drawerMenuItem {
  background-color: #fff;
  width: 100%;
  height: 50;
}

#drawerMenuItemLink {
  padding: 10px;
  color: #707070;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  font-size: 12px;
  font-weight: bold;
  border-bottom: 2px solid #fff;
  text-decoration: none; /* リンクの下線消す */
  display: block; /* リンクの範囲広くするため */
  position: relative; /* 文字を移動できるように */
  top: 10px; /* 上から10px移動する */
}

a {
  color: #aaa8a8;
  text-decoration: none;
  font-size: 500;
  height: 100%;
}

#drawerMenuSection {
  margin-top: 60px;
  background-color: #fff;
  width: 100%;
  height: auto;
}

#batu {
  position: absolute;
  left: 100%;
  text-align: right;
  width: 60px;
  height: 60px;
}

/*
#drawerMenuSection li {
  border: 1px solid #aaa8a8;
  padding: 20px;
  color: #aaa8a8;
  background-color: #fff;
  text-shadow: 1px 2px 3px #c0c0c0;
  font-weight: bold;
} */

#drawer-menu-wrapper {
  position: absolute;
  text-align: left;
  z-index: 110;
  width: 100%;
  height: 100%;
}

li {
  display: block;
}
</style>
