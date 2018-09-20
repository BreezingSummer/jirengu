!function(){
    var view = document.querySelectorAll("[module]");

    var controller = {
        view: null,
        nearestModule: 0,
        lastPosition: window.scrollY,
        init: function(){
            this.view = view;
            this.getNearestModule(view);
            this.addModulesClass(view);
            this.FirstModuleMove(view);
            this.bindEvent(view);
        },
        bindEvent: function(Modules){
            window.onscroll=() => {
                this.getNearestModule(Modules);
                // console.log(Modules[nearestModule]);
                if(this.lastPosition <= window.scrollY){
                    Modules[this.nearestModule].classList.add("rollToPosition");
                }else if(this.lastPosition > window.scrollY){
                    Modules[this.nearestModule].classList.remove("rollToPosition");
                }
                this.FirstModuleMove(Modules);
                this.lastPosition=window.scrollY;
            }
        },
        addModulesClass: function(Modules){
            for(var i=0;i<this.nearestModule;i++){
                Modules[i].classList.add("rollToPosition");
            }
        },
        FirstModuleMove: function(Modules){
            if(window.scrollY===0){
                Modules[0].classList.add("rollToPosition");
            }else if(window.scrollY===window.scrollHeight){
                Modules[Modules.length].classList.add("rollToPosition");
            }
        },
        getNearestModule: function(Modules){
            var nearestDis=Math.abs(Modules[this.nearestModule].offsetTop-window.scrollY);
            for(var i=0;i<Modules.length;i++){
                if(Math.abs(Modules[i].offsetTop-window.scrollY) < nearestDis){
                    this.nearestModule=i;
                }
            }
        },
    }

    controller.init();
}.call()

// var Modules=document.querySelectorAll("[module]");
// var nearestModule=0;
// var lastPosition=window.scrollY;
// // console.log(document.body.scrollHeight);
// // console.log(window.scrollY+document.body.clientHeight);
// // console.log(Modules);
// // for(var i=0;i<Modules.length;i++){
// //     Modules[i].classList.add("ModuleStartPosition");
// //     // Modules[nearestModule].classList.remove("ModuleStartPosition");
// //     // console.log(Modules[i].classList)
// // }
// getNearestModule();
// for(var i=0;i<nearestModule;i++){
//     Modules[i].classList.add("rollToPosition");
// }
// FirstModuleMove();
// window.onscroll=function(){
//     getNearestModule();
//     // console.log(Modules[nearestModule]);
//     if(lastPosition <= window.scrollY){
//         Modules[nearestModule].classList.add("rollToPosition");
//     }else if(lastPosition > window.scrollY){
//         Modules[nearestModule].classList.remove("rollToPosition");
//     }
//     FirstModuleMove();
//     lastPosition=window.scrollY;
// }

// function FirstModuleMove(){
//     if(window.scrollY===0){
//         Modules[0].classList.add("rollToPosition");
//     }else if(window.scrollY===window.scrollHeight){
//         Modules[Modules.length].classList.add("rollToPosition");
//     }
// }

// function getNearestModule(){
//     var nearestDis=Math.abs(Modules[nearestModule].offsetTop-window.scrollY);
//     for(var i=0;i<Modules.length;i++){
//         if(Math.abs(Modules[i].offsetTop-window.scrollY) < nearestDis){
//             nearestModule=i;
//         }
//     }
// }