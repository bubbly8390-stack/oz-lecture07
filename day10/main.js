// DAY 10 실습 01 — 콘솔과 파일에서 변수 다뤄 보기
console.log("main.js가 연결됐습니다");

console.log("1. 첫번째 줄");
console.log("2. 두번째 줄");
console.log("3. 세번째 줄");

// let은 다시 담을 수 있다(재할당 가능)
let price = 200;
console.log(price);

price = 300;
console.log(price);

// 선언하고 할당하고 초기값
let score; // 선언
console.log(score); // undefined
score = 100; // 할당 : 값을 넣는다.
console.log(score); // 100

let level = 1; // 초기화 : 선언과 동시에 할당

// 실습01
let city = "서울";
city = "부산";
console.log("도시 :", city);

// const : 다시 담을 수 없다. (상수)
const birthYear = 1998;
console.log("태어난 해 :", birthYear);

// birthYear = 2000; // 재할당 불가
// let city = "대구";  // 재선언 불가

let a = "안녕하세요.\n오늘은 날씨가 좋네요.\n배도부르고요.";
let b = '안녕하세요.
오늘은 날씨가 좋네요.
배도 부르고요.';

// boolean type
let isMember = true;
let hasCoupon = false;
console.log(typeof isMember); // boolean
console.log("회원인가요?", isMember);
console.log("쿠폰이 있나요?", hasCoupon);

console.log(10 < 20); // true
console.log(10 > 20); // false

const userScore = 80;
const passScore = 60;
let isPass = userScore > passScore; // let isPass = 80 > 60;

console.log("합격했나요?", isPass);