<template>
	<div>
		<div class="prueba"><h1>{{message}}</h1></div>
		<input type="text" placeholder="texto" v-model="message">
		<button v-on:click="sendHelloWorld()">Hola</button>
		<button v-on:click="toggleShow()">toggle</button>
		<button v-on:click="addRecord()">Add Record</button>
		<button v-on:click="removeRecord()">Remove Record</button>
		<div v-if="showDiv==='false'">
			<h1>cualquier cosa</h1>
		</div>
		<div v-for="record in list">
			<h3>{{record}}</h3>
		</div>
	</div>
</template>

<script>
	import Hello from './Hello.vue'

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
			Hello
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
