// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify';
import Layout from '~/layouts/Default.vue';

import '~/styles/app.scss';//
import Vuex from 'vuex';
//import 'prismjs/themes/prism.css'

import '~/styles/prism-atom.css';
export default function (Vue, { appOptions, router, head, isClient }) {

  router.beforeEach((to, from, next) => {
    //console.log(from,next,to);
    return next();
  });
  // Set default layout as a global component
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Questrial&display=swap'
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.0.19/vuetify.min.css'
  });
  /*head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css'
  });*/
  Vue.use(Vuetify,{
    /*light: {
      background: '#cccccc',
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    },
    dark: {
      background: '#555555',
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }*/
  });
  Vue.use(Vuex);
  appOptions.store = new Vuex.Store({
    state:{
      isDark:false
    },
    mutations: {
      toggleDark(state) {
        state.isDark = !state.isDark;
      }
    }
  });
  const opts = {
    theme: {
      dark: false,
      //      primary: '#b747ff' //,
      // success: '',
      // info: '',
      // error: ''
    }
  };
  appOptions.vuetify = new Vuetify(opts);
  Vue.component('Layout', Layout);

}
