<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Agentes económicos y su rol en los mercados'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-7
          p(data-aos="fade-right") En el estudio de la microeconomía, los agentes económicos son los actores claves que interactúan en los mercados, determinando la oferta y la demanda de bienes y servicios. Estos agentes-consumidores, productores y el gobierno, desempeñan roles interdependientes que configuran el funcionamiento de los sistemas económicos y afectan la asignación de los recursos. La comprensión de sus comportamientos y decisiones, es esencial para analizar cómo se forman los precios, cómo se distribuyen los recursos escasos y cómo se satisfacen las necesidades humanas.
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in").mt-4.mt-lg-0


      .bg-color-5.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/2.png', alt='', style="max-width: 1030px;")
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") A lo largo de este tema, se conocerán los diferentes tipos de agentes económicos y su influencia en los mercados. Se comprenderá cómo los consumidores toman decisiones para maximizar su utilidad, cómo los productores buscan optimizar sus beneficios, y cómo las políticas gubernamentales impactan la dinámica de la oferta y la demanda. 


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .titulo-figura.mb-4
            h5 Figura 1. 
            span Modelo del flujo circular de la economía

          figure
            img(src="@/assets/curso/tema2/fig1.png", data-aos="zoom-in")
          figcaption.mt-2.mb-4 Nota: tomado y adaptado de Rodríguez Galván (2022).


      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Los consumidores: decisiones de consumo y maximización de utilidad


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in").d-none.d-lg-block
        .col-lg-8
          p(data-aos="fade-left") En la microeconomía, los consumidores desempeñan un papel crucial como agentes económicos, al tomar decisiones que influyen en la demanda de bienes y servicios en el mercado. Estas decisiones están motivadas por la búsqueda de maximización de la utilidad, un concepto que se refiere al nivel de satisfacción o beneficio que un consumidor obtiene, al adquirir un bien o servicio. 

          p(data-aos="fade-left") En el libro Microeconomía intermedia en casos, escrito por Manel Antelo Suárez, se explica que:

          .bloque-texto-c.color-primario.p-4
            i.fas.fa-quote-left
            h3.mb-2 “La restricción presupuestaria del consumidor, está relacionada con el poder adquisitivo de sus recursos, es decir, con la renta de que dispone y con los precios que ha de pagar por los bienes y servicios que compra en los diferentes mercados” 
            span -  Manel Antelo Suárez (Pag 26) 


      .row.mb-5
        .col-lg-6
          p(data-aos="fade-left") Esta restricción presupuestaria viene siendo un elemento muy importante para definir una posible demanda de los diferentes bienes que las personas consumen. Además, que esta restricción está vinculada a las políticas públicas. Poder analizar estos cambios es crucial para evaluar cómo es el cambio de consumo de las personas, en distintos escenarios de la vida cotidiana.
          .bg-color-2.p-4(data-aos="fade-left")
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/icon-1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Algunas características del comportamiento del consumidor y su importancia en la dinámica de los mercados, son:
        .col-lg-6
          figure
            img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")


      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8

          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="La utilidad") 
              h5 La utilidad como medida del bienestar del consumidor 
              p El concepto de utilidad es esencial para comprender las decisiones de consumo. La utilidad puede ser definida como el grado de satisfacción que un consumidor experimenta al consumir un bien o servicio. Los economistas dividen la utilidad en dos tipos principales: la utilidad total, que se refiere al beneficio total que un consumidor obtiene de una cierta cantidad de bienes, y la utilidad marginal, que mide el cambio en la satisfacción, al consumir una unidad adicional de un bien (Antelo-Suárez, 2015).
              p Por ejemplo, al consumir una primera taza de café, un individuo podría experimentar una alta satisfacción (utilidad). Sin embargo, al consumir una segunda o tercera taza, la satisfacción adicional tiende a disminuir, ilustrando el principio de utilidad marginal decreciente. Este principio es clave para entender por qué los consumidores no gastan todos sus ingresos en un solo bien, sino que diversifican su consumo, para maximizar su satisfacción general.

            div(numero="2" titulo="Restricciones y decisiones") 
              h5 Restricciones presupuestarias y decisiones de consumo 

              p Aunque los consumidores buscan maximizar su utilidad, sus decisiones están limitadas por su presupuesto disponible. El ingreso actúa como una restricción que obliga a los individuos a elegir entre diferentes combinaciones de bienes y servicios que pueden adquirir. Este comportamiento puede ser representado gráficamente, mediante la línea de presupuesto, que muestra las combinaciones posibles de bienes que un consumidor puede comprar con su ingreso (Rodríguez Galván, 2022).
              p Por ejemplo, si un consumidor tiene un presupuesto de $100 y enfrenta precios de $10 por un libro y $20 por una película, deberá decidir cómo asignar su dinero, para obtener el máximo beneficio. Esta elección dependerá de sus preferencias y de la utilidad que atribuya a cada bien, destacando la relación entre sus decisiones y el concepto de optimización.



      .row.align-items-center.mb-5
        .col-lg-8

          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="La teoría de la elección del consumidor") 
              p La teoría de la elección del consumidor, estudia cómo las personas toman decisiones basadas en sus preferencias, ingresos y los precios de los bienes. Este análisis se realiza bajo el supuesto que los consumidores son racionales y buscan maximizar su utilidad. Unas herramientas claves para entender este comportamiento, son las curvas de indiferencia, que representan combinaciones de bienes que ofrecen al consumidor, el mismo nivel de satisfacción.
              p Por ejemplo, un consumidor podría estar igualmente satisfecho al consumir dos rebanadas de pizza y un refresco, o tres rebanadas de pizza sin refresco. Al analizar las curvas de indiferencia y la línea de presupuesto, se puede identificar el punto de equilibrio, donde el consumidor maximiza su utilidad, dentro de sus limitaciones presupuestarias.

            div(numero="2" titulo="Impacto de los precios y las preferencias") 
              h5 Impacto de los precios y las preferencias en las decisiones de consumo 

              p Los precios de los bienes y servicios, junto con las preferencias individuales, son factores determinantes en las decisiones de consumo. Cuando el precio de un bien disminuye, la cantidad demandada generalmente aumenta, un fenómeno conocido como la ley de la demanda. Además, los cambios en el ingreso pueden alterar las decisiones de consumo, clasificando los bienes en dos categorías principales: bienes normales, cuya demanda aumenta con el ingreso, y bienes inferiores, cuya demanda disminuye al aumentar el ingreso (Salas Velasco, 2018).
              p Por ejemplo, si el precio de las manzanas disminuye significativamente, los consumidores podrían decidir comprar más manzanas en lugar de otro tipo de fruta. Del mismo modo, si el ingreso de un individuo aumenta, podría optar por consumir más alimentos orgánicos en lugar de productos convencionales, reflejando un cambio en sus preferencias.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0


      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Las empresas: producción, costos y maximización de beneficios


      .bg-full-width.bg-h85-2.mb-5
        .px-4.px-md-5

          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-lg-5(data-aos="zoom-in")
                  img.img-fluid(src='@/assets/curso/tema2/8.svg', style="max-width:505px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

                .col-lg-7(data-aos="fade-left")
                  p(data-aos="fade-left").mb-0 Los productores/empresas, como agentes económicos, desempeñan un papel fundamental en la economía al determinar la oferta del bien y servicios en el mercado. Sus decisiones se basan en la maximización de beneficios, lo que implica encontrar el equilibrio óptimo entre los costos de producción y los ingresos obtenidos por las ventas. Este análisis incluye factores como la elección de insumos, la tecnología utilizada y las condiciones del mercado.


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-1.png")
              .col-lg-7.order-lg-1
                h5 Factores de producción y costos
                p Los productores emplean tres factores principales en sus procesos productivos: tierra, trabajo y capital. Estos insumos son combinados estratégicamente para producir bienes y servicios, de manera eficiente. El análisis de costos es una herramienta clave para los productores, puesto que les permite evaluar la relación entre el nivel de producción y los gastos asociados, incluidos los costos fijos y los variables.

                p #[b Por ejemplo], una empresa de confección debe decidir cuántas máquinas y cuántos trabajadores contratar, para optimizar su producción. La relación entre estos factores, determinará el costo total de producción y, en última instancia, el precio al que podrán vender sus productos en el mercado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-2.png")
              .col-lg-7.order-lg-1
                h5 Maximización de los beneficios
                p La maximización de los beneficios, es el objetivo principal de los productores. Para lograrlo, las empresas analizan el ingreso marginal y el costo marginal, que representan, respectivamente, el ingreso adicional obtenido al vender una unidad más de producto y el costo adicional de producirla (Rodríguez Galván, 2022).
                p Cuando el ingreso marginal es igual al costo marginal, el productor alcanza su punto óptimo de producción. En este punto, la empresa maximiza sus ganancias y evita incurrir en pérdidas. Por ejemplo, una fábrica de zapatos puede calcular que producir 1,000 pares al mes maximiza su rentabilidad, dado que los ingresos adicionales por producir más pares, serían menores que los costos adicionales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-3.png")
              .col-lg-7.order-lg-1
                h5 Impacto de la tecnología en la producción
                p La tecnología juega un papel crucial en las decisiones de los productores, porque mejora la eficiencia y reduce los costos de producción. La adopción de innovaciones tecnológicas, permite, a las empresas, producir más bienes con los mismos recursos, lo que aumenta su competitividad en el mercado (Vial Lira, 2012).

                p #[b Por ejemplo],  una empresa de agricultura que invierte en sistemas de riego automatizados, puede reducir el desperdicio de agua y mejorar sus rendimientos, lo que a su vez incrementa sus beneficios y les permite ofrecer precios más competitivos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-4.png")
              .col-lg-7.order-lg-1
                h5 El mercado y las condiciones de competencia
                p Las decisiones de los productores están fuertemente influenciadas por el tipo de mercado en el que operan. En mercados de competencia perfecta, las empresas enfrentan precios establecidos por el mercado y deben centrarse en minimizar costos para maximizar beneficios. En contraste, en mercados de competencia imperfecta, como el monopolio o el oligopolio, las empresas tienen mayor control sobre los precios y pueden influir en la oferta y la demanda (Salas Velasco, 2018).

                p #[b Por ejemplo], una empresa que opera en un mercado monopólico, como una empresa eléctrica en una región específica, puede fijar precios más altos, debido a la falta de competencia directa. En cambio, en un mercado altamente competitivo, como la industria de alimentos, los productores deben mantener precios bajos y ofrecer productos diferenciados, para atraer a los consumidores.




      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] El gobierno: intervención en los mercado y corrección de fallas


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-5.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/icon-2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0  El gobierno juega un rol crucial en la economía, al intervenir en los mercados, para garantizar su correcto funcionamiento, proteger a los agentes económicos y corregir las fallas que puedan surgir. Las fallas de mercado, como los monopolios, las externalidades, la información asimétrica y los bienes públicos, generan desequilibrios que afectan la eficiencia y el bienestar social. La intervención gubernamental busca crear un entorno más justo y eficiente mediante políticas, regulaciones e incentivos específicos.
          p(data-aos="fade-left") Las fallas de mercado, representan situaciones en las que los mercados no logran asignar recursos de manera eficiente, perjudicando tanto a los consumidores como a los productores. Por ejemplo, un monopolio puede fijar precios excesivamente altos, restringiendo el acceso a bienes o servicios esenciales. 


      .bg-full-width.bg-color-2(data-aos="fade-up").mb-5
        .p-4.px-md-5
          p.mb-0 El gobierno interviene para corregir estas fallas, ya sea regulando el comportamiento de las empresas, estableciendo impuestos para internalizar los costos sociales, o subsidiando actividades que generan beneficios para toda la sociedad, como la investigación y el desarrollo tecnológico. 


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") El gobierno interviene para corregir estas fallas, ya sea regulando el comportamiento de las empresas, estableciendo impuestos para internalizar los costos sociales, o subsidiando actividades que generan beneficios para toda la sociedad, como la investigación y el desarrollo tecnológico.

          p(data-aos="fade-left") Luego, uno de los mecanismos más comunes de intervención, es el uso de impuestos y subsidios. Los impuestos correctivos se aplican a las actividades que generan externalidades negativas, como el impuesto al carbono en industrias contaminantes, incentivando prácticas más limpias y sostenibles (Salas Velasco, 2018). Por otro lado, los subsidios se utilizan para fomentar actividades que generan externalidades positivas, como la educación o la producción de energías renovables.

          .bg-color-1.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/icon-3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Por ejemplo, en el sector agrícola, los subsidios pueden ayudar a pequeños agricultores a mantenerse competitivos y garantizar el suministro de alimentos en zonas rurales. De esta manera, los subsidios no solo benefician a los productores, sino también a los consumidores al estabilizar precios y asegurar el acceso a productos esenciales.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")




      .titulo-figura.mb-4
        h5 Figura 2. 
        span  Tabla de agentes económicos y mercados

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema2/11.svg", data-aos="zoom-in")
        .col-lg-8
          figure
            img(src="@/assets/curso/tema2/fig2.svg", data-aos="zoom-in")
          figcaption.mt-2.text-center.mb-4 Nota:tomado y adaptado de Rodríguez Galván (2022). 



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

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/67738" target="_blank" rel="noopener noreferrer") Vial Lira, B. (2012). Microeconomía. Editorial ebooks Patagonia - Ediciones Universidad Católica de Chile. 

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=OI9zFu0DkU8" target="_blank" rel="noopener noreferrer") Repositorio Videos SEDUC. (2020). Rol de productores y consumidores del departamento – Segundo Grado – Ciencias Sociales

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=loz-R4Hd9As" target="_blank" rel="noopener noreferrer") Facultad de Estudios a Distancia UMNG. (2021). Comprensión del entorno económico de la empresa


            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
