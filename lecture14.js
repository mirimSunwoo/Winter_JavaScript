var str = "abcdabcde";
str.charAt(0); // "a"
str.length; //10
str.charAt(10) //10부터는 범위를 벗어나 ""를 반환
str.charAt(-1) //10과 동일 "" 반환

str[1]; //"b"
str[10]; //undefined
str[-1]; //undefined 개발자가 더 많이 사용함

str.substring(2,4); //2부터 4전까지 반환
str.substr(2,4); //2부터 4개의 문자를 반환
str.substring(2); //2부터 끝까지
str.substr(2); //substring과 동일
str.substr(-7); //뒤에서부터 7까지 가서 끝까지 반환 "deabcde"

str.indexOf("bc"); //1이 반환됨(앞 글자먼저)
str.lastIndexOf("bc"); //6이 반환됨(뒷 글자 먼저) 존재하지 않는다면 -1반환