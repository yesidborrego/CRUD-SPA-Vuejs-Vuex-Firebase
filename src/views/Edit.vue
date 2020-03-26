<template>
  <div>
    <h1>Edit Task</h1>
    <form class="form-inline" @submit.prevent="updateTask(task)">
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Name</div>
        </div>
        <input type="text" class="form-control" v-model="task.name">
      </div>
      <button type="submit" class="btn btn-warning mb-2">Edit</button>
    </form>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  export default {
    name: 'Edit',
    data() {
      return {
        id: this.$route.params.id,
      }
    },
    methods: {
      ...mapActions(['getTask', 'updateTask'])
    },
    created() {
      this.getTask(this.id);
    },
    computed: {
      ...mapState(['task']),
    }
  }
</script>