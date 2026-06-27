<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Sistema de producción bovino
      .row.bg-fondo-1(data-aos="fade-left")
        .col-12
          .p-5
            .row.mb-5.justify-content-center.align-items-center
                .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
                  figure.mb-0.text-center
                    img(src='@/assets/curso/temas/t2/img1.png' style="width: 500px").m-auto
                .col-12.col-lg-8.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-right")
                  p <b>El sistema de producción bovino</b> corresponde al conjunto organizado de recursos <b>animales, humanos, técnicos, económicos y ambientales</b> que interactúan para la producción eficiente y sostenible de carne, leche o sistemas de doble propósito. Su finalidad es optimizar la productividad, garantizar la rentabilidad de la explotación, promover el bienestar animal, asegurar la inocuidad de los alimentos y proteger los recursos naturales mediante la aplicación de las Buenas Prácticas Pecuarias (BPP) y las Buenas Prácticas de Alimentación Animal.
            .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
              .bloque-texto-g__img(
                :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img2.png')})` }")
              .bloque-texto-g__texto.p-4
                p.mb-0 Un sistema de producción bovino eficiente debe integrar de manera equilibrada la nutrición, la sanidad, la infraestructura, el manejo animal, la bioseguridad y la gestión administrativa, permitiendo obtener productos de calidad sin comprometer la salud de los animales, de las personas ni del medio ambiente.
            p(data-aos="fade-right") Asimismo, la normatividad vigente y los programas de Buenas Prácticas Ganaderas (BPG) establecen que toda explotación bovina debe implementar acciones orientadas a proteger la salud animal, la salud pública, el bienestar de los animales y la sostenibilidad ambiental.
            p(data-aos="fade-left") El funcionamiento adecuado del sistema productivo depende de la interacción de diferentes componentes. Cada uno cumple una función específica y contribuye al desempeño integral de la explotación pecuaria.
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Alimentación balanceada
                p Consiste en suministrar alimentos que cubran los requerimientos nutricionales de cada animal según su edad, peso, estado fisiológico, condición corporal y nivel de producción. Una alimentación adecuada favorece el crecimiento, la reproducción, la producción de leche y carne, además de fortalecer el sistema inmunológico.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Manejo sanitario preventivo
                p Incluye programas de vacunación, desparasitación, control de enfermedades, monitoreo sanitario y atención veterinaria preventiva. Estas acciones contribuyen a disminuir pérdidas productivas y mejorar la salud del hato.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bienestar animal
                p Comprende las prácticas destinadas a garantizar condiciones adecuadas de alojamiento, alimentación, hidratación, manejo y confort, minimizando el estrés, el dolor, el miedo y el sufrimiento de los animales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bioseguridad
                p Corresponde al conjunto de medidas orientadas a prevenir el ingreso y la propagación de enfermedades dentro de la explotación mediante controles sanitarios, desinfección, cuarentenas y manejo adecuado de visitantes, animales e insumos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Manejo ambiental responsable
                p Incluye el uso eficiente de los recursos naturales, la protección de las fuentes de agua, el manejo adecuado de residuos y la reducción de los impactos ambientales derivados de la actividad pecuaria.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Infraestructura segura y funcional
                p Las instalaciones deben facilitar el manejo de los animales, garantizar su bienestar, permitir una adecuada distribución de alimento y agua, y reducir riesgos de accidentes para animales y trabajadores.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Control productivo y administrativo
                p Se basa en el registro y análisis de información relacionada con producción, reproducción, alimentación, sanidad y costos, permitiendo una adecuada toma de decisiones y el mejoramiento continuo del sistema productivo.
      //- Fin Slideshow
      p(data-aos="fade-left") La integración eficiente de estos componentes favorece la sostenibilidad, la rentabilidad y la capacidad de respuesta del sistema frente a los desafíos productivos y sanitarios.
      p(data-aos="fade-right") Las Buenas Prácticas de Alimentación Animal tienen como propósito garantizar una nutrición adecuada, promover el bienestar animal, prevenir enfermedades asociadas a la alimentación y mejorar la eficiencia productiva del sistema bovino. Su implementación contribuye a optimizar el aprovechamiento de los nutrientes, mejorar el desempeño productivo y fortalecer la salud del hato.
      .row.bg-fondo-1(data-aos="fade-left")
        .col-12
          .p-5      
            //- Inicio Accordion
            .bg--img_03
              .row.justify-content-center
                .col-lg-3 
                  figure(data-aos="zoom-in")
                    img(src="@/assets/curso/temas/t1/img5.png", alt="").img400.m-auto
                .col-lg-9
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Acceso permanente a agua potable")
                        p Los bovinos deben disponer durante todo el día de agua limpia, fresca y de buena calidad, ya que participa en la digestión, la absorción de nutrientes, la regulación de la temperatura corporal, el metabolismo y la producción de leche.
                    .row(titulo="Monitoreo de la condición corporal")
                        p Permite evaluar el estado nutricional de los animales y realizar ajustes oportunos en los programas de alimentación para mantener niveles óptimos de producción y salud.
                    .row(titulo="Control sanitario preventivo")
                        p Un adecuado programa sanitario favorece el aprovechamiento de los nutrientes y evita enfermedades que afectan el consumo de alimento y el rendimiento productivo.
                    .row(titulo="Reducción del estrés")
                        p El manejo tranquilo, el acceso adecuado al alimento y al agua, y la disminución de factores estresantes contribuyen a mejorar el consumo voluntario, la digestión y la productividad.
                    .row(titulo="Espacios adecuados para alimentación")
                        p Los animales deben contar con suficiente espacio en comederos y bebederos para evitar competencia, agresiones y limitaciones en el acceso a los nutrientes.
                  //- Fin Accordion
            p(data-aos="fade-left") La correcta implementación de estas prácticas permite mejorar la eficiencia alimenticia, aumentar la productividad, fortalecer la salud animal y cumplir con los principios de bienestar animal y sostenibilidad exigidos por las Buenas Prácticas Ganaderas. De esta manera, el sistema de producción bovino se consolida como un modelo integral que busca equilibrar la eficiencia económica, la responsabilidad ambiental y el bienestar de los animales.
            Separador
            //- Inicio Tema2.1
            .row
              #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 2.1 Actividades de alimentación 
              .row.justify-content-center.align-items-center
                .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
                  figure.mb-0.text-center
                    img(src='@/assets/curso/temas/t2/img4.png' style="width: 550px").m-auto
                .col-12.col-lg-7.order-2.order-lg-1.bg-color-8.p-4(data-aos="fade-right")
                  p El proceso de alimentación bovina comprende un conjunto de actividades orientadas a garantizar el adecuado suministro de nutrientes, agua y el manejo higiénico de los alimentos, con el fin de mantener la salud, la productividad y el bienestar animal. Estas actividades deben desarrollarse bajo los principios de las Buenas Prácticas Pecuarias, la bioseguridad y la inocuidad alimentaria, para prevenir enfermedades, mejorar la eficiencia productiva y asegurar condiciones adecuadas dentro del sistema de producción bovino.
                  p La correcta ejecución de cada actividad contribuye al aprovechamiento eficiente de los nutrientes, favorece el desempeño productivo y reduce los riesgos asociados con una alimentación inadecuada:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .p-5
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
                              img(src='@/assets/curso/temas/t2/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Planeación de la alimentación
                            p.text-start Consiste en establecer programas de alimentación acordes con la edad, el peso corporal, la etapa productiva, el estado fisiológico y el nivel de producción de los animales. Una adecuada planificación permite cubrir oportunamente los requerimientos nutricionales del hato.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Selección y adquisición de alimentos
                            p.text-start Comprende la elección de pastos, forrajes, henos, ensilajes, suplementos minerales y concentrados que cumplan criterios de calidad e inocuidad. Los alimentos deben estar libres de contaminantes físicos, químicos y biológicos que puedan afectar la salud animal.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Almacenamiento adecuado
                            p.text-start Incluye la conservación de los alimentos en condiciones que eviten el deterioro, la humedad, la contaminación y la proliferación de plagas. Un almacenamiento apropiado preserva el valor nutricional y la inocuidad de los insumos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Preparación y suministro de la ración
                            p.text-start Corresponde a la distribución de los alimentos en cantidades adecuadas y con la frecuencia requerida. La ración debe suministrarse de forma organizada para garantizar el acceso equitativo de los animales a los nutrientes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Suministro de agua potable
                            p.text-start Los bovinos deben disponer permanentemente de agua limpia, fresca y de buena calidad. El agua participa en procesos esenciales como la digestión, el transporte de nutrientes, la regulación de la temperatura corporal y la producción de leche.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Higiene de comederos y bebederos
                            p.text-start Consiste en realizar la limpieza y desinfección periódica de los equipos utilizados para el suministro de alimento y agua, disminuyendo el riesgo de contaminación y transmisión de enfermedades.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Monitoreo del consumo alimenticio
                            p.text-start Permite identificar cambios en el apetito o alteraciones en los patrones de consumo, facilitando la detección temprana de problemas sanitarios, nutricionales o de manejo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Evaluación de la condición corporal
                            p.text-start Consiste en valorar periódicamente el estado nutricional de los animales para realizar ajustes oportunos en los programas de alimentación y mantener niveles adecuados de productividad y bienestar.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_9.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Manejo de residuos alimenticios
                            p.text-start Incluye la disposición adecuada de sobrantes y materiales deteriorados para evitar focos de contaminación, proliferación de plagas y riesgos sanitarios dentro de la explotación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_10.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Registro y seguimiento
                            p.text-start Comprende el control de información relacionada con el consumo de alimento, costos, disponibilidad de insumos y resultados productivos, favoreciendo la toma de decisiones y el mejoramiento continuo del sistema.
            //- Fin Carrusel
            p(data-aos="fade-left") La implementación adecuada de estas actividades fortalece la eficiencia alimenticia, mejora la salud y el bienestar de los bovinos y contribuye al cumplimiento de los principios de sostenibilidad e inocuidad establecidos por las Buenas Prácticas Pecuarias. De esta manera, la alimentación deja de ser una actividad aislada y se convierte en un componente estratégico para el éxito del sistema de producción bovino.
</template>

<script>
export default {
  name: 'Tema2',
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
