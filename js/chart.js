// thirdpage


 // GRÁFICO 1 Trait category pie chart
 var ctxPieChart = document.getElementsByClassName('line-chart')[0];
 var chartPieGraph = new Chart(ctxPieChart, {
   type: 'doughnut',
   data: {
     labels: ['Cancer', 'Biological process', 'Cardiovascular disease', 'Digestive system disorder', 'Metabolic disorder', 'Other disease'],
     datasets: [{
       label: '# of Votes',
       data: [12, 19, 3, 5, 2, 3],
       borderWidth: 1
     }]
   },
   options: {
     plugins: {
       legend: {
         position: 'right',
         labels: {
           font: {
             size: 10
           }
         }
       }
     }
   },
   layout: {
     padding: {
       left: 0,
       right: 0,
       top: 50,
       bottom: 0
     }
   },
   elements: {
     canvas: {
       width: 200,
       height: 100
     }
   }
 });

 // Função para atualizar a cor de fundo e a opacidade das <li> de "categories" e exibir a <ul> "traits"
 function updateCategoryBackground(clickedIndex) {
   var categoriesList = document.getElementById('categories').getElementsByTagName('li');
   var traitsList = document.getElementById('traits');

   // Remove a cor de fundo e a borda de todas as <li> de "categories"
   for (var i = 0; i < categoriesList.length; i++) {
     if (i === clickedIndex) {
       categoriesList[i].style.backgroundColor = chartPieGraph.data.datasets[0].backgroundColor[i];
       categoriesList[i].style.opacity = '1';
       categoriesList[i].style.border = '2px solid #f3f3f3';
     } else {
       categoriesList[i].style.opacity = '0.5';
       categoriesList[i].style.border = '';
     }
   }

   // Define a cor de fundo das <li> de "traits" como a cor correspondente à <li> selecionada de "categories"
   for (var i = 0; i < traitsList.children.length; i++) {
     traitsList.children[i].style.backgroundColor = chartPieGraph.data.datasets[0].backgroundColor[clickedIndex];
   }

   // Exibe a <ul> "traits"
   traitsList.style.display = 'block';
 }

 // Define as cores de fundo iniciais das <li> de "categories" como as cores correspondentes do gráfico
 var categoriesList = document.getElementById('categories').getElementsByTagName('li');
 for (var i = 0; i < categoriesList.length; i++) {
   categoriesList[i].style.backgroundColor = chartPieGraph.data.datasets[0].backgroundColor[i];
   categoriesList[i].style.opacity = '1';
   // Adiciona evento de clique às <li> de "categories"
   categoriesList[i].addEventListener('click', function (evt) {
     var liIndex = Array.from(categoriesList).indexOf(evt.currentTarget);
     updateCategoryBackground(liIndex);
   });
 }

 // Esconde a <ul> "traits" inicialmente
 var traitsList = document.getElementById('traits');
 traitsList.style.display = 'none';

 // Adiciona evento de clique ao gráfico
 ctxPieChart.onclick = function (evt) {
   handleChartClick(evt);
 };

 // Função para tratar o clique no gráfico e na legenda
 function handleChartClick(evt) {
   var activePoints = chartPieGraph.getElementsAtEventForMode(evt, 'point', chartPieGraph.options);
   if (activePoints.length > 0) {
     var clickedIndex = activePoints[0].index;
     updateCategoryBackground(clickedIndex);
   }
 }
