<template>
  <nav id="nav" class="navbar is-transparent" role="navigation" aria-label="main navigation" style="padding: 1.2rem 0;">
    <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="@/assets/images/t.png" class="image is-96x96" style="object-fit: contain;" title="Thiago Silva">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <!-- <div class="navbar-start"></div> -->

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary" style="background-color: #00bf63;">
                            <strong>Say Hello!</strong>
                        </a>                    
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    </nav>
</template>

<script>
export default {
    name: 'NavComp'
}
</script>

<style>

</style>