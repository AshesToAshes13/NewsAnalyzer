import '../Style/style.css';
import {Api} from './modules/api.js';
import * as dateElements from './utils/date.js';
import {Analytics} from './components/analytics.js';
import {weekArray} from './utils/weekArray.js'
import * as constants from './constants/constants.js';

const apiClass = new Api(constants.baseUrl, dateElements.todayDate, dateElements.startDate , decodeURI(constants.request[1]), constants.apiKey)
const analyticsClass = new Analytics(apiClass, constants.mentionsInTitle, constants.weekNews, decodeURI(constants.request[1]), 
                                     constants.todayText, weekArray, constants.monthTitle, constants.success, constants.error, constants.searching);

function setUpRequestTextAndTitel() {
    constants.requestText.textContent = `«${decodeURI(constants.request[1])}»`;
    document.title = decodeURI(constants.request[1]);
}

constants.searching.removeAttribute('style');
setUpRequestTextAndTitel();
analyticsClass.fetchNews();
