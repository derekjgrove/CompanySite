var imageCount = 1;

$(window).on('load', function() {

  var newImageURL = "./img/pictures/" + imageCount + ".jpg";
  var images = "";

  while(doesExist(newImageURL) === true) {
    images += '<li><img src="' + url + '" /></li>';
    imageCount++;
    console.log(newImageURL);
  }

  $("#thumbContainer").append(images);

});


function doesExist(url) {
  $.get(url)
    .done(function() {
      console.log("true - " + url);
      return true;
    }).fail(function() {
      console.log("false - " + url);
      return false;
    });
}
