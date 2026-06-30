<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Bienestar animal
      .row.mb-5.justify-content-center.align-items-center
          .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t6/img1.png' style="width: 550px").m-auto
          .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-5(data-aos="fade-right")
            p El bienestar animal se refiere a las condiciones que permiten que los bovinos mantengan un adecuado estado físico, sanitario y comportamental durante todas las etapas de producción. Su finalidad es garantizar que los animales reciban un manejo apropiado, permanezcan saludables y puedan expresar comportamientos propios de la especie.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Un adecuado bienestar animal contribuye a mejorar la productividad, la eficiencia reproductiva, la salud del hato y la calidad de los productos obtenidos. Asimismo, constituye un componente esencial de las Buenas Prácticas Ganaderas (BPG), orientadas hacia una producción bovina responsable y sostenible. El bienestar animal persigue una serie de propósitos encaminados a satisfacer las necesidades básicas de los bovinos y promover condiciones adecuadas para su desarrollo.
      .row.bg-fondo-1(data-aos="fade-left")
        .col-12
          .p-5
            //- Inicio Accordion
            .bg--img_03
              .row.justify-content-center                
                .col-lg-9
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Garantizar acceso permanente a alimento y agua")
                        p Favorecer la nutrición, la hidratación y el mantenimiento de las funciones fisiológicas.
                    .row(titulo="Proporcionar condiciones adecuadas de alojamiento y confort")
                        p Promover ambientes seguros y apropiados para el descanso y la protección climática.
                    .row(titulo="Prevenir enfermedades y lesiones")
                        p Mantener un adecuado estado sanitario y reducir pérdidas productivas.
                    .row(titulo="Reducir situaciones de estrés y miedo")
                        p Favorecer comportamientos normales y disminuir alteraciones fisiológicas.
                    .row(titulo="Promover un manejo humanitario y responsable")
                        p Fortalecer el respeto por los animales y el uso de prácticas adecuadas de manejo.
                  //- Fin Accordion
                .col-lg-3 
                  figure(data-aos="zoom-in")
                    img(src="@/assets/curso/temas/t6/img3.png", alt="").img400.m-auto
            p(data-aos="fade-left") El cumplimiento de estos objetivos contribuye a mejorar la calidad de vida de los bovinos y a optimizar el desempeño del sistema productivo.
            Separador
            //- Inicio Tema6.1
            .row
              #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 6.1 Características del bienestar animal
            p(data-aos="fade-left") Para mantener condiciones adecuadas de bienestar, es necesario controlar los factores que afectan la salud, el comportamiento y la productividad de los bovinos.  La identificación y prevención de situaciones adversas permiten disminuir riesgos sanitarios y favorecer el confort animal: 
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
                              img(src='@/assets/curso/temas/t6/tarjeta01_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Hambre y sed
                            p.text-start.text-center Disminuyen el crecimiento, la producción y el estado general de salud.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta01_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Dolor y enfermedad
                            p.text-start.text-center Afectan el bienestar, la productividad y el desempeño fisiológico.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta01_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Estrés y miedo
                            p.text-start.text-center Alteran el comportamiento y reducen la eficiencia productiva.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta01_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Incomodidad
                            p.text-start.text-center Limita el descanso y afecta el confort animal.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta01_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Maltrato
                            p.text-start.text-center Genera lesiones, miedo y deterioro del bienestar.
            p(data-aos="fade-left") La prevención de estos factores constituye una responsabilidad permanente dentro de los sistemas de producción bovina.
      Separador
      //- Inicio Tema6.2
      .row
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Principios fundamentales del bienestar animal
      p El bienestar animal se fundamenta en las Cinco Libertades, reconocidas internacionalmente como base para el manejo responsable de los animales y como referencia para la implementación de las Buenas Prácticas Ganaderas.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .p-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Libre de hambre y sed
                            p.text-center Acceso continuo a alimento y agua de calidad.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Libre de incomodidad
                            p.text-center Instalaciones limpias, seguras y confortables.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Libre de dolor, lesiones y enfermedades
                            p.text-center Programas sanitarios preventivos y atención oportuna.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Libre para expresar su comportamiento natural
                            p.text-center Espacio suficiente para desplazarse e interactuar con otros animales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Libre de miedo y estrés
                            p.text-center Manejo tranquilo, respetuoso y libre de maltrato.
            //- Fin Carrusel
            p(data-aos="fade-left") Estas libertades orientan las decisiones relacionadas con la alimentación, la sanidad, las instalaciones y el manejo diario del hato.
      .row.justify-content-center.align-items-center
          .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t6/img4.png' style="width: 550px").m-auto
          .col-12.col-lg-8.order-2.order-lg-1.bg-color-8.p-5(data-aos="fade-right")
            p El bienestar animal depende de la interacción de diversos factores relacionados con la alimentación, la salud, el alojamiento y las prácticas de manejo implementadas dentro de la explotación. La atención integral de estos aspectos favorece la salud, la productividad y la calidad de vida de los bovinos.
    
      Separador
      //- Inicio Tema6.3
      .row
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.3 Buenas prácticas de manejo bovino 
      p(data-aos="fade-left") El manejo de los animales debe realizarse de forma calmada y segura, evitando procedimientos que generen dolor, miedo o estrés innecesario. La capacitación del personal y la aplicación de protocolos adecuados son fundamentales para garantizar el bienestar del hato.
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .p-5              
            .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
              .col-lg-10.bg-color-4.p-4.mb-0.d-flex.align-items-center
                p.mb-0 A continuación, se presenta un pódcast sobre las principales recomendaciones de manejo y los beneficios del bienestar animal en bovinos, orientados a promover prácticas responsables y mejorar la productividad del sistema pecuario.
              .col-lg-2.bg-color-7.d-flex.align-items-center.justify-content-center.p-4
                figure
                  img(src="@/assets/curso/temas/t6/img5.svg", data-aos="zoom-in", style="width: 100px").mx-auto
            //- Inicio Podcast
            .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-5(data-aos="fade-left")
              .row.g-0.align-items-stretch
                .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
                  .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
                    .row.g-3.align-items-center.w-100
                      .col-md-5.text-center.mb-4.mb-md-0
                        img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                      .col-md-7.ps-md-4
                        h2.mb-3.fw-bold(style="color:#FFF") Pódcast
                        .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                          h5.mb-3.fw-bold Bienestar animal en bovinos.
                          TarjetaAudio.color-primario(
                            texto="" 
                            :audio="podcast1"
                            @audio-hover="mostrarIndicadorTarjetaAudio = false"
                          )
                            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")                      
                .col-12.col-lg-5.d-flex.ps-lg-4
                  figure.mb-0.w-100
                    img.h-100.w-100(src='@/assets/curso/temas/t6/img6.png' alt='' style="object-fit: cover;")
            //- Fin Podcast
            p(data-aos="fade-left") Las Buenas Prácticas Ganaderas promueven un manejo basado en el respeto por los animales, garantizando condiciones adecuadas de alimentación, salud, alojamiento y manejo.
            .row.justify-content-center.align-items-stretch.g-0(data-aos="fade")
              .col-lg-10.bg-color-4.p-4.mb-0.d-flex.align-items-center
                p.mb-0 En este sentido, el bienestar animal debe entenderse como un componente transversal del sistema de producción bovina. La integración de medidas relacionadas con nutrición, sanidad, infraestructura y manejo humanitario favorece la salud del hato y contribuye a la obtención de mejores resultados productivos.
              .col-lg-2.bg-color-7.d-flex.align-items-center.justify-content-center.p-4
                figure
                  img(src="@/assets/curso/temas/t6/img5.svg", data-aos="zoom-in", style="width: 100px").mx-auto

</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema6',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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
