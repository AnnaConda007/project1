import "./slider"
import modals from "./modules/modals"
import tabs from "./modules/tabs"

window.addEventListener("DOMContentLoaded", function () {
   modals()
   tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active")
})