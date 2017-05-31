<template>
	<div>
		<h1>{{nombre}}</h1>
		<input type="text" v-model="message">
		<p>{{reverseMessage}}</p>
	</div>
</template>

<script>
	export default{
		name: 'viktor',
		data(){
			return{
				message: this.mensaje
			}
		},
		props: ['nombre','mensaje'],
		computed : {
			reverseMessage(){
				return this.message.split("").reverse().join("");
			}
		},
		watch: {
			message(val,oldVal){
				console.log('oldVal: ',oldVal,' val: ',val);

			}
		},
		beforeMount(){
			console.log('Hola');
		},
		destroyed(){
			console.log('Adios');
		}
	}
</script>

<style scoped>
	
</style>