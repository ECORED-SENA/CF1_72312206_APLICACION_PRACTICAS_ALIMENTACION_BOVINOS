<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 9
        h1 Contingencias

      Separador
      //- Inicio Tema9.1
      .row
        #t_9_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.1 Protocolos de actuación

      Separador
      //- Inicio Tema9.2
      .row
        #t_9_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.2 Manejo de emergencias


</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
