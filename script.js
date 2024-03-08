/*Is there anything you wish to find for the Undertaker?*/

const xValues = ["Extortion", "Burglarly", "Exports", "Legal Income", "Debt Collection", "Protection Income", "Contracts/Grants", "Import Tariff", "Other"];
const yValues = [22,22,22,1,1,1,1,1,3];
const barColors = [
  "#C3C2FF",
  "#ABC3FF",
  "#BDFF68",
  "#FFFBA5",
  "#9FFFC5",
  "#FFB7F3",
  "#FFB11A",
  "#FF7F7F",
  "white"
];

new Chart("profChart", {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Profits"
        }
    }
});