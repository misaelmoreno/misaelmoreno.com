import type { Locale } from '@/context/Language';
import type { ProjectDetails } from '@/interfaces/project';

const projects: Record<Locale, ProjectDetails[]> = {
  es: [
    {
      title: 'Cloe Asistente virtual para Android',
      duration: 'nov. 2011 - dic. 2012',
      description: 'Cloe fue el primer asistente por voz en Español para dispositivos móviles Android. Fue la aplicación de pago número uno en descargas en Play Store entre Noviembre de 2011 y Enero de 2012, siendo trending topic en Twitter España y acumulando más de 10.000 descargas en pocas semanas, generando interés de grandes empresas como Samsung. El proyecto llegó a su fin a finales de 2012 ante la irrupción de decenas de compañías con grandes presupuestos dispuestas a monopolizar este nicho.',
      link: 'https://elpais.com/tecnologia/2011/12/05/actualidad/1323079262_850215.html'
    }
  ],
  en: [
    {
      title: 'Cloe Virtual Assistant for Android',
      duration: 'Nov 2011 - Dec 2012',
      description: 'Cloe was the first Spanish voice assistant for Android devices. It became the number one paid app on Play Store between November 2011 and January 2012, trending on Twitter Spain and surpassing 10,000 downloads in just weeks, drawing attention from major companies like Samsung. The project ended in late 2012 with the arrival of competitors backed by large budgets ready to monopolize the niche.',
      link: 'https://elpais.com/tecnologia/2011/12/05/actualidad/1323079262_850215.html'
    }
  ]
};

export { projects };
