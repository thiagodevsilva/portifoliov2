<template>

  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="p-5">
        <div class="columns" style="">
          <div class="is-one-third">
            <img src="@/assets/images/clotilde.png" style="max-width: 180px;">
          </div>
          <div class="column">
            <div class="checkUserSecond" style="width: 100%; display: none; padding: 15px 25px; background-color: #fff; border-radius: 7px; margin-left: auto;">
              <div style="width: 100%; max-width: 700px; text-align: center;">
                <div style="width: 100%; max-width: 700px;">
                  <span>Ah sim, claro.. e qual é a senha?</span>
                </div>
                <div style="text-align: center;" class="control is-small mt-3">
                  <input class="input is-small" type="password">
                </div>
              </div>
              <div style="text-align: center; padding-top: 15px;">
                <button class="button is-small is-success is-light">Validar!</button>
                <button class="button is-small is-info is-light ml-2" @click.prevent="closeModal()">Cancelar</button>
              </div>
            </div>
            <div class="checkUserFirst" style="width: 100%; padding: 15px 25px; background-color: #fff; border-radius: 7px; margin-left: auto;" >
              <div style="width: 100%; max-width: 700px; text-align: center;">
                <div style="width: 100%; max-width: 700px;">
                  <span>Hi Dear! Apenas o Thiago pode fazer essa operação.. por acaso você não é ele.. é?</span>
                </div>
                <div style="text-align: center; padding-top: 15px;">
                  <button class="button is-small is-info is-light" @click.prevent="closeModal()">É eu não sou..</button>
                  <button @click.prevent="getSenha" class="button is-small is-success is-light ml-2">Sou eu Thaistildes!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click.prevent="closeModal()" class="modal-close is-large" aria-label="close"></button>
  </div>

  <div id="formProjetos">
    <form class="columns" id="projeto" method="POST">
      <div class="column">
        <h1 class="subtitle" style="text-align: center;">          
          <i class="fa fa-plus-circle" style="font-size: 0.8em"></i>
          Novo Projeto 
        </h1>
        
        <div style="padding: 15px; border-radius: 6px; box-shadow: 0 0 3px #c1c1c1; width: 100%; max-width: 700px; margin: 0 auto;">
          <div class="is-grouped">
            <label class="label" style="margin-left: 25px;">Descrição</label>
            <input class="input" name="descricao" type="text" placeholder="Descrição" v-model="project.descricao">
          </div>
          <div class="is-grouped mt-3">
            <label class="label" style="margin-left: 25px;">Detalhes</label>
            <textarea class="input textarea" name="detalhes" type="text" placeholder="Detalhes" v-model="project.detalhes"></textarea>
          </div>

          <div class="is-grouped mt-3" style="">
            <div v-if="project.imagem" style="display: flex; justify-content: center; margin: 7px;">
              <img :src="project.imagem" :data-image="project.imagem" ref="imageDisplay" id="img" style="width: 180px; object-fit: cover; padding: 7px;">
            </div>          
            <div class="is-flex is-justify-content-space-between">
              <input type="file" ref="imagemInput" @change="onFileChange" style="display: none;">
              <button class="button is-small is-success" @click.prevent="selectImage">Selecionar imagem</button>
              <button class="button is-small is-dark" @click.prevent="cleanImage">Limpar imagem</button>
            </div>
            <div class="progress-bar" :style="{width: uploadProgress + '%'}"></div>          
          </div>

          <div class="is-grouped mt-3">
            <label class="label" style="margin-left: 25px;">Link GitHub</label>
            <input class="input" name="github" type="text" placeholder="GitHub" v-model="project.github">
          </div>
          <div class="is-grouped mt-3">
            <label class="label" style="margin-left: 25px;">Link Page</label>
            <input class="input" name="page" type="text" placeholder="Link" v-model="project.page">
          </div>
          <div class="is-grouped mt-3">
            <label for="tag-input" class="label" style="margin-left: 25px;">Tags</label>          
            <div style="display: flex; align-items: center;">
              <input type="text" class="input" style="flex-grow: 1;" id="tag-input" v-model="tag" />
              <button class="button is-small m-2 ml-5" @click.prevent="addTag">Adicionar Tag</button>
            </div>
            <div style="padding: 20px;">
              <span v-for="(tag, index) in tags" :key="index" style="color: #FFF; padding: 5px; background-color: #00bf63; border-radius: 6px; margin: 0 3px;">            
                {{ tag }}
                <a @click.prevent="removeTag(index)" style="padding: 3px 0 3px 3px;">
                  <i class="fas fa-remove"></i>
                </a>
              </span>
            </div>
            
          </div>
        </div>
                
        <div class="columns is-mobile is-centered">
          <div class="column is-flex is-justify-content-space-around">
            <button class="button is-primary is-rounded m-4" @click.prevent="openModal()">Salvar</button>
            <router-link class="button has-text-link is-rounded m-4" :to="'/projetos'" @click.prevent="checkForUnsavedChanges">Voltar</router-link>
          </div>
        </div>

      </div>
    </form>
  </div>
</template>
  
