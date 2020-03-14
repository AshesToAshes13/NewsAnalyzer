import '../Style/style.css';
import {Analytics} from './components/analytics.js';
import {weekArray} from './utils/weekArray.js'
import * as constants from './constants/constants.js';

const request = JSON.parse(localStorage.request)

const analyticsClass = new Analytics(constants.mentionsInTitle, constants.weekNews, request.request, 
                                     constants.todayText, weekArray, constants.monthTitle, constants.success, constants.error, constants.searching);

function setUpRequestTextAndTitel() {
    const request = JSON.parse(localStorage.request)
    constants.requestText.textContent = `«${request.request}»`;
    document.title = request.request;
}

setUpRequestTextAndTitel();
analyticsClass.fetchNews();
