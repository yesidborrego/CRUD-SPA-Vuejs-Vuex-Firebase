<template>
  <div>
    <h1>Tasks list</h1>
    <ul>
      <li v-for="task of tasks" :key="task.id">
        {{ task.id }} - {{ task.name }}
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
      ...mapActions(['getTasks'])
    }
  }
</script>