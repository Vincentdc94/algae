
Page = function(){
    var current_page = "";
    
    var getAllPages = function(){
        return document.getElementsByClassName('page');
    }
    
    var changePage = function(){
      var id = $(this).attr("id");
      page = $('#' + id.toString() + "-page");
      page.show();
    }
    
    this.init = function(){
        var pages = getAllPages()
        
        for(var i = 0; i < pages.length; i++){
          attribute = pages[i].getAttribute("id");
          buttonId = attribute.split("-")[0].toString();
          $('#' + buttonId).click(changePage);
        }
    }
}

var pg = new Page();
pg.init();
