const checkNumInputs = (selector) => {
    const numInpits = document.querySelectorAll(selector)

    numInpits.forEach((input) => {
        input.addEventListener("input", () => {
            input.value = input.value.replace(/\D/, "");
        });
    });
}

export default checkNumInputs





