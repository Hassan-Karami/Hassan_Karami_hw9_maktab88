$(function(){
    $("#second-div").css("visibility","hidden");
    $("#s-up").on("click", function(){
        $("#first-div").slideUp();
    $("#second-div").css("visibility","visible");
    })

    $("#s-down").on("click", function(){
    $("#second-div").css("visibility","hidden");
        $("#first-div").slideDown();
    })

    $("#s-toggle").on("click", function(){
        $("#second-div").css("visibility", "visible");
        $("#first-div").slideToggle()
    })
 

})