<script >
import axios from 'axios';
const endpoint = 'https://localhost:8000/api/projects';
import AppCards from '../components/AppCards.vue';
export default {
  name: 'HomePage',
  components: { AppCards },
  data: () => ({ projects: [] }),
  methods: {
    fetchProjects() {
      axios.get(endpoint).then((res) => { this.projects = res.data })
    }
  },
  created() {
    this.fetchProjects()
  }

}

</script>

<template>
  <AppCards />
</template>

<style ></style>
