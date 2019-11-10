// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify';
import Layout from '~/layouts/Default.vue';
import '../node_modules/vuetify/dist/vuetify'
import '~/styles/app.scss';//
//import 'prismjs/themes/prism.css'
import Vuex from 'vuex'
import '~/styles/prism-atom.css';
import VueDisqus from 'vue-disqus'





export default function (Vue, { appOptions, router, head, isClient }) {

  router.scrollBehavior = function(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return {x: 0, y: 0}
    }
  }
  router.beforeEach((to, from, next) => {
    //console.log(from,next,to);
    return next();
  });
  
  // Set default layout as a global component
  /*head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Questrial&display=swap'
  });*/
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
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css'
  });

  //add meta
  head.meta.push({
    name: 'keywords',
    content: 'Bardizba, Blog,CTF, News, Technology'
  });

  
  Vue.use(Vuetify, {
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
  if (isClient) {
    var is_dark_enabled = localStorage.getItem('is_dark_enabled') !== null ? parseInt(localStorage.getItem('is_dark_enabled')) === 1 ? true : false : false;
    var is_sidebar_showed = localStorage.getItem('is_sidebar_showed') !== null ? parseInt(localStorage.getItem('is_sidebar_showed')) === 1 : false;
  } else {
    var is_sidebar_showed  = true;
    var is_dark_enabled = false;
  }
  const opts = {
    theme: {
      dark: is_dark_enabled
      //      primary: '#b747ff' //,
      // success: '',
      // info: '',
      // error: ''
    }
  };
  appOptions.vuetify = new Vuetify(opts);


  Vue.mixin({
    data: function () {
      return {
        isDarkEnabled: is_dark_enabled,
        isSidebarShowed: is_sidebar_showed
      }
    },
    methods:{
      toggleSidebar: function(){
        this.isSidebarShowed = ! this.isSidebarShowed;
        console.log(this.isSidebarShowed,"FRMIXIN");
      }
    },
    watch: {
      isDarkEnabled: function (val) {
        if (isClient) {
          localStorage.setItem('is_dark_enabled', val ? 1 : 0);
        }
      },isSidebarShowed: function(val){
        if (isClient) {
          localStorage.setItem('is_sidebar_showed', val ? 1 : 0);
        }
      }
    }
  })
  Vue.use(Vuex);
  console.log(appOptions);
  Vue.component('Layout', Layout);
  Vue.use(VueDisqus)
  //console.log(Vue.$vuetify);

  appOptions.store = new Vuex.Store({
    state: {
      isSidebarShowed:true
    },
    mutations: {
      togglesidebar (state) {
        state.isSidebarShowed = ! state.isSidebarShowed;
      }
    }
  })

}
