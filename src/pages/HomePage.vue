<script >
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/projects';
import AppCards from '../components/AppCards.vue';
export default {
  name: 'HomePage',
  components: { AppCards },
  data: () => ({ projects: [] }),
  methods: {
    fetchProjects() {
      axios.get(endpoint).then((res) => {
        this.projects = res.data
        console.log('PROJECTS AXIOS', res.data)
      })
    }
  },
  created() {
    this.fetchProjects()
  }

}

</script>

<template>
  <h1>Sono in homepage</h1>
  <AppCards :projects="projects" />
</template>

<style ></style>
