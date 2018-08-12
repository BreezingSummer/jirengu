var allbuttons=$("#buttons > button");
// console.log(allbuttons)

var img_number=$("#img_wrap > img").length;
// console.log(img_number);

var n=1;
var slides_timer;
var slides_timer=setInterval(toLeft_slides,2000);

init_slides(n);
// console.log(0%3,1%3,2%3,3%3)


function init_slides(n){
    $("#img_wrap>img").removeClass();
    $("#img_wrap > img:nth-child("+n+")").addClass("currentImg")
        .siblings().addClass("laterImg");
}

function currentImg_index(n){
    if(n > 0 || n === 0){
        n = n%img_number;
        if(n === 0){
            n = img_number;
        }
    }else if(n < 0){
        n = (2*Math.abs(n))%img_number;
        if(n === 0){
            n = img_number;
        }
        // console.log(n);
    }
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
    //console.log(n+"1");
    make_currentImg(getImg(n+1));
    make_laterImg(getImg(n+2));
    make_formerImg(getImg(n));
    // .one("transitionend",function(e){
    //     //console.log(n+"2");
    //     make_laterImg($(e.currentTarget))
    // });

    //console.log(n+"3",n%img_number)
    allbuttons.eq(currentImg_index(n+1)-1).addClass("button_active")
        .siblings(".button_active").removeClass("button_active");
    n += 1;
}

function toRight_slides(){
    make_currentImg(getImg(n-1));
    make_laterImg(getImg(n));
    make_formerImg(getImg(n-2));

    // console.log(currentImg_index(n-1)-1);
    //console.log(n+"3",n%img_number)
    allbuttons.eq(currentImg_index(n-1)-1).addClass("button_active")
        .siblings(".button_active").removeClass("button_active");
    n -= 1;
}

//以下为控制动作

for(let i=0;i<allbuttons.length;i++){
    $(allbuttons[i]).on("click",function(){
        n=$(this).index();
        clearInterval(slides_timer);
        toLeft_slides();
        // init_slides(n);
        allbuttons.eq(n%img_number-1).addClass("button_active")
            .siblings(".button_active").removeClass("button_active");
        slides_timer=setInterval(toLeft_slides,2000);
        // console.log(n%img_number);
    })
}

$("#previous_button").on("click",function(){
    clearInterval(slides_timer);
    toRight_slides();
    // make_formerImg(getImg(n+1));
    // make_laterImg(getImg(n-1));
    slides_timer=setInterval(toLeft_slides,2000);
})

$("#next_button").on("click",function(){
    clearInterval(slides_timer);
    toLeft_slides();
    slides_timer=setInterval(toLeft_slides,2000);
})

$("#img_window").on("mouseover",function(){
    clearInterval(slides_timer);
})

$("#img_window").on("mouseleave",function(){
    slides_timer=setInterval(toLeft_slides,2000);
})

//防止离开页面后再回来，动画可能会跳帧的情况
document.addEventListener("visibilitychange",function(e){
    if(document.hidden){
        clearInterval(slides_timer);
    }else{
        slides_timer=setInterval(toLeft_slides,2000);
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