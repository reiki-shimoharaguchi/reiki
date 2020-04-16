<template>
  <div id="aboutSection">
    <div class="aboutTitle">
      <h1>About Me</h1>
    </div>
    <div class="about">
      <div>
        <h2>関西生まれで関西育ちで、就職を機に上京しました。<br>大学ではC言語とFortranを授業で学び、卒業研究ではPythonを使用していました。<br>大学中はたくさんのところに出向きました。<br>番の思い出はオーストラリアをレンタカーで旅したことです。<br>また、世界を回りたいと思います。</h2>
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
