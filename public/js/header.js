let list = document.querySelector("#header .center ul");
let depth2 = document.querySelectorAll(".depth2");


list.addEventListener("mouseenter",function(){

    for(let i=0; i < depth2.length; i++){
        depth2[i].style.display = "block";
    }
});

list.addEventListener("mouseleave",function(){

    for(let i=0; i < depth2.length; i++){
        depth2[i].style.display = "none";
    }
});