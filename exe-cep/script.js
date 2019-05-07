// pegando elemento #cep HTML
const cep = document.getElementById('cep');

// escrevendo no console o valor do CEP
// console.log (cep.value)

cep.addEventListener('focusout', () =>{
    // console.log("FOCUS OUT")
    
    let cepVal = cep.value

    fetch(`https://viacep.com.br/ws/${cepVal}/json`)
    // console.log('https://viacep.com.br/ws/' + cep.value + '/json') outra forma de concatenar
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        // Pode usar os dados da API
        // console.log(data)
        // console.log(data.cep)
        document.getElementById('estado').value = data.uf;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('endereco').value = data.logradouro;
    })
    .catch((erro) =>{
        console.log(erro)
    })
})


// console.log(this.cep)
// fetch('https://viacep.com.br/ws/' + this.cep + '/json')
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log("foii");
// })
// .catch(function(erro){
//     console.log(erro);
// })


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
