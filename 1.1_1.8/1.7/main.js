let w=10;
let l=10;
$(function(){
    $("button").on("click",function(){
        if(l===100 && w===100){
            alert("You Won");
            window.location.reload();
            
        }
     
        $("#load").css("width",`${l+=10}%`);
        $("p").html(`${w+=10}%`);
        
       
    })
    
})