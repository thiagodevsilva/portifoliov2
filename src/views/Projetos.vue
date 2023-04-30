<template>
  <div id="projetos">
    <section class="hero is-white has-text-centered">
      <h1>teste123</h1>
      <ul>
        <li v-for="projeto in projetos" :key="projeto.id">
          <h2>{{ projeto.descricao }}</h2>
          <p>{{ projeto.detalhes }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>

  import { db } from '../services/firebase.js';
  import { collection, orderBy, onSnapshot, query } from 'firebase/firestore';
  export default {
      name: 'ProjetosView',
      data(){
        return{
          projetos: [],
        }
      },
      async created() {
      const projectsRef = collection(db, 'projetos');
      const orderedProjectsRef = query(projectsRef, orderBy('descricao'));

      onSnapshot(orderedProjectsRef, (snapshot) => {
        this.projetos = snapshot.docs.map((doc) => ({
          id: doc.id,
          descricao: doc.data().descricao,
          detalhes: doc.data().detalhes,
        }));
        // Imprimir as informações de cada projeto no console

        console.log(this.projetos)
        this.projetos.forEach((projeto) => {
          console.log(`ID: ${projeto.id}`);
          console.log(`Descrição: ${projeto.descricao}`);
          console.log(`Detalhes: ${projeto.detalhes}`);
        });
      });      
    },
  }

</script>

<style>

</style>