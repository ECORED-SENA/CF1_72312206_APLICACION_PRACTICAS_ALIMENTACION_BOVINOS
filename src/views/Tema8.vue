<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 8
        h1 Manejo de residuos

      Separador
      //- Inicio Tema8.1
      .row
        #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.1 Clasificación

      Separador
      //- Inicio Tema8.2
      .row
        #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.2 Manejo y disposición

      Separador
      //- Inicio Tema8.3
      .row
        #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.3 Normativa ambiental 
</template>

<script>
export default {
  name: 'Tema3',
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
