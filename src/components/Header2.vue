<template>
  <div>
    <div id="top">
      <a
        class="btn btn-success"
        @click="push"
      >
        <img
          id="button"
          src="../assets/line.png"
          width="5%"
          height="5%"
        >
        <Drawer
          align="left"
          :closeable="true"
          @close="push"
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
    }
  },
  methods: {
    push(){
      console.log('aaaaa')
      this.open = !this.open
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
