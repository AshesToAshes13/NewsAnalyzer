import { _ } from "core-js";

export class CommitsList {

    constructor(apiClass, commitCardClass, searching, success, error, commitList) {
        this._apiClass = apiClass;
        this._commitCardClass = commitCardClass;
        this._searching = searching;
        this._success = success;
        this._error = error;
        this._commitList = commitList;
    }

    setUpcommits() {
        this._apiClass.fetchCommits()
            .then((_res) => {
                _res.forEach(_post => {
                    this._success.removeAttribute('style');
                    const _card = this._commitCardClass.setUpCommit()
                    this._commitList.appendChild(_card)
                })
                const _commits = document.querySelectorAll('.github__commit');
                if (_commits.length == _res.length) {
                    for (const _num in _commits) {
                        if (_commits[_num].children != undefined) {
                            
                            const _commitDate = _commits[_num].children[0];
                            const _commitAvatar = _commits[_num].children[1].children[0];
                            const _commitUsername = _commits[_num].children[1].children[1].children[0];
                            const _commitUserEmail = _commits[_num].children[1].children[1].children[1];
                            const _commitText = _commits[_num].children[2];

                            const _date = _res[_num].commit.committer.date;
                            const _avatar = _res[_num].author.avatar_url;
                            const _username = _res[_num].commit.committer.name;
                            const _email = _res[_num].commit.committer.email;
                            const _text = _res[_num].commit.message;

                            const _moment = require("moment")
                            _moment.locale('ru')
                            const _formatedDate = _moment(_date).format('D MMMM, YYYY');

                            _commitDate.textContent = _formatedDate;
                            _commitAvatar.src = _avatar;
                            _commitUsername.textContent = _username;
                            _commitUserEmail.textContent = _email;
                            _commitText.textContent = _text;
                        }
                    }
                }
                this._setUpSlider();
            })
            .catch((err) => {
                console.log(err)
                this._error.removeAttribute('style');
            })
            .finally(()=>{
                this._searching.setAttribute('style', "display: none");
            });
    }

    _setUpSlider() {
        $('.github__list').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            centerMode: true,
            variableWidth: true,
            arrows: true,
            responsive: [{
                breakpoint : 320,
                settings : {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint : 768,
                settings : {
                    slidesToShow: 2,
                    slidesToScroll : 2,
                    dots: true
                }
            }]
        });
    }
}