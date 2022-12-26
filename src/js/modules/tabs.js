const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector)
    const tabs = document.querySelectorAll(tabSelector)
    const contents = document.querySelectorAll(contentSelector)

    const hideTabContent = () => {
        contents.forEach((content) => {
            content.style.display = 'none'
        })
        tabs.forEach((tab) => {
            tab.classlist.remove(activeClass)
        })
    }

    const showTabContent = (i = 0) => {
        contents[i].style.display = 'block'
        tabs[i].tab.classlist.add(activeClass)
    }


    hideTabContent()
    showTabContent()


    header.addEventListener("click", (e) => {
        const target = e.target
        if (target.classlist.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classlist.contains(tabSelector.replace(/\./, ""))) {
            tabs.forEach((tab, i) => {
                if (target.parentNode == tab || target == tab) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })



}

export default tabs
