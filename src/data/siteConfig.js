export async function fetchData() {
  return {
    _id: 'siteConfig',
    titleSuffix: '| Asesorías Contables',
    header: {
      title: 'AsesorContable',
      logo: {
        src: '/logo_qf_asesorias.jpg',
        alt: 'Logo AsesorContable',
        dimensions: { width: 160, height: 50 }
      },
      navLinks: [
        { _type: 'actionLink', label: 'Servicios', url: '#servicios' },
        { _type: 'actionLink', label: 'Nosotros', url: '#nosotros' },
        { _type: 'actionLink', label: 'Testimonios', url: '#testimonios' },
        { _type: 'actionButton', label: 'Contacto', url: '#contacto', theme: 'primary' }
      ]
    },
    footer: {
      text: '© 2025 AsesorContable. Todos los derechos reservados.'
    }
  };
}