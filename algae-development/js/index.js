//window fullscreen fix

var window_width = $(window).width();

$('.overlay').height($(window).height());

$(window).resize(function(){
  $('.overlay').height($(window).height());
  window_width = $(window).width();
});


/* menu open/close logic */
menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", function(){
  $("#menu-nav").css({left: "0px", display: "block" , opacity: 0})
  .animate({left: "140px", opacity: 1}, 300);
}, null);

menuCloseButton = document.getElementById("nav-close");
menuCloseButton.addEventListener("click", function(){
  $("#menu-nav").css({left: "140px", display: "block" , opacity: 1})
  .animate({left: "0px", opacity: 0}, 300, function(){
    $(this).css({display: "none"});
  });
}, null);



/* Open the navigations in an animated manner */

function doNavItem(){
  menuNav = document.getElementById("menu-nav");
  
  resetAnimations();
  
  $('.page').hide();
  menuNav.setAttribute("class", "inactive");
  var id = $(this).attr("id").split("-")[1];
  $('#' + id.toString() + "-page").show();
  fromMenu(id.toString() + "-page");
  
  if(id == "stats"){
    bp.circleProgress('animationStartValue', 0);
    bp.circleProgress('value', 0.3);
    
    ox.circleProgress('animationStartValue', 0);
    ox.circleProgress('value', 0.5);
  }
}

menuHome = document.getElementById("nav-home");
menuHome.addEventListener("click", doNavItem, null);

menuAbout = document.getElementById("nav-about");
menuAbout.addEventListener("click", doNavItem, null);

menuClimate = document.getElementById("nav-climate");
menuClimate.addEventListener("click", doNavItem, null);

menuStats = document.getElementById("nav-stats");
menuStats.addEventListener("click", doNavItem, null);





