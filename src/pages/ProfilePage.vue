<template>
  <h1>Meu Perfil</h1>
  <AboutComponents 
    :name="profile.name" 
    :bio="profile.bio"
    :avatar="profile.avatar"
    :stats="stats"
    />
</template>
<script>
import AboutComponents from '@/components/AboutComponents.vue';
import userData from '@/assets/db/userData'
export default {
  name: 'ProfilePage',
  components: {AboutComponents,},
  data() {
    return {
      profile: {},
      stats: {},
      
    }
  },
  created() {
    this.profile = userData.profile
    this.stats = userData.stats
  }
}

</script>
<style scoped></style>