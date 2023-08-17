fetch('../json/testesample_b.json')
    .then(response => response.json())
    .then(sampleData => {
        var tbody = document.querySelector("#gene_table tbody");

        sampleData.forEach(function(sample) {
            var row = document.createElement("tr");

            var geneCell = document.createElement("td");
            geneCell.textContent = sample.data.gene;
            row.appendChild(geneCell);

            var positionCell = document.createElement("td");
            positionCell.textContent = sample.data.pos;
            row.appendChild(positionCell);
            
            var genotypeCell = document.createElement("td");
            genotypeCell.textContent = sample.genotype.gbMgrayjWpOO8zkrx.ADsum;
            row.appendChild(genotypeCell);

            // Adicione mais células conforme necessário

            tbody.appendChild(row);
        });
    });
