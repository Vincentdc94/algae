items = $(".item");

items.hide();

var num_items = items.length;
var currentItem = 0;

console.log("num items: " + num_items.toString());

items.get(currentItem).style.display = "inline-block";

$('.gallery-btn-left').click(function(){
 
  items.hide();
  items.removeClass("fade-in");
  
  items.get(currentItem).style.display = "inline-block";
  items.addClass("fade-in");
  
  currentItem = next_img_left(currentItem);
  console.log(currentItem);
  
});

$('.gallery-btn-right').click(function(){
  
  
  items.hide();
  items.removeClass("fade-in");
  
  items.get(currentItem).style.display = "inline-block";
  items.addClass("fade-in");
  
  currentItem = next_img_right(currentItem);
  console.log(currentItem);
  
});

function next_img_left(thisItem)
{
  if(thisItem == 0)
  {
    thisItem = num_items - 1;
  }
  else if(thisItem > 0){
    thisItem--;
  }
  return thisItem;
}

function next_img_right(thisItem)
{
  if(thisItem == num_items - 1)
  {
    thisItem = 0;
  }
  else if(thisItem < num_items - 1){
    thisItem++;
  }
  return thisItem;
}
