export default {
  global: {
    Name: 'Producción bovina: sistemas, alimentación y bienestar animal',
    Description:
      'Este componente formativo desarrolla conocimientos sobre alimentación bovina, nutrición, manejo de forrajes y conservación de alimentos, integrando las Buenas Prácticas Ganaderas, bioseguridad, bienestar animal e higiene pecuaria. Además, fortalece competencias para el manejo de insumos, suministro de agua, control sanitario y prevención de riesgos, promoviendo sistemas productivos sostenibles, inocuos y acordes con la normatividad vigente del sector agropecuario.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Especie animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características generales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de los bovinos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Etapas productivas bovinas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema de producción bovino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Actividades de alimentación ',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Instalaciones y equipos para bovinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características de las instalaciones bovinas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Área de alimentación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Implementos y accesorios ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Higiene en producción bovina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Técnicas de higiene en producción bovina',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Procedimientos higiénicos esenciales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Insumos utilizados en los programas de higiene',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Prevención de riesgos laborales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Manejo seguro de equipos e instalaciones',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Bienestar animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Características del bienestar animal',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Principios fundamentales del bienestar animal',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Buenas prácticas de manejo bovino ',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Sistema digestivo bovino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Morfología del sistema digestivo bovino',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Funciones digestivas',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Importancia nutricional',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Importancia general ',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Manejo de residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Clasificación',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Manejo y disposición',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Normativa ambiental ',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Contingencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Protocolos de actuación',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Manejo de emergencias',
            hash: 't_9_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Abomaso',
      significado:
        'Cuarta cavidad del estómago bovino donde ocurre digestión química.',
    },
    {
      termino: 'Alimentación bovina',
      significado:
        'Suministro de nutrientes necesarios para crecimiento, producción y bienestar animal.',
    },
    {
      termino: 'Bebedero',
      significado:
        'Estructura destinada al suministro permanente de agua para los animales.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'Condiciones físicas y mentales adecuadas para evitar estrés y sufrimiento animal.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Medidas preventivas para evitar ingreso y propagación de enfermedades.',
    },
    {
      termino: 'Bovino',
      significado:
        'Animal rumiante doméstico utilizado para producción de carne y leche.',
    },
    {
      termino: 'Comedero',
      significado:
        'Espacio o recipiente utilizado para suministrar alimento a los bovinos.',
    },
    {
      termino: 'Concentrado',
      significado:
        'Alimento balanceado con alto contenido energético y proteico.',
    },
    {
      termino: 'Corral',
      significado:
        'Área destinada al manejo, alojamiento y movilización de bovinos.',
    },
    {
      termino: 'Desinfección',
      significado:
        'Proceso de eliminación de microorganismos presentes en superficies y equipos.',
    },
    {
      termino: 'Ensilaje',
      significado:
        'Método de conservación de forrajes mediante fermentación anaerobia.',
    },
    {
      termino: 'Forraje',
      significado: 'Material vegetal utilizado como alimento para bovinos.',
    },
    {
      termino: 'Ganadería',
      significado:
        'Actividad económica dedicada a la crianza y producción animal.',
    },
    {
      termino: 'Higiene pecuaria',
      significado:
        'Prácticas de limpieza y saneamiento aplicadas en producción bovina.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'Garantía de que los alimentos no causarán daño al consumidor.',
    },
    {
      termino: 'Manga',
      significado:
        'Estructura utilizada para conducción y manejo seguro de bovinos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Food and Agriculture Organization of the United Nations (FAO). (2021). Buenas prácticas ganaderas para la producción bovina de carne y leche.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2020). Resolución 067449 de 2020. Por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción de leche.',
      link: 'https://www.ica.gov.co/getattachment/6b7f82ab-bccd-4bf5-a5c6-5bfff35b772b/2020R67449.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2020). Resolución 068167 de 2020. Requisitos sanitarios y de inocuidad para explotaciones bovinas y bufalinas.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2023). Manual de Buenas Prácticas Ganaderas para bovinos.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2022). Política nacional de sanidad e inocuidad agropecuaria.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021). Lineamientos para la gestión ambiental en sistemas de producción pecuaria.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Lineamientos para el uso prudente de antimicrobianos en producción animal.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal (OMSA). (2023). Código sanitario para los animales terrestres.',
      link: '',
    },
    {
      referencia:
        'República de Colombia. (2007). Decreto 1500 de 2007. Sistema oficial de inspección, vigilancia y control de la carne y productos cárnicos comestibles.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete Lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
