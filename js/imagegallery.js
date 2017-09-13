var imageCount = 1;

$(window).on('load', function() {

  var newImageURL = "http://dggreenerside.com/img/pictures/" + imageCount + ".jpg";
  var images = "";

  while(doesExist(newImageURL) == true) {
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
  console.log(http.status == 200);
  return http.status == 200;
}
