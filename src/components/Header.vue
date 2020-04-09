<template>
  <div>
    <div v-if="header" class="shape">
      <div><p>aaaaaa</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    header: {default: false}
  },
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