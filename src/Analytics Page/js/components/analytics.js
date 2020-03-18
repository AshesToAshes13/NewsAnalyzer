export class Analytics {
    constructor( mentionsInTitle, newsWeek, request, dateHolder, weekArr, monthTitle, success, error, searching) {
        this._mentionsInTitle = mentionsInTitle;
        this._newsWeek = newsWeek;
        this._request = request;
        this._dateHolder = dateHolder;
        this.weekArr = weekArr;
        this.monthTitle= monthTitle;
        this.searching = searching;
        this.error = error;
        this.success = success;
    }

    fetchNews() {
        
        this._mentionsInTitle.textContent = '0';
        this._newsWeek.textContent = '0';
        const _arr = [];
        const _dateArr = [];
        const _word = this._request.replace(this._request[this._request.length -1], '');
        const _regexp = new RegExp(_word);
        const _news = JSON.parse(localStorage.news);

        this.success.removeAttribute('style');
        this._newsWeek.textContent = _news.news.length;
            
        for (const _num in _news.news) {
            const _result = _news.news[_num].title.match(_regexp);
            if (_result) {
                _arr.push('1');
                const _moment = require("moment");
                _dateArr.push(_moment(_news.news[_num].publishedAt).format('DD'))
            }
        }
        this._setUpMentionsArray(_dateArr);
        this._mentionsInTitle.textContent = _arr.length;
            
    }

    _setUpMentionsArray(arr) {
        
        const _moment = require("moment");
        _moment.locale('ru');
        const _today1= _moment().format('D, dd');
        const _today2= _moment().add(-1, 'days').format('D, dd');
        const _today3= _moment().add(-2, 'days').format('D, dd');
        const _today4= _moment().add(-3, 'days').format('D, dd');
        const _today5= _moment().add(-4, 'days').format('D, dd');
        const _today6= _moment().add(-5, 'days').format('D, dd');
        const _today7= _moment().add(-6, 'days').format('D, dd');

        const _monthOneWeek = _moment().add(-6, 'days').format('MMMM');
        const _monthToday = _moment().format('MMMM');

        this._dateHolder[6].textContent = _today1;
        this._dateHolder[5].textContent = _today2;
        this._dateHolder[4].textContent = _today3;
        this._dateHolder[3].textContent = _today4;
        this._dateHolder[2].textContent = _today5;
        this._dateHolder[1].textContent = _today6;
        this._dateHolder[0].textContent = _today7;

        const _arrToday = [];
        const _arrToday1 = [];
        const _arrToday2 = [];
        const _arrToday3 = [];
        const _arrToday4 = [];
        const _arrToday5 = [];
        const _arrToday6 = [];

        for(const num in arr) {
            if (arr[num] == _moment().format('DD')){
                _arrToday.push(arr[num]);
            } 
            if (arr[num] == _moment().add(-1, 'days').format('DD')) {
                _arrToday1.push(arr[num]);
            }
            if (arr[num] == _moment().add(-2, 'days').format('DD')) {
                _arrToday2.push(arr[num]);
            }
            if (arr[num] == _moment().add(-3, 'days').format('DD')) {
                _arrToday3.push(arr[num]);
            }
            if (arr[num] == _moment().add(-4, 'days').format('DD')) {
                _arrToday4.push(arr[num]);
            }
            if (arr[num] == _moment().add(-5, 'days').format('DD')) {
                _arrToday5.push(arr[num]);
            }
            if (arr[num] == _moment().add(-6, 'days').format('DD')) {
                _arrToday6.push(arr[num]);
            }
        }
        const _daysArr = [_arrToday6, _arrToday5, _arrToday4, _arrToday3 ,_arrToday2 ,_arrToday1, _arrToday];
        
        for (const _num in this.weekArr) {
            const _bar = document.getElementById(this.weekArr[_num].counter);

            _bar.textContent = _daysArr[_num].length;
            if (+_bar.textContent == 0) {
                _bar.style.width = 50 + 'px';
                _bar.style.background = '#F5F6F7';
                _bar.style.color = '#1A1B22';
            } else {
                _bar.style.width = +_bar.textContent + '%';
            }
        }
        this._setUpMonth(_monthOneWeek, _monthToday);
    }

    _setUpMonth(_monthOneWeek, _monthToday) {
        if (_monthToday === _monthOneWeek) {
            this.monthTitle.textContent = `(${_monthToday})`;
        } else {
            this.monthTitle.textContent = `(${_monthOneWeek}-${_monthToday})`;
        }
    }
}