// 바꿔 가며 확인할 값
const saving = 50000;    // 한 달에 모으는 돈
const goal = 150000;     // 목표 금액

// 1. 목표 금액까지 몇 달이 걸리는지 돌려주는 함수 — while
function monthsToGoal(monthly, target) {
  let saved = 0;
  let months = 0;

  while (saved < target) {
    saved += monthly;
    months++;
  }

  return months;
}

// 2. 1월부터 3월까지 모이는 돈을 출력하는 함수 — for
const printPlan = function (monthly) {
  for (let month = 1; month <= 3; month++) {
    console.log(`${month}월 : ${monthly * month}원`);
  }
};

// 3. 1년 동안 모이는 돈 — 화살표 함수, 인수를 빠뜨리면 30000
const yearTotal = (monthly = 30000) => monthly * 12;

// 4. 모은 돈이 처음으로 target 이상이 되는 달 — 찾으면 멈춤
function firstMonthOver(monthly, target) {
  for (let month = 1; month <= 12; month++) {
    if (monthly * month >= target) {
      console.log(`${month}월에 처음으로 ${target}원 이상 (${monthly * month}원)`);
      break;
    }
  }
}

const months = monthsToGoal(saving, goal);

console.log(`목표 ${goal}원까지 ${months}개월`);
printPlan(saving);
console.log(`1년이면 ${yearTotal(saving)}원`);
firstMonthOver(saving, 100000);