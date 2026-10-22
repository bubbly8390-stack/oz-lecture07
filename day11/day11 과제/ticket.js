// 바꿔 가며 확인할 값
const age = 15;
const day = "수";          // "월" ~ "일"
const isMember = true;


// 1. 나이에 따라 기본 요금 — 어린 나이부터 차례로
let price;

if (age < 13) {
  price = 20000;

} else if (age < 19) {
  price = 30000;

} else {
  price = 46000;
}


// 2. 토요일이나 일요일이면 주말
const isWeekend = day === "토" || day === "일";


// 3. 평일에 온 회원은 5000원 할인
if (!isWeekend && isMember) {
  price -= 5000;
}


// 4. 요일마다 안내 문구
let notice;

switch (day) {

  case "토":
  case "일":
    notice = "주말에는 대기 줄이 깁니다";
    break;

  default:
    notice = "평일에는 여유롭게 즐길 수 있습니다";
}


// 5. 주말인지 평일인지 한 단어로
const dayType = isWeekend ? "주말" : "평일";


console.log(`나이 ${age}세 · ${day}요일(${dayType}) · 회원 ${isMember}`);

console.log(`입장료 ${price}원`);

console.log(notice);