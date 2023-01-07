const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = "block") => {
    const header = document.querySelector(headerSelector);
    const tabElemets = document.querySelectorAll(tabSelector);
    const contents = document.querySelectorAll(contentSelector);

    const hideTabContent = () => {
        contents.forEach((content) => {
            content.style.display = "none";
        });
        tabElemets.forEach((tabElement) => {
            tabElement.classList.remove(activeClass);
        });
    };
    const showTabContent = (i = 0) => {
        contents[i].style.display = display;
        tabElemets[i].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent();

    const handleAction = (e) => {
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
    };

    header.addEventListener("click", (e) => {
        handleAction(e);
    });

    header.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            handleAction(e);
        }
    });


};

export default tabs;
