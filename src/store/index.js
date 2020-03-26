import Vue from 'vue'
import Vuex from 'vuex'
import dbFirestore from '../firebase'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    task: {},
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setTask(state, task) {
      state.task = task;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter( task => task.id != id);
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
    },
    getTask({ commit }, id) {
      dbFirestore.collection('tasks').doc(id).get()
        .then( doc => {
          let task = doc.data();
          task.id = doc.id;
          commit('setTask', task);
        })
    },
    updateTask({commit}, task) {
      dbFirestore.collection('tasks').doc(task.id).update({
        name: task.name
      })
        .then( () => {
          router.push('/')
        })
    },
    createTask({commit}, name) {
      dbFirestore.collection('tasks').add({
        name
      })
        .then( () => {
          router.push('/');
        })
    },
    deleteTask({commit, dispatch}, id) {
      dbFirestore.collection('tasks').doc(id).delete()
        .then( () => {
          console.log('The Tasks has been deleted');
          // dispatch('getTasks'); // opción no recomendada
          commit('deleteTask', id);
        })
    }
  },
  modules: {
  }
})
