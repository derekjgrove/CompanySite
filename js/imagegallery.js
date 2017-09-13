var imageCount = 1;

$(window).on('load', function() {

  var newImageURL = "./img/pictures/" + imageCount + ".jpg";
  var images = "";

  while(doesExist(newImageURL) === true) {
    images += '<li><img src="img/pictures' + count + '.jpg" /></li>';
    imageCount++;
    console.log(newImageURL);
  }

  $("#thumbContainer").append(images);

});


function doesExist(url) {

  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();

  return http.status != 404;
}
