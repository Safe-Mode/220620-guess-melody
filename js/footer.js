import getElementFromTemplate from './get-element-from-template.js';

const markup = 
  `<section class="copyright">
    Сделано в <a class="copyright-link" href="https://htmlacademy.ru" target="_blank">HTML Academy</a>
  </section>`;

export default getElementFromTemplate(markup);