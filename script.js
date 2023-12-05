ocument.addEventListener("DOMContentLoaded", function () {
    // Variabel 1: Checkboxen
    const checkboxElement = document.getElementById("divStyle");

    // Variabel 2: Alla textfält
    const textfieldsCollection = document.getElementsByClassName("textfield");

    // Variabel 3: Knappen
    const submitButton = document.getElementById("submitButton");

    // Variabel 4: Div-elementet
    const customDivElement = document.getElementById("customDiv");

    // Fördefinierad funktion som eventlyssnare för inputfälten
    function handleInputEvent(e) {
        console.log("Avsändare: " + e.target);

        const fieldName = e.target.name;

        if (fieldName === "content") {
            customDivElement.innerHTML = "Innehåll från content-fältet: " + e.target.value;
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
    for (let i = 0; i < textfieldsCollection.length; i++) {
        textfieldsCollection[i].addEventListener("input", handleInputEvent);
    }

    // Eventlyssnare till knappen
    submitButton.addEventListener("click", function () {
        // Göm div-elementet istället för att ta bort det
        customDivElement.style.display;// "none"
    });
});