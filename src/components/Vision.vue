<template>
  <div id="visionSection">
    <div class="visionTitle">
      <h1>Vision</h1>
    </div>
    <div class="vision">
      <h2>
        VISION<br>
        VISION<br>
        VISION<br>
        VISION<br>
        VISION
        VISION
        VISION
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vision",
  props: {
    vision:{
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style>
#visionSection {
  position: relative;
  text-align: center;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  padding-bottom: 80px;
  box-sizing: border-box;
}
</style>
