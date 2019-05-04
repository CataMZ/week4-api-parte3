const cep = document.getElementById('cep');
// console.log(cep)
// pegar valor do input cep

// Exercício: criar o fetch para puxar o endereço ao digitar o cep, e colocar um evento no JS para só carregar o endereço quando eu sair do input do cep.

// Estrutura do Fetch

// fetch('url')
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data)
//     data.results.forEach(
//     )};
// })
// .catch(function(erro){
//     console.log(erro)
// })

fetch('https://viacep.com.br/ws/' + this.cep + '/json')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log("foii");


})
.catch(function(erro){
    console.log(erro);
})