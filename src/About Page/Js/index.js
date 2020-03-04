import '../Style/style.css'

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
    }
    ]
});