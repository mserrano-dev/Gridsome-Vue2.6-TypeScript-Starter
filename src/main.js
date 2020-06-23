import DefaultLayout from '~/layouts/Default.vue';
// load styles
import 'vuetify/dist/vuetify.min.css';
import './main.scss';
// load libraries and frameworks
import Vuetify from 'vuetify';
import PortalVue from 'portal-vue';

export default function (Vue, { appOptions, router, head, isClient }) {
  console.log(Vue.version);
  // Setup Vue3 features Teleport
  Vue.use(PortalVue);

  // Setup plugin Vuetify
  appOptions.vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#006bb6",
          secondary: "#ffc420"
        }
      }
    }
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });
  Vue.use(Vuetify);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // Set additional attrs
  head.htmlAttrs = {
    lang: 'en_US'
  };
  head.bodyAttrs = {
    class: 'antialiased bg-gray-100 text-gray-900'
  };

  // Filters
  Vue.filter('basename', function (value) {
    if (!value) return '';
    value = value.toString();
    let parts = value.split('/');
    return parts[parts.length - 1];
  });
}