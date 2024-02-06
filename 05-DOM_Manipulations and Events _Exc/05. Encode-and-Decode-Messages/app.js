function encodeAndDecodeMessages() {
    let btns = Array.from(document.querySelectorAll("button"));
    btns.forEach(btn => btn.addEventListener("click", onClickHandler));

    function onClickHandler(e) {
        let message = "";

        let textArea1 = document.querySelectorAll("textarea")[0];
        let textArea2 = document.querySelectorAll("textarea")[1];

        if (e.currentTarget.textContent.includes("Encode")) {

            for (let i = 0; i < textArea1.value.length; i++) {
                let newCharCode = textArea1.value.charCodeAt(i) + 1;
                message += String.fromCharCode(newCharCode);
            }
            textArea2.value = message;
            textArea1.value = "";
        } else {
            
            for (let i = 0; i < textArea2.value.length; i++) {
                let newCharCode = textArea2.value.charCodeAt(i) - 1;
                message += String.fromCharCode(newCharCode);
            }
            textArea2.value = message;
        }
    }
}