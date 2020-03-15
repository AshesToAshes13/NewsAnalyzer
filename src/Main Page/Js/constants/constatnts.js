const baseUrl = 'https://newsapi.org/v2/everything?pageSize=100&';
const apiKey = 'apiKey=38671797596d4783ae74c8d72115bfff';
const newsList = document.querySelector('.search__status-success__cards');
const showMoreBtn = document.querySelector('.search__status-success__button');
const searching = document.querySelector('.search__status-searching');
const nothing = document.querySelector('.search__status-nothing');
const error = document.querySelector('.search__status-error');
const success = document.querySelector('.search__status-success');
const searchForm = document.forms.search;
const analiticsLink = document.querySelector('.text__link');
const defaultLink = analiticsLink.href;
const requestField = document.querySelector('.search__request');
const cardList = document.querySelectorAll('.search__status-success__card');


export {baseUrl, apiKey, newsList, showMoreBtn, searching, nothing, error, success, searchForm, analiticsLink, defaultLink, requestField, cardList}