import Vuex from 'vuex'
import Vue from 'vue'
import for_projects from "@/store/module/for_projects";
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        for_projects
    }
})