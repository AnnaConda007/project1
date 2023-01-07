const modals = function () {
  /* это функциональное выражение. Ссылка на ее содержимое(сама функция) 
передается в main.js и далее вызывается в функции при полной загрузке DOM*/

  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = "true") {
    const triggers = document.querySelectorAll(triggerSelector)
    const modal = document.querySelector(modalSelector)
    const close = document.querySelector(closeSelector)
    const AllModalWindows = document.querySelectorAll("[data-modal]")
    const closeAllModalWindow = () => {
      AllModalWindows.forEach((ModalWindow) => {
        ModalWindow.style.display = "none"
      })
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault()
        }
        if (trigger.classList.contains("popup_calc_button")) { /* отловить пустой input*/ }
        closeAllModalWindow()
        modal.style.display = 'block'
        document.body.classList.add('modal-open')
      })

    })
    const closeModal = () => {
      modal.style.display = 'none'
      document.body.classList.remove('modal-open')
    }
    window.addEventListener('keydown', (e) => {
      if (e.code == 'Escape') {
        closeModal()
      }
    })
    close.addEventListener('click', () => {
      closeModal()
    })
    modal.addEventListener('click', () => {
      closeModal()
    })


    const showModalByTime = (selector, time) => {
      setTimeout(function () {
        document.querySelector(selector).style.display = 'block'
        document.body.classList.remove('modal-open')
      }, time)
    }
    showModalByTime('.popup', 60000)
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
  bindModal('.phone_link', '.popup', '.popup .popup_close')
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close")
  bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false)
  bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false)
}
export default modals // команда для работы с "упаковщиками", не влияет на работу самого модального окна

/* при вызове showModalByTime автоматически появляется модульное окно. 
    Одновременно с загрузкой старницы запускается функция bindModal, где задаются события клику на крестик и 
    подложку формы*/
/* 
1) создается функция  bindModal, которая принимает атрибуты:
-элемента, на который кликают, 
-самого модульного окна
-закрывающего элемента

2) при клике на нужный элемент:
- задаются  соответствующие стили модульному окну и прерывается обновление страницы

3) при клике на закрывающий элемент:
- задаются  соответствующие стили модульному окну  

4) само модульное окно становится закрывающим элементом(так как modal - это блок,
     включающий в себя сначала "фон, подложку" а потом саму форму )
*/
