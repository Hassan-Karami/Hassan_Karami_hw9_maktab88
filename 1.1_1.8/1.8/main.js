$(function(){

    $(".slider").eq(0).slideUp();
    $(".slider").eq(1).slideUp();

     
    $(".selector").on({
        click: function(){
        if($(this).next().is(":hidden")){
            

            $("i").attr("class","fa fa-caret-right");
            console.log($(".selector").children().eq(0));


        


            
            $(".selector").next().slideUp();
            $(this).children().eq(0).attr("class","fa fa-caret-down");
            $(this).next().slideDown();
        }
       
            
        }
    })

 

})
