<template>
	<div id="root">
		<input type="text" v-model="book.titulo" :disabled="loading" placeholder="Titulo">
		<input type="text" v-model="book.genero" :disabled="loading" placeholder="Genero">
		<input type="text" v-model="book.autor" :disabled="loading" placeholder="Autor">
		<button v-on:click="createBook" :disabled="loading">Crear</button>
		<table>
			<thead>
				<tr>
					<th>titulo</th>
					<th>genero</th>
					<th>autor</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="book in books">
					<td>{{book.titulo}}</td>
					<td>{{book.genero}}</td>
					<td>{{book.autor}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
	
<script>
	export default{
		name: 'pity',
		data(){
			return{
				books: [],
				book:{

				},
				loading: false
			}
		},
		methods: {
			getBooks(){
				this.$http.get('http://localhost:8000/books').then((response)=>{
					this.books=response.body;
				});
			},
			createBook(){
				this.loading=true;
				this.$http.post('http://localhost:8000/books/create',this.book)
				.then((response)=>{
					this.loading=false;
					if(response.body.success){
						alert('Creado con exito!');
						this.getBooks();

					}else{
						alert('Error al crear');
					}
				});
			}
		},
		beforeMount(){
			this.getBooks();
		}
	}
</script>

<style scoped>
	table{
		border: 1px solid black;
	}
</style>