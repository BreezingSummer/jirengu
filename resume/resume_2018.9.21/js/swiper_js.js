!function(){
    var view = document.querySelector("#slide > .swiper-container");

    var controller = {
        view: null,
        init: function(){
            this.mySwiper();
        },
        mySwiper: function(){
            this.view = view;
            new Swiper(this.view,this.factors);
        },
        factors: {
            autoplay: true,
            delay: 1000,

            // direction: 'vertical',
            loop: true,
        
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }
    }

    controller.init();
}.call()