<script>
import Homepage from './pages/Homepage.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  components: { AppHeader, Homepage },
}
</script>

<template>
  <AppHeader />
  <div class="container my-3">
    <Homepage />
  </div>
</template>

<style ></style>
