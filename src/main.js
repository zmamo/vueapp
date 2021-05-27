import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import VueTailwind from "vue-tailwind";
// import settings from '@/vue-tailwind/settings.js'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard'
// vue-form-wizard/dist/vue-form-wizard.min.css

Vue.config.productionTip = false;

Vue.use(VueTailwind,VueFormWizard);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
