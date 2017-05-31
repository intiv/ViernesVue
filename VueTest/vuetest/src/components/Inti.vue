<template>
	<div>
		<h1>{{message}}</h1>
		<viktor nombre="viktor" :mensaje="message"></viktor>
	</div>
</template>

<script>
	import Hello from './Hello.vue'
	import Viktor from './Viktor.vue'
	export default{
		name: 'inti',
		data(){
			return {
				nombre:'Inti Velasquez',
				message: 'Hola como estan?',
				showDiv: 'true',
				list: [ ]
			}
		},
		components: {
			Hello,
			Viktor
		},
		methods: {
			sendHelloWorld(){
				this.message='Mi nombre es inti'
			},
			toggleShow(){
				if(this.showDiv==='true'){
					this.showDiv='false';
				}else{
					this.showDiv='true';
				}
			},
			addRecord(){
				this.list.push(this.message);
			},
			removeRecord(){
				this.list.pop();
			}
		},
		beforeMount(){
			//this.message=this.sendHelloWorld()
		}
	}
</script>

<style scoped>
	.prueba{
		background-color: brown;
	}
</style>
