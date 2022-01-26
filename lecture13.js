var str = "Hello";
// str.length;  => 5
// str["length"] 문자열길이에 접근 => 5
var str2 = " World";
var str3 = str.concat(str2); //문자열 합치기 => Hello World
str.concat(str2).concat("!"); //변수 뿐만 아니라 문자열도 줄 수 있다
"Hello".concat(" World").concat("!");
"hello".length; //=>5

str + str2; //더 쉬운방법
"Hello" + " World"; 

"Pi is"+3.14 // Pi is 3.14 문자와 숫자도 합칠 수 있다,숫자+문자도 가능!