/*Is there anything you wish to find for the Undertaker?*/

document.addEventListener("DOMContentLoaded", function () {
    const xValuesProfits = ["Extortion", "Burglarly", "Exports", "Legal Income", "Debt Collection", "Protection Income", "Contracts/Grants", "Import Tariff", "Other"];
    let profitValues = [22, 22, 22, 1, 1, 1, 1, 1, 3];
    const pieColorsProfits = [
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

    function updateProfitsChart() {
        new Chart("profChart", {
            type: "pie",
            data: {
                labels: xValuesProfits,
                datasets: [{
                    data: profitValues,
                    backgroundColor: pieColorsProfits
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Profits"
                }
            }
        });
    }

    updateProfitsChart();

    document.addEventListener("DOMContentLoaded", function () {

        let expendValues = [22, 22, 22, 1, 1, 1, 1, 1, 3];
        const xValuesExpenditures = ["Tax Men", "Weaponry", "Tools", "Vehicles", "Crew Wages", "Protection Fee", "Medical Service", "Legal Coveragef", "Community Service"];
        const pieColorsExpenditures = [
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

        function updateExpendituresChart() {
            new Chart("expenChart", {
                type: "pie",
                data: {
                    labels: xValuesExpenditures,
                    datasets: [{
                        data: expendValues,
                        backgroundColor: pieColorsExpenditures
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "Expedentures"
                    }
                }
            });
        }


        document.getElementById("calculateButton").addEventListener("click", function () {

            for (let i = 0; i < xValuesProfits.length; i++) {
                const inputValue = parseFloat(document.getElementById(`c${i}`).innerText);
                profitValues[i] += inputValue;
            }

            for (let i = 0; i < xValuesExpenditures.length; i++) {
                const inputValue = parseFloat(document.getElementById(`c${i + 9}`).innerText);
                expendValues[i] += inputValue;
            }


        });


        for (let i = 0; i < xValuesProfits.length; i++) {
            document.getElementById(`c${i}`).addEventListener("click", function () {
                const currentValue = parseFloat(document.getElementById(`c${i}`).innerText);
                document.getElementById(`c${i}`).innerText = currentValue + 1;
            });
        }

        for (let i = 0; i < xValuesExpenditures.length; i++) {
            document.getElementById(`c${i + 9}`).addEventListener("click", function () {
                const currentValue = parseFloat(document.getElementById(`c${i + 9}`).innerText);
                document.getElementById(`c${i + 9}`).innerText = currentValue + 1;
            });
        }

        updateProfitsChart();
        updateExpendituresChart();
    });
})

