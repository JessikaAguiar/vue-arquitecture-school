<template>
 <section>
   <div class="forms">
     <h1>Meu Perfil</h1>
     <h2>🎲 Sorteador de Memórias</h2>
     <div class="form-group">
       <label>Quantas memórias sortear:</label>
       <input type="number" v-model.number="quantidade" min="1" :max="galery.length" :disabled="sorteadas.length > 0">
     </div>

     <div class="form-group">
       <label>Data mínima:</label>
       <input type="date" v-model="dataMinima" :disabled="sorteadas.length > 0">
     </div>

     <div class="form-group">
       <label>Data máxima:</label>
       <input type="date" v-model="dataMaxima" :disabled="sorteadas.length > 0">
     </div>

     <div class="form-group">
       <label>
         <input type="checkbox" v-model="naoRepetir" :disabled="sorteadas.length > 0">
         Não repetir memória
       </label>
     </div>
      <button @click="sorteadas.length > 0 ? reiniciarSorteio() : sortearMemorias()">
     {{ sorteadas.length > 0 ? 'Reiniciar Sorteio' : 'Sortear Memórias' }}
   </button>
   </div>

 

  
   <div class="sorteadas" v-if="sorteadas.length > 0" >
     <h3 class="titulo-sorteadas">Memórias sorteadas:</h3>
     <div class="sorteadas-lista">
       <div v-for="foto in sorteadas" :key="foto.id" class="sorteada-item">
       <img :src="require(`@/assets/img/galery/${foto.src}`)" :alt="foto.alt" class="sorteada-img">
       <div>
         <h4>{{ foto.title }}</h4>
         <p>{{ foto.text }}</p>
         <small>{{ new Date(foto.date).toLocaleDateString() }}</small>
       </div>
     </div>
     </div>
   </div>
 </section>
</template>
<script>
import userData from '@/assets/db/userData'
import galeryData from '@/assets/db/galeryData'
export default {
 name: 'ProfilePage',
 data() {
   return {
     profile: {},
     stats: {},
     galery: [],
     sorteadas: [],       
     quantidade: 1,
     dataMinima: "2024-05-01",
     dataMaxima: "2024-05-20",
     naoRepetir: true
   }
 },
 created() {
   this.profile = userData.profile
   this.stats = userData.stats
   this.galery = galeryData.galery
 },
 methods: {
   sortearMemorias() {
       // Converter strings para datas reais
       const minDate = new Date(this.dataMinima);
       const maxDate = new Date(this.dataMaxima);

       // Filtrar fotos pelo intervalo de datas
       let filtradas = this.galery.filter(foto => {
           const fotoDate = new Date(foto.date);
           return fotoDate >= minDate && fotoDate <= maxDate;
       });

       if (filtradas.length === 0) {
           alert('Nenhuma memória encontrada nesse intervalo!');
           this.sorteadas = [];
           return;
       }

       // Se não pode repetir, limitar quantidade máxima
       let maxSorteio = this.naoRepetir ? filtradas.length : this.quantidade;

       // Embaralhar array
       let embaralhadas = filtradas.sort(() => Math.random() - 0.5);

       // Pegar as primeiras N
       this.sorteadas = embaralhadas.slice(0, Math.min(this.quantidade, maxSorteio));
   },
   reiniciarSorteio() {
     this.sorteadas = [];
     this.quantidade = 1;
     this.dataMinima = "2024-05-01";
     this.dataMaxima = "2024-05-20";
     this.naoRepetir = true;
   }
 }
}

</script>
<style scoped>
section {
 width: 100%;
 max-width: 1200px;
 margin: 40px auto;
 padding: 20px;
 background: #f9f9f9;
 border-radius: 12px;
 box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
 display: flex;
 gap: 20px;
 flex-wrap: wrap;
}
.forms {
 flex: 1 1 300px;
 min-width: 280px;
}
.sorteadas {
 flex: 2 1 500px;
 display: flex;
 flex-direction: column;
}
.titulo-sorteadas {
 text-align: center;
 margin-bottom: 10px;
}

.sorteadas-lista {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
 gap: 16px;
 max-height: 500px;
 overflow-y: auto;
}

.sorteada-item {
 flex: 1 1 calc(50% - 16px);
 min-width: 220px;
 background: #fff;
 border-radius: 8px;
 padding: 10px;
 box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

h1 {
 text-align: center;
 margin-bottom: 10px;
 font-size: 2rem;
 color: #333;
}

h2 {
 text-align: center;
 margin-bottom: 20px;
 font-size: 1.4rem;
 color: #555;
}

.form-group {
 margin-bottom: 15px;
 display: flex;
 flex-direction: column;
}

.form-group label {
 margin-bottom: 5px;
 font-weight: 500;
 color: #444;
}

.form-group input[type="number"],
.form-group input[type="date"] {
 padding: 10px;
 border: 1px solid #ccc;
 border-radius: 6px;
 font-size: 1rem;
}

.form-group input[type="checkbox"] {
 margin-right: 8px;
}

button {
 width: 100%;
 padding: 12px;
 font-size: 1rem;
 background-color: #ef5f4c;
 color: white;
 border: none;
 border-radius: 6px;
 cursor: pointer;
 transition: background-color 0.3s;
}

button:hover {
 background-color: #d94f3c;
}

.sorteada-img {
 width: 100%;
 height: 150px;
 object-fit: cover;
 border-radius: 6px;
 margin-bottom: 10px;
}

.sorteada-item h4 {
 margin: 0;
 font-size: 1.1rem;
}

.sorteada-item p {
 margin: 4px 0;
 font-size: 0.9rem;
}

.sorteada-item small {
 color: #777;
 font-size: 0.8rem;
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.6rem;
  }

  h2 {
    font-size: 1.2rem;
  }
  section {
    flex-direction: column;
  }

  .sorteadas {
    flex: 1 1 100%;
  }
 }
</style>