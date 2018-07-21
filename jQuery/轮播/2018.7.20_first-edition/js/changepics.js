$("#p1").on("click",function(){
    $("#img_wrap").css("transform","translateX(0)");
})

$("#p2").on("click",function(){
    $("#img_wrap").css({transform:"translateX(-400px)"});
})

$("#p3").click(function(){
    $("#img_wrap").css("transform","translateX(-800px)");
})