import Vue from "vue";
import App from "./App.vue";
import VueClipboard from "vue-clipboard2";
import "./main.css";

Vue.config.productionTip = false;

Vue.use(VueClipboard);

new Vue({
  render: h => h(App)
}).$mount("#app");
