
$( document ).ready(function() {
var folderAJAX = "./img/pictures/";
var folder = "img/pictures/";

$.ajax({
    url : folderAJAX,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                $("#carousel ul").append( "<li class='flex-active-slide' style='width: 80px; margin-right: 5px; float: left; display: block;'><img draggable='false' src='"+ folder + val +"'/></li>" );
                console.log(folder+val);
            }
        });
    }
});
});
