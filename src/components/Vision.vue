<template>
  <div id="visionSection">
    <div class="visionTitle">
      <h1>Vision</h1>
    </div>
    <div class="vision">
      <h3>
        今後もPythonの言語スキルは高めたいと考えています。<br>加えて、現在はWebページのデザインにも関心があり<br>自分の設計によりそのサイトの利益だったりや運用の価値が変化する。<br>そのような仕事を責任を持ってしたいです。
      </h3>
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
  height: auto;
  background: #f5f5f5;
  padding-bottom: 0;
  box-sizing: border-box;
}

.visionTitle {
  color: #20879f;
  text-shadow: #20879f;
  padding-top: 10px;
  padding-bottom: 10px;
}

.vision {
  color: #707070;
  line-height: 0.25 em;
  padding-bottom: 10px;
}
</style>
