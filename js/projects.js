function loadProjectsPage() {
  showCarousel(false);
  document.getElementById('content').innerHTML =
  '<h1 class="page-header">Projects</h1>' +
  '<div class="row" style="padding-bottom: 0px; margin-bottom: 0px;">' +
    '<div class="col-md-7 col-md-offset-3">' +
      '<div id="slider" class="flexslider">' +
        '<ul class="slides">' +
          loadImages() +
        '</ul>' +
      '</div>' +
    '</div>' +
  '</div>' +
  '<div class="row" style="padding-top: 0px; margin-top: 0px;">' +
    '<div id="carousel" class="flexslider">' +
      '<ul class="slides">' +
        loadImages() +
      '</ul>' +
    '</div>' +
  '</div>'
  initCarousel();
}

function loadImages() {
  var retString = '';
  for (i=1; i < 34; i++) {
    retString += '<li><img src="img/pictures/' + i +'.jpg" /></li>'
  }

  return retString;
}

function initCarousel() {
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 80,
    itemMargin: 5,
    asNavFor: '#slider'
  });

  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });

}
