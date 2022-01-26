//연산자 우선순위
/*
1.Logical Operator : NOT
2.Arithmetic Operator : *,/,%,+,-
3.Relational Operator : >,<,...
4.Logical Operator :AudioNode(&&)
5.Logical Operator:origin(||)
*/

2 * 3 > 4 + 5 && 6 / 3 == 2 || !false //NOT인 flase를 먼저 true로 바꿔주고 시작함
height = 190
gender = "male"
height >= 180 && gender == "male" || height>= 165 && gender == "female"
//위에 식과 아래식은 똑같지만 괄호를 써주는것이 더 효과적임
(height >= 180 && gender == "male") || (height>= 165 && gender == "female")
