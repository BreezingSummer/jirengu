var allbuttons=$("#buttons > button");
// console.log(allbuttons)

var img_number=$("#img_wrap > img").length;
// console.log(img_number);

var n=0;
var slides_timer;
var slides_timer=setInterval(toLeft_slides,2000);

init_slides(n);
// console.log(0%3,1%3,2%3,3%3)


function init_slides(n){
    $("#img_wrap>img").removeClass();
    $("#img_wrap > img:nth-child("+n+1+")").addClass("currentImg")
        .siblings().addClass("laterImg");
}

function currentImg_index(n){
    n = n%img_number;
    if(n === 0){n=img_number;}
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
    return $node;
}

function toLeft_slides(){
    n += 1;
    //console.log(n+"1");
    make_currentImg(getImg(n+1));
    make_formerImg(getImg(n));
    // .one("transitionend",function(e){
    //     //console.log(n+"2");
    //     make_laterImg($(e.currentTarget))
    // });
    
    make_laterImg(getImg(n+2));

    //console.log(n+"3",n%img_number)
    allbuttons.eq(n%img_number).addClass("button_active")
        .siblings(".button_active").removeClass("button_active");
}

function toRight_slides(){
    n += 1;
    //console.log(n+"1");
    make_currentImg(getImg(n+1));
    make_formerImg(getImg(n));
    // .one("transitionend",function(e){
    //     //console.log(n+"2");
    //     make_laterImg($(e.currentTarget))
    // });
    
    make_laterImg(getImg(n+2));

    //console.log(n+"3",n%img_number)
    allbuttons.eq(n%img_number).addClass("button_active")
        .siblings(".button_active").removeClass("button_active");
}

//以下为控制动作

for(let i=0;i<allbuttons.length;i++){
    $(allbuttons[i]).on("click",function(){
        n=$(this).index()+1;
        clearInterval(slides_timer);
        init_slides(n);
        allbuttons.eq(n%img_number-1).addClass("button_active")
            .siblings(".button_active").removeClass("button_active");
        SETslides_timer();
        // console.log(n%img_number);
    })
}

$("#previous_button").on("click",function(){
    clearInterval(slides_timer);
    // console.log(n);
    make_laterImg(getImg(n))
    .one("transitionend",function(e){
        make_formerImg($(e.currentTarget))
    });
    make_currentImg(getImg(n-1));

    make_formerImg(getImg(n+1));

    allbuttons.eq(n%img_number).addClass("button_active")
        .siblings(".button_active").removeClass("button_active");
    n -= 1;
    if(n===0){n=3;}
    SETslides_timer();
})

$("#next_button").on("click",function(){
    clearInterval(slides_timer);
    toLeft_slides();
})

$("#img_window").on("mouseover",function(){
    clearInterval(slides_timer);
})

$("#img_window").on("mouseleave",function(){
    SETslides_timer();
})

//防止离开页面后再回来，动画可能会跳帧的情况
document.addEventListener("visibilitychange",function(e){
    if(document.hidden){
        clearInterval(slides_timer);
    }else{
        SETslides_timer();
    }
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