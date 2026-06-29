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
      p(data-aos="fade-left") La prevención de riesgos laborales busca disminuir la ocurrencia de accidentes y enfermedades ocupacionales mediante la identificación de peligros y la adopción de medidas de control apropiadas. Las actividades pecuarias pueden exponer a los trabajadores a diferentes situaciones de riesgo que deben gestionarse de manera preventiva:
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
                          img(src='@/assets/curso/temas/t5/tarjeta02_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Golpes y patadas
                            p.text-center Generan lesiones físicas de diversa gravedad.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Contacto con productos químicos
                            p.text-center Puede ocasionar intoxicaciones o irritaciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Sobreesfuerzo físico
                            p.text-center Favorece la aparición de problemas musculares y osteoarticulares.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Manejo de animales agresivos
                            p.text-center Incrementa el riesgo de accidentes laborales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Exposición biológica
                            p.text-center Puede ocasionar enfermedades zoonóticas.
            //- Fin Carrusel
            p(data-aos="fade-left") La identificación temprana de estos riesgos permite establecer estrategias orientadas a disminuir su impacto sobre la salud de los trabajadores.            
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Medidas preventivas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La prevención efectiva requiere la participación activa del personal y la implementación permanente de acciones de control.
      .row.bg-fondo-1(data-aos="fade-left")
        .col-12
          .p-5      
            //- Inicio Accordion
            .bg--img_03
              .row.justify-content-center
                .col-lg-3 
                  figure(data-aos="zoom-in")
                    img(src="@/assets/curso/temas/t5/img4.png", alt="").img400.m-auto
                .col-lg-9
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Capacitación permanente")
                        p Fortalecer los conocimientos y habilidades para realizar labores seguras.
                    .row(titulo="Señalización de áreas de riesgo")
                        p Informar y advertir sobre los peligros presentes en la explotación.
                    .row(titulo="Manejo adecuado de los animales")
                        p Disminuir la probabilidad de accidentes durante las actividades pecuarias.
                    .row(titulo="Uso correcto de equipos y herramientas")
                        p Evitar lesiones derivadas de una utilización inadecuada.
                    .row(titulo="Implementación de protocolos de emergencia")
                        p Facilitar una respuesta organizada ante situaciones imprevistas.
                  //- Fin Accordion
            p(data-aos="fade-left") La aplicación sistemática de estas medidas contribuye a fortalecer la cultura de prevención y a promover ambientes de trabajo más seguros dentro de la producción bovina.
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Manejo seguro de equipos e instalaciones
      .row.mb-5.justify-content-center.align-items-center
          .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t5/img5.png' style="width: 500px").m-auto
          .col-12.col-lg-8.order-2.order-lg-1.bg-color-8.p-4(data-aos="fade-right")
            p El manejo seguro de equipos e instalaciones es fundamental para proteger la integridad de los trabajadores y garantizar el adecuado desarrollo de las actividades productivas. Un equipo en buen estado reduce el riesgo de accidentes y mejora la eficiencia del trabajo dentro de la explotación bovina. Para garantizar un uso seguro, todos los equipos, herramientas e instalaciones deben inspeccionarse periódicamente, mantenerse en condiciones adecuadas y utilizarse únicamente para la función para la cual fueron diseñados.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Requisitos de seguridad para equipos e instalaciones
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La siguiente tabla resume las principales condiciones que deben cumplir los equipos e instalaciones para favorecer un entorno laboral seguro.
      //- Inicio Tabla
      .row.justify-content-center.mt-5.mb-5
        .col-lg-10.col-md-auto
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 3.
            span  Componentes fundamentales para el manejo integral en los sistemas de producción bovina
          .tabla-a
            table
              thead
                tr
                  th(style="width: 20%") Requisito
                  th(style="width: 50%") Explicación
                  th(style="width: 30%") Importancia
              tbody
                tr
                  td Buen estado estructural
                  td Los equipos deben estar firmes, completos y sin daños que afecten su funcionamiento.
                  td Evita accidentes y garantiza un manejo seguro.
                tr
                  td Ausencia de bordes cortantes
                  td Las superficies no deben presentar puntas o elementos que puedan causar heridas.
                  td Previene lesiones durante las labores diarias.
                tr
                  td Mantenimiento preventivo
                  td Consiste en revisar, reparar y ajustar los equipos antes de que presenten fallas.
                  td Reduce averías y tiempos de inactividad.
                tr
                  td Fácil limpieza
                  td Los materiales deben permitir su adecuada conservación y mantenimiento.
                  td Favorece condiciones apropiadas de operación.
                tr
                  td Uso adecuado según su función
                  td Cada equipo debe emplearse únicamente para la actividad para la cual fue diseñado.
                  td Evita daños, accidentes y mal funcionamiento.
      //- Fin Tabla
      p(data-aos="fade-left") El cumplimiento de estos requisitos fortalece la seguridad operativa y favorece la continuidad de las actividades productivas.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Beneficios del mantenimiento preventivo
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El mantenimiento preventivo consiste en realizar inspecciones periódicas para detectar oportunamente desgastes, daños o fallas que puedan afectar la seguridad y el rendimiento de los equipos. 
      .row.bg-fondo-1(data-aos="fade-left")
        .col-12
          .p-5        
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-12.col-lg-10
                .overflow-hidden.shadow
                  .row.g-0.align-items-stretch                    
                    .col-12.col-md-7.col-lg-7.p-4.p-lg-5.text-start.bg-color-8.d-flex.flex-column.justify-content-center
                      p Su implementación aporta múltiples beneficios al sistema productivo.
                      ul.lista-ul.color-vinotinto-custom.mb-0
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Prevención de accidentes laborales: reduce riesgos durante las actividades pecuarias. 
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Disminución de fallas mecánicas: evita daños inesperados y tiempos de inactividad. 
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Prolongación de la vida útil: favorece el aprovechamiento de equipos e instalaciones. 
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Reducción de costos: disminuye gastos asociados con reparaciones y reemplazos. 
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Mayor rendimiento operativo: garantiza el adecuado funcionamiento de la explotación.
                    .col-12.col-md-5.col-lg-5.position-relative
                      figure.mb-0.h-100.w-100
                        img(src="@/assets/curso/temas/t5/img6.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")                  
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Buenas prácticas para el manejo seguro
            //- Título nivel 3 - Imagen
            p(data-aos="fade-left") Para conservar los equipos e instalaciones en condiciones óptimas, se recomienda implementar las siguientes acciones:
            .row.justify-content-center.align-items-stretch.gx-4.gy-5.mb-5(data-aos="fade-right") 
              .col-12.col-lg-9
                .row.gx-4.gy-tarjetas.h-100
                  .col-12.col-sm-6.col-md-4.tarjeta-icono-col
                    .tarjeta-icono.text-center
                      .tarjeta-icono__img-wrapper
                        img.tarjeta-icono__img(src="@/assets/curso/temas/t5/tarjeta02_3.svg" alt="")
                      p.mb-0 Realizar inspecciones periódicas de corrales, mangas, bretes y cercas.
                  .col-12.col-sm-6.col-md-4.tarjeta-icono-col
                    .tarjeta-icono.text-center
                      .tarjeta-icono__img-wrapper
                        img.tarjeta-icono__img(src="@/assets/curso/temas/t5/tarjeta02_3.svg" alt="")
                      p.mb-0 Limpiar los equipos cuando sea necesario.
                  .col-12.col-sm-6.col-md-4.tarjeta-icono-col
                    .tarjeta-icono.text-center
                      .tarjeta-icono__img-wrapper
                        img.tarjeta-icono__img(src="@/assets/curso/temas/t5/tarjeta02_3.svg" alt="")
                      p.mb-0 Reparar inmediatamente piezas dañadas o desgastadas.
                  .col-12.col-sm-6.col-md-4.tarjeta-icono-col
                    .tarjeta-icono.text-center
                      .tarjeta-icono__img-wrapper
                        img.tarjeta-icono__img(src="@/assets/curso/temas/t5/tarjeta02_3.svg" alt="")
                      p.mb-0 Mantener herramientas organizadas en lugares seguros.
                  .col-12.col-sm-6.col-md-4.tarjeta-icono-col
                    .tarjeta-icono.text-center
                      .tarjeta-icono__img-wrapper
                        img.tarjeta-icono__img(src="@/assets/curso/temas/t5/tarjeta02_3.svg" alt="")
                      p.mb-0 Capacitar al personal sobre el uso correcto de los equipos.
                  .col-12.col-sm-6.col-md-4.tarjeta-icono-col
                    .tarjeta-icono.text-center
                      .tarjeta-icono__img-wrapper
                        img.tarjeta-icono__img(src="@/assets/curso/temas/t5/tarjeta02_3.svg" alt="")
                      p.mb-0 Utilizar elementos de protección personal durante las labores de mantenimiento.
              .col-12.col-sm-8.col-md-6.col-lg-3
                .banner-mantenimiento.h-100.position-relative.rounded-3.overflow-hidden
                  img(src="@/assets/curso/temas/t5/img7.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
            p(data-aos="fade-left") La aplicación de estas medidas contribuye a fortalecer la seguridad operativa, optimizar el uso de los recursos disponibles y promover ambientes de trabajo más seguros dentro de la producción bovina.
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
