const years = document.getElementById('years')
const months = document.getElementById('months')
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

function getDateNow() {
    setInterval(
        () => {
            let a = moment();
            let b = moment([2013, 10, 4, 21, 56, 0]);
            let yearsFromNow = a.diff(b, 'Y')
            let monthsFromNow = a.diff(b, 'M')
            let daysFromNow = a.diff(b, 'd')
            let hoursFromNow = a.diff(b, 'h')
            let minutesFromNow = a.diff(b, 'm')
            let secondsFromNow = a.diff(b, 's')
            years.innerHTML = yearsFromNow
            months.innerHTML = monthsFromNow
            days.innerHTML = daysFromNow
            hours.innerHTML = hoursFromNow
            minutes.innerHTML = minutesFromNow
            seconds.innerHTML = secondsFromNow
        }, 
        1000
    )
}

getDateNow()
