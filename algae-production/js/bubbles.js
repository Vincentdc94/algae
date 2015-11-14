var img_src = "img/bubble.svg";

function spawn_bubble(x){
  var bubble = document.createElement('img');
  bubble.setAttribute("src", img_src);
  bubble.style.left = x.toString() + "px";
  bubble.style.bottom = "1px";
  document.body.appendChild(bubble);
  
  bubble.className = "bubble";
}
/*
function move_up(){
  var bubbles = document.getElementsByClassName("bubble");

  console.log(bubbles.lenght);
  console.clear();

  for(var bubbleNr = 0; bubbleNr < bubbles.length; bubbleNr++){
    sty = window.getComputedStyle(bubbles[bubbleNr]);
    btmVal = sty.getPropertyValue('bottom');
    btmInt = parseInt(btmVal.substring(0,  btmVal.length - 2));

    console.log(btmInt); 
    
    bubbles[bubbleNr].style.bottom = (btmInt + 5).toString() + "px";

    if(btmInt > $(window).height()){
      bubbles[bubbleNr].remove();
    }

  }
}
*/

var spawner = setInterval(function(){
  var x = Math.floor(Math.random() * window_width + 1);

  var bubbles = document.getElementsByClassName("bubble");

  for(var bubbleNr = 0; bubbleNr < bubbles.length; bubbleNr++){
    sty = window.getComputedStyle(bubbles[bubbleNr]);
    opacity = sty.getPropertyValue('opacity');
console.log(opacity);
    if(opacity < 0.3){
      bubbles[bubbleNr].remove();
    }

  }

  spawn_bubble(x);

}, 700);

$('#btn-go').click(function(){
  clearInterval(spawner);
})
