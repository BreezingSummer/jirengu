var allbuttons=$("#buttons > button");
// console.log(allbuttons)

for(let i=0;i<allbuttons.length;i++){
    allbuttons.eq(i).on("click",function(){
        // console.log(allbuttons.eq(i))
        var movedis=i * -400;
        // console.log(movedis);
        $("#img_wrap").css("transform","translateX("+movedis+"px)");
        allbuttons.eq(i).addClass("button_active")
        .siblings(".button_active").removeClass("button_active");
    })
}

var button_index=0;
var button_number=allbuttons.length;
var img_roll_timer = setInterval(function(){
    allbuttons.eq(button_index % button_number).trigger("click");
    button_index += 1;
},2000)

$("#img_window").on("mouseover",function(){
    clearInterval(img_roll_timer);
    // console.log(button_index)
})

$("#img_window").on("mouseleave",function(){
    img_roll_timer = setInterval(function(){
        allbuttons.eq(button_index % button_number).trigger("click");
        button_index += 1;
    },2000)
})


// $("#p1").on("click",function(){
//     $("#img_wrap").css("transform","translateX(0)");
// })

// $("#p2").on("click",function(){
//     $("#img_wrap").css({transform:"translateX(-400px)"});
// })

// $("#p3").click(function(){
//     $("#img_wrap").css("transform","translateX(-800px)");
// })