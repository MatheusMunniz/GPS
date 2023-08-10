//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// SEARCH BY GENE



// RISK SCORES //
  // risk-box //
  document.querySelectorAll('.risk-box').forEach((box) => {
    box.addEventListener('shown.bs.collapse', () => {
      box.classList.remove('collapsed'); // Remova a classe 'collapsed' para ajustar a altura
    });

    box.addEventListener('hidden.bs.collapse', () => {
      box.classList.add('collapsed'); // Adicione a classe 'collapsed' para definir a altura de 10px
    });
  });


  // profile //
//Location bar

function posicionarGeneLocation(element) {
  var valor = element.dataset.bsOriginalTitle; // Obtém o valor do atributo 'data-bs-original-title'
  var margemEsquerda = Math.floor(Math.random() * 141); // Números aleatórios entre 0 e 140
  element.style.marginLeft = margemEsquerda + 'px';
  element.setAttribute('title', `Position = ${valor}`);
}

var geneLocations = document.querySelectorAll('.barrinha > .gene-location');

geneLocations.forEach(function (geneLocation, index) {
  if (index % 2 === 0) {
    geneLocation.classList.add('barrinha-cinza');
  } else {
    geneLocation.classList.add('barrinha-branco');
  }
});

var geneLocations = document.querySelectorAll('.gene-location');
geneLocations.forEach(function(element) {
  posicionarGeneLocation(element);
  var tooltip = new bootstrap.Tooltip(element);
});



// Obter o elemento do campo de pesquisa
var searchInput = document.getElementById("searchInput");

// Adicionar um ouvinte de evento de entrada para o campo de pesquisa
searchInput.addEventListener("input", pesquisar);

function pesquisar() {
  // Obter o valor digitado na caixa de pesquisa
  var texto = searchInput.value.toLowerCase();

  // Obter todas as linhas da tabela
  var linhas = document.getElementById("gene-table").getElementsByTagName("tr");

  // Contar a quantidade de resultados encontrados
  var count = 0;

  // Percorrer todas as linhas da tabela
  for (var i = 0; i < linhas.length; i++) {
    var coluna = linhas[i].getElementsByTagName("td")[0];

    // Verificar se a pesquisa está vazia
    if (texto.trim() === "") {
      // Ocultar o h5 e mostrar todas as linhas da tabela
      document.getElementById("genePesquisado").style.display = "none";
      mostrarTodasLinhas();
      return;
    }

    // Verificar se o valor da coluna contém o texto pesquisado
    if (coluna) {
      var conteudo = coluna.textContent || coluna.innerText;
      if (conteudo.toLowerCase().indexOf(texto) > -1) {
        linhas[i].style.display = "";
        count++;
      } else {
        linhas[i].style.display = "none";
      }
    }
  }
  // Mostrar a quantidade de resultados e o texto pesquisado acima da tabela
  var genePesquisado = document.getElementById("genePesquisado");
  genePesquisado.textContent = `${count} results with query "${texto}"`;
  genePesquisado.style.display = "block";
}

function mostrarTodasLinhas() {
  var linhas = document.getElementById("gene-table").getElementsByTagName("tr");
  for (var i = 0; i < linhas.length; i++) {
    linhas[i].style.display = "";
  }
}


// Educational

$('#play').on('click', function (e) {
  e.preventDefault();
  $("#player")[0].src += "?autoplay=1";
  $('#player').show();
  $('#video-cover').hide();
})
$('#modal1').on('hidden.bs.modal', function (e) {
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});



// CHAT

function toggleChatBox() {
  const chatBox = document.getElementById("chatBox");
  const chatTab = document.querySelector(".chat-tab");

  if (chatBox.classList.contains("chat-open")) {
    chatBox.classList.remove("chat-open");
    chatTab.classList.remove("chat-closed");
  } else {
    chatBox.classList.add("chat-open");
    chatTab.classList.add("chat-closed");
  }
}