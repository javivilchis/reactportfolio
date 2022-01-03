import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          link: {
            home: "Home",
            about: "About",
            work: "Work",
            contact: "Contact",
            resume: "Resume",
            privacy: "Privacy Policy"
          },
          welcome: {
            part1: 'Welcome to Javier Vilchis Portfolio, please take a moment to browse around this website. If you happen to see anything that interests you within this site, please contact Javier from any of the available channels in',
            link: 'here',
            part2: 'Visit the work area',
            header1: '- Marketing Strategy',
            header2: '- Customer Experience',
            header3: '- UX / UI Design',
            header4: '- Web Development'
          },
          about: {
            title: 'About Me',
            intro1: 'Javier Vilchis is a Web Developer and a Multimedia Designer with focus on User Experience on a Marketing Level. He has the ability to strategize your idea into a full marketing campaing to get your business running at it\'s best! He is in the process of acquiring his Certified ANA Marketing Professional (CAMP) certification, to serve your campaing and strategy needs with customer-centric techniques.',
            intro2: 'Javier is also updating his knowledge base with JavaScript and other front-end languages to better serve current and future projects. His professional programming stack includes front-end scripting and backend scripting to support small and large projects.               '
          },
          footer: {
            build: "build with",
            disclaimer: "Disclaimer: The information provided by javier vilchis on javivilchis.com or portfolio website and similar websites as well as on mobile applications is for general infomational purposes only. Information in websites and mobile apps are provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, reliability, availability or completenence of anyinformation on the site or our mobile application. THIS WEBSITE AND APP REPRESENTS POINTS OF VIEW AND PERSONAL PROJECTS WITHIN HIS CURRENT PLACE OF EMPLOYMENT, IT DOES NOT REPRESENT ANY OF THE BRANDS PRESENTED OR SHOWN IN THIS WEBSITE."
          },
          notfound: {
            title: 'We couldn\'t found what you are looking for!',
            intro1: 'We are so sorry for the inconvenience, please try clicking the home page to start over.',
            intro2: 'I will let Javi know about this issue. We are sorry for this issue.'
          }
        }
      },
      es: {
        translation: {
          link: {
            home: "Casa",
            about: "Acerca",
            work: "Trabajos",
            contact: "Contactos",
            resume: "Resumen",
            privacy: "Política de privacidad"
          },
          welcome: {
            part1: 'Bienvenido a la pagina sitio web del Portfolio de Javier Vilchis, tómese un momento para navegar por este sitio web. Si ve algo que le interesa dentro de este sitio, comuníquese con Javier desde cualquiera de los canales disponibles',
            link: 'aqui',
            part2: 'Visita el area de trabajo',
            header1: '- Estrategia de mercadeo',
            header2: '- Experiencia del cliente',
            header3: '- Diseño UX / UI',
            header4: '- Desarrollo web'
          },
          about: {
            title: 'Hacerca de mí',
            intro1: 'Javier Vilchis es desarrollador web y diseñador multimedia con enfoque en la experiencia del usuario a nivel de marketing. Él tiene la capacidad de diseñar una estrategia para su idea en una campaña de marketing completa para que su negocio funcione de la mejor manera. Él está en el proceso de adquirir su certificación de Profesional Certificado en Mercadotecnia ANA (CAMP), para satisfacer sus necesidades estratégicas y de campaña con técnicas centradas en el cliente.',
            intro2: 'Javier también está actualizando su base de conocimientos con JavaScript y otros lenguajes frontales para servir mejor a los proyectos actuales y futuros. Su pila de programación profesional incluye secuencias de comandos de front-end y back-end para admitir proyectos pequeños y grandes.'
          },
          footer: {
            build: "desarollado con",
            disclaimer: "Descargo de responsabilidad: la información proporcionada por javier vilchis en javivilchis.com o el sitio web de la cartera y sitios web similares, así como en aplicaciones móviles, es solo para fines informativos generales. La información en los sitios web y aplicaciones móviles se proporciona de buena fe; sin embargo, no hacemos ninguna representación ni garantía de ningún tipo, expresa o implícita, con respecto a la precisión, adecuación, confiabilidad, disponibilidad o integridad de cualquier información en el sitio o nuestra aplicación móvil. ESTE SITIO WEB Y APLICACIÓN REPRESENTA PUNTOS DE VISTA Y PROYECTOS PERSONALES DENTRO DE SU LUGAR ACTUAL DE EMPLEO, NO REPRESENTA NINGUNA DE LAS MARCAS PRESENTADAS O MOSTRADAS EN ESTE SITIO WEB."
          },
          notfound: {
            title: 'No Encontramos lo que buscabas',
            intro1: 'Lo sentimos por este inconveniente. Por favor, presione el boton de el comienzo de esta pagina.',
            intro2: 'Le haremos saber a Javi de este inconveniente. Lo sentimos, gracias por su paciencia.'
          }
        }
      }
    }
  });

export default i18n;