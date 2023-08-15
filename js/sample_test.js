// Carrega os dados de amostra do arquivo JSON
fetch('../json/testesample_b.json')
    .then(response => response.json())
    .then(sampleData => {
        var table = document.getElementById("gene_table");

        sampleData.forEach(function(sample) {
            var row = document.createElement("tr");

            var geneCell = document.createElement("td");
            geneCell.textContent = sample.data.gene;
            row.appendChild(geneCell);

            var positionCell = document.createElement("td");
            positionCell.textContent = sample.data.pos;
            row.appendChild(positionCell);

            // Adicione mais células conforme necessário

            table.appendChild(row);
        });
    });