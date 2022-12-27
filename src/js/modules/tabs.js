const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector)
    const tabElemets = document.querySelectorAll(tabSelector)
    const contents = document.querySelectorAll(contentSelector)

    const hideTabContent = () => {
        contents.forEach((content) => {
            content.style.display = 'none' /* каждый таб на стринце скрыт (но по умолчанию отображается "холодное/теплое остекление",
             почему они не пропадают, даже если везде удалить функцию showTabContent )*/
        })
        tabElemets.forEach((tabElemet) => {
            tabElemet.classList.remove(activeClass) /*у каждого таба удаляется activeClass, просто не отображается синяя
             подсветка tab, вообще у всех  */
        })
    }
    const showTabContent = (i = 0) => {
        contents[i].style.display = 'block';
        tabElemets[i].classList.add(activeClass)
    }

    hideTabContent()
    showTabContent()


    header.addEventListener("click", (e) => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
            tabElemets.forEach((tab, i) => {  /*при клике "пробегаемся по всем tab-ам, проверяем соответствует ли кликнутый элемент 
            очередному tab-у, если нет, то следующая итерация, как только кликнутый элемент совпал с одним из tab, запоминаем i и 
            showTabContent отображает блок  определенной очередности, равной i "*/
                if (target.parentNode == tab || target == tab) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })



}

export default tabs
