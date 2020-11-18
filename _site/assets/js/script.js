console.log("TEST");
var fn_scrollup = function () {
    if ($( "#scrollTop" ).length) {
      $("#scrollTop").on('click', function() {
        $("html, body").animate(
          {scrollTop: "0"}, 2000);
      });
    }
 }

var fn_scrolldown = function () {
    $("#scrollDown").on('click', function() {
        var n = $(document).height();
        $('html, body').animate(
            { scrollTop: n }, 500);
    });
}


$( document ).ready(function() {
    fn_scrollup();
    fn_scrolldown();
});