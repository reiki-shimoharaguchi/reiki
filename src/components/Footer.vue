<template>
  <div class="footerSection">
    <button
      class="footerYajirushi"
      width="10%"
      height="10%"
      href="#a"
      @click="push"
    >
      <img
        src="../assets/yajirushi.png"
        alt="button"
        width="10%"
        height="10%"
      >
    </button>
    <div class="footer">
      <h2>©️Seattleconsulting</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    footer:{
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style>
.footerSection {
  position: absolute;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
  width: 100%;
  height: 80px;
  bottom: 0;
  background-color: skyblue;
  display: inline-block;
}

.footer {
  position: absolute;
  z-index: 15;
  bottom: 0;
  text-align: center;
}

.footerYajirushi {
  position: absolute;
  text-align: center;
  z-index: 20;
  bottom: 60px;
}
</style>
