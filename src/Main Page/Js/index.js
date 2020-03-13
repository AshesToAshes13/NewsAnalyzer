import '../Style/style.css';
import {Api} from './modules/api.js';
import {NewsList} from './components/newsList.js';
import {NewsCard} from './components/newsCard.js';
import * as dateElements from './utils/date.js';
import * as constants from './constants/constatnts.js';
import {Functions} from './functions/functions.js';

const newsCardClass = new NewsCard(constants.newsList);
const functionsClass = new Functions(constants.showMoreBtn, constants.analiticsLink, constants.defaultLink);

constants.searchForm.addEventListener('submit', (event)=> {

    event.preventDefault();

    const request = event.currentTarget.elements.request;
    
    if (request.value == 0) {

        functionsClass.disabledBtn()

    } else {

        constants.newsList.id = 0;
        constants.newsList.innerHTML = '';
        functionsClass.generateAnaliticsLink();
        constants.searching.removeAttribute('style')
        constants.nothing.setAttribute('style', 'display: none')
        constants.error.setAttribute('style', 'display: none')

        const apiClass = new Api(constants.baseUrl, constants.apiKey, dateElements.todayDate, dateElements.startDate, request.value);
        const newsListClass = new NewsList(apiClass,newsCardClass, constants.newsList, constants.showMoreBtn, constants.nothing, 
                                           constants.success, constants.error, constants.searching);
        
        newsListClass.setUpCards();
        constants.showMoreBtn.removeAttribute('style');

    }     
    
})

constants.searchForm.addEventListener('input', ()=> {

    functionsClass.inputHendler(event);

})

constants.showMoreBtn.addEventListener('click' , () => {

    functionsClass.showMore();

})