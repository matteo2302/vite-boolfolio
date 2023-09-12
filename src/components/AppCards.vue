<script >
export default {
  name: 'AppCards',
  props: { projects: { type: Array, default: [] } }
}
</script>

<template>
  <div v-for="project in projects" :key="project.id" class="card">
    <!-- <pre>
    {{ project }}
  </pre> -->
    <img :src="project.image" class="card-img-top" :alt="project.title">
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ project.date }}
      </p>
      <p class="card-text">{{ project.last_update }}
      </p>
      <p class="card-text">{{ project.description }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<style scoped></style>
