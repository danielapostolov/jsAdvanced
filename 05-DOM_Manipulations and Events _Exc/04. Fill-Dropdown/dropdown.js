function addItem() {
    let selectMenu = document.getElementById("menu");
    let textInput = document.getElementById("newItemText");
    let keyInput = document.getElementById("newItemValue");

    let option = document.createElement("option");

    option.text = textInput.value;
    option.value = keyInput.value;

    selectMenu.appendChild(option);

    textInput.value = "";
    keyInput.value = "";
}