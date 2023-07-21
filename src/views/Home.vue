<template>
  <div id="home">
    <section class="hero has-text-centered">
      <div class="mt-5">
        <div class="container">
          <div class="columns is-centered">
            <div class="column">
              <h1 class="title is-spaced has-text-light is-size-1-desktop is-size-2-tablet is-size-3-mobile">Programador Full-stack</h1>
              <h2 class="subtitle is-size-4-tablet has-text-light">
                Seja bem-vindo ao meu portifólio!
              </h2>
              <img src="@/assets/images/thiago.png" title="Thiago Silva" style="object-fit: contain;
                                                                                      width: 100%;
                                                                                      height: auto;
                                                                                      max-width: 200px;
                                                                                      margin: 2rem 0">
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot">
        <div ref="observeMe">
          <video ref="videoRef" src="@/assets/videos/intro.mp4" muted></video>
        </div>
        <!-- <div class="container">
          <img class="is-bottom" src="@/assets/images/setup.png" style="margin-top: -30px;">
        </div> -->
      </div>
    </section>
    <section class="is-primary has-text-centered" style="background-color: #00bf63; margin-top: -8px; width: 100%; padding: 80px 0;">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-three-fifths">
            <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">Olá, eu sou o Thiago!</h1>
            <h2 class="subtitle is-size-5-desktop has-text-weight-normal">
              Toda a vida apaixonado por internet e tecnologia, TI a mais de 10 anos, e hoje completam exatamente {{ dhCode() }} focado na carreira de desenvolvedor. Ainda muito dedicado em firmar bases, e incorporar conhecimento, busco enraizar boas práticas e conceitos ágeis e escaláveis. Veja um pouco do que conheço e tenho feito.
            </h2>
          </div>
          
        </div>
      </div>

    </section>
    <section class="has-text-centered is-flex is-justify-content-center is-flex-wrap-wrap " style="padding-bottom: 1rem; margin-top: -40px; background: none;">      
      <div class="column frentes">
        <div>
          <img src="@/assets/images/back.png" style="width: 70px;">
          <h1 class="title is-size-4 is-spaced">Back-end</h1>
          <p>Dominio de implementações de complexidade média, explorando a linguagem PHP e Javascript com bibliotecas Node e Composer.</p>
          <p class="list-title has-text-primary has-text-weight-normal" style="padding: 20px;">
            Coisas que gosto de fazer:
          </p>
          <p>CRUD, Auth, Busca, Notificações, API, Webhooks, Invoicy, E-mail</p>

          <p class="list-title has-text-primary has-text-weight-normal" style="padding: 20px;">
            Linguagens:
          </p>

          <div style="list-style: none; margin: 0; padding: 0;">
            <span class="li-langs">PHP</span>
          </div>

          <p class="list-title has-text-primary has-text-weight-normal" style="padding: 20px;">
            Frameworks:
          </p>

          <div style="list-style: none; margin: 0; padding: 0;">
            <span class="li-langs">Laravel</span>
            <span class="li-langs">Slim</span>
          </div>
          
        </div>
      </div>
      <div class="column frentes">
        <div>
          <img src="@/assets/images/front.png" style="width: 70px;">
          <h1 class="title is-size-4 is-spaced">Front-end</h1>
          <p>Dominio de criação de estruturas simples, com semantica, reatividade e responsividade.</p>
          <p class="list-title has-text-primary has-text-weight-normal" style="padding: 20px;">
            Coisas que gosto de fazer:
          </p>
          <p>Formulários, Áreas de texto, Navegações, Galerias, Menus</p>
          <p class="list-title has-text-primary has-text-weight-normal" style="padding: 20px;">
            Dev tools:
          </p>
          <ul style="list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; justify-content: center;">
            <span class="li-langs">CSS</span>
            <span class="li-langs">SCSS</span>
            <span class="li-langs">Javascript</span>
            <span class="li-langs">JQuery</span>
            <span class="li-langs">Bootstrap</span>
            <span class="li-langs">VueJS</span>
            <span class="li-langs">Blade</span>
            <span class="li-langs">Twig</span>
            <span class="li-langs">Bulma</span>
          </ul>
        </div>
      </div>
      <div class="column frentes">
        <div>
          <img src="@/assets/images/db.png" style="width: 70px;">
          <h1 class="title is-size-4 is-spaced">Database</h1>
          <p>Domínio de construção de queries, experiência com SQL Server, e vivência com MySQL.</p>
          <p class="list-title has-text-primary has-text-weight-normal" style="padding: 20px;">
            Coisas que gosto de fazer:
          </p>
          <p>Relatórios, Models, Migrations</p>
          <p class="list-title has-text-primary has-text-weight-normal" style="padding: 20px;">
            Dev tools:
          </p>
          <ul style="list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; justify-content: center;">
            <span class="li-langs">SQL Server</span>
            <span class="li-langs">MySQL</span>
            <span class="li-langs">Firebase</span>
          </ul>
        </div>
      </div>
    </section>

    <!-- Projetos em destaque -->
    <section style="width: 100%;">
      <div>
        <ProjetosDestaques />
      </div>
    </section>

    <section class="hashtags" style="width: 100%;">
      <div>
        <HashtagSelection />
      </div>
      <!-- <div class="container">
        <UpdateBox :projetos="this.projetos"/>
      </div> -->
    </section>

    <!-- Projetos em destaque -->
    <section style="width: 100%;">
      <div>
        <CertificadosThiago />
      </div>
    </section>
  </div>
</template>
  
<script>
  import { db } from '../services/firebase.js';
  import { collection, orderBy, onSnapshot, query } from 'firebase/firestore';

  // import UpdateBox from '../components/home/Updates.vue';
  import HashtagSelection from '../components/home/HashtagsSelection.vue';
  import ProjetosDestaques from '../components/home/ProjetosDestaques.vue';
  import CertificadosThiago from '../components/home/Certificados.vue';
  import moment from 'moment';  

  export default {
    name: 'HomeView',
    components:{
      HashtagSelection,
      ProjetosDestaques,
      CertificadosThiago,
      // UpdateBox,
    },
    data() {
      return {        
        projetos: [],
        observer: null,
      };
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
    mounted(){
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => {
              this.$refs.videoRef.play();
            }, 500);

          } 
        },
        {
          threshold: 0.1
        }
      );

      this.observer.observe(this.$refs.observeMe);

    },
    methods:{
      dhCode() {
        const referenceDate = moment('2022-02-02');
        const now = moment();
        const diff = moment.duration(now.diff(referenceDate));
        const year = diff.years() > 1 ? diff.years() + ' anos' : diff.years() + ' ano';
        const month = diff.months() > 1 ? diff.months() + ' meses' : diff.months() + ' mês';
        const day = diff.days() > 1 ? diff.days() + ' dias' : diff.days() + ' dia';
        return `${year}, ${month} e ${day}`;
      }
    }
  };
</script>
  
<style>
  #home {
    background-color: #252627;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .intro {
    text-align: center;
  }
  
  .highlight {
    color: #4f4fff;
  }
  
  .router-link {
    color: #4f4fff;
    text-decoration: none;
  }
  
  .router-link:hover {
    text-decoration: underline;
  }

  .frentes {
    border-radius: 6px;
    padding: 25px !important;
    max-width: 330px;
    min-width: 299px;
    width: 100%;
    background: whitesmoke;
    margin: 0 10px 10px 10px;
  }

  .li-langs {
    border: 1px solid black;
    border-radius: 6px;
    padding: 6px;
    margin: 4px;
  }

</style>
  