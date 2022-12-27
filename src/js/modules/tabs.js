const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const tabElemets = document.querySelectorAll(tabSelector);
    const contents = document.querySelectorAll(contentSelector);

    const hideTabContent = () => {
        contents.forEach((content) => {
            content.style.display = "none";
        });
        tabElemets.forEach((tabElemet) => {
            tabElemet.classList.remove(activeClass);
        });
    };
    const showTabContent = (i = 0) => {
        contents[i].style.display = "block";
        tabElemets[i].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent();

    header.addEventListener("click", (e) => {
        const target = e.target;
        if (
            target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
        ) {
            tabElemets.forEach((tabElemet, i) => {
                if (target.parentNode == tabElemet || target == tabElemet) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;
