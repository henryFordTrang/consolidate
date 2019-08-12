import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.store({
    state:{
        ifIphone:0,
    },
    Getters:{
        ifIphone:state=>state.ifIphone,
    },
    Mutations:{
        ifIphone:(state,value)=>state.ifIphone=value,
    },
    actions:{

    }
})