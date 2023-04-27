<template>
  <div id="home">
    <section class="hero is-white has-text-centered">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column">
              <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Programador Full-stack</h1>
              <h2 class="subtitle is-size-4-tablet">
                Sejam bem-vindos ao meu portifólio!
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
        <div class="container">
          <img class="is-bottom" src="@/assets/images/setup.png" style="margin-top: -30px;">
        </div>
      </div>
    </section>
    <section class="section is-medium is-primary has-text-centered is-long" style="background-color: #00bf63; margin-top: -8px;">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-three-fifths">
            <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">Olá, eu sou o Thiago!</h1>
            <h2 class="subtitle is-size-5-desktop has-text-weight-normal">
              Toda a vida apaixonado por internet e tecnologia, TI a 9 anos, e hoje completam exatamente {{ dhCode() }} codando. Ainda muito focado em firmar bases, e obter conhecimento, busco enraizar boas práticas e conceitos ágeis e escaláveis. Veja um pouco do que tenho feito.
            </h2>
          </div>
          
        </div>
      </div>

    </section>
    <section class="section has-text-centered" style="margin-top: -8rem; padding-bottom: 1rem;">
      <div class="container is-narrow">
        <div class="box">
          <div class="content">
            <div class="columns is-centered">              
              <div class="column frentes">
                <img src="@/assets/images/back.png" style="width: 70px;">
                <h1 class="title is-size-4 is-spaced">Back-end</h1>
                <p>Dominio de implementações de complexidade média, explorando a linguagem PHP, Node e Composer.</p>
                <p class="list-title has-text-primary has-text-weight-normal">
                  Coisas que gosto de fazer:
                </p>
                <p>CRUD, Auth, Busca, Notificações, API, Webhooks, Invoicy, E-mail</p>
                <p class="list-title has-text-primary has-text-weight-normal">
                  Linguagens:
                </p>
                <ul style="list-style: none; margin: 0; padding: 0;">
                  <li>PHP</li>
                <p class="list-title has-text-primary has-text-weight-normal">
                  Frameworks:
                </p>
                  <li>Laravel</li>
                  <li>Slim</li>
                </ul>
              </div>
              <div class="column frentes">
                <img src="@/assets/images/front.png" style="width: 70px;">
                <h1 class="title is-size-4 is-spaced">Front-end</h1>
                <p>Dominio de criação de estruturas simples, com semantica, reatividade e responsividade.</p>
                <p class="list-title has-text-primary has-text-weight-normal">
                  Coisas que gosto de fazer:
                </p>
                <p>Formulários, Áreas de texto, Navegações, Galerias, Menus</p>
                <p class="list-title has-text-primary has-text-weight-normal">
                  Dev tools:
                </p>
                <ul style="list-style: none; margin: 0; padding: 0;">
                  <li>CSS</li>
                  <li>SCSS</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>Bootstrap</li>
                  <li>VueJS</li>
                  <li>Blade</li>
                  <li>Twig</li>
                  <li>Bulma</li>
                </ul>
              </div>
              <div class="column frentes">
                <img src="@/assets/images/db.png" style="width: 70px;">
                <h1 class="title is-size-4 is-spaced">Database</h1>
                <p>Domínio de construção de queries, experiência com SQL Server, e vivência com MySQL.</p>
                <p class="list-title has-text-primary has-text-weight-normal">
                  Coisas que gosto de fazer:
                </p>
                <p>Relatórios, Models, Migrations</p>
                <p class="list-title has-text-primary has-text-weight-normal">
                  Dev tools:
                </p>
                <ul style="list-style: none; margin: 0; padding: 0;">
                  <li>SQL Server</li>
                  <li>MySQL</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section projects is-medium is-white has-text-centered">
      <div class="container">
        <UpdateBox />
      </div>
    </section>
  </div>
</template>
  
<script>
import UpdateBox from '../components/home/Updates.vue';
  import moment from 'moment';
  export default {
    name: 'HomeView',
    components:{
      UpdateBox,
    },
    data() {
      return {
        projects: [
          {
            id: 1,
            title: "Projeto 1",
            description: "Descrição do projeto 1",
            image: "imagem-projeto-1.jpg",
          },
          {
            id: 2,
            title: "Projeto 2",
            description: "Descrição do projeto 2",
            image: "imagem-projeto-2.jpg",
          },
          {
            id: 3,
            title: "Projeto 3",
            description: "Descrição do projeto 3",
            image: "imagem-projeto-3.jpg",
          },
        ],
      };
    },
    create(){
      
    },
    methods:{
      dhCode() {
        const referenceDate = moment('2022-02-02');
        const now = moment();
        const diff = moment.duration(now.diff(referenceDate));
        const year = diff.years() > 1 ? diff.years() + ' anos' : diff.years() + ' ano';
        const month = diff.months() > 1 ? diff.months() + ' meses' : diff.months() + ' mês';
        const day = diff.days() > 1 ? diff.days() + ' dias' : diff.days() + ' dia';
        return `${year}, ${month},  ${day}`;
      }
    }
  };
</script>
  
<style>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
  }
  
  .intro {
    text-align: center;
  }
  
  .highlight {
    color: #4f4fff;
  }
  
  .projects {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .project {
    width: 300px;
    margin: 20px;
    text-align: center;
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .project h4 {
    margin-top: 0;
  }
  
  .project p {
    color: #666;
  }
  
  .router-link {
    color: #4f4fff;
    text-decoration: none;
  }
  
  .router-link:hover {
    text-decoration: underline;
  }

  .frentes {
    border-bottom: 0px solid #E6ECF8; 
    border-right: 1px solid #E6ECF8;
    padding: 25px !important;
  }
  .frentes:last-of-type {
  border-right: none;
}
</style>
  