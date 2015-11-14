function fromMenu(pagename){

  page = document.getElementById(pagename);
  page.classList.add("animationFromMenu");
  
}

function resetAnimations(){
  pages = document.getElementsByClassName("page");
  for(var i = 0; i < pages.length; i++){
    pages[i].setAttribute("class", "page");
  }
}

function goToAbout(){
  pageHome = document.getElementById("home-page");
  pageAbout = document.getElementById("about-page");
  //class list
  pageHome.classList.add("animationFromHome");
  pageAbout.classList.add("animateToAbout");
}

function goToClimate(){
  pageAbout = document.getElementById("about-page");
  pageClimate = document.getElementById("climate-page");
  
  pageAbout.classList.add("animateFromAbout");
  pageClimate.classList.add("animateToClimate");
}

function goToStatistics(){
  pageClimate = document.getElementById("climate-page");
  pageStats = document.getElementById("stats-page");
  
  pageClimate.classList.add("animateFromClimate");
  pageStats.classList.add("animateToStats");
  
  setTimeout(function(){
      bp.circleProgress('animationStartValue', 0);
      bp.circleProgress('value', 0.3);

      ox.circleProgress('animationStartValue', 0);
      ox.circleProgress('value', 0.5);
  }, 1000);

}

function goToEnd(){
  
  pageStats = document.getElementById("stats-page");
  
  pageStats.classList.add("animateFromStats");
  
  setTimeout(function(){
     resetAnimations();
  
      $('.page').hide();
      $('#home-page').show();
  }, 1000);
 
}

btnAbout = document.getElementById("about");
btnAbout.addEventListener("click", goToAbout, null);

btnClimate = document.getElementById("climate");
btnClimate.addEventListener("click", goToClimate, null);

btnStats = document.getElementById("stats");
btnStats.addEventListener("click", goToStatistics, null);

btnEnd = document.getElementById("end");
btnEnd.addEventListener("click", goToEnd, null);