export class NewsList {
    constructor(apiClass, newsCard, newsList ,showMoreBtn ,nothing, success, error, searching) {

        this.apiClass = apiClass;
        this.newsCard = newsCard;
        this.newsList = newsList;
        this.showMoreBtn = showMoreBtn;
        this.nothing = nothing;
        this.success = success;
        this.error = error;
        this.searching = searching;
        this.showMoreBtn = showMoreBtn;
    }

    setUpCards() {
        this.apiClass.fetchNews()
        .then((res) => {
            if (res.articles.length === 0) {
                this.nothing.removeAttribute('style');
            } else {
                res.articles.forEach(post => {
                this.newsCard.setUpCard(post.urlToImage, post.publishedAt, post.title, post.description, post.author, post.url)
                });
                this.newsList.id = +this.newsList.id + 3
                $('.search__status-success__card').slice(0, 3).show();
                this.success.removeAttribute('style');
            }
            
        })
        .catch((err)=> {
            console.log(err)
            this.error.removeAttribute('style');
        })
        .finally (()=> {
            this.searching.setAttribute('style', "display: none");
        }) 
    }  
    
    setUpshowMoreBtn() {
        if ($('.search__status-success__card:hidden').length == 0) {
            this.showMoreBtn.setAttribute('style', "display: none");
        } else {
            this.showMoreBtn.removeAttribute('style');
        }
    }
}