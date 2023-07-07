

let Des_Number = [712832,2341,21673,6573];
let check = true;

function counting(sendel,sendidx){
    let num = 0; 
  
    let autocount = setInterval(function(){
        num += Math.floor(sendidx /600);

        if(num < sendidx){
            sendel.innerText = num.toLocaleString();
          
        }
        else{
            clearInterval(autocount);
            sendel.innerText = sendidx.toLocaleString();
        }

    },1);
}