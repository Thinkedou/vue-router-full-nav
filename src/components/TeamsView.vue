<template>
    <div class="wrapper">
          <h1>Our Team</h1>
          <div class="team">
            <div class="team_member">
              <div class="team_img">
                <img
                @click="goToMemberCard(0)"
                src="@/assets/static/img/profile01_round.png" alt="Team_image">
              </div>
              <h3>Efrim</h3>
              <p class="role">Full Stack 🚀</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
            </div>
            <div class="team_member">
              <div class="team_img">
                <img
                @click="goToMemberCard(1)"
                src="@/assets/static/img/profile02_round.png" alt="Team_image">
              </div>
              <h3>Elena</h3>
              <p class="role">Creative Guru</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p></div>
            <div class="team_member">
              <div class="team_img">
                <img
                @click="goToMemberCard(2)"
                src="@/assets/static/img/profile03_round.png" alt="Team_image">
              </div>
              <h3>Alan</h3>
              <p class="role">Techno-Mage</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'TeamsView',
  methods:{
      goToMemberCard(memberId){
          console.log(memberId)
          this.$router.push({ name: 'member', params: { memberId: memberId } })
      }
  }
}
</script>

<style scoped>
    @import "../assets/static/css/team.css";
</style>
