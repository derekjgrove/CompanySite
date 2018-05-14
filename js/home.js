function loadHomePage() {
  showCarousel(true);
  document.getElementById('content').innerHTML =
    '<div class="row">' +
      '<div class="col-md-12">' +
        '<h2 class="page-header">Our Business</h2>' +
      '</div>' +
        '<div class="col-md-4">' +
            '<div class="panel panel-default">' +
                '<div class="panel-heading">' +
                    '<h4><i class="fa fa-fw fa-info"></i>  About Us</h4>' +
                '</div>' +
                '<div class="panel-body">' +
                    '<p>We are a local Lawncare and Landscaping company in the Westmoreland county area. We prioritize quality but at a competetive rate. Our secret is experience and hard work.</p>' +
                    '<a href="about.html" class="btn btn-default">Learn More</a>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="col-md-4">' +
            '<div class="panel panel-default">' +
                '<div class="panel-heading">' +
                    '<h4><i class="fa fa-fw fa-wrench"></i>  Services Offered</h4>' +
                '</div>' +
                '<div class="panel-body">' +
                    '<p>We offer most Lawncare and Landscaping needs. Every cut consists of Edging, Mowing, and Clean-up of debris. We take quality to the next level, not limiting to specific weather conditions.</p>' +
                    '<a href="services.html" class="btn btn-default">More Services</a>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="col-md-4">' +
            '<div class="panel panel-default">' +
                '<div class="panel-heading">' +
                    '<h4><i class="fa fa-fw fa-phone"></i>  Contact Us</h4>' +
                '</div>' +
                '<div class="panel-body">' +
                    '<p>We are open during normal business hours, M-F: 8AM - 5PM. We are always looking for new customers, so email us, send a facebook message, or give us a call.</p>' +
                    '<a href="contact.html" class="btn btn-default">Call Today</a>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>' +
    '<div class="row">' +
    '<div class="col-md-12">' +
        '<h2 class="page-header">Our Work</h2>' +
    '</div>' +
  '</div>' +
    '<div class="row">' +
        '<div class="col-md-4 col-sm-6">' +
            '<a href="portfolio-item">' +
                '<img class="img-responsive img-portfolio img-hover" src="img/pictures/1.jpg" alt="">' +
            '</a>' +
        '</div>' +
        '<div class="col-md-4 col-sm-6">' +
            '<a href="portfolio-item">' +
                '<img class="img-responsive img-portfolio img-hover" src="img/pictures/2.jpg" alt="">' +
            '</a>' +
        '</div>' +
        '<div class="col-md-4 col-sm-6">' +
            '<a href="portfolio-item">' +
                '<img class="img-responsive img-portfolio img-hover" src="img/pictures/3.jpg" alt="">' +
            '</a>' +
        '</div>' +
        '<div class="col-md-4 col-sm-6">' +
            '<a href="portfolio-item">' +
                '<img class="img-responsive img-portfolio img-hover" src="img/pictures/4.jpg" alt="">' +
            '</a>' +
        '</div>' +
        '<div class="col-md-4 col-sm-6">' +
            '<a href="portfolio-item">' +
                '<img class="img-responsive img-portfolio img-hover" src="img/pictures/5.jpg" alt="">' +
            '</a>' +
        '</div>' +
        '<div class="col-md-4 col-sm-6">' +
            '<a href="portfolio-item">' +
                '<img class="img-responsive img-portfolio img-hover" src="img/pictures/6.jpg" alt="">' +
            '</a>' +
        '</div>' +
    '</div>'
}
