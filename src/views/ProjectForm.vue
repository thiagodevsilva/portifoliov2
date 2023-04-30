<template>
  <div id="formProjetos">
    <form class="columns is-mobile" id="projeto" method="POST">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="subtitle">Novo Projeto</h1>
        <div class="is-grouped">
          <label class="label" style="margin-left: 25px;">Descrição</label>
          <input class="input is-rounded" name="descricao" type="text" placeholder="Descrição">
        </div>
        <div class="columns">
          <div class="is-grouped column mt-5" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <label class="label" style="margin-left: 25px;">Inicio Projeto</label>
            <input class="input inputData is-centered" style="padding-left: 20px;" name="dt_inicio" type="date" data-date="" :value="startDate">
          </div>
          <div class="is-grouped column mt-5" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <label class="label" style="margin-left: 25px;">Última atualização</label>
            <input class="input inputData is-centered" name="last_update" type="date" data-date="" :value="lastUpdate">
          </div>
        </div>
        <div class="is-grouped mt-5">
          <label class="label" style="margin-left: 25px;">Detalhes</label>
          <textarea class="input textarea" name="detalhes" type="text" placeholder="Detalhes"></textarea>
        </div>
        <div class="is-grouped mt-5">
          <label class="label" style="margin-left: 25px;">Link imagem</label>
          <input class="input is-rounded" name="imagem" type="text" placeholder="Link">
        </div>
        <div class="is-grouped mt-5">
          <label class="label" style="margin-left: 25px;">Link GitHub</label>
          <input class="input is-rounded" name="github" type="text" placeholder="GitHub">
        </div>
        <div class="is-grouped mt-5">
          <label class="label" style="margin-left: 25px;">Link Page</label>
          <input class="input is-rounded" name="page" type="text" placeholder="Link">
        </div>
        <div class="is-grouped mt-5">
          <label for="tag-input" class="label" style="margin-left: 25px;">Tags</label>          
          <input type="text" class="input is-rounded" id="tag-input" v-model="tag" />
          <button class="button is-small m-2 ml-5" @click.prevent="addTag">Adicionar Tag</button>
          <div>
            <span v-for="(tag, index) in tags" :key="index" style="padding: 5px 5px 5px 13px; border: 1px solid #00bf63; border-radius: 6px; margin: 0 3px;">            
              {{ tag }}
              <a @click.prevent="removeTag(index)" style="padding: 3px 0 3px 3px;">
                <i class="fas fa-remove"></i>
              </a>
            </span>
          </div>
          
        </div>
                
        <div class="columns is-mobile is-centered m-5">
          <div class="column is-half">
            <button class="button is-primary is-rounded m-4" @click.prevent="saveForm()">Salvar</button>
            <router-link class="button has-text-link is-rounded m-4" :to="'/'">Voltar</router-link>
          </div>
        </div>

      </div>
    </form>
  </div>
</template>
  
<script>
  import { db } from '../services/firebase.js';
  import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
  import moment from 'moment';  

  export default {
    name: 'FormProjetos',
    components: {
    },
    data() {
      return {
        valid: false,
        project: {},
        date: '',
        startDate: '',
        lastUpdate: '',
        tag: '',
        tags: [],
      };
    },
    mounted(){
      const self = this;
      self.date = moment().format('YYYY-MM-DD');
      
      document.querySelectorAll(".inputData").forEach(function(input) {
        input.addEventListener("change", function() {
          const valor = this.value ? this.value : self.date;
          this.setAttribute(
            "data-date",
            moment(valor, "YYYY-MM-DD").format('DD/MM/YYYY')
          );
        });
        input.dispatchEvent(new Event("change"));
      });
    },
    methods: {
      addTag() {
        if (this.tag !== '') {
          this.tags.push(this.tag)
          this.tag = ''
        }
      },
      removeTag(tag) {        
        this.tags.splice(tag, 1);        
      },
      async saveForm(){
        try {
          const project = this.getForm();

          if (project.descricao == '') {
            alert('Descrição é obrigatória.')
          } else {
            const res = await addDoc(collection(db, 'projetos'), project);
            console.log(res);
            this.project.descricao = '';
            this.project.detalhes = '';

            alert('Projeto adicionado com sucesso!');
            window.location.href="/projetos"
          }
        } catch (error){
          console.error(error);
          alert('Erro ao adicionar projeto!');
        }
      },  
      getForm(){
        const form = document.getElementById('projeto');
        const dados = new FormData(form);

        let projeto = {
          created: serverTimestamp(),
          updated: serverTimestamp(),
          tags: this.tags
        };

        for (const [key, value] of dados.entries()) {          
          projeto[key] = value;
        }
        return projeto;
      }
    },
  };
</script>

<style scoped>
  .inputData {
      position: relative;
      width: 200px; height: 37px;
      color: white;
  }

  .inputData:before {
      /* position: absolute; */
      top: 3px; left: 3px;
      content: attr(data-date);
      display: inline-block;
      color: black;
  }

  .inputData::-webkit-datetime-edit, input::-webkit-inner-spin-button, input::-webkit-clear-button {
      display: none;
  }

  .inputData::-webkit-calendar-picker-indicator {
      position: absolute;
      top: 3px;
      right: 0;
      color: black;
      opacity: 1;
  }
</style>
  