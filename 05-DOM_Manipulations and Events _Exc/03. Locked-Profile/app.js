function lockedProfile() {
    let profiles = document.querySelectorAll('#container #main .profile');
    let buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach(x => x.addEventListener("click", onClickHandler));

    function onClickHandler(e) {
        let hiddenInfo = e.currentTarget.parentElement.querySelector("div");
        let curCheckedRadioBtn = e.currentTarget.parentElement.querySelector("input[type='radio']:checked");

        if (curCheckedRadioBtn.value === "unlock") {
            if (e.target.textContent === "Show more") {
                e.target.textContent = "Hide it";
                hiddenInfo.style.display = "block";
            }else{
                e.target.textContent = "Show more";
                hiddenInfo.style.display = "none";
            }
        }
    }
}