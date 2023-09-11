<script>
import axios from 'axios';
const endpoint = 'https://localhost:8000/api/projects';
import AppCard from './components/AppCard.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  components: { AppCard, AppHeader },
  data: () => ({ projects: [] }),
  methods: {
    fetchProjects() {
      axios.get(endpoint).then((res) => { this.projects = res.data })
    }
  },
  created() {
    this.fetchProjects()
  }
};
</script>

<template>
  <AppHeader />
  <div class="container my-3">

  </div>
</template>

<style scoped></style>
