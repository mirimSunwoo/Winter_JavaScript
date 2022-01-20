//Number : 숫자를 나타내는 자료형(정수와 실수 구분 없음)
//10의 19승까지 표현할 수 있지만, 범위를 벗어나더라도 오류는 안나고 정확도가 떨어짐

var height = prompt("키를 입력해 주세요");
console.log(height,typeof(height));

//형변환 함수 : parseInt, parseFloat
//문자가 포함이 되어도 숫자 부분만 가져온다(하지만 시작부분이 다른형을 넣는다면 오류가 발생한다)
//오류로는 NaN, Infinity가 있다
var height_int = parseInt(height); //정수부분까지 저장
console.log(height_int, typeof(height_int));

var height_float = parseFloat(height); //실수 부분까지 저장
console.log(height_float, typeof(height_float));