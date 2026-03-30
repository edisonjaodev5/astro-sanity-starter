export async function fetchData() {
  return pages;
}

export async function getPageById(id) {
  return pages.filter((page) => page._id === id);
}

const pages = [
  {
    _id: 'home',
    slug: { current: '/' },
    title: 'Inicio',
    metaTitle: 'Asesorías Contables Profesionales',
    metaDescription: 'Servicios contables, tributarios y de auditoría para empresas y personas.',
    sections: [
      {
        _type: 'heroSection',
        theme: 'dark',
        heading: 'Tu contabilidad en manos expertas',
        body: 'Ofrecemos asesorías contables, tributarias y financieras para empresas y personas naturales. Con más de **15 años de experiencia**, te ayudamos a cumplir tus obligaciones y optimizar tu carga tributaria.',
        cta: [
          { _type: 'actionButton', label: 'Conoce nuestros servicios', url: '#servicios', theme: 'primary' },
          { _type: 'actionLink', label: 'Contáctanos', url: '#contacto' }
        ]
      },
      {
        _type: 'cardsSection',
        theme: 'light',
        heading: 'Nuestros Servicios',
        body: 'Soluciones integrales adaptadas a las necesidades de tu empresa o negocio.',
        columns: 'three',
        items: [
          { heading: 'Contabilidad General', body: 'Registro de operaciones, balances mensuales y estados financieros al día.', badge: { label: 'Esencial', theme: 'primary' }, theme: 'light', hasBorder: true, textAlign: 'left' },
          { heading: 'Asesoría Tributaria', body: 'Declaraciones de IVA, renta y planificación tributaria dentro del marco legal.', badge: { label: 'Popular', theme: 'accent' }, theme: 'light', hasBorder: true, textAlign: 'left' },
          { heading: 'Remuneraciones', body: 'Gestión de sueldos, liquidaciones y cotizaciones previsionales.', badge: { label: 'Completo', theme: 'secondary' }, theme: 'light', hasBorder: true, textAlign: 'left' },
          { heading: 'Constitución de Empresas', body: 'Te acompañamos en la creación de tu empresa y trámites en el SII.', theme: 'light', hasBorder: true, textAlign: 'left' },
          { heading: 'Auditoría', body: 'Revisión independiente de estados financieros y control interno.', theme: 'light', hasBorder: true, textAlign: 'left' },
          { heading: 'Finanzas para Pymes', body: 'Análisis financiero, flujo de caja y apoyo en decisiones estratégicas.', theme: 'light', hasBorder: true, textAlign: 'left' }
        ]
      },
      {
        _type: 'cardsSection',
        theme: 'dark',
        heading: '¿Por qué elegirnos?',
        columns: 'three',
        items: [
          { heading: '+15 Años de Experiencia', body: 'Trayectoria sólida atendiendo empresas de distintos rubros en Chile.', theme: 'transparent', textAlign: 'center' },
          { heading: '+200 Clientes Satisfechos', body: 'Empresas, pymes y personas naturales que confían en nosotros.', theme: 'transparent', textAlign: 'center' },
          { heading: 'Respuesta en 24 hrs', body: 'Atención rápida y personalizada para cada consulta.', theme: 'transparent', textAlign: 'center' }
        ]
      },
      {
        _type: 'testimonialsSection',
        theme: 'light',
        heading: 'Lo que dicen nuestros clientes',
        columns: 'two',
        items: [
          { quote: 'Llevan mi contabilidad hace 5 años con puntualidad y profesionalismo impecables.', author: { _id: 'p1', name: 'Carolina Vásquez', title: 'Dueña, Minimarket Don Pedro' }, theme: 'light', hasBorder: true },
          { quote: 'Gracias a su asesoría tributaria redujimos significativamente nuestra carga de impuestos.', author: { _id: 'p2', name: 'Rodrigo Fuentes', title: 'Gerente, Constructora RF Ltda.' }, theme: 'light', hasBorder: true },
          { quote: 'Nos ayudaron a constituir la empresa y manejar remuneraciones desde el día uno.', author: { _id: 'p3', name: 'María José Torres', title: 'Socia Fundadora, Estudio MT' }, theme: 'light', hasBorder: true },
          { quote: 'Siempre disponibles para resolver dudas. Te explican todo con claridad.', author: { _id: 'p4', name: 'Felipe Araya', title: 'Empresario, Transporte Araya e Hijos' }, theme: 'light', hasBorder: true }
        ]
      },
      {
        _type: 'videoSection',
        theme: 'dark',
        heading: 'Conoce cómo trabajamos',
        body: 'Un proceso simple, transparente y ordenado para que tu empresa siempre esté al día.',
        videoUrl: 'https://www.youtube.com/watch?v=cjMYxE6KYA8'
      },
      {
        _type: 'contactSection',
        theme: 'light',
        heading: 'Contáctanos',
        body: 'Completa el formulario según tu situación y te responderemos en menos de 24 horas hábiles.'
      },
      {
        _type: 'ctaSection',
        theme: 'dark',
        heading: '¿Listo para ordenar tu contabilidad?',
        body: 'Agenda una consulta gratuita y conversemos sobre cómo podemos ayudarte.',
        cta: [
          { _type: 'actionButton', label: 'Solicitar consulta gratuita', url: 'mailto:contacto@asesoriacontable.cl', theme: 'primary' },
          { _type: 'actionButton', label: 'WhatsApp directo', url: 'https://wa.me/56912345678', theme: 'secondary' }
        ]
      }
    ]
  }
];