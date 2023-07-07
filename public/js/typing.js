 //타이핑 효과
 let text = "당신의 일상에 좋은 변화가 시작됩니다";
 
 let serveText = "";
 
 let i = 0;
 
 //타이핑 대상 잡아놓을공간

 const typing = document.querySelector(".intro .typing");

 
 let autoTyping = setInterval(function(){
    
     startTyping();
 },200);

 
 function startTyping(){ 
     serveText = text[i]; 
     i += 1; 
     typing.innerText += serveText; 
     
     if(i > text.length-1){
         clearInterval(autoTyping); 
         setTimeout(function(){
             typing.innerText = ""; 
             i = 0; 
             autoTyping = setInterval(function(){
                 startTyping();
             },200); 
         },5000); 
     }
 }