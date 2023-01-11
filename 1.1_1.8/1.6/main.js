$(function(){
    $("button , .home").hover(function(){
        $(this).css("cursor","pointer");

    })

    $(".dropdown-content").slideUp();


    $(".dropbtn").on("mouseenter",function(){
        $(this).next().slideDown();
    })
    $(".dropdown-content > a").on(
        {
            mouseover: function(){
        $(this).css("background-color","#ddd");
            },
            mouseleave:function(){
        $(this).css("background-color","#f1f1f1");

            }
        }
    )

    $(".dropdown").on("mouseleave",function(){
    
        $(".dropdown-content").slideUp();
    })

})


 