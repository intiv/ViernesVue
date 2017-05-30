// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Inti from './components/Inti.vue'
import Hello from './components/Hello.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      name:'Home',
      path:'/',
      component:Inti
    },
    {
      name:'Hello',
      path:'/hello',
      component:Hello
    }
  ]
})

new Vue({ // eslint-disable-line no-new
  router,
  render: h => h(App)
}).$mount('#app');
