'use strict'

app.controller('HomeController', HomeController)

function HomeController(){

	var vm = this

 //Objetos
 vm.testefuncoes = {}

 vm.Cadastrar = function(){

 	vm.mensagem = 'Meu nome é ' + vm.testefuncoes.nome + ' meu sobrenome é ' + vm.testefuncoes.sobrenome +
 	' e meu e-mail é ' + vm.testefuncoes.email

 }


 vm.InserirProduto = function(){

 	vm.ListaDeProdutos.push(vm.produto)

 }


 vm.ListaDeProdutos = [
 {
 	codigo: 1,
 	descricao: 'Processador i7'
 },
 {
 	codigo: 2,
 	descricao: 'Modulo de Memoria'
 },
 {
 	codigo: 3,
 	descricao: 'Fonte 500w'
 },
 {
 	codigo: 4,
 	descricao: 'Placa de Video'
 }




 ]

}