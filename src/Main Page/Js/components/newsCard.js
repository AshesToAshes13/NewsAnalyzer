export class NewsCard {
    constructor(newsList) {
        this.newsList = newsList;
    }

    setUpCard() {
        const newsCard = document.createElement('a');
        const _newsImage = document.createElement('img');
        const _newsDate = document.createElement('h2');
        const _newsTitle = document.createElement('h3');
        const _newsText = document.createElement('p')
        const _newsPublisher = document.createElement('h4')
    
        newsCard.classList.add('search__status-success__card');
        _newsImage.classList.add('card__image');
        _newsDate.classList.add('card__date');
        _newsTitle.classList.add('card__titel');
        _newsText.classList.add('card__text');
        _newsPublisher.classList.add('card__publisher')
    
        newsCard.appendChild(_newsImage);
        newsCard.appendChild(_newsDate);
        newsCard.appendChild(_newsTitle);
        newsCard.appendChild(_newsText);
        newsCard.appendChild(_newsPublisher);
        newsCard.setAttribute('style' , 'display:none')
        
       _newsImage.alt = 'Изображение не найдено'
       
        newsCard.target = '_blank';
        return newsCard
    }

}