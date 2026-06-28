<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Seguridad y salud en el trabajo
      .row.bg-fondo-1(data-aos="fade-left")
        .col-12
          .p-5
            .row.mb-5.justify-content-center.align-items-center
                .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
                  figure.mb-0.text-center
                    img(src='@/assets/curso/temas/t4/img1.png' style="width: 500px").m-auto
                .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-right")
                  p La higiene en la producción bovina comprende el conjunto de prácticas y procedimientos destinados a mantener condiciones sanitarias adecuadas en los animales, las instalaciones, los equipos y el entorno de la explotación pecuaria. Su aplicación permite prevenir enfermedades, proteger la salud de los animales y de las personas, y garantizar la inocuidad de productos como la leche y la carne.
            .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
              .bloque-texto-g__img(
                :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img2.png')})` }")
              .bloque-texto-g__texto.p-4
                p.mb-0 Dentro de las Buenas Prácticas Ganaderas (BPG), la higiene constituye un componente esencial porque contribuye a reducir la carga microbiana, controlar factores de riesgo sanitario y mantener ambientes seguros para la producción.        
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Prevención de riesgos laborales

      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Manejo seguro de equipos e instalaciones

  
</template>

<script>
export default {
  name: 'Tema5',
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
