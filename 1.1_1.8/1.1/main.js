$(function(){
    $("div").on("click",function(){
        console.log($(this).html());
        $(this).html($(this).html()+"Click added some text.")
    })
})