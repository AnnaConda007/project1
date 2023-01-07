import checkNumInputs from "./checkNumInputs"

const changeCalkModalState = (state) => {
    const windowFormTabs = window.document.querySelectorAll(".balcon_icons_img")
    const windowWidth = window.document.querySelectorAll("#width")
    const windowHeight = window.document.querySelectorAll("#height")
    const windowType = window.document.querySelectorAll("#view_type")
    const windowCheckbox = window.document.querySelectorAll(".checkbox")

    checkNumInputs("#width")
    checkNumInputs("#height")


    function addDataInObject(event, activeElement, propInObject) {

        activeElement.forEach((item, i) => {     //?? не прописано условие что i=0/1 и i++ при каждой итерации, но i все равно увеличивается. Это осебенность цикла forEach???
            item.addEventListener(event, () => {/* при клике запускаеися цикл, перебирается вся коллекция пока не будет совпадения между "кликнутым элементом" и одним из элементов коллекции. В одном из прошлых уроков было подобное. Но там было прописано e.target. Здесь его нет, но мы все равно узнаем в каокй именно по счету элемент мы кликнули. Что здесь за это отвечает?*/
                switch (item.nodeName) {
                    case "SPAN":
                        state[propInObject] = i
                        break;
                    case "INPUT":
                        if (item.getAttribute("type") === "radio") {
                            state[propInObject] = item.value
                        } else {
                            state[propInObject] = item.value
                        }
                        break;
                    case "SELECT":
                        state[propInObject] = item.value
                        break;
                }
                console.log(state)
            });
        });
    }



    addDataInObject("click", windowFormTabs, "formWindow")
    addDataInObject("input", windowWidth, "width")
    addDataInObject("input", windowHeight, "height")
    addDataInObject("change", windowType, "typeWindow")
    addDataInObject("change", windowCheckbox, "radio")

}






export default changeCalkModalState