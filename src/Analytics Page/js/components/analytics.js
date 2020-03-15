export class Analytics {
    constructor( mentionsInTitle, newsWeek, request, dateHolder, weekArr, monthTitle, success, error, searching) {
        this.mentionsInTitle = mentionsInTitle;
        this.newsWeek = newsWeek;
        this.request = request;
        this.dateHolder = dateHolder;
        this.weekArr = weekArr;
        this.monthTitle= monthTitle;
        this.searching = searching;
        this.error = error;
        this.success = success;
    }

    fetchNews() {
        
        this.mentionsInTitle.textContent = '0';
        this.newsWeek.textContent = '0';
        const arr = [];
        const dateArr = [];
        const word = this.request.replace(this.request[this.request.length -1], '');
        const regexp = new RegExp(word);
        const news = JSON.parse(localStorage.news);

        this.success.removeAttribute('style');
        this.newsWeek.textContent = news.news.length;
            
        for (const num in news.news) {
            const result = news.news[num].title.match(regexp);
            if (result) {
                arr.push('1');
                const moment = require("moment");
                dateArr.push(moment(news.news[num].publishedAt).format('DD'))
            }
        }
        this.setUpMentionsArray(dateArr);
        this.mentionsInTitle.textContent = arr.length;
            
    }

    setUpMentionsArray(arr) {
        
        const moment = require("moment");
        moment.locale('ru');
        const today1= moment().format('D, dd');
        const today2= moment().add(-1, 'days').format('D, dd');
        const today3= moment().add(-2, 'days').format('D, dd');
        const today4= moment().add(-3, 'days').format('D, dd');
        const today5= moment().add(-4, 'days').format('D, dd');
        const today6= moment().add(-5, 'days').format('D, dd');
        const today7= moment().add(-6, 'days').format('D, dd');

        const monthOneWeek = moment().add(-6, 'days').format('MMMM');
        const monthToday = moment().format('MMMM');

        this.dateHolder[6].textContent = today1;
        this.dateHolder[5].textContent = today2;
        this.dateHolder[4].textContent = today3;
        this.dateHolder[3].textContent = today4;
        this.dateHolder[2].textContent = today5;
        this.dateHolder[1].textContent = today6;
        this.dateHolder[0].textContent = today7;

        const arrToday = [];
        const arrToday1 = [];
        const arrToday2 = [];
        const arrToday3 = [];
        const arrToday4 = [];
        const arrToday5 = [];
        const arrToday6 = [];

        for(const num in arr) {
            if (arr[num] == moment().format('DD')){
                arrToday.push(arr[num]);
            } 
            if (arr[num] == moment().add(-1, 'days').format('DD')) {
                arrToday1.push(arr[num]);
            }
            if (arr[num] == moment().add(-2, 'days').format('DD')) {
                arrToday2.push(arr[num]);
            }
            if (arr[num] == moment().add(-3, 'days').format('DD')) {
                arrToday3.push(arr[num]);
            }
            if (arr[num] == moment().add(-4, 'days').format('DD')) {
                arrToday4.push(arr[num]);
            }
            if (arr[num] == moment().add(-5, 'days').format('DD')) {
                arrToday5.push(arr[num]);
            }
            if (arr[num] == moment().add(-6, 'days').format('DD')) {
                arrToday6.push(arr[num]);
            }
        }
        const daysArr = [arrToday6, arrToday5, arrToday4, arrToday3 ,arrToday2 ,arrToday1, arrToday];
        
        for (const num in this.weekArr) {
            const bar = document.getElementById(this.weekArr[num].counter);

            bar.textContent = daysArr[num].length;
            if (+bar.textContent == 0) {
                bar.style.width = 50 + 'px';
                bar.style.background = '#F5F6F7';
                bar.style.color = '#1A1B22';
            } else {
                bar.style.width = +bar.textContent + '%';
            }
        }
        this.setUpMonth(monthOneWeek, monthToday);
    }

    setUpMonth(monthOneWeek, monthToday) {
        if (monthToday === monthOneWeek) {
            this.monthTitle.textContent = `(${monthToday})`;
        } else {
            this.monthTitle.textContent = `(${monthOneWeek}-${monthToday})`;
        }
    }
}