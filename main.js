var close = document.getElementById("menue-close");
var open = document.getElementById("menue-open");
var nav = document.getElementById("nav-links");





if(open.addEventListener){
    open.addEventListener("click", function(){
        open.style.display = "none";
        nav.style.right = "0";
    }, false)
}else{
    document.attatchEvent('onclick', function(){
        open.style.display = "none";
        nav.style.right = "0";
    })
}


if(close.addEventListener){
    close.addEventListener("click", function(){
        nav.style.right = "-400px";
        open.style.display = "initial";
    }, false)
}else{
    document.attatchEvent('onclick', function(){
        nav.style.right = "-400px";
        open.style.display = "initial";
    })
}