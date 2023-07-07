 
 const selmenu = document.querySelectorAll(".section05 .select .s5_menu > li");

 selmenu.forEach(function(btn){
     btn.onclick = function(event){
         event.preventDefault();
       
         let data = btn.getAttribute("data-develop");

         iso.arrange({
             filter:data,
             transitionDuration:'0.2s'
         });
     }
 });



 
 let elem = document.querySelector('.s5box_area > .center');

 
 let iso = new Isotope( elem, {
    
     itemSelector: '.all',
     layoutMode: 'fitRows'
 });