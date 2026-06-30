<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Instalaciones y equipos para bovinos
      .row.bg-fondo-1(data-aos="fade-left")
        .col-12
          .pt-3.pb-5.px-5
            .row.mb-5.justify-content-center.align-items-center
              .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
                figure.mb-0.text-center
                  img(src='@/assets/curso/temas/t3/img1.png' style="width: 500px").m-auto
              .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-right")
                p Las instalaciones y equipos bovinos comprenden el conjunto de estructuras, áreas, herramientas y dispositivos utilizados para el manejo, la alimentación, la sanidad, la reproducción y la movilización de los animales dentro de una explotación pecuaria. Su adecuado diseño permite mejorar la productividad, facilitar las labores diarias, garantizar la bioseguridad y promover el bienestar animal.
            p(data-aos="fade-left") De acuerdo con las Buenas Prácticas Ganaderas (BPG), las instalaciones deben ofrecer condiciones que permitan a los bovinos expresar comportamientos propios de la especie, acceder fácilmente al alimento y al agua, descansar en condiciones apropiadas y mantenerse protegidos frente a factores climáticos adversos. Además, deben facilitar los procesos de limpieza, desinfección y manejo sanitario.
            Separador
            //- Inicio Tema3.1
            .row
              #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 3.1 Características de las instalaciones bovinas
            p(data-aos="fade-left") Las instalaciones destinadas a la producción bovina deben construirse bajo criterios técnicos que garanticen la comodidad de los animales, la seguridad de los trabajadores y el cumplimiento de las normas relacionadas con bienestar animal y bioseguridad. Las principales características que deben reunir las instalaciones bovinas y su importancia dentro del sistema productivo se presentan a continuación: 
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                img(src='@/assets/curso/temas/t3/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Seguridad animal y humana
                p Las estructuras deben elaborarse con materiales resistentes, duraderos y libres de elementos que puedan causar lesiones. Los corrales, mangas y bretes deben contar con superficies lisas y trayectos que faciliten el desplazamiento natural de los bovinos. Un diseño seguro reduce fracturas, hematomas y lesiones musculares, además de facilitar procedimientos como vacunación, pesaje, tratamientos veterinarios y movilización.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ventilación adecuada
                p La circulación constante del aire permite mantener condiciones ambientales favorables para la salud animal. Reduce la acumulación de calor y humedad, evita la concentración de gases y disminuye los malos olores. Una adecuada ventilación reduce el estrés térmico, mejora el consumo de alimento y disminuye la aparición de enfermedades respiratorias.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Iluminación
                p Las instalaciones deben aprovechar al máximo la luz natural y complementarse con iluminación artificial cuando sea necesario. Una iluminación adecuada facilita la detección temprana de enfermedades, los procedimientos sanitarios, las actividades de limpieza y la seguridad del personal. Además, evita zonas oscuras que puedan generar miedo o resistencia durante la movilización.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Higiene y facilidad de limpieza
                p Las áreas productivas deben diseñarse para permitir una limpieza eficiente y frecuente. Las superficies deben resistir el lavado continuo, permitir la aplicación de desinfectantes, facilitar la remoción de estiércol y evitar la acumulación de residuos. Estas condiciones disminuyen la presencia de bacterias, hongos, parásitos y vectores transmisores de enfermedades.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Drenaje eficiente
                p Los pisos deben facilitar la evacuación rápida del agua de lavado, la orina, el estiércol y los lodos. Un drenaje adecuado evita la acumulación de humedad, disminuye la aparición de enfermedades podales y contribuye a reducir la contaminación ambiental.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Acceso permanente a agua y alimento
                p Los animales deben disponer continuamente de agua limpia y fresca, alimento suficiente y de calidad, así como espacio adecuado en comederos y bebederos. Esta disponibilidad favorece la digestión, la producción y el bienestar animal, evitando la competencia y el estrés.
      p(data-aos="fade-left") Con el propósito de complementar estas características, es importante reconocer que el diseño de las instalaciones bovinas integra diversos elementos orientados a satisfacer las necesidades fisiológicas, sanitarias y productivas de los animales.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos integrados de las instalaciones bovinas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La organización funcional de las instalaciones debe considerar aspectos relacionados con bienestar animal, alimentación, higiene, seguridad y bioseguridad.
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .p-5
            //- Inicio Tabla
            .row.justify-content-center
              .col-lg-12.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 3.
                  span  Componentes fundamentales para el manejo integral en los sistemas de producción bovina
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Componente
                        th(style="width: 40%") Elementos asociados
                        th(style="width: 40%") Finalidad dentro del sistema productivo
                    tbody
                      tr
                        td Bienestar animal
                        td Confort, descanso, protección climática y reducción del estrés.
                        td Favorecer condiciones adecuadas para la salud física y fisiológica de los bovinos.
                      tr
                        td Alimentación
                        td Comederos, bebederos y acceso permanente al agua.
                        td Garantizar el suministro continuo de nutrientes e hidratación.
                      tr
                        td Higiene
                        td Limpieza, desinfección y manejo de residuos.
                        td Disminuir la contaminación y prevenir enfermedades.
                      tr
                        td Seguridad
                        td Corrales seguros, bretes adecuados y prevención de accidentes.
                        td Proteger a los animales y al personal durante las labores diarias.
                      tr
                        td Bioseguridad
                        td Control sanitario, cuarentenas y prevención de enfermedades.
                        td Evitar el ingreso y la propagación de agentes patógenos dentro de la explotación.
            p.mt-5(data-aos="fade-left") La interacción adecuada de estos elementos permite disponer de instalaciones funcionales, seguras y adaptadas a las necesidades fisiológicas y productivas de los bovinos. De esta manera, las instalaciones dejan de ser únicamente estructuras físicas y se convierten en herramientas estratégicas para promover la productividad, el bienestar animal, la salud del hato y la sostenibilidad de los sistemas de producción bovina.
            Separador
            //- Inicio Tema3.2
            .row
              #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 3.2 Área de alimentación
            .row.justify-content-center.align-items-center
              .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
                figure.mb-0.text-center
                  img(src='@/assets/curso/temas/t3/img2.png' style="width: 500px").m-auto
              .col-12.col-lg-8.order-2.order-lg-1.bg-color-8.p-4(data-aos="fade-right")
                p El área de alimentación corresponde al espacio destinado al suministro de alimento y agua para los bovinos dentro del sistema productivo. Su adecuada organización y mantenimiento favorecen el acceso a los recursos alimenticios, preservan la calidad de los alimentos y contribuyen a la eficiencia alimenticia del hato. A continuación, se describen las condiciones que deben garantizarse en el área de alimentación y los beneficios derivados de su adecuada implementación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Limpieza
                            p.text-start Retiro diario de residuos alimenticios y materiales en descomposición. Evita la contaminación y disminuye el riesgo de enfermedades digestivas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Piso seco
                            p.text-start Previene la acumulación de lodo y humedad en el área. Reduce la aparición de enfermedades podales y favorece el confort animal.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Espacio suficiente
                            p.text-start Permite el acceso simultáneo de todos los animales al alimento. Disminuye la competencia y las conductas agresivas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Bebederos cercanos
                            p.text-start Facilitan la disponibilidad continua de agua. Favorece la digestión, la hidratación y el desempeño productivo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Ventilación
                            p.text-start Mantiene condiciones ambientales adecuadas. Reduce la acumulación de calor y mejora el confort.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta02_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Protección climática
                            p.text-start Incluye el uso de sombra natural, cubiertas u otros sistemas de protección. Disminuye las afectaciones derivadas de condiciones climáticas adversas.
            p(data-aos="fade-left") El cumplimiento de estos requisitos favorece un consumo adecuado de alimento y agua, contribuyendo al mantenimiento de la salud y la productividad de los bovinos.
            //- Fin Carrusel                
            Separador
            //- Inicio Tema3.3
            .row
              #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 3.3 Implementos y accesorios 
            p(data-aos="fade-left") Los implementos y accesorios corresponden a las herramientas de uso cotidiano que facilitan las labores de alimentación, limpieza, movilización y manejo de los animales dentro de la explotación pecuaria. Su adecuado mantenimiento y utilización contribuyen a mejorar la eficiencia operativa y el desarrollo organizado de las actividades productivas. A continuación, se presentan los principales implementos utilizados en la producción bovina, junto con su función y las prácticas recomendadas para su uso: 
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-5.h-100.bg-color-5.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta03_1.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Comederos
                p.mb-0 Suministrar el alimento de manera organizada. Se recomienda mantenerlos limpios y evitar la acumulación de residuos.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-5.h-100.bg-color-5.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta03_2.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Bebederos
                p.mb-0 Proporcionar agua potable. Es importante realizar limpieza periódica y verificar su correcto funcionamiento.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-5.h-100.bg-color-5.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta03_3.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Palas
                p.mb-0 Distribuir alimento y realizar labores de limpieza. Deben mantenerse limpias y en buen estado.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-5.h-100.bg-color-5.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta03_4.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Carretillas
                p.mb-0 Transportar materiales e insumos. Se recomienda evitar sobrecargas y efectuar mantenimiento periódico.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-5.h-100.bg-color-5.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta03_5.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Baldes
                p.mb-0 Transportar agua e insumos. Deben utilizarse exclusivamente para la función asignada.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-5.h-100.bg-color-5.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta03_6.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Cercas
                p.mb-0 Delimitar áreas dentro de la explotación. Es necesario revisar periódicamente daños o deterioros.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-5.h-100.bg-color-5.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta03_7.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Mangas
                p.mb-0 Facilitar la movilización de animales. Deben mantenerse en condiciones seguras para favorecer desplazamientos organizados.                                                                
          //- Fin Tarjetas
      p(data-aos="fade-left") El adecuado mantenimiento del área de alimentación y de los implementos utilizados favorece la eficiencia de las labores diarias y contribuye al funcionamiento organizado del sistema de producción bovino.
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-6.p-4.rounded-4           
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/t3/icono.svg', style="width: 80px")          
            .flex-grow-1.text-center.text-lg-start
              h4.mb-2.text-white Manuales y manejo técnico en producción bovina.
              p.mb-0.text-white Se invita a leer el documento <b>"Manuales y manejo técnico en producción bovina"</b>, donde se aborda la importancia de implementar manuales y protocolos técnicos relacionados con la alimentación, la sanidad, la higiene y la bioseguridad en las explotaciones bovinas.
            .mt-3.mt-lg-0.ps-lg-4            
              a.btn.btn-custom-download.w-buttons.d-flex.align-items-center.justify-content-center.p-3(:href="obtenerLink('/downloads/Anexos/Anexo.pdf')" target="_blank")
                span.fw-bold.me-2 Descargar
                i.fas.fa-file-download




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
