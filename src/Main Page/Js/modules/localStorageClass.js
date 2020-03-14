export class LocalStorage {

    constructor(newsCard, requestField, succes, newsList) {
        this.newsCard = newsCard;
        this.requestField = requestField;
        this.succes = succes;
        this.newsList = newsList;
    }

    setUpNews() {
        const news = JSON.parse(localStorage.news);

        if (news.news.length != 0) {
            
            for (const num in news.news) {
                const image = news.news[num].urlToImage;
                const date = news.news[num].publishedAt;
                const titel = news.news[num].title;
                const text = news.news[num].description;
                const publisher = news.news[num].source.name;
                const webLink = news.news[num].url;
                this.newsCard.setUpCard(image, date, titel, text, publisher, webLink);
                  
            }
            const cardList = document.querySelectorAll('.search__status-success__card');

            cardList[0].removeAttribute('style')
            cardList[1].removeAttribute('style')
            cardList[2].removeAttribute('style')
            
            this.newsList.id = 3;
            this.succes.removeAttribute('style');
            
        }
    }

    setUpRequest() {
        const request = JSON.parse(localStorage.request);

        if (request.request.length != 0) {
            this.requestField.setAttribute('value', 'Последний запрос был: '+ request.request);
        }
    }
}