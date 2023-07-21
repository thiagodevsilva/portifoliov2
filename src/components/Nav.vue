<template>
    <nav id="nav" class="navbar is-transparent" role="navigation" aria-label="main navigation" style="padding: 1.2rem 0;">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="@/assets/images/t.png" class="image is-96x96" style="object-fit: contain;" title="Thiago Silva">
                </a>

                <a role="button"
                    class="navbar-burger"
                    :class="{ 'is-active': isActive }"
                    @click="toggleNavbar"  
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample"
                class="navbar-menu"
                :class="{ 'is-active': isActive }"
            >
                <!-- <div class="navbar-start"></div> -->

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a href="https://github.com/thiagodevsilva" target="_blank" style="color: #00bf63; font-weight: 100; font-size: 1em; margin-right: 25px;">
                                Github
                            </a>  
                            <a href="https://www.linkedin.com/in/thiago-silva-a88a61219/" target="_blank" style="color: #00bf63; font-weight: 100; font-size: 1em; margin-right: 25px;">
                                Linkedin
                            </a>  
                            <router-link to="/projetos" style="font-weight: 100; font-size: 1em; margin-right: 25px; color: #00bf63;">
                                Projetos
                            </router-link>

                            <!-- <a class="button is-primary" style="background-color: #00bf63;">
                                <strong>Say Hello!</strong>
                            </a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </nav>
</template>

<script>
export default {
    name: 'NavComp',
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleNavbar() {
            this.isActive = !this.isActive;
        },
    },
}
</script>

<style>
@media screen and (max-width: 1024px) {
  .buttons {
    justify-content: flex-end !important;
  }
}

.router-link-active {    
    font-weight: 600 !important;
    text-decoration: underline; 
}
</style>