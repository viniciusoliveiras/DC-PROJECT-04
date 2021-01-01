$(function () {
  $(".mosaico .container .mosaico-wrapper").slick({
    centerMode: false,
    slidesToShow: 6,
    arrow: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 380,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".tratamentos .container").slick({
    centerMode: false,
    slidesToShow: 3,
    arrow: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          dots: true,
          infinite: false,
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 481,
        settings: {
          arrows: false,
          dots: true,
          infinite: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".depoimentos .container").slick({
    arrows: false,
    dots: true,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
  });
});
