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
document.getElementById("toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelector("footer").classList.toggle("dark-mode");
});

// Renderiza tudo ao carregar
renderImoveis();

document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");
  const listaImoveis = document.getElementById("lista-imoveis");

  loading.style.display = "block";

  // Simulação de carregamento de dados
  setTimeout(() => {
    loading.style.display = "none";
    // Aqui você insere os cards
    listaImoveis.innerHTML = "<p>Imóveis carregados com sucesso!</p>";
  }, 2000);

  const toggleDarkButton = document.getElementById("toggle-dark");

  // Verifica se o modo escuro está salvo no localStorage
  if (localStorage.getItem("dark-mode") === "enabled") {
    enableDarkMode();
  }

  toggleDarkButton.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    document.querySelector("header").classList.add("dark-mode");
    document.querySelector("footer").classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  }

  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    document.querySelector("header").classList.remove("dark-mode");
    document.querySelector("footer").classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
  }
});
