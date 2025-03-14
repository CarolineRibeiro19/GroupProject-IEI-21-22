/*Função gráfico*/

function desenhaGrafico() {
    $("#grafico-colunas").highcharts({
    chart: { type: "column" },
    title: { text: "NFTS mais caros de 2021 - obras" },
    xAxis: { categories: ["Everydays: The First 5000 Days (Beeple)", "CryptoPunk #7523", "Human One (Beeple)", "The Merge (Pak)", "CryptoPunk #3100 "]
    },
    series:[
    { name: "milhões de dólares",
    data: [69.3, 11.75, 28.98, 91.8, 7.67 ]
        },
      ]
    });
};