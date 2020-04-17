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
          @click="push('#main')"
        >
          Home
        </a>
      </li>
      <li id="drawerMenuItem">
        <span
          id="drawerMenuItemLink"
          @click="push('#aboutSection')"
        >
          About Me
        </span>
      </li>
      <li id="drawerMenuItem">
        <span
          id="drawerMenuItemLink"
          @click="push('#skillSection')"
        >
          Skill Set
        </span>
      </li>
      <li id="drawerMenuItem">
        <span
          id="drawerMenuItemLink"
          @click="push('#visionSection')"
        >
          Vision
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
// import Header from "./Header.vue"
// import Main from "./Main.vue"
// import About from "./About.vue"
// import Skill from "./Skill.vue"
// import Vision from "./Vision.vue"
export default {
  name: "Drawer",
  // components: {
  //   // Header,
  //   // Main,
  //   // About,
  //   // Skill,
  //   // Vision,
  // },
  props: {
    drawerflg:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    pushClose(){
      this.$emit('closeDrawer')
    },
    push(target) {
      // this.drawerflg = false
      this.pushClose()
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(target),
        800,
        'y'
      )
    },
  }
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

#drawerSection {
  background-color: #fff;
  position: fixed;
  top: -8px;
  width: 100%;
  height: 110%;
  z-index: 2000;
}

#drawerMenuItem {
  background-color: #fff;
  width: 100%;
  height: 50px;
}

#drawerMenuItemLink {
  padding: 10px;
  color: #707070;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  font-size: 30px;
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
  margin-top: 50px;
  background-color: #fff;
  width: 100%;
}

#batu {
  /* position: absolute; */

  /* left: 100%; */
  float: right;
  width: 60px;
  height: 60px;
}

#drawer-menu-wrapper {
  position: absolute;
  text-align: left;
  z-index: 110;
  width: 100%;
  height: 100%;
}

/*
li {
  display: block;
  size: 30px;
} */

</style>


