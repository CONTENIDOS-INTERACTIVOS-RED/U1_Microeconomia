export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Introducción a la microeconomía',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definición y objetivos de la microeconomía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Definición de microeconomía y su relación con la economía general',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principales objetivos de la microeconomía',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Agentes económicos y su rol en los mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Los consumidores: decisiones de consumo y maximización de utilidad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Las empresas: producción, costos y maximización de beneficios',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'El gobierno: intervención en los mercado y corrección de fallas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Métodos de análisis económico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Modelos económicos: simplificación de la realidad para entender el mercado',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Representaciones gráficas: curvas de oferta y demanda',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Herramientas matemáticas ecuaciones y elasticidades',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Rodríguez Galván, J. Y. (2022). Microeconomía: teoría y ejercicios. Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/224089',
    },
    {
      referencia:
        'Antelo-Suárez, M. (2015). Microeconomía intermedia en casos. Delta Publicaciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/170085',
    },
    {
      referencia:
        'Salas Velasco, M. (2018). Microeconomía: conceptos teóricos y aplicaciones. Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/105577',
    },
    {
      referencia:
        'Vial Lira, B. (2012). Microeconomía. Ediciones Universidad Católica de Chile.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67738',
    },
    {
      referencia:
        'Rodríguez Galván, J. Y. (2022). Microeconomía: teoría y ejercicios. Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/224089',
    },
    {
      referencia:
        'Antelo-Suárez, M. (2015). Microeconomía intermedia en casos. Delta Publicaciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/170085',
    },
    {
      referencia:
        'Salas Velasco, M. (2018). Microeconomía: conceptos teóricos y aplicaciones. Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/105577',
    },
    {
      referencia:
        'Vial Lira, B. (2012). Microeconomía. Ediciones Universidad Católica de Chile.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67738',
    },
    {
      referencia:
        'Antelo-Suárez, M. (2015). Microeconomía intermedia en casos. Delta Publicaciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/170085',
    },
  ],
  glosario: [
    {
      termino: 'Bioética',
      significado:
        'disciplina que estudia las implicaciones éticas, sociales y legales de los avances biológicos y médicos, buscando garantizar que las decisiones en estos campos respeten la dignidad humana, los derechos fundamentales y la justicia social.',
    },
    {
      termino: '<em>Design Thinking</em>',
      significado:
        'método de diseño centrado en el usuario que se basa en la comprensión de las necesidades y expectativas de los clientes, para crear soluciones innovadoras y efectivas.',
    },
  ],
}
