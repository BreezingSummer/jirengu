var Modules=document.querySelectorAll("[module]");
var nearestModule=0;
// console.log(Modules);
// for(var i=0;i<Modules.length;i++){
//     Modules[i].classList.add("ModuleStartPosition");
//     // Modules[nearestModule].classList.remove("ModuleStartPosition");
//     // console.log(Modules[i].classList)
// }
Modules[0].classList.add("ModuleStartPosition");
window.onscroll=function(){
    var nearestDis=Math.abs(Modules[nearestModule].offsetTop-window.scrollY);
    for(var i=0;i<Modules.length;i++){
        if(Math.abs(Modules[i].offsetTop-window.scrollY) < nearestDis){
            nearestModule=i;
        }
    }
    // console.log(Modules[nearestModule]);
    Modules[nearestModule].classList.add("ModuleStartPosition");
}