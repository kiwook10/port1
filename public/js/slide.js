
        const play = document.querySelector(".play");
        const not = document.querySelector(".not");
        const circles = document.querySelectorAll(".circles > li");
        const a = document.querySelectorAll(".circles > li a");
        const prev = document.querySelector(".prev");
        const next = document.querySelector(".next");
        const slide = document.querySelector(".slide");


        sNumber = 0;
let autoSlide = setInterval(function(){
    slides();

},5000);

not.onclick = function(){
    clearInterval(autoSlide);
}

play.onclick = function(){

    autoSlide = setInterval(function(){
        slides();

    },5000);
}


 for(let j=0; j<circles.length; j++){
    circles[j].onclick = function(event){ 
        event.preventDefault();
        sNumber = j; 

        slide.style.marginLeft = -sNumber * 100 + "%";

        for(let i=0; i<circles.length; i++){
            circles[i].style.backgroundColor = "#000";
            a[i].style.color = "#fff";
        }

        circles[sNumber].style.backgroundColor = "#fff";
        a[sNumber].style.color = "#000";
    }
}

prev.onclick = function(){
    if(sNumber === 0){
        sNumber = circles.length-1;
    }
    else{
        sNumber--;
    }
    slide.style.marginLeft = -sNumber * 100 + "%";
     for(let i=0; i<circles.length; i++){
        circles[i].style.backgroundColor = "#000";
        a[i].style.color = "#fff";
    }
    circles[sNumber].style.backgroundColor = "#fff";
    a[sNumber].style.color = "#000";
}

 next.onclick = function(){
    slides();
}

function slides(){
    if(sNumber === circles.length-1){
        sNumber = 0;
    }
    else{
        sNumber++;
    }
    slide.style.marginLeft = -sNumber * 100 + "%";

    for(let i=0; i<circles.length; i++){
            circles[i].style.backgroundColor = "#000";
            a[i].style.color = "#fff";
        }

        circles[sNumber].style.backgroundColor = "#fff";
        a[sNumber].style.color = "#000";
}