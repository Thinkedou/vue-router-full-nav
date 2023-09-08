<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue'
</script>

<template>
  <header>Un Header</header>
  <main>
       <router-view></router-view>
  </main>
  <TheNav />
  <aside>Sidebar</aside>
  <footer>Made with 💜 by Réré</footer>
</template>

<style scoped>




</style>
