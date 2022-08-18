import fetch from "node-fetch";

// const url = "https://jsonplaceholder.typicode.com/posts/51";
const url = "https://viacep.com.br/ws/08505000/json/";

// Conectando com endpoint da API(URL)
fetch(url)
// Retorna resposta como JSON
.then(resposta => resposta.json())
// Exibir a resposta (obtida) no console
.then(dados => console.log(dados));