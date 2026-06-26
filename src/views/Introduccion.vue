<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p(data-aos="fade-left") Las contingencias en la producción bovina corresponden a situaciones imprevistas que pueden alterar el funcionamiento normal de la explotación pecuaria y afectar la salud de los animales, la seguridad de los trabajadores, el bienestar animal y la continuidad de los procesos productivos. Estos eventos pueden originarse por enfermedades, accidentes, fenómenos climáticos, incendios, fallas en el suministro de recursos esenciales o cualquier otra circunstancia que represente un riesgo para el sistema de producción.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las contingencias en la producción bovina corresponden a situaciones imprevistas que pueden alterar el funcionamiento normal de la explotación pecuaria y afectar la salud de los animales, la seguridad de los trabajadores, el bienestar animal y la continuidad de los procesos productivos. Estos eventos pueden originarse por enfermedades, accidentes, fenómenos climáticos, incendios, fallas en el suministro de recursos esenciales o cualquier otra circunstancia que represente un riesgo para el sistema de producción.
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-10.bg-color-1.p-4.mb-0.d-flex.align-items-center
          p.mb-0 Asimismo, el manejo adecuado de las contingencias fortalece la bioseguridad, promueve el bienestar animal y contribuye a la sostenibilidad de la explotación bovina. La implementación de medidas preventivas, el seguimiento de los eventos ocurridos y la mejora continua de los procedimientos permiten desarrollar sistemas productivos más resilientes, capaces de afrontar situaciones adversas sin comprometer la salud del hato ni la calidad de los procesos pecuarios.
        .col-lg-2.bg-color-3.d-flex.align-items-center.justify-content-center.p-4
          figure
            img(src="@/assets/curso/temas/intro/img2.svg", data-aos="zoom-in", style="width: 80px").mx-auto


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
