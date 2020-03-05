import '../Style/style.css';
const searchForm = document.forms.search;
const searchBtn = search.elements.btn;
const searching = document.querySelector('.search__status-searching');
const nothing = document.querySelector('.search__status-nothing');
const error = document.querySelector('.search__status-error');
const success = document.querySelector('.search__status-success');
const requestText = search.elements.request.value;
const newsList = document.querySelector('.search__status-success__cards');
const showMoreBtn = document.querySelector('.search__status-success__button');
const analiticsLink = document.querySelector('.text__link');
const defaultLink = analiticsLink.href;


const defaultCards = [
    {
        image: 'https://sun9-56.userapi.com/c204728/v204728397/64f00/cGF7xEO9A80.jpg',
        date: '2 августа, 2019',
        titel: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        publisher: 'Лента.ру'
    }, 
    {
        image: 'https://sun9-61.userapi.com/c204728/v204728850/6ac45/Y4H9OyUX2Bs.jpg',
        date: '2 августа, 2019',
        titel: 'Лесные огоньки: история одной фотографи',
        text: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы',
        publisher: 'Медуза'
    },
    {
        image: 'https://sun9-22.userapi.com/c204728/v204728850/6ac4c/OmwXn9RVcfc.jpg',
        date: '2 августа, 2019',
        titel: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка',
        text: 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...',
        publisher: 'Риа'
    },
    {
        image: 'https://sun9-65.userapi.com/c204728/v204728850/6ac71/4yCj3k3DDGs.jpg',
        date: '2 августа, 2019',
        titel: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        publisher: 'Дзен'
    },
    {
        image: 'https://sun9-26.userapi.com/c204728/v204728850/6ac78/xPZBHkESM1o.jpg',
        date: '2 августа, 2019',
        titel: 'Лесные огоньки: история одной фотографии',
        text: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
        publisher: 'Дзен'
    },
    {
        image: 'https://sun9-22.userapi.com/c204728/v204728850/6ac7f/IxZa5_edZHY.jpg',
        date: '2 августа, 2019',
        titel: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка',
        text: 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...',
        publisher: 'Медиазона'
    },
]


function startSearch() {
    searching.removeAttribute('style')
    nothing.setAttribute('style', "display: none")
    error.setAttribute('style', "display: none")
    success.setAttribute('style', "display: none")

    setTimeout(changeDOM , 2000);
}

function createCard(image, date, titel, text, publisher) {
    const newsCard = document.createElement('div');
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
    newsList.appendChild(newsCard);
    newsCard.setAttribute('style' , 'display:none')

    newsImage.src = image;
    newsDate.textContent = date;
    newsTitle.textContent = titel;
    newsText.textContent = text;
    newsPublisher.textContent = publisher;

    return newsCard
}

function setUpCards() {
    
    for (const num  in defaultCards) {
        const cardData = defaultCards[num];
        createCard(cardData.image, cardData.date, cardData.titel, cardData.text, cardData.publisher);
        
    }
    $('.search__status-success__card').slice(0, 3).show()
    newsList.id = +newsList.id + 3;
}

function changeDOM() {

    searching.setAttribute('style', "display: none")
    

    if (search.elements.request.value === 'Спорт') {
        nothing.removeAttribute('style');
    } else if (search.elements.request.value === 'Политика') {
        error.removeAttribute('style');
    } else {
        success.removeAttribute('style');
        setUpCards();
        setUpShowMoreBtn()
    }

}

function inputHendler() {
    const request = event.currentTarget.elements.request;
    if (request.value == 0){
        disabledBtn();
        return false
    } else {
        const field = search.elements.request;
        field.removeAttribute('style')
    }
}

function disabledBtn() {
    //searchBtn.setAttribute('disabled', true); 
    
        const field = search.elements.request;
        field.setAttribute('style', 'border : 1px solid red')
        field.placeholder = 'Обязательное поле'
        field.color = 'red'
}

function showMore() {
    
    $('.search__status-success__card:hidden').slice(0, 3).slideDown()
    newsList.id = +newsList.id + 3;
    setUpShowMoreBtn();
}

function setUpShowMoreBtn() {
    if (+newsList.id >= defaultCards.length) {
        showMoreBtn.setAttribute('style', "display: none");
    } else {
        showMoreBtn.removeAttribute('style');
    }
}

function generateAnaliticsLink() {
    analiticsLink.href = defaultLink;
    const codedLink = encodeURIComponent(document.forms.search.elements.request.value);
    const newLink = analiticsLink.href + `?=${codedLink}`;
    analiticsLink.href = newLink;
}

searchForm.addEventListener('submit', (event)=> {


    event.preventDefault();
    const request = event.currentTarget.elements.request;
    if (request.value == 0) {
        disabledBtn()
    } else {
        newsList.id = 0;
        newsList.innerHTML = '';
        generateAnaliticsLink();
        startSearch();
    }     
    
})

searchForm.addEventListener('input', ()=> {
    inputHendler(event);
})

showMoreBtn.addEventListener('click' , () => {
    showMore();
})
