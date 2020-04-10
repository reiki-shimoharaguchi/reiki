<template>
  <div>
    <!-- <div
      class="shape"
    >
      <div><p>aaaaaa</p></div>
    </div> -->
    <div>
      <button @click="push">
        <img
          src="../assets/line.png"
          alt="button"
          width="30%"
          height="30%"
        >
        <Drawer
          :drawerflg="drawerFlg"
          :del="del"
        />
      </button>
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
    return {
      drawerFlg: false,
      del: false,
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
.shape {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* background-color: ; */
}
</style>
