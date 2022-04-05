<template>
    <nav>
        <ul class='mymenu'>
            <li v-for="(menu,idx) in menuLinks" :key="idx">
                <router-link :to="{name:menu.routeName}">{{menu.label}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'AppMenu',
  data:()=>({
      menuLinks:[
          {
              routeName:'home',
              label:'Accueil'
          },
          {
              routeName:'testimonials',
              label:'Témoignages'
          },
          {
              routeName:'rates',
              label:'Rates'
          },
          {
              routeName:'teams',
              label:"L'équipe"
          },
      ]
  })
}
</script>

<style scoped>
.router-link-exact-active::before {
  content: "📌";
}
.router-link-exact-active {
  color: white;
  border-radius:5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
</style>
