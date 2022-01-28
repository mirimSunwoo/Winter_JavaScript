//변수의 scope는function의 scope를 따른다
//->객체(변수)는 선언된 함수 안에서만 접근이 가능하다

function a(){
    var v_a = "a";
    function b(){
        var v_b = "b";
        console.log("b :",typeof(v), typeof(v_a),typeof(v_b));
        //b :string string string
    }
    b();
    console.log("a :",typeof(v), typeof(v_a),typeof(v_b));
    //a : string string undefined
}
var v = "v";
a();
console.log("o :",typeof(v), typeof(v_a),typeof(v_b));
//o : string undefined undefined
