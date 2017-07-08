'use strict'

app.controller('ProdutoController', ProdutoController)

function ProdutoController($http){

	var vm = this

	vm.Produto = {}
	vm.Produtos = []


	vm.ListarUm = function(id) {
		$http({
			method: 'GET',
			url: '/api/v1/produto/retrieve/' + id
		}).then(function(ret){
			vm.Produto = ret.data
		})
	}

	vm.ListarTodos = function(){
		$http({
			method: 'GET',
			url: '/api/v1/produto/retrieve'
		}).then(function(ret){
			vm.Produtos = ret.data
		})
	}

	vm.Gravar = function(){
		if ( vm.Produto._id) {
			$http({
				method: 'POST',
				url: '/api/v1/produto/update',
				data: vm.Produto
			}).then(function(ret){
				vm.Produto = {}
				vm.ListarTodos()
				vm.Produto = {}
			})
		} else { 
			$http({
				method: 'POST',
				url: '/api/v1/produto/create',
				data: vm.Produto
			}).then(function(ret){
				vm.ListarTodos()
				vm.Produto = {}
			})
		}
	}

	vm.Deletar = function(id){
		if(confirm('Atencao\nVoce realmente deseja remover esse registro?')){
			$http({
				method: 'GET',
				url: '/api/v1/produto/delete/' + id
			}).then(function(ret){
				vm.ListarTodos()
				alert('Produto removido com sucesso.')
			})
		}

	}


}