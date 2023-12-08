
document.addEventListener("DOMContentLoaded", function () {
    // Variabel 1: Checkboxen
    const checkboxElement = document.querySelector("#divStyle");

    // Variabel 2: Alla textfält
    const textfieldsCollection = document.querySelectorAll(".textfield");

    // Variabel 3: Knappen
    const submitButton = document.getElementById("submitButton");

    // Variabel 4: Div-elementet
    const customDivElement = document.getElementById("customDiv");

    // Uppgift 5 - Skapa en fördefinierad funktion
    function handleInput(e) {
        console.log('Target:', e.target);

        const fieldName = e.target.name;

        if (fieldName === 'content') {
            customDivElement.innerHTML = e.target.value;
        }
    }

    // Eventlyssnare till checkboxen
    checkboxElement.addEventListener("change", function () {
        // Hämta färgen från input-fältet med namn/id "color"
        const colorInput = document.getElementById("color");
        const backgroundColor = colorInput.value;

        // Sätt bakgrundsfärgen på div-elementet
        customDivElement.style.backgroundColor = backgroundColor;
    });

    // Eventlyssnare till textfälten
    textfieldsCollection.forEach(function (textField) {
        textField.addEventListener("input", handleInput);
    });

    // Eventlyssnare till knappen
    submitButton.addEventListener("click", function () {
        // Ta bort div-elementet från DOM-trädet
        customDivElement.remove();
    });
});
