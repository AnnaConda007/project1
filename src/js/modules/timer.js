const timer = (id, deadline) => {
    const addZero = (number) => {
        if (number <= 9) {
            return '0' + number
        } else {
            return number
        }
    }

    const getTime = (endTime) => {
        const time = Date.parse(endTime) - Date.parse(new Date()) // из дедлайна вычитается настоящее время, оазница сохраняется в переменную
        const seconds = Math.floor((time / 1000) % 60) // все секунды поделили на 60(минут) и сохранили остаток
        const minutes = Math.floor((time / 1000) / 60) % 60 // все секунды сначала поделили на 60(часы), а потом еще раз на 60(минут) и сохранили остаток от деления
        const hours = Math.floor(((time / 1000) / 60 / 60) % 24) //все часы поделили на 24 и оставили остаток
        const days = Math.floor((time / 1000) / 60 / 60 / 24)

        return {
            total: time,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        }
    }

    const setClock = (selector, endTime) => {
        // объеденяем верстку и js
        const timer = document.querySelector(selector)
        const days = timer.querySelector('#days')
        const hours = timer.querySelector('#hours')
        const minutes = timer.querySelector('#minutes')
        const seconds = timer.querySelector('#seconds')
        const timeInterval = setInterval(updateClock, 1000)

        function updateClock() {
            // вставляем в верстку значения объекта(с 19 строки)
            const time = getTime(endTime)
            days.textContent = addZero(time.days)
            hours.textContent = addZero(time.hours)
            minutes.textContent = addZero(time.minutes)
            seconds.textContent = addZero(time.seconds)

            if (time.total <= 0) {
                days.textContent = '00'
                hours.textContent = '00'
                minutes.textContent = '00'
                seconds.textContent = '00'
                clearInterval(timeInterval)
            }
        }
    }

    setClock(id, deadline)
}

export default timer

/*
0.) getTime()  получает оставшееся время
1.) вызывается функция setClock(), которая вставляет значения из объектов в таймер на странице(просто статичные цифры)
2.) внутри setClock() вызывается setInterval(updateClock, 1000)
3.) updateClock() ежесекундно вызывает getTime(), которая обновляет оставшееся время и значения в мин, сек и далее
*/
