<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Seguridad y salud en el trabajo
      .row.bg-fondo-1(data-aos="fade-left")
        .col-12
          .pt-3.pb-5.px-5
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
            .row.justify-content-center.mb-0(data-aos="fade-right")
              .col-12.col-lg-10
                .overflow-hidden.shadow
                  .row.g-0.align-items-stretch                    
                    .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-8.d-flex.flex-column.justify-content-center
                      p Para alcanzar un adecuado nivel higiénico, toda explotación bovina debe implementar acciones orientadas a preservar la salud del hato y la calidad de los procesos productivos:
                      ul.lista-ul.color-vinotinto-custom.mb-0
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span <b>Limpieza permanente de instalaciones y equipos:</b> eliminar suciedad y disminuir fuentes de contaminación.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span <b>Desinfección periódica de áreas de trabajo:</b> reducir la presencia de microorganismos patógenos.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span <b>Control de plagas y vectores:</b> disminuir la transmisión de enfermedades.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span <b>Protección de fuentes de agua y alimentos:</b> evitar contaminaciones que afecten la salud animal.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span <b>Prevención de enfermedades infecciosas:</b> reducir la incidencia de patologías en el hato.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span <b>Aplicación de medidas de bioseguridad:</b> impedir el ingreso y la propagación de agentes infecciosos.
                    .col-12.col-md-5.col-lg-4.position-relative
                      figure.mb-0.h-100.w-100
                        img(src="@/assets/curso/temas/t4/img3.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
              p.mt-5(data-aos="fade-left") La implementación conjunta de estas acciones fortalece la inocuidad de la producción y favorece sistemas pecuarios más seguros.                        
              Separador
              //- Inicio Tema4.1
              .row
                #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                  h2 4.1 Técnicas de higiene en producción bovina
              p(data-aos="fade-left") Las técnicas de higiene buscan eliminar suciedad, materia orgánica y microorganismos capaces de afectar la salud animal y la productividad del sistema. Su correcta aplicación constituye una herramienta preventiva fundamental dentro de las Buenas Prácticas Ganaderas.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Limpieza y desinfección
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-10.mb-0.d-flex.align-items-center
          p La limpieza consiste en retirar suciedad, estiércol, restos de alimento, polvo y materia orgánica presentes en instalaciones y equipos. Por su parte, la desinfección corresponde a la aplicación de productos químicos o físicos destinados a destruir microorganismos patógenos una vez finalizada la limpieza. <br><br> Para que la desinfección sea efectiva, primero debe realizarse una limpieza completa, ya que la materia orgánica disminuye la acción de la mayoría de los desinfectantes.          
        .col-lg-2.bg-color-10.d-flex.align-items-center.justify-content-center.p-4
          figure
            img(src="@/assets/curso/temas/t4/img4.svg", data-aos="zoom-in", style="width: 80px").mx-auto
      //- Título nivel 4      
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Etapas del proceso higiénico
      //- Título nivel 4
      p(data-aos="fade-left") El proceso higiénico debe desarrollarse de forma secuencial para garantizar resultados efectivos: 
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Remoción de residuos
                            p Consiste en el retiro de estiércol, lodo y restos de alimento. Su finalidad es disminuir la contaminación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Lavado
                            p Comprende la aplicación de agua y detergentes pecuarios para eliminar suciedad y materia orgánica.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Enjuague
                            p Permite retirar los residuos químicos remanentes del proceso de lavado, evitando contaminación posterior.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Desinfección
                            p Consiste en la aplicación de desinfectantes autorizados con el propósito de reducir la presencia de microorganismos patógenos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Secado
                            p Corresponde a la eliminación de la humedad residual para evitar la proliferación de bacterias y hongos.
            //- Fin Carrusel
            p(data-aos="fade-left") El cumplimiento riguroso de estas etapas incrementa la eficacia de las medidas sanitarias implementadas en la explotación.
      //- Título nivel 4      
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Principales desinfectantes utilizados
      //- Título nivel 4
      p(data-aos="fade-left") La selección del desinfectante debe realizarse considerando el tipo de instalación, el nivel de contaminación, los microorganismos presentes y las recomendaciones del fabricante.
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .p-5
            //- Inicio Tabla
            .row.justify-content-center
              .col-lg-10.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 4.
                  span Principales desinfectantes utilizados en la producción bovina y sus aplicaciones
                .tabla-a.mb-5
                  table
                    thead
                      tr
                        th(style="width: 20%") Desinfectante
                        th(style="width: 40%") Acción principal
                        th(style="width: 40%") Aplicación
                    tbody
                      tr
                        td Yodo
                        td Antiséptico y bactericida.
                        td Desinfección de pezones y heridas.
                      tr
                        td Amonios cuaternarios
                        td Bactericida y fungicida.
                        td Instalaciones y equipos.
                      tr
                        td Hipoclorito de sodio
                        td Amplio espectro antimicrobiano.
                        td Pisos, corrales y superficies.
                      tr
                        td Cal sanitaria
                        td Reduce humedad y microorganismos.
                        td Corrales y áreas de residuos.
                      tr
                        td Clorhexidina
                        td Antiséptico seguro.
                        td Instrumental y procedimientos sanitarios.
              //- Título nivel 4      
              .titulo-con-imagen.mb-4(data-aos="fade-right")
                h3.titulo-nivel4 Control de plagas y vectores
              //- Título nivel 4
              p(data-aos="fade-left") Las plagas representan un importante riesgo sanitario porque pueden transmitir enfermedades y contaminar alimentos, agua e instalaciones.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta00_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Moscas
                            p.text-start.text-center Transmisión mecánica de agentes infecciosos y contaminación de alimentos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta00_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Garrapatas
                            p.text-start.text-center Diseminación de enfermedades parasitarias.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta00_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Roedores
                            p.text-start.text-center Contaminación de alimentos e instalaciones y transmisión de patógenos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta00_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Escarabajos
                            p.text-start.text-center Deterioro de las condiciones higiénicas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta00_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Mosquitos
                            p.text-start.text-center Participación en la transmisión de algunas enfermedades.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t4/img5.png', style="width: 500px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                    
              .col-12.col-md-7.col-lg-7.p-4.p-lg-5.text-start.bg-color-8.d-flex.flex-column.justify-content-center
                p Para disminuir la presencia de plagas y vectores, se recomienda implementar las siguientes medidas preventivas:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Retiro frecuente de estiércol:</b> eliminar sitios favorables para la proliferación de vectores.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Eliminación de aguas estancadas:</b> reducir criaderos de insectos.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Correcto almacenamiento de alimentos:</b> evitar la atracción de plagas.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Instalación de trampas y cebos controlados:</b> disminuir poblaciones de vectores.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Mantenimiento de áreas limpias y secas:</b> limitar condiciones favorables para su desarrollo.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Uso responsable de productos autorizados:</b> controlar plagas sin generar riesgos innecesarios.
              .col-12.col-md-5.col-lg-5.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t4/img6.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
      //- Título nivel 4      
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Limpieza de corrales
      //- Título nivel 4
      p(data-aos="fade-left") Los corrales deben mantenerse libres de acumulaciones excesivas de materia orgánica para reducir riesgos sanitarios y conservar condiciones adecuadas para los animales.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Estiércol
                            p.text-start.text-center Reduce la proliferación de microorganismos y vectores.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Orina acumulada
                            p.text-start.text-center Disminuye la humedad excesiva y los malos olores.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Restos de alimento
                            p.text-start.text-center Evita fermentaciones y contaminación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Lodo
                            p.text-start.text-center Reduce el riesgo de enfermedades podales y accidentes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Material contaminado
                            p.text-start.text-center Limita la propagación de agentes patógenos.
            p(data-aos="fade-left") Un corral limpio contribuye a disminuir la incidencia de enfermedades, favorece el confort de los animales y mejora las condiciones sanitarias de la explotación. La aplicación sistemática de las técnicas de higiene constituye una estrategia preventiva indispensable para proteger la salud animal y humana, garantizar la inocuidad de los productos pecuarios y fortalecer la sostenibilidad de los sistemas de producción bovina.
            Separador
            //- Inicio Tema4.2
            .row
              #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 4.2 Procedimientos higiénicos esenciales
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t4/img7.png' style="width: 500px").m-auto
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-8(data-aos="fade-right")
          p.p-4 Los procedimientos de higiene deben ejecutarse de manera rutinaria y registrarse adecuadamente para garantizar la trazabilidad sanitaria exigida por las Buenas Prácticas Ganaderas (BPG). La documentación de estas actividades permite verificar el cumplimiento de los programas sanitarios, facilitar los procesos de seguimiento y respaldar las auditorías de certificación. La siguiente tabla presenta los procedimientos básicos que deben desarrollarse dentro de una explotación bovina, así como su frecuencia recomendada y el objetivo que persiguen.
      //- Inicio Tabla
      .row.justify-content-center
        .col-lg-10.col-md-auto
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 5.
            span Procedimientos higiénicos esenciales
          .tabla-a.mb-5
            table
              thead
                tr
                  th(style="width: 30%") Procedimiento
                  th(style="width: 30%") Frecuencia recomendada
                  th(style="width: 40%") Objetivo
              tbody
                tr
                  td Limpieza de corrales
                  td Diaria
                  td Reducir la contaminación y mantener condiciones sanitarias adecuadas.
                tr
                  td Limpieza de comederos
                  td Diaria
                  td Evitar el deterioro y la contaminación del alimento.
                tr
                  td Lavado de bebederos
                  td Diaria
                  td Garantizar la disponibilidad de agua limpia y segura.
                tr
                  td Desinfección de equipos
                  td Periódica
                  td Fortalecer el control sanitario y disminuir la carga microbiana.
                tr
                  td Control de plagas
                  td Programada
                  td Prevenir la aparición y transmisión de enfermedades.
      p(data-aos="fade-left") El registro sistemático de estas actividades facilita la evaluación de los programas de higiene y contribuye al mejoramiento continuo del sistema productivo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Higiene durante la alimentación animal
      //- Título nivel 3 - Imagen      
      p(data-aos="fade-left") La alimentación constituye un punto crítico dentro de la producción bovina, ya que cualquier contaminación puede afectar directamente la salud de los animales y la inocuidad de los productos obtenidos. 
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                    
              .col-12.col-md-7.col-lg-7.p-4.p-lg-5.text-start.bg-color-8.d-flex.flex-column.justify-content-center
                p Las siguientes recomendaciones contribuyen a preservar la calidad sanitaria de los alimentos suministrados al hato.
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Utilizar alimentos de buena calidad nutricional.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Evitar el suministro de alimentos con moho o fermentaciones inadecuadas.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Mantener limpios los comederos y bebederos.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Garantizar agua potable de forma permanente.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Almacenar concentrados y suplementos en lugares secos y ventilados.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Evitar la contaminación cruzada entre alimentos, medicamentos y productos químicos.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span Proteger los alimentos del contacto con roedores, aves e insectos.
              .col-12.col-md-5.col-lg-5.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t4/img8.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")      
      p(data-aos="fade-left") La aplicación de estas recomendaciones fortalece la inocuidad alimentaria y contribuye a mantener la salud del hato.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Requisitos para el almacenamiento de alimentos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El almacenamiento adecuado constituye una medida preventiva esencial para conservar las características nutricionales de los alimentos y evitar pérdidas económicas.
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .p-5      
            .row.justify-content-center.g-4.mb-5(data-aos="fade-right")        
              .col-12.col-sm-6.col-md-4.col-lg-3
                .tarjeta-atributo.h-100
                  .tarjeta-atributo__header.p-3.text-center
                    h4.mb-0 Lugar seco
                  .tarjeta-atributo__body.p-4.text-center
                    p.mb-0 Evita el crecimiento de hongos.
              .col-12.col-sm-6.col-md-4.col-lg-3
                .tarjeta-atributo.h-100
                  .tarjeta-atributo__header.p-3.text-center
                    h4.mb-0 Buena ventilación
                  .tarjeta-atributo__body.p-4.text-center
                    p.mb-0 Reduce la humedad y el exceso de calor.
              .col-12.col-sm-6.col-md-4.col-lg-3
                .tarjeta-atributo.h-100
                  .tarjeta-atributo__header.p-3.text-center
                    h4.mb-0 Protección contra plagas
                  .tarjeta-atributo__body.p-4.text-center
                    p.mb-0 Mantiene la inocuidad de los alimentos.
              .col-12.col-sm-6.col-md-4.col-lg-3
                .tarjeta-atributo.h-100
                  .tarjeta-atributo__header.p-3.text-center
                    h4.mb-0 Rotación de inventarios
                  .tarjeta-atributo__body.p-4.text-center
                    p.mb-0 Evita el deterioro por almacenamiento prolongado.
              .col-12.col-sm-6.col-md-4.col-lg-3
                .tarjeta-atributo.h-100
                  .tarjeta-atributo__header.p-3.text-center
                    h4.mb-0 Separación de productos químicos
                  .tarjeta-atributo__body.p-4.text-center
                    p.mb-0 Previene la contaminación accidental.
              .col-12.col-sm-6.col-md-4.col-lg-3
                .tarjeta-atributo.h-100
                  .tarjeta-atributo__header.p-3.text-center
                    h4.mb-0 Limpieza permanente
                  .tarjeta-atributo__body.p-4.text-center
                    p.mb-0 Conserva la calidad nutricional y sanitaria.    
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos integrados de los programas de higiene
            //- Título nivel 3 - Imagen          
            p.mb-5 Los programas de higiene reúnen diferentes acciones que actúan de manera complementaria dentro del sistema productivo.
            //- Inicio Tabla
            .row.justify-content-center
              .col-lg-10.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 5.
                  span Componentes de higiene y bioseguridad que contribuyen a la sanidad en los sistemas de producción bovina
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Componente
                        th(style="width: 40%") Elementos asociados
                        th(style="width: 40%") Contribución al sistema
                    tbody
                      tr
                        td Limpieza
                        td Corrales, comederos y bebederos.
                        td Reduce fuentes de contaminación.
                      tr
                        td Desinfección
                        td Equipos, instalaciones y herramientas.
                        td Disminuye la presencia de microorganismos.
                      tr
                        td Control de plagas
                        td Moscas, roedores y garrapatas.
                        td Previene la transmisión de enfermedades.
                      tr
                        td Alimentación segura
                        td Agua potable, concentrados inocuos y almacenamiento adecuado.
                        td Garantiza la calidad sanitaria de los alimentos.
      p(data-aos="fade-left") La integración de estos elementos permite desarrollar programas higiénicos organizados y acordes con los principios de las Buenas Prácticas Ganaderas.      
      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Insumos utilizados en los programas de higiene
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t4/img9.png' style="width: 500px").m-auto
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-8(data-aos="fade-right")
          p.p-4 Los programas de higiene requieren el uso de insumos específicos para desarrollar actividades de limpieza, desinfección y control sanitario dentro de la explotación bovina. La selección y utilización adecuada de estos productos favorece la eficacia de los procedimientos higiénicos y contribuye a mantener condiciones sanitarias apropiadas en las áreas de producción. Los productos empleados deben utilizarse siguiendo las recomendaciones del fabricante, respetando las dosis indicadas y aplicando las medidas de seguridad correspondientes para prevenir riesgos y evitar contaminaciones.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Insumos utilizados en los programas de higiene
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") A continuación, se describen algunos de los insumos más utilizados y su función principal dentro de los programas de higiene implementados en los sistemas de producción bovina.
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
                              img(src='@/assets/curso/temas/t4/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Jabones pecuarios
                            p.text-start.text-center Favorecen la remoción de grasa y suciedad.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Detergentes
                            p.text-start.text-center Permiten la limpieza profunda de superficies.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Yodo
                            p.text-start.text-center Se utiliza para antisepsia y desinfección.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Amonios cuaternarios
                            p.text-start.text-center Contribuyen al control de bacterias y hongos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Hipoclorito de sodio
                            p.text-start.text-center Se emplea en procesos de desinfección general.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Cal sanitaria
                            p.text-start.text-center Favorece el control de humedad y microorganismos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Cepillos y escobas
                            p.text-start.text-center Facilitan la remoción mecánica de residuos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Hidrolavadoras
                            p.text-start.text-center Permiten la limpieza eficiente de instalaciones.                                                                                    
            p(data-aos="fade-left") La selección del insumo debe realizarse de acuerdo con el tipo de superficie, el nivel de contaminación y el procedimiento higiénico que se pretenda ejecutar. La adecuada implementación de los programas de higiene contribuye a mantener condiciones sanitarias favorables dentro de la explotación bovina y fortalece la calidad de los procesos desarrollados en el sistema productivo.                            
</template>

<script>
export default {
  name: 'Tema4',
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
