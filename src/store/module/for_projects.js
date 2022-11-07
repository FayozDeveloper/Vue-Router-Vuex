import axios from "axios";
const API = 'https://635a145038725a1746bd359e.mockapi.io/projects'
const state = {
    projects: [],
};
const getters = {
    allProjects: state => state.projects,
};
const actions = {
    async fetchProjects({commit}){
        const response = await axios.get(API);
        commit('setProjects', response.data)
        console.log(response.data)
    },
};

const mutations = {
    setProjects: (state, projects) => state.projects = projects,
};

export default {
    state,
    getters,
    actions,
    mutations,
}




