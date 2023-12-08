

document.addEventListener("DOMContentLoaded", function () {
    // Variabel 1: Checkboxen
    const checkboxElement = document.getElementById("divStyle");

   //Alla textfält
    const textfieldsCollection = document.getElementsByClassName("textfield");
    const textfieldsArray = Array.from(textfieldsCollection);

    // Variabel 3: Knappen
    const submitButton = document.getElementById("submitButton");

    // Variabel 4: Div-elementet
    const customDivElement = document.getElementById("customDiv");

    
    function handleInput(e) {
        console.log('Target:', e.target);

        const fieldName = e.target.name;

        if (fieldName === 'content') {
            customDivElement.innerHTML = e.target.value;
        }
    }

   
    checkboxElement.addEventListener("change", function () {
 
        const colorInput = document.getElementById("color");
        const backgroundColor = colorInput.value;

      customDivElement.style.backgroundColor = backgroundColor;
    });

 
    textfieldsArray.forEach(function (textField) {
        textField.addEventListener("input", handleInput);
    });


    submitButton.addEventListener("click", function () {
        // Ta bort div-elementet från DOM-trädet
        customDivElement.remove();
    });
});

