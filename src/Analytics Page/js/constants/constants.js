//analyticsClass constants
const mentionsInTitle = document.getElementById('title');
const weekNews = document.getElementById('week')
const todayText = document.querySelectorAll('.graph-detail__date');
const monthTitle = document.querySelector('.date__month');
const error = document.querySelector('.error');
const searching = document.querySelector('.searching');
const success = document.querySelector('.analytics-detail');
//apiClass constants
const baseUrl = 'https://newsapi.org/v2/everything?pageSize=100&';
const apiKey = 'apiKey=38671797596d4783ae74c8d72115bfff';
const request = window.location.href.split('?=');
//other constants
const requestText = document.querySelector('.request__span');
//export
export {mentionsInTitle, weekNews, todayText, monthTitle, baseUrl, apiKey, request, requestText, error, searching, success}