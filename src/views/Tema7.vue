<template lang="pug">tabla
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 Sistema digestivo bovino
      .row.mb-5.justify-content-center.align-items-center
          .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t7/img1.png' style="width: 550px").m-auto
          .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-5(data-aos="fade-right")
            p El sistema digestivo bovino está especializado en aprovechar alimentos ricos en fibra, como pastos, henos y ensilajes. Gracias a la acción de millones de microorganismos presentes en el rumen, los bovinos pueden transformar estos alimentos en energía y nutrientes necesarios para el crecimiento, la producción de leche, la reproducción y el mantenimiento de la salud.
      p(data-aos="fade-left") Esta adaptación fisiológica convierte a los bovinos en animales altamente eficientes para utilizar recursos forrajeros que otras especies no pueden aprovechar de la misma manera.
      .row.bg-fondo-1(data-aos="fade-left")
        .col-12
          .p-5
            Separador
            //- Inicio Tema7.1
            .row
              #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 7.1 Morfología del sistema digestivo bovino
            p(data-aos="fade-left") El sistema digestivo bovino está compuesto por diversos órganos que actúan de forma coordinada para transformar los alimentos en nutrientes aprovechables por el organismo. A continuación, se describen sus principales características e importancia dentro del proceso digestivo de los rumiantes.
            .row.justify-content-center.mt-5.mb-5
              .col-lg-10.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 1. 
                  span  Sistema digestivo bovino 
                figure.mb-0.text-center
                  img(src='@/assets/curso/temas/t7/img2.png', alt="Ilustración anatómica del sistema digestivo de una vaca, con etiquetas que identifican boca, esófago, rumen, retículo, omaso, abomaso, intestino delgado e intestino grueso." style="width: 1200px").m-auto
      //- Inicio Accordion
      .bg--img_03
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t7/img3.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Boca")
                  p Es la primera estructura del sistema digestivo y se encarga de la ingestión y masticación de los alimentos, mezclándolos con abundante saliva. Facilita la formación del bolo alimenticio e inicia el proceso digestivo, favoreciendo la fermentación ruminal.
              .row(titulo="Esófago")
                  p Conducto muscular responsable del transporte del alimento desde la boca hasta el estómago. También permite el retorno del bolo alimenticio durante la rumia. Es fundamental para este proceso, característico de los bovinos, ya que mejora el aprovechamiento de los alimentos fibrosos.
              .row(titulo="Rumen")
                  p Compartimiento más grande del estómago donde ocurre la fermentación microbiana. Alberga bacterias, protozoarios y hongos capaces de degradar la fibra vegetal. Constituye el principal centro de digestión de los rumiantes, permitiendo transformar pastos y forrajes en nutrientes aprovechables.
              .row(titulo="Retículo")
                  p Compartimiento con forma de panal que trabaja conjuntamente con el rumen en la mezcla y selección del alimento. Participa en la formación del bolo ruminal y retiene cuerpos extraños pesados. Favorece la rumia y la adecuada clasificación de las partículas alimenticias.              
            //- Fin Accordion
      //- Inicio Accordion
      .bg--img_03
        .row.justify-content-center
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Omaso")
                  p Posee numerosas láminas internas que incrementan la superficie de absorción y reducen el tamaño de las partículas alimenticias. Su función principal es absorber agua, minerales y ácidos grasos provenientes de la fermentación, mejorando la eficiencia digestiva.
              .row(titulo="Abomaso")
                  p Conocido como el "estómago verdadero", realiza la digestión química y enzimática mediante la producción de ácido clorhídrico y enzimas digestivas. Descompone proteínas y microorganismos procedentes del rumen para facilitar la posterior absorción de nutrientes.
              .row(titulo="Intestino delgado")
                  p Completa la digestión mediante la acción de secreciones del hígado y el páncreas, favoreciendo la digestión final de proteínas, grasas y carbohidratos. Es el principal sitio de absorción de aminoácidos, vitaminas, minerales y energía requeridos por el organismo.
              .row(titulo="Intestino grueso")
                  p Participa en la absorción final de agua y algunos minerales, además de la formación y compactación de las heces. Contribuye al equilibrio hídrico del organismo y a la adecuada eliminación de los desechos metabólicos.              
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t7/img4.png", alt="").img400.m-auto
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Proceso digestivo en el bovino
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El proceso digestivo bovino se desarrolla mediante una serie de etapas sucesivas que permiten el aprovechamiento eficiente de los alimentos fibrosos.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .p-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta01_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Consumo del alimento
                            p.text-center Ingreso voluntario de los alimentos al organismo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta01_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Masticación y producción de saliva
                            p.text-center Trituración inicial y mezcla del alimento con saliva.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta01_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Ingreso al rumen y retículo
                            p.text-center Inicio de la fermentación y clasificación de partículas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta01_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Fermentación por microorganismos
                            p.text-center Degradación de la fibra vegetal y producción de nutrientes aprovechables.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta01_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Rumia
                            p.text-center Regurgitación y remasticación del bolo alimenticio para mejorar la digestión.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta01_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Paso al omaso
                            p.text-center Reducción del tamaño de partículas y absorción de agua y minerales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta01_7.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Paso al abomaso
                            p.text-center Digestión química mediante enzimas y ácido clorhídrico.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta01_8.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Absorción de nutrientes en intestinos
                            p.text-center Incorporación de nutrientes esenciales al organismo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta01_9.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Producción de energía, leche y carne
                            p.text-center Utilización de los nutrientes para mantenimiento y producción.
            //- Fin Carrusel            
      Separador
      //- Inicio Tema7.2
      .row
        #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.2 Funciones digestivas
      p.mb-5(data-aos="fade-left") Los bovinos son animales rumiantes capaces de utilizar alimentos fibrosos que otras especies no pueden digerir eficientemente. Esta capacidad depende de la actividad de los microorganismos presentes en el rumen, responsables de degradar la fibra vegetal y transformar los alimentos en nutrientes aprovechables para el organismo.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-10
          .overflow-hidden.shadow
            .row.g-0.align-items-stretch                    
              .col-12.col-md-7.col-lg-7.p-4.p-lg-5.text-start.bg-color-8.d-flex.flex-column.justify-content-center
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Pastos naturales y mejorados:</b> constituyen la principal fuente de fibra y energía.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Henos:</b> aportan fibra efectiva y favorecen la rumia.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Ensilajes:</b> garantizan la disponibilidad de alimento conservado.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Forrajes verdes:</b> proporcionan nutrientes y humedad.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Subproductos agrícolas:</b> permiten aprovechar recursos alternativos de alimentación.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Suplementos nutricionales:</b> complementan dietas con deficiencias específicas.
              .col-12.col-md-5.col-lg-5.position-relative
                figure.mb-0.h-100.w-100
                  img(src="@/assets/curso/temas/t7/img5.png" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;")                  
      p(data-aos="fade-left") La actividad microbiana permite transformar estos recursos en nutrientes útiles para el bovino, favoreciendo el aprovechamiento eficiente de los alimentos.
      Separador
      //- Inicio Tema7.3
      .row
        #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.3 Importancia nutricional
      p Un sistema digestivo saludable es fundamental para mantener la productividad y la salud de los animales.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .p-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta02_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Salud ruminal
                            p Mantiene el equilibrio de los microorganismos del rumen, favoreciendo la fermentación y digestión de los alimentos fibrosos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta02_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Producción de leche
                            p Permite obtener mayores rendimientos al suministrar energía, proteína, minerales y vitaminas necesarias para la síntesis láctea.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta02_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Ganancia de peso
                            p Favorece el crecimiento, el desarrollo muscular y la condición corporal.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta02_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Conversión alimenticia
                            p Incrementa el aprovechamiento de los nutrientes consumidos, permitiendo producir más con menor cantidad de alimento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta02_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Respuesta inmunológica
                            p Fortalece las defensas del organismo frente a enfermedades e infecciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t7/tarjeta02_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Bienestar animal
                            p Reduce trastornos digestivos, metabólicos y nutricionales, favoreciendo la salud y el comportamiento normal.
            //- Fin Carrusel
      p(data-aos="fade-left") Una adecuada nutrición constituye un pilar esencial para la eficiencia productiva y la salud del hato.            
      Separador
      //- Inicio Tema4.4
      .row
        #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.4 Importancia general 
      p.mb-5(data-aos="fade-left") El adecuado funcionamiento del sistema digestivo depende de prácticas de manejo orientadas a preservar la salud ruminal y optimizar el aprovechamiento de los nutrientes consumidos.
      .row.justify-content-center.align-items-stretch.gx-4.gy-5.mb-5.contenedor-flex-cards(data-aos="fade-right") 
        .col-12.col-lg-9.d-flex
          .row.gx-4.gy-tarjetas.w-100.m-0
            .col-12.col-sm-6.col-md-4.col-lg-4.mb-4
              .tarjeta-atributo.h-100
                .tarjeta-atributo__header.p-3.text-center
                  h4.mb-0 Suministrar forrajes de buena calidad
                .tarjeta-atributo__body.p-4.text-center
                  p.mb-0 Favorecer una adecuada fermentación ruminal.
            .col-12.col-sm-6.col-md-4.col-lg-4.mb-4
              .tarjeta-atributo.h-100
                .tarjeta-atributo__header.p-3.text-center
                  h4.mb-0 Garantizar acceso permanente a agua limpia y fresca
                .tarjeta-atributo__body.p-4.text-center
                  p.mb-0 Mantener las funciones digestivas y metabólicas.
            .col-12.col-sm-6.col-md-4.col-lg-4.mb-4
              .tarjeta-atributo.h-100
                .tarjeta-atributo__header.p-3.text-center
                  h4.mb-0 Realizar cambios de dieta de forma gradual
                .tarjeta-atributo__body.p-4.text-center
                  p.mb-0 Evitar alteraciones digestivas.
            .col-12.col-sm-6.col-md-4.col-lg-4.mb-3
              .tarjeta-atributo.h-100
                .tarjeta-atributo__header.p-3.text-center
                  h4.mb-0 Evitar alimentos contaminados o deteriorados
                .tarjeta-atributo__body.p-4.text-center
                  p.mb-0 Reducir riesgos sanitarios y nutricionales.
            .col-12.col-sm-6.col-md-4.col-lg-4.mb-3
              .tarjeta-atributo.h-100
                .tarjeta-atributo__header.p-3.text-center
                  h4.mb-0 Mantener horarios regulares de alimentación
                .tarjeta-atributo__body.p-4.text-center
                  p.mb-0 Favorecer la estabilidad del proceso digestivo.
            .col-12.col-sm-6.col-md-4.col-lg-4.mb-3
              .tarjeta-atributo.h-100
                .tarjeta-atributo__header.p-3.text-center
                  h4.mb-0 Implementar programas sanitarios preventivos
                .tarjeta-atributo__body.p-4.text-center
                  p.mb-0 Conservar la salud del hato.
                  
        .col-12.col-sm-8.col-md-6.col-lg-3.d-flex
          .banner-mantenimiento.w-100
            img(src="@/assets/curso/temas/t5/img7.png" alt="")
      p(data-aos="fade-left") En conclusión, el sistema digestivo bovino es una estructura altamente especializada que permite transformar la fibra vegetal en nutrientes esenciales para la producción y el mantenimiento del organismo. Su correcto funcionamiento depende de una alimentación adecuada, agua de calidad y prácticas de manejo que favorezcan la estabilidad digestiva y la salud de los animales.
</template>

<script>
export default {
  name: 'Tema7',
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
