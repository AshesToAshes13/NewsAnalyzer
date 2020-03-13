export class NewsCard {
    constructor(newsList) {
        this.newsList = newsList;
    }

    setUpCard(image, date, titel, text, publisher, webLink) {
        const newsCard = document.createElement('a');
        const newsImage = document.createElement('img');
        const newsDate = document.createElement('h2');
        const newsTitle = document.createElement('h3');
        const newsText = document.createElement('p')
        const newsPublisher = document.createElement('h4')
    
        newsCard.classList.add('search__status-success__card');
        newsImage.classList.add('card__image');
        newsDate.classList.add('card__date');
        newsTitle.classList.add('card__titel');
        newsText.classList.add('card__text');
        newsPublisher.classList.add('card__publisher')
    
        newsCard.appendChild(newsImage);
        newsCard.appendChild(newsDate);
        newsCard.appendChild(newsTitle);
        newsCard.appendChild(newsText);
        newsCard.appendChild(newsPublisher);
        this.newsList.appendChild(newsCard);
        newsCard.setAttribute('style' , 'display:none')
        
        
        const moment = require("moment")
        moment.lang('ru')
        const formatedDate= moment(date).format('D MMMM, YYYY');
        
        newsDate.textContent = formatedDate;
        newsImage.src = image;
        newsImage.alt = 'Изображение не найдено'
        newsTitle.textContent = titel;
        newsText.textContent = text;
        newsPublisher.textContent = publisher;
        newsCard.href = webLink ;
        newsCard.target = '_blank';
    }
}