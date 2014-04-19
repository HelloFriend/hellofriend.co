function onCanvas(){
  // $('#show-social, #social').on('click', function(){
  //   console.log('showing social');
  //   $('body').toggleClass('show-social');
  // });

  $('#js-show-nav, #nav').on('click', function(){
    console.log('showing nav');
    $('body').toggleClass('show-nav');
  });
}
onCanvas();

$('.btn--hello').on("click", function(){
  ga('send', 'event', 'button', 'click', 'contact-us');
})
