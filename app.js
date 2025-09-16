// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo =document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");

function agregarAmigo() {
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML = "<h1>Pablo</h1>"
    
}