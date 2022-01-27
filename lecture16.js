var arr = [1,2,3,4,5];
arr.pop(); // 5
arr.shift();//앞에서 꺼냄 =>1
arr.push(6); //배열의 뒤에 엘리먼트 추가, 반환값은 배열의 길이
arr.unshift(0); //배열의 앞에 엘리먼트 추가, [0,2,3,4,6]

arr.reverse(); //배열을 뒤집음
arr.sort(); //배열의 값을 정렬함

var arr1 = [1,2,3];
var arr2 = [4,5,6];
arr1.concat(arr2); //배열도 합칠 수 있다(원본안바뀜)
var arr3 = arr1.concat(arr2); //변수를 만들어서 배열합치걸 넣어줌

var arr4 = [1,2,3,1,2,3]; 
arr4.indexOf(2); //1 =>2인덱스 처음나온걸 찾음
arr4.lastIndexOf(2);//4 =>2인덱스 끝에 나온걸 찾음
var str="1,2,3,4,5";
str.split(","); //split함수로 ,가 나올때마다 값을 띄워서 배열에 넣어준다
