import '../Style/style.css';
import {NewsApi} from './modules/newsApi.js';
import {NewsList} from './components/newsList.js';
import {NewsCard} from './components/newsCard.js';
import * as dateElements from './utils/date.js';
import * as constants from './constants/constatnts.js';
import {LocalStorage} from './modules/localStorageClass.js';

const newsCardClass = new NewsCard(constants.newsList);
const localStorageClass = new LocalStorage(newsCardClass, constants.requestField, constants.success , constants.newsList);

function disableShowMoreBtn() {
    const cardList = document.querySelectorAll('.search__status-success__card');
    if (+constants.newsList.id >= cardList.length) {
        constants.showMoreBtn.setAttribute('style', 'display:none')
    } 
}

function showMore(num) {
    constants.newsList.id = num + 3;
    const cardList = document.querySelectorAll('.search__status-success__card');
    const firstCard = num;
    const secondCard = firstCard + 1
    const thirdCard = secondCard + 1

    if (cardList[firstCard] === undefined) {
        
    } else {
        cardList[firstCard].removeAttribute('style')
    }

    if (cardList[secondCard] === undefined) {

    } else {
        cardList[secondCard].removeAttribute('style')
    }

    if (cardList[thirdCard] === undefined) {

    } else {
        cardList[thirdCard].removeAttribute('style')
    }
}

function inputHendler(event) {

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

    const field = search.elements.request;
    field.setAttribute('style', 'border : 1px solid red')
    field.placeholder = 'Обязательное поле'
    field.color = 'red'

}


constants.searchForm.addEventListener('submit', (event)=> {

    event.preventDefault();

    const request = event.currentTarget.elements.request;
    
    if (request.value == 0) {

        disabledBtn()

    } else {

        constants.newsList.id = 0;
        while (constants.newsList.firstChild) {
            constants.newsList.removeChild(constants.newsList.firstChild)
        }
        constants.searching.removeAttribute('style');
        constants.success.setAttribute('style', 'display: none');
        constants.nothing.setAttribute('style', 'display: none');
        constants.error.setAttribute('style', 'display: none');
        localStorage.request = JSON.stringify({request: request.value});

        const apiClass = new NewsApi(constants.baseUrl, constants.apiKey, dateElements.todayDate, dateElements.startDate, request.value);
        const newsListClass = new NewsList(apiClass,newsCardClass, constants.newsList, constants.showMoreBtn, constants.nothing, 
                                           constants.success, constants.error, constants.searching);
        
        newsListClass.setUpCards();
        constants.showMoreBtn.removeAttribute('style');

    }     
    
})

constants.searchForm.addEventListener('input', ()=> {

    inputHendler(event);

})

constants.showMoreBtn.addEventListener('click' , () => {

    showMore(+constants.newsList.id)
    disableShowMoreBtn()

})

localStorageClass.setUpNews()
localStorageClass.setUpRequest()



