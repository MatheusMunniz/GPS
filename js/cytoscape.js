// Gene network Data
const genes = [
  { id: 'ACTB', label: 'ACTB' },
  { id: 'BRCA1', label: 'BRCA1' },
  { id: 'EGFR', label: 'EGFR' },
  { id: 'TP53', label: 'TP53' },
  { id: 'MYC', label: 'MYC' },
  { id: 'PTEN', label: 'PTEN' },
  { id: 'KRAS', label: 'KRAS' },
  { id: 'RB1', label: 'RB1' },
  { id: 'BRAF', label: 'BRAF' },
  { id: 'PIK3CA', label: 'PIK3CA' },
  { id: 'ESR1', label: 'ESR1' },
  { id: 'CDKN2A', label: 'CDKN2A' },
  { id: 'ATM', label: 'ATM' },
  { id: 'ERBB2', label: 'ERBB2' },
  { id: 'MAPK1', label: 'MAPK1' },
  { id: 'AKT1', label: 'AKT1' },
  { id: 'MET', label: 'MET' },
  { id: 'NOTCH1', label: 'NOTCH1' },
  { id: 'FGFR2', label: 'FGFR2' },
  { id: 'SMAD4', label: 'SMAD4' },
  // ...
];

/* Define Gene connections */
const connections = [
  { source: 'ACTB', target: 'BRCA1' },
  { source: 'ACTB', target: 'EGFR' },
  { source: 'BRCA1', target: 'TP53' },
  { source: 'EGFR', target: 'MYC' },
  { source: 'TP53', target: 'PTEN' },
  { source: 'MYC', target: 'KRAS' },
  { source: 'PTEN', target: 'RB1' },
  { source: 'KRAS', target: 'BRAF' },
  { source: 'RB1', target: 'PIK3CA' },
  { source: 'ESR1', target: 'CDKN2A' },
  { source: 'CDKN2A', target: 'ATM' },
  { source: 'ATM', target: 'ERBB2' },
  { source: 'ERBB2', target: 'MAPK1' },
  { source: 'MAPK1', target: 'AKT1' },
  { source: 'AKT1', target: 'MET' },
  { source: 'MET', target: 'NOTCH1' },
  { source: 'NOTCH1', target: 'FGFR2' },
  { source: 'FGFR2', target: 'SMAD4' },
  // ...
];

// Inicialize o Cytoscape.js dentro da div 'network-container'
const cy = cytoscape({
  container: document.getElementById('network-container'),
  style: [
    {
      selector: 'node',
      style: {
        'background-color': '#0ed700',
        'label': 'data(label)',
        'width': '70px',
        'height': '70px',
        'text-valign': 'center',
        'text-halign': 'center',
        'font-size': '14px',
        'color': '#fff',
        'border-width': '1px',
        'border-color': '#0137a3'
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 2,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ],
  layout: {
    name: 'grid',
    rows: 2,
    spacingFactor: 1.5 // Ajuste o valor do spacingFactor para controlar a distância mínima entre os nós
  }
});


// Configure os nós
genes.forEach(gene => {
  cy.add({
    data: { id: gene.id, label: gene.label }
  });
});

// Configure as arestas
connections.forEach(connection => {
  cy.add({
    data: { source: connection.source, target: connection.target }
  });
});




/* BUTTONS */

// Adicione o evento de clique ao botão
document.getElementById('randomize-button').addEventListener('click', randomizePositions);

// Função para randomizar a posição dos nós
function randomizePositions() {
  cy.nodes().forEach(node => {
    const position = {
      x: Math.random() * cy.width(),
      y: Math.random() * cy.height()
    };
    node.position(position);
  });
}


const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  cy.layout({
    name: 'grid',
    rows: 2,
    spacingFactor: 1.5
  }).run();
});




// Adicione o evento de clique ao botão
document.getElementById('center-button').addEventListener('click', centerView);

// Função para centralizar a visualização e ajustar a distância
function centerView() {
  cy.fit();
  cy.zoom(1); // Ajuste o valor para controlar o nível de zoom
}



// Função para entrar no modo de tela cheia
function enterFullscreen() {
  var container = document.getElementById('network-container');

  if (container.requestFullscreen) {
    container.requestFullscreen();
  } else if (container.mozRequestFullScreen) { // Firefox
    container.mozRequestFullScreen();
  } else if (container.webkitRequestFullscreen) { // Chrome, Safari and Opera
    container.webkitRequestFullscreen();
  } else if (container.msRequestFullscreen) { // IE/Edge
    container.msRequestFullscreen();
  }
}

// Adicione o evento de clique ao botão de tela cheia
document.getElementById('fullscreen-button').addEventListener('click', enterFullscreen);