<script>
  import moment from 'moment';
  import { db } from '../services/firebase.js';
  import { collection, doc, addDoc, updateDoc, getDoc, serverTimestamp } from 'firebase/firestore';  
  import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';

  const storage = getStorage();

  export default {
    name: 'FormProjetos',
    components: {
    },
    data() {  
      return {
        valid: false,
        project: {},
        initialProjectValues: {},
        date: '',
        startDate: '',
        lastUpdate: '',
        tag: '',
        tags: [],
        imagem: '',
        imageUrl: '',
        imagePath: '',
        imageChange: false,
        uploadProgress: 0,
        removerImagem: false,
        removerImagemPath: '',
      };
    },
    mounted(){
      const self = this;

      if (self.$route.path.startsWith('/projetos/edit')) {
        self.fetchProject(this.$route.params.id);
      }

    },
    methods: {
      openModal() {
        document.querySelector('.modal').classList.add('is-active');
        document.documentElement.classList.add('is-clipped');
      },
      closeModal() {
        document.querySelector('.modal').classList.remove('is-active');
        document.documentElement.classList.remove('is-clipped');
        document.querySelector('.checkUserFirst').style.display = 'block';
        document.querySelector('.checkUserSecond').style.display = 'none';
      },
      getSenha() {
        document.querySelector('.checkUserFirst').style.display = 'none';
        document.querySelector('.checkUserSecond').style.display = 'block';
      },

      /**
       * abre a seleção de imagem
       */
      selectImage() {
        this.$refs.imagemInput.click();
      },

      /**
       * quando input da imagem receber uma alteração o arquivo é passado para {this.imagem}
       * a mudança também é monitorada pelo {this.imageChange}
       * @param {event} event 
       */
      onFileChange(event) {
        this.imagem = event.target.files[0];
        this.imageChange = true;
        this.$refs.imageDisplay.src = URL.createObjectURL(this.imagem);
      },

      /**
       * Salva a imagem no fire storage
       */
      async uploadImage() {    
        
        if (this.imagem) {
          return new Promise((resolve, reject) => {
            this.imagePath = `images/${this.imagem.name}`;
            const storageRef = ref(storage, this.imagePath);

            const uploadTask = uploadBytesResumable(storageRef, this.imagem);

            uploadTask.on('state_changed', 
              (snapshot) => {
                  // A função Math.round arredonda o resultado para o número inteiro mais próximo
                  this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              }, 
              (error) => {
                  console.log(error);
                  reject(error); // Rejeita a Promise se houver um erro no upload
              }, 
              async () => {
                this.imageUrl = await getDownloadURL(storageRef);

                this.uploadProgress = 0;  // Reseta o progresso após o upload
                resolve(); // Resolve a Promise quando o upload estiver concluído
              }
            );
          });
        } else {
          return;
        }
      },
      
      /**
       * Botão para adicionar a tag 
       * Caso tenha uma tag puxa o dado para o array de tags
       */
      addTag() {
        if (this.tag !== '') {
          this.tags.push(this.tag)
          this.tag = ''
        }
      },

      /**
       * Remove a tag clicada do array de tags
       * @param {string} tag 
       */
      removeTag(tag) {        
        this.tags.splice(tag, 1);        
      },

      async saveForm(){
        try {
          await this.uploadImage();
          const project = await this.getForm();

          if (project.descricao == '') {
            alert('Descrição é obrigatória.')
          } else {
            if (this.$route.path.startsWith('/projetos/edit')) {
              // estamos editando um projeto existente              
              await updateDoc(doc(db, 'projetos', this.$route.params.id), project);
              await this.cleanImageDb();
            } else {
              // estamos criando um novo projeto
              await addDoc(collection(db, 'projetos'), project);
            }

            alert('Projeto salvo com sucesso!');
            window.location.href="/projetos"
          }
        } catch (error){
          console.error(error);
          alert('Erro ao salvar projeto!');
        }
      },  
      getForm(){
        const form = document.getElementById('projeto');
        const dados = new FormData(form);

        let projeto = {
          created: serverTimestamp(),
          updated: serverTimestamp(),
          imagem: this.imageUrl,
          imagePath: this.imagePath,
          tags: this.tags
        };

        for (const [key, value] of dados.entries()) {          
          projeto[key] = value;
        }
        return projeto;
      },
      formHasChanged() {
        // continuar comportamento
        // console.log(JSON.stringify(this.project) !== JSON.stringify(this.initialProjectValues));          
        return false;
      },
      checkForUnsavedChanges() {
        if (this.formHasChanged()) {
          if (confirm('Você tem alterações não salvas. Tem certeza de que deseja sair?')) {
            this.$router.push('/projetos');
          }
        } else {
          this.$router.push('/projetos');
        }
      },
      async fetchProject(id) {
        try {
          const documento = await getDoc(doc(db, 'projetos', id));
          if (documento.exists()) {

            this.project = documento.data();

            if (this.project) {
              if (this.tags) {
                this.tags = this.project.tags || [];
              }

              if (this.project.dt_inicio) {
                this.startDate = moment(this.project.dt_inicio, "YYYY-MM-DD").format('DD/MM/YYYY');
              }

              if (this.project.last_update) {
                this.lastUpdate = moment(this.project.last_update, "YYYY-MM-DD").format('DD/MM/YYYY');
              } else {
                this.lastUpdate = moment(this.date, "YYYY-MM-DD").format('DD/MM/YYYY');
              }

              if (this.project.imagem) {
                this.imageUrl = this.project.imagem;
                this.imagePath = this.project.imagePath;
              }

            }

            this.initialValues = { ...this.project };

          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error("Error getting document:", error);
        }      
      },
      async cleanImageDb() {
        if (this.removerImagem) {
          const imageRef = ref(storage, this.removerImagemPath);
          
          // Deleta a imagem do Firebase Storage
          await deleteObject(imageRef);
        }
      },      
      async cleanImage() {        
        const imagemRemovida = this.imagePath;
        this.removerImagem = true;
        this.removerImagemPath = imagemRemovida;
        this.$refs.imageDisplay.src = '';
        this.imageUrl = '';
        this.imagePath = '';
      },
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
  .progress-bar {
    height: 20px;
    background: green;
  }

</style>
  