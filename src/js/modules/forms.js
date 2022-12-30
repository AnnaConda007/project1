const forms = () => {
    const allForms = document.querySelectorAll("form")
    const allInputs = document.querySelectorAll("input")
    const allPhoneInputs = document.querySelectorAll(`input[name="user_phone"]`)


    const message = {
        loading: "Загрузка....",
        success: "Спасибо, мы с вами свяжемся",
        failure: "Что-то пошло не так.."
    }

    allPhoneInputs.forEach((phoneInput) => {
        phoneInput.addEventListener("input", () => {
            phoneInput.value = phoneInput.value.replace(/\D/, "")
        })
    })

    const postData = async (url, data) => {
        document.querySelector("status").innerHTML = message.loading // попробовать заменить на statusMessageSection.innerHTML
        let resultFetch = await fetch(url, {   // отправляем даннные формы на сервер
            method: "POST",
            body: data
        })
        return await resultFetch.text()  //возвращаем результат вызова resultFetch в текстовом формате, то есть получаем ответ от сервера?

    }

    const clearAllInputs = () => {
        allInputs.forEach(input => {
            input.value = ""
        });
    }

    allForms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            let statusMessageSection = document.createElement("div")
            statusMessageSection.classList.add("status")
            form.appendChild(statusMessageSection)

            const formData = new FormData(form)
            postData("assets/server.php", formData)
                .then((resultFetch) => {
                    console.log(resultFetch)
                    statusMessageSection.innerHTML = message.success
                }) // мы можем обратиться к resultFetch, которая лежит в области видимости postData(), так как вернули ее в конце вызова postData()
                .catch(() => { statusMessageSection.innerHTML = message.failure })
                .finally(() => {
                    clearAllInputs()
                    setTimeout(() => {
                        statusMessageSection.remove()
                    }, 5000);
                })
        })
    })



}

export default forms