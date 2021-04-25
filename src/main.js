import Vue from 'vue'
import store from './store'
import firebase from 'firebase/app';

import App from './App.vue'

import router from '@/router'

import vuetify from '@/plugins/vuetify'

var firebaseConfig = {
  apiKey: 'AIzaSyBXfEiv-rSpiffqhsTB5KdVaUZF4AOZerA',
  authDomain: 'audio-heaven.firebaseapp.com',
  projectId: 'audio-heaven',
  storageBucket: 'audio-heaven.appspot.com',
  messagingSenderId: '969900857463',
  appId: '1:969900857463:web:a702ca7104dd886b750e72',
  measurementId: 'G-YSVETTD6PZ'
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')