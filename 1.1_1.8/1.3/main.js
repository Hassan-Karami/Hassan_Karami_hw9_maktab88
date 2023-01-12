$(function(){
    $("#parent-btn").on("click", function(){
        $("#main >span").html($("#parent > span").html()+$("#main > span").html() +$("#child > span").html()+ $("#main > span").html())
    })

    $("#child-btn").on("click", function(){
        $("#main > span").html($("#child > span").html()+ $("#main > span").html())
        
    })

})


