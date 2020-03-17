export class LocalStorage {

    constructor(newsCard, requestField, succes, newsList) {
        this._newsCard = newsCard;
        this._requestField = requestField;
        this._succes = succes;
        this._newsList = newsList;
    }

    setUpNews() {

        const _news = JSON.parse(localStorage.news);

        if (_news.news.length != 0) {

                _news.news.forEach(_post => {
                    const _card = this._newsCard.setUpCard();
                    this._newsList.appendChild(_card)
                });

                const _cardList = document.querySelectorAll('.search__status-success__card');
                
                if (_cardList.length == _news.news.length) {
                    for (const e in _cardList) {
                        
                        if (_cardList[e].children != undefined) {
                            
                            const _card = _cardList[e]
                            const _cardImage = _cardList[e].children[0];
                            const _cardDate = _cardList[e].children[1];
                            const _cardTitle = _cardList[e].children[2];
                            const _cardText = _cardList[e].children[3]
                            const _cardPublisher = _cardList[e].children[4];

                            const _image = _news.news[e].urlToImage;
                            const _date = _news.news[e].publishedAt;
                            const _titel = _news.news[e].title;
                            const _text = _news.news[e].description;
                            const _publisher = _news.news[e].source.name;
                            const _webLink = _news.news[e].url;

                            const _moment = require("moment")
                            _moment.locale('ru')
                            const _formatedDate= _moment(_date).format('D MMMM, YYYY');
                            
                            _card.href = _webLink;
                            _cardImage.src = _image;
                            _cardDate.textContent = _formatedDate;
                            _cardTitle.textContent = _titel;
                            _cardText.textContent = _text;
                            _cardPublisher.textContent = _publisher;
                            
                        }
                    }
                }

            _cardList[0].removeAttribute('style')
            _cardList[1].removeAttribute('style')
            _cardList[2].removeAttribute('style')
            
            this._newsList.id = 3;
            this._succes.removeAttribute('style');
            
        } else {
            const nothing = document.querySelector('.search__status-nothing')
            nothing.removeAttribute('style')
        }
        this._setUpRequest()
    }

    _setUpRequest() {
        const _request = JSON.parse(localStorage.request);

        if (_request.request.length != 0) {
            this._requestField.setAttribute('value', _request.request);
        }
    }
}