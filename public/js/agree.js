        const agree1 = document.querySelector(".agree1");
        const agree2 = document.querySelector(".agree2");
        const id = document.querySelector(".id");
        const password = document.querySelector(".password");
        const result = document.querySelector(".result");

        result.onclick = function(){
            let id_result = id.value;
            let password_result = password.value;
            let agree1Check = agree1.checked;
            let agree2Check = agree2.checked;

            if(agree1Check && agree2Check && id_result === id_result &&  password_result === password_result){
                alert("회원가입이 완료되었습니다");
            }
            else{
                alert("잘못된 접근입니다");
            }
        }