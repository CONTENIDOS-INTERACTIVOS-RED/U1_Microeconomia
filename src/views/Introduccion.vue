<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5


    .bg-full-width.bg-color-1.mb-5(data-aos="fade-up")
      .ps-4.ps-md-5
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La microeconomía, como rama fundamental de la economía, analiza cómo los agentes económicos, individuos, empresas y gobiernos, toman decisiones y cómo estas interactúan en los mercados, para asignar recursos limitados. En un mundo donde los recursos son finitos y las necesidades humanas parecen ilimitadas, comprender lo principios básicos de la microeconomía, se vuelve esencial para tomar decisiones informadas, tanto en el ámbito personal como profesional. Esta unidad introduce los conceptos claves que sustentan el análisis microeconómico, sentando las bases para un entendimiento más profundo de la economía, a nivel individual y empresarial.
          .col-lg-auto
            figure
              img(src='@/assets/curso/intro/1.png', alt='')

    p(data-aos="fade-up") #[b Al finalizar esta unidad se estará en la capacidad de:]

    .row.align-items-start.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/intro/2.png", alt="").mb-4.mb-lg-0
      .col-lg-7

        AcordionA(tipo="b")
          .div(titulo="Primero")
            p Identificar los objetivos y aplicaciones de la microeconomía, en diversos contextos.

          .div(titulo="Segundo")
            p Reconocer el papel de los agentes económicos y su influencia en los mercados.

          .div(titulo="Tercero")
            p Aplicar métodos de análisis económico, para interpretar comportamientos en diferentes escenarios.


    .row
      .col-lg-8
        p(data-aos="fade-left") Estos conocimientos no solo permitirán comprender mejor el entorno económico, sino también desarrollar habilidades críticas para evaluar y tomar decisiones estratégicas en la vida profesional.

        p(data-aos="fade-left") La relevancia de esta unidad radica en su aplicabilidad práctica. Desde elegir qué productos consumir, hasta comprender las estrategias empresariales de precios y producción, la microeconomía está presente en nuestras decisiones diarias. Además, proporciona herramientas que son indispensables para analizar problemáticas económicas globales, como la distribución de recursos o el impacto de las políticas públicas.

        p(data-aos="fade-left") #[b La unidad se organiza en 3 temas principales:]
        
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/intro/3.png", data-aos="zoom-in").mb-4.mb-lg-0


    .bg-full-width.bg-fondo-1
      .p-4.px-md-5

        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/card-1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tema 1
                p.mb-0 Definición y objetivos de microeconomía, donde se explorarán los fundamentos de esta disciplina y su relación con la economía general.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/card-2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tema 2
                p.mb-0 Agentes económicos y su rol en los mercados, que profundiza en el comportamiento de individuos, empresas y gobiernos, como participantes del sistema económico.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/card-3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tema 3
                p.mb-0 Métodos de análisis económico, que introduce las herramientas y técnicas empleadas, para interpretar y evaluar fenómenos económicos.


    .bg-full-width.bg-color-2(data-aos="fade-up")
      .p-4.px-md-5
        p.mb-0 #[b Este curso no solo busca desarrollar habilidades técnicas en economía, sino también inspirar para aplicar estos principios, y entender mejor el mundo que nos rodea.]
</template>
