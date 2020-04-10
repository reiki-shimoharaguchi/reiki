<template>
  <div id="app">
    <div>
      <button @click="openDrawerMenu">
        ≡
      </button>
    </div>
    <transition name="right">
      <div
        v-if="drawerFlg"
        class="drawer-menu-wrapper"
      >
        <div class="drawer-menu">
          ・Home
        </div>
        <div class="drawer-menu">
          ・About Me
        </div>
        <div class="drawer-menu">
          ・Skill Sets
        </div>
        <div class="drawer-menu">
          ・Vision
        </div>
        <div class="drawer-menu">
          ・Customize Item1
        </div>
        <div class="drawer-menu">
          ・Customize Item2
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawerFlg: false
    };
  },
  methods: {
    openDrawerMenu() {
      this.drawerFlg = true;
    }
  }
};
</script>

<style>
.right-enter-active,
.right-leave-active {
  transform: translate(0, 0);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.right-enter,
.right-leave-to {
  transform: translateX(100vw) translateX(0);
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
</style>
