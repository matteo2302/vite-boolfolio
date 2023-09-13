<script>

import AppHeader from './components/AppHeader.vue';
export default {
  components: { AppHeader },
}
</script>

<template>
  <AppHeader />
  <div class="container my-3">
    <RouterView />
  </div>
</template>

<style ></style>
