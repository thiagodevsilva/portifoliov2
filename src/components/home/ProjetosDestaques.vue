<template>
  <div id="projetosDestaques" style="">
    <div class="hero is-medium">
        <div style="padding: 30px 0; text-align: center; color: #555; font-size: 30px; background-color: #FFF;">
            <h2>MAIN PROJECTS</h2>
        </div>
        <div class="" style="color: #FFF; display: flex;">           
            <div ref="observeMeEfl" class="columns" style="margin: 0 auto; width: 100%; max-width: 1200px;">
                
                <div class="column is-two-fifths" style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: auto;">
                    <span class="title" style="color: #FFF; text-align: center;">
                        EFL BRAZIL                        
                    </span>
                    <span class="subtitle" style="color: #FFF; text-align: center;">
                        Portal do aluno e gerenciador de exercícios.
                    </span>
                </div>
                
                <div class="column auto">
                    <carousel :items-to-show="1" :wrapAround="true" :transition="500">
                        <slide :key="1">
                            <div class="">
                                <div>
                                    <img src="@/assets/images/eflbrazil/efl.png">
                                </div>
                            </div>
                        </slide>

                        <slide :key="2">
                            <div class="">
                                <div>
                                    <img src="@/assets/images/eflbrazil/efl-capa.png">
                                </div>
                            </div>
                        </slide>

                        <slide :key="3">
                            <div class="">
                                <div>
                                    <img src="@/assets/images/eflbrazil/efl-portal-tbs.png">
                                </div>
                            </div>
                        </slide>

                        <slide :key="4">
                            <div class="">
                                <div>
                                    <img src="@/assets/images/eflbrazil/efle.png">
                                </div>
                            </div>
                        </slide>

                        <slide :key="5">
                            <div class="">
                                <div>
                                    <img src="@/assets/images/eflbrazil/efle-capa.png">
                                </div>
                            </div>
                        </slide>

                        <slide :key="6">
                            <div class="">
                                <div>
                                    <img src="@/assets/images/eflbrazil/efle-listas.png">
                                </div>
                            </div>
                        </slide>

                        <template #addons>
                            <navigation />
                            <pagination />
                        </template>
                        
                    </carousel> 
                </div>
            </div>            
        </div>
        <div style="padding: 10px 0; text-align: center; color: #555; font-size: 18px; background-color: #FFF;">
            <a style="text-decoration: none; color: #555; margin: auto; display: flex; justify-content: center; align-items: center;" href="#">
                <img src="@/assets/images/list-icon.png" style="width: 40px;" alt="">
                <router-link to="/projetos">Veja mais projetos de Thiago</router-link>
            </a>
        </div>        
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { db } from '../../services/firebase.js';
import { doc, getDoc } from 'firebase/firestore'; 

export default {
    name: 'projetosDestaques',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    data() {
        return {
            observer: null,
            carouselOptions: {
                slidesToShow: 2,
                slidesToScroll: 1,
                touchDrag: true,
                mouseDrag: true,
                dir: 'ltr'                
            },
            mainProjects: {},
            EFL: {},
        }
    },
    mounted() {
        this.carregarMainProjects();
        this.observarTela();
    },
    methods: {
        async carregarMainProjects() {
            try {
                const documento = await getDoc(doc(db, 'projetos', 'ZNOLhJUEFaajKukzDXMJ'));

                if (documento.exists()) {
                    this.EFL = documento.data();
                }

            } catch (error) {
                console.log('Erro ao carregar Main Projects:', error);
            }

        },
        async observarTela() {
            try {
                this.observer = new IntersectionObserver(
                    (entries) => {
                        if (entries[0].isIntersecting) {
                            console.log('teste');                            
                        } 
                    },
                    {
                        threshold: 0.5
                    }
                );

                this.observer.observe(this.$refs.observeMeEfl);

            } catch (error) {
                console.log('Erro na funcao observar tela: ', error);
            }
        },
    }
}
</script>

<style>

</style>