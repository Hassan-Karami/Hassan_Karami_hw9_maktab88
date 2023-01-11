$(function(){
    $("div").on({
        mouseenter: function () {
          $(this).css("background-color", "blue");
        },
        mouseout: function () {
          $(this).css("background-color", "red");
        },
      });
 

})