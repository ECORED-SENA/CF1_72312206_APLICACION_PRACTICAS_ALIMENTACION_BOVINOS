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
                    img(src='@/assets/curso/temas/t5/img1.png' style="width: 500px").m-auto
                .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-right")
                  p La producción bovina implica la exposición a riesgos físicos, biológicos, químicos y ergonómicos que pueden afectar la salud y la integridad de los trabajadores. Por esta razón, la implementación de medidas de seguridad y salud en el trabajo constituye un componente fundamental para prevenir accidentes laborales, reducir enfermedades ocupacionales y promover condiciones seguras durante el desarrollo de las actividades pecuarias.
            .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
              .bloque-texto-g__img(
                :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img2.png')})` }")
              .bloque-texto-g__texto.p-4
                p.mb-0 Uno de los aspectos más importantes es el uso adecuado de elementos de protección personal, los cuales actúan como barrera frente a los diferentes factores de riesgo presentes en la explotación bovina. A continuación, se presentan los principales elementos de protección personal utilizados en la producción bovina y la función que cumplen durante el desarrollo de las actividades diarias, contribuyendo a la seguridad de los trabajadores y a la prevención de riesgos laborales.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .p-5
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Botas
                            p.text-start.text-center Protegen frente a la humedad, golpes, resbalones y contacto con materiales contaminados.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Guantes
                            p.text-start.text-center Disminuyen el riesgo de lesiones y reducen la exposición durante el manejo de animales, equipos y sustancias químicas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Overol
                            p.text-start.text-center Proporciona protección corporal frente a suciedad y agentes biológicos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Tapabocas
                            p.text-start.text-center Previene la inhalación de partículas, polvo y aerosoles presentes durante determinadas labores.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta01_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Gafas de protección
                            p.text-start.text-center Protegen los ojos frente a salpicaduras, partículas y sustancias potencialmente peligrosas.
            p(data-aos="fade-left") Estos elementos deben utilizarse de acuerdo con la actividad desarrollada y mantenerse en condiciones adecuadas para garantizar su efectividad. 
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                    
              .col-12.col-md-7.col-lg-7.p-4.p-lg-5.text-start.bg-color-8.d-flex.flex-column.justify-content-center
                p Entre las labores que requieren el uso de elementos de protección personal se encuentran las siguientes:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Alimentación de los animales.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Limpieza y desinfección de instalaciones.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Manejo sanitario.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Aplicación de medicamentos.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Manejo y disposición de residuos.                 
              .col-12.col-md-5.col-lg-5.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t5/img3.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")            
      p(data-aos="fade-left") El uso adecuado de estos implementos contribuye a proteger la salud del trabajador y a disminuir la exposición a riesgos ocupacionales.
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
