<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 8
        h1 Manejo de residuos
      .row.mb-5.justify-content-center.align-items-center
          .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t8/img1.png' style="width: 550px").m-auto
          .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-5(data-aos="fade-right")
            p El manejo de residuos comprende las actividades de separación, almacenamiento, aprovechamiento y disposición final de los desechos generados en la producción bovina. Su objetivo es prevenir la contaminación ambiental, proteger la salud animal y humana, y garantizar una gestión responsable de los residuos generados durante la actividad pecuaria.
      Separador
      //- Inicio Tema8.1
      .row
        #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.1 Clasificación
      p(data-aos="fade-left") La clasificación de los residuos permite establecer procedimientos apropiados para su manejo, facilitando el aprovechamiento de materiales reutilizables y la disposición segura de aquellos que representan un riesgo para la salud o el ambiente.
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .p-5
            //- Inicio Tabla
            .row.justify-content-center
              .col-lg-10.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-
                  h5 Tabla 8.
                  span  Clasificación de residuos generados en la producción bovina
                .tabla-a.mb-5
                  table
                    thead
                      tr
                        th(style="width: 20%") Tipo de residuo
                        th(style="width: 45%") Ejemplos
                        th(style="width: 50%") Características del manejo
                    tbody
                      tr
                        td Orgánicos
                        td Estiércol, restos de pasto y forrajes.
                        td Pueden aprovecharse mediante compostaje o uso agrícola controlado.
                      tr
                        td Inorgánicos
                        td Plásticos, empaques y cuerdas.
                        td Deben clasificarse para reciclaje o disposición controlada.
                      tr
                        td Biológicos
                        td Agujas, jeringas y material veterinario contaminado.
                        td Requieren recolección diferenciada y manejo especial para evitar riesgos sanitarios.
                      tr
                        td Peligrosos
                        td Medicamentos vencidos, desinfectantes y productos químicos.
                        td Deben almacenarse y entregarse a gestores autorizados para su disposición final.
              p La correcta identificación de cada tipo de residuo facilita su manejo y disminuye el impacto ambiental de la explotación.                        
              Separador
              //- Inicio Tema8.2
              .row
                #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                  h2 8.2 Manejo y disposición
              p(data-aos="fade-left") Para garantizar una adecuada gestión de los residuos, es necesario implementar procedimientos organizados que permitan controlar cada etapa del proceso, desde su generación hasta la disposición final.
      //- Inicio Accordion
      .bg--img_03
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t8/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Separación según el tipo de residuo")
                  p Facilitar el aprovechamiento y evitar la contaminación cruzada.
              .row(titulo="Almacenamiento en recipientes adecuados e identificados")
                  p Garantizar la seguridad durante la acumulación temporal de los residuos.
              .row(titulo="Transporte seguro dentro de la explotación")
                  p Minimizar riesgos para trabajadores, animales y ambiente.
              .row(titulo="Aprovechamiento de residuos orgánicos mediante compostaje")
                  p Transformar desechos orgánicos en materiales útiles para uso agrícola.
              .row(titulo="Disposición final de residuos peligrosos mediante gestores autorizados")
                  p Cumplir la normativa vigente y prevenir afectaciones ambientales y sanitarias.
            //- Fin Accordion
        p.mb-5 La implementación sistemática de estas actividades favorece una gestión responsable de los desechos generados en la explotación bovina.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                    
              .col-12.col-md-7.col-lg-7.p-4.p-lg-5.text-start.bg-color-8.d-flex.flex-column.justify-content-center
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Reducción de la contaminación del suelo y del agua:</b> protege los recursos naturales. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Disminución de la proliferación de vectores:</b> mejora las condiciones higiénicas de la explotación. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Prevención de enfermedades en animales y trabajadores:</b> reduce los riesgos sanitarios. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Cumplimiento de las disposiciones ambientales:</b> favorece una gestión responsable de la actividad pecuaria.
              .col-12.col-md-5.col-lg-5.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t8/img3.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
      p(data-aos="fade-left") Estos beneficios evidencian la importancia de incorporar programas de manejo de residuos dentro de la producción bovina.
      Separador
      //- Inicio Tema8.3
      .row
        #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.3 Normativa ambiental 
      p(data-aos="fade-left") Las explotaciones bovinas deben desarrollar sus actividades en cumplimiento de las disposiciones ambientales y sanitarias aplicables, con el propósito de minimizar los impactos derivados de la producción pecuaria y proteger la salud pública.
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
                              img(src='@/assets/curso/temas/t8/tarjeta01_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Manejo de aguas residuales
                            p.text-start.text-center Evitar la contaminación de cuerpos de agua y proteger los ecosistemas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t8/tarjeta01_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Protección de fuentes hídricas
                            p.text-start.text-center Promover el uso responsable del recurso hídrico.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t8/tarjeta01_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Disposición segura de residuos peligrosos
                            p.text-start.text-center Reducir riesgos para la salud humana, animal y ambiental.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t8/tarjeta01_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Aplicación de medidas de bioseguridad
                            p.text-start.text-center Prevenir la propagación de agentes contaminantes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t8/tarjeta01_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Conservación del medio ambiente
                            p.text-start.text-center Promover prácticas responsables dentro de la producción pecuaria.
            p(data-aos="fade-left") El cumplimiento de estas disposiciones contribuye a fortalecer la responsabilidad ambiental de la explotación. En conclusión, el manejo de residuos debe asumirse como un proceso integral dentro de la producción bovina. La adecuada clasificación, el almacenamiento seguro, el aprovechamiento de materiales reutilizables y la disposición final conforme a la normativa vigente favorecen una gestión ambiental responsable y reducen los riesgos asociados con la actividad pecuaria.
</template>

<script>
export default {
  name: 'Tema8',
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
