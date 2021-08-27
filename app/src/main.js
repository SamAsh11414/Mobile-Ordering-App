import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app"

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDb0qvXE5dE3LH_-zLbKuf19eJPLu9C4w0",
  authDomain: "bths-contactless-catering.firebaseapp.com",
  projectId: "bths-contactless-catering",
  storageBucket: "bths-contactless-catering.appspot.com",
  messagingSenderId: "196219706979",
  appId: "1:196219706979:web:b8cce0ef616d1d3fe62256",
  measurementId: "G-YD27CPGZ3P"   
});
console.log(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
