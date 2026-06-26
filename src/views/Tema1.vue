<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Especie animal
      .row.bg-fondo-1(data-aos="fade-left")
        .col-12
          .p-5
            .row.mb-5.justify-content-center.align-items-center
                .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
                  figure.mb-0.text-center
                    img(src='@/assets/curso/temas/t1/img1.png' style="width: 500px").m-auto
                .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-right")
                  p La especie bovina corresponde al conjunto de animales rumiantes domésticos pertenecientes al género Bos, utilizados principalmente para la producción de leche, carne, reproducción y trabajo dentro de los sistemas pecuarios. Los bovinos constituyen una de las especies de mayor importancia económica y alimentaria debido a su capacidad de transformar alimentos fibrosos, como pastos y forrajes, en proteína de alto valor biológico destinada al consumo humano.
            .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
              .bloque-texto-g__img(
                :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img2.png')})` }")
              .bloque-texto-g__texto.p-4
                p.mb-0 La producción bovina moderna debe desarrollarse bajo principios de sostenibilidad, bienestar animal, bioseguridad e inocuidad alimentaria, garantizando condiciones que favorezcan la salud, la productividad y la calidad de vida de los animales. Para ello, las Buenas Prácticas Pecuarias promueven una adecuada alimentación, el acceso permanente al agua, instalaciones seguras y un manejo sanitario preventivo.
            p(data-aos="fade-left") Estos principios orientan el desarrollo de sistemas de producción más eficientes y responsables, encaminados a proteger la salud animal y humana, favorecer el uso adecuado de los recursos disponibles y garantizar la obtención de productos inocuos y de calidad.
            Separador
            //- Inicio Tema1.1
            .row
              #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 1.1 Características generales
            p(data-aos="fade-left") A continuación, se presenta un video sobre las características generales de los bovinos, en el que se describen sus principales adaptaciones fisiológicas, su comportamiento, sus necesidades nutricionales y los aspectos fundamentales para su manejo dentro de los sistemas de producción pecuaria.
            .row.justify-content-center.align-items-center
              .col-lg-12
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      Separador
      //- Inicio Tema2.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Clasificación de los bovinos
      p(data-aos="fade-left") Los bovinos pueden clasificarse de acuerdo con diferentes criterios técnicos, productivos y zootécnicos. Esta clasificación facilita el establecimiento de programas adecuados de alimentación, manejo sanitario, reproducción y producción, ajustados a las características y necesidades de cada animal.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación según la aptitud productiva
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") De acuerdo con su finalidad productiva, los bovinos se clasifican en lecheros, de carne y doble propósito. Cada grupo presenta características particulares que determinan sus requerimientos nutricionales y las prácticas de manejo más apropiadas:
      //- Inicio Tarjetas
      .row.justify-content-center.mt-5(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-color-5.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t1/tarjeta01_1.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Bovinos lecheros
                p.mb-0 Están especializados en la producción de leche y requieren dietas altamente balanceadas, con elevados niveles de energía, proteína, minerales y agua. Razas como Holstein, Jersey y Pardo Suizo presentan alta producción láctea y demandan estrictos programas de manejo sanitario, ordeño higiénico y prevención de mastitis.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-color-5.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t1/tarjeta01_2.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Bovinos de carne
                p.mb-0 Se destinan principalmente a la producción cárnica. Se caracterizan por presentar mayor desarrollo muscular, eficiente conversión alimenticia y rápida ganancia de peso. Entre las razas más utilizadas se encuentran Angus, Hereford y Brahman.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.bg-color-5.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t1/tarjeta01_3.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Bovinos doble propósito
                p.mb-0 Se utilizan tanto para la producción de leche como de carne. Son frecuentes en sistemas tropicales debido a su rusticidad, adaptabilidad y menores costos de producción.        
          //- Fin Tarjetas
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación según la edad y etapa de desarrollo
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La clasificación por edad permite establecer programas adecuados de alimentación, manejo sanitario, reproducción y producción, de acuerdo con las necesidades fisiológicas de cada etapa del desarrollo.      
      //- Slid eshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Terneros
                p Corresponden a los bovinos desde el nacimiento hasta el destete. Durante esta etapa es fundamental el suministro oportuno de calostro dentro de las primeras horas de vida para proporcionar inmunidad pasiva y disminuir el riesgo de enfermedades neonatales. Requieren manejo sanitario estricto, alimentación adecuada y condiciones higiénicas que favorezcan su crecimiento y supervivencia.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Destetos
                p Son animales que han finalizado el consumo de leche materna y comienzan una alimentación basada principalmente en pastos, forrajes y suplementos. En esta etapa se busca desarrollar el sistema digestivo ruminal y favorecer el crecimiento corporal.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Novillos
                p Son animales jóvenes destinados a producción de carne, levante, ceba o reproducción. Requieren suplementación nutricional adecuada para favorecer el desarrollo muscular, la ganancia de peso y una buena condición corporal.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Vacas
                p Son hembras adultas destinadas a producción de leche, reproducción o doble propósito. Necesitan manejo nutricional balanceado, control sanitario y programas reproductivos que permitan mantener la productividad y el bienestar animal.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Toros
                p Son machos adultos seleccionados genéticamente por fertilidad, capacidad reproductiva y características productivas. Deben mantenerse en adecuada condición corporal, con alimentación balanceada y control sanitario permanente para garantizar la eficiencia reproductiva.                                
      //- Fin Slideshow
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación según el origen racial
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El origen genético determina características productivas, reproductivas, nutricionales y de adaptación al ambiente. La selección adecuada de la raza permite optimizar los sistemas de producción de leche, carne o doble propósito, de acuerdo con las condiciones climáticas y los objetivos de la explotación ganadera.
      //- Inicio Tarjetas
      .row.justify-content-center.mt-5(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-6.mb-4.d-flex.flex-column
          .tarjeta.rounded-4.h-100.bg-color-6.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t1/tarjeta03_1.png', alt='').w-100
            .p-5.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.mb-4.text-white Bos <i>taurus</i>
                p.mb-3.text-white Corresponde a las razas bovinas originarias de Europa, adaptadas principalmente a climas templados y fríos. Se caracterizan por su alta capacidad productiva en leche y carne, excelente conversión alimenticia y rápido crecimiento. Son animales que responden favorablemente a sistemas de producción tecnificados con adecuada nutrición y manejo sanitario. Sin embargo, presentan menor tolerancia a las altas temperaturas, a la humedad elevada y a la presión parasitaria propia de las regiones tropicales.
                p.mb-0.text-white  Entre las razas más representativas se encuentran Holstein, Jersey, Pardo Suizo, Angus, Hereford y Simmental.
        .col-12.col-sm-9.col-md-6.col-lg-6.mb-4.d-flex.flex-column
          .tarjeta.rounded-4.h-100.bg-color-7.border.overflow-hidden.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t1/tarjeta03_2.png', alt='').w-100
            .p-5.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.mb-4 Bos <i>indicus</i>
                p.mb-3 Comprende las razas <i>cebuínas</i> originarias del sur de Asia, ampliamente utilizadas en regiones tropicales y subtropicales. Se distinguen por su rusticidad, capacidad de adaptación a altas temperaturas, resistencia a parásitos externos e internos y habilidad para aprovechar forrajes de menor calidad nutricional. Son animales ideales para sistemas extensivos y condiciones ambientales exigentes.
                p.mb-0  Entre las principales razas se encuentran Brahman, Gyr, Guzerá, Nelore e Indubrasil.
          //- Fin Tarjetas
        p(data-aos="fade-left") La siguiente tabla compara las principales características físicas y productivas de ambos grupos raciales: 
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .p-5
            //- Inicio Tabla
            .row.justify-content-center
              .col-lg-10.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 1.
                  span  Comparación de las características entre <i>Bos taurus</i> y <i>Bos indicus</i>
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Característica
                        th(style="width: 30%") <i>Bos taurus</i>
                        th(style="width: 40%") <i>Bos indicus</i>
                    tbody
                      tr
                        td Origen
                        td Europa
                        td Asia (India y regiones tropicales)
                      tr
                        td Adaptación climática
                        td Climas templados y fríos
                        td Climas cálidos y tropicales
                      tr
                        td Tamaño corporal
                        td Grande a mediano
                        td Grande y robusto
                      tr
                        td Pelaje
                        td Más largo y abundante
                        td Corto, fino y brillante
                      tr
                        td Coloración
                        td Variable según la raza
                        td Generalmente gris, blanco o rojizo
                      tr
                        td Giba (joroba)
                        td Ausente
                        td Presente sobre la cruz
                      tr
                        td Orejas
                        td Cortas a medianas
                        td Largas y pendulares
                      tr
                        td Papada
                        td Poco desarrollada
                        td Muy desarrollada
                      tr
                        td Piel
                        td Más gruesa y menos móvil
                        td Suelta, flexible y móvil
                      tr
                        td Resistencia al calor
                        td Baja a moderada
                        td Alta
                      tr
                        td Resistencia a parásitos
                        td Menor
                        td Mayor
                      tr
                        td Producción de leche
                        td Alta en razas especializadas
                        td Moderada, excepto en razas lecheras como Gyr
                      tr
                        td Producción de carne
                        td Excelente calidad y marmoleo
                        td Buena producción y rusticidad
                      tr
                        td Conversión alimenticia
                        td Alta eficiencia en sistemas intensivos
                        td Buena eficiencia en sistemas extensivos
                      tr
                        td Temperamento
                        td Generalmente dócil
                        td Más activo y alerta
                      tr
                        td Longevidad productiva
                        td Moderada
                        td Alta
                      tr
                        td Capacidad de pastoreo
                        td Buena
                        td Muy buena en condiciones difíciles
                //- FinTabla
      p(data-aos="fade-left") Desde el enfoque de las Buenas Prácticas Ganaderas (BPG) y del bienestar animal, la selección racial debe realizarse considerando la adaptación al ambiente, la disponibilidad de alimento, las condiciones sanitarias y los objetivos productivos de la explotación, garantizando la salud, el confort y la productividad sostenible de los bovinos.
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t1/img3.png' style="width: 500px").m-auto
        .col-12.col-lg-7.order-2.order-lg-1.p-4(data-aos="fade-right")
          .bg-full-width.mt-4
            .px-4.px-md-5.pb-md-3
              .titulo-con-imagen(data-aos="fade-right")                     
                h3.titulo-nivel3 Cruces raciales
          p Los cruces raciales resultan de la combinación genética entre bovinos <i>Bos taurus</i> y <i>Bos indicus</i>, con el propósito de integrar las características productivas de ambas líneas raciales. Esta estrategia busca obtener animales con mayor eficiencia productiva, mejor adaptación a diferentes condiciones ambientales, mayor resistencia a enfermedades y un mejor aprovechamiento de los recursos alimenticios disponibles.
          p.p-4.bg-color-4 Los bovinos cruzados suelen presentar ventajas conocidas como vigor híbrido, reflejadas en una mayor capacidad de crecimiento, fertilidad, longevidad productiva y adaptación a sistemas de producción tropicales. Gracias a estas características, los cruces raciales son ampliamente utilizados en explotaciones de carne, leche y doble propósito. 
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t1/img4.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")               
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-8.d-flex.flex-column.justify-content-center
                p Entre los principales beneficios de los cruces raciales se destacan los siguientes:                
                ul.lista-puntos-verdes.mb-0.mt-3
                  li.mb-2
                    p.mb-0 <b>Adaptación climática:</b> mayor tolerancia a climas cálidos y tropicales.
                  li.mb-2
                    p.mb-0 <b>Producción:</b> mejora la producción de leche y carne.
                  li.mb-2
                    p.mb-0 <b>Sanidad:</b> incrementa la resistencia a enfermedades y parásitos.
                  li.mb-2
                    p.mb-0 <b>Reproducción:</b> favorece el desempeño reproductivo y la fertilidad.
                  li.mb-2
                    p.mb-0 <b>Longevidad:</b> prolonga la vida productiva de los animales.
                  li.mb-2
                    p.mb-0 <b>Aprovechamiento forrajero:</b> mejora el uso de pasturas y recursos alimenticios.
                  li.mb-0
                    p.mb-0 <b>Rendimiento alimenticio:</b> incrementa la conversión de nutrientes.
      p(data-aos="fade-left") Algunos de los cruces más utilizados en la producción bovina son:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .p-5
            //- Inicio Tabla
            .row.justify-content-center
              .col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 2.
                  span  Principales cruces raciales utilizados en la producción bovina
                .tabla-a.mb-5
                  table
                    thead
                      tr
                        th(style="width: 50%") Cruce racial
                        th(style="width: 50%") Composición genética
                    tbody
                      tr
                        td <i>Brangus</i>
                        td <i>Brahman × Angus</i>
                      tr
                        td <i>Braford</i>
                        td <i>Brahman × Hereford</i>
                      tr
                        td <i>Girolando</i>
                        td <i>Holstein × Gyr</i>
                      tr
                        td Pardo Suizo × <i>Brahman</i>
                        td Pardo Suizo × <i>Brahman</i>
                      tr
                        td <i>Simbrah</i>
                        td <i>Simmental × Brahman</i>
              p(data-aos="fade-left") La selección del tipo de cruce debe realizarse considerando las condiciones climáticas, la disponibilidad de alimento, los objetivos productivos y los principios de bienestar animal establecidos en las Buenas Prácticas Ganaderas.
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación según el sistema de producción
            //- Título nivel 3 - Imagen
            p(data-aos="fade-left") Los bovinos y sus cruces pueden explotarse bajo sistemas intensivos, semi intensivos o extensivos, dependiendo del nivel de tecnificación, el manejo alimenticio, la infraestructura disponible y los recursos de la explotación:
            //- Inicio Accordion
            .bg--img_03.mt-5
              .row.justify-content-center
                .col-lg-3 
                  figure(data-aos="zoom-in")
                    img(src="@/assets/curso/temas/t1/img5.png", alt="").img400.m-auto
                .col-lg-9
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Intensivo")
                        p Los animales permanecen en confinamiento o espacios reducidos, con alimentación controlada, suplementación constante y alta tecnificación. Busca maximizar la productividad mediante manejo nutricional, sanitario y reproductivo especializado.              
                    .row(titulo="Semi intensivo")
                        p Combina el pastoreo con suplementación alimenticia estratégica. Los animales permanecen parte del tiempo en potreros y reciben alimentos adicionales, como concentrados, ensilajes o suplementos minerales.
                    .row(titulo="Extensivo")
                        p Se desarrolla principalmente en grandes áreas de pastoreo natural, donde los bovinos obtienen la mayor parte de su alimentación directamente del forraje disponible. Requiere menor infraestructura, aunque depende de la disponibilidad climática y forrajera.                   
                  //- Fin Accordion
      p(data-aos="fade-left") Independientemente del sistema utilizado, toda explotación bovina debe cumplir principios fundamentales relacionados con el bienestar animal, la sostenibilidad y las Buenas Prácticas Pecuarias:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .p-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta04_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Bienestar animal
                            p Garantiza condiciones adecuadas de manejo, alimentación, comodidad y reducción del estrés.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta04_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Bioseguridad
                            p Incluye medidas preventivas para evitar enfermedades y contaminación dentro de la explotación pecuaria.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta04_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Alimentación adecuada
                            p Debe suministrarse de acuerdo con los requerimientos nutricionales y la etapa productiva de los animales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta04_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Manejo sanitario
                            p Comprende vacunación, desparasitación, control de enfermedades y monitoreo permanente de la salud animal.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta04_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Protección ambiental
                            p Busca reducir el impacto ambiental mediante el manejo adecuado de residuos, la conservación del suelo y el uso responsable de los recursos naturales.                        
            //- Fin Carrusel
            p(data-aos="fade-left") La comprensión de estas clasificaciones permite seleccionar estrategias de manejo acordes con las características de cada explotación, promoviendo sistemas de producción bovina eficientes, sostenibles y orientados al bienestar animal.
      Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Etapas productivas bovinas
      p(data-aos="fade-left") Las etapas productivas bovinas corresponden a los diferentes periodos fisiológicos y productivos del animal. Cada una presenta requerimientos nutricionales, sanitarios y de manejo específicos que deben ser cubiertos para garantizar la productividad, la salud y el bienestar animal a lo largo de la vida productiva del bovino.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Etapa de cría
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-10.bg-color-8.p-4.mb-0.d-flex.align-items-center
          p.mb-0 La etapa de cría comprende desde el nacimiento hasta el destete. Durante este periodo se busca garantizar la supervivencia, el crecimiento inicial y el fortalecimiento inmunológico del ternero. Una de las prácticas más importantes es el suministro de calostro durante las primeras seis horas de vida, ya que proporciona anticuerpos esenciales para la protección frente a enfermedades infecciosas.
        .col-lg-2.bg-color-7.d-flex.align-items-center.justify-content-center.p-4
          figure
            img(src="@/assets/curso/temas/t1/img6.svg", data-aos="zoom-in", style="width: 100px").mx-auto
      .bg-full-width.mt-4
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen(data-aos="fade-right")                     
            h3.titulo-nivel3 Buenas Prácticas Pecuarias en terneros neonatos
      p(data-aos="fade-left") Las Buenas Prácticas Pecuarias orientadas a los terneros neonatos buscan disminuir el riesgo de enfermedades y mortalidad durante los primeros días de vida, favoreciendo un adecuado desarrollo.
      //- Slid eshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta05_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Desinfección del ombligo
                p Debe realizarse inmediatamente después del nacimiento utilizando soluciones antisépticas, como yodo, para prevenir infecciones bacterianas y enfermedades umbilicales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Alojamiento limpio y seco
                p El ternero debe permanecer en un ambiente higiénico, ventilado y libre de humedad para disminuir la contaminación y prevenir enfermedades respiratorias y digestivas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Monitoreo sanitario permanente
                p Consiste en evaluar continuamente el estado de salud del animal para detectar tempranamente signos de enfermedad, debilidad o alteraciones fisiológicas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Alimentación adecuada
                p Incluye el suministro oportuno de calostro y, posteriormente, una dieta balanceada que garantice energía, proteína y nutrientes necesarios para el crecimiento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Prevención de enfermedades neonatales
                p Comprende medidas de bioseguridad, higiene, vacunación y manejo destinadas a disminuir la aparición de diarreas, septicemias y enfermedades respiratorias.
      //- Fin Slideshow
      p(data-aos="fade-left") La implementación adecuada de estas prácticas favorece el desarrollo de animales más sanos y con mejores perspectivas productivas.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Etapa de levante
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-10.bg-color-8.p-4.mb-0.d-flex.align-items-center
          p.mb-0 La etapa de levante corresponde al periodo de crecimiento posterior al destete. Su objetivo principal es favorecer el desarrollo muscular, óseo y digestivo del animal. Durante esta fase, la alimentación debe incluir pastos de buena calidad, suplementación mineral y un adecuado aporte energético y proteico.
        .col-lg-2.bg-color-7.d-flex.align-items-center.justify-content-center.p-4
          figure
            img(src="@/assets/curso/temas/t1/img7.svg", data-aos="zoom-in", style="width: 100px").mx-auto
      //- Título nivel 4
      .bg-full-width.mt-4
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen(data-aos="fade-right")
            h3.titulo-nivel3 Factores que se deben evitar durante la etapa de levante
      //- Título nivel 4
      p(data-aos="fade-left") El cumplimiento de las Buenas Prácticas Pecuarias durante esta etapa contribuye al adecuado crecimiento y al bienestar animal:      
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .p-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta06_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Sobrepastoreo
                            p Disminuye la disponibilidad y calidad del forraje, afecta la nutrición animal y deteriora el suelo y las praderas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta06_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Deficiencias nutricionales
                            p La falta de energía, proteína, vitaminas o minerales retrasa el crecimiento, disminuye la inmunidad y afecta el desarrollo productivo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta06_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Hacinamiento
                            p Genera estrés, agresividad, competencia por alimento y mayor riesgo de enfermedades.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta06_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Estrés por movilización
                            p El manejo inadecuado y el transporte excesivo disminuyen el bienestar, reducen el consumo alimenticio y afectan la ganancia de peso.
            //- Fin Carrusel
            p(data-aos="fade-left") La prevención de estos factores favorece un desarrollo corporal adecuado y prepara a los animales para las siguientes etapas productivas.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Etapa de ceba
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-10.bg-color-8.p-4.mb-0.d-flex.align-items-center
          p.mb-0 La etapa de ceba tiene como objetivo maximizar la ganancia diaria de peso y mejorar la conversión alimenticia hasta alcanzar el peso comercial. Para ello, se emplean dietas energéticas basadas en forrajes de alta calidad, ensilajes y concentrados, ajustadas a las necesidades nutricionales del animal.
        .col-lg-2.bg-color-7.d-flex.align-items-center.justify-content-center.p-4
          figure
            img(src="@/assets/curso/temas/t1/img8.svg", data-aos="zoom-in", style="width: 100px").mx-auto
      .row.justify-content-center.mb-5(data-aos="fade-right")        
        .col-12
          .row.g-0.align-items-stretch.justify-content-center
            .col-12.col-md-4.position-relative
              figure.mb-0.h-100.w-100
                img(src="@/assets/curso/temas/t1/img9.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")
            .col-12.col-md-4.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
              p.mb-0 Un manejo adecuado durante esta etapa contribuye a optimizar la eficiencia productiva y la rentabilidad del sistema pecuario.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Etapa de producción láctea
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-10.bg-color-8.p-4.mb-0.d-flex.align-items-center
          p.mb-0 La producción de leche exige elevados requerimientos nutricionales debido al gasto energético asociado a la síntesis láctea. Las vacas lecheras deben recibir una alimentación balanceada con un adecuado aporte de energía, proteína, fibra efectiva, minerales y agua.
        .col-lg-2.bg-color-7.d-flex.align-items-center.justify-content-center.p-4
          figure
            img(src="@/assets/curso/temas/t1/img10.svg", data-aos="zoom-in", style="width: 100px").mx-auto
      //- Título nivel 4
      .bg-full-width.mt-4
        .px-4.px-md-5.pb-md-3
          .titulo-con-imagen(data-aos="fade-right")
            h3.titulo-nivel3 Buenas Prácticas Pecuarias durante el ordeño
      //- Título nivel 4
      p(data-aos="fade-left") Estas prácticas contribuyen a garantizar la calidad higiénica de la leche, prevenir enfermedades y mantener el bienestar animal:
      //- Slid eshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta07_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Rutinas de ordeño higiénico
                p Deben realizarse bajo condiciones limpias y organizadas para evitar la contaminación de la leche y las enfermedades mamarias.              
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta07_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Prevención de mastitis
                p Incluye medidas sanitarias y de manejo destinadas a disminuir las infecciones de la glándula mamaria y mantener la salud de la ubre.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta07_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Limpieza de equipos
                p Los implementos y equipos de ordeño deben lavarse y desinfectarse correctamente para evitar la proliferación de microorganismos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta07_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Manejo tranquilo
                p El trato adecuado y libre de maltrato disminuye el estrés y favorece una mejor producción de leche.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta07_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Reducción del estrés térmico
                p Se debe proporcionar sombra, ventilación y agua suficiente para disminuir las afectaciones asociadas a las altas temperaturas.
      //- Fin Slideshow
      p(data-aos="fade-left") La aplicación constante de estas prácticas favorece la obtención de leche inocua y contribuye al bienestar de las vacas en producción.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Etapa reproductiva
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
        .col-lg-10.bg-color-8.p-4.mb-0.d-flex.align-items-center
          p.mb-0 La etapa reproductiva comprende el manejo de hembras gestantes y machos reproductores. Su objetivo es garantizar la fertilidad, el adecuado desarrollo fetal y el nacimiento de crías sanas.  La alimentación debe contribuir al mantenimiento de una adecuada condición corporal y aportar minerales esenciales para la reproducción, como calcio, fósforo, selenio y zinc. 
        .col-lg-2.bg-color-7.d-flex.align-items-center.justify-content-center.p-4
          figure
            img(src="@/assets/curso/temas/t1/img11.svg", data-aos="zoom-in", style="width: 100px").mx-auto
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                
              .col-12.col-md-5.col-lg-4.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t1/img12.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")               
              .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
                p El manejo reproductivo debe incluir los siguientes componentes:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Diagnóstico periódico:</b> permite evaluar el estado reproductivo y detectar oportunamente posibles alteraciones.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Programas sanitarios preventivos:</b> contribuyen a prevenir enfermedades que afecten la reproducción y la gestación. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Control nutricional:</b> garantiza el suministro adecuado de nutrientes para mantener la fertilidad y el desarrollo fetal. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Bienestar animal:</b> favorece condiciones de manejo que reduzcan el estrés y mejoren el desempeño reproductivo. 
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Condiciones adecuadas de alojamiento:</b> proporcionan confort, seguridad y protección durante la gestación y la actividad reproductiva.                  
      p(data-aos="fade-left") El reconocimiento de las diferentes etapas productivas bovinas permite establecer estrategias de manejo acordes con los requerimientos fisiológicos de cada fase, promoviendo sistemas de producción más eficientes, sostenibles y orientados al bienestar animal.

      

                    


</template>
<script>
export default {
  name: 'Tema1',
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
