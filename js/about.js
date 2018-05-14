function loadAboutPage() {
  showCarousel(false);
  document.getElementById('content').innerHTML =
      '<h1 class="page-header">About Us</h1>' +
      '<div class="row">' +
        '<div class="col-md-6">' +
          '<img class="img-responsive" src="img/about/truck.png" alt="">' +
        '</div>' +
        '<div class="col-md-6">' +
          '<h2>About DG\'s Greener Side</h2>' +
          '<p>DG\'s Greener Side is a family owned and operated lawncare and landscaping business located in Westmoreland County. We handle all phases of residential and commercial lawncare/landscape in the Westmoreland County area.</p>' +
          '<p>We believe in hard work and quality service for a reasonable price. We have been in business for several years and have done hundreds of various lawncare/landscape jobs.</p>' +
          '<p>Our company is very involved and takes great pride in our community. We go the extra mile because we care about our customers, and we care that your yard is a DG\'s Greener Side maintained lawn.</p>' +
          '<p>We are very blessed that our business continues to grow every year as a result of referrals. We would like to thank everyone who has recognized our hard work, commitment, and quality service, that has referred us.</p>' +
        '</div>' +
      '</div>'
}
