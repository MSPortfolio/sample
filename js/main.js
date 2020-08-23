// const $slider = $('.slider');
// $slider.slick({
//       autoplay:true,
//       autoplaySpeed:3000,
//       dots:true,
//       slidesToShow:1,
//       slidesToScroll:1,
// });

// slider proです
$( document ).ready(function( $ ) {
  $('#slider-banner').sliderPro({
    width: 1200,//横幅
    height: 600,
    arrows: true,//左右の矢印
    buttons: true,//ナビゲーションボタン
    slideDistance:0,//スライド同士の距離
    // visibleSize: '100%',
	// forceSize: 'fullWidth'
	responsive: true,
	fadeOutPreviousSlide: true,
	fadeDuration: 1000,

  });
});


$('.c-nav_toggle').on('click', function () {
    $('.c-nav_toggle, .c-humblist').toggleClass('show');
});

// これはスライドの上にテクストを出したい時
// ここで全部消して

// $slider.on("beforeChange", function(event, slick, currentSlide){
//       $('.c-sliderinfo li').removeClass('is-show');
// });

// ここでターゲットの番号を表す

// $slider.on("afterChange", function(event, slick, currentSlide){
//       $('.c-sliderinfo li').eq(currentSlide).addClass('is-show');
// });




// $('.responsive').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });