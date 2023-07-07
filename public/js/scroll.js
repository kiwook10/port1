const header = document.querySelector("#header");
const conts = document.querySelectorAll("#contianer > div");
const section2_box = document.querySelector(".section02 .center .bot_list");
const section4_box = document.querySelectorAll(".section04 .center > div");
const left_fix = document.querySelectorAll(".left_fix .menu li a");
const count = document.querySelectorAll(".counting .count");

window.onscroll = function(){
            
    let scTop = window.scrollY;
    console.log(scTop);

    if(scTop > 0){
        header.classList.add("on");
    }
    else{
        header.classList.remove("on");
    }
    
    for(let j=0; j<conts.length; j++){
        
        if(scTop >= conts[j].offsetTop){
            for(let i=0; i<left_fix.length; i++){
                left_fix[i].classList.remove("on");
            }               
            left_fix[j].classList.add("on");
        }
    }

    if(scTop > 300){
        section2_box.style.marginLeft = "0px";
    }
    else{
        section2_box.style.marginLeft = "2000px";
    }
   
  
    if(scTop > 900){
        for(let i=0; i<section4_box.length; i++){
            section4_box[i].classList.add("on");
        }
    }
    else{
        for(let i=0; i<section4_box.length; i++){
            section4_box[i].classList.remove("on");
        }
    }



    if(scTop >= 2500){
        if(check == true){
            check = false;
            count.forEach(function(el,idx){

                counting(el,Des_Number[idx]);
            });
        }
    }


}

 for(let i=0; i<left_fix.length; i++){
    left_fix[i].onclick =function(event){

        event.preventDefault();

        let movePosition = conts[i].offsetTop;

        window.scrollTo ({
            top:movePosition,
            behavior:"smooth"
        })
    }
}

