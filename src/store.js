import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

//ストアを作成
const store = new Vuex.Store({
  state: {
    users:[],
    names:[],
    loaded:false
  },
  mutations: {
    setSkill : function(state,skills) {
      state.nemes = skills
    },
    setChartName : function(state,skillsArray){
      skillsArray[0].skill.forEach((skillInfo)=>{
        state.names.push(skillInfo.name)
      })
      state.loaded = true
    }
  },
  actions: {
    getSkills: function({commit}){
      return axios.get('https://us-central1-portfolio-548b1.cloudfunctions.net/skills')
          .then(response => {
            commit('setSkill',response.data)
          })
    },
    getChartName: function({commit}){
      return axios.get('https://us-central1-portfolio-548b1.cloudfunctions.net/skills')
          .then(response => {
            commit('setChartName',response.data)
          })
    }
  },
  // state: {
  //   users:[
  //     {name: 'John', email:'john@example.com', age:22},
  //     {name: 'Merry', email: 'merry@facebook.com',age:33},
  //     {name: 'Ken', email: 'ken@amazon.com',age:29}
  //   ]
  //   count: 0
  // },
  // mutations: {
  //   increment : function(state) {
  //     state.count++
  //   }
  // },
  // actions: {
  //   incrementOne: function(context){
  //     context.commit('increment')
  //   }
  // }
})

export default store
