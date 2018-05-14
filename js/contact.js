function loadContactPage() {
  showCarousel(false);
  document.getElementById('content').innerHTML =
    '<div class="row">' +
      '<h1 class="page-header">Contact</h1>' +
      '<div class="col-md-8">' +
        '<div id="map" style="width:100%; height:400px;"></div>' +
      '</div>' +
      '<div class="col-md-4">' +
        '<h3>Contact Details</h3>' +
        '<p>' +
          '<a href="https://www.google.com/maps/place/DG\'s+Greener+Side/@40.3515201,-79.8905018,10.63z/data=!4m5!3m4!1s0x0:0xb8c33a0a6a6a9a7f!8m2!3d40.3711099!4d-79.692549" target="_blank"> 230 Sunrise Dr.<br>Irwin, PA 15642<br></a>' +
        '</p>' +
        '<p><i class="fa fa-phone"></i>' +
          '<abbr title="Phone">P</abbr>: <a href="tel://1-724-961-2665">(724) 961-2665</a></p>' +
        '<p><i class="fa fa-envelope-o"></i>' +
          '<abbr title="Email">E</abbr>: <a href="mailto:dggreenerside@gmail.com">dggreenerside@gmail.com</a>' +
        '</p>' +
        '<p><i class="fa fa-clock-o"></i>' +
          '<abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM</p>' +
      '</div>' +
    '</div>' +
    '<div class="row">' +
      '<div class="col-md-8">' +
        '<h3>Send us a Message</h3>' +
        '<form name="sentMessage" id="contactForm" novalidate>' +
          '<div class="control-group form-group">' +
            '<div class="controls">' +
              '<label>Full Name:</label>' +
              '<input type="text" class="form-control" id="name" required data-validation-required-message="Please enter your name.">' +
              '<p class="help-block"></p>' +
            '</div>' +
          '</div>' +
          '<div class="control-group form-group">' +
            '<div class="controls">' +
              '<label>Phone Number:</label>' +
              '<input type="tel" class="form-control" id="phone" required data-validation-required-message="Please enter your phone number.">' +
            '</div>' +
          '</div>' +
          '<div class="control-group form-group">' +
            '<div class="controls">' +
              '<label>Email Address:</label>' +
              '<input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address.">' +
            '</div>' +
          '</div>' +
          '<div class="control-group form-group">' +
            '<div class="controls">' +
              '<label>Message:</label>' +
              '<textarea rows="10" cols="100" class="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999" style="resize:none"></textarea>' +
            '</div>' +
          '</div>' +
          '<div id="success"></div>' +
          '<button type="submit" class="btn btn-primary">Send Message</button>' +
          '</form>' +
        '</div>' +
      '</div>'
      initMap();
}
