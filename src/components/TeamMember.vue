<template>
    <div class="card-container">
        <div class="card">
                <div class="card-image"></div>
                <div class="card-text">
                  <span class="job">id : {{$route.params.memberId}}</span>
                  <h2>{{member.firstName}}  {{member.lastName}}</h2>
                  <p></p>
                </div>
                <div class="card-stats">
                  <div class="stat">
                    <div class="techno">Techno</div>
                    <div class="level">⭐⭐⭐⭐</div>
                  </div>
                  <div class="stat border">
                    <div class="techno">Techno</div>
                    <div class="level">⭐⭐⭐</div>
                  </div>
                </div>
        </div>
    </div>
</template>

<script>

import {teams} from '@/assets/static/js/appTeams'
console.log(teams)

export default {
  name: 'TeamMember',
  data:()=>({
      teams,
      member:{}
  }),
  // created() est executé automatiquement à chaque
  // appel de ce composant
  created(){
      const { memberId } = this.$route.params
      this.member = this.teams[memberId]
      console.log('CREATED')
  }
}
</script>

<style scoped src="@/assets/static/css/teams_card.css">
</style>
