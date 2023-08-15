// Carrega os dados de amostra do arquivo JSON
fetch('testesample_b.json')
    .then(response => response.json())
    .then(sampleData => {
        sampleData.forEach(function(sample) {
            var row = document.createElement("tr");
            var idCell = document.createElement("td");
            idCell.textContent = sample._id;
            row.appendChild(idCell);

            var geneCell = document.createElement("td");
            geneCell.textContent = sample.data.gene;
            row.appendChild(geneCell);

            var positionCell = document.createElement("td");
            positionCell.textContent = sample.data.pos;
            row.appendChild(positionCell);

            // Adicione mais células conforme necessário

            document.querySelector("table").appendChild(row);
        });
    });
    