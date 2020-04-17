<template>
  <div id="skillSection">
    <div class="skillTitle">
      <h1>Skill Set</h1>
    </div>
    <div class="skill">
      <h3>卒業研究ではPythonを使用していました。<br>研究内容が途中で変更されるなどしましたが、<br>最終的には出退勤を管理するウェブページを作成しました。<br>Webページの成型にはPHPも少し用いました。<br>今後は、現在用いている言語の研鑽と<br>新たな利用可能な言語も増やそうと思います。</h3>
      <div id="github">
        <h3>
          GitHub : <a href="https://github.com/reiki-shimoharaguchi">https://github.com/reiki-shimoharaguchi</a>
        </h3>
      </div>
      <div>
        <span class="maru1">HTML</span><span class="maru1">CSS</span><span class="maru1">Javascript</span><span class="maru1">SCSS</span><span class="maru1">Vue</span><span class="maru1">jQuery</span>
      </div>
      <div>
        <span class="maru2">JAVA</span><span class="maru2">Ruby</span><span class="maru2">RubyOnRails</span><span class="maru2">MySQL</span><span class="maru2">Python</span><span class="maru2">PHP</span>
      </div>
      <div>
        <span class="maru3">Linux</span><span class="maru3">Node</span><span class="maru3">Git</span><span class="maru3">GitHub</span><span class="maru3">Firebase</span><span class="maru3">CircleCI</span>
      </div>
      <Chart
        type="radar"
        :height="150"
      />
    </div>
  </div>
</template>

<script>
import Chart from './Chart';
export default {
  name: "Skill",
  components: {
    Chart,
  },
  props: {
    skill:{
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style>
#skillSection {
  position: relative;
  text-align: center;
  z-index: 10;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: #fff;
  margin-top: -50px;
  padding-top: 50px;
}

.skillTitle {
  color: #20879f;
  text-shadow: #20879f;
  padding-top: 10px;
  padding-bottom: 10px;
}

.skill {
  color: #707070;
  text-shadow: #707070;
  line-height: 0.25 em;
  padding-bottom: 10px;
}

#github {
  color: #20879f;
}

.maru1 {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  background: pink;
  font-size: 24px;
  margin-left: 20px;
}

.maru2 {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  background: lime;
  font-size: 24px;
  margin-left: 20px;
}

.maru3 {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  background: #0cf;
  font-size: 24px;
  margin-left: 20px;
}

h1 {
  margin: 0;
}

h3 {
  padding-bottom: 20px;
}
</style>
