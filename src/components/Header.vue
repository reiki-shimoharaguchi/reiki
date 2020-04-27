<template>
  <div id="head">
    <div id="top">
      <a @click="push">
        <img
          id="button"
          src="../assets/line.png"
          width="50px"
          height="50px"
          :class="{'active': drawerFlg}"
        >
      </a>
      <Drawer
        :drawerflg="drawerFlg"
        @closeDrawer="closeDrawerEvent"
      />
    </div>
  </div>
</template>

<script>
import Drawer from "./Drawer.vue"
export default {
  name: "Header",
  components: {
    Drawer
  },
  data() {
    return{
      drawerFlg: false
    }
  },
  methods: {
    push(){
      console.log('aaaaa')
      this.drawerFlg = !this.drawerFlg
      document.addEventListener('mousewheel', this.scrollControl, { passive: false });
      document.addEventListener('touchmove', this.scrollControl, { passive: false });
    },
    closeDrawerEvent(){
      this.drawerFlg = false
      document.removeEventListener('mousewheel', this.scrollControl, { passive: false });
      document.removeEventListener('touchmove', this.scrollControl, { passive: false });
    },
    scrollControl(event) {
    event.preventDefault()
    }
  },
};

</script>

<style>
#button {
  box-shadow: none;
  border-style: none;
  cursor: pointer;
}

#active {
  display: none;
}

#head {
  background: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 1000;
}
</style>
