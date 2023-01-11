$(function(){
    $("#second-p").css("visibility","hidden");

    $("#fade-out").on("click", function(){

        $("#first-p").fadeOut();
        $("#second-p").css("visibility",'visible');
        $("main").css("background-color","white")
        
    })

    $("#fade-in").on("click", function(){
        $("#second-p").css("visibility","hidden");
        $("main").css("background-color","#c9c9c9");
        $("#first-p").fadeIn();
    })

 

})