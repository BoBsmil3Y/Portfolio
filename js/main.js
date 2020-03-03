/*
Show modal on button click
*/

$(".show-modal").click(function () {
  $(".modal-" + $(this).attr("id")).addClass("is-active");
});

$(".to-close").click(function () {
  $(".modal-" + $(this).attr("id")).removeClass("is-active");
});


/*
Parallax background
*/
document.getElementById("body").onscroll = function myFunction() {
  var scrolltotop = document.scrollingElement.scrollTop;
  var target = document.getElementById("has-background");
  var xvalue = "center";
  var factor = 0.5;
  var yvalue = scrolltotop * factor;
  target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}