function loadServicesPage() {
  showCarousel(false);
  document.getElementById('content').innerHTML =
    '<h1 class="page-header">Our Services</h1>' +
      '<div class="row">' +
        '<div class="col-lg-12">' +
          '<img class="img-responsive" src="img/service/zach.jpg" alt="zach">' +
        '</div>' +
      '</div>' +
      '<div class="row">' +
        '<div class="col-lg-12">' +
          '<h2 class="page-header">Lawncare Service</h2>' +
        '</div>' +
        '<div class="col-md-4">' +
          '<div class="panel panel-default my_panel">' +
            '<div class="panel-heading">' +
              '<img class="img-responsive" src="img/service/trim.jpg">' +
            '</div>' +
          '<div class="panel-body">' +
            '<h4>Trimming</h4>' +
            '<p>We trim around all of your edges and borderlines if applicable. We\'ll also trim 90 degrees to keep up with the grass that hangs over your edges, so that your edges will always look sharp and crisp.</p>' +
            '<a href="#" class="btn btn-primary">Learn More</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="col-md-4">' +
        '<div class="panel panel-default my_panel">' +
          '<div class="panel-heading">' +
            '<img class="img-responsive" src="img/service/mow.jpg">' +
          '</div>' +
          '<div class="panel-body">' +
            '<h4>Mowing</h4>' +
            '<p>We do both bagged and mulched grass cutting, depending on the weather conditions and season. We also keep crisp straight lines in mind, and alternate patterns to ensure proper root growth.</p>' +
            '<a href="#" class="btn btn-primary">Learn More</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="col-md-4">' +
        '<div class="panel panel-default my_panel">' +
          '<div class="panel-heading">' +
            '<img class="img-responsive" src="img/service/blow.jpg">' +
          '</div>' +
          '<div class="panel-body">' +
            '<h4>Clean-up</h4>' +
            '<p>At the end of each cut, we\'ll blow debris off your sidewalks, driveways, patios, beds, etc. In the fall season before each mow, we will capture all the leaves from places previously mentioned.</p>' +
            '<a href="#" class="btn btn-primary">Learn More</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="row">' +
      '<div class="col-lg-12">' +
        '<h2 class="page-header">Landscaping Services</h2>' +
      '</div>' +
    '<div class="col-md-4">' +
      '<div class="media">' +
        '<div class="pull-left">' +
          '<span class="fa-stack fa-2x">' +
            '<img src="img/service/mulch.png">' +
          '</span>' +
        '</div>' +
        '<div class="media-body">' +
          '<h4 class="media-heading">Mulch</h4>' +
          '<p>What better way to start off the year than with a fresh bed of your favorite natural, brown, black, or red mulch.</p>' +
        '</div>' +
      '</div>' +
      '<div class="media">' +
        '<div class="pull-left">' +
          '<span class="fa-stack fa-2x">' +
            '<img src="img/service/stone.png">' +
          '</span>' +
        '</div>' +
        '<div class="media-body">' +
          '<h4 class="media-heading">Stone</h4>' +
          '<p>For those of us that like low maintenance, pick out your favorite stone, or let us help you choose.</p>' +
        '</div>' +
      '</div>' +
      '<div class="media">' +
        '<div class="pull-left">' +
          '<span class="fa-stack fa-2x">' +
            '<img src="img/service/cleanup.png">' +
          '</span>' +
        '</div>' +
        '<div class="media-body">' +
          '<h4 class="media-heading">General Clean-up</h4>' +
            '<p>Leave those pesky weeds, those ever-falling leaves, and the fallen branches to us this year.</p>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="col-md-4">' +
      '<div class="media">' +
        '<div class="pull-left">' +
          '<span class="fa-stack fa-2x">' +
            '<img src="img/service/edge.png">' +
          '</span>' +
        '</div>' +
        '<div class="media-body">' +
          '<h4 class="media-heading">Edge</h4>' +
          '<p>Not only will we maintain your edges with our normal lawn cut service to get/keep that crisp look, but we can also install new edging where desired.</p>' +
        '</div>' +
      '</div>' +
      '<div class="media">' +
        '<div class="pull-left">' +
          '<span class="fa-stack fa-2x">' +
            '<img src="img/service/hedge.png">' +
          '</span>' +
        '</div>' +
        '<div class="media-body">' +
          '<h4 class="media-heading">Hedge</h4>' +
          '<p>Get your shrubbery trimmed 2 to 3 times a year. Work this in with the previously mentioned services and you will be the talk of the block.</p>' +
        '</div>' +
      '</div>' +
      '<div class="media">' +
        '<div class="pull-left">' +
          '<span class="fa-stack fa-2x">' +
            '<img src="img/service/seed.png">' +
          '</span>' +
        '</div>' +
        '<div class="media-body">' +
          '<h4 class="media-heading">Seed</h4>' +
            '<p>Whether you need a whole new lawn or you have patches, we use rich soil, quality grass seed, and mushroom compost to ensure a thick, green, and lush lawn.</p>' +
          '</div>' +
        '</div>' +
    '</div>' +
    '<div class="col-md-4">' +
      '<div class="media">' +
        '<div class="pull-left">' +
          '<span class="fa-stack fa-2x">' +
            '<img src="img/service/hardscape.png">' +
          '</span>' +
        '</div>' +
        '<div class="media-body">' +
          '<h4 class="media-heading">Hardscape</h4>' +
          '<p>Do you need a wall? Maybe you want a concrete or stone pad for a hot-tub or grill, give us a call for a durable and sustainable solution.</p>' +
        '</div>' +
      '</div>' +
      '<div class="media">' +
        '<div class="pull-left">' +
          '<span class="fa-stack fa-2x">' +
            '<img src="img/service/install.png">' +
          '</span>' +
        '</div>' +
        '<div class="media-body">' +
          '<h4 class="media-heading">Bed Installation</h4>' +
          '<p>Accent your property with a new mulch/rock/flower bed. Our experienced staff can help you make the right decisions based on your short and long-term expectations.</p>' +
        '</div>' +
      '</div>' +
      '<div class="media">' +
        '<div class="pull-left">' +
          '<span class="fa-stack fa-2x">' +
            '<img src="img/service/misc.png">' +
          '</span>' +
        '</div>' +
        '<div class="media-body">' +
          '<h4 class="media-heading">Misc.</h4>' +
          '<p>Do not hesitate to ask us for any other services that are not previously mentioned. We handle just about every phase of lawncare/landscape.</p>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>'
}
