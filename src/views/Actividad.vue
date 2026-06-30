<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Producción bovina: sistemas, alimentación y bienestar animal',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Identificar los conceptos clave relacionados con la producción bovina, el sistema digestivo, la alimentación, la higiene, el bienestar animal y las prácticas necesarias para el manejo eficiente y sostenible de los bovinos.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una de las principales funciones de los bovinos dentro de los sistemas pecuarios?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción exclusiva de lana y cuero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Producción de leche, carne y reproducción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaboración de productos farmacéuticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prestación de servicios de transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué característica distingue a los bovinos lecheros?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentan elevada resistencia al calor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Poseen gran desarrollo muscular.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se utilizan solo en sistemas extensivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Requieren dietas altamente balanceadas para producir leche.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es la principal finalidad de los bovinos de carne?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción especializada de leche.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Trabajo agrícola permanente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Producción eficiente de carne.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Obtención exclusiva de estiércol.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué práctica es fundamental durante las primeras horas de vida del ternero?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar suplementos minerales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar ejercicio diario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Separarlo inmediatamente del hato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suministrar calostro oportunamente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es una característica de las razas Bos taurus?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alta resistencia a parásitos tropicales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gran tolerancia al calor extremo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Adaptación a climas templados y fríos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Presencia de giba sobre la cruz.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué ventaja ofrecen los cruces raciales bovinos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuyen la fertilidad animal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducen la longevidad productiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminan la necesidad de alimentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Favorecen el vigor híbrido y la adaptación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una característica del sistema intensivo de producción?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Depende exclusivamente del pastoreo natural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No utiliza suplementación alimenticia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presenta alta tecnificación y alimentación controlada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Carece de infraestructura especializada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es el objetivo principal de la etapa de levante?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la producción láctea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Preparar animales para sacrificio inmediato.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el crecimiento corporal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Favorecer el desarrollo muscular y óseo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué factor debe evitarse durante la etapa de levante?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acceso permanente al agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Suplementación mineral adecuada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Monitoreo sanitario frecuente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hacinamiento de los animales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es el objetivo de la etapa de ceba?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el consumo de alimento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminuir el peso corporal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la producción de lana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Maximizar la ganancia diaria de peso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué práctica contribuye a prevenir la mastitis?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso inadecuado del equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Suspender la limpieza rutinaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplicar rutinas de ordeño higiénico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir el acceso al agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es un componente del sistema de producción bovino?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminación del control sanitario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ausencia de registros administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción del bienestar animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manejo sanitario preventivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué actividad corresponde al proceso de alimentación bovina?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar el consumo alimenticio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Suspender el suministro de agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los registros productivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planear la alimentación según los requerimientos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es una característica de instalaciones bovinas adecuadas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presencia de bordes cortantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ausencia de ventilación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitación del acceso al agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilidad para la limpieza y desinfección.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué implemento suministra alimento de forma organizada?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Carretilla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Balde.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comedero.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Manga.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es el propósito principal de la higiene en producción bovina?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el estrés animal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la productividad del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la bioseguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prevenir enfermedades y garantizar inocuidad',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuál es la primera etapa del proceso higiénico?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Secado de superficies.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicación de desinfectantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Enjuague general.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Remoción de residuos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué desinfectante se utiliza ampliamente en pisos y corrales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Yodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clorhexidina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cal sanitaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hipoclorito de sodio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de los siguientes es un elemento de protección personal?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comedero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bebedero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Carretilla.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Guantes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuál es una de las Cinco Libertades del bienestar animal?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Privación periódica del alimento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Restricción del movimiento natural.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aislamiento permanente del hato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Libre de hambre y sed.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
