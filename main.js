// Geração dinâmica dos cards
const container = document.getElementById('lista-imoveis');
const inputCidade = document.getElementById('busca-cidade');
const selectPreco = document.getElementById('faixa-preco');

function renderImoveis(filtroCidade = '', filtroPreco = '') {
  container.innerHTML = ''; // limpa os cards
  const listaFiltrada = imoveis.filter(imovel => {
    const matchCidade = imovel.cidade.toLowerCase().includes(filtroCidade.toLowerCase());
    const matchPreco = filtroPreco ? imovel.preco <= parseInt(filtroPreco) : true;
    return matchCidade && matchPreco;
  });

  if (listaFiltrada.length === 0) {
    container.innerHTML = '<p class="sem-resultados">Nenhum imóvel encontrado.</p>';
    return;
  }

  listaFiltrada.forEach(imovel => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${imovel.imagem}" alt="${imovel.titulo}">
      <div class="card-content">
        <h3>${imovel.titulo}</h3>
        <p>R$ ${imovel.preco.toLocaleString('pt-BR')} - ${imovel.cidade}</p>
        <button onclick="verDetalhes(${imovel.id})">Ver detalhes</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function verDetalhes(id) {
  // Armazena o ID selecionado para usar na página de detalhes
  localStorage.setItem('imovelSelecionado', id);
  window.location.href = 'detalhes.html';
}

// Filtros
inputCidade.addEventListener('input', () => {
  renderImoveis(inputCidade.value, selectPreco.value);
});

selectPreco.addEventListener('change', () => {
  renderImoveis(inputCidade.value, selectPreco.value);
});

// Modo escuro
const toggleBtn = document.getElementById('toggle-dark');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Renderiza tudo ao carregar
renderImoveis();
