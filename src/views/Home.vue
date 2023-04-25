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
              Since beginning my journey as a freelance designer over 11 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
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
              <div class="column" style="border-bottom: 0px solid #E6ECF8; border-right: 1px solid #E6ECF8;">
                <img src="@/assets/images/front.png" style="width: 70px;">
                <h1 class="title is-size-4 is-spaced">Front-end</h1>
                <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <p class="list-title has-text-primary has-text-weight-normal">
                  Things I enjoy designing:
                </p>
                <p>UX, UI, Web, Apps, Logos</p>
                <p class="list-title has-text-primary has-text-weight-normal">
                  Design Tools:
                </p>
                <ul style="list-style: none; margin: 0; padding: 0;">
                  <li>Affinity Designer</li>
                  <li>Figma</li>
                  <li>Font Awesome</li>
                  <li>Pen &amp; Paper</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                </ul>
              </div>
              <div class="column">
                <img src="@/assets/images/back.png" style="width: 70px;">
                <h1 class="title is-size-4 is-spaced">Back-end</h1>
              </div>
              <div class="column">
                <img src="@/assets/images/db.png" style="width: 70px;">
                <h1 class="title is-size-4 is-spaced">Database</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section projects is-medium is-white has-text-centered">
      <div class="container">
        <h1>My Recent Work</h1>
      </div>
    </section>
  </div>
</template>
  
<script>
  export default {
    name: 'HomeView',
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
</style>
  