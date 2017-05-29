<template>
	<div>
		<div class="prueba"><h1>{{message}}</h1></div>
		<input type="text" placeholder="texto" v-model="message">
		<button v-on:click="sendHelloWorld()">Hola</button>
		<div class="prueba"><h1>{{message}}</h1></div>
	</div>
</template>

<script>
	import Hello from './Hello.vue'

	export default{
		name: 'inti',
		data(){
			return {
				nombre:'Inti Velasquez',
				message: 'Hola como estan?'
			}
		},
		components: {
			Hello
		},
		methods: {
			sendHelloWorld(){
				this.message='Mi nombre es inti'
			}
		},
		beforeMount(){
			//this.message=this.sendHelloWorld()
		}
	}
</script>

<style scoped>
	.prueba{
		background-color: gray;
	}
</style>
