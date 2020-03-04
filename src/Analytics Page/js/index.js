import '../Style/style.css';


const weekArr = [
    {
        counter: 'monday__counter',
        bar: 'monday__bar'
    },
    {
        counter: 'tuesday__counter',
        bar: 'tuesday__bar'
    },
    {
        counter: 'wednesday__counter',
        bar: 'wednesday__bar'
    },
    {
        counter: 'thursday__counter',
        bar: 'thursday__bar'
    },
    {
        counter: 'friday__counter',
        bar: 'friday__bar'
    },
    {
        counter: 'saturday__counter',
        bar: 'saturday__bar'
    },
    {
        counter: 'sunday__counter',
        bar: 'sunday__bar'
    }
]

const requestText = document.querySelector('.request__span');

function setUpBars() {
    for (const num in weekArr) {
        const bar = document.getElementById(weekArr[num].counter);
        const counter = document.getElementById(weekArr[num].counter);
        
        if (+counter.textContent == 0) {
            bar.style.width = 50 + 'px';
            bar.style.background = '#F5F6F7';
            bar.style.color = '#1A1B22';
        } else {
            bar.style.width = +counter.textContent + '%';
        }
    }
}

function setUpRequestTextAndTitel() {
    const request = window.location.href.split('?=');
    requestText.textContent = '«' + decodeURI(request[1]) + '»';
    document.title = decodeURI(request[1]);
}

setUpBars();
setUpRequestTextAndTitel();


