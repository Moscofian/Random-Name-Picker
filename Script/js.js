 // Array para armazenar os nomes
 let nomes = [];

 // Função para adicionar um nome à lista
 function adicionarNome() {
     let nome = document.getElementById('nome').value.trim();
     if (nome) {
         nomes.push(nome);
         atualizarLista();
         document.getElementById('nome').value = ''; // Limpa o campo de entrada
     } else {
         alert('Por favor, insira um nome.');
     }
 }

 // Função para atualizar a exibição da lista de nomes
 function atualizarLista() {
     let lista = document.getElementById('listaNomes');
     lista.innerHTML = ''; // Limpa a lista atual
     nomes.forEach((nome, index) => {
         let li = document.createElement('li');
         li.textContent = nome;
         lista.appendChild(li);
     });
 }

 // Função para escolher um nome aleatoriamente
 function escolherNome() {
     if (nomes.length === 0) {
         alert('Por favor, adicione pelo menos um nome.');
     } else {
         let indiceAleatorio = Math.floor(Math.random() * nomes.length);
         document.getElementById('resultado').innerText = "Nome escolhido: " + nomes[indiceAleatorio];
     }
 }