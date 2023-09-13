<script >
export default {
  name: 'AppCards',
  props: { projects: { type: Array, default: [] } }
}
</script>

<template>
  <div v-for="project in projects" :key="project.id" class="card my-5" style="width: 100%;">
    <img :src="project.image" class="card-img-top" :alt="project.title">
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ project.date }}
      </p>
      <p class="card-text">{{ project.last_update }}
      </p>
      <p class="card-text">{{ project.description }}
      </p>
      <router-link :to="{ name: 'detail', params: { id: project.id } }" class="btn btn-primary">Detail</router-link>
    </div>
  </div>
</template>

<style scoped>
/* .card {
  display: flex;
} */

/*image {
  height: 100%;
} */
</style>
