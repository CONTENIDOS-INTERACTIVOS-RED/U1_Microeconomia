<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Métodos de análisis económico'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

      .bg-color-1.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El análisis económico utiliza diversas herramientas y metodologías para interpretar y predecir el comportamiento de los mercados. Entre los métodos más destacados se encuentran los modelos económicos, las representaciones gráficas y las herramientas matemáticas, cada uno contribuyendo de manera específica, al entendimiento de fenómenos económicos complejos. Este tema explora cómo estas herramientas permiten simplificar la realidad y tomar decisiones fundamentadas.

      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Modelos económicos: simplificación de la realidad para entender el mercado

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") Los modelos económicos son representaciones simplificadas de la realidad, diseñadas para analizar y predecir el comportamiento de los agentes económicos. Estos modelos parten de supuestos básicos que permiten centrar la atención en aspectos claves del problema, dejando de lado variables menos relevantes. 

          .bg-color-7.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/icon-1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Aunque su simplicidad puede ser una limitación, los modelos son fundamentales para entender fenómenos complejos, como la formación de precios o las interacciones entre oferta y demanda (Antelo-Suárez, 2015).

        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.svg", data-aos="zoom-in")


      p(data-aos="fade-left") #[b Por ejemplo:]


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-1.png")
              .col-lg-7.order-lg-1
                h5 Modelo de oferta y demanda
                p Es uno de los más conocidos en microeconomía. Este modelo asume mercados competitivos y examina cómo las interacciones entre compradores y vendedores, determinan el precio y la cantidad de equilibrio. Este modelo explica fenómenos como el efecto de los cambios en las preferencias del consumidor o en los costos de producción sobre el mercado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-2.png")
              .col-lg-7.order-lg-1
                h5 Modelo del comportamiento del consumidor
                p Se basa en la teoría de la utilidad. Este modelo ayuda a predecir cómo los consumidores asignan su ingreso limitado, entre distintos bienes, para maximizar su satisfacción. A través de este enfoque, se pueden analizar temas como la elasticidad de la demanda o los efectos del ingreso en el consumo.


      .bg-full-width.bg-fondo-2
        .px-4.px-md-5.pb-md-3

          .row.justify-content-center.align-items-stretch.mb-4
            .col-lg-6.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/3.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Modelos dinámicos
                  p.mb-0 Los modelos dinámicos, incorporan cambios a lo largo del tiempo.
                  Por ejemplo, los modelos dinámicos son útiles para estudiar fenómenos como el crecimiento económico o la evolución de los mercados financieros (Salas Velasco, 2018).
            .col-lg-6.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Modelos estáticos
                  p.mb-0 Los modelos estáticos, examinan un momento en el tiempo.


      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Representaciones gráficas: curvas de oferta y demanda


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-5.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/icon-2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p(data-aos="fade-left") La curva de la demanda, refleja la relación entre el precio de un bien y la cantidad que los consumidores están dispuestos a adquirir en un período de tiempo determinado, manteniendo constantes todas las demás variables (condición "ceteris paribus"). 

                p(data-aos="fade-left").mb-0 Para entender mejor la demanda, Rodríguez Galván en su libro Microeconomía: teoría y ejercicios, dice que la demanda: "es la cantidad de un bien o servicio que los consumidores están dispuestos a comprar en cada nivel de precios, en un período determinado".

          p(data-aos="fade-left") #[b El comportamiento de la curva de demanda, puede analizarse bajo dos escenarios:]


      .bg-full-width.bg-color-7(data-aos="fade-up").mb-5
        .p-4.px-md-5.py-4
          p.mb-0 #[b Cambio en la cantidad demandada:] ocurre cuando hay un movimiento a lo largo de la curva de demanda, debido a un cambio en el precio del bien. Por ejemplo, si el precio disminuye, la cantidad demandada aumenta y viceversa.



      .titulo-figura.mb-3
        h5 Figura 3. 
        span Cambio en la cantidad demandada


      .bg-color-info.p-4.py-5.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/fig3.png", data-aos="zoom-in")
            figcaption.mt-2.text-center.mb-4 Nota: tomado y adaptado de Rodríguez Galván (2022). 
          .col-lg-5
            .bg-color-white.p-4.mb-4
              p.mb-0 El movimiento de 1 a 2 a lo largo de la curva de demanda representa una reducción en la cantidad-demandada debido a un incremento en el precio.
            
            .bg-color-white.p-4.mb-5
              p.mb-0 #[b Factores que inciden en la demanda:]
              p.mb-0 1. Precio del bien.
              p.mb-0 2. Ingreso de los consumidores.
              p.mb-0 3. Los precios de bienes relacionados.
              p.mb-0 4. Preferencias de los consumidores.


      .bg-color-7.p-4(data-aos="fade-left").mb-4
        p.mb-0 #[b Cambio en la demanda:] se produce cuando factores distintos al precio, como los ingresos, las preferencias o los precios de bienes relacionados, alteran la posición de la curva. Un aumento en la demanda, desplaza la curva hacia la derecha, mientras que una disminución la mueve hacia la izquierda.

      
      .titulo-figura.mb-3
        h5 Figura 4. 
        span Cambios en la demanda


      .bg-color-info.p-4.py-5.mb-4
        .row.justify-content-center.align-items-start
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/fig4.png", data-aos="zoom-in")
            figcaption.mt-2.text-center.mb-4 Nota: tomado y adaptado de Rodríguez Galván (2022). 
          .col-lg-5
            .bg-color-white.p-4.mb-4
              p.mb-0 Si aumentan los ingresos de los consumidores, al mismo precio (P₁), podrán adquirir una cantidad mayor de bienes (Q₂). La demanda #[b aumenta], por lo tanto, la curva se desplaza a la #[b derecha].


      .titulo-figura.mb-3
        h5 Figura 5. 
        span Cambios en la demanda


      .bg-color-info.p-4.py-5.mb-4
        .row.justify-content-center.align-items-start
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/fig5.png", data-aos="zoom-in")
            figcaption.mt-2.text-center.mb-4 Nota: tomado y adaptado de Rodríguez Galván (2022). 
          .col-lg-5
            .bg-color-white.p-4.mb-4
              p.mb-0 Al precio 1, los demandantes están dispuestos a consumir la cantidad 1.
              p.mb-0 Si disminuye el gusto de los consumidores por un bien o este pasa de moda, al mismo precio (P₁), adquirirán una cantidad menor (Q₂).
              p.mb-0 La curva de #[b demanda] se desplaza a la #[b izquierda], por lo tanto, #[b disminuye].


      .bg-color-7.p-4(data-aos="fade-left").mb-4
        p.mb-0 La ley de la demanda establece que existe una relación inversa entre el precio de un bien y la cantidad demandada, siempre que las demás variables permanezcan constantes. Si el precio de un bien aumenta, la cantidad demandada disminuye; y si el precio baja, la cantidad demandada se incrementa. Matemáticamente, la relación se puede expresar como: 
          span(v-katex="'Q_d = a - bP'")
          | .

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7
          p.mb-4 Donde 
            span(v-katex="'Q_d'")
            |  es la cantidad demandada, 
            span(v-katex="'P'")
            |  es el precio, 
            span(v-katex="'a'")
            |  representa la demanda máxima posible y 
            span(v-katex="'b'")
            |  es la sensibilidad de la demanda al precio.

          p(data-aos="fade-left") #[b La curva de oferta] representa la relación entre el precio de un bien y la cantidad que los productores están dispuestos a ofrecer en el mercado, manteniendo constantes los demás factores #[em (ceteris paribus)]. Cada punto en la curva indica la cantidad ofrecida a un precio específico.

          p(data-aos="fade-left") #[b Cambio en la cantidad ofrecida:] se refiere a un movimiento a lo largo de la curva de oferta, causado por un cambio en el precio del bien.

        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")


      .titulo-figura.mb-3
        h5 Figura 6. 
        span Cambio en la cantidad ofrecida


      .bg-color-info.p-4.py-5.mb-4
        .row.justify-content-center.align-items-start
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/fig6.png", data-aos="zoom-in")
            figcaption.mt-2.text-center.mb-4 Nota: tomado y adaptado de Rodríguez Galván (2022). 
          .col-lg-5
            .bg-color-white.p-4.mb-4
              p.mb-0 El movimiento de 1 a 2 a lo largo de la curva de oferta representa un aumento en la cantidad ofertada debido a un incremento en el precio.

            .bg-color-white.p-4.mb-5
              p.mb-0 #[b Factores que inciden en la oferta:]
              p.mb-0 1. Precio del bien.
              p.mb-0 2. Los costos de los factores de producción.
              p.mb-0 3. La tecnología.



      .bg-color-7.p-4(data-aos="fade-left").mb-4
        p.mb-0 #[b Cambio en la oferta:] ocurre cuando factores externos, como los costos de producción o las políticas gubernamentales, desplazan la curva hacia la derecha (aumento de la oferta) o hacia la izquierda (disminución de la oferta).


      .titulo-figura.mb-3
        h5 Figura 7. 
        span Cambio en la oferta


      .bg-color-info.p-4.py-5.mb-4
        .row.justify-content-center.align-items-start
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/fig7.png", data-aos="zoom-in")
            figcaption.mt-2.text-center.mb-4 Nota: tomado y adaptado de Rodríguez Galván (2022). 
          .col-lg-5
            .bg-color-white.p-4.mb-4
              p.mb-0 Los #[b cambios en la oferta] solo ocurren cuando la curva de oferta se desplaza a la derecha o a la izquierda, y esto sucede cuando los otros factores, que no son el precio, cambian.

            .bg-color-4.p-4.mb-5
              p.mb-4.text-white El productor puede ofertar una mayor cantidad de bienes al mismo precio cuando incorpora una nueva tecnología en el proceso de producción.

              p.mb-0.text-white Al P₁, los productores están dispuestos a ofertar la Q₁. Con la ayuda de la tecnología, al mismo precio (P₁), podrían producir una cantidad mayor de bienes (Q₂). La oferta aumenta y la curva se desplaza a la derecha.

      .titulo-figura.mb-3
        h5 Figura 8. 
        span Cambio en la oferta


      .bg-color-info.p-4.py-5.mb-4
        .row.justify-content-center.align-items-start
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/fig8.png", data-aos="zoom-in")
            figcaption.mt-2.text-center.mb-4 Nota: tomado y adaptado de Rodríguez Galván (2022). 
          .col-lg-5
            .bg-color-white.p-4.mb-4
              p.mb-0 Si aumentan los costos de los insumos de producción, el productor ofrece una menor cantidad de bienes al mismo precio.

              p.mb-0 Al P₁, los productores están dispuestos a ofertar la Q₁. Si se incrementan los costos de producción, al mismo precio (P₁), la cantidad ofertada será menor (Q₂).

              p.mb-0 La curva de oferta se desplaza a la #[b izquierda], por lo tanto, #[b disminuye].

      .bg-color-7.p-4(data-aos="fade-left").mb-4
        p.mb-4 La ley de la oferta establece una relación directa entre el precio de un bien y la cantidad ofrecida:

        p.mb-0 A. Si el precio aumenta, la cantidad ofrecida #[b aumenta].
        p.mb-0 B. Si el precio disminuye, la cantidad ofrecida #[b disminuye].


      .titulo-figura.mb-3
        h5 Figura 9. 
        span Ley de la oferta


      .bg-color-info.p-4.py-5.mb-4
        .row.justify-content-center.align-items-start
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/fig9.png", data-aos="zoom-in")
            figcaption.mt-2.text-center.mb-4 Nota: tomado y adaptado de Rodríguez Galván (2022). 
          .col-lg-5
            .bg-color-white.p-4.mb-4
              p.mb-0 #[b Ley de la oferta] 
            
            .bg-color-white.p-4.mb-4
              p.mb-0 La cantidad ofertada aumenta cuando el precio aumenta y viceversa.

            .bg-color-4.p-4.mb-5
              p.mb-0.text-white La curva de oferta tiene una pendiente positiva por la relación directa entre el precio y la cantidad ofertada.

      .bg-color-7.p-4(data-aos="fade-left").mb-4
        p.mb-4 Esto ocurre porque un precio más alto incentiva a los productores a incrementar la producción, porque obtienen mayores ingresos, mientras que un precio bajo desincentiva la producción. Matemáticamente, la relación puede expresarse como: 
          span(v-katex="'Q_s = c -dP'")
          | .

        p.mb-4 Donde 
          span(v-katex="'Q_s'")
          |  es la cantidad ofrecida, 
          span(v-katex="'P'")
          |  el precio, 
          span(v-katex="'c'")
          |  representa la oferta inicial y 
          span(v-katex="'d'")
          |  indica la respuesta de la cantidad ofrecida ante cambios en el precio.


      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Herramientas matemáticas ecuaciones y elasticidades

      p(data-aos="fade-left") Las herramientas matemáticas permiten analizar con mayor precisión, las relaciones económicas. Entre las más utilizadas se encuentran las ecuaciones y las elasticidades, que ayudan a cuantificar y predecir los efectos de cambios en las variables del mercado (Salas Velasco, 2018).

      .row.justify-content-center.align-items-start.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
        .col-lg-7
          p.mb-0 #[b Ecuaciones] 
          p.mb-4 Las ecuaciones matemáticas son fundamentales para modelar relaciones entre variables. Por ejemplo, en un análisis de ingresos y gastos, una ecuación típica sería:
          .d-flex.justify-content-center.mb-4
            .bg-color-1.p-3.text-center.d-inline-block
              span(v-katex="'IngresoTotal = P • Q'")

          p.mb-4 Donde 
            span(v-katex="'P'")
            |  es el precio y 
            span(v-katex="'Q'")
            |  la cantidad vendida. Esto permite calcular los ingresos generados en diferentes escenarios de precios y cantidades.

          .bg-color-1.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/icon-3.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5 La elasticidad
                p.mb-0 Es un concepto clave en la microeconomía, que mide la sensibilidad o la respuesta de una variable (como la cantidad demandada o la cantidad ofrecida) ante un cambio en otra variable (como el precio, el ingreso, o el precio de bienes relacionados). Es esencial para entender cómo reaccionan los consumidores y productores, ante cambios en el mercado.

      .row.align-items-center.mb-5
        .col-lg-8

          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="Elasticidad precio de la demanda") 
              p Este mide cómo varía la cantidad demandada de un bien cuando cambia un precio, manteniendo constantes las demás variables. Se calcula de la siguiente forma:
              figure.mb-3
                img(src="@/assets/curso/tema3/formula-ep.png" alt="Fórmula de elasticidad precio" style="max-width: 275px;").mx-auto

              p.mb-3 Cuando 
                span(v-katex="'E_p > 1'")
                |  #[b Demanda elástica.] Los consumidores son sensibles al precio; un pequeño cambio en el precio genera un cambio mayor en la cantidad demandada.

              p.mb-3 Cuando 
                span(v-katex="'E_p < 1'")
                |  #[b Demanda inelástica.] Los consumidores no responden mucho al cambio en el precio.

              p.mb-3 Cuando 
                span(v-katex="'E_p = 1'")
                |  #[b Demanda unitaria.] El cambio porcentual en el precio genera el mismo cambio porcentual en la cantidad demandada.


            div(numero="2" titulo="Elasticidad ingreso de la demanda") 
              p Mide cómo cambia la cantidad demandada de un bien cuando varía el ingreso de los consumidores:
              figure.mb-3
                img(src="@/assets/curso/tema3/formula-ep2.png" alt="Fórmula de elasticidad ingreso" style="max-width: 315px;").mx-auto
              p.mb-3 Cuando 
                span(v-katex="'E_i > 0'")
                |  La demanda aumenta con el ingreso.

              p.mb-3 Cuando 
                span(v-katex="'E_i < 0'")
                |  La demanda disminuye al aumentar el ingreso.

              p.mb-3 Cuando 
                span(v-katex="'E_i > 1'")
                |  La demanda aumenta más que proporcionalmente con el ingreso.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0


      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/224089" target="_blank" rel="noopener noreferrer") Rodríguez Galván, J. Y. (2022). Microeconomía: teoría y ejercicios. Grupo Editorial Éxodo. 

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/170085" target="_blank" rel="noopener noreferrer") Antelo-Suárez, M. (2015). Microeconomía intermedia en casos. Delta Publicaciones. 

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/105577" target="_blank" rel="noopener noreferrer") Salas Velasco, M. (2018). Microeconomía: conceptos teóricos y aplicaciones. Difusora Larousse - Ediciones Pirámide. 


            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import 'katex/dist/katex.min.css'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Métodos de análisis económico',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué estudia principalmente la microeconomía? (CON)',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La relación entre países y sus políticas económicas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'El comportamiento de los agentes económicos individuales.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Los fenómenos económicos a gran escala.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La administración de empresas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es el objetivo principal de los consumidores en la microeconomía? (CON)',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Maximizar sus ingresos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Minimizar los costos de producción.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Maximizar su utilidad o satisfacción.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Incrementar el precio de los bienes.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué representa la restricción presupuestaria en microeconomía? (CON)',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Los ingresos ilimitados de un consumidor.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Los recursos disponibles para satisfacer las necesidades.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La cantidad de bienes y servicios que una persona puede comprar según su ingreso.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'La inflación en los precios del mercado.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'En un mercado de competencia perfecta, ¿cómo se determina el precio de los bienes? (CON)',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Por los costos de producción de cada empresa.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Por las políticas gubernamentales.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Por la interacción entre la oferta y la demanda.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Por acuerdos entre empresas competidoras.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes no es un ejemplo de agente económico? (CON)',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El gobierno.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Una empresa.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Un consumidor.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La inflación.',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
      glosario: [
        {
          termino: '<em>Ceteris Paribus</em>',
          significado:
            'Principio económico que supone que todas las demás variables permanecen constantes, mientras se analiza el efecto de una en particular.',
        },
        {
          termino: 'Curva de la demanda',
          significado:
            'Representación gráfica que muestra la relación inversa entre el precio de un bien y la cantidad demandada por los consumidores, manteniendo constantes, otras variables.',
        },
        {
          termino: 'Curva de la oferta',
          significado:
            'Representación gráfica que ilustra la relación directa entre el precio de un bien y la cantidad ofrecida por los productores, manteniendo constantes, otras variables.',
        },
        {
          termino: 'Demanda',
          significado:
            'Cantidad de bienes o servicios que los consumidores están dispuestos a adquirir en el mercado a diferentes niveles de precio, considerando condiciones como ingreso, precios de bienes relacionados y preferencias.',
        },
        {
          termino: 'Elasticidad',
          significado:
            'Medida de la sensibilidad de una variable económica (como la cantidad demandada u ofrecida) ante cambios en otra variable (como el precio o ingreso).',
        },
        {
          termino: 'Intervención del gobierno',
          significado:
            'Acciones del estado para corregir fallas de mercado, regular precios, proporcionar bienes públicos o redistribuir recursos.',
        },
        {
          termino: 'Maximización de utilidad',
          significado:
            'Proceso por el cual los consumidores buscan obtener el mayor nivel de satisfacción posible, a partir de sus ingresos y las opciones disponibles.',
        },
        {
          termino: 'Mercado',
          significado:
            'Espacio físico o virtual donde interactúan oferentes y demandantes, para intercambiar bienes, servicios o factores productivos, bajo condiciones determinadas.',
        },
        {
          termino: 'Oferta',
          significado:
            'Cantidad de bienes o servicios que los productores están dispuestos a vender en el mercado, a diferentes niveles de precio, manteniendo constantes, otras variables.',
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
