//while문을 활용해서 반복해보자

console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Cafe Latte");
console.log("3. Cappuccino");
console.log("4. Tea");

var count = 0;
while(count < 3){
    var choice = parseInt(prompt("메뉴를 선택해 주세요"));

    console.log(choice+"번 메뉴를 선택하셨습니다.");

    switch(choice){
        case 1:
            console.log("아이스 아메리카노는 1500원 입니다.");
            break;
        case 2:
            console.log("카페 라떼는 1800원 입니다.");
            break;
        case 3:
            console.log("카푸치노는 2000원 입니다.");
            break;
        case 4:
            console.log("홍차는 1300원입니다.");
            break;
        default:
            console.log("죄송합니다. 그런메뉴는 없습니다.");
            break;
    }
    count++;
}
console.log("안녕히 가십시오.");

//반복문을 종료하기 위해서는 break가 필요하다

var count = 0;
while(true){
    var ans;
    ans = parseInt(prompt("1+1=?"));
    if(ans !=2){
        console.log((++count)+"번 틀렸습니다. 다시 도전하세요.");
        continue;
    }
    ans = parseInt(prompt("7-3=?"));
    if(ans !=4){
        console.log((++count)+"번 틀렸습니다. 다시 도전하세요.");
        continue;
    }
    ans = parseInt(prompt("9*7=?"));
    if(ans !=63){
        console.log((++count)+"번 틀렸습니다. 다시 도전하세요.");
        continue;
    }
    break;
    //위에서 continue를 만나면 여기로 이동한다.
}
//break.를 만나면 여기로 이동한다
console.log("참 잘했습니다!");