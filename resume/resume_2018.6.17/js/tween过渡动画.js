//2018.6.7添加<a>精准锚点，tween过渡动画
var aArray=document.querySelectorAll("header > nav > ul > li > a");
// console.log(aArray)
for(var i=0;i<aArray.length;i++){
    aArray[i].onclick=function(event){
        event.preventDefault();
        var href=event.target.getAttribute("href");
        // console.log(href)
        var target=document.querySelector(href);
        var top=target.offsetTop-70;
        var currentPosition=window.scrollY;
        // alert(top-8);
        // alert(currentPosition);
        // alert(top);
        var currentPositionTween={y:currentPosition};

        var tween=new TWEEN.Tween(currentPositionTween)
            .to({y:top},1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function(){
                window.scrollTo(0,currentPositionTween.y);
            })
            .start();

        function animate() {
            requestAnimationFrame(animate);
            TWEEN.update();
        }
        requestAnimationFrame(animate);
    }
}