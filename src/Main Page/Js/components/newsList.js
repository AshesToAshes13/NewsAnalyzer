export class NewsList {
    constructor(apiClass, newsCard, newsList ,showMoreBtn ,nothing, success, error, searching) {

        this._apiClass = apiClass;
        this._newsCard = newsCard;
        this._newsList = newsList;
        this.showMoreBtn = showMoreBtn;
        this._nothing = nothing;
        this._success = success;
        this._error = error;
        this._searching = searching;
        
    }

    setUpCards() {
        this._apiClass.fetchNews()
        .then((_res) => {
            if (_res.articles.length === 0) {
                this._nothing.removeAttribute('style');
                localStorage.setItem('newsLocal', _res.articles);
            } else {
                localStorage.news = JSON.stringify({news: _res.articles})
                _res.articles.forEach(_post => {
                   const _card = this._newsCard.setUpCard()
                   this._newsList.appendChild(_card);

                });
                const _cardList = document.querySelectorAll('.search__status-success__card');

                if (_res.articles.length = _cardList.length) {
                    
                    for (const _num in _cardList) {

                        if (_cardList[_num].children != undefined) {

                            const _card = _cardList[_num]
                            const _cardImage = _cardList[_num].children[0];
                            const _cardDate = _cardList[_num].children[1];
                            const _cardTitle = _cardList[_num].children[2];
                            const _cardText = _cardList[_num].children[3]
                            const _cardPublisher = _cardList[_num].children[4];

                            const _webLink = _res.articles[_num].url;
                            const _image = _res.articles[_num].urlToImage;
                            const _date = _res.articles[_num].publishedAt;
                            const _title = _res.articles[_num].title;
                            const _text = _res.articles[_num].description;
                            const _publisher = _res.articles[_num].source.name

                            const _moment = require("moment")
                            _moment.locale('ru')
                            const _formatedDate= _moment(_date).format('D MMMM, YYYY');

                            _card.href = _webLink;
                            _cardImage.src = _image;
                            _cardDate.textContent = _formatedDate;
                            _cardTitle.textContent = _title;
                            _cardText.textContent = _text;
                            _cardPublisher.textContent = _publisher;
                        }
                    }
                }
                
                _cardList[0].removeAttribute('style')
                _cardList[1].removeAttribute('style')
                _cardList[2].removeAttribute('style')
            
                this._newsList.id = 3;
                
                this._success.removeAttribute('style');
            }
            localStorage.setItem('newsLocal', _res.articles);
        })
        .catch((_err)=> {
            console.log(_err)
            this._error.removeAttribute('style');
        })
        .finally (()=> {
            this._searching.setAttribute('style', "display: none");
            const formRequest = document.querySelector('.search__request');
            const formBtn = document.querySelector('.search__button');
            formRequest.readOnly = false;
            formBtn.disabled = false;
        }) 
    }
}