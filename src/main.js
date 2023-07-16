import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/Home.vue'
import AboutView from './views/About.vue'
import ProjetosView from './views/Projetos.vue'
import ProjectForm from './views/ProjectForm.vue'
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css'

const routes = [
    { 
        path: '/',
        component: HomeView 
    },
    { 
        path: '/projetos',
        component: ProjetosView 
    },
    { 
        path: '/projetos/insert',
        component: ProjectForm 
    },
    { 
        path: '/projetos/edit/:id',
        component: ProjectForm,
        name: 'editProject' 
    },
    { 
        path: '/about',
        component: AboutView 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .mount('#app')