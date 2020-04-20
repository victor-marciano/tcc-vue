import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
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

Vue.component('font-awesome-icon', FontAwesomeIcon);

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
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
