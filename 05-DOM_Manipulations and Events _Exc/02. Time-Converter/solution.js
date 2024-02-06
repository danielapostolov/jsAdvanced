function attachEventsListeners() {
    let buttons = document.querySelectorAll("input[type='button']");

    for (let btn of buttons) {
        btn.addEventListener('click', convertHandler);
    }

    function convertHandler(event) {
        let curUnitinput = event.currentTarget.parentElement.children[1];
        let inputValue = Number(curUnitinput.value);
        let curUnit = curUnitinput.id;

        switch (curUnit) {
            case "days": propagateNewValue(inputValue); break;
            case "hours": propagateNewValue(inputValue / 24); break;
            case "minutes": propagateNewValue(inputValue / 24 / 60); break;
            case "seconds": propagateNewValue(inputValue / 24 / 60 / 60); break;
        }

    }

    function propagateNewValue(days) {
        let inputs = document.querySelectorAll("input[type='text']");

        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }
}