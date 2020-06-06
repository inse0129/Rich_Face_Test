//String 텍스트
const what = "Inse";
console.log(what);

/* Boolean 진실 거짓 값(1=true/ 0=false)
const wat = true;
*/
/* Number 숫자
const wat = 666;
*/
/* Float 소수점
const wat = 55.1; 
*/
//dayOfWeek의 Of와 Week가 첫 문자 대문자인 이유는 관습임.
//예를 들어, 띄어쓰기 된 부분은 대문자로 시작하기.(오류는 없지만 팀원이 읽기 편하라고)
//const dayOfWeek =

//Array 배열
/*
const monday = "Mon";
const tue = "The";
const wen = "Wen";
const thu = "Thu";
const fri = "Fri";
const bulabula = "Yes i am"
console.log(monday, tue, wen, thu, fri);

const dayOfWeek = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun", true, bulabula];
console.log(dayOfWeek);
*/
//Object: Array와 다른 점은 value를 줄수 있다는 점
//무언가 리스트를 만들고 싶을 때 Array를 쓰기 간단하지만

const inseInfo = {
    name: "Inse",
    age: 27,
    gender: "Male",
    isHandsome: true,
    //우리는 Object 안에 Array를 넣을 수 있다
    favMovies: ["Along the gods", "New World"],
    //Object 안의 Array 안의 Object
    favFood: [
        {
            name: "떡갈비",
            fatty: false
        },
        {
            name: "Pizza",
            fatty: true
        }
    ]
};
console.log(inseInfo);
console.log(inseInfo.favFood[0]);
console.log(inseInfo.favFood[1].fatty);


//Function
/*
    function sayHello(potato, chicken){
        console.log('Hello!', potato, "you have", chicken);
    }
    sayHello("sweetpotato", 15);
*/
    //potato는 외부의 값을 가져오게할 수 있는 기능 필요 없으면 공백값도 가능
    //위의 숫자 15는 parameter chicken이 없으면 표시되지 않음
    //console.log의 log는 console 안에 포함된 함수의 이름임.
    //아래는 같은 방식의 출력값. ``를 ${}를 활용해 String과의 조합이 훨씬 예쁘고 쉬움
/*
    function sayHello(name, age){
        console.log(`Hello ${name} you are ${age} years old`);
    }
    sayHello("sweetpotato", 15);
*/
//Return
/*
    function sayHello(name, age){
        return `Hello ${name} you are ${age} years old`;
    }
    const greetInse = sayHello("sweetpotato", 15);
    console.log(greetInse);

    //return이 console.log상태에선 undefined가 출력됨.
    //greetInse는 sayHello함수의 리턴값(=value값, 출력값)이기 때문
    //즉 74번 줄의 sayHello 함수는 console에 표시됐으나 아래있는 것은 표시안됨
    
    function sayHello(name, age){
        return (`Hello ${name} you are ${age} years old`);
    }
    const inseInfo = sayHello("Inse", 27);
    document.write(inseInfo);//html에 출력함
*/
/*
const calculator = {
    plus: function(a,b){
        return a + b;
    },
    minus: function(a,b){
        return a - b;
    },
    multiply: function(a,b){
        return a * b;
    },
    division: function(a,b){
        return a / b;
    },
    power: function(a,b){
        return a**b
    }
}
const plus = calculator.plus(10,2);
console.log(plus);//12

const minus = calculator.minus(10,2);
console.log(minus);//8

const multiply = calculator.multiply(10,2);
console.log(multiply);//20

const division = calculator.division(10,2);
console.log(division);//5

const power = calculator.power(10,2);
console.log(power);//100

console.log(plus, minus, multiply, division, power)
*/
/*
//document는 CSS의 '#'id의 #역할을 함.
//console.log(document);는 연결된 index.html을 출력함. 그렇기에 아래는 console.log(document.getElementById); 명령과 같음
const title = document.getElementById("title");
console.log(title); //    index.html의 <h1 id="title">This Works!</h1> 라인을 출력함

//DOM (document object module): 위의 내용은 JS가 html의 모든 내용을 object화 시키는 것을 보여줌

//console.error("Fuck"); 이런 것도 있다

title.innerHTML = "Hi From JS";//html의 <h1 id=title> "~"</h1>의 string이 "Hi From JS"로 바뀜.
console.dir(title);//title을 활용해 어떤 명령을 내릴 수 있는지 모두 출력해줌
title.style.color = 'red';
document.title = "My Page";//이 title은 html 문서 내의 title tag(not id)를 바꾼 것임.
//document.querySelector("#title"):html내의 #값 title을 선택한단 뜻
*/
/*
function handleResize(event){
    console.log(envent);
    console.log("I have bee resized");
}
//window.addEventListener("resize", handleResize()); handleResize()는 함수바 바로 호출되는 것. window가 변하지 않아도 실행됨
window.addEventListener("resize", handleResize)//window가 변해야만 실행됨
*/
/*
function handleResize(event){
    console.log(event);
}
window.addEventListener("resize", handleResize);
//위에 event를 넣은 결과 resize 될때마다 어떠한 값들로 event가 발생했는지 출력됨
//이것을 이용하면 원하는 값을 바꾸고 싶을 때 무엇을 어떤 명령어로 건드려야 하는지 알 수 있음
*/
/* If else 조건문
if (true){ :true는 항상 참 값을 입력해야 한다
    block
} else {
    block: 그냥 아무 말이나 쓰면 된다는 표시
}
*/
/*
if ('10'===10){ //string과 number는 취급이 다름
    console.log('Hi');
} else if(20 > 5 && "10" === "10"){ //같은 string이기에 이 값이 출력됨. if를 또 넣을 수 있음
    console.log('Yes!'); //&&은 and ||은 or의 뜻. ||은 \위에 있는 표시임
} else {
    console.log('Ho');//위의 모든 것이 아닐 경우 이 값이 출력 됨
}

const age = prompt("How old are you?");

if (age >= 18 && age <=20){  //18~20까지는 아래 값 출력
    console.log("You can stock! but you should not");
} else if (age >20){  // 20초과는 아래 값 출력
    console.log("Go ahead!");
} else {   //18 미만은 아래 값 출력
    console.log("Too young");
}
*/