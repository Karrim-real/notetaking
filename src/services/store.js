import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
let url = process.env.VUE_APP_BASEURL

Vue.use(Vuex);

export default new Vuex.Store({
    state : {},
    mutations: {},
    actions: {
        async register(credentials){
             return await axios.post(url+'/auth/signup', credentials).then((res)=> {
                console.log(res);
            }).catch(err => console.log(err))
        }
    }

})

