<template>
  <div id="app">
      <HeaderView />
      <main>
          <router-view />
      </main>
      <nav>
          <ul class='mymenu'>
              <li>
                  <a href="index.html">Home</a>
              </li>
              <li>
                  <a href="testimonials.html">Témoignages</a>
              </li>
              <li>
                  <a href="rates.html">Rates</a>
              </li>
              <li>
                  <a href="team.html">Teams</a>
              </li>
          </ul>

      </nav>
      <aside>Sidebar</aside>
      <footer>Made with 💜 by Réré</footer>
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
export default {
  name: 'App',
  components:{
      HeaderView
  }
}
</script>



<style>

@import "assets/static/css/grid-base.css";
@import "assets/static/css/home.css";

</style>
