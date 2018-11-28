var content = document.getElementById("content");
var style = document.getElementById("cssStyle");


var count = 0;
// style.innerHTML += word;
var clock = setInterval(function(){
    if(count < wordFir.length){
        content.innerHTML = wordFir.slice(0,count);
        // console.log(content.innerHTML);
        
        style.innerHTML = content.innerHTML;
        count += 1;
    }else{
        clearInterval(clock);
        // console.log(count+',stop')
        content.innerHTML = Prism.highlight(content.innerHTML,Prism.languages.css);
        word1();
    }
},70);

function word1(){

    // console.log(word+word1.slice(0,3));
    var preWord = wordFir;
    var count1 = 0;
    var clock1 = setInterval(function(){
        if(count1 < wordSec.length){
            content.innerHTML = Prism.highlight(preWord+wordSec.slice(0,count1),Prism.languages.css,"css");
            style.innerHTML = preWord + wordSec.slice(0,count1);
            content.scrollTop = content.scrollHeight;
            count1 += 1;
        }else{
            clearInterval(clock1);
            word2();
            intro();
        }
    },70);
}

function word2(){
    var preWord = wordFir + wordSec;
    var count2 = 0;
    var clock2 = setInterval(function(){
        if(count2 < wordThird.length){
            content.innerHTML = Prism.highlight(preWord+wordThird.slice(0,count2),Prism.languages.css,"css");
            style.innerHTML = preWord + wordThird.slice(0,count2);
            content.scrollTop = content.scrollHeight;
            count2 += 1;
        }else{
            clearInterval(clock2);
        }
    },70);
}

function intro(){
    var intro = document.getElementById("intro");
    var countIntro = 0;
    var clockIntro = setInterval(function(){
        if(countIntro < wordIntro.length){
            intro.innerHTML = wordIntro.slice(0,countIntro);
            intro.scrollTop = intro.scrollHeight;
            countIntro += 1;
        }else{
            clearInterval(clockIntro);
        }
    },60);
}

