<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 9
        h1 Contingencias
      .row.mb-5.justify-content-center.align-items-center
          .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t9/img1.png' style="width: 550px").m-auto
          .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-5(data-aos="fade-right")
            p Las contingencias son eventos imprevistos que pueden afectar la salud de los animales, la seguridad de los trabajadores, el bienestar animal o el funcionamiento normal de la explotación bovina. Una respuesta rápida, organizada y basada en protocolos previamente establecidos permite reducir pérdidas productivas, económicas y sanitarias.
      p(data-aos="fade-left") La preparación frente a situaciones de emergencia constituye un componente fundamental de las Buenas Prácticas Ganaderas (BPG), ya que fortalece la bioseguridad, protege la salud pública y contribuye a la continuidad de las actividades productivas.
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .p-5
            Separador
            //- Inicio Tema9.1
            .row
              #t_9_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 9.1 Protocolos de actuación
            p(data-aos="fade-left") Ante cualquier contingencia, la explotación debe contar con procedimientos definidos que permitan actuar de manera segura, eficiente y coordinada, minimizando las consecuencias derivadas del evento.
            .row.justify-content-center.align-items-stretch.gx-4.gy-5.mb-3.contenedor-flex-cards(data-aos="fade-right") 
              .col-12.col-lg-9.d-flex
                .row.gx-4.gy-tarjetas.w-100.m-0
                  .col-12.col-sm-6.col-md-4.col-lg-4.mb-4
                    .tarjeta-atributo.h-100
                      .tarjeta-atributo__header.p-3.text-center
                        h4.mb-0 Enfermedades
                      .tarjeta-atributo__body.p-4.text-center
                        p.mb-0 Aislar los animales afectados y solicitar evaluación veterinaria.
                  .col-12.col-sm-6.col-md-4.col-lg-4.mb-4
                    .tarjeta-atributo.h-100
                      .tarjeta-atributo__header.p-3.text-center
                        h4.mb-0 Accidentes
                      .tarjeta-atributo__body.p-4.text-center
                        p.mb-0 Brindar primeros auxilios y reportar el incidente de acuerdo con los procedimientos establecidos.
                  .col-12.col-sm-6.col-md-4.col-lg-4.mb-4
                    .tarjeta-atributo.h-100
                      .tarjeta-atributo__header.p-3.text-center
                        h4.mb-0 Escapes de animales
                      .tarjeta-atributo__body.p-4.text-center
                        p.mb-0 Realizar la contención mediante métodos seguros, evitando el maltrato y reduciendo el estrés.
                  .col-12.col-sm-6.col-md-4.col-lg-4.mb-3
                    .tarjeta-atributo.h-100
                      .tarjeta-atributo__header.p-3.text-center
                        h4.mb-0 Emergencias climáticas
                      .tarjeta-atributo__body.p-4.text-center
                        p.mb-0 Proteger a los animales y trasladarlos a zonas seguras cuando sea necesario.
                  .col-12.col-sm-6.col-md-4.col-lg-4.mb-3
                    .tarjeta-atributo.h-100
                      .tarjeta-atributo__header.p-3.text-center
                        h4.mb-0 Incendios
                      .tarjeta-atributo__body.p-4.text-center
                        p.mb-0 Activar el plan de emergencia y evacuar de forma organizada a personas y animales.
                  .col-12.col-sm-6.col-md-4.col-lg-4.mb-3
                    .tarjeta-atributo.h-100
                      .tarjeta-atributo__header.p-3.text-center
                        h4.mb-0 Fallas en el suministro de agua o alimento
                      .tarjeta-atributo__body.p-4.text-center
                        p.mb-0 Implementar fuentes alternativas que garanticen el bienestar y la continuidad de la producción.
              .col-12.col-sm-8.col-md-6.col-lg-3.d-flex
                .banner-mantenimiento.w-100
                  img(src="@/assets/curso/temas/t9/img2.png" alt="")
      p(data-aos="fade-left") La aplicación oportuna de estos protocolos contribuye a reducir los riesgos asociados con cada contingencia y favorece una respuesta eficiente dentro de la explotación pecuaria.
      Separador
      //- Inicio Tema9.2
      .row
        #t_9_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.2 Manejo de emergencias
      p(data-aos="fade-left") Toda explotación bovina debe contar con un plan de contingencia que permita responder adecuadamente ante situaciones de riesgo. Este plan debe ser conocido por el personal, mantenerse actualizado y revisarse periódicamente para garantizar su efectividad.
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t9/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Comunicación inmediata con el personal responsable
                p Coordinar la respuesta y facilitar la toma de decisiones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t9/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Atención veterinaria oportuna
                p Proteger la salud y el bienestar de los animales cuando la situación lo requiera.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t9/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aplicación de medidas de bioseguridad
                p Evitar la propagación de enfermedades y reducir riesgos sanitarios.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t9/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Protección de trabajadores, visitantes y animales
                p Preservar la integridad física de todas las personas y de los bovinos involucrados.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t9/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Registro y seguimiento de los eventos ocurridos
                p Facilitar la trazabilidad, la evaluación y la implementación de acciones correctivas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t9/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Garantía del bienestar animal durante la emergencia
                p Minimizar el estrés, el sufrimiento y las afectaciones derivadas de la contingencia.
      //- Fin Slideshow
      p(data-aos="fade-left") La ejecución organizada de estas acciones permite fortalecer la capacidad de respuesta de la explotación y disminuir el impacto de los eventos adversos.
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .p-5
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia de los planes de contingencia
            //- Título nivel 3 - Imagen
            p(data-aos="fade-left") La planificación de contingencias permite anticiparse a diferentes escenarios de riesgo y establecer estrategias que favorezcan la protección integral del sistema productivo.
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-12.col-lg-10
                .overflow-hidden.shadow
                  .row.g-0.align-items-stretch
                    .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center                
                      ul.lista-ul.color-vinotinto-custom.mb-0
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span <b>Reducción de pérdidas económicas y productivas:</b> disminuye las afectaciones sobre la rentabilidad y la continuidad de la explotación.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span <b>Protección de la salud animal y humana:</b> favorece la prevención y el control de eventos que comprometan la salud.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span <b>Disminución de riesgos sanitarios y ambientales:</b> reduce la propagación de enfermedades y los impactos sobre el entorno.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span <b>Continuidad de las actividades productivas:</b> permite mantener la operatividad del sistema ante situaciones adversas.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span <b>Cumplimiento de los principios de bienestar animal y de las BPG:</b> garantiza respuestas responsables y acordes con la normativa aplicable.
                    .col-12.col-md-5.col-lg-4.position-relative
                      figure.mb-0.h-100.w-100
                        img(src="@/assets/curso/temas/t9/img3.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
            p(data-aos="fade-left") La adecuada preparación frente a emergencias fortalece la seguridad, la bioseguridad y la sostenibilidad de los sistemas de producción bovina. Asimismo, promueve una cultura preventiva basada en la planificación, la capacitación del personal y la mejora continua, elementos esenciales para afrontar contingencias de manera eficiente y responsable.
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
