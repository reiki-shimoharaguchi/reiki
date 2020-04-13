<template>
  <div>
    <div>
      <button
        id="a"
        @click="push"
      >
        <img
          id="button"
          src="../assets/line.png"
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
.button {
  box-shadow: none;
  border-style: none;
}

</style>
