import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//ストアを作成
const store = new Vuex.Store({
  state: {
    message: 'aaaaaaaa'
  }
})

export default store

// data() {
//   return {
//     skills: []
//   }
// }

// mounted () {
//   this.getSkills();
// }

// getSkills() {
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

// export default store
