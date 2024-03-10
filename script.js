/*Is there anything you wish to find for the Undertaker?*/

document.addEventListener("DOMContentLoaded", function () {
    const xValues = ["Extortion", "Burglarly", "Exports", "Legal Income", "Debt Collection", "Protection Income", "Contracts/Grants", "Import Tariff", "Other"];
    const yValues = [22, 22, 22, 1, 1, 1, 1, 1, 3];
    const pieColors = [
        "#C3C2FF",
        "#ABC3FF",
        "#BDFF68",
        "#FFFBA5",
        "#9FFFC5",
        "#FFB7F3",
        "#FFB11A",
        "#FF7F7F",
        "#FFFFFF"
    ];

    new Chart("profChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                data: yValues,
                backgroundColor: pieColors
            }]
        },
        options: {
            title: {
                display: true,
                text: "Profits"
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {

    const xValues = ["Tax Men", "Weaponry", "Tools", "Vehicles", "Crew Wages", "Protection Fee", "Medical Service", "Legal Coveragef", "Community Service"];
    const yValues = [22, 22, 22, 1, 1, 1, 1, 1, 3];
    const pieColors = [
        "#000000",
        "#911111",
        "#B1421F",
        "#171C8B",
        "#0E730C",
        "#267090",
        "#8C3952",
        "#057E86",
        "#7A1111"
    ];

    new Chart("expenChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                data: yValues,
                backgroundColor: pieColors
            }]
        },
        options: {
            title: {
                display: true,
                text: "Expedentures"
            }
        }
    });
});