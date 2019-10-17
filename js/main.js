/*
Navbar burger enable
*/
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

/*
Show modal on button click
*/

$(".show-modal").click(function() {
  $(".modal-" + $(this).attr("id")).addClass("is-active");
});

$(".to-close").click(function() {
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