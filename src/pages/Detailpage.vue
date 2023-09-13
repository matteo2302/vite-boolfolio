<script >
import axios from 'axios';
const baseUri = 'https://localhost:8000/api/projects/';
export default {
  name: 'DetailPage',

  data: () => ({ project: null }),
  methods: {
    fetchProject() {
      axios.get(baseUri + this.$route.params.id).then(res => { this.project = res.data; })
    }
  },
  created() {
    this.fetchProject()
  }

}

</script>

<template>
  <h1>hello {{ $route.params.id }}</h1>
</template>

<style ></style>
