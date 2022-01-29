function f(){
    console.log(this);
    console.log("f is called");
}
function setName(name){
    this.name = name;
}
var o = {name:"object",method:f, setName:setName};
var o2 = {name:"",setName:setName};

o.setName("object1");
o2.setName("object2");

console.log(o,o2);

//일반적인 함수를 호출할때, 해당 함수 내부에서 사용된 this는 전역객체에 바인딩된다
//어떤함수가 호출했는지 this키워드를 이용해서 알 수 있다
