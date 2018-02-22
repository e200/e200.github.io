$('.techs__slider').slick({
  autoplay: true,
  infinite: true,
  speed: 150,
  slidesToShow: 7,
  slidesToScroll: 1,
  swipeToSlide: true,
  // https://github.com/kenwheeler/slick/issues/2002#issuecomment-325806939
  touchThreshold: 100,
  prevArrow: $('.techs__arrow.prev'),
  nextArrow: $('.techs__arrow.next'),
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
});