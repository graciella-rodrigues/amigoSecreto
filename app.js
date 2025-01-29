let digiteNome;
let listaNomes= [];

function adicionarAmigo (){
    digiteNome= document.querySelector("#amigo").value;
    listaNomes.push(digiteNome);
    document.querySelector("#listaAmigos").innerHTML=listaNomes;   
}

function sortearAmigo(){
    let ganhador=listaNomes[Math.floor(Math.random()*(listaNomes.length))];
    document.querySelector("#resultado").innerHTML=ganhador;
}