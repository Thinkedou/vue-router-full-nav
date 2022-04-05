<template>
  <div id="app">
      <HeaderView />
      <main>
          <router-view />
      </main>
      <AppMenu />
      <aside>Sidebar</aside>
      <footer>Made with 💜 by Réré</footer>
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import AppMenu    from '@/components/AppMenu.vue'

export default {
  name: 'App',
  components:{
      HeaderView,
      AppMenu
  }
}
</script>



<style>

@import "assets/static/css/grid-base.css";
@import "assets/static/css/home.css";

</style>
