$(document).ready(function(){
    $("#butn").click(function(){
         $(".box").hide();
    })
    $("#butn1").click(function(){
        $(".box").show();
   })
   $("#butn2").click(function(){
    $(".box").toggle();
});
$("#butn3").click(function(){
    $(".box").fadeOut(1000);
    
});
$("#butn4").click(function(){
    $(".box").fadeIn(1000);
});
$("#butn5").click(function(){
    $(".box").fadeToggle(1000);
});
$("#butn6").click(function(){
    $(".box").fadeTo(1000 , 0.2);
});
$("#butn7").click(function(){
    $(".box").slideUp(1000);
});
$("#butn8").click(function(){
    $(".box").slideDown(1000)
    
   
});
$("#butn9").click(function(){
    $(".box").slideToggle(1000)
        
   
});
$("#butn10").click(function(){
    $(".box").animate(
        {
            width:"300px",
            height:"250px",
           margin_right:"30px",

        },1500
    );
    $(".box").animate(
        {
            width:"500px",
            height:"350px",
            right:"10px",
         

        },1500
    );
  
});
$("#butn11").click(function(){
    $(".box").stop(true , false);



if($(window).scrollTop() >= $(".up").offset().top){
    $(".up").animate({
        opacity:"1",
    },1000
    );
}
});
});
