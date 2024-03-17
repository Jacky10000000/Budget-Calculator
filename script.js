/*Is there anything you wish to find for the Undertaker?*/

document.addEventListener("DOMContentLoaded", function () {

    // Profits chart data
    const profXValues = ["Extortion", "Burglary", "Exports", "Legal Income", "Debt Collection", "Protection Income", "Contracts/Grants", "Import Tariff", "Other"];
    const profYValues = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Initialize values to 0
    const profPieColors = [
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

    // Expenditures chart data
    const expenXValues = ["Tax Men", "Weaponry", "Tools", "Vehicles", "Crew Wages", "Protection Fee", "Medical Service", "Legal Coverage", "Community Service"];
    const expenYValues = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Initialize values to 0
    const expenPieColors = [
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

    // Function to update charts and calculate budget
    function updateChartsAndBudget() {
        // Update Profits chart
        profChart.data.datasets[0].data = profYValues;
        profChart.update();

        // Update Expenditures chart
        expenChart.data.datasets[0].data = expenYValues;
        expenChart.update();


        const totalProfits = profYValues.reduce((acc, val) => acc + val, 0);
        const totalExpenditures = expenYValues.reduce((acc, val) => acc + val, 0);


        const budget = totalProfits - totalExpenditures;


        const budgetDisplay = document.getElementById("demo");
        budgetDisplay.textContent = "$" + budget.toFixed(2);


        budgetDisplay.style.color = budget < 0 ? "#730c0c" : "#0E730C";


        const messageContainer = document.getElementById("message");


        if (budget > 0) {
            // Congratulate the user
            messageContainer.textContent = "Your making Some Good Cashflow, Keep Up Your Schemes.";
            messageContainer.style.color = "#0E730C";  // Green color
        } else if (budget < 0){
            // Roast the user
            messageContainer.textContent = "You suck At this Criminal thing, Maybe you should Hang your Hat Huh?";
            messageContainer.style.color = "#730c0c";  // Red color
        } else {
            // Neutral message
            messageContainer.textContent = "Your not making anything!? What's the Point of Crime Then?";
            messageContainer.style.color = "#333";  // Neutral color
        }
    }

    // Profits chart initialization
    const profChart = new Chart("profChart", {
        type: "pie",
        data: {
            labels: profXValues,
            datasets: [{
                data: profYValues,
                backgroundColor: profPieColors
            }]
        },
        options: {
            title: {
                display: true,
                text: "Profits"
            }
        }
    });


    const expenChart = new Chart("expenChart", {
        type: "pie",
        data: {
            labels: expenXValues,
            datasets: [{
                data: expenYValues,
                backgroundColor: expenPieColors
            }]
        },
        options: {
            title: {
                display: true,
                text: "Expenditures"
            }
        }
    });


    document.querySelectorAll('.calc input[type="range"]').forEach(function (input, index) {
        input.addEventListener('input', function () {

            if (index < 9) {
                profYValues[index] = parseInt(input.value) || 0;
            } else {
                expenYValues[index - 9] = parseInt(input.value) || 0;
            }


            updateChartsAndBudget();
        });
    });

    // Initial calculation
    updateChartsAndBudget();
});