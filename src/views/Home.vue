<template>
  <div>
    <h1>Tasks list</h1>
    <router-link to="/create">
      <button class="btn btn-success btn-block">Create Task</button>
    </router-link>
    <ul class="list-group mt-5">
      <li class="list-group-item" 
        v-for="task of tasks" :key="task.id">
        {{ task.id }} - {{ task.name }}
        <div class="float-right">
          <router-link class="btn btn-warning btn-sm mr-2"
            :to="{
              name: 'Edit', 
              params: { 
                id: task.id
              }
            }">
            Edit
          </router-link>
          <button class="btn btn-danger btn-sm" @click="deleteTask(task.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  export default {
    name: 'Home',
    computed: {
      ...mapState(['tasks'])
    },
    created() {
      this.getTasks();
    },
    methods: {
      ...mapActions(['getTasks', 'deleteTask'])
    }
  }
</script>