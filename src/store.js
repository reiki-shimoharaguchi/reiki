import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills:[],
    loaded:false
  },
  mutations: {
    setSkills : function(state,skills) {
    state.skills = skills
    state.loaded = true
    }
  },
  actions: {
    getSkills: function({commit}){
      const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skills';
      return axios.get(functionsUrl)
      // return axios.get('https://us-central1-dev-portfolio-b65ca.cloudfunctions.net/skills')
        .then(response => {
          commit('setSkills',response.data)
        })
      // res.data.forEach((category) => {
      //   skillCategories.push(category);
    }
  },
  getters: {
    skillName: (state) => {
      const skillNameArray = []
      if(state.skills[0]){
        //下2行の”Label”はなんでもいい
        state.skills[0].SKILL.forEach((Label) => {
          skillNameArray.push(Label.label)
        })
      }
      return skillNameArray
    },
    skillScore: (state) => (index) => {
      const skillScoreArray = []
      if(state.skills[index]){
        state.skills[index].SKILL.forEach((Score) => {
          skillScoreArray.push(Score.score)
        })
      }
      return skillScoreArray
    }
  }
  }
)

