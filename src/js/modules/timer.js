const timer = (id, deadline) => {
    const addZero = (number) => {
        if (number <= 9) {
            return "0" + number
        } else {
            return number
        }
    }

    const getTime = (endTime) => {
        const time = Date.parse(endTime) - Date.parse(new Date())
        time = time * 1000
        const seconds = Math.floor(time % 60)
        const minutes = Math.floor(time / 60) % 60
        const hours = Math.floor((time / 1000 / 60 / 60) % 24)
        const days = Math.floor(time / 1000 / 60 / 60 / 24)

        return {
            "total": time,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        }
    }

    const setClock = (selector, endTime) => { // ???????????
        const timer = document.querySelector(selector)
        const days = timer.querySelector("#days")
        const hours = timer.querySelector("#hours")
        const minutes = timer.querySelector("#minutes")
        const seconds = timer.querySelector("#seconds")
        const timeInterval = setInterval(updateClock, 1000)

        function updateClock() {
            const time = getTime(endTime)// !??endTime задается при вызове функции с 19 строки ??
            days.textContent = addZero(time.days)
            hours.textContent = addZero(time.hours)
            minutes.textContent = addZero(time.minutes)
            seconds.textContent = addZero(time.seconds)

            if (time.total <= 0) {
                days.textContent = "00"
                hours.textContent = "00"
                minutes.textContent = "00"
                seconds.textContent = "00"
                clearInterval(timeInterval)
            }

        }


    }

    setClock(id, deadline)

}


export default timer