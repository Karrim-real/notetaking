import axios from 'axios'
import { createStore } from 'vuex'

let url = process.env.VUE_APP_BASEURL

export default createStore({
  state: {
    user: null
  },

 

  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData,
        // console.log(state.user);
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + userData.authorization.token
    },
  CLEAR_USER_DATA(){
    // localStorage.removeItem('user')
    // state.user = null
    // axios.defaults.headers.common['Authorization'] = null
    localStorage.clear()
    location.reload()

  }
  },
  actions: {
    async register({ commit }, credentials) {
      return await axios.post(url + '/auth/signup', credentials).then(({ data }) => {
        // console.log('Data from api',data);
        commit('SET_USER_DATA', data)
      })
    },
    async login({ commit }, credentials) {
      return await axios.post(url+'/auth/login', credentials).then(({ data }) => {
        // console.log(data);
        commit('SET_USER_DATA', data)
      })
    },

    async profile() {
      return await axios.get(url+'/users/profile').then(({data}) => {
        console.log(data);
      }).catch((err) => console.log(err))
    },
    async logout({ commit }) {
      return await axios.get(url+'/users/logout').then(() => {
        commit('CLEAR_USER_DATA')
        // console.log();
      }).catch((err) => console.log(err))
    },
    
  },
  getters: {
    loggedIn(state){
      // console.log(state.user);
        return !!state.user
    }
  },

  modules: {
  }
})
