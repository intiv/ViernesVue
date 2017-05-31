<template>
  <div><!--App.vue es el componente raiz, En el app esta el layout-->
	<div>	
		<router-link to="/">
			<button>Inti</button>
		</router-link>
		<router-link to="/hello">
			<button>Hello</button>
		</router-link>
	</div>
	<div>
		<router-view></router-view><!--Aqui se renderiza lo de cada ruta-->
	</div>
  </div>
</template>

<script>
import Inti from './components/Inti.vue'
export default {
  name: 'app',
  components: {
    Inti
  }
}
</script>
