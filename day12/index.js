// DAY 12 JavaScript 반복문과 함수
console.log("index.js가 연결됐습니다!!!");

// for 반목문
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for 반복문 밖에 변수 선언
let total = 0;
for (let i = 1; i <== 10; i++) {
    total += i;
}
console.log(toral);

// 구구단 3단 만들기
for (let i = 1; i <= 9; i++) {
    let dan = 3;
    let result = dan * i;
    let message = `${dan} x ${i} = ${result}`;
  console.log(message);
  //   console.log(`3 x ${i} = ${3 * i}`);
}

// 중첩 for 반복문
for (let i = 1; i < 2; i++) {
// => i 초기화를 0으로 바꾸기
    console.log("i 블록 시작");
    console.log("i", i);
    for (let k = 1; k < 2; k++) {
        // => k 초기화를 0으로 바꾸기
        console.log("k 블록 시작");
        console.log("k", k)
        console.log("k 블록 끝");
    }
    console.log("i 블록 끝");
}

//배열 반복
const fruits = ["사과", "바나나", "포도", "딸기"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// while 반복문
let money = 10000;
let cups = 0;
while (money >= 3000) {
  money -= 3000;
  cups++;
}
console.log(`남은 돈: ${money}원, 구매한 컵 수: ${cups}개`);

// break와 continue
for (let i = 1; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

for (let i = 1; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    continue;
  }
}

// 함수 : 매개변수
function gugudan(dan) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
}
gugudan(9); // 2~9 숫자 바꿔보기

// 매개변수 여러개 및 기본값
function intoduce(name, age = "나이불명") {
  console.log(`안녕하세요. ${name} (${age})`);
}
intoduce("홍길동", 20);
intoduce("홍길동");
intoduce("홍길동", 20, "서울시"); // age 이후 매개변수는 무시됨

// return 반환값
function sum(a, b) {
  let result = a + b;
  return result; // 부른 곳으로 반환
}

let answer = sum(10, 20); // 돌려받은 30을 담음
console.log(answer);

// console.log(result); // 스코프 차이로 레퍼런스 오류 발생

// return을 만나면 함수는 종료됨
function sumEarlyReturn(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return;
  }
  return num1 + num2;
}
const answer2 = sumEarlyReturn(10, 20); // 인수를 문자열 "10"으로 변경
console.log("answer2", answer2);

// 화살표함수 정의
const sumArrow = (num1, num2) => num1 + num2;
const answer3 = sumArrow(10, 20);
console.log("answer3", answer3);
