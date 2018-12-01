!(function (){
    var content = document.getElementById("content");
    var selfWrite = document.getElementById("selfWrite");
    var duration = 35;
    var clock;
    $("#buttonSection").on("click","button",function(e){
        // console.log(this);
        // console.log(e);
        // console.log(e.currentTarget);
        // console.log($(this).attr("speed"));
        if($("#buttonSection .show").attr("speed") !== "skip" || $(this).attr("speed") === "replay"){
            let $speed = $(this).attr("speed");
            console.log($speed);
            $(this).addClass("show").siblings(".show").removeClass("show");
            switch($speed){
                case "slow":
                    duration = 100;
                    break;
                case "medium":
                    duration = 35;
                    break;
                case "fast":
                    duration = 10;
                    break;
                case "skip":
                    skipAnimation();
                    break;
                case "replay":
                    clearTimeout(clock);
                    $(this).removeClass("show").siblings("[speed='medium']").addClass("show");
                    duration = 35;
                    play();
                    break;
            }
            // console.log(duration);
        }
    })
    // console.log(word+word1.slice(0,3));
    play();
    function play(){
        var count = 0;
        setTimeout(function run(){
            if(count < word.length){
                content.innerHTML = Prism.highlight(word.slice(0,count),Prism.languages.css,"css");
                selfWrite.innerHTML = word.slice(0,count);
                content.scrollTop = content.scrollHeight;
                count += 1;
                clock = setTimeout(run,duration);
            }else{
                clearTimeout(clock);
            }
        },duration);
    }
   

    function skipAnimation(){
        clearTimeout(clock);
        content.innerHTML = Prism.highlight(word,Prism.languages.css,"css");
        selfWrite.innerHTML = word;
        content.scrollTop = content.scrollHeight;
    }

    var word = `
    /*
    * 你好，我是黄国荣。这个页面是在使用css画一只皮卡丘和一个精灵球~
    * css代码会在这各白布上呈现，调速按钮在右边👉👉👉
    * 谢谢~
    */

    #head{
        width: 500px;
        height: 350px;
        /* border: 1px solid red; */
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffe600;
        position: relative;
    }
    
    #nose{
        width: 2px;
        height: 0;
        border-radius: 43%;
        border: 15px solid;
        border-color: black transparent transparent;
    }
    
    #eyes{
        --dis: 50px;
        width: 220px;
        height: var(--dis);
        /* border: 1px solid red; */
        position: absolute;
        top: 100px;
        display: flex;
        justify-content: space-between;
    }
    
    #leftEye,#rightEye{
        width: var(--dis);
        height: var(--dis);
        border-radius: 50%;
        background: black;
        position: relative;
    }
    
    #leftEye::before,
    #rightEye::before{
        content: "";
        position: absolute;
        top: 4px;
        left: 7px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: white;
    }
    
    #cheek{
        --dis: 70px;
        width: 360px;
        height: var(--dis);
        /* border: 1px solid red; */
        position: absolute;
        bottom: 100px;
        display: flex;
        justify-content: space-between;
    }
    
    #leftCheek,#rightCheek{
        width: var(--dis);
        height: var(--dis);
        border-radius: 50%;
        background: red;
        border: 3px solid black;
    }
    
    #mouth{
        width: 85px;
        /* border: 1px solid red; */
        position: absolute;
        bottom: 30px;
        display: flex;
        justify-content: center;
    }
    
    #upperLip{
        z-index: 1;
    }
    
    #upperLip::before,
    #upperLip::after{
        content: "";
        position: absolute;
        top: -4px;
        width: 60px;
        height: 14px;
        border-bottom: 3px solid black;
        background: #ffe600;
    }
    
    #upperLip::before{
        right: 50%;
        border-left: 3px solid black;
        border-bottom-left-radius: 36px 14px;
        transform: rotate(-17deg);
    }
    
    #upperLip::after{
        left: 50%;
        border-right: 3px solid black;
        border-bottom-right-radius: 36px 14px;
        transform: rotate(17deg);
    }
    
    #lowerLip{
        width: 100%;
        height: 130px;
        border: 3px solid black;
        border-bottom-left-radius: 50% 80%;
        border-bottom-right-radius: 50% 80%;
        background: #9b000a;
        overflow: hidden;
        position: relative;
    } 
    
    #lowerLip::before{
        content: "";
        position: absolute;
        top: 33px;
        left: -22px;
        width: 150%;
        height: 73%;
        border: 3px solid black;
        border-top-left-radius: 50% 80%;
        border-top-right-radius: 50% 80%;
        background: #ff485f;
    }
    
    #pokeball{
        width: 170px;
        height: 170px;
        border-radius: 50%;
        border: 10px solid black;
        position: relative;
        background: #cccccc;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px;
    }
    
    #pokeball::after{
        content: "";
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height:45%;
        border-bottom: 11px solid black;
        border-top-left-radius: 50% 90%;
        border-top-right-radius: 50% 90%;
        background: red;
    }
    
    #pokeball::before{
        content: "";
        position: absolute;
        bottom:0;
        left: -11px;
        width: 100%;
        height:50%;
        border-bottom-left-radius: 50% 90%;
        border-bottom-right-radius: 50% 90%;
        background: white;
    }
    
    #pokeball > .circle{
        width: 45%;
        height: 45%;
        border-radius: 50%;
        background: white;
        border: 8px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
    
    #pokeball > .circle::before{
        content: "";
        width: 60%;
        height: 60%;
        border-radius: 50%;
        background: #7f8c8d;
    }
    `;
}).call()