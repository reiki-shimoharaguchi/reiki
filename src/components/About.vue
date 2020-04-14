<template>
  <div id="aboutSection">
    <div class="aboutTitle">
      <h1>About Me</h1>
    </div>
    <div class="about">
      <div>
        <h2>warasihananndannanannanan</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    about:{
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style>
#aboutSection {
  position: relative;
  text-align: center;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  margin: 0;
}
</style>
