import Vue from 'vue'
import Vuex from 'vuex'
import dbFirestore from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    getTasks({ commit }) {
      let tasks = [];
      dbFirestore.collection('tasks').get()
        .then( snapShots => {
          snapShots.forEach( doc => {
            let task = doc.data();
            task.id = doc.id;
            tasks.push(task);
          })
        })
      commit('setTasks', tasks);
    }
  },
  modules: {
  }
})
