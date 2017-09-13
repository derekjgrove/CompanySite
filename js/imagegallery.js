var imageCount = 1;

$(window).on('load', function() {

  var newImageURL = "./img/pictures/" + imageCount + ".jpg";
  var images = "";

  while(doesExist(newImageURL) === true) {
    images += '<li><img src="' + url + '" /></li>';
    imageCount++;
  }

  $("#thumbContainer").append(images);

});


function doesExist(url) {
  $.get(url)
    .done(function() {
      console.log("true - " + url);
      return true;
    }).fail(function() {
        return false;
        console.log("false - " + url);
    });
}
