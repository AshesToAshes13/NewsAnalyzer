export class Functions {

    constructor(showMoreBtn, analiticsLink, defaultLink) {

        this.showMoreBtn = showMoreBtn;
        this.analiticsLink = analiticsLink;
        this.defaultLink = defaultLink;
        
    }

    inputHendler(event) {

        const request = event.currentTarget.elements.request;

        if (request.value == 0){

            this.disabledBtn();
            return false

        } else {

            const field = search.elements.request;
            field.removeAttribute('style')

        }
    }

    disabledBtn() {

        const field = search.elements.request;
        field.setAttribute('style', 'border : 1px solid red')
        field.placeholder = 'Обязательное поле'
        field.color = 'red'

    }

    showMore() {

        $('.search__status-success__card:hidden').slice(0, 3).slideDown()
        this.setUpShowMoreBtn();

    }
    
    setUpShowMoreBtn() {

        if ($('.search__status-success__card:hidden').length == 0) {

            this.showMoreBtn.setAttribute('style', "display: none");

        } else {

            this.showMoreBtn.removeAttribute('style');

        }
    }

    generateAnaliticsLink() {

        this.analiticsLink.href = this.defaultLink;
        const codedLink = encodeURIComponent(document.forms.search.elements.request.value);
        const newLink = this.analiticsLink.href + `?=${codedLink}`;
        this.analiticsLink.href = newLink;

    }
}