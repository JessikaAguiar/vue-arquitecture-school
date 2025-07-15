<template>
    <h1>Minhas Viajens</h1>
    <GaleryComponents :photos="galery" :list="true"/>
</template>
<script>
import GaleryComponents from '@/components/GaleryComponents.vue';
import galeryData from '@/assets/db/galeryData'

  export default {
  name: 'MyTravelPage',
  components: {GaleryComponents},
  data() {
    return {
      galery: [],
    }
  },
  created() {
    this.galery = galeryData.galery
  },

}

</script>
<style scoped>
  h1 {
    padding: 20px;
  }

  @media (max-width: 600px) {
        h1 {
          text-align: center;
        }
    }
</style>