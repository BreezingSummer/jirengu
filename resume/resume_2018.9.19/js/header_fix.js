!function () {
    var view = document.getElementsByTagName("header")[0];

    var controller = {
        view: null,
        init: function(){
            this.bindEvent();
        },
        bindEvent: function(){
            this.view = view;
            window.addEventListener("scroll", () => {   //使用箭头函数来使下面的this跳过本函数而直接查询到controller，因为箭头函数会忽略this
                if (document.documentElement.scrollTop >= 20) {
                    this.view.classList.add("headfix");
                } else {
                    this.view.classList.remove("headfix");
                }
            })
        },
    }

    controller.init();
    // console.log(controller.view)
}.call()
