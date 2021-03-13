// Dom Variables
let yearInput = document.getElementsByClassName("yearInput")[0],

    monthInput = document.getElementsByClassName("monthInput")[0],

    dayInput = document.getElementsByClassName("dayInput")[0],

    lastMonth = document.getElementsByClassName("lastMonth")[0],

    lastDay = document.getElementsByClassName("lastDay")[0],

    happenDays = document.getElementsByClassName("happenDays")[0],

    confirm = document.getElementsByClassName("confirm")[0],

    resultList = document.getElementsByClassName("resultList")[0];

// Event

confirm.addEventListener("click", getFullDate);

/***************************************************************************************************/

// display current year as 'year input value' 
yearInput.value = new Date().getFullYear();

/***************************************************************************************************/

// 'option' for 'select distance'
for (let i = 21; i <= 35; i++) happenDays.innerHTML += `<option value=${i}>${i}</option>`

/***************************************************************************************************/

// 'option' for 'select day'
for (let i = 1; i <= 31; i++) dayInput.innerHTML += `<option value=${i}>${i}</option>`

/***************************************************************************************************/

// 'option' for 'select month'
for (let i = 1; i <= 12; i++) monthInput.innerHTML += `<option value=${i}>${i}</option>`

/***************************************************************************************************/

// function to get full date
function getFullDate() {

    // if any of these input is empty
    if (dayInput.value == 'Select Day'
        || monthInput.value == 'Select Month'
        || happenDays.value == 'Select Distance') {

        alert('Please Select All Fields')

        return false

    }

    // if not empty
    else {

        let userDate,
            year = new Date().getFullYear(),
            month = monthInput.value - 1,
            day = dayInput.value,
            distance = happenDays.value;

        userDate = new Date(year, month, day)

        // calculate ovulation date by add '8 days' to user day
        let ovulationDays = new Date(userDate.setDate(userDate.getDate() + 8))

        // calculate next period date by substract '8 days added to ovulation' + '1 day'
        let nxtPeriod = new Date(userDate.setDate(userDate.getDate() + Number(distance) - 9))

        // add 'original userDate' to Variable
        let date1 = userDate,

            // get now date
            date2 = new Date(),

            // calculate the difference between 'userDate Time' and 'now date Time'
            diffTime = Math.abs(date2 - date1),

            // divide 'difference Time result' / 'day time' to get 'days left'
            diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        resultList.innerHTML = '';

        //
        resultList.innerHTML +=
            `<li> Ovulation Days Starts At: <strong> ${ovulationDays.toDateString()} </strong> ,and lasts for 5 days </li>`

        //
        resultList.innerHTML += `<li>Next Period Date: <strong> ${nxtPeriod.toDateString()} </strong> </li>`

        //
        resultList.innerHTML += `<li><strong> ${diffDays} </strong> Days Left</li>`

    }

}

/***************************************************************************************************/