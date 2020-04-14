<template>
  <div>
    <div id="top">
      <a @click="push">
        <img
          id="button"
          src="../assets/line.png"
          width="10%"
          height="10%"
        >
        <Drawer
          :drawerflg="drawerFlg"
        />
      </a>
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
  props: {
    drawerFlg:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    push(){
      console.log('aaaaa')
      this.drawerFlg = true
    }
  },
};
</script>

<style>
.button {
  box-shadow: none;
  border-style: none;
}

</style>
