<template>
  <div id="projetos">
    <section class="hero is-white has-text-centered">
      <div class="columns">
        <div class="column has-text-center m-5">
          <router-link class="button is-success is-outlined is-rounded" :to="'/projetos/insert'">Novo Projeto</router-link>
        </div>
      </div>
      <div class="container has-text-left m-5">
        <h1 class="title">Projetos</h1>
      </div>
      <nav class="my-5">
        <ul class="pagination">
          <li v-if="currentPage > 1">
            <a href="#" @click="changePage(currentPage - 1)">Anterior</a>
          </li>
          <li v-for="page in pageCount" :key="page" :class="{ active: currentPage === page }">
            <a href="#" @click="changePage(page)">{{ page }}</a>
          </li>
          <li v-if="currentPage < pageCount">
            <a href="#" @click="changePage(currentPage + 1)">Próximo</a>
          </li>
        </ul>
      </nav>
      <ul>
        <li v-for="projeto in getPaginatedItems" :key="projeto.id">
          <div class="container container-projeto">
            <div>
              <button @click.prevent="editarProjeto(projeto.id)"><i class="fa-solid fa-pen-to-square editar-projeto"></i> {{ projeto.id }}</button>
              <button style="cursor: pointer;"><i class="fa-solid fa-trash-can"></i></button>
            </div>

            <h2>{{ projeto.descricao }}</h2>
            <p>{{ projeto.detalhes }}</p>
          </div>

        </li>
      </ul>
      <nav class="my-5">
        <ul class="pagination">
          <li v-if="currentPage > 1">
            <a href="#" @click="changePage(currentPage - 1)">Anterior</a>
          </li>
          <li v-for="page in pageCount" :key="page" :class="{ active: currentPage === page }">
            <a href="#" @click="changePage(page)">{{ page }}</a>
          </li>
          <li v-if="currentPage < pageCount">
            <a href="#" @click="changePage(currentPage + 1)">Próximo</a>
          </li>
        </ul>
      </nav>
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
        currentPage: 1,
        itemsPerPage: 5,
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
      });      
    },
    methods: {
      changePage(pageNumber) {
        this.currentPage = pageNumber;
      },
      editarProjeto (id) {
        this.$router.push({ name: 'editProject', params: { id: id } });
      },
    },
    computed: {
      pageCount() {
        return Math.ceil(this.projetos.length / this.itemsPerPage);
      },
      getPaginatedItems() {
        let start = (this.currentPage - 1) * this.itemsPerPage;
        let end = start + this.itemsPerPage;
        return this.projetos.slice(start, end);
      },
    }
  }

</script>

<style scoped>
  .container-projeto {
    box-shadow: 0 0 3px #c1c1c1;
    height: 210px;
    margin-top: 12px;
    position: relative;
    padding: 15px;
    border-radius: 6px;
  }
  .container-projeto div {
    position: absolute;
    top: 4px;
    right: 4px;
  }
  .editar-projeto{
    margin-right: 3px;
    cursor: pointer;
  }
  .pagination {
    display: flex;
    justify-content: center;
  }
  .pagination li {
    margin: 0 5px;
    list-style-type: none;
  }

  .pagination li a {
    display: block;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    color: #00bf36;
    border: 1px solid #00bf36;
    border-radius: 3px;
  }

  .pagination li.active a {
    background-color: #00bf36;
    color: #fff !important;
  }
</style>