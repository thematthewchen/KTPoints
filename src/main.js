import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import 'vue-googlemaps/dist/vue-googlemaps.css'
import * as VueGoogleMaps from 'vue2-google-maps'

// import bulma and custom styles
// This file opens up 
// import './../node_modules/bulma/css/bulma.css';
import './../public/static/css/bulma.css';
import './../public/static/css/style.css';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCc4W4annW8hstY99LCBC1IlEyXETrdapE",
  authDomain: "ktpoints-68071.firebaseapp.com",
  databaseURL: "https://ktpoints-68071.firebaseio.com",
  projectId: "ktpoints-68071",
  storageBucket: "ktpoints-68071.appspot.com",
  messagingSenderId: "187794219081",
  appId: "1:187794219081:web:927feb9090d04768"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const fbOperation = firebase.firestore;

Vue.use(VueGoogleMaps, {
  load: {
    // Google API key
    key: '',
    // Enable more Google Maps libraries here
    libraries: "places"
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



export {
  db,
  auth,
  fbOperation,
  storage
};
