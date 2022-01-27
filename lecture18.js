if(true){ //조건식이 항상 참
    console.log("이 구문은 실행 됩니다.");
}
if(false){ //조건식이 항상 거짓. 실행안됨
    console.log("이 구문은 실행되지 않습니다.");
}

if(true){
    console.log("1");
}else{ //if문이 항상 실행되기 때문에 else문이 실행될 일이없다
    console.log("2");
}

if(false){
    console.log("1");
}else if(true){//여기서 걸리면 뒤에는 실행되지 않는다
    console.log("2");
}else if(true){
    console.log("3");
}else{
    console.log("4");
}