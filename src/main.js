import Vue from 'vue'
import VueX from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.config.devtools = true;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueX);

new Vue({
  el: '#app',
  render: h => h(App)
})
