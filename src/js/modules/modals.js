const modals = function(){    /* это функциональное выражение. Ссылка на ее содержимое(сама функция) 
передается в main.js и далее вызывается в функции при полной загрузке DOM*/
    function bindModal(triggerSelector, modalSelector, closeSelector){

        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector)
       
        trigger.forEach(function(item){
            item.addEventListener("click", function(e){
                if(e.target){
                 e.preventDefault()
                }
                modal.style.display = "block"
                document.body.classList.add("modal-open") 
            })
        })
      
        close.addEventListener("click", function(){    
            modal.style.display = "none"
            document.body.classList.remove("modal-open") 
        })

        modal.addEventListener("click", function(e){    
            if(e.target === modal){
                modal.style.display = "none"
                document.body.classList.remove("modal-open") 
            }
        })
    }
    function showModalByTime(selector, time){
        setTimeout(function(){
            document.querySelector(selector).style.display = "block"
            document.body.classList.remove("modal-open")
        },time)
    }

    bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close")
    bindModal(".phone_link", ".popup", ".popup .popup_close")
    showModalByTime(".popup", 60000)    /* при вызове showModalByTime автоматически появляется модульное окно. 
    Одновременно с загрузкой старницы запускается функция bindModal, где задаются события клику на крестик и 
    подложку формы*/
}

export default modals // команда для работы с "упаковщиками", не влияет на работу самого модального окна ?





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