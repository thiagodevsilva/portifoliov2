<template>
  <div id="updateBox">
    <section class="hero is-white has-text-centered">
      <ul>
        <li v-for="projeto in projetos" :key="projeto.id">
          <h2>{{ projeto.descricao }}</h2>
          <p>{{ projeto.detalhes }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default{
      name: 'updateBox',
      props: {
        projetos: {
          type: Array,
          default: () => [],
        },
      },
      methods: {
        listarProjetos() {
          console.log('Listar projetos');
        }
      },
      created() {
        this.listarProjetos();
      }
  }
</script>

<style>

</style>