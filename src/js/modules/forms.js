const forms = () => {
    const allForms = document.querySelectorAll("form");
    const allInputs = document.querySelectorAll("input");
    const allPhoneInputs = document.querySelectorAll(`input[name="user_phone"]`);

    const message = {
        loading: "Загрузка....",
        success: "Спасибо, мы с вами свяжемся",
        failure: "Что-то пошло не так..",
    };

    allPhoneInputs.forEach((phoneInput) => {
        phoneInput.addEventListener("input", () => {
            phoneInput.value = phoneInput.value.replace(/\D/, "");
        });
    });

    const postData = async (url, data) => {
        document.querySelector("status").innerHTML = message.loading;
        const resultFetch = await fetch(url, {// url сервера, на который отправляются данные и от которого получим ответ 
            // отправляем даннные формы на сервер
            method: "POST",
            body: data,
        });
        return await resultFetch.text(); //возвращаем результат вызова resultFetch в текстовом формате, то есть получаем ответ от сервера?
    };

    const clearAllInputs = () => {
        allInputs.forEach((input) => {
            input.value = "";
        });
    };

    allForms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const statusMessageSection = document.createElement("div");
            statusMessageSection.classList.add("status");
            form.appendChild(statusMessageSection);

            const formData = new FormData(form);/*это функция конструктор. Обычно пришется сама функция, в теле которой прописывается как 
            именно заполняется объект, и далее при вызове функции церез new объект заполняется. Но это уже готовый вариант, с прописанной логикой 'FormData()' */
            postData("assets/server.php", formData) /* вызываем функцию postData() внутри которой делаем запрос fetch. 
            Браузер ждет пока запрос будет отправлен по указанному адресу и придет ответ об отправке.*/
                .then((resultFetch) => {
                    /* и когда браузер получит ответ - выполняется промис заданный запросом fetch, на данной строке 
                          функция в then получает результат выполнения промиса(resolve)*/
                    console.log(resultFetch);
                    statusMessageSection.innerHTML = message.success;
                }) // мы можем обратиться к resultFetch, которая лежит в области видимости postData(), так как вернули ее в конце вызова postData()
                .catch(() => {
                    statusMessageSection.innerHTML = message.failure;
                }) /* catch отлавливает ошибку в промисе и задает действия при обнаружении ошибки.
                Это тоже самое, что записать в промисе значение reject и обратится к нему через .then*/
                .finally(() => {
                    //независимо от результата, как только запрос выполнится, то есть браузер получит ответ - что данные ушли (мы получим ответ от сервера), выполнится setTimeout
                    clearAllInputs();
                    setTimeout(() => {
                        statusMessageSection.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;
