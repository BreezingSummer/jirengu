//2018.6.7添加<a>精准锚点，tween过渡动画
!function () {
    var view = document.querySelectorAll("header > nav > ul > li > a");

    var controller = {
        view: null,
        init: function(){
            this.initAnimate();
            this.bindEvent();
        },
        bindEvent: function(){
            // console.log(this.view)
            // var view = this.view;
            for (var i = 0; i < view.length; i++) {
                view[i].onclick = (event) => {
                    event.preventDefault();
                    var href = event.target.getAttribute("href");
                    // console.log(href)
                    var target = document.querySelector(href);
                    // console.log(this)
                    this.useTween(target);
                }
                
            }
        },
        initAnimate: function(){
            function animate() {
                requestAnimationFrame(animate);
                TWEEN.update();
            }
            requestAnimationFrame(animate);
        },
        useTween: function(target){
            var top = target.offsetTop - 70;
            var currentPosition = window.scrollY;
            // alert(top-8);
            // alert(currentPosition);
            // alert(top);
            var currentPositionTween = { y: currentPosition };
            var tween = new TWEEN.Tween(currentPositionTween)
                .to({ y: top }, 1000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, currentPositionTween.y);
                })
                .start();
        },
    };

    controller.init();
}.call()