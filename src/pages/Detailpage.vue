<script >
import axios from 'axios';
const baseUri = 'http://127.0.0.1:8000/api/projects/';
export default {
  name: 'DetailPage',

  data: () => ({ project: null }),
  methods: {
    fetchProject() {
      axios.get(baseUri + this.$route.params.id).then(res => { this.project = res.data; }).catch(err => { console.log(err) })
    }
  },
  created() {
    this.fetchProject()
  }

}

</script>

<template>
  <h1 class="my-4">Progetto</h1>
  <div class="d-flex my-5">
    <img :src="project.image" :alt="project.title">
    <div class="ms-5">
      <h1>{{ project.title }}</h1>
      <p>{{ project.date }}</p>
      <p>{{ project.last_updated }}</p>

    </div>
  </div>
  <p>{{ project.description }}</p>
  <router-link :to="{ name: 'home' }" class="btn btn-primary">List</router-link>
</template>

<style ></style>
