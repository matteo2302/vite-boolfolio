<script >
import axios from 'axios';
const endpoint = 'https://localhost:8000/api/projects/';
export default {
  name: 'DetailPage',

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

<template></template>

<style ></style>
