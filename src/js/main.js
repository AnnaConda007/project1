import "./slider"
import modals from "./modules/modals"
import tabs from "./modules/tabs"
import forms from "./modules/forms"
import changeCalkModalState from "./modules/changeCalkModalState"

window.addEventListener("DOMContentLoaded", function () {
   let calkModalState = {}
   changeCalkModalState(calkModalState)
   modals()
   tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active")
   tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click")
   forms(calkModalState)
   tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline-block")
})