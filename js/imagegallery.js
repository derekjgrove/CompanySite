
$( document ).ready(function() {
var folderAJAX = "./img/pictures/";
var folder = "img/pictures/";

$.ajax({
    url : folderAJAX,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                $("#thumbContainer").append( "<li><img src='"+ folder + val +"'/></li>" );
                console.log(folder+val);
            }
        });
    },
    complete: function() {
      jQuery.getScript("/jquery.flexslider.js", function(data, status, jqxhr) {
        $(function(){
          SyntaxHighlighter.all();
        });
        $(window).load(function(){
          $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 80,
            itemMargin: 5,
            asNavFor: '#slider'
          });

          $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel",
            start: function(slider){
              $('body').removeClass('loading');
            }
          });
        });
      });
    }
});
});
