<template>
  <div id="aboutSection">
    <div class="aboutTitle">
      <h1>About Me</h1>
    </div>
    <div class="about">
      <div>
        <h2>関西生まれで関西育ち、就職を機に上京しました。<br>大学ではC言語とFortranを授業で学び、<br>卒業研究ではPythonを使用していました。<br>大学中はたくさんのところに出向きました。<br>一番の思い出はオーストラリアをレンタカーで旅したことです。<br>また、世界を回りたいと思います。</h2>
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
  height: auto;
  background-color: #f5f5f5;
}

.aboutTitle {
  color: #20879f;
  text-shadow: #20879f;
  padding-top: 10px;
  padding-bottom: 10px;
}

.about {
  color: #707070;
  line-height: 0.25 em;
  padding-bottom: 10px;
}

h2 {
  margin: 0;
}
</style>
