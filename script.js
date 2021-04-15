const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const day = document.querySelector('.day')

const deg = 6;

setInterval(() => {
    let dateAll = new Date();
    let hh = dateAll.getHours() * 30;
    let mm = dateAll.getMinutes() * deg;
    let ss = dateAll.getSeconds() * deg;
    let yearMonthDay = (dateAll.getMonth()+1) + ' ' + dateAll.getDate() + ' ' + dateAll.getFullYear();

    day.textContent = yearMonthDay;
    hour.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

});

