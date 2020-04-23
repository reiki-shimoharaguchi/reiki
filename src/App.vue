<template>
  <div id="app">
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import About from "./components/About.vue"
import Skill from "./components/Skill.vue"
import Vision from "./components/Vision.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer
  },
  data() {
    return {
      skills: []
    }
  },
  computed: {
    // count : function() {
    //   return this.$store.state.count
    users : function(){
      return this.$store.state.users
    }
  },
  mounted () {
    // this.getSkills();
    this.$store.dispatch('getSkills')
  }
  // methods: {
  //   increment : function(){
  //     this.$store.commit('increment')
  //     this.$store.dispatch('incrementOne')
  //   }
  //   getSkills() {
    //   // dataのスキルを初期化する
    //   this.skills = [];
    //   // this.skillsを一時変数のitemsに参照コピーする
    //   let items = this.skills;
    //   // axios.getを用いてデプロイ済のfunctionにアクセスする
    //   this.axios.get('https://us-central1-portfolio-548b1.cloudfunctions.net/skills')
    //     .then((response) => {
    //       response.data.forEach(function(skill) {
    //         // 取得したデータを１件ずつ配列に設定する
    //         items.push(skill);
    //       })
    //     })
    //     .catch((e) => {
    //       alert(e);
    //     });
    // }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  width: 100%;
  height: auto;
  color: black;
}
</style>
