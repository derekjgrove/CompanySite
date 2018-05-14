function showCarousel(flag) {
  var carouselContainer = document.getElementById('myCarousel');
  if (flag) {
    carouselContainer.classList.add('carousel');
    carouselContainer.classList.add('slide');
    carouselContainer.innerHTML =
      '<ol class="carousel-indicators">' +
          '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>' +
          '<li data-target="#myCarousel" data-slide-to="1"></li>' +
          '<li data-target="#myCarousel" data-slide-to="2"></li>' +
      '</ol>' +
      '<div class="carousel-inner">' +
          '<div class="item active">' +
              '<div class="fill" style="background-image:url(\'img/home/1.jpg\');"></div>' +
              '<div class="carousel-caption">' +
                  '<h1>Free Estimates</h1>' +
              '</div>' +
          '</div>' +
          '<div class="item">' +
              '<div class="fill" style="background-image:url(\'img/home/2.jpg\');"></div>' +
              '<div class="carousel-caption">' +
                  '<h1>Competetive Pricing</h1>' +
              '</div>' +
          '</div>' +
          '<div class="item">' +
              '<div class="fill" style="background-image:url(\'img/home/3.jpg\');"></div>' +
              '<div class="carousel-caption">' +
                  '<h1>Dependable Service</h1>' +
              '</div>' +
          '</div>' +
      '</div>' +
      '<a class="left carousel-control" href="#myCarousel" data-slide="prev">' +
          '<span class="icon-prev"></span>' +
      '</a>' +
      '<a class="right carousel-control" href="#myCarousel" data-slide="next">' +
          '<span class="icon-next"></span>' +
      '</a>' +
      '<div class="main-text hidden-xs">' +
          '<div class="col-md-12 text-center">' +
              '<h1 class="first-text">DG\'s</h1>' +
              '<h3 class="second-text">Greener Side</h3>' +
          '</div>' +
      '</div>' +
      '</br></br></br>'
    } else {
      carouselContainer.classList.remove('carousel');
      carouselContainer.classList.remove('slide');
      carouselContainer.innerHTML = ''
    }

}
