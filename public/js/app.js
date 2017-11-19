'use strict';

var rellax = new Rellax('.rellax', {
  // center: true
  callback: function(position) {
      // callback every position change
      console.log(position);
  }
});

var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    round: true,
  });

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
