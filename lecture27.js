//closure(클로저) : 두개가 따로놀수있다는걸 설명하시는 것 같음
function makeCounterFunction(initVal){
    var count = initVal;
    function Increase(){
        count++;
        console.log(count);
    }
    return Increase;
}
var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);

counter1();
counter2();
