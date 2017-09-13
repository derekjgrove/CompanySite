var imageCount = 1;

$(window).on('load', function() {

  var newImageURL = "http://10.0.0.35/img/pictures/" + imageCount + ".jpg";
  var images = "";

  while(doesExist(newImageURL) == 200) {
    images += '<li><img src="img/pictures' + count + '.jpg" /></li>';
    imageCount++;
    console.log(newImageURL);
  }

  $("#thumbContainer").append(images);

});

function doesExist(url) {
 var http = jQuery.ajax({
    type:"HEAD",
    url: url,
    async: true
  })
  return http.status;
}
