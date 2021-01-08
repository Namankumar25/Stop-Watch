let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let s = 0;
let m = 0;
let h = 0;
let i = 0;
let startinterval;

// start.addEventListener('click', startclock)

let stop = document.getElementById('stop');
stop.addEventListener('click', function () {
    let start = document.getElementById('start').disabled = false;

    clearInterval(startinterval);
})

function startclock() {
    let start = document.getElementById('start').disabled = true;
    startinterval = setInterval(increasevalue, 1000);
}

let reset = document.getElementById('reset');
reset.addEventListener('click', function () {
    let start = document.getElementById('start').disabled = false;
    clearInterval(startinterval);
    hours.value = "00";
    minutes.value = "00";
    seconds.value = "00";
    s = 0;
    m = 0;
    h = 0;
});

let lap = document.getElementById('lap');
lap.addEventListener('click', function () {

    let html = `<tr> 
    <th class="timeinput">${++i}</th>
    <th class="timeinput">${hours.value}:${minutes.value}:${seconds.value}</th>
    <tr>
    `
    let tbody = document.getElementById('tbody')
    tbody.innerHTML += html;
});



function increasevalue() {

    if (s < 9) {
        ++s;
        seconds.value = "0" + s;
    }
    else {
        seconds.value = ++s;
    }


    if (seconds.value == 60) {

        if (m < 9) {
            ++m;
            minutes.value = "0" + m;
        }
        else {
            minutes.value = ++m;
            if (minutes.value == 60) {
                if (h < 9) {
                    ++h;
                    hours.value = "0" + h;
                }

                else {
                    hours.value = ++h;
                }
                m = 0;
            }

        }
        s = 0;
    }

}