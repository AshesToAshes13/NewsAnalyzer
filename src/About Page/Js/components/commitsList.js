export class CommitsList {

    constructor(apiClass, commitCardClass, searching, success, error) {
        this.apiClass = apiClass;
        this.commitCardClass = commitCardClass;
        this.searching = searching;
        this.success = success;
        this.error = error;
    }

    setUpcommits() {
        this.apiClass.fetchCommits()
            .then((res) => {
                res.forEach(commit => {
                    this.success.removeAttribute('style');
                    const avatar = commit.author.avatar_url;
                    const userName = commit.commit.committer.name;
                    const email = commit.commit.committer.email;
                    const date = commit.commit.committer.date;
                    const message = commit.commit.message;
                    const moment = require("moment")
                    moment.lang('ru')
                    const formatedDate= moment(date).format('D MMMM, YYYY');
                    this.commitCardClass.setUpCommit(avatar, userName, email, formatedDate, message)
                })
                this.setUpSlider();
            })
            .catch((err) => {
                console.log(err)
                this.error.removeAttribute('style');
            })
            .finally(()=>{
                this.searching.setAttribute('style', "display: none");
            });
    }

    setUpSlider() {
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