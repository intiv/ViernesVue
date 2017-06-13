// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Inti from './components/Inti.vue'
import Hello from './components/Hello.vue'
import Viktor from './components/Viktor.vue'
import Pity from './components/Pity.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.credentials = true;

const router = new VueRouter({
	routes: [//arreglo de objetos
		{//cada ruta es un objeto
			name: 'Home',
			path: '/',
			component: Inti
		},
		{
			name: 'Hello',
			path: '/hello',
			component: Hello
		},
		{
			name: 'Viktor',
			path : '/viktor',
			component : Viktor
		},
		{
			name: 'Pity',
			path: '/books',
			component: Pity
		}
	]
})
new Vue({ // eslint-disable-line no-new
  router,
  render: (h) => h(App)
}).$mount('#app');
