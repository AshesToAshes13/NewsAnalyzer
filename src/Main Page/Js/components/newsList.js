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
                localStorage.news = JSON.stringify({news: res.articles})
                res.articles.forEach(post => {
                    this.newsCard.setUpCard(post.urlToImage, post.publishedAt, post.title, post.description, post.source.name, post.url)
                });
                
                const cardList = document.querySelectorAll('.search__status-success__card');

                cardList[0].removeAttribute('style')
                cardList[1].removeAttribute('style')
                cardList[2].removeAttribute('style')
            
                this.newsList.id = 3;
                
                this.success.removeAttribute('style');
            }
            localStorage.setItem('newsLocal', res.articles);
        })
        .catch((err)=> {
            console.log(err)
            this.error.removeAttribute('style');
        })
        .finally (()=> {
            this.searching.setAttribute('style', "display: none");
        }) 
    }
}