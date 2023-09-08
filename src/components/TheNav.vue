<script setup>
import { RouterLink } from 'vue-router';

const navList = [
    {
        'path':'/',
        'label':'Home'
    },
    {
        'path':'/testimonials',
        'label':'Témoignages'
    },
    {
        'path':'/rates',
        'label':'Rates'
    },
    {
        'path':'/teams',
        'label':'Teams'
    },
    {
        'path':'/about',
        'label':'About'
    }
]


</script>

<template>
    <nav>
        <ul class='mymenu'>
            <li 
                v-for="link in navList" 
                :key="link.path"
                >
                <router-link :to="link.path">{{link.label}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>

.router-link-exact-active{
    border-left:4px solid cyan;
}
.router-link-exact-active::before {
  content: "⭐";
}

</style>