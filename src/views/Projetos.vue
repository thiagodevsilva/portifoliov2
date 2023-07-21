<template>
  <div id="projetos">
    <section class="hero is-white has-text-centered">
      <div class="columns">
        <div class="column">
          <h1 class="title is-size-1" style="font-family: 'Roboto', sans-serif; line-height: 1.5; text-shadow: 2px 2px 10px rgba(0, 128, 0, 0.5);">Projetos</h1>
        </div>
        <div class="column has-text-center m-5">
          <router-link class="button is-success is-outlined is-rounded" :to="'/projetos/insert'">Novo Projeto</router-link>
        </div>
      </div>

      <nav class="my-5" style="display: none;">
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
      <ul style="padding: 0 12px;">
        <li v-for="projeto in getPaginatedItems" :key="projeto.id" class="py-2">
          <div class="container container-projeto" style="position: relative;">
            <div class="has-text-right pt-2 pr-2">
              <a v-show="projeto.page != ''" target="_blank" class="button button-action is-success is-outlined is-rounded ml-1" :href="projeto.page" title="Abrir página">
                <i class="fa-brands fa-internet-explorer"></i>
              </a>
              <a v-show="projeto.github != 'private'" target="_blank" class="button button-action is-success is-outlined is-rounded ml-1" :href="projeto.github" title="Github">
                <i class="fa-brands fa-github"></i>
              </a>
              <button @click.prevent="editarProjeto(projeto.id)" class="button button-action is-success is-outlined is-rounded ml-1" title="Editar">
                <i class="fa-solid fa-pen-to-square editar-projeto"></i>
              </button>
              <button @click.prevent="openModal()" class="button button-action is-success is-outlined is-rounded ml-1" title="Excluir">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
            <div class="columns">
              <div class="column is-one-quarter" style="display: flex; justify-content: center; align-items: center;">                
                  <img style="max-height: 180px; object-fit: contain;" :src="projeto.imagem">                
              </div>
              <div class="column auto pt-5">
                <div class="pb-5">
                  <h2 style="font-size: 1.4em; text-shadow: 4px 4px 10px rgba(0, 128, 0, 0.5);">{{ projeto.descricao }}</h2>
                </div>

                <div class="pb-3 px-5">
                  <span>{{ projeto.detalhes }}</span>
                </div>

                <div>
                  <span v-for="tag in projeto.tags" :key="tag" class="tag">#{{ tag }}</span>
                </div>
              </div>
            </div>
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
          imagem: doc.data().imagem,
          tags: doc.data().tags,
          github: doc.data().github,
          page: doc.data().page,
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
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;900&family=Signika:wght@300&display=swap');
  .button-action {
    padding: 7px !important;
    font-size: 20px;
    height: auto;
    border: none;
  }
  .container-projeto {
    box-shadow: 0 0 5px #04b61f;
    min-height: 210px;
    margin-top: 12px !important;
    position: relative;
    border-radius: 6px;
  }
  .container-projeto .action-buttons {
    top: 4px;
    right: 4px;
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

  .tag {
    padding: 3px 6px;
    border: 1px solid #c1c1c160;
    background: none;
    margin-left: 4px;
  }
  
</style>