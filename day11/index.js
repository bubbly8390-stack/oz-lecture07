// DAY 11 Javascript 연산자와 조건문
console.log("index.js가 연결됐습니다!!!");

// 단항연산자
let count = 10;
count++;
console.log(count); // 11

count--;
console.log(count); // 10

// 단항연산자의 순서
let num = 10;
let a = num++; // a = 10, num = 11
console.log("a :", a);
console.log("num :", num);

let num2 = 10;
let b = ++num2; // num2 = 11, b = 11
console.log("b :", b);
console.log("num2 :", num2);

// 값 합산 +=
let total = 0;
total += 12000; // 티셔츠
total += 3000; // 배송비
console.log(total); // 15000

let message = "안녕";
message += "하세요";
console.log(message); // 안녕하세요

// 비교연산자
console.log(10 == "10"); // true, 값만 비교
console.log(10 === "10"); // false, 값과 타입 모두 비교
console.log(0 == ""); // true, 값만 비교
console.log(0 === ""); // false, 값과 타입 모두 비교
console.log(null == undefined); // true, 값만 비교
console.log(null === undefined); // false, 값과 타입 모두 비교

// 논리연산자
const age = 25;
const hasTicket = true;

console.log(age >= 20 && hasTicket); // true, 두 조건 모두 true
console.log(age < 20 || hasTicket); // true, 두 조건 중 하나만 true
console.log(!hasTicket); // false, 뒤집기

// 괄호로 묶는 범위에 따라 결과가 다름
console.log(!true && false); // false,
console.log(!(true && false)); // true,

console.log(!age > 20, hasTicket);
console.log("age : ", age);

// 조건문
const numIf = 5; // => 4로 바꿔보세요
if (numIf % 2 === 0) {
  console.log("짝수입니다.");
} else {
  console.log("홀수입니다.");
}

const numIf2 = 0;
if (numIf2 > 0) {
  console.log("양수입니다.");
} else if (numIf2 < 0) {
  console.log("음수입니다.");
} else {
  console.log("0입니다.");
}
const score = 95;
if (score >= 90 && score <= 100) {
  console.log("A학점입니다.");
}

const day = "토";
if (day === "토" || day === "일") {
  console.log("주말입니다.");
}

// 중첩 if문
const isLoggedIn = true;
const role = "admin";
if (isLoggedIn) {
  console.log("로그인 O");
  if (role === "admin") {
    console.log("관리자 페이지로 이동");
  }
} else {
  console.log("로그인 하기");
}

// switch문
cost food = "사과";
switch (food) {
    case "사과":
        console.log("과일");
        break;
        case "당근":
            console.log("채소");
            break;
        dafault:
            console.log("과일도 채소도 아닙니다.");
}

// 삼항연산자
let result;
let scoreThird = 55; // => 75로 바꿔보세요

// if로 표현하면
if (scoreThird >= 60) {
  result = "합격";
} else {
  result = "불합격";
}
console.log(result);

// 삼항연산자로 표현하면
result = scoreThird >= 60 ? "합격" : "불합격";
console.log(result);

// if의 괄호 생략
if (scoreThird >= 90) console.log("A학점입니다.");

if (scoreThird >= 90) {
  console.log("A학점입니다.");
  console.log("축하합니다.");
}

// if의 괄호 생략 시, 한 줄만 실행됨
if (scoreThird >= 90) console.log("A학점입니다.");
console.log("축하합니다.");

