
document.addEventListener("DOMContentLoaded", function () {
    // Variabel 1: Checkboxen
    const checkboxElement = document.querySelector("#divStyle");

    // Variabel 2: Alla textfält
    const textfieldsCollection = document.querySelectorAll(".textfield");

    // Variabel 3: Knappen
    const submitButton = document.getElementById("submitButton");

    // Variabel 4: Div-elementet
    const customDivElement = document.getElementById("customDiv");

    // Fördefinierad funktion som eventlyssnare för inputfälten
    function handleInputEvent(e) {
        const fieldName = e.target.name;

        if (fieldName === "content") {
            customDivElement.innerHTML = "Innehåll från content-fältet: " + e.target.value;
        }
    }

    // Eventlyssnare till checkboxen
    checkboxElement.addEventListener("change", function () {
        const colorInput = document.getElementById("color");
        const backgroundColor = colorInput.value;

        customDivElement.style.backgroundColor = backgroundColor;
    });

    // Eventlyssnare till textfälten
    textfieldsCollection.forEach(function (textField) {
        textField.addEventListener("input", handleInputEvent);
        textField.addEventListener("blur", handleInputEvent); // Lägg till eventet 'blur'
    });

    // Eventlyssnare till knappen
    submitButton.addEventListener("click", function () {
        // Ta bort div-elementet från DOM-trädet
        customDivElement.remove();
    });
});
