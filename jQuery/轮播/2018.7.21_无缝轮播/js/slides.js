var allbuttons=$("#buttons > button");
// console.log(allbuttons)

var img_number=$("#img_wrap > img").length;
// console.log(img_number);

init_slides();
// console.log(0%3,1%3,2%3,3%3)
var n=1;
var slides_timer = setInterval(function(){
    // console.log(n);
    make_formerImg(getImg(n))
    .one("transitionend",function(e){
        // console.log(n);
        make_laterImg($(e.currentTarget))
    });
    make_currentImg(getImg(n+1));

    // console.log(n,n%img_number)
    allbuttons.eq(n%img_number).addClass("button_active")
    .siblings(".button_active").removeClass("button_active");

    n += 1;
},1000)

function init_slides(){
    $("#img_wrap > img:nth-child(1)").addClass("currentImg");
    $("#img_wrap > img:nth-child(2)").addClass("laterImg");
    $("#img_wrap > img:nth-child(3)").addClass("laterImg");
}

function currentImg_index(n){
    n = n%img_number;
    if(n === 0){n=3;}
    return n;
}

function getImg(n){
    return $(`#img_wrap > img:nth-child(${currentImg_index(n)})`)
}

function make_currentImg($node){
    $node.removeClass("laterImg formerImg").addClass("currentImg");
}

function make_formerImg($node){
    $node.removeClass("laterImg currentImg").addClass("formerImg");
    return $node;
}

function make_laterImg($node){
    $node.removeClass("formerImg currentImg").addClass("laterImg");
}

$("#img_window").on("mouseover",function(){
    clearInterval(slides_timer);
})

$("#img_window").on("mouseleave",function(){
    slides_timer = setInterval(function(){
        // console.log(n);
        make_formerImg(getImg(n))
        .one("transitionend",function(e){
            // console.log(n);
            make_laterImg($(e.currentTarget))
        });
        make_currentImg(getImg(n+1));
    
        // console.log(n,n%img_number)
        allbuttons.eq(n%img_number).addClass("button_active")
        .siblings(".button_active").removeClass("button_active");
    
        n += 1;
    },1000)
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