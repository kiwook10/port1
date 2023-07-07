        const tabMenus = document.querySelectorAll(".tab .menu li");
       
        const contents = document.querySelectorAll(".tab .box_area .box");


        for(let i = 0; i < tabMenus.length; i++){
            tabMenus[i].onclick = function(event){
                event.preventDefault();
                //해당 클릭시 코드 실행구간
                //나머지 메뉴들은 비활성화 시킨다.(색깔)
                for(let j = 0; j < tabMenus.length; j++){
                    tabMenus[j].querySelector("a").style.backgroundColor = "#000";
                    tabMenus[j].querySelector("a").style.color = "#fff";
                    contents[j].style.display = "none";
                }
                //클릭한 메뉴는 활성화 시키고
                tabMenus[i].querySelector("a").style.backgroundColor = "orange";
                tabMenus[i].querySelector("a").style.color = "#000";
                contents[i].style.display = "flex"; 
            }
        }