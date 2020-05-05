import Vue from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import router from './router';
import axios from 'axios';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import './assets/scss/app.scss';
import Toasted from 'vue-toasted';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);
library.add(faFontAwesome);
library.add(faFacebook);
library.add(faGooglePlus);
library.add(faTwitterSquare);

Vue.use(Vuex);


Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

// notifications
Vue.use(Toasted);
Vue.toasted.register('nutrimarsValidationSuccess', (payload) => {
  return payload.message;
}, {
  type : 'success',
  icon : 'check',
  keepOnHover: true,
  iconPack: 'fontawesome',
  theme: 'bubble',  
  singleton: true
});

Vue.toasted.register('nutrimarsValidationError', (payload) => {
  return payload.message;
}, {
  type : 'error',
  icon : 'warning',
  keepOnHover: true,
  iconPack: 'fontawesome',
  theme: 'bubble',  
  singleton: true
});

const store = new Vuex.Store({
  state: {
    isLogged: (localStorage.getItem('auth_token')) ? true : false,
    user: null
  },

  mutations: {
    authenticate (state, { user, token }) {
      state.isLogged = true;  
      state.user = user;
      localStorage.setItem('auth_token', token);
    },

    logout () {
      localStorage.removeItem('auth_token');  
    }
  },

  actions: {
    login ({ commit }, payload) {    
      return axios.post('https://nutrimars-api.herokuapp.com/user/auth', payload.data)
      .then(data => { 
        commit('authenticate', { user: data.user, token: data.token });
        return Promise.resolve(data); 
      })
      .catch(error => {
          return Promise.reject(error); 
      });
    },

    logout ({ commit }) {      
      commit('logout');  
    }
  },
  getters: {
    loggedUser: state => {
      return state.user
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
