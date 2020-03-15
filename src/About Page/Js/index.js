import '../Style/style.css'
import {GithubApi} from './modules/githubApi.js';
import {CommitsList} from './components/commitsList.js';
import {CommitCard} from './components/commitCard.js';
import * as constants from './constants/constnants.js';

const apiClass = new GithubApi(constants.baseUrl);
const commitCardClass = new CommitCard(constants.commitsList);
const commitsListClass = new CommitsList(apiClass, commitCardClass, constants.searching, constants.success, constants.error); 

constants.searching.removeAttribute('style');
commitsListClass.setUpcommits();