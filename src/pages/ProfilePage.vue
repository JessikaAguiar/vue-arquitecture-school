<template>
  <section>
    <input type="number" v-model="quantidade" />
    <input type="date" v-model="dataMinima" />
    <input type="date" v-model="dataMaxima" />
    <input type="checkbox" v-model="naoRepetir">
    <button @click="sortear()">sortear</button>

    <pre>{{ sorteadas }}</pre>
  </section>
</template>
<script>
import galeryData from '@/assets/db/galeryData';
export default {
  name: 'ProfilePage',
  data() {
    return {
      galery: [],
      quantidade: 1,
      dataMinima: '2024-05-01',
      dataMaxima: '2024-05-20',
      naoRepetir: true,
      sorteadas: []
    }
  },
  created() {
    this.galery = galeryData.galery
  },
  methods:{
    sortear() {
      //converter em Datas reais
      const maxData = new Date(this.dataMaxima)
      const minData = new Date(this.dataMinima)

      //filtrar as fotos pelo intervalo de datas
      let filtradas = this.galery.filter(foto => {
        const fotoDate = new Date(foto.date)
        return fotoDate >= minData && fotoDate <= maxData
      })

      if(filtradas.length === 0) {
        alert('Nenhuma memória encontrada nesse intervalor')
        return;
      }

      //se nao pode repetir, limitar quantidade maxima
      let maxSorteio = this.naoRepetir ? filtradas.length : this.quantidade

      //embaralhar array
      let embaralhar = filtradas.sort(() => Math.random() - 0.5)

      //pegar
      this.sorteadas = embaralhar.slice(0,Math.min(this.quantidade, maxSorteio))

    }
  }
}

</script>
<style scoped></style>