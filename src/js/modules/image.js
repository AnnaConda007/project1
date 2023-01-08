const images = () => {
    const div = document.createElement("div")
    const wrapSection = document.querySelector(".works")
    const img = document.createElement("img")

    div.classList.add("popup")
    wrapSection.appendChild(div)
    div.style.justifyContent = "center"
    div.style.alignItems = "center"
    div.style.display = "none"
    div.appendChild(img)

    wrapSection.addEventListener("click", (e) => {
        e.preventDefault()
        const target = e.target
        if (target && target.classList.contains("preview")) {
            div.style.display = "flex"
            const linkToImg = target.parentNode.getAttribute("href")
            img.setAttribute("src", linkToImg)
        }
        if (target && target.matches("div.popup")) {
            div.style.display = "none"
        }
    })


}


export default images