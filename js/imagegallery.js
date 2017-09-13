

var folderAJAX = "./img/pictures/";
var folder = "img/pictures/";

$.ajax({
    url : folderAJAX,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                $("thumbContainer").append( "<li><img src='"+ folder + val +"'/></li>" );
            }
        });
    }
});
