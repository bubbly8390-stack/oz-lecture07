// DAY 13 실습 01 — 가게 대기 줄 관리하기

// 1. 대기 줄 — 먼저 온 손님이 앞(0번)에 섭니다
const waiting = ["김오즈", "이코딩", "박자바"];
console.log("처음 대기 줄", waiting);

// 2. 손님 두 명이 새로 와서 맨 뒤에 섭니다 — push
waiting.push("최리액", "정노드");
console.log(`대기 ${waiting.length}명`);

// 3. 맨 앞 손님이 입장합니다 — shift
const first = waiting.shift();
console.log(`${first}님 입장`);
// console.log(`${waiting.shift()}님 입장`);

// 4. 예약 손님은 맨 앞에 세웁니다 — unshift
waiting.unshift("한예약");

// 5. 박자바님이 줄을 떠납니다 — 자리를 찾아 splice
const index = waiting.indexOf("박자바");
waiting.splice(index, 1);

// 6. 다음 세 분만 따로 안내합니다 — slice (줄은 그대로)
const nextThree = waiting.slice(0, 3);
console.log("다음 세 분", nextThree);

// 7. 남은 줄을 번호와 함께 출력합니다
for (let i = 0; i < waiting.length; i++) {
  console.log(`${i + 1}번 ${waiting[i]}`);
}